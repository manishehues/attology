<div id="Careers" class="section">
<div class="beforeInsideCareers">

<div class="insideCareersBanner">
<div class="insideCareersBannerText">
<h2>We want to hire you!</h2>
<h3>Roll up your sleeves and dive in</h3>
</div>
</div>



<div class="insideCareers">
<h2 class="centeredH2">DO WHAT YOU LOVE, LOVE WHAT YOU DO</h2>
<h3 class="centeredH3">&nbsp;<!-- Disrupt Operations --></h3>
<div class="mainPart">

<?php if (have_posts()): while (have_posts()) : the_post(); ?>
  <div class="contentCareersWP">
  <?php the_content();?>

<div class="openPositions">
<h3>Check out these positions NOW</h3>
<?php
$formNumber = 4;
$pods = pods( 'career', array( 'orderby' => 'menu_order', 'order' => 'DESC')  );
while ($pods->fetch()) {
?>
<?php


$contentTitle = $pods->display('title');
?>
<button class="contactButton1 checkCareers" data-careers="careers<?php echo $formNumber;?>"><?php echo $contentTitle;?></button>

<?php
$formNumber++;
}
?>
<div class="clear"></div>
</div>


  </div>
<?php endwhile; ?>
<?php endif; ?>
<!-- 
<p>Our mission is to make operational excellence easy and accessible for manufacturers of all shapes and sizes. Atollogy’s proprietary algorithms and capabilities are revolutionizing how companies manage operations by integrating the physical world with artificial intelligence. Our team of Atollogists has more than 100 years of combined manufacturing industry experience with diverse and unique backgrounds.</p>

<p>If you are passionate about building IIoT-based big data solutions for enterprises and are looking to get in on the ground floor of a fast-growing startup, then look no further than Atollogy!</p>
 -->
</div>

<div class="insideCareersSidebar">

<div class="sidebarTitle">What Atollogists Stand For</div>

<div class="numberSidebar">01</div>
<div class="textSidebar">Delight our customers</div>


<div class="numberSidebar">02</div>
<div class="textSidebar">Passion for what we build</div>

<div class="numberSidebar">03</div>
<div class="textSidebar">Excellence in everything we do</div>

<div class="numberSidebar">04</div>
<div class="textSidebar">Respect other's time, collaborate openly and have fun</div>

<div class="numberSidebar">05</div>
<div class="textSidebar">Work hard and succeed together</div>



<!-- <ul>
<li><div class="roundedNumber">1</div>Delight our customers</li>
<li><div class="roundedNumber">2</div>Passion for what we build</li>
<li><div class="roundedNumber">3</div>Excellence in everything we do</li>
<li><div class="roundedNumber">4</div>Respect others time, collaborate openly and have fun</li>
<li><div class="roundedNumber">5</div>Work, fail, and succeed together</li>
</ul>

 -->
</div>
<div class="clear"></div>

<!-- <div class="openPositions">
<h3>Check out these positions NOW</h3>
<?php
$formNumber = 4;
$pods = pods( 'career', array( 'orderby' => 'menu_order', 'order' => 'DESC')  );
while ($pods->fetch()) {
?>
<?php


$contentTitle = $pods->display('title');
?>
<button class="contactButton1 checkCareers" data-careers="careers<?php echo $formNumber;?>"><?php echo $contentTitle;?></button>

<?php
$formNumber++;
}
?>
</div> -->

<div class="clear"></div>

</div>


<div id="Perks" class="section">
<div class="insidePerks">

<h2>PERKS FOR ATOLLOGISTS</h2>
<!-- <h3>What'll you get:</h3> -->
<!-- <h2>Here is our perks</h2>
<h3>What'll you get:</h3>
 -->
<div class="table">

<div class="row">
<div class="cell image">
<img src="<?php echo get_template_directory_uri(); ?>/homepage/images/perks/PerksIcon1.jpg">
</div>
<div class="cell">
Early stage equity
</div>
<div class="cell image">
<img src="<?php echo get_template_directory_uri(); ?>/homepage/images/perks/PerksIcon5.jpg">
</div>
<div class="cell">
Engage with management regularly
</div>
</div>

<div class="row">
<div class="cell image">
<img src="<?php echo get_template_directory_uri(); ?>/homepage/images/perks/PerksIcon2.jpg">
</div>
<div class="cell">
Competitive medical, dental, and vision insurance for you and your family
</div>
<div class="cell image">
<img src="<?php echo get_template_directory_uri(); ?>/homepage/images/perks/PerksIcon6.jpg">
</div>
<div class="cell">
Get in on the ground floor of a huge opportunity
</div>
</div>

