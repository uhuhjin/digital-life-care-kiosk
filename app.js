const CATEGORIES = [
  { id: "recommended", label: "추천" },
  { id: "coffee", label: "커피" },
  { id: "season", label: "시즌" },
  { id: "tea-ade", label: "티·에이드" },
  { id: "smoothie-juice", label: "스무디·주스" },
];

const MENU_ITEMS = [
  {
    id: "strawberry-latte",
    name: "딸기라떼",
    badge: "시즌",
    image: "https://img.79plus.co.kr/megahp/manager/upload/menu/20250116001724_1736954244791_8qDsY0gj14.jpg",
    description: "딸기 과육이 풍부하게 느껴지는 메가MGC커피의 스테디셀러 아이스 라떼",
    allergy: "우유",
    categories: ["recommended", "season"],
    temperatures: [{ id: "ice", label: "ICE", cupSize: "591ml" }],
    caffeineOptions: [{ id: "regular", label: "기본" }],
    supportsIceControl: true,
    supportsSweetness: true,
    priceMap: {
      "ice|regular": 3700,
    },
  },
  {
    id: "green-kiwi-strawberry-smoothie",
    name: "그린키위 콕콕 딸키스무디",
    badge: "NEW",
    image: "https://img.79plus.co.kr/megahp/manager/upload/menu/20251226202021_1766748021154_Q8w6zFlJH3.png",
    description: "진한 딸기청 위에 키위씨가 콕콕 박힌 그린키위 스무디를 올린 시즌 스무디",
    allergy: "없음",
    categories: ["season", "smoothie-juice"],
    temperatures: [{ id: "ice", label: "ICE", cupSize: "591ml" }],
    caffeineOptions: [{ id: "regular", label: "기본" }],
    supportsIceControl: true,
    supportsSweetness: true,
    priceMap: {
      "ice|regular": 4000,
    },
  },
  {
    id: "yuja-ginger-tea",
    name: "유자생강차",
    badge: "HOT",
    image: "https://img.79plus.co.kr/megahp/manager/upload/menu/20251106022624_1762363584516_gmIV9uXczk.png",
    description: "상큼달콤한 유자청과 은은하게 매콤한 생강 풍미를 담은 과일 티",
    allergy: "없음",
    categories: ["season", "tea-ade"],
    temperatures: [{ id: "hot", label: "HOT", cupSize: "591ml" }],
    caffeineOptions: [{ id: "regular", label: "기본" }],
    supportsIceControl: false,
    supportsSweetness: true,
    priceMap: {
      "hot|regular": 3300,
    },
  },
  {
    id: "oriental-raisin-americano",
    name: "헛개리카노",
    badge: "BEST",
    image: "https://img.79plus.co.kr/megahp/manager/upload/menu/20250320000925_1742396965069_ekSqAIVc1L.jpg",
    imagesByTemperature: {
      hot: "https://img.79plus.co.kr/megahp/manager/upload/menu/20250320000737_1742396857693_ngpZI3EbLM.jpg",
      ice: "https://img.79plus.co.kr/megahp/manager/upload/menu/20250320000925_1742396965069_ekSqAIVc1L.jpg",
    },
    description: "국내산 헛개수와 메가MGC커피 아메리카노를 더한 블렌딩 커피",
    allergy: "없음",
    categories: ["recommended", "coffee"],
    temperatures: [
      { id: "hot", label: "HOT", cupSize: "591ml" },
      { id: "ice", label: "ICE", cupSize: "710ml" },
    ],
    caffeineOptions: [
      { id: "regular", label: "기본" },
      { id: "decaf", label: "디카페인" },
    ],
    supportsIceControl: true,
    supportsSweetness: false,
    priceMap: {
      "hot|regular": 2400,
      "ice|regular": 2400,
      "hot|decaf": 3400,
      "ice|decaf": 3400,
    },
  },
  {
    id: "zero-boost-ade",
    name: "제로 부스트 에이드",
    badge: "ZERO",
    image: "https://img.79plus.co.kr/megahp/manager/upload/menu/20250320002931_1742398171188_QX5SewCVs4.jpg",
    description: "타우린 1,000mg을 담은 제로 칼로리 에너지드링크맛 에이드",
    allergy: "없음",
    categories: ["recommended", "tea-ade"],
    temperatures: [{ id: "ice", label: "ICE", cupSize: "710ml" }],
    caffeineOptions: [{ id: "regular", label: "기본" }],
    supportsIceControl: true,
    supportsSweetness: true,
    priceMap: {
      "ice|regular": 3000,
    },
  },
  {
    id: "blueberry-yogurt-smoothie",
    name: "블루베리요거트스무디",
    badge: "인기",
    image: "https://img.79plus.co.kr/megahp/manager/upload/menu/20250320003134_1742398294871_z9t_oXfbA6.jpg",
    description: "새콤달콤한 블루베리와 산뜻한 요거트가 조화로운 스무디",
    allergy: "우유",
    categories: ["recommended", "smoothie-juice"],
    temperatures: [{ id: "ice", label: "ICE", cupSize: "591ml" }],
    caffeineOptions: [{ id: "regular", label: "기본" }],
    supportsIceControl: true,
    supportsSweetness: true,
    priceMap: {
      "ice|regular": 3900,
    },
  },
  {
    id: "gold-kiwi-juice",
    name: "골드키위주스",
    badge: "추천",
    image: "https://img.79plus.co.kr/megahp/manager/upload/menu/20250320003451_1742398491079_wWQva965Sn.jpg",
    description: "프리미엄 골드키위에 밀크씨슬을 더한 블렌딩 주스",
    allergy: "없음",
    categories: ["recommended", "smoothie-juice"],
    temperatures: [{ id: "ice", label: "ICE", cupSize: "591ml" }],
    caffeineOptions: [{ id: "regular", label: "기본" }],
    supportsIceControl: true,
    supportsSweetness: true,
    priceMap: {
      "ice|regular": 4000,
    },
  },
  {
    id: "big-mega-caffe-latte",
    name: "왕메가카페라떼",
    badge: "BIG",
    image: "https://img.79plus.co.kr/megahp/manager/upload/menu/20250320004326_1742399006488_yI4cvwXy6N.jpg",
    description: "진한 에스프레소와 부드러운 우유가 어우러진 왕메가 사이즈 라떼",
    allergy: "우유",
    categories: ["recommended", "coffee"],
    temperatures: [{ id: "ice", label: "ICE", cupSize: "946ml" }],
    caffeineOptions: [
      { id: "regular", label: "기본" },
      { id: "decaf", label: "디카페인" },
    ],
    supportsIceControl: true,
    supportsSweetness: false,
    priceMap: {
      "ice|regular": 4400,
      "ice|decaf": 5900,
    },
  },
];

