const MAIN_TABS = [
  {
    id: "new",
    label: "신메뉴",
    subTabs: [{ id: "featured", label: "시즌메뉴" }],
  },
  {
    id: "recommended",
    label: "추천메뉴",
    subTabs: [
      { id: "espresso", label: "에스프레소" },
      { id: "coldbrew", label: "콜드브루" },
    ],
  },
  {
    id: "coffee",
    label: "커피",
    subTabs: [
      { id: "espresso", label: "에스프레소" },
      { id: "latte", label: "라떼" },
    ],
  },
  {
    id: "decaf",
    label: "디카페인",
    subTabs: [{ id: "decaf", label: "디카페인" }],
  },
  {
    id: "beverage",
    label: "음료",
    subTabs: [{ id: "cold", label: "차가운음료" }],
  },
  {
    id: "tea",
    label: "티",
    subTabs: [{ id: "tea", label: "과일티" }],
  },
  {
    id: "food",
    label: "푸드",
    subTabs: [{ id: "dessert", label: "디저트" }],
  },
  {
    id: "goods",
    label: "상품",
    subTabs: [{ id: "goods", label: "굿즈" }],
  },
];

const MENU_ITEMS = [
  {
    id: "ice-mega-ricano",
    name: "(ICE)메가리카노",
    price: 3000,
    badge: "베스트",
    visualType: "drink-iced-dark",
    description: "시원하고 진한 풍미로 즐기는 메가 스타일 아이스 커피",
    mainTabs: ["recommended", "coffee"],
    subTabs: ["espresso"],
    optionSet: "icedCoffee",
    supportsDecaf: true,
  },
  {
    id: "ice-americano",
    name: "(ICE)아메리카노",
    price: 2000,
    badge: "",
    visualType: "drink-iced-dark",
    description: "가볍고 깔끔하게 마시기 좋은 기본 아이스 아메리카노",
    mainTabs: ["recommended", "coffee"],
    subTabs: ["espresso"],
    optionSet: "icedCoffee",
    supportsDecaf: true,
  },
  {
    id: "ice-half-mega",
    name: "할메가커피",
    price: 1900,
    badge: "BEST",
    visualType: "drink-iced-latte",
    description: "연한 우유감이 있는 시그니처 스타일의 아이스 커피",
    mainTabs: ["recommended", "coffee"],
    subTabs: ["espresso"],
    optionSet: "icedCoffee",
    supportsDecaf: false,
  },
  {
    id: "ice-half-mega-latte",
    name: "할메가커피라떼",
    price: 2900,
    badge: "",
    visualType: "drink-iced-latte",
    description: "부드러운 우유와 커피 밸런스를 살린 라떼 타입 메뉴",
    mainTabs: ["recommended", "coffee"],
    subTabs: ["espresso", "latte"],
    optionSet: "icedLatte",
    supportsDecaf: true,
  },
  {
    id: "ice-honey-americano",
    name: "(ICE)꿀아메리카노",
    price: 2700,
    badge: "",
    visualType: "drink-iced-dark",
    description: "은은한 단맛을 더해 마시기 편한 아이스 아메리카노",
    mainTabs: ["recommended", "coffee"],
    subTabs: ["espresso"],
    optionSet: "icedCoffee",
    supportsDecaf: true,
  },
  {
    id: "ice-vanilla-americano",
    name: "(ICE)바닐라아메리카노",
    price: 2700,
    badge: "",
    visualType: "drink-iced-dark",
    description: "바닐라 향을 더한 아이스 아메리카노",
    mainTabs: ["recommended", "coffee"],
    subTabs: ["espresso"],
    optionSet: "icedCoffee",
    supportsDecaf: true,
  },
  {
    id: "ice-hazelnut-americano",
    name: "(ICE)헤이즐넛아메리카노",
    price: 2700,
    badge: "베스트",
    visualType: "drink-iced-dark",
    description: "헤이즐넛 향으로 고소함을 더한 아이스 아메리카노",
    mainTabs: ["recommended", "coffee"],
    subTabs: ["espresso"],
    optionSet: "icedCoffee",
    supportsDecaf: true,
  },
  {
    id: "hot-americano",
    name: "(HOT)아메리카노",
    price: 1500,
    badge: "",
    visualType: "drink-hot-cup",
    description: "가성비 좋은 기본 핫 아메리카노",
    mainTabs: ["recommended", "coffee"],
    subTabs: ["espresso"],
    optionSet: "hotCoffee",
    supportsDecaf: true,
  },
  {
    id: "hot-honey-americano",
    name: "(HOT)꿀아메리카노",
    price: 2700,
    badge: "",
    visualType: "drink-hot-cup",
    description: "부드러운 단맛을 더한 핫 아메리카노",
    mainTabs: ["recommended", "coffee"],
    subTabs: ["espresso"],
    optionSet: "hotCoffee",
    supportsDecaf: true,
  },
  {
    id: "hot-vanilla-americano",
    name: "(HOT)바닐라아메리카노",
    price: 2700,
    badge: "",
    visualType: "drink-hot-cup",
    description: "바닐라 향을 더한 핫 아메리카노",
    mainTabs: ["recommended", "coffee"],
    subTabs: ["espresso"],
    optionSet: "hotCoffee",
    supportsDecaf: true,
  },
  {
    id: "hot-hazelnut-americano",
    name: "(HOT)헤이즐넛아메리카노",
    price: 2700,
    badge: "",
    visualType: "drink-hot-cup",
    description: "헤이즐넛 향을 더한 핫 아메리카노",
    mainTabs: ["recommended", "coffee"],
    subTabs: ["espresso"],
    optionSet: "hotCoffee",
    supportsDecaf: true,
  },
  {
    id: "coldbrew-affogato",
    name: "콜드브루 아포가토",
    price: 3200,
    badge: "베스트",
    visualType: "drink-dessert",
    description: "진한 콜드브루와 아이스크림의 조합을 즐기는 디저트 메뉴",
    mainTabs: ["recommended", "food"],
    subTabs: ["espresso", "coldbrew", "dessert"],
    optionSet: "dessert",
    supportsDecaf: false,
  },
  {
    id: "espresso",
    name: "에스프레소",
    price: 1500,
    badge: "",
    visualType: "drink-espresso",
    description: "짧고 진하게 마시는 기본 에스프레소",
    mainTabs: ["recommended", "coffee"],
    subTabs: ["espresso"],
    optionSet: "espresso",
    supportsDecaf: false,
  },
  {
    id: "espresso-doppio",
    name: "에스프레소 도피오",
    price: 2000,
    badge: "",
    visualType: "drink-espresso",
    description: "더 진한 바디감으로 즐기는 더블 에스프레소",
    mainTabs: ["recommended", "coffee"],
    subTabs: ["espresso"],
    optionSet: "espresso",
    supportsDecaf: false,
  },
  {
    id: "espresso-pieno",
    name: "에스프레소 피에노",
    price: 2400,
    badge: "",
    visualType: "drink-espresso",
    description: "부드러운 크레마감을 더한 에스프레소 타입 메뉴",
    mainTabs: ["recommended", "coffee"],
    subTabs: ["espresso"],
    optionSet: "espresso",
    supportsDecaf: false,
  },
  {
    id: "cafe-latte",
    name: "카페라떼",
    price: 2900,
    badge: "",
    visualType: "drink-iced-latte",
    description: "부드러운 우유와 에스프레소 밸런스가 좋은 라떼",
    mainTabs: ["coffee"],
    subTabs: ["latte"],
    optionSet: "icedLatte",
    supportsDecaf: true,
  },
  {
    id: "vanilla-latte",
    name: "바닐라라떼",
    price: 3400,
    badge: "",
    visualType: "drink-iced-latte",
    description: "바닐라 향을 더한 달콤한 라떼",
    mainTabs: ["coffee"],
    subTabs: ["latte"],
    optionSet: "icedLatte",
    supportsDecaf: true,
  },
  {
    id: "cappuccino",
    name: "카푸치노",
    price: 3200,
    badge: "",
    visualType: "drink-dessert",
    description: "풍성한 우유 폼이 올라간 카푸치노",
    mainTabs: ["coffee"],
    subTabs: ["latte"],
    optionSet: "hotCoffee",
    supportsDecaf: true,
  },
  {
    id: "big-mega-caffe-latte",
    name: "왕메가카페라떼",
    price: 4400,
    badge: "BIG",
    visualType: "drink-iced-latte",
    description: "왕메가 사이즈로 즐기는 큰 용량 라떼",
    mainTabs: ["coffee"],
    subTabs: ["latte"],
    optionSet: "icedLatte",
    supportsDecaf: true,
  },
  {
    id: "decaf-americano",
    name: "(ICE)디카페인 아메리카노",
    price: 3400,
    badge: "디카페인",
    visualType: "drink-iced-dark",
    description: "디카페인 원두로 마시는 아이스 아메리카노",
    mainTabs: ["decaf"],
    subTabs: ["decaf"],
    optionSet: "icedCoffee",
    supportsDecaf: false,
  },
  {
    id: "decaf-hot-americano",
    name: "(HOT)디카페인 아메리카노",
    price: 3400,
    badge: "디카페인",
    visualType: "drink-hot-cup",
    description: "디카페인 원두로 마시는 핫 아메리카노",
    mainTabs: ["decaf"],
    subTabs: ["decaf"],
    optionSet: "hotCoffee",
    supportsDecaf: false,
  },
  {
    id: "decaf-latte",
    name: "디카페인 카페라떼",
    price: 3900,
    badge: "디카페인",
    visualType: "drink-iced-latte",
    description: "디카페인 원두로 만든 부드러운 카페라떼",
    mainTabs: ["decaf"],
    subTabs: ["decaf"],
    optionSet: "icedLatte",
    supportsDecaf: false,
  },
  {
    id: "zero-boost-ade",
    name: "제로 부스트 에이드",
    price: 3000,
    badge: "NEW",
    visualType: "drink-iced-latte",
    description: "에너지드링크 풍미를 담은 제로 칼로리 에이드",
    mainTabs: ["new", "beverage"],
    subTabs: ["featured", "cold"],
    optionSet: "coldDrink",
    supportsDecaf: false,
  },
  {
    id: "blueberry-yogurt-smoothie",
    name: "블루베리요거트스무디",
    price: 3900,
    badge: "",
    visualType: "drink-iced-latte",
    description: "블루베리와 요거트가 조화로운 스무디",
    mainTabs: ["beverage"],
    subTabs: ["cold"],
    optionSet: "coldDrink",
    supportsDecaf: false,
  },
  {
    id: "xo-yakult",
    name: "저당 꿀배 XO야쿠르트",
    price: 3900,
    badge: "NEW",
    visualType: "drink-iced-latte",
    description: "배 풍미와 야쿠르트 XO를 더한 상큼한 음료",
    mainTabs: ["new", "beverage"],
    subTabs: ["featured", "cold"],
    optionSet: "coldDrink",
    supportsDecaf: false,
  },
  {
    id: "yuja-ginger-tea",
    name: "유자생강차",
    price: 3300,
    badge: "HOT",
    visualType: "drink-hot-cup",
    description: "유자와 생강 풍미가 어우러진 따뜻한 과일티",
    mainTabs: ["tea"],
    subTabs: ["tea"],
    optionSet: "tea",
    supportsDecaf: false,
  },
  {
    id: "jasmine-tea",
    name: "망고폼 자스민 티플레저",
    price: 3900,
    badge: "",
    visualType: "drink-iced-latte",
    description: "자스민티에 망고 폼을 더한 아이스 티",
    mainTabs: ["tea"],
    subTabs: ["tea"],
    optionSet: "coldDrink",
    supportsDecaf: false,
  },
  {
    id: "croffle",
    name: "카라멜 크로플",
    price: 3900,
    badge: "",
    visualType: "drink-dessert",
    description: "달콤한 시럽을 더한 디저트 메뉴",
    mainTabs: ["food"],
    subTabs: ["dessert"],
    optionSet: "dessert",
    supportsDecaf: false,
  },
  {
    id: "macaron-set",
    name: "마카롱 세트",
    price: 5200,
    badge: "",
    visualType: "drink-dessert",
    description: "디저트와 함께 즐기는 간단한 세트 메뉴",
    mainTabs: ["food"],
    subTabs: ["dessert"],
    optionSet: "dessert",
    supportsDecaf: false,
  },
  {
    id: "mega-tumbler",
    name: "메가 텀블러",
    price: 12000,
    badge: "",
    visualType: "drink-hot-cup",
    description: "메가MGC커피 굿즈용 텀블러",
    mainTabs: ["goods"],
    subTabs: ["goods"],
    optionSet: "goods",
    supportsDecaf: false,
  },
];

