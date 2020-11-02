

//Creare un array di nomi
var arrayNomi = ['Alessio', 'Flavio', 'Simone', 'Cecilia'];

//e chiedere all'utente due numeri.
var numero1 = parseInt(prompt('inserisci primo numero'));
var numero2 = parseInt(prompt('inserisci secondo numero'));


//Creare un nuovo array con i valori che si trovano in una posizione compresa tra i due numeri inseriti dall'utente.
var arrayNuovo = [];
for (var i = (numero1 - 1); i < arrayNomi.length; i++) {
    if (i <= (numero2 - 1)) {
        arrayNuovo.push(arrayNomi[i]);
    }
}

console.log(arrayNuovo);
