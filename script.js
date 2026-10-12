const imageUrl = (photo, width = 1400) => /\.(?:avif|jpe?g|png|webp)$/i.test(photo) ? photo : `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=${width}&q=85`;
const profiles = {
  burger: {
    brand: ["BANDO", "BURGER"], mark: "B", title: "Bando Burger — Fogo alto. Mordida perfeita.",
    colors: ["#f2eee4", "#171713", "#ed492f", "#bf3524", "#d9e65b"],
    darkColors: ["#121212", "#f5f1e8", "#ef5d43", "#ff927c", "#d9e65b"],
    announcement: "SITE DEMONSTRATIVO · MODELOS POR SEGMENTO", announcementNote: "ESCOLHA UM NICHO E VEJA A EXPERIÊNCIA",
    eyebrow: "HAMBÚRGUER DE VERDADE", hero: ["BANDO", "BURGER."], description: "Fogo alto. Mordida perfeita.<br />O resto é conversa.", heroCta: "Ver o cardápio", footnote: "SMASHED ON THE SPOT", stamp: ["100%", "NA CHAPA"], caption: "O CLÁSSICO DA CASA · DESDE SEMPRE", heroImage: "assets/burger-hero.jpg", heroAlt: "Hambúrguer artesanal com queijo derretido e pão tostado",
    ticker: ["CARNE FRESCA", "PÃO ARTESANAL", "QUEIJO DE VERDADE", "FEITO NA HORA"],
    catalog: { eyebrow: "A FOME ESCOLHE, VOCÊ DECIDE", title: "O CARDÁPIO", intro: "Sem firula. Só combinação boa,<br />ingrediente fresco e chapa quente.", note: "TUDO FEITO NA HORA", disclaimer: "Cardápio e valores ilustrativos para esta demonstração.", action: "Adicionar", filters: [["burgers", "Burgers"], ["acompanhamentos", "Acompanhamentos"], ["bebidas", "Bebidas"]], items: [
      ["bando", "O BANDO", 29, "Carne 160 g, cheddar inglês, picles da casa e molho Bando.", "burgers", "photo-1550547660-d9450f859349", "Hambúrguer clássico com queijo"],
      ["duplo", "DUPLO PROBLEMA", 36, "Duas carnes smash, queijo americano, cebola na chapa e molho especial.", "burgers", "photo-1571091718767-18b5b1457add", "Hambúrguer duplo com queijo"],
      ["quente", "QUENTE NA MEDIDA", 34, "Carne 160 g, pepper jack, jalapeño, alface e maionese de limão.", "burgers", "photo-1553979459-d2229ba7433a", "Hambúrguer artesanal apimentado"],
      ["cebola", "CEBOLA & CIA.", 33, "Carne 160 g, queijo suíço, cebola caramelizada e mostarda de mel.", "burgers", "photo-1568901346375-23c9450c58cd", "Hambúrguer com cebola caramelizada"],
      ["fritas", "FRITAS SEM PRESSA", 16, "Batata crocante, páprica defumada e maionese da casa.", "acompanhamentos", "photo-1573080496219-bb080dd4f877", "Porção de batatas fritas"],
      ["shake", "SHAKE DE BAUNILHA", 18, "Sorvete batido na hora, baunilha de verdade e chantilly.", "bebidas", "photo-1572490122747-3968b75cc699", "Milk-shake de baunilha"],
    ] },
    story: { eyebrow: "POUCA CONVERSA. MUITA CHAPA.", title: "BOM BURGER<br />NÃO PRECISA<br /><span>DE ATALHO.</span>", copy: "A carne chega fresca. O pão sai macio. A chapa faz o resto. A gente acredita que o melhor ingrediente ainda é capricho em cada pedido.", link: "Vem conhecer a casa", photo: "photo-1553979459-d2229ba7433a", alt: "Hambúrguer artesanal servido com batatas fritas" },
    visit: { eyebrow: "A GENTE GUARDOU UM LUGAR", title: "BORA<br />PRA MESA<span class=\"red-period\">?</span>", addressLabel: "ENCONTRE A GENTE", address: "Rua das Palmeiras, 128<br />Centro · Salvador, BA", map: "Salvador BA", hoursLabel: "HORÁRIO DA CHAPA", hours: "Ter a qui · 18h às 23h<br />Sex a dom · 18h à 00h", hoursNote: "Segunda fechamos pra descansar.", orderLabel: "BATEU A FOME?", order: "Monte seu pedido<br />sem sair do sofá.", cta: "Fazer meu pedido", disclaimer: "Endereço e horários ilustrativos · personalizáveis para cada negócio", footer: "Feito na chapa.<br />Lembrado por muito tempo." },
    cart: { eyebrow: "PEDIDO NA CHAPA", title: "SUA SACOLA", empty: "Escolher meu burger", footer: "Entrega e pagamento combinados no WhatsApp.", checkout: "Continuar pelo WhatsApp" },
  },
  cafe: {
    brand: ["CASA", "GRÃO"], mark: "G", title: "Casa Grão — Café bom, tempo seu.",
    colors: ["#f3eee4", "#193b32", "#287c70", "#195d53", "#e5c45e"],
    darkColors: ["#111714", "#edf5ef", "#48a98f", "#78d0b8", "#e5c45e"],
    announcement: "CAFÉ DE ORIGEM · TORRA DA CASA", announcementNote: "UM BOM DIA COMEÇA AQUI",
    eyebrow: "PAUSA COM GOSTO DE CASA", hero: ["CASA", "GRÃO."], description: "Café passado com calma.<br />Seu canto no meio do dia.", heroCta: "Explorar o menu", footnote: "TORRADO EM PEQUENOS LOTES", stamp: ["100%", "ARÁBICA"], caption: "CAFÉ DA CASA · RECÉM-PASSADO", heroImage: "photo-1445116572660-236099ec97a0", heroAlt: "Cafeteria aconchegante com café preparado na hora",
    ticker: ["CAFÉ DE ORIGEM", "PÃO DE FERMENTAÇÃO NATURAL", "TORRA FRESCA", "PAUSA SEM PRESSA"],
    catalog: { eyebrow: "DO PRIMEIRO GOLE À ÚLTIMA MIGALHA", title: "MENU DA CASA", intro: "Grãos especiais, receita artesanal<br />e um lugar pra ficar mais um pouco.", note: "PREPARADO NA HORA", disclaimer: "Menu e valores ilustrativos para esta demonstração.", action: "Adicionar", filters: [["cafes", "Cafés"], ["doces", "Doces"], ["brunch", "Brunch"]], items: [
      ["espresso", "ESPRESSO DUPLO", 12, "Blend da casa, notas de chocolate e caramelo. 60 ml.", "cafes", "photo-1510707577719-ae7c14805e3a", "Xícara de café espresso"],
      ["coado", "COADO DO DIA", 14, "Microlote brasileiro filtrado na hora. Consulte a origem.", "cafes", "photo-1495474472287-4d71bcdd2085", "Café coado servido em xícara"],
      ["latte", "LATTE DE AVEIA", 18, "Espresso duplo com bebida de aveia vaporizada.", "cafes", "photo-1461023058943-07fcbe16d735", "Café latte cremoso"],
      ["bolo", "BOLO DE LIMÃO", 16, "Massa amanteigada, limão siciliano e cobertura leve.", "doces", "photo-1578985545062-69928b1d9587", "Fatia de bolo de limão"],
      ["cookie", "COOKIE DA CASA", 12, "Chocolate meio amargo, flor de sal e bordas crocantes.", "doces", "photo-1499636136210-6f4ee915583e", "Cookie artesanal com chocolate"],
      ["toast", "TOAST DE ABACATE", 29, "Pão de fermentação natural, avocado e ovo caipira.", "brunch", "photo-1525351484163-7529414344d8", "Toast de avocado para brunch"],
    ] },
    story: { eyebrow: "O TEMPO AQUI PASSA DIFERENTE.", title: "BONS GRÃOS<br />PEDEM<br /><span>BOAS PAUSAS.</span>", copy: "A gente escolhe pequenos produtores, respeita o tempo da torra e prepara cada xícara com cuidado. O resto é seu: conversar, ler ou simplesmente respirar.", link: "Encontre sua mesa", photo: "photo-1493857671505-72967e2e2760", alt: "Interior acolhedor de uma cafeteria" },
    visit: { eyebrow: "SUA MESA JÁ ESTÁ AQUI", title: "PASSA<br />PRA UM CAFÉ<span class=\"red-period\">?</span>", addressLabel: "NOSSO ENDEREÇO", address: "Rua do Sol, 42<br />Rio Vermelho · Salvador, BA", map: "Rio Vermelho Salvador BA", hoursLabel: "HORÁRIO DA CASA", hours: "Seg a sex · 8h às 19h<br />Sáb e dom · 9h às 17h", hoursNote: "Café fresquinho o dia todo.", orderLabel: "PEDIR PRA LEVAR?", order: "Escolha seu favorito<br />e a gente prepara.", cta: "Ver o menu", disclaimer: "Endereço e horários ilustrativos · personalizáveis para cada negócio", footer: "Passado com cuidado.<br />Servido com carinho." },
    cart: { eyebrow: "UM BOM PEDIDO", title: "SUA SACOLA", empty: "Escolher algo gostoso", footer: "Retirada e pagamento combinados pelo WhatsApp.", checkout: "Continuar pelo WhatsApp" },
  },
  barber: {
    brand: ["RUA", "BARBER"], mark: "R", title: "Rua Barber — Seu estilo, no seu tempo.",
    colors: ["#edf0ee", "#202b31", "#cd6844", "#a74c2c", "#c1d4cd"],
    darkColors: ["#11181c", "#f1f4f3", "#e17950", "#ff9b73", "#c1d4cd"],
    announcement: "BARBEARIA DE BAIRRO · ATITUDE DE SOBRA", announcementNote: "AGENDE SEU PRÓXIMO CORTE",
    eyebrow: "CORTE LIMPO. IDEIA LIVRE.", hero: ["RUA", "BARBER."], description: "Seu estilo, no seu tempo.<br />A cadeira é sua.", heroCta: "Ver serviços", footnote: "DESDE A PRIMEIRA NAVALHA", stamp: ["100%", "ESTILO"], caption: "CORTE ASSINADO · FEITO NA RUA", heroImage: "photo-1503951914875-452162b0f3f1", heroAlt: "Barbeiro trabalhando em um corte masculino",
    ticker: ["CORTE COM IDENTIDADE", "BARBA NA TOALHA QUENTE", "PRODUTO PROFISSIONAL", "AGENDA ABERTA"],
    catalog: { eyebrow: "SEU VISUAL COMEÇA NA CADEIRA", title: "SERVIÇOS", intro: "Da manutenção ao visual novo,<br />conversa boa e mão firme.", note: "ATENDIMENTO COM HORA MARCADA", disclaimer: "Serviços e valores ilustrativos para esta demonstração.", action: "Selecionar", filters: [["cortes", "Cortes"], ["barba", "Barba"], ["combos", "Combos"]], items: [
      ["degrade", "CORTE DEGRADÊ", 55, "Consultoria rápida e acabamento na navalha.", "cortes", "photo-1621605815971-fbc98d665033", "Corte degradê masculino"],
      ["classico", "CORTE CLÁSSICO", 48, "Tesoura ou máquina, no estilo que combina com você.", "cortes", "photo-1503951914875-452162b0f3f1", "Barbeiro fazendo corte clássico"],
      ["social", "CORTE SOCIAL", 52, "Acabamento preciso pra manter tudo no lugar.", "cortes", "photo-1599351431202-1e0f0137899a", "Corte masculino social"],
      ["barba", "BARBA COMPLETA", 42, "Toalha quente, alinhamento e balm finalizador.", "barba", "photo-1621605815971-fbc98d665033", "Barba aparada com acabamento"],
      ["pezinho", "BARBA EXPRESS", 28, "Contorno e alinhamento pra renovar o visual.", "barba", "photo-1503951914875-452162b0f3f1", "Detalhe de acabamento de barba"],
      ["combo", "CORTE + BARBA", 82, "Experiência completa com horário reservado.", "combos", "photo-1599351431202-1e0f0137899a", "Corte e barba em barbearia"],
    ] },
    story: { eyebrow: "TRADIÇÃO COM A SUA CARA.", title: "RESPEITO<br />À NAVALHA.<br /><span>LIBERDADE AO ESTILO.</span>", copy: "A barbearia é ponto de encontro, troca de ideia e cuidado pessoal. Nosso time combina técnica de sempre com um olhar atual para o seu estilo.", link: "Conheça a barbearia", photo: "photo-1503951914875-452162b0f3f1", alt: "Cadeira e ferramentas de uma barbearia contemporânea" },
    visit: { eyebrow: "CHEGA MAIS, A CADEIRA É SUA", title: "BORA<br />MARCAR UM CORTE<span class=\"red-period\">?</span>", addressLabel: "ONDE A RUA ENCONTRA VOCÊ", address: "Rua das Palmeiras, 128<br />Centro · Salvador, BA", map: "Centro Salvador BA", hoursLabel: "HORÁRIO DA BARBEARIA", hours: "Ter a sex · 9h às 20h<br />Sáb · 9h às 17h", hoursNote: "Atendimento com hora marcada.", orderLabel: "VISUAL EM DIA?", order: "Escolha o serviço<br />e reserve seu horário.", cta: "Ver serviços", disclaimer: "Endereço e horários ilustrativos · personalizáveis para cada negócio", footer: "Na régua, na conversa.<br />Do seu jeito." },
    cart: { eyebrow: "RESERVA DE SERVIÇO", title: "SEU AGENDAMENTO", empty: "Escolher um serviço", footer: "Confirme seu horário pelo WhatsApp.", checkout: "Pedir horário no WhatsApp" },
  },
  fashion: {
    brand: ["LINHA", "LIVRE"], mark: "L", title: "Linha Livre — Vista o que é seu.",
    colors: ["#f3eee8", "#24232a", "#a84d67", "#81364d", "#dfc49c"],
    darkColors: ["#141114", "#f4edf1", "#cb6682", "#eb8ea5", "#dfc49c"],
    announcement: "FEITO PRA DURAR · ESCOLHAS COM INTENÇÃO", announcementNote: "NOVA COLEÇÃO DISPONÍVEL",
    eyebrow: "ROUPA PRA SER VOCÊ", hero: ["LINHA", "LIVRE."], description: "Vista o que é seu.<br />O resto deixa passar.", heroCta: "Ver coleção", footnote: "PEÇAS FEITAS PRA ACOMPANHAR", stamp: ["NOVA", "COLEÇÃO"], caption: "LINHA ESSENCIAL · EDIÇÃO 2026", heroImage: "photo-1483985988355-763728e1935b", heroAlt: "Pessoas escolhendo peças em uma loja de moda",
    ticker: ["DESIGN AUTORAL", "MATERIAIS CONSCIENTES", "PEQUENAS PRODUÇÕES", "SEU ESTILO, SEM REGRA"],
    catalog: { eyebrow: "FEITAS PRA ENTRAR NA SUA ROTINA", title: "PEÇAS EM DESTAQUE", intro: "Design versátil e produção cuidadosa<br />pra vestir muitas histórias.", note: "COLEÇÃO ATUAL", disclaimer: "Peças e valores ilustrativos para esta demonstração.", action: "Adicionar", filters: [["vestuario", "Vestuário"], ["acessorios", "Acessórios"], ["novidades", "Novidades"]], items: [
      ["camisa", "CAMISA LINHO", 189, "Linho leve, caimento solto. Feita para usar o ano todo.", "vestuario", "photo-1598033129183-c4f50c736f10", "Camisa de linho em cabide"],
      ["vestido", "VESTIDO SOLAR", 249, "Algodão texturizado e corte que acompanha o movimento.", "vestuario", "photo-1496747611176-843222e1e57c", "Vestido casual da coleção"],
      ["jaqueta", "JAQUETA ESSENCIAL", 329, "Sarja encorpada, bolsos funcionais e acabamento reforçado.", "vestuario", "photo-1543076447-215ad9ba6923", "Jaqueta de sarja contemporânea"],
      ["bolsa", "BOLSA DE LONA", 119, "Lona resistente, alça regulável e espaço para o dia a dia.", "acessorios", "photo-1548036328-c9fa89d128fa", "Bolsa de lona de design simples"],
      ["bone", "BONÉ LINHA", 89, "Sarja de algodão com ajuste traseiro e bordado discreto.", "acessorios", "photo-1588850561407-ed78c282e89b", "Boné de sarja"],
      ["camiseta", "CAMISETA ALGODÃO", 99, "Malha macia, gola firme e modelagem sem estação.", "novidades", "photo-1521572163474-6864f9cf17ab", "Camiseta de algodão"],
    ] },
    story: { eyebrow: "MENOS TENDÊNCIA. MAIS IDENTIDADE.", title: "VISTA<br />O QUE FAZ<br /><span>SENTIDO PRA VOCÊ.</span>", copy: "A gente cria peças versáteis, escolhe materiais com cuidado e produz em pequenas quantidades. Uma marca independente feita para acompanhar você por muito tempo.", link: "Nossa forma de criar", photo: "photo-1445205170230-053b83016050", alt: "Araras com roupas de uma coleção contemporânea" },
    visit: { eyebrow: "PROVE, SINTA, ESCOLHA", title: "SEU ESTILO<br />TEM ENDEREÇO<span class=\"red-period\">.</span>", addressLabel: "VISITE O ATELIÊ", address: "Rua das Palmeiras, 128<br />Centro · Salvador, BA", map: "Centro Salvador BA", hoursLabel: "HORÁRIO DA LOJA", hours: "Seg a sex · 10h às 19h<br />Sáb · 10h às 16h", hoursNote: "Também atendemos online.", orderLabel: "ACHOU SUA PEÇA?", order: "Fale com a equipe<br />e encontre seu tamanho.", cta: "Ver coleção", disclaimer: "Endereço e horários ilustrativos · personalizáveis para cada negócio", footer: "Feito com intenção.<br />Vestido do seu jeito." },
    cart: { eyebrow: "SUAS ESCOLHAS", title: "SUA SACOLA", empty: "Explorar a coleção", footer: "Tamanhos, entrega e pagamento pelo WhatsApp.", checkout: "Finalizar pelo WhatsApp" },
  },
};

