describe('weatherController', function() {

  beforeEach(module('weatherModule'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('weatherController', {$scope: scope});
  }));

  it('should ...', inject(function() {

    expect(1).toEqual(1);

  }));

});
