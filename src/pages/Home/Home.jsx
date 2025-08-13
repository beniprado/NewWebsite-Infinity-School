import React from "react";
import Header from "./section/Header";
import Metodologia from "./section/Metodologia";
import Curso from "./section/Cursos";
import Desc1 from "./section/desc1";

const Home = () => {
    return <main className=" bg-black">
        <Header />
        <Metodologia />
        <Curso />
        <Desc1 />
    </main>
}

export default Home