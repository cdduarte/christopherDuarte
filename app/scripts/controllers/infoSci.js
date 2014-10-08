'use strict';

angular.module('christopherDuarteApp')
	.controller('InfoSciCtrl', ['$scope', 'Restangular', '$location', '$anchorScroll', '$timeout',
	function($scope, Restangular, $location, $anchorScroll, $timeout) {
		var resource = Restangular.all('awesomeGists');
		resource.getList().then(function(awesomeGists){
			$scope.awesomeGists = awesomeGists;
		});

		var resourceIntros = Restangular.all('awsomeIntros');
		resourceIntros.getList().then(function(awsomeIntros){
			$scope.awsomeIntros = awsomeIntros;
		});

		$scope.gotoTop = function() {
			$location.hash('top');
			$anchorScroll();
		};

		$timeout($scope.gotoTop());

		$scope.oneAtATime = true;
		$scope.isCollapsed = true;
	}]);