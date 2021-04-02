import React, { Fragment } from "react"
import { Styled, css } from "theme-ui"
import {cssVars} from "../../utils/theme-provider";

const Footer = ({ socialLinks }) => (
  <footer css={css({
      mt: 4,
      pt: 3,
      color: cssVars.normalTextColour
    })}
  >
    © {new Date().getFullYear()}, Powered by
    {` `}
    <Styled.a href="https://www.gatsbyjs.com">Gatsby</Styled.a>
    {` `}&bull;{` `}
    {socialLinks
      ? socialLinks.map((platform, i, arr) => (
          <Fragment key={platform.url}>
            <Styled.a
              href={platform.url}
              style={{color: cssVars.linkColour}}
              target="_blank"
              rel="noopener noreferrer"
            >
              {platform.name}
            </Styled.a>
            {arr.length - 1 !== i && (
              <Fragment>
                {` `}&bull;{` `}
              </Fragment>
            )}
          </Fragment>
        ))
      : null}
  </footer>
)
export default Footer
