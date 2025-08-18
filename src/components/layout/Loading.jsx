import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import blocklogo from '../../assets/blocologo.png'
import logoesc from '../../assets/logoescr.png'

const Loading = ({ onFinish }) => {
  const containerRef = useRef(null)
  const blockLogoRef = useRef(null)
  const escLogoRef = useRef(null)
  const byMompleRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    gsap.set(
      [blockLogoRef.current, escLogoRef.current, byMompleRef.current],
      { opacity: 0 }
    )

    // Animação de entrada dos logos
    tl.fromTo(
      blockLogoRef.current,
      { scale: 0.7, opacity: 0, filter: 'blur(10px)' },
      { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 0.5 }
    )

    tl.fromTo(
      escLogoRef.current,
      { x: 60, opacity: 0, filter: 'blur(10px)' },
      { x: 0, opacity: 1, filter: 'blur(0px)', duration: 0.5 },
      '-=0.3'
    )

    tl.to(byMompleRef.current, { opacity: 1, duration: 0.3 }, '-=0.3')

    // Aguarda brevemente e faz o fade-out de tudo
    tl.to(
      containerRef.current,
      {
        opacity: 0,
        scale: 0.95,
        filter: 'blur(10px)',
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: () => {
          if (onFinish) onFinish()
        }
      },
      '+=0.5'
    )

    return () => {
      tl.kill()
      gsap.killTweensOf([
        blockLogoRef.current,
        escLogoRef.current,
        byMompleRef.current,
        containerRef.current
      ])
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="h-screen w-full bg-[#0b0b0b] text-white fixed top-0 left-0 z-50 flex items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-6 px-6">
        <img
          ref={blockLogoRef}
          src={blocklogo}
          alt="Logo Bloco"
          className="w-[clamp(100px,15vw,180px)] max-w-[180px] h-auto"
        />
        <img
          ref={escLogoRef}
          src={logoesc}
          alt="Logo Escrita"
          className="w-[clamp(160px,35vw,380px)] max-w-[380px] h-auto"
        />
        <span
          ref={byMompleRef}
          className="text-xs opacity-0 transition-opacity"
        >
          By <strong>Momple</strong>
        </span>
      </div>
    </section>
  )
}

export default Loading