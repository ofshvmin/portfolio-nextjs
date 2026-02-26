'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'
import { motion, useReducedMotion } from 'framer-motion'
import { sendEmail } from '@/actions/sendEmail'
import SubmitBtn from './submit-btn'
import toast from 'react-hot-toast'

export default function Contact() {
  const { ref } = useSectionInView('Contact')
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section 
      id='contact'
      ref={ref}
      className='mb-20 sm:mb-28 w-[min(100%,38rem)] scroll-mt-28'
      initial={{
        opacity: shouldReduceMotion ? 1 : 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
    <SectionHeading>Contact me</SectionHeading>
    <p className='text-gray-700 -mt-6 dark:text-white/80'>
      Please contact me directly at{" "}  
        <a className='underline' href="mailto:daniel.g.mathews@gmail.com">daniel.g.mathews@gmail.com 
        </a>{" "}
      or through this form.
    </p>

    <form 
      action={async (formData) => {
        const { data, error } = await sendEmail(formData)

        if(error) {
          toast.error(error)
          return
        }

        toast.success('Email sent successfully')
      }}

      className='mt-10 flex flex-col dark:text-black'
    >
      <input 
        name="senderEmail"
        type="email" 
        required
        maxLength={500}
        placeholder='Your email'
        className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
      />
      <textarea 
        name="message"
        id=""
        className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
        required
        maxLength={500}
        placeholder='Your message'
      >

      </textarea>
      <SubmitBtn />
    </form>

  </motion.section >
  )
}
