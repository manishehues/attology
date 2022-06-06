<?php
// session_start();
header('X-Accel-Buffering: no');
?><!doctype html>
<html <?php language_attributes(); ?> class="no-js">
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>
  <link href="//www.google-analytics.com" rel="dns-prefetch">
  <link href="<?php echo get_template_directory_uri(); ?>/img/icons/favicon.png" rel="shortcut icon">
  <link href="<?php echo get_template_directory_uri(); ?>/img/icons/touch.png" rel="apple-touch-icon-precomposed">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/static/font-awesome.min.css">
  <!-- <link href='https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700,300italic' rel='stylesheet' type='text/css'>     -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="<?php bloginfo('description'); ?>">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/homepage/css/magnific-popup.css" />
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/gdpr.css" />
  <link href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&amp;subset=latin-ext" rel="stylesheet">
  
  <?php wp_head(); ?>
  <?php 
  global $mainSiteUrl;
  $mainSiteUrl = get_site_url();
  $mainSiteUrl = str_replace('/blog', '', $mainSiteUrl);
  ?>



<?php 
if(is_page_template('template_products.php') || is_page_template('template-about.php') || is_page_template('template-homepage.php') || is_page_template('template-terms.php') || is_page_template('template-careers.php') || is_page_template('template-login.php') || is_page_template('template-privacy.php') || is_page_template('template-other_pages.php') || is_page_template('template_industries.php')){
?>
  <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/static/jquery-latest.min.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/static/jquery-ui.min.js"></script>
  <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/homepage/js/nerveSlider.js"></script>
  
  <!-- <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet"> -->
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/homepage/css/nerveSlider.min.css">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/homepage/css/balloon.css">
  <?php $rand = rand( 1, 99999999999 );?>
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/homepage/css/style.css?ver=<?php echo $rand;?>">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/static/font-awesome.min.css">
  <link href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&amp;subset=latin-ext" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/homepage/css/slick/slick.css">
  <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/homepage/css/slick/slick-theme.css">
  <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/homepage/css/modalite.min.css">
  <!-- <link rel="stylesheet" type="text/css" href="css/slimmenu.min.css"> -->
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/homepage/css/font-awesome-animation.min.css">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/homepage/css/aos.css" />
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/homepage/css/forgot-password.css" />
<!-- Global Site Tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-107204185-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)};
  gtag('js', new Date());

  gtag('config', 'UA-107204185-1');
</script>
</head>
<body
<?php
if(is_page_template('template_products.php') || is_page_template('template_industries.php') || is_page_template('template-about.php')){
  echo " class='industries'";
}
?>

>
<script>(function(e,t,n){var r=e.querySelectorAll("html")[0];r.className=r.className.replace(/(^|\s)no-js(\s|$)/,"$1js$2")})(document,window,0);</script>
  <title>Atollogy</title>
  <div id="preloader" style="position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fefefe;
  z-index: 999999;
  height: 100%;">
  <div id="status">&nbsp;</div>
  <div class="preloadText"><img src="<?php echo get_template_directory_uri(); ?>/homepage/images/loader.gif"  /></div>
