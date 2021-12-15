// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue({
    el: '#app',
    data: {
        message: 'Questo messaggio viene da VueJs',
        myImage: 'https://picsum.photos/200/300'
    }
});