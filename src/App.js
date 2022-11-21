import './App.css';
import Home from './pages/home';
import { useEffect, useState } from 'react';
import { db } from './firebase'
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [entretenimento, setEntretenimento] = useState([]);
  const entretenimentoCollectionRef = collection(db, "faq.entretenimento");

  useEffect(() => {
    const getEntretenimento = async () => {
      const data = await getDocs(entretenimentoCollectionRef);
      setEntretenimento(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getEntretenimento();
  }, [])

  return (
    <div className="App">
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
