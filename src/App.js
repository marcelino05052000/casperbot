import './App.css';
import Home from './pages/home';
import { useEffect, useState } from 'react';
import { db } from './firebase'
import { collection, getDocs, addDoc } from "firebase/firestore";

function App() {
  const [title, set_title] = useState("");
  const [subtitle, set_subtitle] = useState("");
  const [b_title, set_b_title] = useState("");
  const [b_url, set_b_url] = useState("");
  const [i_url, set_i_url] = useState("");

  const [entretenimento, setEntretenimento] = useState([]);
  const entretenimentoCollectionRef = collection(db, "faq.entretenimento");

  const criarEntretenimento = async () => {
    await addDoc(entretenimentoCollectionRef, {title: title, subtitle: subtitle, b_title: b_title, b_url: b_url, i_url: i_url})
  }

  useEffect(() => {
    const getEntretenimento = async () => {
      const data = await getDocs(entretenimentoCollectionRef);
      setEntretenimento(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getEntretenimento();
  }, [])

  return (
    <div className="App">
      <input placeholder='Titulo: ' onChange={(event => {
        set_title(event.target.value);
      })} />
      <input placeholder='Subtitulo: ' onChange={(event => {
        set_subtitle(event.target.value);
      })} />
      <input placeholder='Titulo do botão: ' onChange={(event => {
        set_b_title(event.target.value);
      })} />
      <input placeholder='Url do botão: ' onChange={(event => {
        set_b_url(event.target.value);
      })} />
      <input placeholder='Url da imagem: ' onChange={(event => {
        set_i_url(event.target.value);
      })} />
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
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default App;
