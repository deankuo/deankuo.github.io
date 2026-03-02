# Dean Peng-Ting Kuo — Personal Academic Website

Personal website for **Peng-Ting (Dean) Kuo** (郭芃廷), Ph.D. student in the Department of Government at the University of Texas at Austin. The site presents academic research, publications, teaching, and projects at the intersection of political science and large language models (LLM).

🌐 **Live site:** [deankuo.com](https://deankuo.com)

---

## Pages

| Page | File | Description |
|---|---|---|
| Homepage | `index.html` | Intro, typing animation, quick info cards |
| About | `about.html` | Extended bio and research narrative |
| Education | `education.html` | Academic background |
| Publication | `publication.html` | Peer-reviewed papers, conference papers, thesis |
| Teaching | `teaching.html` | Teaching experience and courses |
| Project | `project.html` | Research projects and tools |
| CV | `Peng-Ting_Kuo_CV.pdf` | Downloadable curriculum vitae |

---

## Tech Stack

- **Base theme:** [Editorial by HTML5 UP](https://html5up.net/editorial) (CCA 3.0)
- **CSS:** Custom overrides via inline `<style>` blocks per page + `assets/css/main.css`
- **Fonts:** Roboto Slab (headings), Open Sans (body) via Google Fonts
- **Icons:** Font Awesome 6
- **Analytics:** Google Analytics (gtag.js, ID: `G-4963P2NTCT`)
- **Hosting:** Static site (no build step required)

---

## Running Locally

No build tools required — open any HTML file directly in a browser, or serve with a local static server for best results:

```bash
# Python (built-in)
python3 -m http.server 8080

# Node.js (npx)
npx serve .

# VS Code
# Use the "Live Server" extension
```

Then open `http://localhost:8080` in your browser.

---

## Project Structure

```
Personal_Website/
├── index.html              # Homepage
├── about.html              # About page
├── education.html          # Education page
├── publication.html        # Publications page
├── teaching.html           # Teaching page
├── project.html            # Projects page
├── work_experience.html    # Work experience
├── Peng-Ting_Kuo_CV.pdf   # CV download
├── assets/
│   ├── css/
│   │   └── main.css        # Base Editorial theme CSS
│   └── js/                 # jQuery, breakpoints, util, main
├── images/                 # Profile photos and media
├── favicon/                # Favicon assets
└── projects/               # Project detail pages
```

---

## Customization

### Changing the Accent Color

The current accent color is `#f56565` (coral-red), used for nav hover states, footer links, and social icon hover. To change it site-wide, find and replace across all HTML files:

```
Find:    #f56565
Replace: <your-color>   e.g. #2563eb (academic blue)
```

For hover/darker states, also replace `#1B5A96` (used in publication links) if you're changing the secondary blue.

**Recommended palette for a political science + AI researcher:**
- Primary: `#2563eb` (modern blue)
- Hover/active: `#1e40af` (deep blue)
- Link (publications): `#2563eb`

### Adding a New Page

1. Copy any existing page as a template
2. Update the `<title>`, `<meta description>`, and `aria-current="page"` attribute in the nav
3. Update the nav in **all other pages** to link to the new page
4. Add the new page to this README

---

## SEO & Analytics

- Structured data (`application/ld+json`) on the homepage for Google rich results
- Open Graph + Twitter Card meta tags on the homepage
- Google Analytics tracking via `G-4963P2NTCT`
- CV download tracked as a GA event

---

## Credits

- Theme: [HTML5 UP Editorial](https://html5up.net/editorial) by [@ajlkn](https://twitter.com/ajlkn)
- Icons: [Font Awesome](https://fontawesome.com)
- Fonts: [Google Fonts](https://fonts.google.com)

---

## License

Site content © Peng-Ting (Dean) Kuo. All rights reserved.
Base theme licensed under [CCA 3.0](https://html5up.net/license).
