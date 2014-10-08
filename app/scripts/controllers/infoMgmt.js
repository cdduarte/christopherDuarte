'use strict';

angular.module('christopherDuarteApp')
	.controller('InfoMgmtCtrl', ['$scope', 'Restangular', '$location', '$anchorScroll', '$timeout',
	function($scope, Restangular, $location, $anchorScroll, $timeout) {
		//gotoTop scrolls DOM to element ID
		$scope.gotoTop = function() {
			$location.hash('top');
			$anchorScroll();
		};
		//timeout stalls gotoTop() until DOM loads DB content
		$timeout($scope.gotoTop());
		//get InfoMgmt info from DB
		var resource = Restangular.all('awesomeInfoMgmts');
		resource.getList().then(function(awesomeInfoMgmts){
			$scope.awesomeInfoMgmts = awesomeInfoMgmts;
		});
		//get Intro info from DB
		var resourceIntros = Restangular.all('awsomeIntros');
		resourceIntros.getList().then(function(awsomeIntros){
			$scope.awsomeIntros = awsomeIntros;
		});
		//open accordion panels one at a time
		$scope.oneAtATime = true;
		//initialize accordion collapse
		$scope.isCollapsed = true;
	}]);