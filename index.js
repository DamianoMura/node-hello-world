// verifichiamo che siano stati passati parametri 
//sapendo che process.argv.length senza parametri passati dal terminale ha valore 2 perchè contiene in posizione 0 la path di node e in posizione 1 la path del file che stiamo aprendo. possiamo determinare che se process.argv.length > 2 allora ho passato dei parametri quindi:
if(process.argv.length>2){
  // console.log("hai passato dei parametri") //debug
  //in questo caso facciamo finta che dobbiamo passare del testo e vogliamo dare l'opportunità di non usare gli apici =)
  //dichiaro una stringa dove inserisco tutti i parametri ... 
  let data = process.argv[2];
  // li ciclo e concateno formando un unica stringa
  //parto da 3 perchè ho già inserito il primo che è 'argv[2]'
  for (let x = 3 ; x < process.argv.length ; x++ ){
    // concateno finchè non sono finiti i parametri
    data+=" "+process.argv[x];
  }
  //stampo con console.log
  console.log(data)
}
else{

  console.log("hello world");
}