(function() {

var app = angular.module('turboHipster', []);

app.controller('GalleryController', ['$http','$scope', function($http, $scope) {
	
	var gallery 	= this;
	gallery.videos 	= [];

	$http.get('/resources/json/videos.json').
		success(function(data){
			gallery.videos = data;
			
			$scope.generateURL = function (slug) {
			    return '/public/videos/' + slug + '.mp4';
			};
						
		})	
	
}]);


})();