import React from "react";
import TrioCard from "../../../components/ui/TrioCard";
import { IconBook2, IconBriefcase, IconCertificate, IconSchool, IconTrophy, IconUsersGroup } from "@tabler/icons-react";

const containerRow = "flex flex-col lg:flex-row items-center justify-center gap-20"

const Desc = () => {
    return <section className="py-15 flex">
        <div className="flex flex-col gap-25 py-25 px-5 md:px-15 m-auto">
        <h2 className="text-center lg:text-start text-4xl sm:text-5xl md:text-6xl font-bold">Diferenciais</h2>
            <div className={containerRow}>
                <TrioCard icon={<IconCertificate stroke={1} size={80}/>} title={"Certificado Internacional"} description={"Receba um certificado reconhecido globalmente, validando suas habilidades e abrindo portas para oportunidades no Brasil e no exterior."} max={"2xl"}/>
                <TrioCard icon={<IconBriefcase stroke={1} size={80}/>} title={"Oportunidades no Mercado"} description={"Tenha acesso exclusivo a vagas de emprego e projetos freelancer, conectando você diretamente a empresas que buscam talentos em tecnologia."} max={"2xl"}/>
                <TrioCard icon={<IconTrophy stroke={1} size={80}/>} title={"Gamificação"} description={"Aprenda de forma divertida e motivadora com desafios, recompensas e rankings que tornam o aprendizado mais dinâmico e envolvente."} max={"2xl"}/>
            </div>
            <div className={containerRow}>
                <TrioCard icon={<IconUsersGroup  stroke={1} size={80}/>} title={"Aulas Compartilhadas"} description={"Interaja com outros alunos em sessões colaborativas,  trocando experiências e aprendendo em conjunto."} max={"xl"}/>
                <TrioCard icon={<IconSchool stroke={1} size={80}/>} title={"Cursos Moduláveis"} description={"Grade de ensino flexível, possibilitando aprender além do que estiver na grade do curso.."} max={"xl"}/>
                <TrioCard icon={<IconBook2 stroke={1} size={80} />} title={"Super Módulos"} description={"Participe de aulas avançadas de diversos assuntos cobrados no mercado de trabalho."} max={"xl"}/>
            </div>
        </div>
    </section>
}

export default Desc