const OPTION_SETS = {
  icedCoffee: [
    {
      key: "ice",
      label: "얼음 양",
      options: [
        { id: "normal", label: "보통", price: 0 },
        { id: "less", label: "적게", price: 0 },
      ],
    },
    {
      key: "shot",
      label: "샷 추가",
      options: [
        { id: "basic", label: "기본", price: 0 },
        { id: "extra", label: "1샷 추가 (+500)", price: 500 },
      ],
    },
  ],
  icedLatte: [
    {
      key: "ice",
      label: "얼음 양",
      options: [
        { id: "normal", label: "보통", price: 0 },
        { id: "less", label: "적게", price: 0 },
      ],
    },
    {
      key: "shot",
      label: "샷 추가",
      options: [
        { id: "basic", label: "기본", price: 0 },
        { id: "extra", label: "1샷 추가 (+500)", price: 500 },
      ],
    },
  ],
  hotCoffee: [
    {
      key: "shot",
      label: "샷 추가",
      options: [
        { id: "basic", label: "기본", price: 0 },
        { id: "extra", label: "1샷 추가 (+500)", price: 500 },
      ],
    },
  ],
  coldDrink: [
    {
      key: "ice",
      label: "얼음 양",
      options: [
        { id: "normal", label: "보통", price: 0 },
        { id: "less", label: "적게", price: 0 },
      ],
    },
    {
      key: "sweetness",
      label: "당도",
      options: [
        { id: "normal", label: "기본", price: 0 },
        { id: "light", label: "덜 달게", price: 0 },
      ],
    },
  ],
  tea: [
    {
      key: "sweetness",
      label: "당도",
      options: [
        { id: "normal", label: "기본", price: 0 },
        { id: "light", label: "덜 달게", price: 0 },
      ],
    },
  ],
  espresso: [
    {
      key: "sugar",
      label: "설탕",
      options: [
        { id: "none", label: "없음", price: 0 },
        { id: "basic", label: "기본", price: 0 },
      ],
    },
  ],
  dessert: [
    {
      key: "takeout",
      label: "제공 방식",
      options: [
        { id: "basic", label: "기본", price: 0 },
      ],
    },
  ],
  goods: [
    {
      key: "color",
      label: "색상",
      options: [
        { id: "yellow", label: "옐로우", price: 0 },
        { id: "black", label: "블랙", price: 0 },
      ],
    },
  ],
};

