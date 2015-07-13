import * as itoolz from '../src/itoolz';
let test = require('tape');

// {{{ accumulate
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
// }}}

// {{{ all
test('all - booleans - all true - list', function (t) {
  t.plan(1);
  let actual, expect;
  actual = itoolz.all([true, true, true, true]);
  expect = true;
  t.equal(actual, expect);
});

test('all - booleans - all true - generator', function (t) {
  t.plan(1);
  let actual, expect;
  function* g() {
    for (let x of [true, true, true, true]) {
      yield x;
    }
  }
  actual = itoolz.all(g());
  expect = true;
  t.equal(actual, expect);
});

test('all - booleans - one false - list', function (t) {
  t.plan(1);
  let actual, expect;
  actual = itoolz.all([true, true, false, true]);
  expect = false;
  t.equal(actual, expect);
});

test('all - booleans - one false - generator', function (t) {
  t.plan(1);
  let actual, expect;
  function* g() {
    for (let x of [true, true, false, true]) {
      yield x;
    }
  }
  actual = itoolz.all(g());
  expect = false;
  t.equal(actual, expect);
});

test('all - booleans - all false - list', function (t) {
  t.plan(1);
  let actual, expect;
  actual = itoolz.all([false, false, false, false]);
  expect = false;
  t.equal(actual, expect);
});

test('all - booleans - all false - generator', function (t) {
  t.plan(1);
  let actual, expect;
  function* g() {
    for (let x of [false, false, false, false]) {
      yield x;
    }
  }
  actual = itoolz.all(g());
  expect = false;
  t.equal(actual, expect);
});

test('all  - all truthy - list', function (t) {
  t.plan(1);
  let actual, expect;
  actual = itoolz.all([true, 1, 7.7, 'foo', Infinity, [], {}]);
  expect = true;
  t.equal(actual, expect);
});

test('all  - all truthy - generator', function (t) {
  t.plan(1);
  let actual, expect;
  function* g() {
    for (let x of [true, 1, 7.7, 'foo', Infinity, [], {}]) {
      yield x;
    }
  }
  actual = itoolz.all(g());
  expect = true;
  t.equal(actual, expect);
});
// }}}

// {{{ any
test('any - booleans - all true - list', function (t) {
  t.plan(1);
  let actual, expect;
  actual = itoolz.any([true, true, true, true]);
  expect = true;
  t.equal(actual, expect);
});

test('any - booleans - all true - generator', function (t) {
  t.plan(1);
  let actual, expect;
  function* g() {
    for (let x of [true, true, true, true]) {
      yield x;
    }
  }
  actual = itoolz.any(g());
  expect = true;
  t.equal(actual, expect);
});

test('any - booleans - one true - list', function (t) {
  t.plan(1);
  let actual, expect;
  actual = itoolz.any([false, true, false, false]);
  expect = true;
  t.equal(actual, expect);
});

test('any - booleans - one true - generator', function (t) {
  t.plan(1);
  let actual, expect;
  function* g() {
    for (let x of [false, true, false, false]) {
      yield x;
    }
  }
  actual = itoolz.any(g());
  expect = true;
  t.equal(actual, expect);
});

test('any - booleans - all false - list', function (t) {
  t.plan(1);
  let actual, expect;
  actual = itoolz.any([false, false, false, false]);
  expect = false;
  t.equal(actual, expect);
});

test('any - booleans - all false - generator', function (t) {
  t.plan(1);
  let actual, expect;
  function* g() {
    for (let x of [false, false, false, false]) {
      yield x;
    }
  }
  actual = itoolz.any(g());
  expect = false;
  t.equal(actual, expect);
});

test('any  - all truthy - list', function (t) {
  t.plan(1);
  let actual, expect;
  actual = itoolz.any([true, 1, 7.7, 'foo', Infinity, [], {}]);
  expect = true;
  t.equal(actual, expect);
});

