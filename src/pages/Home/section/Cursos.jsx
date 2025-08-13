import CoursesCarousel from "../../../components/ui/CoursesCarousel";

const Curso = () => {
  return (
    <section className="bg-black text-white py-20 select-none">
      <div className="container mx-auto px-6">
        <h2 className="text-6xl font-bold mb-3">Nossos Cursos</h2>
        <p className="text-gray-300 mb-8 max-w-xl">
          Conteúdo prático e atualizado, com foco nas habilidades mais exigidas pelo mercado de tecnologia.
        </p>
        <CoursesCarousel />
      </div>
    </section>
  );
}

export default Curso