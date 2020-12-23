
// input: take an array of pages and a slug
// output: filtered array of pages for the slug with transformations applied
// first transformation: converting \n to <br>

const convertNewlinesToBreaks = input => {
    return input.replace(/\n/g, '<br>');
};

exports.convertNewlinesToBreaks = convertNewlinesToBreaks;
