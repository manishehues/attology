<?php edit_post_link(); ?>
<?php $mainSiteUrl = get_site_url();$mainSiteUrl = str_replace('/blog', '', $mainSiteUrl);?>
<?php 
if(is_page_template('template-about.php') || is_page_template('template-homepage.php') || is_page_template('template-terms.php') || is_page_template('template-careers.php') || is_page_template('template-login.php') || is_page_template('template-privacy.php') || is_page_template('template-other_pages.php')  || is_page_template('template-other_pages.php')){
?>
<div class="footer">
  <div class="footerInside">
    <div class="third footerLogo">
      <img class="goHome" width="122" src="<?php echo get_template_directory_uri(); ?>/homepage/images/logoFooter.svg" />
      <h6 class="copyright">  &copy; 2016-<?php echo date("Y"); ?></h6>
    </div>
    <div class="third">
      <a class="social" href="https://www.linkedin.com/company/atollogy-inc." target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
      <a class="social" href="https://twitter.com/atollogy" target="_blank"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
      <a class="social" href="https://www.facebook.com/Atollogy/" target="_blank"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
    </div>
    <div class="third links">
      <a href="<?php echo $mainSiteUrl; ?>/terms-and-conditions">Terms & Conditions</a>
      <a href="<?php echo $mainSiteUrl; ?>/privacy-policy">Privacy Policy</a>
      <a href="<?php echo $mainSiteUrl; ?>/cookies-notice">Cookies Notice</a>
    </div>
    <div class="clear"></div>
  </div>
</div>
<script src="<?php echo get_template_directory_uri(); ?>/homepage/js/slick/slick.js" type="text/javascript" charset="utf-8"></script>
<script>
 $(document).ready(function(){
    $(".slideshowInner.one").startslider({
      slideTransitionSpeed: 1800,
      slideTransitionEasing: "easeInOutExpo",
      slidesDraggable: true,
      sliderResizable: true,
      showDots: false,
      showPause: false,
      showTimer: false,
      sliderAutoPlay: false,
      waitForLoad: true,
      showArrows: false,
      slideTransition: 'fade'
    });



$(".slideshowInner.two").startslider({
      slideTransitionSpeed: 1800,
      slideTransitionEasing: "easeInOutExpo",
      slidesDraggable: true,
      sliderResizable: true,
      showDots: false,
      showPause: false,
      showTimer: false,
      sliderAutoPlay: true,
      waitForLoad: true,
      showArrows: false,
      slideTransition: 'fade'
    });




  });
</script>
<script>
  (function($){
    $(function(){ 
var scroll = $(document).scrollTop();
var headerHeight = $('.page-header').outerHeight();
$(window).scroll(function() {
var scrolled = $(document).scrollTop();
if (scrolled > headerHeight){
  $('.page-header').addClass('off-canvas');
} else {
  $('.page-header').removeClass('off-canvas');
}
if (scrolled > scroll){
} else {
}       
if($(window).scrollTop() + $(window).height() == $(document).height()) {
  $('#tidio-chat iframe').addClass('bottomsUp');
}
else{
  $('#tidio-chat iframe').removeClass('bottomsUp');
}
scroll = $(document).scrollTop(); 
if(scroll >= $(window).height()-80){
}
else{
}
});
});
})(jQuery);   

$('.hamburgerHome').click(function(){
  $('.hamburgerHome').hide();
// $('.triggerHamburger').fadeIn();
$('.leftPartInside').removeClass('openMenu');
}); 

$('.forgotPassword').click(function(){

$('.loginTop.targetDiv1 #email').attr('tabindex', -1);
$('.loginTop.targetDiv1 #password').attr('tabindex', -1);

$('.loginTop.targetDiv2 #email').attr('tabindex',0);
$('.loginTop.targetDiv2 #password').attr('tabindex',0);

  $('.loginTop.targetDiv1 .message').addClass('closed');
    $('.loginTop.targetDiv1 #memberlogin #email').removeClass('danger');
    $('.loginTop.targetDiv1 #memberlogin #email').removeClass('has-error');
    $('.loginTop.targetDiv1 #memberlogin #email').val('');
    $('.loginTop.targetDiv1 #memberlogin #password').val('');
    $('.loginTop.targetDiv1 #memberlogin #password').removeClass('danger');
    $('.loginTop.targetDiv1 #memberlogin #password').removeClass('has-error');
    $('.loginTop.targetDiv2 .message').addClass('closed');
    $('.loginTop.targetDiv2 #memberlogin #email').removeClass('danger');
    $('.loginTop.targetDiv2 #memberlogin #email').removeClass('has-error');
    $('.loginTop.targetDiv2 #memberlogin #email').val('');
    $('.loginTop.targetDiv2 #memberlogin #password').val('');
    $('.loginTop.targetDiv2 #memberlogin #password').removeClass('danger');
    $('.loginTop.targetDiv2 #memberlogin #password').removeClass('has-error');
  $('.container nav.pull-right .loginTop').addClass('forgotPasswordOut');
  $('.container nav.pull-right .loginTop.targetDiv2').addClass('forgotPasswordBackIn');
}); 

$('.forgotPasswordBack').click(function(){

$('.loginTop.targetDiv2 #email').attr('tabindex', -1);
$('.loginTop.targetDiv2 #password').attr('tabindex', -1);

$('.loginTop.targetDiv1 #email').attr('tabindex',0);
$('.loginTop.targetDiv1 #password').attr('tabindex',0);


  $('.loginTop.targetDiv1 .message').addClass('closed');
    $('.loginTop.targetDiv1 #memberlogin #email').removeClass('danger');
    $('.loginTop.targetDiv1 #memberlogin #email').removeClass('has-error');
    $('.loginTop.targetDiv1 #memberlogin #email').val('');
    $('.loginTop.targetDiv1 #memberlogin #password').val('');
    $('.loginTop.targetDiv1 #memberlogin #password').removeClass('danger');
    $('.loginTop.targetDiv1 #memberlogin #password').removeClass('has-error');
    $('.loginTop.targetDiv2 .message').addClass('closed');
    $('.loginTop.targetDiv2 #memberlogin #email').removeClass('danger');
    $('.loginTop.targetDiv2 #memberlogin #email').removeClass('has-error');
    $('.loginTop.targetDiv2 #memberlogin #email').val('');
    $('.loginTop.targetDiv2 #memberlogin #password').val('');
    $('.loginTop.targetDiv2 #memberlogin #password').removeClass('danger');
    $('.loginTop.targetDiv2 #memberlogin #password').removeClass('has-error');
  $('.container nav.pull-right .loginTop').removeClass('forgotPasswordOut');
  $('.container nav.pull-right .loginTop.targetDiv2').removeClass('forgotPasswordBackIn');
}); 

$(function() {
  $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
});
 
</script>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/homepage/js/modalite.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/homepage/js/aos.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/homepage/js/forgot-password.js"></script>
<script>


  $(window).load(function() {

    
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var closeGDPR = $('.accept-btn');
closeGDPR.on('click', function(){
    var seen = getCookie('atollogyCookie');
    if(seen != 'seen') {
      setCookie('atollogyCookie', 'seen', 999999)
        $('.gdpr-bar').hide();
    }
    $('.gdbr-bar').hide();
});
var seen = getCookie('atollogyCookie');
     if(seen === 'seen'){
        $('.gdpr-bar').hide();
    }
    equalheight = function(container){

      var currentTallest = 0,
      currentRowStart = 0,
      rowDivs = new Array(),
      $el,
      topPosition = 0;
      $(container).each(function() {

        $el = $(this);
        $($el).height('auto')
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
          for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
          }
rowDivs.length = 0; // empty the array
currentRowStart = topPostion;
currentTallest = $el.height();
rowDivs.push($el);
} else {
  rowDivs.push($el);
  currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
}
for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
  rowDivs[currentDiv].height(currentTallest);
}
});
    }
      equalheight('.equalize');


    $("#status, .preloadText").fadeOut();
    $("#preloader").delay(500).fadeOut("slow");
    $('.onePageScrollNavigation').onePageNav({
      currentClass: 'active',
      changeHash: true,
      scrollOffset: 65,
      filter: ':not(.external)',
      scrollSpeed: 1200,
      end: function() {
},
});
    AOS.init({
      easing: 'ease-in-out-sine',
      disable: 'mobile'
    });
    if ( window.location.hash )
    {
      console.log(window.location.hash);
      window.scrollTo(0, 0);
      setTimeout(function() {
triggerIt();
},500);
    }
    else{
      window.scrollTo(0, 0);
 setTimeout(function(){
      $("#banner").slideDown();
      $("#banner").addClass('bannerOpen');

}, 3000);
    }
    function triggerIt(){
      setTimeout(function() {
        var triggerWithoutHash = window.location.hash;
        var triggerWithoutHash = triggerWithoutHash.replace("#",".");

        $(triggerWithoutHash).trigger('click');       
window.location.hash = '';
console.log(window.location.hash);
},500);
}
     $(".regular").slick({
      dots: true,
      autoplaySpeed: 5000,
      infinite: true,
      slidesToShow: 1,
      autoplay: true,
      slidesToScroll: 1,
      dots:true,
      // responsive: [
      // {
      //   breakpoint: 2000,
      //   settings: "unslick"
      // }]

    });     
  });
