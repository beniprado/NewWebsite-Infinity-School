import React, { useEffect, useRef } from "react";
import BtnCta from "../../../components/ui/BtnCta";
import video from "../../../assets/estrutura.mp4";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Metodologia = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Entrou na tela - anima para mostrar
          gsap.to(contentRef.current, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power4.out",
          });
        } else {
          // Saiu da tela - anima para esconder
          gsap.to(contentRef.current, {
            autoAlpha: 0,
            y: 50,
            scale: 0.95,
            duration: 0.8,
            ease: "power2.inOut",
          });
        }
      },
      {
        root: null,
        threshold: 0.6, // Pelo menos 60% visível para considerar "na tela"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex justify-center items-center py-20 px-6 overflow-hidden min-h-[800px] h-screen"
      id="descubra"
    >
      {/* Background Video */}
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

      {/* Overlay escura */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-0"></div>

      {/* Conteúdo animado */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-start gap-10 max-w-screen-xl opacity-0 translate-y-10 scale-95"
      >
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-5xl">
            Escola 100% Presencial com Metodologia Americana
          </h2>
          <p className="text-lg md:text-lg max-w-4xl">
            Somos uma escola internacionalmente certificada, com ensino presencial
            e voltado às necessidades profissionais do século XXI nas áreas de
            inovação e criatividade. Oferecemos uma experiência única para nossos
            alunos.
          </p>
        </div>
        <Link to="/sobre">
          <BtnCta title="Saiba Mais" font="3xl" py="3" px="10" />
        </Link>
      </div>
    </section>
  );
};

export default Metodologia;
