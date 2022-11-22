import './App.css';
import { useState } from 'react';
import Entretenimento from './components/entretenimento';
import ListaEntretenimento from './components/listaEntretenimento';
import Esportes from './components/esportes';
import ListaEsportes from './components/listaEsportes';

function App() {
  const [idEntretenimento, setIdEntretenimento] = useState("");

  const getIdEntretenimentoHandler = (id) => {
    console.log("ID: ", id);
    setIdEntretenimento(id);
  };

  const [idEsportes, setIdEsportes] = useState("");

  const getIdEsportesHandler = (id) => {
    console.log("ID: ", id);
    setIdEsportes(id);
  };

  //<Entretenimento id={idEntretenimento} setIdEntretenimento={setIdEntretenimento} />

  //<ListaEntretenimento getIdEntretenimento={getIdEntretenimentoHandler} />

  //<Esportes id={idEsportes} setIdEsportes={setIdEsportes} />
  //<ListaEsportes getIdEsportes={getIdEsportesHandler} />

  return (
    <>
      <header>
        <h1>Notícias de entretenimento</h1>
      </header>
      
      <Entretenimento id={idEntretenimento} setIdEntretenimento={setIdEntretenimento} />
      <ListaEntretenimento getIdEntretenimento={getIdEntretenimentoHandler} />
    </>
  );
}

export default App;
