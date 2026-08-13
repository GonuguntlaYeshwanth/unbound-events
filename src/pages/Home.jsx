import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "motion/react";

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Menu,
} from "lucide-react";

import { Link } from "react-router-dom";

import { useRef, useState } from "react";

import stories from "../data/stories";
import StoryCard from "../components/StoryCard";
import MobileMenu from "../components/MobileMenu";


// =====================================================
// MOTION
// =====================================================

const EASE = [0.16, 1, 0.3, 1];


// =====================================================
// SAFE IMAGE
// =====================================================

function SafeImage({
  src,
  fallback,
  alt,
  className,
  ...props
}) {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <img
      src={imageSrc}
      alt={alt}
      onError={() => {
        if (fallback && imageSrc !== fallback) {
          setImageSrc(fallback);
        }
      }}
      className={className}
      {...props}
    />
  );
}


// =====================================================
// HOME
// =====================================================

function Home() {
  // ===================================================
  // REFS
  // ===================================================

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const soulRef = useRef(null);
  const contactRef = useRef(null);

  // ===================================================
  // ACCESSIBILITY
  // ===================================================

  const reduceMotion = useReducedMotion();

  // ===================================================
  // MOBILE MENU
  // ===================================================

  const [menuOpen, setMenuOpen] = useState(false);

  // ===================================================
  // PAGE SCROLL
  // ===================================================

  const { scrollYProgress: pageProgress } = useScroll();

  const progressBar = useSpring(pageProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
  });

  // ===================================================
  // STORY SLIDER
  // ===================================================

  const [currentStory, setCurrentStory] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextStory = () => {
    setDirection(1);

    setCurrentStory((current) =>
      current === stories.length - 1 ? 0 : current + 1
    );
  };

  const previousStory = () => {
    setDirection(-1);

    setCurrentStory((current) =>
      current === 0 ? stories.length - 1 : current - 1
    );
  };

  // ===================================================
  // HERO SCROLL
  // ===================================================

  const { scrollYProgress: heroProgressRaw } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroProgress = useSpring(heroProgressRaw, {
    stiffness: 90,
    damping: 26,
    mass: 0.3,
  });

  const heroImageScale = useTransform(
    heroProgress,
    [0, 1],
    reduceMotion ? [1.05, 1.05] : [1.08, 1.22]
  );

  const heroImageY = useTransform(
    heroProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : ["0%", "12%"]
  );

  const heroTitleY = useTransform(
    heroProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : ["0%", "-32%"]
  );

  const heroTitleScale = useTransform(
    heroProgress,
    [0, 1],
    reduceMotion ? [1, 1] : [1, 0.84]
  );

  const heroTitleOpacity = useTransform(
    heroProgress,
    [0, 0.6, 1],
    [1, 1, 0]
  );

  const heroStoryOpacity = useTransform(
    heroProgress,
    [0.52, 0.76, 1],
    [0, 1, 1]
  );

  const heroStoryY = useTransform(
    heroProgress,
    [0.52, 1],
    reduceMotion ? ["0px", "0px"] : ["90px", "0px"]
  );

  const heroStoryScale = useTransform(
    heroProgress,
    [0.52, 1],
    reduceMotion ? [1, 1] : [0.93, 1]
  );

  // ===================================================
  // ABOUT PARALLAX
  // ===================================================

  const { scrollYProgress: aboutProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });

  const aboutImageY = useTransform(
    aboutProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : ["-9%", "9%"]
  );

  const aboutImageScale = useTransform(
    aboutProgress,
    [0, 1],
    reduceMotion ? [1.02, 1.02] : [1.08, 1.19]
  );

  const aboutTextY = useTransform(
    aboutProgress,
    [0, 0.5, 1],
    reduceMotion
      ? ["0px", "0px", "0px"]
      : ["80px", "0px", "-60px"]
  );

  // ===================================================
  // SERVICES PARALLAX
  // ===================================================

  const { scrollYProgress: servicesProgress } = useScroll({
    target: servicesRef,
    offset: ["start end", "end start"],
  });

  const servicesImageY = useTransform(
    servicesProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : ["-5%", "5%"]
  );

  // ===================================================
  // SOUL SECTION
  // ===================================================

  const { scrollYProgress: soulProgress } = useScroll({
    target: soulRef,
    offset: ["start end", "end start"],
  });

  const soulImageY = useTransform(
    soulProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : ["-10%", "10%"]
  );

  const soulImageScale = useTransform(
    soulProgress,
    [0, 1],
    reduceMotion ? [1.02, 1.02] : [1.08, 1.18]
  );

  // ===================================================
  // CONTACT
  // ===================================================

  const { scrollYProgress: contactProgress } = useScroll({
    target: contactRef,
    offset: ["start end", "end start"],
  });

  const contactImageY = useTransform(
    contactProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : ["-9%", "9%"]
  );

  const contactImageScale = useTransform(
    contactProgress,
    [0, 1],
    reduceMotion ? [1.02, 1.02] : [1.08, 1.18]
  );

  // ===================================================
  // SERVICES DATA
  // ===================================================

  const services = [
    {
      number: "01",
      title: "Weddings",
      description:
        "Emotion, atmosphere and every fleeting moment of the day.",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=90",
      link: "/services/weddings",
    },

    {
      number: "02",
      title: "Events",
      description:
        "Stories from celebrations, launches and unforgettable gatherings.",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=90",
      link: "/services/events",
    },

    {
      number: "03",
      title: "Pre-Weddings",
      description:
        "Cinematic portraits created around your connection.",
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=90",
      link: "/services/pre-weddings",
    },

    {
      number: "04",
      title: "Cinematic Films",
      description:
        "Moving images that let you experience the moment again.",
      image:
        "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1600&q=90",
      link: "/services/cinematic-films",
    },
  ];

  // ===================================================
  // HERO WORD ANIMATION
  // ===================================================

  const heroWords = ["UNBOUND"];

  const wordContainer = {
    hidden: {},

    show: {
      transition: {
        staggerChildren: 0.09,
        delayChildren: 0.55,
      },
    },
  };

  const wordItem = {
    hidden: {
      y: "110%",
      opacity: 0,
    },

    show: {
      y: "0%",
      opacity: 1,

      transition: {
        duration: 1.1,
        ease: EASE,
      },
    },
  };

  return (
    <main className="overflow-hidden bg-[#050505] text-white">

      {/* =====================================================
          GLOBAL SCROLL PROGRESS
      ===================================================== */}

      <motion.div
        style={{
          scaleX: progressBar,
        }}
        className="
          fixed
          left-0
          top-0
          z-[100]
          h-[2px]
          w-full
          origin-left
          bg-white/70
        "
      />


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
          h-[175vh]
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
              HERO EVENT IMAGE
          ================================================= */}

          <motion.div
            style={{
              scale: heroImageScale,
              y: heroImageY,
            }}
            initial={{
              scale: 1.16,
              opacity: 0,
            }}
            animate={{
              scale: 1.08,
              opacity: 1,
            }}
            transition={{
              duration: 2,
              ease: EASE,
            }}
            className="
              absolute
              inset-[-5%]
              transform-gpu
              will-change-transform
            "
          >

            <SafeImage
              src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=2400&q=90"
              fallback="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2400&q=90"
              alt="Guests celebrating at a premium event"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="
                h-full
                w-full
                object-cover
              "
            />

          </motion.div>


          {/* =================================================
              FILM GRAIN
          ================================================= */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              z-[2]
              opacity-[0.045]
              mix-blend-overlay
            "
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />


          {/* =================================================
              CINEMATIC OVERLAYS
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-[3]
              bg-black/25
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-[3]
              bg-gradient-to-b
              from-black/75
              via-black/10
              to-black
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-[3]
              bg-gradient-to-r
              from-black/45
              via-transparent
              to-black/20
            "
          />


          {/* =================================================
              FIXED-STYLE GLASS NAVBAR
              No loading fade.
              No cursor interaction.
          ================================================= */}

          <nav
            className="
              absolute
              left-[4.8%]
              right-[4.8%]
              top-5
              z-[50]

              flex
              h-[62px]
              items-center
              justify-between

              rounded-full

              border
              border-white/[0.18]

              bg-black/[0.22]

              px-7

              shadow-[0_8px_40px_rgba(0,0,0,0.18)]

              backdrop-blur-xl

              md:px-8
            "
          >

            {/* LOGO */}

            <Link
              to="/"
              className="
                flex
                items-center
                text-[15px]
                font-medium
                uppercase
                tracking-[0.38em]
                text-white
                transition-opacity
                duration-300
                hover:opacity-60
              "
            >
              UNBOUND
            </Link>


            {/* DESKTOP NAVIGATION */}

            <div
              className="
                hidden
                items-center
                gap-9
                md:flex
              "
            >

              {[
                {
                  to: "/stories",
                  label: "Stories",
                },

                {
                  to: "/services",
                  label: "Services",
                },

                {
                  to: "/about",
                  label: "About",
                },

                {
                  to: "/contact",
                  label: "Contact",
                },
              ].map((item) => (

                <Link
                  key={item.to}
                  to={item.to}
                  className="
                    relative
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.32em]
                    text-white/60
                    transition-all
                    duration-300
                    hover:text-white

                    after:absolute
                    after:-bottom-1.5
                    after:left-0
                    after:h-px
                    after:w-0
                    after:bg-white
                    after:transition-all
                    after:duration-300
                    hover:after:w-full
                  "
                >
                  {item.label}
                </Link>

              ))}

            </div>


            {/* MOBILE MENU */}

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="
                flex
                items-center
                justify-center
                rounded-full
                border
                border-white/25
                p-2.5
                text-white/80
                transition-all
                duration-300
                hover:border-white/50
                hover:bg-white
                hover:text-black
                md:hidden
              "
            >

              <Menu
                size={17}
                strokeWidth={1.3}
              />

            </button>

          </nav>


          {/* =================================================
              HERO TITLE
          ================================================= */}

          <motion.div
            style={{
              y: heroTitleY,
              scale: heroTitleScale,
              opacity: heroTitleOpacity,
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

            <div className="w-full text-center">

              <motion.p
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                  duration: 0.9,
                  ease: EASE,
                }}
                className="
                  mb-8
                  text-[8px]
                  uppercase
                  tracking-[0.65em]
                  text-white/65
                  md:text-xs
                "
              >
                Weddings · Events · Stories
              </motion.p>


              <motion.h1
                variants={wordContainer}
                initial="hidden"
                animate="show"
                className="
                  flex
                  justify-center
                  overflow-hidden
                  text-[19vw]
                  font-light
                  leading-[0.72]
                  tracking-[-0.08em]
                  md:text-[15vw]
                "
              >

                {heroWords.map((word) => (

                  <span
                    key={word}
                    className="overflow-hidden"
                  >

                    <motion.span
                      variants={wordItem}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>

                  </span>

                ))}

              </motion.h1>


              {/* TAGLINE */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1.35,
                  duration: 0.9,
                }}
                className="
                  mt-10
                  flex
                  items-center
                  justify-center
                  gap-4
                "
              >

                <motion.span
                  initial={{
                    scaleX: 0,
                  }}
                  animate={{
                    scaleX: 1,
                  }}
                  transition={{
                    delay: 1.5,
                    duration: 0.6,
                    ease: EASE,
                  }}
                  className="
                    h-px
                    w-8
                    origin-right
                    bg-white/30
                  "
                />

                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.5em]
                    text-white/60
                    md:text-xs
                  "
                >
                  Moments without limits
                </span>

                <motion.span
                  initial={{
                    scaleX: 0,
                  }}
                  animate={{
                    scaleX: 1,
                  }}
                  transition={{
                    delay: 1.5,
                    duration: 0.6,
                    ease: EASE,
                  }}
                  className="
                    h-px
                    w-8
                    origin-left
                    bg-white/30
                  "
                />

              </motion.div>

            </div>

          </motion.div>


          {/* =================================================
              HERO STORY
          ================================================= */}

          <motion.div
            style={{
              opacity: heroStoryOpacity,
              y: heroStoryY,
              scale: heroStoryScale,
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

            <div className="max-w-5xl text-center">

              <p
                className="
                  mb-8
                  text-[8px]
                  uppercase
                  tracking-[0.6em]
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
                  leading-[0.9]
                  tracking-[-0.06em]
                  sm:text-6xl
                  md:text-8xl
                  lg:text-[7vw]
                "
              >
                Every celebration
                <br />
                deserves to be remembered.
              </h2>


              <p
                className="
                  mx-auto
                  mt-10
                  max-w-xl
                  text-sm
                  leading-7
                  text-white/50
                  md:text-base
                  md:leading-8
                "
              >
                We turn fleeting moments into
                photographs, films and stories
                that stay with you.
              </p>

            </div>

          </motion.div>


          {/* =================================================
              SCROLL
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.9,
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
                tracking-[0.5em]
                text-white/45
              "
            >
              Scroll
            </span>

            <motion.div
              animate={
                reduceMotion
                  ? {}
                  : {
                      y: [0, 7, 0],
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
              mb-20
              flex
              flex-col
              gap-8
              md:mb-28
              md:flex-row
              md:items-end
              md:justify-between
            "
          >

            <div>

              <p
                className="
                  mb-7
                  text-[8px]
                  uppercase
                  tracking-[0.6em]
                  text-white/30
                "
              >
                Selected work
              </p>

              <h2
                className="
                  text-5xl
                  font-light
                  leading-[0.9]
                  tracking-[-0.06em]
                  md:text-7xl
                  lg:text-[6.5vw]
                "
              >
                Stories worth
                <br />
                remembering.
              </h2>

            </div>


            <Link
              to="/stories"
              className="
                group
                flex
                w-fit
                items-center
                gap-3
                text-[9px]
                uppercase
                tracking-[0.4em]
                text-white/40
                transition-colors
                hover:text-white
              "
            >

              View all stories

              <ArrowRight
                size={15}
                strokeWidth={1}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />

            </Link>

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
          ABOUT
      ===================================================== */}

      <section
        ref={aboutRef}
        className="
          relative
          min-h-[900px]
          overflow-hidden
          border-t
          border-white/10
        "
      >

        <motion.div
          style={{
            y: aboutImageY,
            scale: aboutImageScale,
          }}
          className="
            absolute
            inset-[-8%]
            transform-gpu
          "
        >

          <SafeImage
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2400&q=90"
            fallback="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2400&q=90"
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


        <div className="absolute inset-0 bg-black/55" />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black
            via-black/65
            to-transparent
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-transparent
            to-black/50
          "
        />


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
                text-[8px]
                uppercase
                tracking-[0.6em]
                text-white/45
                md:text-xs
              "
            >
              02 — About UNBOUND
            </motion.p>


            <motion.h2
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
                amount: 0.25,
              }}
              transition={{
                duration: 1.1,
                ease: EASE,
              }}
              className="
                text-[17vw]
                font-light
                leading-[0.72]
                tracking-[-0.08em]
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
                amount: 0.25,
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
              A creative event house built around
              photography, cinematic storytelling
              and unforgettable experiences.
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
                text-[9px]
                uppercase
                tracking-[0.4em]
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
          SERVICES
      ===================================================== */}

      <section
        ref={servicesRef}
        className="
          relative
          bg-[#050505]
          px-6
          py-32
          md:px-10
          md:py-48
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
            amount: 0.25,
          }}
          transition={{
            duration: 1,
            ease: EASE,
          }}
          className="
            mx-auto
            mb-20
            max-w-7xl
            md:mb-28
          "
        >

          <p
            className="
              mb-7
              text-[8px]
              uppercase
              tracking-[0.6em]
              text-white/30
            "
          >
            What we create
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
              Made for moments
              <br />
              that matter.
            </h2>


            <p
              className="
                max-w-sm
                text-sm
                leading-7
                text-white/35
              "
            >
              From intimate weddings to large
              celebrations, we create visual
              stories around the people,
              atmosphere and emotion.
            </p>

          </div>

        </motion.div>


        {/* SERVICE GRID */}

        <div
          className="
            mx-auto
            grid
            max-w-7xl
            grid-cols-1
            gap-4
            sm:grid-cols-2
          "
        >

          {services.map((service, index) => (

            <motion.div
              key={service.number}
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
                duration: 0.9,
                delay: index * 0.08,
                ease: EASE,
              }}
            >

              <Link
                to={service.link}
                className="
                  group
                  relative
                  block
                  aspect-[4/5]
                  overflow-hidden
                  bg-neutral-900
                "
              >

                <motion.div
                  style={{
                    y:
                      index === 0 || index === 1
                        ? servicesImageY
                        : undefined,
                  }}
                  className="
                    absolute
                    inset-0
                  "
                >

                  <SafeImage
                    src={service.image}
                    fallback="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=90"
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-[1.2s]
                      ease-out
                      group-hover:scale-[1.07]
                    "
                  />

                </motion.div>


                <div
                  className="
                    absolute
                    inset-0
                    bg-black/20
                    transition-colors
                    duration-500
                    group-hover:bg-black/35
                  "
                />


                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black
                    via-black/20
                    to-transparent
                  "
                />


                {/* TOP META */}

                <div
                  className="
                    absolute
                    left-6
                    right-6
                    top-6
                    flex
                    items-center
                    justify-between
                  "
                >

                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.4em]
                      text-white/60
                    "
                  >
                    {service.number}
                  </span>


                  <span
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/30
                      text-white/70
                      transition-all
                      duration-500
                      group-hover:border-white
                      group-hover:bg-white
                      group-hover:text-black
                    "
                  >

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1}
                    />

                  </span>

                </div>


                {/* CONTENT */}

                <div
                  className="
                    absolute
                    bottom-7
                    left-6
                    right-6
                  "
                >

                  <h3
                    className="
                      text-4xl
                      font-light
                      tracking-[-0.05em]
                      md:text-5xl
                    "
                  >
                    {service.title}
                  </h3>


                  <p
                    className="
                      mt-4
                      max-w-sm
                      text-xs
                      leading-6
                      text-white/50
                      md:text-sm
                    "
                  >
                    {service.description}
                  </p>

                </div>

              </Link>

            </motion.div>

          ))}

        </div>


        {/* ALL SERVICES */}

        <div
          className="
            mx-auto
            mt-12
            max-w-7xl
          "
        >

          <Link
            to="/services"
            className="
              group
              flex
              w-fit
              items-center
              gap-4
              text-[9px]
              uppercase
              tracking-[0.45em]
              text-white/40
              transition-colors
              hover:text-white
            "
          >

            Explore all services

            <ArrowRight
              size={15}
              strokeWidth={1}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />

          </Link>

        </div>

      </section>


      {/* =====================================================
          STORIES WITH SOUL
      ===================================================== */}

      <section
        ref={soulRef}
        className="
          relative
          min-h-[760px]
          overflow-hidden
          border-y
          border-white/10
        "
      >

        <motion.div
          style={{
            y: soulImageY,
            scale: soulImageScale,
          }}
          className="
            absolute
            inset-[-10%]
            transform-gpu
          "
        >

          <SafeImage
            src="https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=2400&q=90"
            fallback="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2400&q=90"
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
            bg-gradient-to-b
            from-black
            via-black/25
            to-black
          "
        />


        <div
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
            px-6
            pt-28
            md:px-10
            md:pt-36
          "
        >

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              text-[8px]
              uppercase
              tracking-[0.6em]
              text-white/45
              md:text-xs
            "
          >
            Stories with soul
          </motion.p>

        </div>


        {/* MARQUEE */}

        <div
          className="
            relative
            z-10
            mt-36
            overflow-hidden
            border-y
            border-white/15
            py-8
            md:mt-44
            md:py-10
          "
        >

          <motion.div
            animate={
              reduceMotion
                ? {}
                : {
                    x: ["0%", "-50%"],
                  }
            }
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              flex
              w-max
              whitespace-nowrap
            "
          >

            {[0, 1].map((set) => (

              <div
                key={set}
                className="
                  flex
                  items-center
                  gap-12
                  pr-12
                  text-sm
                  uppercase
                  tracking-[0.5em]
                  text-white/65
                  md:text-base
                "
              >

                <span>Weddings</span>

                <span className="text-white/25">✦</span>

                <span>Events</span>

                <span className="text-white/25">✦</span>

                <span>Pre-Weddings</span>

                <span className="text-white/25">✦</span>

                <span>Cinematic Films</span>

                <span className="text-white/25">✦</span>

                <span>Stories</span>

                <span className="text-white/25">✦</span>

                <span>UNBOUND</span>

                <span className="text-white/25">✦</span>

              </div>

            ))}

          </motion.div>

        </div>


        {/* SOUL STATEMENT */}

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
          }}
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
            px-6
            pb-28
            pt-28
            md:px-10
            md:pb-36
          "
        >

          <div
            className="
              flex
              flex-col
              gap-10
              md:flex-row
              md:items-end
              md:justify-between
            "
          >

            <h2
              className="
                max-w-5xl
                text-4xl
                font-light
                leading-[0.92]
                tracking-[-0.06em]
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
              The glance. The laugh.
              The silence. The details
              nobody planned. That's where
              the real story lives.
            </p>

          </div>

        </motion.div>

      </section>


      {/* =====================================================
          BRAND PHILOSOPHY
      ===================================================== */}

      <section
        className="
          bg-[#050505]
          px-6
          py-32
          md:px-10
          md:py-44
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
            }}
            transition={{
              duration: 1,
            }}
            className="md:col-span-7"
          >

            <p
              className="
                mb-8
                text-[8px]
                uppercase
                tracking-[0.6em]
                text-white/30
              "
            >
              Our philosophy
            </p>


            <h2
              className="
                text-4xl
                font-light
                leading-[0.95]
                tracking-[-0.055em]
                md:text-6xl
                lg:text-[5vw]
              "
            >
              We don't just
              <br />
              photograph
              <br />

              <span className="text-white/30">
                what happened.
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
            }}
            transition={{
              delay: 0.15,
              duration: 1,
            }}
            className="
              flex
              flex-col
              justify-end
              md:col-span-5
            "
          >

            <p
              className="
                max-w-md
                text-base
                leading-8
                text-white/45
                md:text-lg
              "
            >
              We preserve how it felt.
              The energy in the room.
              The people around you.
              The little moments that happen
              when nobody is looking.
            </p>


            <div
              className="
                mt-12
                grid
                grid-cols-3
                border-y
                border-white/10
                py-8
              "
            >

              <div>
                <p className="text-2xl font-light md:text-3xl">
                  01
                </p>

                <p
                  className="
                    mt-2
                    text-[7px]
                    uppercase
                    tracking-[0.35em]
                    text-white/25
                  "
                >
                  Emotion
                </p>
              </div>


              <div>
                <p className="text-2xl font-light md:text-3xl">
                  02
                </p>

                <p
                  className="
                    mt-2
                    text-[7px]
                    uppercase
                    tracking-[0.35em]
                    text-white/25
                  "
                >
                  Atmosphere
                </p>
              </div>


              <div>
                <p className="text-2xl font-light md:text-3xl">
                  03
                </p>

                <p
                  className="
                    mt-2
                    text-[7px]
                    uppercase
                    tracking-[0.35em]
                    text-white/25
                  "
                >
                  Story
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        ref={contactRef}
        className="
          relative
          min-h-[850px]
          overflow-hidden
          border-t
          border-white/10
        "
      >

        <motion.div
          style={{
            y: contactImageY,
            scale: contactImageScale,
          }}
          className="
            absolute
            inset-[-8%]
            transform-gpu
          "
        >

          <SafeImage
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2400&q=90"
            fallback="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2400&q=90"
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
            bg-black/65
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black
            via-black/60
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
            to-black
          "
        />


        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[850px]
            max-w-7xl
            items-center
            px-6
            py-32
            md:px-10
          "
        >

          <div className="w-full">

            <div
              className="
                mb-16
                flex
                items-center
                justify-between
              "
            >

              <motion.p
                initial={{
                  opacity: 0,
                  x: -25,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.6em]
                  text-white/45
                  md:text-xs
                "
              >
                03 — Let's Talk
              </motion.p>


              <p
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.45em]
                  text-white/25
                  md:text-[9px]
                "
              >
                Your story starts here
              </p>

            </div>


            <motion.h2
              initial={{
                opacity: 0,
                y: 90,
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
                duration: 1.2,
                ease: EASE,
              }}
              className="
                text-[19vw]
                font-light
                leading-[0.68]
                tracking-[-0.085em]
                sm:text-[16vw]
                md:text-[12vw]
                lg:text-[10vw]
              "
            >
              LET&apos;S
              <br />
              TALK.
            </motion.h2>


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
                Planning a wedding, event,
                pre-wedding or cinematic story?
                Tell us what you're imagining.
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
          FOOTER
      ===================================================== */}

      <footer
        className="
          border-t
          border-white/10
          bg-black
          px-6
          py-12
          md:px-10
          md:py-16
        "
      >

        <div className="mx-auto max-w-7xl">

          <div
            className="
              flex
              flex-col
              gap-10
              md:flex-row
              md:items-end
              md:justify-between
            "
          >

            <div>

              <p
                className="
                  text-lg
                  font-medium
                  tracking-[0.3em]
                "
              >
                UNBOUND
              </p>


              <p
                className="
                  mt-4
                  text-[8px]
                  uppercase
                  tracking-[0.45em]
                  text-white/25
                "
              >
                Weddings · Events · Stories
              </p>

            </div>


            <div
              className="
                flex
                flex-wrap
                gap-x-8
                gap-y-3
                text-[8px]
                uppercase
                tracking-[0.35em]
                text-white/30
              "
            >

              <Link
                to="/stories"
                className="transition-colors hover:text-white"
              >
                Stories
              </Link>

              <Link
                to="/services"
                className="transition-colors hover:text-white"
              >
                Services
              </Link>

              <Link
                to="/about"
                className="transition-colors hover:text-white"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="transition-colors hover:text-white"
              >
                Contact
              </Link>

            </div>

          </div>


          <div
            className="
              mt-12
              flex
              flex-col
              gap-3
              border-t
              border-white/10
              pt-6
              text-[7px]
              uppercase
              tracking-[0.35em]
              text-white/20
              md:flex-row
              md:items-center
              md:justify-between
            "
          >

            <span>
              © 2026 UnboundEvents & CO
            </span>

            <span>
              Moments without limits
            </span>

          </div>

        </div>

      </footer>

    </main>
  );
}

export default Home;