'use strict';

exports.count = function* count(start, step) {
  start = start || 0;
  step = step || 1;
  for (let i = start; ; i += step) {
    yield i;
  }
}
