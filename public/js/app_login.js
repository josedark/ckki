var app = angular.module( 'loginApp',['login.loginService']);


app.controller('mainCtrl', ['$scope','$http', function( $scope,$http ){
	

	$scope.invalido = false;
	$scope.cargando = false;
	$scope.mensaje  = "";

	$scope.datos = {};

	$scope.ingresar = function( datos ){
		

		if( datos.usuario.length < 3 ){
			$scope.invalido = true;
			$scope.mensaje  = 'Ingrese su usuario';
			return;

		}else if( datos.contrasena.length < 3 ) {
			$scope.invalido = true;
			$scope.mensaje  = 'Ingrese su contraseña';
			return;
		}
         
		$scope.invalido = false;
		$scope.cargando = true;

		$http.post('/users/login',datos)
          .then(function(response) {

          	if( response.data.err ){

				$scope.invalido = true;
				$scope.cargando = false;
				$scope.mensaje  = response.data.mensaje;
			}else{

				
				 window.location = response.data.url;
				

			}
     


           
         })
          .catch(function(response) {
         console.error('Gists error', response.status, response.data);
         return;
         })
          .finally(function() {
          	console.log("finally finished gists");
          });
      


	}



}]);






