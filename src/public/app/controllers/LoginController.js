jamApp.controller('LoginController', ['$scope', '$http', 'ApiFactory', 'LoginFactory', function($scope, $http, ApiFactory, LoginFactory){
	
	this.pseudo = "";
	this.password = "";

	this.login = function() {
		var credentials = {
			"username": this.pseudo,
			"password": this.password
		}

		$http.post(ApiFactory.api + 'login', credentials)
		.then(function(res){
			console.log('logged in bro !');
			LoginFactory.user = res.data;
			console.log(LoginFactory.user);
			LoginFactory.isLogged = true;
		}, function(err) {
			console.log('ONOES');
		});
	};
}]);