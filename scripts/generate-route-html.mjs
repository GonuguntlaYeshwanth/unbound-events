import fs from "node:fs";
import path from "node:path";

import {
  routes,
  getAbsoluteUrl,
  escapeHtml,
  createJsonLd,
} from "./seo-routes.mjs";


/*
|--------------------------------------------------------------------------
| Paths
|--------------------------------------------------------------------------
*/

const root = process.cwd();

const distDirectory = path.join(
  root,
  "dist",
);

const sourceFile = path.join(
  distDirectory,
  "index.html",
);


/*
|--------------------------------------------------------------------------
| Validate Vite build
|--------------------------------------------------------------------------
*/

if (!fs.existsSync(sourceFile)) {
  console.error("❌ dist/index.html was not found.");
  console.error("Run this script after vite build.");
  process.exit(1);
}


/*
|--------------------------------------------------------------------------
| Read Vite-generated HTML
|--------------------------------------------------------------------------
*/

const baseHtml = fs.readFileSync(
  sourceFile,
  "utf8",
);


/*
|--------------------------------------------------------------------------
| Create Route SEO Head
|--------------------------------------------------------------------------
*/

function createSeoHead(route) {
  const title = escapeHtml(
    route.title,
  );

  const description = escapeHtml(
    route.description,
  );

  const url = escapeHtml(
    getAbsoluteUrl(route.path),
  );


  /*
   * Generate JSON-LD.
   *
   * Escape characters that could accidentally
   * terminate or affect the HTML script element.
   */
  const jsonLd = JSON.stringify(
    createJsonLd(route),
  )
    .replaceAll(
      "<",
      "\\u003c",
    )
    .replaceAll(
      ">",
      "\\u003e",
    )
    .replaceAll(
      "&",
      "\\u0026",
    );


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

    <!-- Open Graph -->

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
      content="website"
    />

    <meta
      property="og:site_name"
      content="UNBOUND Events"
    />

    <!-- Twitter / X -->

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

    <!-- Structured Data -->

    <script type="application/ld+json">${jsonLd}</script>
  `;
}


/*
|--------------------------------------------------------------------------
| Remove Existing SEO Metadata
|--------------------------------------------------------------------------
|
| Vite starts from the homepage index.html.
| We remove the homepage SEO metadata before
| inserting route-specific metadata.
|
|--------------------------------------------------------------------------
*/

function removeExistingSeo(html) {
  /*
   * Title
   */
  html = html.replace(
    /<title>[\s\S]*?<\/title>/gi,
    "",
  );


  /*
   * Meta description
   */
  html = html.replace(
    /<meta\s+name=["']description["'][^>]*>/gi,
    "",
  );


  /*
   * Robots
   */
  html = html.replace(
    /<meta\s+name=["']robots["'][^>]*>/gi,
    "",
  );


  /*
   * Canonical
   */
  html = html.replace(
    /<link\s+rel=["']canonical["'][^>]*>/gi,
    "",
  );


  /*
   * Open Graph
   */
  html = html.replace(
    /<meta\s+property=["']og:title["'][^>]*>/gi,
    "",
  );

  html = html.replace(
    /<meta\s+property=["']og:description["'][^>]*>/gi,
    "",
  );

  html = html.replace(
    /<meta\s+property=["']og:url["'][^>]*>/gi,
    "",
  );

  html = html.replace(
    /<meta\s+property=["']og:type["'][^>]*>/gi,
    "",
  );

  html = html.replace(
    /<meta\s+property=["']og:site_name["'][^>]*>/gi,
    "",
  );


  /*
   * Twitter / X
   */
  html = html.replace(
    /<meta\s+name=["']twitter:card["'][^>]*>/gi,
    "",
  );

  html = html.replace(
    /<meta\s+name=["']twitter:title["'][^>]*>/gi,
    "",
  );

  html = html.replace(
    /<meta\s+name=["']twitter:description["'][^>]*>/gi,
    "",
  );


  /*
   * Existing JSON-LD
   */
  html = html.replace(
    /<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi,
    "",
  );


  /*
   * Remove the old SEO section comments
   * from the original index.html.
   */
  html = html.replace(
    /<!--\s*Primary SEO\s*-->/gi,
    "",
  );

  html = html.replace(
    /<!--\s*Open Graph\s*-->/gi,
    "",
  );

  html = html.replace(
    /<!--\s*Twitter\s*\/\s*X\s*-->/gi,
    "",
  );


  /*
   * Remove excessive blank lines created
   * by deleting the original SEO elements.
   */
  html = html.replace(
    /\n[ \t]*\n[ \t]*\n+/g,
    "\n\n",
  );


  return html;
}


/*
|--------------------------------------------------------------------------
| Generate HTML for a Route
|--------------------------------------------------------------------------
*/

function createRouteHtml(route) {
  let html = baseHtml;


  /*
   * Remove homepage SEO metadata.
   */
  html = removeExistingSeo(
    html,
  );


  /*
   * Insert route-specific SEO immediately
   * before </head>.
   */
  const seoHead = createSeoHead(
    route,
  );


  html = html.replace(
    "</head>",
    `${seoHead}\n  </head>`,
  );


  return html;
}


/*
|--------------------------------------------------------------------------
| Generate Every Route
|--------------------------------------------------------------------------
*/

for (const route of routes) {
  const outputDirectory =
    route.path === "/"
      ? distDirectory
      : path.join(
          distDirectory,
          route.path.replace(
            /^\/|\/$/g,
            "",
          ),
        );


  /*
   * Make sure the route directory exists.
   */
  fs.mkdirSync(
    outputDirectory,
    {
      recursive: true,
    },
  );


  /*
   * Every route gets its own index.html.
   */
  const outputFile = path.join(
    outputDirectory,
    "index.html",
  );


  const routeHtml = createRouteHtml(
    route,
  );


  fs.writeFileSync(
    outputFile,
    routeHtml,
    "utf8",
  );


  console.log(
    `✓ ${route.path} → ${path.relative(
      root,
      outputFile,
    )}`,
  );
}


/*
|--------------------------------------------------------------------------
| Complete
|--------------------------------------------------------------------------
*/

console.log("");
console.log(
  "✅ Route-specific SEO HTML generated.",
);
