define([
  'backbone',
  'communicator',
  'hbs!tmpl/item/view-020-path-select_tmpl'
],
function( Backbone, Communicator, View020PathSelectTmpl  ) {
  'use strict';

  /* Return a ItemView class definition */
  return Backbone.Marionette.ItemView.extend({

    initialize: function() {
      console.log('initialize a View020PathSelect ItemView');
    },
    
    template: View020PathSelectTmpl,
      

    /* ui selector cache */
    ui: {
      input: 'input[type="text"]'
    },

    /* Ui events hash */
    events: {
      'click button': 'goNext'
    },

    goNext: function() {
      this.model.set('langs', this.ui.input.val().split(','));
      Communicator.mediator.trigger('translation:start', this.model);
      Communicator.mediator.trigger('goto', 'result');
    },

    /* on render callback */
    onShow: function() {
      this.ui.input.val('pt,en,ja,en,pt');
    }
  });

});
