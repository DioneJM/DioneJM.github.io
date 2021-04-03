/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(bioQuery)
  const {
    site: {
      siteMetadata: { author },
    },
  } = data

  return (
    <div>
        Bio: {`${author}`}
    </div>
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
