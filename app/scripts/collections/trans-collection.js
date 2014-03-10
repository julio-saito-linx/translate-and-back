define([
	'backbone',
	'models/trans-model'
],
function( Backbone, TransModel ) {
    'use strict';

	/* Return a collection class definition */
	return Backbone.Collection.extend({
		initialize: function() {
			console.log("initialize a TransCollection collection");
		},

		model: TransModel
		
	});
});
