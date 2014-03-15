var HumanModel = require('human-model');
var TransResult = require('./transResult');
var RSVP = require('rsvp');
RSVP.on('error', function (reason) {
    console.assert(false, reason);
});


module.exports = HumanModel.define({
    props: {
        transPackage: 'object',
        transResultArray: 'array',
        results: 'array'
    },

    prepareResults: function () {
        this.transResultArray = [];
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

                if (i === 0) {
                    transResult.fromSentence = transPackage.sentence;
                }

                this.transResultArray.push(transResult);
            }

            resolve(this.transResultArray);
        }.bind(this));
        return promise;
    },

    translateAll: function (translatorController) {
        var promise = new RSVP.Promise(function (resolve, reject) {

            var promises = this.transResultArray.map(function (transResult) {
                return this.translateNext(translatorController, transResult);
            }.bind(this));

            RSVP.all(promises).then(function (allTransResults) {
                resolve(allTransResults);
            }).catch(function (reason) {
                reject(reason);
            });

        }.bind(this));
        return promise;
    },

    translateNext: function (translatorController, transResult) {
        var promise = new RSVP.Promise(function (resolve, reject) {
            // sets "from" equals "to" from previous
            if (transResult.fromSentence === '' && this.results.length > 0) {
                transResult.fromSentence = this.results[this.results.length - 1].toSentence;
            }

            // Call Ajax
            translatorController.callTranslate(
                transResult.fromSentence,
                transResult.fromLang,
                transResult.toLang
            )
            .then(function (result) {
                transResult.toSentence = result;
                resolve(transResult);
            }.bind(this)).catch(function (reason) {
                reject(reason);
            });
        }.bind(this));
        return promise;
    }

});