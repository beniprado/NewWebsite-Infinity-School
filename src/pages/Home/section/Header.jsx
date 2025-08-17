import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import BtnCta from "../../../components/ui/BtnCta";

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      headerRef.current,
      { autoAlpha: 0, y: 50 },
      { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out" }
    )
      .fromTo(
        headerRef.current.querySelectorAll("span, h1, p, a"),
        { autoAlpha: 0, y: 20, scale: 0.95 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          stagger: 0.15,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.5"
      );
  }, []);

  return (
    <header
      ref={headerRef}
      className="flex flex-col banner-header items-center justify-start py-25 min-h-[900px] max-h-[1800px] h-dvh bg-cover bg-left opacity-0"
    >
      <div className="flex flex-col items-center justify-center gap-9">
        <div className="flex flex-col items-center justify-center gap-7 text-shadow-md">
          <span className="m-auto uppercase text-4xl font-light text-shadow-md">
            Infinity School
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold max-w-6xl text-center text-shadow-lg">
            O aprendizado que nunca tem fim
          </h1>
          <p className="text-xl max-w-xl text-center text-shadow-md">
            Transforme conhecimento em oportunidades e esteja sempre pronto
            para o futuro da tecnologia.
          </p>
        </div>
        <a href="#descubra">
          <BtnCta title={"Descubra o Caminho"} font={"3xl"} py={"3"} px={"10"} />
        </a>
      </div>
    </header>
  );
};

export default Header;
