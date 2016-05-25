angular.module("jinterview").controller('mainCtrl', function($scope, mainService)  {

	$scope.getEvents = function(){
		mainService.getEvents($scope.searchQuery).then( function(results) {
			$scope.events = results._embedded.events;
			// $scope.nextEvent = results._embedded._links.next.href;
			console.log("log results", results);
			console.log("log scope events", $scope.events);
		})
	}


});