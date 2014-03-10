define([
	'backbone',
	'hbs!tmpl/item/view-010-phase_tmpl'
],
function( Backbone, View010PhaseTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a View010Phase ItemView");
		},
		
    	template: View010PhaseTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
