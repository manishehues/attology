<?php $first = true; ?>
<?php $counterDivs = 0;?>
<?php if (have_posts()): while (have_posts()) : the_post(); ?>

	<!-- article -->

	<article id="post-<?php the_ID(); ?>" class="post<?php 
	if ( $first ):
	echo 'Big';
	// $first = false;
	endif; 
	if ( $counterDivs >0 ){
	echo $counterDivs;
	$equalize = " equalize";
	}
?>
">

		<!-- post thumbnail -->
		<?php if ( has_post_thumbnail()) : // Check if thumbnail exists ?>
<?php $thumbnail = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), "full" );?>
			<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
				<!-- <div class="imageBackground" style="background:url('<?php echo $thumbnail[0];?>') no-repeat;background-size:100%;background-position:center center;"> -->

      <?php if ( $first ){
the_post_thumbnail('');
$first = false;
 }
else{
?>
<div class="overlayRelatedPostsImage">
<div class="imageBackground" style="width=100%;background:url('<?php echo $thumbnail[0];?>') no-repeat;background-size:cover;background-position:center center;"></div>
</div>
<?php
// the_post_thumbnail('slider-thumb-alt');
      }
      ?>

			</a>
		<?php endif; ?>
		<!-- /post thumbnail -->

		<!-- post title -->
		<div class="caption <?php echo $equalize;?>">
		<h2>
			<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a>
		</h2>
		<?php html5wp_excerpt('html5wp_index'); // Build your custom callback length in functions.php ?>
		</div>
		<!-- /post title -->

		<!-- post details -->
		<!-- <span class="date"><?php the_time('F j, Y'); ?> <?php the_time('g:i a'); ?></span> -->
		<!-- <span class="author"><?php _e( 'Published by', 'BCATheme' ); ?> <?php the_author_posts_link(); ?></span> -->
		<!-- <span class="comments"><?php if (comments_open( get_the_ID() ) ) comments_popup_link( __( 'Leave your thoughts', 'BCATheme' ), __( '1 Comment', 'BCATheme' ), __( '% Comments', 'BCATheme' )); ?></span> -->
		<!-- /post details -->




<!-- <i class="fa fa-comment" aria-hidden="true"></i> <?php comments_popup_link('0', '1', '%'); ?> -->

<a class="readMoreSingle" href="<?php the_permalink(); ?>" title="<?php echo esc_attr( the_title_attribute( 'echo=0' ) ); ?>">Read more</a>	
	</article>
<!-- <p><?php edit_post_link(); ?></p> -->

	<!-- /article -->
<?php 
$counterDivs++;
if($counterDivs >3){
	$counterDivs = 1;
}
?>
<?php endwhile; ?>
<div class="clear"></div>
<?php else: ?>

	<!-- article -->
	<article>
		<h2><?php _e( 'Sorry, nothing to display.', 'BCATheme' ); ?></h2>
	</article>
	<!-- /article -->

<?php endif; ?>
