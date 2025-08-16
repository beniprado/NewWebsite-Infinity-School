import React from "react";
import banner from "../assets/bannerUnidades.png";
import BtnInfo from "../components/ui/BtnInfo";

const unidadesData = [
  {
    nome: "Unidade Salvador",
    descricao: "Sua escola está localizada no Salvador Shopping Business. Possuindo estacionamento 24h e segurança especializada.",
    titulo: "Salvador Business",
    endereco: "Alameda Salvador, 1057 - Caminho das Árvores, Salvador - BA, 41820-790",
    complemento: "Ao lado do Salvador Shopping e do Metrô de Salvador.",
    mapaSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.3691048912005!2d-38.45935602534512!3d-12.976678459910485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161bfce64f7c2d%3A0x8d355fdcd1358496!2sInfinity%20School%20Salvador!5e1!3m2!1spt-BR!2sbr!4v1755295616749!5m2!1spt-BR!2sbr",
    link: "https://maps.app.goo.gl/mk877ochEBxH1x9v9"
  },
  {
    nome: "Unidade Fortaleza",
    descricao: "Sua escola está localizada no Plaza Tower. Possuindo estacionamento privativo e segurança 24h. O ambiente também conta com uma praça de alimentação para almoço, jantar e lanches a qualquer dia da semana.",
    titulo: "Plaza Tower",
    endereco: "Av. Santos Dumont, 2626 - Aldeota, Fortaleza - CE, 60150-162",
    complemento: "Ao lado da Frangolândia e do novo Metrô de Fortaleza.",
    mapaSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d492.0707402390939!2d-38.501745050084196!3d-3.735720928423476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74935a972112f%3A0xbadbb412697ea625!2sInfinity%20School%20Fortaleza!5e1!3m2!1spt-BR!2sbr!4v1755314885541!5m2!1spt-BR!2sbr",
    link: "https://maps.app.goo.gl/xmnCYKcvZQedLhgf6"
  },
  {
    nome: "Unidade Belo Horizonte",
    descricao: "Sua escola está localizada na Av. do Contorno. Possuindo fiscalização interna.",
    titulo: "Infinity School",
    endereco: "Av. do Contorno, 6480 - Savassi, Belo Horizonte - MG, 31210-190",
    complemento: "Ao lado do banco Caixa e perto de um ponto de ônibus.",
    mapaSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71192.6133624665!2d-43.98810664923347!3d-19.920493818304024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699dc3b0a592d%3A0x72478ef5ed116c38!2sInfinity%20School%20Belo%20Horizonte!5e1!3m2!1spt-BR!2sbr!4v1755321839490!5m2!1spt-BR!2sbr",
    link:"https://maps.app.goo.gl/vGHzAJe3jjvsMsso7"
  },
  {
    nome: "Unidade Recife",
    descricao: "Sua escola está localizada no Riomar Trade Center 4. Possuindo estacionamento 24h e segurança especializada.",
    titulo: "Riomar Trade Center",
    endereco: "Av. República do Líbano, 256 - Pina, Recife - PE, 51110-160",
    complemento: "Dentro do Riomar Trade Center, perto da Subestação Shopping Rio Mar.",
    mapaSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d492.0707402390939!2d-38.501745050084196!3d-3.735720928423476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74935a972112f%3A0xbadbb412697ea625!2sInfinity%20School%20Fortaleza!5e1!3m2!1spt-BR!2sbr!4v1755314885541!5m2!1spt-BR!2sbr",
    link: "https://maps.app.goo.gl/GGeFvPhxoME5ayBv9"
  }
];

function ContainerUnidade({ nome, titulo, descricao, endereco, complemento, mapaSrc }) {
  return (
    <div className="flex flex-col gap-12 px-4">
      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-4xl md:text-5xl">{nome}</h2>
        <p className="max-w-xl text-base md:text-lg">{descricao}</p>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex flex-col gap-6 items-start justify-center border-l-2 border-gray-300 pl-6 md:pl-12">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-2xl md:text-4xl">{titulo}</h3>
            <p className="max-w-md text-base">{endereco}</p>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-xl md:text-2xl">Complemento</h4>
            <p className="max-w-md text-base">{complemento}</p>
          </div>
          <a href={mapaSrc} target="_blank">
              <BtnInfo title="Ver Mapa" />
          </a>
        </div>

        <div className="w-full md:w-[600px] h-[300px] md:h-[450px]">
          <iframe
            src={mapaSrc}
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

const Unidades = () => {
  return (
    <section className="w-full overflow-hidden">
      <img
        src={banner}
        alt="Banner da pagina Unidades"
        className="w-full h-auto max-w-full object-cover"
      />
      <div className="flex flex-col items-center justify-center py-20 gap-40">
        {unidadesData.map((unidade, index) => (
          <ContainerUnidade key={index} {...unidade} />
        ))}
      </div>
    </section>
  );
};

export default Unidades;
