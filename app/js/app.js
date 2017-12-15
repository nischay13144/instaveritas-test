angular.module('app', ['ngRoute', 'ngResource', 'search.controller', 'search.service','show.controller','show.service'])
  .filter('trustHtml', function($sce) {return function(text){ return $sce.trustAsHtml(text);}})
  .filter('trustHtmlString', function($sce) {return function(String){ return $sce.trustAsHtml(String);}})
  .config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {

      $routeProvider
        .when('/', {
          templateUrl: 'views/search.html',
          controller: 'SearchController'
        })
        .when('/shows/:id', {
          templateUrl: 'views/showdetail.html',
          controller: 'ShowController',
          resolve: {
            show: function($route, ShowService){
              return ShowService.get({id: $route.current.params.id})
            }
          }
        })
        .when('/shows/:id/cast', {
          templateUrl: 'views/showcast.html',
          controller: 'ShowController',
          resolve: {
            show: function($route, ShowService){
              return ShowService.get({id: $route.current.params.name})
            }
          }
        })
        .otherwise({
          redirectTo: '/'
        });

      $locationProvider.html5Mode(true);
  }]);
