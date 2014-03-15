/*global app*/
'use strict';

var PageView = require('./base');
var templates = require('../templates');
var TranslatorManager = require('../models/translatorManager');
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

        var translatorManager = new TranslatorManager();
        translatorManager.transPackage = app.transPackage;

        // translatorController will be injected
        var translatorController = new TranslatorController();
        
        translatorManager.prepareResults().then(function () {

            translatorManager.translateAll(translatorController).then(function (results) {
                results.forEach(function (transResult) {
                    console.log("fromSentence: " + transResult.fromSentence);
                    console.log("toSentence: " + transResult.toSentence + "\n");
                });
                
                //this.model.result = result[0].toSentence;
            }.bind(this));

        }.bind(this));
    },



});
