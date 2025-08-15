import React from "react";
import img from "../../../assets/visitainfinity.png"
import BtnCta from "../../../components/ui/BtnCta";

const Visita = () => {
    return <section className="py-15 px-25">
        <div className="flex items-center justify-between max-w-6xl bg-[#121212] rounded-3xl m-auto">
            <img src={img} alt="Imagem da Infinity" className="max-w-md rounded-l-3xl"/>
            <div className="flex flex-col items-start justify-center gap-7 p-10">
                <div className="flex flex-col gap-4">
                    <h2 className="text-5xl leading-14 max-w-lg font-bold">Faça uma visita e conheça melhor nossa escola!</h2>
                    <p className="max-w-xl">Agende uma visita, conheça nosso espaço e equipe, e descubra como nosso método inovador pode transformar sua carreira.</p>
                </div>
                <BtnCta title={"Agendar Visita"} font={"xl"} py={"3"} px={"10"}/>
            </div>
        </div>
    </section>
}

export default Visita