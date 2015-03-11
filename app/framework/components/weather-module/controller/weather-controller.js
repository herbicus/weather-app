angular.module('weatherModule').controller('weatherController', ['$scope', 'weatherService', function($scope, weatherService) {

  var ctrl = this;

  //var query = $('input[name="city-search"]').val();

  //query = query || 'Atlanta';

  //$scope.temperature = Math.round(((item.main.temp - 273.15) * 1.8) + 32) + '°F';

  this.getWeatherData = function(query){

    query = query || 'Atlanta';

    weatherService.getWeatherData(query)
      .then(function(results){
        ctrl.wData = results;
      }, function(error){
        console.log('controller error in getting weather data');
      });

  };

  this.getWeatherData();

  $scope.$watch('myWeatherAppCtrl.searchInput', function(newVal, oldVal){
    if(newVal !== oldVal) {
      console.log('yo ', newVal);
      ctrl.getWeatherData(newVal);
    }

  });

  this.getWeatherDataDaily = function(){

    //query = query || 'Atlanta';

    weatherService.getWeatherDataDaily()
      .then(function(results){
        ctrl.wDailyData = results;
      }, function(error){
        console.log('controller error in getting weather data');
      });

  };

  this.getWeatherDataDaily();

  $scope.$watch('myWeatherAppCtrl.searchInput', function(newVal, oldVal){
    if(newVal !== oldVal) {
      console.log('yo ', newVal);
      ctrl.getWeatherDataDaily(newVal);
    }

  });



}]);
