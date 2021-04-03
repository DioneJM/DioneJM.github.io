import React from 'react';
import styled from "styled-components";
import {graphql, Link} from 'gatsby';

import Layout from '../components/layout';

const Posts = ({data}) => {
    const posts = data.allMdx.edges
        .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map((edge,index) => <PostLink id={`${edge.node.id}-${index}`} post={edge.node} />)

    return <Layout>
        <Title>My Recent Posts:</Title>
        <div>{posts}</div>
    </Layout>
};

const Title = styled.h1`
    color: var(--color-primary);
`
const Meta = styled.h2`
    color: var(--color-text);
    font-size: 12px;
`

const Excerpt = styled.p`
    color: var(--color-text);
`

const StyledLink = styled(Link)`
    color: var(--color-text);
    text-decoration: none;
    font-size: 24px;
    font-weight: bold;
`
const PostLink = ({ post, id }) => (
    <div key={`${id}-div`}>
        <StyledLink key={`${id}-link`} to={post.frontmatter.slug}>
            {post.frontmatter.title}
        </StyledLink>
        <Meta>({post.frontmatter.date})</Meta>
        <Excerpt key={`${id}-p`}>{post.excerpt}</Excerpt>
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