test('any  - all truthy - generator', function (t) {
  t.plan(1);
  let actual, expect;
  function* g() {
    for (let x of [true, 1, 7.7, 'foo', Infinity, [], {}]) {
      yield x;
    }
  }
  actual = itoolz.any(g());
  expect = true;
  t.equal(actual, expect);
});
// }}}

// {{{ chain
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
// }}}

// {{{ chainFromIterable
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
// }}}

// {{{ compress
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
// }}}

// {{{ count
test('count - default params', function (t) {
  t.plan(1);
  let actual, expect;
  actual = [];
  for (let x of itoolz.count()) {
    actual.push(x);
    if (actual.length === 10) {
      break;
    }
  }
  expect = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  t.deepEqual(actual, expect);
});

test('count - non default start', function (t) {
  t.plan(1);
  let actual, expect;
  actual = [];
  for (let x of itoolz.count(3)) {
    actual.push(x);
    if (actual.length === 10) {
      break;
    }
  }
  expect = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  t.deepEqual(actual, expect);
});

test('count - non default params', function (t) {
  t.plan(1);
  let actual, expect;
  actual = [];
  for (let x of itoolz.count(1, 3)) {
    actual.push(x);
    if (actual.length === 10) {
      break;
    }
  }
  expect = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28];
  t.deepEqual(actual, expect);
});
// }}}

// {{{ cycle
test('cycle - chars - string', function (t) {
  t.plan(1);
  let actual, expect;
  actual = [];
  for (let x of itoolz.cycle('ABCD')) {
    actual.push(x);
    if (actual.length === 12) {
      break;
    }
  }
  expect = ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D'];
  t.deepEqual(actual, expect);
});

test('cycle - chars - generator', function (t) {
  t.plan(1);
  let actual, expect;
  function* g() {
    for (let x of 'ABCD') {
      yield x;
    }
  }
  actual = [];
  for (let x of itoolz.cycle(g())) {
    actual.push(x);
    if (actual.length === 12) {
      break;
    }
  }
  expect = ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D'];
  t.deepEqual(actual, expect);
});
// }}}

// {{{ dropwhile
test('dropwhile - ints smaller than - list', function (t) {
  t.plan(1);
  let actual, expect;
  actual = itoolz.dropwhile(x => x < 5, [1, 4, 6, 4, 1]);
  actual = [...actual];
  expect = [6, 4, 1];
  t.deepEqual(actual, expect);
});

test('dropwhile - ints smaller than - generator', function (t) {
  t.plan(1);
  let actual, expect;
  function* g() {
    for (let x of [1, 4, 6, 4, 1]) {
      yield x;
    }
  }
  actual = itoolz.dropwhile(x => x < 5, g());
  actual = [...actual];
  expect = [6, 4, 1];
  t.deepEqual(actual, expect);
});
// }}}

// {{{ enumerate
test('enumerate - chars - default start - string', function (t) {
  t.plan(1);
  let actual, expect;
  actual = itoolz.enumerate('foobar');
  actual = [...actual];
  expect = [[0, 'f'], [1, 'o'], [2, 'o'], [3, 'b'], [4, 'a'], [5, 'r']];
  t.deepEqual(actual, expect);
});

test('enumerate - chars - default start - generator', function (t) {
  t.plan(1);
  let actual, expect;
  function* g() {
    for (let x of 'foobar') {
      yield x;
    }
  }
  actual = itoolz.enumerate(g());
  actual = [...actual];
  expect = [[0, 'f'], [1, 'o'], [2, 'o'], [3, 'b'], [4, 'a'], [5, 'r']];
  t.deepEqual(actual, expect);
});
// }}}

