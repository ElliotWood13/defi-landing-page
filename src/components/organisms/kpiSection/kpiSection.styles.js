import styled from 'styled-components'
import { pxToRem, mediaQuery, shadow, color, fontWeight } from '../../../design'

const SectionContainer = styled.div`
    color: #ffffff;
    display: grid;
    grid-template-columns: repeat(1, 100%);

    ${mediaQuery.sm} {
        grid-template-columns: repeat(2, 20rem);
        grid-gap: 10px;
    }

    ${mediaQuery.md} {
        grid-template-columns: repeat(4, 15rem);
    }
`

export {
    SectionContainer,
}