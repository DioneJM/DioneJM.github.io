import React from "react"
import { css, Styled } from "theme-ui"
import Header from "./header"
import useBlogThemeConfig from "../hooks/configOptions"
import Helmet from "react-helmet"
import { SkipNavContent } from "@reach/skip-nav"

const BlogLayout = ({ children, ...props }) => {
  const blogThemeConfig = useBlogThemeConfig()
  const { webfontURL } = blogThemeConfig

  return (
    <Styled.root>
      <Helmet>
        <link rel="stylesheet" href={webfontURL} />
      </Helmet>
      <Header {...props} />
      <SkipNavContent />
      <div>
        <div
        css={css({
            // maxWidth: `container`,
            maxWidth: 650,
            mx: `auto`,
            px: 3,
            py: 4,
            margin: `3rem auto`,
            padding: `0 1rem`,
            minHeight: `100vh`,
        })}
        >
          {children}
        </div>
      </div>
    </Styled.root>
  )
}

export default BlogLayout
