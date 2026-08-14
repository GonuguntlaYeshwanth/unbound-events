import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";

import {
  ArrowDown,
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Compass,
  Camera,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

import { useRef } from "react";


// =====================================================
// MOTION
// =====================================================

const EASE = [0.16, 1, 0.3, 1];


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
// PROCESS DATA
// =====================================================

const processSteps = [
  {
    number: "01",
    title: "DISCOVER",
    description:
      "We start by understanding your event, your people and what makes the moment yours.",
    icon: Compass,
  },

  {
    number: "02",
    title: "PLAN",
    description:
      "We shape the visual approach, timeline and details so everything feels intentional.",
    icon: CalendarDays,
  },

  {
    number: "03",
    title: "CREATE",
    description:
      "We capture the atmosphere, emotion and unexpected moments as they naturally happen.",
    icon: Camera,
  },

  {
    number: "04",
    title: "REMEMBER",
    description:
      "Your photographs and films become a story you can return to long after the event.",
    icon: Sparkles,
  },
];


// =====================================================
// SERVICE ROW
// =====================================================

function ServiceRow({ service, index }) {

  const rowRef = useRef(null);

  const reduceMotion = useReducedMotion();

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
    reduceMotion
      ? ["0%", "0%"]
      : ["-8%", "8%"]
  );


  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion
      ? [1.03, 1.03]
      : [1.08, 1]
  );


  return (
    <motion.div
      ref={rowRef}

      initial={
        reduceMotion
          ? {
              opacity: 0,
            }
          : {
              opacity: 0,
              y: 60,
            }
      }

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
        ease: EASE,
      }}

      className="
        border-t
        border-white/10
      "
    >

      <Link
        to={service.link}
        className="
          group
          block
          py-14
          md:py-20
        "
      >

        <div
          className="
            grid
            gap-10
            md:grid-cols-[90px_1fr_0.8fr]
            md:items-center
          "
        >


          {/* =================================================
              NUMBER
          ================================================= */}

          <div>

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-white/30
              "
            >
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


            <p
              className="
                mt-6
                max-w-xl
                text-sm
                leading-7
                text-white/40
                md:text-base
              "
            >
              {service.description}
            </p>


            {/* Mobile explore */}

            <div
              className="
                mt-7
                flex
                items-center
                gap-3
                text-[8px]
                uppercase
                tracking-[0.35em]
                text-white/30
                md:hidden
              "
            >

              Explore service

              <ArrowRight
                size={13}
                strokeWidth={1}
              />

            </div>

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

              whileHover={
                reduceMotion
                  ? {}
                  : {
                      scale: 1.05,
                    }
              }

              transition={{
                duration: 1.2,
                ease: EASE,
              }}

              className="
                absolute
                inset-[-8%]
                h-[116%]
                w-[116%]
                object-cover
                transform-gpu
              "
            />


            {/* Image overlay */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-black/15
                transition-colors
                duration-700
                group-hover:bg-black/5
              "
            />


            {/* Image number */}

            <div
              className="
                absolute
                right-5
                top-5
                rounded-full
                border
                border-white/20
                bg-black/20
                px-3
                py-2
                text-[7px]
                tracking-[0.3em]
                text-white/60
                backdrop-blur-md
              "
            >
              {service.number}
            </div>

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

  const reduceMotion = useReducedMotion();


  return (
    <main className="overflow-hidden bg-black text-white">


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
            scale: reduceMotion ? 1 : 1.08,
            opacity: 0,
          }}

          animate={{
            scale: 1,
            opacity: 1,
          }}

          transition={{
            duration: 1.8,
            ease: EASE,
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

          <Link
            to="/"
            className="
              text-sm
              font-medium
              tracking-[0.35em]
              transition-opacity
              duration-300
              hover:opacity-60
            "
          >
            UNBOUND
          </Link>


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
          initial={
            reduceMotion
              ? {
                  opacity: 0,
                }
              : {
                  opacity: 0,
                  y: 80,
                }
          }

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.25,
            duration: 1.2,
            ease: EASE,
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
            animate={
              reduceMotion
                ? {}
                : {
                    y: [0, 6, 0],
                  }
            }

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
          SERVICE QUICK NAVIGATION
      ===================================================== */}

      <section
        className="
          sticky
          top-0
          z-40
          border-y
          border-white/10
          bg-black/85
          px-6
          py-4
          backdrop-blur-xl
          md:px-10
        "
      >

        <div
          className="
            mx-auto
            flex
            max-w-7xl
            items-center
            gap-3
            overflow-x-auto
            scrollbar-none
          "
        >

          <span
            className="
              mr-3
              shrink-0
              text-[7px]
              uppercase
              tracking-[0.4em]
              text-white/20
            "
          >
            Explore
          </span>


          {services.map((service) => (

            <a
              key={service.number}
              href={`#service-${service.number}`}
              className="
                flex
                shrink-0
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                px-4
                py-2.5
                text-[8px]
                uppercase
                tracking-[0.3em]
                text-white/40
                transition-all
                duration-300
                hover:border-white/30
                hover:bg-white
                hover:text-black
              "
            >

              <span className="text-white/25">
                {service.number}
              </span>

              {service.title}

            </a>

          ))}

        </div>

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
            ease: EASE,
          }}

          className="
            mx-auto
            max-w-7xl
          "
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
            <span className="text-white/35">
              We preserve them.
            </span>
          </h2>

        </motion.div>

      </section>


      {/* =====================================================
          FEATURED WEDDINGS
      ===================================================== */}

      <section
        className="
          px-6
          pb-32
          md:px-10
          md:pb-44
        "
      >

        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
              amount: 0.2,
            }}

            transition={{
              duration: 1,
              ease: EASE,
            }}

            className="
              mb-10
              flex
              items-end
              justify-between
              gap-8
            "
          >

            <div>

              <p
                className="
                  mb-5
                  text-[8px]
                  uppercase
                  tracking-[0.55em]
                  text-white/25
                "
              >
                Featured service
              </p>


              <h2
                className="
                  text-4xl
                  font-light
                  tracking-[-0.055em]
                  md:text-6xl
                "
              >
                WEDDINGS
              </h2>

            </div>


            <span
              className="
                hidden
                text-[8px]
                uppercase
                tracking-[0.4em]
                text-white/20
                md:block
              "
            >
              01 — Signature
            </span>

          </motion.div>


          <motion.div
            initial={{
              opacity: 0,
              y: 70,
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
              duration: 1.2,
              ease: EASE,
            }}
          >

            <Link
              to="/services/weddings"
              className="
                group
                relative
                block
                aspect-[4/3]
                overflow-hidden
                bg-neutral-900
                md:aspect-[16/7]
              "
            >

              <motion.img
                src={services[0].image}
                alt="UNBOUND Weddings"
                className="
                  h-full
                  w-full
                  object-cover
                "
                initial={{
                  scale: reduceMotion ? 1 : 1.08,
                }}
                whileInView={{
                  scale: 1,
                }}
                whileHover={
                  reduceMotion
                    ? {}
                    : {
                        scale: 1.04,
                      }
                }
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.4,
                  ease: EASE,
                }}
              />


              <div
                className="
                  absolute
                  inset-0
                  bg-black/30
                  transition-colors
                  duration-700
                  group-hover:bg-black/45
                "
              />


              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/90
                  via-black/10
                  to-transparent
                "
              />


              <div
                className="
                  absolute
                  bottom-7
                  left-7
                  right-7
                  flex
                  flex-col
                  gap-8
                  md:bottom-10
                  md:left-10
                  md:right-10
                  md:flex-row
                  md:items-end
                  md:justify-between
                "
              >

                <div>

                  <p
                    className="
                      mb-3
                      text-[8px]
                      uppercase
                      tracking-[0.4em]
                      text-white/45
                    "
                  >
                    Photography · Films · Story
                  </p>


                  <h3
                    className="
                      text-5xl
                      font-light
                      tracking-[-0.06em]
                      md:text-7xl
                    "
                  >
                    Weddings
                  </h3>

                </div>


                <div
                  className="
                    flex
                    items-center
                    gap-4
                    text-[8px]
                    uppercase
                    tracking-[0.35em]
                    text-white/60
                  "
                >

                  Explore Weddings

                  <span
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/30
                      transition-all
                      duration-500
                      group-hover:border-white
                      group-hover:bg-white
                      group-hover:text-black
                    "
                  >

                    <ArrowUpRight
                      size={16}
                      strokeWidth={1}
                    />

                  </span>

                </div>

              </div>

            </Link>

          </motion.div>

        </div>

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

              <div
                key={service.number}
                id={`service-${service.number}`}
                className="scroll-mt-24"
              >

                <ServiceRow
                  service={service}
                  index={index}
                />

              </div>

            )
          )}

          <div className="border-t border-white/10" />

        </div>

      </section>


      {/* =====================================================
          UNBOUND SIGNATURE
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-y
          border-white/10
          bg-neutral-950
          px-6
          py-32
          md:px-10
          md:py-48
        "
      >

        {/* Background glow */}

        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  scale: [1, 1.08, 1],
                  opacity: [0.15, 0.25, 0.15],
                }
          }

          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}

          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/[0.035]
            blur-3xl
          "
        />


        <div
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
          "
        >

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
              amount: 0.2,
            }}

            transition={{
              duration: 1,
              ease: EASE,
            }}
          >

            <p
              className="
                mb-8
                text-[8px]
                uppercase
                tracking-[0.6em]
                text-white/25
              "
            >
              The UNBOUND signature
            </p>


            <h2
              className="
                text-5xl
                font-light
                leading-[0.85]
                tracking-[-0.07em]
                md:text-8xl
                lg:text-[9vw]
              "
            >

              CREATE.
              <br />

              <span className="text-white/45">
                CAPTURE.
              </span>

              <br />

              TELL.

            </h2>


            <div
              className="
                mt-14
                grid
                gap-8
                md:grid-cols-3
              "
            >

              {[
                {
                  number: "01",
                  title: "CREATE",
                  text:
                    "Build experiences and visual concepts around the people and the moment.",
                },

                {
                  number: "02",
                  title: "CAPTURE",
                  text:
                    "Preserve the emotion, energy and details while they happen naturally.",
                },

                {
                  number: "03",
                  title: "TELL",
                  text:
                    "Turn everything into photographs, films and stories worth returning to.",
                },
              ].map((item, index) => (

                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.8,
                    ease: EASE,
                  }}
                  className="
                    border-t
                    border-white/10
                    pt-6
                  "
                >

                  <span
                    className="
                      text-[8px]
                      tracking-[0.35em]
                      text-white/25
                    "
                  >
                    {item.number}
                  </span>


                  <h3
                    className="
                      mt-6
                      text-2xl
                      font-light
                      tracking-[-0.04em]
                    "
                  >
                    {item.title}
                  </h3>


                  <p
                    className="
                      mt-4
                      max-w-sm
                      text-sm
                      leading-7
                      text-white/35
                    "
                  >
                    {item.text}
                  </p>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          OUR PROCESS
      ===================================================== */}

      <section
        className="
          bg-black
          px-6
          py-32
          md:px-10
          md:py-48
        "
      >

        <div className="mx-auto max-w-7xl">


          {/* PROCESS HEADER */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
              amount: 0.2,
            }}

            transition={{
              duration: 1,
              ease: EASE,
            }}
          >

            <p
              className="
                mb-7
                text-[8px]
                uppercase
                tracking-[0.6em]
                text-white/25
              "
            >
              How it works
            </p>


            <div
              className="
                flex
                flex-col
                gap-8
                md:flex-row
                md:items-end
                md:justify-between
              "
            >

              <h2
                className="
                  text-5xl
                  font-light
                  leading-[0.9]
                  tracking-[-0.06em]
                  md:text-7xl
                  lg:text-[6vw]
                "
              >
                Our process.
              </h2>


              <p
                className="
                  max-w-sm
                  text-sm
                  leading-7
                  text-white/35
                "
              >
                Simple, intentional and built around
                making your experience feel effortless.
              </p>

            </div>

          </motion.div>


          {/* PROCESS GRID */}

          <div
            className="
              mt-20
              grid
              border-t
              border-white/10
              md:grid-cols-4
            "
          >

            {processSteps.map(
              (step, index) => {

                const Icon = step.icon;

                return (

                  <motion.div
                    key={step.number}
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.8,
                      ease: EASE,
                    }}
                    className="
                      group
                      border-b
                      border-white/10
                      py-8
                      md:border-b-0
                      md:border-r
                      md:px-8
                      md:py-10
                      md:first:pl-0
                      md:last:border-r-0
                    "
                  >

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                      "
                    >

                      <span
                        className="
                          text-[9px]
                          tracking-[0.35em]
                          text-white/25
                        "
                      >
                        {step.number}
                      </span>


                      <Icon
                        size={17}
                        strokeWidth={1}
                        className="
                          text-white/25
                          transition-all
                          duration-500
                          group-hover:text-white
                          group-hover:rotate-6
                        "
                      />

                    </div>


                    <h3
                      className="
                        mt-12
                        text-2xl
                        font-light
                        tracking-[-0.04em]
                      "
                    >
                      {step.title}
                    </h3>


                    <p
                      className="
                        mt-5
                        text-sm
                        leading-7
                        text-white/35
                      "
                    >
                      {step.description}
                    </p>

                  </motion.div>

                );

              }
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-t
          border-white/10
          bg-neutral-950
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
            amount: 0.2,
          }}

          transition={{
            duration: 1,
            ease: EASE,
          }}

          className="
            relative
            z-10
            mx-auto
            max-w-7xl
          "
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


          <h2
            className="
              max-w-6xl
              text-5xl
              font-light
              leading-[0.85]
              tracking-[-0.065em]
              md:text-8xl
              lg:text-[8vw]
            "
          >
            Let&apos;s create
            <br />
            something
            <br />
            unforgettable.
          </h2>


          <div
            className="
              mt-14
              flex
              flex-col
              gap-8
              md:flex-row
              md:items-center
              md:justify-between
            "
          >

            <p
              className="
                max-w-lg
                text-sm
                leading-7
                text-white/40
                md:text-base
              "
            >
              Planning a wedding, event, pre-wedding
              or cinematic story? Tell us what you're
              imagining and let's start there.
            </p>


            <Link
              to="/contact"
              className="
                group
                flex
                w-fit
                items-center
                gap-5
                rounded-full
                border
                border-white/25
                px-7
                py-4
                text-[9px]
                uppercase
                tracking-[0.4em]
                text-white/75
                transition-all
                duration-500
                hover:border-white
                hover:bg-white
                hover:text-black
              "
            >

              <span>
                Check your date
              </span>


              <ArrowUpRight
                size={16}
                strokeWidth={1.2}
                className="
                  transition-transform
                  duration-500
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />

            </Link>

          </div>


          {/* CTA UNDERLINE */}

          <motion.div
            initial={{
              scaleX: 0,
            }}

            whileInView={{
              scaleX: 1,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              delay: 0.4,
              duration: 1.2,
              ease: EASE,
            }}

            style={{
              originX: 0,
            }}

            className="
              mt-16
              h-px
              w-full
              origin-left
              bg-white/15
            "
          />

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


          <div
            className="
              flex
              items-center
              gap-6
            "
          >

            <Link
              to="/about"
              className="
                transition-colors
                hover:text-white
              "
            >
              About
            </Link>


            <Link
              to="/contact"
              className="
                transition-colors
                hover:text-white
              "
            >
              Contact
            </Link>

          </div>

        </div>


        <div
          className="
            mx-auto
            mt-8
            max-w-7xl
            border-t
            border-white/10
            pt-6
            text-[7px]
            uppercase
            tracking-[0.35em]
            text-white/15
          "
        >

          © 2026 UnboundEvents & CO

        </div>

      </footer>

    </main>
  );
}


export default Services;