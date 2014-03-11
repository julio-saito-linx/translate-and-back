define([
  'backbone',
  'hbs!tmpl/item/view-menu_tmpl',
  'communicator'
],
function( Backbone, ViewMenuTmpl, Communicator  ) {
  'use strict';

  /* Return a ItemView class definition */
  return Backbone.Marionette.ItemView.extend({

    initialize: function() {
      Communicator.mediator.on('view:show', this.setItemMenuActive, this);
    },
    
    template: ViewMenuTmpl,

    /* ui selector cache */
    ui: {
      liInput:  '#input',
      liPath:   '#path',
      liResult: '#result',
    },

    /* Ui events hash */
    events: {},

    setItemMenuActive: function(id) {
      this.$el.find('li').removeClass('active');
      this.$el.find('[href="#'+ id +'"]').parent().addClass('active');
    },

    /* on render callback */
    onRender: function() {}
  });

});
