var HumanModel = require('human-model');

module.exports = HumanModel.define({
    props: {
        id: 'number',
        sentence: ['string', true, 'Veja que chuva mais gostosa. Veja como ela cai na selva.'],
        langPath: ['string', true, 'pt,ja,pt'],
        result: ['string', true, '']
    },

    validate: function () {
        if (this.sentence.length === 0) {
            throw new Error('must have a sentence');
        }
        if (this.langPath.length === 0) {
            throw new Error('must have a langPath');
        }
        
        var langs = this.langPath.split(',');
        if (langs.length < 2) {
            throw new Error('must have at least two langs');
        }

        if (langs.length >= 2) {
            var lastLang;
            for (var i = 0; i < langs.length; i++) {
                if (lastLang === langs[i]) {
                    throw new Error('cannot accept same consecutive lang');
                }
                lastLang = langs[i];
            }
        }

    }
});
