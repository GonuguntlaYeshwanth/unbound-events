import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import { Link } from "react-router-dom";

function StoryCard({
  story,
  index,
  total,
  direction,
  onNext,
  onPrevious,
}) {
  return (
    <div className="relative flex min-h-[70vh] w-full items-center justify-center md:min-h-[78vh]">

      {/* =====================================================
          IMAGE
      ===================================================== */}

      <motion.div
        key={`image-${story.id}`}
        initial={{
          opacity: 0,
          scale: direction === 1 ? 1.08 : 0.92,
          x: direction === 1 ? 80 : -80,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
        }}
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute inset-0 overflow-hidden md:left-[8%] md:right-[8%]"
      >

        <img
          src={story.image}
          alt={`${story.couple} wedding`}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />

      </motion.div>


      {/* =====================================================
          TOP INFORMATION
      ===================================================== */}

      <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between px-1 md:left-[8%] md:right-[8%]">

        <motion.div
          key={`number-${story.id}`}
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="flex items-center gap-4"
        >

          <span className="text-xs tracking-[0.3em] text-white/50">
            {story.id}
          </span>

          <span className="h-px w-8 bg-white/20" />

          <span className="text-[9px] uppercase tracking-[0.4em] text-white/40">
            {story.type}
          </span>

        </motion.div>


        <motion.span
          key={`year-${story.id}`}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-[9px] uppercase tracking-[0.3em] text-white/40"
        >
          {story.year}
        </motion.span>

      </div>


      {/* =====================================================
          STORY TEXT
      ===================================================== */}

      <div className="absolute bottom-10 left-0 right-0 z-10 px-1 md:bottom-12 md:left-[8%] md:right-[8%]">

        <motion.div
          key={`content-${story.id}`}
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >

          <div>

            <p className="mb-3 text-[9px] uppercase tracking-[0.45em] text-white/50">
              {story.location}
            </p>

            <h3 className="text-4xl font-light tracking-[-0.05em] md:text-6xl lg:text-7xl">
              {story.couple}
            </h3>

            <p className="mt-4 max-w-md text-xs leading-6 text-white/50 md:text-sm">
              {story.description}
            </p>

          </div>


          {/* =================================================
              VIEW STORY
          ================================================= */}

          <Link
            to={story.path}
            className="group flex w-fit items-center gap-4 text-[9px] uppercase tracking-[0.4em] text-white/75"
          >

            View Story

            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition-all duration-500 group-hover:bg-white group-hover:text-black">

              <ArrowUpRight
                size={15}
                strokeWidth={1.2}
              />

            </span>

          </Link>

        </motion.div>

      </div>


      {/* =====================================================
          PREVIOUS
      ===================================================== */}

      <button
        onClick={onPrevious}
        aria-label="Previous story"
        className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black md:left-0"
      >

        <ArrowLeft
          size={16}
          strokeWidth={1.2}
        />

      </button>


      {/* =====================================================
          NEXT
      ===================================================== */}

      <button
        onClick={onNext}
        aria-label="Next story"
        className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black md:right-0"
      >

        <ArrowRight
          size={16}
          strokeWidth={1.2}
        />

      </button>


      {/* =====================================================
          PROGRESS
      ===================================================== */}

      <div className="absolute bottom-3 left-0 right-0 z-20 flex items-center gap-3 md:left-[8%] md:right-[8%]">

        {Array.from({ length: total }).map((_, i) => (

          <div
            key={i}
            className="h-px flex-1 overflow-hidden bg-white/20"
          >

            <motion.div
              animate={{
                width: i === index ? "100%" : "0%",
              }}
              transition={{
                duration: 0.5,
              }}
              className="h-full bg-white"
            />

          </div>

        ))}

      </div>

    </div>
  );
}

export default StoryCard;