const products = [
  {
    id: "espresso",
    name: "(ICE) 아메리카노",
    category: "커피",
    price: 3000,
    badge: "인기",
    theme: "latte",
  },
  {
    id: "coffee-latte",
    name: "(ICE) 카페라떼",
    category: "커피",
    price: 3700,
    badge: "추천",
    theme: "latte",
  },
  {
    id: "hazelnut",
    name: "(ICE) 헤이즐넛 라떼",
    category: "커피",
    price: 3900,
    badge: "신메뉴",
    theme: "latte",
  },
  {
    id: "sweet-potato",
    name: "꿀고구마 라떼",
    category: "시그니처",
    price: 4200,
    badge: "BEST",
    theme: "dessert",
  },
  {
    id: "peach-ice-tea",
    name: "(ICE) 복숭아아이스티",
    category: "티",
    price: 2700,
    badge: "인기",
    theme: "tea",
  },
  {
    id: "decaf-americano",
    name: "(HOT) 디카페인 아메리카노",
    category: "디카페인",
    price: 3300,
    badge: "추천",
    theme: "latte",
  },
  {
    id: "decaf-latte",
    name: "(ICE) 디카페인 카페라떼",
    category: "디카페인",
    price: 3900,
    badge: "인기",
    theme: "latte",
  },
  {
    id: "lemon-ade",
    name: "(ICE) 레몬에이드",
    category: "에이드",
    price: 3500,
    badge: "상큼",
    theme: "soda",
  },
  {
    id: "yuja-tea",
    name: "(HOT) 유자차",
    category: "티",
    price: 3200,
    badge: "HOT",
    theme: "tea",
  },
  {
    id: "cookie-frappe",
    name: "쿠키프라페",
    category: "프라페",
    price: 4400,
    badge: "BEST",
    theme: "dessert",
  },
  {
    id: "strawberry-latte",
    name: "딸기라떼",
    category: "음료",
    price: 3900,
    badge: "시즌",
    theme: "dessert",
  },
  {
    id: "mint-tea",
    name: "(HOT) 페퍼민트티",
    category: "티",
    price: 3000,
    badge: "HOT",
    theme: "tea",
  },
  {
    id: "bagel",
    name: "플레인 베이글",
    category: "푸드",
    price: 2500,
    badge: "푸드",
    theme: "dessert",
  },
  {
    id: "croffle",
    name: "카라멜 크로플",
    category: "푸드",
    price: 3900,
    badge: "디저트",
    theme: "dessert",
  },
];

const state = {
  activeCategory: "전체",
  searchTerm: "",
  cart: [],
  remainingSeconds: 117,
  timerId: null,
};

const categoryStrip = document.getElementById("category-strip");
const productGrid = document.getElementById("product-grid");
const cartList = document.getElementById("cart-list");
const itemCount = document.getElementById("item-count");
const totalPrice = document.getElementById("total-price");
const timerValue = document.getElementById("timer-value");
const clearCartButton = document.getElementById("clear-cart-button");
const checkoutButton = document.getElementById("checkout-button");
const checkoutModal = document.getElementById("checkout-modal");
const modalSummary = document.getElementById("modal-summary");
const closeModalButton = document.getElementById("close-modal-button");
const fakePayButton = document.getElementById("fake-pay-button");
const searchInput = document.getElementById("search-input");
const productCardTemplate = document.getElementById("product-card-template");
const cartItemTemplate = document.getElementById("cart-item-template");

const formatPrice = (value) => `${value.toLocaleString("ko-KR")}원`;

function getCategories() {
  return ["전체", ...new Set(products.map((product) => product.category))];
}

function getFilteredProducts() {
  return products.filter((product) => {
    const categoryMatch =
      state.activeCategory === "전체" || product.category === state.activeCategory;
    const searchMatch =
      state.searchTerm === "" ||
      product.name.toLowerCase().includes(state.searchTerm.toLowerCase());

    return categoryMatch && searchMatch;
  });
}

function resetTimer() {
  state.remainingSeconds = 117;
  renderTimer();
}

function renderTimer() {
  timerValue.textContent = `${state.remainingSeconds}초`;
}

function startTimer() {
  if (state.timerId) {
    window.clearInterval(state.timerId);
  }

  state.timerId = window.setInterval(() => {
    state.remainingSeconds -= 1;
    renderTimer();

    if (state.remainingSeconds <= 0) {
      window.clearInterval(state.timerId);
      state.timerId = null;
      state.cart = [];
      resetTimer();
      renderCart();
      window.alert("주문 시간이 만료되어 장바구니를 비웠습니다.");
    }
  }, 1000);
}

function renderCategories() {
  categoryStrip.innerHTML = "";

  getCategories().forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = category;
    button.className = "category-button";

    if (category === state.activeCategory) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      state.activeCategory = category;
      syncServiceTabs();
      renderCategories();
      renderProducts();
    });

    categoryStrip.appendChild(button);
  });
}

