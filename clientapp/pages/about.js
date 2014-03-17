var PageView = require('./base');
var templates = require('../templates');


module.exports = PageView.extend({
    title: 'About the translator',
    template: templates.pages.about,
    render: function () {
        this.renderAndBind();
    }
});
