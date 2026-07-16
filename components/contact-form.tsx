"use client"

import { motion, useReducedMotion } from "framer-motion"
import { sendEmail } from "@/actions/sendEmail"
import SubmitBtn from "./submit-btn"
import toast from "react-hot-toast"

export default function ContactForm() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className="w-full max-w-[38rem]"
      initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <form
        action={async (formData) => {
          const { error } = await sendEmail(formData)

          if (error) {
            toast.error(error)
            return
          }

          toast.success("Message sent successfully!")
        }}
        className="flex flex-col"
      >
        <input
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          className="h-14 px-4 rounded-lg bg-brand-surface border border-brand-border text-brand-text-primary placeholder:text-brand-text-muted focus:border-brand-accent outline-none transition-all"
        />
        <textarea
          name="message"
          className="h-52 my-3 rounded-lg p-4 bg-brand-surface border border-brand-border text-brand-text-primary placeholder:text-brand-text-muted focus:border-brand-accent outline-none transition-all"
          required
          maxLength={5000}
          placeholder="Tell us about your project..."
        />
        <SubmitBtn />
      </form>
    </motion.div>
  )
}
