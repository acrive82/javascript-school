``` mermaid
flowchart TB
    Start([Problema: Raggruppa Anagrammi]) --> Step1[1. Cosa devo fare?]
    Step1 --> Step2[2. Fai un esempio pratico]
    Step2 --> Step3[3. Dividi in passi piccoli]
    Step3 --> Step4[4. Scrivi il codice]
    Step4 --> Step5[5. Controlla se funziona]
    
    Step1 --- E1["Raggruppare parole che sono<br/>anagrammi tra loro in un array"]
    
    Step2 --- E2["Input: ['eat','tea','tan','ate','nat','bat']<br/>Output: [['eat','tea','ate'],<br/>['tan','nat'],['bat']]"]
    
    Step3 --- E3["1. Crea Map vuota<br/>2. Per ogni parola:<br/>  - Ordina lettere<br/>  - Usa come chiave nella Map<br/>3. Converti Map in array"]
    
    Step4 --- E4["let map = new Map();<br/>for (let parola of parole) {<br/>  let key = parola.split('').sort().join('');<br/>  ...<br/>}"]
    
    Step5 --- E5["Test:<br/>caso base ✓<br/>parole vuote ✓<br/>caratteri speciali ✓"]

```