
``` mermaid
flowchart TB
    Start([Problema: Convertitore C° in F°]) --> Step1[1. Cosa devo fare?]
    Step1 --> Step2[2. Fai un esempio pratico]
    Step2 --> Step3[3. Dividi in passi piccoli]
    Step3 --> Step4[4. Scrivi il codice]
    Step4 --> Step5[5. Controlla se funziona]
    
    Step1 --- E1["Devo convertire una<br/>temperatura da Celsius<br/>a Fahrenheit"]
    
    Step2 --- E2["20°C = 68°F<br/>0°C = 32°F"]
    
    Step3 --- E3["1. Prendi temperatura in C°<br/>2. Moltiplica per 9/5<br/>3. Aggiungi 32<br/>4. Mostra risultato"]
    
    Step4 --- E4["let celsius = 20;<br/>let fahrenheit = (celsius * 9/5) + 32;<br/>console.log(fahrenheit);"]
    
    Step5 --- E5["Test:<br/>20°C = 68°F ✓<br/>0°C = 32°F ✓<br/>100°C = 212°F ✓"]

```