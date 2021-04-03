/** @jsx jsx */
import React, { Fragment } from "react"
import { Styled, css, jsx } from "theme-ui"
import useThemeColors from "../../hooks/useThemeColors";

const Footer = ({ socialLinks }) => {
    const { getThemeColor } = useThemeColors();
  return <footer css={css({
      mt: 4,
      pt: 3
    })}
  >
    © {new Date().getFullYear()}, Powered by
    {` `}
    <Styled.a style={{color: getThemeColor('linkColour')}} href="https://www.gatsbyjs.com">Gatsby</Styled.a>
    {` `}&bull;{` `}
    {socialLinks
      ? socialLinks.map((platform, i, arr) => (
          <Fragment key={platform.url}>
            <Styled.a
              href={platform.url}
              style={{
                  color: getThemeColor('linkColour')
              }}
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
}
export default Footer
