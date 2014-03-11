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
      index: -1,

      fromLang: '',
      fromText: '',
      fromSideTranslated: '',

      toLang: '',
      toText: '',
      toSideTranslated: ''
    },

  });
});
