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
    id: "suporte-headset-01",
    nome: "Suporte de Headset Isométrico",
    categoria: "Organização",
    descricao: "Base robusta em dupla camada, encaixe antiderrapante.",
    valor: 39.90,
    quantidade: 14,
    cores: [
      { nome: "Azul Royal", hex: "#2f5fe0" },
      { nome: "Preto", hex: "#1a1a1a" },
      { nome: "Branco", hex: "#f2f2f2" }
    ],
    icone: "🎧"
  },
  {
    id: "organizador-cabos-modular",
    nome: "Organizador de Cabos Modular",
    categoria: "Organização",
    descricao: "Peças encaixáveis para montar do seu jeito na mesa.",
    valor: 24.50,
    quantidade: 22,
    cores: [
      { nome: "Verde-água", hex: "#2ecfb0" },
      { nome: "Cinza Grafite", hex: "#3b3f45" }
    ],
    icone: "🔌"
  },
  {
    id: "vaso-geometrico-p",
    nome: "Vaso Geométrico P",
    categoria: "Decoração",
    descricao: "Faces facetadas, acompanha furo de drenagem.",
    valor: 32.00,
    quantidade: 8,
    cores: [
      { nome: "Terracota", hex: "#c96a4a" },
      { nome: "Branco", hex: "#f2f2f2" },
      { nome: "Verde-água", hex: "#2ecfb0" }
    ],
    icone: "🪴"
  },
  {
    id: "luminaria-lowpoly",
    nome: "Luminária Low Poly",
    categoria: "Decoração",
    descricao: "Difusor facetado, encaixa em soquete E27 padrão.",
    valor: 78.00,
    quantidade: 5,
    cores: [
      { nome: "Branco", hex: "#f2f2f2" },
      { nome: "Preto", hex: "#1a1a1a" }
    ],
    icone: "💡"
  },
  {
    id: "miniatura-dragao",
    nome: "Miniatura Dragão Articulado",
    categoria: "Colecionáveis",
    descricao: "Corpo com articulações móveis, imprime sem suportes.",
    valor: 54.90,
    quantidade: 0,
    cores: [
      { nome: "Azul Royal", hex: "#2f5fe0" },
      { nome: "Vermelho", hex: "#c23b3b" },
      { nome: "Preto", hex: "#1a1a1a" }
    ],
    icone: "🐉"
  },
  {
    id: "porta-controle-duplo",
    nome: "Porta-Controle Duplo",
    categoria: "Organização",
    descricao: "Encaixe para dois controles, base emborrachada.",
    valor: 44.00,
    quantidade: 3,
    cores: [
      { nome: "Preto", hex: "#1a1a1a" },
      { nome: "Azul Royal", hex: "#2f5fe0" }
    ],
    icone: "🎮"
  },
  {
    id: "chaveiro-cubo-iso",
    nome: "Chaveiro Cubo Isométrico",
    categoria: "Personalizados",
    descricao: "Réplica em mini escala do símbolo da marca. Aceita nome gravado.",
    valor: 18.00,
    quantidade: 40,
    cores: [
      { nome: "Azul Royal", hex: "#2f5fe0" },
      { nome: "Verde-água", hex: "#2ecfb0" },
      { nome: "Branco", hex: "#f2f2f2" }
    ],
    icone: "🔑"
  },
  {
    id: "suporte-celular-articulado",
    nome: "Suporte de Celular Articulado",
    categoria: "Organização",
    descricao: "Dobrável, cabe na carteira, ângulo ajustável.",
    valor: 22.00,
    quantidade: 17,
    cores: [
      { nome: "Preto", hex: "#1a1a1a" },
      { nome: "Verde-água", hex: "#2ecfb0" }
    ],
    icone: "📱"
  },
  {
    id: "topo-bolo-personalizado",
    nome: "Topo de Bolo Personalizado",
    categoria: "Personalizados",
    descricao: "Nome ou frase sob medida, acabamento liso.",
    valor: 35.00,
    quantidade: 9,
    cores: [
      { nome: "Dourado", hex: "#cda434" },
      { nome: "Branco", hex: "#f2f2f2" },
      { nome: "Preto", hex: "#1a1a1a" }
    ],
    icone: "🎂"
  },
  {
    id: "engrenagem-decorativa-set",
    nome: "Set Engrenagens Decorativas",
    categoria: "Decoração",
    descricao: "Conjunto de 3 peças, encaixe funcional entre si.",
    valor: 29.90,
    quantidade: 11,
    cores: [
      { nome: "Cinza Grafite", hex: "#3b3f45" },
      { nome: "Azul Royal", hex: "#2f5fe0" }
    ],
    icone: "⚙️"
  },
  {
    id: "miniatura-nave-exploradora",
    nome: "Miniatura Nave Exploradora",
    categoria: "Colecionáveis",
    descricao: "Detalhes em duas cores, base de exposição inclusa.",
    valor: 62.00,
    quantidade: 2,
    cores: [
      { nome: "Verde-água", hex: "#2ecfb0" },
      { nome: "Cinza Grafite", hex: "#3b3f45" }
    ],
    icone: "🚀"
  },
  {
    id: "placa-nome-mesa",
    nome: "Placa de Nome para Mesa",
    categoria: "Personalizados",
    descricao: "Texto em relevo, base autoportante.",
    valor: 26.00,
    quantidade: 15,
    cores: [
      { nome: "Preto", hex: "#1a1a1a" },
      { nome: "Branco", hex: "#f2f2f2" },
      { nome: "Azul Royal", hex: "#2f5fe0" }
    ],
    icone: "🏷️"
  }
];
