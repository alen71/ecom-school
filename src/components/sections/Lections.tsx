import React, { useRef } from 'react'

import { motion, useInView } from 'framer-motion'

import MainSection from '../shared/MainSection'
import ParagraphAnimation from '../shared/ParagraphAnimation'

import diamond from '/public/images/diamond.png'
import stone from '/public/images/stone.png'

import bg1 from '/public/images/lectures bg/bg-1.png'
import bg1Mobile from '/public/images/lectures bg/bg-1-mobile.jpg'
import bg2 from '/public/images/lectures bg/bg-2.png'
import bg2Mobile from '/public/images/lectures bg/bg-2-mobile.jpg'
import bg3 from '/public/images/lectures bg/bg-3.png'
import bg3Mobile from '/public/images/lectures bg/bg-3-mobile.jpg'
import bg4 from '/public/images/lectures bg/bg-4.png'
import bg4Mobile from '/public/images/lectures bg/bg-4-mobile.jpg'
import HeadingAnimation from '../shared/HeadingAnimation copy'
import LectionRow from '../shared/LectionRow'

const lectionsList = [
  {
    num: 'Lekcija 1.',
    title: 'Pronalaženje dobavljača i pravih proizvoda',
    list: [
      'Učim te strategiji kako da pronađeš najbolje i najprofitabilnije proizvode.',
      'Nauči kako da se povežeš sa pouzdanim dobavljačima robe.',
      'Nauči kako da ostvariš najveći profit od odabranog proizvoda.'
    ],
    icon: diamond,
    bg: bg1,
    bgMobile: bg1Mobile
  },
  {
    num: 'Lekcija 2.',
    title: 'Pravljenje profitabilne eCom prodavnice',
    list: [
      'Izgradnja online prodavnice od početka do kraja!',
      'Baziramo se na svaki najmanji detalj kako bi prodavnica radila besprekorno!',
      'Optimizujemo prodavnicu kako bi bila pogodna za domaće tržište!',
      ' Brendiramo tvoju prodavnicu kako bi ljudima ostala u podsvesti!'
    ],
    href: '#',
    bg: bg2,
    bgMobile: bg2Mobile,
    reverse: true
  },
  {
    num: 'Lekcija 3.',
    title: ' Detaljno o strategijama reklamiranja (FB i IG)',
    list: [
      'Učim te najboljoj testiranoj strategiji za reklamiranje na domaće tržištu.',
      'Pravljenje videa i slika za reklame.',
      'Detaljno pisanje prodajnog teksta za reklame.',
      'Psihološke stragetije i metode za povećanje prodaje.'
    ],
    icon: stone,
    bg: bg3,
    bgMobile: bg3Mobile
  },
  {
    num: 'Lekcija 4.',
    title: 'Kako izgraditi dugoročan biznis?',
    list: [
      'Šta raditi posle prve prodaje?',
      'Kako otvoriti fimru u Srbiji?',
      'Pomoć pri odabiru knjigovođe.',
      'Pomoć sa elektronskom fiskalizacijom.',
      'Izgradnja prepoznatljivog brenda na domaćem tržištu.'
    ],
    href: '#',
    bg: bg4,
    bgMobile: bg4Mobile,
    reverse: true
  }
]

const Lections = () => {
  const titleContainerRef = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(titleContainerRef, { once: true })

  return (
    <MainSection px={0}>
      <div className="text-center max-w-5xl px-10 w-full mx-auto mb-28">
        <HeadingAnimation>
          <h2>DESKRIPCIJA MODULA</h2>
        </HeadingAnimation>
      </div>

      <div className="flex flex-col items-center lg:gap-14 lg:px-10 2xl:px-20 overflow-hidden">
        {lectionsList.map((props, i) => (
          <LectionRow key={props.title} {...props} i={i} />
        ))}
      </div>

      <div className="text-center mt-28 sm:mt-36 md:mt-40 lg:mt-56 mx-auto max-w-[60rem] px-10 sm:px-10 flex flex-col gap-14">
        <div ref={titleContainerRef} className="overflow-hidden">
          <motion.h2
            initial={{ y: -100, rotate: -10 }}
            animate={isInView && { y: 0, rotate: 0 }}
            transition={{ type: 'tween', duration: 0.8 }}
            className="uppercase"
          >
            Završna reč
          </motion.h2>
        </div>
        <ParagraphAnimation margin={50}>
          <p>
            Posle 3 godine rada na domaćem tržištu, odlučio sam da podelim
            znanje ozbiljnim ljudima koji žele da nauče kako početi svoj online
            biznis u Srbiji ili na Balkanu. Dosta mi je ovih fake gurua koji ti
            obećavaju kule i gradove. Ne želim da učim ljude koji misle da će
            biti milioneri posle ove obuke. U pitanju je normalan i legalan
            biznis gde TI spajaš ljude sa proizvodima i uzimaš svoju proviziju.
            Cena jeste visoka ali baš zato što želim da mi se jave samo ozbiljni
            ljudi koji shvataju da je online zarada jedan od najtežih i
            najstresnijih poslova.
          </p>
        </ParagraphAnimation>
      </div>
    </MainSection>
  )
}

export default Lections
