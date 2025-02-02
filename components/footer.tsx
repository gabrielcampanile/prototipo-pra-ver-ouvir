'use client'

import Link from "next/link"
import { Mail, Instagram } from "lucide-react"
import { NavLink } from "./nav-link"

const navigationColumn1 = [
  { href: "sobre", label: "Sobre" },
  { href: "servicos", label: "Serviços" },
  { href: "portfolio", label: "Portfólio" },
]

const navigationColumn2 = [
  { href: "premiacoes", label: "Premiações" },
  { href: "atualizacoes", label: "Atualizações" },
  { href: "orcamento", label: "Orçamento" },
]

export function Footer() {
  return (
    <footer id="contato" className="bg-[#FFDE59]">
      <div className="container py-12">
        <div className="grid gap-8 lg:grid-cols-3 text-left">
          <div>
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="mt-4 space-y-2">
              <Link 
                href="mailto:praverouvir@gmail.com" 
                className="flex items-center gap-2 text-sm hover:underline"
              >
                <Mail className="h-4 w-4" />
                praverouvir@gmail.com
              </Link>
              <Link 
                href="https://instagram.com/praverouvir" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:underline"
              >
                <Instagram className="h-4 w-4" />
                @praverouvir
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Informações</h3>
            <p className="mt-4 text-sm">
              CNPJ: 57.093.603/0001-00
              <br />
              Razão Social: Ienmily Balbino de Araújo
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Navegação</h3>
            <div className="mt-4 grid grid-cols-2 gap-x-4">
              <nav className="flex flex-col space-y-2">
                {navigationColumn1.map((link) => (
                  <NavLink
                    key={link.href}
                    href={link.href}
                    className="text-sm hover:underline text-left"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
              <nav className="flex flex-col space-y-2">
                {navigationColumn2.map((link) => (
                  <NavLink
                    key={link.href}
                    href={link.href}
                    className="text-sm hover:underline text-left"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}