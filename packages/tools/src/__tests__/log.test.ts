/* eslint-disable no-console */
import { Logger } from '../logger/Logger';

jest.spyOn(global.console, 'log');

describe('Logger', () => {
  it('prints a message', () => {
    Logger.log('test event', { test: 'data' }, 'development');
    expect(console.log).toHaveBeenCalled();
  });
});
