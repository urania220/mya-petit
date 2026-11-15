# MYA PETIT CAFÉ — COMPLETE BRAND & CONTENT INTELLIGENCE

**Purpose:** single consolidated research and design brief for an **unofficial private website prototype**. Read this document before coding. Distinguish [SOURCE FACT], [USER OBSERVATION], [DESIGN INTERPRETATION], [PROPOSAL], and [UNVERIFIED]. Research reflects materials assembled October 2026; not owner-approved brand guidelines.

## A. Business identity and positioning

- [SOURCE FACT] Business: **Mya Petit Café**, an independent breakfast/brunch/lunch café in Funchal, Madeira, Portugal.
- [SOURCE FACT] Publicly listed address: **Rua das Hortas n.º 15, 9050-024 Funchal, Madeira, Portugal**.
- [SOURCE FACT] Public telephone: **+351 291 634 523**; verify prior to public deployment.
- [SOURCE FACT] Public Instagram reference: **@mya_petitcafe** (not `brunch.mya_petit_cafe`, which appears in some downloaded photo filenames). Account ownership/current status requires confirmation.
- [SOURCE FACT] An independent official branded website was not identified in the research pass; this is not absolute proof none exists.
- [SOURCE FACT] Both Portuguese-speaking locals/residents and international visitors are plausible audiences. Menu references exist in Portuguese and English; brunch, pancakes, toasts, wraps, bowls, burgers and drinks are documented as categories historically or in public listings.
- [DESIGN INTERPRETATION] Positioning: **A colorful brunch café with a personal story at its heart**. NOT an official tagline.

## B. Origin and founder story

- [SOURCE FACT, HISTORICAL REPORT] NiT interview dated **23 September 2022** identifies founder Vanessa Pontes Ferreira (sometimes shortened Vanessa Ferreira), describes her architecture background, and reports that the café opened **25 August 2022**.
- [SOURCE FACT, HISTORICAL REPORT] The name **Mya** came from Vanessa's first cat; she named her first business after the cat.
- [SOURCE FACT, HISTORICAL REPORT] The interview discusses a family connection to her love of cooking, and handmade décor; the pink blossom tree was reportedly made with her mother. These are strong story opportunities, but **owner approval is needed** before public storytelling.
- [DESIGN INTERPRETATION] Story arc: personal dream → warm, handmade place → colorful food and moments together. Do not invent dialogue, quotes, emotional details or current owner biography.
- [PROPOSAL] Copy themes: **A Little Color. A Lot of Love.**; **A Little Magic, All Year Round**; **Made with Love**. These are proposed concept copy, NOT verified brand slogans.

## C. Visual identity grounded in the actual supplied images

- [SOURCE IMAGE] `mya_brand_logo_pink_background.jpg`: original downloaded raster brand image, black flowing **Mya** wordmark with small uppercase **PETIT CAFÉ** on pale pink field. Do NOT redraw, retype, stylize or replace the wordmark. The file is not an owner-supplied official vector asset; rights are unverified.
- [SOURCE IMAGE] Pink blossom tree / floral canopy, wicker seating and intimate corners; large pink butterfly ceiling decoration; colorful paper decorations; pink walls; **mint-green counter**; pale wooden tables; white wire/metal chairs; some exposed concrete / black metal shelving. The brand is NOT solely monochrome pink.
- [SOURCE IMAGE] Outdoor terrace/street seating documented by supplied images. **Outdoor seating exists visually**, but availability for reservations, weather policy, capacities and service times are UNVERIFIED.
- [SOURCE IMAGE] Food is vivid, layered, generous and casual: colorful wrap, toast with beet-like pink spread and mushrooms, fruit/yogurt pancakes. Exact dish-name matching against current Uber Eats listings is NOT verified; use generic captions unless verified.
- [DESIGN INTERPRETATION] Core visual language: **Playful Romanticism × Editorial Hospitality**. Whimsical, personal, cheerful, cozy, warm, photogenic, eclectic; polished but not sterile, playful but not childish.
- [DESIGN INTERPRETATION] Brand tension: soft romantic flowers versus structured furniture and industrial details; pastel pink versus mint/teal; homemade food versus sophisticated editorial layouts.
- [PROPOSAL] Palette: blush **#F1D4D9**, warm pink **#EFA5B5**, mint **#A8CFC3**, deep teal **#267F79**, warm cream **#FFF8F2**, near-black **#191719**, fruit red **#E84C55**. These are WEBSITE DESIGN PROPOSALS, NOT official exact brand codes.
- [PROPOSAL] Suggested balance: warm cream ~40%, blush ~30%, neutrals ~15%, mint ~10%, teal/fruit accents ~5%; adapt for legibility and composition.
- [PROPOSAL] Typography: **Fraunces** (expressive editorial display) + **DM Sans** (UI, menu, navigation). These are NOT identified official brand fonts. Use original raster logo as supplied.
- [PROPOSAL] Photography art direction: **bright editorial food photography**, daylight, natural food color, warm material surfaces, portrait image crops and breathing room. Do not use dark moody KK Restaurant aesthetic, stock-photo substitutes, fake dishes, stretched photos or intrusive filters.
- [DESIGN INTERPRETATION] The most valuable recognizable brand assets are the handwritten logo, pink blossom tree, mint counter, colorful dishes, and founder/family story.

## D. Audience and UX needs

