<?php /* Template Name: Products pages Template */ get_header(); ?>
<style>
.industriesPage.mainSlide .background{
	z-index: 0;
	background-size:cover;
	z-index: 0;
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	height:100%;
	width:100%;
}
.industriesPage.mainSlide .background {
	background:url('<?php echo get_template_directory_uri(); ?>/images/products/default.jpg') center center;?>
}
.industriesPage.mainSlide .background.ground-operations-background{
	background:url('<?php echo get_template_directory_uri(); ?>/images/products/ground-operations-background.jpg') center center;?>
}

.industriesPage.mainSlide .background.manufacturing-operations-management-background{
	background:url('<?php echo get_template_directory_uri(); ?>/images/products/manufacturing-operations-management-background.jpg') center center;?>
}

.industriesPage.mainSlide .background.yard-operations-management-background{
	background:url('<?php echo get_template_directory_uri(); ?>/images/products/yard-operations-management-background.jpg') center center;?>
}

</style>

<?php
$productsBackground = "";
if(get_the_ID() == 278){
$productsBackground = "ground-operations-background";
}
if(get_the_ID() == 280){
$productsBackground = "manufacturing-operations-management-background";
}
if(get_the_ID() == 283){
$productsBackground = "yard-operations-management-background";
}
?>

<div class="industriesPage mainSlide Products">
<div class="background <?php echo $productsBackground;?>"></div>
<div class="opacityHomeSlide"></div>
<div class="insideSlide">
<h2 class="Oswald"><?php echo get_the_title();?></h2>
<?php //get_template_part("/templates/industrial-manufacturing-submenu"); ?>
</div>

</div>
<?php 
    global $post;
    $post_slug=$post->post_name;
?>
<?php get_template_part("/templates/".$post_slug."-content"); ?>

		<?php if (have_posts()): while (have_posts()) : the_post(); ?>
<!-- <div class="section otherPages">
<div class="inside">

				<?php the_content(); ?>
</div>
</div> -->
		<?php endwhile; ?>

		<?php endif; ?>


<?php get_footer(); ?>
