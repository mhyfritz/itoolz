"use strict";

function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }

var marked0$0 = [accumulate, chain, chainFromIterable, compress, count, cycle, dropwhile, enumerate, filter, filterfalse, map, range, repeat, slice, starmap, takewhile, zip].map(regeneratorRuntime.mark);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

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
  reduce: reduce,
  repeat: repeat,
  slice: slice,
  starmap: starmap,
  takewhile: takewhile,
  zip: zip
};

function accumulate(xs) {
  var f = arguments[1] === undefined ? add : arguments[1];

  var it, acc, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, x;

  return regeneratorRuntime.wrap(function accumulate$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        it = xs[Symbol.iterator] ? xs[Symbol.iterator]() : xs;
        acc = it.next().value;

        if (!(acc === undefined)) {
          context$1$0.next = 4;
          break;
        }

        return context$1$0.abrupt("return");

      case 4:
        context$1$0.next = 6;
        return acc;

      case 6:
        _iteratorNormalCompletion = true;
        _didIteratorError = false;
        _iteratorError = undefined;
        context$1$0.prev = 9;
        _iterator = it[Symbol.iterator]();

      case 11:
        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
          context$1$0.next = 19;
          break;
        }

        x = _step.value;

        acc = f(acc, x);
        context$1$0.next = 16;
        return acc;

      case 16:
        _iteratorNormalCompletion = true;
        context$1$0.next = 11;
        break;

      case 19:
        context$1$0.next = 25;
        break;

      case 21:
        context$1$0.prev = 21;
        context$1$0.t0 = context$1$0["catch"](9);
        _didIteratorError = true;
        _iteratorError = context$1$0.t0;

      case 25:
        context$1$0.prev = 25;
        context$1$0.prev = 26;

        if (!_iteratorNormalCompletion && _iterator["return"]) {
          _iterator["return"]();
        }

      case 28:
        context$1$0.prev = 28;

        if (!_didIteratorError) {
          context$1$0.next = 31;
          break;
        }

        throw _iteratorError;

      case 31:
        return context$1$0.finish(28);

      case 32:
        return context$1$0.finish(25);

      case 33:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[0], this, [[9, 21, 25, 33], [26,, 28, 32]]);
}

function all(it) {
  var f = arguments[1] === undefined ? Boolean : arguments[1];
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = it[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var x = _step2.value;

      if (!f(x)) {
        return false;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return true;
}

function any(it) {
  var f = arguments[1] === undefined ? Boolean : arguments[1];
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = it[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var x = _step3.value;

      if (f(x)) {
        return true;
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return false;
}

function chain() {
  for (var _len = arguments.length, its = Array(_len), _key = 0; _key < _len; _key++) {
    its[_key] = arguments[_key];
  }

  var _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, it, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, x;

  return regeneratorRuntime.wrap(function chain$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        _iteratorNormalCompletion4 = true;
        _didIteratorError4 = false;
        _iteratorError4 = undefined;
        context$1$0.prev = 3;
        _iterator4 = its[Symbol.iterator]();

      case 5:
        if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
          context$1$0.next = 36;
          break;
        }

        it = _step4.value;
        _iteratorNormalCompletion5 = true;
        _didIteratorError5 = false;
        _iteratorError5 = undefined;
        context$1$0.prev = 10;
        _iterator5 = it[Symbol.iterator]();

      case 12:
        if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
          context$1$0.next = 19;
          break;
        }

        x = _step5.value;
        context$1$0.next = 16;
        return x;

      case 16:
        _iteratorNormalCompletion5 = true;
        context$1$0.next = 12;
        break;

      case 19:
        context$1$0.next = 25;
        break;

      case 21:
        context$1$0.prev = 21;
        context$1$0.t0 = context$1$0["catch"](10);
        _didIteratorError5 = true;
        _iteratorError5 = context$1$0.t0;

      case 25:
        context$1$0.prev = 25;
        context$1$0.prev = 26;

        if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
          _iterator5["return"]();
        }

      case 28:
        context$1$0.prev = 28;

        if (!_didIteratorError5) {
          context$1$0.next = 31;
          break;
        }

        throw _iteratorError5;

      case 31:
        return context$1$0.finish(28);

      case 32:
        return context$1$0.finish(25);

      case 33:
        _iteratorNormalCompletion4 = true;
        context$1$0.next = 5;
        break;

      case 36:
        context$1$0.next = 42;
        break;

      case 38:
        context$1$0.prev = 38;
        context$1$0.t1 = context$1$0["catch"](3);
        _didIteratorError4 = true;
        _iteratorError4 = context$1$0.t1;

      case 42:
        context$1$0.prev = 42;
        context$1$0.prev = 43;

        if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
          _iterator4["return"]();
        }

      case 45:
        context$1$0.prev = 45;

        if (!_didIteratorError4) {
          context$1$0.next = 48;
          break;
        }

        throw _iteratorError4;

      case 48:
        return context$1$0.finish(45);

      case 49:
        return context$1$0.finish(42);

      case 50:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[1], this, [[3, 38, 42, 50], [10, 21, 25, 33], [26,, 28, 32], [43,, 45, 49]]);
}

