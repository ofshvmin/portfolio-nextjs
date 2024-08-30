'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'

import { motion } from 'framer-motion'
import { sendEmail } from '@/actions/sendEmail'
import { useFormStatus } from 'react-dom'
import SubmitBtn from './submit-btn'

export default function Contact() {
  const { ref } = useSectionInView('Contact')
  const { pending } = useFormStatus()


  return (
    <motion.section 
      id='contact'
      ref={ref}
      className='mb-20 sm:mb-28 w-[min(100%,38rem)]'
      initial={{
        opacity: 0,
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
        await sendEmail(formData)
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
