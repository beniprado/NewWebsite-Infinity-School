import React from "react";
import banner from "../../assets/bannercursos.png";
import progamacao from "../../assets/progamacao.png";
import design from "../../assets/design.png";
import marketing from "../../assets/marketing.png"; 
import film from "../../assets/film.png"; 
import BtnCta from "../../components/ui/BtnCta";

export function ContainerCursos({ title, about, description, img }) {
  return (
    <div className="flex py-10 px-8">
      <div className="flex items-center gap-10 max-w-7xl mx-auto">
        <img
          src={img}
          alt={`Imagem do curso ${title}`}
          className="w-md rounded-4xl max-w-sm"
        />
        <div className="flex flex-col gap-10 items-baseline justify-center">
          <div className="flex flex-col gap-5">
            <h2 className="font-bold text-6xl max-w-2xl">{title}</h2>
            <span className="text-4xl">{about}</span>
            <p className="max-w-lg text-lg">{description}</p>
          </div>
          <BtnCta title={"Saiba Mais"} py={"2"} px={"8"} />
        </div>
      </div>
    </div>
  );
}

const cursosData = [
  {
    id: 1,
    img: progamacao,
    title: "Curso Programação Full Stack IA",
    about: "Curso presencial / 13 meses",
    description:
      "Torne-se um programador Full Stack com Python e JavaScript nesse curso completo.",
  },
  {
    id: 2,
    img: design,
    title: "Curso de Design Gráfico",
    about: "Curso presencial / 13 meses",
    description:
      "Aprenda as principais ferramentas de design como Photoshop, Illustrator e Figma.",
  },
  {
    id: 3,
    img: marketing,
    title: "Curso de Marketing Digital",
    about: "Curso presencial / 10 meses",
    description:
      "Domine estratégias de SEO, redes sociais, tráfego pago e muito mais.",
  },
  {
    id: 3,
    img: film, 
    title: "Curso Film Design IA",
    about: "Curso presencial / 13 meses",
    description: "Captura, Edição e Motion Graphics para Vídeos"
  }
];

const Cursos = () => {
  return (
    <section>
      <img
        src={banner}
        alt="Banner principal dos cursos"
        className="w-full h-[450px] max-w-full object-cover object-center"
      />
      <div className="flex flex-col items-center justify-center py-15">
        {cursosData.map((curso) => (
          <ContainerCursos
            key={curso.id}
            title={curso.title}
            about={curso.about}
            description={curso.description}
            img={curso.img}
          />
        ))}
      </div>
    </section>
  );
};

export default Cursos;