import { Libre_Baskerville } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'
import '@/app/globals.css'

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre',
})

export const metadata: Metadata = {
  title: 'Pra Ver Ouvir',
  description: 'Audiodescrição com poesia para produzir e acessibilizar conteúdos, produtos, projetos e eventos visuais.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${libreBaskerville.variable}`}>
      <body>{children}</body>
    </html>
  )
}