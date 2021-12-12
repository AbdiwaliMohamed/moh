/*--------------------------------------------------------------
 Custom js
 --------------------------------------------------------------*/
jQuery( document ).ready( function( $ ) {
	'use strict';

	// mini-cart
	var mini_cart = jQuery( '.mini-cart' );
	mini_cart.on( 'click', function( e ) {
		jQuery( this ).addClass( 'open' );
	} );

	// video
	jQuery( '.tm-video a' ).magnificPopup( {
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	} );

	jQuery( document ).on( 'click', function( e ) {
		if ( jQuery( e.target ).closest( mini_cart ).length == 0 ) {
			mini_cart.removeClass( 'open' );
		}
	} );

	jQuery( '#open-left' ).on( 'click', function() {
		jQuery( 'body' ).addClass( 'body-noscroll' );
		jQuery( '.popup-menu' ).toggleClass( 'show' );
		jQuery( '.popup-menu-inner' ).addClass( 'open' );
	} );

	jQuery( '.popup-menu' ).on( 'click', function() {
		jQuery( 'body' ).removeClass( 'body-noscroll' );
		jQuery( '.popup-menu-inner' ).removeClass( 'open' );
		jQuery( '.popup-menu' ).toggleClass( 'show' );
	} );

	jQuery( '.search-btn' ).on( 'click', function() {
		jQuery( '.popup-search' ).addClass( 'open' );
		jQuery( '.popup-search .search-field' ).focus();
		jQuery( 'body' ).addClass( 'body-noscroll' );
	} );

	jQuery( '.popup-search-close' ).on( 'click', function() {
		jQuery( '.popup-search' ).removeClass( 'open' );
		jQuery( 'body' ).removeClass( 'body-noscroll' );
	} );

	jQuery( '.popup-search' ).on( 'click', function( e ) {
		var popup_search_input = jQuery( '.popup-search input' );
		if ( jQuery( e.target ).closest( popup_search_input ).length == 0 ) {
			jQuery( '.popup-search' ).removeClass( 'open' );
			jQuery( 'body' ).removeClass( 'body-noscroll' );
		}
	} );

	jQuery( '.news-grid' ).isotope( {
		itemSelector: '.col-md-4',
		percentPosition: true,
	} );

	// counterup
	jQuery( '.counter' ).counterUp( {
		delay: 10,
		time: 1000
	} );

	jQuery( '.mobile-menu .menu-item-has-children' ).each( function() {
		jQuery( this ).append( '<span class="mobile-menu-expand fa fa-angle-down"></span>' );
	} );

	jQuery( '.mobile-menu-expand' ).on( 'click', function() {
		jQuery( this ).parent().find( 'ul:first' ).slideToggle();
		jQuery( this ).tm_toggle_class( 'fa-angle-down', 'fa-angle-up' );
	} );


	jQuery( '.product-image' ).matchHeight( {byRow: true} );

	// lightgallery for product images
	jQuery( 'body.single-product .woocommerce-product-gallery__wrapper' ).lightGallery( {
		selector: 'a',
		thumbnail: true,
		animateThumb: false,
		showThumbByDefault: false
	} );

	//ourteam type3
	jQuery( '.ourteam-type3' ).each( function() {
		var oth = jQuery( this ).find( 'img' ).height() + jQuery( this ).find( '.ourteam-info' ).height();
		jQuery( this ).height( oth );
	} );
	setInterval( function() {
		jQuery( '.ourteam-type3' ).each( function() {
			var oth = jQuery( this ).find( 'img' ).height() + jQuery( this ).find( '.ourteam-info' ).height();
			jQuery( this ).height( oth );
		} );
	}, 3000 );
} );

jQuery( window ).resize( function( $ ) {
	//ourteam type3
	jQuery( '.ourteam-type3' ).each( function() {
		var oth = jQuery( this ).find( 'img' ).height() + jQuery( this ).find( '.ourteam-info' ).height();
		jQuery( this ).height( oth );
	} );
} );

jQuery.fn.tm_toggle_class = function( t1, t2 ) {
	if ( this.hasClass( t1 ) ) {
		this.removeClass( t1 );
		this.addClass( t2 );
	} else {
		this.removeClass( t2 );
		this.addClass( t1 );
	}
	return this;
};