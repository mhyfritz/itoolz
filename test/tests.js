var itoolz = require('../dist/itoolz');
var test = require('tape');

test('accumulate - default func - list', function (t) {
  t.plan(1);
  var res = itoolz.accumulate([1, 2, 3, 4, 5]);
  t.deepEqual([...res], [1, 3, 6, 10, 15]);
});

test('accumulate - default func - generator', function (t) {
  t.plan(1);
  var res = itoolz.accumulate(function* () {
    for (let x of [1, 2, 3, 4, 5]) {
      yield x;
    }
  }());
  t.deepEqual([...res], [1, 3, 6, 10, 15]);
});

test('accumulate - multiply func - list', function (t) {
  t.plan(1);
  var res = itoolz.accumulate([1, 2, 3, 4, 5], (x, y) => x * y);
  t.deepEqual([...res], [1, 2, 6, 24, 120]);
});

test('accumulate - multiply func - generator', function (t) {
  t.plan(1);
  var res = itoolz.accumulate(function* () {
    for (let x of [1, 2, 3, 4, 5]) {
      yield x;
    }
  }(), (x, y) => x * y);
  t.deepEqual([...res], [1, 2, 6, 24, 120]);
});
