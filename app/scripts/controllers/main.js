'use strict';

angular.module('christopherDuarteApp')
  .controller('MainCtrl', ['$scope', 'Restangular',
  function($scope, Restangular) {
    var resource = Restangular.all('awsomeIntros');
    resource.getList().then(function(awsomeIntros){
      $scope.awsomeIntros = awsomeIntros;
    });
  }]);
