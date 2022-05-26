import { HeaderWrapper, HeaderPosition } from './header.styles'

export const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderPosition>
                <navigation>
                    <ul>
                        <li>
                        <a href="#section1">Section 1</a>
                        </li>
                        <li>
                        <a href="#section2">Section 2</a>
                        </li>
                        <li>
                        <a href="#section3">Section 3</a>
                        </li>
                        <li>
                        <a href="#section4">Section 4</a>
                        </li>
                        <li>
                        <a href="#section5">Section 5</a>
                        </li>
                        <li>
                        <a href="#section6">Section 6</a>
                        </li>
                    </ul>
                </navigation>
            </HeaderPosition>
      </HeaderWrapper>
    )
}