<?php
/**
 * The header.
 *
 * This is the template that displays all of the <head> section and everything up until main.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <?php wp_head(); ?>

<!-- Add the new slick-theme.css if you want the default styling -->
<link rel="stylesheet" type="text/css" href="https://kenwheeler.github.io/slick/slick/slick.css"/>
        
</head>

<body <?php body_class(); ?>>



<?php wp_body_open(); ?>
<div id="page" class="site">
  <a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'twentytwentyone' ); ?></a>

  <?php get_template_part( 'template-parts/header/site-header' ); ?>

  <div id="content" class="site-content">
    <div id="primary" class="content-area">
      <main id="main" class="site-main" role="main">



<div class="header-v2">
<div class="Lineborder">
  <div class="container">
    <div class="TopBar container">
      <p>
        <a href="tel:+45454545">(+1 650 460-7325)</a>
        <a href="mailto:example@email.com">info@atollogy.com</a>
      </p>
    </div>
  </div>
</div>

    <div class="container">
        <div class="Navigation-Bar">
          <div class="Logo">
            <a href="#">
                <img class="goHome" width="122" src="<?php echo get_template_directory_uri(); ?>/homepage/images/logoFooter.svg"/>
            </a>
          </div>
          <div class="TopMenu">
            <?php wp_nav_menu( array( 'container_class' => 'menu-header', 'theme_location' =>   'header-menu' ) ); ?>
            <a href="" class="btn">Login</a>
              <div id="mobileMenu" style="display:none;">
                <div>
                  <?php wp_nav_menu( array( 'container_class' => 'menu-header', 'theme_location' =>   'header-menu' ) ); ?>   
                </div>
              </div>
          </div>
        </div>
    </div>


  <nav class="mobile-menu mobile-menu-show onePageScrollNavigation">
  <label for="show-menu" class="show-menu"><span><a href="<?php echo home_url();?>"><img class="banner1" src="<?php echo get_template_directory_uri(); ?>/homepage/images/atollogyLogo.svg"></a></span>
    <div id="bars" style="display:none">
          <span class="bar one"></span>
          <span class="bar two"></span>
          <span class="bar three"></span>
          <span class="bar four"></span>
      </div>
    <div class="lines">
      
    </div>
  </label>
  <input type="checkbox" id="show-menu">
  <?php wp_nav_menu( array( 'container_class' => 'menu-header', 'theme_location' =>   'header-menu' , 'items_wrap'     => '<ul id="menu" class="%2$s">%3$s</ul>' ) ); ?>
  
</nav>

  
</div>


