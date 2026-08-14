import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import {
  useEffect,
} from "react";


// =====================================================
// MAIN PAGES
// =====================================================

import Home from "./pages/Home";
import Stories from "./pages/Stories";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";


// =====================================================
// STORY PAGES
// =====================================================

import AaravPriya from "./pages/stories/AaravPriya";
import RahulAnanya from "./pages/stories/RahulAnanya";
import ArjunMeera from "./pages/stories/ArjunMeera";


// =====================================================
// SERVICE PAGES
// =====================================================

import Weddings from "./pages/services/Weddings";
import Events from "./pages/services/Events";
import PreWeddings from "./pages/services/PreWeddings";
import CinematicFilms from "./pages/services/CinematicFilms";


// =====================================================
// SITE CONFIGURATION
// =====================================================

const SITE_URL = "https://unboundevents.in";

const SITE_NAME = "UNBOUND Events";


// =====================================================
// SEO CONFIGURATION
// =====================================================

const SEO_DATA = {

  "/": {
    title: "UNBOUND Events | Weddings & Events",

    description:
      "UNBOUND creates unforgettable weddings, celebrations, pre-wedding experiences, events, and cinematic films.",

    type: "website",
  },


  "/stories": {
    title: "Wedding Stories & Events | UNBOUND Events",

    description:
      "Explore unforgettable wedding stories, celebrations and cinematic moments captured by UNBOUND Events.",

    type: "website",
  },


  "/stories/aarav-priya": {
    title: "Aarav & Priya | Wedding Story | UNBOUND Events",

    description:
      "Discover Aarav and Priya's wedding story, captured through authentic moments, emotion, movement and cinematic storytelling by UNBOUND Events.",

    type: "article",
  },


  "/stories/rahul-ananya": {
    title: "Rahul & Ananya | Wedding Story | UNBOUND Events",

    description:
      "Explore Rahul and Ananya's celebration through photographs, emotions and cinematic storytelling by UNBOUND Events.",

    type: "article",
  },


  "/stories/arjun-meera": {
    title: "Arjun & Meera | Wedding Story | UNBOUND Events",

    description:
      "Explore Arjun and Meera's celebration through authentic moments and cinematic storytelling by UNBOUND Events.",

    type: "article",
  },


  "/services": {
    title: "Event Services | UNBOUND Events",

    description:
      "Explore UNBOUND's wedding, event, pre-wedding and cinematic film services created around emotion, atmosphere and unforgettable moments.",

    type: "website",
  },


  "/services/weddings": {
    title: "Wedding Events & Photography | UNBOUND Events",

    description:
      "UNBOUND creates emotional, cinematic and unforgettable wedding experiences through photography, storytelling and event services.",

    type: "website",
  },


  "/services/events": {
    title: "Event Planning & Event Photography | UNBOUND Events",

    description:
      "UNBOUND creates memorable events, celebrations and visual stories designed around people, atmosphere and emotion.",

    type: "website",
  },


  "/services/pre-weddings": {
    title: "Pre-Wedding Photography | UNBOUND Events",

    description:
      "Create cinematic pre-wedding photographs and stories built around your connection, personality and unique relationship.",

    type: "website",
  },


  "/services/cinematic-films": {
    title: "Cinematic Wedding Films | UNBOUND Events",

    description:
      "UNBOUND creates cinematic wedding and event films that preserve the emotion, atmosphere and memories of your celebration.",

    type: "website",
  },


  "/about": {
    title: "About UNBOUND Events",

    description:
      "Learn about UNBOUND, a creative event house built around photography, cinematic storytelling and unforgettable experiences.",

    type: "website",
  },


  "/contact": {
    title: "Contact UNBOUND Events",

    description:
      "Planning a wedding, event, pre-wedding or cinematic story? Contact UNBOUND and tell us what you're imagining.",

    type: "website",
  },

};


// =====================================================
// HELPER — SET META TAG
// =====================================================

function setMetaTag(attribute, value, content) {

  let element = document.head.querySelector(
    `meta[${attribute}="${value}"]`
  );


  if (!element) {

    element = document.createElement("meta");

    element.setAttribute(attribute, value);

    document.head.appendChild(element);

  }


  element.setAttribute("content", content);

}


// =====================================================
// HELPER — SET LINK TAG
// =====================================================

function setLinkTag(rel, href) {

  let element = document.head.querySelector(
    `link[rel="${rel}"]`
  );


  if (!element) {

    element = document.createElement("link");

    element.setAttribute("rel", rel);

    document.head.appendChild(element);

  }


  element.setAttribute("href", href);

}


// =====================================================
// SEO COMPONENT
// =====================================================

