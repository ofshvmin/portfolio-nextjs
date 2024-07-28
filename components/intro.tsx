'use client'

import React from 'react'
import Image from 'next/image'
import meImage from '@/public/me.png'
import { motion } from 'framer-motion'

export default function Intro() {
  return (
    <section>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <Image 
            src= {meImage}
            alt='an image of me'
            
            width='192'
            height='192'
            quality='95'
            priority={true}
            className='h-24 w-24 rounded-full object-cover border-[.35rem] border-white shadow-x1'
          />


        </div>
        <p>Hello, I'm Daniel. I'm a full-stack developer</p>

      </div>
    </section>
  )
}
