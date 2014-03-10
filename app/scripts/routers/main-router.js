define([
	'backbone'
],
function(Backbone){
    'use strict';

  return Backbone.Marionette.AppRouter.extend({
    /* Backbone routes hash */
    appRoutes: {
      '': 'goInputView',
      'input': 'goInputView',
      'path': 'goPathView',
      'result': 'goResultView',
    }
  });

});
