<?php get_header(); ?>

	<main role="main">
		<!-- section -->
		<section>

			<!-- <h1><?php _e( 'BCA Blog', 'BCATheme' ); ?></h1> -->

			<?php get_template_part('loop'); ?>

			<?php get_template_part('pagination'); ?>

		</section>
		<!-- /section -->
	</main>

<?php get_sidebar(); ?>
<div class="clear"></div>
<?php get_footer(); ?>