function SEO() {

  const {
    pathname,
  } = useLocation();


  useEffect(() => {

    // -------------------------------------------------
    // Find SEO configuration
    // -------------------------------------------------

    const seo = SEO_DATA[pathname];


    // -------------------------------------------------
    // 404 PAGE
    // -------------------------------------------------

    if (!seo) {

      document.title = `Page Not Found | ${SITE_NAME}`;


      setMetaTag(
        "name",
        "description",
        "The page you are looking for could not be found."
      );


      setMetaTag(
        "name",
        "robots",
        "noindex, nofollow"
      );


      return;

    }


    // -------------------------------------------------
    // Canonical URL
    // -------------------------------------------------

    const canonicalURL =
      `${SITE_URL}${pathname === "/" ? "/" : pathname}`;


    // -------------------------------------------------
    // Page title
    // -------------------------------------------------

    document.title = seo.title;


    // -------------------------------------------------
    // Basic SEO
    // -------------------------------------------------

    setMetaTag(
      "name",
      "description",
      seo.description
    );


    setMetaTag(
      "name",
      "robots",
      "index, follow"
    );


    // -------------------------------------------------
    // Canonical
    // -------------------------------------------------

    setLinkTag(
      "canonical",
      canonicalURL
    );


    // -------------------------------------------------
    // Open Graph
    // -------------------------------------------------

    setMetaTag(
      "property",
      "og:title",
      seo.title
    );


    setMetaTag(
      "property",
      "og:description",
      seo.description
    );


    setMetaTag(
      "property",
      "og:url",
      canonicalURL
    );


    setMetaTag(
      "property",
      "og:type",
      seo.type
    );


    setMetaTag(
      "property",
      "og:site_name",
      SITE_NAME
    );


    // -------------------------------------------------
    // Twitter / X
    // -------------------------------------------------

    setMetaTag(
      "name",
      "twitter:card",
      "summary_large_image"
    );


    setMetaTag(
      "name",
      "twitter:title",
      seo.title
    );


    setMetaTag(
      "name",
      "twitter:description",
      seo.description
    );


    // -------------------------------------------------
    // JSON-LD
    // -------------------------------------------------

    let jsonLd =
      document.head.querySelector(
        'script[data-unbound-schema="true"]'
      );


    if (!jsonLd) {

      jsonLd = document.createElement("script");

      jsonLd.type = "application/ld+json";

      jsonLd.setAttribute(
        "data-unbound-schema",
        "true"
      );

      document.head.appendChild(jsonLd);

    }


    const schema = {

      "@context": "https://schema.org",

      "@graph": [

        {
          "@type": "Organization",

          "@id": `${SITE_URL}/#organization`,

          name: SITE_NAME,

          url: SITE_URL,
        },


        {
          "@type": "WebSite",

          "@id": `${SITE_URL}/#website`,

          name: SITE_NAME,

          url: SITE_URL,

          publisher: {
            "@id": `${SITE_URL}/#organization`,
          },
        },

      ],

    };


    jsonLd.textContent =
      JSON.stringify(schema);


  }, [pathname]);


  return null;

}


// =====================================================
// SCROLL TO TOP
// =====================================================

function ScrollToTop() {

  const {
    pathname,
  } = useLocation();


  useEffect(() => {

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

  }, [pathname]);


  return null;

}


// =====================================================
// 404 PLACEHOLDER
// =====================================================

function Placeholder({ title }) {

  return (

    <main
      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-black
        px-6
        text-white
      "
    >

      <h1
        className="
          text-5xl
          font-light
          tracking-[-0.05em]
          md:text-8xl
        "
      >
        {title}
      </h1>

    </main>

  );

}


// =====================================================
// APP
// =====================================================

function App() {

  return (

    <BrowserRouter>

      {/* =================================================
          SEO
      ================================================= */}

      <SEO />


      {/* =================================================
          RESET SCROLL POSITION
      ================================================= */}

      <ScrollToTop />


      <Routes>


        {/* =================================================
            HOME
        ================================================= */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* =================================================
            STORIES
        ================================================= */}

        <Route
          path="/stories"
          element={<Stories />}
        />


        <Route
          path="/stories/aarav-priya"
          element={<AaravPriya />}
        />


        <Route
          path="/stories/rahul-ananya"
          element={<RahulAnanya />}
        />


        <Route
          path="/stories/arjun-meera"
          element={<ArjunMeera />}
        />


        {/* =================================================
            SERVICES
        ================================================= */}

        <Route
          path="/services"
          element={<Services />}
        />


        <Route
          path="/services/weddings"
          element={<Weddings />}
        />


        <Route
          path="/services/events"
          element={<Events />}
        />


        <Route
          path="/services/pre-weddings"
          element={<PreWeddings />}
        />


        <Route
          path="/services/cinematic-films"
          element={<CinematicFilms />}
        />


        {/* =================================================
            ABOUT
        ================================================= */}

        <Route
          path="/about"
          element={<About />}
        />


        {/* =================================================
            CONTACT
        ================================================= */}

        <Route
          path="/contact"
          element={<Contact />}
        />


        {/* =================================================
            404
        ================================================= */}

        <Route
          path="*"
          element={
            <Placeholder title="404" />
          }
        />

      </Routes>

    </BrowserRouter>

  );

}


export default App;