const state = {
  activeMainTab: "recommended",
  activeSubTab: "espresso",
  currentPage: 0,
  activeItemId: null,
  optionSelections: {},
  cart: [],
  remainingSeconds: 117,
  timerId: null,
};

const PAGE_SIZE = 12;

const mainTabBar = document.getElementById("main-tab-bar");
const subTabBar = document.getElementById("sub-tab-bar");
const productGrid = document.getElementById("product-grid");
const pageIndicator = document.getElementById("page-indicator");
const prevPageButton = document.getElementById("prev-page-button");
const nextPageButton = document.getElementById("next-page-button");
const orderList = document.getElementById("order-list");
const timerValue = document.getElementById("timer-value");
const itemCount = document.getElementById("item-count");
const totalPrice = document.getElementById("total-price");
const clearCartButton = document.getElementById("clear-cart-button");
const checkoutButton = document.getElementById("checkout-button");
const optionModal = document.getElementById("option-modal");
const optionVisual = document.getElementById("option-visual");
const optionName = document.getElementById("option-name");
const optionDescription = document.getElementById("option-description");
const optionBasePrice = document.getElementById("option-base-price");
const optionGroups = document.getElementById("option-groups");
const optionTotalPrice = document.getElementById("option-total-price");
const closeOptionButton = document.getElementById("close-option-button");
const addToCartButton = document.getElementById("add-to-cart-button");
const checkoutModal = document.getElementById("checkout-modal");
const checkoutSummary = document.getElementById("checkout-summary");
const checkoutTotalPrice = document.getElementById("checkout-total-price");
const closeCheckoutButton = document.getElementById("close-checkout-button");
const confirmCheckoutButton = document.getElementById("confirm-checkout-button");
const mainTabTemplate = document.getElementById("main-tab-template");
const subTabTemplate = document.getElementById("sub-tab-template");
const productCardTemplate = document.getElementById("product-card-template");
const orderRowTemplate = document.getElementById("order-row-template");

