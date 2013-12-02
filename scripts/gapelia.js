
	var
	$vW = $(window).width(),
	$vH = $(window).height();

	$(window).scroll(function () {

		var value = $(this).stop().scrollTop();
		
		// Scrolling Header
		/*
		var
		header = $("container"),
		headerHeight = header.height(),
		offset = 0,
		lastPos = 0;

		$(document).on("scroll", function (e) {

			var
			newPos = $(document).scrollTop(),
			pos = newPos - lastPos;

			if (offset + pos > headerHeight) {
				offset = headerHeight;
			} else if (newPos < 0) {
				offset = 0;
			} else {
				offset = offset + pos;
			};

			if (offset < 0) {
				offset = 0;
			} else {
				offset = offset;
			};

			header.css("top", (-offset) + "px");
			lastPos = newPos;

		});
		*/

		/*
		$(function() {
			setTimeout(function() {

				if (value > 120) {

					$("header nav a").css("color", "#191919");
					$("header nav ul:nth-child(2)").css("opacity", "1");

				} else {

					$("header nav a").css("color", "inherit");
					$("header nav ul:nth-child(2)").css("opacity", "0");

				}

				if (value > 360) {

					$("#no-scroll").css({
						"opacity": "0",
						"top": "-6rem"
					});

					$("#work-availibility").css({
						"opacity": "0",
						"top": "-6rem"
					});

					$("#scroll").css({
						"opacity": "1",
						"top": "2rem"
					});

					$("header nav").css("top", "8rem");
					// $("header nav a").css("color", "#191919");

				} else {

					$("#no-scroll").css({
						"opacity": "1",
						"top": "2rem"
					});

					$("#work-availibility").css({
						"opacity": "1",
						"top": "7.4rem"
					});

					$("#scroll").css({
						"opacity": "0",
						"top": "-2rem"
					});

					$("header nav").css("top", "23.5rem");
					// $("header nav a").css("color", "inherit");

				}

			}, 10);
		});
		*/

	});