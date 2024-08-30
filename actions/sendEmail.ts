'use server'

import { Resend } from "resend"
import { validateSring } from "@/lib/utils"
import { getErrorMessage } from "@/lib/utils"

const resend = new Resend(process.env.RESEND_API_KEY)


export const sendEmail = async (formData: FormData) => {
  'use server'

  const senderEmail = formData.get("senderEmail")
  const message = formData.get("senderEmail")

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
      text: message as string,
    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error)
    }    
  }
}