const formatPrice = (value) => `${value.toLocaleString("ko-KR")}원`;

function getActiveMainTab() {
  return MAIN_TABS.find((tab) => tab.id === state.activeMainTab);
}

function getActiveItem() {
  return MENU_ITEMS.find((item) => item.id === state.activeItemId) || null;
}

function getVisibleItems() {
  return MENU_ITEMS.filter(
    (item) =>
      item.mainTabs.includes(state.activeMainTab) &&
      item.subTabs.includes(state.activeSubTab),
  );
}

function getPagedItems(items) {
  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
  const currentPage = Math.min(state.currentPage, totalPages - 1);
  const start = currentPage * PAGE_SIZE;

  state.currentPage = currentPage;

  return {
    items: items.slice(start, start + PAGE_SIZE),
    totalPages,
    currentPage,
  };
}

function getOptionGroups(item) {
  const groups = OPTION_SETS[item.optionSet] || [];
  if (!item.supportsDecaf) {
    return groups;
  }

  return [
    ...groups,
    {
      key: "bean",
      label: "원두",
      options: [
        { id: "basic", label: "기본", price: 0 },
        { id: "decaf", label: "디카페인 (+500)", price: 500 },
      ],
    },
  ];
}

function getDefaultSelections(item) {
  const selections = {};
  getOptionGroups(item).forEach((group) => {
    selections[group.key] = group.options[0].id;
  });
  return selections;
}

