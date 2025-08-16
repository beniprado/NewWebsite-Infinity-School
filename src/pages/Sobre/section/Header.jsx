import React from "react";
import video from "../../../assets/sobreinfinity.mp4"
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";

const Header = () => {
    return <header >
        <div className="flex flex-col justify-center items-center gap-5">
            <h1 className="font-bold text-5xl">Conheça a Infinity School</h1>
            <p className="text-center max-w-xl">Entenda oque é a nossa escola, os benefícios que nossos alunos possuem e a vivência que você terá sendo nosso aluno Infinity.</p>
        </div>
        <div className="flex justify-center py-15">
            <video src={video} loop controls playsInline className="rounded-4xl max-w-sm drop-shadow-xl drop-shadow-orange-900"></video>
        </div>
        <div>
            <div className="flex flex-col items-center justify-center gap-5"> 
                <h2 className="font-bold text-4xl max-w-xl text-center">A melhor escola de tecnologia com ensino prático do Brasil</h2>
                <p className="text-center max-w-lg">Venha ser infinity e nos siga nas nossas redes sociais para acompanhar as novidades e se interar no mundo da tecnologia com a gente.</p>
                <div className="flex gap-8 pt-5">
                    <a href="https://www.youtube.com/@infinityschool1421" target="_blank">
                        <div className="flex items-center justify-center gap-2 text-lg"><IconBrandYoutube size={35} stroke={2}/> Youtube</div>
                    </a>
                    <a href="https://www.instagram.com/infinity.school/" target="_blank">
                        <div className="flex items-center justify-center gap-2 text-lg"><IconBrandInstagram size={35} stroke={2}/> Intagram</div>
                    </a>
                    <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Finfinityschoolcg%2F" target="_blank">
                        <div className="flex items-center justify-center gap-2 text-lg"><IconBrandFacebook size={35} stroke={2}/> Facebook</div>
                    </a>
                    <a href="https://www.linkedin.com/company/infinityschool/" target="_blank">
                        <div className="flex items-center justify-center gap-2 text-lg"><IconBrandLinkedin size={35} stroke={2}/> Linkedin</div>
                    </a>
                </div>
            </div>
            <div>

            </div>
        </div>
    </header>
}

export default Header