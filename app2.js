$(function () {
//TEXT () afficher le texte pr un element html
// syntaxe javascript
    document.getElementById('texte1').innerText = 'RRRRRRRRRRRRRRRRRRRRR';


    //syntaxte JQUERY    
    const x = $ ('#texte1').text();
    console.log(x);
    $('#texte2').text('salut je suis le nvx text')
    console.log($('#texte2').text()
    )
// syntaxe javacript 
document.getElementById('texte2').innerHTML = '<h1>Je suis un titre</h1>'
console.log(document.getElementById('texte2').innerHTML)

//syntaxte JQUERY
$('#texte2').html('<h1>JE SUIS UN TIRE</h1>');
console.log($('#texte2').html());


})