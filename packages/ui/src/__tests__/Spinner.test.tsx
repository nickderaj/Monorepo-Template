import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import Spinner from '../components/Spinner';

describe('Spinner', () => {
  let div: HTMLDivElement;
  beforeEach(() => (div = document.createElement('div')));
  afterEach(cleanup);
  afterAll(() => div.remove());

  it('renders', () => {
    render(<Spinner />);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
  });
});
