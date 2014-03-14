/*global app, me, $*/
var Backbone = require('backbone');

var Config = require('./pages/config');
var Result = require('./pages/result');

var HomePage = require('./pages/home');
var CollectionDemo = require('./pages/collectionDemo');
var InfoPage = require('./pages/info');


module.exports = Backbone.Router.extend({
    routes: {
        '': 'config',
        'config': 'config',
        'result': 'result',
        'collections': 'collectionDemo',
        'info': 'info'
    },

    // ------- ROUTE HANDLERS ---------
    config: function () {
        app.renderPage(new Config({
            model: me
        }));
    },

    result: function () {
        app.renderPage(new Result({
            model: me
        }));
    },

    home: function () {
        app.renderPage(new HomePage({
            model: me
        }));
    },

    collectionDemo: function () {
        app.renderPage(new CollectionDemo({
            model: me,
            collection: app.people
        }));
    },

    info: function () {
        app.renderPage(new InfoPage({
            model: me
        }));
    }
});
