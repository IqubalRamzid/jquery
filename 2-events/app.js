$(function () {
    // CODE içi
    // UTILISATION D'UNE FONCTION ANONYME
    // --------------------CLICK EVENT ---------------------
    // ==================== SYNTAXE JAVASCRIPT
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        console.log('click click')
    });

    // ==================== SYNTAXE JQUERY
    // si on clique sur le button 'button' , un alert s'affichera au milieu de l'écran
    $('button').on('click', function () {

        alert('button was clicked')

    });
    // quand le button sera cliqué , le text dans input s'affichera dans la console
    $('button').on('click', function () {
        console.log('value : ', $('#key').val())
    });

    // 2eme syntaxe : n'utilisez pas cette syntaxe car elle est NON SUPPORTE

    $('button').click(function () {
        console.log('2eme syntaxe')
    })

    // --------------------LOAD EVENT ---------------------
    // ==================== SYNTAXE JAVASCRIPT
    window.addEventListener("load", function () {

    });

    // ==================== SYNTAXE JQUERY
    $(window).on("load", function () {

    });

    //  --------------------CONTENT LOADED EVENT ---------------------
    // ==================== SYNTAXE JAVASCRIPT
    document.addEventListener("DOMContentLoaded", function () {

    })
    // ==================== SYNTAXE JQUERY
    $(document).ready(function () {

    });


    //  --------------------SCROLL EVENT ---------------------
    $(window).on('scroll', function () {
        console.log('je scroll 2 2 2')
    })

    // 2eme syntaxe :  NON SUPPORTE
    $(window).scroll(function () {
        console.log('je scroll')
    })


    //  --------------------DOUBLE CLICK EVENT ---------------------
    // =============== syntaxe jquery
    // : 1er syntaxe
    $('#dbl').on('dblclick', function () {
        alert('jai double clique')
    });
    
    // 2eme syntaxe :  NON SUPPORTE
    $('#dbl').dblclick(function () {
        alert('DOUBLE CLICK')
    })
    
    //  --------------------MOUSE EVENT ---------------------
    // quand on reste appuyé sur la souris : mousedown
    $('#down').mousedown(() => {
        console.log("vous voulez lacher!");
    })
    
    //quand on relache la souris
    $('#up').mouseup(() => {
        console.log("vous m'avez enfin relaché!");
    })
    
    
    //  --------------------MOUSE EVENT ---------------------
    // MOUSEENTER, MOUSELEAVE EVENTS
    $('#move').on('mouseenter', function () {
        $(this).css('background-color', 'red')
    })
    
    $('#move').on('mouseleave', function () {
        $(this).css('background-color', 'blue')
    })
    
    
    
    //  --------------------HOVER EVENT ---------------------
    $('#move').hover(function () {
        $(this).css('background-color', 'pink')
    })


    // UTILISATION D'UNE FONCTION DEFINIE
    function afficherAlert() {
        alert('BONJOUR')
    }

    $('button').on('click', afficherAlert)

    // UTILISATION D'UNE FONCTION ANONYME
    $('button').on('click', function () {
        alert('ANONYME')
    })


    // PRESS KEYBOARD BUTTON
    $('html').on('keydown', function (event) {
        console.log('KEY DOWN');
        console.log(event.which);
    })

    // ------------------------------------ exercice ----------------------
    // 1 : colorier le button en utilisant( background-color en 'coral') quand vous le survoler 

    $('button').on('mouseenter', function () {
        $(this).css('background-color', 'coral');
    })

    // 2: augmenter la taille du texte de l'élément #dbl quand vous cliquez dessus
    const p_dbl = $('#dbl');
    // 1ere solution => avec une fonction anonyme
    p_dbl.on('click', function () {
        $(this).css('font-size', '60px');
    });

    // 2eme solution : avec une fonction prédéfinie
    function augmenterLeTexte() {
        p_dbl.css('font-size', '60px');
    }
    p_dbl.on('click', augmenterLeTexte);

    // 3 : afficher un alert quand vous appuyez sur n'importe quel button du clavier
    $('*').on('keydown', function () {
        // alert('test test')
    })

})