import {
  AnimatePresence,
  motion,
} from "motion/react";

import {
  X,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import {
  useEffect,
} from "react";


// =====================================================
// MOBILE MENU
// =====================================================

function MobileMenu({
  isOpen,
  onClose,
}) {

  // =====================================================
  // LOCK BODY SCROLL + ESCAPE KEY
  // =====================================================

  useEffect(() => {

    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {

      if (event.key === "Escape") {
        onClose();
      }

    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {

      document.body.style.overflow = "";

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

    };

  }, [isOpen, onClose]);


  // =====================================================
  // NAVIGATION
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


  // =====================================================
  // WHATSAPP
  // =====================================================

  const whatsappNumber = "YOUR_WHATSAPP_NUMBER";

  const whatsappMessage =
    "Hi UNBOUND, I'd like to enquire about an event.";


  const whatsappUrl =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;


  return (
    <AnimatePresence>

      {isOpen && (

        <motion.div
          initial={{
            opacity: 0,
            backdropFilter: "blur(0px)",
          }}

          animate={{
            opacity: 1,
            backdropFilter: "blur(12px)",
          }}

          exit={{
            opacity: 0,
            backdropFilter: "blur(0px)",
          }}

          transition={{
            duration: 0.45,
            ease: [0.16, 1, 0.3, 1],
          }}

          className="
            fixed
            inset-0
            z-[100]
            overflow-hidden
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
              scale: 1.12,
              opacity: 0,
            }}

            animate={{
              scale: 1,
              opacity: 0.16,
            }}

            exit={{
              scale: 1.05,
              opacity: 0,
            }}

            transition={{
              duration: 1.2,
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
              aria-hidden="true"
              className="
                h-full
                w-full
                object-cover
              "
            />

          </motion.div>


          {/* =================================================
              CINEMATIC OVERLAY
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-black/82
            "
          />


          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-b
              from-black
              via-black/20
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
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
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
                  scale: 0.8,
                }}

                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}

                transition={{
                  delay: 0.15,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}

                type="button"

                onClick={onClose}

                aria-label="Close navigation menu"

                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-white/[0.03]
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-white/50
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
              aria-label="Mobile navigation"
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
                          index * 0.09,

                        duration: 0.7,

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
                              text-white/25
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
                            text-white/25
                            transition-all
                            duration-500
                            group-hover:translate-x-1
                            group-hover:-translate-y-1
                            group-hover:text-white
                          "
                        />

                      </Link>

                    </motion.div>

                  )
                )}

              </div>

            </nav>


            {/* =================================================
                CHECK YOUR DATE
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: 0.62,
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
              }}

              className="
                border-t
                border-white/10
                pt-5
              "
            >

              <Link
                to="/contact"
                onClick={onClose}

                className="
                  group
                  flex
                  items-center
                  justify-between
                  rounded-full
                  border
                  border-white/20
                  bg-white/[0.04]
                  px-5
                  py-4
                  backdrop-blur-md
                  transition-all
                  duration-500
                  hover:border-white
                  hover:bg-white
                  hover:text-black
                "
              >

                <div>

                  <p
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.4em]
                      text-white/40
                      transition-colors
                      group-hover:text-black/50
                    "
                  >
                    Planning something?
                  </p>


                  <p
                    className="
                      mt-1
                      text-sm
                      font-medium
                      uppercase
                      tracking-[0.2em]
                    "
                  >
                    Check your date
                  </p>

                </div>


                <span
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    transition-all
                    duration-500
                    group-hover:border-black/20
                  "
                >

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.2}
                  />

                </span>

              </Link>

            </motion.div>


            {/* =================================================
                WHATSAPP
            ================================================= */}

            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"

              initial={{
                opacity: 0,
                y: 15,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: 0.72,
                duration: 0.65,
              }}

              className="
                mt-3
                flex
                items-center
                justify-center
                gap-3
                py-3
                text-[8px]
                uppercase
                tracking-[0.35em]
                text-white/40
                transition-colors
                duration-300
                hover:text-white
              "
            >

              <MessageCircle
                size={14}
                strokeWidth={1.2}
              />

              Chat with UNBOUND

            </motion.a>


            {/* =================================================
                BRAND SIGNATURE
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
              }}

              animate={{
                opacity: 1,
              }}

              transition={{
                delay: 0.82,
                duration: 0.7,
              }}

              className="
                mt-2
                flex
                items-end
                justify-between
                border-t
                border-white/10
                pt-5
              "
            >

              <div>

                <p
                  className="
                    text-[7px]
                    uppercase
                    tracking-[0.4em]
                    text-white/20
                  "
                >
                  CREATE.
                </p>

                <p
                  className="
                    mt-1
                    text-[7px]
                    uppercase
                    tracking-[0.4em]
                    text-white/20
                  "
                >
                  CAPTURE.
                </p>

                <p
                  className="
                    mt-1
                    text-[7px]
                    uppercase
                    tracking-[0.4em]
                    text-white/20
                  "
                >
                  TELL.
                </p>

              </div>


              <span
                className="
                  text-right
                  text-[7px]
                  uppercase
                  tracking-[0.35em]
                  text-white/20
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