function chainFromIterable(it) {
  var _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, xs, _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, x;

  return regeneratorRuntime.wrap(function chainFromIterable$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        _iteratorNormalCompletion6 = true;
        _didIteratorError6 = false;
        _iteratorError6 = undefined;
        context$1$0.prev = 3;
        _iterator6 = it[Symbol.iterator]();

      case 5:
        if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
          context$1$0.next = 36;
          break;
        }

        xs = _step6.value;
        _iteratorNormalCompletion7 = true;
        _didIteratorError7 = false;
        _iteratorError7 = undefined;
        context$1$0.prev = 10;
        _iterator7 = xs[Symbol.iterator]();

      case 12:
        if (_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done) {
          context$1$0.next = 19;
          break;
        }

        x = _step7.value;
        context$1$0.next = 16;
        return x;

      case 16:
        _iteratorNormalCompletion7 = true;
        context$1$0.next = 12;
        break;

      case 19:
        context$1$0.next = 25;
        break;

      case 21:
        context$1$0.prev = 21;
        context$1$0.t0 = context$1$0["catch"](10);
        _didIteratorError7 = true;
        _iteratorError7 = context$1$0.t0;

      case 25:
        context$1$0.prev = 25;
        context$1$0.prev = 26;

        if (!_iteratorNormalCompletion7 && _iterator7["return"]) {
          _iterator7["return"]();
        }

      case 28:
        context$1$0.prev = 28;

        if (!_didIteratorError7) {
          context$1$0.next = 31;
          break;
        }

        throw _iteratorError7;

      case 31:
        return context$1$0.finish(28);

      case 32:
        return context$1$0.finish(25);

      case 33:
        _iteratorNormalCompletion6 = true;
        context$1$0.next = 5;
        break;

      case 36:
        context$1$0.next = 42;
        break;

      case 38:
        context$1$0.prev = 38;
        context$1$0.t1 = context$1$0["catch"](3);
        _didIteratorError6 = true;
        _iteratorError6 = context$1$0.t1;

      case 42:
        context$1$0.prev = 42;
        context$1$0.prev = 43;

        if (!_iteratorNormalCompletion6 && _iterator6["return"]) {
          _iterator6["return"]();
        }

      case 45:
        context$1$0.prev = 45;

        if (!_didIteratorError6) {
          context$1$0.next = 48;
          break;
        }

        throw _iteratorError6;

      case 48:
        return context$1$0.finish(45);

      case 49:
        return context$1$0.finish(42);

      case 50:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[2], this, [[3, 38, 42, 50], [10, 21, 25, 33], [26,, 28, 32], [43,, 45, 49]]);
}

