import React from "react";
import BtnCta from "../../../components/ui/BtnCta";
import banner from "../../../assets/Infinitybanner.png";

const Header = () => {
    return (
        <header
            className="flex flex-col grad items-center justify-center min-h-[900px] max-h-[1800px] h-dvh bg-cover bg-left"
            // style={{ backgroundImage: `url(${banner})` }}
        >
            <div className="flex flex-col items-center justify-center gap-9 pb-50">
                <div className="flex flex-col items-center justify-center gap-7 text-shadow-md">
                    <span className="m-auto uppercase text-4xl font-light text-shadow-md">Infinity School</span>
                    <h1 className="text-8xl font-bold max-w-6xl text-center text-shadow-lg">
                        O aprendizado que nunca tem fim
                    </h1>
                    <p className="text-xl max-w-xl text-center text-shadow-md">
                        Transforme conhecimento em oportunidades e esteja sempre pronto para o futuro da tecnologia.
                    </p>
                </div>
                <BtnCta title={"Quero Começar!"} font={"3xl"} py={"3"} px={"10"} />
            </div>
        </header>
    );
};

export default Header;
