$(function () {
    // 1 :selectionner la balise th , et afficher dans la console le résultat en utilisant un console.log
    // =================== SYNTAXE JS
    let tag = document.getElementsByTagName("th");
    console.log(tag);
    // =================== SYNTAXE JQUERY
    const balise_th = $('th');
    console.log(balise_th);


    // 2 :selectionner la classe prix et afficher dans la console le résultat en utilisant un console.log
    // =================== SYNTAXE JS
    let cls = document.querySelector(".prix");
    console.log(cls);
    cls = document.getElementsByClassName("prix");
    console.log(cls);
    // =================== SYNTAXE JQUERY
    console.log('============================================================')
    const balise_prix = $('.prix');
    console.log(balise_prix);
    // 2eme façon
    console.log($('.prix'))


    // 3 :selectionner le ID 'qte0' et afficher le resultat en utilisant un console.log
    // =================== SYNTAXE JS
    let id = document.querySelector("#qte0");
    console.log(id);
    id = document.getElementById("qte0");
    console.log(id);
    // =================== SYNTAXE JQUERY
    const balise_qte = $('#qte0');
    console.log(balise_qte);

    // 4 :selectionner tout les éléments en utilisant un selecteur qui selectionne tout
    console.log('============================================================')
    const balise_tout = $('*');
    console.log(balise_tout);


    // 5 : select les enfants directs B de l'élément A ('A > B')
    console.log('============================================================')
    const balise_enfant = $('tr > th');
    console.log(balise_enfant)


    // 6: select les éléments B adjacents à A ( élements frères) => ('A + B')
    console.log('============================================================')
    const th_frere = $('.prix + th')
    console.log(th_frere)

    // 7: select le premier enfant (element) de A
    console.log('============================================================')
    const balise_premier_enfant = $('A:first-child')
    console.log(balise_premier_enfant)

    // 8: le dernier élément A
    console.log('============================================================')
    $("A:last-child");

    //9: le n ème éléments de th
    console.log('============================================================')
    const xx = $('th:nth-child(2)');
    console.log('le n ème éléments de .ligne1', xx)

    //10: les éléments A impaires => A:nth-child(odd)
    console.log($("th:nth-child(odd)"));

    // 11: les éléments A paires => A:nth-child(even)
    console.log($("th:nth-child(even)"));

    // 12 :============ selecteurs d'attributs =================

    //  élément ayant l'attribut attr
    $("[attr]")
    console.log($("[class]"));

    //  tous les éléments A ayant l'attribut attr
    $("A[attr]")
    console.log($("th[class]"));

    // tous les éléments ayant l'attribut attr égal à "valeur"
    $("[attr=valeur]")
    console.log($("[class=prix]"));

    // tous les éléments ayant l'attribut attr différent de "valeur"
    $("[attr!=valeur]")
    console.log($("[class!=prix]"));
})