import React from "react";
import TrioCard from "../../../components/ui/TrioCard";
import { IconBriefcase, IconCertificate, IconTrophy } from "@tabler/icons-react";


const Desc1 = () => {
    return <section className="py-10">
        <div className="flex gap-15 py-25 px-15">
            <TrioCard icon={<IconCertificate stroke={1} size={80}/>} title={"Certificado Internacional"} description={"Receba um certificado reconhecido globalmente, validando suas habilidades e abrindo portas para oportunidades no Brasil e no exterior."} max={"2xl"}/>
            <TrioCard icon={<IconBriefcase stroke={1} size={80}/>} title={"Oportunidades no Mercado"} description={"Tenha acesso exclusivo a vagas de emprego e projetos freelancer, conectando você diretamente a empresas que buscam talentos em tecnologia."} max={"2xl"}/>
            <TrioCard icon={<IconTrophy stroke={1} size={80}/>} title={"Gamificação"} description={"Aprenda de forma divertida e motivadora com desafios, recompensas e rankings que tornam o aprendizado mais dinâmico e envolvente."} max={"2xl"}/>
        </div>
    </section>
}

export default Desc1