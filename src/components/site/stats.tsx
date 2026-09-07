'use client'

import { useEffect, useRef, useState } from 'react'
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from 'framer-motion'
import { stats } from '@/lib/site-data'

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString())
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    const unsub = rounded.on('change', (v) => setDisplay(v))
    if (inView) {
      const controls = animate(count, value, {
        duration: 1.6,
        ease: [0.16, 1, 0.3, 1],
      })
      return () => {
        controls.stop()
        unsub()
      }
    }
    return unsub
  }, [inView, count, value, rounded])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="relative border-y border-border bg-card/30">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-6 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center gap-2 py-12 text-center"
          >
            <span className="font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </span>
            <span className="text-sm text-muted-foreground">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
