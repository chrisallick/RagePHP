loadMore = function(){
	numVisibleSections++;
	var i = 0;
	$(".hide-now").each(function(index,value) {
		if( i < 3 ) {
			$(this).removeClass("hide-now");
			i++;

			var vid = $(this).data("id");
			var role = $(this).data("role");
			$.getJSON('http://vimeo.com/api/oembed.json?url=http%3A//vimeo.com/'+vid+'&width=804&callback=?', {format: "json"}, function(data) {
				if( data.title ) {
					var title = data.title.replace(/\"/g,'').split(" - ");
					var new_title = "";
					if( title.length == 3 )  {
						new_title = "<span class='main'>" + title[0] + "</span> - <span class='it'>" + title[1] + " - " + title[2] + "</span>";
					} else if( title.length == 2 ) {
						new_title = "<span class='main'>" + title[0] + "</span> - <span class='it'>" + title[1] + "</span>";
					} else if( title.length == 1 ) {
						new_title = "<span class='main'>" + title[0] + "</span>";
					}
					$(".title", value).html(new_title);
					$(".role", value).html(role);
				}
			    if( data.thumbnail_url ) {
			    	var thumb_url = data.thumbnail_url;
			    	$(".thumb",value).attr('src', "http://player.vimeo.com/video/"+vid+"?title=0" ).show();
			    }
			});	
		}
	});
}

setup_thumbs = function(wait) {
	$(".video").each(function(index,value) {
		if( $(this).data("id") && !$(this).hasClass("hide-now") ) {
			var vid = $(this).data("id");
			var role = $(this).data("role");
			$.getJSON('http://vimeo.com/api/oembed.json?url=http%3A//vimeo.com/'+vid+'&width=804&video=0&callback=?', {format: "json"}, function(data) {
				if( data.title ) {
					var title = data.title.replace(/\"/g,'').split(" - ");
					var new_title = "";
					if( title.length == 3 )  {
						new_title = "<span class='main'>" + title[0] + "</span> - <span class='it'>" + title[1] + " - " + title[2] + "</span>";
					} else if( title.length == 2 ) {
						new_title = "<span class='main'>" + title[0] + "</span> - <span class='it'>" + title[1] + "</span>";
					} else if( title.length == 1 ) {
						new_title = "<span class='main'>" + title[0] + "</span>";
					}
					$(".title", value).html(new_title);
					$(".role", value).html(role);
				}
			    if( data.thumbnail_url ) {
			    	var thumb_url = data.thumbnail_url;
			    	$(".thumb",value).attr('src', "http://player.vimeo.com/video/"+vid+"?title=0" ).show();
			    }
			});			
		}
	});
}

$(window).load(function() {
	if( !open ) {
		$("#header").css({
			height: $(window).height(),
			top: -$(window).height()
		});
	}
})

var iframe;
var drag_count = 0;
var animating = false;
var open = false;
var numVisibleSections = 1;
$(document).ready(function() {
	setup_thumbs();

	$('body').on('touchmove', function (e) {
         if (!$('.scrollable').has($(e.target)).length) e.preventDefault();
 	});

	$("#header").css({
		height: $(window).height(),
		top: -$(window).height()
	});

	$("#logo").css({
		left: $(window).width()/2 - $("#logo").width()/2
	}).animate({
		opacity: 1
	}).click(function() {
		if( !open ) {
			open = true;

			$("#header").animate({
				top: $(this).height() - 146
			}, 1000, 'easieEaseOutCubic', function(){
				$("#header .content").fadeIn();
				$("#uparrow").fadeIn();
				$("#logo").hide().css({
					bottom: 'auto',
					top: 0
				}).addClass("open").fadeIn();
			});
		}
	});

	$("#uparrow").click(function() {
		open = false;

		$("#logo").hide();
		$("#header .content").animate({
			opacity: 0
		}, function(){
			$("#header").animate({
				top: -$(this).height()
			}, 1000, 'easieEaseOutCubic', function() {
				$("#header .content").animate({
					opacity: 1
				});
				$("#logo").css({
					top: 'auto',
					bottom: -146
				}).removeClass("open").fadeIn();
			});
		});
	});

	$("#wrapper").scroll(function() {
		if( $("#wrapper").scrollTop() > ($(".video").height()*(2*numVisibleSections)) ) {
			loadMore();
		}
	});
});