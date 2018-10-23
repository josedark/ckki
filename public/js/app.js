var app = angular.module( 'appcontrol',['ngRoute']);


app.controller('mainCtrl', ['$scope','$http', function($scope,$http){

$scope.setActive = function(Opcion){

		$scope.mInicio      = "";
		$scope.mperfil      = "";
		$scope.musuario        = "";
		$scope.mlista_usuario    = "";

		$scope[Opcion] = "active";
}
  



}]);



app.config( function( $routeProvider ){

$routeProvider
   
  .when('/',{
  	       templateUrl: '/parciales/home.html',
        controller: 'inicioCtrl'
     })
 
  .when('/perfil',{
        templateUrl: '/parciales/usuario/perfil.html',
        controller: 'perfilCtrl'
    })
   .when('/usuario',{
        templateUrl: '/parciales/usuario/usuario_perfil.html',
        controller: 'usuarioCtrl'
    })
   .when('/lista_usuario',{
        templateUrl: '/parciales/usuario/lista_usuario.html',
        controller: 'lista_usuarioCtrl'
    });

   
 





 






});






































app.controller('usuarioCtrL',function($scope){

$scope.profesor = profesorData;
	$scope.editando = {};


	$scope.EditarProfesor = function(){

		angular.copy( $scope.profesor, $scope.editando );

	}

	$scope.GuardarCambios = function(){
		angular.copy( $scope.editando, $scope.profesor );
	}

	$scope.CancelarCambios = function(){

		$scope.editando = {};

	}









});


var profesorData = {
	nombre: "Juan Carlos Pineda",
	bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
	edad: 47,
	foto: "/img/avatar.png"
}













