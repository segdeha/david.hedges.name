const { getPages } = require('../graphql/data');

module.exports = async () => {
  const allPages = await getPages();
  const pages = allPages.filter(page => page.category && page.category.slug === 'poems');
  return {
    pages,
  };
};
