define([
  'backbone',
  'communicator',
  'hbs!tmpl/item/view-010-input_tmpl'
],
function( Backbone, Communicator, View010InputTmpl  ) {
  'use strict';

  /* Return a ItemView class definition */
  return Backbone.Marionette.ItemView.extend({

    initialize: function() {
      console.log('initialize a View010Input ItemView');
    },

    template: View010InputTmpl,
      

    /* ui selector cache */
    ui: {
      button: 'button'
    },

    /* Ui events hash */
    events: {
      'click button': 'goNext'
    },

    goNext: function() {
      Communicator.mediator.trigger('goto', 'path');
    },

    /* on render callback */
    onRender: function() {}
  });

});
