var mainApp = angular.module('mainApp', ['ui.router']);

mainApp.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('a');
	$stateProvider

		.state('a', {
			url: '/a',
			templateUrl: 'a.html'
		})

		.state('b', {
			url: '/b',
			templateUrl: 'b.html'

		});
});
