# Mark Fullbrook

Static personal site built with Next.js and ready for Vercel.

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
