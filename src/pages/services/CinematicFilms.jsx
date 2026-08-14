import { motion, useReducedMotion } from "motion/react";
import { useEffect } from "react";

import ServicePage from "../../components/ServicePage";
import servicePages from "../../data/servicePages";


// =====================================================
// CINEMATIC FILMS PAGE
// =====================================================

function CinematicFilms() {
  const reduceMotion = useReducedMotion();

  // ===================================================
  // SCROLL TO TOP
  // ===================================================

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  // ===================================================
  // SERVICE DATA
  // ===================================================

  const service = servicePages["cinematic-films"];

  // ===================================================
  // SAFETY
  // ===================================================

  if (!service) {
    return (
      <main className="min-h-screen bg-black text-white">
        <div className="flex min-h-screen items-center justify-center px-6">
          <div className="text-center">

            <p
              className="
                mb-4
                text-[9px]
                uppercase
                tracking-[0.5em]
                text-white/35
              "
            >
              Service unavailable
            </p>

            <h1
              className="
                text-4xl
                font-light
                tracking-[-0.05em]
              "
            >
              Cinematic Films
            </h1>

            <p
              className="
                mx-auto
                mt-5
                max-w-md
                text-sm
                leading-7
                text-white/40
              "
            >
              This service could not be loaded right now.
              Please try again.
            </p>

          </div>
        </div>
      </main>
    );
  }

  // ===================================================
  // PAGE
  // ===================================================

  return (
    <main
      className="
        min-h-screen
        overflow-x-hidden
        bg-black
        text-white
      "
    >

      {/* =================================================
          PAGE ENTRY
      ================================================= */}

      <motion.div
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
              }
        }
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
      >

        <ServicePage service={service} />

      </motion.div>

      {/* =================================================
          CINEMATIC PAGE EDGE
      ================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          inset-x-0
          bottom-0
          z-[9990]

          h-24

          bg-gradient-to-t
          from-black/20
          to-transparent

          opacity-40
        "
      />

    </main>
  );
}

export default CinematicFilms;