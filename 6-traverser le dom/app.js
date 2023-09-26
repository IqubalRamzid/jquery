$(function () {

    // ============= trouver un élément
    const les_p = $('#parent-div').find('p');
    console.log(les_p)
    //  ================= les parents
    // syntaxe JAVASCRIPT
    const parent_1 = document.getElementById('compteur').parentElement;
    console.log(parent_1)

    // SYNTAXE JQUERY
    const parent = $('#compteur').parent();
    console.log(parent);
    const les_parents = $("#compteur").parents();
    console.log(les_parents)
    //  ================= les freres
    // syntaxe JAVASCRIPT
    const next_1 = document.getElementById('compteur').nextSibling;
    const next_2 = document.getElementById('compteur').previousSibling;
    console.log(next_1)
    console.log(next_2)
    // SYNTAXE JQUERY
    const next = $('#compteur').next();
    console.log(next)
    const prev = $("#banal").prev();
    console.log(prev)
    const les_freres = $('#banal').siblings();
    console.log(les_freres)

    // =================les enfants
    // syntaxe JAVASCRIPT
    const enfant_1 = document.getElementById('parent-div').childNodes;
    console.log(enfant_1)
    // SYNTAXE JQUERY
    const enfants = $("#parent-div").children();
    console.log(enfants)
})