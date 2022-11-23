import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Famosos from '../components/famosos';
import ListaFamosos from '../components/listaFamosos';

const NoticiasFamosos = () => {
    //ID Famosos
    const [idFamosos, setIdFamosos] = useState("");

    const getIdFamososHandler = (id) => {
        setIdFamosos(id);
    };

    return (
        <>
            <header>
                <h1>Notícias sobre Famosos</h1>
                <Link to="/home">retornar a página inicial</Link>
            </header>

            <Famosos id={idFamosos} setIdFamosos={setIdFamosos} />
            <ListaFamosos getIdFamosos={getIdFamososHandler} />
        </>
    );
}

export default NoticiasFamosos;