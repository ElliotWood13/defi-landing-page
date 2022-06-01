import React from 'react'
import { CircleCard, CircleCardInnerShadow, CircleHeaderH3, CircleText, CircleLine__Bottom } from './CircleCard.styles'

export default function Circle({ color, header, text, bottomLine }) {
    return (
        <CircleCard color={color}>
            {bottomLine && <CircleLine__Bottom color={color} />}
            <CircleCardInnerShadow color={color} />
            {header && <CircleHeaderH3>{header}</CircleHeaderH3>}
            {text && <CircleText>{text}</CircleText>}
        </CircleCard>
    )
}