// Add functinality for serving content in different languages

$('#language').on('click', function(){
   $('body').addClass('active-modal');
   $('.language-box').addClass('modal-show');
 });


 $('.overlay').on('click', function(){
   $('body').removeClass('active-modal');
   $('.language-box').removeClass('modal-show');
 })

 $('#support').on('click', function(){
  $('body').addClass('active-modal');
  $('.support-box').addClass('modal-show');
});

$('.overlay').on('click', function(){
  $('body').removeClass('active-modal');
  $('.support-box').removeClass('modal-show');
})


$('#pay').on('click', function(){
	$('body').addClass('active-modal');
	$('.pay-box').addClass('modal-show');
  });
  
  $('.overlay').on('click', function(){
	$('body').removeClass('active-modal');
	$('.pay-box').removeClass('modal-show');
  })
  

(function($) {

	"use strict";


  // Form
	var contactForm = function() {
		if ($('#contactForm').length > 0 ) {
			$( "#contactForm" ).validate( {
				rules: {
					name: "required",
					subject: "required",
					email: {
						required: true,
						email: true
					},
					message: {
						required: true,
						minlength: 5
					}
				},
				messages: {
					name: "Please enter your name",
					subject: "Please enter your subject",
					email: "Please enter a valid email address",
					message: "Please enter a message"
				},
				/* submit via ajax */
				
				submitHandler: function(form) {		
					var $submit = $('.submitting'),
						waitText = 'Submitting...';

					$.ajax({   	
				      type: "POST",
				      url: "php/sendEmail.php",
				      data: $(form).serialize(),

				      beforeSend: function() { 
				      	$submit.css('display', 'block').text(waitText);
				      },
				      success: function(msg) {
		               if (msg == 'OK') {
		               	$('#form-message-warning').hide();
				            setTimeout(function(){
		               		$('#contactForm').fadeIn();
		               	}, 1000);
				            setTimeout(function(){
				               $('#form-message-success').fadeIn();   
		               	}, 1400);

		               	setTimeout(function(){
				               $('#form-message-success').fadeOut();   
		               	}, 8000);

		               	setTimeout(function(){
				               $submit.css('display', 'none').text(waitText);  
		               	}, 1400);

		               	setTimeout(function(){
		               		$( '#contactForm' ).each(function(){
											    this.reset();
											});
		               	}, 1400);
			               
			            } else {
			               $('#form-message-warning').html(msg);
				            $('#form-message-warning').fadeIn();
				            $submit.css('display', 'none');
			            }
				      },
				      error: function() {
				      	$('#form-message-warning').html("Something went wrong. Please try again.");
				         $('#form-message-warning').fadeIn();
				         $submit.css('display', 'none');
				      }
			      });    		
		  		} // end submitHandler

			});
		}
	};
	contactForm();

})(jQuery);

function responsiveIcon(){
	var x = document.getElementById("pageTopnav");
	if (x.className === "header") {
	  x.className += " responsive";
	} else {
	  x.className = "header";
	}
}

document.querySelector('.dropbtn').addEventListener('click', function() {
    // This will toggle the dropdown's visibility when the button is clicked
    var dropdownContent = this.nextElementSibling;
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});


// (function () {
//     const resize = () => {
//         let rooms = document.getElementsByClassName('room');

//         for (let room of rooms) {
//             let scale = (window.innerWidth - 15) / room.offsetWidth;
//             room.style.transform = 'scale(' + scale + ')';
//         }
//     }

//     window.onload = () => resize();
//     window.onresize = () => resize();
// })();
