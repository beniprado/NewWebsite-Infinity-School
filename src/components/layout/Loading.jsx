import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import blocklogo from '../../assets/blocologo.png'
import logoesc from '../../assets/logoescr.png'

const Loading = ({ onFinish }) => {
  const containerRef = useRef(null)
  const blockLogoRef = useRef(null)
  const escLogoRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      onComplete: () => {
        setTimeout(() => {
          gsap.to(containerRef.current, {
            opacity: 0,
            scale: 0.95,
            filter: 'blur(10px)',
            duration: 1.2,
            ease: 'power2.inOut',
            onComplete: () => {
              if (onFinish) onFinish()
            }
          })
        }, 3000)
      }
    })

    gsap.set([blockLogoRef.current, escLogoRef.current], { opacity: 0 })

    tl.fromTo(
      blockLogoRef.current,
      { scale: 0.7, opacity: 0, filter: 'blur(10px)' },
      { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 1.2 }
    )

    tl.fromTo(
      escLogoRef.current,
      { x: 60, opacity: 0, filter: 'blur(10px)' },
      { x: 0, opacity: 1, filter: 'blur(0px)', duration: 1.2 },
      '-=0.6'
    )

    gsap.to([blockLogoRef.current, escLogoRef.current], {
      scale: 1.04,
      repeat: -1,
      yoyo: true,
      duration: 2.5,
      ease: 'sine.inOut'
    })
  }, [onFinish])

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
      </div>
    </section>
  )
}

export default Loading
