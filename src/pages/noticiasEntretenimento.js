import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Entretenimento from '../components/entretenimento';
import ListaEntretenimento from '../components/listaEntretenimento';

const NoticiasEntretenimento = () => {
    //ID Entretenimento
    const [idEntretenimento, setIdEntretenimento] = useState("");

    const getIdEntretenimentoHandler = (id) => {
        console.log("ID: ", id);
        setIdEntretenimento(id);
    };

    return (
        <>
            <header>
                <h1>Notícias sobre Entretenimento</h1>
                <Link to="/home">retornar a página inicial</Link>
            </header>

            <Entretenimento id={idEntretenimento} setIdEntretenimento={setIdEntretenimento} />
            <ListaEntretenimento getIdEntretenimento={getIdEntretenimentoHandler} />
        </>
    );
}

export default NoticiasEntretenimento;