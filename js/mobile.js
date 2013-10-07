
attach_clicks = function() {

	$(".player-wrapper .close").click(function() {
		if( playing ) {
			//vapi.api("pause");
			$(".playing-now .video-wrapper").html("");
		}

		playing = false;

		$(this).parents(".player").animate({
			opacity: 0
		}, function() {
			$(this).parents(".player-wrapper").removeClass("playing-now").delay(100).animate({
				height: 0
			}, function() {
				if( $(document).scrollTop()/$(document).height()*100 > 18 ) {
					$("#backtotop").fadeIn();
				} else {
					$("#backtotop").fadeOut();
				}
			});			
		});
	});

	$(".videothumb").click(function() {
		if( playing ) {
			$(".playing-now .video-wrapper").html("");
		}

		var el = $(this);

		var row = $(this).parents(".row").data("index");

		var player = $(".player-wrapper")[row];

		if( currentPlayer != row ) {
			if( $(".playing-now").length > 0 ) {
				$(".playing-now").animate({
					height: 0
				}, 300, function() {
					if( row != 21 || row != 22 ) {
						if( $(window).height() < 720 ) {
							$("body,html").animate({
								scrollTop: $(player).offset().top - 107
							});
						} else {
							$("body,html").animate({
								scrollTop: $(player).offset().top - $(window).height()/2 + 304
							});
						}
					}
				}).removeClass("playing-now");
			} else {
				if( row != 21 || row != 22 ) {
					if( $(window).height() < 720 ) {
						$("body,html").animate({
							scrollTop: $(player).offset().top - 107
						});
					} else {
						$("body,html").animate({
							scrollTop: $(player).offset().top - $(window).height()/2 + 304
						});
					}
				}
			}
		}

		currentSubNav = "";
		$("#subnavs").removeClass().addClass("closed");
		$("#closeheader").fadeOut("fast");
		$(".subnav").fadeOut("fast");
		$("#subnavswrapper").slideUp("fast");

		$($(".player-wrapper")[row]).addClass("playing-now");

		var src = "http://player.vimeo.com/video/"+$(this).data("id")+"?api=1&player_id=player"+row;
  		var role = $(this).data("role");
  		var main_title = $('.title .main', this).text().replace(" - ", "");

  		$(".role", player).html( "<p>"+role+"</p>" );
  		if( $('.title .it', this).text() != "" ) {
  			var sub_title = $('.title .it', this).text();
  			$(".title", player).html( "<p class='main'>"+main_title+"</p><p class='sub'>" + sub_title + "</p>" );
  		} else {
  			$(".title", player).html( "<p class='mainonly'>"+main_title+"</p>" );
  		}
  		
		$("#backtotop").fadeOut();

		playing = true;
		currentPlayer = row;

		$(player).delay(600).animate({
			height: 608
		}, function() {
			if( row == 21 || row == 22 ) {
				if( $(window).height() < 720 ) {
					$("body,html").animate({
						scrollTop: $(player).offset().top - 107
					});
				} else {
					$("body,html").animate({
						scrollTop: $(player).offset().top - $(window).height()/2 + 304
					});
				}
			}
			$(".video-wrapper", player).html('<iframe id="player'+row+'"" src="'+src+'&autoplay=1" width="804" height="453" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');
			$(".player",player).animate({
				opacity: 1
			});
		});
	});
}

$(window).load(function(){
	//attach_clicks();
});



load_categories = function( all ) {
	all = all || false;

	if( !all ) {
		var q = "./filter.php?category="+category;
		$.get(q,function(data){
			$("#wrapper").html(data).ready(function(){
				players = [];
				setup_thumbs(true);
			});
		});
	} else if( all ) {
		var q = "./filter.php";
		$.get(q,function(data){
			$("#wrapper").html(data).ready(function(){
				players = [];
				setup_thumbs(true);
			});
		});
	}
}

show_rows = function() {
	$(".row").animate({
		opacity: 1
	});
}

setup_thumbs = function(wait) {
	$(".videothumb").each(function(index,value){
		if( $(this).data("id") ) {
			var vid = $(this).data("id");
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
				}
			    if( data.thumbnail_url ) {
			    	var thumb_url = data.thumbnail_url;
			    	$(".thumb",value).attr('src', thumb_url );
			    }
			});			
		}
	});
	if(wait){
		attach_clicks();

		show_rows();
	}
}

var iframe;
$(document).ready(function() {
	//setup_thumbs();

	$('body').on('touchmove', function (e) {
         if (!$('.scrollable').has($(e.target)).length) e.preventDefault();
 	});

	$("#header").css({
		height: $(window).height(),
		top: -$(window).height()
	})

	$("#logo").animate({
		opacity: 1
	});
	// }).click(function() {
	// 	if( $(this).hasClass("open") ) {
	// 		$(this).fadeOut(function(){
	// 			$("#header").fadeOut();	
	// 		});
	// 	} else {
	// 		$("#logo").fadeOut();
	// 		$("#header").animate({
	// 			top: $(this).height() - 115
	// 		}, 1000, 'easieEaseOutCubic', function(){
	// 			$("#logo").css({
	// 				bottom: 'auto',
	// 				top: 0
	// 			}).addClass("open").fadeIn();
	// 		});			
	// 	}
	// });

	var hammer_logo = $("#logo").hammer();
	var hammer_header = $("#header").hammer();

	$(hammer_logo).on("swipedown", function() {
		if( !$(this).hasClass("open") ) {
			
			$("#header").animate({
				top: $(this).height() - 115
			}, 1000, 'easieEaseOutCubic', function(){
				$("#logo").hide().css({
					bottom: 'auto',
					top: 0
				}).addClass("open").fadeIn();
			});			
		}
	});

	$(hammer_header).on("swipeup", function(){
		$("#logo").hide();
		$("#header").animate({
			top: -$(this).height()
		}, 1000, 'easieEaseOutCubic', function() {
			$("#logo").css({
				top: 'auto',
				bottom: -115
			}).removeClass("open").fadeIn();
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