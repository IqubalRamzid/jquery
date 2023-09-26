$(function () {

    // 1: selectionner le div dummy , ajouter une classe box et une classe blue-box
    // 1ere solution
    $('.dummy').toggleClass('box blue-box');
    // 2eme solution : plus pratique
    $('.dummy').addClass('box blue-box');


    // 2 : ajouter une animation de 5000ms pour l'élément dummy
      // les animations => fadeOut , fadeIn

      // 1ere solution
    $('.dummy').fadeOut(5000).fadeIn(5000);
    // 2eme solution
    $('.dummy').fadeOut(5000);
    $('.dummy').fadeIn(5000);

    // 3 : ajouter un élément enfant p (en premier)  pour #content , et donnez lui un texte 'salut je suis le premier enfant'
    $('#content').prepend('<p>salut je suis le premier enfant</p>');
    $('<p>salut je suis le premier enfant</p>').prepend('#content');

    // 4 : ajouter un élément enfant p (en dernier)  pour #content , et donnez lui un texte 'salut je suis le dernier enfant'
    $('#content').append('<p>salut je suis le dernier enfant</p>');
    $('<p>salut je suis le dernier enfant</p>').append('#content');


    // 5 : faites bouger l'élément dummy à droite en cliquant dessus

    $('.dummy').on('click', function(){

      $(this).css('margin-left','+=30px')
    })

    // $('.dummy').on('click', function(){
    //   $(this).css('position','absolute')
    //   $(this).animate({left:"300px"}, 3000);
    // });
    // 6 : cachez la première image en utilisant hide()
    $('img:first').hide();
    $('img').first().hide();
    $('img').first().css('display','none')
    $('.gallery').find('img').first().hide();
    $('.gallery > img:first').hide();

// 7 : coloriez le background(en coral) de l'élément input de type texte
    $('input:text').css('background-color','coral');
    $('input[type="text"]').css('background-color','coral');

    // 8 : selectionnez l'élément frere (précedent et suivant) de textarea, puis donnez leur une classe 'brotherOfTextarea' 
    $('textarea').next().addClass('brotherOfTextarea')
    $('textarea').prev().addClass('brotherOfTextarea')

    // 9 : selectionnez le lien 'a' et donnez une valeur 'this_is_link' a son attribut href
    $('#link').attr('href','this_is_link');
    // const monLien = ('a')

    // 10 : si vous appuyez sur le button 'BUTTON CLICK' tout le contenu en dessous du button se cache
    // suppression des freres ( précedents et suivants)
    $("#btn-click").on('click',function(){
      $(this).siblings().toggle();
    })

    // suppression des freres ( précedents et suivants)
    $("#btn-click").on('click',function(){
      $(this).siblings().hide();
     })
    // suppression des freres suivants
     $('#btn-click').on('click',function(){
      $('#btn-click').nextAll().hide();
    })



    // 11 :pour l'élément checkbox , afficher la valeur de checked
    const valeur = $('input:checkbox').prop('checked');
    const attribut = $('input:checkbox').attr('checked');
    const attribut_non_existant = $('input:checkbox').attr('title');
    console.log(valeur)
    console.log(attribut)
    console.log(attribut_non_existant)

    });

    //

