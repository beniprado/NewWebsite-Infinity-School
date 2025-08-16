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
  },
  {
    nome: "Unidade Fortaleza",
    descricao: "Sua escola está localizada no Plaza Tower. Possuindo estacionamento privativo e segurança 24h. O ambiente também conta com uma praça de alimentação para almoço, jantar e lanches a qualquer dia da semana.",
    titulo: "Plaza Tower",
    endereco: "Av. Santos Dumont, 2626 - Aldeota, Fortaleza - CE, 60150-162",
    complemento: "Ao lado da Frangolândia e do novo Metrô de Fortaleza.",
    mapaSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d492.0707402390939!2d-38.501745050084196!3d-3.735720928423476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74935a972112f%3A0xbadbb412697ea625!2sInfinity%20School%20Fortaleza!5e1!3m2!1spt-BR!2sbr!4v1755314885541!5m2!1spt-BR!2sbr"
  },
  {
    nome: "Unidade Recife",
    descricao: "Sua escola está localizada no Riomar Trade Center 4. Possuindo estacionamento 24h e segurança especializada.",
    titulo: "Riomar Trade Center",
    endereco: "Av. República do Líbano, 256 - Pina, Recife - PE, 51110-160",
    complemento: "Dentro do Riomar Trade Center, perto da Subestação Shopping Rio Mar.",
    mapaSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d492.0707402390939!2d-38.501745050084196!3d-3.735720928423476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74935a972112f%3A0xbadbb412697ea625!2sInfinity%20School%20Fortaleza!5e1!3m2!1spt-BR!2sbr!4v1755314885541!5m2!1spt-BR!2sbr"
  }
];

function ContainerUnidade({ nome, titulo, descricao, endereco, complemento, mapaSrc }) {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-6xl">{nome}</h2>
        <p className="max-w-xl">{descricao}</p>
      </div>

      <div className="flex gap-14 flex-col md:flex-row">
        <div className="flex flex-col gap-8 items-start justify-center border-l-1 pl-12">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-5xl">{titulo}</h3>
            <p className="max-w-md">{endereco}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-3xl">Complemento</h3>
            <p className="max-w-md">{complemento}</p>
          </div>
          <BtnInfo title="Ver Mapa" />
        </div>

        <div>
          <iframe
            src={mapaSrc}
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-4xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

const Unidades = () => {
  return (
    <section>
      <img src={banner} alt="Banner da pagina Unidades" className="w-screen" />
      <div className="flex flex-col items-center justify-center py-25 gap-34">
        {unidadesData.map((unidade, index) => (
          <ContainerUnidade key={index} {...unidade} />
        ))}
      </div>
    </section>
  );
};

export default Unidades;
