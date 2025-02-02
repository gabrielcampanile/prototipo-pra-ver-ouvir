'use client'

import Image from "next/image"
import Link from "next/link"
import { Navigation } from "./navigation"
import { MobileMenu } from "./mobile-menu"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#FFDE59]">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.png" 
            alt="Logo Pra Ver Ouvir"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="text-xl font-bold text-black">Pra Ver Ouvir</span>
        </Link>
        <Navigation />
        <MobileMenu />
      </div>
    </header>
  )
}