define([
	'backbone'
],
function( Backbone ) {
  'use strict';

	/* Return a model class definition */
	return Backbone.Model.extend({
		initialize: function() {
		},

		defaults: {
      originalLang: '',
      originalText: '',
      langsPath: [],
      textItens: []
    },

  });
});
