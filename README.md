# The Greensman

Website and marketing materials for The Greensman — grounds and estate maintenance, based in Elstead, Surrey.

## Repository Structure

- **`website/`** — Main website code
  - `index.html` — Home page
  - `css/` — Stylesheets
  - `js/` — Scripts

- **`flyers/`** — Flyer source files (HTML exports from Claude Design)
  - Edit the HTML files here
  - These are published as PDFs in finished-outputs

- **`resources/`** — Shared media assets (images, photos, QR codes)
  - Used by both website and flyers
  - Add new images here

- **`finished-outputs/`** — Published deliverables
  - PDF flyers ready for distribution
  - Do not edit files here; regenerate from source instead

## Workflow

### Updating the Website
1. Edit files in `website/`
2. Commit and push to GitHub
3. Cloudflare Pages auto-deploys to thegreensmanelstead.com

### Creating/Updating Flyers
1. Create/edit HTML in `flyers/` (using Claude Design)
2. Add images to `resources/`
3. Export final PDF to `finished-outputs/`
4. Commit and push

### Adding Media
Place all images, photos, and QR codes in `resources/` so they can be shared across the website and flyers.

## Deployment

This repo is deployed automatically to Cloudflare Pages at **thegreensmanelstead.com** on every push to main.
