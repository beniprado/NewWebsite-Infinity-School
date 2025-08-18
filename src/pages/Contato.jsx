import React, { useState } from "react";
import { IconMail, IconBrandWhatsapp, IconPhone } from "@tabler/icons-react";

const BlockInfo = ({ icon, title, desc, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center text-center bg-zinc-800 rounded-xl p-6 border border-zinc-700 shadow-md hover:shadow-lg transition-shadow duration-300 no-underline"
    >
      <div className="text-4xl mb-3 text-[#9D1A1A]">{icon}</div>
      <h3 className="text-lg font-semibold mb-1 text-white">{title}</h3>
      <p className="text-zinc-300">{desc}</p>
    </a>
  );
};

const accentColor = "#9D1A1A";

const inputBaseClass =
  "w-full p-3 bg-zinc-800 text-white border rounded-md focus:outline-none transition";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    mensagem: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const whatsappRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;

    if (!formData.nome.trim()) newErrors.nome = "Nome é obrigatório.";
    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Formato de e-mail inválido.";
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "WhatsApp é obrigatório.";
    } else if (!whatsappRegex.test(formData.whatsapp)) {
      newErrors.whatsapp = "Formato de WhatsApp inválido.";
    }

    if (!formData.mensagem.trim()) newErrors.mensagem = "Mensagem é obrigatória.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert("Formulário enviado com sucesso!");
  };

  return (
    <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 text-white min-h-screen flex items-center">
      <div className="max-w-3xl w-full mx-auto">
        <div className="mb-12">
          <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl">
            Entre em contato
          </h2>
          <p className="text-zinc-400 mt-3 text-sm sm:text-base">
            Ao enviar esse formulário, você será redirecionado para o nosso atendimento no WhatsApp.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-zinc-800 p-6 sm:p-8 rounded-xl shadow-xl border border-zinc-700"
        >
          <div>
            <label
              htmlFor="nome"
              className="block text-sm font-medium mb-1 text-zinc-300"
            >
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite seu nome"
              className={`${inputBaseClass} border-zinc-600 focus:ring-2 focus:ring-[#9D1A1A] ${
                errors.nome ? "border-red-500" : ""
              }`}
              value={formData.nome}
              onChange={handleChange}
            />
            {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome}</p>}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1 text-zinc-300"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="exemplo@dominio.com"
              className={`${inputBaseClass} border-zinc-600 focus:ring-2 focus:ring-[#9D1A1A] ${
                errors.email ? "border-red-500" : ""
              }`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label
              htmlFor="whatsapp"
              className="block text-sm font-medium mb-1 text-zinc-300"
            >
              WhatsApp
            </label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              placeholder="(00) 00000-0000"
              className={`${inputBaseClass} border-zinc-600 focus:ring-2 focus:ring-[#9D1A1A] ${
                errors.whatsapp ? "border-red-500" : ""
              }`}
              value={formData.whatsapp}
              onChange={handleChange}
            />
            {errors.whatsapp && (
              <p className="text-red-500 text-xs mt-1">{errors.whatsapp}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="mensagem"
              className="block text-sm font-medium mb-1 text-zinc-300"
            >
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows="4"
              placeholder="Escreva sua mensagem aqui..."
              className={`${inputBaseClass} border-zinc-600 focus:ring-2 focus:ring-[#9D1A1A] ${
                errors.mensagem ? "border-red-500" : ""
              }`}
              value={formData.mensagem}
              onChange={handleChange}
            ></textarea>
            {errors.mensagem && (
              <p className="text-red-500 text-xs mt-1">{errors.mensagem}</p>
            )}
          </div>

          <button
            type="submit"
            className="text-white font-semibold py-3 px-6 rounded-md transition duration-300 cursor-pointer"
            style={{
              backgroundColor: accentColor,
              boxShadow: "0 4px 10px rgba(255, 94, 58, 0.4)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#9D1A10";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = accentColor;
            }}
          >
            Enviar
          </button>
        </form>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <BlockInfo
            icon={<IconMail size={40} stroke={1.5} />}
            title="Email"
            desc="contato@exemplo.com"
            link="mailto:contato@exemplo.com"
          />
          <BlockInfo
            icon={<IconBrandWhatsapp size={40} stroke={1.5} />}
            title="WhatsApp"
            desc="(71) 9939-2884"
            link="https://wa.me/557199392884"
          />
          <BlockInfo
            icon={<IconPhone size={40} stroke={1.5} />}
            title="Telefone"
            desc="0800 180 0001"
            link="tel:0800 180 0001"
          />
        </div>
      </div>
    </section>
  );
};

export default Contato;