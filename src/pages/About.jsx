import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

import {
  ArrowLeft,
  ArrowUpRight,
  ArrowDown,
  ArrowRight,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import {
  useRef,
} from "react";


const EASE = [0.16, 1, 0.3, 1];


// =====================================================
// ABOUT PAGE
// =====================================================

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


  // =====================================================
  // PROCESS DATA
  // =====================================================

  const process = [
    {
      number: "01",
      title: "Discover",
      description:
        "We listen first. Your story, your people, your vision and what makes the occasion yours.",
    },

    {
      number: "02",
      title: "Plan",
      description:
        "We shape the creative direction, understand the event and prepare around the moments that matter.",
    },

    {
      number: "03",
      title: "Create",
      description:
        "We capture the energy, emotion and atmosphere while allowing the day to unfold naturally.",
    },

    {
      number: "04",
      title: "Remember",
      description:
        "Your moments become photographs, films and stories designed to take you back there.",
    },
  ];


  // =====================================================
  // VALUES
  // =====================================================

  const values = [
    {
      number: "01",
      title: "Emotion",
      description:
        "We look beyond what happened and focus on how it felt.",
    },

    {
      number: "02",
      title: "Intent",
      description:
        "Every frame has a reason. Every story deserves a point of view.",
    },

    {
      number: "03",
      title: "Story",
      description:
        "Because the strongest memories are never just a collection of images.",
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


          {/* HERO IMAGE */}

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
              loading="eager"
              decoding="async"
              className="
                h-full
                w-full
                object-cover
              "
            />

          </motion.div>


          {/* DARK OVERLAY */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-black/45
            "
          />


          {/* CINEMATIC GRADIENT */}

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


          {/* NAVIGATION */}

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


          {/* HERO CONTENT */}

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
                  ease: EASE,
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
                  ease: EASE,
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
                  ease: EASE,
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


          {/* SCROLL INDICATOR */}

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
              ease: EASE,
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
              loading="lazy"
              decoding="async"
              className="
                h-full
                w-full
                object-cover
              "
            />

          </motion.div>


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
              ease: EASE,
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
              loading="lazy"
              decoding="async"
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
          UNBOUND SIGNATURE
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
              ease: EASE,
            }}
          >

            <p
              className="
                mb-8
                text-[9px]
                uppercase
                tracking-[0.5em]
                text-white/25
              "
            >
              The UNBOUND signature
            </p>


            <h2
              className="
                text-[15vw]
                font-light
                leading-[0.72]
                tracking-[-0.08em]
                md:text-[10vw]
              "
            >
              CREATE.
              <br />
              <span className="text-white/35">
                CAPTURE.
              </span>
              <br />
              TELL.
            </h2>


            <div
              className="
                mt-16
                flex
                flex-col
                gap-8
                md:flex-row
                md:items-end
                md:justify-between
              "
            >

              <p
                className="
                  max-w-xl
                  text-base
                  leading-8
                  text-white/45
                  md:text-lg
                "
              >
                We create the experience, capture the feeling
                and tell the story that remains long after
                the celebration is over.
              </p>


              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.45em]
                  text-white/20
                "
              >
                Photography · Films · Experiences
              </span>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          OUR PROCESS
      ===================================================== */}

      <section
        className="
          border-t
          border-white/10
          bg-[#050505]
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
              y: 50,
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
              ease: EASE,
            }}
          >

            <p
              className="
                mb-8
                text-[9px]
                uppercase
                tracking-[0.5em]
                text-white/25
              "
            >
              Our process
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
                  max-w-5xl
                  text-5xl
                  font-light
                  leading-[0.9]
                  tracking-[-0.06em]
                  md:text-7xl
                  lg:text-[6.5vw]
                "
              >
                From first idea
                <br />
                to lasting memory.
              </h2>


              <p
                className="
                  max-w-sm
                  text-sm
                  leading-7
                  text-white/35
                "
              >
                A simple process built around
                communication, creativity and
                the moments that matter.
              </p>

            </div>

          </motion.div>


          <div
            className="
              mt-24
              divide-y
              divide-white/10
              border-y
              border-white/10
              md:mt-32
            "
          >

            {process.map((item, index) => (

              <motion.div
                key={item.number}
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
                  delay: index * 0.08,
                  duration: 0.8,
                  ease: EASE,
                }}

                className="
                  group
                  grid
                  gap-6
                  py-10
                  md:grid-cols-[100px_1fr_1fr]
                  md:items-center
                  md:py-14
                "
              >

                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.4em]
                    text-white/25
                  "
                >
                  {item.number}
                </span>


                <h3
                  className="
                    text-4xl
                    font-light
                    tracking-[-0.05em]
                    transition-transform
                    duration-500
                    group-hover:translate-x-2
                    md:text-6xl
                  "
                >
                  {item.title}
                </h3>


                <p
                  className="
                    max-w-md
                    text-sm
                    leading-7
                    text-white/35
                    md:text-base
                  "
                >
                  {item.description}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          VALUES
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
            }}

            transition={{
              duration: 1,
            }}
          >

            <p
              className="
                mb-8
                text-[9px]
                uppercase
                tracking-[0.5em]
                text-white/25
              "
            >
              What we believe
            </p>


            <h2
              className="
                max-w-5xl
                text-5xl
                font-light
                leading-[0.92]
                tracking-[-0.06em]
                md:text-7xl
                lg:text-[6vw]
              "
            >
              Emotion over
              <br />
              perfection.
            </h2>

          </motion.div>


          <div
            className="
              mt-24
              grid
              grid-cols-1
              gap-px
              overflow-hidden
              border
              border-white/10
              bg-white/10
              md:grid-cols-3
            "
          >

            {values.map((value, index) => (

              <motion.div
                key={value.number}
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
                  delay: index * 0.1,
                  duration: 0.8,
                  ease: EASE,
                }}

                className="
                  group
                  bg-black
                  p-8
                  md:p-10
                  lg:p-12
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
                      uppercase
                      tracking-[0.4em]
                      text-white/25
                    "
                  >
                    {value.number}
                  </span>


                  <ArrowUpRight
                    size={17}
                    strokeWidth={1}
                    className="
                      text-white/20
                      transition-all
                      duration-500
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:text-white
                    "
                  />

                </div>


                <h3
                  className="
                    mt-20
                    text-4xl
                    font-light
                    tracking-[-0.05em]
                    md:text-5xl
                  "
                >
                  {value.title}
                </h3>


                <p
                  className="
                    mt-6
                    text-sm
                    leading-7
                    text-white/35
                  "
                >
                  {value.description}
                </p>

              </motion.div>

            ))}

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
            ease: EASE,
          }}

          className="
            absolute
            inset-0
          "
        >

          <img
            src="https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=2400&q=90"
            alt="Celebration"
            loading="lazy"
            decoding="async"
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
                    loading="lazy"
                    decoding="async"
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
          BEHIND UNBOUND
      ===================================================== */}

      <section
        className="
          border-t
          border-white/10
          bg-[#050505]
          px-6
          py-32
          md:px-10
          md:py-48
        "
      >

        <div
          className="
            mx-auto
            grid
            max-w-7xl
            grid-cols-1
            gap-16
            md:grid-cols-12
            md:gap-10
          "
        >

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            viewport={{
              once: true,
              amount: 0.25,
            }}

            transition={{
              duration: 1,
              ease: EASE,
            }}

            className="md:col-span-5"
          >

            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.5em]
                text-white/25
              "
            >
              Behind UNBOUND
            </p>


            <h2
              className="
                mt-8
                text-5xl
                font-light
                leading-[0.92]
                tracking-[-0.06em]
                md:text-7xl
              "
            >
              Built around
              <br />
              <span className="text-white/30">
                people.
              </span>
            </h2>

          </motion.div>


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
              amount: 0.25,
            }}

            transition={{
              duration: 1,
              delay: 0.15,
              ease: EASE,
            }}

            className="md:col-span-7"
          >

            <div
              className="
                border
                border-white/10
                p-8
                md:p-12
              "
            >

              <p
                className="
                  text-xl
                  font-light
                  leading-8
                  tracking-[-0.02em]
                  text-white/75
                  md:text-2xl
                  md:leading-9
                "
              >
                UNBOUND was built from a simple belief:
                extraordinary moments deserve to be remembered
                in a way that feels as real as living them.
              </p>


              <p
                className="
                  mt-8
                  max-w-xl
                  text-sm
                  leading-7
                  text-white/35
                  md:text-base
                "
              >
                We're building a creative event house around
                photography, cinematic storytelling and
                unforgettable experiences — one celebration
                at a time.
              </p>


              <div
                className="
                  mt-10
                  flex
                  items-center
                  gap-4
                  border-t
                  border-white/10
                  pt-8
                "
              >

                <span
                  className="
                    h-px
                    w-10
                    bg-white/30
                  "
                />

                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.45em]
                    text-white/25
                  "
                >
                  The beginning of something
                </span>

              </div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          CLOSING CTA
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
            loading="lazy"
            decoding="async"
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
            ease: EASE,
          }}

          className="
            relative
            z-10
            w-full
            max-w-6xl
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


          <p
            className="
              mx-auto
              mt-8
              max-w-md
              text-sm
              leading-7
              text-white/40
            "
          >
            Tell us your date, your occasion and what
            you're imagining. We'll take it from there.
          </p>


          <Link
            to="/contact"
            className="
              group
              mt-12
              inline-flex
              items-center
              gap-5
              rounded-full
              border
              border-white/25
              bg-white/[0.04]
              px-7
              py-4
              text-[9px]
              uppercase
              tracking-[0.4em]
              text-white/75
              backdrop-blur-md
              transition-all
              duration-500
              hover:border-white
              hover:bg-white
              hover:text-black
            "
          >

            CHECK YOUR DATE

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


          <Link
            to="/contact"
            className="
              group
              mt-5
              flex
              items-center
              justify-center
              gap-3
              text-[8px]
              uppercase
              tracking-[0.4em]
              text-white/30
              transition-colors
              duration-300
              hover:text-white
            "
          >

            Start a conversation

            <ArrowRight
              size={13}
              strokeWidth={1}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />

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
          bg-black
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


export default About;