import { HeaderWrapper } from './header.styles'

export const Header = ({ children }) => {
    return (
        <HeaderWrapper>
            { children }
        </HeaderWrapper>
    )
}