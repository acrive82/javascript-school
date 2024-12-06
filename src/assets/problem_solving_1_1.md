
``` mermaid
flowchart TB
    Start([Problema: Verifica Numero Primo]) --> Step1[1. Cosa devo fare?]
    Step1 --> Step2[2. Fai un esempio pratico]
    Step2 --> Step3[3. Dividi in passi piccoli]
    Step3 --> Step4[4. Scrivi il codice]
    Step4 --> Step5[5. Controlla se funziona]
    
    Step1 --- E1["Devo verificare se un<br/>numero è primo (divisibile<br/>solo per 1 e se stesso)"]
    
    Step2 --- E2["7 → primo<br/>12 → non primo<br/>2 → primo"]
    
    Step3 --- E3["1. Se numero < 2, non primo<br/>2. Per ogni numero fino a n/2:<br/>  - Se divide n, non primo<br/>3. Altrimenti è primo"]
    
    Step4 --- E4["function isPrimo(n) {<br/>  if(n < 2) return false;<br/>  for(let i = 2; i <= n/2; i++) {<br/>    if(n % i === 0) return false;<br/>  }<br/>  return true;<br/>}"]
    
    Step5 --- E5["Test:<br/>7 = true ✓<br/>12 = false ✓<br/>2 = true ✓<br/>1 = false ✓"]
```