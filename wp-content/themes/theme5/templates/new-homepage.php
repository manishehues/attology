<?php
/* Template Name: new homepage*/


get_header('v2');
$bg_image = getbg_image(get_the_ID()); //wp_get_attachment_image_src( get_post_thumbnail_id( get_the_ID() ), 'single-post-thumbnail' );


 ?>
<div class="Desktop-Banner" style="background-image: url('<?php echo $bg_image;?>');">
	<div class="Banner-Content">
		<?php if (have_posts()): while (have_posts()) : the_post(); ?>
				<?php the_content(); ?>

				<?php comments_template( '', true ); ?>

			<?php endwhile; ?>

		<?php endif; ?>		
	</div>
</div>


<div id="Second-Sec">
	<div class="container">
		<div class="Manufacturing">
			<h2><?php the_field('tittle'); ?></h2>


			<?php if( have_rows('description') ): ?>			
				<?php while( have_rows('description') ): the_row();
				$peragaphp = get_sub_field('peragaphp');
								
			?>
				<div class="Manufacturing-Half">
					<p><?php echo $peragaphp; ?></p>
				</div>

			<?php endwhile;
				else :
				endif;
			?>
		</div>
	</div>
</div>


<div id="Services-Sec">
	<div class="container">

		<?php if( have_rows('services') ): ?>			
				<?php while( have_rows('services') ): the_row();
				$image = get_sub_field('image');
				$heading = get_sub_field('heading');
				$tittle = get_sub_field('tittle');
				$discription = get_sub_field('discription');
				$tag = get_sub_field('tag');
								
		?>
			<div class="Service-Same">
				<div class="For-Image">
					<img src="<?php echo $image['url']; ?>" alt="<?php echo $title; ?>">
				</div>
				<div class="ForContent">
					<h2><?php echo $heading; ?></h2>
					<span><?php echo $tittle; ?></span>
					<p><?php echo $discription; ?></p>
					<h6><?php echo $tag; ?></h6>
				</div>
			</div>
		<?php endwhile;
			else :
			endif;
		?>
	</div>
</div>


<div class="AboutAtollogy">
	<div class="container">
		<div class="flip">
			<div class="leftSec">
				<p><?php the_field('discription_about'); ?></p>
				<div class="leaenmore hide" style="display:none;">
					<?php the_field('button'); ?>
				</div>
			</div>
			<div class="rightSide">
				<h2><?php the_field('heading'); ?></h2>
				<h5><?php the_field('tag'); ?></h5>
				<div class="leaenmore">
					<?php the_field('button'); ?>
				</div>
			</div>
		</div>
	</div>
</div>


<div class="videoSection ">
		<a href=""><h4 id="playBtn" class="gradient">www.atollogy.com</h4></a>
	<video  id="myVideo" width="100%" height="600"  autoplay loop muted playsinline>
		<source src="<?php the_field('video'); ?>">
	</video>
</div>



<div class="How-it-work">
	<div class="container">
		<div class="title">
			<h2><?php the_field('top_heading'); ?></h2>
			<p><?php the_field('top_discription'); ?></p>
		</div>

		<?php if( have_rows('work') ): ?>			
				<?php while( have_rows('work') ): the_row();
				$icon = get_sub_field('icon');
				$tittle = get_sub_field('tittle');
				$discription = get_sub_field('discription');
								
		?>

			<div class="ourwork">
				<div class="icon">
					<img src="<?php echo $icon['url']; ?>" alt="<?php echo $title; ?>">
				</div>
				<h3><?php echo $tittle; ?></h3>
				<p><?php echo $discription; ?></p>
			</div>

		<?php endwhile;
			else :
			endif;
		?>
	</div>
</div>


<div class="Operational">
	<div class="container">
		<div class="title">
			<h2><?php the_field('improve_heading'); ?></h2>
			<p><?php the_field('improve_tittle'); ?></p>
		</div>


		<?php if( have_rows('image_reapter') ): ?>			
				<?php while( have_rows('image_reapter') ): the_row();
				$tittle = get_sub_field('tittle');
				$video = get_sub_field('video');
				$image = get_sub_field('image');
								
		?>

		<div class="imagereel">
			<h3><?php echo $tittle; ?></h3>
			 	<video  id="myVideo" width="100%" height="450"  autoplay loop muted playsinline>
					<source src="<?php echo $video; ?>">
				</video>
				<img src="<?php echo $image['url']; ?>" alt="<?php echo $title; ?>"> 
		</div>

		<?php endwhile;
			else :
			endif;
		?>

	</div>
