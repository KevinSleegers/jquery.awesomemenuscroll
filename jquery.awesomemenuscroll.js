(function ( $ ) {	
	$.fn.awesomeMenuScroll = function( options ) {
		var settings = $.extend({
			item: "a",
			active: "active",
			prefix: "#section-",
			navHeight: false,
			animation: 'swing',
			speed: '500',
			showInURL: false
		}, options);

		var _prefix = settings.prefix.substring(1);

		// Offset first section
		$('section[id^=' + _prefix + ']').first().css('margin-top', settings.navHeight + 'px');

		$('section[id^=' + _prefix + ']').each(function(){
	    	var _window = window.innerHeight;
	    	var _wrapper = $(this).height();

	    	// Only set min-height if wrapper is shorter than window.innerHeight
	    	if(_window > _wrapper) {                  
	          $(this).css({'min-height': (window.innerHeight - settings.navHeight) +'px'});
	      	}
		});

		var _to = false, prevScrollTop = 0, scrollDirection = 0;

		$(settings.item).first().addClass(settings.active);

		$(settings.item).on('click', function (e) {
	        e.preventDefault();

	        var _this = $(this);

	        _to = _this;
	        
	        $(settings.item).each(function () {
	            $(this).not(_this).removeClass(settings.active);
	        });
			
			var _ref = $(settings.prefix + ($(settings.item).index( _this ) + 1));

			var _refHeight = settings.navHeight ? _ref.position().top - (settings.navHeight) : _ref.position().top;

	        $('body, html').animate({
	            	'scrollTop': _refHeight
	        	}, 
	        	settings.speed, 
	        	settings.animation
	        )
	        .promise()
	        .then(function () {
	        	if(settings.prefix.charAt(0) == '#' && settings.showInURL === true) {	        		
            		window.location.hash = settings.prefix + ($(settings.item).index( _this) + 1);
	        	}

	        	_to = false;
	        });
	    });
		

		$(window).scroll(function() {
			var scrollTop = $(document).scrollTop() + settings.navHeight;

			$(settings.item).each(function() {
				var _scrollTop = $(document).scrollTop();
				var _this = $(this);
				var _ref = $(settings.prefix + ($(settings.item).index( _this ) + 1));

				var _refHeight = settings.navHeight ? _ref.position().top - (settings.navHeight) : _ref.position().top;

				if(_to) {
					$(settings.item).not(_to).removeClass(settings.active);
					_to.addClass(settings.active);
				} else {
					if( (_refHeight <= _scrollTop) && (_ref.position().top >= _scrollTop) )  {

						$(settings.item).not(this).removeClass(settings.active);

						if(!$(this).hasClass(settings.active)) {
							$(this).addClass(settings.active);
						}
					}
				}
			});

			/* ScrollDirection: 0 = up, 1 = down */
			(scrollTop > prevScrollTop) ? scrollDirection = 1 : scrollDirection = 0;
			prevScrollTop = scrollTop;
		});
	};
}( jQuery ));