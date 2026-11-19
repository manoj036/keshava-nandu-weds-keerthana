# Gubba vari Pendli Pilupu — Keshava Nandu ❖ Keerthana

A bilingual (English / తెలుగు) wedding invitation website, using the artwork and wording from the printed card.

- Sumuhurtham: Wed 25 Nov 2026, 9:25 AM IST — Devi Convention, Moinabad
- Reception: Sat 28 Nov 2026, 7:00 PM IST — Premranga Gardens, Jadcherla

## Share links
- Telugu:  `https://manoj036.github.io/keshava-nandu-weds-keerthana/`  (default)
- English: `https://manoj036.github.io/keshava-nandu-weds-keerthana/?lang=en`
- Events only (short page): `https://manoj036.github.io/keshava-nandu-weds-keerthana/events.html`  (English: add `?lang=en`)

## Preview locally
Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.

## Deploy
**Netlify (easiest):** go to https://app.netlify.com/drop and drag this folder onto the page (move `_card-source/` and `photos/originals/` out first: they hold the card scans and full-size photos, which are not needed online). You get a link like `https://something.netlify.app`, and you can rename the site in its settings.

**GitHub Pages:** push this folder to a GitHub repo, then go to *Settings → Pages → Deploy from branch → main / root*.

After deploying, open `index.html` and replace the two `https://manoj036.github.io/keshava-nandu-weds-keerthana/` placeholders in the `og:` tags with the real address, so the WhatsApp preview shows the temple-arch image.

## Files
- `index.html`: the page (all text in both languages)
- `events.html`: short page with only the wedding events. Its schedule is a copy of the one in `index.html`, so change times or links in both files
- `assets/css/style.css`, `assets/js/main.js`: styling, language toggle, countdown, gallery
- `assets/art/`: artwork cropped from the card (Ganesha, Venkateswara–Padmavathi, Kalyanam, arch, pavilion, mandapam)
- `assets/cal/*.ics`: calendar entries for both events
- `_card-source/`: the card scans the artwork was made from (git-ignored; not needed online)
