'use client'

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'


export default function About() {
const { ref } = useSectionInView('About')


  return (
    <motion.section 
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
    
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After working for 10+ years in {" "}
        <span className="font-medium">Finance Operations</span>, I decided to pursue my
        passion for software engineering and I enrolled in a coding bootcamp where I learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a new problem and seeing the code execute succesfully. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript, Python, Java, and posgreSQL. I am always looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy
        horseback riding, listening to audio books, and knitting. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. At the moment I'm diving deep into
        learning about{" "}
        <span className="font-medium">historical fiber-working techniques</span>. I'm also constantly working at my life-long endeavor to learn how to play the cello.
      </p>
    </motion.section>
  )
}