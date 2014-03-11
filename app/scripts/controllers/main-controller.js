define([
	'backbone',
  'communicator',
  'views/item/view-010-input',
  'views/item/view-020-path-select',
  'views/item/view-030-result',
  'models/trans-model'
],
function( 
  Backbone,
  Communicator,
  InputView,
  PathView,
  ResultView,
  TransModel
  ) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function( options ) {
      Communicator.mediator.on('goto', this.changeView, this);
      Communicator.mediator.on('translation:start', this.translationStart, this);

      this.mainRegion = options.mainRegion;

      this.trans = new TransModel();
        
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
        model: this.trans
      });

      this.mainRegion.show(view);
    },

    goPathView: function() {
      var view = new PathView({
        model: this.trans
      });

      this.mainRegion.show(view);
    },

    goResultView: function() {
      var view = new ResultView({
        model: this.trans
      });

      this.mainRegion.show(view);
    },

    translationStart: function(transModel) {
      var text = transModel.get('text');
      var originLang = transModel.get('destLang');
      var destLang = transModel.get('destLang');

      $.ajax({
        type: 'GET',
        url: '/api/translate/' + text + '/' + originLang + '/' + destLang,
      })
      .done(function( result ) {
        Communicator.mediator.trigger('translation:result', result);
      });
    }

	});

});