function syncServiceTabs() {
  document.querySelectorAll(".service-tab").forEach((tab) => {
    const isActive = tab.dataset.service === state.activeCategory;
    tab.classList.toggle("active", isActive);
  });
}

function renderProducts() {
  const filteredProducts = getFilteredProducts();
  productGrid.innerHTML = "";

  if (filteredProducts.length === 0) {
    const emptyState = document.createElement("div");
    emptyState.className = "cart-empty";
    emptyState.innerHTML = "검색 결과가 없습니다.<br>다른 키워드나 카테고리를 선택해 주세요.";
    productGrid.appendChild(emptyState);
    return;
  }

  filteredProducts.forEach((product) => {
    const fragment = productCardTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".product-card");

    card.classList.add(`theme-${product.theme}`);
    fragment.querySelector(".badge").textContent = product.badge;
    fragment.querySelector(".product-category").textContent = product.category;
    fragment.querySelector(".product-name").textContent = product.name;
    fragment.querySelector(".product-price").textContent = formatPrice(product.price);

    card.addEventListener("click", () => addToCart(product.id));
    productGrid.appendChild(fragment);
  });
}

function addToCart(productId) {
  const existingItem = state.cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    const product = products.find((item) => item.id === productId);

    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  }

  resetTimer();
  renderCart();
}

function updateQuantity(productId, delta) {
  const targetItem = state.cart.find((item) => item.id === productId);

  if (!targetItem) {
    return;
  }

  targetItem.quantity += delta;

  if (targetItem.quantity <= 0) {
    state.cart = state.cart.filter((item) => item.id !== productId);
  }

  resetTimer();
  renderCart();
}

function getCartTotals() {
  return state.cart.reduce(
    (accumulator, item) => {
      accumulator.count += item.quantity;
      accumulator.price += item.price * item.quantity;
      return accumulator;
    },
    { count: 0, price: 0 },
  );
}

function renderCart() {
  cartList.innerHTML = "";

  if (state.cart.length === 0) {
    const emptyState = document.createElement("div");
    emptyState.className = "cart-empty";
    emptyState.innerHTML = "상품을 선택하면 이 영역에 주문 내역이 표시됩니다.";
    cartList.appendChild(emptyState);
  } else {
    state.cart.forEach((item) => {
      const fragment = cartItemTemplate.content.cloneNode(true);
      fragment.querySelector(".cart-item-name").textContent = item.name;
      fragment.querySelector(".cart-item-quantity").textContent = `${item.quantity}`;
      fragment.querySelector(".cart-item-price").textContent = formatPrice(item.price * item.quantity);

      const minusButton = fragment.querySelector(".minus");
      const plusButton = fragment.querySelector(".plus");

      minusButton.addEventListener("click", (event) => {
        event.stopPropagation();
        updateQuantity(item.id, -1);
      });

      plusButton.addEventListener("click", (event) => {
        event.stopPropagation();
        updateQuantity(item.id, 1);
      });

      cartList.appendChild(fragment);
    });
  }

  const totals = getCartTotals();
  itemCount.textContent = `${totals.count}개`;
  totalPrice.textContent = formatPrice(totals.price);
}

function openCheckoutModal() {
  if (state.cart.length === 0) {
    window.alert("먼저 상품을 장바구니에 담아 주세요.");
    return;
  }

  const totals = getCartTotals();
  const summaryLines = state.cart.map(
    (item) => `${item.name} x ${item.quantity} = ${formatPrice(item.price * item.quantity)}`,
  );

  summaryLines.push(`<strong>총합: ${formatPrice(totals.price)}</strong>`);
  modalSummary.innerHTML = summaryLines.join("<br>");
  checkoutModal.classList.remove("hidden");
}

function closeCheckoutModal() {
  checkoutModal.classList.add("hidden");
}

function initializeEvents() {
  clearCartButton.addEventListener("click", () => {
    state.cart = [];
    resetTimer();
    renderCart();
  });

  checkoutButton.addEventListener("click", openCheckoutModal);
  closeModalButton.addEventListener("click", closeCheckoutModal);

  fakePayButton.addEventListener("click", () => {
    closeCheckoutModal();
    window.alert("결제 연동 전 단계입니다. 다음 구현에서는 주문 API와 결제 모듈을 연결하면 됩니다.");
  });

  checkoutModal.addEventListener("click", (event) => {
    if (event.target === checkoutModal) {
      closeCheckoutModal();
    }
  });

  searchInput.addEventListener("input", (event) => {
    state.searchTerm = event.target.value.trim();
    renderProducts();
  });

  document.querySelectorAll(".service-tab").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeCategory = button.dataset.service || "전체";
      syncServiceTabs();
      renderCategories();
      renderProducts();
    });
  });

  document.querySelectorAll(".chip").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".chip").forEach((chip) => chip.classList.remove("chip-active"));
      button.classList.add("chip-active");
    });
  });
}

function initializeApp() {
  syncServiceTabs();
  renderCategories();
  renderProducts();
  renderCart();
  renderTimer();
  startTimer();
  initializeEvents();
}

initializeApp();
