'use strict';

angular.module('myApp.Rotas', ['ngRoute', 'myApp.Rotas.Controllers'])
.config(['$routeProvider', rotasConfig]);

// Config
function rotasConfig($routeProvider){
  $routeProvider
    .when('/rotas', {
      templateUrl: 'modules/rotas/views/list.html',
      controller: 'RotasListController'
    })
    .when('/rotas/create', {
      templateUrl: 'modules/rotas/views/create.html',
      controller: 'RotasCreateController'
    })
    .when('/rotas/gerarCatalogo', {
      templateUrl: 'modules/rotas/views/gerarCatalogo.html',
      controller: 'RotasGerarCatalogoController'
    })
    .when('/rotas/gerarMenuConfig', {
      templateUrl: 'modules/rotas/views/gerarMenuConfig.html',
      controller: 'RotasGerarMenuConfigController'
    })    
    .when('/rotas/:id', {
      templateUrl: 'modules/rotas/views/get.html',
      controller: 'RotasGetController'
    })
    .when('/rotas/:id/edit', {
      templateUrl: 'modules/rotas/views/edit.html',
      controller: 'RotasEditController'
    })
    ;
}
rotasConfig['$inject'] = ['$routeProvider'];
