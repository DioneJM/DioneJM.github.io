import React from 'react';
import styled from 'styled-components';

import {ThemeSelector} from "./theme-selector-button";
import {Link} from "gatsby";

const Header = ({ siteTitle }) => {
  return (
    <Wrapper>
        <StyledLink to="/">{siteTitle}</StyledLink>
      <ThemeSelector />
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
  padding: 16px;
  position: sticky;
  top: 0;
  background-color: var(--color-background);
`;

export default Header;
