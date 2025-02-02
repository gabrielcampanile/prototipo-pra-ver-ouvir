'use client'

import { Button } from "@/components/ui/button"
import { useTheme } from "@/context/theme-context"
import { Sun, Moon } from "lucide-react"

export function ContrastToggle() {
  const { highContrast, toggleHighContrast } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleHighContrast}
      className="ml-auto"
    >
      {highContrast ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
      <span className="sr-only">
        {highContrast ? 'Desativar alto contraste' : 'Ativar alto contraste'}
      </span>
    </Button>
  )
}