import React from 'react'

import { Close } from '../components/atoms/icons'
import { Burger } from '../components/atoms/icons'

// Icons: https://fontawesome.com/search?s=brands%2Csolid
// Optimiser: https://jakearchibald.github.io/svgomg/

const svgs = {
  close: Close,
  burger: Burger,
}

export const Svg = ({ type, ...rest }) => {
  if (type) {
    const Component = svgs[type]
    if (Component) return <Component {...rest} />
  }
  return null
}

