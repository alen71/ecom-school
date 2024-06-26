import { motion } from 'framer-motion'
import React from 'react'
import { useRouter } from 'next/router'

import InstaIcon from '@/assets/icons/instagram-icon.svg'
import XIcon from '@/assets/icons/xIcon.svg'

import useTogglePopup from '@/store/useTogglePopup'
import UseLocoScroll from '@/store/useLocoScroll'

const NavPopup = () => {
  const { pathname } = useRouter()

  const { locomotiveScroll } = UseLocoScroll()
  const { isPopupOpen, setIsPopupOpen } = useTogglePopup()

  return (
    <motion.div
      data-scroll-sticky
      data-scroll-target="#loco-container"
      className="fixed w-screen h-screen z-50 "
      initial="hidden"
      animate={isPopupOpen ? 'visible' : 'hidden'}
      variants={{
        hidden: { display: 'none', transition: { delay: 0.4 } },
        visible: { display: 'block' }
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, transition: { duration: 0.3, delay: 0.15 } },
          visible: { opacity: 1, transition: { duration: 0.3 } }
        }}
        className="grid place-items-center bg-black/80 w-full h-full"
        onClick={() => {
          setIsPopupOpen(false)
          pathname === '/' && locomotiveScroll.start()

          document.querySelector('body')?.classList.remove('scroll-of')
          document.querySelector('html')?.classList.remove('scroll-of')
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 80, transition: { duration: 0.3 } },
            visible: {
              opacity: 1,
              y: 0,
              transition: { type: 'spring', stiffness: 45, delay: 0.1 }
            }
          }}
          className=" max-w-[84rem] m-auto px-6 sm:px-10 overflow-hidden"
          onClick={e => e.stopPropagation()}
        >
          <div className="bg-main-purple flex flex-col items-center rounded-2xl relative px-6 sm:px-16 lg:px-36 py-16 lg:py-24">
            <div
              className="absolute top-6 right-6 cursor-pointer duration-300 hover:scale-110"
              onClick={() => {
                setIsPopupOpen(false)
                locomotiveScroll.start()

                document.querySelector('body')?.classList.remove('scroll-of')
                document.querySelector('html')?.classList.remove('scroll-of')
              }}
            >
              <XIcon />
            </div>

            <h3>PRIJAVI SE NA OBUKU</h3>
            <p className="max-w-[40rem] text-base sm:text-xl py-10">
              Cena obuke je <span className="line-through">$1490</span> $490
              jednokratno za lifetime pristup. U cenu je uključeno: <br />{' '}
              <br />
              1. Neograničeno mentorstvo sa mnom <span>1 na 1,</span> <br />
              2. Pristup STEP BY STEP videima, <br />
              3. Zatvorenoj VIP grupi, <br />
              4. Platforma za pronalaženje winning proizvoda - Ecominventor,
              <br />
              5. Pristup proizvodima koji niko neće moći da prodaje sem tebe.
              (uvoz iz Kine) <br />
              6. Garancija od 7 dana za povraćaj novca ako nisi zadovoljan.{' '}
              <br /> <br />
              Ako si ozbiljan prijavi se DANAS, ostalo je još par slobodnih
              mesta!
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe4JJW7wI5i-oHr2FKJFidrJ8Qnzf5_tN9CwAZZXOTQu1uTPA/viewform?usp=send_form"
              rel="nofollow"
              target="_blank"
              className="w-fit rounded-full border-2 border-white py-2 px-5 sm:px-5 bg-black/40 duration-300 hover:bg-black flex items-center gap-3 text-sm sm:text-lg lg:text-2xl cursor-pointer"
            >
              Prijavi se odmah
            </a>

            <p className="py-6">Za pitanja:</p>

            <a
              href="https://instagram.com/jaroslav2.0?igshid=OGQ5ZDc2ODk2ZA=="
              rel="nofollow"
              target="_blank"
              className="w-fit rounded-full border-2 border-white py-2 px-5 sm:px-5 bg-black/40 duration-300 hover:bg-black flex items-center gap-3 text-sm sm:text-lg lg:text-2xl cursor-pointer"
            >
              <span>Kontaktiraj me na Instagramu</span>
              <InstaIcon />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default NavPopup
