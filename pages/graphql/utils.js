
// convert all instances of \n to <br> for a given string
const convertNewlinesToBreaks = input => {
  return input.replace(/\n/g, '<br>');
};

// generate an unordered list of links given an array of pages
const generatePagesList = pages => {
  let list = '<ul>';
  pages.forEach(page => {
    list += `<li><a href="/${page.category.slug}/${page.slug}">${page.title}</a></li>`;
  });
  list += '<ul>';
  return list;
};

exports.convertNewlinesToBreaks = convertNewlinesToBreaks;
exports.generatePagesList = generatePagesList;
