define([
	'backbone',
  'communicator',
	'hbs!tmpl/item/view-030-result_tmpl'
],
function( Backbone, Communicator, View030ResultTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
      Communicator.mediator.on('translation:result', this.renderResult, this);
      Communicator.mediator.on('translation:results:all', this.renderAllResults, this);
		},
		
  	template: View030ResultTmpl,

		/* Ui events hash */
		events: {},

		/* on render callback */
		onShow: function() {
      Communicator.mediator.trigger('translation:results:all', this.model);
    },

    renderResult: function(transModel) {
      var pre = this.$el.find('pre');
      if(pre && transModel){
        pre.append(transModel.get('text'));
        pre.append('\n');
      }
    },

    renderAllResults: function(transModel) {
      var finalText = '';

      //clear all
      var pre = this.$el.find('pre');
      pre.text('');

      // the original
      finalText = transModel.get('langs')[0] + ': ' + transModel.get('originLang');

      //get each result
      var results = transModel.get('results');
      var langs = transModel.get('langs');
      for (var i = 0; i < results.length; i++) {
        finalText += langs[i] + ': ' + results[i];
        finalText += '\n';
      };

      pre.text(finalText);
    }
	});

});
