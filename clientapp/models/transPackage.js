var HumanModel = require('human-model');

module.exports = HumanModel.define({
    props: {
        id: 'number',
        sentence: ['string', true, 'Quero ir pra Europa, mas só tenho dinheiro pra ir pra casa da minha mãe...'],
        langPath: ['string', true, 'pt,en'],
        result: ['string', true, '']
    }
});
