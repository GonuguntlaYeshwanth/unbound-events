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
  MessageCircle,
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
// WHATSAPP
// =====================================================
// Use full international format without + or spaces.
// Example India: 919392402961

const WHATSAPP_NUMBER = "9392402961";

const WHATSAPP_MESSAGE =
  "Hi UNBOUND, I'd like to discuss an event with you.";


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


  // ===================================================
  // HERO SCROLL
  // ===================================================

  const {
    scrollYProgress: heroProgressRaw,
  } = useScroll({
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
    reduceMotion
      ? [1.05, 1.05]
      : [1.08, 1.22]
  );

  const heroImageY = useTransform(
    heroProgress,
    [0, 1],
    reduceMotion
      ? ["0%", "0%"]
      : ["0%", "12%"]
  );

  const heroTitleY = useTransform(
    heroProgress,
    [0, 1],
    reduceMotion
      ? ["0%", "0%"]
      : ["0%", "-32%"]
  );

  const heroTitleScale = useTransform(
    heroProgress,
    [0, 1],
    reduceMotion
      ? [1, 1]
      : [1, 0.84]
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
    reduceMotion
      ? ["0px", "0px"]
      : ["90px", "0px"]
  );

  const heroStoryScale = useTransform(
    heroProgress,
    [0.52, 1],
    reduceMotion
      ? [1, 1]
      : [0.93, 1]
  );


  // ===================================================
  // ABOUT PARALLAX
  // ===================================================

  const {
    scrollYProgress: aboutProgress,
  } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });

  const aboutImageY = useTransform(
    aboutProgress,
    [0, 1],
    reduceMotion
      ? ["0%", "0%"]
      : ["-9%", "9%"]
  );

  const aboutImageScale = useTransform(
    aboutProgress,
    [0, 1],
    reduceMotion
      ? [1.02, 1.02]
      : [1.08, 1.19]
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

  const {
    scrollYProgress: servicesProgress,
  } = useScroll({
    target: servicesRef,
    offset: ["start end", "end start"],
  });

  const servicesImageY = useTransform(
    servicesProgress,
    [0, 1],
    reduceMotion
      ? ["0%", "0%"]
      : ["-5%", "5%"]
  );


  // ===================================================
  // SOUL SECTION
  // ===================================================

  const {
    scrollYProgress: soulProgress,
  } = useScroll({
    target: soulRef,
    offset: ["start end", "end start"],
  });

  const soulImageY = useTransform(
    soulProgress,
    [0, 1],
    reduceMotion
      ? ["0%", "0%"]
      : ["-10%", "10%"]
  );

  const soulImageScale = useTransform(
    soulProgress,
    [0, 1],
    reduceMotion
      ? [1.02, 1.02]
      : [1.08, 1.18]
  );


  // ===================================================
  // CONTACT
  // ===================================================

  const {
    scrollYProgress: contactProgress,
  } = useScroll({
    target: contactRef,
    offset: ["start end", "end start"],
  });

  const contactImageY = useTransform(
    contactProgress,
    [0, 1],
    reduceMotion
      ? ["0%", "0%"]
      : ["-9%", "9%"]
  );

  const contactImageScale = useTransform(
    contactProgress,
    [0, 1],
    reduceMotion
      ? [1.02, 1.02]
      : [1.08, 1.18]
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
  // PROCESS DATA
  // ===================================================

  const processSteps = [
    {
      number: "01",
      title: "Discover",
      description:
        "We listen first. Your vision, your people, your story and what makes the moment yours.",
    },

    {
      number: "02",
      title: "Plan",
      description:
        "We shape the details, timeline and creative direction so everything feels effortless.",
    },

    {
      number: "03",
      title: "Create",
      description:
        "Our team captures the atmosphere, emotion and moments that happen naturally.",
    },

    {
      number: "04",
      title: "Remember",
      description:
        "Your memories become photographs, films and stories you can return to for years.",
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
        duration: 1.25,
        ease: EASE,
      },
    },
  };


  // ===================================================
  // WHATSAPP ACTION
  // ===================================================

  const openWhatsApp = () => {

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        WHATSAPP_MESSAGE
      )}`;

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
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
          FLOATING WHATSAPP
      ===================================================== */}

      <motion.button
        type="button"
        onClick={openWhatsApp}
        initial={
          reduceMotion
            ? { opacity: 1 }
            : {
                opacity: 0,
                y: 25,
              }
        }
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 2,
          duration: 0.8,
          ease: EASE,
        }}
        aria-label="Chat with UNBOUND on WhatsApp"
        className="
          group
          fixed
          bottom-6
          right-6
          z-[90]
          flex
          items-center
          justify-center
          gap-3
          rounded-full
          border
          border-white/20
          bg-black/40
          px-5
          py-3.5
          text-white
          shadow-[0_10px_40px_rgba(0,0,0,0.35)]
          backdrop-blur-xl
          transition-all
          duration-500
          hover:border-white/50
          hover:bg-white
          hover:text-black
          md:bottom-8
          md:right-8
        "
      >

        <MessageCircle
          size={19}
          strokeWidth={1.4}
          className="
            shrink-0
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />

        <span
          className="
            hidden
            text-[9px]
            font-medium
            uppercase
            tracking-[0.3em]
            md:inline
          "
        >
          Chat with UNBOUND
        </span>

      </motion.button>


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


          {/* FILM GRAIN */}

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


          {/* CINEMATIC OVERLAYS */}

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


          {/* NAVBAR */}

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


          {/* HERO TITLE */}

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
              px-4
              sm:px-6
              md:px-8
            "
          >

            <div
              className="
                flex
                w-full
                flex-col
                items-center
                text-center
              "
            >

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
                  mb-7
                  text-[8px]
                  uppercase
                  tracking-[0.65em]
                  text-white/65
                  md:mb-8
                  md:text-xs
                "
              >
                Weddings · Events · Stories
              </motion.p>


              <div
                className="
                  w-full
                  overflow-hidden
                  px-2
                  sm:px-4
                  md:px-8
                "
              >

                <motion.h1
                  variants={wordContainer}
                  initial="hidden"
                  animate="show"
                  className="
                    mx-auto
                    w-full
                    max-w-[1450px]
                    overflow-visible
                    text-center
                    text-[18vw]
                    font-normal
                    leading-[0.82]
                    tracking-[-0.045em]
                    text-white
                    sm:text-[17vw]
                    md:text-[14.5vw]
                    lg:text-[13.5vw]
                    xl:text-[13vw]
                  "
                  style={{
                    fontFamily:
                      '"Bodoni Moda", "Times New Roman", serif',
                  }}
                >

                  {heroWords.map((word) => (

                    <span
                      key={word}
                      className="
                        block
                        overflow-visible
                      "
                    >

                      <motion.span
                        variants={wordItem}
                        className="
                          inline-block
                          whitespace-nowrap
                        "
                      >
                        {word}
                      </motion.span>

                    </span>

                  ))}

                </motion.h1>

              </div>


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
                  mt-9
                  flex
                  items-center
                  justify-center
                  gap-4
                  md:mt-10
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


          {/* HERO STORY */}

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


          {/* SCROLL */}

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
          UNBOUND SIGNATURE
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-y
          border-white/10
          bg-[#050505]
          px-6
          py-32
          md:px-10
          md:py-44
        "
      >

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/[0.025]
            blur-[120px]
          "
        />

        <div className="relative mx-auto max-w-7xl">

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
              grid
              grid-cols-1
              gap-16
              md:grid-cols-12
              md:items-end
            "
          >

            <div className="md:col-span-8">

              <p
                className="
                  mb-8
                  text-[8px]
                  uppercase
                  tracking-[0.6em]
                  text-white/30
                  md:text-xs
                "
              >
                The UNBOUND Signature
              </p>

              <h2
                className="
                  text-5xl
                  font-light
                  leading-[0.86]
                  tracking-[-0.065em]
                  sm:text-6xl
                  md:text-8xl
                  lg:text-[7vw]
                "
              >
                CREATE.
                <br />
                CAPTURE.
                <br />
                <span className="text-white/30">
                  TELL.
                </span>
              </h2>

            </div>


            <div className="md:col-span-4">

              <p
                className="
                  max-w-sm
                  text-sm
                  leading-7
                  text-white/45
                  md:text-base
                  md:leading-8
                "
              >
                From the first idea to the final
                frame, we create experiences,
                capture the emotion and tell
                stories that live beyond the day.
              </p>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          THE UNBOUND DIFFERENCE
      ===================================================== */}

      <section
        className="
          border-y
          border-white/10
          bg-[#050505]
          px-6
          py-28
          md:px-10
          md:py-40
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
              amount: 0.25,
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
                text-white/30
              "
            >
              The UNBOUND difference
            </p>

            <h2
              className="
                max-w-5xl
                text-5xl
                font-light
                leading-[0.88]
                tracking-[-0.065em]
                md:text-7xl
                lg:text-[6vw]
              "
            >
              Not just what
              <br />
              you see.
              <br />
              <span className="text-white/30">
                What you feel.
              </span>
            </h2>

          </motion.div>


          <div
            className="
              mt-20
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

            {[
              {
                number: "01",
                title: "Emotion",
                text:
                  "We look for the expressions, reactions and connections that make a moment yours.",
              },

              {
                number: "02",
                title: "Atmosphere",
                text:
                  "The music, movement, light and energy are part of the story too.",
              },

              {
                number: "03",
                title: "Story",
                text:
                  "Every celebration has a beginning, middle and feeling worth remembering.",
              },
            ].map((item, index) => (

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
                  delay: index * 0.1,
                  duration: 0.8,
                  ease: EASE,
                }}
                className="
                  group
                  bg-[#050505]
                  p-8
                  md:p-10
                  lg:p-12
                "
              >

                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.45em]
                    text-white/25
                  "
                >
                  {item.number}
                </span>

                <h3
                  className="
                    mt-16
                    text-3xl
                    font-light
                    tracking-[-0.04em]
                    transition-transform
                    duration-500
                    group-hover:translate-x-2
                    md:text-4xl
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-5
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
          CHOOSE YOUR STORY
      ===================================================== */}

      <section
        className="
          bg-black
          px-6
          py-28
          md:px-10
          md:py-40
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
              amount: 0.25,
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
                text-white/30
              "
            >
              Find your story
            </p>

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
              What are you
              <br />
              celebrating?
            </h2>

          </motion.div>


          <div
            className="
              mt-20
              divide-y
              divide-white/10
              border-y
              border-white/10
            "
          >

            {services.map((service) => (

              <Link
                key={service.number}
                to={service.link}
                className="
                  group
                  flex
                  items-center
                  justify-between
                  py-8
                  md:py-10
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-6
                    md:gap-10
                  "
                >

                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.4em]
                      text-white/20
                    "
                  >
                    {service.number}
                  </span>

                  <h3
                    className="
                      text-3xl
                      font-light
                      tracking-[-0.04em]
                      transition-transform
                      duration-500
                      group-hover:translate-x-2
                      md:text-5xl
                    "
                  >
                    {service.title}
                  </h3>

                </div>


                <ArrowUpRight
                  size={20}
                  strokeWidth={1}
                  className="
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
          OUR PROCESS
      ===================================================== */}

      <section
        className="
          border-y
          border-white/10
          bg-[#050505]
          px-6
          py-32
          md:px-10
          md:py-44
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
              mb-20
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
                md:text-xs
              "
            >
              How we work
            </p>

            <h2
              className="
                max-w-5xl
                text-5xl
                font-light
                leading-[0.88]
                tracking-[-0.065em]
                md:text-7xl
                lg:text-[6vw]
              "
            >
              From first idea
              <br />
              to lasting memory.
            </h2>

          </motion.div>


          <div
            className="
              grid
              grid-cols-1
              border-t
              border-white/10
              md:grid-cols-2
            "
          >

            {processSteps.map((step, index) => (

              <motion.div
                key={step.number}
                initial={{
                  opacity: 0,
                  y: 45,
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
                  duration: 0.8,
                  delay: index * 0.08,
                  ease: EASE,
                }}
                className="
                  group
                  border-b
                  border-white/10
                  py-10
                  md:border-r
                  md:px-10
                  md:py-14
                  md:[&:nth-child(2n)]:border-r-0
                "
              >

                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-8
                  "
                >

                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.4em]
                      text-white/30
                    "
                  >
                    {step.number}
                  </span>


                  <ArrowUpRight
                    size={18}
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
                    mt-12
                    text-4xl
                    font-light
                    tracking-[-0.05em]
                    md:text-5xl
                  "
                >
                  {step.title}
                </h3>


                <p
                  className="
                    mt-5
                    max-w-md
                    text-sm
                    leading-7
                    text-white/40
                    md:text-base
                    md:leading-8
                  "
                >
                  {step.description}
                </p>

              </motion.div>

            ))}

          </div>

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

                <span className="text-white/25">
                  ✦
                </span>

                <span>Events</span>

                <span className="text-white/25">
                  ✦
                </span>

                <span>Pre-Weddings</span>

                <span className="text-white/25">
                  ✦
                </span>

                <span>Cinematic Films</span>

                <span className="text-white/25">
                  ✦
                </span>

                <span>Stories</span>

                <span className="text-white/25">
                  ✦
                </span>

                <span>UNBOUND</span>

                <span className="text-white/25">
                  ✦
                </span>

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
          CLIENT LOVE
      ===================================================== */}

      <section
        className="
          border-y
          border-white/10
          bg-[#050505]
          px-6
          py-28
          md:px-10
          md:py-40
        "
      >

        <div className="mx-auto max-w-7xl">

          {/* SECTION INTRO */}

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
          >

            <p
              className="
                mb-7
                text-[8px]
                uppercase
                tracking-[0.6em]
                text-white/30
                md:text-xs
              "
            >
              Client love
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
                  leading-[0.88]
                  tracking-[-0.065em]
                  md:text-7xl
                  lg:text-[6vw]
                "
              >
                What our clients
                <br />
                say.
              </h2>

              <p
                className="
                  max-w-sm
                  text-sm
                  leading-7
                  text-white/35
                  md:text-base
                  md:leading-8
                "
              >
                The best part of what we create
                is knowing how it felt to the people
                who trusted us with their moments.
              </p>

            </div>

          </motion.div>


          {/* TESTIMONIAL GRID */}

          <div
            className="
              mt-20
              grid
              grid-cols-1
              gap-px
              overflow-hidden
              border
              border-white/10
              bg-white/10
              md:grid-cols-2
            "
          >

            {[
              {
                quote:
                  "UNBOUND made everything feel effortless. They understood the moments we wanted to remember and captured them so naturally.",
                name: "Aarav & Priya",
                type: "Wedding",
              },

              {
                quote:
                  "We never felt like we were posing for photographs. Everything felt genuine, relaxed and completely us.",
                name: "Rohan & Ananya",
                type: "Pre-Wedding",
              },

              {
                quote:
                  "From the first conversation to the final photographs, the entire experience felt personal and beautifully handled.",
                name: "Meera",
                type: "Celebration",
              },

              {
                quote:
                  "The team captured all the little things we missed on the day. Looking back at the photographs brought everything back.",
                name: "Karthik & Sneha",
                type: "Wedding",
              },

              {
                quote:
                  "What stood out most was the attention to emotion. They didn't just capture what happened — they captured how it felt.",
                name: "Rahul & Ishita",
                type: "Cinematic Story",
              },

              {
                quote:
                  "UNBOUND gave us photographs that feel timeless. Every image has a feeling behind it, and that's exactly what we wanted.",
                name: "Arjun & Kavya",
                type: "Wedding",
              },

            ].map((testimonial, index) => (

              <motion.article
                key={testimonial.name}
                initial={{
                  opacity: 0,
                  y: 45,
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
                  delay: index * 0.08,
                  duration: 0.8,
                  ease: EASE,
                }}
                className="
                  group
                  relative
                  flex
                  min-h-[330px]
                  flex-col
                  justify-between
                  bg-[#050505]
                  p-8
                  md:p-10
                  lg:p-12
                "
              >

                {/* QUOTE MARK */}

                <div
                  className="
                    text-5xl
                    font-serif
                    leading-none
                    text-white/15
                    transition-colors
                    duration-500
                    group-hover:text-white/30
                  "
                >
                  “
                </div>


                {/* QUOTE */}

                <p
                  className="
                    mt-8
                    max-w-xl
                    text-xl
                    font-light
                    leading-8
                    tracking-[-0.02em]
                    text-white/75
                    md:text-2xl
                    md:leading-9
                  "
                >
                  {testimonial.quote}
                </p>


                {/* CLIENT */}

                <div
                  className="
                    mt-12
                    flex
                    items-end
                    justify-between
                    gap-6
                    border-t
                    border-white/10
                    pt-6
                  "
                >

                  <div>

                    <p
                      className="
                        text-sm
                        font-medium
                        tracking-[-0.01em]
                        text-white/80
                      "
                    >
                      {testimonial.name}
                    </p>

                    <p
                      className="
                        mt-2
                        text-[8px]
                        uppercase
                        tracking-[0.4em]
                        text-white/25
                      "
                    >
                      {testimonial.type}
                    </p>

                  </div>


                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.35em]
                      text-white/20
                      transition-colors
                      duration-500
                      group-hover:text-white/40
                    "
                  >
                    Client story
                  </span>

                </div>

              </motion.article>

            ))}

          </div>


          {/* CLOSING LINE */}

          <motion.div
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
              amount: 0.3,
            }}
            transition={{
              delay: 0.15,
              duration: 0.8,
              ease: EASE,
            }}
            className="
              mt-14
              flex
              flex-col
              gap-5
              md:flex-row
              md:items-center
              md:justify-between
            "
          >

            <p
              className="
                max-w-xl
                text-sm
                leading-7
                text-white/30
              "
            >
              Every story is different.
              That's why every UNBOUND experience
              begins with listening.
            </p>


            <Link
              to="/contact"
              className="
                group
                flex
                w-fit
                items-center
                gap-4
                text-[9px]
                uppercase
                tracking-[0.4em]
                text-white/50
                transition-colors
                duration-300
                hover:text-white
              "
            >

              Tell us your story

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

        </div>

      </section>


      {/* =====================================================
          CHECK YOUR DATE
      ===================================================== */}

      <section
        className="
          border-y
          border-white/10
          bg-[#080808]
          px-6
          py-24
          md:px-10
          md:py-32
        "
      >

        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            gap-10
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          <div>

            <p
              className="
                mb-5
                text-[8px]
                uppercase
                tracking-[0.6em]
                text-white/25
              "
            >
              Planning something?
            </p>

            <h2
              className="
                text-4xl
                font-light
                leading-[0.95]
                tracking-[-0.05em]
                md:text-5xl
              "
            >
              Let's see what
              <br />
              we can create together.
            </h2>

          </div>


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
              border-white/30
              px-7
              py-4
              text-[9px]
              uppercase
              tracking-[0.4em]
              text-white/70
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

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section
        className="
          bg-black
          px-6
          py-28
          md:px-10
          md:py-40
        "
      >

        <div className="mx-auto max-w-7xl">

          <div
            className="
              grid
              grid-cols-1
              gap-16
              md:grid-cols-12
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.9,
                ease: EASE,
              }}
              className="md:col-span-4"
            >

              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.6em]
                  text-white/30
                "
              >
                Good to know
              </p>

              <h2
                className="
                  mt-8
                  text-4xl
                  font-light
                  leading-[0.95]
                  tracking-[-0.05em]
                  md:text-5xl
                "
              >
                Questions,
                <br />
                answered.
              </h2>

            </motion.div>


            <div className="md:col-span-8">

              {[
                {
                  question:
                    "What types of events do you cover?",
                  answer:
                    "We work across weddings, pre-weddings, events and cinematic films.",
                },

                {
                  question:
                    "How do we start?",
                  answer:
                    "Send us your date, event type and a little about what you're planning. We'll take it from there.",
                },

                {
                  question:
                    "Can we customise our experience?",
                  answer:
                    "Absolutely. Every celebration has its own people, atmosphere and priorities.",
                },

                {
                  question:
                    "Do you offer photography and films?",
                  answer:
                    "Yes. Our work spans both photography and cinematic storytelling.",
                },
              ].map((faq, index) => (

                <motion.details
                  key={faq.question}
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
                    amount: 0.15,
                  }}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.7,
                    ease: EASE,
                  }}
                  className="
                    group
                    border-t
                    border-white/10
                    py-7
                    last:border-b
                  "
                >

                  <summary
                    className="
                      flex
                      cursor-pointer
                      list-none
                      items-center
                      justify-between
                      gap-6
                      text-xl
                      font-light
                      tracking-[-0.03em]
                      md:text-2xl
                    "
                  >

                    <span>
                      {faq.question}
                    </span>

                    <span
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/20
                        text-white/50
                        transition-transform
                        duration-300
                        group-open:rotate-45
                      "
                    >
                      +
                    </span>

                  </summary>


                  <p
                    className="
                      max-w-2xl
                      pt-5
                      text-sm
                      leading-7
                      text-white/35
                    "
                  >
                    {faq.answer}
                  </p>

                </motion.details>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SOCIAL DISCOVERY
      ===================================================== */}

      <section
        className="
          border-t
          border-white/10
          bg-[#050505]
          px-6
          py-24
          text-center
          md:px-10
          md:py-32
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
            duration: 1,
            ease: EASE,
          }}
        >

          <p
            className="
              mb-6
              text-[8px]
              uppercase
              tracking-[0.6em]
              text-white/25
            "
          >
            Follow the story
          </p>


          <h2
            className="
              text-4xl
              font-light
              tracking-[-0.05em]
              md:text-6xl
            "
          >
            More moments.
            <br />
            More stories.
          </h2>


          <p
            className="
              mx-auto
              mt-7
              max-w-md
              text-sm
              leading-7
              text-white/35
            "
          >
            Discover recent work, behind-the-scenes moments
            and the world we're building around UNBOUND.
          </p>


          {/* Replace this URL with the actual UNBOUND Instagram */}

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              mt-10
              inline-flex
              items-center
              gap-4
              border-b
              border-white/20
              pb-3
              text-[9px]
              uppercase
              tracking-[0.4em]
              text-white/60
              transition-all
              duration-500
              hover:border-white
              hover:text-white
            "
          >

            Instagram

            <ArrowUpRight
              size={15}
              strokeWidth={1}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />

          </a>

        </motion.div>

      </section>


      {/* =====================================================
          CONTACT / CHECK YOUR DATE
      ===================================================== */}

      <section
        ref={contactRef}
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
            min-h-[900px]
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


              <div
                className="
                  flex
                  flex-col
                  items-start
                  gap-4
                "
              >

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
                    border-white
                    bg-white
                    px-7
                    py-4
                    text-[9px]
                    uppercase
                    tracking-[0.4em]
                    text-black
                    transition-all
                    duration-500
                    hover:bg-transparent
                    hover:text-white
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
                    flex
                    w-fit
                    items-center
                    gap-4
                    border-b
                    border-white/30
                    pb-2
                    text-[9px]
                    uppercase
                    tracking-[0.4em]
                    text-white/60
                    transition-all
                    duration-500
                    hover:border-white
                    hover:text-white
                  "
                >

                  Start a conversation

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