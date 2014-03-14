'use strict';

var PageView = require('./base');
var templates = require('../templates');

module.exports = PageView.extend({
    template: templates.pages.result,
    render: function () {
        this.renderAndBind();
    },

    textBindings: {
        result: 'pre'
    }

});