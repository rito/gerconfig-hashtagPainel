'use strict';

angular.module('myApp.Rotas.Controllers', [])
.controller('RotasListController', RotasListController)
.controller('RotasCreateController', RotasCreateController)
.controller('RotasGetController', RotasGetController)
.controller('RotasEditController', RotasEditController)
.controller('RotasGerarCatalogoController', RotasGerarCatalogoController)
;

// Controllers
function RotasListController($scope, $http) {
  var httpRequest = {
        url: 'http://localhost:3000/api/rotas'
      , method: 'GET'
      }
    ;

  $http(httpRequest)
  .success(function(data) {
    console.log('SUCESSO: ', data);
    $scope.rotas = data;
    $scope.msg = 'Listagem feita com sucesso.';
  })
  .error(function(err) {
    console.log('ERRO: ', err);
    $scope.msg = 'Listagem não podde ser feita.';

  });

  $scope.remove = function(rota) {
    var httpRequest = {
          url: 'http://localhost:3000/api/rotas/' + rota._id
        , method: 'DELETE'
        }
      ;

    if(confirm('Deseja mesmo remover esta rota?')){
      $http(httpRequest)
      .success(function(data) {
        console.log('SUCESSO: ', data);
        var index = $scope.rotas.indexOf(rota);
        $scope.rotas.splice(index, 1);
        $scope.msg = 'Rota removida com sucesso.';
      })
      .error(function(err) {
        console.log('ERRO: ', err);
        $scope.msg = 'A remoção não podde ser feita.';
      });
    }
    else {
      alert('UFA! Ainda bem!');
    }
  }
};


function RotasGerarCatalogoController($scope, $http) {
  var httpRequest = {
        url: 'http://localhost:3000/api/rotas/gerarCatalogo'
      , method: 'GET'
      }
    ;

  $http(httpRequest)
  .success(function(data) {
    console.log('SUCESSO: ', data);
    $scope.rotas = data;
    $scope.msg = 'Listagem feita com sucesso.';
  })
  .error(function(err) {
    console.log('ERRO: ', err);
    $scope.msg = 'Listagem não podde ser feita.';

  });


};

function RotasGerarMenuConfigController($scope, $http) {
  var httpRequest = {
        url: 'http://localhost:3000/api/rotas/gerarMenuConfig'
      , method: 'GET'
      }
    ;

  $http(httpRequest)
  .success(function(data) {
    console.log('SUCESSO: ', data);
    $scope.rotas = data;
    $scope.msg = 'Listagem feita com sucesso.';
  })
  .error(function(err) {
    console.log('ERRO: ', err);
    $scope.msg = 'Listagem não podde ser feita.';

  });


};




function RotasGetController($scope, $http, $routeParams) {
  var httpRequest = {
        url: 'http://localhost:3000/api/rotas/' + $routeParams.id
      , method: 'GET'
      }
    ;

  $http(httpRequest)
  .success(function(data) {
    console.log('SUCESSO: ', data);
    $scope.rota = data;
    $scope.msg = 'Consulta feita com sucesso.';
  })
  .error(function(err) {
    console.log('ERRO: ', err);
    $scope.msg = 'Consulta não podde ser feita.';

  });
};

function RotasCreateController($scope, $http) {
  $scope.create = function(rota) {
    var httpRequest = {
          url: 'http://localhost:3000/api/rotas'
        , method: 'POST'
        , data: rota
        }
      ;

    $http(httpRequest)
    .success(function(data) {
      console.log('SUCESSO: ', data);
      //$scope.rotas = [];
      $scope.msg = 'Cadastro de rota feito com sucesso.';
      $scope.id_rota = '';
    })
    .error(function(err) {
      console.log('ERRO: ', err);
      $scope.msg = 'Cadastro da rota não pode ser feito.';

    });
  }
};

function RotasEditController($scope, $http, $routeParams) {
  var httpRequest = {
        url: 'http://localhost:3000/api/rotas/' + $routeParams.id
      , method: 'GET'
      }
    ;

  $http(httpRequest)
  .success(function(data) {
    console.log('SUCESSO: ', data);
    $scope.rota = data;
    $scope.msg = 'Consulta feita com sucesso.';
  })
  .error(function(err) {
    console.log('ERRO: ', err);
    $scope.msg = 'Consulta não podde ser feita.';

  });

  $scope.save = function(rota) {
    var httpRequest = {
          url: 'http://localhost:3000/api/rotas/' + $routeParams.id
        , method: 'PUT'
        , data: rota
        }
      ;

    $http(httpRequest)
    .success(function(data) {
      console.log('SUCESSO: ', data);
      $scope.msg = 'Alteração de rota feita com sucesso.';
    })
    .error(function(err) {
      console.log('ERRO: ', err);
      $scope.msg = 'Alteração não podde ser feita.';

    });
  }
};

// Injeção de dependências
RotasListController.$inject = ['$scope', '$http'];
RotasGerarCatalogoController.$inject = ['$scope', '$http'];
RotasGerarMenuConfigController.$inject = ['$scope', '$http'];

RotasCreateController.$inject = ['$scope', '$http'];
RotasGetController.$inject = ['$scope', '$http', '$routeParams'];
RotasEditController.$inject = ['$scope', '$http', '$routeParams'];
