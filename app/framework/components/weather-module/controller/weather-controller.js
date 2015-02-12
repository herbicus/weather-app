angular.module('weatherModule').controller('weatherController', ['$scope', 'weatherService', function($scope, weatherService) {

  var ctrl = this;

  ctrl.getWeatherData = function(){

    weatherService.getWeatherData()
      .then(function(results){
        ctrl.wData = results.data;
      }, function(error){
        console.log('controller error in getting weather data');
      });

  };

  ctrl.getWeatherData();



}]);
