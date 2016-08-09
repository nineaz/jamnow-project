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
	})
	.state('inscription',  {
		url: "/inscription",
		templateUrl: "../views/pages/inscription.html"
	})
	.state('inscription2',  {
		url: "/inscription-form",
		templateUrl: "../views/pages/inscription2_form.html"
	})
	.state('inscription3',  {
		url: "/inscription-confirmation",
		templateUrl: "../views/pages/inscription3_confirmation.html"
	});

}]);
