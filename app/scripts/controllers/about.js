'use strict';

angular.module('christopherDuarteApp')
	.controller('AboutCtrl', ['$scope', 'Restangular', '$location', '$anchorScroll', '$timeout', '_',
	function($scope, Restangular, $location, $anchorScroll, $timeout, _) {
		//gotoTop scrolls DOM to element ID
		$scope.gotoTop = function() {
			$location.hash('top');
			$anchorScroll();
		};
		//timeout stalls gotoTop() until DOM loads DB content
		$timeout($scope.gotoTop());
		//get Background info from DB
		var resource = Restangular.all('awesomeBackground');
		resource.getList().then(function(awesomeBackgrounds){
			$scope.awesomeBackground = awesomeBackgrounds;
			var skills = $scope.awesomeBackground[4];
			$scope.skills = skills;
			$scope.schools = _.filter($scope.awesomeBackground, {'section':'Education'});
			$scope.projects = _.filter($scope.awesomeBackground, {'section':'Academic Projects'});
		});

		var resourceIntros = Restangular.all('awsomeIntros');
		resourceIntros.getList().then(function(awsomeIntros){
			$scope.awsomeIntros = awsomeIntros;
			var intros = $scope.awsomeIntros[3];
			$scope.intros = intros;
		});
		//open accordion panels one at a time
		$scope.oneAtATime = true;
		//initialize accordion collapse
		$scope.isCollapsed = true;
	}]);