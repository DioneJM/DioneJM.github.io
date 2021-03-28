/** @jsx jsx */
import { Link } from "gatsby"
import { jsx, css, Styled } from "theme-ui"
import Bio from "./bio"
import {ThemeSelector} from "../../components/theme-selector-button";
import React from "react";

const rootPath = `${__PATH_PREFIX__}/`

const Title = ({ children }) => {
    return (
      <Styled.h3
        as="p"
        css={css({
          my: 0,
        })}
      >
        <Styled.a
          as={Link}
          css={css({
            boxShadow: `none`,
            textDecoration: `none`,
            color: `primary`,
          })}
          to={`/`}
        >
          {children}
        </Styled.a>
      </Styled.h3>
    )
}

const Header = ({ children, title, ...props }) => (
  <header>
    <div
      css={css({
        maxWidth: `container`,
        mx: `auto`,
        px: 3,
        pt: 4,
      })}
    >
      <div
        css={css({
          display: `flex`,
          justifyContent: `space-between`,
          alignItems: `center`,
          mb: 4,
        })}
      >
        <Title {...props}>{title}</Title>
        {children}
          <ThemeSelector/>
      </div>
      {props.location.pathname === rootPath && <Bio />}
    </div>
  </header>
)

export default Header
