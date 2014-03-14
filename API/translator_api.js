'use strict';

var TranslateMicrosoft = require('./translate_microsoft');

exports.translate = function (req, res) {
    var text = req.params.text;
    var lang1 = req.params.lang1;
    var lang2 = req.params.lang2;

    var translateMicrosoft = new TranslateMicrosoft();
    translateMicrosoft.getAccessToken()
    .then(function (accessToken) {
        
        translateMicrosoft.translate(accessToken, text, lang1, lang2)
        .then(function (result) {
            
            // parse result to remove the XML part
            //'<string xmlns="http://schemas.microsoft.com/2003/10/Serialization/">I\'m going to the fair</string>'
            var partialResult = result.substring(result.indexOf('>') + 1);
            var finalResult = partialResult.substring(0, partialResult.indexOf('<'));

            res.send(finalResult);
        });

    });
};