import React from "react";
import Header from "./section/Header";
import Metodologia from "./section/Metodologia";
import Curso from "./section/Cursos";
import Desc1 from "./section/desc1";
import Resultados from "./section/Resultados";

const Home = () => {
    return <main className=" bg-black">
        <Header />
        <Metodologia />
        <Curso />
        <Desc1 />
        <Resultados />
    </main>
}

export default Home