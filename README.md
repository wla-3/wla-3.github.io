# WLA³ project page

This directory is a complete static project page for:

> **WLA³: World Latent Action Modeling for Semantics, Dynamics, and Kinematics**

It has no build step and no external dependencies. GitHub Pages can serve it directly.

## Publish on GitHub Pages

Create a public repository named exactly `wla-3.github.io` under the `wla-3` account, then run:

```bash
cd /path/to/wla-3.github.io
git init
git branch -M main
git remote add origin https://github.com/wla-3/wla-3.github.io.git
git add .
git commit -m "Launch WLA3 project page"
git push -u origin main
```

In the GitHub repository, open **Settings → Pages**, select **Deploy from a branch**, then choose `main` and `/ (root)`. The site will appear at <https://wla-3.github.io/>.

> `assets/WLA3.pdf` is about 26 MB. GitHub's browser uploader may reject an individual file above 25 MB, so use the Git commands above. A normal Git push accepts this file because it remains below GitHub's 100 MB file limit. After the arXiv release, you can instead remove the local PDF and point the Paper button to arXiv.

## Before public release

1. Add the final `eprint`, `archivePrefix`, `primaryClass`, and arXiv URL fields to the BibTeX block in `index.html`.
2. Change the disabled “arXiv · coming soon” element into a link to the arXiv abstract page.
3. Confirm the institution spelling. This page uses “Joy Future Academy, JD Group”; the latest paper source currently contains the likely typo “Academsy”.
4. If desired, replace `assets/WLA3.pdf` with the final preprint PDF.
5. Add a code or dataset button after those resources are public.

## Local preview

Run a static server from this directory:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000/>.

## Main files

- `index.html`: page content and metadata
- `style.css`: responsive visual design
- `script.js`: BibTeX copying and footer-year update
- `assets/`: paper PDF and web-optimized figures
