import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ListaPolitica from '../components/listaPolitica';
import Politica from '../components/politica';

const NoticiasPolitica = () => {
    //ID Politica
    const [idPolitica, setIdPolitica] = useState("");

    const getIdPoliticaHandler = (id) => {
        console.log("ID: ", id);
        setIdPolitica(id);
    };

    return (
        <>
            <header>
                <h1>Notícias sobre Política</h1>
                <Link to="/home">retornar a página inicial</Link>
            </header>

            <Politica id={idPolitica} setIdPolitica={setIdPolitica} />
            <ListaPolitica getIdPolitica={getIdPoliticaHandler} />
        </>
    );
}

export default NoticiasPolitica;