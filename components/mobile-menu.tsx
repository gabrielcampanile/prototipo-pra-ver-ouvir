'use client'

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetTitle 
} from "@/components/ui/sheet"
import { NavLink } from "./nav-link"

const navigationItems = [
  { href: "sobre", label: "Sobre" },
  { href: "servicos", label: "Serviços" },
  { href: "portfolio", label: "Portfólio" },
  { href: "premiacoes", label: "Premiações" },
  { href: "atualizacoes", label: "Atualizações" },
  { href: "contato", label: "Contato" },
]

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetTitle>Menu de Navegação</SheetTitle>
        <nav className="flex flex-col gap-4 mt-8">
          {navigationItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:underline p-2"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}