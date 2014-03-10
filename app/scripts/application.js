define([
	'backbone',
	'communicator',
	'views/item/view-menu',
	'controllers/main-controller',
	'routers/main-router'
],

function(
	Backbone,
	Communicator,
	MenuView,
	MainController,
	MainRouter) {

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

		var mainController = new MainController({
			mainRegion: App.main
		});

    //Searcher Router
    var router = new MainRouter({
      controller: mainController
    });

		Communicator.mediator.trigger('APP:START');
	});

  App.on('initialize:after', function () {
    Backbone.history.start();
  });

	return App;
});
