angular.module('myWeatherApp', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'weatherModule']);

angular.module('myWeatherApp').config(function ($stateProvider, $urlRouterProvider) {

  /* Add New States Above */
  $urlRouterProvider.otherwise('/myWeatherApp');

});

angular.module('myWeatherApp').run(function ($rootScope) {

  $rootScope.safeApply = function (fn) {
    var phase = $rootScope.$$phase;
    if (phase === '$apply' || phase === '$digest') {
      if (fn && (typeof(fn) === 'function')) {
        fn();
      }
    } else {
      this.$apply(fn);
    }
  };

});
