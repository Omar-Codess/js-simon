// Faccio generare al pc 5 numeri casuali
    // -Math.random

// Li stampo in console
    // -console.log

// Li stampo in pagina
    // innerHTML

// Faccio partire un timer di 30 secondi
    // funzione setInterval

// Al termine dei 30 secondi faccio sparire i numeri
    // funzione clearInterval

// Chiedo all'utente di inserire i numeri che ha visto uno alla volta
    // prompt "inserisci uno dei cinque numeri che hai appena visto"

// Dico all'utente quanti e quali numeri ha azzeccato
    // if userNumber === a uno di quelli nell'array dei numeri casuali 
    //     hai indovinato questo numero
    // else 
    //     hai sbagliato



const rdnNums = document.getElementById("cpu-numbers");
console.log(rdnNums);


let cpuArray = [];
while (cpuArray.length < 5) {
    cpuArray.push(Math.floor(Math.random() * 101));
    rdnNums.innerHTML = cpuArray
}

console.log(cpuArray);



    
