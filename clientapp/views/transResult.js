var HumanView = require('human-view');
var templates = require('../templates');

module.exports = HumanView.extend({
    template: templates.includes.transResult,
    tagName: 'li',
    textBindings: {
        toLang: '.language',
        toSentence: '.result',
        sideSentence: '.sideResult'
    },
    render: function () {
        this.renderAndBind();
    }
});