$('.clicker').click(function () {
  $(".start").trigger('click');
  $('.menu li').removeClass('active');
  $('.menu li').removeClass('active');
  // $('.whysmartmanufacturing').parent('li').addClass('active');
});

$('.contactclicker').click(function () {
  $(".contact").trigger('click');
  // $('.whysmartmanufacturing').parent('li').addClass('active');
});


$('.contactButton').click(function () {
  $(".contact").trigger('click');
  if ( $( this ).hasClass( "checkCareers" ) ) {
    $("#joinTeam").prop("checked", true);
    $('#contact-form').find("#form_name").focus();
    $('.form-group.fileInputCustom').addClass('open');
    $('#map').addClass('open');
  }
});


$('.contactButton1').click(function () {
var newdiv2 = $(this).attr('data-careers');
var newdiv3 = $('#'+newdiv2);
  $('html, body').animate({
        scrollTop: $(newdiv3).offset().top - 50
    }, 1000);
// if ( $( this ).hasClass( "checkCareers" ) ) {
// $("#joinTeam").prop("checked", true);
// $('#contact-form').find("#form_name").focus();
// $('.form-group.fileInputCustom').addClass('open');
// $('#map').addClass('open');
// }

});


 $('input[name=InterestedIn]').change(function(){
  if ( this.id == 'joinTeam' ) {
  $('.form-group.fileInputCustom').addClass('open');
  $('#map').addClass('open');
}
else{
 $('.form-group.fileInputCustom').removeClass('open'); 
 $('#map').removeClass('open');
}
});


