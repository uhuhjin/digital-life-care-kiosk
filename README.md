# Mega Kiosk Prototype

## 1. What is included

This folder now contains a front-end-only kiosk prototype inspired by the Mega Coffee ordering flow.

Included files:

- `index.html`: main kiosk page
- `styles.css`: kiosk UI styling
- `app.js`: menu data and interaction logic
- `start-kiosk.ps1`: runs a local server and opens the kiosk in the browser
- `open-kiosk.url`: Windows shortcut that opens the local `index.html` directly

## 2. Current design

The prototype is structured around the same primary flow visible in the reference screenshot:

1. Top brand/header area
2. Service tabs such as recommended, coffee, decaf, beverage, tea, food
3. Category filter and search
4. Product card grid
5. Cart panel with quantity controls
6. Remaining-time block
7. Total price and checkout CTA

This is intentionally implemented as a static client-side prototype so the basic kiosk experience can be reviewed before backend work starts.

## 3. Implemented kiosk behavior

The current prototype supports:

- category switching
- keyword search
- adding items to cart
- increasing/decreasing quantity
- clearing the cart
- total quantity / total price calculation
- countdown timer reset on interaction
- checkout summary modal

Not yet included:

- actual payment
- order persistence
- stock management
- admin screen
- receipt printing
- multilingual content logic
- real product images / CMS

## 4. How to open it right now

### Option A: open the file directly

Double-click `open-kiosk.url`, or open this path in the browser:

`file:///C:/Users/SAMSUNG/Desktop/dlc/index.html`

This works because the current prototype is a pure static page.

### Option B: open it as a local URL

Run this in PowerShell from this folder:

```powershell
.\start-kiosk.ps1
```

That starts a local server and opens:

`http://127.0.0.1:5500`

If you prefer running it manually:

```powershell
python -m http.server 5500
```

Then open:

`http://127.0.0.1:5500`

## 5. How the URL link works

There are two practical URL approaches for a non-deployed prototype:

### File URL

Use a local file path:

`file:///C:/Users/SAMSUNG/Desktop/dlc/index.html`

Pros:

- fastest to test
- no server setup needed

Limitations:

- some browser APIs are restricted on `file://`
- later backend/API integration is harder

### Localhost URL

Run a local web server and use:

`http://127.0.0.1:5500`

Pros:

- closer to a real deployment environment
- better for later API integration
- cleaner URL sharing inside local testing

Recommended for the next step:

Use `localhost` during development, then deploy later to Vercel, Netlify, or your own server.

## 6. Suggested next implementation order

1. Finalize kiosk IA and menu/category policy
2. Replace placeholder visuals with real drink/product assets
3. Add option selection flow (size, temperature, shot, syrup)
4. Add order state storage
5. Connect order API
6. Connect payment module
7. Add kiosk idle/reset logic and admin tools

## 7. Front-end architecture idea

For this prototype, the simplest maintainable structure is:

- `index.html`: layout and templates
- `styles.css`: visual system and responsive kiosk frame
- `app.js`: state, rendering, user interaction

If the project grows, move to:

- `src/data/menu.js`
- `src/components/ProductCard.js`
- `src/components/CartPanel.js`
- `src/pages/KioskPage.js`
- `src/services/orderApi.js`

Then upgrade to React or Vue only when the menu/option complexity actually justifies it.

## 8. Backend connection points later

When backend work starts, connect these events:

- add to cart -> local state + analytics event
- checkout button -> order draft API
- payment success -> order complete API
- timer expiration -> cart reset API or local cleanup
- product list -> menu API or CMS

## 9. Design note

The current UI intentionally uses:

- yellow/brown brand colors similar to the reference
- a large product grid for touch interaction
- a clearly separated cart area
- large buttons and strong totals for kiosk usability

If you want, the next step can be one of these:

1. make it closer to the exact Mega Coffee layout
2. convert it into a React project
3. add a full option-selection popup flow
4. add real product images and category data
