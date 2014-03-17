/*global app*/
'use strict';

var PageView = require('./base');
var templates = require('../templates');
var TransResultView = require('../views/transResult');
var TranslatorManager = require('../models/translatorManager');
var TranslatorController = require('../controllers/translator');

module.exports = PageView.extend({
    template: templates.pages.translate,
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
        // clear results
        this.$el.find('.results').html('');

        var sentence = this.$el.find('#sentence');
        var langPath = this.$el.find('#langPath');

        app.transPackage.sentence = sentence.val();
        app.transPackage.langPath = langPath.val();

        var translatorManager = new TranslatorManager();
        translatorManager.transPackage = app.transPackage;

        // callback
        translatorManager.translationResultCallback = this.translationReceived.bind(this);

        // start
        translatorManager.prepareResults().then(function () {

            translatorManager.translateAll(new TranslatorController())
            .then(function (results) {
                // all finished
                console.log('all', results.length, 'finished');
            }.bind(this));

        }.bind(this));
    },

    translationReceived: function (transResult) {
        var transResultView = new TransResultView({
            model: transResult
        });

        var jUl = this.$el.find('.results');
        transResultView.render();
        jUl.append(transResultView.el);
        console.log(transResultView);
    }

});
