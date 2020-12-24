const { getPages } = require('./graphql/data');
const { convertNewlinesToBreaks } = require('./graphql/utils');
const { generatePagesList } = require('./graphql/utils');

module.exports = async () => {
  const allPages = await getPages();
  const pages = allPages.filter(page => page.category && page.category.slug === 'life');
  const list = generatePagesList(pages);
  return {
    list,
  };
};
