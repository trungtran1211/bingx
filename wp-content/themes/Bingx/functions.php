<?php

define('THEME_URL', get_stylesheet_directory());
define('CORE', THEME_URL . '/core');


/**
 * Setup the feature of theme
 **/
if (!function_exists('my_network_theme_setup')) {
    
    add_theme_support('post-thumbnails');
}







  
 