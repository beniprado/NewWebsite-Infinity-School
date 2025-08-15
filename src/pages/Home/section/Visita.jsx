import React from "react";
import img from "../../../assets/visitainfinity.png"
import BtnCta from "../../../components/ui/BtnCta";

const Visita = () => {
    return <section className="flex justify-center py-15 px-5 lg:px-25">
        <div className="flex flex-col lg:flex-row items-center justify-between w-screen bg-[#121212] rounded-3xl ">
            <img src={img} alt="Imagem da Infinity" className="w-full lg:max-w-md rounded-3xl object-cover"/>
            <div className="flex flex-col items-start justify-center gap-7 p-5 md:p-10">
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-none lg:leading-14 max-w-lg font-bold">Faça uma visita e conheça melhor nossa escola!</h2>
                    <p className="max-w-xl">Agende uma visita, conheça nosso espaço e equipe, e descubra como nosso método inovador pode transformar sua carreira.</p>
                </div>
                <BtnCta title={"Agendar Visita"} font={"xl"} py={"3"} px={"10"}/>
            </div>
        </div>
    </section>
}

export default Visita