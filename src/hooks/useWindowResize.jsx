import { useState, useEffect } from 'react'

export const debounce = ({ callback, wait }) => {
  let timeout;

  return function executedFunction(...args) {
    const executedCallback = () => {
      clearTimeout(timeout)
      callback(...args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(executedCallback, wait)
  }
}

export const useWindowResize = () => {
  const [width, setWidth] = useState()

  const onWindowResizeEnd = debounce({
    callback: () => {
      setWidth(window.innerWidth)
    },
    wait: 100,
  })

  useEffect(() => {
    if (window && window.innerWidth)
      setWidth(window.innerWidth)
      window.addEventListener('resize', () => onWindowResizeEnd())

    return () => {
      window.removeEventListener('resize', onWindowResizeEnd)
    }
  }, [onWindowResizeEnd])

  return [width]
}