function compress(it, select) {
  var _iteratorNormalCompletion8, _didIteratorError8, _iteratorError8, _iterator8, _step8, xs;

  return regeneratorRuntime.wrap(function compress$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        _iteratorNormalCompletion8 = true;
        _didIteratorError8 = false;
        _iteratorError8 = undefined;
        context$1$0.prev = 3;
        _iterator8 = zip(it, select)[Symbol.iterator]();

      case 5:
        if (_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done) {
          context$1$0.next = 13;
          break;
        }

        xs = _step8.value;

        if (!xs[1]) {
          context$1$0.next = 10;
          break;
        }

        context$1$0.next = 10;
        return xs[0];

      case 10:
        _iteratorNormalCompletion8 = true;
        context$1$0.next = 5;
        break;

      case 13:
        context$1$0.next = 19;
        break;

      case 15:
        context$1$0.prev = 15;
        context$1$0.t0 = context$1$0["catch"](3);
        _didIteratorError8 = true;
        _iteratorError8 = context$1$0.t0;

      case 19:
        context$1$0.prev = 19;
        context$1$0.prev = 20;

        if (!_iteratorNormalCompletion8 && _iterator8["return"]) {
          _iterator8["return"]();
        }

      case 22:
        context$1$0.prev = 22;

        if (!_didIteratorError8) {
          context$1$0.next = 25;
          break;
        }

        throw _iteratorError8;

      case 25:
        return context$1$0.finish(22);

      case 26:
        return context$1$0.finish(19);

      case 27:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[3], this, [[3, 15, 19, 27], [20,, 22, 26]]);
}

function count() {
  var start = arguments[0] === undefined ? 0 : arguments[0];
  var step = arguments[1] === undefined ? 1 : arguments[1];
  var i;
  return regeneratorRuntime.wrap(function count$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        i = start;

      case 1:
        context$1$0.next = 3;
        return i;

      case 3:
        i += step;
        context$1$0.next = 1;
        break;

      case 6:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[4], this);
}

function cycle(it) {
  var xs, _iteratorNormalCompletion9, _didIteratorError9, _iteratorError9, _iterator9, _step9, x, _iteratorNormalCompletion10, _didIteratorError10, _iteratorError10, _iterator10, _step10;

  return regeneratorRuntime.wrap(function cycle$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        xs = [];
        _iteratorNormalCompletion9 = true;
        _didIteratorError9 = false;
        _iteratorError9 = undefined;
        context$1$0.prev = 4;
        _iterator9 = it[Symbol.iterator]();

      case 6:
        if (_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done) {
          context$1$0.next = 14;
          break;
        }

        x = _step9.value;
        context$1$0.next = 10;
        return x;

      case 10:
        xs.push(x);

      case 11:
        _iteratorNormalCompletion9 = true;
        context$1$0.next = 6;
        break;

      case 14:
        context$1$0.next = 20;
        break;

      case 16:
        context$1$0.prev = 16;
        context$1$0.t0 = context$1$0["catch"](4);
        _didIteratorError9 = true;
        _iteratorError9 = context$1$0.t0;

      case 20:
        context$1$0.prev = 20;
        context$1$0.prev = 21;

        if (!_iteratorNormalCompletion9 && _iterator9["return"]) {
          _iterator9["return"]();
        }

      case 23:
        context$1$0.prev = 23;

        if (!_didIteratorError9) {
          context$1$0.next = 26;
          break;
        }

        throw _iteratorError9;

      case 26:
        return context$1$0.finish(23);

      case 27:
        return context$1$0.finish(20);

      case 28:
        if (!true) {
          context$1$0.next = 57;
          break;
        }

        _iteratorNormalCompletion10 = true;
        _didIteratorError10 = false;
        _iteratorError10 = undefined;
        context$1$0.prev = 32;
        _iterator10 = xs[Symbol.iterator]();

      case 34:
        if (_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done) {
          context$1$0.next = 41;
          break;
        }

        x = _step10.value;
        context$1$0.next = 38;
        return x;

      case 38:
        _iteratorNormalCompletion10 = true;
        context$1$0.next = 34;
        break;

      case 41:
        context$1$0.next = 47;
        break;

      case 43:
        context$1$0.prev = 43;
        context$1$0.t1 = context$1$0["catch"](32);
        _didIteratorError10 = true;
        _iteratorError10 = context$1$0.t1;

      case 47:
        context$1$0.prev = 47;
        context$1$0.prev = 48;

        if (!_iteratorNormalCompletion10 && _iterator10["return"]) {
          _iterator10["return"]();
        }

      case 50:
        context$1$0.prev = 50;

        if (!_didIteratorError10) {
          context$1$0.next = 53;
          break;
        }

        throw _iteratorError10;

      case 53:
        return context$1$0.finish(50);

      case 54:
        return context$1$0.finish(47);

      case 55:
        context$1$0.next = 28;
        break;

      case 57:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[5], this, [[4, 16, 20, 28], [21,, 23, 27], [32, 43, 47, 55], [48,, 50, 54]]);
}