const cart = new Map();
const cartPanel = document.querySelector("#cart-panel");
const cartBackdrop = document.querySelector(".cart-backdrop");
const cartItems = document.querySelector("#cart-items");
const cartEmpty = document.querySelector("#cart-empty");
const cartCount = document.querySelector("#bag-count");
const cartTotal = document.querySelector("#cart-total");
const toast = document.querySelector("#toast");
const mobileMenu = document.querySelector("#main-nav");
const menuToggle = document.querySelector(".menu-toggle");
const menuGrid = document.querySelector("#menu-grid");
const filterList = document.querySelector("#filter-list");
const scrollProgress = document.querySelector("#scroll-progress");
const siteHeader = document.querySelector(".site-header");
const themeToggle = document.querySelector("#theme-toggle");
let activeProfile = profiles.burger;
let activeFilter = "todos";
let toastTimeout;
let switchTimeout;
let profileAnimationTimeout;
let revealObserver;
let typewriterTimeout;
let parallaxFrame;

function formatPrice(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

function setText(id, value) {
  document.querySelector(`#${id}`).textContent = value;
}

function setHtml(id, value) {
  document.querySelector(`#${id}`).innerHTML = value;
}

function setTheme(theme, persist = true) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  const palette = theme === "dark" ? activeProfile.darkColors : activeProfile.colors;
  ["--paper", "--ink", "--red", "--red-dark", "--lime"].forEach((name, index) => root.style.setProperty(name, palette[index]));
  document.querySelector('meta[name="theme-color"]').content = palette[0];
  document.querySelector("#hero-photo").style.backgroundImage = `linear-gradient(90deg, color-mix(in srgb, ${palette[2]} 26%, transparent), transparent 32%), url("${imageUrl(activeProfile.heroImage)}")`;
  themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
  themeToggle.setAttribute("aria-label", theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro");
  themeToggle.title = theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro";
  if (persist) {
    try {
      localStorage.setItem("site-demo-theme", theme);
    } catch {
      showToast("Não foi possível salvar a preferência neste navegador.");
    }
  }
}

function typeHeroTitle(lines) {
  const title = document.querySelector("#hero-title");
  const targets = [document.querySelector("#hero-title-first"), document.querySelector("#hero-title-second")];
  title.setAttribute("aria-label", lines.join(" "));
  window.clearTimeout(typewriterTimeout);
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    targets.forEach((target, index) => { target.textContent = lines[index]; });
    return;
  }

  targets.forEach((target) => { target.textContent = ""; });
  let lineIndex = 0;
  let characterIndex = 0;
  const typeNextCharacter = () => {
    const characters = Array.from(lines[lineIndex]);
    targets[lineIndex].textContent += characters[characterIndex];
    characterIndex += 1;
    if (characterIndex >= characters.length) {
      lineIndex += 1;
      characterIndex = 0;
    }
    if (lineIndex < lines.length) typewriterTimeout = window.setTimeout(typeNextCharacter, 48);
  };
  typeNextCharacter();
}

