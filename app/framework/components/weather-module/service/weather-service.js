angular.module('weatherModule').service('weatherService', ['$http', '$q', function($http, $q) {

  // assumes a node server running on port 9000
  // export PORT=9000
  //var SERVICE_URL_PREFIX = 'http://localhost:9000';
  var weatherURI = 'http://api.openweathermap.org/data/2.5/weather?q=Atlanta,usa/';

  /**
   * function getData
   * service call pattern using angular $q promises
   * resolve returns response, reject returns error
   * @returns {promise.promise|jQuery.promise}
   */
  this.getWeatherData = function() {
    var deferred = $q.defer();
    var url = weatherURI + '&callback=JSON_CALLBACK';

    $http.jsonp(url)
      .success(function (results) {
        var data = results || [];
        deferred.resolve(data);
      })
      .error(function (error) {
        deferred.reject (error);
      });

    return deferred.promise;
  };

}]);
