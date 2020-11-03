

// A partire da un array di oggetti,
var classe = [
    {
        nome: 'Alessio',
        cognome: 'Furio',
        eta: 27
    },
    {
        nome: 'Michele',
        cognome: 'Settanni',
        eta: 29
    },
    {
        nome: 'Matteo',
        cognome: 'Del Re',
        eta: 25
    }
];


//creare una copia dell'array
var classeCopia = [];

for (var i = 0; i < classe.length; i++) {
    //e aggiungere ai singoli elementi dell'array una nuova proprietà "position" che contiene una lettera casuale.
    var prodottoCopia = {};
    for (var key in classe[i]) {
        prodottoCopia[key] = classe[i][key];
        console.log(prodottoCopia[key]);
        prodottoCopia['position'] = stringGen(1);
    }
    classeCopia.push(prodottoCopia);
}

console.log(classe);
console.log(classeCopia);


function stringGen(len) {
  var text = "";

  var charset = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < len; i++)
    text += charset.charAt(Math.floor(Math.random() * charset.length));

  return text;
}
