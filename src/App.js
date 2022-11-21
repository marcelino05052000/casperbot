import './App.css';
import { useEffect, useState } from 'react';
import { db } from './firebase'
import { collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";

function App() {
  const [title, set_title] = useState("");
  const [subtitle, set_subtitle] = useState("");
  const [b_title, set_b_title] = useState("");
  const [b_url, set_b_url] = useState("");
  const [i_url, set_i_url] = useState("");

  const [entretenimento, setEntretenimento] = useState([]);
  const entretenimentoCollectionRef = collection(db, "faq.entretenimento");

  const criarEntretenimento = async () => {
    await addDoc(entretenimentoCollectionRef, { title: title, subtitle: subtitle, b_title: b_title, b_url: b_url, i_url: i_url })
    window.location.reload(false);
  }

  useEffect(() => {
    const getEntretenimento = async () => {
      const data = await getDocs(entretenimentoCollectionRef);
      setEntretenimento(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getEntretenimento();
  }, [])

  const removerEntretenimento = async (id) => {
    const entrDoc = doc(db, "faq.entretenimento", id);
    await deleteDoc(entrDoc);
    window.location.reload(false);
  }

  return (
    <div className="App">
      <br />
      <input placeholder='Titulo: ' onChange={(event => {
        set_title(event.target.value);
      })} /><br />
      <input placeholder='Subtitulo: ' onChange={(event => {
        set_subtitle(event.target.value);
      })} /><br />
      <input placeholder='Titulo do botão: ' onChange={(event => {
        set_b_title(event.target.value);
      })} /><br />
      <input placeholder='Url do botão: ' onChange={(event => {
        set_b_url(event.target.value);
      })} /><br />
      <input placeholder='Url da imagem: ' onChange={(event => {
        set_i_url(event.target.value);
      })} /><br />
      <button onClick={criarEntretenimento}>Adicionar notícia</button>
      {entretenimento.map((entr) => {
        return (
          <div>
            <ul>
              <li>title: {entr.title}</li>
              <li>subtitle: {entr.subtitle}</li>
              <li>b_title: {entr.b_title}</li>
              <li>b_url: {entr.b_url}</li>
              <li>i_url: {entr.i_url}</li>
              <button onClick={() => { removerEntretenimento(entr.id) }}>Remover notícia</button>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default App;
