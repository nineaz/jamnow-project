jamApp.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

	// Default route
	$urlRouterProvider.otherwise('/');

	// ROUTES

	$stateProvider
	.state('home',  {
		url: "/",
		templateUrl: "../views/pages/home.html"
	})
	.state('inscription',  {
		url: "/",
		templateUrl: "../views/pages/inscription.html"
	})
	.state('inscription2',  {
		url: "/",
		templateUrl: "../views/pages/inscription2_form.html"
	})
	.state('inscription3',  {
		url: "/",
		templateUrl: "../views/pages/inscription3_confirmation.html"
	});

}]);