// {{{ filter
test('filter - odd - list', function (t) {
  t.plan(1);
  let actual, expect;
  actual = itoolz.filter(x => x % 2 === 1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  actual = [...actual];
  expect = [1, 3, 5, 7, 9];
  t.deepEqual(actual, expect);
});

test('filter - odd - generator', function (t) {
  t.plan(1);
  let actual, expect;
  function* g() {
    for (let x = 0; x <= 10; x += 1) {
      yield x;
    }
  }
  actual = itoolz.filter(x => x % 2 === 1, g());
  actual = [...actual];
  expect = [1, 3, 5, 7, 9];
  t.deepEqual(actual, expect);
});
// }}}

// {{{ filterfalse
test('filterfalse - odd - list', function (t) {
  t.plan(1);
  let actual, expect;
  actual = itoolz.filterfalse(x => x % 2 === 1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  actual = [...actual];
  expect = [0, 2, 4, 6, 8, 10];
  t.deepEqual(actual, expect);
});

test('filterfalse - odd - generator', function (t) {
  t.plan(1);
  let actual, expect;
  function* g() {
    for (let x = 0; x <= 10; x += 1) {
      yield x;
    }
  }
  actual = itoolz.filterfalse(x => x % 2 === 1, g());
  actual = [...actual];
  expect = [0, 2, 4, 6, 8, 10];
  t.deepEqual(actual, expect);
});
// }}}

// {{{ list
test('list - array', function (t) {
  t.plan(1);
  let actual, expect;
  actual = itoolz.list(['foo', 'bar', 'baz', 'qux']);
  expect = ['foo', 'bar', 'baz', 'qux'];
  t.deepEqual(actual, expect);
});

test('list - object', function (t) {
  t.plan(1);
  let actual, expect;
  actual = itoolz.list({
    'foo': 1,
    'bar': 2,
    'baz': 3,
    'qux': 4
  });
  expect = ['foo', 'bar', 'baz', 'qux'];
  actual.sort();
  expect.sort();
  t.deepEqual(actual, expect);
});

test('list - map', function (t) {
  t.plan(1);
  let actual, expect, map;
  map = new Map();
  map.set('foo', 1);
  map.set('bar', 2);
  map.set('baz', 3);
  map.set('qux', 4);
  actual = itoolz.list(map);
  expect = [['foo', 1], ['bar', 2], ['baz', 3], ['qux', 4]];
  actual.sort();
  expect.sort();
  t.deepEqual(actual, expect);
});
// }}}

// {{{ map
test('map - squares - list', function (t) {
  t.plan(1);
  let actual, expect;
  actual = itoolz.map(x => x * x, [0, 1, 2, 3, 4, 5]);
  actual = [...actual];
  expect = [0, 1, 4, 9, 16, 25];
  t.deepEqual(actual, expect);
});

test('map - squares - generator', function (t) {
  t.plan(1);
  let actual, expect;
  function* g() {
    for (let x of [0, 1, 2, 3, 4, 5]) {
      yield x;
    }
  }
  actual = itoolz.map(x => x * x, g());
  actual = [...actual];
  expect = [0, 1, 4, 9, 16, 25];
  t.deepEqual(actual, expect);
});
// }}}

// {{{ max
test('max - ints - list', function (t) {
  t.plan(1);
  let actual, expect;
  actual = itoolz.max([-10, -1, 0, 10, 1, 2, 3]);
  expect = 10;
  t.equal(actual, expect);
});

test('max - ints - generator', function (t) {
  t.plan(1);
  let actual, expect;
  function* g() {
    for (let x of [-10, -1, 0, 10, 1, 2, 3]) {
      yield x;
    }
  }
  actual = itoolz.max(g());
  expect = 10;
  t.equal(actual, expect);
});

test('max - ints - Infinity - list', function (t) {
  t.plan(1);
  let actual, expect;
  actual = itoolz.max([-Infinity, -1, 0, Infinity, 1, Number.MAX_VALUE]);
  expect = Infinity;
  t.equal(actual, expect);
});

test('max - ints - Infinity - generator', function (t) {
  t.plan(1);
  let actual, expect;
  function* g() {
    for (let x of [-Infinity, -1, 0, Infinity, 1, Number.MAX_VALUE]) {
      yield x;
    }
  }
  actual = itoolz.max(g());
  expect = Infinity;
  t.equal(actual, expect);
});
// }}}

// {{{ min
test('min - ints - list', function (t) {
  t.plan(1);
  let actual, expect;
  actual = itoolz.min([-10, -1, 0, 10, 1, 2, 3]);
  expect = -10;
  t.equal(actual, expect);
});

test('min - ints - generator', function (t) {
  t.plan(1);
  let actual, expect;
  function* g() {
    for (let x of [-10, -1, 0, 10, 1, 2, 3]) {
      yield x;
    }
  }
  actual = itoolz.min(g());
  expect = -10;
  t.equal(actual, expect);
});

test('min - ints - Infinity - list', function (t) {
  t.plan(1);
  let actual, expect;
  actual = itoolz.min([Number.MIN_VALUE, -Infinity, -1, 0, 1, Infinity]);
  expect = -Infinity;
  t.equal(actual, expect);
});

test('min - ints - Infinity - generator', function (t) {
  t.plan(1);
  let actual, expect;
  function* g() {
    for (let x of [Number.MIN_VALUE, -Infinity, -1, 0, 1, Infinity]) {
      yield x;
    }
  }
  actual = itoolz.min(g());
  expect = -Infinity;
  t.equal(actual, expect);
});
// }}}

// {{{ range
test('range - default start and step', function (t) {
  t.plan(1);
  let actual, expect;
  actual = itoolz.range(10);
  actual = [...actual];
  expect = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  t.deepEqual(actual, expect);
});

test('range - non-default start and step', function (t) {
  t.plan(1);
  let actual, expect;
  actual = itoolz.range(5, 20, 3);
  actual = [...actual];
  expect = [5, 8, 11, 14, 17];
  t.deepEqual(actual, expect);
});
// }}}

// {{{ reduce
test('reduce - add - no initializer - list', function (t) {
  t.plan(1);
  let actual, expect;
  actual = itoolz.reduce((x, y) => x + y, [1, 2, 3, 4, 5]);
  expect = 15;
  t.equal(actual, expect);
});

test('reduce - add - no initializer - generator', function (t) {
  t.plan(1);
  let actual, expect;
  function* g() {
    for (let x of [1, 2, 3, 4, 5]) {
      yield x;
    }
  }
  actual = itoolz.reduce((x, y) => x + y, g());
  expect = 15;
  t.equal(actual, expect);
});

test('reduce - add - with initializer - list', function (t) {
  t.plan(1);
  let actual, expect;
  actual = itoolz.reduce((x, y) => x + y, [1, 2, 3, 4, 5], 10);
  expect = 25;
  t.equal(actual, expect);
});

test('reduce - add - with initializer - generator', function (t) {
  t.plan(1);
  let actual, expect;
  function* g() {
    for (let x of [1, 2, 3, 4, 5]) {
      yield x;
    }
  }
  actual = itoolz.reduce((x, y) => x + y, g(), 10);
  expect = 25;
  t.equal(actual, expect);
});
// }}}

// {{{ reversed
test('reversed - array', function (t) {
  t.plan(1);
  let actual, expect;
  actual = itoolz.reversed(['foo', 'bar', 'baz', 'qux']);
  actual = [...actual];
  expect = ['qux', 'baz', 'bar', 'foo'];
  t.deepEqual(actual, expect);
});

test('reversed - generator', function (t) {
  t.plan(1);
  let actual, expect;
  function* g() {
    for (let x of ['foo', 'bar', 'baz', 'qux']) {
      yield x;
    }
  }
  actual = itoolz.reversed(g());
  actual = [...actual];
  expect = ['qux', 'baz', 'bar', 'foo'];
  t.deepEqual(actual, expect);
});
// }}}
