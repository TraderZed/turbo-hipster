$(function() { 
	
	var isMobile = false;
	var isTablet = false;
	
	if($('body').width() < 768) {
		isMobile = true;
	}
	
	if($('body').width() < 1030) {
		isTablet = true;
	}
	
	function Shuffle(o) {
		for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
	};
	
	var helpers = {
	
		buildVideos: function() {
		
			$.ajax({
				type: 'GET',
				url: '/resources/json/videos.json',
				dataType: 'json',
				success: function(data) {
					
					var videoWrapper 	= $('#likes');
					var shuffledVideos 	= Shuffle(data.videos);
					
					videoWrapper.hide();
										
					$.each(data.videos, function(i, val) {
						
						videoWrapper.append('<div class="video_wrapper"><h2>I really like <span>' + val.title + '</span></h2><video class="video ' + val.slug + '" width="948" height="711" autoplay loop class="fill" muted="muted"></video></div>');
						
						$('.video.' + val.slug).attr('src', '/public/videos/' + val.slug + '.mp4');
																	
					});
					
					$('#likes').height(parseInt($(window).height() - $('header').outerHeight()));
				
					videoWrapper.append('<a href="javascript: void(0);" class="btn_prev">Previous</a><a href="javascript: void(0);" class="btn_next">Next</a>');
					videoWrapper.show();
					
					helpers.buildCarousel();
				},
				error: function() {
				
				}
			});
		},
		
		buildCarousel: function() {
			var prev = $('.btn_prev');
			var next = $('.btn_next');
			
			console.log($('.video_wrapper').length);
						
		}
	}	

	if(!isTablet && !isMobile) {
		helpers.buildVideos();
	} else {
		$('#likes').remove();
	}

});