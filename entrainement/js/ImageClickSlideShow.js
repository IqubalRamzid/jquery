$(function(){
    //selectionnez l'image et enregistrez sa valeur dns un constante
       
        const monImage = $('gallery').find('img').first();
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
    monImage.on('click', function(){

//l'image disparait et change quand on clique dessus


    //index += 1;
    //if(index = 3){
      //  index = 0;
    //}
    
    index = (index+1) % images.length;
    //0,1,2,0,1,2,0,1,2,0
    //faire disparaitre une image utiliser fadeout
    monImage.fadeOut(1000,function(){
        //changer la source de l'image 
        $(this).attr('src',images[index]);
        $(this).fadeIn(1000);
    })
    } // "3000ms" soit 3secondes 
    );
    $('.dummy').remove();
// place le button en bas de l'image
    const button = $('#btn-click')
    $('.gallery').append(button)
    //placer le button au milieu
    button.css('display','block')
    button.css('margin','auto')    
    //style du button
    button.css('font-family','helvetica')
    
    
})
    
    