// Handle CSS theme change.
$('#themePicker_ChangeTheme').click(function() {
  // DEBUG // alert('Chosen theme: [' + $('#themePickerSelection').val() + ']');

  // Change the CSS theme.
  $('#linkBootswatchCssTheme').attr('href', 'bootswatch-3.3.7/css/bootstrap.' + $('#themePickerSelection').val() + '.min.css');
  $('#linkBsDrawerCssTheme').attr('href', 'bootstrap-drawer-1.0.6/css/bs-drawer.' + $('#themePickerSelection').val() + '.css');

  // Close the theme picker modal popup.
  $('#themePickerModal').modal('toggle');
});
