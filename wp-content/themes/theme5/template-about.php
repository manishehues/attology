<?php /* Template Name: About Template */ get_header(); ?>
<div id="Company" class="section">
<div class="slideshowInner two">
<!-- 
<div class="classOne"><div class="inside slide1"></div></div>
<div class="classOne"><div class="inside slide2"></div></div>
<div class="classOne"><div class="inside slide3"></div></div>
<div class="classOne"><div class="inside slide5"></div></div>
<div class="classOne"><div class="inside slide8"></div></div>
-->
<div class="classOne"><div class="inside slide9"></div></div>
<div class="classOne"><div class="inside slide10"></div></div>
<div class="classOne"><div class="inside slide11"></div></div>
<div class="classOne"><div class="inside slide12"></div></div>
<div class="classOne"><div class="inside slide13"></div></div>
<!-- <div class="classOne"><div class="inside slide14"></div></div> -->
<div class="classOne"><div class="inside slide15"></div></div>
<div class="classOne"><div class="inside slide16"></div></div>
<div class="classOne"><div class="inside slide17"></div></div>
</div>


  <div class="insideCompany">
    <h2 class="tablet Oswald">About Atollogy</h2>
    <div class="insideInsideCompany team">
      <h2 class="noTablet Oswald">About Atollogy</h2>
      <p>
        Our mission is to make operational excellence easy and accessible for companies of all shapes and sizes.  Atollogy’s proprietary algorithms and capabilities are revolutionizing how companies manage operations by integrating the physical world with artificial intelligence.  Our team of Atollogists has more than 100 years of combined manufacturing industry experience with diverse and unique backgrounds.
      </p>
</div>
<div class="subpageSectionOne gray">
<div class="subpageSectionOneInside">

<h2 class="Oswald">OUR TEAM</h2>


<div class="subpageTable team">



<?php
$pods = pods( 'team_members', array('orderby' => 'menu_order', 'order' => 'DESC', 'limit' => -1)  );
while ($pods->fetch()) {
$title = $pods->display('title');
$job_title = $pods->display('job_title');
$main_image = $pods->display('main_image');
$second_image = $pods->display('second_image');
$linkedin_url = $pods->display('linkedin_url');
$on_hover_text = $pods->display('on_hover_text');

?>

<div class="subpageCell teamItem equalize">
<h3><?php echo $title;?></h3>
<div class="teamImage" style="background: url('<?php echo $main_image;?>');">
<img src="<?php echo $second_image;?>"><br>
</div>
<p><?php echo $job_title;?></p>
<a class="social" href="<?php echo $linkedin_url;?>" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
<div class="hidden"><?php echo $on_hover_text;?></p>
</div>

</div>

<?php
}
?>
<div class="clear"></div>
</div>

</div>
</div>


  <div class="insideCompany" style="margin-top:70px;">
      <p>
        If you are passionate about building IIoT-based big data solutions for enterprises and are looking to get in on the ground floor of a fast-growing startup, then look no further than Atollogy! 
      </p>
      
      <a href="<?php echo get_the_permalink(87); ?>"><button class="" data-open-modal1="modal-show-me">View Careers</button></a>
    </div>
  </div>
</div>


		<?php if (have_posts()): while (have_posts()) : the_post(); ?>
<!-- <div class="section otherPages">
<div class="inside">

				<?php the_content(); ?>
</div>
</div> -->
		<?php endwhile; ?>

		<?php endif; ?>


<?php get_footer(); ?>
