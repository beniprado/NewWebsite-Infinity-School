import React from "react";
import Accordion from "../../../components/ui/Accordion";
import BtnCta from "../../../components/ui/BtnCta";

const Duvidas = () => {
    return <section className="py-15 px-5">
        <div className="flex flex-col items-center justify-center gap-15">
            <div className="flex flex-col justify-center items-center gap-5">
                <h2 className="text-center font-bold text-5xl">Dúvidas Frequentes</h2>
                <p className="text-center max-w-2xl">Tire suas principais dúvidas sobre o curso Infinity, metodologia, certificação e oportunidades. Se sua pergunta não estiver aqui, entre em contato conosco!</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-8 ">
                <Accordion question={"Preciso ter conhecimento prévio para começar?"} answer={"Não! Temos cursos para todos os níveis, com suporte completo para você evoluir desde o início."}/>
                <Accordion question={"Como funcionam as aulas presenciais?"} answer={"As aulas presenciais possuem interação direta e prática acompanhada por professores e monitores experientes para garantir o melhor aprendizado, tendo acesso a um ambiente acolhedor com equipam."}/>
                <Accordion question={"O certificado vale para o mercado de trabalho?"} answer={"Sim, todos os cursos oferecem certificação reconhecida nacional e internacionalmente."}/>
                <Accordion question={"Posso conciliar o curso com trabalho ou estudos?"} answer={"Sim, o curso é planejado para oferecer flexibilidade com horários que se adaptam à sua rotina."}/>
                <Accordion question={"Quais oportunidades de carreira o Infinity oferece?"} answer={"Disponibilizamos uma aba exclusiva para vagas de emprego e freelas, conectando alunos a oportunidades reais nas áreas de programação, marketing, design e mais."}/>
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
                <div className="flex flex-col gap-2">
                    <h3 className="text-3xl text-center font-bold">Alguma Dúvida</h3>
                    <p className="text-center max-w-xs">Clique no botão abaixo e escolha a melhor forma de contato</p>
                </div>
                <BtnCta font={"xl"} title={"Fale Conosco"} px={"5"} py={"2"}/>
            </div>
        </div>
    </section>
}

export default Duvidas