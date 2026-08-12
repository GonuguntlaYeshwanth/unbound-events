import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

import {
  ArrowDown,
  ArrowUpRight,
  ArrowLeft,
} from "lucide-react";

import { Link } from "react-router-dom";

import { useRef } from "react";


// =====================================================
// SERVICES DATA
// =====================================================

const services = [
  {
    number: "01",
    title: "WEDDINGS",
    description:
      "Photography and cinematic storytelling for celebrations that deserve to be remembered.",

    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=85",

    link: "/services/weddings",
  },

  {
    number: "02",
    title: "EVENTS",
    description:
      "Visual stories built around atmosphere, energy, people and unforgettable moments.",

    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1800&q=85",

    link: "/services/events",
  },

  {
    number: "03",
    title: "PRE-WEDDINGS",
    description:
      "Concept-driven photography created around two people and the story they share.",

    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1800&q=85",

    link: "/services/pre-weddings",
  },

  {
    number: "04",
    title: "CINEMATIC FILMS",
    description:
      "Short films and visual stories designed to bring the feeling back.",

    image:
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1800&q=85",

    link: "/services/cinematic-films",
  },
];


// =====================================================
// SERVICE ROW
// =====================================================

function ServiceRow({ service, index }) {

  const rowRef = useRef(null);

  const {
    scrollYProgress,
  } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"],
  });


  // -----------------------------------------------------
  // IMAGE PARALLAX
  // -----------------------------------------------------

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["-8%", "8%"]
  );


  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.08, 1]
  );


  return (
    <motion.div
      ref={rowRef}

      initial={{
        opacity: 0,
        y: 60,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      viewport={{
        once: true,
        amount: 0.15,
      }}

      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      }}

      className="border-t border-white/10"
    >

      <Link
        to={service.link}
        className="group block py-14 md:py-20"
      >

        <div className="grid gap-10 md:grid-cols-[90px_1fr_0.8fr] md:items-center">


          {/* =================================================
              NUMBER
          ================================================= */}

          <div>

            <span className="text-[10px] uppercase tracking-[0.35em] text-white/30">
              {service.number}
            </span>

          </div>


          {/* =================================================
              TITLE + DESCRIPTION
          ================================================= */}

          <div>

            <div className="flex items-center gap-5">

              <h2
                className="
                  text-5xl
                  font-light
                  leading-none
                  tracking-[-0.06em]
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:translate-x-3
                  md:text-7xl
                  lg:text-[7vw]
                "
              >
                {service.title}
              </h2>


              {/* Arrow */}

              <span
                className="
                  hidden
                  translate-x-[-10px]
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:translate-x-0
                  group-hover:opacity-100
                  md:block
                "
              >

                <ArrowUpRight
                  size={30}
                  strokeWidth={1}
                  className="text-white/60"
                />

              </span>

            </div>


            <p className="mt-6 max-w-xl text-sm leading-7 text-white/40 md:text-base">
              {service.description}
            </p>

          </div>


          {/* =================================================
              IMAGE
          ================================================= */}

          <div
            className="
              relative
              h-[55vh]
              overflow-hidden
              bg-neutral-900
              md:h-[430px]
            "
          >

            <motion.img
              src={service.image}
              alt={service.title}

              loading={
                index === 0
                  ? "eager"
                  : "lazy"
              }

              decoding="async"

              style={{
                y: imageY,
                scale: imageScale,
              }}

              className="
                absolute
                inset-[-8%]
                h-[116%]
                w-[116%]
                object-cover
                transform-gpu
                transition-transform
                duration-[1.2s]
                ease-out
                group-hover:scale-[1.04]
              "
            />


            {/* Image overlay */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-black/10
                transition-colors
                duration-700
                group-hover:bg-transparent
              "
            />

          </div>

        </div>

      </Link>

    </motion.div>
  );
}


// =====================================================
// SERVICES PAGE
// =====================================================