function bindMagneticButtons(elements) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  elements.forEach((element) => {
    if (element.dataset.magneticBound) return;
    element.dataset.magneticBound = "true";
    element.classList.add("magnetic-button");
    element.addEventListener("pointermove", (event) => {
      const bounds = element.getBoundingClientRect();
      const offsetX = Math.max(-7, Math.min(7, (event.clientX - bounds.left - bounds.width / 2) * 0.16));
      const offsetY = Math.max(-5, Math.min(5, (event.clientY - bounds.top - bounds.height / 2) * 0.16));
      element.style.setProperty("--magnetic-x", `${offsetX}px`);
      element.style.setProperty("--magnetic-y", `${offsetY}px`);
    });
    element.addEventListener("pointerleave", () => {
      element.style.setProperty("--magnetic-x", "0px");
      element.style.setProperty("--magnetic-y", "0px");
    });
  });
}

function updateParallax() {
  parallaxFrame = undefined;
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? Math.min(1, window.scrollY / scrollableHeight) : 0;
  scrollProgress.style.transform = `scaleX(${progress})`;
  scrollProgress.setAttribute("aria-valuenow", String(Math.round(progress * 100)));
  siteHeader.classList.toggle("is-scrolled", window.scrollY > 50);
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const viewportCenter = window.innerHeight / 2;
  document.querySelectorAll("#hero-photo, #manifesto-photo").forEach((image) => {
    const bounds = image.getBoundingClientRect();
    const distance = viewportCenter - (bounds.top + bounds.height / 2);
    const offset = Math.max(-24, Math.min(24, distance * 0.035));
    image.style.setProperty("--parallax-offset", `${offset.toFixed(1)}px`);
  });
}

