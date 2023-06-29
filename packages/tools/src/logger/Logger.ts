/* eslint-disable no-console */

export class Logger {
  static log(
    event: string,
    data: object,
    env: 'development' | 'production' | 'test' = 'development',
    variant: 'error' | 'info' = 'info',
  ) {
    if (env === 'development') {
      if (variant === 'error') return console.error('development error: ', event, data);
      return console.log('development log: ', event, data);
    }

    // TODO: add analytics logging here e.g Amplitude, Google Analytics, etc.
  }
}