$('.goHome').click(function () {
  if ( $( '#Navigation' ).hasClass( "open" ) ) {
    $("#home").trigger('click');
    $('.container nav').removeClass('open');
    $('.container li').fadeIn();
    $('.page-header').removeClass('darkAlways');
    $('.page-header').removeClass('loginOpen');
    closeNav2(); 
  }
  else{
    $("#home").trigger('click');
  }
});
</script>
<script src="<?php echo get_template_directory_uri(); ?>/static/bootstrap.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/homepage/js/validator.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/homepage/js/contact.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/homepage/js/jquery.nav.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/homepage/js/skrollr.min.js"></script>
<script type="text/javascript">
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  }
  else{
    skrollr.init({
      forceHeight: true,
      easing: {
        vibrate: function(p) {
          return Math.sin(p * 10 * Math.PI);
        }
      }
    });
  }
 $('.cd-btn').click(function(){
    $('.hamburgerHome').css('opacity', '0');
    $('.hamburgerHome').css('right', '2000px');
    $('.container nav').addClass('open');
    $('.container .rightPart').fadeOut();
    setTimeout(function(){ 
      $('.loginTop').fadeIn();
    }, 500);
openNav2();
$('.leftPartInside').addClass('openMenu');
$('.page-header').addClass('darkAlways');
$('.page-header').addClass('loginOpen');
$('#tidio-chat iframe').addClass('bottomsUp');
if ( $( '.page-header' ).hasClass( "dark" ) ) {
  $('.signupLogin').css('margin-top','90px');
}
else{
  $('.signupLogin').css('margin-top','130px');  
}
setTimeout(function() {
  $('html').addClass('fixedAll');
},500);
}); 
  $('.container nav.pull-right .loginTop .fa-times').click(function(){
    $('.loginTop.targetDiv1 .message').addClass('closed');
    $('.loginTop.targetDiv1 #memberlogin #email').removeClass('danger');
    $('.loginTop.targetDiv1 #memberlogin #email').removeClass('has-error');
    $('.loginTop.targetDiv1 #memberlogin #email').val('');
    $('.loginTop.targetDiv1 #memberlogin #password').val('');
    $('.loginTop.targetDiv1 #memberlogin #password').removeClass('danger');
    $('.loginTop.targetDiv1 #memberlogin #password').removeClass('has-error');
    $('.loginTop.targetDiv2 .message').addClass('closed');
    $('.loginTop.targetDiv2 #memberlogin #email').removeClass('danger');
    $('.loginTop.targetDiv2 #memberlogin #email').removeClass('has-error');
    $('.loginTop.targetDiv2 #memberlogin #email').val('');
    $('.loginTop.targetDiv2 #memberlogin #password').val('');
    $('.loginTop.targetDiv2 #memberlogin #password').removeClass('danger');
    $('.loginTop.targetDiv2 #memberlogin #password').removeClass('has-error');
                  
    $('.container nav').removeClass('open');
    $('.container .rightPart').fadeIn();
    $('html').removeClass('fixedAll');
    $('.container nav.pull-right .loginTop').removeClass('forgotPasswordOut');
    $('.container nav.pull-right .loginTop.targetDiv2').removeClass('forgotPasswordBackIn');
if ( $( '.section' ).hasClass( "otherPages" ) ) {
}
else{
  $('.page-header').removeClass('darkAlways');
}
$('.page-header').removeClass('loginOpen');
if(!$('.hamburgerHome').is(":visible")){
  $('.leftPartInside').removeClass('openMenu');
}
$('.hamburgerHome').css('opacity', '1');
$('.hamburgerHome').css('right', '140px');
$('.loginTop').hide();
$('#tidio-chat iframe').removeClass('bottomsUp');
closeNav2();
}); 
</script>
<script src="<?php echo get_template_directory_uri(); ?>/homepage/js/clipboard.min.js"></script>
<script>
  var clipboard = new Clipboard('.btn');
  clipboard.on('success', function(e) {
    console.log(e);
    $('.addressCopied').fadeIn();
  });
  clipboard.on('error', function(e) {
    console.log(e);
  });
</script>
<div id="modal-show-me" class="modal" data-modal>
  <div class="modal-container">
    <div class="modal-close" data-close-modal></div>
    <div class="modal-content">
      <h1>Hello Atollogy,</h1>
      <p>I would like to connect and request an introduction and overview of your solution.  
        You can contact me at 
        <form id="contact-form1" method="post" action="<?php echo get_template_directory_uri(); ?>/homepage/contact.php" role="form" class="ContactForm">
          <div class="messages"></div>
          <div class="formular1">
            <div class="form-group">
              <input id="form_name" type="text" name="name" class="form-control" placeholder="Name *" required="required" data-error="Firstname is required.">
            </div>
            <div class="form-group">
              <input id="form_email" type="email" name="email" class="form-control" placeholder="Email *" required="required" data-error="Valid email is required.">
            </div>
            <div class="form-group">
              <input id="form_phone" type="text" name="phone" class="form-control" placeholder="Phone" data-error="Firstname is required.">
            </div>
            <input type="submit" class="submitContact btn btn-success btn-send" value="Send message">
          </div>
        </form>
      </p>
    </div>
  </div>
</div>
<div id="modal-map-copy" class="modal" data-modal>
  <div class="modal-container">
    <div class="modal-close" data-close-modal></div>
    <div class="modal-content">
      <p id="div-target">3031 Tisch Way,<br>
        San Jose,<br>
        California 95128,<br>
        United States</p>
        <a href="https://www.google.com/maps/place/3031+Tisch+Way,+San+Jose,+CA+95128/@37.3175087,-121.9497487,17z/data=!3m1!4b1!4m5!3m4!1s0x808fcadf54eff777:0x6e382a24d8ef194d!8m2!3d37.3175087!4d-121.94756?hl=en-US" target="_blank"><button >Open Map</button></a>
        <button class="btn" data-clipboard-action="copy" data-clipboard-target="#div-target">Copy</button>
        <div class="addressCopied">Address copied to clipboard</div>
      </p>
    </div>
  </div>
</div>
<div id="modal-login" class="modal login" data-modal>
  <div class="modal-container">
    <div class="modal-close" data-close-modal></div>
    <div class="modal-content">
      <h1>Login</h1>
      <p>
        <input type="text" placeholder="Login">
        <input type="text" placeholder="Password">
        <input type="submit" class="submit" value="Login">
      </p>
    </div>
  </div>
</div>

</div>
</div>
<script>
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  function openNav2() {
    document.getElementById("myNav2").style.top = "0";
  }
  function closeNav2() {
    document.getElementById("myNav2").style.top = "100vh";
  }

  $(document1).click(function(e) { 
    var $target = $(e.target);
    if($('.loginTop').is(":visible")){
      if(!$target.closest('.targetDiv1').length && !$target.hasClass('targetDiv1') && 
        !$target.closest('.targetDiv2').length && !$target.hasClass('targetDiv2')) {
        /* close on click outside */
      $('.loginTop.targetDiv1 .message').addClass('closed');
    $('.loginTop.targetDiv1 #memberlogin #email').removeClass('danger');
    $('.loginTop.targetDiv1 #memberlogin #email').removeClass('has-error');
    $('.loginTop.targetDiv1 #memberlogin #email').val('');
    $('.loginTop.targetDiv1 #memberlogin #password').val('');
    $('.loginTop.targetDiv1 #memberlogin #password').removeClass('danger');
    $('.loginTop.targetDiv1 #memberlogin #password').removeClass('has-error');
    $('.loginTop.targetDiv2 .message').addClass('closed');
    $('.loginTop.targetDiv2 #memberlogin #email').removeClass('danger');
    $('.loginTop.targetDiv2 #memberlogin #email').removeClass('has-error');
    $('.loginTop.targetDiv2 #memberlogin #email').val('');
    $('.loginTop.targetDiv2 #memberlogin #password').val('');
    $('.loginTop.targetDiv2 #memberlogin #password').removeClass('danger');
    $('.loginTop.targetDiv2 #memberlogin #password').removeClass('has-error');
    
      $('.container nav').removeClass('open');
      $('.container .rightPart').fadeIn();
      $('html').removeClass('fixedAll');
if ( $( '.section' ).hasClass( "otherPages" ) ) {
}
else{
  $('.page-header').removeClass('darkAlways');
}
$('.page-header').removeClass('loginOpen');
if(!$('.hamburgerHome').is(":visible")){
  $('.leftPartInside').removeClass('openMenu');
}
$('.hamburgerHome').css('opacity', '1');
$('.hamburgerHome').css('right', '140px');
$('.loginTop').hide();
closeNav2();
}
}
});
</script>




