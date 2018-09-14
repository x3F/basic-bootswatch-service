/* ========================================================================
 * jQuery Sliding Footer
 * ========================================================================
 */

jQuery(function($) {
	var open = false;

	var upIcon = 'glyphicon-chevron-up';
	var downIcon = 'glyphicon-chevron-down';
	//var upIcon = 'glyphicon-upload';
	//var downIcon = 'glyphicon-download';
	//var upIcon = 'glyphicon-circle-arrow-up';
	//var downIcon = 'glyphicon-circle-arrow-down';
	//var upIcon = 'glyphicon-menu-up';
	//var downIcon = 'glyphicon-menu-down';

	$('#sliding-footer-button').click(function () {
		if(open === false) {
			// Show the contents of the footer.
			$('#sliding-footer-contents-container').show();

			// Slide the footer up.
			$('#sliding-footer-contents-container').animate(
				{ height: '250px' },
			  function() {
					// Change the icon of the sliding footer button.
					$('#sliding-footer-button span').removeClass(upIcon).addClass(downIcon);
				});

			open = true;
		} else {
			// Slide the footer down.
			$('#sliding-footer-contents-container').animate(
				{ height: '0px' },
				function() {
					// Hide the contents of the footer.
					$('#sliding-footer-contents-container').hide();
					
					// Change the icon of the sliding footer button.
					$('#sliding-footer-button span').removeClass(downIcon).addClass(upIcon);
			  });

			open = false;
		}
	});
});
