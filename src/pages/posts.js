import React from 'react';
import styled from "styled-components";
import {graphql, Link} from 'gatsby';

import Layout from '../components/layout';

const Posts = ({data}) => {
    const posts = data.allMdx.edges
        .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map((edge, index) => <PostLink id={`${edge.node.id}-${index}`} post={edge.node}/>)

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
  font-size: var(--font-size-small);
  font-size: 12px;
`

const Excerpt = styled.p`
  color: var(--color-text);
  font-size: var(--font-size-medium);
  font-weight: 200;
`

const StyledLink = styled(Link)`
  color: var(--color-text);
  text-decoration: none;
  font-size: var(--font-size-large);
  font-weight: bold;
`

const PostLinkWrapper = styled.div`
    padding: 16px 0 16px 0;
`
const PostLink = ({post, id}) => (
    <PostLinkWrapper key={`${id}-div`}>
        <StyledLink key={`${id}-link`} to={post.frontmatter.slug}>
            {post.frontmatter.title}
            <Meta>{post.frontmatter.date}</Meta>
            <Excerpt key={`${id}-p`}>{post.frontmatter.abstract || post.excerpt}</Excerpt>
        </StyledLink>
    </PostLinkWrapper>
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
          abstract
        }
      }
    }
  }
}
`

export default Posts;
