// Faccio generare al pc 5 numeri casuali
    // -Math.random

// Li stampo in console
    // -console.log

// Li stampo in pagina
    // innerHTML

// Faccio partire un timer di 30 secondi
    // funzione setTimeout

// Al termine dei 30 secondi faccio sparire i numeri
    // funzione clearInterval

// Chiedo all'utente di inserire i numeri che ha visto uno alla volta
    // prompt "inserisci uno dei cinque numeri che hai appena visto"

// Dico all'utente quanti e quali numeri ha azzeccato
    // if userNumber === a uno di quelli nell'array dei numeri casuali 
    //     hai indovinato questo numero
    // else 
    //     hai sbagliato



// const cpuNumbers = document.getElementById("cpu-numbers");
// console.log(cpuNumbers);


// let cpuArray = [];
// while (cpuArray.length < 5) {
//     cpuArray.push(Math.floor(Math.random() * 101));
//     cpuNumbers.innerHTML = cpuArray
// }

// console.log(cpuArray);


// const myTimeout = setTimeout(timeout, 5000)
// function timeout(params) {
//     document.getElementById("timer")
//     setTimeout(() => {
//         clearTimeout(myTimeout);
//         timer.innerHTML = "";
//         console.log("Tempo scaduto!");
//     });
// }
    




// SOLUZIONE DI OLGA

// VISUALIZZAZIONE DEI NUMERI
const minNumber = 1;
const maxNumber = 99;
const numbersQuantity = 5;
const numbersShowTime = 3000;

const numbersContainer = document.getElementById("numbers");

// Generare l'array di numeri casuali
const numbersArray = generateRdnNumbersArray(
    numbersQuantity,
    minNumber,
    maxNumber
);

console.log(numbersArray);

// Mostrare i numeri nella pagina
numbersContainer.innerHTML = numbersArray;

// Far partire il timer per nascondere i numeri
setTimeout(function(){
    // Alla scadenza del tempo nascondere i numeri visualizzati
    numbersContainer.innerHTML = "";
}, numbersShowTime);

// GESTIONE DEI NUMERI MEMORIZZATI DALL'UTENTE
setTimeout(function() {
    // Chiedere all'utente i numeri memorizzati e salvarli nell'array
    const userNumbers = getUserNumbers(numbersQuantity);
    console.log(userNumbers);

    // Verificare quali numeri sono stati indovinati, salvare i numeri indovinati in un array
    const guessedNumbers = findCommonElements(numbersArray, userNumbers);
    console.log(guessedNumbers);

    // Stampare l'output con la quantità di numeri indovinati e i numeri stessi
    printResult(guessedNumbers);
}, numbersShowTime + 1000);

// FUNCTIONS
// Funzione che genera un array di numeri casuali non duplicat in un range specifico
function generateRdnNumbersArray(arrayLength, min, max) {
    const rndNumbers = [];
    while (rndNumbers.length < arrayLength) {
        const newNumber = getRndInteger(min, max);
        if (!rndNumbers.includes(newNumber)) {
            rndNumbers.push(newNumber);
        }
    }
    return rndNumbers;        
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Funzione che chiede i numeri all'utente e li salva in un array
function getUserNumbers(numbersQty) {
    const userArray = [];
    for (let i = 0; i < numbersQty; i++) {
        const userNumber = parseInt(prompt("Dimmi un numero"));
        userArray.push(userNumber);
    }
    return userArray;
}


// Funzione che restituisce array con gli elementi in comune dei due array
function findCommonElements(firstArray, secondArray){
    const result = [];
    // ciclare il primo array per ogni elemento dell'array
    for (let i = 0; i < firstArray.length; i++) {
        // se questo elemento è incluso nel secondo array
        const thisElement = firstArray[i];
        if (secondArray.includes(thisElement)) {
            // lo pusho nell'array risultante
            result.push(thisElement);
        }
    }
    return result;
}

// Funzione che stampa i numeri indovinati e la loro quantità
function printResult(resultArray) {
    document.getElementById("result").innerHTML = `Hai indovinato ${resultArray.length} numeri: ${resultArray}`;
}