function scheduleParallax() {
  if (parallaxFrame !== undefined) return;
  parallaxFrame = window.requestAnimationFrame(updateParallax);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove("is-visible"), 2800);
}

function setCartOpen(isOpen) {
  cartPanel.classList.toggle("is-open", isOpen);
  cartBackdrop.classList.toggle("is-open", isOpen);
  cartPanel.setAttribute("aria-hidden", String(!isOpen));
  document.body.classList.toggle("cart-open", isOpen);
  if (isOpen) cartPanel.querySelector("[data-close-cart]").focus();
}

function createFilterButton(id, label, count, isActive) {
  const button = document.createElement("button");
  button.className = `filter-button${isActive ? " is-active" : ""}`;
  button.type = "button";
  button.dataset.filter = id;
  button.setAttribute("aria-pressed", String(isActive));
  button.append(document.createTextNode(`${label} `));
  const countLabel = document.createElement("span");
  countLabel.textContent = String(count).padStart(2, "0");
  button.append(countLabel);
  return button;
}

function createProductCard(item, index) {
  const [id, name, price, description, category, photo, alt] = item;
  const article = document.createElement("article");
  article.className = "menu-item reveal";
  article.dataset.category = category;
  article.style.setProperty("--reveal-delay", `${Math.min(index, 5) * 65}ms`);

  const image = document.createElement("div");
  image.className = "menu-image";
  image.setAttribute("role", "img");
  image.setAttribute("aria-label", alt);
  image.style.backgroundImage = `url("${imageUrl(photo, 780)}")`;

  const content = document.createElement("div");
  content.className = "menu-item-content";
  const titleRow = document.createElement("div");
  titleRow.className = "menu-item-title";
  const title = document.createElement("h3");
  title.textContent = name;
  const priceLabel = document.createElement("span");
  priceLabel.className = "menu-price";
  priceLabel.textContent = formatPrice(price);
  titleRow.append(title, priceLabel);

  const details = document.createElement("p");
  details.textContent = description;
  const addButton = document.createElement("button");
  addButton.className = "add-button";
  addButton.type = "button";
  addButton.dataset.add = id;
  addButton.setAttribute("aria-label", `${activeProfile.catalog.action} ${name}`);
  addButton.append(document.createTextNode(`${activeProfile.catalog.action} `));
  const addIcon = document.createElement("span");
  addIcon.setAttribute("aria-hidden", "true");
  addIcon.textContent = "+";
  addButton.append(addIcon);

  content.append(titleRow, details, addButton);
  article.append(image, content);
  return article;
}

