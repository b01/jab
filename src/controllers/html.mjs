import { render } from './../render.mjs';

const layoutHtml = './src/views/layout.html';

export default variables => {
  return render(layoutHtml, variables)
};
