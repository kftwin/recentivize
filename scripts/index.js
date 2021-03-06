// =====================================================================================================================
// Global Variables
// =====================================================================================================================





// =====================================================================================================================
// Run after DOM is ready
// =====================================================================================================================
$(function() {
	
	getData();

});




// =====================================================================================================================
// Run on window resize
// =====================================================================================================================
$(window).resize(function() {
	
});









// =====================================================================================================================
// Get Data
// - Grabs some test data
// =====================================================================================================================
function getData(){
	console.log('yep');
	
	$.ajax({
		type	: 'POST',
		url		: WEB_URL + 'ajax/getData.php',
		data	: { },
		dataType: 'json',
		success	: function(returnData){
			// No error, go ahead
			if(returnData.err == false){
				console.log('Getting data\t\t\t\t - [SUCCESS]');
				console.log('• ' + returnData.msg);
				
				// Put the data in the page
				$('#testData').text(returnData.data);
			}
			// Display error
			else{ console.log('Getting data\t\t\t\t - [ERROR]\n' + '• ' + returnData.msg); }
			
		},
		error	: function(){ console.log('ERROR: ajax/getData.php is busted!'); }
	});
}