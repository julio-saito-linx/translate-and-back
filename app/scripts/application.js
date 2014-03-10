define([
	'backbone',
	'communicator',
	'views/item/view-menu'
],

function( Backbone, Communicator, MenuView ) {
    'use strict';

	var App = new Backbone.Marionette.Application();

	/* Add application regions here */
	App.addRegions({
		menu: '#menu',
		main: '#main'
	});

	/* Add initializers here */
	App.addInitializer( function () {
		var menuView = new MenuView();
		App.menu.show(menuView);

		Communicator.mediator.trigger("APP:START");
	});

	return App;
});
