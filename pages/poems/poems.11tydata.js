const { getPages } = require('../graphql/data');

module.exports = async () => {
  const allPages = await getPages();
  const pages = allPages
    .filter(page => page.category && page.category.slug === 'poems')
    .map(page => {
        return {
            ...page,
            html: page.body.html.replace("\n", '<br>'),
        };
    })
  ;
  return {
    pages,
  };
};
