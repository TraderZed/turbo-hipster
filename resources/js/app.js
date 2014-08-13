(function() {

var app = angular.module('turboHipster', []);

app.controller('GalleryController', ['$scope', '$http', function($scope, $http) {

	console.log($scope);
	console.log($http);

	$http.get('/resources/js/json/videos.json').
		success(function(data){
			$scope.videos = data;
		})	

}]);


})();