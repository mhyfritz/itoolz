'use strict';

exports.count = function* (start, step) {
  start = start || 0;
  step = step || 1;
  for (let i = start; ; i += step) {
    yield i;
  }
}

exports.cycle = function* (p) {
  while (true) {
    for (let x of p) {
      yield x;
    }
  }
}

exports.repeat = function* (elem, n) {
  while (true) {
    if (typeof n !== undefined && n-- === 0) {
      break;
    }
    yield elem;
  }
}
