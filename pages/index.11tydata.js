const { getPages } = require('./graphql/data');
const { convertNewlinesToBreaks } = require('./graphql/utils');
const { addRelNoopener } = require('./graphql/utils');

module.exports = async () => {
  const pages = await getPages();
  const page = pages.filter(page => page.slug === '/')[0] || null;
  if (page && page.body && page.body.html) {
    page.body.html = convertNewlinesToBreaks(addRelNoopener(page.body.html));
  }
  return {
    page,
  };
};
