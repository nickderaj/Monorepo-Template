export class Logger {
  static log(event: string, data: object, env: 'development' | 'production') {
    if (env === 'development') {
      return console.log('development log: ', event, data);
    }

    // TODO: add analytics logging here e.g Amplitude, Google Analytics, etc.
  }
}
