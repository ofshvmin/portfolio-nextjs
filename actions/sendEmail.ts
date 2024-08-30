'use server'

import React from "react"
import { Resend } from "resend"
import { validateSring } from "@/lib/utils"
import { getErrorMessage } from "@/lib/utils"
import ContactFormEmail from "@/email/contact-form-email"

const resend = new Resend(process.env.RESEND_API_KEY)


export const sendEmail = async (formData: FormData) => {
  'use server'

  const senderEmail = formData.get("senderEmail")
  const message = formData.get("message")

  if(!validateSring(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    }
  }
  if(!validateSring(message, 5000)) {
    return {
      error: "Invalid message", 
    }
  }  

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'daniel.g.mathews@gmail.com',
      subject: 'PORTFOLIO MESSAGE',
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string
      })
    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error)
    }    
  }
}