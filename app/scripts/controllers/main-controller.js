define([
	'backbone',
  'communicator',
  'views/item/view-010-input',
  'views/item/view-020-path-select',
  'views/item/view-030-result',
  'models/translation-package',
  './translator-controller'
],
function( 
  Backbone,
  Communicator,
  InputView,
  PathView,
  ResultView,
  TranslationPackage,
  TranslatorController
  ) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function( options ) {
      this.mainRegion = options.mainRegion;

      this.translationPackage = new TranslationPackage();
     
      this.translatorController = new TranslatorController({
        translationPackage: this.translationPackage
      });
        

      Communicator.mediator.on('goto', this.changeView, this);

      this.changeView('input');
    },

    changeView: function(viewName) {
      var view;
      if(viewName === 'input'){
        this.goInputView();
      }
      if(viewName === 'path'){
        this.goPathView();
      }
      if(viewName === 'result'){
        this.goResultView();
      }
    },

    goInputView: function() {
      var view = new InputView({
        model: this.translationPackage
      });
      
      Communicator.mediator.trigger('view:show', 'input');
      this.mainRegion.show(view);
    },

    goPathView: function() {
      var view = new PathView({
        model: this.translationPackage
      });

      Communicator.mediator.trigger('view:show', 'path');
      this.mainRegion.show(view);
    },

    goResultView: function() {
      var view = new ResultView({
        model: this.translationPackage
      });

      Communicator.mediator.trigger('view:show', 'result');
      this.mainRegion.show(view);
    }

	});

});
