var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){

    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController',
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController',
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController',
    })
});

myApp.service('nameService', function(){
    var self = this
    this.name = 'Uche Nnadi';
    this.namelength = function(){
    
        return self.name.length;
    }

});
myApp.controller('mainController', ['$scope', '$filter', '$log', 'nameService', function($scope, $filter, $log, nameService){
 
    $scope.name = nameService.name;
    
    $scope.$watch('name', function(){
        nameService.name = $scope.name
    });
    
    $log.log(nameService.name);
    $log.log(nameService.namelength());

}]);

myApp.controller('secondController', ['$scope', '$location', '$log', '$routeParams', 'nameService', '$routeParams', function($scope, $location, $log, $routeParams, nameService){
                                      
    $scope.num = $routeParams.num || 1;
    
    $scope.name = nameService.name;
    
     $scope.$watch('name', function(){
        nameService.name = $scope.name
    });
    
    
}]);