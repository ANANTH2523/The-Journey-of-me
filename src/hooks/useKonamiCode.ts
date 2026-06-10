import { useState, useEffect, useCallback } from 'react'

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a'
]

export function useKonamiCode() {
  const [activated, setActivated] = useState(false)
  const [inputIndex, setInputIndex] = useState(0)

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (activated) return

    if (e.key === KONAMI_CODE[inputIndex]) {
      const nextIndex = inputIndex + 1
      if (nextIndex === KONAMI_CODE.length) {
        setActivated(true)
        setInputIndex(0)
      } else {
        setInputIndex(nextIndex)
      }
    } else {
      setInputIndex(0)
    }
  }, [inputIndex, activated])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return activated
}