</div>
<?php 
if(is_page_template('template-homepage.php')){
$pods = pods( 'front_page_banner', array( 'orderby' => 'menu_order', 'order' => 'DESC')  );
while ($pods->fetch()) {
$desktopImage = $pods->display('desktop_image');
$mobileImage = $pods->display('mobile_image');
$bannerUrl = $pods->display('banner_url');
$isthisCampaignActive = $pods->display('is_this_campaign_active');
}
?>
<div id='banner' <?php if($isthisCampaignActive != "Yes"){?>class="bannerDisabled" <?php
}?>>
<div class="holder">
<div class="insideHolder">
<a href="<?php echo $bannerUrl;?>" target="_blank">
<img class="noMob" src="<?php echo $desktopImage;?>" style="border:1px solid #000;" />
<img class="mob" src="<?php echo $mobileImage;?>" style="border:1px solid #000;" />
</a>
<div class="closeButton"><i class="fa fa-times"></i></div></div></div> 
</div>
</div>
<nav class="mobile-menu mobile-menu-show onePageScrollNavigation">
  <label for="show-menu" class="show-menu"><span><a href="<?php echo home_url();?>"><img class="banner1" src="<?php echo get_template_directory_uri(); ?>/homepage/images/atollogyLogo.svg"></a></span><div class="lines"></div></label>
  <input type="checkbox" id="show-menu">
  <ul id="menu">
    <!-- <li class="active"><a href="#Home">Home</a> </li> -->
    <li><a href="<?php echo get_the_permalink(276);?>">Products</a>
    <div class="menuArrow">></div>
    <ul>
    <!-- <a href="<?php echo get_the_permalink(278);?>"><li class="submenuLI">Ground Operations Management</li></a> -->
              <a href="<?php echo get_the_permalink(280);?>"><li class="submenuLI">Manufacturing Operations Management</li></a>
              <!-- <span><li class="submenuLI">Indoor</li></span> -->
              <a href="<?php echo get_the_permalink(283);?>"><li class="submenuLI">Yard Operations Management</li></a>
              </ul>

    </li>
    <li><a class="external" href="<?php echo get_the_permalink(285);?>">Industries</a>

    <div class="menuArrow">></div>
    <ul>
        <!-- <a href="<?php echo get_the_permalink(287);?>"><li class="submenuLI">Aviation</li></a> -->
        <a href="<?php echo get_the_permalink(289);?>"><li class="submenuLI">Bulk Materials</li></a>
        <!-- <a href="<?php echo get_the_permalink(292);?>"><li class="submenuLI">Food Processing</li></a> -->
        <a href="<?php echo get_the_permalink(266);?>"><li class="submenuLI">Industrial Manufacturing</li></a>
        <!-- <a href="<?php echo get_the_permalink(294);?>"><li class="submenuLI">Laboratories</li></a> -->
  </ul>
	</li>    
    <li><a href="<?php echo get_the_permalink(272);?>">Company</a>
    <div class="menuArrow">></div>
    <ul>
    <a href="<?php echo get_the_permalink(274);?>"><li class="submenuLI">About</li></a>
    <a href="<?php echo get_the_permalink(87);?>"><li class="submenuLI">Careers</li></a>
                </ul>
  


    </li>
    <li><a href="#Resources">Resources</a> </li>
    <li><a href="#Contact">Contact</a> </li>
    <li class="between"><a href="">-</a></li>
    <li> <a href="<?php echo $mainSiteUrl; ?>/blog/">Blog</a> </li>
    <li> <a href="/portal/login">Login</a> </li>
  </ul>
</nav>

<div class="admin-gear">
    <?php global $user_ID; if( $user_ID ) : ?>
    <?php if( current_user_can('level_10') ) : ?>

      <a href="<?php echo home_url(); ?>/wp-admin" style="font-size:20px;font-family:'fontawesome'"><i class="fa fa-cog"></i></a>

    <?php else : ?>

      "Change Account Information"

    <?php endif; ?>
  <?php endif; ?>
</div>
<!-- MENU -->
<header class="outer page-header dark fixed <?php //echo $additionalClass;?>">
  <div class="container">
    <div class="menuHome">
      <div class="logo thisIsAHomePage">
        <a href="<?php echo $mainSiteUrl; ?>"><img class="banner1" src="<?php echo get_template_directory_uri(); ?>/homepage/images/atollogyLogo.svg"></a>
      </div>
      <div class="menuHome">
        <ul class="delist menu page-menu onePageScrollNavigation" id="Navigation">
          <li class="active triggerHamburger" style="display:none;"><a id="home" href="#Home"></a></li>
          <li style="display:none;"><a class="start" href="#Start">1</a></li>
          <li class="triggerHamburger"><a class="external" href="<?php echo get_the_permalink(276);?>">Products</a>
            <ul class="submenuUL">
              <!-- <span><li class="submenuLI">Outdoor</li></span> -->
              <!-- <a href="<?php echo get_the_permalink(278);?>"><li class="submenuLI">Ground Operations Management</li></a> -->
              <a href="<?php echo get_the_permalink(280);?>"><li class="submenuLI">Manufacturing Operations Management</li></a>
              <!-- <span><li class="submenuLI">Indoor</li></span> -->
              <a href="<?php echo get_the_permalink(283);?>"><li class="submenuLI">Yard Operations Management</li></a>
              <!-- <a href=""><li class="submenuLI">Work Order Tracking</li></a> -->
            </ul>
          </li>
          <li class="triggerHamburger <?php if(get_the_ID() == 285){ echo 'active';}?>"><a class="external" href="<?php echo get_the_permalink(285);?>">Industries</a>
            <ul class="submenuUL">
              <!-- <a href="<?php echo get_the_permalink(287);?>"><li class="submenuLI">Aviation</li></a> -->
              <a href="<?php echo get_the_permalink(289);?>"><li class="submenuLI">Bulk Materials</li></a>
              <!-- <a href="<?php echo get_the_permalink(292);?>"><li class="submenuLI">Food Processing</li></a> -->
              <a href="<?php echo get_the_permalink(266);?>"><li class="external submenuLI">Industrial Manufacturing</li></a>
              <!-- <a href="<?php echo get_the_permalink(294);?>"><li class="submenuLI">Laboratories</li></a> -->
            </ul>
          </li>
          
           <li class="triggerHamburger"><a class="company" href="<?php echo get_the_permalink(272);?>">Company</a>
          <ul class="submenuUL">
              <a href="<?php echo get_the_permalink(274);?>"><li class="submenuLI">About</li></a>
              <a href="<?php echo get_the_permalink(87);?>"><li class="external submenuLI">Careers</li></a>
              <!-- <a href=""><li class="submenuLI">Team</li></a> -->
            </ul>
            </li>
          <li class="triggerHamburger"><a class="resources" href="#Resources">Resources</a></li>

          <li class="triggerHamburger"><a class="contact" href="#Contact">Contact</a> </li>
          <li class="between">|</li>
          <li> <a href="<?php echo $mainSiteUrl; ?>/blog/" class="external">Blog</a> </li>
          <li> <a href="<?php echo $mainSiteUrl; ?>/portal/login/">Login</a> </li>
        </ul>
      </div>
    </div>
  </div>
</header>

<!-- END MENU -->

<?php
}
if(is_page_template('template_products.php') || is_page_template('template-about.php') || is_page_template('template-careers.php') || is_page_template('template-login.php') || is_page_template('template-terms.php') || is_page_template('template-privacy.php') || is_page_template('template-other_pages.php') || is_page_template('template_industries.php')){
?>
<!-- NOT HOME PAGE MENU -->

<nav class="mobile-menu mobile-menu-show">
    <label for="show-menu" class="show-menu"><span><a href="<?php echo home_url();?>"><img class="banner1" src="<?php echo get_template_directory_uri(); ?>/homepage/images/atollogyLogo.svg"></a>
    </span><div class="lines"></div></label>
    <input type="checkbox" id="show-menu">
    <ul id="menu">
      <!-- <li><a href="../">Home</a> </li> -->
      <li><a href="<?php echo get_the_permalink(276);?>">Products</a>
    <div class="menuArrow">></div>
    <ul>
    <!-- <a href="<?php echo get_the_permalink(278);?>"><li class="submenuLI">Ground Operations Management</li></a> -->
              <a href="<?php echo get_the_permalink(280);?>"><li class="submenuLI">Manufacturing Operations Management</li></a>
              <!-- <span><li class="submenuLI">Indoor</li></span> -->
              <a href="<?php echo get_the_permalink(283);?>"><li class="submenuLI">Yard Operations Management</li></a>
              </ul>
    </li>
    
      <li><a class="external" href="<?php echo get_the_permalink(285);?>">Industries</a>

    <div class="menuArrow">></div>
    <ul>
        <!-- <a href="<?php echo get_the_permalink(287);?>"><li class="submenuLI">Aviation</li></a> -->
        <a href="<?php echo get_the_permalink(289);?>"><li class="submenuLI">Bulk Materials</li></a>
        <!-- <a href="<?php echo get_the_permalink(292);?>"><li class="submenuLI">Food Processing</li></a> -->
        <a href="<?php echo get_the_permalink(266);?>"><li class="submenuLI">Industrial Manufacturing</li></a>
        <!-- <a href="<?php echo get_the_permalink(294);?>"><li class="submenuLI">Laboratories</li></a> -->
    </ul>
  </li>
      <li><a href="<?php echo get_the_permalink(272);?>">Company</a>
<div class="menuArrow">></div>
    <ul>
    <a href="<?php echo get_the_permalink(274);?>"><li class="submenuLI">About</li></a>
    <a href="<?php echo get_the_permalink(87);?>"><li class="submenuLI">Careers</li></a>
                </ul>
      </li>
      <!-- <li><a href="./#careers">Careers</a> </li> -->
      <li><a href="<?php echo $mainSiteUrl; ?>/#resources">Resources</a> </li>
    <li><a href="<?php echo $mainSiteUrl; ?>/#contact">Contact</a> </li>
      <li class="between"><a href="">-</a></li>
      <li><a href="<?php echo $mainSiteUrl; ?>/blog/">Blog</a> </li>
      <li> <a href="<?php echo $mainSiteUrl; ?>/portal/login">Login</a> </li>
    </ul>
  </nav>
  <header class="page-header fixed dark <?php //echo $additionalClass;?>  otherPageLoaded">
    <div class="container"> 
    <div class="menuHome">
      <div class="logo thisIsInnerPage">
        <a href="<?php echo $mainSiteUrl; ?>"><img class="banner1" src="<?php echo get_template_directory_uri(); ?>/homepage/images/atollogyLogo.svg"></a>
      </div>
      <div class="menuHome">
        <ul class="delist menu page-menu onePageScrollNavigation" id="Navigation">
          <li class="active triggerHamburger" style="display:none;"><a id="home" href="#Home"></a></li>
          <li style="display:none;"><a class="start" href="#Start">1</a></li>
          <li class="triggerHamburger <?php 
          if(get_the_ID() == 276 || get_the_ID() == 278 || get_the_ID() == 280 || get_the_ID() == 283)
          { echo 'active';}?>"><a class="external" href="<?php echo get_the_permalink(276);?>">Products</a>
            <ul class="submenuUL">
              <!-- <span><li class="submenuLI">Outdoor</li></span> -->
              <!-- <a href="<?php echo get_the_permalink(278);?>"><li class="submenuLI">Ground Operations Management</li></a> -->
              <a href="<?php echo get_the_permalink(280);?>"><li class="submenuLI">Manufacturing Operations Management</li></a>
              <!-- <span><li class="submenuLI">Indoor</li></span> -->
              <a href="<?php echo get_the_permalink(283);?>"><li class="submenuLI">Yard Operations Management</li></a>
              <!-- <a href=""><li class="submenuLI">Work Order Tracking</li></a> -->
            </ul>
          </li>
          <li class="triggerHamburger <?php 
          if(get_the_ID() == 285 || get_the_ID() == 287 || get_the_ID() == 289 || get_the_ID() == 292 || get_the_ID() == 266 || get_the_ID() == 294)
          { echo 'active';}?>"><a class="external" href="<?php echo get_the_permalink(285);?>">Industries</a>
            <ul class="submenuUL">
              <!-- <a href="<?php echo get_the_permalink(287);?>"><li class="submenuLI">Aviation</li></a> -->
              <a href="<?php echo get_the_permalink(289);?>"><li class="submenuLI">Bulk Materials</li></a>
              <!-- <a href="<?php echo get_the_permalink(292);?>"><li class="submenuLI">Food Processing</li></a> -->
              <a href="<?php echo get_the_permalink(266);?>"><li class="external submenuLI">Industrial Manufacturing</li></a>
              <!-- <a href="<?php echo get_the_permalink(294);?>"><li class="submenuLI">Laboratories</li></a> -->
            </ul>
          </li>
          
          <li class="triggerHamburger <?php if(get_the_ID() == 272 || get_the_ID() == 274 || get_the_ID() == 87){echo 'active';}?>"><a class="company" href="<?php echo get_the_permalink(272);?>">Company</a>
          <ul class="submenuUL">
              <a href="<?php echo get_the_permalink(274);?>"><li class="submenuLI">About</li></a>
              <a href="<?php echo get_the_permalink(87);?>"><li class="external submenuLI">Careers</li></a>
              <!-- <a href=""><li class="submenuLI">Team</li></a> -->
            </ul>
            </li>
          <li class="triggerHamburger"><a class="resources" href="<?php echo $mainSiteUrl;?>/#resources">Resources</a></li>


          <li class="triggerHamburger"><a class="contact" href="<?php echo $mainSiteUrl;?>/#contact">Contact</a> </li>
          <li class="between">|</li>
          <li> <a href="<?php echo $mainSiteUrl; ?>/blog/" class="external">Blog</a> </li>
          <li> <a href="<?php echo $mainSiteUrl; ?>/portal/login/">Login</a> </li>
        </ul>
      </div>
    </div>
  </div>
</header>

<!-- END NOT HOME PAGE MENU -->
<?php
}
}
else{
?>


<link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/css/modalite.min.css">
  <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/css/slick/slick.css">
  <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/css/slick/slick-theme.css">
  <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/css/slick/slick-theme.css">


 

  <script>
// conditionizr.com
// configure environment tests
conditionizr.config({
  assets: '<?php echo get_template_directory_uri(); ?>',
  tests: {}
});
</script>
<!-- Global Site Tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-107204185-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)};
  gtag('js', new Date());

  gtag('config', 'UA-107204185-1');