function dropwhile(predicate, xs) {
  var x, it, _iteratorNormalCompletion11, _didIteratorError11, _iteratorError11, _iterator11, _step11, _iteratorNormalCompletion12, _didIteratorError12, _iteratorError12, _iterator12, _step12;

  return regeneratorRuntime.wrap(function dropwhile$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        it = xs[Symbol.iterator] ? xs[Symbol.iterator]() : xs;
        _iteratorNormalCompletion11 = true;
        _didIteratorError11 = false;
        _iteratorError11 = undefined;
        context$1$0.prev = 4;
        _iterator11 = it[Symbol.iterator]();

      case 6:
        if (_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done) {
          context$1$0.next = 15;
          break;
        }

        x = _step11.value;

        if (predicate(x)) {
          context$1$0.next = 12;
          break;
        }

        context$1$0.next = 11;
        return x;

      case 11:
        return context$1$0.abrupt("break", 15);

      case 12:
        _iteratorNormalCompletion11 = true;
        context$1$0.next = 6;
        break;

      case 15:
        context$1$0.next = 21;
        break;

      case 17:
        context$1$0.prev = 17;
        context$1$0.t0 = context$1$0["catch"](4);
        _didIteratorError11 = true;
        _iteratorError11 = context$1$0.t0;

      case 21:
        context$1$0.prev = 21;
        context$1$0.prev = 22;

        if (!_iteratorNormalCompletion11 && _iterator11["return"]) {
          _iterator11["return"]();
        }

      case 24:
        context$1$0.prev = 24;

        if (!_didIteratorError11) {
          context$1$0.next = 27;
          break;
        }

        throw _iteratorError11;

      case 27:
        return context$1$0.finish(24);

      case 28:
        return context$1$0.finish(21);

      case 29:
        _iteratorNormalCompletion12 = true;
        _didIteratorError12 = false;
        _iteratorError12 = undefined;
        context$1$0.prev = 32;
        _iterator12 = it[Symbol.iterator]();

      case 34:
        if (_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done) {
          context$1$0.next = 41;
          break;
        }

        x = _step12.value;
        context$1$0.next = 38;
        return x;

      case 38:
        _iteratorNormalCompletion12 = true;
        context$1$0.next = 34;
        break;

      case 41:
        context$1$0.next = 47;
        break;

      case 43:
        context$1$0.prev = 43;
        context$1$0.t1 = context$1$0["catch"](32);
        _didIteratorError12 = true;
        _iteratorError12 = context$1$0.t1;

      case 47:
        context$1$0.prev = 47;
        context$1$0.prev = 48;

        if (!_iteratorNormalCompletion12 && _iterator12["return"]) {
          _iterator12["return"]();
        }

      case 50:
        context$1$0.prev = 50;

        if (!_didIteratorError12) {
          context$1$0.next = 53;
          break;
        }

        throw _iteratorError12;

      case 53:
        return context$1$0.finish(50);

      case 54:
        return context$1$0.finish(47);

      case 55:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[6], this, [[4, 17, 21, 29], [22,, 24, 28], [32, 43, 47, 55], [48,, 50, 54]]);
}

function enumerate(xs) {
  var start = arguments[1] === undefined ? 0 : arguments[1];
  return regeneratorRuntime.wrap(function enumerate$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        return context$1$0.delegateYield(zip(count(start), xs), "t0", 1);

      case 1:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[7], this);
}