function renderCatalog(profile) {
  const { catalog } = profile;
  filterList.replaceChildren(createFilterButton("todos", "Tudo", catalog.items.length, true));
  for (const [id, label] of catalog.filters) {
    const count = catalog.items.filter((item) => item[4] === id).length;
    filterList.append(createFilterButton(id, label, count, false));
  }
  menuGrid.replaceChildren(...catalog.items.map(createProductCard));
  setText("catalog-eyebrow", catalog.eyebrow);
  setHtml("menu-title", `${catalog.title}<span class="red-period">.</span>`);
  setHtml("catalog-intro", catalog.intro);
  setText("catalog-note", catalog.note);
  setText("catalog-disclaimer", catalog.disclaimer);
  applyFilter("todos");
  observeReveals(menuGrid.querySelectorAll(".reveal"));
}

function renderTicker(items) {
  const track = document.querySelector("#ticker-track");
  track.replaceChildren();
  for (let copy = 0; copy < 2; copy += 1) {
    for (const [index, item] of items.entries()) {
      const label = document.createElement("span");
      label.textContent = item;
      const separator = document.createElement("i");
      separator.setAttribute("aria-hidden", "true");
      separator.textContent = "✳";
      track.append(label, separator);
      if (copy === 1 && index === items.length - 1) label.setAttribute("aria-hidden", "true");
    }
  }
}

