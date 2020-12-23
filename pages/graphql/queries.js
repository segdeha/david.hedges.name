const { gql } = require('graphql-request');

const PagesQuery = gql`
query GetPages {
  pages {
    title
    slug
    body {
      html
    }
    coverPhoto {
      id
    }
    originalPublishDate
    category {
      displayName
      slug
    }
  }
}
`;

exports.PagesQuery = PagesQuery;