function Services() {

  return (
    <main className="bg-black text-white">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          flex
          min-h-screen
          items-center
          overflow-hidden
          bg-black
          px-6
          py-32
          md:px-10
        "
      >


        {/* =================================================
            HERO BACKGROUND IMAGE
        ================================================= */}

        <motion.div
          initial={{
            scale: 1.08,
            opacity: 0,
          }}

          animate={{
            scale: 1,
            opacity: 1,
          }}

          transition={{
            duration: 1.8,
            ease: [0.16, 1, 0.3, 1],
          }}

          className="
            absolute
            inset-[-3%]
            transform-gpu
          "
        >

          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2400&q=85"

            alt="UNBOUND wedding photography"

            loading="eager"

            decoding="async"

            className="
              h-full
              w-full
              object-cover
              opacity-55
            "
          />

        </motion.div>


        {/* =================================================
            CINEMATIC DARK OVERLAY
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-black/35
          "
        />


        {/* =================================================
            TOP / BOTTOM CINEMATIC GRADIENT
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-b
            from-black/55
            via-black/10
            to-black/80
          "
        />


        {/* =================================================
            LEFT / RIGHT GRADIENT
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-r
            from-black/35
            via-transparent
            to-black/20
          "
        />


        {/* =================================================
            NAVIGATION
        ================================================= */}

        <nav
          className="
            absolute
            left-0
            right-0
            top-0
            z-30
            flex
            items-center
            justify-between
            px-6
            py-7
            md:px-10
            md:py-9
          "
        >

          {/* Logo */}

          <Link
            to="/"
            className="
              text-sm
              font-medium
              tracking-[0.35em]
            "
          >
            UNBOUND
          </Link>


          {/* Home */}

          <Link
            to="/"
            className="
              flex
              items-center
              gap-3
              text-[9px]
              uppercase
              tracking-[0.35em]
              text-white/50
              transition-colors
              hover:text-white
            "
          >

            <ArrowLeft
              size={14}
              strokeWidth={1}
            />

            Home

          </Link>

        </nav>


        {/* =================================================
            HERO CONTENT
        ================================================= */}

        <motion.div

          initial={{
            opacity: 0,
            y: 80,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.25,
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}

          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-7xl
          "
        >

          <p
            className="
              mb-8
              text-[9px]
              uppercase
              tracking-[0.55em]
              text-white/50
              md:text-xs
            "
          >
            What we create
          </p>


          <h1
            className="
              max-w-6xl
              text-7xl
              font-light
              leading-[0.8]
              tracking-[-0.07em]
              md:text-8xl
              lg:text-[11vw]
            "
          >
            SERVICES
          </h1>


          <p
            className="
              mt-10
              max-w-xl
              text-sm
              leading-7
              text-white/60
              md:text-lg
            "
          >
            Visual experiences created around people,
            emotion and the moments that matter.
          </p>

        </motion.div>


        {/* =================================================
            SCROLL INDICATOR
        ================================================= */}

        <motion.div

          initial={{
            opacity: 0,
          }}

          animate={{
            opacity: 1,
          }}

          transition={{
            delay: 1.4,
            duration: 0.8,
          }}

          className="
            absolute
            bottom-8
            left-1/2
            z-20
            flex
            -translate-x-1/2
            flex-col
            items-center
            gap-3
          "
        >

          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.45em]
              text-white/50
            "
          >
            Explore
          </span>


          <motion.div
            animate={{
              y: [0, 6, 0],
            }}

            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <ArrowDown
              size={15}
              strokeWidth={1}
              className="text-white/70"
            />

          </motion.div>

        </motion.div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section
        className="
          px-6
          py-32
          md:px-10
          md:py-48
        "
      >

        <motion.div

          initial={{
            opacity: 0,
            y: 60,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
            amount: 0.25,
          }}

          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}

          className="mx-auto max-w-7xl"
        >

          <p
            className="
              mb-8
              text-[9px]
              uppercase
              tracking-[0.5em]
              text-white/30
            "
          >
            Our craft
          </p>


          <h2
            className="
              max-w-5xl
              text-5xl
              font-light
              leading-[0.95]
              tracking-[-0.06em]
              md:text-7xl
              lg:text-[7vw]
            "
          >
            We don't just
            <br />
            document moments.
            <br />
            We preserve them.
          </h2>

        </motion.div>

      </section>


      {/* =====================================================
          SERVICES LIST
      ===================================================== */}

      <section
        className="
          px-6
          md:px-10
        "
      >

        <div className="mx-auto max-w-7xl">

          {services.map(
            (service, index) => (
              <ServiceRow
                key={service.number}
                service={service}
                index={index}
              />
            )
          )}

          <div className="border-t border-white/10" />

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        className="
          px-6
          py-40
          md:px-10
          md:py-56
        "
      >

        <motion.div

          initial={{
            opacity: 0,
            y: 60,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 1,
          }}

          className="mx-auto max-w-7xl"
        >

          <p
            className="
              mb-8
              text-[9px]
              uppercase
              tracking-[0.5em]
              text-white/30
            "
          >
            Have something in mind?
          </p>


          <Link
            to="/contact"
            className="
              group
              flex
              items-center
              justify-between
              border-b
              border-white/20
              pb-8
            "
          >

            <h2
              className="
                text-5xl
                font-light
                tracking-[-0.06em]
                md:text-8xl
                lg:text-[9vw]
              "
            >
              LET&apos;S CREATE.
            </h2>


            <span
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                transition-all
                duration-500
                group-hover:bg-white
                group-hover:text-black
                md:h-20
                md:w-20
              "
            >

              <ArrowUpRight
                size={22}
                strokeWidth={1}
              />

            </span>

          </Link>

        </motion.div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer
        className="
          border-t
          border-white/10
          px-6
          py-10
          md:px-10
        "
      >

        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            gap-6
            text-[9px]
            uppercase
            tracking-[0.35em]
            text-white/30
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          <span>
            UNBOUND
          </span>


          <span>
            Weddings · Events · Stories
          </span>


          <Link
            to="/contact"
            className="
              transition-colors
              hover:text-white
            "
          >
            Start a conversation
          </Link>

        </div>

      </footer>

    </main>
  );
}


export default Services;