function renderProfile(profile) {
  activeProfile = profile;
  const root = document.documentElement;
  const palette = root.dataset.theme === "dark" ? profile.darkColors : profile.colors;
  const [paper, ink, red, redDark, lime] = palette;
  ["--paper", "--ink", "--red", "--red-dark", "--lime"].forEach((name, index) => root.style.setProperty(name, palette[index]));
  document.querySelector('meta[name="theme-color"]').content = paper;
  document.title = profile.title;
  setText("announcement-title", profile.announcement);
  setText("announcement-note", profile.announcementNote);
  document.querySelectorAll("[data-brand-main]").forEach((node) => { node.textContent = profile.brand[0]; });
  document.querySelectorAll("[data-brand-sub]").forEach((node) => { node.textContent = profile.brand[1]; });
  document.querySelectorAll("[data-brand-mark]").forEach((node) => { node.textContent = profile.mark; });

  setText("hero-eyebrow", profile.eyebrow);
  setText("hero-title-first", profile.hero[0]);
  setText("hero-title-second", profile.hero[1]);
  typeHeroTitle(profile.hero);
  setHtml("hero-description", profile.description);
  setText("hero-cta", profile.heroCta);
  document.querySelector("#hero-cta").insertAdjacentHTML("beforeend", '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>');
  setText("hero-footnote", profile.footnote);
  setText("stamp-top", profile.stamp[0]);
  setText("stamp-bottom", profile.stamp[1]);
  setText("photo-caption", profile.caption);
  const heroPhoto = document.querySelector("#hero-photo");
  heroPhoto.setAttribute("aria-label", profile.heroAlt);
  heroPhoto.style.backgroundImage = `linear-gradient(90deg, color-mix(in srgb, ${red} 26%, transparent), transparent 32%), url("${imageUrl(profile.heroImage)}")`;

  setText("nav-catalog", profile.catalog.title.replace(/\.$/, "").toLowerCase().replace(/^./, (letter) => letter.toUpperCase()));
  setText("nav-story", "Nossa história");
  setText("nav-visit", "Como chegar");
  renderTicker(profile.ticker);
  renderCatalog(profile);
  bindMagneticButtons(document.querySelectorAll(".button, .add-button"));

  setText("story-eyebrow", profile.story.eyebrow);
  setHtml("manifesto-title", profile.story.title);
  setText("story-copy", profile.story.copy);
  setText("story-link", profile.story.link);
  const storyPhoto = document.querySelector("#manifesto-photo");
  storyPhoto.setAttribute("aria-label", profile.story.alt);
  storyPhoto.style.backgroundImage = `url("${imageUrl(profile.story.photo)}")`;
  scheduleParallax();

  const { visit, cart: cartCopy } = profile;
  setText("visit-eyebrow", visit.eyebrow);
  setHtml("visit-title", visit.title);
  setText("address-label", visit.addressLabel);
  setHtml("address-copy", visit.address);
  setText("map-link", "Abrir no mapa");
  document.querySelector("#map-link").href = `https://maps.google.com/?q=${encodeURIComponent(visit.map)}`;
  setText("hours-label", visit.hoursLabel);
  setHtml("hours-copy", visit.hours);
  setText("hours-note", visit.hoursNote);
  setText("order-label", visit.orderLabel);
  setHtml("order-copy", visit.order);
  setText("order-cta", visit.cta);
  document.querySelector("#order-cta").insertAdjacentHTML("beforeend", '<span aria-hidden="true">↗</span>');
  setText("visit-disclaimer", visit.disclaimer);
  setHtml("footer-copy", visit.footer);
  setText("footer-bottom", `© 2026 ${profile.brand.join(" ")} · DEMONSTRAÇÃO DE SITE`);
  setText("cart-eyebrow", cartCopy.eyebrow);
  setHtml("cart-title", `${cartCopy.title}<span class="red-period">.</span>`);
  setText("cart-empty-link", cartCopy.empty);
  document.querySelector("#cart-empty-link").insertAdjacentHTML("beforeend", '<span aria-hidden="true">↗</span>');
  setText("cart-footer-copy", cartCopy.footer);
  setText("checkout-button", cartCopy.checkout);
  document.querySelector("#checkout-button").insertAdjacentHTML("beforeend", '<span aria-hidden="true">↗</span>');

  cart.clear();
  renderCart();
}

