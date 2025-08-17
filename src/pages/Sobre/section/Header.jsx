import React from "react";
import video from "../../../assets/sobreinfinity.mp4";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";

const Header = () => {
  return (
    <header className="px-4 md:px-10 lg:px-20 py-5">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center">
          Conheça a Infinity School
        </h1>
        <p className="text-center max-w-xl text-sm sm:text-base md:text-lg">
          Entenda oque é a nossa escola, os benefícios que nossos alunos possuem
          e a vivência que você terá sendo nosso aluno Infinity.
        </p>
      </div>

      <div className="flex justify-center py-8">
        <video
          src={video}
          loop
          controls
          playsInline
          className="rounded-2xl sm:rounded-3xl md:rounded-4xl max-w-xs sm:max-w-sm md:max-w-md drop-shadow-xl drop-shadow-orange-900"
        ></video>
      </div>

      <div>
        <div className="flex flex-col items-center justify-center gap-5 px-4 sm:px-0">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl max-w-xl text-center">
            A melhor escola de tecnologia com ensino prático do Brasil
          </h2>
          <p className="text-center max-w-lg text-sm sm:text-base md:text-lg px-2 sm:px-0">
            Venha ser infinity e nos siga nas nossas redes sociais para acompanhar
            as novidades e se interar no mundo da tecnologia com a gente.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-5">
            <a
              href="https://www.youtube.com/@infinityschool1421"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg hover:text-red-600 transition-colors"
            >
              <IconBrandYoutube size={35} stroke={2} /> Youtube
            </a>
            <a
              href="https://www.instagram.com/infinity.school/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg hover:text-pink-600 transition-colors"
            >
              <IconBrandInstagram size={35} stroke={2} /> Instagram
            </a>
            <a
              href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Finfinityschoolcg%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg hover:text-blue-600 transition-colors"
            >
              <IconBrandFacebook size={35} stroke={2} /> Facebook
            </a>
            <a
              href="https://www.linkedin.com/company/infinityschool/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg hover:text-blue-700 transition-colors"
            >
              <IconBrandLinkedin size={35} stroke={2} /> Linkedin
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;