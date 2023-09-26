$(function(){
//selectionnez l'image et enregistrez sa valeur dns un constante
   
    const montage = $('gallery').find('img').first();
// stockez les références des images disponibles dans un tableau
    let images =
    [
        'images/laptop-mobile_small.jpg',
        'images/laptop-on-table_small.jpg',
        'images/people-office-group-team_small.jpg'
    ]
monImage.css('width','700px')
monImage.css('height','500px')
monImage.css('display','block')
monImage.css('margin','auto')
// on a besoin d'un index pour parcourir le tableau des images
let index = 0;
// on a besoin d'une fonction qui va executer un traitement chaque X ms
setInterval(() => {
//index += 1;
//if(index = 3){
  //  index = 0;
//}

index = (index+1) % images.length;
//0,1,2,0,1,2,0,1,2,0
//faire disparaitre une image utiliser fadeout
monImage.fadeOut(500,function(){
    //changer la source de l'image 
    $(this).attr('src',images[index]);
    $(this).fadeIn(500);
})
},3000 // "3000ms" soit 3secondes 
);








})