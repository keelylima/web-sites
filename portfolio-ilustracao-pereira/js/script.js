// $(document).ready(function(){

//     /*! Fades in page on load */
//     $('body').css('display', 'none');
//     $('body').fadeIn(500);
    
// });

// $('body').css('display', 'none');

$.ajax("index.html")
.done(function() {
   $('nav ul li a').click(function() {
       var href = $(this).attr('href');
    //    console.log(href);

    $('.container').hide().load(href).fadeIn(1000);
   })
})

// $.ajax("index.html")
// .done(function(){
//      $('body').hide().fadeIn("1000")
// }) 

// $.ajax("contato.html")
// .done(function(){
//      $('body').hide().fadeIn("1000")
// }) 