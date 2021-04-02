/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css, Flex } from "theme-ui"
import {cssVars} from "../../utils/theme-provider";

const Bio = () => {
  const data = useStaticQuery(bioQuery)
  const {
    site: {
      siteMetadata: { author },
    },
  } = data

  return (
    <Flex css={css({
        mb: 4,
        alignItems: `center`,
        color: cssVars.normalTextColour
    })}>
        Bio: {`${author}`}
    </Flex>
  )
}

const bioQuery = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`

export default Bio
