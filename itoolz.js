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
    if (n !== undefined && n-- === 0) {
      break;
    }
    yield elem;
  }
}

exports.accumulate = function* (xs, f) {
  f = f || add;
  var it = xs[Symbol.iterator] ? xs[Symbol.iterator]() : xs;
  var acc = it.next().value;
  if (acc === undefined) {
    return;
  }
  yield acc;
  for (let x of it) {
    acc = f(acc, x);
    yield acc;
  }
}

exports.chain = function* (...its) {
  for (let it of its) {
    for (let x of it) {
      yield x;
    }
  }
}

exports.chainFromIterable = function* (it) {
  for (let xs of it) {
    for (let x of xs) {
      yield x;
    }
  }
}

exports.zip = function* (...xss) {
  var its = xss.map(function (xs) {
    return xs[Symbol.iterator] ? xs[Symbol.iterator]() : xs;
  });
  while (its) {
    let ret = its.map(function (it) {
      return it.next().value;
    });
    if (all(ret, x => x !== undefined)) {
      yield ret;
    } else {
      return;
    }
  }
}

exports.all = function (it, f) {
  for (let x of it) {
    if (! f(x)) {
      return false;
    }
  }
  return true;
}

function add(x, y) {
  return x + y;
}
