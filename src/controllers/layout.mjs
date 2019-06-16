import { render } from './../render';

const filename = './src/templates/pages/layout.html';

export default variables => {
  return render(filename, variables)
}
