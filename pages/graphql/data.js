const { request } = require('graphql-request');
const { PagesQuery } = require('./queries');

const graphQLEndpoint = 'https://api-us-west-2.graphcms.com/v2/ckixt8vkmtlhw01xu2965gnom/master';

const getPages = async () => {
  const { pages } = await request(graphQLEndpoint, PagesQuery);
  return pages;
};

exports.getPages = getPages;