<script>
$(document).ready(function() {
   
        $('.loginTop.targetDiv1 #memberlogin').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "/wp-content/themes/theme5/homepage/verification.php";
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                  // console.log('MORE' + data.type);
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                  // if(messageText == "ERROR"){
                  //   alert('ERROR');
                  // }
                  // if(messageText == undefined){
                  //   alert('ERROR');
                  // }
                  if(messageText == "PASS"){
                    window.location.href = "/demo/";
                    $('.loginTop.targetDiv1 .message').addClass('closed');
                    $('.loginTop.targetDiv1 #memberlogin #email').removeClass('danger');
                    $('.loginTop.targetDiv1 #memberlogin #email').removeClass('has-error');
                    $('.loginTop.targetDiv1 #memberlogin #password').removeClass('danger');
                    $('.loginTop.targetDiv1 #memberlogin #password').removeClass('has-error');
                  }
                  if(messageText == "ERROR" || messageText == "FAIL" || messageText == "BAD_USER_DATA"){
                    $('.loginTop.targetDiv1 .message').show();
                    $('.loginTop.targetDiv1 .message').removeClass('closed');
                    $('.loginTop.targetDiv1 #memberlogin #email').addClass('danger');
                    $('.loginTop.targetDiv1 #memberlogin #email').addClass('has-error');
                    $('.loginTop.targetDiv1 #memberlogin #password').addClass('danger');
                    $('.loginTop.targetDiv1 #memberlogin #password').addClass('has-error');
                  }
}
});
return false;
}
})
   
        $('.loginTop.targetDiv2 #memberlogin').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "<?php echo get_template_directory_uri(); ?>/homepage/retrieve_password.php";
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                  // console.log('MORE' + data.type);
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                   // if(messageText == "ERROR"){
                  //   alert('ERROR');
                  // }
                  // if(messageText == undefined){
                  //   alert('ERROR');
                  // }
                  if(messageText == "PASS" || messageText =="VALID_EMAIL"){
                    alert('SUCCESS');
                    $('.loginTop.targetDiv2 .message').addClass('closed');
                    $('.loginTop.targetDiv2 #memberlogin #email').removeClass('danger');
                    $('.loginTop.targetDiv2 #memberlogin #email').removeClass('has-error');
                  }
                  if(messageText == "ERROR" || messageText == "FAIL" || messageText == "BAD_USER_DATA"){
                    $('.loginTop.targetDiv2 .message').show();
                    $('.loginTop.targetDiv2 .message').removeClass('closed');
                    $('.loginTop.targetDiv2 #memberlogin #email').addClass('danger');
                    $('.loginTop.targetDiv2 #memberlogin #email').addClass('has-error');
                  }
}
});
return false;
}
})
});







$('.loginTop.targetDiv1 .message').click(function(){
  $('.loginTop.targetDiv1 .message').hide();
}); 


function successOne() {
    alert();
  }
  


</script>

<script>


$(window).on("load", function()  {
  
$('.overlay-content-inside').each(function(){  
      var highestBox = 0;
      $('.signupLogin', this).each(function(){
        if($(this).height() > highestBox) {
          highestBox = $(this).height(); 
          console.log(highestBox);
        }
      });  
      $('.signupLogin',this).height(highestBox + 30);
    }); 
    
});




$('.loginTop input').bind('focus', function(){
  $(this).removeClass('danger');
  $(this).removeClass('has-error');
});

</script>



<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/homepage/js/custom-file-input.js"></script>

<?php
}
else{
?>
<!-- footer -->
<div class="clear"></div>
</div>
<div class="footer">
  <div class="insideFooter">
    <div class="footerTable">
      <div class="footerCell left">
        <?php $mainSiteUrl = get_site_url();
        $mainSiteUrl = str_replace('/blog', '', $mainSiteUrl);
        ?>
        <a href="<?php echo $mainSiteUrl; ?>"><img width="122" src="<?php echo get_template_directory_uri(); ?>/images/logoFooter.svg" /></a>
      </div>

      <div class="footerCell">
        <a class="social" href="https://www.linkedin.com/company/atollogy-inc." target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
        <a class="social" href="https://twitter.com/atollogy" target="_blank"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
        <a class="social" href="https://www.facebook.com/Atollogy/" target="_blank"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
      </div>


      <div class="footerCell right">
          <a href="<?php echo $mainSiteUrl; ?>/terms-and-conditions">Terms & Conditions</a>
          <a href="<?php echo $mainSiteUrl; ?>/privacy-policy">Privacy Policy</a>
          <a href="<?php echo $mainSiteUrl; ?>/cookies-notice">Cookies Notice</a>
      </div>
    </div>

    <div class="clear"></div>
  </div>
</div>

<footer class="footer" role="contentinfo" style="display:none;">
  <div class="wrapper">
    <!-- copyright -->
    <p class="copyright">
      <!-- &copy; <?php echo date('Y'); ?> Copyright <a href="http://bca.rs" target="_blank">bca.rs</a> -->
    </p>
  </div>
  <!-- /copyright -->

</footer>
<!-- /footer -->


<!-- /wrapper -->

<?php wp_footer(); ?>

<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/static/jquery-latest.min.js"></script>

<script>

$(window).on("load", function()  {
  
$('.overlay-content-inside').each(function(){  
      var highestBox = 0;
      $('.signupLogin', this).each(function(){
        if($(this).height() > highestBox) {
          highestBox = $(this).height(); 
          console.log(highestBox);
        }
      });  
      $('.signupLogin',this).height(highestBox + 30);
    }); 
    
});


  var divWidth = $('.imageBackground').width(); 

  $(window).resize(function(){
    var divWidth = $('.imageBackground').width(); 
    $('.imageBackground').height(divWidth);
  });
</script>
<script>

  $(document).ready(function(){
    $('.imageBackground').height(divWidth);
  });
</script>

<script src="<?php echo get_template_directory_uri(); ?>/js/slick/slick.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript">
  $(document).on('ready', function() {
    $(this).scrollTop(0);
    $(".regular").slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1

    });


    /* EQUALISE HEIGHT */
    equalheight = function(container){

      var currentTallest = 0,
      currentRowStart = 0,
      rowDivs = new Array(),
      $el,
      topPosition = 0;
      $(container).each(function() {

        $el = $(this);
        $($el).height('auto')
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
          for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
          }
rowDivs.length = 0; // empty the array
currentRowStart = topPostion;
currentTallest = $el.height();
rowDivs.push($el);
} else {
  rowDivs.push($el);
  currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
}
for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
  rowDivs[currentDiv].height(currentTallest);
}
});
    }

    $(window).load(function() {
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var closeGDPR = $('.accept-btn');
closeGDPR.on('click', function(){
    var seen = getCookie('atollogyCookie');
    if(seen != 'seen') {
      setCookie('atollogyCookie', 'seen', 999999)
        $('.gdpr-bar').hide();
    }
    $('.gdbr-bar').hide();
});
var seen = getCookie('atollogyCookie');
     if(seen === 'seen'){
        $('.gdpr-bar').hide();
    }
      
      equalheight('.equalize');
    });


    $(window).resize(function(){
      equalheight('.equalize');
    });


    /* END EQUALISE HEIGHT */

  });

