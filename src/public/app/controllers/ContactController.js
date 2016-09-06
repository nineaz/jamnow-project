 jamApp.controller('ContactController', ['$scope', '$http', 'ApiFactory', function($scope, $http, ApiFactory){
 	this.name = '';
 	this.phoneNumber = '';
 	this.email = '';
 	this.message = '';

 	this.response = '';

 	this.sendContactForm = function() {

 		var contactForm = {
 			name: this.name,
 			phoneNumber: this.phoneNumber,
 			email: this.email,
 			message: this.message
 		};

 		// contactForm = JSON.stringify(contactForm);

 		$http.post(ApiFactory.api+'contacts', contactForm)
 		.then(function(response){
 			this.response = 'omg you did it !';
 			console.log(this.response);
 		}, function(err) {
 			this.response = 'ONOES';
 			console.log(this.response);
 		});
 	};


 }]);
