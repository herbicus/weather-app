angular.module('weatherModule').service('weatherService', ['$http', '$q', function($http, $q) {

  // assumes a node server running on port 9000
  // export PORT=9000
  //var SERVICE_URL_PREFIX = 'http://localhost:9000';
  //var query = 'Tampa';

  var query = query || 'Atlanta';



  //var weatherURI = 'http://api.openweathermap.org/data/2.5/weather?q=Atlanta,usa/';

  //var weatherURI = 'http://api.openweathermap.org/data/2.5/weather?q='+ query + ',usa/';
  var weatherURI = 'http://api.openweathermap.org/data/2.5/weather?q='+ query + '&mode=json&units=imperial';

  /**
   * function getData
   * service call pattern using angular $q promises
   * resolve returns response, reject returns error
   * @returns {promise.promise|jQuery.promise}
   */
  this.getWeatherData = function(query) {
    var deferred = $q.defer();
    //var url = weatherURI + '&callback=JSON_CALLBACK';
    var url = weatherURI + '&callback=JSON_CALLBACK';

    $http.jsonp(url)
      .success(function (results) {
        //var data = results || [];
        var data = new Array(results);
        deferred.resolve(data);
      })
      .error(function (error) {
        deferred.reject (error);
      });

    return deferred.promise;
  };

  this.getWeatherDataDaily = function() {
    var deferred = $q.defer();
    //var url = weatherURI + '&callback=JSON_CALLBACK';
    //var url = weatherURI + '&callback=JSON_CALLBACK';
    //var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+ query + '&mode=json&callback=JSON_CALLBACK';
    var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=atlanta&mode=json&units=imperial&callback=JSON_CALLBACK';

    $http.jsonp(url)
      .success(function (results) {
        var data = new Array(results);
        deferred.resolve(data);
      })
      .error(function (error) {
        deferred.reject (error);
      });

    return deferred.promise;
  };



}]);

//api.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&cnt=10&mode=json
