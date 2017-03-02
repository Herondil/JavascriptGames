var reponses = "Cookies",
    reponsestbl = [],
    nbr = 0;

for (var i = 0; i <= reponses.length -1; i++) {
    reponsestbl.push(reponses.toUpperCase().charCodeAt(i));
}

window.document.onkeydown = function(e){
    if(e.keyCode == reponsestbl[nbr]){
        nbr++;
    }else {
        nbr = 0;
    }
    if (nbr == reponses.length) {
        console.log('Gg, tu as trouver le mot mystère qui était '+reponses)
    }
}