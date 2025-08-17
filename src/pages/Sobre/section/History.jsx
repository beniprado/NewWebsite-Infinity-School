import React from "react";

const HistoryData = [
  {
    id: 1,
    title: "Nossa História",
    desc: "Desde 2016, a Infinity School tem transformado sonhos em carreiras sólidas. Nasceu com o propósito de preparar pessoas para o novo mercado de trabalho, onde a tecnologia redefine setores e profissões. Ao longo desses anos, mais de 40 mil alunos já vivenciaram a metodologia que une teoria e prática desde o primeiro dia de aula, construindo portfólios, projetos e experiências reais que se tornam diferenciais no currículo. Crianças tendo o primeiro contato didático voltado a tecnologia, adolescentes com grandes ambições e até profissionais em processo de transição de carreira, cada aluno encontrou na Infinity um caminho para se destacar. Aqui, acreditamos que aprender é mais do que absorver conteúdo: é viver o futuro, moldar oportunidades e conquistar seu espaço no mercado.",
  },
  {
    id: 2,
    title: "Sobre a Infinity School",
    desc: "A Infinity é referência em ensino voltado para áreas estratégicas da tecnologia e da criatividade. Com cursos de Programação, Design, Marketing, Film Design e Fotografia, oferecemos uma formação flexível e personalizada através dos nossos supermódulos, permitindo que cada aluno construa sua própria jornada de aprendizado de acordo com seus interesses e objetivos profissionais.Nosso método é 100% focado na prática, com projetos reais e atividades que aproximam o estudante do dia a dia da profissão, preparando-o para atuar com confiança e competência no mercado. Mais do que ensinar, ajudamos a criar carreiras.",
  },
  {
    id: 3,
    title: "Porque escolher a Infinity",
    desc: "Na Infinity School, você não aprende apenas para passar de fase — você aprende para transformar sua vida. Aqui, cada aula é uma oportunidade de criar, inovar e se conectar com o que há de mais atual no mundo da tecnologia e dos negócios criativos.Nossos alunos saem prontos para o mercado, com experiência prática e a mentalidade necessária para crescer em qualquer área. Se você quer conquistar seu espaço, reinventar sua trajetória ou simplesmente ir além, a Infinity é o seu próximo passo.",
  },
];

export function Block({ title, desc }) {
  return (
    <div className="flex flex-col items-start justify-center gap-3">
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">{title}</h1>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">{desc}</p>
    </div>
  );
}

const History = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 py-12">
      <div className="flex flex-col items-start justify-center gap-12 max-w-4xl mx-auto">
        {HistoryData.map((history) => (
          <Block key={history.id} {...history} />
        ))}
      </div>
    </section>
  );
};

export default History;