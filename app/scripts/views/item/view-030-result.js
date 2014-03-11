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
			console.log("initialize a View030Result ItemView");
      Communicator.mediator.on('translation:result', this.renderResult, this);
		},
		
    	template: View030ResultTmpl,
        

    	/* ui selector cache */
    	ui: {
        pre: 'pre'
      },

		/* Ui events hash */
		events: {},

		/* on render callback */
		onShow: function() {
      Communicator.mediator.trigger('translation:start', this.model);
    },

    renderResult: function(result) {
      this.ui.pre.append(result);
      this.ui.pre.append('\n');
    }
	});

});
