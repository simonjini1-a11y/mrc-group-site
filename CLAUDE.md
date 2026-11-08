# MRC Group website – handoff summary (CLAUDE.md)

## Project
- Repo: github.com/simonjini1-a11y/mrc-group-site (branch main) → GitHub Pages, domain mrc-group.net (CNAME).
- Static HTML, no build. Each page has inline `<style>` and its own CSP `<meta>`. Inline menu script is allowed by a sha256 hash, so do not change it. Other JS lives in external files: `org-lines.js` (no longer in use), `catalog-filter.js`.
- CSP additions: `frame-src https://www.google.com` (map pages); `form-action 'self' https://formsubmit.co` (contact pages).
- Working style: Simon (sales8@mrclab.com) runs the site. Instructions come from Eran Ovadya (CFO), with Reuven Bookstein (CEO) in copy. Answer in Hebrew, be brief.

## Pages (EN ↔ HE)
index↔he, about↔he-about (Group Overview), growth↔he-growth, mrc↔he-mrc, meteo-tech↔he-meteo-tech, munro-instruments↔he-munro-instruments, team↔he-team, catalogs↔he-catalogs, equipment↔he-equipment, services↔he-services, streams↔he-solutions (Solutions), locations↔he-locations, faq↔he-faq, contact↔he-contact, quality↔he-quality, thanks↔he-thanks, accessibility↔he-accessibility. privacy/disclaimer/cookies: EN only. leadership.html→team.html and companies.html→about.html are redirects.

## Logo
- Header logo: images/assets/mrc-group-logo.webp (icon + MRC GROUP + tagline), shown at 48px height. Footer keeps the text logo (dark background).

## Nav and footer (duplicated in every page; any change must be made in all pages, EN and HE)
- Menu: About▾ (Group Overview, Our Growth, MRC Ltd, Meteo-Tech Ltd, Munro Instruments Limited, Meet Our Team, Catalog Library) · Equipment · Services · Solutions · Locations · FAQ · Contact Us · UK/IL flags (inline SVG). Each flag links to the matching page in the other language.
- Hamburger menu below 1180px. The dropdown has a hover bridge.
- Footer: brand + info@mrc-group.net + socials (MRC only: facebook.com/mrclab, youtube.com/user/mrclabequipment) · About · Our Companies · Explore · legal links.
- HE: dir=rtl, Heebo font, an RTL CSS block, and "‹" arrows.

## Rules agreed
- Company names everywhere: MRC Ltd, Meteo-Tech Ltd, Munro Instruments Limited. Divisions: Munro Instruments, Munro Scientific. Parent entity: M.R.C. Ltd.
- English: every heading and button in Title Case (Every Word Capitalized). No breadcrumbs.
- Single email info@mrc-group.net (goes to Reuven). No phone numbers on the site except the existing ones on the Locations page (Locations shows no phone/email, only "see Contact Us").
- Images are files under images/ (no base64), with loading=lazy except the hero. Certificates are JPG only (no PDF).
- Do not use Google Street View screenshots.
- Mobile breakpoints: 1180/1000/700/620/360. axe WCAG 2.1 AA must stay clean. No horizontal scroll.

## Content
### Homepage (order)
1. Hero "Scientific, Laboratory & Measurement Solutions", button "Discover Our Companies" → #companies.
2. "International Quality & Accreditations" + rule + subtitle. Marquee of 10 logos (from the deck, order 5,4,3,2,1,10,9,8,7,6), 180s loop, pauses on hover, no pause button. Click opens the certificate in a :target modal.
3. Navy band "How Our Operating Entities Drive…" → streams.html.
4. "Driven By Precision. Proven By Scale." + 4 stats (35+ / 3,000+ / 100+ / 60+), text in black.
5. Waves.
6. "Our Companies Power Scientific Progress": MRC (Founded 1989), Munro Instruments (1864, button "Explore Munro Instruments"), Munro Scientific (2009), Meteo-Tech (Founded 1989).
7. "Comprehensive Product & Equipment Catalogs" (images/catalogs/catalog-library.jpg) → catalogs.html.
8. CTA "Looking For The Right Instrument Or Service?" + Holon / Bnei Brak / Harlow.

### Group Overview
Text + vision. Gallery (images/gallery: production floor, production line, 2 exhibitions). Holding structure:
- M.R.C. Ltd: Holon, Est. 1989; central logistics, R&D, export hub.
- 100% → Meteo-Tech Ltd: Bnei Brak, Est. 1989, Acquired 2023; AWS, sensor arrays, air-quality dispersion; markets: national met services, ports, defence, energy.
- 100% → Munro Instruments Limited: Harlow, Est. 1864, owns its facility, UKAS ISO 17025 #21691. Div 01 Munro Instruments (slip/skid, air quality & weather, UKAS field metrology). Div 02 Munro Scientific (benchtop lab, balances, cleanroom).
- Governance summary: 3 legal entities, 4 market divisions.

