// 🏆 Snack 1
// Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia… Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.

// Se è una stringa: stampala in maiuscolo
// Se è un numero: moltiplicalo per due e stampalo
// Se è un booleano: stampa “Sì” o “No” in base al suo valore
// In tutti gli altri casi: stampa “Tipo non supportato”


let dateApi : unknown;

dateApi = "elisa"
dateApi = 2
dateApi = true
dateApi = false
dateApi = ["ciao"]

if (typeof dateApi === 'string') {
  console.log(dateApi.toUpperCase());
} else if (typeof dateApi === 'number') {
  console.log(dateApi * 2);
} else if (typeof dateApi === 'boolean') {
  let trueOrFalse = dateApi ? 'Sì' : 'No'
  console.log(trueOrFalse);
} else {
  console.log('Tipo non supportato');
}