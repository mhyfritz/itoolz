module.exports = {
  accumulate: accumulate,
  all: all,
  any: any,
  chain: chain,
  chainFromIterable: chainFromIterable,
  compress: compress,
  count: count,
  cycle: cycle,
  dropwhile: dropwhile,
  enumerate: enumerate,
  filter: filter,
  filterfalse: filterfalse,
  map: map,
  range: range,
  repeat: repeat,
  starmap: starmap,
  takewhile: takewhile,
  zip: zip
};

function* accumulate(xs, f = add) {
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

function all(it) {
  for (let x of it) {
    if (! x) {
      return false;
    }
  }
  return true;
}

function any(it) {
  for (let x of it) {
    if (x) {
      return true;
    }
  }
  return false;
}

function* chain(...its) {
  for (let it of its) {
    for (let x of it) {
      yield x;
    }
  }
}

function* chainFromIterable(it) {
  for (let xs of it) {
    for (let x of xs) {
      yield x;
    }
  }
}

function* compress(it, select) {
  for (let xs of zip(it, select)) {
    if (xs[1]) {
      yield xs[0];
    }
  }
}

function* count(start = 0, step = 1) {
  for (let i = start; ; i += step) {
    yield i;
  }
}

function* cycle(it) {
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

function* dropwhile(predicate, xs) {
  var x;
  var it = xs[Symbol.iterator] ? xs[Symbol.iterator]() : xs;
  for (x of it) {
    if (! predicate(x)) {
      yield x;
      break;
    }
  }
  for (x of it) {
    yield x;
  }
}

function* enumerate(xs, start = 0) {
  yield* zip(count(start), xs);
}

function* filter(predicate, it) {
  if (! predicate) {
    predicate = Boolean;
  }
  for (let x of it) {
    if (predicate(x)) {
      yield x;
    }
  }
}

function* filterfalse(predicate, it) {
  if (! predicate) {
    predicate = Boolean;
  }
  yield* filter(x => !predicate(x), it);
}

function* map(f, ...xss) {
  for(let xs of zip(...xss)) {
    yield f(...xs);
  }
}

function* range(start, stop, step = 1) {
  if (stop === undefined) {
    stop = start;
    start = 0;
  }
  for (let i of count(start, step)) {
    if (i >= stop) {
      return;
    }
    yield i;
  }
}

function* repeat(elem, n) {
  while (true) {
    if (n !== undefined && n-- === 0) {
      break;
    }
    yield elem;
  }
}

function* starmap(f, it) {
  for (let xs of it) {
    yield f(...xs);
  }
}

function* takewhile(predicate, it) {
  for (let x of it) {
    if (!predicate(x)) {
      return;
    }
    yield x;
  }
}

function* zip(...xss) {
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

function add(x, y) {
  return x + y;
}