function getSelections(item) {
  return state.optionSelections[item.id] || getDefaultSelections(item);
}

function getSelectionPrice(item, selections) {
  return getOptionGroups(item).reduce((total, group) => {
    const selectedOption = group.options.find((option) => option.id === selections[group.key]);
    return total + (selectedOption ? selectedOption.price : 0);
  }, item.price);
}

function buildOptionSummary(item, selections) {
  return getOptionGroups(item)
    .map((group) => {
      const selectedOption = group.options.find((option) => option.id === selections[group.key]);
      return selectedOption ? selectedOption.label.replace(/\s+\(\+\d+\)/, "") : null;
    })
    .filter(Boolean)
    .join(" · ");
}

function applyDrinkVisual(node, visualType) {
  const baseClass = node.classList.contains("option-visual") ? "option-visual" : "product-visual";

  node.className = `${baseClass} ${visualType}`;
  node.innerHTML = "";

  if (visualType === "drink-iced-dark" || visualType === "drink-iced-latte") {
    const bubbles = document.createElement("span");
    bubbles.className = "ice-bubbles";
    node.appendChild(bubbles);
  }

  if (visualType === "drink-iced-latte") {
    const iceLabel = document.createElement("span");
    iceLabel.className = "ice-label";
    iceLabel.textContent = "ICE";
    node.appendChild(iceLabel);
  }

  if (visualType === "drink-espresso") {
    const crema = document.createElement("span");
    crema.className = "crema";
    node.appendChild(crema);
  }

  if (visualType === "drink-dessert") {
    const topping = document.createElement("span");
    topping.className = "topping";
    node.appendChild(topping);
  }
}

function renderMainTabs() {
  mainTabBar.innerHTML = "";

  MAIN_TABS.forEach((tab) => {
    const fragment = mainTabTemplate.content.cloneNode(true);
    const button = fragment.querySelector(".main-tab");

    button.textContent = tab.label;
    button.classList.toggle("is-active", tab.id === state.activeMainTab);
    button.addEventListener("click", () => {
      state.activeMainTab = tab.id;
      state.activeSubTab = tab.subTabs[0].id;
      state.currentPage = 0;
      renderMainTabs();
      renderSubTabs();
      renderProducts();
    });

    mainTabBar.appendChild(fragment);
  });
}

