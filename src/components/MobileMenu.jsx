import {
  AnimatePresence,
  motion,
} from "motion/react";

import {
  X,
  ArrowUpRight,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import {
  useEffect,
} from "react";


function MobileMenu({
  isOpen,
  onClose,
}) {

  // =====================================================
  // LOCK BODY SCROLL WHEN MENU IS OPEN
  // =====================================================

  useEffect(() => {

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };

  }, [isOpen]);


  // =====================================================
  // NAVIGATION ITEMS
  // =====================================================

  const navigation = [
    {
      number: "01",
      label: "Stories",
      path: "/stories",
    },

    {
      number: "02",
      label: "Services",
      path: "/services",
    },

    {
      number: "03",
      label: "About",
      path: "/about",
    },

    {
      number: "04",
      label: "Contact",
      path: "/contact",
    },
  ];


  return (
    <AnimatePresence>

      {isOpen && (

        <motion.div
          initial={{
            opacity: 0,
          }}

          animate={{
            opacity: 1,
          }}

          exit={{
            opacity: 0,
          }}

          transition={{
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}

          className="
            fixed
            inset-0
            z-[100]
            bg-black
            text-white
            md:hidden
          "
        >


          {/* =================================================
              BACKGROUND IMAGE
          ================================================= */}

          <motion.div
            initial={{
              scale: 1.08,
              opacity: 0,
            }}

            animate={{
              scale: 1,
              opacity: 0.18,
            }}

            exit={{
              scale: 1.05,
              opacity: 0,
            }}

            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}

            className="
              pointer-events-none
              absolute
              inset-0
            "
          >

            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=70"
              alt=""
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
              bg-black/80
            "
          />


          {/* =================================================
              GRADIENT
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-b
              from-black
              via-transparent
              to-black
            "
          />


          {/* =================================================
              CONTENT
          ================================================= */}

          <div
            className="
              relative
              flex
              h-full
              flex-col
              px-6
              py-6
            "
          >


            {/* =================================================
                HEADER
            ================================================= */}

            <div
              className="
                flex
                items-center
                justify-between
              "
            >

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
                  delay: 0.15,
                  duration: 0.5,
                }}

                className="
                  text-sm
                  font-medium
                  tracking-[0.35em]
                "
              >
                UNBOUND
              </motion.div>


              <motion.button
                initial={{
                  opacity: 0,
                  rotate: -45,
                }}

                animate={{
                  opacity: 1,
                  rotate: 0,
                }}

                transition={{
                  delay: 0.15,
                  duration: 0.5,
                }}

                onClick={onClose}

                aria-label="Close menu"

                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  transition-colors
                  hover:bg-white
                  hover:text-black
                "
              >

                <X
                  size={19}
                  strokeWidth={1.2}
                />

              </motion.button>

            </div>


            {/* =================================================
                NAVIGATION
            ================================================= */}

            <nav
              className="
                flex
                flex-1
                items-center
              "
            >

              <div
                className="
                  w-full
                  border-t
                  border-white/10
                "
              >

                {navigation.map(
                  (item, index) => (

                    <motion.div
                      key={item.label}

                      initial={{
                        opacity: 0,
                        x: -35,
                      }}

                      animate={{
                        opacity: 1,
                        x: 0,
                      }}

                      exit={{
                        opacity: 0,
                        x: -20,
                      }}

                      transition={{
                        delay:
                          0.2 +
                          index * 0.08,

                        duration: 0.65,

                        ease: [
                          0.16,
                          1,
                          0.3,
                          1,
                        ],
                      }}

                      className="
                        border-b
                        border-white/10
                      "
                    >

                      <Link
                        to={item.path}
                        onClick={onClose}

                        className="
                          group
                          flex
                          items-center
                          justify-between
                          py-7
                        "
                      >

                        <div
                          className="
                            flex
                            items-center
                            gap-5
                          "
                        >

                          <span
                            className="
                              text-[8px]
                              uppercase
                              tracking-[0.35em]
                              text-white/30
                            "
                          >
                            {item.number}
                          </span>


                          <span
                            className="
                              text-4xl
                              font-light
                              tracking-[-0.05em]
                              transition-transform
                              duration-500
                              group-hover:translate-x-2
                            "
                          >
                            {item.label}
                          </span>

                        </div>


                        <ArrowUpRight
                          size={20}
                          strokeWidth={1}
                          className="
                            text-white/30
                            transition-all
                            duration-500
                            group-hover:text-white
                            group-hover:translate-x-1
                            group-hover:-translate-y-1
                          "
                        />

                      </Link>

                    </motion.div>

                  )
                )}

              </div>

            </nav>


            {/* =================================================
                FOOTER
            ================================================= */}

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
                delay: 0.6,
                duration: 0.7,
              }}

              className="
                flex
                items-end
                justify-between
                border-t
                border-white/10
                pt-6
              "
            >

              <div>

                <p
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.4em]
                    text-white/30
                  "
                >
                  Weddings · Events
                </p>

                <p
                  className="
                    mt-2
                    text-[8px]
                    uppercase
                    tracking-[0.4em]
                    text-white/30
                  "
                >
                  Stories · Films
                </p>

              </div>


              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.35em]
                  text-white/25
                "
              >
                Moments
                <br />
                without limits
              </span>

            </motion.div>

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}


export default MobileMenu;