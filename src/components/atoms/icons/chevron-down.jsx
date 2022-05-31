import React from 'react'
import { color } from '../../../design'

export const ChevronDown = ({
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
      <path fill={fill} d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/>
    </svg>
  )
}
