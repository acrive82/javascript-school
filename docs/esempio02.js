function converter(temp) {
    var risultato = temp * 1.8 + 32;
    return risultato;
   }
   
   
   
   
   function check_compito() { 
   const answers = [false, true, true, false, false, true, true, false, true, true]
        let voto = 0
     for (let domande = 0; domande < answers.length ; domande++) {
       let risultato = answers[domande]
       //console.log(risultato)
   
       if (risultato == true) { 
          voto += 1
        } 
      
      }
    console.log(voto)
   
   } 
   
   check_compito()
   
   