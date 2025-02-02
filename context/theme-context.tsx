'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type ThemeContextType = {
  highContrast: boolean
  toggleHighContrast: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [highContrast, setHighContrast] = useState(false)

  useEffect(() => {
    const savedContrast = localStorage.getItem('high-contrast')
    if (savedContrast) setHighContrast(JSON.parse(savedContrast))
  }, [])

  const toggleHighContrast = () => {
    setHighContrast(prev => {
      const newValue = !prev
      localStorage.setItem('high-contrast', JSON.stringify(newValue))
      return newValue
    })
  }

  return (
    <ThemeContext.Provider value={{ highContrast, toggleHighContrast }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}