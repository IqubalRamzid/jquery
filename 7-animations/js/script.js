$(function () {
 
// fusioner CSS() , ON(), $(this);
$('.red-box').on('mouseenter', function(){
    // CODE HERE
    
    $(this).css('cursor', 'pointer');

    $(this).css('font-size','1.5rem');

    $(this).css('opacity', '50%');

    $(this).css('transform','scale(1.3)');  // (width + height) * 1.3
    $(this).css('transition', '0.4s ease-out');

}).on('mouseleave',function(){
    $(this).css('cursor','none');
    $(this).css('font-size','1rem');
    $(this).css('opacity', '100%');
    $(this).css('transform','scale(1)');
    $(this).css('transition', '0.4s ease-out');
});

// quand j'appuie sur la touche 'fleche droite' de mon clavier, le carré blue va bouger à droite



$('html').on('keydown', function(event){
    console.log(event.which)
    if(event.which == 39){
        $('.blue-box').css('margin-left','+=10px')
    }

})

$(window).on('keydown', function(event){
    console.log(event.which)
    if(event.which == 39){
        $('.blue-box').css('margin-left','+=10px')
    }
})



$('.blue-box').on('click', function(event){
    console.log('CLICK')
})


$('.green-box').on('click', function(){
    $(this).slideUp(1000)
})

$('h1').on('mouseenter', function(){
    $(this).css('opacity', '50%');
    $(this).fadeTo(2000, 0.5);
})


// va alterner : si l'élément est chaché => il va l'afficher 
// si l'élément est affiché => il va le cacher
$('p').toggle()

});

