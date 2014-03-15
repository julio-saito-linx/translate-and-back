/*global app*/
'use strict';

var PageView = require('./base');
var templates = require('../templates');
var TranslatorManager = require('../models/translatorManager');

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
        
        translatorManager.translateAll().then(function (result) {
            console.log(result);
            this.model.result = result[0].toSentence;
        }.bind(this));
    },



});
