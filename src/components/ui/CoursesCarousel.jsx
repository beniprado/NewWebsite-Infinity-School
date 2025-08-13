import { useRef, useState } from "react";

export default function CoursesCarousel() {
  const courses = [
    {
      title: "Programação Full Stack IA",
      category: "PROGRAMAÇÃO",
      duration: "13 MESES",
      img: "src/assets/marketing.png"
    },
    {
      title: "Curso Design Full Stack IA",
      category: "MARKETING",
      duration: "13 MESES",
      img: "src/assets/marketing.png"
    },
    {
      title: "Marketing Digital IA",
      category: "PROGRAMAÇÃO",
      duration: "10 MESES",
      img: "src/assets/marketing.png"
    },
    {
      title: "Programação Avançada IA",
      category: "PROGRAMAÇÃO",
      duration: "12 MESES",
      img: "src/assets/marketing.png"
    },
    {
      title: "Programação Avançada IA",
      category: "PROGRAMAÇÃO",
      duration: "12 MESES",
      img: "src/assets/marketing.png"
    },
    {
      title: "Programação Avançada IA",
      category: "PROGRAMAÇÃO",
      duration: "12 MESES",
      img: "src/assets/marketing.png"
    },
    {
      title: "Programação Avançada IA",
      category: "PROGRAMAÇÃO",
      duration: "12 MESES",
      img: "src/assets/marketing.png"
    },
  ];

  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={carouselRef}
      className="flex gap-8 px-5 overflow-x-auto scrollbar-hide active:cursor-grabbing pb-4"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {courses.map((course, index) => (
        <div
          key={index}
          className="flex-shrink-0 flex flex-col gap-7 w-[380px] bg-white p-5 text-black rounded-3xl overflow-hidden shadow-lg"
        >
          <img
            src={course.img}
            alt={course.title}
            className="w-full object-cover rounded-xl"
            draggable="false"
          />
          <div className="p-6">
            <h3 className="font-bold text-3xl max-w-xs">{course.title}</h3>
            <div className="flex gap-3 mt-4 flex-wrap">
              <span className="bg-neutral-900 text-white px-4 py-1 rounded-full text-sm">
                {course.category}
              </span>
              <span className="bg-neutral-900 text-white px-4 py-1 rounded-full text-sm">
                {course.duration}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}