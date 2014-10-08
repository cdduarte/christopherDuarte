'use strict';

angular.module('christopherDuarteApp')
  .controller('NavbarCtrl', function ($scope) {
    $scope.menu = [{
      'title': 'Sci',
      'link': '/infoSci'
    }, {
      'title': 'Mgmt',
      'link': '/infoMgmt'
    }, /*{
      'title': 'Viz',
      'link': '/infoViz'
    },*/ {
      'title': 'About',
      'link': '/about'
    }];
  });
