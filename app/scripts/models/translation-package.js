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
      originalLang: 'pt',
      originalText: '',
      langsPath: [],
      textItens: []
    },

    includeLanguage: function(newLang) {
      var langs = this.get('langsPath');
      langs.push(newLang);
      this.set('langsPath', langs);
    }

  });
});