### Our Growth
Timeline (alternating cards), phases "Organic Platform Building 1989–2012" and "UKAS & ISO Accredited Platform 2019–2024":
1989 MRC Founded · 1995 ISO 9001 · 2002 Export Launch · 2009 Corporate HQ (Holon) · 2012 Fried Electric · 2019 Munro UK · 2022 UKAS ISO 17025 · 2023 Meteo-Tech M&A (+ Munro moved to a new facility, anaerobic production line) · 2024 Meteo ISO 17025 · 2024 Fried Merger.
OPEN: milestones for 2025 and 2026 (to come from Reuven).

### Company pages
Intro (image, founded, field, description, website), Services list, Quality & Accreditations (certificate cards), Location (map + address + links).
- MRC: founded 1989.
- Meteo-Tech: "Founded in 1989 · Part of MRC Group since 2023".
- Munro: founded 1864, part of the group since 2019. Heading "Munro Instruments Division", plus a section "Munro Scientific Division" (#munro-scientific, 2009, 70+ countries, 3,000+ products).
- Certificates (certificates/*.jpg): mrc-iso9001-sii, mrc-iso9001-iqnet (valid to 06/09/2028); meteo-tech-iso9001-iqc (valid to 16.01.2029); meteo-tech-iso17025-a2la (#7302.01, valid to 30/09/2026); munro-ukas-testing-21691; munro-ukas-calibration-21691.

### Meet Our Team (no "MRC Group" pill)
- Top row: Reuven Bookstein, B.A., CEO, Director and Founder. Bio covers: BA Economics & Business Management (Tel Aviv University), practical electronics engineer, directors' training (Hebrew University), corporate valuation training (Bar-Ilan). Moshe Rachmanov, "Practical Eng." (HE: הנדסאי אלקטרוניקה), COO, Director and Founder. Bios sit behind a "Read More" toggle on the photo.
- Senior row, 5 columns, above company bars:
  - Meteo-Tech: Denis Kochuk, B.Sc., VP Engineering (images/team/denis-kochuk.webp); Alona Aryeh, VP Meteorology (placeholder; photo and degree OPEN).
  - MRC: Simon Jini, M.Sc., CTO.
  - Munro: John Adams, BEng, Vice President (john-adams-2025.webp); Tawanda Singizi, Grad., Quality Manager (tawanda-singizi.webp).
- Removed: Eran (removed for now at his request) and Ben Powers (left the company; his photo was removed from the site).
- Employee section (below management): roles only, no names, grouped by company (7-column grid): MRC Ltd 21, Munro Instruments Limited 13, Meteo-Tech Ltd 7 (source: MRC_Team_Structure-v2.xlsx from Eran; Reuven to verify). Total headcount 48.

### Equipment / Services / Solutions
Image-header tiles (images/equipment|services|solutions, class "has"; product shots use "prod" = contain), each with company tags.
- Equipment (10): lab, balances, microscopy, measuring, materials, anaerobic, meteorology, air-quality, aviation, slip-resistance.
- Services (7): manufacturing, installation, calibration, testing, consulting, forecasting, support.
- Solutions (4): laboratory, instrumentation, environmental, industrial.
- OPEN: final content to be discussed with Eran.

### Catalog Library
50 catalogs, real covers in images/catalogs/covers. 6 categories with search and filter chips (catalog-filter.js). Links to mrclab.co.il/Media PDFs and Google Drive. Includes "MRC Full Catalog" (Media/doc/MRC2013CATALOG-INT.pdf). Excluded: the ISO certificate and the ISO 9001 quality policy.

### FAQ
"Frequently Asked Questions": 9 Q&As from Eran's Word file, as `<details>` with a +/− toggle.

### Locations (no phone/email)
Each card: building photo (images/locations), map (hl=en), companies, address, hours, "Get Directions".
- Holon: Hagavish 3, 5881702.
- Bnei Brak: 31 Lehi St., 5120052.
- Harlow: Cavendish House, Parkway, Harlow Business Park, Essex CM19 5QF.
- Hours (approved): Israel Sun–Thu 08:00–17:00; UK Mon–Fri 09:00–17:00.
- Known issue: Google shows MRC's name in Hebrew. The fix is to add an English name in Google Business Profile.

### Contact
Form via FormSubmit → info@mrc-group.net. Fields: name, company, email, phone, country, company to reach, topic, message, attachment (5 MB), consent. _next → (he-)thanks.html. Headings: "Send Us An Inquiry", "Email Us Directly", "Visit Us".
OPEN: activate the form by sending a first inquiry and approving the FormSubmit email.

## Open items
1. Alona: photo and degree.
2. Reuven to verify the role list on Meet Our Team.
3. Social links for Munro (LinkedIn, X, YouTube) and Meteo-Tech (LinkedIn, YouTube, Facebook).
4. Milestones for 2025/2026.
5. Decisions for Reuven/Eran: additional languages, and final content for Equipment/Services/Solutions.
6. FormSubmit activation.
