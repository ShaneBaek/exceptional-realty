$(function() {

 //////Mobile Menu/////
 $('a.menu-icon').click(function() {
 	$('#menu-links').slideToggle();
 });

 /////Fix Hidden Links on window resize////
 $(window).resize(function() {
 	if ($(window).width() > 700) {
 		$('#menu-links').removeAttr('style');
 	}
 });

 /////// Contact Form Validation ///////
 function validateName(fullname) {
 	if(fullname.length > 2) {
 		$('#fullname').removeClass('error');
 		$('#fullname-error').hide();
 		return true;
 	} else {
 		$('#fullname').addClass('error');
 		$('#fullname-error').show();
 		return false;
 	}
 }

function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);;
	if(re.test(email)) {
        $('#email').removeClass('error');
 		$('#email-error').hide();
 		return true;
	} else {
        $('#email').addClass('error');
 		$('#email-error').show();
 		return false;
	}
}

function validateMessage(message) {
	if (message.length > 0) {
        $('#message').removeClass('error');
 		$('#message-error').hide();
 		return true;
	} else {
        $('#message').removeClass('error');
 		$('#message-error').show();
 		return false;
	}
}


 $('form').submit(function(event) {

    var fullname = $('#fullname').val(),
        email = $('#email').val(),
        message = $.trim$('#message').val();

    if (validateName(fullname) & validateEmail(email) & validateMessage(message)) {
        return true; //submit form.
    } else {
        event.preventDefault(); //prevent form from submitting!
    }
 });

});