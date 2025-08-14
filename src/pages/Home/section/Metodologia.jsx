import React from "react";
import BtnCta from "../../../components/ui/BtnCta";
import video from "../../../assets/estrutura.mp4"

const Metodologia = () => {
    return (
        <section className="relative flex justify-center items-center py-20 px-6 overflow-hidden min-h-[800px] h-screen">
            <div className="bg-[#1a1a1af9]">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                >
                    <source src={video} type="video/mp4" />
                    Seu navegador não suporta vídeo HTML5.
                </video>
            </div>

            <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-0"></div>

            <div className="relative z-10 flex flex-col items-start gap-10 max-w-screen-xl">
                <div className="flex flex-col gap-5">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold max-w-5xl">
                        Escola 100% Presencial com Metodologia Americana
                    </h2>
                    <p className="text-lg md:text-lg max-w-4xl">
                        Somos uma escola internacionalmente certificada, com ensino presencial e voltado às necessidades profissionais do século XXI nas áreas de inovação e criatividade. Oferecemos uma experiência única para nossos alunos.
                    </p>
                </div>
                 <BtnCta title="Saiba Mais" font="3xl" py="3" px="10" />
            </div>
        </section>
    );
};

export default Metodologia;
