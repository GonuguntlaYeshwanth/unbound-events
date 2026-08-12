import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function ServiceRow({ service, index }) {
  return (
    <motion.article
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
        duration: 0.9,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link
        to={service.path}
        className="group relative block overflow-hidden border-t border-white/10 py-10 md:py-14"
      >

        {/* Hover image */}

        <div className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block">

          <motion.img
            src={service.image}
            alt=""
            initial={{
              opacity: 0,
              scale: 1.08,
            }}
            whileHover={{
              opacity: 0.28,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />

        </div>


        {/* Content */}

        <div className="relative z-10 flex items-center justify-between gap-8">

          <div className="flex min-w-0 items-start gap-6 md:gap-12">

            {/* Number */}

            <span className="pt-2 text-[9px] tracking-[0.35em] text-white/30">
              {service.number}
            </span>


            {/* Name + description */}

            <div>

              <h2 className="text-4xl font-light tracking-[-0.05em] transition-transform duration-500 group-hover:translate-x-2 md:text-7xl lg:text-[6vw]">
                {service.title}
              </h2>

              <p className="mt-4 max-w-lg text-xs leading-6 text-white/35 md:text-sm">
                {service.description}
              </p>

            </div>

          </div>


          {/* Arrow */}

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover:bg-white group-hover:text-black md:h-16 md:w-16">

            <motion.div
              whileHover={{
                rotate: 45,
              }}
            >
              <ArrowUpRight
                size={19}
                strokeWidth={1}
              />
            </motion.div>

          </div>

        </div>

      </Link>
    </motion.article>
  );
}

export default ServiceRow;