import fs from 'fs';

/**
 * render - build an render javascript template literals.
 *
 * @param {string} filename
 * @param {object} templateVars
 * @returns {string}
 */
export const render = (filename, templateVars) => {
  let keys, template, templateStr, values;

  templateStr = fs.readFileSync(filename, 'utf8');
  keys = Object.keys(templateVars);
  values = Object.values(templateVars);

  // This line allows us to build template literals dynamically at run-time.
  template = new Function(...keys, `return \`${templateStr}\`;`);

  // render template expressions.
  return template(...values)
};