</script>
</head>
<body <?php body_class(); ?>>
  <!-- wrapper -->
  <div id="preloader">
    <div id="status">&nbsp;</div>
    <div class="preloadText"><img src="<?php echo get_template_directory_uri(); ?>/images/loader.gif"  /></div>
  </div>



  <nav class="mobile-menu mobile-menu-show">
    <label for="show-menu" class="show-menu"><span><a href="<?php echo $mainSiteUrl; ?>"><img class="banner" src="<?php echo get_template_directory_uri(); ?>/images/atollogyLogo.svg"></a>
    </span><div class="lines"></div></label>
    <input type="checkbox" id="show-menu">
    <ul id="menu">
    <!-- <li class="active"><a href="#Home">Home</a> </li> -->
    <li><a href="<?php echo get_the_permalink(276);?>">Products</a>
    <div class="menuArrow">></div>
    <ul>
    <!-- <a href="<?php echo get_the_permalink(278);?>"><li class="submenuLI">Ground Operations Management</li></a> -->
              <a href="<?php echo get_the_permalink(280);?>"><li class="submenuLI">Manufacturing Operations Management</li></a>
              <!-- <span><li class="submenuLI">Indoor</li></span> -->
              <a href="<?php echo get_the_permalink(283);?>"><li class="submenuLI">Yard Operations Management</li></a>
              </ul>

    </li>
    <li><a class="external" href="<?php echo get_the_permalink(285);?>">Industries</a>

    <div class="menuArrow">></div>
    <ul>
        <!-- <a href="<?php echo get_the_permalink(287);?>"><li class="submenuLI">Aviation</li></a> -->
        <a href="<?php echo get_the_permalink(289);?>"><li class="submenuLI">Bulk Materials</li></a>
        <!-- <a href="<?php echo get_the_permalink(292);?>"><li class="submenuLI">Food Processing</li></a> -->
        <a href="<?php echo get_the_permalink(266);?>"><li class="submenuLI">Industrial Manufacturing</li></a>
        <!-- <a href="<?php echo get_the_permalink(294);?>"><li class="submenuLI">Laboratories</li></a> -->
    </ul>
  </li>    
    <li><a href="<?php echo get_the_permalink(272);?>">Company</a>
    <div class="menuArrow">></div>
    <ul>
    <a href="<?php echo get_the_permalink(274);?>"><li class="submenuLI">About</li></a>
    <a href="<?php echo get_the_permalink(87);?>"><li class="submenuLI">Careers</li></a>
                </ul>
  


    </li>
    <li><a href="<?php echo $mainSiteUrl; ?>/#resources">Resources</a> </li>
    <li><a href="<?php echo $mainSiteUrl; ?>/#contact">Contact</a> </li>
    <li class="between"><a href="">-</a></li>
    <li> <a href="<?php echo $mainSiteUrl; ?>/blog/">Blog</a> </li>
    <li> <a href="<?php echo $mainSiteUrl; ?>/portal/login">Login</a> </li>
  </ul>
  </nav>

  <div class="admin-gear">
    <?php global $user_ID; if( $user_ID ) : ?>
    <?php if( current_user_can('level_10') ) : ?>

      <a href="<?php echo home_url(); ?>/wp-admin" style="font-size:20px;font-family:'fontawesome'"><i class="fa fa-cog"></i></a>

    <?php else : ?>

      "Change Account Information"

    <?php endif; ?>
  <?php endif; ?>
