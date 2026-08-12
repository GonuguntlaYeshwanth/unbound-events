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
// PLACEHOLDER
// =====================================================

function Placeholder({ title }) {

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">

      <h1 className="text-5xl font-light tracking-[-0.05em] md:text-8xl">
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
          RESET SCROLL POSITION ON EVERY PAGE CHANGE
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