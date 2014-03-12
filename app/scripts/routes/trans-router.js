/*global define*/

define([
    'jquery',
    'backbone',
    '../views/translator',
    '../models/transPackage',
    '../controller/transController'
], function ($, Backbone, TranslatorView, TransPackage, TransController) {
    'use strict';

    var TransRouter = Backbone.Router.extend({
        routes: {
          '': 'home'
        },

        home: function() {
            var transController = new TransController();
            transController.renderHome();
        }

    });



    return TransRouter;
});