function filter(predicate, it) {
  var _iteratorNormalCompletion13, _didIteratorError13, _iteratorError13, _iterator13, _step13, x;

  return regeneratorRuntime.wrap(function filter$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        if (!predicate) {
          predicate = Boolean;
        }
        _iteratorNormalCompletion13 = true;
        _didIteratorError13 = false;
        _iteratorError13 = undefined;
        context$1$0.prev = 4;
        _iterator13 = it[Symbol.iterator]();

      case 6:
        if (_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done) {
          context$1$0.next = 14;
          break;
        }

        x = _step13.value;

        if (!predicate(x)) {
          context$1$0.next = 11;
          break;
        }

        context$1$0.next = 11;
        return x;

      case 11:
        _iteratorNormalCompletion13 = true;
        context$1$0.next = 6;
        break;

      case 14:
        context$1$0.next = 20;
        break;

      case 16:
        context$1$0.prev = 16;
        context$1$0.t0 = context$1$0["catch"](4);
        _didIteratorError13 = true;
        _iteratorError13 = context$1$0.t0;

      case 20:
        context$1$0.prev = 20;
        context$1$0.prev = 21;

        if (!_iteratorNormalCompletion13 && _iterator13["return"]) {
          _iterator13["return"]();
        }

      case 23:
        context$1$0.prev = 23;

        if (!_didIteratorError13) {
          context$1$0.next = 26;
          break;
        }

        throw _iteratorError13;

      case 26:
        return context$1$0.finish(23);

      case 27:
        return context$1$0.finish(20);

      case 28:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[8], this, [[4, 16, 20, 28], [21,, 23, 27]]);
}

function filterfalse(predicate, it) {
  return regeneratorRuntime.wrap(function filterfalse$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        if (!predicate) {
          predicate = Boolean;
        }
        return context$1$0.delegateYield(filter(function (x) {
          return !predicate(x);
        }, it), "t0", 2);

      case 2:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[9], this);
}

function map(f) {
  for (var _len2 = arguments.length, xss = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    xss[_key2 - 1] = arguments[_key2];
  }

  var _iteratorNormalCompletion14, _didIteratorError14, _iteratorError14, _iterator14, _step14, xs;

  return regeneratorRuntime.wrap(function map$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        _iteratorNormalCompletion14 = true;
        _didIteratorError14 = false;
        _iteratorError14 = undefined;
        context$1$0.prev = 3;
        _iterator14 = zip.apply(undefined, xss)[Symbol.iterator]();

      case 5:
        if (_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done) {
          context$1$0.next = 12;
          break;
        }

        xs = _step14.value;
        context$1$0.next = 9;
        return f.apply(undefined, _toConsumableArray(xs));

      case 9:
        _iteratorNormalCompletion14 = true;
        context$1$0.next = 5;
        break;

      case 12:
        context$1$0.next = 18;
        break;

      case 14:
        context$1$0.prev = 14;
        context$1$0.t0 = context$1$0["catch"](3);
        _didIteratorError14 = true;
        _iteratorError14 = context$1$0.t0;

      case 18:
        context$1$0.prev = 18;
        context$1$0.prev = 19;

        if (!_iteratorNormalCompletion14 && _iterator14["return"]) {
          _iterator14["return"]();
        }

      case 21:
        context$1$0.prev = 21;

        if (!_didIteratorError14) {
          context$1$0.next = 24;
          break;
        }

        throw _iteratorError14;

      case 24:
        return context$1$0.finish(21);

      case 25:
        return context$1$0.finish(18);

      case 26:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[10], this, [[3, 14, 18, 26], [19,, 21, 25]]);
}

function range(start, stop) {
  var step = arguments[2] === undefined ? 1 : arguments[2];

  var _iteratorNormalCompletion15, _didIteratorError15, _iteratorError15, _iterator15, _step15, i;

  return regeneratorRuntime.wrap(function range$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        if (stop === undefined) {
          stop = start;
          start = 0;
        }
        _iteratorNormalCompletion15 = true;
        _didIteratorError15 = false;
        _iteratorError15 = undefined;
        context$1$0.prev = 4;
        _iterator15 = count(start, step)[Symbol.iterator]();

      case 6:
        if (_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done) {
          context$1$0.next = 15;
          break;
        }

        i = _step15.value;

        if (!(stop !== null && i >= stop)) {
          context$1$0.next = 10;
          break;
        }

        return context$1$0.abrupt("return");

      case 10:
        context$1$0.next = 12;
        return i;

      case 12:
        _iteratorNormalCompletion15 = true;
        context$1$0.next = 6;
        break;

      case 15:
        context$1$0.next = 21;
        break;

      case 17:
        context$1$0.prev = 17;
        context$1$0.t0 = context$1$0["catch"](4);
        _didIteratorError15 = true;
        _iteratorError15 = context$1$0.t0;

      case 21:
        context$1$0.prev = 21;
        context$1$0.prev = 22;

        if (!_iteratorNormalCompletion15 && _iterator15["return"]) {
          _iterator15["return"]();
        }

      case 24:
        context$1$0.prev = 24;

        if (!_didIteratorError15) {
          context$1$0.next = 27;
          break;
        }

        throw _iteratorError15;

      case 27:
        return context$1$0.finish(24);

      case 28:
        return context$1$0.finish(21);

      case 29:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[11], this, [[4, 17, 21, 29], [22,, 24, 28]]);
}

