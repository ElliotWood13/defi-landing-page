import React from 'react'
import { CircleCard, CircleCardInnerShadow, CircleHeaderH3, CircleText, CircleLineBottom } from './Circle.styles'

export const Circle = ({ color, header, text, bottomLine }) => {
    return (
        <CircleCard color={color}>
            {bottomLine && <CircleLineBottom color={color} />}
            <CircleCardInnerShadow color={color} />
            {header && <CircleHeaderH3  color={color}>{header}</CircleHeaderH3>}
            {text && <CircleText>{text}</CircleText>}
        </CircleCard>
    )
}