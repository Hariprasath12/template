var app=angular.module("mysite",['ui.router']);
app.controller('name', ['$scope', function($scope){
	$scope.name="hari";
}]);
app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    
    .state('index', {
      url: "/index",
     templateUrl:'temp/tech.html'
    })
    .state('contact', {
      url: "/contact",
      templateUrl:'temp/contact.html'
    })
    .state('myskill', {
      url: "/myskill",
      templateUrl:'temp/myskill.html'
    })

  $urlRouterProvider.otherwise('index');
}]);