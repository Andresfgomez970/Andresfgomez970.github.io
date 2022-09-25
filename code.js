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
