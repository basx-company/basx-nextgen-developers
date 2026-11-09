# BASX NextGen Coders – Season 1 (editable source project)

Plain HTML / CSS / JavaScript. No build step, no frameworks, no dependencies.

## Open it
1. Open this folder in VS Code (`File > Open Folder`).
2. Double-click `index.html`, or install the "Live Server" extension and click **Go Live**.
   (Or run `python3 -m http.server 8000` and visit http://localhost:8000)

## Project structure
```
index.html          Home page (slider, about, tracks, why join, journey, CTA)
ai.html             AI Ambassadors Program page
data-science.html   Data Science Program page
css/style.css       ALL styling, split into numbered, commented sections
js/main.js          Interactions: language switch, theme, menus, slider
js/theme-init.js    Applies saved light/dark theme before the page paints
assets/images/      Slider photos (slide-1.jpg ... slide-5.jpg)
assets/logos/       Logo files
```

## How to edit things
| I want to change...                  | Where |
|--------------------------------------|-------|
| Any text, heading, button label      | The `.html` file – search for the text. Arabic is the element text; English is in its `data-en="..."` attribute |
| Registration form links              | `ai.html` / `data-science.html` – search `forms.gle` |
| Curriculum / benefits lists          | The `<ol>` / `<ul>` inside each "LEVEL CARD" in the track pages |
| Email / social link / footer         | `<footer>` at the bottom of each page |
| Colors (light + dark)                | Top of `css/style.css` (`:root` and `[data-theme=dark]`) |
| Font                                 | `body { font: ... }` in `css/style.css` |
| Slider photos                        | Drop files in `assets/images/` (names in `.slide-1` … `.slide-5` in CSS) |
| Slide speed                          | `SLIDE_DELAY` in `js/main.js` |
| Logos                                | See `assets/logos/README.txt` |

The header and footer are written out in full on every page (no hidden templates), so
if you change a nav link or footer item, repeat the change in all three HTML files.

## Language switching
Arabic is the default. Every translatable element has its English text in a `data-en` attribute:
```html
<h2 data-en="About the Initiative">عن المبادرة</h2>
```
Edit the element text for Arabic and `data-en` for English. The visitor's language and theme choices are remembered in the browser.

## Pending official confirmation
Durations and curriculum are proposals awaiting BASX approval. Official logos, slide images and social links are still to be supplied.