</div>

<header class="outer page-header dark fixed <?php //echo $additionalClass;?>">
  <div class="container"> 
    <div class="menuHome">
      <div class="logo thisIsABlogPage">
        <a href="<?php echo $mainSiteUrl; ?>"><img class="banner1" src="<?php echo get_template_directory_uri(); ?>/images/atollogyLogo.svg"></a>
      </div>
      <div class="menuHome">
        <ul class="delist menu page-menu onePageScrollNavigation" id="Navigation">
          <li class="active triggerHamburger" style="display:none;"><a id="home" href="#Home"></a></li>
          <li class="triggerHamburger"><a class="external" href="<?php echo get_the_permalink(276);?>">Products</a>
            <ul class="submenuUL">
              <!-- <span><li class="submenuLI">Outdoor</li></span> -->
              <!-- <a href="<?php echo get_the_permalink(278);?>"><li class="submenuLI">Ground Operations Management</li></a> -->
              <a href="<?php echo get_the_permalink(280);?>"><li class="submenuLI">Manufacturing Operations Management</li></a>
              <!-- <span><li class="submenuLI">Indoor</li></span> -->
              <a href="<?php echo get_the_permalink(283);?>"><li class="submenuLI">Yard Operations Management</li></a>
              <!-- <a href=""><li class="submenuLI">Work Order Tracking</li></a> -->
            </ul>
          </li>
          <li class="triggerHamburger"><a class="external" href="<?php echo get_the_permalink(285);?>">Industries</a>
            <ul class="submenuUL">
              <!-- <a href="<?php echo get_the_permalink(287);?>"><li class="submenuLI">Aviation</li></a> -->
              <a href="<?php echo get_the_permalink(289);?>"><li class="submenuLI">Bulk Materials</li></a>
              <!-- <a href="<?php echo get_the_permalink(292);?>"><li class="submenuLI">Food Processing</li></a> -->
              <a href="<?php echo get_the_permalink(266);?>"><li class="submenuLI">Industrial Manufacturing</li></a>
              <!-- <a href="<?php echo get_the_permalink(294);?>"><li class="submenuLI">Laboratories</li></a> -->
            </ul>
          </li>
          
           <li class="triggerHamburger"><a class="company" href="<?php echo get_the_permalink(272);?>">Company</a>
          <ul class="submenuUL">
              <a href="<?php echo get_the_permalink(274);?>"><li class="submenuLI">About</li></a>
              <a href="<?php echo get_the_permalink(87);?>"><li class="external submenuLI">Careers</li></a>
              <!-- <a href=""><li class="submenuLI">Team</li></a> -->
            </ul>
            </li>
          <li class="triggerHamburger"><a class="resources" href="<?php echo $mainSiteUrl;?>/#resources">Resources</a></li>


          <li class="external"><a class="contact" href="<?php echo $mainSiteUrl;?>/#contact">Contact</a> </li>
          <li class="between">|</li>
          <li> <a href="<?php echo $mainSiteUrl; ?>/blog/" class="external">Blog</a> </li>
          <li> <a href="<?php echo $mainSiteUrl; ?>/portal/login/">Login</a> </li>
        </ul>
      </div>
    </div>
  </div>
</header>

<div class="wrapper">


<?php
}
?>
