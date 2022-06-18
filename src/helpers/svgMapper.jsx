import React from 'react'

import { Close } from '../components/atoms/icons'
import { Burger } from '../components/atoms/icons'
import { Discord } from '../components/atoms/icons'
import { Medium } from '../components/atoms/icons'
import { Twitter } from '../components/atoms/icons'
import { ChevronDown } from '../components/atoms/icons'
import { ChevronUp } from '../components/atoms/icons'
import { FileDownload } from '../components/atoms/icons'

// Icons: https://fontawesome.com/search?s=brands%2Csolid
// Optimiser: https://jakearchibald.github.io/svgomg/

const svgs = {
  close: Close,
  burger: Burger,
  discord: Discord,
  medium: Medium,
  twitter: Twitter,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  fileDownload: FileDownload,
}

export const Svg = ({ type, ...rest }) => {
  if (type) {
    const Component = svgs[type]
    if (Component) return <Component {...rest} />
  }
  return null
}

