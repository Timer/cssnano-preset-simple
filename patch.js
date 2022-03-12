const fs = require('fs');

const pkg = require.resolve('browserslist/node');
const replaceValue = `var queries = require(require.resolve(name, { paths: ['.', ctx.path] }))`;
const newValue = `var queries = __non_webpack_require__(require.resolve(name, { paths: ['.', ctx.path] }))`;

let contents = fs.readFileSync(pkg, 'utf8');

while (contents.includes(replaceValue)) {
  contents = contents.replace(replaceValue, newValue);
}

if (!contents.includes(newValue)) {
  throw new Error('Browserslist dependency has updated');
}

fs.writeFileSync(pkg, contents);
