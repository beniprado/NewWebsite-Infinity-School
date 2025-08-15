import React from "react";

export function Date() {
    return <div className="flex flex-col justify-center gap-2">
            <span className="text-5xl font-bold">
                +
                40.000
            </span>
            <p className="text-sm font-light">Alunos Formados</p>
        </div>
}

const Resultados = () => {
    return <section className="flex banner-resultados min-h-[900px] items-center justify-start py-30 px-5 md:px-10 lg:px-45">
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
                <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl">Nossos Resultados</h2>
                <p className="max-w-2xl text-sm md:text-base">Números que mostram a qualidade e o impacto do nosso ensino e a transformação na vida dos nossos alunos.</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-15">
                <Date />
                <Date />
                <Date />
            </div>
        </div>

    </section>
}

export default Resultados