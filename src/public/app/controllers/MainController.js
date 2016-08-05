jamApp.controller('MainController', ['$scope', function($scope) {
	this.coucou = 'recoucou';
	$scope.hello = "hey";
	console.log(this.coucou);
}]);