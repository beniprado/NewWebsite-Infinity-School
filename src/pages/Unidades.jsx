import React from "react";
import banner from "../assets/bannerUnidades.png"

export function Unidade() {
    return <div className="flex">
        <div>
            <h2>Unidade Salvador</h2>
            <p>Sua escola está localizada no Salvador Shopping Business. Possuindo estacionamento 24h e segurança especializada.</p>
        </div>
        <div className="flex">
            <div className="flex flex-col">
                <div>
                    <h3>Salvador Business</h3>
                    <p>Alameda Salvador, 1057 - Caminho das Árvores, Salvador - BA, 41820-790</p>
                </div>
                <div>
                    <h3>Complemento</h3>
                    <p>Ao lado do Salvador Shopping e do Metrô de Salvador.</p>
                    <a href="">Ver Mapa</a>
                </div>
            </div>

            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.3691048912005!2d-38.45935602534512!3d-12.976678459910485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161bfce64f7c2d%3A0x8d355fdcd1358496!2sInfinity%20School%20Salvador!5e1!3m2!1spt-BR!2sbr!4v1755295616749!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>        
        </div>
    </div>
}

const Unidades = () => {
    return <section>
        <img src={banner} alt="Banner da pagina Unidades" className="w-screen"/>
        <div>
            <Unidades />
            <Unidades />
        </div>
    </section>
}

export default Unidades