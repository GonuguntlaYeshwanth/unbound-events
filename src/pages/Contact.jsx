import {
  motion,
} from "motion/react";

import {
  ArrowLeft,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";


function Contact() {

  // =====================================================
  // BUSINESS INFORMATION
  // =====================================================

  const business = {
    name: "UnboundEvents & CO",

    phone: "9392402961",

    whatsapp: "9392402961",

    email: "icymac.in@gmail.com",

    address:
      "Suit No II, F 103, H No 6-3-1112/7 Snow Drop Apts, Near Keerthilal Jewellers, Somajiguda, Telangana, India - 500016",

    instagram:
      "https://www.instagram.com/unboundevents.co?igsh=MzZvYmJnaHZoYm1r&utm_source=qr",

    maps:
      "https://www.google.com/maps/search/?api=1&query=Snow+Drop+Apts%2C+Somajiguda%2C+Hyderabad%2C+Telangana+500016",
  };


  return (
    <main className="bg-black text-white">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-black
        "
      >

        {/* =================================================
            HERO IMAGE
        ================================================= */}

        <motion.div
          initial={{
            scale: 1.08,
            opacity: 0,
          }}

          animate={{
            scale: 1,
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
            inset-0
            transform-gpu
          "
        >

          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2400&q=85"
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
            DARK OVERLAY
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-black/55
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
            from-black/70
            via-black/20
            to-black
          "
        />


        {/* =================================================
            NAVIGATION
        ================================================= */}

        <div
          className="
            absolute
            left-0
            right-0
            top-0
            z-20
            flex
            items-center
            justify-between
            px-6
            py-6
            md:px-10
            md:py-8
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
              hover:opacity-60
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
              gap-3
              text-[9px]
              uppercase
              tracking-[0.35em]
              text-white/50
              transition-colors
              duration-300
              hover:text-white
            "
          >

            <ArrowLeft
              size={14}
              strokeWidth={1.2}
              className="
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
            />

            Back

          </Link>

        </div>


        {/* =================================================
            HERO CONTENT
        ================================================= */}

        <div
          className="
            relative
            z-10
            flex
            min-h-screen
            items-center
            px-6
            py-32
            md:px-10
          "
        >

          <div
            className="
              mx-auto
              w-full
              max-w-7xl
            "
          >

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
                duration: 0.9,
                ease: [
                  0.16,
                  1,
                  0.3,
                  1,
                ],
              }}

              className="
                mb-10
                text-[9px]
                uppercase
                tracking-[0.55em]
                text-white/50
                md:text-xs
              "
            >
              04 — Contact
            </motion.p>


            <motion.h1
              initial={{
                opacity: 0,
                y: 70,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 1.2,
                delay: 0.1,
                ease: [
                  0.16,
                  1,
                  0.3,
                  1,
                ],
              }}

              className="
                max-w-7xl
                text-[16vw]
                font-light
                leading-[0.78]
                tracking-[-0.075em]
                md:text-[14vw]
              "
            >
              LET&apos;S TALK.
            </motion.h1>


            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 1,
                delay: 0.35,
                ease: [
                  0.16,
                  1,
                  0.3,
                  1,
                ],
              }}

              className="
                mt-16
                grid
                grid-cols-1
                gap-8
                md:grid-cols-12
              "
            >

              <div className="md:col-span-5" />

              <p
                className="
                  text-base
                  leading-8
                  text-white/65
                  md:col-span-7
                  md:text-xl
                  md:leading-9
                "
              >
                Have a celebration in mind?
                <br />
                Let&apos;s create something unforgettable together.
              </p>

            </motion.div>

          </div>

        </div>


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
            z-20
            -translate-x-1/2
            text-[8px]
            uppercase
            tracking-[0.45em]
            text-white/40
          "
        >
          Start a conversation
        </motion.div>

      </section>


      {/* =====================================================
          CONTACT DETAILS
      ===================================================== */}

      <section
        className="
          bg-black
          px-6
          py-32
          md:px-10
          md:py-48
        "
      >

        <div className="mx-auto max-w-7xl">


          {/* =================================================
              INTRO
          ================================================= */}

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
              ease: [
                0.16,
                1,
                0.3,
                1,
              ],
            }}
          >

            <p
              className="
                mb-10
                text-[9px]
                uppercase
                tracking-[0.5em]
                text-white/25
              "
            >
              Get in touch
            </p>


            <h2
              className="
                max-w-5xl
                text-5xl
                font-light
                leading-[0.92]
                tracking-[-0.06em]
                md:text-7xl
                lg:text-[7vw]
              "
            >
              Tell us about
              <br />
              your moment.
            </h2>

          </motion.div>


          {/* =================================================
              CONTACT CARDS
          ================================================= */}

          <div
            className="
              mt-24
              grid
              grid-cols-1
              gap-5
              md:grid-cols-2
              lg:grid-cols-3
            "
          >

            {/* =================================================
                PHONE
            ================================================= */}

            <motion.a
              href={`tel:${business.phone}`}

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
                duration: 0.8,
              }}

              className="
                group
                border
                border-white/10
                bg-neutral-950
                p-8
                transition-all
                duration-500
                hover:border-white/25
                hover:bg-neutral-900
              "
            >

              <div
                className="
                  mb-16
                  flex
                  items-center
                  justify-between
                "
              >

                <Phone
                  size={21}
                  strokeWidth={1}
                  className="text-white/40"
                />

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


              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.45em]
                  text-white/25
                "
              >
                Call us
              </p>


              <p
                className="
                  mt-4
                  text-2xl
                  font-light
                  tracking-[-0.03em]
                "
              >
                {business.phone}
              </p>

            </motion.a>


            {/* =================================================
                WHATSAPP
            ================================================= */}

            <motion.a
              href={`https://wa.me/91${business.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"

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
                duration: 0.8,
                delay: 0.1,
              }}

              className="
                group
                border
                border-white/10
                bg-neutral-950
                p-8
                transition-all
                duration-500
                hover:border-white/25
                hover:bg-neutral-900
              "
            >

              <div
                className="
                  mb-16
                  flex
                  items-center
                  justify-between
                "
              >

                <MessageCircle
                  size={21}
                  strokeWidth={1}
                  className="text-white/40"
                />

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


              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.45em]
                  text-white/25
                "
              >
                WhatsApp
              </p>


              <p
                className="
                  mt-4
                  text-2xl
                  font-light
                  tracking-[-0.03em]
                "
              >
                {business.whatsapp}
              </p>

            </motion.a>


            {/* =================================================
                EMAIL
            ================================================= */}

            <motion.a
              href={`mailto:${business.email}`}

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
                duration: 0.8,
                delay: 0.2,
              }}

              className="
                group
                border
                border-white/10
                bg-neutral-950
                p-8
                transition-all
                duration-500
                hover:border-white/25
                hover:bg-neutral-900
              "
            >

              <div
                className="
                  mb-16
                  flex
                  items-center
                  justify-between
                "
              >

                <Mail
                  size={21}
                  strokeWidth={1}
                  className="text-white/40"
                />

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


              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.45em]
                  text-white/25
                "
              >
                Email
              </p>


              <p
                className="
                  mt-4
                  break-all
                  text-xl
                  font-light
                  tracking-[-0.02em]
                "
              >
                {business.email}
              </p>

            </motion.a>

          </div>

        </div>

      </section>


      {/* =====================================================
          CINEMATIC IMAGE
      ===================================================== */}

      <section
        className="
          bg-black
          px-6
          py-20
          md:px-10
          md:py-32
        "
      >

        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
            }}

            whileInView={{
              opacity: 1,
              scale: 1,
            }}

            viewport={{
              once: true,
              amount: 0.2,
            }}

            transition={{
              duration: 1.2,
              ease: [
                0.16,
                1,
                0.3,
                1,
              ],
            }}

            className="
              relative
              overflow-hidden
            "
          >

            <motion.img
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
                duration: 1.6,
                ease: [
                  0.16,
                  1,
                  0.3,
                  1,
                ],
              }}

              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2400&q=85"

              alt="Wedding celebration"

              loading="lazy"
              decoding="async"

              className="
                h-[55vh]
                w-full
                object-cover
                md:h-[70vh]
              "
            />


            <div
              className="
                absolute
                inset-0
                bg-black/25
              "
            />


            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                bg-gradient-to-t
                from-black
                via-black/50
                to-transparent
                px-6
                pb-8
                pt-32
                md:px-10
                md:pb-10
              "
            >

              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.5em]
                  text-white/40
                "
              >
                Weddings · Events · Stories
              </p>


              <h3
                className="
                  mt-4
                  max-w-3xl
                  text-4xl
                  font-light
                  leading-[0.95]
                  tracking-[-0.05em]
                  md:text-6xl
                "
              >
                Every conversation
                <br />
                starts with a moment.
              </h3>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          FIND US
      ===================================================== */}

      <section
        className="
          border-t
          border-white/10
          bg-black
          px-6
          py-32
          md:px-10
          md:py-48
        "
      >

        <div className="mx-auto max-w-7xl">


          {/* =================================================
              LOCATION HEADER
          ================================================= */}

          <div
            className="
              grid
              grid-cols-1
              gap-16
              md:grid-cols-12
              md:items-end
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
              }}

              className="md:col-span-5"
            >

              <p
                className="
                  mb-8
                  text-[9px]
                  uppercase
                  tracking-[0.5em]
                  text-white/25
                "
              >
                Find us
              </p>


              <h2
                className="
                  text-5xl
                  font-light
                  leading-[0.92]
                  tracking-[-0.06em]
                  md:text-7xl
                "
              >
                Based in
                <br />
                Hyderabad.
              </h2>

            </motion.div>


            {/* =================================================
                ADDRESS
            ================================================= */}

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
                delay: 0.15,
              }}

              className="md:col-span-7"
            >

              <div
                className="
                  flex
                  gap-5
                  border-l
                  border-white/10
                  pl-6
                  md:pl-10
                "
              >

                <MapPin
                  size={20}
                  strokeWidth={1}
                  className="
                    mt-1
                    shrink-0
                    text-white/30
                  "
                />


                <div>

                  <p
                    className="
                      text-lg
                      font-light
                      leading-8
                      text-white/70
                      md:text-xl
                      md:leading-9
                    "
                  >
                    {business.address}
                  </p>


                  <a
                    href={business.maps}
                    target="_blank"
                    rel="noopener noreferrer"

                    className="
                      group
                      mt-8
                      inline-flex
                      items-center
                      gap-3
                      border-b
                      border-white/20
                      pb-3
                      text-[9px]
                      uppercase
                      tracking-[0.35em]
                      text-white/50
                      transition-all
                      duration-500
                      hover:border-white
                      hover:text-white
                    "
                  >

                    Open in Google Maps

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.1}
                      className="
                        transition-transform
                        duration-500
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />

                  </a>

                </div>

              </div>

            </motion.div>

          </div>


          {/* =================================================
              GOOGLE MAP
          ================================================= */}

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
              amount: 0.2,
            }}

            transition={{
              duration: 1.2,
              delay: 0.15,
              ease: [
                0.16,
                1,
                0.3,
                1,
              ],
            }}

            className="
              relative
              mt-20
              overflow-hidden
              border
              border-white/10
              bg-neutral-950
            "
          >

            <div
              className="
                relative
                aspect-[4/3]
                w-full
                md:aspect-[16/7]
              "
            >

              <iframe
                title="UnboundEvents & CO location"

                src="https://www.google.com/maps?q=Snow%20Drop%20Apartments%2C%20Somajiguda%2C%20Hyderabad%2C%20Telangana%20500016&output=embed"

                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  border-0
                  grayscale
                  invert-[0.88]
                  opacity-80
                "

                loading="lazy"

                allowFullScreen

                referrerPolicy="no-referrer-when-downgrade"
              />


              {/* MAP OVERLAY */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-black/15
                "
              />


              {/* LOCATION LABEL */}

              <div
                className="
                  absolute
                  left-5
                  top-5
                  z-10
                  border
                  border-white/15
                  bg-black/75
                  px-5
                  py-4
                  backdrop-blur-md
                  md:left-7
                  md:top-7
                "
              >

                <p
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.4em]
                    text-white/40
                  "
                >
                  Our location
                </p>


                <p
                  className="
                    mt-2
                    text-sm
                    font-light
                    text-white
                  "
                >
                  Somajiguda
                </p>


                <p
                  className="
                    mt-1
                    text-[9px]
                    uppercase
                    tracking-[0.25em]
                    text-white/35
                  "
                >
                  Hyderabad · Telangana
                </p>

              </div>


              {/* MAP BOTTOM BAR */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  z-10
                  flex
                  items-end
                  justify-between
                  gap-6
                  bg-gradient-to-t
                  from-black
                  via-black/80
                  to-transparent
                  px-5
                  pb-5
                  pt-24
                  md:px-7
                  md:pb-7
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/20
                      bg-black/70
                    "
                  >

                    <MapPin
                      size={17}
                      strokeWidth={1.1}
                      className="text-white/70"
                    />

                  </div>


                  <div>

                    <p
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.35em]
                        text-white/40
                      "
                    >
                      {business.name}
                    </p>


                    <p
                      className="
                        mt-1
                        text-xs
                        font-light
                        text-white/80
                      "
                    >
                      Snow Drop Apts · Somajiguda
                    </p>

                  </div>

                </div>


                <a
                  href={business.maps}
                  target="_blank"
                  rel="noopener noreferrer"

                  className="
                    group
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-black/70
                    transition-all
                    duration-500
                    hover:border-white
                    hover:bg-white
                    hover:text-black
                  "

                  aria-label="Open location in Google Maps"
                >

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.1}
                    className="
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />

                </a>

              </div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          IMAGE GALLERY
      ===================================================== */}

      <section
        className="
          bg-black
          px-6
          py-20
          md:px-10
          md:py-32
        "
      >

        <div className="mx-auto max-w-7xl">

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
              amount: 0.2,
            }}

            transition={{
              duration: 1.2,
            }}

            className="
              grid
              grid-cols-1
              gap-5
              md:grid-cols-12
            "
          >

            {/* =================================================
                LARGE IMAGE
            ================================================= */}

            <div
              className="
                relative
                overflow-hidden
                md:col-span-8
              "
            >

              <motion.img
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
                  duration: 1.5,
                  ease: [
                    0.16,
                    1,
                    0.3,
                    1,
                  ],
                }}

                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2000&q=85"

                alt="Wedding ceremony"

                loading="lazy"
                decoding="async"

                className="
                  h-[55vh]
                  w-full
                  object-cover
                  md:h-[70vh]
                "
              />

            </div>


            {/* =================================================
                SMALL IMAGE — FIXED
            ================================================= */}

            <div
              className="
                relative
                overflow-hidden
                md:col-span-4
                md:mt-32
              "
            >

              <motion.img
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
                  duration: 1.5,
                  delay: 0.1,
                  ease: [
                    0.16,
                    1,
                    0.3,
                    1,
                  ],
                }}

                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=85"

                alt="Wedding details"

                loading="lazy"
                decoding="async"

                className="
                  h-[45vh]
                  w-full
                  object-cover
                  md:h-[50vh]
                "
              />

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          SOCIAL
      ===================================================== */}

      <section
        className="
          border-t
          border-white/10
          bg-black
          px-6
          py-32
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
            }}
          >

            <p
              className="
                mb-10
                text-[9px]
                uppercase
                tracking-[0.5em]
                text-white/25
              "
            >
              Follow the journey
            </p>


            <div
              className="
                divide-y
                divide-white/10
                border-y
                border-white/10
              "
            >

              {/* INSTAGRAM */}

              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"

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
                  "
                >

                  <span
                    className="
                      text-[9px]
                      text-white/20
                    "
                  >
                    01
                  </span>


                  <span
                    className="
                      text-3xl
                      font-light
                      tracking-[-0.04em]
                      md:text-5xl
                    "
                  >
                    Instagram
                  </span>

                </div>


                <ArrowUpRight
                  size={22}
                  strokeWidth={1}
                  className="
                    text-white/30
                    transition-all
                    duration-500
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    group-hover:text-white
                  "
                />

              </a>


              {/* FACEBOOK */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  py-8
                  opacity-40
                  md:py-10
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-6
                  "
                >

                  <span
                    className="
                      text-[9px]
                      text-white/20
                    "
                  >
                    02
                  </span>


                  <span
                    className="
                      text-3xl
                      font-light
                      tracking-[-0.04em]
                      md:text-5xl
                    "
                  >
                    Facebook
                  </span>

                </div>


                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.3em]
                    text-white/40
                  "
                >
                  Coming soon
                </span>

              </div>


              {/* YOUTUBE */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  py-8
                  opacity-40
                  md:py-10
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-6
                  "
                >

                  <span
                    className="
                      text-[9px]
                      text-white/20
                    "
                  >
                    03
                  </span>


                  <span
                    className="
                      text-3xl
                      font-light
                      tracking-[-0.04em]
                      md:text-5xl
                    "
                  >
                    YouTube
                  </span>

                </div>


                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.3em]
                    text-white/40
                  "
                >
                  Coming soon
                </span>

              </div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        className="
          relative
          flex
          min-h-[85vh]
          items-center
          justify-center
          overflow-hidden
          bg-neutral-950
          px-6
          py-32
          text-center
        "
      >

        {/* =================================================
            CTA BACKGROUND IMAGE
        ================================================= */}

        <motion.div
          initial={{
            scale: 1.08,
            opacity: 0,
          }}

          whileInView={{
            scale: 1,
            opacity: 0.22,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 1.5,
          }}

          className="
            pointer-events-none
            absolute
            inset-0
          "
        >

          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2200&q=80"
            alt=""
            loading="lazy"
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
            bg-black/75
          "
        />


        {/* =================================================
            CTA CONTENT
        ================================================= */}

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
            relative
            z-10
          "
        >

          <p
            className="
              mb-8
              text-[9px]
              uppercase
              tracking-[0.5em]
              text-white/35
            "
          >
            UnboundEvents &amp; CO
          </p>


          <h2
            className="
              text-5xl
              font-light
              leading-[0.92]
              tracking-[-0.06em]
              md:text-7xl
              lg:text-[7vw]
            "
          >
            Your moment.
            <br />
            Our story.
          </h2>


          {/* =================================================
              ACTIONS
          ================================================= */}

          <div
            className="
              mt-12
              flex
              flex-col
              items-center
              justify-center
              gap-5
              sm:flex-row
            "
          >

            {/* CALL */}

            <a
              href={`tel:${business.phone}`}

              className="
                inline-flex
                items-center
                gap-4
                border-b
                border-white/20
                pb-3
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-white/60
                transition-all
                duration-500
                hover:border-white
                hover:text-white
              "
            >

              Call us

              <Phone
                size={15}
                strokeWidth={1.1}
              />

            </a>


            {/* WHATSAPP */}

            <a
              href={`https://wa.me/91${business.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"

              className="
                inline-flex
                items-center
                gap-4
                border-b
                border-white/20
                pb-3
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-white/60
                transition-all
                duration-500
                hover:border-white
                hover:text-white
              "
            >

              WhatsApp

              <MessageCircle
                size={15}
                strokeWidth={1.1}
              />

            </a>


            {/* EMAIL */}

            <a
              href={`mailto:${business.email}`}

              className="
                inline-flex
                items-center
                gap-4
                border-b
                border-white/20
                pb-3
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-white/60
                transition-all
                duration-500
                hover:border-white
                hover:text-white
              "
            >

              Email

              <Mail
                size={15}
                strokeWidth={1.1}
              />

            </a>

          </div>

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
          py-8
          md:px-10
        "
      >

        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            gap-4
            text-[8px]
            uppercase
            tracking-[0.3em]
            text-white/25
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          <span>
            © {new Date().getFullYear()} {business.name}
          </span>


          <span>
            Weddings · Events · Stories · Films
          </span>

        </div>

      </footer>

    </main>
  );
}


export default Contact;