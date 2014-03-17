/*global app, me, $*/
var Backbone = require('backbone');

var TranslatePage = require('./pages/translate');
var AboutPage = require('./pages/about');


module.exports = Backbone.Router.extend({
    routes: {
        '': 'translate',
        'translate': 'translate',
        'about': 'about'
    },

    // ------- ROUTE HANDLERS ---------
    translate: function () {
        app.renderPage(new TranslatePage({
            model: app.transPackage
        }));
    },

    about: function () {
        app.renderPage(new AboutPage({
            model: me
        }));
    },
});
