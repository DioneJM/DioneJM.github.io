import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "../layout";
import SEO from "../seo";

const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
    return (
        <Layout>
            <SEO title={mdx.frontmatter.title}/>
            <h1>{mdx.frontmatter.title}</h1>
            <p>{mdx.frontmatter.date}</p>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                borderTop: '1px solid'
            }}>
            <MDXProvider components={shortcodes}>
                <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")

      }
    }
  }
`