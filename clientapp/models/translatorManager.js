var HumanModel = require('human-model');
var TransResult = require('./transResult');
var RSVP = require('rsvp');
RSVP.on('error', function (reason) {
    console.assert(false, reason);
});


module.exports = HumanModel.define({
    props: {
        transPackage: 'object',
        results: 'array',
    },

    prepareResults: function () {
        var transResultArray = [];
        var promise = new RSVP.Promise(function (resolve, reject) {

            // TransPackage Validation
            var transPackage = this.transPackage;
            try {
                transPackage.validate();
            } catch (err) {
                reject(err);
            }

            //get all languages
            var langs = transPackage.langPath.split(',');
            for (var i = 0; i < langs.length - 1; i++) {
                var lang1 = langs[i];
                var lang2 = langs[i + 1];

                var transResult = new TransResult();
                transResult.fromLang = lang1;
                transResult.toLang = lang2;

                transResultArray.push(transResult);
            }

            resolve(transResultArray);
        }.bind(this));
        return promise;
    }
});
