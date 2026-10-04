# Log Video Player website

Public marketing, privacy and support website for **Log Video Player**, a native Mac app for automatic, non-destructive Log-to-Rec.709 playback with live picture controls.

Version 1.1 is available free on the [Mac App Store](https://apps.apple.com/app/log-video-player/id6794441589).
The site describes its released scrubbing, corrected hover frames, six playback speeds, frame stepping, 10-second jumps, and J/K/L shuttle controls.

The site is intentionally dependency-free: plain HTML, CSS and JavaScript, ready to serve from GitHub Pages.

## Preview locally

From this directory:

```sh
python3 -m http.server 8080
```

Then open <http://localhost:8080/>.

## Pages

- `index.html` — product marketing and camera compatibility
- `privacy.html` — App Store-ready privacy policy
- `support.html` — setup, troubleshooting and GitHub Issues support
- `MARKETING.md` — current App Store and launch copy
- `404.html` — GitHub Pages fallback
- `.github/ISSUE_TEMPLATE/` — privacy-conscious support request form

Visual assets are original synthetic SVG artwork created for this site. No personal footage or third-party manufacturer branding is used.

## Live site

- Product: https://autonomath.github.io/log-video-player/
- Mac App Store: https://apps.apple.com/app/log-video-player/id6794441589
- Privacy: https://autonomath.github.io/log-video-player/privacy.html
- Support: https://autonomath.github.io/log-video-player/support.html

GitHub Pages deploys the `main` branch from the repository root. Canonical,
Open Graph, sitemap and robots URLs all use the production Pages address.

It identifies Mathieu Gagnon as the support provider and links to the public
GitHub Issues channel at `https://github.com/autonomath/log-video-player/issues`.

## Accessibility and privacy

- Semantic headings, landmarks and keyboard navigation
- Keyboard-operable before/after comparison
- Visible focus indicators and skip link
- Responsive layouts down to narrow mobile screens
- Reduced-motion support
- No external scripts, fonts, analytics, cookies or tracking pixels
