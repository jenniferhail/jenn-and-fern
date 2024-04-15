'use client'

import { useRef, useState } from 'react'

interface DraggableProps {
  children: React.ReactNode
  initialLeft: number
  initialTop: number
}

const Draggable = ({ children, initialLeft, initialTop }: DraggableProps) => {
  const [isDragging, setIsDragging] = useState(false)
  const dragRef = useRef<HTMLDivElement>(null)
  const offset = useRef<{ left: number; top: number }>({ left: 0, top: 0 })

  const handleMouseDown = (event: React.MouseEvent) => {
    if (dragRef.current) {
      const rect = dragRef.current.getBoundingClientRect()
      offset.current = {
        left: event.clientX - rect.left,
        top: event.clientY - rect.top,
      }
      setIsDragging(true)
    }
  }

  const handleMouseMove = (event: React.MouseEvent) => {
    if (isDragging && dragRef.current) {
      dragRef.current.style.left = event.clientX - offset.current.left + 'px'
      dragRef.current.style.top = event.clientY - offset.current.top + 'px'
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
    <div
      ref={dragRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{
        position: 'absolute',
        cursor: 'move',
        left: initialLeft + 'vw',
        top: initialTop + 'vw',
      }}
    >
      {children}
    </div>
  )
}

export default Draggable
