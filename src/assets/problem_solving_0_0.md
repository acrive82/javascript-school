
``` mermaid
flowchart TB
    Start([Problema]) --> Step1[1. Cosa devo fare?]
    Step1 --> Step2[2. Fai un esempio pratico]
    Step2 --> Step3[3. Dividi in passi piccoli]
    Step3 --> Step4[4. Scrivi il codice]
    Step4 --> Step5[5. Controlla se funziona]
    
    Step1 --- E1["Esempio:<br/>Devo creare una<br/>calcolatrice che somma<br/>due numeri"]
    
    Step2 --- E2["Esempio:<br/>Se ho 5 e 3<br/>deve darmi 8"]
    
    Step3 --- E3["Esempio:<br/>1. Prendi primo numero<br/>2. Prendi secondo numero<br/>3. Somma i numeri<br/>4. Mostra risultato"]
    
    Step4 --- E4["let num1 = 5;<br/>let num2 = 3;<br/>let somma = num1 + num2;<br/>console.log(somma);"]
    
    Step5 --- E5["Test:<br/>5 + 3 = 8 ✓<br/>0 + 0 = 0 ✓<br/>-1 + 1 = 0 ✓"]
```