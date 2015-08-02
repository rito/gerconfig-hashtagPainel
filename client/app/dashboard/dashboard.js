'use strict';

angular.module('myApp.dashboard', ['ngRoute'])

.config(['$routeProvider', dashboardConfig])

.controller('DashboardCtrl', [function() {

}]);

function dashboardConfig($routeProvider){
  $routeProvider.when('/dashboard', {
      templateUrl: 'dashboard/dashboard.html',
      controller: 'DashboardCtrl'
    });
}
view1Config['$inject'] = ['$routeProvider'];
