import React from "react";
import BtnCta from "./BtnCta";

const Cta = () => {
    return <section className="py-35">
        <div className="flex flex-col items-center justify-center gap-8">
            <div className="flex items-center flex-col gap-8">
                <h2 className="text-center max-w-4xl font-bold text-6xl">Do zero ao profissional: Seu próximo passo é aqui</h2>
                <p className="text-center max-w-xl">Na Infinity School, você aprende com especialistas e se prepara para o mercado em áreas que estão transformando o mundo. Escolha seu curso e dê o passo que vai mudar a sua vida.</p>
            </div>
            <BtnCta title={"Garantir minha vaga"} py={"3"} px={"10"} font={"2xl"}/>
        </div>
    </section>
}

export default Cta