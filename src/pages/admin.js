import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const [pin, setPin] = useState("");

    const navigate = useNavigate();

    function acesso() {
        if (pin == "12345678") {
            alert("Bem vindo");
            localStorage.setItem('state', 'true')
            navigate('/home');
        }
        else {
            alert("PIN incorreto");
        }
    }

    return (
        <div id='login'>
            <h1>Bem vindo. Para prosseguir, por favor coloque a senha de acesso.</h1>
            <div>
                <input type="text" placeholder="PIN" onChange={(e) => setPin(e.target.value)} />
                <button onClick={acesso}>Entrar</button>
            </div>
        </div>
    );
}

export default Admin;