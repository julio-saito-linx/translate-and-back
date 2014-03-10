define([
	'backbone',
	'hbs!tmpl/item/view-020-path-select_tmpl'
],
function( Backbone, View020PathSelectTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a View020PathSelect ItemView");
		},
		
    	template: View020PathSelectTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
