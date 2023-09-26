$(function () {
  // jQuery goes here...
;
$('window').on('keydown', function(event){
  // console.log(event.which) // number of the key
  // console.log(event.type) // keydown or keyup
})
$('window').on('keydown', function(event){
  if(event.which == 39){
    console.log('...')
    $('.blue-box').css('margin-left','+=10px')
  }
})
 function slideAnimation(event,kk){
   index = (index + 1) % images.length;
   $(event.target).fadeOut(1000,function(){
     $(this).attr('src',images[index])
     $(this).fadeIn(1000)
   })
 }

 let images = [
   'images/laptop-mobile_small.jpg',
   'images/laptop-on-table_small.jpg',
   'images/people-office-group-team_small.jpg'
 ]
 let index = 0;
 $('.gallery').find('img').first().on('click', slideAnimation)

 $('.gallery').find('img').first().on('click', function(){
   index = (index + 1) % images.length;
   $(this).fadeOut(1000, function(){
     $(this).attr('src',images[index]);
     $(this).fadeIn(1000)
   })
 })
 
});

