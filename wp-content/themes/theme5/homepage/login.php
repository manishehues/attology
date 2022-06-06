<div id="myNav2" class="overlay2q">
  <div class="overlay-content">      
<div class="overlay-content-inside">   
<div class="signupLogin left">
<form method="post" action="/portal/login" role="form">
        <div class="messages"></div>
        <div class="formular2">
          <input type="hidden" name="titleText" value="New Signup from Atollogy website">
          <input type="hidden" name="Subject" value="New Signup from Atollogy website">
          <h2>LOGIN</h2>
          <h3>Enter your Username and Password below</h3>
          <div class="form-group">
            <label class="emailIcon"></label>
            <input type="text" id="email" name="email" placeholder="Email" class="fullWidth" />
          </div>
          <div class="form-group">
            <label class="passwordIcon"></label>
            <input type="password" class="fullWidth" id="password" name="password" placeholder="Password">
          </div>
          <div class="clear"></div>
          
          
<input type="submit" class="submit submitContact btn btn-success btn-send" value="Log In">
<button type="button" class="submit submitContact btn btn-success btn-send forgot" id="forget-pwd-link" onclick="test()">Forgot Password?</button>
<!-- <button class="submit submitContact btn btn-success btn-send forgot">Forgot Password?</button> -->
<!-- <div class="termsPrivacy">By signing up you agree to our <a href="<?php echo $mainSiteUrl;?>/privacy-policy">Privacy Policy</a></div> -->
<div class="clear"></div>
</div>
<div id="verify-email-modal" class="custom-modal">
              <!-- Modal content -->
            <div class="modal-content">
                <span class="close">&times;</span>
                <input type="text" id="verifyEmail" name="verifyEmail" placeholder="Verify Email" class="fullWidth" /> 
                <button type="button" class="btn-verify submit submitContact btn"  onclick="verify()">Verify Email</button>
                <div class="" id="message">

            </div>
         </div>
         </div>
</form>
<div class="loginNews noTablet">
<?php
$args = array( 'numberposts' => 2, 'order'=> 'DESC');
$postslist = get_posts( $args );
foreach ($postslist as $post) :  setup_postdata($post); ?> 
    <div class="loginNewsItem">
        <div class="loginNewsDate"><?php the_date(); ?></div>
        <div class="loginNewsTitle"><?php the_title(); ?></div>
        <div class="loginNewsExcerpt"><?php html5wp_excerpt('html5wp_index'); ?></div>
        <div class="loginNewsLink"><?php get_the_permalink(); ?></div>
    </div>
<?php endforeach; ?>
</div>

<div class="sliderTestimonials tablet">
    <section class="regular slider">


<?php
$args = array( 'numberposts' => 3, 'order'=> 'DESC');
$postslist = get_posts( $args );
foreach ($postslist as $post) :  setup_postdata($post); ?> 
    <div class="loginNewsItem">
        <div class="loginNewsDate"><?php the_date(); ?></div>
        <div class="loginNewsTitle"><?php the_title(); ?></div>
        <div class="loginNewsExcerpt"><?php html5wp_excerpt('html5wp_index'); ?></div>
        <div class="loginNewsLink"><?php get_the_permalink(); ?></div>
    </div>
<?php endforeach; ?>



          
    
    </section>
  </div>



    </div>

    <div class="signupLogin targetDiv2 blehr">
      <form id="contact-form3" method="post" action="<?php echo get_template_directory_uri(); ?>/homepage/contact.php" role="form">
        <div class="messages"></div>
        <div class="formular3">
          <input type="hidden" name="titleText" value="New Signup from Atollogy website Blog">
          <h2>START YOUR SMART OPERATIONS JOURNEY HERE</h2>
          <h3>Talk To An Atollogist</h3>
          <div class="form-group">
            <label class="nameIcon"></label>
            <input type="text" name="name" required="required" class="fullWidth" placeholder="Name *" />
          </div>
          <div class="form-group">
            <label class="emailIcon"></label>
            <input type="email" name="email" required="required" class="fullWidth" placeholder="Email *" />
          </div>
          <div class="form-group halfWidth first">
            <label class="phoneIcon"></label>
            <input type="text" name="phone" class="fullWidth " placeholder="Phone" />
            <div class="clear"></div>
          </div>
          <div class="form-group halfWidth">
            <label class="countryIcon"></label>
            <input type="text" pattern="[a-zA-Z ]{1,}" name="country" class="fullWidth" placeholder="Country" />
            <div class="clear"></div>
          </div>
          <div class="form-group halfWidth first">
            <label class="cityIcon"></label>
            <input type="text" pattern="[a-zA-Z ]{1,}" name="city" class="fullWidth" placeholder="City" />
            <div class="clear"></div>
          </div>
          <div class="form-group halfWidth">
            <label class="stateIcon"></label>
            <input type="text" pattern="[a-zA-Z ]{1,}" name="state" class="fullWidth" placeholder="State" />
            <div class="clear"></div>
          </div>
          <div class="clear"></div>

          <h4>What are you looking for to improve your operations?</h4>
          <div class="table">
            <div class="row">
              <div class="cell">
                <div class="form-group radioButton">
                  <input type="radio" name="InterestedIn" value="Improve Machine Utilization"><span>Improve Machine Utilization</span>
                </div>
              </div>
              <div class="cell">
                <div class="form-group radioButton">
                  <input type="radio" name="InterestedIn" value="Track Assets And Activities"><span>Track Assets And Activities</span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="cell">
                <div class="form-group radioButton">
                  <input type="radio" name="InterestedIn" value="Better Visibility to Operations Dynamics"><span>Beter Visibility to Operations Dynamics</span>
                </div>
              </div>
              <div class="cell">
                <div class="form-group radioButton">
                  <input type="radio" name="InterestedIn" value="Other"><span>Other</span>
                </div>

              </div>
            </div>
          </div>

<!-- <div class="form-group captcha">
<div class="tableCell captchaInput"><input placeholder="Please enter captcha" type="text" name="captcha" id="captcha" class="demoInputBox" required="required" data-error="Please,enter captcha."></div>
<div class="tableCell captchaImage"><img id="captcha_code" src="captcha_code.php" /></div>
</div>
-->

<div class="form-group" style="text-align:center;width:auto;display:inline-block;">
<!-- <label for="recaptchaValidator">Prove you're not a robot!</label> -->
<input type="text" name="recaptcha" value="" id="recaptchaValidator3" pattern="1" data-error="Sorry, no robots!" style="visibility: hidden; height: 1px;display:none;" required> 
<div class="g-recaptcha" data-sitekey="6LdyRI8UAAAAAKkz80CZMg4445n6ALcOCwWjKPSm" data-callback="captcha_onclick3"></div> <div class="help-block with-errors"></div>
</div>


<input type="submit" class="submit submitContact btn btn-success btn-send" value="Start My Journey">
<!-- <button class="submit">Join the Waitlist</button> -->
<div class="termsPrivacy">
By signing up, you have consented that Atollogy will use your contact details to provide the information you request and to inform our marketing and sales activities.<br>
Details of what we do with your personal data and your rights are explained in our <a href="<?php echo $mainSiteUrl;?>/privacy-policy">Privacy Policy</a></div>
</div>
</form>






</div>
<div class="clear"></div>

</div>
<div class="clear"></div>
</div>
<div class="clear"></div>
</div>
<div class="clear"></div>
