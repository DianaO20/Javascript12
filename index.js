
function sort(array) {
    const cifreImpare = array.filter(num => num % 2 !== 0);
    const cifrePare = array.filter(num => num % 2 === 0);
  
    cifreImpare.sort((a, b) => a - b);
    cifrePare.sort((a, b) => b - a);   
  
    return cifreImpare.concat(cifrePare);
  }
   
  const arr=[3,6,8,9,13,12,35,36,1];
  const result = sort(arr);
  console.log(result);


  //////////////////////////
  function numaraVocale(șir) {
    const vocale = "aeiouAEIOU"; 
    let numarVocale = 0;
  
    for (let i = 0; i < șir.length; i++) {
      if (vocale.includes(șir[i])) {
        numarVocale++;
      }
    }
  
    return numarVocale;
  }
  
  const text = "Salut, ma numesc Maria'";
  const rezultat = numaraVocale(text);
  console.log(`Numarul de vocale: ${rezultat}`);

  //////////////////////////////

  function inversare(cuvinte) {
    
    return cuvinte.split('').reverse().join('');
  }
  
  const text1 = 'Hello, World!';
  const invers = inversare(text1);
  console.log(invers); 
  ///////////////////////

  function palidrom(șir) {
    
    const cuvant = șir.split('').reverse().join('');
    return șir === cuvant;
  }
  
  const text3 = 'level';
  const rezultat3 = palidrom(text3);
  console.log(rezultat3);
  /////////////////////
  function findBestMatch(k, arr) {
    
    let number = arr[0];
    let diferentaMinima = Math.abs(k - number);
  
    for (let i = 1; i < arr.length; i++) {
      const diferenta = Math.abs(k - arr[i]);
  
      if (diferenta < diferentaMinima) {
        number = arr[i];
        diferentaMinima = diferenta;
      }
    }
  
    return number;
  }
  
  const arr4 = [45,3,2,9,656,12,123];
  const num = 120;
  const nearestnum = findBestMatch(num, arr4);
  console.log(nearestnum);
  //////////////////////////////


  function verification(obj, key) {
    return key in obj;
  }
  
  const obj = { nume: 'John', varsta: 30, oras: 'New York' };
  const key = 'varsta';
  
  const solution = verification(obj, key);
  console.log(solution);


  ///////////////////////////

  function func(notes) {
    const clasificare = {};
  
    for (const nameStudent in notes) {
      const note = notes[nameStudent];
      const sum = note.reduce((acc, nota) => acc + nota, 0);
      const media = sum / note.length;
  
      clasificare[nameStudent] = `Medie: ${media.toFixed(2)}`;
    }
  
    return clasificare;
  }
  
  const notes = {
    John: [8, 7, 9],
    Mary: [9, 9, 10],
    Alex: [6, 8, 7],
  };
  
  const notesName = func(notes);
  console.log(notesName);