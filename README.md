# Mark Fullbrook

Static personal site built with Next.js and ready for Vercel.

## Publishing standalone HTML pages

Drop a complete, self-contained HTML document into:

```text
public/pages/<slug>.html
```

It is served unchanged at:

```text
https://mark.fullbrook.me/pages/<slug>.html
```

For example, `public/pages/ai-notes.html` becomes `/pages/ai-notes.html`.
Folder-based pages also work: `public/pages/ai-notes/index.html` becomes
`/pages/ai-notes/`. These pages do not use the site's React layout,
navigation, styles, or other wrapper—they are the exact HTML files you add.

Keep page-specific assets alongside the page (for example,
`public/pages/ai-notes/chart.png`) and reference them with relative URLs in
the HTML (`chart.png`). This keeps each generated page portable.

There is currently no Next.js middleware or proxy in this project. If one is
added later, exclude `^/pages(?:/.*)?$` from it so these standalone pages
continue to be served directly.

## Deploy using GitHub

1. Extract this ZIP.
2. Create a new GitHub repository and push the extracted files.
3. In Vercel, select **Add New → Project** and import the repository.
4. Leave the detected framework as **Next.js** and deploy.
5. In the Vercel project, open **Settings → Domains** and add
   `mark.fullbrook.me`.
6. Apply the DNS record Vercel shows at the DNS provider for `fullbrook.me`.

No environment variables or server-side services are required.

## Deploy using the Vercel CLI

Install dependencies and test the production build:

```bash
npm install
npm run build
```

Then deploy:

```bash
npx vercel
npx vercel --prod
```

The Next.js configuration uses `output: "export"`, so the generated site is
fully static. Its production files are written to `out/`.