// Hide Header on on scroll down
// var didScroll;
// var lastScrollTop = 0;
// var delta = 5;
// var navbarHeight = $('header').outerHeight();

// $(window).scroll(function(event){
//     didScroll = true;
// });

// setInterval(function() {
//     if (didScroll) {
//         hasScrolled();
//         didScroll = false;
//     }
// }, 250);

// function hasScrolled() {
//     var st = $(this).scrollTop();

//     // Make sure they scroll more than delta
//     if(Math.abs(lastScrollTop - st) <= delta)
//         return;

//     // If they scrolled down and are past the navbar, add class .nav-up.
//     // This is necessary so you never see what is "behind" the navbar.
//     if (st > lastScrollTop && st > navbarHeight){
//         // Scroll Down
//         $('header').removeClass('nav-down').addClass('nav-up');
//     } else {
//         // Scroll Up
//         if(st + $(window).height() < $(document).height()) {
//             $('header').removeClass('nav-up').addClass('nav-down');
//         }
//     }

//     lastScrollTop = st;
// }

// if (window.DeviceOrientationEvent) {
//     window.addEventListener('orientationchange', function() { location.reload(); }, false);
// }

jQuery(window).load(function() {
  jQuery("#status, .preloadText").fadeOut();
  jQuery("#preloader").delay(500).fadeOut("slow");
})






$('.cd-btn').click(function(){
  $('.hamburgerHome').css('opacity', '0');
  $('.hamburgerHome').css('right', '2000px');
  $('.container nav').addClass('open');
  $('.container .rightPart').fadeOut();
  setTimeout(function(){ 
    $('.loginTop').fadeIn();
  }, 500);
// $('.leftPartInside').removeClass('openMenu');
openNav2();
$('.leftPartInside').addClass('openMenu');
$('.page-header').addClass('darkAlways');
$('.page-header').addClass('loginOpen');
$('#tidio-chat iframe').addClass('bottomsUp');

if ( $( '.page-header' ).hasClass( "dark" ) ) {
  $('.signupLogin').css('margin-top','90px');
}
else{
  $('.signupLogin').css('margin-top','130px');  
}



// $('body').addClass('fixedAll');
// $('.triggerHamburger').addClass('openWithLogin');
setTimeout(function() {
  $('html').addClass('fixedAll');
},500);
}); 

$('.container nav.pull-right .loginTop .fa-times').click(function(){
  $('.loginTop.targetDiv1 .message').addClass('closed');
    $('.loginTop.targetDiv1 #memberlogin #email').removeClass('danger');
    $('.loginTop.targetDiv1 #memberlogin #email').removeClass('has-error');
    $('.loginTop.targetDiv1 #memberlogin #email').val('');
    $('.loginTop.targetDiv1 #memberlogin #password').val('');
    $('.loginTop.targetDiv1 #memberlogin #password').removeClass('danger');
    $('.loginTop.targetDiv1 #memberlogin #password').removeClass('has-error');
    $('.loginTop.targetDiv2 .message').addClass('closed');
    $('.loginTop.targetDiv2 #memberlogin #email').removeClass('danger');
    $('.loginTop.targetDiv2 #memberlogin #email').removeClass('has-error');
    $('.loginTop.targetDiv2 #memberlogin #email').val('');
    $('.loginTop.targetDiv2 #memberlogin #password').val('');
    $('.loginTop.targetDiv2 #memberlogin #password').removeClass('danger');
    $('.loginTop.targetDiv2 #memberlogin #password').removeClass('has-error');
    
  $('.container nav').removeClass('open');
  $('.container .rightPart').fadeIn();
  $('.container nav.pull-right .loginTop').removeClass('forgotPasswordOut');
  $('.container nav.pull-right .loginTop.targetDiv2').removeClass('forgotPasswordBackIn');

  $('html').removeClass('fixedAll');

//$("#goHome").trigger('click');
if ( $( '.section' ).hasClass( "otherPages" ) ) {
}
else{
  $('.page-header').removeClass('darkAlways');
}
$('.page-header').removeClass('loginOpen');
if(!$('.hamburgerHome').is(":visible")){
  $('.leftPartInside').removeClass('openMenu');
// $('.triggerHamburger').removeClass('openWithLogin');
}
$('.hamburgerHome').css('opacity', '1');
$('.hamburgerHome').css('right', '140px');
$('.loginTop').hide();
$('#tidio-chat iframe').removeClass('bottomsUp');
closeNav2();
// $('body').removeClass('fixedAll');
}); 










