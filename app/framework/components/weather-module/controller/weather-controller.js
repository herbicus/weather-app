angular.module('weatherModule').controller('weatherController', ['$scope', 'weatherService', function($scope, weatherService) {

  var ctrl = this;

  //var query = $('input[name="city-search"]').val();

  //query = query || 'Atlanta';

  this.getWeatherData = function(query){

    var query = query || 'Atlanta';

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



}]);
