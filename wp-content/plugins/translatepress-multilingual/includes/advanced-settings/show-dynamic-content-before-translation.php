<?php

add_filter( 'trp_register_advanced_settings', 'trp_register_show_dynamic_content_before_translation', 20 );
function trp_register_show_dynamic_content_before_translation( $settings_array ){
	$settings_array[] = array(
		'name'          => 'show_dynamic_content_before_translation',
		'type'          => 'checkbox',
		'label'         => esc_html__( 'Show dynamic content before translation', 'translatepress-multilingual' ),
		'description'   => wp_kses( __( 'Shows dynamically inserted content in original language for a moment before the translation request is finished. <br> May help fix missing content inserted using JavaScript.', 'translatepress-multilingual' ), array( 'br' => array()) ),
	);
	return $settings_array;
}


/**
* Apply "show dynamic content before translation" fix only on front page
*/
add_filter( 'trp_show_dynamic_content_before_translation', 'trp_show_dynamic_content_before_translation' );
function trp_show_dynamic_content_before_translation( $allow ){
	$option = get_option( 'trp_advanced_settings', true );
	if ( isset( $option['show_dynamic_content_before_translation'] ) && $option['show_dynamic_content_before_translation'] === 'yes' ){
		return true;
	}
	return $allow;
}
