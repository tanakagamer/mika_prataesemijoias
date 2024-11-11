// src/app/page.tsx

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const CatalogoOnline = () => {
  const produtos = [
    {
      id: 1,
      nome: "Anel",
      preco: "R$ ",
      imagem: "/images/aneis_1.jpg",
    },
    {
      id: 2,
      nome: "Anel",
      preco: "R$ ",
      imagem: "/images/aneis_2.jpg",
    },
    {
      id: 3,
      nome: "Anel",
      preco: "R$ ",
      imagem: "/images/aneis_3.jpg",
    },
    {
      id: 4,
      nome: "Anel",
      preco: "R$ ",
      imagem: "/images/aneis_4.jpg",
    },
    {
      id: 5,
      nome: "Anel Prata",
      preco: "R$ ",
      imagem: "/images/anel_prata.jpg",
    },
    {
      id: 6,
      nome: "Brinco Cobra",
      preco: "R$ ",
      imagem: "/images/brinco_cobra.jpg",
    },
    {
      id: 7,
      nome: "Brinco Cruz",
      preco: "R$ ",
      imagem: "/images/brinco_cruz.jpg",
    },
    {
      id: 8,
      nome: "Brinco Esfera",
      preco: "R$ ",
      imagem: "/images/brinco_esfera.jpg",
    },
    {
      id: 9,
      nome: "Brinco Estrela",
      preco: "R$ ",
      imagem: "/images/brinco_estrela.jpg",
    },
    {
      id: 10,
      nome: "Brinco Estrela",
      preco: "",
      imagem: "/images/brinco_estrela_2.jpg",
    },
    {
      id: 11,
      nome: "Brinco Flor",
      preco: "",
      imagem: "/images/brinco_flor.jpg",
    },
    {
      id: 12,
      nome: "Brinco Ouro",
      preco: "",
      imagem: "/images/brinco_ouro.jpg",
    },
    {
      id: 13,
      nome: "Brinco Ponta",
      preco: "",
      imagem: "/images/brinco_ponta.jpg",
    },
    {
      id: 14,
      nome: "Colar e Brinco",
      preco: "",
      imagem: "/images/colar_brinco.jpg",
    },
    {
      id: 15,
      nome: "Colar Corrente",
      preco: "R$ ",
      imagem: "/images/colar_corrente.jpg",
    },
    {
      id: 16,
      nome: "Colar Esfera",
      preco: "R$ ",
      imagem: "/images/colar_esfera.jpg",
    },
    {
        id: 17,
        nome:"Colar Estrela",
        preco:"R$ ",
        imagem:"/images/colar_estrela.jpg",
    },
     {
        id: 18,
        nome:"Colar Ouro",
        preco:"R$ ",
        imagem:"/images/colar_ouro.jpg",
    },
     {
        id: 19,
        nome:"Colar com pedra branca",
        preco:"R$ ",
        imagem:"/images/colar_pedra_branca.jpg",
    },
     {
        id: 20,
        nome:"Colar com pedra",
        preco:"R$ ",
        imagem:"/images/colar_pedra.jpg",
    },
     {
        id: 21,
        nome:"Colar de Prata",
        preco:"R$ ",
        imagem:"/images/colar_prata_2.jpg",
    },
     {
        id: 22,
        nome:"Colar de Prata",
        preco:"R$ ",
        imagem:"./images/colar_prata_3.jpg",
    },
     {
        id: 23,
        nome:"Colar de Prata",
        preco:"R$ ",
        imagem:"./images/colar_prata.jpg",
    }
    // Adicione mais produtos conforme necessário
  ];

  return (
    <div className="bg-white min-h-screen">
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="images/favicon-32x32.png"
      />
      <div className="container mx-auto px-6 py-10">
        <img
          src="/images/mika_prataesemijoias_logo.jpeg"
          alt="Logo Mika Prata e Semijoias"
          className="w-48 h-48 border-4 border-gray-800 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:border-indigo-500"
        />

        <h1 className="text-4xl font-bold tracking-wide text-center text-gray-800 mb-12">
          Catálogo - Prata e Semijoias
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {produtos.map((produto) => (
            <div key={produto.id} className="group relative">
              <div className="border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform group-hover:scale-105">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-full h-80 object-cover group-hover:opacity-90 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-gray-900 text-center">
                    {produto.nome}
                  </h2>
                  <p className="text-md font-semibold text-gray-900 text-center mt-2">
                    {produto.preco}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botão do WhatsApp */}
      <a
        href="https://wa.me/+5516992000332" // Substitua pelo número de telefone desejado
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
};

export default CatalogoOnline;
