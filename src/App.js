import Escena from './components/escena/Escena';
import './App.css';
import { textoHistoria } from './textoHistoria';
import { useState } from 'react';
import { BotonCondicion } from './styled'
//
function App() {
  const [condicion, setCondicion] = useState(true);
  return (
    condicion ?
      //Welcome View
      <div className='welcome'>
        <h1>Sprint 6</h1>
        <h2>En este sprint utilizamos React para seguir paso a paso la historia de un héroe</h2>
        <h3>Aplicamos los siguientes recursos:</h3>
        <ul>
        <li>Componentes</li>
        <li>Props</li>
        <li>Use-State</li>
        <li>Styled-components</li>

        </ul>
        <BotonCondicion onClick={() => setCondicion(false)}>Ir a la historia.</BotonCondicion>
      </div>
      :
      //Main View

      <ul><Escena historia={textoHistoria} /></ul>

  );
}
//i think i could export befor the "App" function, too
export default App;
