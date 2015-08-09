'use strict';

angular.module('myApp.Menus.Controllers', [])
.controller('MenusListController', MenusListController)
.controller('MenusCreateController', MenusCreateController)
.controller('MenusGetController', MenusGetController)
.controller('MenusEditController', MenusEditController)
.controller('MenusGerarMenuConfigController', MenusGerarMenuConfigController)
;

// Controllers
function MenusListController($scope, $http) {
  var httpRequest = {
        url: 'http://localhost:3000/api/menus'
      , method: 'GET'
      }
    ;

  $http(httpRequest)
  .success(function(data) {
    console.log('SUCESSO: ', data);
    $scope.menus = data;
    $scope.msg = 'Listagem feita com sucesso.';
  })
  .error(function(err) {
    console.log('ERRO: ', err);
    $scope.msg = 'Listagem não podde ser feita.';

  });

  $scope.remove = function(menu) {
    var httpRequest = {
          url: 'http://localhost:3000/api/menus/' + menu._id
        , method: 'DELETE'
        }
      ;

    if(confirm('Deseja mesmo remover este menu?')){
      $http(httpRequest)
      .success(function(data) {
        console.log('SUCESSO: ', data);
        var index = $scope.menus.indexOf(menu);
        $scope.menus.splice(index, 1);
        $scope.msg = 'Menu removido com sucesso.';
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


function MenusGerarMenuConfigController($scope, $http) {
  var httpRequest = {
        url: 'http://localhost:3000/api/menus/gerarMenuConfig'
      , method: 'GET'
      }
    ;

  $http(httpRequest)
  .success(function(data) {
    console.log('SUCESSO: ', data);
    $scope.menus = data;
    $scope.msg = 'Listagem feita com sucesso.';
  })
  .error(function(err) {
    console.log('ERRO: ', err);
    $scope.msg = 'Listagem não podde ser feita.';

  });


};




function MenusGetController($scope, $http, $routeParams) {
  var httpRequest = {
        url: 'http://localhost:3000/api/menus/' + $routeParams.id
      , method: 'GET'
      }
    ;

  $http(httpRequest)
  .success(function(data) {
    console.log('SUCESSO: ', data);
    $scope.menu = data;
    $scope.msg = 'Consulta feita com sucesso.';
  })
  .error(function(err) {
    console.log('ERRO: ', err);
    $scope.msg = 'Consulta não podde ser feita.';

  });
};

function MenusCreateController($scope, $http) {
  $scope.create = function(menu) {
    var httpRequest = {
          url: 'http://localhost:3000/api/menus'
        , method: 'POST'
        , data: menu
        }
      ;

    $http(httpRequest)
    .success(function(data) {
      console.log('SUCESSO: ', data);
      //$scope.rotas = [];
      $scope.msg = 'Cadastro de menu feito com sucesso.';
      $scope.id_menu = '';
    })
    .error(function(err) {
      console.log('ERRO: ', err);
      $scope.msg = 'Cadastro da menu não pode ser feito.';

    });
  }
};

function MenusEditController($scope, $http, $routeParams) {
  var httpRequest = {
        url: 'http://localhost:3000/api/menus/' + $routeParams.id
      , method: 'GET'
      }
    ;

  $http(httpRequest)
  .success(function(data) {
    console.log('SUCESSO: ', data);
    $scope.menu = data;
    $scope.msg = 'Consulta feita com sucesso.';
  })
  .error(function(err) {
    console.log('ERRO: ', err);
    $scope.msg = 'Consulta não podde ser feita.';

  });

  $scope.save = function(menu) {
    var httpRequest = {
          url: 'http://localhost:3000/api/menus/' + $routeParams.id
        , method: 'PUT'
        , data: menu
        }
      ;

    $http(httpRequest)
    .success(function(data) {
      console.log('SUCESSO: ', data);
      $scope.msg = 'Alteração de menu feita com sucesso.';
    })
    .error(function(err) {
      console.log('ERRO: ', err);
      $scope.msg = 'Alteração não podde ser feita.';

    });
  }
};

// Injeção de dependências
MenusListController.$inject = ['$scope', '$http'];
MenusGerarCatalogoController.$inject = ['$scope', '$http'];
MenusGerarMenuConfigController.$inject = ['$scope', '$http'];

MenusCreateController.$inject = ['$scope', '$http'];
MenusGetController.$inject = ['$scope', '$http', '$routeParams'];
MenusEditController.$inject = ['$scope', '$http', '$routeParams'];
