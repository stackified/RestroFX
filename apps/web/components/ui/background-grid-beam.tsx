'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from "@/lib/utils"

export const GridBeam: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className
}) => {
  const [beams, setBeams] = useState<Array<{
    id: string
    x: number
    y: number
    direction: 'horizontal' | 'vertical'
  }>>([])
  
  const containerRef = useRef<HTMLDivElement>(null)
  const isVisibleRef = useRef(false)
  const timeoutRefs = useRef<Set<NodeJS.Timeout>>(new Set())
  const beamIdCounter = useRef(0)

  const createRandomBeam = useCallback(() => {
    if (!isVisibleRef.current) return null

    // Grid size is 40px, so calculate random positions on grid
    const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1200
    const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 800
    
    // Calculate grid positions (40px grid)
    const maxGridX = Math.floor(viewportWidth / 40)
    const maxGridY = Math.floor(viewportHeight / 40)
    
    // Random starting position on grid
    const gridX = Math.floor(Math.random() * maxGridX)
    const gridY = Math.floor(Math.random() * maxGridY)
    
    // Decide direction (horizontal or vertical)
    const direction: 'horizontal' | 'vertical' = Math.random() > 0.5 ? 'horizontal' : 'vertical'
    
    const beamId = ++beamIdCounter.current
    const newBeam = {
      id: `beam-${beamId}-${Date.now()}`,
      x: gridX * 40,
      y: gridY * 40,
      direction
    }
    
    setBeams(prev => [...prev, newBeam])
    
    // Remove beam after 2 seconds (animation duration)
    const removeTimeout = setTimeout(() => {
      setBeams(prev => prev.filter(b => b.id !== newBeam.id))
    }, 2000)
    
    timeoutRefs.current.add(removeTimeout)
    return newBeam
  }, [])

  const clearAllTimeouts = useCallback(() => {
    timeoutRefs.current.forEach(timeout => clearTimeout(timeout))
    timeoutRefs.current.clear()
  }, [])


  const createBeamPeriodically = useCallback(() => {
    if (!isVisibleRef.current) return

    // Create 2-3 beams every 1 second for more density
    const timeout = setTimeout(() => {
      if (isVisibleRef.current) {
        const beamsToCreate = 2 + Math.floor(Math.random() * 2) // 2 or 3 beams
        for (let i = 0; i < beamsToCreate; i++) {
          setTimeout(() => createRandomBeam(), i * 100) // Stagger creation slightly
        }
        createBeamPeriodically()
      }
    }, 1000)
    
    timeoutRefs.current.add(timeout)
  }, [createRandomBeam])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasVisible = isVisibleRef.current
        const nowVisible = entry.isIntersecting
        
        isVisibleRef.current = nowVisible
        
        if (nowVisible && !wasVisible) {
          // Section just became visible - start everything
          clearAllTimeouts()
          setBeams([])
          
          // Create initial 4-5 beams for more density
          createRandomBeam()
          setTimeout(() => createRandomBeam(), 100)
          setTimeout(() => createRandomBeam(), 200)
          setTimeout(() => createRandomBeam(), 300)
          setTimeout(() => createRandomBeam(), 400)
          
          // Start periodic creation every 1 second
          setTimeout(() => createBeamPeriodically(), 1000)
          
        } else if (!nowVisible && wasVisible) {
          // Section left view - stop everything
          clearAllTimeouts()
          
          // Clear beams after animations complete
          const clearTimeout = setTimeout(() => {
            setBeams([])
          }, 2500)
          timeoutRefs.current.add(clearTimeout)
        }
      },
      { threshold: 0.1 }
    )

    const currentContainer = containerRef.current
    if (currentContainer) {
      observer.observe(currentContainer)
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer)
      }
      clearAllTimeouts()
      isVisibleRef.current = false
    }
  }, [createRandomBeam, createBeamPeriodically, clearAllTimeouts])

  // Monitor beam count continuously when visible to maintain minimum of 4-5 beams
  useEffect(() => {
    if (!isVisibleRef.current) return

    const checkInterval = setInterval(() => {
      if (isVisibleRef.current) {
        setBeams(current => {
          const minBeams = 4 // Minimum of 4 beams at all times
          if (current.length < minBeams && isVisibleRef.current) {
            const needed = minBeams - current.length
            const newBeams: typeof current = []
            
            for (let i = 0; i < needed; i++) {
              const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1200
              const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 800
              const maxGridX = Math.floor(viewportWidth / 40)
              const maxGridY = Math.floor(viewportHeight / 40)
              const gridX = Math.floor(Math.random() * maxGridX)
              const gridY = Math.floor(Math.random() * maxGridY)
              const direction: 'horizontal' | 'vertical' = Math.random() > 0.5 ? 'horizontal' : 'vertical'
              const beamId = ++beamIdCounter.current
              
              const newBeam = {
                id: `beam-${beamId}-${Date.now()}-${i}`,
                x: gridX * 40,
                y: gridY * 40,
                direction
              }
              
              newBeams.push(newBeam)
              
              // Schedule removal after 2 seconds
              const removeTimeout = setTimeout(() => {
                setBeams(prev => prev.filter(b => b.id !== newBeam.id))
              }, 2000)
              timeoutRefs.current.add(removeTimeout)
            }
            
            return [...current, ...newBeams]
          }
          return current
        })
      }
    }, 800) // Check every 800ms to ensure minimum beam count

    return () => clearInterval(checkInterval)
  }, [])

  return (
    <div ref={containerRef} className={cn('relative w-full h-full overflow-hidden', className)}>
      <AnimatePresence>
        {beams.map((beam) => (
          <RandomBeam
            key={beam.id}
            id={beam.id}
            x={beam.x}
            y={beam.y}
            direction={beam.direction}
          />
        ))}
      </AnimatePresence>
      <div className="relative z-10">{children}</div>
    </div>
  )
}

