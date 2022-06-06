<!-- pagination -->
<div class="pagination">
	<?php //html5wp_pagination(); ?>

<?php echo paginate_links( array(

  'prev_text' => '<span><i class="fa fa-chevron-left" aria-hidden="true"></i></span>',
  'next_text' => '<span><i class="fa fa-chevron-right" aria-hidden="true"></i></span>'

)); ?>

</div>
<!-- /pagination -->
