import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Date({ date, desc, index }) {
  const itemRef = useRef(null);
  const numberRef = useRef(null);

  useEffect(() => {
    const el = itemRef.current;

    const value = parseInt(date.replace(/\D/g, ""), 10) || 0;

    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    const obj = { val: 0 };
    gsap.fromTo(
      obj,
      { val: 0 },
      {
        val: value,
        duration: 2,
        ease: "power1.out",
        delay: index * 0.2,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        onUpdate: () => {
          if (numberRef.current) {
            numberRef.current.innerText =
              "+" + Math.floor(obj.val).toLocaleString("pt-BR");
          }
        },
      }
    );
  }, [date, index]);

  return (
    <div
      ref={itemRef}
      className="flex flex-col justify-center gap-2 text-center lg:text-left"
    >
      <span
        ref={numberRef}
        className="text-5xl font-bold text-shadow-xl text-white"
      >
        +0
      </span>
      <p className="text-sm font-light text-shadow-xl text-white">{desc}</p>
    </div>
  );
}

const Resultados = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    gsap.fromTo(
      container,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: container,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    ScrollTrigger.refresh();
  }, []);

  return (
    <section className="flex banner-resultados min-h-[1200px] items-center justify-start py-20 px-5 md:px-10 lg:px-40">
      <div ref={containerRef} className="flex flex-col gap-10 w-full">
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl text-white">
            Nossos Resultados
          </h2>
          <p className="max-w-2xl text-sm md:text-base text-white">
            Números que mostram a qualidade e o impacto do nosso ensino e a
            transformação na vida dos nossos alunos.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap gap-10 mb-16">
          <Date date={"40.000"} desc={"Alunos Formados"} index={0} />
          <Date date={"23.000"} desc={"Alunos Ativos"} index={1} />
          <Date date={"380"} desc={"Turmas Ativas"} index={2} />
        </div>
      </div>
    </section>
  );
};

export default Resultados;
