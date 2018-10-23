app.controller('lista_usuarioCtrl', ['$scope','$http', function($scope,$http){

 $scope.setActive("mlista_usuario");
 $scope.usuario={};


$http.get('/users/login')
.then(function(response) {
  $scope.usuario=response.data;
})
.catch(function(response) {
  console.error('Gists error', response.status, response.data);
})
.finally(function() {
  console.log("finally finished gists");
});


 




}]);