</script>





<div id="modal-login" class="modal login" data-modal>
  <div class="modal-container">
    <div class="modal-close" data-close-modal></div>

    <div class="modal-content">
      <h1>Login</h1>
      <p>

        <input type="text" placeholder="Login">
        <input type="text" placeholder="Password">
        <input type="submit" class="submit" value="Login">


      </p>
    </div>
  </div>
</div>

<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/modalite.min.js"></script>

<script>
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  function openNav2() {
// document.getElementById("myNav2").style.height = "100%";
document.getElementById("myNav2").style.top = "0";
}
function closeNav2() {
  document.getElementById("myNav2").style.top = "100vh";
}
</script>

<script>
  (function($){
    $(function(){ 
// scroll is still position
var scroll = $(document).scrollTop();
var headerHeight = $('.page-header').outerHeight();
//console.log(headerHeight);

$(window).scroll(function() {
// scrolled is new position just obtained
var scrolled = $(document).scrollTop();

// optionally emulate non-fixed positioning behaviour
if (scrolled > headerHeight){
  $('.page-header').addClass('off-canvas');
} else {
  $('.page-header').removeClass('off-canvas');
}
if (scrolled > scroll){
// scrolling down
//$('.page-header').removeClass('fixed');
} else {
//scrolling up
//$('.page-header').addClass('fixed');
}       


if($(window).scrollTop() + $(window).height() == $(document).height()) {
  $('#tidio-chat iframe').addClass('bottomsUp');
}
else{
  $('#tidio-chat iframe').removeClass('bottomsUp');
}


scroll = $(document).scrollTop(); 
//console.log(scroll);
if(scroll >= 40){
//  $('.page-header').addClass('dark');
//  $('.page-header .between').addClass('dark');
//   $('.mobile-menu').addClass('dark');
//   $('.mobile-menu .between').addClass('dark');
//   $('.hamburgerHome').fadeIn();
// // $('.triggerHamburger').fadeOut();
// $('.leftPartInside').addClass('openMenu');
// }
// else{
//  $('.page-header').removeClass('dark');
//  $('.page-header .between').removeClass('dark');
//   $('.mobile-menu').removeClass('dark');
//   $('.mobile-menu .between').removeClass('dark');
//   $('.hamburgerHome').fadeOut();



//   if ( !$( '.pull-right.onePageScrollNavigation' ).hasClass( "open" ) ) {
// // $('.triggerHamburger').show();
// // $('.triggerHamburger').removeClass('openWithLogin');
// $('.leftPartInside').removeClass('openMenu');
// }


}
});
});
})(jQuery);   


$('.hamburgerHome').click(function(){
  $('.hamburgerHome').hide();
// $('.triggerHamburger').fadeIn();
$('.leftPartInside').removeClass('openMenu');
}); 


$('.forgotPassword').click(function(){

$('.loginTop.targetDiv1 #email').attr('tabindex', -1);
$('.loginTop.targetDiv1 #password').attr('tabindex', -1);

$('.loginTop.targetDiv2 #email').attr('tabindex',0);
$('.loginTop.targetDiv2 #password').attr('tabindex',0);


$('.loginTop.targetDiv1 .message').addClass('closed');
    $('.loginTop.targetDiv1 #memberlogin #email').removeClass('danger');
    $('.loginTop.targetDiv1 #memberlogin #email').removeClass('has-error');
    $('.loginTop.targetDiv1 #memberlogin #email').val('');
    $('.loginTop.targetDiv1 #memberlogin #password').val('');
    $('.loginTop.targetDiv1 #memberlogin #password').removeClass('danger');
    $('.loginTop.targetDiv1 #memberlogin #password').removeClass('has-error');
    $('.loginTop.targetDiv2 .message').addClass('closed');
    $('.loginTop.targetDiv2 #memberlogin #email').removeClass('danger');
    $('.loginTop.targetDiv2 #memberlogin #email').removeClass('has-error');
    $('.loginTop.targetDiv2 #memberlogin #email').val('');
    $('.loginTop.targetDiv2 #memberlogin #password').val('');
    $('.loginTop.targetDiv2 #memberlogin #password').removeClass('danger');
    $('.loginTop.targetDiv2 #memberlogin #password').removeClass('has-error');
  $('.container nav.pull-right .loginTop').addClass('forgotPasswordOut');
  $('.container nav.pull-right .loginTop.targetDiv2').addClass('forgotPasswordBackIn');
}); 

$('.forgotPasswordBack').click(function(){

$('.loginTop.targetDiv2 #email').attr('tabindex', -1);
$('.loginTop.targetDiv2 #password').attr('tabindex', -1);

$('.loginTop.targetDiv1 #email').attr('tabindex',0);
$('.loginTop.targetDiv1 #password').attr('tabindex',0);


  $('.loginTop.targetDiv1 .message').addClass('closed');
    $('.loginTop.targetDiv1 #memberlogin #email').removeClass('danger');
    $('.loginTop.targetDiv1 #memberlogin #email').removeClass('has-error');
    $('.loginTop.targetDiv1 #memberlogin #email').val('');
    $('.loginTop.targetDiv1 #memberlogin #password').val('');
    $('.loginTop.targetDiv1 #memberlogin #password').removeClass('danger');
    $('.loginTop.targetDiv1 #memberlogin #password').removeClass('has-error');
    $('.loginTop.targetDiv2 .message').addClass('closed');
    $('.loginTop.targetDiv2 #memberlogin #email').removeClass('danger');
    $('.loginTop.targetDiv2 #memberlogin #email').removeClass('has-error');
    $('.loginTop.targetDiv2 #memberlogin #email').val('');
    $('.loginTop.targetDiv2 #memberlogin #password').val('');
    $('.loginTop.targetDiv2 #memberlogin #password').removeClass('danger');
    $('.loginTop.targetDiv2 #memberlogin #password').removeClass('has-error');
  $('.container nav.pull-right .loginTop').removeClass('forgotPasswordOut');
  $('.container nav.pull-right .loginTop.targetDiv2').removeClass('forgotPasswordBackIn');
}); 



$(function() {
  $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
});
</script>




