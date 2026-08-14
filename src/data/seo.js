export const SITE_URL = "https://unboundevents.in";

export const DEFAULT_SEO = {
  title: "UNBOUND Events | Weddings & Events",
  description:
    "UNBOUND creates unforgettable weddings, celebrations, pre-wedding experiences, events, and cinematic films.",
  canonical: `${SITE_URL}/`,
  ogType: "website",
};

export const SEO = {
  "/": {
    title: "UNBOUND Events | Weddings & Events",
    description:
      "UNBOUND creates unforgettable weddings, celebrations, pre-wedding experiences, events, and cinematic films.",
    ogType: "website",
  },

  "/stories": {
    title: "Wedding Stories & Event Stories | UNBOUND Events",
    description:
      "Explore wedding stories, celebrations, pre-wedding experiences and cinematic moments captured by UNBOUND.",
    ogType: "website",
  },

  "/stories/aarav-priya": {
    title: "Aarav & Priya Wedding Story | UNBOUND Events",
    description:
      "Discover Aarav and Priya's wedding story through emotional photography, cinematic moments and unforgettable memories captured by UNBOUND.",
    ogType: "article",
  },

  "/stories/rahul-ananya": {
    title: "Rahul & Ananya Wedding Story | UNBOUND Events",
    description:
      "Explore Rahul and Ananya's celebration through photographs, cinematic moments and the story captured by UNBOUND.",
    ogType: "article",
  },

  "/stories/arjun-meera": {
    title: "Arjun & Meera Wedding Story | UNBOUND Events",
    description:
      "Explore Arjun and Meera's wedding story through emotional photographs, cinematic storytelling and unforgettable moments.",
    ogType: "article",
  },

  "/services": {
    title: "Wedding & Event Services | UNBOUND Events",
    description:
      "Explore UNBOUND's wedding photography, event coverage, pre-wedding experiences and cinematic film services.",
    ogType: "website",
  },

  "/services/weddings": {
    title: "Wedding Photography & Cinematic Films | UNBOUND Events",
    description:
      "UNBOUND creates emotional wedding photography, cinematic films and unforgettable visual stories for celebrations that deserve to be remembered.",
    ogType: "website",
  },

  "/services/events": {
    title: "Event Photography & Films | UNBOUND Events",
    description:
      "Capture celebrations, launches and special events with UNBOUND's photography and cinematic storytelling.",
    ogType: "website",
  },

  "/services/pre-weddings": {
    title: "Pre-Wedding Photography & Films | UNBOUND Events",
    description:
      "Create cinematic pre-wedding photographs and films that capture your connection, personality and story with UNBOUND.",
    ogType: "website",
  },

  "/services/cinematic-films": {
    title: "Cinematic Wedding & Event Films | UNBOUND Events",
    description:
      "Turn your wedding and event memories into cinematic films that preserve the atmosphere, emotion and story of the day.",
    ogType: "website",
  },

  "/about": {
    title: "About UNBOUND Events | Weddings & Stories",
    description:
      "Learn about UNBOUND, a creative event house focused on photography, cinematic storytelling and unforgettable experiences.",
    ogType: "website",
  },

  "/contact": {
    title: "Contact UNBOUND Events | Check Your Date",
    description:
      "Planning a wedding, event, pre-wedding or cinematic story? Contact UNBOUND and tell us what you're imagining.",
    ogType: "website",
  },
};

export function getSEO(pathname) {
  const normalizedPath =
    pathname !== "/" ? pathname.replace(/\/+$/, "") : "/";

  const data = SEO[normalizedPath] || DEFAULT_SEO;

  return {
    ...DEFAULT_SEO,
    ...data,
    canonical:
      normalizedPath === "/"
        ? `${SITE_URL}/`
        : `${SITE_URL}${normalizedPath}`,
  };
}
