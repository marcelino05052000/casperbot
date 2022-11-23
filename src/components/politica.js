import React, { useEffect, useState } from 'react';
import PoliticaServices from '../services/politica.services';

const Politica = ({ id, setIdPolitica }) => {
    const [title, set_title] = useState("");
    const [subtitle, set_subtitle] = useState("");
    const [b_title, set_b_title] = useState("");
    const [b_url, set_b_url] = useState("");
    const [i_url, set_i_url] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (title === "" || subtitle === "" || b_title === "" || b_url === "" || i_url === "") {
            alert("Preencha todos os campos!");
            return;
        }

        const newPoli = {
            title,
            subtitle,
            b_title,
            b_url,
            i_url
        }

        try {
            if (id !== undefined && id !== "") {
                await PoliticaServices.updatePolitica(id, newPoli);
                setIdPolitica("");
                alert("Atualizado com sucesso");
            } else {
                await PoliticaServices.addPolitica(newPoli);
                alert("Adicionado com sucesso");
            }
        } catch (err) {
            alert(`Erro ${err.message}`)
        }

        set_title("");
        set_subtitle("");
        set_b_title("");
        set_b_url("");
        set_i_url("");
        window.location.reload(false);
    }

    const editHandler = async () => {
        try {
            const docSnap = await PoliticaServices.getPolitica(id);
            set_title(docSnap.data().title);
            set_subtitle(docSnap.data().subtitle);
            set_b_title(docSnap.data().b_title);
            set_b_url(docSnap.data().b_url);
            set_i_url(docSnap.data().i_url);
        } catch (err) {
            alert(`Erro ${err.message}`)
        }
    };

    useEffect(() => {
        if (id !== undefined && id !== "") {
            editHandler();
        }
    }, [id]);

    return (
        <div>
            <input placeholder='Title: ' value={title} onChange={(event => {
                set_title(event.target.value);
            })} /><br />
            <input placeholder='Subtitle: ' value={subtitle} onChange={(event => {
                set_subtitle(event.target.value);
            })} /><br />
            <input placeholder='buttonTittle: ' value={b_title} onChange={(event => {
                set_b_title(event.target.value);
            })} /><br />
            <input placeholder='buttonUrl: ' value={b_url} onChange={(event => {
                set_b_url(event.target.value);
            })} /><br />
            <input placeholder='imageUrl: ' value={i_url} onChange={(event => {
                set_i_url(event.target.value);
            })} /><br />

            <div>
                <button onClick={handleSubmit}>
                    Adicionar / Atualizar
                </button>
            </div>
        </div>
    );
}

export default Politica;