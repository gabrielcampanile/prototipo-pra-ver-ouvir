'use client'

import { useCallback } from 'react'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function NavLink({ href, children, className, onClick }: NavLinkProps) {
  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.getElementById(href)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      })
    }
    onClick?.()
  }, [href, onClick])

  return (
    <button 
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  )
}