interface RandomBeamProps {
  id: string
  x: number
  y: number
  direction: 'horizontal' | 'vertical'
}

const RandomBeam = ({ id, x, y, direction }: RandomBeamProps) => {
  const [dimensions, setDimensions] = React.useState({ width: 1200, height: 800 })
  
  React.useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])
  
  const isHorizontal = direction === 'horizontal'
  
  // Calculate movement distance along grid (moving for 2 seconds)
  // Move 200-600px along the grid line randomly
  const travelDistance = 200 + Math.random() * 400
  
  // Calculate end position
  let endX = x
  let endY = y
  
  if (isHorizontal) {
    // Randomly choose left or right direction
    const goRight = Math.random() > 0.5
    endX = goRight 
      ? Math.min(x + travelDistance, dimensions.width)
      : Math.max(x - travelDistance, 0)
  } else {
    // Randomly choose up or down direction
    const goDown = Math.random() > 0.5
    endY = goDown
      ? Math.min(y + travelDistance, dimensions.height)
      : Math.max(y - travelDistance, 0)
  }
  
  const beamLength = 80 // Length of the visible beam
  const uniqueId = id.replace(/[^a-zA-Z0-9]/g, '-')
  
  return (
    <motion.div
      className="absolute pointer-events-none z-[5]"
      initial={{
        x: isHorizontal ? x : x - beamLength / 2,
        y: isHorizontal ? y - beamLength / 2 : y,
        opacity: 0,
      }}
      animate={{
        x: isHorizontal ? endX - beamLength : x - beamLength / 2,
        y: isHorizontal ? y - beamLength / 2 : endY - beamLength,
        opacity: [0, 1, 1, 0],
      }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 2,
        times: [0, 0.1, 0.9, 1],
        ease: 'linear',
      }}
    >
      <svg
        width={isHorizontal ? beamLength : 2}
        height={isHorizontal ? 2 : beamLength}
        viewBox={`0 0 ${isHorizontal ? beamLength : 2} ${isHorizontal ? 2 : beamLength}`}
      >
        <defs>
          <linearGradient
            id={`grad-${uniqueId}`}
            gradientUnits="userSpaceOnUse"
            x1={isHorizontal ? '0%' : '50%'}
            y1={isHorizontal ? '50%' : '0%'}
            x2={isHorizontal ? '100%' : '50%'}
            y2={isHorizontal ? '50%' : '100%'}
          >
            <stop stopColor="#BB0000" stopOpacity="0" />
            <stop stopColor="#BB0000" />
            <stop offset="0.5" stopColor="#DC2626" />
            <stop offset="1" stopColor="#EF4444" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line
          x1={isHorizontal ? 0 : 1}
          y1={isHorizontal ? 1 : 0}
          x2={isHorizontal ? beamLength : 1}
          y2={isHorizontal ? 1 : beamLength}
          stroke={`url(#grad-${uniqueId})`}
          strokeWidth={2}
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  )
}
