

// creare un array di oggetti
var arrayOggetti = [];

// ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
var bici1 = {
    nomeBici: 'Savadeck',
    pesoKG: 20
}

var bici2 = {
    nomeBici: 'Vektor',
    pesoKG: 17
}

var bici3 = {
    nomeBici: 'Giuliani',
    pesoKG: 19
}

arrayOggetti.push(bici1, bici2, bici3);
console.log(arrayOggetti);




// stampare a schermo la bici con peso minore
var min = 50;
var pesoFinale = 0;

for (var i = 0; i < arrayOggetti.length; i++) {
    var pesoCorrente = arrayOggetti[i]['pesoKG'];
    if(pesoCorrente < min){
        pesoFinale = pesoCorrente;
        min = pesoFinale;
        var biciDaStampare = arrayOggetti[i];
    }
}
console.log(pesoFinale);
console.log(biciDaStampare);

for (var key in biciDaStampare) {
    var valoriBiciDaStampare = biciDaStampare[key];
}

console.log('la bici da stampare: ' + biciDaStampare['nomeBici'] + ' ' + biciDaStampare['pesoKG'] + 'kg');