function renderSubTabs() {
  subTabBar.innerHTML = "";
  const mainTab = getActiveMainTab();

  if (!mainTab) {
    return;
  }

  mainTab.subTabs.forEach((subTab) => {
    const fragment = subTabTemplate.content.cloneNode(true);
    const button = fragment.querySelector(".sub-tab");

    button.textContent = subTab.label;
    button.classList.toggle("is-active", subTab.id === state.activeSubTab);
    button.addEventListener("click", () => {
      state.activeSubTab = subTab.id;
      state.currentPage = 0;
      renderSubTabs();
      renderProducts();
    });

    subTabBar.appendChild(fragment);
  });
}

function renderProducts() {
  const items = getVisibleItems();
  const paged = getPagedItems(items);
  productGrid.innerHTML = "";

  paged.items.forEach((item) => {
    const fragment = productCardTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".product-card");
    const visual = fragment.querySelector(".product-visual");

    applyDrinkVisual(visual, item.visualType);
    fragment.querySelector(".product-name").textContent = item.name;
    fragment.querySelector(".product-price").textContent = formatPrice(item.price);

    card.addEventListener("click", () => openOptionModal(item.id));
    productGrid.appendChild(fragment);
  });

  pageIndicator.textContent = `${paged.currentPage + 1} / ${paged.totalPages}`;
  prevPageButton.disabled = paged.currentPage === 0;
  nextPageButton.disabled = paged.currentPage >= paged.totalPages - 1;
}

function renderCart() {
  orderList.innerHTML = "";

  if (state.cart.length === 0) {
    const empty = document.createElement("div");
    empty.className = "order-row";
    empty.innerHTML = `
      <div class="order-menu">
        <strong class="order-name">선택한 메뉴가 없습니다.</strong>
        <p class="order-option">상품을 누르면 이 영역에 담깁니다.</p>
      </div>
      <div></div>
      <strong class="order-price"></strong>
    `;
    orderList.appendChild(empty);
  } else {
    state.cart.forEach((cartItem) => {
      const fragment = orderRowTemplate.content.cloneNode(true);
      const minusButton = fragment.querySelector(".minus");
      const plusButton = fragment.querySelector(".plus");

      fragment.querySelector(".order-name").textContent = cartItem.name;
      fragment.querySelector(".order-option").textContent = cartItem.optionText;
      fragment.querySelector(".order-qty").textContent = `${cartItem.quantity}개`;
      fragment.querySelector(".order-price").textContent = formatPrice(
        cartItem.unitPrice * cartItem.quantity,
      );

      minusButton.addEventListener("click", () => updateCartQuantity(cartItem.key, -1));
      plusButton.addEventListener("click", () => updateCartQuantity(cartItem.key, 1));

      orderList.appendChild(fragment);
    });
  }

  const totals = getCartTotals();
  itemCount.textContent = `${totals.count}개`;
  totalPrice.textContent = formatPrice(totals.total);
}

function getCartTotals() {
  return state.cart.reduce(
    (acc, item) => {
      acc.count += item.quantity;
      acc.total += item.unitPrice * item.quantity;
      return acc;
    },
    { count: 0, total: 0 },
  );
}

function updateCartQuantity(key, delta) {
  const target = state.cart.find((item) => item.key === key);
  if (!target) {
    return;
  }

  target.quantity += delta;
  if (target.quantity <= 0) {
    state.cart = state.cart.filter((item) => item.key !== key);
  }

  resetTimer();
  renderCart();
}

function openOptionModal(itemId) {
  const item = MENU_ITEMS.find((entry) => entry.id === itemId);
  if (!item) {
    return;
  }

  state.activeItemId = itemId;
  if (!state.optionSelections[itemId]) {
    state.optionSelections[itemId] = getDefaultSelections(item);
  }

  renderOptionModal();
  optionModal.classList.remove("hidden");
}

function closeOptionModal() {
  optionModal.classList.add("hidden");
}

