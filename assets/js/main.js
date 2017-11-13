(function($) {

	$(function() {

		$('.scrolly').scrolly({
			speed: 2000
		});

		var $spotlights = $('.spotlight');

		$spotlights.each(function() {

			var $this = $(this)
			$this.css('background-image', 'url("' + $this.find('.image.main > img').attr('src') + '")');
			var top, bottom, mode;

			if ($this.hasClass('top')) {
				mode = 'top';
				top = '-20%';
				bottom = 0;
			}
			else if ($this.hasClass('bottom')) {
				mode = 'bottom-only';
				top = 0;
				bottom = '20%';
			}
			else {

				mode = 'middle';
				top = 0;
				bottom = 0;

			}

			// Add scrollex.
			$this.scrollex({
				mode:		mode,
				top:		top,
				bottom:		bottom,
				initialize:	function(t) { $this.addClass('inactive'); },
				terminate:	function(t) { $this.removeClass('inactive'); },
				enter:		function(t) { $this.removeClass('inactive'); },
			});
		});

		var $wrappers = $('.wrapper');

		$wrappers.each(function() {
				var $this = $(this)

				$this.scrollex({
					top:		250,
					bottom:		0,
					initialize:	function(t) { $this.addClass('inactive'); },
					terminate:	function(t) { $this.removeClass('inactive'); },
					enter:		function(t) { $this.removeClass('inactive'); },
				});
			});

		//form validation
		$("#submitBtn").click(function () {
			if ($("#inputName").val().length==0 || $("#inputEmail").val().length==0 || $("#inputMessage").val().length==0) {
				alert("Please do not leave your name, email, or message blank.");
				return false;
			}
		});
		$('#submitBtn').on('click', function() {
    		var $this = $(this);
  			$this.button('loading');
    		setTimeout(function() {
       			$this.button('reset');
   			}, 8000);
		});

	});

})(jQuery);
