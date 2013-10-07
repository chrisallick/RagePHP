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
var drag_count = 0;
var animating = false;
$(document).ready(function() {
	//setup_thumbs();

	$('body').on('touchmove', function (e) {
         if (!$('amm.scrollable').has($(e.target)).length) e.preventDefault();
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
			animating = true;
			$("#header").animate({
				top: $(this).height() - 115
			}, 1000, 'easieEaseOutCubic', function(){
				$("#logo").hide().css({
					bottom: 'auto',
					top: 0
				}).addClass("open").fadeIn();
				animating = false;
			});			
		}
	}).on("dragdown", function(){
		console.log(drag_count);
		drag_count++;
		$("#header").css({
			top: "+=3"
		});
		if( drag_count > 40 ) {
			animating = true;
			console.log("go!");
			drag_count = 0;
			if( !$(this).hasClass("open") ) {
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
		console.log("drag end");
		
		if( !animating ) {
			$("#header").animate({
				top: -$("#header").height()
			}, 250, 'easieEaseOutCubic');
			drag_count = 0;
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