function renderOptionModal() {
  const item = getActiveItem();
  if (!item) {
    return;
  }

  const selections = getSelections(item);
  optionName.textContent = item.name;
  optionDescription.textContent = item.description;
  optionBasePrice.textContent = `기본 금액 ${formatPrice(item.price)}`;
  optionGroups.innerHTML = "";
  optionTotalPrice.textContent = formatPrice(getSelectionPrice(item, selections));
  applyDrinkVisual(optionVisual, item.visualType);

  getOptionGroups(item).forEach((group) => {
    const wrapper = document.createElement("section");
    const title = document.createElement("h3");
    const choiceList = document.createElement("div");

    wrapper.className = "option-group";
    title.textContent = group.label;
    choiceList.className = "choice-list";

    group.options.forEach((option) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "choice-button";
      button.textContent = option.label;
      button.classList.toggle("is-active", selections[group.key] === option.id);
      button.addEventListener("click", () => {
        state.optionSelections[item.id] = {
          ...selections,
          [group.key]: option.id,
        };
        renderOptionModal();
      });
      choiceList.appendChild(button);
    });

    wrapper.appendChild(title);
    wrapper.appendChild(choiceList);
    optionGroups.appendChild(wrapper);
  });
}

function addActiveItemToCart() {
  const item = getActiveItem();
  if (!item) {
    return;
  }

  const selections = getSelections(item);
  const optionText = buildOptionSummary(item, selections);
  const unitPrice = getSelectionPrice(item, selections);
  const key = `${item.id}|${JSON.stringify(selections)}`;
  const existing = state.cart.find((entry) => entry.key === key);

  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({
      key,
      name: item.name,
      optionText,
      unitPrice,
      quantity: 1,
    });
  }

  resetTimer();
  renderCart();
  closeOptionModal();
}

function openCheckoutModal() {
  if (state.cart.length === 0) {
    window.alert("먼저 메뉴를 선택해 주세요.");
    return;
  }

  checkoutSummary.textContent = "확인을 누르면 담긴 메뉴와 주문 시간이 초기화됩니다.";
  checkoutTotalPrice.textContent = formatPrice(getCartTotals().total);
  checkoutModal.classList.remove("hidden");
}

function closeCheckoutModal() {
  checkoutModal.classList.add("hidden");
}

function clearOrderState() {
  state.cart = [];
  state.activeItemId = null;
  state.optionSelections = {};
  checkoutSummary.textContent = "";
  checkoutTotalPrice.textContent = formatPrice(0);
  closeOptionModal();
  closeCheckoutModal();
  resetTimer();
  renderCart();
}

function resetTimer() {
  state.remainingSeconds = 117;
  timerValue.textContent = `${state.remainingSeconds}초`;
}

function startTimer() {
  if (state.timerId) {
    window.clearInterval(state.timerId);
  }

  state.timerId = window.setInterval(() => {
    state.remainingSeconds -= 1;
    timerValue.textContent = `${state.remainingSeconds}초`;

    if (state.remainingSeconds <= 0) {
      clearOrderState();
      window.alert("주문 시간이 만료되어 장바구니를 비웠습니다.");
    }
  }, 1000);
}

function initializeEvents() {
  clearCartButton.addEventListener("click", () => {
    clearOrderState();
  });

  checkoutButton.addEventListener("click", openCheckoutModal);
  prevPageButton.addEventListener("click", () => {
    if (state.currentPage === 0) {
      return;
    }
    state.currentPage -= 1;
    renderProducts();
  });
  nextPageButton.addEventListener("click", () => {
    state.currentPage += 1;
    renderProducts();
  });
  closeOptionButton.addEventListener("click", closeOptionModal);
  addToCartButton.addEventListener("click", addActiveItemToCart);
  closeCheckoutButton.addEventListener("click", clearOrderState);

  confirmCheckoutButton.addEventListener("click", () => {
    clearOrderState();
  });

  optionModal.addEventListener("click", (event) => {
    if (event.target === optionModal) {
      closeOptionModal();
    }
  });

}

function initialize() {
  renderMainTabs();
  renderSubTabs();
  renderProducts();
  renderCart();
  resetTimer();
  startTimer();
  initializeEvents();
}

initialize();
