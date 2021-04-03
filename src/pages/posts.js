import React from 'react';
import {graphql, Link} from 'gatsby';

import Layout from '../components/layout';

const Posts = ({data}) => {
    const posts = data.allMdx.edges
        .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map((edge,index) => <PostLink id={`${edge.node.id}-${index}`} post={edge.node} />)

    return <Layout>
        <Link to="/">Go back to the homepage</Link>
        <h1>Welcome to my blog</h1>
        <h2>My Recent Posts:</h2>
        <div>{posts}</div>
    </Layout>
};

const PostLink = ({ post, id }) => (
    <div key={`${id}-div`}>
        <Link key={`${id}-link`} to={post.frontmatter.slug}>
            {post.frontmatter.title} ({post.frontmatter.date})
        </Link>
        <p key={`${id}-p`}>{post.excerpt}</p>
    </div>
)

export const pageQuery = graphql`
  query {
  allMdx {
    edges {
      node {
        excerpt(pruneLength: 250)
        frontmatter {
          title
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
}
`

export default Posts;
