import React from "react";

export function Block({title, desc}) {
    return <div className="flex flex-col gap-10">
        <h2 className="font-bold text-5xl">{title}</h2>
        <p className="max-w-2xl">{desc}</p>
    </div>
} 

const Privacidade = () => {
    return <section>
        <div className="py-25 m-auto"> 
            <div className="flex flex-col justify-center items-start max-w-5xl gap-15 m-auto">
                <h1 className="font-bold text-7xl">Política de Privacidade</h1>
                <p>Todas as suas informações pessoais recolhidas serão usadas para ajudar a tornar a sua visita no nosso site mais produtiva e o mais agradável possível. E a garantia da confidencialidade dos dados pessoais dos utilizadores do nosso site é muito importante para a Infinity School. Todas as informações pessoais relativas a membros, clientes ou visitantes que usem o site da Infinity School serão tratadas em concordância com a Lei da Proteção de Dados Pessoais de 26 de outubro de 1998 (Lei n.º 67/98). As informações pessoais recolhidas podem incluir o seu nome, e-mail, número de telefone fixo e/ou celular, entre outros. O uso do site da Infinity School pressupõe a aceitação deste Acordo de Privacidade. A equipe da Infinity School reserva-se o direito de alterar este acordo sem aviso prévio. Deste modo, recomendamos que consulte a nossa política de privacidade com regularidade de forma a estar sempre atualizado.</p>
            <Block title={"Os Anúncios"} desc={"Tal como outros websites, coletamos e utilizamos informação contida nos anúncios. A informação contida nos anúncios inclui o seu endereço IP (Internet Protocol), o seu ISP (Internet Service Provider, como o Sapo, Clix ou outro), o browser que utilizou ao visitar o nosso website (como o Internet Explorer ou o Firefox), o tempo da sua visita e que páginas visitou dentro do nosso website."} />
            <h2 className="font-bold text-5xl">Política de cookies Infinity School</h2>
            <Block title={"O que são cookies?"} desc={"Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência. Esta página descreve quais informações eles coletam, como as usamos e por que às vezes precisamos armazenar esses cookies. Também compartilharemos como você pode impedir que esses cookies sejam armazenados, no entanto, isso pode fazer o downgrade ou ‘quebrar’ certos elementos da funcionalidade do site. "} />
            <Block title={"Como usamos os cookies?"} desc={"Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na maioria dos casos, não existem opções padrão do setor para desativar os cookies sem desativar completamente a funcionalidade e os recursos que eles adicionam a este site. É recomendável que você deixe todos os cookies se não tiver certeza se precisa ou não deles, caso sejam usados para fornecer um serviço que você usa."} />
            <Block title={"Como desativar cookies:"} desc={"Você pode impedir a configuração de cookies ajustando as configurações do seu navegador (consulte a Ajuda do navegador para saber como fazer isso). Esteja ciente de que a desativação de cookies afetará a funcionalidade deste e de muitos outros sites que você visita. A desativação de cookies geralmente resultará na desativação de determinadas funcionalidades e recursos deste site. Portanto, é recomendável que você não desative os cookies."} />
            <Block title={"Mudanças na Política de Privacidade"} desc={"Como estamos sempre buscando melhorar nossos serviços, essa Política de Privacidade pode passar por atualizações. Desta forma, recomendamos visitar periodicamente esta página para que você tenha conhecimento sobre as modificações. Caso sejam feitas alterações relevantes que ensejem em um novo consentimento seu, iremos publicar essa atualização e solicitar um novo consentimento para você."} />
            </div>
        </div>
    </section>
}

export default Privacidade