import * as ReactDOM from 'react-dom';
import Spinner from '../components/Spinner';

describe('Spinner', () => {
  let div: HTMLDivElement;
  beforeEach(() => (div = document.createElement('div')));
  afterAll(() => ReactDOM.unmountComponentAtNode(div));

  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Spinner />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
