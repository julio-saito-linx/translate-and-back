var HumanModel = require('human-model');

module.exports = HumanModel.define({
    props: {
        id: 'number',
        
        fromLang: ['string', true, ''],
        fromSentence: ['string', true, ''],
        
        toLang: ['string', true, ''],
        toSentence: ['string', true, ''],

        sideLang: ['string', true, ''],
        sideSentence: ['string', true, ''],
    }
});
