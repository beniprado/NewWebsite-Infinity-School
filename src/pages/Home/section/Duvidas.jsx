import React from "react";
import Accordion from "../../../components/ui/Accordion";

const Duvidas = () => {
    return <section className="py-15">
        <div className="flex flex-col items-center justify-center gap-15">
            <div className="flex flex-col justify-center items-center gap-5">
                <h2 className="text-center font-bold text-5xl">Dúvidas Frequentes</h2>
                <p className="text-center max-w-2xl">Tire suas principais dúvidas sobre o curso Infinity, metodologia, certificação e oportunidades. Se sua pergunta não estiver aqui, entre em contato conosco!</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-8">
                <Accordion question={"Preciso ter conhecimento prévio para começar?"} answer={"Não! Temos cursos para todos os níveis, com suporte completo para você evoluir desde o início."}/>
                <Accordion question={"Como funcionam as aulas presenciais?"} answer={"As aulas presenciais possuem interação direta e prática acompanhada por professores e monitores experientes para garantir o melhor aprendizado, tendo acesso a um ambiente acolhedor com equipam."}/>
                <Accordion question={"Preciso ter conhecimento prévio para começar?"} answer={"Não! Temos cursos para todos os níveis, com suporte completo para você evoluir desde o início."}/>
                <Accordion question={"Preciso ter conhecimento prévio para começar?"} answer={"Não! Temos cursos para todos os níveis, com suporte completo para você evoluir desde o início."}/>
                <Accordion question={"Preciso ter conhecimento prévio para começar?"} answer={"Não! Temos cursos para todos os níveis, com suporte completo para você evoluir desde o início."}/>
            </div>
        </div>
    </section>
}

export default Duvidas