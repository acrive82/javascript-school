
``` mermaid
flowchart TB
    Start([Problema: Conta Vocali]) --> Step1[1. Cosa devo fare?]
    Step1 --> Step2[2. Fai un esempio pratico]
    Step2 --> Step3[3. Dividi in passi piccoli]
    Step3 --> Step4[4. Scrivi il codice]
    Step4 --> Step5[5. Controlla se funziona]
    
    Step1 --- E1["Devo contare quante<br/>vocali ci sono in<br/>una parola"]
    
    Step2 --- E2["'ciao' → 3 vocali<br/>'hello' → 2 vocali"]
    
    Step3 --- E3["1. Crea lista vocali<br/>2. Inizia contatore a 0<br/>3. Per ogni lettera:<br/>  - Se è vocale, aumenta<br/>4. Mostra totale"]
    
    Step4 --- E4["let parola = 'ciao';<br/>let vocali = ['a','e','i','o','u'];<br/>let count = 0;<br/>for(let lettera of parola) {...}"]
    
    Step5 --- E5["Test:<br/>'ciao' = 3 ✓<br/>'test' = 1 ✓<br/>'' = 0 ✓"]
```