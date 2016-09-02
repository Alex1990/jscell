/*!
 *  _   _                
 * | | | |               
 * | |_| |__   ___ _ __  
 * | __| '_ \ / _ \ '_ \ 
 * | |_| | | |  __/ | | |
 *  \__|_| |_|\___|_| |_|
 *
 * A promiseA+ implementation for learning
 *
 * Specification: https://promisesaplus.com/
 * Tests: https://github.com/promises-aplus/promises-tests
 */

var arraySlice = Array.prototype.slice;
var isType = function (type) {
  return function (o) {
    return  Object.prototype.toString.call(o) === '[object ' + type + ']';
  };
};
var isFunction = isType('Function');
var isObject = isType('Object');

function Resolve (promise, x) {
  if (promise === x) {
    promise.reject(new TypeError());
  } else {
    if (x instanceof Promise) {
      x.then(function (value) {
        promise.resolve(value);
      }, function (reason) {
        promise.reject(reason);
      });
    } else if (isFunction(x) || isObject(x)) {
      var then;
      try {
        then = x.then;
      } catch (e) {
        promise.reject(e);
      }
      if (isFunction(then)) {
        var called = false;
        var resolvePromise = function (y) {
          if (!called) {
            Resolve(promise, y);
            called = true;
          }
        };
        var rejectPromise = function (r) {
          if (!called) {
            promise.reject(r);
            called = true;
          }
        };
        try {
          then.call(x, resolvePromise, rejectPromise);
        } catch (e) {
          if (!called) {
            promise.reject(e);
          }
        }
      } else {
        promise.resolve(x);
      }
    } else {
      promise.resolve(x);
    }
  }
};

function APromise(callback) {
  this.state = 'pending';
  this.resolves = [];
  this.rejects = [];
  callback && callback(this.resolve.bind(this), this.reject.bind(this));
}

APromise.prototype.resolve = function (value) {
  if (this.state === 'pending') {
    this.value = value;
    this.state = 'fulfilled';
    for (var i = 0; i < this.resolves.length; i++) {
      var fn = this.resolves[i];
      fn(value);
    }
  }
};

APromise.prototype.reject = function (reason) {
  if (this.state === 'pending') {
    this.reason = reason; 
    this.state = 'rejected';
    for (var i = 0; i < this.rejects.length; i++) {
      var fn = this.rejects[i];
      fn(reason);
    }
  }
};

APromise.prototype.then = function (resolve, reject) {
  var newPromise = new APromise();
  var resolvePromise = function (value) {
    setTimeout(function () {
      if (isFunction(resolve)) {
        try {
          Resolve(newPromise, resolve(value));
        } catch (e) {
          newPromise.reject(e);
        }
      } else {
        newPromise.resolve(value);
      }
    }, 0);
  };
  var rejectPromise = function (reason) {
    setTimeout(function () {
      if (isFunction(reject)) {
        try {
          Resolve(newPromise, reject(reason));
        } catch (e) {
          newPromise.reject(e);
        }
      } else {
        newPromise.reject(reason);
      }
    }, 0);
  };

  if (this.state === 'fulfilled') {
    resolvePromise(this.value);
  } else if (this.state === 'rejected') {
    rejectPromise(this.reason);
  } else {
    this.resolves.push(resolvePromise);
    this.rejects.push(rejectPromise);
  }

  return newPromise;
};

module.exports = APromise;
