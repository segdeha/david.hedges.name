const { getPages } = require('../graphql/data');
const { convertNewlinesToBreaks } = require('../graphql/utils');

module.exports = async () => {
  const allPages = await getPages();
  const pages = allPages
    .filter(page => page.category && page.category.slug === 'poems')
    .map(page => {
      return {
        ...page,
        body: {
          html: convertNewlinesToBreaks(page.body.html),
        },
      };
    })
  ;
  return {
    pages,
  };
};
