var app = angular.module('login.loginService',[]);


app.factory('LoginService', ['$http','$q', function( $http, $q ){


	var self = {

		login: function(){

			var d = $q.defer();

			$http.post('/users/login')
				 .success(function( data ){

				 	console.log( data );
				 	d.resolve( data );


				 });




			return d.promise;

		}



	};

	




	return self;


}])



