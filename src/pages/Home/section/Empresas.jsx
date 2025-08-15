import React from "react";
import adobe from "../../../assets/adobe.png"
import google from "../../../assets/google.png"
import microsoft from "../../../assets/microsoft.png"

const Empresas = () => {
    return <section className="flex flex-col gap-25 py-30">
        <h2 className="text-center font-bold text-3xl sm:text-4xl md:text-6xl">Empresas Parceiras</h2>
        <div className="flex items-center justify-center gap-35 flex-wrap px-15">
            <img src={adobe} alt="logo da Adobe" />
            <img src={google} alt="logo da Google" />
            <img src={microsoft} alt="logo da Microsoft" />
        </div>
    </section>
}

export default Empresas