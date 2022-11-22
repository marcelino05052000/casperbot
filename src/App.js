import './App.css';
import { useState } from 'react';
import Entretenimento from './components/entretenimento';
import ListaEntretenimento from './components/listaEntretenimento';
import Esportes from './components/esportes';
import ListaEsportes from './components/listaEsportes';
import Politica from './components/politica';
import ListaPolitica from './components/listaPolitica';
import Famosos from './components/famosos';
import ListaFamosos from './components/listaFamosos';

function App() {
  //ID Entretenimento
  const [idEntretenimento, setIdEntretenimento] = useState("");

  const getIdEntretenimentoHandler = (id) => {
    console.log("ID: ", id);
    setIdEntretenimento(id);
  };

  //ID Esportes
  const [idEsportes, setIdEsportes] = useState("");

  const getIdEsportesHandler = (id) => {
    console.log("ID: ", id);
    setIdEsportes(id);
  };

  //ID Politica
  const [idPolitica, setIdPolitica] = useState("");

  const getIdPoliticaHandler = (id) => {
    console.log("ID: ", id);
    setIdPolitica(id);
  };

  //ID Famosos
  const [idFamosos, setIdFamosos] = useState("");

  const getIdFamososHandler = (id) => {
    console.log("ID: ", id);
    setIdFamosos(id);
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
      
      <Politica id={idPolitica} setIdPolitica={setIdPolitica} />
      <ListaPolitica getIdPolitica={getIdPoliticaHandler} />
    </>
  );
}

export default App;
