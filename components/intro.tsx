'use client'

import React from 'react'
import Image from 'next/image'
import meImage from '@/public/me.png'
import { motion } from 'framer-motion'
import Link from 'next/link'
import{ BsArrowRight, BsLinkedin } from 'react-icons/bs'
import{ HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'

export default function Intro() {
  return (
    <section>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image 
              src= {meImage}
              alt='an image of me'
              width='192'
              height='192'
              quality='95'
              priority={true}
              className='h-24 w-24 rounded-full object-cover border-[.35rem] border-white shadow-xl'
              />
        </motion.div>

        <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
          
        </div>
      </div>

          <motion.p
            className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
        <span className="font-bold">Hello, I'm Daniel.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">3 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.p>
      <motion.div 
        className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
            transition={{
            delay: 0.1}}
      >
        <Link 
          href="#contact"
          className='bg-gray-900 text-white px-7 py-3 flex items-center gap-2 px-4 rounded-full'
          >Contact me here <BsArrowRight /> </Link>
        <a 
          className='bg-white px-7 py-3 flex items-center gap-2 rounded-full'
          
          >Download Resume <HiDownload /></a>
        <a 
          className='bg-white p-4 flex items-center gap-2 rounded-full'
        
        >
          <BsLinkedin />
        </a>
        <a 
          className='bg-white p-4 flex items-center gap-2 text-[1.25rem] rounded-full'
        
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  )
}
