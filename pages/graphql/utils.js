
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

// defeated, i write a function to add rel="noopener" to all links, sigh
const addRelNoopener = input => {
  const rgx = /<a\s{1}/gi;
  const output = input.replace(rgx, '<a rel="noopener" ');
  return output;
};

exports.convertNewlinesToBreaks = convertNewlinesToBreaks;
exports.generatePagesList = generatePagesList;
exports.addRelNoopener = addRelNoopener;
