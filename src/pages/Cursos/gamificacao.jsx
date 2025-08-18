import { IconBrandLinkedin, IconBrandInstagram, IconBrandX } from "@tabler/icons-react";
import BtnCta from "../../components/ui/BtnCta";
import { Link } from "react-router-dom";

const alunos = [
  {
    nome: "Leonardo Nascimento",
    curso: "Programação Full Stack IA",
    pontos: "8,73 pontos",
    redes: ["linkedin", "x", "instagram"],
  },
  {
    nome: "Rossana Licya",
    curso: "Design Full Stack",
    pontos: "8,87 pontos",
    redes: ["linkedin", "x", "instagram"],
  },
  {
    nome: "Alison Mario",
    curso: "Marketing Digital",
    pontos: "8,82 pontos",
    redes: ["linkedin", "x", "instagram"],
  },
  {
    nome: "Fabio Santana",
    curso: "Film Design",
    pontos: "8,36 pontos",
    redes: ["linkedin", "x", "instagram"],
  },
  {
    nome: "Franciele",
    curso: "Fotografia",
    pontos: "xx.xx pontos",
    redes: ["linkedin", "x", "instagram"],
  },
];

export default function Gamificacao() {
  return (
    <section className="w-full flex flex-col items-center justify-center px-4 py-12 text-white">
      <div className="max-w-6xl w-full bg-transparent backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Gamificação</h2>
        <p className="text-center text-gray-300 mb-10">
          Esses são os top 1 alunos de cada curso da Infinity Salvador
        </p>

        <div className="flex flex-col gap-8 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full justify-items-center">
            {alunos.slice(0, 3).map((aluno, i) => (
              <CardAluno key={i} aluno={aluno} />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
            {alunos.slice(3, 5).map((aluno, i) => (
              <CardAluno key={i} aluno={aluno} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 items-center justify-center text-center mt-12">
          <div>
            <h3 className="text-xl font-semibold">Eles se destacaram. Agora é a sua vez.</h3>
            <p className="text-gray-400 mt-2">
              Junte-se aos nossos cursos, mostre seu potencial e entre para o topo do ranking!
            </p>
          </div>
          <Link to="/contato">
            <BtnCta title={"Quero ser um Top Aluno"} py={"3"} px={"8"} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CardAluno({ aluno }) {
  return (
    <div className="flex flex-col items-center bg-gray-800/70 rounded-2xl p-6 shadow-md hover:shadow-xl transition w-full max-w-sm">
      <div className="w-20 h-20 rounded-full bg-gray-600 mb-4 flex items-center justify-center">
        <span className="text-gray-300">IMG</span>
      </div>

      <h3 className="text-lg font-semibold">{aluno.nome}</h3>
      <p className="text-sm text-gray-400">{aluno.curso}</p>
      <p className="mt-2 font-medium text-red-400">{aluno.pontos}</p>

      <div className="flex gap-4 mt-4">
        {aluno.redes.includes("linkedin") && (
          <a
            href="#"
            className="p-2 rounded-full backdrop-blur-md bg-white/0 border border-white/10 hover:text-red-400 transition flex items-center justify-center"
          >
            <IconBrandLinkedin size={20} />
          </a>
        )}
        {aluno.redes.includes("x") && (
          <a
            href="#"
            className="p-2 rounded-full backdrop-blur-md bg-white/0 border border-white/10 hover:text-red-400 transition flex items-center justify-center"
          >
            <IconBrandX size={20} />
          </a>
        )}
        {aluno.redes.includes("instagram") && (
          <a
            href="#"
            className="p-2 rounded-full backdrop-blur-md bg-white/0 border border-white/10 hover:text-red-400 transition flex items-center justify-center"
          >
            <IconBrandInstagram size={20} />
          </a>
        )}
      </div>
    </div>
  );
}