

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
    pesoKG: 21
}

arrayOggetti.push(bici1, bici2, bici3);
console.log(arrayOggetti);


var finalPeso = 0;
// stampare a schermo la bici con peso minore
for (var i = 0; i < arrayOggetti.length; i++) {

        var tempPeso = arrayOggetti[i]['pesoKG'];

        if (finalPeso == 0){
            finalPeso = tempPeso;
        }
        if (tempPeso < finalPeso) {
            finalPeso = tempPeso;
        }
}

console.log('la bici che ha il peso minore, ha un peso di: ' + finalPeso);
