'use client'

import React from 'react'
import { motion } from 'framer-motion'

import MainSection from '../shared/MainSection'

import settingIcon from '/public/images/settings-icon.png'
import arrows from '/public/images/round-arrows.png'
import message from '/public/images/message.png'
import rects from '/public/images/white-rects.png'
import Image from 'next/image'

import cardBg1 from '/public/images/cards bg/card-1-bg.png'
import cardBg2 from '/public/images/cards bg/card-2-bg.png'
import cardBg3 from '/public/images/cards bg/card-3-bg.png'
import cardBg4 from '/public/images/cards bg/card-4-bg.png'
import AnimatedList from '../shared/LectionList'

const cards = [
  {
    title: 'Neograničeno mentorstvo 1 na 1 sa mnom',
    list: [
      'Svaki dan - 24/7!  Šta god da ti je potrebno - tu sam da ti pomognem!'
    ],
    icon: settingIcon,
    bg: cardBg1
  },
  {
    title: 'Doživotni pristup detaljnim video lekcijama - Jednostavno i sažeto',
    list: [
      'Svake nedelje ja dodajem nove lekcije i menjam stare ukoliko se nešto promenilo'
    ],
    icon: arrows,
    bg: cardBg2
  },
  {
    title: 'Pristup zatvorenoj VIP Facebook grupi',
    list: [
      'U ovoj grupi možeš da pronadješ dodatne savete od drugih ljudi koji su već prošli tvoj put i samostalno zaradjuju.',
      'Da diskutuješ sa njima o raznim temama',
      'Da prisustvuješ okupljanjima'
    ],
    icon: message,
    bg: cardBg3
  },
  {
    title: 'Imaš moju pomoć i savetovanje pri otvaranju firme na Balkanu',
    list: [
      'Preporučiću ti dobrog knjigovođu',
      'Savetovaću te kako da  posluješ legalo i profitablino',

      'Pokazaću ti kako da ostvariš jake kontakte sa domaćim veleprodavcima',

      'Uvešću te u tokove elektronske fiskalizacije i objasniću ti ceo postupak'
    ],
    icon: rects,
    bg: cardBg4
  }
]

const WhatWillYouLearn = () => {
  return (
    <MainSection>
      <div className="text-center max-w-[90rem] mx-auto px-6 sm:px-10 mb-20 sm:mb-24 lg:mb-36">
        <h2 className="uppercase">
          Šta te sve očekuje kada upišeš obuku, osim dobre zarade naravno ;)
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6 xl:gap-10 mx-auto max-w-[90rem]">
        {cards.map(({ title, list, icon, bg }) => (
          <motion.div
            initial="init"
            whileHover="flip"
            variants={{ init: {}, flip: {} }}
            key={title}
            className="relative z-10 h-full "
            style={{ perspective: '1500px' }}
          >
            <motion.article
              variants={{
                init: { rotateY: 0, transition: { duration: 1 } },
                flip: { rotateY: 180, transition: { duration: 0.5 } }
              }}
              className="h-full  rounded-20 relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div
                className="w-full h-full flex flex-col p-10 xl:p-16 gap-10 xl:gap-16 relative"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <p className="text-30xl lg:text-4xl xl:text-[3.125rem] leading-tight">
                  {title}
                </p>
                <AnimatedList
                  list={list}
                  className="font-light text-base sm:text-xl lg:text-2xl flex flex-col gap-4 list-disc"
                />

                <div className="mt-auto">
                  <Image src={icon} alt="icon" />
                </div>

                <Image fill src={bg} alt="background" style={{ zIndex: -1 }} />
              </div>

              <div
                className="absolute w-full h-full top-0"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)'
                }}
              >
                {/* <div className="w-72 h-72 rounded-full border-2 border-white "></div> */}

                <a
                  href="#"
                  className=" w-56 lg:w-48 xl:w-72 2xl:w-[27.625rem] h-56 lg:h-48 xl:h-72 2xl:h-[27.625rem] rounded-full border-[3px] border-white grid place-items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-200 lg:hover:scale-105"
                >
                  <span className="font-light xl:text-[2.5rem] leading-tight text-center">
                    POČNI ODMAH
                  </span>
                </a>

                <Image fill src={bg} alt="background" style={{ zIndex: -1 }} />
              </div>
            </motion.article>
          </motion.div>
        ))}
      </div>
    </MainSection>
  )
}

export default WhatWillYouLearn
