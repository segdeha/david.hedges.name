const { getPages } = require('./graphql/data');

module.exports = async () => {
  const pages = await getPages();
  const page = pages.filter(page => page.slug === '/')[0] || null;
  return {
    page,
  };
};
