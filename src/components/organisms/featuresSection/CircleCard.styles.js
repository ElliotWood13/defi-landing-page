import styled from 'styled-components'
import { pxToRem, mediaQuery, shadow, color, fontWeight } from '../../../design'

const CircleCard = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    position: relative;
`

export {
    CircleCard,
}