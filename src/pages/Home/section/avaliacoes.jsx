import React, { useState, useEffect, useRef } from "react";
import { IconArrowLeft, IconArrowRight, IconStarFilled } from "@tabler/icons-react";
import avatar from "../../../assets/Avatar.png"

function ReviewCard({ name, course, text }) {
  return (
    <div className="flex flex-col gap-4 bg-white text-black w-full p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <IconStarFilled key={i} stroke={2} size={20} className="text-yellow-400" />
        ))}
      </div>
      <p className="text-sm text-gray-700 flex-grow">{text}</p>
      <div className="flex items-center gap-4 mt-auto">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full" />
        <div className="flex flex-col">
          <span className="font-semibold text-gray-900">{name}</span>
          <span className="text-gray-500 text-sm">{course}</span>
        </div>
      </div>
    </div>
  );
}

const Avaliacoes = () => {
  const reviews = [
    { name: "Lucas M.", course: "Programação Full Stack IA", text: "A Infinity mudou minha forma de aprender programação. A metodologia é prática e fácil de acompanhar.", img: "src/assets/Avatar.png" },
    { name: "Mariana S.", course: "Marketing Digital IA", text: "Professores incríveis e aulas muito dinâmicas. Estou evoluindo muito rápido!", img: "src/assets/Avatar.png" },
    { name: "Carlos A.", course: "Design Full Stack IA", text: "Material de altíssima qualidade e suporte sempre disponível para tirar dúvidas.", img: "src/assets/Avatar.png" },
    { name: "Fernanda P.", course: "Film Design", text: "Aprendi técnicas que já aplico no meu trabalho e estou obtendo ótimos resultados.", img: "src/assets/Avatar.png" },
    { name: "João V.", course: "Programação Full Stack IA", text: "Nunca imaginei que aprender programação poderia ser tão divertido e prático.", img: "src/assets/Avatar.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex(prev =>
      prev + 1 >= reviews.length - cardsPerView + 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prev =>
      prev - 1 < 0 ? reviews.length - cardsPerView : prev - 1
    );
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="py-12 px-4 sm:px-8 flex flex-col items-center justify-center gap-10">
      <h2 className="text-center font-bold px-8 text-3xl sm:text-4xl lg:text-5xl">
        O que dizem nossos alunos
      </h2>

      <div
        className="relative w-full max-w-6xl"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 will-change-transform"
            style={{
              transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`,
            }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{ flexBasis: `${100 / cardsPerView}%` }}
              >
                <div className="w-full px-2.5 h-full">
                  <ReviewCard {...review} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="hidden sm:flex absolute -left-12 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition z-10 cursor-pointer"
        >
          <IconArrowLeft stroke={2} size={28} color="black" />
        </button>

        <button
          onClick={nextSlide}
          className="hidden sm:flex absolute -right-12 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition z-10 cursor-pointer"
        >
          <IconArrowRight stroke={2} size={28} color="black" />
        </button>

        <div className="flex justify-center mt-6 gap-2">
          {reviews
            .slice(0, reviews.length - cardsPerView + 1)
            .map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition cursor-pointer ${
                  currentIndex === idx ? "bg-red-600" : "bg-gray-300"
                }`}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Avaliacoes;