</div>

<div class="fullIcon">
	<div class="icon">
		<ul>
			<?php if( have_rows('icons') ): ?>			
				<?php while( have_rows('icons') ): the_row();
				$icon = get_sub_field('icon');								
			?>
				<li><img src="<?php echo $icon['url']; ?>" alt="<?php echo $title; ?>"></li>

			<?php endwhile;
				else :
				endif;
			?>
		</ul>
	</div>
</div>

<div class="fullIcon">
	<div class="icon logoSlider" style="display:none ;">
		<ul>
			<?php if( have_rows('icons') ): ?>			
				<?php while( have_rows('icons') ): the_row();
				$icon = get_sub_field('icon');								
			?>
				<li><img src="<?php echo $icon['url']; ?>" alt="<?php echo $title; ?>"></li>

			<?php endwhile;
				else :
				endif;
			?>
		</ul>
	</div>
</div>


<div class="How-it-work Unique">
	<div class="container">
		<div class="title">
			<h2><?php the_field('unique_tittle'); ?></h2>
			<p><?php the_field('unique_discription'); ?></p>
		</div>




		<?php if( have_rows('unique_services') ): ?>			
				<?php while( have_rows('unique_services') ): the_row();
				$icon = get_sub_field('icon');	
				$tittle = get_sub_field('tittle');
								
		?>
			<div class="control">
				<div class="ourwork">
					<div class="icon">
						<img src="<?php echo $icon['url']; ?>" alt="<?php echo $title; ?>">
					</div>
					<h3><?php echo $tittle; ?></h3>

					<?php if( have_rows('discription') ): ?>			
						<?php while( have_rows('discription') ): the_row();
						$discription = get_sub_field('discription');
										
					?>
						<p><?php echo $discription; ?></p>
					<?php endwhile;
					else :
					endif;
					?>

				</div>
			</div>	

		<?php endwhile;
			else :
			endif;
		?>
	</div>
</div>



<div class="Partners">
	<div class="container">
		<div class="title">
			<h2><?php the_field('our_tittle'); ?></h2>
			<p><?php the_field('our_discription'); ?></p>
		</div>
		<div class="icon pat">

		<?php if( have_rows('our_partners') ): ?>			
				<?php while( have_rows('our_partners') ): the_row();
				$icon = get_sub_field('icon');	
				$tittle = get_sub_field('tittle');
								
		?>
			<ul>
				<?php if( have_rows('icone') ): ?>			
				<?php while( have_rows('icone') ): the_row();
				$icones = get_sub_field('icones');	
				?>
					<li><img src="<?php echo $icones['url']; ?>" alt="<?php echo $title; ?>"></li>
				<?php endwhile;
					else :
					endif;
				?>
			</ul>
		<?php endwhile;
			else :
			endif;
		?>

			<div class="Atollogy-Partnership">
				<a href="#wpcf7-f993-o1" class="btn">Interested in the Atollogy Partnership Ecosystem</a>
			</div>
		</div>

		<div class="icon logoSlider" style="display:none">

		<?php if( have_rows('our_partners') ): ?>			
				<?php while( have_rows('our_partners') ): the_row();
				$icon = get_sub_field('icon');	
				$tittle = get_sub_field('tittle');
								
		?>
			<ul>
				<?php if( have_rows('icone') ): ?>			
				<?php while( have_rows('icone') ): the_row();
				$icones = get_sub_field('icones');	
				?>
					<li><img src="<?php echo $icones['url']; ?>" alt="<?php echo $title; ?>"></li>
				<?php endwhile;
					else :
					endif;
				?>
			</ul>
		<?php endwhile;
			else :
			endif;
		?>

			<div class="Atollogy-Partnership">
				<a href="#wpcf7-f993-o1" class="btn">Inffterested in the Atollogy Partnership Ecosystem</a>
			</div>
		</div>
	</div>
</div>


<div class="submit">
	<div class="Contact-form">
		
		<?php the_field('form'); ?>
	</div>
	<div class="map">
		<?php //the_field('map'); ?>
		<!-- <img src="<?php echo get_template_directory_uri(); ?>/assets/images/saf.jpg"/> -->
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.2900991207484!2d-121.94072258469421!3d37.359312079837125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcbb721109755%3A0x432bce2fb6b05ffd!2s1650%20Coleman%20Ave%2C%20Santa%20Clara%2C%20CA%2095050%2C%20USA!5e0!3m2!1sen!2sin!4v1627462259480!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
	</div>
</div>


<?php
get_footer('v2');