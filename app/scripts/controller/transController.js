/*global define*/

define([
    'jquery',
    'backbone',
    'underscore',
    '../views/translator',
    '../views/menu',
    '../models/transPackage'
], function (
    $,
    Backbone,
    _,
    TranslatorView,
    MenuView,
    TransPackage
){
    'use strict';

    var TransController = function() {};
    _.extend(TransController.prototype, {

        renderHome: function() {
            //translations
            var labels_ptBR = {
                title: 'Traduz e Volta',
                type_your_phrase_here: 'Digite um texto em português'
            }

            //model
            var transPackage = new TransPackage();
            transPackage.set('labels', labels_ptBR)

            //menu view
            var menuView = new MenuView({
                model: transPackage
            });
            menuView.render();
            $('.trans-menu').html(menuView.el)

            //main view
            var translatorView = new TranslatorView({
                model: transPackage
            });

            translatorView.render();
            $('.trans-main').html(translatorView.el)
        }

    });

    return TransController;
});
