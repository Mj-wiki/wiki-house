class LoggerHandler {
  constructor(lever) {
    this.debugLever = lever;
  }

  log = (...info) => {
    if (process.env.LOG_DEBUG <= this.debugLever) {
      console.log(...info);
    }
  };

  info = (...info) => {
    if (process.env.LOG_DEBUG <= this.debugLever) {
      console.info(...info);
    }
  };

  warn = (...info) => {
    if (process.env.LOG_DEBUG <= this.debugLever) {
      console.warn(...info);
    }
  };

  error = (...info) => {
    if (process.env.LOG_DEBUG <= this.debugLever) {
      console.error(...info);
    }
  };

  group = (...info) => {
    if (process.env.LOG_DEBUG <= this.debugLever) {
      console.group(...info);
    }
  };

  groupEnd = (...info) => {
    if (process.env.LOG_DEBUG <= this.debugLever) {
      console.groupEnd(...info);
    }
  };
}

// 注册普通模式下Logger
let loggerHandler = new LoggerHandler(0);
let Logger = loggerHandler.log;
Logger = Object.assign(Logger, loggerHandler);
// 注册开发模式下Logger
let loggerDevHandler = new LoggerHandler(1);
Logger.dev = loggerDevHandler.log;
Logger.dev = Object.assign(Logger.dev, loggerHandler);
// 注册生产模式下Logger
let loggerProdHandler = new LoggerHandler(2);
Logger.prod = loggerProdHandler.log;
Logger.prod = Object.assign(Logger.prod, loggerHandler);

// Logger('1111111111111111111111');
// Logger.group('1111111111111111111111');
// Logger.error('1111111111111111111111');
// Logger.log('1111111111111111111111');
// Logger.warn('1111111111111111111111');
// Logger.info('1111111111111111111111');
// Logger.groupEnd('1111111111111111111111');
// Logger.dev('222222222222222');
// Logger.dev.group('222222222222222');
// Logger.dev.error('222222222222222');
// Logger.dev.log('222222222222222');
// Logger.dev.warn('222222222222222');
// Logger.dev.info('222222222222222');
// Logger.dev.groupEnd('222222222222222');
// Logger.prod('3333333333');
// Logger.prod.group('3333333333');
// Logger.prod.error('3333333333');
// Logger.prod.log('3333333333');
// Logger.prod.warn('3333333333');
// Logger.prod.info('3333333333');
// Logger.prod.groupEnd('3333333333');

export default Logger;
