define([
	'backbone',
	'hbs!tmpl/item/view-030-result_tmpl'
],
function( Backbone, View030ResultTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a View030Result ItemView");
		},
		
    	template: View030ResultTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
