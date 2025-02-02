"use client"

export function SkipLink() {
  return (
    <a
      href="#main"
      className="fixed top-0 left-0 z-[100] m-3 -translate-y-full transform rounded-md bg-primary px-4 py-2 text-primary-foreground transition-transform focus:translate-y-0"
    >
      Pular para o conteúdo principal
    </a>
  )
}

