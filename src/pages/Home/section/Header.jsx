import React from "react"
import BtnCta from "../../../components/ui/BtnCta"

const Header = () => {
    return <header className="flex flex-col items-center justify-center gap-9 h-min-[900px] h-max-[1800px] h-dvh">
        <div className="flex flex-col items-center justify-center gap-7">
            <h1 className="text-9xl font-bold max-w-7xl text-center">O aprendizado que nunca tem fim</h1>
            <p className="text-2xl max-w-2xl text-center">Transforme conhecimento em oportunidades e esteja sempre pronto para o futuro da tecnologia.</p>
        </div>
        <BtnCta title={"Quero Começar!"} font={"3xl"} py={"5"} px={"10"}/>
    </header>
}

export default Header