<div class="row">
<div class="cell image">
<img src="<?php echo get_template_directory_uri(); ?>/homepage/images/perks/PerksIcon3.jpg">
</div>
<div class="cell">
401(k) and pre-tax health care, dependent care and commuter benefits (FSA)
</div>
<div class="cell image">
<img src="<?php echo get_template_directory_uri(); ?>/homepage/images/perks/PerksIcon7.jpg">
</div>
<div class="cell">
Mac or PC
</div>
</div>

<div class="row">
<div class="cell image">
<img src="<?php echo get_template_directory_uri(); ?>/homepage/images/perks/PerksIcon4.jpg">
</div>
<div class="cell">
“No policy” vacation policy
</div>
<div class="cell image">
<img src="<?php echo get_template_directory_uri(); ?>/homepage/images/perks/PerksIcon8.jpg">
</div>
<div class="cell">
Snacks-a-plenty, frequent team lunches & happy hours
</div>
</div>
<div class="clear"></div>
</div>
</div>
</div>


<img class="bigImage" src="<?php echo get_template_directory_uri(); ?>/homepage/images/careersImage1.jpg">




<?php
$formNumber = 4;
$pods = pods( 'career', array( 'orderby' => 'menu_order', 'order' => 'DESC')  );
while ($pods->fetch()) {
?>
<?php

$contentCareers = $pods->display('content');
$contentTitle = $pods->display('title');
$position_link = $pods->display('position_link');
// $contentCareers = str_replace("<p>", "", $contentCareers);
// $contentCareers = str_replace("</p>", "", $contentCareers);
?>
<div id="careers<?php echo $formNumber;?>" class="outsideCareers">
<div class="insideCareers">
<div class="mainPart" style="width:100%;">
        <h2><?php echo $contentTitle;?></h4>  
        <?php echo $contentCareers; ?>

<?php
if($position_link){
?>
<a href="<?php echo $position_link;?>" target="_blank"><button class="applyHere">Apply Here</button></a>
<?php
}
?>
      </div>

<!-- <div class="insideCareersSidebar halfWidth" style="display: none;">
<div class="ContactForm">
      <form class="careersFormClass" id="contact-form<?php echo $formNumber;?>" method="post"  role="form" name="attachFile<?php echo $formNumber;?>" enctype="multipart/form-data">
        <div class="messages"></div>
        <div class="formular">
          <input type="hidden" name="titleText" value="New Message from Atollogy website">
          <input type="hidden" name="Subject" value="New Message from Atollogy website - Careers section / Applying for <?php echo $contentTitle;?> position ">
          

          <div class="form-group">
            <label class="nameIcon"></label>
            <input id="form_name" type="text" name="name" class="form-control" placeholder="Full Name *" required="required" data-error="Firstname is required.">
          </div>
          

<div class="form-group">
  <label class="emailIcon"></label>
  <input id="form_email" type="email" name="email" class="form-control" placeholder="Email address *" required="required" data-error="Valid email is required.">
</div>

<div class="form-group fileInputCustom">
  

 <input accept=".pdf, .doc, .docx" data-ext="accept" type="file" name="attachFileDe-0<?php echo $formNumber;?>" id="attachFileDe-0<?php echo $formNumber;?>" class="inputfile inputfile-1"  data-multiple-caption="{count} files selected" multiple />
          <label for="attachFileDe-0<?php echo $formNumber;?>"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> <span>Upload your CV (PDF or DOC)</span></label>
</div>

          <div class="form-group">
            <label class="wwwIcon"></label>
            <input id="form_name" type="text" name="website" class="form-control" placeholder="Website URL / GitHub URL">
          </div>
          
          <div class="form-group">
            <label class="linkedinIcon"></label>
            <input id="form_name" type="text" name="linkedin_profile" class="form-control" placeholder="LinkedIN Profile *" required="required" data-error="Firstname is required.">
          </div>
          
          <div class="form-group">
            <label class="salaryIcon"></label>
            <input id="form_name" type="text" name="desired_salary" class="form-control" placeholder="Desired Salary">
          </div>



<div class="form-group" style="background:#fff;">

<input type="text" name="recaptcha" value="" id="recaptchaValidator<?php echo $formNumber;?>" pattern="1" data-error="Sorry, no robots!" style="visibility: hidden; height: 1px;display:none;" required> 
<div class="g-recaptcha" data-sitekey="6LdyRI8UAAAAAKkz80CZMg4445n6ALcOCwWjKPSm" data-callback="captcha_onclick<?php echo $formNumber;?>"></div> <div class="help-block with-errors"></div>
</div>

<input type="submit" class="submitContact btn btn-success btn-send" value="Hire Me">
</div>
</form>
<div class="clear"></div>


</div>




</div> -->
<div class="clear"></div>

</div>
</div>

<?php
$formNumber++;
}
?>
























































</div>
</div>


