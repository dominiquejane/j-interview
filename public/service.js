angular.module("jinterview").service("mainService", function($http, $q) {

	Secrets = "qDLoALvaNvTJIpggpw3PwmbG5FwYhn5S";

	this.getEvents = function (searchQuery){
		console.log("getting events");
		var dfd = $q.defer();
		$http({
			method: 'GET',
			url: "https://app.ticketmaster.com/discovery/v2/events.json?size=10&apikey=" + Secrets + "&keyword=" +searchQuery,
		}).then( (results) => {
			var eventResults = results.data;
			// console.log(eventResults);
			dfd.resolve(eventResults);
		})
		return dfd.promise;
	}


})