const STATIC_OPTION_GROUPS = {
  iceLevel: {
    key: "iceLevel",
    label: "얼음 양",
    options: [
      { id: "normal", label: "보통" },
      { id: "less", label: "적게" },
    ],
  },
  sweetness: {
    key: "sweetness",
    label: "당도",
    options: [
      { id: "normal", label: "기본" },
      { id: "light", label: "덜 달게" },
    ],
  },
};

const state = {
  activeCategory: "recommended",
  searchTerm: "",
  cart: [],
  remainingSeconds: 117,
  timerId: null,
  activeItemId: null,
  optionSelections: {},
};

const categoryRail = document.getElementById("category-rail");
const productGrid = document.getElementById("product-grid");
const cartList = document.getElementById("cart-list");
const itemCount = document.getElementById("item-count");
const totalPrice = document.getElementById("total-price");
const timerValue = document.getElementById("timer-value");
const currentCategoryTitle = document.getElementById("current-category-title");
const clearCartButton = document.getElementById("clear-cart-button");
const checkoutButton = document.getElementById("checkout-button");
const sourceNoteButton = document.getElementById("source-note-button");
const searchInput = document.getElementById("search-input");
const optionModal = document.getElementById("option-modal");
const optionImage = document.getElementById("option-image");
const optionName = document.getElementById("option-name");
const optionDescription = document.getElementById("option-description");
const optionCupSize = document.getElementById("option-cup-size");
const optionAllergy = document.getElementById("option-allergy");
const optionGroups = document.getElementById("option-groups");
const optionTotalPrice = document.getElementById("option-total-price");
const closeOptionButton = document.getElementById("close-option-button");
const addToCartButton = document.getElementById("add-to-cart-button");
const checkoutModal = document.getElementById("checkout-modal");
const checkoutSummary = document.getElementById("checkout-summary");
const checkoutTotalPrice = document.getElementById("checkout-total-price");
const closeCheckoutButton = document.getElementById("close-checkout-button");
const confirmCheckoutButton = document.getElementById("confirm-checkout-button");
const productCardTemplate = document.getElementById("product-card-template");
const cartItemTemplate = document.getElementById("cart-item-template");
const categoryButtonTemplate = document.getElementById("category-button-template");

