/*global app*/
'use strict';

var PageView = require('./base');
var templates = require('../templates');
var TranslatorController = require('../controllers/translator');

module.exports = PageView.extend({
    template: templates.pages.config,
    title: 'Translation Config',
    events: {
        'click .translate': 'translate'
    },
    render: function () {
        this.renderAndBind();
    },

    inputBindings: {
        sentence: '#sentence',
        langPath: '#langPath'
    },
    
    translate: function () {
        var sentence = this.$el.find('#sentence');
        var langPath = this.$el.find('#langPath');

        app.transPackage.sentence = sentence.val();
        app.transPackage.langPath = langPath.val();

        var langs = app.transPackage.langPath.split(',');
        
        var translatorController = new TranslatorController();
        translatorController.callTranslate(
            app.transPackage.sentence,
            langs[0],
            langs[1]
        )
        .then(function (result) {
            this.model.result = result;
        }.bind(this));
    },



});
