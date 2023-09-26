$(function () {
    // =============== AJOUTER UNE BALISE COMME ENFANT ===============
    // JAVASCRIPT
    const element = document.createElement('div')
    element.textContent = 'salut je suis un div';
    // ajouter un élement à la fin
    document.getElementById('parent-div').append(element);
    //  ajouter un élement au début
    document.getElementById('parent-div').prepend(element);


    // SYNTAXE JQUERY : ajouter un élement à la fin
    $('#parent-div').append('<div>JE SUIS UN NOUVEAU DIV</di>');
    $('<div>JE SUIS UN NOUVEAU DIV</di>').appendTo('#parent-div');


    // syntaxe jquery : ajouter un élement au début
    $('#parent-div').prepend('<div>prepend div</div>')
    $('<div>prepend div</div>').prependTo('#parent-div')

    // ======================== AJOUTER UNE BALISE COMME FRERE ==============
    // after :l'élément ajouté vient après l'élément cible
    ("#affiche").after('<p>balise frere après</p>')
    // before :l'élément ajouté vient avant l'élément cible
    ("#affiche").before('<p>balise frere avant</p>')


    // ========================= supprimer des éléménts
    // remove: supprime l'élément ainsi que les events associées à lui
    $('#envoyer').remove();
    // detach: supprime l'élément mais pas les events associées à lui
    $('#link').detach();
    // empty: vide le contenu d'un élément
    $('#texte3').empty()
})