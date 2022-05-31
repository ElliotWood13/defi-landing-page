import React from 'react'
import { color } from '../../../design'

export const ChevronUp = ({
  className,
  width = 24,
  height = 24,
  responsive = false,
  fill = color.grey[400],
}) => {
  const svgAttributes = responsive ? {} : { width, height }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      aria-hidden="true"
      focusable="false"
      {...svgAttributes}
      fill="none"
      className={className}
    >
      <path fill={fill} d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3 54.6 342.7c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25-6.2 6.2-14.4 9.3-22.6 9.3z"/>
    </svg>
  )
}
