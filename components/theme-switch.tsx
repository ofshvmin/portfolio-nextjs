'use client'

import { useTheme } from '@/context/theme-context'
import { BsMoon, BsSun } from 'react-icons/bs'

export default function ThemeSwitch() {
  const { theme, toggleTheme, mounted }= useTheme()

  if (!mounted) return null

  return (
    <button 
      className='fixed bottom-5 right-5 bg-brand-surface w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-brand-border shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all text-brand-text-primary'
      onClick={toggleTheme}  
    >
      { theme === 'light' ? <BsMoon /> : <BsSun /> }
    </button>
  )
}
