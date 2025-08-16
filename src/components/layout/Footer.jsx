import React from "react"
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"

const styleContainer = "flex flex-col items-start justify-stat gap-5"
const styleList = "m-0 p-0 flex flex-col gap-4 text-lg"

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center pb-5 pt-10 gap-5 bg-black">
      <div className="flex-col lg:flex-row flex gap-20 justify-center py-10 px-10 border-b-1 border-b-white">
        <div className="flex flex-col gap-5">
          <img src={logo} alt="logo" className="max-w-xs"/>
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-bold">Novidades e Lançamentos</h3>
            <div className="flex gap-2">
              <input type="text" name="Email" id="" placeholder="Email" className="border w-[60%] py-2 px-2 rounded-2 focus-visible:outline-none rounded-md"/>
              <input type="submit" value="Enviar" className="py-2 px-4 rounded-lg cursor-pointer font-medium hover:bg-white hover:text-black border transition duration-120"/>
            </div>
            <p className="max-w-xl text-sm">Ao assinar, você concorda com nossa <Link>Políticas de Privacidade</Link>  e fornece consentimento para receber atualizações de nossa empresa.</p>
          </div>
        </div>
        <div className="flex-col lg:flex-row flex gap-20">
          <div className={styleContainer}>
              <h3 className="text-2xl font-medium">Cursos</h3>
              <ul className={styleList}>
                  <li className="cursor-pointer">Progamação Full Stack IA</li>
                  <li className="cursor-pointer">Marketing Digital IA</li>
                  <li className="cursor-pointer">Design Full Stack IA</li>
                  <li className="cursor-pointer">Film Design</li>
                  <li className="cursor-pointer">Kids</li>
              </ul>
          </div>
          <div className={styleContainer}>
              <h3 className="text-2xl font-medium">Unidades</h3>
              <ul className={styleList}>
                  <li className="cursor-pointer">Salvador</li>
                  <li className="cursor-pointer">Fortaleza</li>
                  <li className="cursor-pointer">Belo Horizonte</li>
                  <li className="cursor-pointer">Recife</li>
                  <li className="cursor-pointer">São Paulo</li>
              </ul>
          </div>
          <div className={styleContainer}>
              <h3 className="text-2xl font-medium">Nossas Redes</h3>
              <ul className={styleList}>
                  <a href="">
                    <li className="flex items-center gap-2"><IconBrandYoutube stroke={2} /> Youtube</li>
                  </a>
                  <a href="">
                    <li className="flex items-center gap-2"><IconBrandInstagram stroke={2} /> Instagram</li>
                  </a>
                  <a href="">
                    <li className="flex items-center gap-2"><IconBrandFacebook stroke={2} /> Facebook</li>
                  </a>
                  <a href="">
                    <li className="flex items-center gap-2"><IconBrandLinkedin stroke={2} /> Linkedin</li>
                  </a>
              </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="flex sm:flex-row flex-row justify-between items-center max-w-7xl m-auto px-3">
          <p>
            © 2025 Infinity. Todos seus direitos reservados. Feito por <a href="https://www.momple.com.br/"   className="font-bold" target="_blank">Momple</a>
          </p> <Link>Políticas de Privacidade</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
