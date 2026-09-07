# Mechanical Design Portfolio — GitHub Pages

This is the static GitHub Pages edition of Tham Weng Hung's CAD drafting and mechanical-design portfolio.

## Upload and publish

1. Upload every file and folder in this package to the `main` branch of `RichieTham/engineering-drawing`. Preserve the folder structure.
2. Open the repository's **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose branch **main**, folder **/(root)**, then save.
5. After GitHub finishes publishing, the default address should be:
   `https://richietham.github.io/engineering-drawing/`

## Update the content

Most routine updates require only one file:

- Open `assets/portfolio-data.js`.
- Click the pencil icon.
- Edit profile, service, experience or project text.
- Commit the change to `main`.

To add an image:

1. Upload the image into `assets/images/`.
2. Add its relative path to the relevant project's `images` array in `assets/portfolio-data.js`.
3. Use a short, accurate `alt` description and caption.

The website automatically rebuilds after each commit. The PDF and resume downloads are stored in `assets/`.

## Custom domain

Do not add a `CNAME` file until the domain has been registered and verified. After purchasing `richietham.com`, add it under **Settings → Pages → Custom domain**, then apply GitHub's requested DNS records at the domain registrar.

Recommended public addresses:

- `https://richietham.com`
- `https://www.richietham.com`

Keep both DNS variants configured so one can redirect to the other. Enable **Enforce HTTPS** after GitHub validates the DNS records.

## Important limitation

GitHub Pages is static hosting. The previous `/studio` visual editor, database and direct browser uploads are not included. On GitHub Pages, update the portfolio by editing `assets/portfolio-data.js` and committing the changes.