const formatPrice = (value) => `${value.toLocaleString("ko-KR")}원`;

function getActiveItem() {
  return MENU_ITEMS.find((item) => item.id === state.activeItemId) || null;
}

function getVisibleItems() {
  return MENU_ITEMS.filter((item) => {
    const matchesCategory = item.categories.includes(state.activeCategory);
    const matchesSearch =
      state.searchTerm === "" ||
      item.name.toLowerCase().includes(state.searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });
}

function getDefaultSelections(item) {
  const selections = {
    temperature: item.temperatures[0].id,
    caffeine: item.caffeineOptions[0].id,
  };

  if (item.supportsIceControl && item.temperatures.some((temp) => temp.id === "ice")) {
    selections.iceLevel = "normal";
  }

  if (item.supportsSweetness) {
    selections.sweetness = "normal";
  }

  return selections;
}

function getCurrentSelections(item) {
  return sanitizeSelections(item, state.optionSelections[item.id] || getDefaultSelections(item));
}

function sanitizeSelections(item, selections) {
  const nextSelections = { ...selections };

  if (nextSelections.temperature !== "ice") {
    delete nextSelections.iceLevel;
  }

  if (!item.supportsSweetness) {
    delete nextSelections.sweetness;
  }

  return nextSelections;
}

function getVariantPrice(item, selections) {
  const key = `${selections.temperature}|${selections.caffeine}`;
  return item.priceMap[key] ?? Object.values(item.priceMap)[0];
}

function getCupSize(item, selections) {
  const matchedTemperature = item.temperatures.find(
    (temperature) => temperature.id === selections.temperature,
  );

  return matchedTemperature ? matchedTemperature.cupSize : item.temperatures[0].cupSize;
}

function getItemImage(item, selections) {
  if (!item.imagesByTemperature) {
    return item.image;
  }

  return item.imagesByTemperature[selections.temperature] || item.image;
}

function getSummaryOptions(item, selections) {
  const labels = [];
  const temperature = item.temperatures.find((entry) => entry.id === selections.temperature);
  const caffeine = item.caffeineOptions.find((entry) => entry.id === selections.caffeine);

  if (temperature) {
    labels.push(temperature.label);
  }

  if (caffeine && caffeine.id !== "regular") {
    labels.push(caffeine.label);
  }

  if (selections.temperature === "ice" && selections.iceLevel) {
    const iceOption = STATIC_OPTION_GROUPS.iceLevel.options.find(
      (entry) => entry.id === selections.iceLevel,
    );
    if (iceOption) {
      labels.push(`얼음 ${iceOption.label}`);
    }
  }

  if (selections.sweetness) {
    const sweetnessOption = STATIC_OPTION_GROUPS.sweetness.options.find(
      (entry) => entry.id === selections.sweetness,
    );
    if (sweetnessOption) {
      labels.push(`당도 ${sweetnessOption.label}`);
    }
  }

  labels.push(getCupSize(item, selections));
  return labels.join(" · ");
}

function renderCategories() {
  categoryRail.innerHTML = "";

  CATEGORIES.forEach((category) => {
    const fragment = categoryButtonTemplate.content.cloneNode(true);
    const button = fragment.querySelector(".category-button");

    button.textContent = category.label;
    button.classList.toggle("is-active", category.id === state.activeCategory);
    button.addEventListener("click", () => {
      state.activeCategory = category.id;
      renderCategories();
      renderProducts();
    });

    categoryRail.appendChild(fragment);
  });
}

function renderProducts() {
  const visibleItems = getVisibleItems();
  const activeCategory = CATEGORIES.find((category) => category.id === state.activeCategory);
  currentCategoryTitle.textContent = activeCategory ? `${activeCategory.label} 메뉴` : "메뉴";
  productGrid.innerHTML = "";

  if (visibleItems.length === 0) {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";
    emptyState.innerHTML = "검색 결과가 없습니다.<br>다른 키워드로 다시 확인해 주세요.";
    productGrid.appendChild(emptyState);
    return;
  }

  visibleItems.forEach((item) => {
    const fragment = productCardTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".product-card");
    const defaultSelections = getDefaultSelections(item);

    fragment.querySelector(".product-image").src = item.image;
    fragment.querySelector(".product-image").alt = item.name;
    fragment.querySelector(".product-tag").textContent = item.badge;
    fragment.querySelector(".product-name").textContent = item.name;
    fragment.querySelector(".product-meta").textContent = getSummaryOptions(item, defaultSelections);
    fragment.querySelector(".product-price").textContent = formatPrice(
      getVariantPrice(item, defaultSelections),
    );

    card.addEventListener("click", () => openOptionModal(item.id));
    productGrid.appendChild(fragment);
  });
}

