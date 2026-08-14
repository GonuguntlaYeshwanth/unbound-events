const baseUrl = "https://unboundevents.in";

/*
|--------------------------------------------------------------------------
| SEO ROUTES
|--------------------------------------------------------------------------
*/

export const routes = [
  {
    path: "/",
    title: "UNBOUND Events | Weddings & Events",
    description:
      "UNBOUND creates unforgettable weddings, celebrations, pre-wedding experiences, events, and cinematic films.",
  },

  {
    path: "/stories",
    title: "Wedding Stories | UNBOUND Events",
    description:
      "Explore wedding stories, celebrations and cinematic moments captured by UNBOUND Events.",
  },

  {
    path: "/stories/aarav-priya",
    title: "Aarav & Priya Wedding Story | UNBOUND Events",
    description:
      "Explore Aarav and Priya's wedding story captured by UNBOUND Events in Hyderabad.",
  },

  {
    path: "/stories/rahul-ananya",
    title: "Rahul & Ananya Wedding Story | UNBOUND Events",
    description:
      "Explore Rahul and Ananya's celebration captured through the visual storytelling of UNBOUND Events.",
  },

  {
    path: "/stories/arjun-meera",
    title: "Arjun & Meera Wedding Story | UNBOUND Events",
    description:
      "Explore Arjun and Meera's wedding story captured by UNBOUND Events.",
  },

  {
    path: "/services",
    title: "Wedding & Event Services | UNBOUND Events",
    description:
      "Discover UNBOUND's wedding photography, events, pre-wedding experiences and cinematic film services.",
  },

  {
    path: "/services/weddings",
    title: "Wedding Photography & Films | UNBOUND Events",
    description:
      "UNBOUND creates emotional wedding photography and cinematic films that preserve the atmosphere and story of your celebration.",
  },

  {
    path: "/services/events",
    title: "Event Photography & Films | UNBOUND Events",
    description:
      "Capture your celebrations, launches and special events with UNBOUND's photography and cinematic storytelling.",
  },

  {
    path: "/services/pre-weddings",
    title: "Pre-Wedding Photography | UNBOUND Events",
    description:
      "Create cinematic pre-wedding photographs and films built around your connection, personality and story.",
  },

  {
    path: "/services/cinematic-films",
    title: "Cinematic Wedding Films | UNBOUND Events",
    description:
      "Relive your celebration through cinematic films created by UNBOUND Events.",
  },

  {
    path: "/about",
    title: "About UNBOUND Events | Weddings & Stories",
    description:
      "Learn about UNBOUND Events, a creative event house built around photography, cinematic storytelling and unforgettable experiences.",
  },

  {
    path: "/contact",
    title: "Contact UNBOUND Events | Check Your Date",
    description:
      "Planning a wedding, event or cinematic story? Contact UNBOUND Events and tell us what you're imagining.",
  },
];

/*
|--------------------------------------------------------------------------
| SEO ROUTE MAP
|--------------------------------------------------------------------------
*/

export const seoRoutes = Object.fromEntries(
  routes.map((route) => [
    route.path,
    {
      title: route.title,
      description: route.description,
    },
  ]),
);

/*
|--------------------------------------------------------------------------
| Normalize Route
|--------------------------------------------------------------------------
|
| The HTML generator may pass either:
|
|   "/about"
|
| OR:
|
|   { path: "/about", title: "...", description: "..." }
|
| This function supports both.
|
|--------------------------------------------------------------------------
*/

function normalizePath(value = "/") {
  if (typeof value === "string") {
    return value || "/";
  }

  if (value && typeof value === "object") {
    if (typeof value.path === "string") {
      return value.path || "/";
    }
  }

  return "/";
}

/*
|--------------------------------------------------------------------------
| Get SEO Data
|--------------------------------------------------------------------------
*/

export function getSeo(value = "/") {
  const path = normalizePath(value);

  return seoRoutes[path] || seoRoutes["/"];
}

/*
|--------------------------------------------------------------------------
| Absolute URL
|--------------------------------------------------------------------------
*/

export function getAbsoluteUrl(value = "/") {
  const path = normalizePath(value);

  if (path === "/") {
    return `${baseUrl}/`;
  }

  return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

/*
|--------------------------------------------------------------------------
| HTML Escape
|--------------------------------------------------------------------------
*/

export function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/*
|--------------------------------------------------------------------------
| JSON-LD
|--------------------------------------------------------------------------
*/

export function createJsonLd(value = "/") {
  const path = normalizePath(value);
  const seo = getSeo(path);
  const absoluteUrl = getAbsoluteUrl(path);

  return {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "UNBOUND Events",
        url: `${baseUrl}/`,
      },

      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        name: "UNBOUND Events",
        url: `${baseUrl}/`,
        publisher: {
          "@id": `${baseUrl}/#organization`,
        },
      },

      {
        "@type": "WebPage",
        "@id": `${absoluteUrl}#webpage`,
        url: absoluteUrl,
        name: seo.title,
        description: seo.description,
        isPartOf: {
          "@id": `${baseUrl}/#website`,
        },
      },
    ],
  };
}

/*
|--------------------------------------------------------------------------
| Default Export
|--------------------------------------------------------------------------
*/

export default {
  routes,
  seoRoutes,
  getSeo,
  getAbsoluteUrl,
  escapeHtml,
  createJsonLd,
};
