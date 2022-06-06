<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

?>
			</main><!-- #main -->
		</div><!-- #primary -->
	</div><!-- #content -->

	<?php get_template_part( 'template-parts/footer/footer-widgets' ); ?>

	<footer id="colophon" class="site-footer" role="contentinfo">

		<div class="footer-mnu">
			<div class="sec">
				<img src="<?php echo get_template_directory_uri(); ?>/assets/images/footerlogo.png"/>
			</div>
			<div class="sec">
				<?php dynamic_sidebar( 'footer-menu' ); ?>
			</div>
			<div class="sec">
				<?php dynamic_sidebar( 'contact-us' ); ?>
			</div>
			<div class="sec">
				<?php dynamic_sidebar( 'newsletter' ); ?>
			</div>

		</div>
	</footer><!-- #colophon -->

</div><!-- #page -->





<?php wp_footer(); ?>

<script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>


<script>
	$(document).ready(function(){
		$('.logoSlider ul').slick({

  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
   arrows: true,
   buttons: false,
   autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      
        
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
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
			
		});
	});
</script>
</body>
</html>
