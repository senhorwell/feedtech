/* ============================================================
   PRODUCTS.JS — catálogo de produtos da FeedTech
   ------------------------------------------------------------
   Edite este arquivo para adicionar, remover ou alterar produtos.
   Cada produto segue este formato:

   {
     id: "identificador-unico",     // sem espaços/acentos
     nome: "Nome do produto",
     categoria: "Nome da categoria",
     descricao: "Frase curta sobre o produto",
     valor: 49.90,                  // número, em reais
     quantidade: 12,                // estoque disponível (0 = sob encomenda)
     cores: [
       { nome: "Preto", hex: "#1a1a1a" },
       { nome: "Branco", hex: "#f2f2f2" }
     ],
     icone: "🧩"                    // emoji usado como imagem provisória do card
   }

   Depois de editar, é só salvar e atualizar a página no navegador —
   não precisa mexer em mais nenhum arquivo.
   ============================================================ */

const PRODUCTS = [
  {
    id: "cubo-chaveiro-mario-01",
    nome: "Chaveiro Cubo Mario Bros",
    categoria: "Acessórios",
    descricao: "Chaveiro em formato de cubo interrogação do Mario Bros.",
    valor: 15.0,
    quantidade: 4,
    cores: [{ nome: "Amarelo", hex: "#ffd700" }],
    imagem: "assets/products/mario.png",
  },
  {
    id: "chaveiro-oreo-01",
    nome: "Chaveiro Bolacha Oreo",
    categoria: "Acessórios",
    descricao: "Chaveiro divertido em formato de biscoito/bolacha Oreo.",
    valor: 12.0,
    quantidade: 6,
    cores: [
      { nome: "Preto", hex: "#1a1a1a" },
      { nome: "Branco", hex: "#f2f2f2" },
    ],
    imagem: "assets/products/oreo.png",
  },
  {
    id: "chaveiro-mochila-perdida-01",
    nome: "Chaveiro Mochila Perdida",
    categoria: "Acessórios",
    descricao: "Chaveiro temático Mochila Perdida.",
    valor: 15.0,
    quantidade: 6,
    cores: [
      { nome: "Amarelo", hex: "#ffd700" },
      { nome: "Preto", hex: "#1a1a1a" },
    ],
    imagem: "assets/products/backpack.png",
  },
  {
    id: "chaveiro-suporte-01",
    nome: "Chaveiro Suporte de Celular/Tablet",
    categoria: "Acessórios & Utilidades",
    descricao: "Chaveiro funcional que serve como suporte para celular/tablet",
    valor: 25.0,
    quantidade: 4,
    cores: [{ nome: "Preto", hex: "#1a1a1a" }],
    imagem: "assets/products/suporte-celular.png",
  },
  {
    id: "fidget-jumper-01",
    nome: "Fidget Jumper",
    categoria: "Brinquedos & Antiestresse",
    descricao: "Brinquedo tátil antiestresse fidget jumper.",
    valor: 10.0,
    quantidade: 4,
    cores: [{ nome: "Sortido", hex: "#888888" }],
    imagem: "assets/products/fidget-jumper.png",
  },
  {
    id: "plaquinha-spotify-nfc-01",
    nome: "Plaquinha Spotify NFC",
    categoria: "Decoração & Tecnologia",
    descricao:
      "Plaquinha interativa com chip NFC para redirecionamento ao Spotify.",
    valor: 29.9,
    quantidade: 1,
    cores: [
      { nome: "Preto", hex: "#1a1a1a" },
      { nome: "Branco", hex: "#f2f2f2" },
    ],
    imagem: "assets/products/plaquinha-spotify.png",
  },
  {
    id: "plaquinha-instagram-nfc-01",
    nome: "Plaquinha Instagram NFC",
    categoria: "Decoração & Tecnologia",
    descricao:
      "Plaquinha interativa com tecnologia NFC para perfil do Instagram.",
    valor: 29.9,
    quantidade: 1,
    cores: [{ nome: "Preto", hex: "#1a1a1a" }],
    imagem: "assets/products/plaquinha-insta.png",
  },
  {
    id: "suporte-headset-deadpool-01",
    nome: "Suporte de Headset Black Deadpool",
    categoria: "Organização",
    descricao:
      "Suporte temático do Deadpool em acabamento preto para fones de ouvido.",
    valor: 49.9,
    quantidade: 1,
    cores: [{ nome: "Preto", hex: "#1a1a1a" }],
    imagem: "assets/products/deadpool.png",
  },
  {
    id: "suporte-oculos-gato-cinza-01",
    nome: "Suporte para Óculos Gato Cinza",
    categoria: "Organização & Decoração",
    descricao: "Suporte decorativo em formato de gato para apoiar óculos.",
    valor: 35.0,
    quantidade: 1,
    cores: [{ nome: "Cinza", hex: "#808080" }],
    imagem: "assets/products/cat.png",
  },
  {
    id: "kit-macacos-sabios-cinza-01",
    nome: "Kit 3 Macacos Sábios Cinza",
    categoria: "Decoração",
    descricao:
      "Conjunto decorativo com os 3 macacos sábios (não veja, não ouça, não fale).",
    valor: 45.0,
    quantidade: 1,
    cores: [{ nome: "Cinza", hex: "#808080" }],
    imagem: "assets/products/macacos.png",
  },
  {
    id: "barquinho-bambulab-01",
    nome: "Barquinho BambuLab Branco (Benchy)",
    categoria: "Decoração & Colecionáveis",
    descricao: "Barquinho de teste de impressão 3D (Benchy) na cor branca.",
    valor: 10.0,
    quantidade: 1,
    cores: [{ nome: "Branco", hex: "#f2f2f2" }],
    imagem: "assets/products/barquinho.png",
  },
  {
    id: "expositora-giratoria-chaveiros-01",
    nome: "Expositor Giratório de Chaveiros Amarelo",
    categoria: "Expositores & Organização",
    descricao:
      "Torre expositora giratória para organização e exibição de chaveiros.",
    valor: 59.9,
    quantidade: 1,
    cores: [{ nome: "Amarelo", hex: "#ffd700" }],
    imagem: "assets/products/expositor.png",
  },
];
