import React from "react";
import Header from "./section/Header";
import Metodologia from "./section/Metodologia";
import Curso from "./section/Cursos";
import Desc from "./section/Desc";
import Resultados from "./section/Resultados";
import Avaliacoes from "./section/avaliacoes";
import Cta from "../../components/ui/Cta";
import Visita from "./section/Visita";
import Empresas from "./section/Empresas";
import Duvidas from "./section/Duvidas";

const Home = () => {
    return <main className=" bg-black">
        <Header />
        <Metodologia />
        <Curso />
        <Desc />
        <Resultados />
        <Avaliacoes />
        <Cta />
        <Visita />
        <Empresas />
        <Duvidas />
    </main>
}

export default Home