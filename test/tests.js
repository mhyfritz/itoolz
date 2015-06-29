var itoolz = require('../dist/itoolz');
var test = require('tape');

test('accumulate - default func - list', function (t) {
  t.plan(1);
  var res = itoolz.accumulate([1, 2, 3, 4, 5]);
  res = [...res];
  t.deepEqual(res, [1, 3, 6, 10, 15]);
});

test('accumulate - default func - generator', function (t) {
  t.plan(1);
  var res = itoolz.accumulate(function* () {
    for (let x of [1, 2, 3, 4, 5]) {
      yield x;
    }
  }());
  res = [...res];
  t.deepEqual(res, [1, 3, 6, 10, 15]);
});

test('accumulate - multiply func - list', function (t) {
  t.plan(1);
  var res = itoolz.accumulate([1, 2, 3, 4, 5], (x, y) => x * y);
  res = [...res];
  t.deepEqual(res, [1, 2, 6, 24, 120]);
});

test('accumulate - multiply func - generator', function (t) {
  t.plan(1);
  var res = itoolz.accumulate(function* () {
    for (let x of [1, 2, 3, 4, 5]) {
      yield x;
    }
  }(), (x, y) => x * y);
  res = [...res];
  t.deepEqual(res, [1, 2, 6, 24, 120]);
});

test('chain - two seqs - list', function (t) {
  t.plan(1);
  var res = itoolz.chain('ABC', 'DEF');
  res = [...res];
  t.deepEqual(res, ['A', 'B', 'C', 'D', 'E', 'F']);
});

test('chain - two seqs - generator', function (t) {
  t.plan(1);
  function* g() { for (let x of 'ABC') { yield x; } };
  function* h() { for (let x of 'DEF') { yield x; } };
  var res = itoolz.chain(g(), h());
  res = [...res];
  t.deepEqual(res, ['A', 'B', 'C', 'D', 'E', 'F']);
});

test('chainFromIterable - two seqs - list', function (t) {
  t.plan(1);
  var res = itoolz.chainFromIterable(['ABC', 'DEF']);
  res = [...res];
  t.deepEqual(res, ['A', 'B', 'C', 'D', 'E', 'F']);
});

test('chainFromIterable - two seqs - generator', function (t) {
  t.plan(1);
  function* g() { for (let x of 'ABC') { yield x; } };
  function* h() { for (let x of 'DEF') { yield x; } };
  var res = itoolz.chainFromIterable([g(), h()]);
  res = [...res];
  t.deepEqual(res, ['A', 'B', 'C', 'D', 'E', 'F']);
});
