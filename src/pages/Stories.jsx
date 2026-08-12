import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import stories from "../data/stories";

function Stories() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <section className="px-6 pb-20 pt-8 md:px-10 md:pb-32 md:pt-10">

        <div className="mx-auto max-w-7xl">

          {/* Navigation */}

          <div className="mb-24 flex items-center justify-between">

            <Link
              to="/"
              className="text-sm font-medium tracking-[0.35em]"
            >
              UNBOUND
            </Link>

            <Link
              to="/"
              className="text-[9px] uppercase tracking-[0.4em] text-white/50 transition-colors hover:text-white"
            >
              Back Home
            </Link>

          </div>


          {/* Heading */}

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >

            <p className="mb-7 text-[9px] uppercase tracking-[0.5em] text-white/30">
              01 — Stories
            </p>

            <h1 className="max-w-5xl text-6xl font-light leading-[0.9] tracking-[-0.06em] md:text-8xl lg:text-[10vw]">
              Stories
              <br />
              worth remembering.
            </h1>

            <p className="mt-10 max-w-xl text-sm leading-7 text-white/40 md:text-base">
              A collection of celebrations, people and moments
              captured by UNBOUND.
            </p>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          STORIES
      ===================================================== */}

      <section className="px-6 pb-32 md:px-10 md:pb-48">

        <div className="mx-auto max-w-7xl">

          <div className="space-y-24 md:space-y-40">

            {stories.map((story, index) => (

              <motion.article
                key={story.id}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 1.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >

                {/* Image */}

                <Link
                  to={story.path}
                  className="group block"
                >

                  <div className="relative aspect-[4/3] overflow-hidden md:aspect-[16/8]">

                    <motion.img
                      src={story.image}
                      alt={`${story.couple} wedding`}
                      className="h-full w-full object-cover"
                      whileHover={{
                        scale: 1.04,
                      }}
                      transition={{
                        duration: 1.2,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    />

                    <div className="absolute inset-0 bg-black/10 transition-colors duration-700 group-hover:bg-black/30" />


                    {/* View story */}

                    <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8">

                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-md transition-all duration-500 group-hover:bg-white group-hover:text-black md:h-16 md:w-16">

                        <ArrowUpRight
                          size={20}
                          strokeWidth={1.1}
                        />

                      </div>

                    </div>

                  </div>

                </Link>


                {/* Story information */}

                <div className="mt-7 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

                  <div>

                    <div className="mb-4 flex items-center gap-4">

                      <span className="text-[9px] tracking-[0.35em] text-white/30">
                        {story.id}
                      </span>

                      <span className="h-px w-8 bg-white/20" />

                      <span className="text-[9px] uppercase tracking-[0.35em] text-white/35">
                        {story.type}
                      </span>

                    </div>

                    <Link
                      to={story.path}
                      className="text-4xl font-light tracking-[-0.05em] transition-opacity hover:opacity-60 md:text-6xl"
                    >
                      {story.couple}
                    </Link>

                  </div>


                  <div className="flex items-end justify-between gap-10 md:text-right">

                    <div>

                      <p className="text-[9px] uppercase tracking-[0.35em] text-white/30">
                        Location
                      </p>

                      <p className="mt-2 text-sm text-white/50">
                        {story.location}
                      </p>

                    </div>


                    <div>

                      <p className="text-[9px] uppercase tracking-[0.35em] text-white/30">
                        Year
                      </p>

                      <p className="mt-2 text-sm text-white/50">
                        {story.year}
                      </p>

                    </div>

                  </div>

                </div>

              </motion.article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="border-t border-white/10 px-6 py-32 md:px-10 md:py-48">

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
          className="mx-auto max-w-7xl"
        >

          <p className="mb-7 text-[9px] uppercase tracking-[0.5em] text-white/30">
            Your story could be next
          </p>

          <Link
            to="/contact"
            className="group flex items-center justify-between border-b border-white/20 pb-6"
          >

            <h2 className="text-5xl font-light tracking-[-0.06em] md:text-8xl">
              Let&apos;s create.
            </h2>

            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover:bg-white group-hover:text-black md:h-16 md:w-16">

              <ArrowUpRight
                size={20}
                strokeWidth={1}
              />

            </span>

          </Link>

        </motion.div>

      </section>

    </main>
  );
}

export default Stories;