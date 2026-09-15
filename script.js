/* ============================================================
   SCRIPT.JS — renderização do catálogo + fluxo de orçamento
   ------------------------------------------------------------
   Config rápida: troque o número de WhatsApp abaixo pelo da loja.
   Formato: código do país + DDD + número, só dígitos.
   ============================================================ */
const CONFIG = {
  whatsapp: "5541999999999", // <-- troque pelo WhatsApp da FeedTech
};

const grid = document.getElementById("grid");
const filtersEl = document.getElementById("filters");
const searchInput = document.getElementById("search");
const resultCount = document.getElementById("resultCount");

let activeCategory = "Todos";
let searchTerm = "";

const money = (v) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

function stockInfo(qtd) {
  if (qtd <= 0) return { label: "Sob encomenda", cls: "out" };
  if (qtd <= 4) return { label: `Últimas ${qtd} un.`, cls: "low" };
  return { label: `${qtd} em estoque`, cls: "in" };
}

function buildFilters() {
  const categorias = ["Todos", ...new Set(PRODUCTS.map((p) => p.categoria))];
  filtersEl.innerHTML = "";
  categorias.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "chip" + (cat === activeCategory ? " active" : "");
    btn.textContent = cat;
    btn.addEventListener("click", () => {
      activeCategory = cat;
      buildFilters();
      renderGrid();
    });
    filtersEl.appendChild(btn);
  });
}

function cardTemplate(p) {
  const stock = stockInfo(p.quantidade);
  const swatches = p.cores
    .slice(0, 4)
    .map(
      (c) =>
        `<span class="swatch" style="background:${c.hex}" title="${c.nome}"></span>`
    )
    .join("");
  const extra =
    p.cores.length > 4
      ? `<span class="more">+${p.cores.length - 4}</span>`
      : "";

  return `
    <article class="card" data-id="${p.id}">
      <div class="card-media">
        <span class="cat-pill">${p.categoria}</span>
        <span class="stock-pill ${stock.cls}">${stock.label}</span>
        <span>${p.icone}</span>
      </div>
      <div class="card-body">
        <h3>${p.nome}</h3>
        <p class="desc">${p.descricao}</p>
        <div class="colors-row">${swatches}${extra}</div>
        <div class="card-footer">
          <div class="price">${money(p.valor)}<span>a partir de</span></div>
          <button class="btn-quote" data-quote="${p.id}">
            Pedir orçamento
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderGrid() {
  const term = searchTerm.trim().toLowerCase();
  const filtered = PRODUCTS.filter((p) => {
    const matchesCategory = activeCategory === "Todos" || p.categoria === activeCategory;
    const matchesSearch =
      !term ||
      p.nome.toLowerCase().includes(term) ||
      p.descricao.toLowerCase().includes(term);
    return matchesCategory && matchesSearch;
  });

  resultCount.textContent = `${filtered.length} ${
    filtered.length === 1 ? "produto encontrado" : "produtos encontrados"
  }`;

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty-state">Nenhum produto encontrado com esse filtro.<br>Tente limpar a busca ou escolher outra categoria.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(cardTemplate).join("");

  grid.querySelectorAll("[data-quote]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const product = PRODUCTS.find((p) => p.id === btn.dataset.quote);
      openQuoteModal(product);
    });
  });
}

searchInput.addEventListener("input", (e) => {
  searchTerm = e.target.value;
  renderGrid();
});

/* ---------------- modal de orçamento ---------------- */
const overlay = document.getElementById("quoteOverlay");
const form = document.getElementById("quoteForm");
const productSelect = document.getElementById("qProduct");
const closeBtn = document.getElementById("quoteClose");
const fabBtn = document.getElementById("fab");

function fillProductSelect(preselectId) {
  productSelect.innerHTML =
    `<option value="">Orçamento geral (a combinar)</option>` +
    PRODUCTS.map(
      (p) => `<option value="${p.id}">${p.nome} — ${money(p.valor)}</option>`
    ).join("");
  if (preselectId) productSelect.value = preselectId;
}

function openQuoteModal(product) {
  fillProductSelect(product ? product.id : "");
  overlay.classList.add("open");
  document.getElementById("qName").focus();
}

function closeQuoteModal() {
  overlay.classList.remove("open");
}

fabBtn.addEventListener("click", () => openQuoteModal(null));
closeBtn.addEventListener("click", closeQuoteModal);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeQuoteModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeQuoteModal();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = document.getElementById("qName").value.trim();
  const contato = document.getElementById("qContact").value.trim();
  const qtd = document.getElementById("qQty").value.trim();
  const productId = productSelect.value;
  const obs = document.getElementById("qNotes").value.trim();

  const product = PRODUCTS.find((p) => p.id === productId);

  let msg = `Olá! Vim pelo site da FeedTech e gostaria de um orçamento.\n\n`;
  msg += `Nome: ${nome}\n`;
  msg += `Contato: ${contato}\n`;
  msg += product ? `Produto: ${product.nome}\n` : `Produto: a combinar\n`;
  if (qtd) msg += `Quantidade desejada: ${qtd}\n`;
  if (obs) msg += `Observações: ${obs}\n`;

  const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
  closeQuoteModal();
  form.reset();
});

/* ---------------- init ---------------- */
buildFilters();
renderGrid();
