"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { CalendarIcon, ChevronDown } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface PortfolioCardProps {
  title: string
  description: string
  date: string
  image: string
  imageAlt: string
  details: string
}

export function PortfolioCard({ title, description, date, image, imageAlt, details }: PortfolioCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div>
      <Card className="overflow-hidden">
        <div className="aspect-video relative">
          <Image src={image || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" />
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
          <div className="mt-4 flex items-center text-sm text-muted-foreground">
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date}
          </div>
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-4">{details}</p>
          </motion.div>
          <Button className="mt-4 w-full" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "Ver menos" : "Ver mais"}
            <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

