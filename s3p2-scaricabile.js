// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio //OK//
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio //OK//
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo //OK//
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente //OK//
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio //OK//
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!) //OK//

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro //OK// 
//Questa funzione tradurrà il titolo del nostro progetto.

function cambiaTitolo() {
    let nuovoTitolo = "Nuovo Titolo";
    document.getElementById("titolo").innerHTML = nuovoTitolo;
}

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina

function cambiaColoreBackground(){
    let nuovoColore = prompt('Inserisci un colore');
    document.body.style.backgroundColor = nuovoColore;
}

// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio

function cambiaIndirizzo(){
    let nuovoIndirizzo = 'Nuovo Indirizzo';
    let footer = document.getElementById('footer');
    footer.textContent = nuovoIndirizzo;
}

// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella //OK//

function cambiaIndirizzo(){ //Uso la funzione e creo (variabile)'nuovoIndirizzo'per cambiare al nuovo indirizzo 
    let nuovoIndirizzo = 'Macarena S.A. - Indirizzo: Via Macarena, 96 - 20100 Milano';
    let footer = document.getElementById('footer'); //Mi serve per selezionare l'elemento footer tramite l'id stesso
    footer.textContent = nuovoIndirizzo;            //Uso la proprietà textContent per il nuovo (valore) indirizzo
}

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine //OK//

function toggleImageVisibility() {
    let amazonImages = document.querySelectorAll('.amazon-image');
    amazonImages.forEach(function(image) {
        image.classList.toggle('hidden');
    });

// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata //OK//

function changePriceColor() {
    let prices = document.querySelectorAll('table tr:not(last-child) td:last-child');
    prices.forEach(function(price) {
        let randomColor = getRandomColor();
        price.style.color = randomColor;
    });
}

//function getRandomColor() {                                      //Utilizzo getRandom per cambiare a random il colore dei prezzi
    let letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)];
    }

    return color;
}
