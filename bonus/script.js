//     Bonus:
// In una cartella bonus:
// Inseriamo un input per visualizzare in pagina un testo inserito da un utente.
// Inseriamo una immagine e accanto un numero che identifica il numero di prodotti desiderati, i dati devono venire da Vue.
// Poi aggiungiamo un pulsante per aumentare questo numero.

const app = new Vue({
    el: '#app',
    data: {
       message: '',
        myPlaceHolder: 'Inserisci un testo',
        myImage: 'https://picsum.photos/200/300',
        number: 10
    },
    methods: {
        addNumber: function () {
            this._data.number++;
        }
    }
});