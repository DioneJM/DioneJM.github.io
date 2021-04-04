import React from 'react';
import styled from 'styled-components';

import {ThemeSelector} from "./theme-selector-button";
import {Link} from "gatsby";
import MobileOnly from "./media-queries/mobile-only";
import DesktopOnly from "./media-queries/desktop-only";

const Header = ({siteTitle}) => {
    return (
        <Wrapper>
            <DesktopOnly>
                <StyledLink to="/">{siteTitle}</StyledLink>
            </DesktopOnly>
            <MobileOnly>
                {'HELLLLOOOOOO'}
            </MobileOnly>
            <ThemeSelector/>
        </Wrapper>
    );
};

const StyledLink = styled(Link)`
  color: var(--color-primary);
  text-decoration: none;
`


const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0 16px 0;
  position: sticky;
  top: -1px;
`;

export default Header;