function applyFilter(filter) {
  activeFilter = filter;
  document.querySelectorAll("[data-filter]").forEach((button) => {
    const isActive = button.dataset.filter === filter;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  document.querySelectorAll(".menu-item").forEach((item) => {
    item.hidden = filter !== "todos" && item.dataset.category !== filter;
  });
}

function renderCart() {
  let itemCount = 0;
  let total = 0;
  const products = new Map(activeProfile.catalog.items.map((item) => [item[0], { name: item[1], price: item[2] }]));
  cartItems.replaceChildren();

  for (const [id, quantity] of cart) {
    const product = products.get(id);
    if (!product) continue;
    itemCount += quantity;
    total += product.price * quantity;
    const line = document.createElement("div");
    line.className = "cart-line";
    line.innerHTML = `<span class="cart-line-name"></span><span class="cart-line-price"></span><div class="cart-line-controls"><button type="button" data-change="-1" aria-label="Remover um item">−</button><span></span><button type="button" data-change="1" aria-label="Adicionar um item">+</button></div>`;
    line.querySelector(".cart-line-name").textContent = product.name;
    line.querySelector(".cart-line-price").textContent = formatPrice(product.price * quantity);
    line.querySelector(".cart-line-controls").setAttribute("aria-label", `Quantidade de ${product.name}`);
    line.querySelector('[data-change="-1"]').dataset.id = id;
    line.querySelector('[data-change="-1"]').setAttribute("aria-label", `Remover um ${product.name}`);
    line.querySelector(".cart-line-controls span").textContent = String(quantity);
    line.querySelector('[data-change="1"]').dataset.id = id;
    line.querySelector('[data-change="1"]').setAttribute("aria-label", `Adicionar um ${product.name}`);
    cartItems.append(line);
  }

  cartCount.textContent = String(itemCount);
  cartTotal.textContent = formatPrice(total);
  cartEmpty.hidden = itemCount > 0;
  cartItems.hidden = itemCount === 0;
}

function observeReveals(elements) {
  if (!revealObserver) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }
  elements.forEach((element) => revealObserver.observe(element));
}

function initReveals() {
  const targets = document.querySelectorAll(".section-heading, .menu-toolbar, .menu-disclaimer, .manifesto-photo, .manifesto-copy, .visit-heading, .visit-details, .visit-detail, .visit-order, .demo-note, .site-footer");
  targets.forEach((element, index) => {
    element.classList.add("reveal");
    element.style.setProperty("--reveal-delay", `${(index % 4) * 75}ms`);
  });
  if (!("IntersectionObserver" in window)) {
    observeReveals(targets);
    return;
  }
  revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -35px 0px" });
  observeReveals(targets);
}

function changeProfile(id) {
  const profile = profiles[id];
  if (!profile || profile === activeProfile) return;
  document.body.classList.remove("profile-entering");
  document.body.classList.add("is-switching");
  window.clearTimeout(switchTimeout);
  window.clearTimeout(profileAnimationTimeout);
  switchTimeout = window.setTimeout(() => {
    document.querySelectorAll("[data-niche]").forEach((button) => {
      const isActive = button.dataset.niche === id;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
    renderProfile(profile);
    window.requestAnimationFrame(() => {
      document.body.classList.remove("is-switching");
      document.body.classList.add("profile-entering");
      profileAnimationTimeout = window.setTimeout(() => document.body.classList.remove("profile-entering"), 950);
    });
  }, 140);
}

document.addEventListener("click", (event) => {
  const nicheButton = event.target.closest("[data-niche]");
  if (nicheButton) {
    changeProfile(nicheButton.dataset.niche);
    return;
  }

  const addButton = event.target.closest("[data-add]");
  if (addButton) {
    const item = activeProfile.catalog.items.find((product) => product[0] === addButton.dataset.add);
    if (!item) return;
    cart.set(item[0], (cart.get(item[0]) || 0) + 1);
    renderCart();
    showToast(`${item[1]} foi adicionado.`);
    return;
  }

  const changeButton = event.target.closest("[data-change]");
  if (changeButton) {
    const id = changeButton.dataset.id;
    const quantity = (cart.get(id) || 0) + Number(changeButton.dataset.change);
    if (quantity > 0) cart.set(id, quantity);
    else cart.delete(id);
    renderCart();
    return;
  }

  const filterButton = event.target.closest("[data-filter]");
  if (filterButton) {
    applyFilter(filterButton.dataset.filter);
    return;
  }

  if (event.target.closest("[data-open-cart]")) setCartOpen(true);
  if (event.target.closest("[data-close-cart]")) setCartOpen(false);
  if (event.target.closest(".main-nav a")) {
    mobileMenu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  mobileMenu.classList.toggle("is-open", isOpen);
});

document.querySelector("#checkout-button").addEventListener("click", () => {
  if (cart.size === 0) {
    showToast("Sua sacola ainda está vazia.");
    return;
  }

  const products = new Map(activeProfile.catalog.items.map((item) => [item[0], { name: item[1], price: item[2] }]));
  const lines = [...cart].map(([id, quantity]) => `${quantity}x ${products.get(id).name} — ${formatPrice(products.get(id).price * quantity)}`);
  const total = [...cart].reduce((sum, [id, quantity]) => sum + products.get(id).price * quantity, 0);
  const message = `Olá! Tenho interesse em:\n${lines.join("\n")}\nTotal: ${formatPrice(total)}\n\nDemonstração de site para ${activeProfile.brand.join(" ")}.`;
  window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  showToast("Resumo pronto para continuar no WhatsApp.");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setCartOpen(false);
});

document.querySelector("#hero-index").textContent = "01 / 04";
initReveals();
renderProfile(profiles.burger);
setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light", false);
themeToggle.addEventListener("click", () => {
  setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
});
window.addEventListener("scroll", scheduleParallax, { passive: true });
window.addEventListener("resize", scheduleParallax);
scheduleParallax();