function renderCart() {
  cartList.innerHTML = "";

  if (state.cart.length === 0) {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";
    emptyState.innerHTML = "상품을 선택하면 주문 내역이 이곳에 표시됩니다.";
    cartList.appendChild(emptyState);
  } else {
    state.cart.forEach((cartItem) => {
      const fragment = cartItemTemplate.content.cloneNode(true);
      const minusButton = fragment.querySelector(".minus");
      const plusButton = fragment.querySelector(".plus");

      fragment.querySelector(".cart-name").textContent = cartItem.name;
      fragment.querySelector(".cart-options").textContent = cartItem.optionText;
      fragment.querySelector(".cart-quantity").textContent = `${cartItem.quantity}`;
      fragment.querySelector(".cart-price").textContent = formatPrice(
        cartItem.unitPrice * cartItem.quantity,
      );

      minusButton.addEventListener("click", () => updateCartQuantity(cartItem.key, -1));
      plusButton.addEventListener("click", () => updateCartQuantity(cartItem.key, 1));

      cartList.appendChild(fragment);
    });
  }

  const totals = getCartTotals();
  itemCount.textContent = `${totals.count}개`;
  totalPrice.textContent = formatPrice(totals.price);
}

function getCartTotals() {
  return state.cart.reduce(
    (accumulator, item) => {
      accumulator.count += item.quantity;
      accumulator.price += item.unitPrice * item.quantity;
      return accumulator;
    },
    { count: 0, price: 0 },
  );
}

