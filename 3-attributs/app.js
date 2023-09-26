$(function () {
    // ============================ 1 text()==================
    // text () => afficher le texte pour un élément HTML(balise)
    // SYNTAXE JAVASCRIPT

    document.getElementById('texte1').innerText = 'BBBBBBBBBBBBBBBBBBBBB';

    // // // SYNTAXE JQUERY

    const x = $('#texte1').text();
    console.log(x);
    // text ('nouveau texte') => modifier le contenu textuelle d'une balise
    $('#texte2').text('SALUT JE SUIS LE NOUVEAU TEXTE')

    console.log($('#texte2').text())

    // ====================== 2 html()=========================
    // SYNTAXE JAVASCRIPT
    document.getElementById('texte2').innerHTML = '<h1>JE SUIS UN TITRE</h1>'
    console.log(document.getElementById('texte2').innerHTML)
    // SYNTAXE JQUERY
    $('#texte2').html('<h1>JE SUIS UN TITRE</h1>');
    console.log($('#texte2').html());

    // ATTENTION : js ne va pas faire la conversion des balises <h1> </h1>
    $('#texte1').text('<h1>TITRE TEST 2</h1>')

    // // ================== 3 css() =========
    // syntaxe JAVASCRIPT
    document.getElementById('texte1').style = 'color:red';
    // syntaxe jQuery
    $('#texte1').css('color', 'violet');

    // ================= 4 attr() ===================
    // permet de récuperer et mannipuler la valeur des attributs pour les : img, a, ...
    // syntaxe JAVASCRIPT
    document.getElementById('link').setAttribute('href', 'monLien')
    // syntaxe jQuery :
    $('#link').attr('href', 'testLien');
    console.log($('#link').attr('href'));



    //  ================= 6 val () ===================
    // SYNTAXE JS
    console.log(document.getElementById('nom').getAttribute('value'))
    // SYNTAXE JQUERY
    console.log($('#nom').val());

    // solution exo : changer la couleur du background d'un élément selectionné

    $("#banal").on('click', function () {
        // premiere syntaxe
        $('#banal').css('background-color', 'coral')
        // syntaxe en utilisant le mot clé this
        $(this).css('background-color', 'coral')
    });

    $('#texte2').on('mouseenter', function () {
        $(this).css('color', 'red')
        // ou
        $("#texte2").css('color', 'red')
    });

    // =========================== PROP ========================
    // permet de modifier et récuperer une proprièté pour un élément comme CHECKBOX
    const checked = $('#mycheckbox').prop('checked')
    console.log("checked : ", checked)
    
    

    // =========================== TOGGLE CLASS ================
    // syntaxe JAVASCRIPT
    // document.getElementById('texte1').classList.add('maclasse');
    document.getElementById('texte1').classList.toggle('maclasse');


    // SYNTAXE JQUERY
    $('#texte1').toggleClass('autreClasse')


    //============================== traverser le DOM ================
    //  ================= les parents
    // syntaxe JAVASCRIPT
    const parent_1 = document.getElementById('btn').parentElement;
    console.log(parent_1)

    // SYNTAXE JQUERY
    const parent = $('#btn').parent();
    console.log(parent);
    //  ================= les freres
    // syntaxe JAVASCRIPT
    const next_1 = document.getElementById('btn').nextSibling;
    const next_2 = document.getElementById('btn').previousSibling;
    console.log(next_1)
    console.log(next_2)
    // SYNTAXE JQUERY
    const next = $('#btn').next();
    console.log(next)
    const prev = $("#banal").prev();
    console.log(prev)

    // =================les enfants
    // syntaxe JAVASCRIPT
    const enfant_1 = document.getElementById('parent-div').childNodes;
    console.log(enfant_1)
    // SYNTAXE JQUERY
    const enfants = $("#parent-div").children();
    console.log(enfants)

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


    // syntaxe jquery : ajouter un élement au début
    $('#parent-div').prepend('<div>prepend div</div>')
})