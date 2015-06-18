'use strict';

exports.count = function* (start, step) {
  start = start || 0;
  step = step || 1;
  for (let i = start; ; i += step) {
    yield i;
  }
}

exports.cycle = function* (it) {
  var xs = [];
  for (let x of it) {
    yield x;
    xs.push(x);
  }
  while (true) {
    for (let x of xs) {
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

exports.chain = function* (...its) {
  for (let it of its) {
    for (let x of it) {
      yield x;
    }
  }
}
