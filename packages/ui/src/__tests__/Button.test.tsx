import * as ReactDOM from 'react-dom';
import Button from '../components/Button';

describe('Button', () => {
  let div: HTMLDivElement;
  beforeEach(() => (div = document.createElement('div')));
  afterAll(() => ReactDOM.unmountComponentAtNode(div));

  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it('fires an event on onClick', () => {
    const fn = jest.fn();
    const div = document.createElement('div');
    ReactDOM.render(<Button onClick={fn} />, div);

    const button = div.querySelector('button');
    button?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(fn).toHaveBeenCalled();
  });
});
