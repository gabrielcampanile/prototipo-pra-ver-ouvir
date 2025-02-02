"use client"

import { Button } from "@/components/ui/button"

export function SkipLink() {
  return (
    <Button
      className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:translate-y-4"
      onClick={() => {
        const main = document.querySelector("main")
        main?.focus()
      }}
    >
      Pular para o conteúdo principal
    </Button>
  )
}

