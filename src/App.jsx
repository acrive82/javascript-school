import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import JavaScriptPlayground from './Playground'

function HelloWorld({ nome, cognome}) {
  return <tr><td> {nome}</td><td>{cognome}</td></tr>
}

function App() {
  const [count, setCount] = useState(0)

  let elenco_persone = [];

  let elenco_di_hello_world = [["Luigi", "Candita"], ["Francesco", "Rossi"], ["Giuanni", "Palmisano"]] ;

  for (let i = 0; i < elenco_di_hello_world.length; i++) {
    elenco_persone[i] = <HelloWorld key={i} nome={elenco_di_hello_world[i][0]} cognome={elenco_di_hello_world[i][1]} />
  }

  return (
    <>
      <h1>Javascript School</h1>
      <br />
      <h2>Elenco Clienti</h2>
      <table>
        <thead style={{'color':'red', 'font-weight':'bolder','font-size':'1.5em'}}>
          <tr>
            <td>Nome</td><td>Cognome</td>
          </tr>
        </thead>
        <tbody>
        {elenco_persone}
        </tbody>
      </table>
      <b></b>
    </>
  )
}

export default App
