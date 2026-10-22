# FABRICA Shopify Section Library

This library adds **56 independent Shopify Online Store 2.0 sections**, grouped in the Theme Editor under seven categories: Banners, Collections, Forms, Layout, Products, Storytelling, and Text. Each section is a standalone `.liquid` file with its own preset and editable settings for content, links, color scheme, spacing, and optional reveal animation. Shared styles are in `assets/fabrica-section-library.css`.

## Enable the assets
The theme layout should include these lines near the existing CSS and JavaScript includes:

```liquid
{{ 'fabrica-section-library.css' | asset_url | stylesheet_tag }}
<script src="{{ 'fabrica-section-library.js' | asset_url }}" defer="defer"></script>
```

## Section inventory
- **Banners:** Split Hero, Image Banner, Hero Slideshow, Video Hero, Promo Strip, Editorial Masthead, Countdown Promo, Shop the Campaign.
- **Collections:** Featured Collection, Collection List, Collection Tiles, Shop by Category, Collection Spotlight, Lookbook Collections, Collection Carousel, Category Mosaic.
- **Forms:** Newsletter Signup, Contact Form, Wholesale Inquiry, Size Help Request, Product Notify Form, Style Quiz Form, Appointment Request, Gift Message Form.
- **Layout:** Image With Text, Multicolumn Layout, Image Collage, Logo List, Icon Benefits, Section Divider, Content Spacer, Tabbed Content.
- **Products:** Featured Product, Product Grid, Product Comparison, Bundle Builder, Product Benefits, Product Badges, Complementary Picks, Shop the Look.
- **Storytelling:** Brand Story, Brand Timeline, Customer Testimonials, Press Quotes, Craftsmanship Story, Materials Story, Founder Note, Editorial Lookbook.
- **Text:** Rich Text, Scrolling Text, FAQ Accordion, Text Columns, Product Specifications, Pull Quote, Text With Image, Announcement Text.

## Functional notes
- Collection/product sections display live Shopify product and collection data when configured in Theme Editor.
- Form sections use Shopify's native contact form. They do not independently connect to third-party booking systems, inventory alerts, or quiz recommendation services.
- Countdown, comparison, and bundle-style sections provide presentation foundations; live countdown logic, inventory-aware bundle cart behavior, and recommendation engines need additional implementation before production use.
- Shopify JSON templates support up to 25 sections per template. These are available presets to add selectively, not 56 sections to place on one page.
- Run `shopify theme check` and verify on a development store before publishing.
