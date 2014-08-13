(function() {

var app = angular.module('turboHipster', []);

app.controller('GalleryController', ['$http', function($http) {
	
	var gallery 	= this;
	gallery.videos 	= [];

	$http.get('/resources/json/videos.json').
		success(function(data){
			gallery.videos = data;
		})	

}]);


})();