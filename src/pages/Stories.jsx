import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Play,
} from "lucide-react";

import { Link } from "react-router-dom";

import { useMemo, useState } from "react";

import stories from "../data/stories";


// =====================================================
// MOTION
// =====================================================

const EASE = [0.16, 1, 0.3, 1];


// =====================================================
// STORIES PAGE
// =====================================================

function Stories() {

  // ===================================================
  // ACCESSIBILITY
  // ===================================================

  const reduceMotion = useReducedMotion();


  // ===================================================
  // CATEGORY FILTER
  // ===================================================

  const [activeFilter, setActiveFilter] = useState("All");


  const filters = [
    "All",
    "Weddings",
    "Events",
    "Pre-Weddings",
    "Cinematic Films",
  ];


  // ===================================================
  // FILTER STORIES
  // ===================================================

  const filteredStories = useMemo(() => {

    if (activeFilter === "All") {
      return stories;
    }

    return stories.filter((story) => {

      const type = story.type?.toLowerCase() || "";

      const filter = activeFilter.toLowerCase();

      if (filter === "cinematic films") {
        return (
          type.includes("film") ||
          type.includes("cinematic")
        );
      }

      return type.includes(filter.replace("-", " "));

    });

  }, [activeFilter]);


  // ===================================================
  // FEATURED STORY
  // ===================================================

  const featuredStory = stories[0];


  // ===================================================
  // ANIMATION HELPERS
  // ===================================================

  const revealInitial = reduceMotion
    ? {
        opacity: 1,
      }
    : {
        opacity: 0,
        y: 70,
      };


  const revealAnimate = {
    opacity: 1,
    y: 0,
  };


  // ===================================================
  // PAGE
  // ===================================================

  return (

    <main className="min-h-screen overflow-hidden bg-black text-white">


      {/* =====================================================
          HEADER
      ===================================================== */}

      <section
        className="
          px-6
          pb-16
          pt-8
          md:px-10
          md:pb-28
          md:pt-10
        "
      >

        <div className="mx-auto max-w-7xl">


          {/* =================================================
              NAVIGATION
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: EASE,
            }}
            className="
              mb-24
              flex
              items-center
              justify-between
              md:mb-32
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
                hover:opacity-50
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
                gap-2
                text-[9px]
                uppercase
                tracking-[0.4em]
                text-white/50
                transition-colors
                hover:text-white
              "
            >

              Back Home

              <ArrowUpRight
                size={13}
                strokeWidth={1}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />

            </Link>

          </motion.div>


          {/* =================================================
              PAGE INTRO
          ================================================= */}

          <motion.div
            initial={revealInitial}
            animate={revealAnimate}
            transition={{
              duration: 1.1,
              ease: EASE,
            }}
          >

            <p
              className="
                mb-7
                text-[9px]
                uppercase
                tracking-[0.5em]
                text-white/30
              "
            >
              01 — Stories
            </p>


            <h1
              className="
                max-w-6xl
                text-6xl
                font-light
                leading-[0.86]
                tracking-[-0.065em]
                md:text-8xl
                lg:text-[9vw]
              "
            >
              Stories
              <br />
              worth remembering.
            </h1>


            <div
              className="
                mt-10
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
                  text-sm
                  leading-7
                  text-white/40
                  md:text-base
                  md:leading-8
                "
              >
                A collection of celebrations, people and
                moments captured by UNBOUND.
              </p>


              <div
                className="
                  flex
                  items-center
                  gap-3
                  text-[8px]
                  uppercase
                  tracking-[0.4em]
                  text-white/25
                "
              >

                <span className="h-px w-8 bg-white/20" />

                Selected work

              </div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          FEATURED STORY
      ===================================================== */}

      {featuredStory && (

        <section
          className="
            px-6
            pb-28
            md:px-10
            md:pb-40
          "
        >

          <div className="mx-auto max-w-7xl">


            {/* LABEL */}

            <motion.div
              initial={revealInitial}
              whileInView={revealAnimate}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.9,
                ease: EASE,
              }}
              className="
                mb-7
                flex
                items-center
                justify-between
              "
            >

              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.55em]
                  text-white/30
                "
              >
                Featured Story
              </p>


              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.4em]
                  text-white/20
                "
              >
                {featuredStory.id}
              </span>

            </motion.div>


            {/* FEATURED IMAGE */}

            <motion.div
              initial={
                reduceMotion
                  ? {
                      opacity: 1,
                    }
                  : {
                      opacity: 0,
                      y: 80,
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
                duration: 1.2,
                ease: EASE,
              }}
              className="group"
            >

              <Link
                to={featuredStory.path}
                className="
                  relative
                  block
                  aspect-[4/3]
                  overflow-hidden
                  bg-neutral-900
                  md:aspect-[16/8]
                "
              >

                {/* IMAGE */}

                <motion.img
                  src={featuredStory.image}
                  alt={`${featuredStory.couple} wedding`}
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
                  whileHover={{
                    scale: 1.04,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1.4,
                    ease: EASE,
                  }}
                />


                {/* DARK OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/20
                    transition-colors
                    duration-700
                    group-hover:bg-black/35
                  "
                />


                {/* CINEMATIC GRADIENT */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-transparent
                    to-black/10
                  "
                />


                {/* FEATURED LABEL */}

                <div
                  className="
                    absolute
                    left-6
                    top-6
                    rounded-full
                    border
                    border-white/20
                    bg-black/20
                    px-4
                    py-2
                    text-[7px]
                    uppercase
                    tracking-[0.35em]
                    text-white/70
                    backdrop-blur-md
                    md:left-8
                    md:top-8
                  "
                >
                  Featured
                </div>


                {/* VIEW BUTTON */}

                <div
                  className="
                    absolute
                    bottom-6
                    right-6
                    md:bottom-8
                    md:right-8
                  "
                >

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/40
                      bg-black/20
                      text-white
                      backdrop-blur-md
                      transition-all
                      duration-500
                      group-hover:border-white
                      group-hover:bg-white
                      group-hover:text-black
                      md:h-16
                      md:w-16
                    "
                  >

                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.1}
                    />

                  </div>

                </div>


                {/* BOTTOM INFO */}

                <div
                  className="
                    absolute
                    bottom-6
                    left-6
                    md:bottom-8
                    md:left-8
                  "
                >

                  <p
                    className="
                      mb-3
                      text-[8px]
                      uppercase
                      tracking-[0.4em]
                      text-white/50
                    "
                  >
                    {featuredStory.type}
                  </p>


                  <h2
                    className="
                      text-4xl
                      font-light
                      tracking-[-0.055em]
                      md:text-6xl
                    "
                  >
                    {featuredStory.couple}
                  </h2>

                </div>

              </Link>

            </motion.div>


            {/* FEATURED META */}

            <div
              className="
                mt-7
                flex
                flex-col
                gap-5
                md:flex-row
                md:items-end
                md:justify-between
              "
            >

              <div>

                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.35em]
                    text-white/25
                  "
                >
                  Location
                </p>

                <p className="mt-2 text-sm text-white/50">
                  {featuredStory.location}
                </p>

              </div>


              <div>

                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.35em]
                    text-white/25
                  "
                >
                  Year
                </p>

                <p className="mt-2 text-sm text-white/50">
                  {featuredStory.year}
                </p>

              </div>


              <Link
                to={featuredStory.path}
                className="
                  group
                  flex
                  w-fit
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

                View full story

                <ArrowRight
                  size={14}
                  strokeWidth={1}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

              </Link>

            </div>

          </div>

        </section>

      )}


      {/* =====================================================
          FILTER BAR
      ===================================================== */}

      <section
        className="
          sticky
          top-0
          z-30
          border-y
          border-white/10
          bg-black/85
          px-6
          py-5
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
            justify-between
            gap-6
          "
        >

          <div
            className="
              flex
              min-w-0
              gap-2
              overflow-x-auto
              scrollbar-none
            "
          >

            {filters.map((filter) => {

              const active = activeFilter === filter;

              return (

                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`
                    relative
                    flex
                    shrink-0
                    items-center
                    gap-2
                    rounded-full
                    border
                    px-4
                    py-2.5
                    text-[8px]
                    uppercase
                    tracking-[0.3em]
                    transition-all
                    duration-300
                    ${
                      active
                        ? "border-white/40 bg-white text-black"
                        : "border-white/10 text-white/40 hover:border-white/30 hover:text-white"
                    }
                  `}
                >

                  {active && (
                    <Check
                      size={11}
                      strokeWidth={1.5}
                    />
                  )}

                  {filter}

                </button>

              );

            })}

          </div>


          <span
            className="
              hidden
              shrink-0
              text-[8px]
              uppercase
              tracking-[0.3em]
              text-white/20
              md:block
            "
          >
            {filteredStories.length}{" "}
            {filteredStories.length === 1
              ? "Story"
              : "Stories"}
          </span>

        </div>

      </section>


      {/* =====================================================
          STORIES
      ===================================================== */}

      <section
        className="
          px-6
          pb-32
          pt-24
          md:px-10
          md:pb-48
          md:pt-32
        "
      >

        <div className="mx-auto max-w-7xl">


          {/* SECTION LABEL */}

          <div
            className="
              mb-16
              flex
              items-center
              justify-between
              md:mb-24
            "
          >

            <p
              className="
                text-[8px]
                uppercase
                tracking-[0.55em]
                text-white/25
              "
            >
              The archive
            </p>


            <div
              className="
                flex
                items-center
                gap-3
                text-[8px]
                uppercase
                tracking-[0.35em]
                text-white/20
              "
            >

              <span className="h-px w-6 bg-white/15" />

              {activeFilter}

            </div>

          </div>


          {/* STORIES */}

          <div className="space-y-28 md:space-y-44">

            <AnimatePresence mode="popLayout">

              {filteredStories.map((story, index) => (

                <motion.article
                  key={story.id}
                  layout
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
                  exit={{
                    opacity: 0,
                    y: -30,
                  }}
                  transition={{
                    duration: 0.9,
                    ease: EASE,
                  }}
                >


                  {/* IMAGE */}

                  <Link
                    to={story.path}
                    className="
                      group
                      block
                    "
                  >

                    <div
                      className="
                        relative
                        aspect-[4/3]
                        overflow-hidden
                        bg-neutral-900
                        md:aspect-[16/8]
                      "
                    >

                      {/* IMAGE */}

                      <motion.img
                        src={story.image}
                        alt={`${story.couple} wedding`}
                        className="
                          h-full
                          w-full
                          object-cover
                        "
                        initial={{
                          scale: reduceMotion ? 1 : 1.07,
                        }}
                        whileInView={{
                          scale: 1,
                        }}
                        whileHover={{
                          scale: 1.045,
                        }}
                        viewport={{
                          once: true,
                          amount: 0.15,
                        }}
                        transition={{
                          duration: 1.3,
                          ease: EASE,
                        }}
                      />


                      {/* REVEAL OVERLAY */}

                      <motion.div
                        initial={{
                          scaleX: reduceMotion ? 0 : 1,
                        }}
                        whileInView={{
                          scaleX: 0,
                        }}
                        viewport={{
                          once: true,
                          amount: 0.1,
                        }}
                        transition={{
                          duration: 1.1,
                          ease: EASE,
                        }}
                        style={{
                          originX: 0,
                        }}
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          z-10
                          origin-left
                          bg-black
                        "
                      />


                      {/* HOVER OVERLAY */}

                      <div
                        className="
                          absolute
                          inset-0
                          bg-black/10
                          transition-colors
                          duration-700
                          group-hover:bg-black/30
                        "
                      />


                      {/* GRADIENT */}

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-black/70
                          via-transparent
                          to-transparent
                        "
                      />


                      {/* NUMBER */}

                      <div
                        className="
                          absolute
                          left-6
                          top-6
                          z-20
                          md:left-8
                          md:top-8
                        "
                      >

                        <span
                          className="
                            text-[9px]
                            tracking-[0.35em]
                            text-white/60
                          "
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                      </div>


                      {/* VIEW BUTTON */}

                      <div
                        className="
                          absolute
                          bottom-6
                          right-6
                          z-20
                          md:bottom-8
                          md:right-8
                        "
                      >

                        <div
                          className="
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/40
                            bg-black/20
                            backdrop-blur-md
                            transition-all
                            duration-500
                            group-hover:border-white
                            group-hover:bg-white
                            group-hover:text-black
                            md:h-16
                            md:w-16
                          "
                        >

                          <ArrowUpRight
                            size={20}
                            strokeWidth={1.1}
                          />

                        </div>

                      </div>

                    </div>

                  </Link>


                  {/* STORY INFORMATION */}

                  <div
                    className="
                      mt-7
                      flex
                      flex-col
                      gap-6
                      md:flex-row
                      md:items-end
                      md:justify-between
                    "
                  >

                    <div>

                      {/* META */}

                      <div
                        className="
                          mb-4
                          flex
                          items-center
                          gap-4
                        "
                      >

                        <span
                          className="
                            text-[9px]
                            tracking-[0.35em]
                            text-white/30
                          "
                        >
                          {story.id}
                        </span>


                        <span
                          className="
                            h-px
                            w-8
                            bg-white/20
                          "
                        />


                        <span
                          className="
                            text-[9px]
                            uppercase
                            tracking-[0.35em]
                            text-white/35
                          "
                        >
                          {story.type}
                        </span>

                      </div>


                      {/* TITLE */}

                      <Link
                        to={story.path}
                        className="
                          inline-block
                          text-4xl
                          font-light
                          tracking-[-0.05em]
                          transition-opacity
                          duration-300
                          hover:opacity-50
                          md:text-6xl
                        "
                      >
                        {story.couple}
                      </Link>

                    </div>


                    {/* RIGHT META */}

                    <div
                      className="
                        flex
                        items-end
                        gap-10
                        md:text-right
                      "
                    >

                      <div>

                        <p
                          className="
                            text-[9px]
                            uppercase
                            tracking-[0.35em]
                            text-white/25
                          "
                        >
                          Location
                        </p>

                        <p
                          className="
                            mt-2
                            text-sm
                            text-white/50
                          "
                        >
                          {story.location}
                        </p>

                      </div>


                      <div>

                        <p
                          className="
                            text-[9px]
                            uppercase
                            tracking-[0.35em]
                            text-white/25
                          "
                        >
                          Year
                        </p>

                        <p
                          className="
                            mt-2
                            text-sm
                            text-white/50
                          "
                        >
                          {story.year}
                        </p>

                      </div>

                    </div>

                  </div>


                  {/* STORY INDEX LINE */}

                  <div
                    className="
                      mt-8
                      h-px
                      w-full
                      overflow-hidden
                      bg-white/10
                    "
                  >

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
                        duration: 1.2,
                        ease: EASE,
                      }}
                      style={{
                        originX: 0,
                      }}
                      className="
                        h-full
                        w-full
                        origin-left
                        bg-white/25
                      "
                    />

                  </div>

                </motion.article>

              ))}

            </AnimatePresence>


            {/* EMPTY STATE */}

            {filteredStories.length === 0 && (

              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="
                  border
                  border-white/10
                  px-6
                  py-24
                  text-center
                "
              >

                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.4em]
                    text-white/30
                  "
                >
                  More stories coming soon
                </p>

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
                  We're building the UNBOUND archive.
                  Your celebration could be one of the
                  stories we tell next.
                </p>

              </motion.div>

            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          CINEMATIC FILM CTA
      ===================================================== */}

      <section
        className="
          border-y
          border-white/10
          bg-neutral-950
          px-6
          py-28
          md:px-10
          md:py-36
        "
      >

        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            gap-8
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
                tracking-[0.55em]
                text-white/25
              "
            >
              Cinematic storytelling
            </p>


            <h2
              className="
                text-4xl
                font-light
                tracking-[-0.055em]
                md:text-6xl
              "
            >
              Some stories
              <br />
              should move.
            </h2>

          </div>


          <Link
            to="/services/cinematic-films"
            className="
              group
              flex
              w-fit
              items-center
              gap-4
              rounded-full
              border
              border-white/15
              px-6
              py-4
              text-[8px]
              uppercase
              tracking-[0.35em]
              text-white/55
              transition-all
              duration-500
              hover:border-white
              hover:bg-white
              hover:text-black
            "
          >

            <span
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                border
                border-current
              "
            >

              <Play
                size={11}
                fill="currentColor"
                strokeWidth={0}
              />

            </span>

            Explore Films

            <ArrowRight
              size={14}
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
          FINAL CTA
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
            duration: 1.1,
            ease: EASE,
          }}
          className="
            mx-auto
            max-w-7xl
          "
        >

          <p
            className="
              mb-7
              text-[9px]
              uppercase
              tracking-[0.5em]
              text-white/30
            "
          >
            Your story could be next
          </p>


          <Link
            to="/contact"
            className="
              group
              block
            "
          >

            <div
              className="
                flex
                flex-col
                gap-8
                border-b
                border-white/20
                pb-8
                md:flex-row
                md:items-end
                md:justify-between
              "
            >

              <div>

                <h2
                  className="
                    text-5xl
                    font-light
                    leading-[0.9]
                    tracking-[-0.06em]
                    transition-opacity
                    duration-500
                    group-hover:opacity-70
                    md:text-8xl
                  "
                >
                  Your story
                  <br />
                  could be next.
                </h2>

              </div>


              <div
                className="
                  flex
                  items-center
                  gap-5
                "
              >

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    transition-all
                    duration-500
                    group-hover:bg-white
                    group-hover:text-black
                    md:h-16
                    md:w-16
                  "
                >

                  <ArrowUpRight
                    size={20}
                    strokeWidth={1}
                  />

                </div>

              </div>

            </div>


            {/* CHECK YOUR DATE */}

            <div
              className="
                mt-8
                flex
                flex-col
                gap-3
                md:flex-row
                md:items-center
                md:justify-between
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-3
                  text-[9px]
                  uppercase
                  tracking-[0.4em]
                  text-white/40
                "
              >

                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-white/50
                  "
                />

                Check your date

              </div>


              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.35em]
                  text-white/20
                "
              >
                Start a conversation
              </span>

            </div>

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
                to="/"
                className="transition-colors hover:text-white"
              >
                Home
              </Link>

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


export default Stories;