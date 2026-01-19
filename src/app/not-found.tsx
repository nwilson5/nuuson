'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function NotFound() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const keysRef = useRef<Record<string, boolean>>({})

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const fontSize = 48
    ctx.font = `bold ${fontSize}px sans-serif`
    const textMetrics = ctx.measureText('404')
    const textWidth = textMetrics.width
    const textHeight = fontSize * 0.8

    const player = {
      x: canvas.width / 2 - textWidth / 2,
      y: canvas.height - 60,
      width: textWidth,
      height: textHeight,
      velocityX: 0,
      velocityY: 0,
      onGround: true,
    }

    const keys = keysRef.current
    const gravity = 0.5
    const jumpForce = -12
    const moveSpeed = 5
    const groundY = canvas.height - 10

    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'Space', ' '].includes(e.key)) {
        e.preventDefault()
      }
      keys[e.key] = true
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      keys[e.key] = false
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    let animationId: number

    const gameLoop = () => {
      // Movement
      if (keys['ArrowLeft'] || keys['left']) {
        player.velocityX = -moveSpeed
      } else if (keys['ArrowRight'] || keys['right']) {
        player.velocityX = moveSpeed
      } else {
        player.velocityX = 0
      }

      // Jump
      if ((keys['Space'] || keys[' '] || keys['ArrowUp'] || keys['jump']) && player.onGround) {
        player.velocityY = jumpForce
        player.onGround = false
      }

      // Apply gravity
      player.velocityY += gravity
      player.y += player.velocityY
      player.x += player.velocityX

      // Ground collision
      if (player.y + player.height >= groundY) {
        player.y = groundY - player.height
        player.velocityY = 0
        player.onGround = true
      }

      // Wall boundaries
      if (player.x < 0) player.x = 0
      if (player.x + player.width > canvas.width) player.x = canvas.width - player.width

      // Draw background
      ctx.fillStyle = '#1a1a1a'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Ground
      ctx.fillStyle = '#444'
      ctx.fillRect(0, groundY, canvas.width, 10)

      // Player (404 text)
      ctx.fillStyle = '#3b82f6'
      ctx.font = `bold ${fontSize}px sans-serif`
      ctx.fillText('404', player.x, player.y + player.height)

      animationId = requestAnimationFrame(gameLoop)
    }

    gameLoop()

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
      cancelAnimationFrame(animationId)
    }
  }, [])

  const handleTouchStart = (key: string) => {
    keysRef.current[key] = true
  }

  const handleTouchEnd = (key: string) => {
    keysRef.current[key] = false
  }

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="text-4xl font-bold mb-2">Page not found</h1>
      <p className="text-gray-500 mb-4">Sometimes it&apos;s hard to find our page...</p>
      <canvas
        ref={canvasRef}
        width={450}
        height={280}
        className="border border-gray-600 rounded mb-4 max-w-full"
        tabIndex={0}
      />
      <p className="text-sm text-gray-500 mb-4 hidden sm:block">
        Use <kbd className="px-1 border rounded">←</kbd> <kbd className="px-1 border rounded">→</kbd> to move, <kbd className="px-1 border rounded">Space</kbd> to jump
      </p>
      <div className="flex gap-4 sm:hidden mb-4">
        <button
          className="w-16 h-16 bg-gray-700 rounded-lg text-2xl active:bg-gray-600 select-none text-white"
          onTouchStart={() => handleTouchStart('left')}
          onTouchEnd={() => handleTouchEnd('left')}
          onMouseDown={() => handleTouchStart('left')}
          onMouseUp={() => handleTouchEnd('left')}
          onMouseLeave={() => handleTouchEnd('left')}
        >
          ←
        </button>
        <button
          className="w-16 h-16 bg-blue-600 rounded-lg text-sm active:bg-blue-500 select-none text-white"
          onTouchStart={() => handleTouchStart('jump')}
          onTouchEnd={() => handleTouchEnd('jump')}
          onMouseDown={() => handleTouchStart('jump')}
          onMouseUp={() => handleTouchEnd('jump')}
          onMouseLeave={() => handleTouchEnd('jump')}
        >
          Jump
        </button>
        <button
          className="w-16 h-16 bg-gray-700 rounded-lg text-2xl active:bg-gray-600 select-none text-white"
          onTouchStart={() => handleTouchStart('right')}
          onTouchEnd={() => handleTouchEnd('right')}
          onMouseDown={() => handleTouchStart('right')}
          onMouseUp={() => handleTouchEnd('right')}
          onMouseLeave={() => handleTouchEnd('right')}
        >
          →
        </button>
      </div>
      <Link href="/" className="text-blue-600 hover:underline">
        Go home
      </Link>
    </div>
  )
}
