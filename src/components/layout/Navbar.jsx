import React from "react"
import BtnInfo from "../ui/BtnInfo"
import ListDropdown from "../ui/ListDropdown"
import logo from "../../assets/logo.png"

const NavList = "text-lg font-medium cursor-pointer hover:text-[#B91C0A] transition duration-120"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-5 px-3 md:px-15">
      <img src={logo} alt="logo" />
      <ul className="hidden xl:flex items-center gap-10">
        <li className={NavList}>Home</li>
        <li className={NavList}>Sobre</li>
        <ListDropdown
          NavList={NavList}
          title={"Curso"}
          items={[
            "Progamação Full Stack IA",
            "Design Full Stack IA",
            "Marketing Full Stack IA",
            "Film Design"
          ]}
        />
        <li className={NavList}>Unidades</li>
        <li className={NavList}>Contato</li>
      </ul>
      <div className="hidden md:block">
        <BtnInfo title={"Portal do Aluno"} bg={"9D1A1A"} hover={"6A0000"} cl={"white"} />
      </div>
    </nav>
  )
}

export default Navbar
