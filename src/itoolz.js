export function* accumulate(xs, f = add) {
  let it = iter(xs);
  let head = it.next();
  let acc;
  if (head.done) {
    return;
  }
  acc = head.value;
  yield acc;
  for (let x of it) {
    acc = f(acc, x);
    yield acc;
  }
}

export function all(it, f = Boolean) {
  for (let x of it) {
    if (!f(x)) {
      return false;
    }
  }
  return true;
}

export function any(it, f = Boolean) {
  for (let x of it) {
    if (f(x)) {
      return true;
    }
  }
  return false;
}

export function* chain(...its) {
  for (let it of its) {
    for (let x of it) {
      yield x;
    }
  }
}

export function* chainFromIterable(it) {
  for (let xs of it) {
    for (let x of xs) {
      yield x;
    }
  }
}

export function* compress(it, select) {
  for (let [val, sel] of zip(it, select)) {
    if (sel) {
      yield val;
    }
  }
}

export function* count(start = 0, step = 1) {
  for (let i = start; ; i += step) {
    yield i;
  }
}

export function* cycle(it) {
  let xs = [];
  for (let x of it) {
    yield x;
    xs.push(x);
  }
  while (true) {  //eslint-disable-line no-constant-condition
    for (let x of xs) {
      yield x;
    }
  }
}

export function* dropwhile(predicate, xs) {
  let x;
  let it = iter(xs);
  for (x of it) {
    if (!predicate(x)) {
      yield x;
      break;
    }
  }
  for (x of it) {
    yield x;
  }
}

export function* enumerate(xs, start = 0) {
  yield* zip(count(start), xs);
}

export function* filter(predicate, it) {
  if (!predicate) {
    predicate = Boolean;
  }
  for (let x of it) {
    if (predicate(x)) {
      yield x;
    }
  }
}

export function* filterfalse(predicate, it) {
  if (!predicate) {
    predicate = Boolean;
  }
  yield* filter(x => !predicate(x), it);
}

export function* iter(obj, sentinel) {
  if (sentinel === undefined) {
    yield* obj[Symbol.iterator] ? obj[Symbol.iterator]() : obj;
  } else {
    yield* (function* g() {
      while (true) { //eslint-disable-line no-constant-condition
        let x = obj();
        if (x === sentinel) {
          return;
        }
        yield x;
      }
    }());
  }
}

export function* map(f, ...xss) {
  for(let xs of zip(...xss)) {
    yield f(...xs);
  }
}

export function max(it, keyfunc) {
  let maxValue = -Infinity;
  let res;
  let xValue;
  for (let x of it) {
    xValue = keyfunc ? keyfunc(x) : x;
    if (xValue > maxValue) {
      maxValue = xValue;
      res = x;
    }
  }
  return res;
}

export function min(it, keyfunc) {
  let minValue = Infinity;
  let res;
  let xValue;
  for (let x of it) {
    xValue = keyfunc ? keyfunc(x) : x;
    if (xValue < minValue) {
      minValue = xValue;
      res = x;
    }
  }
  return res;
}

export function next(it) {
  return it.next().value;
}

export function* range(start, stop, step = 1) {
  if (stop === undefined) {
    stop = start;
    start = 0;
  }
  for (let i of count(start, step)) {
    if (stop !== null && i >= stop) {
      return;
    }
    yield i;
  }
}

export function reduce(f, xs, init) {
  let it = iter(xs);
  let acc;
  if (init !== undefined) {
    acc = init;
  } else {
    acc = it.next().value;
  }
  for (let x of it) {
    acc = f(acc, x);
  }
  return acc;
}

export function* repeat(elem, n) {
  while (true) { //eslint-disable-line no-constant-condition
    if (n !== undefined && n-- === 0) {
      break;
    }
    yield elem;
  }
}

export function* slice(it, start, stop, step = 1) {
  if (stop === undefined) {
    stop = start;
    start = 0;
  }
  let is = range(start, stop, step);
  let nexti = is.next().value;
  for (let [i, x] of enumerate(it)) {
    if (nexti === undefined) {
      break;
    }
    if (i === nexti) {
      yield x;
      nexti = is.next().value;
    }
  }
  return;
}

export function* starmap(f, it) {
  for (let xs of it) {
    yield f(...xs);
  }
}

export function* takewhile(predicate, it) {
  for (let x of it) {
    if (!predicate(x)) {
      return;
    }
    yield x;
  }
}

export function* zip(...xss) {
  let its = xss.map(function (xs) {
    return xs[Symbol.iterator] ? xs[Symbol.iterator]() : xs;
  });
  let isUndefined = x => x !== undefined;
  while (its) {
    let ret = its.map(next);
    if (all(ret, isUndefined)) {
      yield ret;
    } else {
      return;
    }
  }
}

function add(x, y) {
  return x + y;
}
