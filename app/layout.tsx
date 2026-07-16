import "./globals.css"
import { Inter } from "next/font/google"
import Header from "@/components/header"
import { Toaster } from "react-hot-toast"
import Footer from "@/components/footer"
import ThemeSwitch from "@/components/theme-switch"
import ThemeContextProvider from "@/context/theme-context"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: {
    default: "DankoDev",
    template: "%s | DankoDev",
  },
  description:
    "DankoDev, LLC builds custom software for businesses. Web apps, mobile apps, websites, and technical consulting.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else if (theme === 'dark' || !theme) {
                  document.documentElement.classList.add('dark');
                } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-brand-background text-brand-text-primary relative pt-28 sm:pt-36`}
      >
        <div className="bg-[#DBEAFE] fixed top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#1E3A5F]" />
        <div className="bg-[#E0E7FF] fixed top-[-1rem] -z-10 right-[35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#1A1A3E]" />

        <ThemeContextProvider>
          <Header />
          {children}
          <Toaster position="top-right" />
          <Footer />
          <ThemeSwitch />
        </ThemeContextProvider>
        <Analytics />
      </body>
    </html>
  )
}