function updateCartQuantity(key, changeAmount) {
  const cartItem = state.cart.find((item) => item.key === key);
  if (!cartItem) {
    return;
  }

  cartItem.quantity += changeAmount;
  if (cartItem.quantity <= 0) {
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

function getVisibleOptionGroups(item, selections) {
  const groups = [
    {
      key: "temperature",
      label: "온도",
      options: item.temperatures,
    },
  ];

  if (item.caffeineOptions.length > 1) {
    groups.push({
      key: "caffeine",
      label: "원두",
      options: item.caffeineOptions,
    });
  }

  if (item.supportsIceControl && selections.temperature === "ice") {
    groups.push(STATIC_OPTION_GROUPS.iceLevel);
  }

  if (item.supportsSweetness) {
    groups.push(STATIC_OPTION_GROUPS.sweetness);
  }

  return groups;
}

function renderOptionModal() {
  const item = getActiveItem();
  if (!item) {
    return;
  }

  const selections = getCurrentSelections(item);
  const groups = getVisibleOptionGroups(item, selections);

  optionImage.src = getItemImage(item, selections);
  optionImage.alt = item.name;
  optionName.textContent = item.name;
  optionDescription.textContent = item.description;
  optionCupSize.textContent = getCupSize(item, selections);
  optionAllergy.textContent = item.allergy;
  optionTotalPrice.textContent = formatPrice(getVariantPrice(item, selections));
  optionGroups.innerHTML = "";

  groups.forEach((group) => {
    const wrapper = document.createElement("section");
    const title = document.createElement("h4");
    const choices = document.createElement("div");

    wrapper.className = "option-group";
    title.textContent = group.label;
    choices.className = "choice-list";

    group.options.forEach((option) => {
      const button = document.createElement("button");
      const label = option.label || option.id.toUpperCase();

      button.type = "button";
      button.className = "choice-button";
      button.textContent = label;
      button.classList.toggle("is-active", selections[group.key] === option.id);

      button.addEventListener("click", () => {
        state.optionSelections[item.id] = sanitizeSelections(item, {
          ...selections,
          [group.key]: option.id,
        });
        renderOptionModal();
      });

      choices.appendChild(button);
    });

    wrapper.appendChild(title);
    wrapper.appendChild(choices);
    optionGroups.appendChild(wrapper);
  });
}

function addActiveItemToCart() {
  const item = getActiveItem();
  if (!item) {
    return;
  }

  const selections = sanitizeSelections(item, getCurrentSelections(item));
  const unitPrice = getVariantPrice(item, selections);
  const optionText = getSummaryOptions(item, selections);
  const key = `${item.id}|${JSON.stringify(selections)}`;
  const existingItem = state.cart.find((entry) => entry.key === key);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.cart.push({
      key,
      itemId: item.id,
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
    window.alert("먼저 메뉴를 장바구니에 담아 주세요.");
    return;
  }

  const totals = getCartTotals();
  checkoutSummary.innerHTML = "";

  state.cart.forEach((item) => {
    const row = document.createElement("div");
    row.className = "checkout-line";
    row.innerHTML = `
      <strong>${item.name} x ${item.quantity}</strong>
      <p>${item.optionText}<br>${formatPrice(item.unitPrice * item.quantity)}</p>
    `;
    checkoutSummary.appendChild(row);
  });

  checkoutTotalPrice.textContent = formatPrice(totals.price);
  checkoutModal.classList.remove("hidden");
}

function closeCheckoutModal() {
  checkoutModal.classList.add("hidden");
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
      window.clearInterval(state.timerId);
      state.cart = [];
      resetTimer();
      renderCart();
      window.alert("주문 시간이 만료되어 장바구니를 비웠습니다.");
      startTimer();
    }
  }, 1000);
}

function initializeEvents() {
  clearCartButton.addEventListener("click", () => {
    state.cart = [];
    resetTimer();
    renderCart();
  });

  checkoutButton.addEventListener("click", openCheckoutModal);
  closeCheckoutButton.addEventListener("click", closeCheckoutModal);
  closeOptionButton.addEventListener("click", closeOptionModal);
  addToCartButton.addEventListener("click", addActiveItemToCart);

  confirmCheckoutButton.addEventListener("click", () => {
    closeCheckoutModal();
    window.alert("현재는 프런트엔드 프로토타입입니다. 다음 단계에서 주문 API와 결제 모듈을 연결하면 됩니다.");
  });

  sourceNoteButton.addEventListener("click", () => {
    window.alert(
      "공식 메가MGC커피 메뉴 페이지의 메뉴명, 용량, HOT/ICE, 이미지 정보를 기준으로 구성했습니다. 가격은 2025~2026 온라인 교환권/기사에 노출된 값을 반영한 프로토타입용 기준값이라 매장별로 달라질 수 있습니다.",
    );
  });

  searchInput.addEventListener("input", (event) => {
    state.searchTerm = event.target.value.trim();
    renderProducts();
  });

  optionModal.addEventListener("click", (event) => {
    if (event.target === optionModal) {
      closeOptionModal();
    }
  });

  checkoutModal.addEventListener("click", (event) => {
    if (event.target === checkoutModal) {
      closeCheckoutModal();
    }
  });

  document.querySelectorAll(".mode-chip").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".mode-chip").forEach((entry) => {
        entry.classList.remove("is-active");
      });
      button.classList.add("is-active");
    });
  });
}

function initializeApp() {
  renderCategories();
  renderProducts();
  renderCart();
  resetTimer();
  startTimer();
  initializeEvents();
}

initializeApp();
