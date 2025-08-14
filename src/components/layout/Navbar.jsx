import React from "react"
import BtnInfo from "../ui/BtnInfo"
import ListDropdown from "../ui/ListDropdown"
import Logo from "../../assets/infinitylogo.png"

const NavList = "text-lg font-medium cursor-pointer"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-5 px-15">
      <img src={Logo} alt="logo" />
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
      <BtnInfo title={"Portal do Aluno"} bg={"9D1A1A"} hover={"6A0000"} cl={"white"} />
    </nav>
  )
}

export default Navbar
