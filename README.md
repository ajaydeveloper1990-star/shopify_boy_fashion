# FABRICA — Shopify Online Store 2.0 Theme

A responsive, monochrome men's fashion storefront built with Shopify Liquid, JSON templates, section schemas, and lightweight vanilla JavaScript.

## Project owner
- **Developer:** Ajay Kumar
- **GitHub:** [@ajaydeveloper1990-star](https://github.com/ajaydeveloper1990-star)
- **Repository:** [shopify_boy_fashion](https://github.com/ajaydeveloper1990-star/shopify_boy_fashion)

## Design direction
FABRICA uses a premium black-and-white visual system with charcoal surfaces, subtle gray borders, editorial typography, generous spacing, large fashion imagery, and restrained motion. Animations respect `prefers-reduced-motion`.

## Theme architecture
```
layout/theme.liquid
templates/
  index.json
  product.json
  collection.json
  cart.json
sections/
  announcement-bar.liquid
  header.liquid
  hero.liquid
  featured-collection.liquid
  footer.liquid
snippets/
  product-card.liquid
assets/
  fabrica.css
  fabrica.js
config/
  settings_schema.json
  settings_data.json
locales/
  en.default.json
```

## Requirements
- Shopify CLI (current stable)
- A Shopify development store
- Products, collections, navigation menus, and images configured in Shopify Admin

## Run locally
1. Install Shopify CLI using Shopify's official instructions: https://shopify.dev/docs/api/shopify-cli
2. Clone this repository:
   ```bash
   git clone https://github.com/ajaydeveloper1990-star/shopify_boy_fashion.git
   cd shopify_boy_fashion
   ```
3. Authenticate and preview against a development store:
   ```bash
   shopify auth login
   shopify theme dev --store your-store.myshopify.com
   ```
4. Validate before sharing:
   ```bash
   shopify theme check
   ```
5. Upload as an unpublished theme for review:
   ```bash
   shopify theme push --unpublished --store your-store.myshopify.com
   ```

Replace `your-store.myshopify.com` with your own development store domain. Never commit credentials or private tokens.

## Shopify Admin setup
- **Products:** Products → Add product. Add product media, descriptions, prices, compare-at prices, options (for example size/color), and inventory.
- **Collections:** Products → Collections. Create collections such as T-Shirts, Hoodies, Sweatshirts, and New Arrivals.
- **Navigation:** Content/Online Store → Navigation (label can vary by Admin version). Assign menus in the Header/Footer section settings.
- **Homepage:** Online Store → Themes → Customize. Add, remove, reorder, and configure sections.
- **Policies and contact details:** configure these in Shopify Admin; link them in the footer menu.
- **Brand assets:** upload logo, hero imagery, and collection images using the relevant Theme Editor settings.

## Included behavior
- Dynamic Shopify product and collection data (no hardcoded product catalog)
- Responsive mobile navigation
- Collection product cards and native Shopify product forms
- Shopify cart and checkout routes
- Accessible focus states and reduced-motion support
- Editable section settings and theme settings
- SEO title, description, canonical URL, Open Graph basics, and product JSON-LD
- Scroll reveal animation with graceful no-JavaScript fallback

## Important scope notes
This repository is a theme starter implementation, not a claim that a live store has been QA-certified. Run Theme Check and test against your actual store, products, market, shipping, discounts, and account configuration before launch. Shopify owns secure checkout, taxes, payment processing, XML sitemap, robots.txt, and much of the customer-account experience. Checkout layouts beyond the standard checkout require Shopify-supported settings/eligibility. Wishlist and reviews require a properly integrated app or a separately implemented solution.

## Testing checklist
- [ ] Run `shopify theme check` and resolve reported issues.
- [ ] Preview at 320px, 375px, 768px, 1024px, and wide desktop.
- [ ] Test menu keyboard access and mobile menu open/close.
- [ ] Test products with multiple variants, unavailable variants, sale prices, and missing images.
- [ ] Add, update, and remove cart items; verify checkout redirects to Shopify.
- [ ] Test collection sorting/filtering after enabling supported Search & Discovery filters in Shopify.
- [ ] Submit contact/newsletter forms and verify Shopify Admin receives submissions/subscribers.
- [ ] Verify title/description, canonical URL, image alt text, and structured data.
- [ ] Run Lighthouse and real-device checks; do not assume scores without measurement.
- [ ] Confirm policy links, shipping rates, taxes, discounts, and payment methods in the store.

## License
No license has been specified. Add a license before redistributing this theme.


## Expanded Section Library

The repository now includes 56 additional section presets organized into **Banners, Collections, Forms, Layout, Products, Storytelling, and Text** (8 per category). See [SECTION-LIBRARY.md](SECTION-LIBRARY.md) for the full inventory, setup notes, and current functionality boundaries. Shared responsive styles and progressive enhancement are in `assets/fabrica-section-library.css` and `assets/fabrica-section-library.js`.
