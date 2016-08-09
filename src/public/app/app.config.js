jamApp.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

	// Default route
	$urlRouterProvider.otherwise('/');

	// ROUTES

	$stateProvider
	.state('home',  {
		url: "/",
		templateUrl: "../views/pages/home.html"
	})
	.state('legal',  {
		url: "/legal",
		templateUrl: "../views/pages/legal.html"
	})
	.state('profil',  {
		url: "/profil",
		templateUrl: "../views/pages/profil.html"
	})
	.state('confidentialite',  {
		url: "/confidentialite",
		templateUrl: "../views/pages/confidentialite.html"
	})
	.state('contact',  {
		url: "/contact",
		templateUrl: "../views/pages/contact.html"
	});

}]);