- [DESIGN INTERPRETATION] Visitor goals: quickly understand the café, view menu, see food and atmosphere, find address, assess social proof, and express seating/booking preference.
- [DESIGN INTERPRETATION] Audience: tourists needing English, Portuguese speakers, couples/friends/small groups, guests attracted to colorful interiors, some vegetarian/vegan visitors. Do not guarantee dietary safety or accommodations.
- [PROPOSAL] Portuguese default with English toggle; fast mobile navigation; prominent Menu, Directions and Book a Table actions.

## E. Menu — authoritative source and strict limits

- [SOURCE FILE] `data/menu_ubereats_partial_2026-10-30.json` is the **ONLY permitted item/price source** for this prototype.
- [SOURCE LIMITATION] It contains **20 items**, gathered from **search-index-visible Uber Eats material** because the live page blocked access. It is NOT a full menu and not independently confirmed live inventory.
- [SOURCE LIMITATION] Prices are **Uber Eats channel prices in EUR**, NOT verified dine-in prices. Display a clear label near prices: 'Uber Eats listed prices, checked 30 Oct 2026; in-store prices may differ' (translate to PT). Better still, use 'Sample delivery menu' on prototype.
- [SOURCE LIMITATION] Many descriptions are `null`; do NOT fill from historic menus, guess ingredients or assign dietary/allergen badges.
- [SOURCE LIMITATION] `website_category_suggested` is an inferred display grouping, not an official Uber Eats category. Mark internally as inferred.
- [SOURCE LIMITATION] PT original names from JSON; English interface may show faithful translations labeled as translations, not source originals.
- [UNVERIFIED] Actual in-store prices, current full menu, dish availability, dietary labels, allergens and cross-contamination policies.
- [HISTORICAL REFERENCE ONLY] Old paper-menu photos may inspire pink section headers, teal item names, subtle hearts and editorial menu rhythm; **DO NOT import historical prices or extra dishes**.

## F. Space, seating and reservations

- [SOURCE IMAGE] Indoor seating with pink blossom décor; outdoor terrace with tables. Offer visual selection **Indoor / Outdoor** in modal.
- [UNVERIFIED] Booking is actually offered, booking contact/channel, times, capacities, accessibility, seating guarantees, deposit policy.
- [PROPOSAL] Reservation MODAL prototype from all pages: date, illustrative time, party size, indoor/outdoor image-card choice, contact fields as UI-only. No submission, no storage, no confirmation. Clearly label demo.

## G. Seasonal brand behavior

- [USER OBSERVATION] Mya pays special attention to **Halloween, Christmas, Easter, and café anniversaries**, with seasonal decorations and dishes. This is a user observation, not a verified archive of specific events.
- [PROPOSAL] Dedicated 'Seasonal Highlights' with four themes, editable images/copy/status. Display neutral concept placeholders where real seasonal images are not provided. Never manufacture real-event photography, dates, menus, promotions or imply upcoming events are confirmed.
- [SOURCE FACT, HISTORICAL REPORT] Reported opening date 25 August 2022 can be stored as historical reference, but **do not publish a specific anniversary event/date** without confirmation.

## H. Tripadvisor reviews

- [SOURCE PAGE] Public restaurant listing: https://www.tripadvisor.com/Restaurant_Review-g189167-d26842360-Reviews-Mya_Petit_Cafe-Funchal_Madeira_Madeira_Islands.html
- [USER REQUIREMENT] Show **up to 5 genuine five-star reviews** in an elegant scrollable carousel.
- [UNVERIFIED] No set of five individual reviews with independently confirmed **rating=5 + author + date + text + permalink** has been supplied. Therefore do NOT invent reviews, five-star symbols, quotes or reviewer names. Build component and show a clear 'Read reviews on Tripadvisor' link/empty state until verified review records are available. If verifiable records are supplied later, show them with source and rights-appropriate paraphrases/excerpts.
- [PROPOSAL] Manual carousel arrows, pause controls, keyboard and swipe; no on-load scraping, no scraping bypass, no false Tripadvisor endorsement.

## I. Contact, hours and unknowns

- [SOURCE FACT] Rua das Hortas n.º 15, Funchal; phone +351 291 634 523; Instagram @mya_petitcafe.
- [UNVERIFIED] Hours conflict across listings: 09:15 vs 09:30 opening; do NOT publish definitive opening times. Show 'Hours to be confirmed' in prototype.
- [UNVERIFIED] Current social account control, official font/brand guide, commercial image rights, actual booking service, reservation availability, current seasonal program, in-store prices, precise menu, verified five-star review dataset.
- [LEGAL/RIGHTS] User downloaded photos from online sources. Possession does NOT grant commercial redistribution rights. Private preview only, no public deployment or outreach without rights/owner approval. Outdoor visitor photos may contain recognizable people; treat cautiously.

## J. Source trail

- NiT founder interview (2022-09-23): https://www.nit.pt/comida/cafes-e-bares/mya-o-novo-spot-in-da-madeira-tem-o-brunch-mais-instagramavel-e-colorido-da-ilha
- Funchal Digital listing: https://www.funchaldigital.pt/en/shop/81495/brunch--mya-petit-cafe
- Madeira entrepreneurship mention: https://www.iem.madeira.gov.pt/2025/03/07/empreendedorismo-feminino-2025/
- Uber Eats listing: https://www.ubereats.com/pt-en/store/mya-petit-cafe/OyW8DAQfX--zE7WPuH_XYQ
- Tripadvisor listing: https://www.tripadvisor.com/Restaurant_Review-g189167-d26842360-Reviews-Mya_Petit_Cafe-Funchal_Madeira_Madeira_Islands.html
- Supplementary public listings: https://beyondmadeira.com/eat-drink/mya-petit-cafe ; https://www.happycow.net/reviews/mya-petit-cafe-funchal-361951/1484173
