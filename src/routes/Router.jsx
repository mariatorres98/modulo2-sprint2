import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Compra from "../components/compra/Compra";
import Home from "../components/home/Home";
import Asientos from "../components/asientos/Asientos";
import Formulario from "../components/formulario/Formulario";
import Sensillo from "../components/compra/Sensillo";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="compra" element={<Compra />} />
                <Route path="asientos" element={<Asientos />} />
                <Route path="formulario" element={<Formulario />} />
                <Route path="sensillo" element={<Sensillo/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;