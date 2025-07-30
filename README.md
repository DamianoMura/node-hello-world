# esercizio del 30/07/2025 classe 147 boolean

## repo: node-hello-world

### Esercizio

Creiamo la prima applicazione con NodeJs e inizializziamola con npm init
Scriviamo un file index.js che dovrà stampare nel terminale “Hello World”. Proviamo ad eseguirlo dal terminale stesso usando i comandi di node base.
Impostiamo ora uno script “start” in package.json e facciamo in modo di lanciare il nostro script con npm run start
Impostiamo un nuovo script “watch” in package.json che possa essere lanciato con npm run watch e che aggiorni in tempo reale le modifiche ai nostri file. Lanciamolo e proviamo a cambiare il nostro codice in modo che stampi nel terminale “Hello Boolean”. Dovremmo vedere il terminale senza fermare e rilanciare il server.

Bonus

Proviamo a modificare la nostra app Node, in modo da passare dal terminale una frase diversa da “Hello Boolean”. Forse potrà servirvi qualcosa vista ieri! 😉

## punti salienti:

### 1° push

apro il terminale nella cartella dei progetti e scrivo:
mkdir node-hello-world [invio]
entro con cd node-hello-world e a questo punto si può aprire su vs code
sempre su terminale digito npm init [invio]
lascio tutto com'è perchè usero l'entry point di default che è index.js

creo index.js, volendo sempre da terminale usando "touch index.js [invio]"

### 2° push

mi creo degli script alias in package.json per i comandi --watch e lancio singolo

### 3° push

verifico che il tutto funzioni usando i comandi alias utilizzando un console.log all'interno del file index.js

### 4° push

per utilizzare il console log possiamo utilizzare un comando da terminale alias "npm run start" come definito dagli scripts in package.json per avviarlo una sola volta, oppure "npm run watch" per avere il live refresh

### 6° push

ho deciso di prendere un approcio che mi permetta di avere un'unica stringa anche avendo più parametri per il semplice motivo che dobbiamo restituire qualcos'altro al posto di hello world se sono presenti parametri, quindi, sapendo che process.argv è un array e che i primi 2 sono path di "sistema",
ne deduco che dalla posizione 2 in poi ci sono i parametri che gli abbiamo passato.
quindi possiamo dire che se process.argv.length>2 , sicuramente sono stati passati parametri e io li voglio concatenare in un unica stringa che poi restituirò

### 7° push

definisco quindi la funzione per concatenare i parametri e infine restituirli con un console.log
