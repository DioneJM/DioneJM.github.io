import React from 'react';
import styled from 'styled-components';

import { ThemeContext } from './theme-context';

import {ThemeSelector} from "./theme-selector-button";

const Header = ({ siteTitle }) => {
  return (
    <Wrapper>
      {siteTitle}
      <ThemeSelector />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  position: sticky;
  top: 0;
  background-color: var(--color-background);
`;

export default Header;
