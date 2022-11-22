import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/home";
import NoticiasEntretenimento from "./pages/noticiasEntretenimento"
import NoticiasEsportes from "./pages/noticiasEsportes"
import NoticiasFamosos from "./pages/noticiasFamosos"
import NoticiasPolitica from "./pages/noticiasPolitica"

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" exact />
                <Route element={<NoticiasEntretenimento />} path="/entretenimento" />
                <Route element={<NoticiasEsportes />} path="/esportes" />
                <Route element={<NoticiasFamosos />} path="/famosos" />
                <Route element={<NoticiasPolitica />} path="/politica" />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;