function reduce(f, xs, init) {
  var it = xs[Symbol.iterator] ? xs[Symbol.iterator]() : xs;
  var acc;
  if (init !== undefined) {
    acc = init;
  } else {
    acc = it.next().value;
  }
  if (acc === undefined) {
    return;
  }
  var _iteratorNormalCompletion16 = true;
  var _didIteratorError16 = false;
  var _iteratorError16 = undefined;

  try {
    for (var _iterator16 = it[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
      var x = _step16.value;

      acc = f(acc, x);
    }
  } catch (err) {
    _didIteratorError16 = true;
    _iteratorError16 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion16 && _iterator16["return"]) {
        _iterator16["return"]();
      }
    } finally {
      if (_didIteratorError16) {
        throw _iteratorError16;
      }
    }
  }

  return acc;
}

function repeat(elem, n) {
  return regeneratorRuntime.wrap(function repeat$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        if (!true) {
          context$1$0.next = 7;
          break;
        }

        if (!(n !== undefined && n-- === 0)) {
          context$1$0.next = 3;
          break;
        }

        return context$1$0.abrupt("break", 7);

      case 3:
        context$1$0.next = 5;
        return elem;

      case 5:
        context$1$0.next = 0;
        break;

      case 7:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[12], this);
}

function slice(it, start, stop) {
  var step = arguments[3] === undefined ? 1 : arguments[3];

  var is, nexti, _iteratorNormalCompletion17, _didIteratorError17, _iteratorError17, _iterator17, _step17, _step17$value, i, x;

  return regeneratorRuntime.wrap(function slice$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        if (stop === undefined) {
          stop = start;
          start = 0;
        }
        is = range(start, stop, step);
        nexti = is.next().value;
        _iteratorNormalCompletion17 = true;
        _didIteratorError17 = false;
        _iteratorError17 = undefined;
        context$1$0.prev = 6;
        _iterator17 = enumerate(it)[Symbol.iterator]();

      case 8:
        if (_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done) {
          context$1$0.next = 21;
          break;
        }

        _step17$value = _slicedToArray(_step17.value, 2);
        i = _step17$value[0];
        x = _step17$value[1];

        if (!(nexti === undefined)) {
          context$1$0.next = 14;
          break;
        }

        return context$1$0.abrupt("break", 21);

      case 14:
        if (!(i === nexti)) {
          context$1$0.next = 18;
          break;
        }

        context$1$0.next = 17;
        return x;

      case 17:
        nexti = is.next().value;

      case 18:
        _iteratorNormalCompletion17 = true;
        context$1$0.next = 8;
        break;

      case 21:
        context$1$0.next = 27;
        break;

      case 23:
        context$1$0.prev = 23;
        context$1$0.t0 = context$1$0["catch"](6);
        _didIteratorError17 = true;
        _iteratorError17 = context$1$0.t0;

      case 27:
        context$1$0.prev = 27;
        context$1$0.prev = 28;

        if (!_iteratorNormalCompletion17 && _iterator17["return"]) {
          _iterator17["return"]();
        }

      case 30:
        context$1$0.prev = 30;

        if (!_didIteratorError17) {
          context$1$0.next = 33;
          break;
        }

        throw _iteratorError17;

      case 33:
        return context$1$0.finish(30);

      case 34:
        return context$1$0.finish(27);

      case 35:
        return context$1$0.abrupt("return");

      case 36:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[13], this, [[6, 23, 27, 35], [28,, 30, 34]]);
}

