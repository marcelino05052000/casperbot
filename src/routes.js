import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Admin from "./pages/admin"
import Home from "./pages/home";
import NoticiasEntretenimento from "./pages/noticiasEntretenimento"
import NoticiasEsportes from "./pages/noticiasEsportes"
import NoticiasFamosos from "./pages/noticiasFamosos"
import NoticiasPolitica from "./pages/noticiasPolitica"
import ProtectedRoutes from "./protectedRoutes";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Admin />} path="/" exact />
                <Route element={<ProtectedRoutes />}>
                    <Route element={<Home />} path="/home" />
                    <Route element={<NoticiasEntretenimento />} path="/entretenimento" />
                    <Route element={<NoticiasEsportes />} path="/esportes" />
                    <Route element={<NoticiasFamosos />} path="/famosos" />
                    <Route element={<NoticiasPolitica />} path="/politica" />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;