<?php /* Template Name: Other Pages Template */ get_header(); ?>
<?php if (have_posts()): while (have_posts()) : the_post(); ?>
<?php $template_name_with_dash = strtolower(str_replace(" ", "-", get_the_title()));?>

<?php
if ( !file_exists (get_template_directory()."/templates/".$template_name_with_dash.".php") ) {
?>
<div class="section otherPages">
<div class="inside">
<h2 class="Oswald"><?php the_title();?></h2>
<?php
//echo "<p>No template set</p>";
the_content();
?>
</div>
</div>

     <?php
}
else{
get_template_part("/templates/".$template_name_with_dash);
}
endwhile; 
endif; ?>


				<!-- <?php the_content(); ?> -->
<?php get_footer(); ?>