function starmap(f, it) {
  var _iteratorNormalCompletion18, _didIteratorError18, _iteratorError18, _iterator18, _step18, xs;

  return regeneratorRuntime.wrap(function starmap$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        _iteratorNormalCompletion18 = true;
        _didIteratorError18 = false;
        _iteratorError18 = undefined;
        context$1$0.prev = 3;
        _iterator18 = it[Symbol.iterator]();

      case 5:
        if (_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done) {
          context$1$0.next = 12;
          break;
        }

        xs = _step18.value;
        context$1$0.next = 9;
        return f.apply(undefined, _toConsumableArray(xs));

      case 9:
        _iteratorNormalCompletion18 = true;
        context$1$0.next = 5;
        break;

      case 12:
        context$1$0.next = 18;
        break;

      case 14:
        context$1$0.prev = 14;
        context$1$0.t0 = context$1$0["catch"](3);
        _didIteratorError18 = true;
        _iteratorError18 = context$1$0.t0;

      case 18:
        context$1$0.prev = 18;
        context$1$0.prev = 19;

        if (!_iteratorNormalCompletion18 && _iterator18["return"]) {
          _iterator18["return"]();
        }

      case 21:
        context$1$0.prev = 21;

        if (!_didIteratorError18) {
          context$1$0.next = 24;
          break;
        }

        throw _iteratorError18;

      case 24:
        return context$1$0.finish(21);

      case 25:
        return context$1$0.finish(18);

      case 26:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[14], this, [[3, 14, 18, 26], [19,, 21, 25]]);
}

function takewhile(predicate, it) {
  var _iteratorNormalCompletion19, _didIteratorError19, _iteratorError19, _iterator19, _step19, x;

  return regeneratorRuntime.wrap(function takewhile$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        _iteratorNormalCompletion19 = true;
        _didIteratorError19 = false;
        _iteratorError19 = undefined;
        context$1$0.prev = 3;
        _iterator19 = it[Symbol.iterator]();

      case 5:
        if (_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done) {
          context$1$0.next = 14;
          break;
        }

        x = _step19.value;

        if (predicate(x)) {
          context$1$0.next = 9;
          break;
        }

        return context$1$0.abrupt("return");

      case 9:
        context$1$0.next = 11;
        return x;

      case 11:
        _iteratorNormalCompletion19 = true;
        context$1$0.next = 5;
        break;

      case 14:
        context$1$0.next = 20;
        break;

      case 16:
        context$1$0.prev = 16;
        context$1$0.t0 = context$1$0["catch"](3);
        _didIteratorError19 = true;
        _iteratorError19 = context$1$0.t0;

      case 20:
        context$1$0.prev = 20;
        context$1$0.prev = 21;

        if (!_iteratorNormalCompletion19 && _iterator19["return"]) {
          _iterator19["return"]();
        }

      case 23:
        context$1$0.prev = 23;

        if (!_didIteratorError19) {
          context$1$0.next = 26;
          break;
        }

        throw _iteratorError19;

      case 26:
        return context$1$0.finish(23);

      case 27:
        return context$1$0.finish(20);

      case 28:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[15], this, [[3, 16, 20, 28], [21,, 23, 27]]);
}

function zip() {
  for (var _len3 = arguments.length, xss = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    xss[_key3] = arguments[_key3];
  }

  var its, ret;
  return regeneratorRuntime.wrap(function zip$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        its = xss.map(function (xs) {
          return xs[Symbol.iterator] ? xs[Symbol.iterator]() : xs;
        });

      case 1:
        if (!its) {
          context$1$0.next = 11;
          break;
        }

        ret = its.map(function (it) {
          return it.next().value;
        });

        if (!all(ret, function (x) {
          return x !== undefined;
        })) {
          context$1$0.next = 8;
          break;
        }

        context$1$0.next = 6;
        return ret;

      case 6:
        context$1$0.next = 9;
        break;

      case 8:
        return context$1$0.abrupt("return");

      case 9:
        context$1$0.next = 1;
        break;

      case 11:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[16], this);
}

function add(x, y) {
  return x + y;
}

//# sourceMappingURL=itoolz.js.map