let itoolz = require('../dist/itoolz');
let test = require('tape');

test('accumulate - default func - list', function (t) {
  t.plan(1);
  let result, expect;
  result = itoolz.accumulate([1, 2, 3, 4, 5]);
  result = [...result];
  expect = [1, 3, 6, 10, 15];
  t.deepEqual(result, expect);
});

test('accumulate - default func - generator', function (t) {
  t.plan(1);
  let result, expect;
  result = itoolz.accumulate(function* () {
    for (let x of [1, 2, 3, 4, 5]) {
      yield x;
    }
  }());
  result = [...result];
  expect = [1, 3, 6, 10, 15];
  t.deepEqual(result, expect);
});

test('accumulate - multiply func - list', function (t) {
  t.plan(1);
  let result, expect;
  result = itoolz.accumulate([1, 2, 3, 4, 5], (x, y) => x * y);
  result = [...result];
  expect = [1, 2, 6, 24, 120];
  t.deepEqual(result, expect);
});

test('accumulate - multiply func - generator', function (t) {
  t.plan(1);
  let result, expect;
  result = itoolz.accumulate(function* () {
    for (let x of [1, 2, 3, 4, 5]) {
      yield x;
    }
  }(), (x, y) => x * y);
  result = [...result];
  expect = [1, 2, 6, 24, 120];
  t.deepEqual(result, expect);
});

test('chain - two seqs - list', function (t) {
  t.plan(1);
  let result, expect;
  result = itoolz.chain('ABC', 'DEF');
  result = [...result];
  expect = ['A', 'B', 'C', 'D', 'E', 'F'];
  t.deepEqual(result, expect);
});

test('chain - two seqs - generator', function (t) {
  t.plan(1);
  let result, expect;
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
  result = itoolz.chain(g(), h());
  result = [...result];
  expect = ['A', 'B', 'C', 'D', 'E', 'F'];
  t.deepEqual(result, expect);
});

test('chainFromIterable - two seqs - list', function (t) {
  t.plan(1);
  let result, expect;
  result = itoolz.chainFromIterable(['ABC', 'DEF']);
  result = [...result];
  expect = ['A', 'B', 'C', 'D', 'E', 'F'];
  t.deepEqual(result, expect);
});

test('chainFromIterable - two seqs - generator', function (t) {
  t.plan(1);
  let result, expect;
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
  result = itoolz.chainFromIterable([g(), h()]);
  result = [...result];
  expect = ['A', 'B', 'C', 'D', 'E', 'F'];
  t.deepEqual(result, expect);
});

test('compress - string', function (t) {
  t.plan(1);
  let result, expect;
  result = itoolz.compress('ABCDEF', [1, 0, 1, 0, 1, 1]);
  result = [...result];
  expect = ['A', 'C', 'E', 'F'];
  t.deepEqual(result, expect);
});

test('compress - string / generator', function (t) {
  t.plan(1);
  let result, expect;
  function* g() {
    for (let x of 'ABCDEF') {
      yield x;
    }
  }
  result = itoolz.compress(g(), [1, 0, 1, 0, 1, 1]);
  result = [...result];
  expect = ['A', 'C', 'E', 'F'];
  t.deepEqual(result, expect);
});
