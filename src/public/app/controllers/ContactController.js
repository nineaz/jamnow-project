 jamApp.controller('ContactController', ['$scope', '$http', function($scope, $http){
 	this.name = 'plop';
 	this.phoneNumber = '';
 	this.email = '';
 	this.message = '';

 	this.sendContactForm = function() {
 		
 		var contactForm = {
 			name: this.name,
 			phoneNumber: this.phoneNumber,
 			email: this.email,
 			message: this.message
 		};

 		$http.post('http://localhost:3000/api/contacts');
 	};


 }]);