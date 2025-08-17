import { useRef, useState, useEffect } from "react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import marketing from "../../assets/marketing.png";
import progamacao from "../../assets/progamacao.png";
import film from "../../assets/film.png";
import fotografiaedesign from "../../assets/fotografiaedesign.png";
import design from "../../assets/design.png";
import kids from "../../assets/kids.png";

export default function CoursesCarousel() {
  const courses = [
    {
      title: "Programação Full Stack IA",
      category: "PROGRAMAÇÃO",
      duration: "13 MESES",
      img: progamacao,
    },
    {
      title: "Curso Design Full Stack IA",
      category: "Design",
      duration: "13 MESES",
      img: design,
    },
    {
      title: "Marketing Digital IA",
      category: "MARKETING",
      duration: "10 MESES",
      img: marketing,
    },
    {
      title: "Fotografia Design",
      category: "FOTOGRAFIA",
      duration: "9 MESES",
      img: fotografiaedesign,
    },
    {
      title: "Film Design",
      category: "FILM",
      duration: "13 MESES",
      img: film,
    },
    {
      title: "Kids",
      category: "DESIGN",
      duration: "12 MESES",
      img: kids,
    },
  ];

  const carouselRef = useRef(null);
  const cardRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [cardWidth, setCardWidth] = useState(0);

  const updateArrowsVisibility = () => {
    const el = carouselRef.current;
    if (!el) return;
    setShowLeftArrow(el.scrollLeft > 0);
    setShowRightArrow(Math.ceil(el.scrollLeft + el.offsetWidth) < el.scrollWidth);
  };

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

  const handleRightArrowClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: cardWidth + 32, behavior: "smooth" });
      setTimeout(updateArrowsVisibility, 300);
    }
  };

  const handleLeftArrowClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -(cardWidth + 32), behavior: "smooth" });
      setTimeout(updateArrowsVisibility, 300);
    }
  };

  useEffect(() => {
    updateArrowsVisibility();
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth);
      }
      updateArrowsVisibility();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        {courses.map((course, index) => (
          <div
            key={index}
            ref={index === 0 ? cardRef : null}
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
        ))}
      </div>
    </div>
  );
}