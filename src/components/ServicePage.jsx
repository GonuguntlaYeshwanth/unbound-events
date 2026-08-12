import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

import {
  ArrowLeft,
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import {
  useRef,
  useState,
} from "react";


// =====================================================
// IMAGE WITH FALLBACK
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
// SERVICE PAGE
// =====================================================

function ServicePage({
  service,
}) {

  const heroRef = useRef(null);


  // =====================================================
  // HERO SCROLL
  // =====================================================

  const {
    scrollYProgress,
  } = useScroll({
    target: heroRef,
    offset: [
      "start start",
      "end start",
    ],
  });


  const heroImageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.08, 1.2]
  );


  const heroImageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "8%"]
  );


  const heroContentY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", "-100px"]
  );


  const heroContentOpacity = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [1, 1, 0]
  );


  return (
    <main className="bg-black text-white">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        ref={heroRef}
        className="
          relative
          h-[150vh]
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
              scale: heroImageScale,
              y: heroImageY,
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
              duration: 1.8,
              ease: [
                0.16,
                1,
                0.3,
                1,
              ],
            }}

            className="
              absolute
              inset-[-4%]
              transform-gpu
              will-change-transform
            "
          >

            <SafeImage
              src={service.heroImage}

              fallback={
                service.gallery?.[0]
              }

              alt={service.title}

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
              DARK OVERLAY
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
              CINEMATIC GRADIENT
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-b
              from-black/65
              via-black/10
              to-black
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
              "
            >
              UNBOUND
            </Link>


            <Link
              to="/services"
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

              Services

            </Link>

          </nav>


          {/* =================================================
              HERO CONTENT
          ================================================= */}

          <motion.div
            style={{
              y: heroContentY,
              opacity: heroContentOpacity,
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

            <div className="mx-auto w-full max-w-7xl">


              {/* Number */}

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
                  delay: 0.3,
                  duration: 0.8,
                }}

                className="
                  mb-7
                  text-[9px]
                  uppercase
                  tracking-[0.55em]
                  text-white/50
                  md:text-xs
                "
              >
                {service.number} — UNBOUND
              </motion.p>


              {/* Title */}

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 60,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  delay: 0.45,
                  duration: 1.1,
                  ease: [
                    0.16,
                    1,
                    0.3,
                    1,
                  ],
                }}

                className="
                  max-w-7xl
                  text-6xl
                  font-light
                  leading-[0.82]
                  tracking-[-0.07em]
                  md:text-8xl
                  lg:text-[11vw]
                "
              >
                {service.title}
              </motion.h1>


              {/* Subtitle */}

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
                  delay: 0.8,
                  duration: 1,
                }}

                className="
                  mt-8
                  max-w-xl
                  text-sm
                  leading-7
                  text-white/65
                  md:text-lg
                "
              >
                {service.subtitle}
              </motion.p>

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
                text-white/45
              "
            >
              Explore
            </span>


            <motion.div
              animate={{
                y: [
                  0,
                  6,
                  0,
                ],
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
          INTRODUCTION
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
            ease: [
              0.16,
              1,
              0.3,
              1,
            ],
          }}

          className="
            mx-auto
            grid
            max-w-7xl
            gap-12
            md:grid-cols-[0.35fr_1fr]
          "
        >

          {/* Label */}

          <div>

            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.5em]
                text-white/30
              "
            >
              01 — The approach
            </p>

          </div>


          {/* Content */}

          <div>

            <h2
              className="
                max-w-5xl
                text-4xl
                font-light
                leading-[1]
                tracking-[-0.05em]
                md:text-6xl
                lg:text-[5vw]
              "
            >
              {service.intro}
            </h2>


            <p
              className="
                mt-10
                max-w-2xl
                text-sm
                leading-7
                text-white/40
                md:text-base
              "
            >
              {service.description}
            </p>

          </div>

        </motion.div>

      </section>


      {/* =====================================================
          APPROACH
      ===================================================== */}

      <section
        className="
          border-t
          border-white/10
          px-6
          py-32
          md:px-10
          md:py-48
        "
      >

        <div className="mx-auto max-w-7xl">


          {/* Section heading */}

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
              02 — Our approach
            </p>


            <h2
              className="
                text-5xl
                font-light
                tracking-[-0.06em]
                md:text-7xl
                lg:text-[7vw]
              "
            >
              THE DETAILS
              <br />
              MATTER.
            </h2>

          </motion.div>


          {/* Approach items */}

          <div
            className="
              mt-20
              border-t
              border-white/10
            "
          >

            {service.approach.map(
              (item, index) => (

                <motion.div
                  key={item.title}

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
                    amount: 0.15,
                  }}

                  transition={{
                    duration: 0.8,
                    delay: index * 0.08,
                  }}

                  className="
                    grid
                    gap-5
                    border-b
                    border-white/10
                    py-10
                    md:grid-cols-[100px_0.8fr_1fr]
                    md:items-start
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
                    0{index + 1}
                  </span>


                  <h3
                    className="
                      text-2xl
                      font-light
                      tracking-[-0.03em]
                      md:text-4xl
                    "
                  >
                    {item.title}
                  </h3>


                  <p
                    className="
                      max-w-xl
                      text-sm
                      leading-7
                      text-white/40
                    "
                  >
                    {item.description}
                  </p>

                </motion.div>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURE IMAGE
      ===================================================== */}

      {service.gallery?.[1] && (

        <section
          className="
            relative
            h-[80vh]
            overflow-hidden
            bg-neutral-950
            md:h-screen
          "
        >

          <motion.div
            initial={{
              scale: 1.08,
            }}

            whileInView={{
              scale: 1,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 1.8,
              ease: [
                0.16,
                1,
                0.3,
                1,
              ],
            }}

            className="
              absolute
              inset-[-4%]
            "
          >

            <SafeImage
              src={service.gallery[1]}
              fallback={service.heroImage}
              alt={service.title}
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
              pointer-events-none
              absolute
              inset-0
              bg-black/20
            "
          />


          <div
            className="
              absolute
              bottom-8
              left-6
              right-6
              md:bottom-10
              md:left-10
              md:right-10
            "
          >

            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.45em]
                text-white/50
              "
            >
              UNBOUND — {service.title}
            </p>

          </div>

        </section>

      )}


      {/* =====================================================
          GALLERY
      ===================================================== */}

      <section
        className="
          px-6
          py-32
          md:px-10
          md:py-48
        "
      >

        <div className="mx-auto max-w-7xl">


          {/* Heading */}

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
                text-white/30
              "
            >
              03 — Selected work
            </p>


            <h2
              className="
                max-w-4xl
                text-5xl
                font-light
                leading-[0.95]
                tracking-[-0.06em]
                md:text-7xl
                lg:text-[7vw]
              "
            >
              A collection
              <br />
              of moments.
            </h2>

          </motion.div>


          {/* Gallery */}

          <div
            className="
              mt-20
              grid
              gap-5
              md:grid-cols-2
            "
          >

            {service.gallery?.map(
              (image, index) => (

                <motion.div
                  key={`${image}-${index}`}

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
                    amount: 0.15,
                  }}

                  transition={{
                    duration: 0.9,
                    delay: index * 0.08,
                    ease: [
                      0.16,
                      1,
                      0.3,
                      1,
                    ],
                  }}

                  className={`
                    relative
                    overflow-hidden
                    bg-neutral-900

                    ${
                      index === 0
                        ? "md:row-span-2 md:h-[900px]"
                        : "h-[430px]"
                    }
                  `}
                >

                  <SafeImage
                    src={image}
                    fallback={service.heroImage}
                    alt={`${service.title} ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-[1.2s]
                      ease-out
                      hover:scale-[1.03]
                    "
                  />

                </motion.div>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section
        className="
          border-t
          border-white/10
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
            Your story starts here
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
            gap-5
            text-[9px]
            uppercase
            tracking-[0.35em]
            text-white/30
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          <Link
            to="/"
            className="hover:text-white"
          >
            UNBOUND
          </Link>


          <Link
            to="/services"
            className="hover:text-white"
          >
            All Services
          </Link>


          <Link
            to="/contact"
            className="hover:text-white"
          >
            Start a conversation
          </Link>

        </div>

      </footer>

    </main>
  );
}


export default ServicePage;