<?php if (have_posts()): while (have_posts()) : the_post(); ?>
<?php
$pods = pods( 'industry_resources', array( 'orderby' => 'menu_order', 'order' => 'DESC', 'limit' => -1)  );
while ($pods->fetch()) {

$industryResourceMainTitle = $pods->display(' title ');
$industryResourceTitle = $pods->display(' title_text ');
$industryResourceQuote = $pods->display(' quote ');
$industryResourceAuthor = $pods->display(' resource_author ');
$industryResourceUrl = $pods->display(' resource_url ');

if($industryResourceMainTitle == get_the_title() && $industryResourceTitle != ""){

?>
<div class="blueStrip" style="margin-bottom:50px;">
<div class="blueStripInner">
<h2 class="Oswald"><?php echo $industryResourceTitle;?></h2>
<p><?php echo $industryResourceQuote;?></p>
<p>&nbsp;</p>
<p><em><?php echo $industryResourceAuthor;?></em></p>
<p>&nbsp;</p>
<a href="<?php echo $industryResourceUrl;?>" target="_blank"><button>Read more</button></a>
</div>
</div>
<?php
}
}
?>
<?php endwhile; ?>
<?php endif; ?>
