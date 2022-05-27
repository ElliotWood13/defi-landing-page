import { useEffect, useState } from 'react'

export const useScrollLock = () => {
  const [scrollLockActive, setScrollLockActive] = useState(false)

  useEffect(() => {
    const originalStyle = {
      top: window.getComputedStyle(document.body).top,
      bottom: window.getComputedStyle(document.body).bottom,
      left: window.getComputedStyle(document.body).left,
      right: window.getComputedStyle(document.body).right,
    }

    if (scrollLockActive) {
      document.body.style.top = `0`
      document.body.style.bottom = `0`
      document.body.style.left = `0`
      document.body.style.right = `0`
      document.body.style.position = 'fixed'
      document.body.style.overflow = 'hidden'
    }

    return () => {
      const scrollY = document.body.style.top
      document.body.style.top = originalStyle.top
      document.body.style.bottom = originalStyle.bottom
      document.body.style.left = originalStyle.left
      document.body.style.right = originalStyle.right
      document.body.style.position = 'static'
      document.body.style.overflow = 'visible'
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
  }, [scrollLockActive])

  return [scrollLockActive, setScrollLockActive]
}
