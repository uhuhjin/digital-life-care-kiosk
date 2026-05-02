const MAIN_TABS = [
  {
    id: "new",
    label: "신메뉴",
    subTabs: [{ id: "featured", label: "시즌메뉴" }],
  },
  {
    id: "recommended",
    label: "추천메뉴",
    subTabs: [{ id: "espresso", label: "에스프레소" }],
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

const MENU_IMAGE_DIR = "메가커피_이미지/menu";

const MENU_ITEMS = [
  {
    id: "ice-mega-ricano",
    name: "(ICE)메가리카노",
    price: 3000,
    badge: "베스트",
    visualType: "drink-iced-dark",
    description: "깊고 진한 메가MGC커피 아메리카노를 '960ml' 더 큼직하게 즐길 수 있는 대용량 커피.",
    image: `${MENU_IMAGE_DIR}/menu_(ICE)메가리카노.png`,
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
    description: "[기본2샷]메가MGC커피 블렌드 원두로 추출한 에스프레소에 물을 더해, 풍부한 바디감을 느낄 수 있는 스탠다드 커피.",
    image: `${MENU_IMAGE_DIR}/menu_(ICE)아메리카노.png`,
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
    description: "우리 할머니께서 즐겨드시던 달달한 믹스 커피 스타일로 만든 메가MGC커피만의 시원한 커피 음료",
    image: `${MENU_IMAGE_DIR}/menu_할메가커피.png`,
    mainTabs: ["recommended", "coffee"],
    subTabs: ["espresso"],
    optionSet: "icedCoffee",
    supportsDecaf: false,
  },
  {
    id: "ice-honey-americano",
    name: "(ICE)꿀아메리카노",
    price: 2700,
    badge: "",
    visualType: "drink-iced-dark",
    description: "아메리카노의 묵직한 바디감에 달콤한 사양벌꿀이 소프트하게 어우러진 커피.",
    image: `${MENU_IMAGE_DIR}/menu_(ICE)꿀아메리카노.png`,
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
    description: "아메리카노에 바닐라의 부드러운 향과 달콤함을 조화롭게 담아낸 커피.",
    image: `${MENU_IMAGE_DIR}/menu_(ICE)바닐라아메리카노.png`,
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
    description: "아메리카노에 헤이즐넛의 풍성한 향과 달콤함을 담아 향긋하고 부드럽게 즐기는 커피.",
    image: `${MENU_IMAGE_DIR}/menu_(ICE)헤이즐넛아메리카노.png`,
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
    description: "[기본2샷]메가MGC커피 블렌드 원두로 추출한 에스프레소에 물을 더해, 풍부한 바디감을 느낄 수 있는 스탠다드 커피.",
    image: `${MENU_IMAGE_DIR}/menu_(HOT)아메리카노.png`,
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
    description: "아메리카노의 묵직한 바디감에 달콤한 사양벌꿀이 소프트하게 어우러진 커피.",
    image: `${MENU_IMAGE_DIR}/menu_(HOT)꿀아메리카노.png`,
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
    description: "아메리카노에 바닐라의 부드러운 향과 달콤함을 조화롭게 담아낸 커피.",
    image: `${MENU_IMAGE_DIR}/menu_(HOT)바닐라아메리카노.png`,
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
    description: "아메리카노에 헤이즐넛의 풍성한 향과 달콤함을 담아 향긋하고 부드럽게 즐기는 커피.",
    image: `${MENU_IMAGE_DIR}/menu_(HOT)헤이즐넛아메리카노.png`,
    mainTabs: ["recommended", "coffee"],
    subTabs: ["espresso"],
    optionSet: "hotCoffee",
    supportsDecaf: true,
  },
  {
    id: "espresso",
    name: "에스프레소",
    price: 1500,
    badge: "",
    visualType: "drink-espresso",
    description: "메가MGC커피 원두의 향미를 온전히 즐길 수 있는 에스프레소",
    image: `${MENU_IMAGE_DIR}/menu_에스프레소.png`,
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
    description: "더블샷으로 더욱 진하게 즐길 수 있는 에스프레소",
    image: `${MENU_IMAGE_DIR}/menu_에스프레소도피오.png`,
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
    description: "진한 에스프레소와 부드러운 우유가 어우러져 고소한 풍미를 완성한 라떼.",
    image: `${MENU_IMAGE_DIR}/menu_카페라떼.png`,
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
    description: "바닐라의 짙은 향과 풍부한 폼 밀크의 조화가 인상적인 달콤한 라떼.",
    image: `${MENU_IMAGE_DIR}/menu_바닐라라떼.png`,
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
    description: "에스프레소 위에 올려진 우유 거품, 그리고 시나몬 파우더로 완성한 조화로운 맛의 커피.",
    image: `${MENU_IMAGE_DIR}/menu_카푸치노.png`,
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
    description: "진한 에스프레소와 부드러운 우유가 어우러져 고소한 풍미를 완성한 메가MGC커피만의 왕메가사이즈 라떼",
    image: `${MENU_IMAGE_DIR}/menu_왕메가카페라떼.png`,
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
    description: "향과 풍미 그대로 카페인만을 낮춰 민감한 분들도 안심하고 매일매일 즐길 수 있는 디카페인 커피",
    image: `${MENU_IMAGE_DIR}/menu_(ICE)디카페인아메리카노.png`,
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
    description: "향과 풍미 그대로 카페인만을 낮춰 민감한 분들도 안심하고 매일매일 즐길 수 있는 디카페인 커피",
    image: `${MENU_IMAGE_DIR}/menu_(HOT)디카페인아메리카노.png`,
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
    description: "디카페인 에스프레소와 부드러운 우유가 어우러져 고소한 풍미를 완성한 라떼.",
    image: `${MENU_IMAGE_DIR}/menu_디카페인카페라떼.png`,
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
    description: "지친 현대인들에게 필요한 한 잔의 에너지! 타우린 1,000mg이 들어가 활력이 충전되는 에너지드링크맛 제로 칼로리 에이드 *대체당(알룰로스 등)을 과도하게 섭취 시 개인에 따라 복통 및 설사 등을 유발 할 수 있으니 주의하세요.",
    image: `${MENU_IMAGE_DIR}/menu_제로부스트에이드.png`,
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
    description: "새콤달콤한 블루베리와 산뜻한 요거트가 만나 조화로운 스무디",
    image: `${MENU_IMAGE_DIR}/menu_블루베리요거트스무디.png`,
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
    description: "저당으로 부담은 덜고, 새콤달콤한 맛은 더 풍부하게! 꿀처럼 달콤한 배의 시원하고 깨끗한 단맛에 설탕·당류·지방 3 ZERO 야쿠르트 XO 2병이 들어간 리프레쉬 한 잔",
    image: `${MENU_IMAGE_DIR}/menu_저당꿀배XO야구르트.png`,
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
    description: "상큼달콤한 유자청과 은은하게 매콤한 생강의 풍미를 조화롭게 담아낸 겨울 한정 과일 티",
    image: `${MENU_IMAGE_DIR}/menu_유자생강차.png`,
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
    description: "은은한 자스민 티 위에 달콤한 망고 폼을 올려 산뜻함과 부드러움을 함께 즐길 수 있는 아이스 티 음료",
    image: `${MENU_IMAGE_DIR}/menu_망고폼자스민티플레저.png`,
    mainTabs: ["tea"],
    subTabs: ["tea"],
    optionSet: "coldDrink",
    supportsDecaf: false,
  },
  {
    id: "strawberry-yogurt-macaron",
    name: "딸기요거트마카롱",
    price: 2800,
    badge: "",
    visualType: "drink-dessert",
    description: "달콤한 꼬끄 사이에 딸기와 요거트 풍미를 담아 상큼하게 즐길 수 있는 마카롱 디저트",
    image: `${MENU_IMAGE_DIR}/menu_딸기요거트마카롱.png`,
    mainTabs: ["food"],
    subTabs: ["dessert"],
    optionSet: "dessert",
    supportsDecaf: false,
  },
  {
    id: "ice-honey-waangshu",
    name: "아이스허니와앙슈",
    price: 3500,
    badge: "",
    visualType: "drink-dessert",
    description: "차갑게 즐기는 슈 타입 디저트에 달콤한 허니 풍미를 더해 가볍게 즐기기 좋은 디저트",
    image: `${MENU_IMAGE_DIR}/menu_아이스허니와앙슈.png`,
    mainTabs: ["food"],
    subTabs: ["dessert"],
    optionSet: "dessert",
    supportsDecaf: false,
  },
  {
    id: "cheesecake",
    name: "치즈케익",
    price: 4200,
    badge: "",
    visualType: "drink-dessert",
    description: "부드럽고 진한 치즈 풍미를 담아 커피와 함께 즐기기 좋은 케이크 디저트",
    image: `${MENU_IMAGE_DIR}/menu_치즈케익.png`,
    mainTabs: ["food"],
    subTabs: ["dessert"],
    optionSet: "dessert",
    supportsDecaf: false,
  },
  {
    id: "patbingsu-gelato-parfait",
    name: "팥빙 젤라또 파르페",
    price: 4500,
    badge: "",
    visualType: "drink-dessert",
    description: "다시 만나는 여름, 컵빙이 돌아왔다! 쫀득한 팥 젤라또와 팥, 떡, 바삭한 믹스씨리얼이 조화를 이루는, 우유빙수의 풍미를 한컵에 담은 여름 시즌 한정 파르페.",
    image: `${MENU_IMAGE_DIR}/menu_팥빙젤라또파르페.png`,
    mainTabs: ["food"],
    subTabs: ["dessert"],
    optionSet: "dessert",
    supportsDecaf: false,
  },
  {
    id: "plain-croffle",
    name: "플레인크로플",
    price: 3300,
    badge: "",
    visualType: "drink-dessert",
    description: "겉은 바삭하고 속은 쫄깃한 식감을 살린 기본 스타일의 크로플 디저트",
    image: `${MENU_IMAGE_DIR}/menu_플레인크로플.png`,
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
    description: "메가MGC커피의 브랜드 감성을 담아 일상에서 실용적으로 사용할 수 있는 텀블러 굿즈",
    image: `${MENU_IMAGE_DIR}/menu_메가텀블러.png`,
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

const kioskScreen = document.querySelector(".kiosk-screen");
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

let responsiveRenderFrame = 0;
let responsiveLayoutKey = "";

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

function getResponsiveLayoutState() {
  if (!kioskScreen) {
    return {
      widthTier: "base",
      heightTier: "base",
      orderLayout: "split",
      columns: 4,
      rows: 3,
      orderSideWidth: 118,
      orderQtyWidth: 64,
      orderPriceWidth: 64,
      orderGap: 8,
    };
  }

  const { width, height } = kioskScreen.getBoundingClientRect();
  const widthTier =
    width <= 300 ? "tight" : width <= 360 ? "narrow" : width <= 420 ? "compact" : "base";
  const heightTier = height <= 560 ? "tight" : height <= 700 ? "compact" : "base";

  let columns = 4;
  if (widthTier === "compact") {
    columns = 3;
  } else if (widthTier === "narrow" || widthTier === "tight") {
    columns = 2;
  }

  let rows = 3;
  if (heightTier === "compact") {
    rows = 2;
  } else if (heightTier === "tight") {
    rows = 1;
  }

  let orderSideWidth = 118;
  let orderQtyWidth = 64;
  let orderPriceWidth = 64;
  let orderGap = 8;

  if (widthTier === "compact") {
    orderSideWidth = 104;
    orderQtyWidth = 56;
    orderPriceWidth = 60;
    orderGap = 6;
  } else if (widthTier === "narrow") {
    orderSideWidth = 96;
    orderQtyWidth = 52;
    orderPriceWidth = 56;
    orderGap = 6;
  } else if (widthTier === "tight") {
    orderSideWidth = 88;
    orderQtyWidth = 48;
    orderPriceWidth = 52;
    orderGap = 4;
  }

  const orderLayout =
    widthTier === "narrow" || widthTier === "tight"
      ? heightTier === "base"
        ? "stacked"
        : "split"
      : "split";

  return {
    widthTier,
    heightTier,
    orderLayout,
    columns,
    rows,
    orderSideWidth,
    orderQtyWidth,
    orderPriceWidth,
    orderGap,
  };
}

function applyResponsiveLayout() {
  if (!kioskScreen) {
    return false;
  }

  const layout = getResponsiveLayoutState();
  const nextKey = JSON.stringify(layout);

  if (nextKey === responsiveLayoutKey) {
    return false;
  }

  responsiveLayoutKey = nextKey;
  kioskScreen.dataset.widthTier = layout.widthTier;
  kioskScreen.dataset.heightTier = layout.heightTier;
  kioskScreen.dataset.orderLayout = layout.orderLayout;
  kioskScreen.style.setProperty("--product-columns", layout.columns);
  kioskScreen.style.setProperty("--product-rows", layout.rows);
  kioskScreen.style.setProperty("--order-side-width", `${layout.orderSideWidth}px`);
  kioskScreen.style.setProperty("--order-qty-width", `${layout.orderQtyWidth}px`);
  kioskScreen.style.setProperty("--order-price-width", `${layout.orderPriceWidth}px`);
  kioskScreen.style.setProperty("--order-gap", `${layout.orderGap}px`);

  return true;
}

function getLayoutMetrics() {
  if (!kioskScreen) {
    return { columns: 4, rows: 3 };
  }

  const styles = window.getComputedStyle(kioskScreen);
  const columns = Number.parseInt(styles.getPropertyValue("--product-columns"), 10) || 4;
  const rows = Number.parseInt(styles.getPropertyValue("--product-rows"), 10) || 3;

  return { columns, rows };
}

function getPageSize() {
  const { columns, rows } = getLayoutMetrics();
  return Math.max(1, columns * rows);
}

function getPagedItems(items) {
  const pageSize = getPageSize();
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const currentPage = Math.min(state.currentPage, totalPages - 1);
  const start = currentPage * pageSize;

  state.currentPage = currentPage;

  return {
    items: items.slice(start, start + pageSize),
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

function applyDrinkVisual(node, item) {
  const visualType = item.visualType;
  const baseClass = node.classList.contains("option-visual") ? "option-visual" : "product-visual";

  node.className = `${baseClass} ${visualType}`;
  node.innerHTML = "";

  if (item.image) {
    node.classList.add("has-photo");
    const img = document.createElement("img");
    img.src = encodeURI(item.image);
    img.alt = item.name;
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover"; // 메뉴 이미지가 꽉 차게 보이도록 설정
    img.addEventListener("error", () => {
      node.classList.remove("has-photo");
      img.remove();
    });
    node.appendChild(img);
  }

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

    applyDrinkVisual(visual, item);
    fragment.querySelector(".product-name").textContent = item.name;
    fragment.querySelector(".product-price").textContent = formatPrice(item.price);

    card.addEventListener("click", () => openOptionModal(item.id));
    productGrid.appendChild(fragment);
  });

  pageIndicator.textContent = `${paged.currentPage + 1} / ${paged.totalPages}`;
  prevPageButton.disabled = paged.currentPage === 0;
  nextPageButton.disabled = paged.currentPage >= paged.totalPages - 1;
}

function queueResponsiveRender() {
  if (responsiveRenderFrame) {
    window.cancelAnimationFrame(responsiveRenderFrame);
  }

  responsiveRenderFrame = window.requestAnimationFrame(() => {
    responsiveRenderFrame = 0;
    applyResponsiveLayout();
    renderProducts();
  });
}

function initializeResponsiveLayout() {
  if (!kioskScreen) {
    return;
  }

  if ("ResizeObserver" in window) {
    const resizeObserver = new ResizeObserver(() => {
      queueResponsiveRender();
    });
    resizeObserver.observe(kioskScreen);
    return;
  }

  window.addEventListener("resize", queueResponsiveRender);
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
  applyDrinkVisual(optionVisual, item);

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
  const resetToHome = () => {
    clearOrderState();
    state.activeMainTab = "recommended";
    state.activeSubTab = "espresso";
    state.currentPage = 0;
    renderMainTabs();
    renderSubTabs();
    renderProducts();
  };

  const headerLogoBtn = document.getElementById("header-logo-btn");
  if (headerLogoBtn) {
    headerLogoBtn.addEventListener("click", resetToHome);
  }

  const homeBtn = document.querySelector(".home-button");
  if (homeBtn) {
    homeBtn.addEventListener("click", resetToHome);
  }

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
  applyResponsiveLayout();
  renderMainTabs();
  renderSubTabs();
  renderProducts();
  renderCart();
  resetTimer();
  startTimer();
  initializeEvents();
  initializeResponsiveLayout();
}

initialize();
