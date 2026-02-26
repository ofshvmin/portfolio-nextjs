'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion, useReducedMotion } from 'framer-motion'

export default function Skills() {
  const { ref } = useSectionInView('Skills')
  const shouldReduceMotion = useReducedMotion()

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: shouldReduceMotion ? 0 : 0.05 * index,
      }
    })
  }

  return (
    <section
      id='skills'
      ref={ref}
      className='scroll-mt-28 max-w-[53rem] text-center sm:mb-40'
    >
    <SectionHeading>My skills</SectionHeading>
      <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
        {skillsData.map((skill, index) => (
          <motion.li 
            key={index}
            className='bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80'  
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
        
      </ul>
  </section>
  )
}
