define([
	'backbone',
  'communicator',
	'hbs!tmpl/item/view-020-path-select_tmpl'
],
function( Backbone, Communicator, View020PathSelectTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a View020PathSelect ItemView");
		},
		
    	template: View020PathSelectTmpl,
        

    	/* ui selector cache */
    	ui: {
        button: 'button'
      },

		/* Ui events hash */
		events: {
      'click button': 'goNext'
    },

    goNext: function() {
      Communicator.mediator.trigger('goto', 'result');
    },

		/* on render callback */
		onRender: function() {}
	});

});
