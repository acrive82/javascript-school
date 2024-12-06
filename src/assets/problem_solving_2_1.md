``` mermaid
flowchart TB
    Start([Problema: Analisi Vendite]) --> Step1[1. Cosa devo fare?]
    Step1 --> Step2[2. Fai un esempio pratico]
    Step2 --> Step3[3. Dividi in passi piccoli]
    Step3 --> Step4[4. Scrivi il codice]
    Step4 --> Step5[5. Controlla se funziona]
    
    Step1 --- E1["Analizzare vendite per:<br/>1. Top 3 prodotti per categoria<br/>2. Trend mensile<br/>3. Calcolare metriche"]
    
    Step2 --- E2["Input: [{prodotto:'A',<br/>categoria:'food',<br/>prezzo:10,<br/>quantità:5,<br/>data:'2024-01-01'}]"]
    
    Step3 --- E3["1. Raggruppa per categoria<br/>2. Ordina per ricavo<br/>3. Calcola trend mensile<br/>4. Aggrega statistiche<br/>5. Formatta risultato"]
    
    Step4 --- E4["const analisiVendite = (vendite) => {<br/>  const perCategoria = new Map();<br/>  const perMese = new Map();<br/>  // Calcoli e aggregazioni<br/>}"]
    
    Step5 --- E5["Test:<br/>- Dati vuoti ✓<br/>- Categoria singola ✓<br/>- Multi categoria ✓<br/>- Date diverse ✓"]
```