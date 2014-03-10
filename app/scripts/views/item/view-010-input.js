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
      input: 'input[type="text"]'
    },

    /* Ui events hash */
    events: {
      'click button': 'goNext'
    },

    goNext: function() {
      this.model.set('text', this.ui.input.val());
      Communicator.mediator.trigger('goto', 'path');
    },

    /* on render callback */
    onShow: function() {
      this.ui.input.val(this.model.get('text'));
    }
  });

});
