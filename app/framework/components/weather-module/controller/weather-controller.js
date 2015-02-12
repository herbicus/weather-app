angular.module('weatherModule').controller('weatherController', ['$scope', 'weatherService', function($scope, weatherService) {

  var ctrl = this;

  ctrl.getWeatherData = function(){

    weatherService.getWeatherData()
      .then(function(results){
        ctrl.igData = results.data;
      }, function(error){
        console.log('controller error in getting weather data');
      });

  };

  ctrl.getWeatherData();



}]);
