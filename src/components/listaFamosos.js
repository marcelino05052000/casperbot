import React, { useEffect, useState } from "react";
import FamososServices from "../services/famosos.service";

const ListaFamosos = ({ getIdFamosos }) => {
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        getNoticias();
    }, []);

    const getNoticias = async () => {
        const data = await FamososServices.getAllFamosos();
        setNoticias(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const deleteHandler = async (id) => {
        await FamososServices.deleteFamosos(id);
        getNoticias();
    };

    return (
        <>
            <div>
                <button onClick={getNoticias} style={{backgroundColor: 'grey', color: 'white'}}>
                    Atualizar notícias
                </button>
            </div>
            <table>
                <tr>
                    <th>#</th>
                    <th>Título</th>
                    <th>Subtítulo</th>
                    <th>Título do botão</th>
                    <th>Url do botão</th>
                    <th>Url da imagem</th>
                    <th>Ação</th>
                </tr>
                {noticias.map((doc, index) => {
                    return (
                        <tr key={doc.id}>
                            <td className="break">{index + 1}</td>
                            <td>{doc.title}</td>
                            <td>{doc.subtitle}</td>
                            <td>{doc.b_title}</td>
                            <td className="break">{doc.b_url}</td>
                            <td className="break">{doc.i_url}</td>
                            <td>
                                <button
                                    style={{backgroundColor: 'blue', color: 'white'}}
                                    onClick={(e) => getIdFamosos(doc.id)}
                                >
                                    Editar
                                </button>
                                <button
                                    style={{backgroundColor: 'red', color: 'white'}}
                                    onClick={(e) => deleteHandler(doc.id)}
                                >
                                    Apagar
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </table>
        </>
    );
};

export default ListaFamosos;