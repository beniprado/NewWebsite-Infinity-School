import React from "react";
import TrioCard from "../../../components/ui/TrioCard";
import { IconBook2, IconSchool, IconUsersGroup } from "@tabler/icons-react";


const Desc2 = () => {
    return <section className="py-10">
        <div className="flex gap-15 py-25 px-15">
            <TrioCard icon={<IconUsersGroup  stroke={1} size={80}/>} title={"Aulas Compartilhadas"} description={"Interaja com outros alunos em sessões colaborativas,  trocando experiências e aprendendo em conjunto."} max={"xl"}/>
            <TrioCard icon={<IconSchool stroke={1} size={80}/>} title={"Cursos Moduláveis"} description={"Grade de ensino flexível, possibilitando aprender além do que estiver na grade do curso.."} max={"xl"}/>
            <TrioCard icon={<IconBook2 stroke={1} size={80} />} title={"Super Módulos"} description={"Participe de aulas avançadas de diversos assuntos cobrados no mercado de trabalho."} max={"xl"}/>
        </div>
    </section>
}

export default Desc2