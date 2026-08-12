import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

import {
  ArrowDown,
  ArrowUpRight,
  Menu,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import {
  useRef,
  useState,
} from "react";

import stories from "../data/stories";
import StoryCard from "../components/StoryCard";
import MobileMenu from "../components/MobileMenu";


function Home() {

  // =====================================================
  // HERO SCROLL
  // =====================================================

  const heroRef = useRef(null);

  const {
    scrollYProgress,
  } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });


  // =====================================================
  // STORY SLIDER
  // =====================================================

  const [currentStory, setCurrentStory] = useState(0);

  const [direction, setDirection] = useState(1);


  // =====================================================
  // MOBILE MENU
  // =====================================================

  const [menuOpen, setMenuOpen] = useState(false);


  // =====================================================
  // STORY CONTROLS
  // =====================================================

  const nextStory = () => {

    setDirection(1);

    setCurrentStory((current) =>
      current === stories.length - 1
        ? 0
        : current + 1
    );

  };


  const previousStory = () => {

    setDirection(-1);

    setCurrentStory((current) =>
      current === 0
        ? stories.length - 1
        : current - 1
    );

  };


  // =====================================================
  // HERO IMAGE MOTION
  // =====================================================

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.08, 1.16]
  );


  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", "35px"]
  );


  // =====================================================
  // HERO TITLE MOTION
  // =====================================================

  const titleY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", "-90px"]
  );


  const titleScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.92]
  );


  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.75, 1],
    [1, 1, 0]
  );


  // =====================================================
  // STORY REVEAL
  // =====================================================

  const storyOpacity = useTransform(
    scrollYProgress,
    [0.68, 0.88, 1],
    [0, 0.8, 1]
  );


  const storyY = useTransform(
    scrollYProgress,
    [0.68, 1],
    ["50px", "0px"]
  );


  const storyScale = useTransform(
    scrollYProgress,
    [0.68, 1],
    [0.96, 1]
  );


  // =====================================================
  // ABOUT SECTION PARALLAX
  // =====================================================

  const aboutRef = useRef(null);

  const {
    scrollYProgress: aboutProgress,
  } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });


  const aboutImageY = useTransform(
    aboutProgress,
    [0, 1],
    ["-8%", "8%"]
  );


  const aboutImageScale = useTransform(
    aboutProgress,
    [0, 1],
    [1.08, 1.16]
  );


  const aboutTextY = useTransform(
    aboutProgress,
    [0, 0.5, 1],
    ["80px", "0px", "-40px"]
  );


  // =====================================================
  // SOUL SECTION PARALLAX
  // =====================================================

  const soulRef = useRef(null);

  const {
    scrollYProgress: soulProgress,
  } = useScroll({
    target: soulRef,
    offset: ["start end", "end start"],
  });


  const soulImageY = useTransform(
    soulProgress,
    [0, 1],
    ["-10%", "10%"]
  );


  const soulImageScale = useTransform(
    soulProgress,
    [0, 1],
    [1.08, 1.18]
  );


  // =====================================================
  // CONTACT SECTION
  // =====================================================

  const contactRef = useRef(null);

  const {
    scrollYProgress: contactProgress,
  } = useScroll({
    target: contactRef,
    offset: ["start end", "end start"],
  });


  const contactImageY = useTransform(
    contactProgress,
    [0, 1],
    ["-8%", "8%"]
  );


  const contactImageScale = useTransform(
    contactProgress,
    [0, 1],
    [1.08, 1.14]
  );


  return (
    <main className="overflow-hidden bg-black text-white">


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        ref={heroRef}
        className="
          relative
          h-[160vh]
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
              scale: imageScale,
              y: imageY,
            }}

            initial={{
              scale: 1.12,
              opacity: 0,
            }}

            animate={{
              scale: 1.08,
              opacity: 1,
            }}

            transition={{
              duration: 1.6,
              ease: [
                0.16,
                1,
                0.3,
                1,
              ],
            }}

            className="
              absolute
              inset-[-3%]
              transform-gpu
              will-change-transform
            "
          >

            <img
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2400&q=85"
              alt="Wedding celebration"
              loading="eager"
              decoding="async"
              className="
                h-full
                w-full
                object-cover
              "
            />

          </motion.div>


          {/* =================================================
              HERO DARK OVERLAY
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-black/25
            "
          />


          {/* =================================================
              HERO GRADIENT
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-b
              from-black/55
              via-transparent
              to-black
            "
          />


          {/* =================================================
              NAVIGATION
          ================================================= */}

          <motion.nav
            initial={{
              opacity: 0,
              y: -20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.8,
              duration: 0.7,
              ease: [
                0.16,
                1,
                0.3,
                1,
              ],
            }}

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

            {/* LOGO */}

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


            {/* DESKTOP NAV */}

            <div
              className="
                hidden
                items-center
                gap-10
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-white/70
                md:flex
              "
            >

              <Link
                to="/stories"
                className="transition-colors duration-300 hover:text-white"
              >
                Stories
              </Link>


              <Link
                to="/services"
                className="transition-colors duration-300 hover:text-white"
              >
                Services
              </Link>


              <Link
                to="/about"
                className="transition-colors duration-300 hover:text-white"
              >
                About
              </Link>


              <Link
                to="/contact"
                className="transition-colors duration-300 hover:text-white"
              >
                Contact
              </Link>

            </div>


            {/* MOBILE MENU */}

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}

              className="
                rounded-full
                border
                border-white/30
                p-3
                transition-all
                duration-300
                hover:bg-white
                hover:text-black
                md:hidden
              "
            >

              <Menu
                size={18}
                strokeWidth={1.3}
              />

            </button>

          </motion.nav>


          {/* =================================================
              HERO TITLE
          ================================================= */}

          <motion.div
            style={{
              y: titleY,
              scale: titleScale,
              opacity: titleOpacity,
            }}

            className="
              absolute
              inset-0
              z-20
              flex
              items-center
              justify-center
              px-6
              transform-gpu
            "
          >

            <div className="text-center">

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  delay: 0.5,
                  duration: 0.8,
                  ease: [
                    0.16,
                    1,
                    0.3,
                    1,
                  ],
                }}

                className="
                  mb-7
                  text-[9px]
                  uppercase
                  tracking-[0.55em]
                  text-white/70
                  md:text-xs
                "
              >
                Weddings · Events · Stories
              </motion.p>


              <motion.h1
                initial={{
                  opacity: 0,
                  y: 45,
                  letterSpacing: "0.02em",
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                  letterSpacing: "-0.07em",
                }}

                transition={{
                  delay: 0.7,
                  duration: 1.1,
                  ease: [
                    0.16,
                    1,
                    0.3,
                    1,
                  ],
                }}

                className="
                  text-[18vw]
                  font-light
                  leading-[0.78]
                  md:text-[15vw]
                "
              >
                UNBOUND
              </motion.h1>


              <motion.p
                initial={{
                  opacity: 0,
                }}

                animate={{
                  opacity: 1,
                }}

                transition={{
                  delay: 1.2,
                  duration: 0.8,
                }}

                className="
                  mt-9
                  text-[9px]
                  uppercase
                  tracking-[0.5em]
                  text-white/65
                  md:text-xs
                "
              >
                Moments without limits
              </motion.p>

            </div>

          </motion.div>


          {/* =================================================
              STORY REVEAL
          ================================================= */}

          <motion.div
            style={{
              opacity: storyOpacity,
              y: storyY,
              scale: storyScale,
            }}

            className="
              absolute
              inset-0
              z-20
              flex
              items-center
              justify-center
              px-6
            "
          >

            <div className="max-w-6xl text-center">

              <p
                className="
                  mb-8
                  text-[9px]
                  uppercase
                  tracking-[0.55em]
                  text-white/45
                  md:text-xs
                "
              >
                01 — The Beginning
              </p>


              <h2
                className="
                  text-5xl
                  font-light
                  leading-[0.95]
                  tracking-[-0.05em]
                  md:text-7xl
                  lg:text-[7vw]
                "
              >
                Every celebration
                <br />
                has a story.
              </h2>


              <p
                className="
                  mx-auto
                  mt-10
                  max-w-xl
                  text-sm
                  leading-7
                  text-white/45
                  md:text-base
                "
              >
                The moments between the planned ones are often
                the moments worth remembering.
              </p>

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
              delay: 1.7,
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
                text-white/45
              "
            >
              Scroll
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
                className="text-white/60"
              />

            </motion.div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          FEATURED STORIES
      ===================================================== */}

      <section
        id="stories"
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
              amount: 0.3,
            }}

            transition={{
              duration: 1,
              ease: [
                0.16,
                1,
                0.3,
                1,
              ],
            }}

            className="
              mb-16
              md:mb-24
            "
          >

            <p
              className="
                mb-6
                text-[9px]
                uppercase
                tracking-[0.5em]
                text-white/30
              "
            >
              Selected work
            </p>


            <h2
              className="
                max-w-4xl
                text-5xl
                font-light
                leading-[0.95]
                tracking-[-0.05em]
                md:text-7xl
                lg:text-[7vw]
              "
            >
              Stories worth
              <br />
              remembering.
            </h2>

          </motion.div>


          <StoryCard
            story={stories[currentStory]}
            index={currentStory}
            total={stories.length}
            direction={direction}
            onNext={nextStory}
            onPrevious={previousStory}
          />

        </div>

      </section>


      {/* =====================================================
          ABOUT — CINEMATIC
      ===================================================== */}

      <section
        ref={aboutRef}
        className="
          relative
          min-h-[900px]
          overflow-hidden
          border-t
          border-white/10
          bg-black
        "
      >

        {/* IMAGE */}

        <motion.div
          style={{
            y: aboutImageY,
            scale: aboutImageScale,
          }}

          className="
            absolute
            inset-[-8%]
            transform-gpu
            will-change-transform
          "
        >

          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2200&q=85"
            alt="Wedding couple"
            loading="lazy"
            decoding="async"
            className="
              h-full
              w-full
              object-cover
            "
          />

        </motion.div>


        {/* DARK GRADIENT */}

        <div
          className="
            absolute
            inset-0
            bg-black/55
          "
        />


        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black
            via-black/70
            to-black/20
          "
        />


        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-transparent
            to-black/60
          "
        />


        {/* CONTENT */}

        <motion.div
          style={{
            y: aboutTextY,
          }}

          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[900px]
            max-w-7xl
            items-center
            px-6
            py-32
            md:px-10
          "
        >

          <div className="max-w-5xl">

            <motion.p
              initial={{
                opacity: 0,
                x: -30,
              }}

              whileInView={{
                opacity: 1,
                x: 0,
              }}

              viewport={{
                once: true,
                amount: 0.3,
              }}

              transition={{
                duration: 0.8,
              }}

              className="
                mb-8
                text-[9px]
                uppercase
                tracking-[0.5em]
                text-white/45
                md:text-xs
              "
            >
              02 — About UNBOUND
            </motion.p>


            <motion.h2
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
                amount: 0.3,
              }}

              transition={{
                duration: 1.1,
                ease: [
                  0.16,
                  1,
                  0.3,
                  1,
                ],
              }}

              className="
                max-w-4xl
                text-[16vw]
                font-light
                leading-[0.78]
                tracking-[-0.075em]
                md:text-[10vw]
              "
            >
              UNBOUND
            </motion.h2>


            <motion.p
              initial={{
                opacity: 0,
                y: 35,
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
                delay: 0.2,
                duration: 0.9,
              }}

              className="
                mt-10
                max-w-2xl
                text-base
                leading-8
                text-white/65
                md:text-xl
                md:leading-9
              "
            >
              A creative event house built around photography,
              cinematic storytelling and unforgettable experiences.
            </motion.p>


            <Link
              to="/about"
              className="
                group
                mt-12
                inline-flex
                items-center
                gap-4
                border-b
                border-white/30
                pb-3
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-white/70
                transition-all
                duration-500
                hover:border-white
                hover:text-white
              "
            >

              Explore About

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

        </motion.div>

      </section>


      {/* =====================================================
          CINEMATIC TRANSITION — STORIES WITH SOUL
      ===================================================== */}

      <section
        ref={soulRef}
        className="
          relative
          min-h-[620px]
          overflow-hidden
          border-t
          border-white/10
          bg-black
        "
      >

        {/* BACKGROUND IMAGE */}

        <motion.div
          style={{
            y: soulImageY,
            scale: soulImageScale,
          }}

          className="
            absolute
            inset-[-10%]
            transform-gpu
            will-change-transform
          "
        >

          <img
            src="https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=2200&q=85"
            alt="Celebration atmosphere"
            loading="lazy"
            decoding="async"
            className="
              h-full
              w-full
              object-cover
            "
          />

        </motion.div>


        {/* IMAGE OVERLAY */}

        <div
          className="
            absolute
            inset-0
            bg-black/60
          "
        />


        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black
            via-black/35
            to-black
          "
        />


        {/* TOP CONTENT */}

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
            px-6
            pt-24
            md:px-10
            md:pt-32
          "
        >

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
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
              duration: 0.8,
            }}

            className="
              text-[9px]
              uppercase
              tracking-[0.55em]
              text-white/50
              md:text-xs
            "
          >
            Stories with soul
          </motion.p>

        </div>


        {/* =================================================
            MOVING MARQUEE
        ================================================= */}

        <div
          className="
            relative
            z-10
            mt-32
            overflow-hidden
            border-y
            border-white/15
            py-8
            md:mt-40
            md:py-10
          "
        >

          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}

            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}

            className="
              flex
              w-max
              items-center
              whitespace-nowrap
            "
          >

            {/* FIRST SET */}

            <div
              className="
                flex
                items-center
                gap-10
                pr-10
                text-sm
                uppercase
                tracking-[0.45em]
                text-white/65
                md:text-base
              "
            >

              <span>Weddings</span>

              <span className="text-white/30">✦</span>

              <span>Events</span>

              <span className="text-white/30">✦</span>

              <span>Pre-Weddings</span>

              <span className="text-white/30">✦</span>

              <span>Cinematic Films</span>

              <span className="text-white/30">✦</span>

              <span>Stories</span>

              <span className="text-white/30">✦</span>

              <span>UNBOUND</span>

              <span className="text-white/30">✦</span>

            </div>


            {/* SECOND SET */}

            <div
              className="
                flex
                items-center
                gap-10
                pr-10
                text-sm
                uppercase
                tracking-[0.45em]
                text-white/65
                md:text-base
              "
            >

              <span>Weddings</span>

              <span className="text-white/30">✦</span>

              <span>Events</span>

              <span className="text-white/30">✦</span>

              <span>Pre-Weddings</span>

              <span className="text-white/30">✦</span>

              <span>Cinematic Films</span>

              <span className="text-white/30">✦</span>

              <span>Stories</span>

              <span className="text-white/30">✦</span>

              <span>UNBOUND</span>

              <span className="text-white/30">✦</span>

            </div>

          </motion.div>

        </div>


        {/* BOTTOM STATEMENT */}

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
            amount: 0.2,
          }}

          transition={{
            delay: 0.15,
            duration: 1,
          }}

          className="
            relative
            z-10
            mx-auto
            max-w-7xl
            px-6
            pb-24
            pt-24
            md:px-10
            md:pb-32
          "
        >

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
                max-w-4xl
                text-4xl
                font-light
                leading-[0.95]
                tracking-[-0.05em]
                md:text-6xl
                lg:text-[5vw]
              "
            >
              The moments
              <br />
              between the moments.
            </h2>


            <p
              className="
                max-w-sm
                text-sm
                leading-7
                text-white/45
              "
            >
              Because sometimes the smallest details become
              the stories we remember forever.
            </p>

          </div>

        </motion.div>

      </section>


      {/* =====================================================
          LET'S TALK
      ===================================================== */}

      <section
        ref={contactRef}
        className="
          relative
          min-h-[820px]
          overflow-hidden
          bg-black
        "
      >

        {/* CONTACT IMAGE */}

        <motion.div
          style={{
            y: contactImageY,
            scale: contactImageScale,
          }}

          className="
            absolute
            inset-[-8%]
            transform-gpu
            will-change-transform
          "
        >

          <img
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2200&q=85"
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


        {/* CONTACT OVERLAYS */}

        <div
          className="
            absolute
            inset-0
            bg-black/65
          "
        />


        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black
            via-black/65
            to-black/30
          "
        />


        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-transparent
            to-black
          "
        />


        {/* CONTACT CONTENT */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[820px]
            max-w-7xl
            items-center
            px-6
            py-32
            md:px-10
          "
        >

          <div className="w-full">


            {/* TOP META */}

            <div
              className="
                mb-16
                flex
                flex-col
                gap-4
                md:mb-20
                md:flex-row
                md:items-center
                md:justify-between
              "
            >

              <motion.p
                initial={{
                  opacity: 0,
                  x: -30,
                }}

                whileInView={{
                  opacity: 1,
                  x: 0,
                }}

                viewport={{
                  once: true,
                  amount: 0.3,
                }}

                transition={{
                  duration: 0.8,
                }}

                className="
                  text-[9px]
                  uppercase
                  tracking-[0.5em]
                  text-white/45
                  md:text-xs
                "
              >
                03 — Let's Talk
              </motion.p>


              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.45em]
                  text-white/30
                  md:text-[9px]
                "
              >
                Your story starts here
              </p>

            </div>


            {/* HEADING */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 80,
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
                duration: 1.15,
                ease: [
                  0.16,
                  1,
                  0.3,
                  1,
                ],
              }}

              className="
                max-w-6xl
                text-[18vw]
                font-light
                leading-[0.72]
                tracking-[-0.08em]
                sm:text-[16vw]
                md:text-[12vw]
                lg:text-[10vw]
              "
            >

              LET&apos;S
              <br />
              TALK.

            </motion.h2>


            {/* BOTTOM CONTENT */}

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
                amount: 0.25,
              }}

              transition={{
                delay: 0.25,
                duration: 0.9,
              }}

              className="
                mt-14
                flex
                flex-col
                gap-10
                md:mt-16
                md:flex-row
                md:items-end
                md:justify-between
              "
            >

              <p
                className="
                  max-w-lg
                  text-sm
                  leading-7
                  text-white/55
                  md:text-base
                  md:leading-8
                "
              >
                Planning a wedding, event, pre-wedding or
                cinematic story? Tell us what you're imagining.
                We'll take it from there.
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
                  tracking-[0.35em]
                  text-white/75
                  backdrop-blur-sm
                  transition-all
                  duration-500
                  hover:border-white
                  hover:bg-white
                  hover:text-black
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

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL FOOTER
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
            gap-5
            text-[8px]
            uppercase
            tracking-[0.35em]
            text-white/25
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


          <span>
            Moments without limits
          </span>

        </div>

      </footer>

    </main>
  );
}


export default Home;