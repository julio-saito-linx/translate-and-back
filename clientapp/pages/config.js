/*global $, app*/
'use strict';

var PageView = require('./base');
var templates = require('../templates');

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
        this.callTranslate(app.transPackage.sentence, langs[0], langs[1]);
    },

    callTranslate: function (text, from, to) {
        $.ajax({
            type: 'GET',
            url: '/api/translate/' + text + '/' + from + '/' + to,
        })
        .done(function (result) {
            console.log(result);
            this.model.result = result;
        }.bind(this));
    },

});
