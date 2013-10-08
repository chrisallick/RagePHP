setup_thumbs = function(wait) {
	$(".video").each(function(index,value){
		if( $(this).data("id") ) {
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
			    	//$(".thumb",value).attr('src', thumb_url );
			    	$(".thumb",value).attr('src', "http://player.vimeo.com/video/"+vid );
			    }
			});			
		}
	});
}

var iframe;
var drag_count = 0;
var animating = false;
$(document).ready(function() {
	setup_thumbs();

	$('body').on('touchmove', function (e) {
         if (!$('.scrollable').has($(e.target)).length) e.preventDefault();
 	});

	$("#header").css({
		height: $(window).height(),
		top: -$(window).height()
	});

	// $("#header").on('touchmove', function(e) {
	// 	e.preventDefault();
	// });

	$("#logo").css({
		left: $(window).width()/2 - $("#logo").width()/2
	}).animate({
		opacity: 1
	});

	var hammer_logo = $("#logo").hammer();
	var hammer_header = $("#header").hammer();

	$(hammer_logo).on("swipedown", function() {
		if( !$(this).hasClass("open") ) {
			animating = true;
			$("#header").animate({
				top: $(this).height() - 115
			}, 1000, 'easieEaseOutCubic', function(){
				$("#header .content").fadeIn();
				$("#logo").hide().css({
					bottom: 'auto',
					top: 0
				}).addClass("open").fadeIn();
				animating = false;
			});			
		}
	}).on("dragdown", function(){
		//console.log(drag_count);

		drag_count++;
		$("#header").css({
			top: "+=5"
		});
		if( drag_count > 50 ) {
			//console.log("go!");

			animating = true;
			drag_count = 0;
			if( !$(this).hasClass("open") ) {
				$("#header .content").fadeIn();
				$("#header").animate({
					top: $(this).height() - 115
				}, 1000, 'easieEaseOutCubic', function(){
					$("#logo").hide().css({
						bottom: 'auto',
						top: 0
					}).addClass("open").fadeIn();
					drag_count = 0;
					animating = false;
				});			
			}
		}
	}).on("dragend", function(){
		//console.log("drag end");
		
		if( !animating ) {
			$("#header").animate({
				top: -$("#header").height()
			}, 250, 'easieEaseOutCubic');
			drag_count = 0;
		}
	});

	$(hammer_header).on("swipeup", function(){
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
					bottom: -115
				}).removeClass("open").fadeIn();
			});
		});


	});

	// $("#backtotop").click(function(){
	// 	$("body,html").animate({
	// 		scrollTop: 0
	// 	});
	// });

	// $(window).scroll(function(){
	// 	currentSubNav = "";
	// 	$("#subnavs").removeClass().addClass("closed");
	// 			$("#closeheader").addClass("closing").fadeOut("fast",function(){
	// 		$(this).removeClass("closing");
	// 	});
	// 	$(".subnav").fadeOut("fast");
	// 	$("#subnavswrapper").slideUp("fast");

	// 	if( $(document).scrollTop()/$(document).height()*100 > 18 && $(".playing-now").length == 0 ) {
	// 		$("#backtotop").fadeIn();
	// 	} else {
	// 		$("#backtotop").fadeOut();
	// 	}
	// });
});