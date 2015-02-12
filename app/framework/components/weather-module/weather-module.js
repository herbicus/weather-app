angular.module('weatherModule', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('weatherModule').config(function($stateProvider) {

  $stateProvider.state('myWeatherApp', {
    url:'/myWeatherApp',
    templateUrl: 'app/framework/components//weather-module/view/weather-view.html',
    controller: 'weatherController',
    controllerAs: 'myWeatherAppCtrl'
  });
    /* Add New States Above */

});
