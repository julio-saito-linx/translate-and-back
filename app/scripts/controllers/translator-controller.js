define([
	'backbone',
  'communicator'
],
function( 
  Backbone,
  Communicator
  ) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function( options ) {
      Communicator.mediator.on('translation:start', this.translationStart, this);
		},

    translationStart: function(transPackage) {
      var text = transPackage.get('originalText');
      var langs = transPackage.get('langsPath');

      if(langs.length <= 1){
        // FINISH
        Communicator.mediator.trigger('translation:results:all', transPackage);
        return;
      }

      //take off the first
      var originLang = langs.shift();
      //preservs the second (now is the first)
      var destLang = langs[0];
      //save on model again
      var langs = transPackage.set('langs', langs);

      $.ajax({
        type: 'GET',
        url: '/api/translate/' + text + '/' + originLang + '/' + destLang,
      })
      .done(function( result ) {
        //result
        transPackage.set('text', result);

        //results
        var results = transPackage.get('results');
        results.push(result);
        transPackage.set('results', results);

        Communicator.mediator.trigger('translation:result', transPackage);
        this.translationStart(transPackage);
      }.bind(this));
    }

	});

});
