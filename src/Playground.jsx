import React, { useState, useCallback } from 'react';

// Definiamo gli esercizi per ogni livello
const exercises = {
  beginner: [
    {
      title: "Variabili e Stringhe",
      description: "Crea delle variabili e concatena delle stringhe",
      code: `// 1. Crea una variabile con il tuo nome
// 2. Crea una variabile con la tua età
// 3. Usa console.log per stampare "Mi chiamo {nome} e ho {età} anni"

`
    },
    {
      title: "Operazioni Matematiche",
      description: "Esegui calcoli semplici",
      code: `// 1. Crea due numeri
// 2. Somma i numeri
// 3. Moltiplica il risultato per 2
// 4. Stampa il risultato finale

`
    }
  ],
  intermediate: [
    {
      title: "Array e Cicli",
      description: "Lavora con array e cicli for",
      code: `// 1. Crea un array di numeri da 1 a 5
// 2. Usa un ciclo for per sommare tutti i numeri
// 3. Stampa la somma totale

`
    },
    {
      title: "Funzioni",
      description: "Crea e usa funzioni",
      code: `// 1. Crea una funzione che accetta due numeri
// 2. La funzione deve restituire il più grande dei due
// 3. Testa la funzione con diversi numeri

`
    }
  ],
  advanced: [
    {
      title: "Oggetti",
      description: "Lavora con gli oggetti",
      code: `// 1. Crea un oggetto 'persona' con nome, età e hobby
// 2. Aggiungi un metodo che stampa tutti gli hobby
// 3. Chiama il metodo

`
    },
    {
      title: "Array Methods",
      description: "Usa map, filter e reduce",
      code: `// 1. Crea un array di numeri
// 2. Usa map per raddoppiare ogni numero
// 3. Usa filter per tenere solo i numeri > 5
// 4. Usa reduce per sommare i numeri rimasti

`
    }
  ]
};

const JavaScriptPlayground = () => {
  const [activeLevel, setActiveLevel] = useState('beginner');
  const [activeExerciseIndex, setActiveExerciseIndex] = useState(0);
  const [code, setCode] = useState(exercises[activeLevel][0].code);
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const styles = {
    container: {
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      backgroundColor: '#f8f9fa',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden'
    },
    tabs: {
      display: 'flex',
      backgroundColor: '#1e1e1e',
      padding: '12px 16px',
      gap: '8px'
    },
    tab: {
      padding: '8px 16px',
      borderRadius: '6px',
      cursor: 'pointer',
      color: '#8b949e',
      backgroundColor: 'transparent',
      border: 'none',
      transition: 'all 0.2s'
    },
    activeTab: {
      backgroundColor: '#2d2d2d',
      color: 'white'
    },
    exerciseSelect: {
      padding: '16px',
      backgroundColor: '#282a36',
      borderBottom: '1px solid #3d3d3d'
    },
    exerciseTitle: {
      color: 'white',
      marginBottom: '8px',
      fontSize: '16px',
      fontWeight: '500'
    },
    exerciseDescription: {
      color: '#8b949e',
      fontSize: '14px'
    },
    editor: {
      width: '800px',
      height: '300px',
      padding: '16px',
      backgroundColor: '#282a36',
      color: '#f8f8f2',
      fontFamily: 'monospace',
      fontSize: '14px',
      border: 'none',
      resize: 'none',
      outline: 'none'
    },
    executeButton: {
      position: 'absolute',
      bottom: '16px',
      right: '16px',
      padding: '8px 16px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer'
    },
    output: {
      padding: '16px',
      backgroundColor: 'black',
      margin: '16px',
      borderRadius: '8px',
      fontFamily: 'monospace',
      whiteSpace: 'pre-wrap'
    },
    error: {
      backgroundColor: '#fff5f5',
      color: '#c53030'
    },
    exerciseNav: {
      display: 'flex',
      gap: '8px',
      padding: '8px 16px',
      backgroundColor: '#2d2d2d'
    },
    exerciseButton: {
      padding: '4px 12px',
      borderRadius: '4px',
      backgroundColor: '#3d3d3d',
      color: 'white',
      border: 'none',
      cursor: 'pointer'
    }
  };

  const executeCode = useCallback(() => {
    setOutput('');
    setError('');
    
    const logs = [];
    const customConsole = {
      log: (...args) => {
        logs.push(args.map(arg => 
          typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
        ).join(' '));
      }
    };

    try {
      const executeFunction = new Function('console', code);
      executeFunction(customConsole);
      setOutput(logs.join('\n'));
    } catch (err) {
      setError(err.toString());
    }
  }, [code]);

  const handleLevelChange = (level) => {
    setActiveLevel(level);
    setActiveExerciseIndex(0);
    setCode(exercises[level][0].code);
  };

  const handleExerciseChange = (index) => {
    setActiveExerciseIndex(index);
    setCode(exercises[activeLevel][index].code);
  };

  return (
    <div style={styles.container}>
      <div style={styles.tabs}>
        {['beginner', 'intermediate', 'advanced'].map(level => (
          <button
            key={level}
            style={{
              ...styles.tab,
              ...(activeLevel === level ? styles.activeTab : {})
            }}
            onClick={() => handleLevelChange(level)}
          >
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </button>
        ))}
      </div>

      <div style={styles.exerciseNav}>
        {exercises[activeLevel].map((exercise, index) => (
          <button
            key={index}
            style={{
              ...styles.exerciseButton,
              backgroundColor: activeExerciseIndex === index ? '#4a4a4a' : '#3d3d3d'
            }}
            onClick={() => handleExerciseChange(index)}
          >
            Esercizio {index + 1}
          </button>
        ))}
      </div>

      <div style={styles.exerciseSelect}>
        <div style={styles.exerciseTitle}>
          {exercises[activeLevel][activeExerciseIndex].title}
        </div>
        <div style={styles.exerciseDescription}>
          {exercises[activeLevel][activeExerciseIndex].description}
        </div>
      </div>

      <div style={{ position: 'relative' }}>
        <textarea
          style={styles.editor}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          spellCheck="false"
        />
        <button
          onClick={executeCode}
          style={styles.executeButton}
        >
          Esegui ▶
        </button>
      </div>

      <pre style={{
        ...styles.output,
        ...(error ? styles.error : {})
      }}>
        {error ? error : output || 'In attesa dell\'esecuzione del codice...'}
      </pre>
    </div>
  );
};

export default JavaScriptPlayground;