<style>
  .overlay-content{
    max-width: 100%;
    position: absolute;
    background: rgba(40, 84, 142, 1);
    background-size: cover;
  }
  /*.signupLogin {
    width: 40%;
    float: none;
    margin-top: 130px;
    color: #fff;
    font-size: 14px;
    background: rgba(0,0,0,.7);
    padding: 30px;
    margin-left: 50%;
    margin-bottom: 130px;
  }
  */.overlay-content .footer{
    background: #fff;
    margin-top:20px;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  .overlay2 {
    background: transparent;
  }
/*.signupLogin {
width: 40%;
float: none;
top: 0px;
color: #fff;
font-size: 14px;
background: rgba(0,0,0,.7);
padding: 30px;
left: 50%;
position: absolute;
}*/
@media screen and (max-width: 1480px) {
  .signupLogin {
    width: 45%;
  }

}
@media screen and (max-width: 1320px) {
  .signupLogin .cell{
    display: block;
  }
}


</style>


<script>

  $(document1).click(function(e) { 
    var $target = $(e.target);
    if($('.loginTop').is(":visible")){
      if(!$target.closest('.targetDiv1').length && !$target.hasClass('targetDiv1') && 
        !$target.closest('.targetDiv2').length && !$target.hasClass('targetDiv2')) {
        /* close on click outside */

      $('.container nav').removeClass('open');
      $('.container .rightPart').fadeIn();
      $('html').removeClass('fixedAll');

//$("#goHome").trigger('click');
if ( $( '.section' ).hasClass( "otherPages" ) ) {
}
else{
  $('.page-header').removeClass('darkAlways');
}
$('.page-header').removeClass('loginOpen');
if(!$('.hamburgerHome').is(":visible")){
  $('.leftPartInside').removeClass('openMenu');
// $('.triggerHamburger').removeClass('openWithLogin');
}
$('.hamburgerHome').css('opacity', '1');
$('.hamburgerHome').css('right', '140px');
$('.loginTop').hide();
closeNav2();


/* end close on click outside */



}
}
});


$(document).ready(function() {
   
        $('.loginTop.targetDiv1 #memberlogin').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "/wp-content/themes/theme5/homepage/verification.php";
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                  // console.log('MORE' + data.type);
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                  // if(messageText == "ERROR"){
                  //   alert('ERROR');
                  // }
                  // if(messageText == undefined){
                  //   alert('ERROR');
                  // }
                  if(messageText == "PASS"){
                    window.location.href = "/demo/";
          $('.loginTop.targetDiv1 .message').addClass('closed');
                    $('.loginTop.targetDiv1 #memberlogin #email').removeClass('danger');
                    $('.loginTop.targetDiv1 #memberlogin #email').removeClass('has-error');
                    $('.loginTop.targetDiv1 #memberlogin #password').removeClass('danger');
                    $('.loginTop.targetDiv1 #memberlogin #password').removeClass('has-error');                  
}
                  if(messageText == "ERROR" || messageText == "FAIL" || messageText == "BAD_USER_DATA"){
                    // $('.loginTop.targetDiv1 .message').fadeIn();
                    $('.loginTop.targetDiv1 .message').removeClass('closed');
                    $('.loginTop.targetDiv1 #memberlogin #email').addClass('danger');
                    $('.loginTop.targetDiv1 #memberlogin #email').addClass('has-error');
                    $('.loginTop.targetDiv1 #memberlogin #password').addClass('danger');
                    $('.loginTop.targetDiv1 #memberlogin #password').addClass('has-error');
                  }
}
});
return false;
}
})
});
</script>
<script>
$(document).ready(function() {
$('.loginTop.targetDiv2 #memberlogin').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "/retrieve_password.php";
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                  // console.log('MORE' + data.type);
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                   // if(messageText == "ERROR"){
                  //   alert('ERROR');
                  // }
                  // if(messageText == undefined){
                  //   alert('ERROR');
                  // }
                  if(messageText == "PASS" || messageText == "VALID_EMAIL"){
                    alert('SUCCESS');
          $('.loginTop.targetDiv2 .message').addClass('closed');
                    $('.loginTop.targetDiv2 #memberlogin #email').removeClass('danger');
                    $('.loginTop.targetDiv2 #memberlogin #email').removeClass('has-error');
                  }
                  if(messageText == "ERROR" || messageText == "FAIL" || messageText == "BAD_USER_DATA"){
                    // $('.loginTop.targetDiv2 .message').fadeIn();
                    $('.loginTop.targetDiv2 .message').removeClass('closed');
                    $('.loginTop.targetDiv2 #memberlogin #email').addClass('danger');
                    $('.loginTop.targetDiv2 #memberlogin #email').addClass('has-error');
                  }
}
});
return false;
}
})
});


$('.loginTop input').bind('focus', function(){
  $(this).removeClass('danger');
  $(this).removeClass('has-error');
});



</script>
<script src="<?php echo get_template_directory_uri(); ?>/homepage/js/validator.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/homepage/js/contact.js"></script>
<?php
}
?>
<script src="<?php echo get_template_directory_uri(); ?>/homepage/js/jquery.magnific-popup.min.js"></script>
<script>

$(document).ready(function() {
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });
});

</script>

<style>
 #banner {
    width: 100%;
    /*height:100%;*/
    /*background: rgba(0,0,0,.7);*/
    position: fixed;
    top: 80px;
    padding:0 20px;
    left: 0;
    text-align: center;
/*    -webkit-transition: all ease-out .9s;
    -moz-transition: all ease-out .9s;
    -o-transition: all ease-out .9s;
    transition: all ease-out .9s;
*/    z-index:10000;
    display: none;
}
.holder{
    position: relative;
    display: table-cell;
    /*height: 100vh;*/
    vertical-align: middle;
    text-align: center;
    width:100vw;
}
.insideHolder{
  position: relative;
  margin:0 auto;
  display: inline-block;
}
.closeButton{
    position:absolute;
    top:5px;
    right:5px;
    padding:3px 5px;
    z-index:20;
    color:#000;
    font-family: Arial;
    background:#fff;
    cursor: pointer;
}
.holder img{
    /*display: block;*/
}
#banner{
	top:-300px;
	display:block;
		-webkit-transition: all ease-out .7s;
	-moz-transition: all ease-out .7s;
	-o-transition: all ease-out .7s;
	transition: all ease-out .7s;
}
.bannerOpen{
	top:80px !important;
}
#banner.bannerDisabled{
  display: none !important;
}
@media screen and (max-width: 650px) {

#banner{
	display: table;
	height:100%;
	top:-900px;
		-webkit-transition: all ease-out .7s;
	-moz-transition: all ease-out .7s;
	-o-transition: all ease-out .7s;
	transition: all ease-out .7s;
}
.bannerOpen{
	top:0 !important;
}
}

