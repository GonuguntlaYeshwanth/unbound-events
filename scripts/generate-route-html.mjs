import fs from "node:fs";
import path from "node:path";
import {
  routes,
  getAbsoluteUrl,
  escapeHtml,
  createJsonLd,
} from "./seo-routes.mjs";

const root = process.cwd();
const distDirectory = path.join(root, "dist");
const sourceFile = path.join(distDirectory, "index.html");

if (!fs.existsSync(sourceFile)) {
  console.error("❌ dist/index.html was not found.");
  console.error("Run this script after vite build.");
  process.exit(1);
}

const baseHtml = fs.readFileSync(sourceFile, "utf8");

function createSeoHead(route) {
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  const url = escapeHtml(getAbsoluteUrl(route.path));

  const jsonLd = JSON.stringify(createJsonLd(route))
    .replaceAll("<", "\\u003c")
    .replaceAll(">", "\\u003e")
    .replaceAll("&", "\\u0026");

  return `
    <title>${title}</title>

    <meta
      name="description"
      content="${description}"
    />

    <meta
      name="robots"
      content="index, follow"
    />

    <link
      rel="canonical"
      href="${url}"
    />

    <meta
      property="og:title"
      content="${title}"
    />

    <meta
      property="og:description"
      content="${description}"
    />

    <meta
      property="og:url"
      content="${url}"
    />

    <meta
      property="og:type"
      content="${route.type}"
    />

    <meta
      property="og:site_name"
      content="UNBOUND Events"
    />

    <meta
      name="twitter:card"
      content="summary_large_image"
    />

    <meta
      name="twitter:title"
      content="${title}"
    />

    <meta
      name="twitter:description"
      content="${description}"
    />

    <script type="application/ld+json">${jsonLd}</script>
  `;
}

function createRouteHtml(route) {
  let html = baseHtml;

  /*
   * Remove the homepage SEO tags from the template.
   * This prevents duplicate title/canonical/meta tags.
   */
  html = html.replace(/<title>[\s\S]*?<\/title>/i, "");

  html = html.replace(
    /<meta\s+name=["']description["'][^>]*>/i,
    "",
  );

  html = html.replace(
    /<meta\s+name=["']robots["'][^>]*>/i,
    "",
  );

  html = html.replace(
    /<link\s+rel=["']canonical["'][^>]*>/i,
    "",
  );

  html = html.replace(
    /<meta\s+property=["']og:title["'][^>]*>/i,
    "",
  );

  html = html.replace(
    /<meta\s+property=["']og:description["'][^>]*>/i,
    "",
  );

  html = html.replace(
    /<meta\s+property=["']og:url["'][^>]*>/i,
    "",
  );

  html = html.replace(
    /<meta\s+property=["']og:type["'][^>]*>/i,
    "",
  );

  html = html.replace(
    /<meta\s+property=["']og:site_name["'][^>]*>/i,
    "",
  );

  html = html.replace(
    /<meta\s+name=["']twitter:card["'][^>]*>/i,
    "",
  );

  html = html.replace(
    /<meta\s+name=["']twitter:title["'][^>]*>/i,
    "",
  );

  html = html.replace(
    /<meta\s+name=["']twitter:description["'][^>]*>/i,
    "",
  );

  html = html.replace(
    /<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi,
    "",
  );

  /*
   * Insert route-specific SEO immediately before </head>.
   */
  html = html.replace(
    "</head>",
    `${createSeoHead(route)}\n  </head>`,
  );

  return html;
}

for (const route of routes) {
  const outputDirectory =
    route.path === "/"
      ? distDirectory
      : path.join(
          distDirectory,
          route.path.replace(/^\/|\/$/g, ""),
        );

  fs.mkdirSync(outputDirectory, {
    recursive: true,
  });

  const outputFile = path.join(
    outputDirectory,
    "index.html",
  );

  const routeHtml = createRouteHtml(route);

  fs.writeFileSync(
    outputFile,
    routeHtml,
    "utf8",
  );

  console.log(`✓ ${route.path} → ${path.relative(root, outputFile)}`);
}

console.log("");
console.log("✅ Route-specific SEO HTML generated.");
