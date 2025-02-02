'use client'

import { motion } from "framer-motion"
import type { HTMLMotionProps } from "framer-motion"

interface AnimatedSectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode
  className?: string
  id?: string
  "aria-labelledby"?: string
}

export function AnimatedSection({ 
  children, 
  className, 
  id,
  "aria-labelledby": ariaLabelledBy,
  ...props
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75 }}
      {...props}
    >
      {children}
    </motion.section>
  )
}