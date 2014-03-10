define([
	'backbone',
	'hbs!tmpl/item/view-menu_tmpl'
],
function( Backbone, ViewMenuTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a ViewMenu ItemView");
		},
		
    	template: ViewMenuTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
