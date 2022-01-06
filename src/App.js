import Escena from './components/escena/Escena';
import './App.css';
import { textoHistoria } from './textoHistoria';
import { useState } from 'react';
import { BotonCondicion } from './styled'

function App() {
  const [condicion, setCondicion ] = useState(true);
  return (
    condicion?
//Welcome View
    <div className='welcome'>
    <h1>Sprint 6</h1>
    <h2>En este sprint utilizamos React para seguir paso a paso la historia de un héroe</h2>
    <BotonCondicion onClick={()=>setCondicion(false)}>Ir a la historia.</BotonCondicion>
  </div>
:
//Main View
    <div>
      <ul><Escena historia={textoHistoria} /></ul>
    </div>
  );
}

export default App;
