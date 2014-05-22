'use strict';

describe('Controller: <%= classedName %>Controller', function () {

  // load the controller's module
  beforeEach(module('<%= scriptAppName %>'));

  var <%= classedName %>Controller,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    /* sample
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/awesomeThings')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);
    scope = $rootScope.$new();
    <%= classedName %>Controller = $controller('<%= classedName %>Controller', {
      $scope: scope
    }); */
  }));

  it('should attach a list of awesomeThings to the scope', function () {

  });
});
