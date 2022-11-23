import React, { useEffect, useState } from "react";
import EntretenimentoServices from "../services/entretenimento.services";

const ListaEntretenimento = ({ getIdEntretenimento }) => {
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        getNoticias();
    }, []);

    const getNoticias = async () => {
        const data = await EntretenimentoServices.getAllEntretenimento();
        setNoticias(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const deleteHandler = async (id) => {
        await EntretenimentoServices.deleteEntretenimento(id);
        getNoticias();
    };

    return (
        <>
            <div>
                <button onClick={getNoticias}>
                    Atualizar notícias
                </button>
            </div>
            <table>
                <tbody>
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
                                        variant="secondary"
                                        className="editar"
                                        onClick={(e) => getIdEntretenimento(doc.id)}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        variant="danger"
                                        className="apagar"
                                        onClick={(e) => deleteHandler(doc.id)}
                                    >
                                        Apagar
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default ListaEntretenimento;