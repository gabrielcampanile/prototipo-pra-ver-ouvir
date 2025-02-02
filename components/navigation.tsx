'use client'

import { Button } from "@/components/ui/button"
import { NavLink } from "./nav-link"

export function Navigation() {
  return (
    <nav className="ml-auto hidden md:flex gap-4">
      <NavLink href="sobre" className="text-sm font-medium hover:underline">
        Sobre
      </NavLink>
      <NavLink href="servicos" className="text-sm font-medium hover:underline">
        Serviços
      </NavLink>
      <NavLink href="portfolio" className="text-sm font-medium hover:underline">
        Portfólio
      </NavLink>
      <NavLink href="premiacoes" className="text-sm font-medium hover:underline">
        Premiações
      </NavLink>
      <NavLink href="atualizacoes" className="text-sm font-medium hover:underline">
        Atualizações
      </NavLink>
      {/* <NavLink href="contato" className="text-sm font-medium hover:underline">
        Contato
      </NavLink> */}
      <Button asChild>
        <NavLink href="orcamento" className="ml-4">
          Solicitar Orçamento
        </NavLink>
      </Button>
    </nav>
  )
}