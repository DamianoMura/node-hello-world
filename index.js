// verifichiamo che non siano stati passati parametri 
//sapendo che process.argv.length senza parametri passati dal terminale ha valore 2 perchè contiene in posizione 0 la path di node e in posizione 1 la path del file che stiamo aprendo. possiamo determinare che se process.argv.length > 2 allora ho passato dei parametri quindi:
if(process.argv.length>2){
  console.log("hai passato dei parametri")
}
else{
  console.log("hello world");
}