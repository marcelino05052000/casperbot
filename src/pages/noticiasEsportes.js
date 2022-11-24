import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Esportes from '../components/esportes';
import ListaEsportes from '../components/listaEsportes';

const NoticiasEsportes = () => {
    //ID Esportes
    const [idEsportes, setIdEsportes] = useState("");

    const getIdEsportesHandler = (id) => {
        setIdEsportes(id);
    };

    return (
        <>
            <header>
                <h1 className='basico'>Notícias sobre Esportes</h1>
                <Link to="/home">retornar a página inicial</Link>
            </header>

            <Esportes id={idEsportes} setIdEsportes={setIdEsportes} />
            <ListaEsportes getIdEsportes={getIdEsportesHandler} />
        </>
    );
}

export default NoticiasEsportes;