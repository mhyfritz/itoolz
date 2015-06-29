let itoolz = require('../dist/itoolz');
let test = require('tape');

test('accumulate - default func - list', function (t) {
  t.plan(1);
  let actual, expect;
  actual = itoolz.accumulate([1, 2, 3, 4, 5]);
  actual = [...actual];
  expect = [1, 3, 6, 10, 15];
  t.deepEqual(actual, expect);
});

test('accumulate - default func - generator', function (t) {
  t.plan(1);
  let actual, expect;
  actual = itoolz.accumulate(function* () {
    for (let x of [1, 2, 3, 4, 5]) {
      yield x;
    }
  }());
  actual = [...actual];
  expect = [1, 3, 6, 10, 15];
  t.deepEqual(actual, expect);
});

test('accumulate - multiply func - list', function (t) {
  t.plan(1);
  let actual, expect;
  actual = itoolz.accumulate([1, 2, 3, 4, 5], (x, y) => x * y);
  actual = [...actual];
  expect = [1, 2, 6, 24, 120];
  t.deepEqual(actual, expect);
});

test('accumulate - multiply func - generator', function (t) {
  t.plan(1);
  let actual, expect;
  actual = itoolz.accumulate(function* () {
    for (let x of [1, 2, 3, 4, 5]) {
      yield x;
    }
  }(), (x, y) => x * y);
  actual = [...actual];
  expect = [1, 2, 6, 24, 120];
  t.deepEqual(actual, expect);
});

test('chain - two seqs - list', function (t) {
  t.plan(1);
  let actual, expect;
  actual = itoolz.chain('ABC', 'DEF');
  actual = [...actual];
  expect = ['A', 'B', 'C', 'D', 'E', 'F'];
  t.deepEqual(actual, expect);
});

test('chain - two seqs - generator', function (t) {
  t.plan(1);
  let actual, expect;
  function* g() {
    for (let x of 'ABC') {
      yield x;
    }
  }
  function* h() {
    for (let x of 'DEF') {
      yield x;
    }
  }
  actual = itoolz.chain(g(), h());
  actual = [...actual];
  expect = ['A', 'B', 'C', 'D', 'E', 'F'];
  t.deepEqual(actual, expect);
});

test('chainFromIterable - two seqs - list', function (t) {
  t.plan(1);
  let actual, expect;
  actual = itoolz.chainFromIterable(['ABC', 'DEF']);
  actual = [...actual];
  expect = ['A', 'B', 'C', 'D', 'E', 'F'];
  t.deepEqual(actual, expect);
});

test('chainFromIterable - two seqs - generator', function (t) {
  t.plan(1);
  let actual, expect;
  function* g() {
    for (let x of 'ABC') {
      yield x;
    }
  }
  function* h() {
    for (let x of 'DEF') {
      yield x;
    }
  }
  actual = itoolz.chainFromIterable([g(), h()]);
  actual = [...actual];
  expect = ['A', 'B', 'C', 'D', 'E', 'F'];
  t.deepEqual(actual, expect);
});

test('compress - string', function (t) {
  t.plan(1);
  let actual, expect;
  actual = itoolz.compress('ABCDEF', [1, 0, 1, 0, 1, 1]);
  actual = [...actual];
  expect = ['A', 'C', 'E', 'F'];
  t.deepEqual(actual, expect);
});

test('compress - string / generator', function (t) {
  t.plan(1);
  let actual, expect;
  function* g() {
    for (let x of 'ABCDEF') {
      yield x;
    }
  }
  actual = itoolz.compress(g(), [1, 0, 1, 0, 1, 1]);
  actual = [...actual];
  expect = ['A', 'C', 'E', 'F'];
  t.deepEqual(actual, expect);
});
