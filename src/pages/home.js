import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  function sair() {
    localStorage.clear()
    alert("Até mais!")
    navigate('/')
  }

  return (
    <div>
      <h1>Casper - Seu bot de notícias</h1>
      <button onClick={sair}>Sair</button>
      <nav>
        <ul>
          <li>
            <Link to="/entretenimento">Ver notícias de Entretenimento</Link>
          </li>
          <li>
            <Link to="/esportes">Ver notícias de Esportes</Link>
          </li>
          <li>
            <Link to="/famosos">Ver notícias de Famosos</Link>
          </li>
          <li>
            <Link to="/politica">Ver notícias de Politica</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;