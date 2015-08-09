'use strict';

angular.module('myApp.Menus', ['ngRoute', 'myApp.Menus.Controllers'])
.config(['$routeProvider', menusConfig]);

// Config
function menusConfig($routeProvider){
  $routeProvider
    .when('/menus', {
      templateUrl: 'modules/menus/views/list.html',
      controller: 'MenusListController'
    })
    .when('/menus/create', {
      templateUrl: 'modules/menus/views/create.html',
      controller: 'MenusCreateController'
    })
    .when('/menus/gerarMenuConfig', {
      templateUrl: 'modules/menus/views/gerarMenuConfig.html',
      controller: 'MenusGerarMenuConfigController'
    })
    .when('/menus/:id', {
      templateUrl: 'modules/menus/views/get.html',
      controller: 'MenusGetController'
    })
    .when('/menus/:id/edit', {
      templateUrl: 'modules/menus/views/edit.html',
      controller: 'MenusEditController'
    })
    ;
}
menusConfig['$inject'] = ['$routeProvider'];
