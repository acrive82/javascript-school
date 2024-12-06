import React, { useState, useCallback } from 'react';

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
  header: {
    backgroundColor: '#1e1e1e',
    padding: '12px 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  dots: {
    display: 'flex',
    gap: '8px'
  },
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%'
  },
  redDot: {
    backgroundColor: '#ff5f56'
  },
  yellowDot: {
    backgroundColor: '#ffbd2e'
  },
  greenDot: {
    backgroundColor: '#27c93f'
  },
  headerTitle: {
    color: '#8b949e',
    fontSize: '14px',
    fontWeight: '500'
  },
  editorContainer: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  editorWrapper: {
    position: 'relative'
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
    borderRadius: '8px',
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
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'background-color 0.2s'
  },
  outputSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  outputHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#4a5568',
    fontWeight: '600'
  },
  outputContent: {
    padding: '16px',
    backgroundColor: 'white',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    minHeight: '100px',
    fontFamily: 'monospace',
    fontSize: '14px',
    whiteSpace: 'pre-wrap',
    color: '#1a202c'
  },
  errorOutput: {
    backgroundColor: '#fff5f5',
    color: '#c53030'
  }
};

const JavaScriptPlayground = () => {
  const [code, setCode] = useState(
`// Scrivi il tuo codice qui
let nome = "Mario";
console.log("Ciao " + nome);

// Prova una funzione
function somma(a, b) {
  return a + b;
}

console.log(somma(5, 3));`
  );
  
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

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

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.dots}>
          <div style={{...styles.dot, ...styles.redDot}} />
          <div style={{...styles.dot, ...styles.yellowDot}} />
          <div style={{...styles.dot, ...styles.greenDot}} />
        </div>
        <span style={styles.headerTitle}>JavaScript Playground</span>
      </div>
      
      <div style={styles.editorContainer}>
        <div style={styles.editorWrapper}>
          <textarea
            style={styles.editor}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck="false"
            placeholder="Scrivi il tuo codice JavaScript qui..."
          />
          <button
            onClick={executeCode}
            style={styles.executeButton}
          >
            Esegui ▶
          </button>
        </div>

        <div style={styles.outputSection}>
          <div style={styles.outputHeader}>
            Console Output
          </div>
          <pre 
            style={{
              ...styles.outputContent,
              ...(error ? styles.errorOutput : {})
            }}
          >
            {error ? error : output || 'In attesa dell\'esecuzione del codice...'}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default JavaScriptPlayground;