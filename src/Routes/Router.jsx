import React from "react";
import { Route, Routes } from "react-router-dom"
import Home from "./Home";
import Detail from "./Detail";
import Contact from "./Contact";
import Favs from "./Favs";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dentist.id" element={<Detail />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/favs" element={<Favs />} />
        </Routes>
    );
};

export default Router;