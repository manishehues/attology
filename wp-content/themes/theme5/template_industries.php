<?php /* Template Name: Industries pages Template */ get_header(); ?>
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
.industriesPage.mainSlide .background.I1{
	background:url('<?php echo get_template_directory_uri(); ?>/images/industries/aviation.jpg') center center;?>
}
.industriesPage.mainSlide .background.I2{
	background:url('<?php echo get_template_directory_uri(); ?>/images/industries/bulk-materials.jpg') center center;?>
}
.industriesPage.mainSlide .background.I3{
	background:url('<?php echo get_template_directory_uri(); ?>/images/industries/food-processing.jpg') center center;?>
}
.industriesPage.mainSlide .background.I4{
	background:url('<?php echo get_template_directory_uri(); ?>/images/industries/manufacturing_floor.jpg') center center;?>
}
.industriesPage.mainSlide .background.I5{
	background:url('<?php echo get_template_directory_uri(); ?>/images/industries/laboratories.jpg') center center;?>
}
</style>
<div style="width:0%;height:0%;position:absolute;opacity:0;">

	<img src='<?php echo get_template_directory_uri(); ?>/images/industries/aviation.jpg' />
	<img src='<?php echo get_template_directory_uri(); ?>/images/industries/bulk-materials.jpg' />
	<img src='<?php echo get_template_directory_uri(); ?>/images/industries/food-processing.jpg' />
	<img src='<?php echo get_template_directory_uri(); ?>/images/industries/manufacturing_floor.jpg' />
	<img src='<?php echo get_template_directory_uri(); ?>/images/industries/laboratories.jpg' />

</div>


<?php
if(get_the_ID() == 287){
	$slideClassBackground = "I1";
}
if(get_the_ID() == 289){
	$slideClassBackground = "I2";
}
if(get_the_ID() == 292){
	$slideClassBackground = "I3";
}
if(get_the_ID() == 266){
	$slideClassBackground = "I4";
}
if(get_the_ID() == 294){
	$slideClassBackground = "I5";
}
?>	
<div class="industriesPage mainSlide">
<div class="background <?php echo $slideClassBackground;?>"></div>
<div class="opacityHomeSlide"></div>
<div class="insideSlide">
<h2 class="Oswald"><?php echo get_the_title();?></h2>
<?php get_template_part("/templates/industrial-manufacturing-submenu"); ?>
</div>

</div>
<?php 
    global $post;
    $post_slug=$post->post_name;
?>
<?php get_template_part("/templates/".$post_slug."-content"); ?>

		<?php if (have_posts()): while (have_posts()) : the_post(); ?>
<div class="section otherPages">
<div class="inside">

				<?php the_content(); ?>
</div>
</div>
		<?php endwhile; ?>

		<?php endif; ?>


<?php get_footer(); ?>
