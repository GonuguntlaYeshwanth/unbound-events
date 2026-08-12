import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

import {
  ArrowLeft,
  ArrowUpRight,
  ArrowDown,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import {
  useRef,
} from "react";


function About() {

  // =====================================================
  // HERO PARALLAX
  // =====================================================

  const heroRef = useRef(null);

  const {
    scrollYProgress: heroProgress,
  } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });


  const heroImageY = useTransform(
    heroProgress,
    [0, 1],
    ["0%", "18%"]
  );


  const heroImageScale = useTransform(
    heroProgress,
    [0, 1],
    [1.08, 1.18]
  );


  const heroTitleY = useTransform(
    heroProgress,
    [0, 1],
    ["0px", "-120px"]
  );


  const heroTitleOpacity = useTransform(
    heroProgress,
    [0, 0.75, 1],
    [1, 1, 0]
  );


  // =====================================================
  // SERVICE DATA
  // =====================================================

  const services = [
    {
      number: "01",
      title: "Weddings",
      description:
        "Honest moments, quiet glances and everything that happens between them.",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85",
      path: "/services/weddings",
    },

    {
      number: "02",
      title: "Events",
      description:
        "Energy, atmosphere and the moments that make an event unforgettable.",
      image:
        "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1400&q=85",
      path: "/services/events",
    },

    {
      number: "03",
      title: "Pre-Weddings",
      description:
        "Stories created away from the noise, built around connection and personality.",
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=85",
      path: "/services/pre-weddings",
    },

    {
      number: "04",
      title: "Cinematic Films",
      description:
        "Moving images designed to bring you back to how it actually felt.",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=85",
      path: "/services/cinematic-films",
    },
  ];


  return (
    <main className="bg-black text-white">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        ref={heroRef}
        className="
          relative
          h-[130vh]
          overflow-hidden
          bg-black
        "
      >

        <div
          className="
            sticky
            top-0
            h-screen
            overflow-hidden
          "
        >


          {/* =================================================
              HERO IMAGE
          ================================================= */}

          <motion.div
            style={{
              y: heroImageY,
              scale: heroImageScale,
            }}

            className="
              absolute
              inset-[-8%]
              transform-gpu
              will-change-transform
            "
          >

            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2400&q=90"
              alt="Wedding couple"
              className="
                h-full
                w-full
                object-cover
              "
            />

          </motion.div>


          {/* =================================================
              DARK OVERLAY
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-black/45
            "
          />


          {/* =================================================
              CINEMATIC GRADIENT
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-b
              from-black/80
              via-black/10
              to-black
            "
          />


          {/* =================================================
              NAVIGATION
          ================================================= */}

          <div
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
              py-6
              md:px-10
              md:py-8
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
                group
                flex
                items-center
                gap-3
                text-[9px]
                uppercase
                tracking-[0.35em]
                text-white/60
                transition-colors
                duration-300
                hover:text-white
              "
            >

              <ArrowLeft
                size={14}
                strokeWidth={1.2}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-x-1
                "
              />

              Back

            </Link>

          </div>


          {/* =================================================
              HERO CONTENT
          ================================================= */}

          <motion.div
            style={{
              y: heroTitleY,
              opacity: heroTitleOpacity,
            }}

            className="
              absolute
              inset-0
              z-20
              flex
              items-center
              px-6
              md:px-10
            "
          >

            <div
              className="
                mx-auto
                w-full
                max-w-7xl
              "
            >

              <motion.p
                initial={{
                  opacity: 0,
                  y: 30,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}

                className="
                  mb-8
                  text-[9px]
                  uppercase
                  tracking-[0.55em]
                  text-white/60
                  md:text-xs
                "
              >
                02 — About UNBOUND
              </motion.p>


              <motion.h1
                initial={{
                  opacity: 0,
                  y: 80,
                  letterSpacing: "0.02em",
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                  letterSpacing: "-0.075em",
                }}

                transition={{
                  duration: 1.3,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}

                className="
                  text-[18vw]
                  font-light
                  leading-[0.75]
                  md:text-[14vw]
                "
              >
                UNBOUND
              </motion.h1>


              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 1,
                  delay: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}

                className="
                  mt-10
                  grid
                  md:grid-cols-12
                "
              >

                <p
                  className="
                    text-base
                    leading-8
                    text-white/70
                    md:col-span-6
                    md:col-start-7
                    md:text-xl
                    md:leading-9
                  "
                >
                  We don't simply document celebrations.
                  We preserve the atmosphere, emotion and
                  people that made them matter.
                </p>

              </motion.div>

            </div>

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
              delay: 1.5,
              duration: 0.8,
            }}

            className="
              absolute
              bottom-8
              left-1/2
              z-30
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
                text-white/40
              "
            >
              Discover
            </span>

            <motion.div
              animate={{
                y: [0, 7, 0],
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
                className="text-white/50"
              />

            </motion.div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
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

          <div
            className="
              grid
              grid-cols-1
              gap-20
              md:grid-cols-12
              md:gap-10
            "
          >

            {/* LABEL */}

            <motion.div
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
                amount: 0.3,
              }}

              transition={{
                duration: 0.9,
              }}

              className="md:col-span-4"
            >

              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.5em]
                  text-white/25
                "
              >
                The philosophy
              </p>

            </motion.div>


            {/* TEXT */}

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
                delay: 0.1,
              }}

              className="md:col-span-8"
            >

              <h2
                className="
                  text-4xl
                  font-light
                  leading-[1]
                  tracking-[-0.055em]
                  md:text-6xl
                  lg:text-[5.5vw]
                "
              >
                The moments
                <br />
                between the moments
                <br />
                <span className="text-white/25">
                  are the ones we chase.
                </span>
              </h2>


              <p
                className="
                  mt-12
                  max-w-2xl
                  text-base
                  leading-8
                  text-white/40
                  md:text-lg
                  md:leading-9
                "
              >
                A glance across the room. A nervous laugh.
                Someone wiping away a tear. Friends dancing
                when nobody is watching.
              </p>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          EDITORIAL IMAGE
      ===================================================== */}

      <section
        className="
          bg-black
          px-6
          pb-32
          md:px-10
          md:pb-48
        "
      >

        <div
          className="
            mx-auto
            grid
            max-w-7xl
            grid-cols-1
            gap-8
            md:grid-cols-12
            md:gap-10
          "
        >

          {/* SMALL IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              y: 100,
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
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
            }}

            className="
              aspect-[4/5]
              overflow-hidden
              md:col-span-4
              md:mt-32
            "
          >

            <motion.img
              whileHover={{
                scale: 1.04,
              }}

              transition={{
                duration: 0.8,
              }}

              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85"
              alt="Wedding moment"
              className="
                h-full
                w-full
                object-cover
              "
            />

          </motion.div>


          {/* LARGE IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              y: 100,
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
              duration: 1.1,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}

            className="
              aspect-[4/5]
              overflow-hidden
              md:col-span-7
              md:col-start-6
            "
          >

            <motion.img
              whileHover={{
                scale: 1.04,
              }}

              transition={{
                duration: 0.8,
              }}

              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=90"
              alt="Couple celebrating"
              className="
                h-full
                w-full
                object-cover
              "
            />

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          OUR APPROACH
      ===================================================== */}

      <section
        className="
          border-t
          border-white/10
          bg-black
          px-6
          py-32
          md:px-10
          md:py-48
        "
      >

        <div className="mx-auto max-w-7xl">

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
            }}
          >

            <p
              className="
                mb-10
                text-[9px]
                uppercase
                tracking-[0.5em]
                text-white/25
              "
            >
              Our approach
            </p>


            <h2
              className="
                max-w-6xl
                text-5xl
                font-light
                leading-[0.92]
                tracking-[-0.06em]
                md:text-7xl
                lg:text-[7vw]
              "
            >
              We don't just
              <br />
              capture the day.
              <br />
              <span className="text-white/25">
                We capture what it meant.
              </span>
            </h2>

          </motion.div>


          <div
            className="
              mt-24
              grid
              grid-cols-1
              gap-16
              md:mt-36
              md:grid-cols-12
            "
          >

            <div className="md:col-span-5">

              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.45em]
                  text-white/20
                "
              >
                Behind the lens
              </p>

            </div>


            <div className="md:col-span-7">

              <p
                className="
                  text-base
                  leading-8
                  text-white/50
                  md:text-lg
                  md:leading-9
                "
              >
                UNBOUND is a creative event house built around
                photography, cinematic storytelling and
                unforgettable experiences.
              </p>


              <p
                className="
                  mt-8
                  text-sm
                  leading-7
                  text-white/30
                  md:text-base
                  md:leading-8
                "
              >
                From weddings and pre-weddings to events and
                cinematic films, our work is driven by emotion,
                atmosphere and the people at the heart of every
                celebration.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FULL WIDTH CINEMATIC IMAGE
      ===================================================== */}

      <section
        className="
          relative
          h-[75vh]
          overflow-hidden
          bg-black
        "
      >

        <motion.div
          initial={{
            scale: 1.12,
          }}

          whileInView={{
            scale: 1,
          }}

          viewport={{
            once: true,
            amount: 0.2,
          }}

          transition={{
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1],
          }}

          className="
            absolute
            inset-0
          "
        >

          <img
            src="https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=2400&q=90"
            alt="Celebration"
            className="
              h-full
              w-full
              object-cover
            "
          />

        </motion.div>


        <div
          className="
            absolute
            inset-0
            bg-black/45
          "
        />


        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/60
            via-transparent
            to-black
          "
        />


        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            px-6
            text-center
          "
        >

          <motion.h2
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
              amount: 0.4,
            }}

            transition={{
              duration: 1,
            }}

            className="
              max-w-5xl
              text-4xl
              font-light
              leading-[0.95]
              tracking-[-0.05em]
              md:text-7xl
              lg:text-[6vw]
            "
          >
            Because someday,
            <br />
            these moments become
            <br />
            <span className="text-white/45">
              memories.
            </span>
          </motion.h2>

        </div>

      </section>


      {/* =====================================================
          WHAT WE DO
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

          <div
            className="
              mb-20
              flex
              items-end
              justify-between
            "
          >

            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.5em]
                text-white/25
              "
            >
              What we do
            </p>


            <span
              className="
                hidden
                text-[9px]
                uppercase
                tracking-[0.35em]
                text-white/20
                md:block
              "
            >
              04 disciplines
            </span>

          </div>


          <div
            className="
              divide-y
              divide-white/10
              border-y
              border-white/10
            "
          >

            {services.map((service) => (

              <Link
                key={service.number}
                to={service.path}
                className="
                  group
                  relative
                  flex
                  min-h-[150px]
                  items-center
                  justify-between
                  overflow-hidden
                  py-8
                  md:min-h-[210px]
                  md:py-12
                "
              >

                {/* HOVER IMAGE */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    right-0
                    w-1/2
                    overflow-hidden
                    opacity-0
                    transition-all
                    duration-700
                    group-hover:opacity-100
                    md:w-1/3
                  "
                >

                  <img
                    src={service.image}
                    alt=""
                    className="
                      h-full
                      w-full
                      object-cover
                      grayscale
                      transition-transform
                      duration-1000
                      group-hover:scale-110
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/40
                    "
                  />

                </div>


                {/* TEXT */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    items-baseline
                    gap-5
                    md:gap-8
                  "
                >

                  <span
                    className="
                      text-[9px]
                      text-white/20
                    "
                  >
                    {service.number}
                  </span>


                  <div>

                    <h3
                      className="
                        text-3xl
                        font-light
                        tracking-[-0.04em]
                        transition-transform
                        duration-500
                        group-hover:translate-x-2
                        md:text-6xl
                      "
                    >
                      {service.title}
                    </h3>


                    <p
                      className="
                        mt-3
                        max-w-md
                        text-xs
                        leading-6
                        text-white/30
                        md:text-sm
                      "
                    >
                      {service.description}
                    </p>

                  </div>

                </div>


                {/* ARROW */}

                <ArrowUpRight
                  size={22}
                  strokeWidth={1}
                  className="
                    relative
                    z-10
                    text-white/25
                    transition-all
                    duration-500
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    group-hover:text-white
                  "
                />

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CLOSING
      ===================================================== */}

      <section
        className="
          relative
          flex
          min-h-[90vh]
          items-center
          justify-center
          overflow-hidden
          bg-neutral-950
          px-6
          py-32
          text-center
        "
      >

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-20
          "
        >

          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2200&q=80"
            alt=""
            className="
              h-full
              w-full
              object-cover
            "
          />

        </div>


        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-black/75
          "
        />


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
            amount: 0.3,
          }}

          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}

          className="
            relative
            z-10
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
            Your story starts here
          </p>


          <h2
            className="
              text-5xl
              font-light
              leading-[0.92]
              tracking-[-0.06em]
              md:text-7xl
              lg:text-[7vw]
            "
          >
            Let's create
            <br />
            something
            <br />
            unforgettable.
          </h2>


          <Link
            to="/contact"
            className="
              group
              mt-12
              inline-flex
              items-center
              gap-4
              border-b
              border-white/20
              pb-3
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-white/60
              transition-all
              duration-500
              hover:border-white
              hover:text-white
            "
          >

            Start a conversation

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

        </motion.div>

      </section>


    </main>
  );
}


export default About;