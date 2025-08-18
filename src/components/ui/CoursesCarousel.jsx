import { useRef, useState, useEffect } from "react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import {
  getCursoNome,
  getCursoDescricao1,
  getCursoDescricao2,
  getCursoImagemUrl,
} from "../../services/api";

export default function CoursesCarousel() {
  const [courses, setCourses] = useState([]);
  const carouselRef = useRef(null);
  const cardRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    async function loadCourses() {
      try {
        const totalCursos = 6;
        const fetchedCourses = [];

        for (let id = 1; id <= totalCursos; id++) {
          // Pega todos dados do curso simultaneamente para melhor performance
          const [nome, descricao1, descricao2, imagem] = await Promise.all([
            getCursoNome(id),
            getCursoDescricao1(id),
            getCursoDescricao2(id),
            getCursoImagemUrl(id),
          ]);

          console.log(`📌 Curso ${id}:`, { nome, descricao1, descricao2, imagem });

          if (
            nome?.nome_curso &&
            descricao1?.descricao_1 &&
            descricao2?.descricao_2 &&
            imagem?.imagem_curso_url
          ) {
            fetchedCourses.push({
              title: nome.nome_curso,
              category: descricao1.descricao_1,
              duration: descricao2.descricao_2,
              img: imagem.imagem_curso_url,
            });
          }
        }
        setCourses(fetchedCourses);
      } catch (err) {
        console.error("❌ Erro ao carregar cursos:", err);
      }
    }
    loadCourses();
  }, []);

  // Atualiza visibilidade das setas baseado no scroll
  const updateArrowsVisibility = () => {
    const el = carouselRef.current;
    if (!el) return;

    setShowLeftArrow(el.scrollLeft > 10); // margem pequena pra evitar falsa ativação
    setShowRightArrow(el.scrollLeft + el.offsetWidth < el.scrollWidth - 10);
  };

  // Manipulação drag para scroll horizontal
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };
  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => {
    setIsDragging(false);
    updateArrowsVisibility();
  };
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
    updateArrowsVisibility();
  };

  // Scroll ao clicar nas setas
  const handleRightArrowClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: cardWidth + 32, behavior: "smooth" });
      setTimeout(updateArrowsVisibility, 400);
    }
  };
  const handleLeftArrowClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -(cardWidth + 32), behavior: "smooth" });
      setTimeout(updateArrowsVisibility, 400);
    }
  };

  // Atualiza largura do card e visibilidade das setas
  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth);
    }
    updateArrowsVisibility();

    // Atualiza quando a janela for redimensionada
    const handleResize = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth);
      }
      updateArrowsVisibility();
    };

    // Atualiza também ao scroll, útil para scroll via touchpad etc
    const el = carouselRef.current;
    el?.addEventListener("scroll", updateArrowsVisibility);
    window.addEventListener("resize", handleResize);

    return () => {
      el?.removeEventListener("scroll", updateArrowsVisibility);
      window.removeEventListener("resize", handleResize);
    };
  }, [courses]);

  return (
    <div className="relative">
      {showLeftArrow && (
        <button
          onClick={handleLeftArrowClick}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full z-10 shadow-lg cursor-pointer drop-shadow-2xl"
          aria-label="Scroll Left"
        >
          <IconArrowLeft size={24} stroke={2} color="black" />
        </button>
      )}

      {showRightArrow && (
        <button
          onClick={handleRightArrowClick}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full z-10 shadow-lg cursor-pointer drop-shadow-2xl"
          aria-label="Scroll Right"
        >
          <IconArrowRight size={24} stroke={2} color="black" />
        </button>
      )}

      <div
        ref={carouselRef}
        className="flex gap-8 px-5 overflow-x-auto scrollbar-hide active:cursor-grabbing pb-4 scroll-smooth"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {courses.length === 0 ? (
          <p className="text-center w-full">Carregando cursos...</p>
        ) : (
          courses.map((course, index) => (
            <div
              key={index}
              ref={index === 0 ? cardRef : undefined}
              className="flex-shrink-0 flex flex-col gap-3 sm:gap-7 w-full md:w-[calc((100%/3)-1.33rem)] bg-white p-5 text-black rounded-3xl overflow-hidden shadow-lg"
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-full object-cover rounded-xl"
                draggable="false"
              />
              <div className="p-6">
                <h3 className="font-bold text-2xl sm:text-3xl max-w-xs">
                  {course.title}
                </h3>
                <div className="flex gap-3 mt-4 flex-wrap">
                  <span className="bg-neutral-900 text-white px-4 py-1 rounded-full text-sm cursor-pointer">
                    {course.category}
                  </span>
                  <span className="bg-neutral-900 text-white px-4 py-1 rounded-full text-sm cursor-pointer">
                    {course.duration}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}