</style>

<script>
$('.closeButton').click(function(){
$('#banner').fadeOut();
});
$('#banner').click(function(){
$('#banner').fadeOut();
});


$(document).on('ready', function() {
      $(".sliderResources").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 571,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
      });
    });
$('.tabMenu li').click(function(){
  
   
  var klikme = $(this).attr('data-ID');
  klikme = ".tabmenuItem." + klikme;
  // alert(klikme);
//  $('.tabmenuItem').fadeOut();
//  $(klikme).fadeIn();

  $('.tabMenu li').removeClass("active");
  


$('.tabmenuItem').fadeOut('slow').promise().done(function() {
    $(klikme).fadeIn('slow');
});



  $(this).addClass("active");

}); 

$('.submenuFrontPageSlide a').click(function(){
  var klikme = $(this).attr('data-ID');
  var changeBackgroundSlide = klikme;
  klikme = ".tabmenuItem." + klikme;
  // alert(klikme);
  //alert(changeBackgroundSlide);
  if(changeBackgroundSlide != undefined){
    $('.submenuFrontPageSlide a').addClass("doNotClickMe");
$('.submenuFrontPageSlide a').removeClass("active");
$('.industriesPage.mainSlide .background.I1').fadeOut('slow');
$('.industriesPage.mainSlide .background.I2').fadeOut('slow');
$('.industriesPage.mainSlide .background.I3').fadeOut('slow');
$('.industriesPage.mainSlide .background.I4').fadeOut('slow');
$('.industriesPage.mainSlide .background.I5').fadeOut('slow');
$('.tabmenuItem').fadeOut('slow').promise().done(function() {
    $(klikme).fadeIn('slow');
$('.industriesPage.mainSlide .background').removeClass('I1');
$('.industriesPage.mainSlide .background').removeClass('I2');
$('.industriesPage.mainSlide .background').removeClass('I3');
$('.industriesPage.mainSlide .background').removeClass('I4');
$('.industriesPage.mainSlide .background').removeClass('I5');
    $('.industriesPage.mainSlide .background').addClass(changeBackgroundSlide);
    $('.industriesPage.mainSlide .background').fadeIn('slow');
$('.submenuFrontPageSlide a').removeClass("doNotClickMe");
});

    }



  $(this).addClass("active");
}); 

$('.menuArrow').click(function(){
  
  if($(this).parent().hasClass('openMenuUL')){
    $(this).parent().removeClass('openMenuUL');
  }
else{
  $(this).parent().addClass('openMenuUL');
}
}); 

$('#menu li').click(function(){
  var dontClose = $(this).attr('data-CLOSE');
  // alert(dontClose);
  if(dontClose != undefined){
  $('#show-menu').prop('checked', false);
}
});

</script>

<script src='//www.google.com/recaptcha/api.js?onload=onloadCallback'></script>
    


<script> function captcha_onclick(e) {
 $('#recaptchaValidator').val(1);
 $('#contact-form').validator('validate'); 
} 

function captcha_onclick3(e) { $('#recaptchaValidator3').val(1); $('#contact-form3').validator('validate');} 
function captcha_onclick4(e) { $('#recaptchaValidator4').val(1); $('#contact-form4').validator('validate');} 
function captcha_onclick5(e) { $('#recaptchaValidator5').val(1); $('#contact-form5').validator('validate');} 
function captcha_onclick6(e) { $('#recaptchaValidator6').val(1); $('#contact-form6').validator('validate');} 
function captcha_onclick7(e) { $('#recaptchaValidator7').val(1); $('#contact-form7').validator('validate');} 
function captcha_onclick8(e) { $('#recaptchaValidator8').val(1); $('#contact-form8').validator('validate');} 
function captcha_onclick9(e) { $('#recaptchaValidator9').val(1); $('#contact-form9').validator('validate');} 
function captcha_onclick10(e) { $('#recaptchaValidator10').val(1); $('#contact-form10').validator('validate');} 
function captcha_onclick11(e) { $('#recaptchaValidator11').val(1); $('#contact-form11').validator('validate');} 
function captcha_onclick12(e) { $('#recaptchaValidator12').val(1); $('#contact-form12').validator('validate');} 
function captcha_onclick13(e) { $('#recaptchaValidator13').val(1); $('#contact-form13').validator('validate');} 
function captcha_onclick14(e) { $('#recaptchaValidator14').val(1); $('#contact-form14').validator('validate');} 
function captcha_onclick15(e) { $('#recaptchaValidator15').val(1); $('#contact-form15').validator('validate');} 
function captcha_onclick16(e) { $('#recaptchaValidator16').val(1); $('#contact-form16').validator('validate');} 
function captcha_onclick17(e) { $('#recaptchaValidator17').val(1); $('#contact-form17').validator('validate');} 
function captcha_onclick18(e) { $('#recaptchaValidator18').val(1); $('#contact-form18').validator('validate');} 
function captcha_onclick19(e) { $('#recaptchaValidator19').val(1); $('#contact-form19').validator('validate');} 
function captcha_onclick20(e) { $('#recaptchaValidator20').val(1); $('#contact-form20').validator('validate');} 



</script>
    

<style>

#tidio-chat iframe{
  bottom:40px !important;
}
.footer a,
.footer .fa,
.footer a .fa{
  margin:0;
}
.footer a{
  margin:0 10px;
}
</style>
<div class="gdpr-bar">
  <div  style="text-align:center;width:100%;">
    <span>We use cookies to help improve your experience of our website. To consent to this, click the OK button or simply continue using the site.</span>
    &nbsp;&nbsp;<a href="/cookies-notice"><button class="accept-btn1">Find out more</button></a>&nbsp;&nbsp;
    <button class="accept-btn">OK</button>
  </div>
</div>

</body>
</html>
