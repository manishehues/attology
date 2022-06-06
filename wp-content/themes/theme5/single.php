<?php get_header(); ?>

	<main role="main">
	<!-- section -->
	<section>

	<?php if (have_posts()): while (have_posts()) : the_post(); ?>

		<!-- article -->
		<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
			<!-- post title -->
			<!-- /post title -->

			<!-- post thumbnail -->
			<?php if ( has_post_thumbnail()) : // Check if Thumbnail exists ?>
				<?php $thumbnail = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), "full" );;?>
				<!-- <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"> -->
				<div class="imageBackground" style="background:url('<?php echo $thumbnail[0];?>') no-repeat;background-size:100%;background-position:center center;">
					<?php the_post_thumbnail(); // Fullsize image for the single post ?>
					</div>
				<!-- </a> -->
			<?php endif; ?>
			<!-- /post thumbnail -->
			<h1>
				<!-- <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"> -->
				<?php the_title(); ?>
				<!-- </a> -->
			</h1>


			<!-- post details -->
			<!-- <span class="date"><?php the_time('F j, Y'); ?> <?php the_time('g:i a'); ?></span> -->
			<!-- <span class="author"><?php _e( 'Published by', 'BCATheme' ); ?> <?php the_author_posts_link(); ?></span> -->
			<!-- <span class="comments"><?php if (comments_open( get_the_ID() ) ) comments_popup_link( __( 'Leave your thoughts', 'BCATheme' ), __( '1 Comment', 'BCATheme' ), __( '% Comments', 'BCATheme' )); ?></span> -->
			<!-- /post details -->

			<?php the_content(); // Dynamic Content ?>

			<?php 
			$podData = get_post_meta(get_the_ID(), 'authors_name', true);
			if($podData != ""){
			echo "<div class='authorsName'>";
			echo "Author: ".$podData;
			echo "</div>";
			}
			 ?>

			<!--<?php the_tags( __( 'Tags: ', 'BCATheme' ), ', ', '<br>'); // Separated by commas with a line break at the end ?>-->

			<!--<p><?php _e( 'Categorised in: ', 'BCATheme' ); the_category(', '); // Separated by commas ?></p>-->

			<!-- <p><?php _e( 'This post was written by ', 'BCATheme' ); the_author(); ?></p>-->

			<!--<?php edit_post_link(); // Always handy to have Edit Post Links available ?>-->

			<? //php comments_template(); ?>

		</article>
		
		<!-- /article -->

	<?php endwhile; ?>

	<?php else: ?>

		<!-- article -->
		<article>

			<h1><?php _e( 'Sorry, nothing to display.', 'BCATheme' ); ?></h1>

		</article>
		<!-- /article -->

	<?php endif; ?>

	</section>
	<!-- /section -->


<hr>


<div class="clear"></div>


<h2 class="relatedPosts">Related posts</h2>



<?php
// Default arguments
$args = array(
	'posts_per_page' => 3, // How many items to display
	'post__not_in'   => array( get_the_ID() ), // Exclude current post
	'no_found_rows'  => true, // We don't ned pagination so this speeds up the query
);

// Check for current post category and add tax_query to the query arguments
$cats = wp_get_post_terms( get_the_ID(), 'category' ); 
$cats_ids = array();  
foreach( $cats as $wpex_related_cat ) {
	$cats_ids[] = $wpex_related_cat->term_id; 
}
if ( ! empty( $cats_ids ) ) {
	$args['category__in'] = $cats_ids;
}

// Query posts
$wpex_query = new wp_query( $args );

// Loop through posts
$relatedPostsDiv = 1;
foreach( $wpex_query->posts as $post ) : setup_postdata( $post ); ?>
<div class="relatedPosts<?php echo $relatedPostsDiv;?>">	
<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr( the_title_attribute( 'echo=0' ) ); ?>">
<?php $thumbnail = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), "full" );?>
<div class="overlayRelatedPostsImage">
<div class="imageBackground" style="width:100%;min-height:150px;background:url('<?php echo $thumbnail[0];?>') no-repeat;background-size:cover;background-position:center center;"></div>      
</div>
<div class="equalize">
<h2><?php the_title(); ?></h2>

<?php //html5wp_excerpt('html5wp_index'); // Build your custom callback length in functions.php 

$removedSharing =  get_the_excerpt();

$removedSharing = str_replace("Share on LinkedinShare on FacebookShare on Twitter", "", $removedSharing);
echo "<p>".$removedSharing."</p>";
	?>
	</a>
</div>	
<a class="readMoreSingle" href="<?php the_permalink(); ?>" title="<?php echo esc_attr( the_title_attribute( 'echo=0' ) ); ?>">Read more</a>	
	</div>

<?php
$relatedPostsDiv++;
// End loop
endforeach;

// Reset post data
wp_reset_postdata(); ?>








	</main>

<?php get_sidebar(); ?>

<?php get_footer(); ?>
