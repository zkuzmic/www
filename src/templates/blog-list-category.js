import React from 'react';
import AptibleLayout from '../components/layouts/AptibleLayout';
import { graphql } from 'gatsby';
import Index from '../components/blog/Index';
import Pagination from '../components/blog/Pagination';
import ZeroTo from '../components/footer/ZeroTo';

export default ({ data, pageContext}) => (
  <AptibleLayout>
    <Index
      posts={data.posts.edges}
      categorySlug={pageContext.categorySlug}
      categoryTitle={pageContext.categoryTitle} />
    <Pagination
      numPages={pageContext.numPages}
      currentPage={pageContext.currentPage}
      categorySlug={pageContext.categorySlug} />
    <ZeroTo />
  </AptibleLayout>
);


export const query = graphql`
  query($skip: Int!, $limit: Int!, $categoryTitle: [String]) {
    posts: allContentfulBlogPost(
      filter: {
        type: {
          eq: "blog"
        }
        category: {
          in: $categoryTitle
        }
      }
      sort: { fields: [postedAt], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          type
          title
          slug
          postedAt
          category
          author {
            name
            slug
            professionalPhoto {
              file {
                url
              }
            }
          }
          body {
            json
          }
        }
      }
    }
  }
`;
