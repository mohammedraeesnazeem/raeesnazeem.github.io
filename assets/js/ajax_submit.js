/*
Created By: Aaron Tennyson @ http://aarontennyson.com
Date: January 13. 2011
Copyright 2011 Aaron Tennyson
*/

$(document).ready(function() {
	
	$('.contact-page #response').hide();
	
	$('#submit').click(function(e) {
		
		// prevent forms default action until
		// error check has been performed
		e.preventDefault();
				
		// grab form field values
		var valid = '';
		var required = ' is required.';
		var name = $('#name').val();
		var email = $('#email').val();
		var message = $('#message').val();
        var phone = $('#phone').val();
		var honeypot = $('#honeypot').val();
		var humancheck = $('#humancheck').val();
		
		// perform error checking
		if (name = '' || name.length <= 2) {
			valid = '<p>Your name' + required +'</p>';	
		}
		
		if (!email.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)) {
			valid += '<p>Your email' + required +'</p>';												  
		}
		
         if (phone = '' || phone.length <= 8){
            valid += '<p>A working phone number' + required +'</p>' 
        }
        
		if (message = '' || message.length <= 5) {
			valid += '<p>A message' + required + '</p>';	
		}
		
		if (honeypot != 'http://') {
			valid += '<p>Spambots are not allowed.</p>';	
		}
        
		if (humancheck != '') {
			valid += '<p>A human user' + required + '</p>';	
		}
		
		// let the user know if there are errors with the form
		if (valid != '') {
			
			$('.contact-page #response').removeClass().addClass('error').html('<p style="color:black"><strong>Oops! Looks like you have got Errors..</strong></p>' +valid).fadeIn('fast');			
		}
		// let the user know something is happening behind the scenes
		// serialize the form data and send to our ajax function
		else {
			
			$('.contact-page #response').removeClass().addClass('processing').html('<p style="color:white; font-weight:bold;">Processing your submission...</p>').fadeIn('fast');										
			
			var formData = $('form').serialize();
			submitForm(formData);			
		}			
			
	});
});

// make our ajax request to the server
function submitForm(formData) {
	console.log(formData);
	$.ajax({	
		type: 'POST',
		url: 'contactform.php',		
		data: formData,
		dataType: 'json',
		cache: false,
		timeout: 7000,
		success: function(data) { 			
			console.log(data);
			$('.contact-page #response').removeClass().addClass((data.error === true) ? 'error' : 'success')
						.html(data.msg).fadeIn('fast');	
						
			if ($('.contact-page #response').hasClass('success')) {
				
				setTimeout("$('.contact-page #response').fadeOut('fast')", 5000);
			}
		
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
						console.log(formData);
			$('.contact-page #response').removeClass().addClass('error')
						.html('<p>There was an<strong> ' + errorThrown +
							  '</strong> error due to a<strong> ' + textStatus +
							  '</strong> condition.</p>').fadeIn('fast');			
		},				
		complete: function(XMLHttpRequest, status) { 			
			
			$('form')[0].reset();
		}
	});	
};
