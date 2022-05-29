import styled from 'styled-components'
import { pxToRem, mediaQuery, shadow, color, fontWeight } from '../../../design'

const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
`

const SectionGrid = styled.div`
    color: #ffffff;
    display: grid;
    grid-template-columns: repeat(1, 100%);

    ${mediaQuery.sm} {
        grid-template-columns: repeat(2, 20rem);
        grid-gap: 20px;
    }

    ${mediaQuery.md} {
        grid-template-columns: repeat(4, 15rem);
        grid-gap: 20px;
        row-gap: 100px;
    }

    ${mediaQuery.lg} {
        grid-template-columns: repeat(4, 17rem);
        grid-gap: 50px;
        row-gap: 100px;
    }
`

const KpiSectionCard = styled.div`
    padding-left: 20px;
    padding-bottom: 20px;
    border-left: 1px solid rgba(255, 255, 0, .5);
    border-bottom: 1px solid rgba(255, 255, 0, .5);
    width: 100%;
    margin: 0 auto;
    background-color: transparent;

    &:not(:first-child) {
        margin-top: 30px;
    }

    ${mediaQuery.xxxs} {
        width: 200px;
        width: 100%;
    }

    ${mediaQuery.sm} {
        &:not(:first-child) {
            margin-top: 0;
        }

        &:last-child {
            grid-column: 2 / 3;
        }
    }

    ${mediaQuery.md} {
        &:last-child {
            grid-column: 4 / 5;
        }
    }
`

const KpiSectionCardHeader = styled.h3`
    color: white;
    font-size: 30px;
    font-weight: 500;
    /* font-family: font.brand; */
    margin-bottom: 10px;
`

const KpiSectionCardUl = styled.ul`
    list-style: none;
`

const KpiSectionCardLi = styled.li`
    font-size: 16px;
    line-height: 1.5;
    color: lightgray;

    &:before {
        content: '+';
        margin-right: 10px;
    }
`

const KpiSectionImage = styled.img`
    opacity: .4;
    position: absolute;

    ${mediaQuery.xxxs} {
        // height: 70%;
        top: 50%;
        transform: translateY(-50%);
    }
    
    ${mediaQuery.md} {
        // width: 80%;
        bottom: 0;
        left: 0;
        opacity: .9;
    }
`

export {
    SectionContainer,
    SectionGrid,
    KpiSectionCard,
    KpiSectionCardHeader,
    KpiSectionCardUl,
    KpiSectionCardLi,
    KpiSectionImage,
}