import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TrioCard from "../../../components/ui/TrioCard";
import {
  IconBook2,
  IconBriefcase,
  IconCertificate,
  IconSchool,
  IconTrophy,
  IconUsersGroup,
} from "@tabler/icons-react";

gsap.registerPlugin(ScrollTrigger);

const containerRow = "flex flex-col lg:flex-row items-center justify-center gap-20";

const Desc = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Anima o título ao entrar na tela
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
      });

      // Anima cada card individualmente com ScrollTrigger
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          y: 100,
          opacity: 0,
          duration: 1.3,
          ease: "bounce.out",
          delay: i * 0.1, // levemente escalonado
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-15 flex" ref={sectionRef}>
      <div className="flex flex-col gap-25 py-25 px-5 md:px-15 m-auto">
        <h2
          className="text-center lg:text-start text-4xl sm:text-5xl md:text-6xl font-bold"
          ref={titleRef}
        >
          Diferenciais
        </h2>
        <div className={containerRow}>
          <TrioCard
            ref={(el) => (cardsRef.current[0] = el)}
            icon={<IconCertificate stroke={1} size={80} />}
            title="Certificado Internacional"
            description="Receba um certificado reconhecido globalmente, validando suas habilidades e abrindo portas para oportunidades no Brasil e no exterior."
            max="2xl"
          />
          <TrioCard
            ref={(el) => (cardsRef.current[1] = el)}
            icon={<IconBriefcase stroke={1} size={80} />}
            title="Oportunidades no Mercado"
            description="Tenha acesso exclusivo a vagas de emprego e projetos freelancer, conectando você diretamente a empresas que buscam talentos em tecnologia."
            max="2xl"
          />
          <TrioCard
            ref={(el) => (cardsRef.current[2] = el)}
            icon={<IconTrophy stroke={1} size={80} />}
            title="Gamificação"
            description="Aprenda de forma divertida e motivadora com desafios, recompensas e rankings que tornam o aprendizado mais dinâmico e envolvente."
            max="2xl"
          />
        </div>
        <div className={containerRow}>
          <TrioCard
            ref={(el) => (cardsRef.current[3] = el)}
            icon={<IconUsersGroup stroke={1} size={80} />}
            title="Aulas Compartilhadas"
            description="Interaja com outros alunos em sessões colaborativas, trocando experiências e aprendendo em conjunto."
            max="xl"
          />
          <TrioCard
            ref={(el) => (cardsRef.current[4] = el)}
            icon={<IconSchool stroke={1} size={80} />}
            title="Cursos Moduláveis"
            description="Grade de ensino flexível, possibilitando aprender além do que estiver na grade do curso."
            max="xl"
          />
          <TrioCard
            ref={(el) => (cardsRef.current[5] = el)}
            icon={<IconBook2 stroke={1} size={80} />}
            title="Super Módulos"
            description="Participe de aulas avançadas de diversos assuntos cobrados no mercado de trabalho."
            max="xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Desc;