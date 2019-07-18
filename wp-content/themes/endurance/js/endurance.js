jQuery(document).ready(function($) { 
	
    /**
    * Document ready (jQuery)
    */
    $(function () {

        /**
         * Activate superfish menu.
         */
        $('.sf-menu').superfish({
            'speed': 'fast',
            'delay' : 0,
            'animation': {
                'height': 'show'
            }
        });

    });

	jQuery("#ilovewp-hero").flexslider({
	        selector: ".ilovewp-slides > .ilovewp-slide",
		animation: "slide",
		animationLoop: true,
	        initDelay: 500,
		smoothHeight: false,
		slideshow: true,
		slideshowSpeed: 5000,
		pauseOnAction: true,
		pauseOnHover: false,
	        controlNav: false,
		directionNav: true,
		useCSS: true,
		touch: false,
	        animationSpeed: 600,
		rtl: false,
		reverse: false
	});

        /**
         * SlickNav
         */

	$('#menu-main-slick').slicknav({
		prependTo:'.site-navbar-header',
		label: enduranceStrings.slicknav_menu_home,
		allowParentLinks: true
	});

    function mobileadjust() {
        
        var windowWidth = $(window).width();

        if( typeof window.orientation === 'undefined' ) {
            $('#menu-main').removeAttr('style');
         }

        if( windowWidth < 769 ) {
            $('#menu-main').addClass('mobile-menu');
         }
 
    }
    
    mobileadjust();

    $(window).resize(function() {
        mobileadjust();
    });

});