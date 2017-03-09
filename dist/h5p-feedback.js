/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

var _App = __webpack_require__(5);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Feedback = function (_H5P$EventDispatcher) {
  _inherits(Feedback, _H5P$EventDispatcher);

  /**
   * @constructor
   *
   * @param {object} config
   * @param {string} contentId
   * @param {object} contentData
   */
  function Feedback(config, contentId) {
    var contentData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Feedback);

    var _this = _possibleConstructorReturn(this, (Feedback.__proto__ || Object.getPrototypeOf(Feedback)).call(this));

    var data = {
      message: config.title,
      scores: [{
        title: 'Very Satisfied',
        cls: 'feedback-score-4'
      }, {
        title: 'Satisfied',
        cls: 'feedback-score-3'
      }, {
        title: 'Neutral',
        cls: 'feedback-score-2'
      }, {
        title: 'Unsatisfied',
        cls: 'feedback-score-1'
      }]
    };

    /**
     * Attach library to wrapper
     *
     * @param {jQuery} $wrapper
     * @public
     */
    _this.attach = function ($wrapper) {
      var element = document.createElement('div');
      element.id = "h5p-feedback-content";
      $wrapper.get(0).appendChild(element);
      _this.renderViewTo('#' + element.id);
    };

    /**
     * Renders the view to a element
     *
     * @param {string} el
     * @private
     */
    _this.renderViewTo = function (el) {
      _this.viewModel = new _vue2.default(_extends({}, _App2.default, { data: data, el: el }));
    };
    return _this;
  }

  return Feedback;
}(H5P.EventDispatcher);

exports.default = Feedback;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Vue.js v2.2.1
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
/*  */

/**
 * Convert a value to a string that is actually rendered.
 */
function _toString(val) {
  return val == null ? '' : (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' ? JSON.stringify(val, null, 2) : String(val);
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber(val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n;
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? function (val) {
    return map[val.toLowerCase()];
  } : function (val) {
    return map[val];
  };
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Remove an item from an array
 */
function remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

/**
 * Check if value is primitive
 */
function isPrimitive(value) {
  return typeof value === 'string' || typeof value === 'number';
}

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
});

/**
 * Simple bind, faster than native
 */
function bind(fn, ctx) {
  function boundFn(a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn;
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret;
}

/**
 * Mix properties into target object.
 */
function extend(to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to;
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject(obj) {
  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';
function isPlainObject(obj) {
  return toString.call(obj) === OBJECT_STRING;
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject(arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res;
}

/**
 * Perform no operation.
 */
function noop() {}

/**
 * Always return false.
 */
var no = function no() {
  return false;
};

/**
 * Return same value
 */
var identity = function identity(_) {
  return _;
};

/**
 * Generate a static keys string from compiler modules.
 */

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual(a, b) {
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    return JSON.stringify(a) === JSON.stringify(b);
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}

function looseIndexOf(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) {
      return i;
    }
  }
  return -1;
}

/**
 * Ensure a function is called only once.
 */
function once(fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn();
    }
  };
}

/*  */

var config = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: process.env.NODE_ENV !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Whether to record perf
   */
  performance: process.env.NODE_ENV !== 'production',

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * List of asset types that a component can own.
   */
  _assetTypes: ['component', 'directive', 'filter'],

  /**
   * List of lifecycle hooks.
   */
  _lifecycleHooks: ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated'],

  /**
   * Max circular updates allowed in a scheduler flush cycle.
   */
  _maxUpdateCount: 100
};

/*  */
/* globals MutationObserver */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function isServerRendering() {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer;
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative(Ctor) {
  return (/native code/.test(Ctor.toString())
  );
}

var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

/**
 * Defer a task to execute it asynchronously.
 */
var nextTick = function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;

  function nextTickHandler() {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // the nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore if */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    var logError = function logError(err) {
      console.error(err);
    };
    timerFunc = function timerFunc() {
      p.then(nextTickHandler).catch(logError);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) {
        setTimeout(noop);
      }
    };
  } else if (typeof MutationObserver !== 'undefined' && (isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]')) {
    // use MutationObserver where native Promise is not available,
    // e.g. PhantomJS IE11, iOS7, Android 4.4
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function timerFunc() {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
  } else {
    // fallback to setTimeout
    /* istanbul ignore next */
    timerFunc = function timerFunc() {
      setTimeout(nextTickHandler, 0);
    };
  }

  return function queueNextTick(cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        cb.call(ctx);
      }
      if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve) {
        _resolve = resolve;
      });
    }
  };
}();

var _Set;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = function () {
    function Set() {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has(key) {
      return this.set[key] === true;
    };
    Set.prototype.add = function add(key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear() {
      this.set = Object.create(null);
    };

    return Set;
  }();
}

var perf;

if (process.env.NODE_ENV !== 'production') {
  perf = inBrowser && window.performance;
  if (perf && (!perf.mark || !perf.measure)) {
    perf = undefined;
  }
}

/*  */

var emptyObject = Object.freeze({});

/**
 * Check if a string starts with $ or _
 */
function isReserved(str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}

/**
 * Define a property.
 */
function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath(path) {
  if (bailRE.test(path)) {
    return;
  } else {
    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) {
          return;
        }
        obj = obj[segments[i]];
      }
      return obj;
    };
  }
}

var warn = noop;
var tip = noop;
var formatComponentName;

if (process.env.NODE_ENV !== 'production') {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function classify(str) {
    return str.replace(classifyRE, function (c) {
      return c.toUpperCase();
    }).replace(/[-_]/g, '');
  };

  warn = function warn(msg, vm) {
    if (hasConsole && !config.silent) {
      console.error("[Vue warn]: " + msg + " " + (vm ? formatLocation(formatComponentName(vm)) : ''));
    }
  };

  tip = function tip(msg, vm) {
    if (hasConsole && !config.silent) {
      console.warn("[Vue tip]: " + msg + " " + (vm ? formatLocation(formatComponentName(vm)) : ''));
    }
  };

  formatComponentName = function formatComponentName(vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>';
    }
    var name = vm._isVue ? vm.$options.name || vm.$options._componentTag : vm.name;

    var file = vm._isVue && vm.$options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : '');
  };

  var formatLocation = function formatLocation(str) {
    if (str === "<Anonymous>") {
      str += " - use the \"name\" option for better debugging messages.";
    }
    return "\n(found in " + str + ")";
  };
}

/*  */

var uid$1 = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep() {
  this.id = uid$1++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub(sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub(sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend() {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify() {
  // stablize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget(_target) {
  if (Dep.target) {
    targetStack.push(Dep.target);
  }
  Dep.target = _target;
}

function popTarget() {
  Dep.target = targetStack.pop();
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator() {
    var arguments$1 = arguments;

    // avoid leaking arguments:
    // http://jsperf.com/closure-with-arguments
    var i = arguments.length;
    var args = new Array(i);
    while (i--) {
      args[i] = arguments$1[i];
    }
    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
        inserted = args;
        break;
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2);
        break;
    }
    if (inserted) {
      ob.observeArray(inserted);
    }
    // notify change
    ob.dep.notify();
    return result;
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true,
  isSettingProps: false
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer(value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto ? protoAugment : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk(obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray(items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment(target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe(value, asRootData) {
  if (!isObject(value)) {
    return;
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (observerState.shouldConvert && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob;
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1(obj, key, val, customSetter) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return;
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (Array.isArray(value)) {
          dependArray(value);
        }
      }
      return value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || newVal !== newVal && value !== value) {
        return;
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set(obj, key, val) {
  if (Array.isArray(obj)) {
    obj.length = Math.max(obj.length, key);
    obj.splice(key, 1, val);
    return val;
  }
  if (hasOwn(obj, key)) {
    obj[key] = val;
    return;
  }
  var ob = obj.__ob__;
  if (obj._isVue || ob && ob.vmCount) {
    process.env.NODE_ENV !== 'production' && warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
    return;
  }
  if (!ob) {
    obj[key] = val;
    return;
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val;
}

/**
 * Delete a property and trigger change if necessary.
 */
function del(obj, key) {
  if (Array.isArray(obj)) {
    obj.splice(key, 1);
    return;
  }
  var ob = obj.__ob__;
  if (obj._isVue || ob && ob.vmCount) {
    process.env.NODE_ENV !== 'production' && warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
    return;
  }
  if (!hasOwn(obj, key)) {
    return;
  }
  delete obj[key];
  if (!ob) {
    return;
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray(value) {
  for (var e = void 0, i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (process.env.NODE_ENV !== 'production') {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
    }
    return defaultStrat(parent, child);
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData(to, from) {
  if (!from) {
    return to;
  }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to;
}

/**
 * Data
 */
strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal;
    }
    if (typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
      return parentVal;
    }
    if (!parentVal) {
      return childVal;
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn() {
      return mergeData(childVal.call(this), parentVal.call(this));
    };
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn() {
      // instance merge
      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook(parentVal, childVal) {
  return childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
}

config._lifecycleHooks.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets(parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal ? extend(res, childVal) : res;
}

config._assetTypes.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal) {
  /* istanbul ignore if */
  if (!childVal) {
    return Object.create(parentVal || null);
  }
  if (!parentVal) {
    return childVal;
  }
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent ? parent.concat(child) : [child];
  }
  return ret;
};

/**
 * Other object hashes.
 */
strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
  if (!childVal) {
    return Object.create(parentVal || null);
  }
  if (!parentVal) {
    return childVal;
  }
  var ret = Object.create(null);
  extend(ret, parentVal);
  extend(ret, childVal);
  return ret;
};

/**
 * Default strategy.
 */
var defaultStrat = function defaultStrat(parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};

/**
 * Validate component names
 */
function checkComponents(options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps(options) {
  var props = options.props;
  if (!props) {
    return;
  }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (process.env.NODE_ENV !== 'production') {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val) ? val : { type: val };
    }
  }
  options.props = res;
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives(options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions(parent, child, vm) {
  if (process.env.NODE_ENV !== 'production') {
    checkComponents(child);
  }
  normalizeProps(child);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = typeof extendsFrom === 'function' ? mergeOptions(parent, extendsFrom.options, vm) : mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      var mixin = child.mixins[i];
      if (mixin.prototype instanceof Vue$2) {
        mixin = mixin.options;
      }
      parent = mergeOptions(parent, mixin, vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField(key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options;
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset(options, type, id, warnMissing) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return;
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) {
    return assets[id];
  }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) {
    return assets[camelizedId];
  }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) {
    return assets[PascalCaseId];
  }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
  }
  return res;
}

/*  */

function validateProp(key, propOptions, propsData, vm) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  if (process.env.NODE_ENV !== 'production') {
    assertProp(prop, key, value, vm, absent);
  }
  return value;
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue(vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined;
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (process.env.NODE_ENV !== 'production' && isObject(def)) {
    warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
    return vm._props[key];
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
}

/**
 * Assert whether a prop is valid.
 */
function assertProp(prop, name, value, vm, absent) {
  if (prop.required && absent) {
    warn('Missing required prop: "' + name + '"', vm);
    return;
  }
  if (value == null && !prop.required) {
    return;
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn('Invalid prop: type check failed for prop "' + name + '".' + ' Expected ' + expectedTypes.map(capitalize).join(', ') + ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.', vm);
    return;
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
    }
  }
}

/**
 * Assert the type of a value
 */
function assertType(value, type) {
  var valid;
  var expectedType = getType(type);
  if (expectedType === 'String') {
    valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === (expectedType = 'string');
  } else if (expectedType === 'Number') {
    valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === (expectedType = 'number');
  } else if (expectedType === 'Boolean') {
    valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === (expectedType = 'boolean');
  } else if (expectedType === 'Function') {
    valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === (expectedType = 'function');
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  };
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType(fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match && match[1];
}

function isType(type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type);
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true;
    }
  }
  /* istanbul ignore next */
  return false;
}

function handleError(err, vm, type) {
  if (config.errorHandler) {
    config.errorHandler.call(null, err, vm, type);
  } else {
    if (process.env.NODE_ENV !== 'production') {
      warn("Error in " + type + ":", vm);
    }
    /* istanbul ignore else */
    if (inBrowser && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err;
    }
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (process.env.NODE_ENV !== 'production') {
  var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require' // for Webpack/Browserify
  );

  var warnNonPresent = function warnNonPresent(target, key) {
    warn("Property or method \"" + key + "\" is not defined on the instance but " + "referenced during render. Make sure to declare reactive data " + "properties in the data option.", target);
  };

  var hasProxy = typeof Proxy !== 'undefined' && Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set(target, key, value) {
        if (isBuiltInModifier(key)) {
          warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
          return false;
        } else {
          target[key] = value;
          return true;
        }
      }
    });
  }

  var hasHandler = {
    has: function has(target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed;
    }
  };

  var getHandler = {
    get: function get(target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key];
    }
  };

  initProxy = function initProxy(vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var VNode = function VNode(tag, data, children, text, elm, context, componentOptions) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.functionalContext = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
};

var prototypeAccessors = { child: {} };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance;
};

Object.defineProperties(VNode.prototype, prototypeAccessors);

var createEmptyVNode = function createEmptyVNode() {
  var node = new VNode();
  node.text = '';
  node.isComment = true;
  return node;
};

function createTextVNode(val) {
  return new VNode(undefined, undefined, undefined, String(val));
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode(vnode) {
  var cloned = new VNode(vnode.tag, vnode.data, vnode.children, vnode.text, vnode.elm, vnode.context, vnode.componentOptions);
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isCloned = true;
  return cloned;
}

function cloneVNodes(vnodes) {
  var res = new Array(vnodes.length);
  for (var i = 0; i < vnodes.length; i++) {
    res[i] = cloneVNode(vnodes[i]);
  }
  return res;
}

/*  */

var normalizeEvent = cached(function (name) {
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture
  };
});

function createFnInvoker(fns) {
  function invoker() {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      for (var i = 0; i < fns.length; i++) {
        fns[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments);
    }
  }
  invoker.fns = fns;
  return invoker;
}

function updateListeners(on, oldOn, add, remove$$1, vm) {
  var name, cur, old, event;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (!cur) {
      process.env.NODE_ENV !== 'production' && warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
    } else if (!old) {
      if (!cur.fns) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (!on[name]) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook(def, hookKey, hook) {
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook() {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (!oldHook) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (oldHook.fns && oldHook.merged) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren(children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children);
    }
  }
  return children;
}

// 2. When the children contains constrcuts that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren(children) {
  return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
}

function normalizeArrayChildren(children, nestedIndex) {
  var res = [];
  var i, c, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (c == null || typeof c === 'boolean') {
      continue;
    }
    last = res[res.length - 1];
    //  nested
    if (Array.isArray(c)) {
      res.push.apply(res, normalizeArrayChildren(c, (nestedIndex || '') + "_" + i));
    } else if (isPrimitive(c)) {
      if (last && last.text) {
        last.text += String(c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (c.text && last && last.text) {
        res[res.length - 1] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (c.tag && c.key == null && nestedIndex != null) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res;
}

/*  */

function getFirstComponentChild(children) {
  return children && children.filter(function (c) {
    return c && c.componentOptions;
  })[0];
}

/*  */

function initEvents(vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add(event, fn, once$$1) {
  if (once$$1) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1(event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners(vm, listeners, oldListeners) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
}

function eventsMixin(Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm;
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on() {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm;
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm;
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm;
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm;
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break;
      }
    }
    return vm;
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        cbs[i].apply(vm, args);
      }
    }
    return vm;
  };
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots(children, context) {
  var slots = {};
  if (!children) {
    return slots;
  }
  var defaultSlot = [];
  var name, child;
  for (var i = 0, l = children.length; i < l; i++) {
    child = children[i];
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) && child.data && (name = child.data.slot)) {
      var slot = slots[name] || (slots[name] = []);
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }
  // ignore single whitespace
  if (defaultSlot.length && !(defaultSlot.length === 1 && (defaultSlot[0].text === ' ' || defaultSlot[0].isComment))) {
    slots.default = defaultSlot;
  }
  return slots;
}

function resolveScopedSlots(fns) {
  var res = {};
  for (var i = 0; i < fns.length; i++) {
    res[fns[i][0]] = fns[i][1];
  }
  return res;
}

/*  */

var activeInstance = null;

function initLifecycle(vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin(Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */
      , vm.$options._parentElm, vm.$options._refElm);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return;
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
  };
}

function mountComponent(vm, el, hydrating) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (process.env.NODE_ENV !== 'production') {
      /* istanbul ignore if */
      if (vm.$options.template && vm.$options.template.charAt(0) !== '#') {
        warn('You are using the runtime-only build of Vue where the template ' + 'option is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
      } else {
        warn('Failed to mount component: template or render function not defined.', vm);
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && config.performance && perf) {
    updateComponent = function updateComponent() {
      var name = vm._name;
      var startTag = "start " + name;
      var endTag = "end " + name;
      perf.mark(startTag);
      var vnode = vm._render();
      perf.mark(endTag);
      perf.measure(name + " render", startTag, endTag);
      perf.mark(startTag);
      vm._update(vnode, hydrating);
      perf.mark(endTag);
      perf.measure(name + " patch", startTag, endTag);
    };
  } else {
    updateComponent = function updateComponent() {
      vm._update(vm._render(), hydrating);
    };
  }

  vm._watcher = new Watcher(vm, updateComponent, noop);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm;
}

function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(renderChildren || // has new static slots
  vm.$options._renderChildren || // has old static slots
  parentVnode.data.scopedSlots || // has new scoped slots
  vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render
  if (vm._vnode) {
    // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    if (process.env.NODE_ENV !== 'production') {
      observerState.isSettingProps = true;
    }
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    if (process.env.NODE_ENV !== 'production') {
      observerState.isSettingProps = false;
    }
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }
}

function isInInactiveTree(vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) {
      return true;
    }
  }
  return false;
}

function activateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return;
    }
  } else if (vm._directInactive) {
    return;
  }
  if (vm._inactive || vm._inactive == null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return;
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook(vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, hook + " hook");
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */

var queue = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState() {
  queue.length = 0;
  has = {};
  if (process.env.NODE_ENV !== 'production') {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue() {
  flushing = true;
  var watcher, id, vm;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) {
    return a.id - b.id;
  });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > config._maxUpdateCount) {
        warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
        break;
      }
    }
  }

  // call updated hooks
  index = queue.length;
  while (index--) {
    watcher = queue[index];
    vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }

  resetSchedulerState();
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher(watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i >= 0 && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(Math.max(i, index) + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher(vm, expOrFn, cb, options) {
  this.vm = vm;
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = process.env.NODE_ENV !== 'production' ? expOrFn.toString() : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      process.env.NODE_ENV !== 'production' && warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
    }
  }
  this.value = this.lazy ? undefined : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get() {
  pushTarget(this);
  var value;
  var vm = this.vm;
  if (this.user) {
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
    }
  } else {
    value = this.getter.call(vm, vm);
  }
  // "touch" every property so they are all tracked as
  // dependencies for deep watching
  if (this.deep) {
    traverse(value);
  }
  popTarget();
  this.cleanupDeps();
  return value;
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep(dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps() {
  var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update() {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run() {
  if (this.active) {
    var value = this.get();
    if (value !== this.value ||
    // Deep watchers and watchers on Object/Arrays should fire even
    // when the value is the same, because the value may
    // have mutated.
    isObject(value) || this.deep) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, "callback for watcher \"" + this.expression + "\"");
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate() {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend() {
  var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown() {
  var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set();
function traverse(val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse(val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if (!isA && !isObject(val) || !Object.isExtensible(val)) {
    return;
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return;
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) {
      _traverse(val[i], seen);
    }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) {
      _traverse(val[keys[i]], seen);
    }
  }
}

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState(vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) {
    initProps(vm, opts.props);
  }
  if (opts.methods) {
    initMethods(vm, opts.methods);
  }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) {
    initComputed(vm, opts.computed);
  }
  if (opts.watch) {
    initWatch(vm, opts.watch);
  }
}

var isReservedProp = { key: 1, ref: 1, slot: 1 };

function initProps(vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function loop(key) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      if (isReservedProp[key]) {
        warn("\"" + key + "\" is a reserved attribute and cannot be used as component prop.", vm);
      }
      defineReactive$$1(props, key, value, function () {
        if (vm.$parent && !observerState.isSettingProps) {
          warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
        }
      });
    } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) {
    loop(key);
  }observerState.shouldConvert = true;
}

function initData(vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function' ? data.call(vm) : data || {};
  if (!isPlainObject(data)) {
    data = {};
    process.env.NODE_ENV !== 'production' && warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var i = keys.length;
  while (i--) {
    if (props && hasOwn(props, keys[i])) {
      process.env.NODE_ENV !== 'production' && warn("The data property \"" + keys[i] + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
    } else if (!isReserved(keys[i])) {
      proxy(vm, "_data", keys[i]);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

var computedWatcherOptions = { lazy: true };

function initComputed(vm, computed) {
  var watchers = vm._computedWatchers = Object.create(null);

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    // create internal watcher for the computed property.
    watchers[key] = new Watcher(vm, getter, noop, computedWatcherOptions);

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    }
  }
}

function defineComputed(target, key, userDef) {
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = createComputedGetter(key);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get ? userDef.cache !== false ? createComputedGetter(key) : userDef.get : noop;
    sharedPropertyDefinition.set = userDef.set ? userDef.set : noop;
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter(key) {
  return function computedGetter() {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value;
    }
  };
}

function initMethods(vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
    if (process.env.NODE_ENV !== 'production') {
      if (methods[key] == null) {
        warn("method \"" + key + "\" has an undefined value in the component definition. " + "Did you reference the function correctly?", vm);
      }
      if (props && hasOwn(props, key)) {
        warn("method \"" + key + "\" has already been defined as a prop.", vm);
      }
    }
  }
}

function initWatch(vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher(vm, key, handler) {
  var options;
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  vm.$watch(key, handler, options);
}

function stateMixin(Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () {
    return this._data;
  };
  var propsDef = {};
  propsDef.get = function () {
    return this._props;
  };
  if (process.env.NODE_ENV !== 'production') {
    dataDef.set = function (newData) {
      warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (expOrFn, cb, options) {
    var vm = this;
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn() {
      watcher.teardown();
    };
  };
}

/*  */

var hooks = { init: init, prepatch: prepatch, insert: insert, destroy: destroy };
var hooksToMerge = Object.keys(hooks);

function createComponent(Ctor, data, context, children, tag) {
  if (!Ctor) {
    return;
  }

  var baseCtor = context.$options._base;
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  if (typeof Ctor !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      warn("Invalid Component definition: " + String(Ctor), context);
    }
    return;
  }

  // async component
  if (!Ctor.cid) {
    if (Ctor.resolved) {
      Ctor = Ctor.resolved;
    } else {
      Ctor = resolveAsyncComponent(Ctor, baseCtor, function () {
        // it's ok to queue this on every render because
        // $forceUpdate is buffered by the scheduler.
        context.$forceUpdate();
      });
      if (!Ctor) {
        // return nothing if this is indeed an async component
        // wait for the callback to trigger parent update.
        return;
      }
    }
  }

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  data = data || {};

  // transform component v-model data into props & events
  if (data.model) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractProps(data, Ctor);

  // functional component
  if (Ctor.options.functional) {
    return createFunctionalComponent(Ctor, propsData, data, context, children);
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  data.on = data.nativeOn;

  if (Ctor.options.abstract) {
    // abstract components do not keep anything
    // other than props & listeners
    data = {};
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children });
  return vnode;
}

function createFunctionalComponent(Ctor, propsData, data, context, children) {
  var props = {};
  var propOptions = Ctor.options.props;
  if (propOptions) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData);
    }
  }
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var _context = Object.create(context);
  var h = function h(a, b, c, d) {
    return createElement(_context, a, b, c, d, true);
  };
  var vnode = Ctor.options.render.call(null, h, {
    props: props,
    data: data,
    parent: context,
    children: children,
    slots: function slots() {
      return resolveSlots(children, context);
    }
  });
  if (vnode instanceof VNode) {
    vnode.functionalContext = context;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }
  return vnode;
}

function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
parent, // activeInstance in lifecycle state
parentElm, refElm) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (inlineTemplate) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options);
}

function init(vnode, hydrating, parentElm, refElm) {
  if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
    var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance, parentElm, refElm);
    child.$mount(hydrating ? vnode.elm : undefined, hydrating);
  } else if (vnode.data.keepAlive) {
    // kept-alive components, treat as a patch
    var mountedNode = vnode; // work around flow
    prepatch(mountedNode, mountedNode);
  }
}

function prepatch(oldVnode, vnode) {
  var options = vnode.componentOptions;
  var child = vnode.componentInstance = oldVnode.componentInstance;
  updateChildComponent(child, options.propsData, // updated props
  options.listeners, // updated listeners
  vnode, // new parent vnode
  options.children // new children
  );
}

function insert(vnode) {
  if (!vnode.componentInstance._isMounted) {
    vnode.componentInstance._isMounted = true;
    callHook(vnode.componentInstance, 'mounted');
  }
  if (vnode.data.keepAlive) {
    activateChildComponent(vnode.componentInstance, true /* direct */);
  }
}

function destroy(vnode) {
  if (!vnode.componentInstance._isDestroyed) {
    if (!vnode.data.keepAlive) {
      vnode.componentInstance.$destroy();
    } else {
      deactivateChildComponent(vnode.componentInstance, true /* direct */);
    }
  }
}

function resolveAsyncComponent(factory, baseCtor, cb) {
  if (factory.requested) {
    // pool callbacks
    factory.pendingCallbacks.push(cb);
  } else {
    factory.requested = true;
    var cbs = factory.pendingCallbacks = [cb];
    var sync = true;

    var resolve = function resolve(res) {
      if (isObject(res)) {
        res = baseCtor.extend(res);
      }
      // cache resolved
      factory.resolved = res;
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        for (var i = 0, l = cbs.length; i < l; i++) {
          cbs[i](res);
        }
      }
    };

    var reject = function reject(reason) {
      process.env.NODE_ENV !== 'production' && warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));
    };

    var res = factory(resolve, reject);

    // handle promise
    if (res && typeof res.then === 'function' && !factory.resolved) {
      res.then(resolve, reject);
    }

    sync = false;
    // return in case resolved synchronously
    return factory.resolved;
  }
}

function extractProps(data, Ctor) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (!propOptions) {
    return;
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  var domProps = data.domProps;
  if (attrs || props || domProps) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey) || checkProp(res, domProps, key, altKey);
    }
  }
  return res;
}

function checkProp(res, hash, key, altKey, preserve) {
  if (hash) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true;
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true;
    }
  }
  return false;
}

function mergeHooks(data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = hooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1(one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  };
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel(options, data) {
  var prop = options.model && options.model.prop || 'value';
  var event = options.model && options.model.event || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (on[event]) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (alwaysNormalize) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType);
}

function _createElement(context, tag, data, children, normalizationType) {
  if (data && data.__ob__) {
    process.env.NODE_ENV !== 'production' && warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
    return createEmptyVNode();
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode();
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) && typeof children[0] === 'function') {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
    } else if (Ctor = resolveAsset(context.$options, 'components', tag)) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(tag, data, children, undefined, undefined, context);
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (vnode) {
    if (ns) {
      applyNS(vnode, ns);
    }
    return vnode;
  } else {
    return createEmptyVNode();
  }
}

function applyNS(vnode, ns) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    return;
  }
  if (vnode.children) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (child.tag && !child.ns) {
        applyNS(child, ns);
      }
    }
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList(val, render) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  return ret;
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot(name, fallback, props, bindObject) {
  var scopedSlotFn = this.$scopedSlots[name];
  if (scopedSlotFn) {
    // scoped slot
    props = props || {};
    if (bindObject) {
      extend(props, bindObject);
    }
    return scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes && process.env.NODE_ENV !== 'production') {
      slotNodes._rendered && warn("Duplicate presence of slot \"" + name + "\" found in the same render tree " + "- this will likely cause render errors.", this);
      slotNodes._rendered = true;
    }
    return slotNodes || fallback;
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter(id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity;
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 */
function checkKeyCodes(eventKeyCode, key, builtInAlias) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (Array.isArray(keyCodes)) {
    return keyCodes.indexOf(eventKeyCode) === -1;
  } else {
    return keyCodes !== eventKeyCode;
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps(data, tag, value, asProp) {
  if (value) {
    if (!isObject(value)) {
      process.env.NODE_ENV !== 'production' && warn('v-bind without argument expects an Object or Array value', this);
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      for (var key in value) {
        if (key === 'class' || key === 'style') {
          data[key] = value[key];
        } else {
          var type = data.attrs && data.attrs.type;
          var hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
          hash[key] = value[key];
        }
      }
    }
  }
  return data;
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic(index, isInFor) {
  var tree = this._staticTrees[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree) ? cloneVNodes(tree) : cloneVNode(tree);
  }
  // otherwise, render a fresh tree.
  tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(this._renderProxy);
  markStatic(tree, "__static__" + index, false);
  return tree;
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce(tree, index, key) {
  markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
  return tree;
}

function markStatic(tree, key, isOnce) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], key + "_" + i, isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode(node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function initRender(vm) {
  vm.$vnode = null; // the placeholder node in parent tree
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null;
  var parentVnode = vm.$options._parentVnode;
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, false);
  };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, true);
  };
}

function renderMixin(Vue) {
  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this);
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var staticRenderFns = ref.staticRenderFns;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // clone slot nodes on re-renders
      for (var key in vm.$slots) {
        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
      }
    }

    vm.$scopedSlots = _parentVnode && _parentVnode.data.scopedSlots || emptyObject;

    if (staticRenderFns && !vm._staticTrees) {
      vm._staticTrees = [];
    }
    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render function");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        vnode = vm.$options.renderError ? vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e) : vm._vnode;
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
        warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode;
  };

  // internal render helpers.
  // these are exposed on the instance prototype to reduce generated render
  // code size.
  Vue.prototype._o = markOnce;
  Vue.prototype._n = toNumber;
  Vue.prototype._s = _toString;
  Vue.prototype._l = renderList;
  Vue.prototype._t = renderSlot;
  Vue.prototype._q = looseEqual;
  Vue.prototype._i = looseIndexOf;
  Vue.prototype._m = renderStatic;
  Vue.prototype._f = resolveFilter;
  Vue.prototype._k = checkKeyCodes;
  Vue.prototype._b = bindObjectProps;
  Vue.prototype._v = createTextVNode;
  Vue.prototype._e = createEmptyVNode;
  Vue.prototype._u = resolveScopedSlots;
}

/*  */

function initInjections(vm) {
  var provide = vm.$options.provide;
  var inject = vm.$options.inject;
  if (provide) {
    vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
  }
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    // isArray here
    var isArray = Array.isArray(inject);
    var keys = isArray ? inject : hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = isArray ? key : inject[key];
      var source = vm;
      while (source) {
        if (source._provided && source._provided[provideKey]) {
          vm[key] = source._provided[provideKey];
          break;
        }
        source = source.$parent;
      }
    }
  }
}

/*  */

var uid = 0;

function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && perf) {
      perf.mark('init');
    }

    var vm = this;
    // a uid
    vm._uid = uid++;
    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initState(vm);
    initInjections(vm);
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && perf) {
      vm._name = formatComponentName(vm, false);
      perf.mark('init end');
      perf.measure(vm._name + " init", 'init', 'init end');
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent(vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions(Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options;
}

function resolveModifiedOptions(Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) {
        modified = {};
      }
      modified[key] = dedupe(latest[key], sealed[key]);
    }
  }
  return modified;
}

function dedupe(latest, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    for (var i = 0; i < latest.length; i++) {
      if (sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res;
  } else {
    return latest;
  }
}

function Vue$2(options) {
  if (process.env.NODE_ENV !== 'production' && !(this instanceof Vue$2)) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$2);
stateMixin(Vue$2);
eventsMixin(Vue$2);
lifecycleMixin(Vue$2);
renderMixin(Vue$2);

/*  */

function initUse(Vue) {
  Vue.use = function (plugin) {
    /* istanbul ignore if */
    if (plugin.installed) {
      return;
    }
    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    plugin.installed = true;
    return this;
  };
}

/*  */

function initMixin$1(Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
  };
}

/*  */

function initExtend(Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId];
    }

    var name = extendOptions.name || Super.options.name;
    if (process.env.NODE_ENV !== 'production') {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characters and the hyphen, ' + 'and must start with a letter.');
      }
    }

    var Sub = function VueComponent(options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(Super.options, extendOptions);
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    config._assetTypes.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub;
  };
}

function initProps$1(Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1(Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters(Vue) {
  /**
   * Create asset registration methods.
   */
  config._assetTypes.forEach(function (type) {
    Vue[type] = function (id, definition) {
      if (!definition) {
        return this.options[type + 's'][id];
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production') {
          if (type === 'component' && config.isReservedTag(id)) {
            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition;
      }
    };
  });
}

/*  */

var patternTypes = [String, RegExp];

function getComponentName(opts) {
  return opts && (opts.Ctor.options.name || opts.tag);
}

function matches(pattern, name) {
  if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1;
  } else if (pattern instanceof RegExp) {
    return pattern.test(name);
  }
  /* istanbul ignore next */
  return false;
}

function pruneCache(cache, filter) {
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cachedNode);
        cache[key] = null;
      }
    }
  }
}

function pruneCacheEntry(vnode) {
  if (vnode) {
    if (!vnode.componentInstance._inactive) {
      callHook(vnode.componentInstance, 'deactivated');
    }
    vnode.componentInstance.$destroy();
  }
}

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes
  },

  created: function created() {
    this.cache = Object.create(null);
  },

  destroyed: function destroyed() {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache[key]);
    }
  },

  watch: {
    include: function include(val) {
      pruneCache(this.cache, function (name) {
        return matches(val, name);
      });
    },
    exclude: function exclude(val) {
      pruneCache(this.cache, function (name) {
        return !matches(val, name);
      });
    }
  },

  render: function render() {
    var vnode = getFirstComponentChild(this.$slots.default);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      if (name && (this.include && !matches(this.include, name) || this.exclude && matches(this.exclude, name))) {
        return vnode;
      }
      var key = vnode.key == null
      // same constructor may get registered as different local components
      // so cid alone is not enough (#3269)
      ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;
      if (this.cache[key]) {
        vnode.componentInstance = this.cache[key].componentInstance;
      } else {
        this.cache[key] = vnode;
      }
      vnode.data.keepAlive = true;
    }
    return vnode;
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI(Vue) {
  // config
  var configDef = {};
  configDef.get = function () {
    return config;
  };
  if (process.env.NODE_ENV !== 'production') {
    configDef.set = function () {
      warn('Do not replace the Vue.config object, set individual fields instead.');
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  config._assetTypes.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$2);

Object.defineProperty(Vue$2.prototype, '$isServer', {
  get: isServerRendering
});

Vue$2.version = '2.2.1';

/*  */

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select');
var mustUseProp = function mustUseProp(tag, type, attr) {
  return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function isXlink(name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
};

var getXlinkProp = function getXlinkProp(name) {
  return isXlink(name) ? name.slice(6, name.length) : '';
};

var isFalsyAttrValue = function isFalsyAttrValue(val) {
  return val == null || val === false;
};

/*  */

function genClassForVnode(vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (childNode.componentInstance) {
    childNode = childNode.componentInstance._vnode;
    if (childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (parentNode = parentNode.parent) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return genClassFromData(data);
}

function mergeClassData(child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: child.class ? [child.class, parent.class] : parent.class
  };
}

function genClassFromData(data) {
  var dynamicClass = data.class;
  var staticClass = data.staticClass;
  if (staticClass || dynamicClass) {
    return concat(staticClass, stringifyClass(dynamicClass));
  }
  /* istanbul ignore next */
  return '';
}

function concat(a, b) {
  return a ? b ? a + ' ' + b : a : b || '';
}

function stringifyClass(value) {
  var res = '';
  if (!value) {
    return res;
  }
  if (typeof value === 'string') {
    return value;
  }
  if (Array.isArray(value)) {
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (value[i]) {
        if (stringified = stringifyClass(value[i])) {
          res += stringified + ' ';
        }
      }
    }
    return res.slice(0, -1);
  }
  if (isObject(value)) {
    for (var key in value) {
      if (value[key]) {
        res += key + ' ';
      }
    }
    return res.slice(0, -1);
  }
  /* istanbul ignore next */
  return res;
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template');

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

var isReservedTag = function isReservedTag(tag) {
  return isHTMLTag(tag) || isSVG(tag);
};

function getTagNamespace(tag) {
  if (isSVG(tag)) {
    return 'svg';
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math';
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement(tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true;
  }
  if (isReservedTag(tag)) {
    return false;
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag];
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
  } else {
    return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
  }
}

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query(el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + el);
      return document.createElement('div');
    }
    return selected;
  } else {
    return el;
  }
}

/*  */

function createElement$1(tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm;
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm;
}

function createElementNS(namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName);
}

function createTextNode(text) {
  return document.createTextNode(text);
}

function createComment(text) {
  return document.createComment(text);
}

function insertBefore(parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild(node, child) {
  node.removeChild(child);
}

function appendChild(node, child) {
  node.appendChild(child);
}

function parentNode(node) {
  return node.parentNode;
}

function nextSibling(node) {
  return node.nextSibling;
}

function tagName(node) {
  return node.tagName;
}

function setTextContent(node, text) {
  node.textContent = text;
}

function setAttribute(node, key, val) {
  node.setAttribute(key, val);
}

var nodeOps = Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create(_, vnode) {
    registerRef(vnode);
  },
  update: function update(oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy(vnode) {
    registerRef(vnode, true);
  }
};

function registerRef(vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) {
    return;
  }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (Array.isArray(refs[key]) && refs[key].indexOf(ref) < 0) {
        refs[key].push(ref);
      } else {
        refs[key] = [ref];
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *

/*
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks$1 = ['create', 'activate', 'update', 'remove', 'destroy'];

function isUndef(s) {
  return s == null;
}

function isDef(s) {
  return s != null;
}

function sameVnode(vnode1, vnode2) {
  return vnode1.key === vnode2.key && vnode1.tag === vnode2.tag && vnode1.isComment === vnode2.isComment && !vnode1.data === !vnode2.data;
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) {
      map[key] = i;
    }
  }
  return map;
}

function createPatchFunction(backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks$1.length; ++i) {
    cbs[hooks$1[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (modules[j][hooks$1[i]] !== undefined) {
        cbs[hooks$1[i]].push(modules[j][hooks$1[i]]);
      }
    }
  }

  function emptyNodeAt(elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
  }

  function createRmCb(childElm, listeners) {
    function remove$$1() {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1;
  }

  function removeNode(el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (parent) {
      nodeOps.removeChild(parent, el);
    }
  }

  var inPre = 0;
  function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return;
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (process.env.NODE_ENV !== 'production') {
        if (data && data.pre) {
          inPre++;
        }
        if (!inPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) && config.isUnknownElement(tag)) {
          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
        }
      }
      vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (process.env.NODE_ENV !== 'production' && data && data.pre) {
        inPre--;
      }
    } else if (vnode.isComment) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isReactivated) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true;
      }
    }
  }

  function initComponent(vnode, insertedVnodeQueue) {
    if (vnode.data.pendingInsert) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break;
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert(parent, elm, ref) {
    if (parent) {
      if (ref) {
        nodeOps.insertBefore(parent, elm, ref);
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren(vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable(vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag);
  }

  function invokeCreateHooks(vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (i.create) {
        i.create(emptyNode, vnode);
      }
      if (i.insert) {
        insertedVnodeQueue.push(vnode);
      }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope(vnode) {
    var i;
    var ancestor = vnode;
    while (ancestor) {
      if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '');
      }
      ancestor = ancestor.parent;
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) && i !== vnode.context && isDef(i = i.$options._scopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook(vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) {
        i(vnode);
      }
      for (i = 0; i < cbs.destroy.length; ++i) {
        cbs.destroy[i](vnode);
      }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else {
          // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook(vnode, rm) {
    if (rm || isDef(vnode.data)) {
      var listeners = cbs.remove.length + 1;
      if (!rm) {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      } else {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) {
        // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) {
        // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) {
          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
        if (isUndef(idxInOld)) {
          // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if (process.env.NODE_ENV !== 'production' && !elmToMove) {
            warn('It seems there are duplicate keys that is causing an update error. ' + 'Make sure each v-for item has a unique key.');
          }
          if (sameVnode(elmToMove, newStartVnode)) {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          }
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return;
    }
    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (vnode.isStatic && oldVnode.isStatic && vnode.key === oldVnode.key && (vnode.isCloned || vnode.isOnce)) {
      vnode.elm = oldVnode.elm;
      vnode.componentInstance = oldVnode.componentInstance;
      return;
    }
    var i;
    var data = vnode.data;
    var hasData = isDef(data);
    if (hasData && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }
    var elm = vnode.elm = oldVnode.elm;
    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (hasData && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) {
        cbs.update[i](oldVnode, vnode);
      }
      if (isDef(i = data.hook) && isDef(i = i.update)) {
        i(oldVnode, vnode);
      }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) {
          updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
        }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (hasData) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
        i(oldVnode, vnode);
      }
    }
  }

  function invokeInsertHook(vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (initial && vnode.parent) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate(elm, vnode, insertedVnodeQueue) {
    if (process.env.NODE_ENV !== 'production') {
      if (!assertNodeMatch(elm, vnode)) {
        return false;
      }
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) {
        i(vnode, true /* hydrating */);
      }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true;
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          var childrenMatch = true;
          var childNode = elm.firstChild;
          for (var i$1 = 0; i$1 < children.length; i$1++) {
            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
              childrenMatch = false;
              break;
            }
            childNode = childNode.nextSibling;
          }
          // if childNode is not null, it means the actual childNodes list is
          // longer than the virtual children list.
          if (!childrenMatch || childNode) {
            if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined' && !bailed) {
              bailed = true;
              console.warn('Parent: ', elm);
              console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
            }
            return false;
          }
        }
      }
      if (isDef(data)) {
        for (var key in data) {
          if (!isRenderedModule(key)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break;
          }
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true;
  }

  function assertNodeMatch(node, vnode) {
    if (vnode.tag) {
      return vnode.tag.indexOf('vue-component') === 0 || vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3);
    }
  }

  return function patch(oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (!vnode) {
      if (oldVnode) {
        invokeDestroyHook(oldVnode);
      }
      return;
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (!oldVnode) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute('server-rendered')) {
            oldVnode.removeAttribute('server-rendered');
            hydrating = true;
          }
          if (hydrating) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode;
            } else if (process.env.NODE_ENV !== 'production') {
              warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);
        createElm(vnode, insertedVnodeQueue,
        // extremely rare edge case: do not insert if old element is in a
        // leaving transition. Only happens when combining transition +
        // keep-alive + HOCs. (#4590)
        oldElm._leaveCb ? null : parentElm$1, nodeOps.nextSibling(oldElm));

        if (vnode.parent) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          var ancestor = vnode.parent;
          while (ancestor) {
            ancestor.elm = vnode.elm;
            ancestor = ancestor.parent;
          }
          if (isPatchable(vnode)) {
            for (var i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, vnode.parent);
            }
          }
        }

        if (parentElm$1 !== null) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm;
  };
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives(vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives(oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update(oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function callInsert() {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1(dirs, vm) {
  var res = Object.create(null);
  if (!dirs) {
    return res;
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res;
}

function getRawDirName(dir) {
  return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
}

function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
  }
}

var baseModules = [ref, directives];

/*  */

function updateAttrs(oldVnode, vnode) {
  if (!oldVnode.data.attrs && !vnode.data.attrs) {
    return;
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (attrs.__ob__) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  /* istanbul ignore if */
  if (isIE9 && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (attrs[key] == null) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr(el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, key);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass(oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (!data.staticClass && !data.class && (!oldData || !oldData.staticClass && !oldData.class)) {
    return;
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (transitionClass) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function wrapFilter(exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return "_f(\"" + filter + "\")(" + exp + ")";
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return "_f(\"" + name + "\")(" + exp + "," + args;
  }
}

/*  */

/*  */

/**
 * Cross-platform code generation for component v-model
 */

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */

/**
 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
 *
 * for loop possible cases:
 *
 * - test
 * - test[idx]
 * - test[test1[idx]]
 * - test["a"][idx]
 * - xxx.test[a[a].test1[idx]]
 * - test.xxx.a["asa"][test1[idx]]
 *
 */

var str;
var index$1;

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents(on) {
  var event;
  /* istanbul ignore if */
  if (on[RANGE_TOKEN]) {
    // IE input[type=range] only supports `change` event
    event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  if (on[CHECKBOX_RADIO_TOKEN]) {
    // Chrome fires microtasks in between click/change, leads to #4521
    event = isChrome ? 'click' : 'change';
    on[event] = [].concat(on[CHECKBOX_RADIO_TOKEN], on[event] || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function add$1(event, _handler, once, capture) {
  if (once) {
    var oldHandler = _handler;
    var _target = target$1; // save current target element in closure
    _handler = function handler(ev) {
      var res = arguments.length === 1 ? oldHandler(ev) : oldHandler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, _handler, capture, _target);
      }
    };
  }
  target$1.addEventListener(event, _handler, capture);
}

function remove$2(event, handler, capture, _target) {
  (_target || target$1).removeEventListener(event, handler, capture);
}

function updateDOMListeners(oldVnode, vnode) {
  if (!oldVnode.data.on && !vnode.data.on) {
    return;
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps(oldVnode, vnode) {
  if (!oldVnode.data.domProps && !vnode.data.domProps) {
    return;
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (props.__ob__) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (props[key] == null) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) {
        vnode.children.length = 0;
      }
      if (cur === oldProps[key]) {
        continue;
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = cur == null ? '' : String(cur);
      if (shouldUpdateValue(elm, vnode, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue(elm, vnode, checkVal) {
  return !elm.composing && (vnode.tag === 'option' || isDirty(elm, checkVal) || isInputChanged(elm, checkVal));
}

function isDirty(elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is not equal to the updated value
  return document.activeElement !== elm && elm.value !== checkVal;
}

function isInputChanged(elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (modifiers && modifiers.number || elm.type === 'number') {
    return toNumber(value) !== toNumber(newVal);
  }
  if (modifiers && modifiers.trim) {
    return value.trim() !== newVal.trim();
  }
  return value !== newVal;
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res;
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData(data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle ? extend(data.staticStyle, style) : style;
}

// normalize possible array / string values into Object
function normalizeStyleBinding(bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle);
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle);
  }
  return bindingStyle;
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle(vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if (styleData = normalizeStyleData(vnode.data)) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while (parentNode = parentNode.parent) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res;
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function setProp(el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    el.style[normalize(name)] = val;
  }
};

var prefixes = ['Webkit', 'Moz', 'ms'];

var testEl;
var normalize = cached(function (prop) {
  testEl = testEl || document.createElement('div');
  prop = camelize(prop);
  if (prop !== 'filter' && prop in testEl.style) {
    return prop;
  }
  var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < prefixes.length; i++) {
    var prefixed = prefixes[i] + upper;
    if (prefixed in testEl.style) {
      return prefixed;
    }
  }
});

function updateStyle(oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (!data.staticStyle && !data.style && !oldData.staticStyle && !oldData.style) {
    return;
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldVnode.data.staticStyle;
  var oldStyleBinding = oldVnode.data.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  vnode.data.style = style.__ob__ ? extend({}, style) : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (newStyle[name] == null) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) {
        return el.classList.add(c);
      });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) {
        return el.classList.remove(c);
      });
    } else {
      el.classList.remove(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    el.setAttribute('class', cur.trim());
  }
}

/*  */

function resolveTransition(def$$1) {
  if (!def$$1) {
    return;
  }
  /* istanbul ignore else */
  if ((typeof def$$1 === 'undefined' ? 'undefined' : _typeof(def$$1)) === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res;
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1);
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: name + "-enter",
    enterToClass: name + "-enter-to",
    enterActiveClass: name + "-enter-active",
    leaveClass: name + "-leave",
    leaveToClass: name + "-leave-to",
    leaveActiveClass: name + "-leave-active"
  };
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout;

function nextFrame(fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass(el, cls) {
  (el._transitionClasses || (el._transitionClasses = [])).push(cls);
  addClass(el, cls);
}

function removeTransitionClass(el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds(el, expectedType, cb) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) {
    return cb();
  }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function end() {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function onEnd(e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo(el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitioneDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitioneDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }
  var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  };
}

function getTimeout(delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i]);
  }));
}

function toMs(s) {
  return Number(s.slice(0, -1)) * 1000;
}

/*  */

function enter(vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (el._leaveCb) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (!data) {
    return;
  }

  /* istanbul ignore if */
  if (el._enterCb || el.nodeType !== 1) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return;
  }

  var startClass = isAppear && appearClass ? appearClass : enterClass;
  var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
  var toClass = isAppear && appearToClass ? appearToClass : enterToClass;

  var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
  var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
  var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
  var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;

  var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);

  if (process.env.NODE_ENV !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookAgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave(vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (el._enterCb) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (!data) {
    return rm();
  }

  /* istanbul ignore if */
  if (el._leaveCb || el.nodeType !== 1) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookAgumentsLength(leave);

  var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);

  if (process.env.NODE_ENV !== 'production' && explicitLeaveDuration != null) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave() {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return;
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration(val, name, vnode) {
  if (typeof val !== 'number') {
    warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + JSON.stringify(val) + ".", vnode.context);
  } else if (isNaN(val)) {
    warn("<transition> explicit " + name + " duration is NaN - " + 'the duration expression might be incorrect.', vnode.context);
  }
}

function isValidDuration(val) {
  return typeof val === 'number' && !isNaN(val);
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookAgumentsLength(fn) {
  if (!fn) {
    return false;
  }
  var invokerFns = fn.fns;
  if (invokerFns) {
    // invoker
    return getHookAgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
  } else {
    return (fn._length || fn.length) > 1;
  }
}

function _enter(_, vnode) {
  if (!vnode.data.show) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1(vnode, rm) {
    /* istanbul ignore else */
    if (!vnode.data.show) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [attrs, klass, events, domProps, style, transition];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var model$1 = {
  inserted: function inserted(el, binding, vnode) {
    if (vnode.tag === 'select') {
      var cb = function cb() {
        setSelected(el, binding, vnode.context);
      };
      cb();
      /* istanbul ignore if */
      if (isIE || isEdge) {
        setTimeout(cb, 0);
      }
    } else if (vnode.tag === 'textarea' || el.type === 'text') {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated(el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var needReset = el.multiple ? binding.value.some(function (v) {
        return hasNoMatchingOption(v, el.options);
      }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
      if (needReset) {
        trigger(el, 'change');
      }
    }
  }
};

function setSelected(el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    process.env.NODE_ENV !== 'production' && warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
    return;
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return;
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption(value, options) {
  for (var i = 0, l = options.length; i < l; i++) {
    if (looseEqual(getValue(options[i]), value)) {
      return false;
    }
  }
  return true;
}

function getValue(option) {
  return '_value' in option ? option._value : option.value;
}

function onCompositionStart(e) {
  e.target.composing = true;
}

function onCompositionEnd(e) {
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger(el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode(vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
}

var show = {
  bind: function bind(el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;
    if (value && transition && !isIE9) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update(el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) {
      return;
    }
    vnode = locateNode(vnode);
    var transition = vnode.data && vnode.data.transition;
    if (transition && !isIE9) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: model$1,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild(vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children));
  } else {
    return vnode;
  }
}

function extractTransitionData(comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data;
}

function placeholder(h, rawChild) {
  return (/\d-keep-alive$/.test(rawChild.tag) ? h('keep-alive') : null
  );
}

function hasParentTransition(vnode) {
  while (vnode = vnode.parent) {
    if (vnode.data.transition) {
      return true;
    }
  }
}

function isSameChild(child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag;
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render(h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return;
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) {
      return c.tag;
    });
    /* istanbul ignore if */
    if (!children.length) {
      return;
    }

    // warn multiple elements
    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
      warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
    }

    var mode = this.mode;

    // warn invalid mode
    if (process.env.NODE_ENV !== 'production' && mode && mode !== 'in-out' && mode !== 'out-in') {
      warn('invalid <transition> mode: ' + mode, this.$parent);
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild;
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild;
    }

    if (this._leaving) {
      return placeholder(h, rawChild);
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + this._uid + "-";
    child.key = child.key == null ? id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) {
      return d.name === 'show';
    })) {
      child.data.show = true;
    }

    if (oldChild && oldChild.data && !isSameChild(child, oldChild)) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild && (oldChild.data.transition = extend({}, data));
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild);
      } else if (mode === 'in-out') {
        var delayedLeave;
        var performLeave = function performLeave() {
          delayedLeave();
        };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
          delayedLeave = leave;
        });
      }
    }

    return rawChild;
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final disired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render(h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c;(c.data || (c.data = {})).transition = transitionData;
        } else if (process.env.NODE_ENV !== 'production') {
          var opts = c.componentOptions;
          var name = opts ? opts.Ctor.options.name || opts.tag || '' : c.tag;
          warn("<transition-group> children must be keyed: <" + name + ">");
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children);
  },

  beforeUpdate: function beforeUpdate() {
    // force removing pass
    this.__patch__(this._vnode, this.kept, false, // hydrating
    true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated() {
    var children = this.prevChildren;
    var moveClass = this.moveClass || (this.name || 'v') + '-move';
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return;
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    var body = document.body;
    var f = body.offsetHeight; // eslint-disable-line

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove(el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false;
      }
      if (this._hasMove != null) {
        return this._hasMove;
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) {
          removeClass(clone, cls);
        });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return this._hasMove = info.hasTransform;
    }
  }
};

function callPendingCbs(c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition(c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation(c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$2.config.mustUseProp = mustUseProp;
Vue$2.config.isReservedTag = isReservedTag;
Vue$2.config.getTagNamespace = getTagNamespace;
Vue$2.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$2.options.directives, platformDirectives);
extend(Vue$2.options.components, platformComponents);

// install platform patch function
Vue$2.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$2.prototype.$mount = function (el, hydrating) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating);
};

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$2);
    } else if (process.env.NODE_ENV !== 'production' && isChrome) {
      console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
    }
  }
  if (process.env.NODE_ENV !== 'production' && config.productionTip !== false && inBrowser && typeof console !== 'undefined') {
    console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
  }
}, 0);

exports.default = Vue$2;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(4)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(6)(
  /* script */
  null,
  /* template */
  __webpack_require__(7),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/tomaj/code/joubel/content-types/h5p-feedback/src/scripts/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] App.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-de61aac6", Component.options)
  } else {
    hotAPI.reload("data-v-de61aac6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "h5p-feedback"
  }, [_c('div', {
    staticClass: "feedback-title",
    domProps: {
      "innerHTML": _vm._s(_vm.message)
    }
  }), _c('ul', {
    staticClass: "feedback-score-selector"
  }, _vm._l((_vm.scores), function(score) {
    return _c('li', [_c('div', {
      staticClass: "feedback-score",
      class: score.cls
    }, [_c('div', {
      staticClass: "feedback-score-title"
    }, [_vm._v(_vm._s(score.title))])])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-de61aac6", module.exports)
  }
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

// Load library
H5P.Feedback = __webpack_require__(0).default;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjhlZTQzZDJmZDJmMDJmNDFkNmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZmVlZGJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUvZGlzdC92dWUucnVudGltZS5lc20uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9BcHAudnVlIiwid2VicGFjazovLy8uL34vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQXBwLnZ1ZT9jNmFjIiwid2VicGFjazovLy8uL3NyYy9lbnRyaWVzL2Rpc3QuanMiXSwibmFtZXMiOlsiRmVlZGJhY2siLCJjb25maWciLCJjb250ZW50SWQiLCJjb250ZW50RGF0YSIsImRhdGEiLCJtZXNzYWdlIiwidGl0bGUiLCJzY29yZXMiLCJjbHMiLCJhdHRhY2giLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCIkd3JhcHBlciIsImdldCIsImFwcGVuZENoaWxkIiwicmVuZGVyVmlld1RvIiwidmlld01vZGVsIiwiZWwiLCJINVAiLCJFdmVudERpc3BhdGNoZXIiLCJwcm9jZXNzIiwibW9kdWxlIiwiZXhwb3J0cyIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJkZWZhdWx0U2V0VGltb3V0IiwiRXJyb3IiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImUiLCJjbGVhclRpbWVvdXQiLCJydW5UaW1lb3V0IiwiZnVuIiwiY2FsbCIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsInF1ZXVlIiwiZHJhaW5pbmciLCJjdXJyZW50UXVldWUiLCJxdWV1ZUluZGV4IiwiY2xlYW5VcE5leHRUaWNrIiwibGVuZ3RoIiwiY29uY2F0IiwiZHJhaW5RdWV1ZSIsInRpbWVvdXQiLCJsZW4iLCJydW4iLCJuZXh0VGljayIsImFyZ3MiLCJBcnJheSIsImFyZ3VtZW50cyIsImkiLCJwdXNoIiwiSXRlbSIsImFycmF5IiwicHJvdG90eXBlIiwiYXBwbHkiLCJicm93c2VyIiwiZW52IiwiYXJndiIsInZlcnNpb24iLCJ2ZXJzaW9ucyIsIm5vb3AiLCJvbiIsImFkZExpc3RlbmVyIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZW1pdCIsImJpbmRpbmciLCJuYW1lIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsIl90b1N0cmluZyIsInZhbCIsIkpTT04iLCJzdHJpbmdpZnkiLCJTdHJpbmciLCJ0b051bWJlciIsIm4iLCJwYXJzZUZsb2F0IiwiaXNOYU4iLCJtYWtlTWFwIiwic3RyIiwiZXhwZWN0c0xvd2VyQ2FzZSIsIm1hcCIsIk9iamVjdCIsImNyZWF0ZSIsImxpc3QiLCJzcGxpdCIsInRvTG93ZXJDYXNlIiwiaXNCdWlsdEluVGFnIiwicmVtb3ZlIiwiYXJyIiwiaXRlbSIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsImhhc093blByb3BlcnR5IiwiaGFzT3duIiwib2JqIiwia2V5IiwiaXNQcmltaXRpdmUiLCJ2YWx1ZSIsImNhY2hlZCIsImZuIiwiY2FjaGUiLCJjYWNoZWRGbiIsImhpdCIsImNhbWVsaXplUkUiLCJjYW1lbGl6ZSIsInJlcGxhY2UiLCJfIiwiYyIsInRvVXBwZXJDYXNlIiwiY2FwaXRhbGl6ZSIsImNoYXJBdCIsInNsaWNlIiwiaHlwaGVuYXRlUkUiLCJoeXBoZW5hdGUiLCJiaW5kIiwiY3R4IiwiYm91bmRGbiIsImEiLCJsIiwiX2xlbmd0aCIsInRvQXJyYXkiLCJzdGFydCIsInJldCIsImV4dGVuZCIsInRvIiwiX2Zyb20iLCJpc09iamVjdCIsInRvU3RyaW5nIiwiT0JKRUNUX1NUUklORyIsImlzUGxhaW5PYmplY3QiLCJ0b09iamVjdCIsInJlcyIsIm5vIiwiaWRlbnRpdHkiLCJsb29zZUVxdWFsIiwiYiIsImlzT2JqZWN0QSIsImlzT2JqZWN0QiIsImxvb3NlSW5kZXhPZiIsImNhbGxlZCIsIm9wdGlvbk1lcmdlU3RyYXRlZ2llcyIsInNpbGVudCIsInByb2R1Y3Rpb25UaXAiLCJOT0RFX0VOViIsImRldnRvb2xzIiwicGVyZm9ybWFuY2UiLCJlcnJvckhhbmRsZXIiLCJpZ25vcmVkRWxlbWVudHMiLCJrZXlDb2RlcyIsImlzUmVzZXJ2ZWRUYWciLCJpc1Vua25vd25FbGVtZW50IiwiZ2V0VGFnTmFtZXNwYWNlIiwicGFyc2VQbGF0Zm9ybVRhZ05hbWUiLCJtdXN0VXNlUHJvcCIsIl9hc3NldFR5cGVzIiwiX2xpZmVjeWNsZUhvb2tzIiwiX21heFVwZGF0ZUNvdW50IiwiaGFzUHJvdG8iLCJpbkJyb3dzZXIiLCJ3aW5kb3ciLCJVQSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImlzSUUiLCJ0ZXN0IiwiaXNJRTkiLCJpc0VkZ2UiLCJpc0FuZHJvaWQiLCJpc0lPUyIsImlzQ2hyb21lIiwiX2lzU2VydmVyIiwiaXNTZXJ2ZXJSZW5kZXJpbmciLCJ1bmRlZmluZWQiLCJnbG9iYWwiLCJWVUVfRU5WIiwiX19WVUVfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyIsImlzTmF0aXZlIiwiQ3RvciIsImhhc1N5bWJvbCIsIlN5bWJvbCIsIlJlZmxlY3QiLCJvd25LZXlzIiwiY2FsbGJhY2tzIiwicGVuZGluZyIsInRpbWVyRnVuYyIsIm5leHRUaWNrSGFuZGxlciIsImNvcGllcyIsIlByb21pc2UiLCJwIiwicmVzb2x2ZSIsImxvZ0Vycm9yIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwidGhlbiIsImNhdGNoIiwiTXV0YXRpb25PYnNlcnZlciIsImNvdW50ZXIiLCJvYnNlcnZlciIsInRleHROb2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJvYnNlcnZlIiwiY2hhcmFjdGVyRGF0YSIsInF1ZXVlTmV4dFRpY2siLCJjYiIsIl9yZXNvbHZlIiwiX1NldCIsIlNldCIsInNldCIsImhhcyIsImFkZCIsImNsZWFyIiwicGVyZiIsIm1hcmsiLCJtZWFzdXJlIiwiZW1wdHlPYmplY3QiLCJmcmVlemUiLCJpc1Jlc2VydmVkIiwiY2hhckNvZGVBdCIsImRlZiIsImVudW1lcmFibGUiLCJkZWZpbmVQcm9wZXJ0eSIsIndyaXRhYmxlIiwiY29uZmlndXJhYmxlIiwiYmFpbFJFIiwicGFyc2VQYXRoIiwicGF0aCIsInNlZ21lbnRzIiwid2FybiIsInRpcCIsImZvcm1hdENvbXBvbmVudE5hbWUiLCJoYXNDb25zb2xlIiwiY2xhc3NpZnlSRSIsImNsYXNzaWZ5IiwibXNnIiwidm0iLCJmb3JtYXRMb2NhdGlvbiIsImluY2x1ZGVGaWxlIiwiJHJvb3QiLCJfaXNWdWUiLCIkb3B0aW9ucyIsIl9jb21wb25lbnRUYWciLCJmaWxlIiwiX19maWxlIiwibWF0Y2giLCJ1aWQkMSIsIkRlcCIsInN1YnMiLCJhZGRTdWIiLCJzdWIiLCJyZW1vdmVTdWIiLCJkZXBlbmQiLCJ0YXJnZXQiLCJhZGREZXAiLCJub3RpZnkiLCJ1cGRhdGUiLCJ0YXJnZXRTdGFjayIsInB1c2hUYXJnZXQiLCJfdGFyZ2V0IiwicG9wVGFyZ2V0IiwicG9wIiwiYXJyYXlQcm90byIsImFycmF5TWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJvcmlnaW5hbCIsIm11dGF0b3IiLCJhcmd1bWVudHMkMSIsInJlc3VsdCIsIm9iIiwiX19vYl9fIiwiaW5zZXJ0ZWQiLCJvYnNlcnZlQXJyYXkiLCJkZXAiLCJhcnJheUtleXMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwib2JzZXJ2ZXJTdGF0ZSIsInNob3VsZENvbnZlcnQiLCJpc1NldHRpbmdQcm9wcyIsIk9ic2VydmVyIiwidm1Db3VudCIsImlzQXJyYXkiLCJhdWdtZW50IiwicHJvdG9BdWdtZW50IiwiY29weUF1Z21lbnQiLCJ3YWxrIiwia2V5cyIsImRlZmluZVJlYWN0aXZlJCQxIiwiaXRlbXMiLCJzcmMiLCJfX3Byb3RvX18iLCJhc1Jvb3REYXRhIiwiaXNFeHRlbnNpYmxlIiwiY3VzdG9tU2V0dGVyIiwicHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXR0ZXIiLCJzZXR0ZXIiLCJjaGlsZE9iIiwicmVhY3RpdmVHZXR0ZXIiLCJkZXBlbmRBcnJheSIsInJlYWN0aXZlU2V0dGVyIiwibmV3VmFsIiwiTWF0aCIsIm1heCIsImRlbCIsInN0cmF0cyIsInByb3BzRGF0YSIsInBhcmVudCIsImNoaWxkIiwiZGVmYXVsdFN0cmF0IiwibWVyZ2VEYXRhIiwiZnJvbSIsInRvVmFsIiwiZnJvbVZhbCIsInBhcmVudFZhbCIsImNoaWxkVmFsIiwibWVyZ2VkRGF0YUZuIiwibWVyZ2VkSW5zdGFuY2VEYXRhRm4iLCJpbnN0YW5jZURhdGEiLCJkZWZhdWx0RGF0YSIsIm1lcmdlSG9vayIsImhvb2siLCJtZXJnZUFzc2V0cyIsInR5cGUiLCJ3YXRjaCIsInByb3BzIiwibWV0aG9kcyIsImNvbXB1dGVkIiwiY2hlY2tDb21wb25lbnRzIiwib3B0aW9ucyIsImNvbXBvbmVudHMiLCJsb3dlciIsIm5vcm1hbGl6ZVByb3BzIiwibm9ybWFsaXplRGlyZWN0aXZlcyIsImRpcnMiLCJkaXJlY3RpdmVzIiwibWVyZ2VPcHRpb25zIiwiZXh0ZW5kc0Zyb20iLCJleHRlbmRzIiwibWl4aW5zIiwibWl4aW4iLCJWdWUkMiIsIm1lcmdlRmllbGQiLCJzdHJhdCIsInJlc29sdmVBc3NldCIsIndhcm5NaXNzaW5nIiwiYXNzZXRzIiwiY2FtZWxpemVkSWQiLCJQYXNjYWxDYXNlSWQiLCJ2YWxpZGF0ZVByb3AiLCJwcm9wT3B0aW9ucyIsInByb3AiLCJhYnNlbnQiLCJpc1R5cGUiLCJCb29sZWFuIiwiZ2V0UHJvcERlZmF1bHRWYWx1ZSIsInByZXZTaG91bGRDb252ZXJ0IiwiYXNzZXJ0UHJvcCIsImRlZmF1bHQiLCJfcHJvcHMiLCJnZXRUeXBlIiwicmVxdWlyZWQiLCJ2YWxpZCIsImV4cGVjdGVkVHlwZXMiLCJhc3NlcnRlZFR5cGUiLCJhc3NlcnRUeXBlIiwiZXhwZWN0ZWRUeXBlIiwiam9pbiIsInZhbGlkYXRvciIsImhhbmRsZUVycm9yIiwiaW5pdFByb3h5IiwiYWxsb3dlZEdsb2JhbHMiLCJ3YXJuTm9uUHJlc2VudCIsImhhc1Byb3h5IiwiUHJveHkiLCJpc0J1aWx0SW5Nb2RpZmllciIsImhhc0hhbmRsZXIiLCJpc0FsbG93ZWQiLCJnZXRIYW5kbGVyIiwiaGFuZGxlcnMiLCJyZW5kZXIiLCJfd2l0aFN0cmlwcGVkIiwiX3JlbmRlclByb3h5IiwiVk5vZGUiLCJ0YWciLCJjaGlsZHJlbiIsInRleHQiLCJlbG0iLCJjb250ZXh0IiwiY29tcG9uZW50T3B0aW9ucyIsIm5zIiwiZnVuY3Rpb25hbENvbnRleHQiLCJjb21wb25lbnRJbnN0YW5jZSIsInJhdyIsImlzU3RhdGljIiwiaXNSb290SW5zZXJ0IiwiaXNDb21tZW50IiwiaXNDbG9uZWQiLCJpc09uY2UiLCJwcm90b3R5cGVBY2Nlc3NvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiY3JlYXRlRW1wdHlWTm9kZSIsIm5vZGUiLCJjcmVhdGVUZXh0Vk5vZGUiLCJjbG9uZVZOb2RlIiwidm5vZGUiLCJjbG9uZWQiLCJjbG9uZVZOb2RlcyIsInZub2RlcyIsIm5vcm1hbGl6ZUV2ZW50Iiwib25jZSQkMSIsImNhcHR1cmUiLCJjcmVhdGVGbkludm9rZXIiLCJmbnMiLCJpbnZva2VyIiwidXBkYXRlTGlzdGVuZXJzIiwib2xkT24iLCJyZW1vdmUkJDEiLCJjdXIiLCJvbGQiLCJldmVudCIsIm1lcmdlVk5vZGVIb29rIiwiaG9va0tleSIsIm9sZEhvb2siLCJ3cmFwcGVkSG9vayIsIm1lcmdlZCIsInNpbXBsZU5vcm1hbGl6ZUNoaWxkcmVuIiwibm9ybWFsaXplQ2hpbGRyZW4iLCJub3JtYWxpemVBcnJheUNoaWxkcmVuIiwibmVzdGVkSW5kZXgiLCJsYXN0IiwiZ2V0Rmlyc3RDb21wb25lbnRDaGlsZCIsImZpbHRlciIsImluaXRFdmVudHMiLCJfZXZlbnRzIiwiX2hhc0hvb2tFdmVudCIsImxpc3RlbmVycyIsIl9wYXJlbnRMaXN0ZW5lcnMiLCJ1cGRhdGVDb21wb25lbnRMaXN0ZW5lcnMiLCIkb25jZSIsIiRvbiIsInJlbW92ZSQxIiwiJG9mZiIsIm9sZExpc3RlbmVycyIsImV2ZW50c01peGluIiwiVnVlIiwiaG9va1JFIiwidGhpcyQxIiwiY2JzIiwiJGVtaXQiLCJyZXNvbHZlU2xvdHMiLCJzbG90cyIsImRlZmF1bHRTbG90Iiwic2xvdCIsInJlc29sdmVTY29wZWRTbG90cyIsImFjdGl2ZUluc3RhbmNlIiwiaW5pdExpZmVjeWNsZSIsImFic3RyYWN0IiwiJHBhcmVudCIsIiRjaGlsZHJlbiIsIiRyZWZzIiwiX3dhdGNoZXIiLCJfaW5hY3RpdmUiLCJfZGlyZWN0SW5hY3RpdmUiLCJfaXNNb3VudGVkIiwiX2lzRGVzdHJveWVkIiwiX2lzQmVpbmdEZXN0cm95ZWQiLCJsaWZlY3ljbGVNaXhpbiIsIl91cGRhdGUiLCJoeWRyYXRpbmciLCJjYWxsSG9vayIsInByZXZFbCIsIiRlbCIsInByZXZWbm9kZSIsIl92bm9kZSIsInByZXZBY3RpdmVJbnN0YW5jZSIsIl9fcGF0Y2hfXyIsIl9wYXJlbnRFbG0iLCJfcmVmRWxtIiwiX192dWVfXyIsIiR2bm9kZSIsIiRmb3JjZVVwZGF0ZSIsIiRkZXN0cm95IiwidGVhcmRvd24iLCJfd2F0Y2hlcnMiLCJfZGF0YSIsIm1vdW50Q29tcG9uZW50IiwidGVtcGxhdGUiLCJ1cGRhdGVDb21wb25lbnQiLCJfbmFtZSIsInN0YXJ0VGFnIiwiZW5kVGFnIiwiX3JlbmRlciIsIldhdGNoZXIiLCJ1cGRhdGVDaGlsZENvbXBvbmVudCIsInBhcmVudFZub2RlIiwicmVuZGVyQ2hpbGRyZW4iLCJoYXNDaGlsZHJlbiIsIl9yZW5kZXJDaGlsZHJlbiIsInNjb3BlZFNsb3RzIiwiJHNjb3BlZFNsb3RzIiwiX3BhcmVudFZub2RlIiwicHJvcEtleXMiLCJfcHJvcEtleXMiLCIkc2xvdHMiLCJpc0luSW5hY3RpdmVUcmVlIiwiYWN0aXZhdGVDaGlsZENvbXBvbmVudCIsImRpcmVjdCIsImRlYWN0aXZhdGVDaGlsZENvbXBvbmVudCIsImoiLCJjaXJjdWxhciIsIndhaXRpbmciLCJmbHVzaGluZyIsInJlc2V0U2NoZWR1bGVyU3RhdGUiLCJmbHVzaFNjaGVkdWxlclF1ZXVlIiwid2F0Y2hlciIsInNvcnQiLCJ1c2VyIiwiZXhwcmVzc2lvbiIsInF1ZXVlV2F0Y2hlciIsInVpZCQyIiwiZXhwT3JGbiIsImRlZXAiLCJsYXp5Iiwic3luYyIsImFjdGl2ZSIsImRpcnR5IiwiZGVwcyIsIm5ld0RlcHMiLCJkZXBJZHMiLCJuZXdEZXBJZHMiLCJ0cmF2ZXJzZSIsImNsZWFudXBEZXBzIiwidG1wIiwib2xkVmFsdWUiLCJldmFsdWF0ZSIsInNlZW5PYmplY3RzIiwiX3RyYXZlcnNlIiwic2VlbiIsImlzQSIsImRlcElkIiwic2hhcmVkUHJvcGVydHlEZWZpbml0aW9uIiwicHJveHkiLCJzb3VyY2VLZXkiLCJwcm94eUdldHRlciIsInByb3h5U2V0dGVyIiwiaW5pdFN0YXRlIiwib3B0cyIsImluaXRQcm9wcyIsImluaXRNZXRob2RzIiwiaW5pdERhdGEiLCJpbml0Q29tcHV0ZWQiLCJpbml0V2F0Y2giLCJpc1Jlc2VydmVkUHJvcCIsInJlZiIsInByb3BzT3B0aW9ucyIsImlzUm9vdCIsImxvb3AiLCJjb21wdXRlZFdhdGNoZXJPcHRpb25zIiwid2F0Y2hlcnMiLCJfY29tcHV0ZWRXYXRjaGVycyIsInVzZXJEZWYiLCJkZWZpbmVDb21wdXRlZCIsImNyZWF0ZUNvbXB1dGVkR2V0dGVyIiwiY29tcHV0ZWRHZXR0ZXIiLCJoYW5kbGVyIiwiY3JlYXRlV2F0Y2hlciIsIiR3YXRjaCIsInN0YXRlTWl4aW4iLCJkYXRhRGVmIiwicHJvcHNEZWYiLCJuZXdEYXRhIiwiJHNldCIsIiRkZWxldGUiLCJpbW1lZGlhdGUiLCJ1bndhdGNoRm4iLCJob29rcyIsImluaXQiLCJwcmVwYXRjaCIsImluc2VydCIsImRlc3Ryb3kiLCJob29rc1RvTWVyZ2UiLCJjcmVhdGVDb21wb25lbnQiLCJiYXNlQ3RvciIsIl9iYXNlIiwiY2lkIiwicmVzb2x2ZWQiLCJyZXNvbHZlQXN5bmNDb21wb25lbnQiLCJyZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zIiwibW9kZWwiLCJ0cmFuc2Zvcm1Nb2RlbCIsImV4dHJhY3RQcm9wcyIsImZ1bmN0aW9uYWwiLCJjcmVhdGVGdW5jdGlvbmFsQ29tcG9uZW50IiwibmF0aXZlT24iLCJtZXJnZUhvb2tzIiwiX2NvbnRleHQiLCJoIiwiZCIsImNyZWF0ZUNvbXBvbmVudEluc3RhbmNlRm9yVm5vZGUiLCJwYXJlbnRFbG0iLCJyZWZFbG0iLCJ2bm9kZUNvbXBvbmVudE9wdGlvbnMiLCJfaXNDb21wb25lbnQiLCJpbmxpbmVUZW1wbGF0ZSIsInN0YXRpY1JlbmRlckZucyIsIiRtb3VudCIsImtlZXBBbGl2ZSIsIm1vdW50ZWROb2RlIiwib2xkVm5vZGUiLCJmYWN0b3J5IiwicmVxdWVzdGVkIiwicGVuZGluZ0NhbGxiYWNrcyIsInJlamVjdCIsInJlYXNvbiIsImF0dHJzIiwiZG9tUHJvcHMiLCJhbHRLZXkiLCJjaGVja1Byb3AiLCJoYXNoIiwicHJlc2VydmUiLCJmcm9tUGFyZW50Iiwib3VycyIsIm1lcmdlSG9vayQxIiwib25lIiwidHdvIiwiY2FsbGJhY2siLCJTSU1QTEVfTk9STUFMSVpFIiwiQUxXQVlTX05PUk1BTElaRSIsIm5vcm1hbGl6YXRpb25UeXBlIiwiYWx3YXlzTm9ybWFsaXplIiwiX2NyZWF0ZUVsZW1lbnQiLCJhcHBseU5TIiwicmVuZGVyTGlzdCIsInJlbmRlclNsb3QiLCJmYWxsYmFjayIsImJpbmRPYmplY3QiLCJzY29wZWRTbG90Rm4iLCJzbG90Tm9kZXMiLCJfcmVuZGVyZWQiLCJyZXNvbHZlRmlsdGVyIiwiY2hlY2tLZXlDb2RlcyIsImV2ZW50S2V5Q29kZSIsImJ1aWx0SW5BbGlhcyIsImJpbmRPYmplY3RQcm9wcyIsImFzUHJvcCIsInJlbmRlclN0YXRpYyIsImlzSW5Gb3IiLCJ0cmVlIiwiX3N0YXRpY1RyZWVzIiwibWFya1N0YXRpYyIsIm1hcmtPbmNlIiwibWFya1N0YXRpY05vZGUiLCJpbml0UmVuZGVyIiwicmVuZGVyQ29udGV4dCIsIl9jIiwiJGNyZWF0ZUVsZW1lbnQiLCJyZW5kZXJNaXhpbiIsIiRuZXh0VGljayIsInJlbmRlckVycm9yIiwiX28iLCJfbiIsIl9zIiwiX2wiLCJfdCIsIl9xIiwiX2kiLCJfbSIsIl9mIiwiX2siLCJfYiIsIl92IiwiX2UiLCJfdSIsImluaXRJbmplY3Rpb25zIiwicHJvdmlkZSIsImluamVjdCIsIl9wcm92aWRlZCIsInByb3ZpZGVLZXkiLCJzb3VyY2UiLCJ1aWQiLCJpbml0TWl4aW4iLCJfaW5pdCIsIl91aWQiLCJpbml0SW50ZXJuYWxDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsIl9zZWxmIiwic3VwZXIiLCJzdXBlck9wdGlvbnMiLCJjYWNoZWRTdXBlck9wdGlvbnMiLCJtb2RpZmllZE9wdGlvbnMiLCJyZXNvbHZlTW9kaWZpZWRPcHRpb25zIiwiZXh0ZW5kT3B0aW9ucyIsIm1vZGlmaWVkIiwibGF0ZXN0Iiwic2VhbGVkIiwic2VhbGVkT3B0aW9ucyIsImRlZHVwZSIsImluaXRVc2UiLCJ1c2UiLCJwbHVnaW4iLCJpbnN0YWxsZWQiLCJ1bnNoaWZ0IiwiaW5zdGFsbCIsImluaXRNaXhpbiQxIiwiaW5pdEV4dGVuZCIsIlN1cGVyIiwiU3VwZXJJZCIsImNhY2hlZEN0b3JzIiwiX0N0b3IiLCJTdWIiLCJWdWVDb21wb25lbnQiLCJpbml0UHJvcHMkMSIsImluaXRDb21wdXRlZCQxIiwiQ29tcCIsImluaXRBc3NldFJlZ2lzdGVycyIsImRlZmluaXRpb24iLCJwYXR0ZXJuVHlwZXMiLCJSZWdFeHAiLCJnZXRDb21wb25lbnROYW1lIiwibWF0Y2hlcyIsInBhdHRlcm4iLCJwcnVuZUNhY2hlIiwiY2FjaGVkTm9kZSIsInBydW5lQ2FjaGVFbnRyeSIsIktlZXBBbGl2ZSIsImluY2x1ZGUiLCJleGNsdWRlIiwiY3JlYXRlZCIsImRlc3Ryb3llZCIsImJ1aWx0SW5Db21wb25lbnRzIiwiaW5pdEdsb2JhbEFQSSIsImNvbmZpZ0RlZiIsInV0aWwiLCJkZWZpbmVSZWFjdGl2ZSIsImRlbGV0ZSIsImFjY2VwdFZhbHVlIiwiYXR0ciIsImlzRW51bWVyYXRlZEF0dHIiLCJpc0Jvb2xlYW5BdHRyIiwieGxpbmtOUyIsImlzWGxpbmsiLCJnZXRYbGlua1Byb3AiLCJpc0ZhbHN5QXR0clZhbHVlIiwiZ2VuQ2xhc3NGb3JWbm9kZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGUiLCJtZXJnZUNsYXNzRGF0YSIsImdlbkNsYXNzRnJvbURhdGEiLCJzdGF0aWNDbGFzcyIsImNsYXNzIiwiZHluYW1pY0NsYXNzIiwic3RyaW5naWZ5Q2xhc3MiLCJzdHJpbmdpZmllZCIsIm5hbWVzcGFjZU1hcCIsInN2ZyIsIm1hdGgiLCJpc0hUTUxUYWciLCJpc1NWRyIsInVua25vd25FbGVtZW50Q2FjaGUiLCJIVE1MVW5rbm93bkVsZW1lbnQiLCJIVE1MRWxlbWVudCIsInF1ZXJ5Iiwic2VsZWN0ZWQiLCJxdWVyeVNlbGVjdG9yIiwiY3JlYXRlRWxlbWVudCQxIiwidGFnTmFtZSIsIm11bHRpcGxlIiwic2V0QXR0cmlidXRlIiwiY3JlYXRlRWxlbWVudE5TIiwibmFtZXNwYWNlIiwiY3JlYXRlQ29tbWVudCIsImluc2VydEJlZm9yZSIsIm5ld05vZGUiLCJyZWZlcmVuY2VOb2RlIiwicmVtb3ZlQ2hpbGQiLCJuZXh0U2libGluZyIsInNldFRleHRDb250ZW50IiwidGV4dENvbnRlbnQiLCJub2RlT3BzIiwicmVnaXN0ZXJSZWYiLCJpc1JlbW92YWwiLCJyZWZzIiwicmVmSW5Gb3IiLCJlbXB0eU5vZGUiLCJob29rcyQxIiwiaXNVbmRlZiIsInMiLCJpc0RlZiIsInNhbWVWbm9kZSIsInZub2RlMSIsInZub2RlMiIsImNyZWF0ZUtleVRvT2xkSWR4IiwiYmVnaW5JZHgiLCJlbmRJZHgiLCJjcmVhdGVQYXRjaEZ1bmN0aW9uIiwiYmFja2VuZCIsIm1vZHVsZXMiLCJlbXB0eU5vZGVBdCIsImNyZWF0ZVJtQ2IiLCJjaGlsZEVsbSIsInJlbW92ZU5vZGUiLCJpblByZSIsImNyZWF0ZUVsbSIsImluc2VydGVkVm5vZGVRdWV1ZSIsIm5lc3RlZCIsInByZSIsInNldFNjb3BlIiwiY3JlYXRlQ2hpbGRyZW4iLCJpbnZva2VDcmVhdGVIb29rcyIsImlzUmVhY3RpdmF0ZWQiLCJpbml0Q29tcG9uZW50IiwicmVhY3RpdmF0ZUNvbXBvbmVudCIsInBlbmRpbmdJbnNlcnQiLCJpc1BhdGNoYWJsZSIsImlubmVyTm9kZSIsInRyYW5zaXRpb24iLCJhY3RpdmF0ZSIsImkkMSIsImFuY2VzdG9yIiwiX3Njb3BlSWQiLCJhZGRWbm9kZXMiLCJzdGFydElkeCIsImludm9rZURlc3Ryb3lIb29rIiwicmVtb3ZlVm5vZGVzIiwiY2giLCJyZW1vdmVBbmRJbnZva2VSZW1vdmVIb29rIiwicm0iLCJ1cGRhdGVDaGlsZHJlbiIsIm9sZENoIiwibmV3Q2giLCJyZW1vdmVPbmx5Iiwib2xkU3RhcnRJZHgiLCJuZXdTdGFydElkeCIsIm9sZEVuZElkeCIsIm9sZFN0YXJ0Vm5vZGUiLCJvbGRFbmRWbm9kZSIsIm5ld0VuZElkeCIsIm5ld1N0YXJ0Vm5vZGUiLCJuZXdFbmRWbm9kZSIsIm9sZEtleVRvSWR4IiwiaWR4SW5PbGQiLCJlbG1Ub01vdmUiLCJjYW5Nb3ZlIiwicGF0Y2hWbm9kZSIsImhhc0RhdGEiLCJwb3N0cGF0Y2giLCJpbnZva2VJbnNlcnRIb29rIiwiaW5pdGlhbCIsImJhaWxlZCIsImlzUmVuZGVyZWRNb2R1bGUiLCJoeWRyYXRlIiwiYXNzZXJ0Tm9kZU1hdGNoIiwiaGFzQ2hpbGROb2RlcyIsImNoaWxkcmVuTWF0Y2giLCJmaXJzdENoaWxkIiwiY2hpbGROb2RlcyIsIm5vZGVUeXBlIiwicGF0Y2giLCJpc0luaXRpYWxQYXRjaCIsImlzUmVhbEVsZW1lbnQiLCJoYXNBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJvbGRFbG0iLCJwYXJlbnRFbG0kMSIsIl9sZWF2ZUNiIiwidXBkYXRlRGlyZWN0aXZlcyIsInVuYmluZERpcmVjdGl2ZXMiLCJpc0NyZWF0ZSIsImlzRGVzdHJveSIsIm9sZERpcnMiLCJub3JtYWxpemVEaXJlY3RpdmVzJDEiLCJuZXdEaXJzIiwiZGlyc1dpdGhJbnNlcnQiLCJkaXJzV2l0aFBvc3RwYXRjaCIsIm9sZERpciIsImNhbGxIb29rJDEiLCJjb21wb25lbnRVcGRhdGVkIiwiY2FsbEluc2VydCIsImVtcHR5TW9kaWZpZXJzIiwibW9kaWZpZXJzIiwiZ2V0UmF3RGlyTmFtZSIsInJhd05hbWUiLCJiYXNlTW9kdWxlcyIsInVwZGF0ZUF0dHJzIiwib2xkQXR0cnMiLCJzZXRBdHRyIiwicmVtb3ZlQXR0cmlidXRlTlMiLCJzZXRBdHRyaWJ1dGVOUyIsInVwZGF0ZUNsYXNzIiwib2xkRGF0YSIsInRyYW5zaXRpb25DbGFzcyIsIl90cmFuc2l0aW9uQ2xhc3NlcyIsIl9wcmV2Q2xhc3MiLCJrbGFzcyIsInZhbGlkRGl2aXNpb25DaGFyUkUiLCJ3cmFwRmlsdGVyIiwiZXhwIiwiaW5kZXgkMSIsIlJBTkdFX1RPS0VOIiwiQ0hFQ0tCT1hfUkFESU9fVE9LRU4iLCJub3JtYWxpemVFdmVudHMiLCJ0YXJnZXQkMSIsImFkZCQxIiwib2xkSGFuZGxlciIsImV2IiwicmVtb3ZlJDIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVwZGF0ZURPTUxpc3RlbmVycyIsImV2ZW50cyIsInVwZGF0ZURPTVByb3BzIiwib2xkUHJvcHMiLCJfdmFsdWUiLCJzdHJDdXIiLCJzaG91bGRVcGRhdGVWYWx1ZSIsImNoZWNrVmFsIiwiY29tcG9zaW5nIiwiaXNEaXJ0eSIsImlzSW5wdXRDaGFuZ2VkIiwiYWN0aXZlRWxlbWVudCIsIl92TW9kaWZpZXJzIiwibnVtYmVyIiwidHJpbSIsInBhcnNlU3R5bGVUZXh0IiwiY3NzVGV4dCIsImxpc3REZWxpbWl0ZXIiLCJwcm9wZXJ0eURlbGltaXRlciIsIm5vcm1hbGl6ZVN0eWxlRGF0YSIsInN0eWxlIiwibm9ybWFsaXplU3R5bGVCaW5kaW5nIiwic3RhdGljU3R5bGUiLCJiaW5kaW5nU3R5bGUiLCJnZXRTdHlsZSIsImNoZWNrQ2hpbGQiLCJzdHlsZURhdGEiLCJjc3NWYXJSRSIsImltcG9ydGFudFJFIiwic2V0UHJvcCIsInNldFByb3BlcnR5Iiwibm9ybWFsaXplIiwicHJlZml4ZXMiLCJ0ZXN0RWwiLCJ1cHBlciIsInByZWZpeGVkIiwidXBkYXRlU3R5bGUiLCJvbGRTdGF0aWNTdHlsZSIsIm9sZFN0eWxlQmluZGluZyIsIm9sZFN0eWxlIiwibmV3U3R5bGUiLCJhZGRDbGFzcyIsImNsYXNzTGlzdCIsImdldEF0dHJpYnV0ZSIsInJlbW92ZUNsYXNzIiwidGFyIiwicmVzb2x2ZVRyYW5zaXRpb24iLCJkZWYkJDEiLCJjc3MiLCJhdXRvQ3NzVHJhbnNpdGlvbiIsImVudGVyQ2xhc3MiLCJlbnRlclRvQ2xhc3MiLCJlbnRlckFjdGl2ZUNsYXNzIiwibGVhdmVDbGFzcyIsImxlYXZlVG9DbGFzcyIsImxlYXZlQWN0aXZlQ2xhc3MiLCJoYXNUcmFuc2l0aW9uIiwiVFJBTlNJVElPTiIsIkFOSU1BVElPTiIsInRyYW5zaXRpb25Qcm9wIiwidHJhbnNpdGlvbkVuZEV2ZW50IiwiYW5pbWF0aW9uUHJvcCIsImFuaW1hdGlvbkVuZEV2ZW50Iiwib250cmFuc2l0aW9uZW5kIiwib253ZWJraXR0cmFuc2l0aW9uZW5kIiwib25hbmltYXRpb25lbmQiLCJvbndlYmtpdGFuaW1hdGlvbmVuZCIsInJhZiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm5leHRGcmFtZSIsImFkZFRyYW5zaXRpb25DbGFzcyIsInJlbW92ZVRyYW5zaXRpb25DbGFzcyIsIndoZW5UcmFuc2l0aW9uRW5kcyIsImdldFRyYW5zaXRpb25JbmZvIiwicHJvcENvdW50IiwiZW5kZWQiLCJlbmQiLCJvbkVuZCIsInRyYW5zZm9ybVJFIiwic3R5bGVzIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInRyYW5zaXRpb25lRGVsYXlzIiwidHJhbnNpdGlvbkR1cmF0aW9ucyIsInRyYW5zaXRpb25UaW1lb3V0IiwiZ2V0VGltZW91dCIsImFuaW1hdGlvbkRlbGF5cyIsImFuaW1hdGlvbkR1cmF0aW9ucyIsImFuaW1hdGlvblRpbWVvdXQiLCJoYXNUcmFuc2Zvcm0iLCJkZWxheXMiLCJkdXJhdGlvbnMiLCJ0b01zIiwiTnVtYmVyIiwiZW50ZXIiLCJ0b2dnbGVEaXNwbGF5IiwiY2FuY2VsbGVkIiwiX2VudGVyQ2IiLCJhcHBlYXJDbGFzcyIsImFwcGVhclRvQ2xhc3MiLCJhcHBlYXJBY3RpdmVDbGFzcyIsImJlZm9yZUVudGVyIiwiYWZ0ZXJFbnRlciIsImVudGVyQ2FuY2VsbGVkIiwiYmVmb3JlQXBwZWFyIiwiYXBwZWFyIiwiYWZ0ZXJBcHBlYXIiLCJhcHBlYXJDYW5jZWxsZWQiLCJkdXJhdGlvbiIsInRyYW5zaXRpb25Ob2RlIiwiaXNBcHBlYXIiLCJzdGFydENsYXNzIiwiYWN0aXZlQ2xhc3MiLCJ0b0NsYXNzIiwiYmVmb3JlRW50ZXJIb29rIiwiZW50ZXJIb29rIiwiYWZ0ZXJFbnRlckhvb2siLCJlbnRlckNhbmNlbGxlZEhvb2siLCJleHBsaWNpdEVudGVyRHVyYXRpb24iLCJjaGVja0R1cmF0aW9uIiwiZXhwZWN0c0NTUyIsInVzZXJXYW50c0NvbnRyb2wiLCJnZXRIb29rQWd1bWVudHNMZW5ndGgiLCJzaG93IiwicGVuZGluZ05vZGUiLCJfcGVuZGluZyIsImlzVmFsaWREdXJhdGlvbiIsImxlYXZlIiwiYmVmb3JlTGVhdmUiLCJhZnRlckxlYXZlIiwibGVhdmVDYW5jZWxsZWQiLCJkZWxheUxlYXZlIiwiZXhwbGljaXRMZWF2ZUR1cmF0aW9uIiwicGVyZm9ybUxlYXZlIiwiaW52b2tlckZucyIsIl9lbnRlciIsInBsYXRmb3JtTW9kdWxlcyIsInZtb2RlbCIsInRyaWdnZXIiLCJtb2RlbCQxIiwic2V0U2VsZWN0ZWQiLCJvbkNvbXBvc2l0aW9uU3RhcnQiLCJvbkNvbXBvc2l0aW9uRW5kIiwibmVlZFJlc2V0Iiwic29tZSIsInYiLCJoYXNOb01hdGNoaW5nT3B0aW9uIiwiaXNNdWx0aXBsZSIsIm9wdGlvbiIsImdldFZhbHVlIiwic2VsZWN0ZWRJbmRleCIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImxvY2F0ZU5vZGUiLCJvcmlnaW5hbERpc3BsYXkiLCJfX3ZPcmlnaW5hbERpc3BsYXkiLCJkaXNwbGF5IiwidW5iaW5kIiwicGxhdGZvcm1EaXJlY3RpdmVzIiwidHJhbnNpdGlvblByb3BzIiwibW9kZSIsImdldFJlYWxDaGlsZCIsImNvbXBPcHRpb25zIiwiZXh0cmFjdFRyYW5zaXRpb25EYXRhIiwiY29tcCIsImtleSQxIiwicGxhY2Vob2xkZXIiLCJyYXdDaGlsZCIsImhhc1BhcmVudFRyYW5zaXRpb24iLCJpc1NhbWVDaGlsZCIsIm9sZENoaWxkIiwiVHJhbnNpdGlvbiIsIl9sZWF2aW5nIiwib2xkUmF3Q2hpbGQiLCJkZWxheWVkTGVhdmUiLCJtb3ZlQ2xhc3MiLCJUcmFuc2l0aW9uR3JvdXAiLCJwcmV2Q2hpbGRyZW4iLCJyYXdDaGlsZHJlbiIsInRyYW5zaXRpb25EYXRhIiwia2VwdCIsInJlbW92ZWQiLCJjJDEiLCJwb3MiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJiZWZvcmVVcGRhdGUiLCJ1cGRhdGVkIiwiaGFzTW92ZSIsImNhbGxQZW5kaW5nQ2JzIiwicmVjb3JkUG9zaXRpb24iLCJhcHBseVRyYW5zbGF0aW9uIiwiYm9keSIsImYiLCJvZmZzZXRIZWlnaHQiLCJtb3ZlZCIsInRyYW5zZm9ybSIsIldlYmtpdFRyYW5zZm9ybSIsInRyYW5zaXRpb25EdXJhdGlvbiIsIl9tb3ZlQ2IiLCJwcm9wZXJ0eU5hbWUiLCJfaGFzTW92ZSIsImNsb25lIiwiY2xvbmVOb2RlIiwiaW5mbyIsIm5ld1BvcyIsIm9sZFBvcyIsImR4IiwibGVmdCIsImR5IiwidG9wIiwicGxhdGZvcm1Db21wb25lbnRzIiwiZyIsIkZ1bmN0aW9uIiwiZXZhbCIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVB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T0EsTUFBUCxPQUFrQixRQUFyQixFQUNDazhCLElBQUlsOEIsTUFBSjtBQUNEOztBQUVEO0FBQ0E7QUFDQTs7QUFFQW5KLE9BQU9DLE9BQVAsR0FBaUJvbEMsQ0FBakIsQzs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQTBIO0FBQzFIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMvQ0EsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7OztBQ3pCQSxtQkFBQUcsQ0FBUSxDQUFSOztBQUVBO0FBQ0EzbEMsSUFBSXBCLFFBQUosR0FBZSxtQkFBQSttQyxDQUFRLENBQVIsRUFBK0I3dkIsT0FBOUMsQyIsImZpbGUiOiJoNXAtZmVlZGJhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2OGVlNDNkMmZkMmYwMmY0MWQ2YiIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAudnVlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmVlZGJhY2sgZXh0ZW5kcyBINVAuRXZlbnREaXNwYXRjaGVyIHtcbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50SWRcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbnRlbnREYXRhXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25maWcsIGNvbnRlbnRJZCwgY29udGVudERhdGEgPSB7fSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICBsZXQgZGF0YSA9IHtcbiAgICAgIG1lc3NhZ2U6IGNvbmZpZy50aXRsZSxcbiAgICAgIHNjb3JlczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdWZXJ5IFNhdGlzZmllZCcsXG4gICAgICAgICAgY2xzOiAnZmVlZGJhY2stc2NvcmUtNCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnU2F0aXNmaWVkJyxcbiAgICAgICAgICBjbHM6ICdmZWVkYmFjay1zY29yZS0zJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdOZXV0cmFsJyxcbiAgICAgICAgICBjbHM6ICdmZWVkYmFjay1zY29yZS0yJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdVbnNhdGlzZmllZCcsXG4gICAgICAgICAgY2xzOiAnZmVlZGJhY2stc2NvcmUtMSdcbiAgICAgICAgfV1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQXR0YWNoIGxpYnJhcnkgdG8gd3JhcHBlclxuICAgICAqXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICR3cmFwcGVyXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIHRoaXMuYXR0YWNoID0gJHdyYXBwZXIgPT4ge1xuICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGVsZW1lbnQuaWQgPSBcImg1cC1mZWVkYmFjay1jb250ZW50XCI7XG4gICAgICAkd3JhcHBlci5nZXQoMCkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICB0aGlzLnJlbmRlclZpZXdUbyhgIyR7ZWxlbWVudC5pZH1gKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyB0aGUgdmlldyB0byBhIGVsZW1lbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5yZW5kZXJWaWV3VG8gPSBlbCA9PiB7XG4gICAgICB0aGlzLnZpZXdNb2RlbCA9IG5ldyBWdWUoeyAuLi5BcHAsIGRhdGEsIGVsIH0pO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL2ZlZWRiYWNrLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvbWFpbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIi8qIVxuICogVnVlLmpzIHYyLjIuMVxuICogKGMpIDIwMTQtMjAxNyBFdmFuIFlvdVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG4vKiAgKi9cblxuLyoqXG4gKiBDb252ZXJ0IGEgdmFsdWUgdG8gYSBzdHJpbmcgdGhhdCBpcyBhY3R1YWxseSByZW5kZXJlZC5cbiAqL1xuZnVuY3Rpb24gX3RvU3RyaW5nICh2YWwpIHtcbiAgcmV0dXJuIHZhbCA9PSBudWxsXG4gICAgPyAnJ1xuICAgIDogdHlwZW9mIHZhbCA9PT0gJ29iamVjdCdcbiAgICAgID8gSlNPTi5zdHJpbmdpZnkodmFsLCBudWxsLCAyKVxuICAgICAgOiBTdHJpbmcodmFsKVxufVxuXG4vKipcbiAqIENvbnZlcnQgYSBpbnB1dCB2YWx1ZSB0byBhIG51bWJlciBmb3IgcGVyc2lzdGVuY2UuXG4gKiBJZiB0aGUgY29udmVyc2lvbiBmYWlscywgcmV0dXJuIG9yaWdpbmFsIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIgKHZhbCkge1xuICB2YXIgbiA9IHBhcnNlRmxvYXQodmFsKTtcbiAgcmV0dXJuIGlzTmFOKG4pID8gdmFsIDogblxufVxuXG4vKipcbiAqIE1ha2UgYSBtYXAgYW5kIHJldHVybiBhIGZ1bmN0aW9uIGZvciBjaGVja2luZyBpZiBhIGtleVxuICogaXMgaW4gdGhhdCBtYXAuXG4gKi9cbmZ1bmN0aW9uIG1ha2VNYXAgKFxuICBzdHIsXG4gIGV4cGVjdHNMb3dlckNhc2Vcbikge1xuICB2YXIgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdmFyIGxpc3QgPSBzdHIuc3BsaXQoJywnKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgbWFwW2xpc3RbaV1dID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZXhwZWN0c0xvd2VyQ2FzZVxuICAgID8gZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gbWFwW3ZhbC50b0xvd2VyQ2FzZSgpXTsgfVxuICAgIDogZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gbWFwW3ZhbF07IH1cbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIHRhZyBpcyBhIGJ1aWx0LWluIHRhZy5cbiAqL1xudmFyIGlzQnVpbHRJblRhZyA9IG1ha2VNYXAoJ3Nsb3QsY29tcG9uZW50JywgdHJ1ZSk7XG5cbi8qKlxuICogUmVtb3ZlIGFuIGl0ZW0gZnJvbSBhbiBhcnJheVxuICovXG5mdW5jdGlvbiByZW1vdmUgKGFyciwgaXRlbSkge1xuICBpZiAoYXJyLmxlbmd0aCkge1xuICAgIHZhciBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICByZXR1cm4gYXJyLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBvYmplY3QgaGFzIHRoZSBwcm9wZXJ0eS5cbiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbmZ1bmN0aW9uIGhhc093biAob2JqLCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdmFsdWUgaXMgcHJpbWl0aXZlXG4gKi9cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgY2FjaGVkIHZlcnNpb24gb2YgYSBwdXJlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjYWNoZWQgKGZuKSB7XG4gIHZhciBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHJldHVybiAoZnVuY3Rpb24gY2FjaGVkRm4gKHN0cikge1xuICAgIHZhciBoaXQgPSBjYWNoZVtzdHJdO1xuICAgIHJldHVybiBoaXQgfHwgKGNhY2hlW3N0cl0gPSBmbihzdHIpKVxuICB9KVxufVxuXG4vKipcbiAqIENhbWVsaXplIGEgaHlwaGVuLWRlbGltaXRlZCBzdHJpbmcuXG4gKi9cbnZhciBjYW1lbGl6ZVJFID0gLy0oXFx3KS9nO1xudmFyIGNhbWVsaXplID0gY2FjaGVkKGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKGNhbWVsaXplUkUsIGZ1bmN0aW9uIChfLCBjKSB7IHJldHVybiBjID8gYy50b1VwcGVyQ2FzZSgpIDogJyc7IH0pXG59KTtcblxuLyoqXG4gKiBDYXBpdGFsaXplIGEgc3RyaW5nLlxuICovXG52YXIgY2FwaXRhbGl6ZSA9IGNhY2hlZChmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSlcbn0pO1xuXG4vKipcbiAqIEh5cGhlbmF0ZSBhIGNhbWVsQ2FzZSBzdHJpbmcuXG4gKi9cbnZhciBoeXBoZW5hdGVSRSA9IC8oW14tXSkoW0EtWl0pL2c7XG52YXIgaHlwaGVuYXRlID0gY2FjaGVkKGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0clxuICAgIC5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnJDEtJDInKVxuICAgIC5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnJDEtJDInKVxuICAgIC50b0xvd2VyQ2FzZSgpXG59KTtcblxuLyoqXG4gKiBTaW1wbGUgYmluZCwgZmFzdGVyIHRoYW4gbmF0aXZlXG4gKi9cbmZ1bmN0aW9uIGJpbmQgKGZuLCBjdHgpIHtcbiAgZnVuY3Rpb24gYm91bmRGbiAoYSkge1xuICAgIHZhciBsID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICByZXR1cm4gbFxuICAgICAgPyBsID4gMVxuICAgICAgICA/IGZuLmFwcGx5KGN0eCwgYXJndW1lbnRzKVxuICAgICAgICA6IGZuLmNhbGwoY3R4LCBhKVxuICAgICAgOiBmbi5jYWxsKGN0eClcbiAgfVxuICAvLyByZWNvcmQgb3JpZ2luYWwgZm4gbGVuZ3RoXG4gIGJvdW5kRm4uX2xlbmd0aCA9IGZuLmxlbmd0aDtcbiAgcmV0dXJuIGJvdW5kRm5cbn1cblxuLyoqXG4gKiBDb252ZXJ0IGFuIEFycmF5LWxpa2Ugb2JqZWN0IHRvIGEgcmVhbCBBcnJheS5cbiAqL1xuZnVuY3Rpb24gdG9BcnJheSAobGlzdCwgc3RhcnQpIHtcbiAgc3RhcnQgPSBzdGFydCB8fCAwO1xuICB2YXIgaSA9IGxpc3QubGVuZ3RoIC0gc3RhcnQ7XG4gIHZhciByZXQgPSBuZXcgQXJyYXkoaSk7XG4gIHdoaWxlIChpLS0pIHtcbiAgICByZXRbaV0gPSBsaXN0W2kgKyBzdGFydF07XG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG4vKipcbiAqIE1peCBwcm9wZXJ0aWVzIGludG8gdGFyZ2V0IG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gZXh0ZW5kICh0bywgX2Zyb20pIHtcbiAgZm9yICh2YXIga2V5IGluIF9mcm9tKSB7XG4gICAgdG9ba2V5XSA9IF9mcm9tW2tleV07XG4gIH1cbiAgcmV0dXJuIHRvXG59XG5cbi8qKlxuICogUXVpY2sgb2JqZWN0IGNoZWNrIC0gdGhpcyBpcyBwcmltYXJpbHkgdXNlZCB0byB0ZWxsXG4gKiBPYmplY3RzIGZyb20gcHJpbWl0aXZlIHZhbHVlcyB3aGVuIHdlIGtub3cgdGhlIHZhbHVlXG4gKiBpcyBhIEpTT04tY29tcGxpYW50IHR5cGUuXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0IChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0J1xufVxuXG4vKipcbiAqIFN0cmljdCBvYmplY3QgdHlwZSBjaGVjay4gT25seSByZXR1cm5zIHRydWVcbiAqIGZvciBwbGFpbiBKYXZhU2NyaXB0IG9iamVjdHMuXG4gKi9cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgT0JKRUNUX1NUUklORyA9ICdbb2JqZWN0IE9iamVjdF0nO1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCAob2JqKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT09IE9CSkVDVF9TVFJJTkdcbn1cblxuLyoqXG4gKiBNZXJnZSBhbiBBcnJheSBvZiBPYmplY3RzIGludG8gYSBzaW5nbGUgT2JqZWN0LlxuICovXG5mdW5jdGlvbiB0b09iamVjdCAoYXJyKSB7XG4gIHZhciByZXMgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyW2ldKSB7XG4gICAgICBleHRlbmQocmVzLCBhcnJbaV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qKlxuICogUGVyZm9ybSBubyBvcGVyYXRpb24uXG4gKi9cbmZ1bmN0aW9uIG5vb3AgKCkge31cblxuLyoqXG4gKiBBbHdheXMgcmV0dXJuIGZhbHNlLlxuICovXG52YXIgbm8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfTtcblxuLyoqXG4gKiBSZXR1cm4gc2FtZSB2YWx1ZVxuICovXG52YXIgaWRlbnRpdHkgPSBmdW5jdGlvbiAoXykgeyByZXR1cm4gXzsgfTtcblxuLyoqXG4gKiBHZW5lcmF0ZSBhIHN0YXRpYyBrZXlzIHN0cmluZyBmcm9tIGNvbXBpbGVyIG1vZHVsZXMuXG4gKi9cblxuXG4vKipcbiAqIENoZWNrIGlmIHR3byB2YWx1ZXMgYXJlIGxvb3NlbHkgZXF1YWwgLSB0aGF0IGlzLFxuICogaWYgdGhleSBhcmUgcGxhaW4gb2JqZWN0cywgZG8gdGhleSBoYXZlIHRoZSBzYW1lIHNoYXBlP1xuICovXG5mdW5jdGlvbiBsb29zZUVxdWFsIChhLCBiKSB7XG4gIHZhciBpc09iamVjdEEgPSBpc09iamVjdChhKTtcbiAgdmFyIGlzT2JqZWN0QiA9IGlzT2JqZWN0KGIpO1xuICBpZiAoaXNPYmplY3RBICYmIGlzT2JqZWN0Qikge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSA9PT0gSlNPTi5zdHJpbmdpZnkoYilcbiAgfSBlbHNlIGlmICghaXNPYmplY3RBICYmICFpc09iamVjdEIpIHtcbiAgICByZXR1cm4gU3RyaW5nKGEpID09PSBTdHJpbmcoYilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5mdW5jdGlvbiBsb29zZUluZGV4T2YgKGFyciwgdmFsKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGxvb3NlRXF1YWwoYXJyW2ldLCB2YWwpKSB7IHJldHVybiBpIH1cbiAgfVxuICByZXR1cm4gLTFcbn1cblxuLyoqXG4gKiBFbnN1cmUgYSBmdW5jdGlvbiBpcyBjYWxsZWQgb25seSBvbmNlLlxuICovXG5mdW5jdGlvbiBvbmNlIChmbikge1xuICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICBmbigpO1xuICAgIH1cbiAgfVxufVxuXG4vKiAgKi9cblxudmFyIGNvbmZpZyA9IHtcbiAgLyoqXG4gICAqIE9wdGlvbiBtZXJnZSBzdHJhdGVnaWVzICh1c2VkIGluIGNvcmUvdXRpbC9vcHRpb25zKVxuICAgKi9cbiAgb3B0aW9uTWVyZ2VTdHJhdGVnaWVzOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHN1cHByZXNzIHdhcm5pbmdzLlxuICAgKi9cbiAgc2lsZW50OiBmYWxzZSxcblxuICAvKipcbiAgICogU2hvdyBwcm9kdWN0aW9uIG1vZGUgdGlwIG1lc3NhZ2Ugb24gYm9vdD9cbiAgICovXG4gIHByb2R1Y3Rpb25UaXA6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gZW5hYmxlIGRldnRvb2xzXG4gICAqL1xuICBkZXZ0b29sczogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyxcblxuICAvKipcbiAgICogV2hldGhlciB0byByZWNvcmQgcGVyZlxuICAgKi9cbiAgcGVyZm9ybWFuY2U6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicsXG5cbiAgLyoqXG4gICAqIEVycm9yIGhhbmRsZXIgZm9yIHdhdGNoZXIgZXJyb3JzXG4gICAqL1xuICBlcnJvckhhbmRsZXI6IG51bGwsXG5cbiAgLyoqXG4gICAqIElnbm9yZSBjZXJ0YWluIGN1c3RvbSBlbGVtZW50c1xuICAgKi9cbiAgaWdub3JlZEVsZW1lbnRzOiBbXSxcblxuICAvKipcbiAgICogQ3VzdG9tIHVzZXIga2V5IGFsaWFzZXMgZm9yIHYtb25cbiAgICovXG4gIGtleUNvZGVzOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIHRhZyBpcyByZXNlcnZlZCBzbyB0aGF0IGl0IGNhbm5vdCBiZSByZWdpc3RlcmVkIGFzIGFcbiAgICogY29tcG9uZW50LiBUaGlzIGlzIHBsYXRmb3JtLWRlcGVuZGVudCBhbmQgbWF5IGJlIG92ZXJ3cml0dGVuLlxuICAgKi9cbiAgaXNSZXNlcnZlZFRhZzogbm8sXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgdGFnIGlzIGFuIHVua25vd24gZWxlbWVudC5cbiAgICogUGxhdGZvcm0tZGVwZW5kZW50LlxuICAgKi9cbiAgaXNVbmtub3duRWxlbWVudDogbm8sXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbmFtZXNwYWNlIG9mIGFuIGVsZW1lbnRcbiAgICovXG4gIGdldFRhZ05hbWVzcGFjZTogbm9vcCxcblxuICAvKipcbiAgICogUGFyc2UgdGhlIHJlYWwgdGFnIG5hbWUgZm9yIHRoZSBzcGVjaWZpYyBwbGF0Zm9ybS5cbiAgICovXG4gIHBhcnNlUGxhdGZvcm1UYWdOYW1lOiBpZGVudGl0eSxcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG11c3QgYmUgYm91bmQgdXNpbmcgcHJvcGVydHksIGUuZy4gdmFsdWVcbiAgICogUGxhdGZvcm0tZGVwZW5kZW50LlxuICAgKi9cbiAgbXVzdFVzZVByb3A6IG5vLFxuXG4gIC8qKlxuICAgKiBMaXN0IG9mIGFzc2V0IHR5cGVzIHRoYXQgYSBjb21wb25lbnQgY2FuIG93bi5cbiAgICovXG4gIF9hc3NldFR5cGVzOiBbXG4gICAgJ2NvbXBvbmVudCcsXG4gICAgJ2RpcmVjdGl2ZScsXG4gICAgJ2ZpbHRlcidcbiAgXSxcblxuICAvKipcbiAgICogTGlzdCBvZiBsaWZlY3ljbGUgaG9va3MuXG4gICAqL1xuICBfbGlmZWN5Y2xlSG9va3M6IFtcbiAgICAnYmVmb3JlQ3JlYXRlJyxcbiAgICAnY3JlYXRlZCcsXG4gICAgJ2JlZm9yZU1vdW50JyxcbiAgICAnbW91bnRlZCcsXG4gICAgJ2JlZm9yZVVwZGF0ZScsXG4gICAgJ3VwZGF0ZWQnLFxuICAgICdiZWZvcmVEZXN0cm95JyxcbiAgICAnZGVzdHJveWVkJyxcbiAgICAnYWN0aXZhdGVkJyxcbiAgICAnZGVhY3RpdmF0ZWQnXG4gIF0sXG5cbiAgLyoqXG4gICAqIE1heCBjaXJjdWxhciB1cGRhdGVzIGFsbG93ZWQgaW4gYSBzY2hlZHVsZXIgZmx1c2ggY3ljbGUuXG4gICAqL1xuICBfbWF4VXBkYXRlQ291bnQ6IDEwMFxufTtcblxuLyogICovXG4vKiBnbG9iYWxzIE11dGF0aW9uT2JzZXJ2ZXIgKi9cblxuLy8gY2FuIHdlIHVzZSBfX3Byb3RvX18/XG52YXIgaGFzUHJvdG8gPSAnX19wcm90b19fJyBpbiB7fTtcblxuLy8gQnJvd3NlciBlbnZpcm9ubWVudCBzbmlmZmluZ1xudmFyIGluQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xudmFyIFVBID0gaW5Ccm93c2VyICYmIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG52YXIgaXNJRSA9IFVBICYmIC9tc2llfHRyaWRlbnQvLnRlc3QoVUEpO1xudmFyIGlzSUU5ID0gVUEgJiYgVUEuaW5kZXhPZignbXNpZSA5LjAnKSA+IDA7XG52YXIgaXNFZGdlID0gVUEgJiYgVUEuaW5kZXhPZignZWRnZS8nKSA+IDA7XG52YXIgaXNBbmRyb2lkID0gVUEgJiYgVUEuaW5kZXhPZignYW5kcm9pZCcpID4gMDtcbnZhciBpc0lPUyA9IFVBICYmIC9pcGhvbmV8aXBhZHxpcG9kfGlvcy8udGVzdChVQSk7XG52YXIgaXNDaHJvbWUgPSBVQSAmJiAvY2hyb21lXFwvXFxkKy8udGVzdChVQSkgJiYgIWlzRWRnZTtcblxuLy8gdGhpcyBuZWVkcyB0byBiZSBsYXp5LWV2YWxlZCBiZWNhdXNlIHZ1ZSBtYXkgYmUgcmVxdWlyZWQgYmVmb3JlXG4vLyB2dWUtc2VydmVyLXJlbmRlcmVyIGNhbiBzZXQgVlVFX0VOVlxudmFyIF9pc1NlcnZlcjtcbnZhciBpc1NlcnZlclJlbmRlcmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKF9pc1NlcnZlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFpbkJyb3dzZXIgJiYgdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGRldGVjdCBwcmVzZW5jZSBvZiB2dWUtc2VydmVyLXJlbmRlcmVyIGFuZCBhdm9pZFxuICAgICAgLy8gV2VicGFjayBzaGltbWluZyB0aGUgcHJvY2Vzc1xuICAgICAgX2lzU2VydmVyID0gZ2xvYmFsWydwcm9jZXNzJ10uZW52LlZVRV9FTlYgPT09ICdzZXJ2ZXInO1xuICAgIH0gZWxzZSB7XG4gICAgICBfaXNTZXJ2ZXIgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIF9pc1NlcnZlclxufTtcblxuLy8gZGV0ZWN0IGRldnRvb2xzXG52YXIgZGV2dG9vbHMgPSBpbkJyb3dzZXIgJiYgd2luZG93Ll9fVlVFX0RFVlRPT0xTX0dMT0JBTF9IT09LX187XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiBpc05hdGl2ZSAoQ3Rvcikge1xuICByZXR1cm4gL25hdGl2ZSBjb2RlLy50ZXN0KEN0b3IudG9TdHJpbmcoKSlcbn1cblxudmFyIGhhc1N5bWJvbCA9XG4gIHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKFN5bWJvbCkgJiZcbiAgdHlwZW9mIFJlZmxlY3QgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKFJlZmxlY3Qub3duS2V5cyk7XG5cbi8qKlxuICogRGVmZXIgYSB0YXNrIHRvIGV4ZWN1dGUgaXQgYXN5bmNocm9ub3VzbHkuXG4gKi9cbnZhciBuZXh0VGljayA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciBjYWxsYmFja3MgPSBbXTtcbiAgdmFyIHBlbmRpbmcgPSBmYWxzZTtcbiAgdmFyIHRpbWVyRnVuYztcblxuICBmdW5jdGlvbiBuZXh0VGlja0hhbmRsZXIgKCkge1xuICAgIHBlbmRpbmcgPSBmYWxzZTtcbiAgICB2YXIgY29waWVzID0gY2FsbGJhY2tzLnNsaWNlKDApO1xuICAgIGNhbGxiYWNrcy5sZW5ndGggPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29waWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb3BpZXNbaV0oKTtcbiAgICB9XG4gIH1cblxuICAvLyB0aGUgbmV4dFRpY2sgYmVoYXZpb3IgbGV2ZXJhZ2VzIHRoZSBtaWNyb3Rhc2sgcXVldWUsIHdoaWNoIGNhbiBiZSBhY2Nlc3NlZFxuICAvLyB2aWEgZWl0aGVyIG5hdGl2ZSBQcm9taXNlLnRoZW4gb3IgTXV0YXRpb25PYnNlcnZlci5cbiAgLy8gTXV0YXRpb25PYnNlcnZlciBoYXMgd2lkZXIgc3VwcG9ydCwgaG93ZXZlciBpdCBpcyBzZXJpb3VzbHkgYnVnZ2VkIGluXG4gIC8vIFVJV2ViVmlldyBpbiBpT1MgPj0gOS4zLjMgd2hlbiB0cmlnZ2VyZWQgaW4gdG91Y2ggZXZlbnQgaGFuZGxlcnMuIEl0XG4gIC8vIGNvbXBsZXRlbHkgc3RvcHMgd29ya2luZyBhZnRlciB0cmlnZ2VyaW5nIGEgZmV3IHRpbWVzLi4uIHNvLCBpZiBuYXRpdmVcbiAgLy8gUHJvbWlzZSBpcyBhdmFpbGFibGUsIHdlIHdpbGwgdXNlIGl0OlxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShQcm9taXNlKSkge1xuICAgIHZhciBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgdmFyIGxvZ0Vycm9yID0gZnVuY3Rpb24gKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IH07XG4gICAgdGltZXJGdW5jID0gZnVuY3Rpb24gKCkge1xuICAgICAgcC50aGVuKG5leHRUaWNrSGFuZGxlcikuY2F0Y2gobG9nRXJyb3IpO1xuICAgICAgLy8gaW4gcHJvYmxlbWF0aWMgVUlXZWJWaWV3cywgUHJvbWlzZS50aGVuIGRvZXNuJ3QgY29tcGxldGVseSBicmVhaywgYnV0XG4gICAgICAvLyBpdCBjYW4gZ2V0IHN0dWNrIGluIGEgd2VpcmQgc3RhdGUgd2hlcmUgY2FsbGJhY2tzIGFyZSBwdXNoZWQgaW50byB0aGVcbiAgICAgIC8vIG1pY3JvdGFzayBxdWV1ZSBidXQgdGhlIHF1ZXVlIGlzbid0IGJlaW5nIGZsdXNoZWQsIHVudGlsIHRoZSBicm93c2VyXG4gICAgICAvLyBuZWVkcyB0byBkbyBzb21lIG90aGVyIHdvcmssIGUuZy4gaGFuZGxlIGEgdGltZXIuIFRoZXJlZm9yZSB3ZSBjYW5cbiAgICAgIC8vIFwiZm9yY2VcIiB0aGUgbWljcm90YXNrIHF1ZXVlIHRvIGJlIGZsdXNoZWQgYnkgYWRkaW5nIGFuIGVtcHR5IHRpbWVyLlxuICAgICAgaWYgKGlzSU9TKSB7IHNldFRpbWVvdXQobm9vcCk7IH1cbiAgICB9O1xuICB9IGVsc2UgaWYgKHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJyAmJiAoXG4gICAgaXNOYXRpdmUoTXV0YXRpb25PYnNlcnZlcikgfHxcbiAgICAvLyBQaGFudG9tSlMgYW5kIGlPUyA3LnhcbiAgICBNdXRhdGlvbk9ic2VydmVyLnRvU3RyaW5nKCkgPT09ICdbb2JqZWN0IE11dGF0aW9uT2JzZXJ2ZXJDb25zdHJ1Y3Rvcl0nXG4gICkpIHtcbiAgICAvLyB1c2UgTXV0YXRpb25PYnNlcnZlciB3aGVyZSBuYXRpdmUgUHJvbWlzZSBpcyBub3QgYXZhaWxhYmxlLFxuICAgIC8vIGUuZy4gUGhhbnRvbUpTIElFMTEsIGlPUzcsIEFuZHJvaWQgNC40XG4gICAgdmFyIGNvdW50ZXIgPSAxO1xuICAgIHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG5leHRUaWNrSGFuZGxlcik7XG4gICAgdmFyIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoU3RyaW5nKGNvdW50ZXIpKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKHRleHROb2RlLCB7XG4gICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlXG4gICAgfSk7XG4gICAgdGltZXJGdW5jID0gZnVuY3Rpb24gKCkge1xuICAgICAgY291bnRlciA9IChjb3VudGVyICsgMSkgJSAyO1xuICAgICAgdGV4dE5vZGUuZGF0YSA9IFN0cmluZyhjb3VudGVyKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIC8vIGZhbGxiYWNrIHRvIHNldFRpbWVvdXRcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHRpbWVyRnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldFRpbWVvdXQobmV4dFRpY2tIYW5kbGVyLCAwKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHF1ZXVlTmV4dFRpY2sgKGNiLCBjdHgpIHtcbiAgICB2YXIgX3Jlc29sdmU7XG4gICAgY2FsbGJhY2tzLnB1c2goZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGNiKSB7IGNiLmNhbGwoY3R4KTsgfVxuICAgICAgaWYgKF9yZXNvbHZlKSB7IF9yZXNvbHZlKGN0eCk7IH1cbiAgICB9KTtcbiAgICBpZiAoIXBlbmRpbmcpIHtcbiAgICAgIHBlbmRpbmcgPSB0cnVlO1xuICAgICAgdGltZXJGdW5jKCk7XG4gICAgfVxuICAgIGlmICghY2IgJiYgdHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgX3Jlc29sdmUgPSByZXNvbHZlO1xuICAgICAgfSlcbiAgICB9XG4gIH1cbn0pKCk7XG5cbnZhciBfU2V0O1xuLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5pZiAodHlwZW9mIFNldCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYXRpdmUoU2V0KSkge1xuICAvLyB1c2UgbmF0aXZlIFNldCB3aGVuIGF2YWlsYWJsZS5cbiAgX1NldCA9IFNldDtcbn0gZWxzZSB7XG4gIC8vIGEgbm9uLXN0YW5kYXJkIFNldCBwb2x5ZmlsbCB0aGF0IG9ubHkgd29ya3Mgd2l0aCBwcmltaXRpdmUga2V5cy5cbiAgX1NldCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2V0ICgpIHtcbiAgICAgIHRoaXMuc2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB9XG4gICAgU2V0LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiBoYXMgKGtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0W2tleV0gPT09IHRydWVcbiAgICB9O1xuICAgIFNldC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gYWRkIChrZXkpIHtcbiAgICAgIHRoaXMuc2V0W2tleV0gPSB0cnVlO1xuICAgIH07XG4gICAgU2V0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyICgpIHtcbiAgICAgIHRoaXMuc2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFNldDtcbiAgfSgpKTtcbn1cblxudmFyIHBlcmY7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHBlcmYgPSBpbkJyb3dzZXIgJiYgd2luZG93LnBlcmZvcm1hbmNlO1xuICBpZiAocGVyZiAmJiAoIXBlcmYubWFyayB8fCAhcGVyZi5tZWFzdXJlKSkge1xuICAgIHBlcmYgPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyogICovXG5cbnZhciBlbXB0eU9iamVjdCA9IE9iamVjdC5mcmVlemUoe30pO1xuXG4vKipcbiAqIENoZWNrIGlmIGEgc3RyaW5nIHN0YXJ0cyB3aXRoICQgb3IgX1xuICovXG5mdW5jdGlvbiBpc1Jlc2VydmVkIChzdHIpIHtcbiAgdmFyIGMgPSAoc3RyICsgJycpLmNoYXJDb2RlQXQoMCk7XG4gIHJldHVybiBjID09PSAweDI0IHx8IGMgPT09IDB4NUZcbn1cblxuLyoqXG4gKiBEZWZpbmUgYSBwcm9wZXJ0eS5cbiAqL1xuZnVuY3Rpb24gZGVmIChvYmosIGtleSwgdmFsLCBlbnVtZXJhYmxlKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgIHZhbHVlOiB2YWwsXG4gICAgZW51bWVyYWJsZTogISFlbnVtZXJhYmxlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuLyoqXG4gKiBQYXJzZSBzaW1wbGUgcGF0aC5cbiAqL1xudmFyIGJhaWxSRSA9IC9bXlxcdy4kXS87XG5mdW5jdGlvbiBwYXJzZVBhdGggKHBhdGgpIHtcbiAgaWYgKGJhaWxSRS50ZXN0KHBhdGgpKSB7XG4gICAgcmV0dXJuXG4gIH0gZWxzZSB7XG4gICAgdmFyIHNlZ21lbnRzID0gcGF0aC5zcGxpdCgnLicpO1xuICAgIHJldHVybiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghb2JqKSB7IHJldHVybiB9XG4gICAgICAgIG9iaiA9IG9ialtzZWdtZW50c1tpXV07XG4gICAgICB9XG4gICAgICByZXR1cm4gb2JqXG4gICAgfVxuICB9XG59XG5cbnZhciB3YXJuID0gbm9vcDtcbnZhciB0aXAgPSBub29wO1xudmFyIGZvcm1hdENvbXBvbmVudE5hbWU7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBoYXNDb25zb2xlID0gdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnO1xuICB2YXIgY2xhc3NpZnlSRSA9IC8oPzpefFstX10pKFxcdykvZztcbiAgdmFyIGNsYXNzaWZ5ID0gZnVuY3Rpb24gKHN0cikgeyByZXR1cm4gc3RyXG4gICAgLnJlcGxhY2UoY2xhc3NpZnlSRSwgZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMudG9VcHBlckNhc2UoKTsgfSlcbiAgICAucmVwbGFjZSgvWy1fXS9nLCAnJyk7IH07XG5cbiAgd2FybiA9IGZ1bmN0aW9uIChtc2csIHZtKSB7XG4gICAgaWYgKGhhc0NvbnNvbGUgJiYgKCFjb25maWcuc2lsZW50KSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltWdWUgd2Fybl06IFwiICsgbXNnICsgXCIgXCIgKyAoXG4gICAgICAgIHZtID8gZm9ybWF0TG9jYXRpb24oZm9ybWF0Q29tcG9uZW50TmFtZSh2bSkpIDogJydcbiAgICAgICkpO1xuICAgIH1cbiAgfTtcblxuICB0aXAgPSBmdW5jdGlvbiAobXNnLCB2bSkge1xuICAgIGlmIChoYXNDb25zb2xlICYmICghY29uZmlnLnNpbGVudCkpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIltWdWUgdGlwXTogXCIgKyBtc2cgKyBcIiBcIiArIChcbiAgICAgICAgdm0gPyBmb3JtYXRMb2NhdGlvbihmb3JtYXRDb21wb25lbnROYW1lKHZtKSkgOiAnJ1xuICAgICAgKSk7XG4gICAgfVxuICB9O1xuXG4gIGZvcm1hdENvbXBvbmVudE5hbWUgPSBmdW5jdGlvbiAodm0sIGluY2x1ZGVGaWxlKSB7XG4gICAgaWYgKHZtLiRyb290ID09PSB2bSkge1xuICAgICAgcmV0dXJuICc8Um9vdD4nXG4gICAgfVxuICAgIHZhciBuYW1lID0gdm0uX2lzVnVlXG4gICAgICA/IHZtLiRvcHRpb25zLm5hbWUgfHwgdm0uJG9wdGlvbnMuX2NvbXBvbmVudFRhZ1xuICAgICAgOiB2bS5uYW1lO1xuXG4gICAgdmFyIGZpbGUgPSB2bS5faXNWdWUgJiYgdm0uJG9wdGlvbnMuX19maWxlO1xuICAgIGlmICghbmFtZSAmJiBmaWxlKSB7XG4gICAgICB2YXIgbWF0Y2ggPSBmaWxlLm1hdGNoKC8oW14vXFxcXF0rKVxcLnZ1ZSQvKTtcbiAgICAgIG5hbWUgPSBtYXRjaCAmJiBtYXRjaFsxXTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgKG5hbWUgPyAoXCI8XCIgKyAoY2xhc3NpZnkobmFtZSkpICsgXCI+XCIpIDogXCI8QW5vbnltb3VzPlwiKSArXG4gICAgICAoZmlsZSAmJiBpbmNsdWRlRmlsZSAhPT0gZmFsc2UgPyAoXCIgYXQgXCIgKyBmaWxlKSA6ICcnKVxuICAgIClcbiAgfTtcblxuICB2YXIgZm9ybWF0TG9jYXRpb24gPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgaWYgKHN0ciA9PT0gXCI8QW5vbnltb3VzPlwiKSB7XG4gICAgICBzdHIgKz0gXCIgLSB1c2UgdGhlIFxcXCJuYW1lXFxcIiBvcHRpb24gZm9yIGJldHRlciBkZWJ1Z2dpbmcgbWVzc2FnZXMuXCI7XG4gICAgfVxuICAgIHJldHVybiAoXCJcXG4oZm91bmQgaW4gXCIgKyBzdHIgKyBcIilcIilcbiAgfTtcbn1cblxuLyogICovXG5cblxudmFyIHVpZCQxID0gMDtcblxuLyoqXG4gKiBBIGRlcCBpcyBhbiBvYnNlcnZhYmxlIHRoYXQgY2FuIGhhdmUgbXVsdGlwbGVcbiAqIGRpcmVjdGl2ZXMgc3Vic2NyaWJpbmcgdG8gaXQuXG4gKi9cbnZhciBEZXAgPSBmdW5jdGlvbiBEZXAgKCkge1xuICB0aGlzLmlkID0gdWlkJDErKztcbiAgdGhpcy5zdWJzID0gW107XG59O1xuXG5EZXAucHJvdG90eXBlLmFkZFN1YiA9IGZ1bmN0aW9uIGFkZFN1YiAoc3ViKSB7XG4gIHRoaXMuc3Vicy5wdXNoKHN1Yik7XG59O1xuXG5EZXAucHJvdG90eXBlLnJlbW92ZVN1YiA9IGZ1bmN0aW9uIHJlbW92ZVN1YiAoc3ViKSB7XG4gIHJlbW92ZSh0aGlzLnN1YnMsIHN1Yik7XG59O1xuXG5EZXAucHJvdG90eXBlLmRlcGVuZCA9IGZ1bmN0aW9uIGRlcGVuZCAoKSB7XG4gIGlmIChEZXAudGFyZ2V0KSB7XG4gICAgRGVwLnRhcmdldC5hZGREZXAodGhpcyk7XG4gIH1cbn07XG5cbkRlcC5wcm90b3R5cGUubm90aWZ5ID0gZnVuY3Rpb24gbm90aWZ5ICgpIHtcbiAgLy8gc3RhYmxpemUgdGhlIHN1YnNjcmliZXIgbGlzdCBmaXJzdFxuICB2YXIgc3VicyA9IHRoaXMuc3Vicy5zbGljZSgpO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHN1YnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgc3Vic1tpXS51cGRhdGUoKTtcbiAgfVxufTtcblxuLy8gdGhlIGN1cnJlbnQgdGFyZ2V0IHdhdGNoZXIgYmVpbmcgZXZhbHVhdGVkLlxuLy8gdGhpcyBpcyBnbG9iYWxseSB1bmlxdWUgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBvbmx5IG9uZVxuLy8gd2F0Y2hlciBiZWluZyBldmFsdWF0ZWQgYXQgYW55IHRpbWUuXG5EZXAudGFyZ2V0ID0gbnVsbDtcbnZhciB0YXJnZXRTdGFjayA9IFtdO1xuXG5mdW5jdGlvbiBwdXNoVGFyZ2V0IChfdGFyZ2V0KSB7XG4gIGlmIChEZXAudGFyZ2V0KSB7IHRhcmdldFN0YWNrLnB1c2goRGVwLnRhcmdldCk7IH1cbiAgRGVwLnRhcmdldCA9IF90YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIHBvcFRhcmdldCAoKSB7XG4gIERlcC50YXJnZXQgPSB0YXJnZXRTdGFjay5wb3AoKTtcbn1cblxuLypcbiAqIG5vdCB0eXBlIGNoZWNraW5nIHRoaXMgZmlsZSBiZWNhdXNlIGZsb3cgZG9lc24ndCBwbGF5IHdlbGwgd2l0aFxuICogZHluYW1pY2FsbHkgYWNjZXNzaW5nIG1ldGhvZHMgb24gQXJyYXkgcHJvdG90eXBlXG4gKi9cblxudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG52YXIgYXJyYXlNZXRob2RzID0gT2JqZWN0LmNyZWF0ZShhcnJheVByb3RvKTtbXG4gICdwdXNoJyxcbiAgJ3BvcCcsXG4gICdzaGlmdCcsXG4gICd1bnNoaWZ0JyxcbiAgJ3NwbGljZScsXG4gICdzb3J0JyxcbiAgJ3JldmVyc2UnXG5dXG4uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gIC8vIGNhY2hlIG9yaWdpbmFsIG1ldGhvZFxuICB2YXIgb3JpZ2luYWwgPSBhcnJheVByb3RvW21ldGhvZF07XG4gIGRlZihhcnJheU1ldGhvZHMsIG1ldGhvZCwgZnVuY3Rpb24gbXV0YXRvciAoKSB7XG4gICAgdmFyIGFyZ3VtZW50cyQxID0gYXJndW1lbnRzO1xuXG4gICAgLy8gYXZvaWQgbGVha2luZyBhcmd1bWVudHM6XG4gICAgLy8gaHR0cDovL2pzcGVyZi5jb20vY2xvc3VyZS13aXRoLWFyZ3VtZW50c1xuICAgIHZhciBpID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShpKTtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzJDFbaV07XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB2YXIgb2IgPSB0aGlzLl9fb2JfXztcbiAgICB2YXIgaW5zZXJ0ZWQ7XG4gICAgc3dpdGNoIChtZXRob2QpIHtcbiAgICAgIGNhc2UgJ3B1c2gnOlxuICAgICAgICBpbnNlcnRlZCA9IGFyZ3M7XG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICd1bnNoaWZ0JzpcbiAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzO1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnc3BsaWNlJzpcbiAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzLnNsaWNlKDIpO1xuICAgICAgICBicmVha1xuICAgIH1cbiAgICBpZiAoaW5zZXJ0ZWQpIHsgb2Iub2JzZXJ2ZUFycmF5KGluc2VydGVkKTsgfVxuICAgIC8vIG5vdGlmeSBjaGFuZ2VcbiAgICBvYi5kZXAubm90aWZ5KCk7XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KTtcbn0pO1xuXG4vKiAgKi9cblxudmFyIGFycmF5S2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGFycmF5TWV0aG9kcyk7XG5cbi8qKlxuICogQnkgZGVmYXVsdCwgd2hlbiBhIHJlYWN0aXZlIHByb3BlcnR5IGlzIHNldCwgdGhlIG5ldyB2YWx1ZSBpc1xuICogYWxzbyBjb252ZXJ0ZWQgdG8gYmVjb21lIHJlYWN0aXZlLiBIb3dldmVyIHdoZW4gcGFzc2luZyBkb3duIHByb3BzLFxuICogd2UgZG9uJ3Qgd2FudCB0byBmb3JjZSBjb252ZXJzaW9uIGJlY2F1c2UgdGhlIHZhbHVlIG1heSBiZSBhIG5lc3RlZCB2YWx1ZVxuICogdW5kZXIgYSBmcm96ZW4gZGF0YSBzdHJ1Y3R1cmUuIENvbnZlcnRpbmcgaXQgd291bGQgZGVmZWF0IHRoZSBvcHRpbWl6YXRpb24uXG4gKi9cbnZhciBvYnNlcnZlclN0YXRlID0ge1xuICBzaG91bGRDb252ZXJ0OiB0cnVlLFxuICBpc1NldHRpbmdQcm9wczogZmFsc2Vcbn07XG5cbi8qKlxuICogT2JzZXJ2ZXIgY2xhc3MgdGhhdCBhcmUgYXR0YWNoZWQgdG8gZWFjaCBvYnNlcnZlZFxuICogb2JqZWN0LiBPbmNlIGF0dGFjaGVkLCB0aGUgb2JzZXJ2ZXIgY29udmVydHMgdGFyZ2V0XG4gKiBvYmplY3QncyBwcm9wZXJ0eSBrZXlzIGludG8gZ2V0dGVyL3NldHRlcnMgdGhhdFxuICogY29sbGVjdCBkZXBlbmRlbmNpZXMgYW5kIGRpc3BhdGNoZXMgdXBkYXRlcy5cbiAqL1xudmFyIE9ic2VydmVyID0gZnVuY3Rpb24gT2JzZXJ2ZXIgKHZhbHVlKSB7XG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgdGhpcy5kZXAgPSBuZXcgRGVwKCk7XG4gIHRoaXMudm1Db3VudCA9IDA7XG4gIGRlZih2YWx1ZSwgJ19fb2JfXycsIHRoaXMpO1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB2YXIgYXVnbWVudCA9IGhhc1Byb3RvXG4gICAgICA/IHByb3RvQXVnbWVudFxuICAgICAgOiBjb3B5QXVnbWVudDtcbiAgICBhdWdtZW50KHZhbHVlLCBhcnJheU1ldGhvZHMsIGFycmF5S2V5cyk7XG4gICAgdGhpcy5vYnNlcnZlQXJyYXkodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMud2Fsayh2YWx1ZSk7XG4gIH1cbn07XG5cbi8qKlxuICogV2FsayB0aHJvdWdoIGVhY2ggcHJvcGVydHkgYW5kIGNvbnZlcnQgdGhlbSBpbnRvXG4gKiBnZXR0ZXIvc2V0dGVycy4gVGhpcyBtZXRob2Qgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIHdoZW5cbiAqIHZhbHVlIHR5cGUgaXMgT2JqZWN0LlxuICovXG5PYnNlcnZlci5wcm90b3R5cGUud2FsayA9IGZ1bmN0aW9uIHdhbGsgKG9iaikge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGRlZmluZVJlYWN0aXZlJCQxKG9iaiwga2V5c1tpXSwgb2JqW2tleXNbaV1dKTtcbiAgfVxufTtcblxuLyoqXG4gKiBPYnNlcnZlIGEgbGlzdCBvZiBBcnJheSBpdGVtcy5cbiAqL1xuT2JzZXJ2ZXIucHJvdG90eXBlLm9ic2VydmVBcnJheSA9IGZ1bmN0aW9uIG9ic2VydmVBcnJheSAoaXRlbXMpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBpdGVtcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBvYnNlcnZlKGl0ZW1zW2ldKTtcbiAgfVxufTtcblxuLy8gaGVscGVyc1xuXG4vKipcbiAqIEF1Z21lbnQgYW4gdGFyZ2V0IE9iamVjdCBvciBBcnJheSBieSBpbnRlcmNlcHRpbmdcbiAqIHRoZSBwcm90b3R5cGUgY2hhaW4gdXNpbmcgX19wcm90b19fXG4gKi9cbmZ1bmN0aW9uIHByb3RvQXVnbWVudCAodGFyZ2V0LCBzcmMpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbiAgdGFyZ2V0Ll9fcHJvdG9fXyA9IHNyYztcbiAgLyogZXNsaW50LWVuYWJsZSBuby1wcm90byAqL1xufVxuXG4vKipcbiAqIEF1Z21lbnQgYW4gdGFyZ2V0IE9iamVjdCBvciBBcnJheSBieSBkZWZpbmluZ1xuICogaGlkZGVuIHByb3BlcnRpZXMuXG4gKi9cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiBjb3B5QXVnbWVudCAodGFyZ2V0LCBzcmMsIGtleXMpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGRlZih0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9XG59XG5cbi8qKlxuICogQXR0ZW1wdCB0byBjcmVhdGUgYW4gb2JzZXJ2ZXIgaW5zdGFuY2UgZm9yIGEgdmFsdWUsXG4gKiByZXR1cm5zIHRoZSBuZXcgb2JzZXJ2ZXIgaWYgc3VjY2Vzc2Z1bGx5IG9ic2VydmVkLFxuICogb3IgdGhlIGV4aXN0aW5nIG9ic2VydmVyIGlmIHRoZSB2YWx1ZSBhbHJlYWR5IGhhcyBvbmUuXG4gKi9cbmZ1bmN0aW9uIG9ic2VydmUgKHZhbHVlLCBhc1Jvb3REYXRhKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIG9iO1xuICBpZiAoaGFzT3duKHZhbHVlLCAnX19vYl9fJykgJiYgdmFsdWUuX19vYl9fIGluc3RhbmNlb2YgT2JzZXJ2ZXIpIHtcbiAgICBvYiA9IHZhbHVlLl9fb2JfXztcbiAgfSBlbHNlIGlmIChcbiAgICBvYnNlcnZlclN0YXRlLnNob3VsZENvbnZlcnQgJiZcbiAgICAhaXNTZXJ2ZXJSZW5kZXJpbmcoKSAmJlxuICAgIChBcnJheS5pc0FycmF5KHZhbHVlKSB8fCBpc1BsYWluT2JqZWN0KHZhbHVlKSkgJiZcbiAgICBPYmplY3QuaXNFeHRlbnNpYmxlKHZhbHVlKSAmJlxuICAgICF2YWx1ZS5faXNWdWVcbiAgKSB7XG4gICAgb2IgPSBuZXcgT2JzZXJ2ZXIodmFsdWUpO1xuICB9XG4gIGlmIChhc1Jvb3REYXRhICYmIG9iKSB7XG4gICAgb2Iudm1Db3VudCsrO1xuICB9XG4gIHJldHVybiBvYlxufVxuXG4vKipcbiAqIERlZmluZSBhIHJlYWN0aXZlIHByb3BlcnR5IG9uIGFuIE9iamVjdC5cbiAqL1xuZnVuY3Rpb24gZGVmaW5lUmVhY3RpdmUkJDEgKFxuICBvYmosXG4gIGtleSxcbiAgdmFsLFxuICBjdXN0b21TZXR0ZXJcbikge1xuICB2YXIgZGVwID0gbmV3IERlcCgpO1xuXG4gIHZhciBwcm9wZXJ0eSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpO1xuICBpZiAocHJvcGVydHkgJiYgcHJvcGVydHkuY29uZmlndXJhYmxlID09PSBmYWxzZSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gY2F0ZXIgZm9yIHByZS1kZWZpbmVkIGdldHRlci9zZXR0ZXJzXG4gIHZhciBnZXR0ZXIgPSBwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5nZXQ7XG4gIHZhciBzZXR0ZXIgPSBwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5zZXQ7XG5cbiAgdmFyIGNoaWxkT2IgPSBvYnNlcnZlKHZhbCk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gcmVhY3RpdmVHZXR0ZXIgKCkge1xuICAgICAgdmFyIHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbDtcbiAgICAgIGlmIChEZXAudGFyZ2V0KSB7XG4gICAgICAgIGRlcC5kZXBlbmQoKTtcbiAgICAgICAgaWYgKGNoaWxkT2IpIHtcbiAgICAgICAgICBjaGlsZE9iLmRlcC5kZXBlbmQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICBkZXBlbmRBcnJheSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiByZWFjdGl2ZVNldHRlciAobmV3VmFsKSB7XG4gICAgICB2YXIgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsO1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlICovXG4gICAgICBpZiAobmV3VmFsID09PSB2YWx1ZSB8fCAobmV3VmFsICE9PSBuZXdWYWwgJiYgdmFsdWUgIT09IHZhbHVlKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlICovXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjdXN0b21TZXR0ZXIpIHtcbiAgICAgICAgY3VzdG9tU2V0dGVyKCk7XG4gICAgICB9XG4gICAgICBpZiAoc2V0dGVyKSB7XG4gICAgICAgIHNldHRlci5jYWxsKG9iaiwgbmV3VmFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IG5ld1ZhbDtcbiAgICAgIH1cbiAgICAgIGNoaWxkT2IgPSBvYnNlcnZlKG5ld1ZhbCk7XG4gICAgICBkZXAubm90aWZ5KCk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBTZXQgYSBwcm9wZXJ0eSBvbiBhbiBvYmplY3QuIEFkZHMgdGhlIG5ldyBwcm9wZXJ0eSBhbmRcbiAqIHRyaWdnZXJzIGNoYW5nZSBub3RpZmljYXRpb24gaWYgdGhlIHByb3BlcnR5IGRvZXNuJ3RcbiAqIGFscmVhZHkgZXhpc3QuXG4gKi9cbmZ1bmN0aW9uIHNldCAob2JqLCBrZXksIHZhbCkge1xuICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgb2JqLmxlbmd0aCA9IE1hdGgubWF4KG9iai5sZW5ndGgsIGtleSk7XG4gICAgb2JqLnNwbGljZShrZXksIDEsIHZhbCk7XG4gICAgcmV0dXJuIHZhbFxuICB9XG4gIGlmIChoYXNPd24ob2JqLCBrZXkpKSB7XG4gICAgb2JqW2tleV0gPSB2YWw7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIG9iID0gb2JqLl9fb2JfXztcbiAgaWYgKG9iai5faXNWdWUgfHwgKG9iICYmIG9iLnZtQ291bnQpKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgJ0F2b2lkIGFkZGluZyByZWFjdGl2ZSBwcm9wZXJ0aWVzIHRvIGEgVnVlIGluc3RhbmNlIG9yIGl0cyByb290ICRkYXRhICcgK1xuICAgICAgJ2F0IHJ1bnRpbWUgLSBkZWNsYXJlIGl0IHVwZnJvbnQgaW4gdGhlIGRhdGEgb3B0aW9uLidcbiAgICApO1xuICAgIHJldHVyblxuICB9XG4gIGlmICghb2IpIHtcbiAgICBvYmpba2V5XSA9IHZhbDtcbiAgICByZXR1cm5cbiAgfVxuICBkZWZpbmVSZWFjdGl2ZSQkMShvYi52YWx1ZSwga2V5LCB2YWwpO1xuICBvYi5kZXAubm90aWZ5KCk7XG4gIHJldHVybiB2YWxcbn1cblxuLyoqXG4gKiBEZWxldGUgYSBwcm9wZXJ0eSBhbmQgdHJpZ2dlciBjaGFuZ2UgaWYgbmVjZXNzYXJ5LlxuICovXG5mdW5jdGlvbiBkZWwgKG9iaiwga2V5KSB7XG4gIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICBvYmouc3BsaWNlKGtleSwgMSk7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIG9iID0gb2JqLl9fb2JfXztcbiAgaWYgKG9iai5faXNWdWUgfHwgKG9iICYmIG9iLnZtQ291bnQpKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgJ0F2b2lkIGRlbGV0aW5nIHByb3BlcnRpZXMgb24gYSBWdWUgaW5zdGFuY2Ugb3IgaXRzIHJvb3QgJGRhdGEgJyArXG4gICAgICAnLSBqdXN0IHNldCBpdCB0byBudWxsLidcbiAgICApO1xuICAgIHJldHVyblxuICB9XG4gIGlmICghaGFzT3duKG9iaiwga2V5KSkge1xuICAgIHJldHVyblxuICB9XG4gIGRlbGV0ZSBvYmpba2V5XTtcbiAgaWYgKCFvYikge1xuICAgIHJldHVyblxuICB9XG4gIG9iLmRlcC5ub3RpZnkoKTtcbn1cblxuLyoqXG4gKiBDb2xsZWN0IGRlcGVuZGVuY2llcyBvbiBhcnJheSBlbGVtZW50cyB3aGVuIHRoZSBhcnJheSBpcyB0b3VjaGVkLCBzaW5jZVxuICogd2UgY2Fubm90IGludGVyY2VwdCBhcnJheSBlbGVtZW50IGFjY2VzcyBsaWtlIHByb3BlcnR5IGdldHRlcnMuXG4gKi9cbmZ1bmN0aW9uIGRlcGVuZEFycmF5ICh2YWx1ZSkge1xuICBmb3IgKHZhciBlID0gKHZvaWQgMCksIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZSA9IHZhbHVlW2ldO1xuICAgIGUgJiYgZS5fX29iX18gJiYgZS5fX29iX18uZGVwLmRlcGVuZCgpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGUpKSB7XG4gICAgICBkZXBlbmRBcnJheShlKTtcbiAgICB9XG4gIH1cbn1cblxuLyogICovXG5cbi8qKlxuICogT3B0aW9uIG92ZXJ3cml0aW5nIHN0cmF0ZWdpZXMgYXJlIGZ1bmN0aW9ucyB0aGF0IGhhbmRsZVxuICogaG93IHRvIG1lcmdlIGEgcGFyZW50IG9wdGlvbiB2YWx1ZSBhbmQgYSBjaGlsZCBvcHRpb25cbiAqIHZhbHVlIGludG8gdGhlIGZpbmFsIHZhbHVlLlxuICovXG52YXIgc3RyYXRzID0gY29uZmlnLm9wdGlvbk1lcmdlU3RyYXRlZ2llcztcblxuLyoqXG4gKiBPcHRpb25zIHdpdGggcmVzdHJpY3Rpb25zXG4gKi9cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHN0cmF0cy5lbCA9IHN0cmF0cy5wcm9wc0RhdGEgPSBmdW5jdGlvbiAocGFyZW50LCBjaGlsZCwgdm0sIGtleSkge1xuICAgIGlmICghdm0pIHtcbiAgICAgIHdhcm4oXG4gICAgICAgIFwib3B0aW9uIFxcXCJcIiArIGtleSArIFwiXFxcIiBjYW4gb25seSBiZSB1c2VkIGR1cmluZyBpbnN0YW5jZSBcIiArXG4gICAgICAgICdjcmVhdGlvbiB3aXRoIHRoZSBgbmV3YCBrZXl3b3JkLidcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0U3RyYXQocGFyZW50LCBjaGlsZClcbiAgfTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgdGhhdCByZWN1cnNpdmVseSBtZXJnZXMgdHdvIGRhdGEgb2JqZWN0cyB0b2dldGhlci5cbiAqL1xuZnVuY3Rpb24gbWVyZ2VEYXRhICh0bywgZnJvbSkge1xuICBpZiAoIWZyb20pIHsgcmV0dXJuIHRvIH1cbiAgdmFyIGtleSwgdG9WYWwsIGZyb21WYWw7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJvbSk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IGtleXNbaV07XG4gICAgdG9WYWwgPSB0b1trZXldO1xuICAgIGZyb21WYWwgPSBmcm9tW2tleV07XG4gICAgaWYgKCFoYXNPd24odG8sIGtleSkpIHtcbiAgICAgIHNldCh0bywga2V5LCBmcm9tVmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QodG9WYWwpICYmIGlzUGxhaW5PYmplY3QoZnJvbVZhbCkpIHtcbiAgICAgIG1lcmdlRGF0YSh0b1ZhbCwgZnJvbVZhbCk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0b1xufVxuXG4vKipcbiAqIERhdGFcbiAqL1xuc3RyYXRzLmRhdGEgPSBmdW5jdGlvbiAoXG4gIHBhcmVudFZhbCxcbiAgY2hpbGRWYWwsXG4gIHZtXG4pIHtcbiAgaWYgKCF2bSkge1xuICAgIC8vIGluIGEgVnVlLmV4dGVuZCBtZXJnZSwgYm90aCBzaG91bGQgYmUgZnVuY3Rpb25zXG4gICAgaWYgKCFjaGlsZFZhbCkge1xuICAgICAgcmV0dXJuIHBhcmVudFZhbFxuICAgIH1cbiAgICBpZiAodHlwZW9mIGNoaWxkVmFsICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgICdUaGUgXCJkYXRhXCIgb3B0aW9uIHNob3VsZCBiZSBhIGZ1bmN0aW9uICcgK1xuICAgICAgICAndGhhdCByZXR1cm5zIGEgcGVyLWluc3RhbmNlIHZhbHVlIGluIGNvbXBvbmVudCAnICtcbiAgICAgICAgJ2RlZmluaXRpb25zLicsXG4gICAgICAgIHZtXG4gICAgICApO1xuICAgICAgcmV0dXJuIHBhcmVudFZhbFxuICAgIH1cbiAgICBpZiAoIXBhcmVudFZhbCkge1xuICAgICAgcmV0dXJuIGNoaWxkVmFsXG4gICAgfVxuICAgIC8vIHdoZW4gcGFyZW50VmFsICYgY2hpbGRWYWwgYXJlIGJvdGggcHJlc2VudCxcbiAgICAvLyB3ZSBuZWVkIHRvIHJldHVybiBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGVcbiAgICAvLyBtZXJnZWQgcmVzdWx0IG9mIGJvdGggZnVuY3Rpb25zLi4uIG5vIG5lZWQgdG9cbiAgICAvLyBjaGVjayBpZiBwYXJlbnRWYWwgaXMgYSBmdW5jdGlvbiBoZXJlIGJlY2F1c2VcbiAgICAvLyBpdCBoYXMgdG8gYmUgYSBmdW5jdGlvbiB0byBwYXNzIHByZXZpb3VzIG1lcmdlcy5cbiAgICByZXR1cm4gZnVuY3Rpb24gbWVyZ2VkRGF0YUZuICgpIHtcbiAgICAgIHJldHVybiBtZXJnZURhdGEoXG4gICAgICAgIGNoaWxkVmFsLmNhbGwodGhpcyksXG4gICAgICAgIHBhcmVudFZhbC5jYWxsKHRoaXMpXG4gICAgICApXG4gICAgfVxuICB9IGVsc2UgaWYgKHBhcmVudFZhbCB8fCBjaGlsZFZhbCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBtZXJnZWRJbnN0YW5jZURhdGFGbiAoKSB7XG4gICAgICAvLyBpbnN0YW5jZSBtZXJnZVxuICAgICAgdmFyIGluc3RhbmNlRGF0YSA9IHR5cGVvZiBjaGlsZFZhbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IGNoaWxkVmFsLmNhbGwodm0pXG4gICAgICAgIDogY2hpbGRWYWw7XG4gICAgICB2YXIgZGVmYXVsdERhdGEgPSB0eXBlb2YgcGFyZW50VmFsID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcGFyZW50VmFsLmNhbGwodm0pXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgaWYgKGluc3RhbmNlRGF0YSkge1xuICAgICAgICByZXR1cm4gbWVyZ2VEYXRhKGluc3RhbmNlRGF0YSwgZGVmYXVsdERhdGEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZGVmYXVsdERhdGFcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogSG9va3MgYW5kIHByb3BzIGFyZSBtZXJnZWQgYXMgYXJyYXlzLlxuICovXG5mdW5jdGlvbiBtZXJnZUhvb2sgKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsXG4pIHtcbiAgcmV0dXJuIGNoaWxkVmFsXG4gICAgPyBwYXJlbnRWYWxcbiAgICAgID8gcGFyZW50VmFsLmNvbmNhdChjaGlsZFZhbClcbiAgICAgIDogQXJyYXkuaXNBcnJheShjaGlsZFZhbClcbiAgICAgICAgPyBjaGlsZFZhbFxuICAgICAgICA6IFtjaGlsZFZhbF1cbiAgICA6IHBhcmVudFZhbFxufVxuXG5jb25maWcuX2xpZmVjeWNsZUhvb2tzLmZvckVhY2goZnVuY3Rpb24gKGhvb2spIHtcbiAgc3RyYXRzW2hvb2tdID0gbWVyZ2VIb29rO1xufSk7XG5cbi8qKlxuICogQXNzZXRzXG4gKlxuICogV2hlbiBhIHZtIGlzIHByZXNlbnQgKGluc3RhbmNlIGNyZWF0aW9uKSwgd2UgbmVlZCB0byBkb1xuICogYSB0aHJlZS13YXkgbWVyZ2UgYmV0d2VlbiBjb25zdHJ1Y3RvciBvcHRpb25zLCBpbnN0YW5jZVxuICogb3B0aW9ucyBhbmQgcGFyZW50IG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlQXNzZXRzIChwYXJlbnRWYWwsIGNoaWxkVmFsKSB7XG4gIHZhciByZXMgPSBPYmplY3QuY3JlYXRlKHBhcmVudFZhbCB8fCBudWxsKTtcbiAgcmV0dXJuIGNoaWxkVmFsXG4gICAgPyBleHRlbmQocmVzLCBjaGlsZFZhbClcbiAgICA6IHJlc1xufVxuXG5jb25maWcuX2Fzc2V0VHlwZXMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICBzdHJhdHNbdHlwZSArICdzJ10gPSBtZXJnZUFzc2V0cztcbn0pO1xuXG4vKipcbiAqIFdhdGNoZXJzLlxuICpcbiAqIFdhdGNoZXJzIGhhc2hlcyBzaG91bGQgbm90IG92ZXJ3cml0ZSBvbmVcbiAqIGFub3RoZXIsIHNvIHdlIG1lcmdlIHRoZW0gYXMgYXJyYXlzLlxuICovXG5zdHJhdHMud2F0Y2ggPSBmdW5jdGlvbiAocGFyZW50VmFsLCBjaGlsZFZhbCkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCFjaGlsZFZhbCkgeyByZXR1cm4gT2JqZWN0LmNyZWF0ZShwYXJlbnRWYWwgfHwgbnVsbCkgfVxuICBpZiAoIXBhcmVudFZhbCkgeyByZXR1cm4gY2hpbGRWYWwgfVxuICB2YXIgcmV0ID0ge307XG4gIGV4dGVuZChyZXQsIHBhcmVudFZhbCk7XG4gIGZvciAodmFyIGtleSBpbiBjaGlsZFZhbCkge1xuICAgIHZhciBwYXJlbnQgPSByZXRba2V5XTtcbiAgICB2YXIgY2hpbGQgPSBjaGlsZFZhbFtrZXldO1xuICAgIGlmIChwYXJlbnQgJiYgIUFycmF5LmlzQXJyYXkocGFyZW50KSkge1xuICAgICAgcGFyZW50ID0gW3BhcmVudF07XG4gICAgfVxuICAgIHJldFtrZXldID0gcGFyZW50XG4gICAgICA/IHBhcmVudC5jb25jYXQoY2hpbGQpXG4gICAgICA6IFtjaGlsZF07XG4gIH1cbiAgcmV0dXJuIHJldFxufTtcblxuLyoqXG4gKiBPdGhlciBvYmplY3QgaGFzaGVzLlxuICovXG5zdHJhdHMucHJvcHMgPVxuc3RyYXRzLm1ldGhvZHMgPVxuc3RyYXRzLmNvbXB1dGVkID0gZnVuY3Rpb24gKHBhcmVudFZhbCwgY2hpbGRWYWwpIHtcbiAgaWYgKCFjaGlsZFZhbCkgeyByZXR1cm4gT2JqZWN0LmNyZWF0ZShwYXJlbnRWYWwgfHwgbnVsbCkgfVxuICBpZiAoIXBhcmVudFZhbCkgeyByZXR1cm4gY2hpbGRWYWwgfVxuICB2YXIgcmV0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgZXh0ZW5kKHJldCwgcGFyZW50VmFsKTtcbiAgZXh0ZW5kKHJldCwgY2hpbGRWYWwpO1xuICByZXR1cm4gcmV0XG59O1xuXG4vKipcbiAqIERlZmF1bHQgc3RyYXRlZ3kuXG4gKi9cbnZhciBkZWZhdWx0U3RyYXQgPSBmdW5jdGlvbiAocGFyZW50VmFsLCBjaGlsZFZhbCkge1xuICByZXR1cm4gY2hpbGRWYWwgPT09IHVuZGVmaW5lZFxuICAgID8gcGFyZW50VmFsXG4gICAgOiBjaGlsZFZhbFxufTtcblxuLyoqXG4gKiBWYWxpZGF0ZSBjb21wb25lbnQgbmFtZXNcbiAqL1xuZnVuY3Rpb24gY2hlY2tDb21wb25lbnRzIChvcHRpb25zKSB7XG4gIGZvciAodmFyIGtleSBpbiBvcHRpb25zLmNvbXBvbmVudHMpIHtcbiAgICB2YXIgbG93ZXIgPSBrZXkudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoaXNCdWlsdEluVGFnKGxvd2VyKSB8fCBjb25maWcuaXNSZXNlcnZlZFRhZyhsb3dlcikpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdEbyBub3QgdXNlIGJ1aWx0LWluIG9yIHJlc2VydmVkIEhUTUwgZWxlbWVudHMgYXMgY29tcG9uZW50ICcgK1xuICAgICAgICAnaWQ6ICcgKyBrZXlcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRW5zdXJlIGFsbCBwcm9wcyBvcHRpb24gc3ludGF4IGFyZSBub3JtYWxpemVkIGludG8gdGhlXG4gKiBPYmplY3QtYmFzZWQgZm9ybWF0LlxuICovXG5mdW5jdGlvbiBub3JtYWxpemVQcm9wcyAob3B0aW9ucykge1xuICB2YXIgcHJvcHMgPSBvcHRpb25zLnByb3BzO1xuICBpZiAoIXByb3BzKSB7IHJldHVybiB9XG4gIHZhciByZXMgPSB7fTtcbiAgdmFyIGksIHZhbCwgbmFtZTtcbiAgaWYgKEFycmF5LmlzQXJyYXkocHJvcHMpKSB7XG4gICAgaSA9IHByb3BzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB2YWwgPSBwcm9wc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgICAgICBuYW1lID0gY2FtZWxpemUodmFsKTtcbiAgICAgICAgcmVzW25hbWVdID0geyB0eXBlOiBudWxsIH07XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgd2FybigncHJvcHMgbXVzdCBiZSBzdHJpbmdzIHdoZW4gdXNpbmcgYXJyYXkgc3ludGF4LicpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHByb3BzKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgdmFsID0gcHJvcHNba2V5XTtcbiAgICAgIG5hbWUgPSBjYW1lbGl6ZShrZXkpO1xuICAgICAgcmVzW25hbWVdID0gaXNQbGFpbk9iamVjdCh2YWwpXG4gICAgICAgID8gdmFsXG4gICAgICAgIDogeyB0eXBlOiB2YWwgfTtcbiAgICB9XG4gIH1cbiAgb3B0aW9ucy5wcm9wcyA9IHJlcztcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgcmF3IGZ1bmN0aW9uIGRpcmVjdGl2ZXMgaW50byBvYmplY3QgZm9ybWF0LlxuICovXG5mdW5jdGlvbiBub3JtYWxpemVEaXJlY3RpdmVzIChvcHRpb25zKSB7XG4gIHZhciBkaXJzID0gb3B0aW9ucy5kaXJlY3RpdmVzO1xuICBpZiAoZGlycykge1xuICAgIGZvciAodmFyIGtleSBpbiBkaXJzKSB7XG4gICAgICB2YXIgZGVmID0gZGlyc1trZXldO1xuICAgICAgaWYgKHR5cGVvZiBkZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZGlyc1trZXldID0geyBiaW5kOiBkZWYsIHVwZGF0ZTogZGVmIH07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogTWVyZ2UgdHdvIG9wdGlvbiBvYmplY3RzIGludG8gYSBuZXcgb25lLlxuICogQ29yZSB1dGlsaXR5IHVzZWQgaW4gYm90aCBpbnN0YW50aWF0aW9uIGFuZCBpbmhlcml0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWVyZ2VPcHRpb25zIChcbiAgcGFyZW50LFxuICBjaGlsZCxcbiAgdm1cbikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNoZWNrQ29tcG9uZW50cyhjaGlsZCk7XG4gIH1cbiAgbm9ybWFsaXplUHJvcHMoY2hpbGQpO1xuICBub3JtYWxpemVEaXJlY3RpdmVzKGNoaWxkKTtcbiAgdmFyIGV4dGVuZHNGcm9tID0gY2hpbGQuZXh0ZW5kcztcbiAgaWYgKGV4dGVuZHNGcm9tKSB7XG4gICAgcGFyZW50ID0gdHlwZW9mIGV4dGVuZHNGcm9tID09PSAnZnVuY3Rpb24nXG4gICAgICA/IG1lcmdlT3B0aW9ucyhwYXJlbnQsIGV4dGVuZHNGcm9tLm9wdGlvbnMsIHZtKVxuICAgICAgOiBtZXJnZU9wdGlvbnMocGFyZW50LCBleHRlbmRzRnJvbSwgdm0pO1xuICB9XG4gIGlmIChjaGlsZC5taXhpbnMpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGNoaWxkLm1peGlucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHZhciBtaXhpbiA9IGNoaWxkLm1peGluc1tpXTtcbiAgICAgIGlmIChtaXhpbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBWdWUkMikge1xuICAgICAgICBtaXhpbiA9IG1peGluLm9wdGlvbnM7XG4gICAgICB9XG4gICAgICBwYXJlbnQgPSBtZXJnZU9wdGlvbnMocGFyZW50LCBtaXhpbiwgdm0pO1xuICAgIH1cbiAgfVxuICB2YXIgb3B0aW9ucyA9IHt9O1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBwYXJlbnQpIHtcbiAgICBtZXJnZUZpZWxkKGtleSk7XG4gIH1cbiAgZm9yIChrZXkgaW4gY2hpbGQpIHtcbiAgICBpZiAoIWhhc093bihwYXJlbnQsIGtleSkpIHtcbiAgICAgIG1lcmdlRmllbGQoa2V5KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gbWVyZ2VGaWVsZCAoa2V5KSB7XG4gICAgdmFyIHN0cmF0ID0gc3RyYXRzW2tleV0gfHwgZGVmYXVsdFN0cmF0O1xuICAgIG9wdGlvbnNba2V5XSA9IHN0cmF0KHBhcmVudFtrZXldLCBjaGlsZFtrZXldLCB2bSwga2V5KTtcbiAgfVxuICByZXR1cm4gb3B0aW9uc1xufVxuXG4vKipcbiAqIFJlc29sdmUgYW4gYXNzZXQuXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgYmVjYXVzZSBjaGlsZCBpbnN0YW5jZXMgbmVlZCBhY2Nlc3NcbiAqIHRvIGFzc2V0cyBkZWZpbmVkIGluIGl0cyBhbmNlc3RvciBjaGFpbi5cbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZUFzc2V0IChcbiAgb3B0aW9ucyxcbiAgdHlwZSxcbiAgaWQsXG4gIHdhcm5NaXNzaW5nXG4pIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICh0eXBlb2YgaWQgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIGFzc2V0cyA9IG9wdGlvbnNbdHlwZV07XG4gIC8vIGNoZWNrIGxvY2FsIHJlZ2lzdHJhdGlvbiB2YXJpYXRpb25zIGZpcnN0XG4gIGlmIChoYXNPd24oYXNzZXRzLCBpZCkpIHsgcmV0dXJuIGFzc2V0c1tpZF0gfVxuICB2YXIgY2FtZWxpemVkSWQgPSBjYW1lbGl6ZShpZCk7XG4gIGlmIChoYXNPd24oYXNzZXRzLCBjYW1lbGl6ZWRJZCkpIHsgcmV0dXJuIGFzc2V0c1tjYW1lbGl6ZWRJZF0gfVxuICB2YXIgUGFzY2FsQ2FzZUlkID0gY2FwaXRhbGl6ZShjYW1lbGl6ZWRJZCk7XG4gIGlmIChoYXNPd24oYXNzZXRzLCBQYXNjYWxDYXNlSWQpKSB7IHJldHVybiBhc3NldHNbUGFzY2FsQ2FzZUlkXSB9XG4gIC8vIGZhbGxiYWNrIHRvIHByb3RvdHlwZSBjaGFpblxuICB2YXIgcmVzID0gYXNzZXRzW2lkXSB8fCBhc3NldHNbY2FtZWxpemVkSWRdIHx8IGFzc2V0c1tQYXNjYWxDYXNlSWRdO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuTWlzc2luZyAmJiAhcmVzKSB7XG4gICAgd2FybihcbiAgICAgICdGYWlsZWQgdG8gcmVzb2x2ZSAnICsgdHlwZS5zbGljZSgwLCAtMSkgKyAnOiAnICsgaWQsXG4gICAgICBvcHRpb25zXG4gICAgKTtcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3AgKFxuICBrZXksXG4gIHByb3BPcHRpb25zLFxuICBwcm9wc0RhdGEsXG4gIHZtXG4pIHtcbiAgdmFyIHByb3AgPSBwcm9wT3B0aW9uc1trZXldO1xuICB2YXIgYWJzZW50ID0gIWhhc093bihwcm9wc0RhdGEsIGtleSk7XG4gIHZhciB2YWx1ZSA9IHByb3BzRGF0YVtrZXldO1xuICAvLyBoYW5kbGUgYm9vbGVhbiBwcm9wc1xuICBpZiAoaXNUeXBlKEJvb2xlYW4sIHByb3AudHlwZSkpIHtcbiAgICBpZiAoYWJzZW50ICYmICFoYXNPd24ocHJvcCwgJ2RlZmF1bHQnKSkge1xuICAgICAgdmFsdWUgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKCFpc1R5cGUoU3RyaW5nLCBwcm9wLnR5cGUpICYmICh2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09IGh5cGhlbmF0ZShrZXkpKSkge1xuICAgICAgdmFsdWUgPSB0cnVlO1xuICAgIH1cbiAgfVxuICAvLyBjaGVjayBkZWZhdWx0IHZhbHVlXG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFsdWUgPSBnZXRQcm9wRGVmYXVsdFZhbHVlKHZtLCBwcm9wLCBrZXkpO1xuICAgIC8vIHNpbmNlIHRoZSBkZWZhdWx0IHZhbHVlIGlzIGEgZnJlc2ggY29weSxcbiAgICAvLyBtYWtlIHN1cmUgdG8gb2JzZXJ2ZSBpdC5cbiAgICB2YXIgcHJldlNob3VsZENvbnZlcnQgPSBvYnNlcnZlclN0YXRlLnNob3VsZENvbnZlcnQ7XG4gICAgb2JzZXJ2ZXJTdGF0ZS5zaG91bGRDb252ZXJ0ID0gdHJ1ZTtcbiAgICBvYnNlcnZlKHZhbHVlKTtcbiAgICBvYnNlcnZlclN0YXRlLnNob3VsZENvbnZlcnQgPSBwcmV2U2hvdWxkQ29udmVydDtcbiAgfVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydFByb3AocHJvcCwga2V5LCB2YWx1ZSwgdm0sIGFic2VudCk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbi8qKlxuICogR2V0IHRoZSBkZWZhdWx0IHZhbHVlIG9mIGEgcHJvcC5cbiAqL1xuZnVuY3Rpb24gZ2V0UHJvcERlZmF1bHRWYWx1ZSAodm0sIHByb3AsIGtleSkge1xuICAvLyBubyBkZWZhdWx0LCByZXR1cm4gdW5kZWZpbmVkXG4gIGlmICghaGFzT3duKHByb3AsICdkZWZhdWx0JykpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cbiAgdmFyIGRlZiA9IHByb3AuZGVmYXVsdDtcbiAgLy8gd2FybiBhZ2FpbnN0IG5vbi1mYWN0b3J5IGRlZmF1bHRzIGZvciBPYmplY3QgJiBBcnJheVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBpc09iamVjdChkZWYpKSB7XG4gICAgd2FybihcbiAgICAgICdJbnZhbGlkIGRlZmF1bHQgdmFsdWUgZm9yIHByb3AgXCInICsga2V5ICsgJ1wiOiAnICtcbiAgICAgICdQcm9wcyB3aXRoIHR5cGUgT2JqZWN0L0FycmF5IG11c3QgdXNlIGEgZmFjdG9yeSBmdW5jdGlvbiAnICtcbiAgICAgICd0byByZXR1cm4gdGhlIGRlZmF1bHQgdmFsdWUuJyxcbiAgICAgIHZtXG4gICAgKTtcbiAgfVxuICAvLyB0aGUgcmF3IHByb3AgdmFsdWUgd2FzIGFsc28gdW5kZWZpbmVkIGZyb20gcHJldmlvdXMgcmVuZGVyLFxuICAvLyByZXR1cm4gcHJldmlvdXMgZGVmYXVsdCB2YWx1ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB3YXRjaGVyIHRyaWdnZXJcbiAgaWYgKHZtICYmIHZtLiRvcHRpb25zLnByb3BzRGF0YSAmJlxuICAgIHZtLiRvcHRpb25zLnByb3BzRGF0YVtrZXldID09PSB1bmRlZmluZWQgJiZcbiAgICB2bS5fcHJvcHNba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHZtLl9wcm9wc1trZXldXG4gIH1cbiAgLy8gY2FsbCBmYWN0b3J5IGZ1bmN0aW9uIGZvciBub24tRnVuY3Rpb24gdHlwZXNcbiAgLy8gYSB2YWx1ZSBpcyBGdW5jdGlvbiBpZiBpdHMgcHJvdG90eXBlIGlzIGZ1bmN0aW9uIGV2ZW4gYWNyb3NzIGRpZmZlcmVudCBleGVjdXRpb24gY29udGV4dFxuICByZXR1cm4gdHlwZW9mIGRlZiA9PT0gJ2Z1bmN0aW9uJyAmJiBnZXRUeXBlKHByb3AudHlwZSkgIT09ICdGdW5jdGlvbidcbiAgICA/IGRlZi5jYWxsKHZtKVxuICAgIDogZGVmXG59XG5cbi8qKlxuICogQXNzZXJ0IHdoZXRoZXIgYSBwcm9wIGlzIHZhbGlkLlxuICovXG5mdW5jdGlvbiBhc3NlcnRQcm9wIChcbiAgcHJvcCxcbiAgbmFtZSxcbiAgdmFsdWUsXG4gIHZtLFxuICBhYnNlbnRcbikge1xuICBpZiAocHJvcC5yZXF1aXJlZCAmJiBhYnNlbnQpIHtcbiAgICB3YXJuKFxuICAgICAgJ01pc3NpbmcgcmVxdWlyZWQgcHJvcDogXCInICsgbmFtZSArICdcIicsXG4gICAgICB2bVxuICAgICk7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwgJiYgIXByb3AucmVxdWlyZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgdHlwZSA9IHByb3AudHlwZTtcbiAgdmFyIHZhbGlkID0gIXR5cGUgfHwgdHlwZSA9PT0gdHJ1ZTtcbiAgdmFyIGV4cGVjdGVkVHlwZXMgPSBbXTtcbiAgaWYgKHR5cGUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHR5cGUgPSBbdHlwZV07XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHlwZS5sZW5ndGggJiYgIXZhbGlkOyBpKyspIHtcbiAgICAgIHZhciBhc3NlcnRlZFR5cGUgPSBhc3NlcnRUeXBlKHZhbHVlLCB0eXBlW2ldKTtcbiAgICAgIGV4cGVjdGVkVHlwZXMucHVzaChhc3NlcnRlZFR5cGUuZXhwZWN0ZWRUeXBlIHx8ICcnKTtcbiAgICAgIHZhbGlkID0gYXNzZXJ0ZWRUeXBlLnZhbGlkO1xuICAgIH1cbiAgfVxuICBpZiAoIXZhbGlkKSB7XG4gICAgd2FybihcbiAgICAgICdJbnZhbGlkIHByb3A6IHR5cGUgY2hlY2sgZmFpbGVkIGZvciBwcm9wIFwiJyArIG5hbWUgKyAnXCIuJyArXG4gICAgICAnIEV4cGVjdGVkICcgKyBleHBlY3RlZFR5cGVzLm1hcChjYXBpdGFsaXplKS5qb2luKCcsICcpICtcbiAgICAgICcsIGdvdCAnICsgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSkgKyAnLicsXG4gICAgICB2bVxuICAgICk7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIHZhbGlkYXRvciA9IHByb3AudmFsaWRhdG9yO1xuICBpZiAodmFsaWRhdG9yKSB7XG4gICAgaWYgKCF2YWxpZGF0b3IodmFsdWUpKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAnSW52YWxpZCBwcm9wOiBjdXN0b20gdmFsaWRhdG9yIGNoZWNrIGZhaWxlZCBmb3IgcHJvcCBcIicgKyBuYW1lICsgJ1wiLicsXG4gICAgICAgIHZtXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFzc2VydCB0aGUgdHlwZSBvZiBhIHZhbHVlXG4gKi9cbmZ1bmN0aW9uIGFzc2VydFR5cGUgKHZhbHVlLCB0eXBlKSB7XG4gIHZhciB2YWxpZDtcbiAgdmFyIGV4cGVjdGVkVHlwZSA9IGdldFR5cGUodHlwZSk7XG4gIGlmIChleHBlY3RlZFR5cGUgPT09ICdTdHJpbmcnKSB7XG4gICAgdmFsaWQgPSB0eXBlb2YgdmFsdWUgPT09IChleHBlY3RlZFR5cGUgPSAnc3RyaW5nJyk7XG4gIH0gZWxzZSBpZiAoZXhwZWN0ZWRUeXBlID09PSAnTnVtYmVyJykge1xuICAgIHZhbGlkID0gdHlwZW9mIHZhbHVlID09PSAoZXhwZWN0ZWRUeXBlID0gJ251bWJlcicpO1xuICB9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSA9PT0gJ0Jvb2xlYW4nKSB7XG4gICAgdmFsaWQgPSB0eXBlb2YgdmFsdWUgPT09IChleHBlY3RlZFR5cGUgPSAnYm9vbGVhbicpO1xuICB9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSA9PT0gJ0Z1bmN0aW9uJykge1xuICAgIHZhbGlkID0gdHlwZW9mIHZhbHVlID09PSAoZXhwZWN0ZWRUeXBlID0gJ2Z1bmN0aW9uJyk7XG4gIH0gZWxzZSBpZiAoZXhwZWN0ZWRUeXBlID09PSAnT2JqZWN0Jykge1xuICAgIHZhbGlkID0gaXNQbGFpbk9iamVjdCh2YWx1ZSk7XG4gIH0gZWxzZSBpZiAoZXhwZWN0ZWRUeXBlID09PSAnQXJyYXknKSB7XG4gICAgdmFsaWQgPSBBcnJheS5pc0FycmF5KHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB2YWxpZCA9IHZhbHVlIGluc3RhbmNlb2YgdHlwZTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHZhbGlkOiB2YWxpZCxcbiAgICBleHBlY3RlZFR5cGU6IGV4cGVjdGVkVHlwZVxuICB9XG59XG5cbi8qKlxuICogVXNlIGZ1bmN0aW9uIHN0cmluZyBuYW1lIHRvIGNoZWNrIGJ1aWx0LWluIHR5cGVzLFxuICogYmVjYXVzZSBhIHNpbXBsZSBlcXVhbGl0eSBjaGVjayB3aWxsIGZhaWwgd2hlbiBydW5uaW5nXG4gKiBhY3Jvc3MgZGlmZmVyZW50IHZtcyAvIGlmcmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGdldFR5cGUgKGZuKSB7XG4gIHZhciBtYXRjaCA9IGZuICYmIGZuLnRvU3RyaW5nKCkubWF0Y2goL15cXHMqZnVuY3Rpb24gKFxcdyspLyk7XG4gIHJldHVybiBtYXRjaCAmJiBtYXRjaFsxXVxufVxuXG5mdW5jdGlvbiBpc1R5cGUgKHR5cGUsIGZuKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShmbikpIHtcbiAgICByZXR1cm4gZ2V0VHlwZShmbikgPT09IGdldFR5cGUodHlwZSlcbiAgfVxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gZm4ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoZ2V0VHlwZShmbltpXSkgPT09IGdldFR5cGUodHlwZSkpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBoYW5kbGVFcnJvciAoZXJyLCB2bSwgdHlwZSkge1xuICBpZiAoY29uZmlnLmVycm9ySGFuZGxlcikge1xuICAgIGNvbmZpZy5lcnJvckhhbmRsZXIuY2FsbChudWxsLCBlcnIsIHZtLCB0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgd2FybigoXCJFcnJvciBpbiBcIiArIHR5cGUgKyBcIjpcIiksIHZtKTtcbiAgICB9XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoaW5Ccm93c2VyICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cbn1cblxuLyogbm90IHR5cGUgY2hlY2tpbmcgdGhpcyBmaWxlIGJlY2F1c2UgZmxvdyBkb2Vzbid0IHBsYXkgd2VsbCB3aXRoIFByb3h5ICovXG5cbnZhciBpbml0UHJveHk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBhbGxvd2VkR2xvYmFscyA9IG1ha2VNYXAoXG4gICAgJ0luZmluaXR5LHVuZGVmaW5lZCxOYU4saXNGaW5pdGUsaXNOYU4sJyArXG4gICAgJ3BhcnNlRmxvYXQscGFyc2VJbnQsZGVjb2RlVVJJLGRlY29kZVVSSUNvbXBvbmVudCxlbmNvZGVVUkksZW5jb2RlVVJJQ29tcG9uZW50LCcgK1xuICAgICdNYXRoLE51bWJlcixEYXRlLEFycmF5LE9iamVjdCxCb29sZWFuLFN0cmluZyxSZWdFeHAsTWFwLFNldCxKU09OLEludGwsJyArXG4gICAgJ3JlcXVpcmUnIC8vIGZvciBXZWJwYWNrL0Jyb3dzZXJpZnlcbiAgKTtcblxuICB2YXIgd2Fybk5vblByZXNlbnQgPSBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHtcbiAgICB3YXJuKFxuICAgICAgXCJQcm9wZXJ0eSBvciBtZXRob2QgXFxcIlwiICsga2V5ICsgXCJcXFwiIGlzIG5vdCBkZWZpbmVkIG9uIHRoZSBpbnN0YW5jZSBidXQgXCIgK1xuICAgICAgXCJyZWZlcmVuY2VkIGR1cmluZyByZW5kZXIuIE1ha2Ugc3VyZSB0byBkZWNsYXJlIHJlYWN0aXZlIGRhdGEgXCIgK1xuICAgICAgXCJwcm9wZXJ0aWVzIGluIHRoZSBkYXRhIG9wdGlvbi5cIixcbiAgICAgIHRhcmdldFxuICAgICk7XG4gIH07XG5cbiAgdmFyIGhhc1Byb3h5ID1cbiAgICB0eXBlb2YgUHJveHkgIT09ICd1bmRlZmluZWQnICYmXG4gICAgUHJveHkudG9TdHJpbmcoKS5tYXRjaCgvbmF0aXZlIGNvZGUvKTtcblxuICBpZiAoaGFzUHJveHkpIHtcbiAgICB2YXIgaXNCdWlsdEluTW9kaWZpZXIgPSBtYWtlTWFwKCdzdG9wLHByZXZlbnQsc2VsZixjdHJsLHNoaWZ0LGFsdCxtZXRhJyk7XG4gICAgY29uZmlnLmtleUNvZGVzID0gbmV3IFByb3h5KGNvbmZpZy5rZXlDb2Rlcywge1xuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQgKHRhcmdldCwga2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAoaXNCdWlsdEluTW9kaWZpZXIoa2V5KSkge1xuICAgICAgICAgIHdhcm4oKFwiQXZvaWQgb3ZlcndyaXRpbmcgYnVpbHQtaW4gbW9kaWZpZXIgaW4gY29uZmlnLmtleUNvZGVzOiAuXCIgKyBrZXkpKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHZhciBoYXNIYW5kbGVyID0ge1xuICAgIGhhczogZnVuY3Rpb24gaGFzICh0YXJnZXQsIGtleSkge1xuICAgICAgdmFyIGhhcyA9IGtleSBpbiB0YXJnZXQ7XG4gICAgICB2YXIgaXNBbGxvd2VkID0gYWxsb3dlZEdsb2JhbHMoa2V5KSB8fCBrZXkuY2hhckF0KDApID09PSAnXyc7XG4gICAgICBpZiAoIWhhcyAmJiAhaXNBbGxvd2VkKSB7XG4gICAgICAgIHdhcm5Ob25QcmVzZW50KHRhcmdldCwga2V5KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBoYXMgfHwgIWlzQWxsb3dlZFxuICAgIH1cbiAgfTtcblxuICB2YXIgZ2V0SGFuZGxlciA9IHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCAodGFyZ2V0LCBrZXkpIHtcbiAgICAgIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiAhKGtleSBpbiB0YXJnZXQpKSB7XG4gICAgICAgIHdhcm5Ob25QcmVzZW50KHRhcmdldCwga2V5KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXJnZXRba2V5XVxuICAgIH1cbiAgfTtcblxuICBpbml0UHJveHkgPSBmdW5jdGlvbiBpbml0UHJveHkgKHZtKSB7XG4gICAgaWYgKGhhc1Byb3h5KSB7XG4gICAgICAvLyBkZXRlcm1pbmUgd2hpY2ggcHJveHkgaGFuZGxlciB0byB1c2VcbiAgICAgIHZhciBvcHRpb25zID0gdm0uJG9wdGlvbnM7XG4gICAgICB2YXIgaGFuZGxlcnMgPSBvcHRpb25zLnJlbmRlciAmJiBvcHRpb25zLnJlbmRlci5fd2l0aFN0cmlwcGVkXG4gICAgICAgID8gZ2V0SGFuZGxlclxuICAgICAgICA6IGhhc0hhbmRsZXI7XG4gICAgICB2bS5fcmVuZGVyUHJveHkgPSBuZXcgUHJveHkodm0sIGhhbmRsZXJzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdm0uX3JlbmRlclByb3h5ID0gdm07XG4gICAgfVxuICB9O1xufVxuXG4vKiAgKi9cblxudmFyIFZOb2RlID0gZnVuY3Rpb24gVk5vZGUgKFxuICB0YWcsXG4gIGRhdGEsXG4gIGNoaWxkcmVuLFxuICB0ZXh0LFxuICBlbG0sXG4gIGNvbnRleHQsXG4gIGNvbXBvbmVudE9wdGlvbnNcbikge1xuICB0aGlzLnRhZyA9IHRhZztcbiAgdGhpcy5kYXRhID0gZGF0YTtcbiAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB0aGlzLnRleHQgPSB0ZXh0O1xuICB0aGlzLmVsbSA9IGVsbTtcbiAgdGhpcy5ucyA9IHVuZGVmaW5lZDtcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5mdW5jdGlvbmFsQ29udGV4dCA9IHVuZGVmaW5lZDtcbiAgdGhpcy5rZXkgPSBkYXRhICYmIGRhdGEua2V5O1xuICB0aGlzLmNvbXBvbmVudE9wdGlvbnMgPSBjb21wb25lbnRPcHRpb25zO1xuICB0aGlzLmNvbXBvbmVudEluc3RhbmNlID0gdW5kZWZpbmVkO1xuICB0aGlzLnBhcmVudCA9IHVuZGVmaW5lZDtcbiAgdGhpcy5yYXcgPSBmYWxzZTtcbiAgdGhpcy5pc1N0YXRpYyA9IGZhbHNlO1xuICB0aGlzLmlzUm9vdEluc2VydCA9IHRydWU7XG4gIHRoaXMuaXNDb21tZW50ID0gZmFsc2U7XG4gIHRoaXMuaXNDbG9uZWQgPSBmYWxzZTtcbiAgdGhpcy5pc09uY2UgPSBmYWxzZTtcbn07XG5cbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMgPSB7IGNoaWxkOiB7fSB9O1xuXG4vLyBERVBSRUNBVEVEOiBhbGlhcyBmb3IgY29tcG9uZW50SW5zdGFuY2UgZm9yIGJhY2t3YXJkcyBjb21wYXQuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xucHJvdG90eXBlQWNjZXNzb3JzLmNoaWxkLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuY29tcG9uZW50SW5zdGFuY2Vcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBWTm9kZS5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG52YXIgY3JlYXRlRW1wdHlWTm9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG5vZGUgPSBuZXcgVk5vZGUoKTtcbiAgbm9kZS50ZXh0ID0gJyc7XG4gIG5vZGUuaXNDb21tZW50ID0gdHJ1ZTtcbiAgcmV0dXJuIG5vZGVcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHRWTm9kZSAodmFsKSB7XG4gIHJldHVybiBuZXcgVk5vZGUodW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgU3RyaW5nKHZhbCkpXG59XG5cbi8vIG9wdGltaXplZCBzaGFsbG93IGNsb25lXG4vLyB1c2VkIGZvciBzdGF0aWMgbm9kZXMgYW5kIHNsb3Qgbm9kZXMgYmVjYXVzZSB0aGV5IG1heSBiZSByZXVzZWQgYWNyb3NzXG4vLyBtdWx0aXBsZSByZW5kZXJzLCBjbG9uaW5nIHRoZW0gYXZvaWRzIGVycm9ycyB3aGVuIERPTSBtYW5pcHVsYXRpb25zIHJlbHlcbi8vIG9uIHRoZWlyIGVsbSByZWZlcmVuY2UuXG5mdW5jdGlvbiBjbG9uZVZOb2RlICh2bm9kZSkge1xuICB2YXIgY2xvbmVkID0gbmV3IFZOb2RlKFxuICAgIHZub2RlLnRhZyxcbiAgICB2bm9kZS5kYXRhLFxuICAgIHZub2RlLmNoaWxkcmVuLFxuICAgIHZub2RlLnRleHQsXG4gICAgdm5vZGUuZWxtLFxuICAgIHZub2RlLmNvbnRleHQsXG4gICAgdm5vZGUuY29tcG9uZW50T3B0aW9uc1xuICApO1xuICBjbG9uZWQubnMgPSB2bm9kZS5ucztcbiAgY2xvbmVkLmlzU3RhdGljID0gdm5vZGUuaXNTdGF0aWM7XG4gIGNsb25lZC5rZXkgPSB2bm9kZS5rZXk7XG4gIGNsb25lZC5pc0Nsb25lZCA9IHRydWU7XG4gIHJldHVybiBjbG9uZWRcbn1cblxuZnVuY3Rpb24gY2xvbmVWTm9kZXMgKHZub2Rlcykge1xuICB2YXIgcmVzID0gbmV3IEFycmF5KHZub2Rlcy5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIHJlc1tpXSA9IGNsb25lVk5vZGUodm5vZGVzW2ldKTtcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qICAqL1xuXG52YXIgbm9ybWFsaXplRXZlbnQgPSBjYWNoZWQoZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyIG9uY2UkJDEgPSBuYW1lLmNoYXJBdCgwKSA9PT0gJ34nOyAvLyBQcmVmaXhlZCBsYXN0LCBjaGVja2VkIGZpcnN0XG4gIG5hbWUgPSBvbmNlJCQxID8gbmFtZS5zbGljZSgxKSA6IG5hbWU7XG4gIHZhciBjYXB0dXJlID0gbmFtZS5jaGFyQXQoMCkgPT09ICchJztcbiAgbmFtZSA9IGNhcHR1cmUgPyBuYW1lLnNsaWNlKDEpIDogbmFtZTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIG9uY2U6IG9uY2UkJDEsXG4gICAgY2FwdHVyZTogY2FwdHVyZVxuICB9XG59KTtcblxuZnVuY3Rpb24gY3JlYXRlRm5JbnZva2VyIChmbnMpIHtcbiAgZnVuY3Rpb24gaW52b2tlciAoKSB7XG4gICAgdmFyIGFyZ3VtZW50cyQxID0gYXJndW1lbnRzO1xuXG4gICAgdmFyIGZucyA9IGludm9rZXIuZm5zO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGZucykpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZuc1tpXS5hcHBseShudWxsLCBhcmd1bWVudHMkMSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHJldHVybiBoYW5kbGVyIHJldHVybiB2YWx1ZSBmb3Igc2luZ2xlIGhhbmRsZXJzXG4gICAgICByZXR1cm4gZm5zLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICB9XG4gIH1cbiAgaW52b2tlci5mbnMgPSBmbnM7XG4gIHJldHVybiBpbnZva2VyXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpc3RlbmVycyAoXG4gIG9uLFxuICBvbGRPbixcbiAgYWRkLFxuICByZW1vdmUkJDEsXG4gIHZtXG4pIHtcbiAgdmFyIG5hbWUsIGN1ciwgb2xkLCBldmVudDtcbiAgZm9yIChuYW1lIGluIG9uKSB7XG4gICAgY3VyID0gb25bbmFtZV07XG4gICAgb2xkID0gb2xkT25bbmFtZV07XG4gICAgZXZlbnQgPSBub3JtYWxpemVFdmVudChuYW1lKTtcbiAgICBpZiAoIWN1cikge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICBcIkludmFsaWQgaGFuZGxlciBmb3IgZXZlbnQgXFxcIlwiICsgKGV2ZW50Lm5hbWUpICsgXCJcXFwiOiBnb3QgXCIgKyBTdHJpbmcoY3VyKSxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICghb2xkKSB7XG4gICAgICBpZiAoIWN1ci5mbnMpIHtcbiAgICAgICAgY3VyID0gb25bbmFtZV0gPSBjcmVhdGVGbkludm9rZXIoY3VyKTtcbiAgICAgIH1cbiAgICAgIGFkZChldmVudC5uYW1lLCBjdXIsIGV2ZW50Lm9uY2UsIGV2ZW50LmNhcHR1cmUpO1xuICAgIH0gZWxzZSBpZiAoY3VyICE9PSBvbGQpIHtcbiAgICAgIG9sZC5mbnMgPSBjdXI7XG4gICAgICBvbltuYW1lXSA9IG9sZDtcbiAgICB9XG4gIH1cbiAgZm9yIChuYW1lIGluIG9sZE9uKSB7XG4gICAgaWYgKCFvbltuYW1lXSkge1xuICAgICAgZXZlbnQgPSBub3JtYWxpemVFdmVudChuYW1lKTtcbiAgICAgIHJlbW92ZSQkMShldmVudC5uYW1lLCBvbGRPbltuYW1lXSwgZXZlbnQuY2FwdHVyZSk7XG4gICAgfVxuICB9XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBtZXJnZVZOb2RlSG9vayAoZGVmLCBob29rS2V5LCBob29rKSB7XG4gIHZhciBpbnZva2VyO1xuICB2YXIgb2xkSG9vayA9IGRlZltob29rS2V5XTtcblxuICBmdW5jdGlvbiB3cmFwcGVkSG9vayAoKSB7XG4gICAgaG9vay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIC8vIGltcG9ydGFudDogcmVtb3ZlIG1lcmdlZCBob29rIHRvIGVuc3VyZSBpdCdzIGNhbGxlZCBvbmx5IG9uY2VcbiAgICAvLyBhbmQgcHJldmVudCBtZW1vcnkgbGVha1xuICAgIHJlbW92ZShpbnZva2VyLmZucywgd3JhcHBlZEhvb2spO1xuICB9XG5cbiAgaWYgKCFvbGRIb29rKSB7XG4gICAgLy8gbm8gZXhpc3RpbmcgaG9va1xuICAgIGludm9rZXIgPSBjcmVhdGVGbkludm9rZXIoW3dyYXBwZWRIb29rXSk7XG4gIH0gZWxzZSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKG9sZEhvb2suZm5zICYmIG9sZEhvb2subWVyZ2VkKSB7XG4gICAgICAvLyBhbHJlYWR5IGEgbWVyZ2VkIGludm9rZXJcbiAgICAgIGludm9rZXIgPSBvbGRIb29rO1xuICAgICAgaW52b2tlci5mbnMucHVzaCh3cmFwcGVkSG9vayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGV4aXN0aW5nIHBsYWluIGhvb2tcbiAgICAgIGludm9rZXIgPSBjcmVhdGVGbkludm9rZXIoW29sZEhvb2ssIHdyYXBwZWRIb29rXSk7XG4gICAgfVxuICB9XG5cbiAgaW52b2tlci5tZXJnZWQgPSB0cnVlO1xuICBkZWZbaG9va0tleV0gPSBpbnZva2VyO1xufVxuXG4vKiAgKi9cblxuLy8gVGhlIHRlbXBsYXRlIGNvbXBpbGVyIGF0dGVtcHRzIHRvIG1pbmltaXplIHRoZSBuZWVkIGZvciBub3JtYWxpemF0aW9uIGJ5XG4vLyBzdGF0aWNhbGx5IGFuYWx5emluZyB0aGUgdGVtcGxhdGUgYXQgY29tcGlsZSB0aW1lLlxuLy9cbi8vIEZvciBwbGFpbiBIVE1MIG1hcmt1cCwgbm9ybWFsaXphdGlvbiBjYW4gYmUgY29tcGxldGVseSBza2lwcGVkIGJlY2F1c2UgdGhlXG4vLyBnZW5lcmF0ZWQgcmVuZGVyIGZ1bmN0aW9uIGlzIGd1YXJhbnRlZWQgdG8gcmV0dXJuIEFycmF5PFZOb2RlPi4gVGhlcmUgYXJlXG4vLyB0d28gY2FzZXMgd2hlcmUgZXh0cmEgbm9ybWFsaXphdGlvbiBpcyBuZWVkZWQ6XG5cbi8vIDEuIFdoZW4gdGhlIGNoaWxkcmVuIGNvbnRhaW5zIGNvbXBvbmVudHMgLSBiZWNhdXNlIGEgZnVuY3Rpb25hbCBjb21wb25lbnRcbi8vIG1heSByZXR1cm4gYW4gQXJyYXkgaW5zdGVhZCBvZiBhIHNpbmdsZSByb290LiBJbiB0aGlzIGNhc2UsIGp1c3QgYSBzaW1wbGVcbi8vIG5vcm1hbGl6YXRpb24gaXMgbmVlZGVkIC0gaWYgYW55IGNoaWxkIGlzIGFuIEFycmF5LCB3ZSBmbGF0dGVuIHRoZSB3aG9sZVxuLy8gdGhpbmcgd2l0aCBBcnJheS5wcm90b3R5cGUuY29uY2F0LiBJdCBpcyBndWFyYW50ZWVkIHRvIGJlIG9ubHkgMS1sZXZlbCBkZWVwXG4vLyBiZWNhdXNlIGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhbHJlYWR5IG5vcm1hbGl6ZSB0aGVpciBvd24gY2hpbGRyZW4uXG5mdW5jdGlvbiBzaW1wbGVOb3JtYWxpemVDaGlsZHJlbiAoY2hpbGRyZW4pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuW2ldKSkge1xuICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGNoaWxkcmVuKVxuICAgIH1cbiAgfVxuICByZXR1cm4gY2hpbGRyZW5cbn1cblxuLy8gMi4gV2hlbiB0aGUgY2hpbGRyZW4gY29udGFpbnMgY29uc3RyY3V0cyB0aGF0IGFsd2F5cyBnZW5lcmF0ZWQgbmVzdGVkIEFycmF5cyxcbi8vIGUuZy4gPHRlbXBsYXRlPiwgPHNsb3Q+LCB2LWZvciwgb3Igd2hlbiB0aGUgY2hpbGRyZW4gaXMgcHJvdmlkZWQgYnkgdXNlclxuLy8gd2l0aCBoYW5kLXdyaXR0ZW4gcmVuZGVyIGZ1bmN0aW9ucyAvIEpTWC4gSW4gc3VjaCBjYXNlcyBhIGZ1bGwgbm9ybWFsaXphdGlvblxuLy8gaXMgbmVlZGVkIHRvIGNhdGVyIHRvIGFsbCBwb3NzaWJsZSB0eXBlcyBvZiBjaGlsZHJlbiB2YWx1ZXMuXG5mdW5jdGlvbiBub3JtYWxpemVDaGlsZHJlbiAoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIGlzUHJpbWl0aXZlKGNoaWxkcmVuKVxuICAgID8gW2NyZWF0ZVRleHRWTm9kZShjaGlsZHJlbildXG4gICAgOiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKVxuICAgICAgPyBub3JtYWxpemVBcnJheUNoaWxkcmVuKGNoaWxkcmVuKVxuICAgICAgOiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXlDaGlsZHJlbiAoY2hpbGRyZW4sIG5lc3RlZEluZGV4KSB7XG4gIHZhciByZXMgPSBbXTtcbiAgdmFyIGksIGMsIGxhc3Q7XG4gIGZvciAoaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGMgPSBjaGlsZHJlbltpXTtcbiAgICBpZiAoYyA9PSBudWxsIHx8IHR5cGVvZiBjID09PSAnYm9vbGVhbicpIHsgY29udGludWUgfVxuICAgIGxhc3QgPSByZXNbcmVzLmxlbmd0aCAtIDFdO1xuICAgIC8vICBuZXN0ZWRcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjKSkge1xuICAgICAgcmVzLnB1c2guYXBwbHkocmVzLCBub3JtYWxpemVBcnJheUNoaWxkcmVuKGMsICgobmVzdGVkSW5kZXggfHwgJycpICsgXCJfXCIgKyBpKSkpO1xuICAgIH0gZWxzZSBpZiAoaXNQcmltaXRpdmUoYykpIHtcbiAgICAgIGlmIChsYXN0ICYmIGxhc3QudGV4dCkge1xuICAgICAgICBsYXN0LnRleHQgKz0gU3RyaW5nKGMpO1xuICAgICAgfSBlbHNlIGlmIChjICE9PSAnJykge1xuICAgICAgICAvLyBjb252ZXJ0IHByaW1pdGl2ZSB0byB2bm9kZVxuICAgICAgICByZXMucHVzaChjcmVhdGVUZXh0Vk5vZGUoYykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoYy50ZXh0ICYmIGxhc3QgJiYgbGFzdC50ZXh0KSB7XG4gICAgICAgIHJlc1tyZXMubGVuZ3RoIC0gMV0gPSBjcmVhdGVUZXh0Vk5vZGUobGFzdC50ZXh0ICsgYy50ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGRlZmF1bHQga2V5IGZvciBuZXN0ZWQgYXJyYXkgY2hpbGRyZW4gKGxpa2VseSBnZW5lcmF0ZWQgYnkgdi1mb3IpXG4gICAgICAgIGlmIChjLnRhZyAmJiBjLmtleSA9PSBudWxsICYmIG5lc3RlZEluZGV4ICE9IG51bGwpIHtcbiAgICAgICAgICBjLmtleSA9IFwiX192bGlzdFwiICsgbmVzdGVkSW5kZXggKyBcIl9cIiArIGkgKyBcIl9fXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmVzLnB1c2goYyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGdldEZpcnN0Q29tcG9uZW50Q2hpbGQgKGNoaWxkcmVuKSB7XG4gIHJldHVybiBjaGlsZHJlbiAmJiBjaGlsZHJlbi5maWx0ZXIoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMgJiYgYy5jb21wb25lbnRPcHRpb25zOyB9KVswXVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdEV2ZW50cyAodm0pIHtcbiAgdm0uX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHZtLl9oYXNIb29rRXZlbnQgPSBmYWxzZTtcbiAgLy8gaW5pdCBwYXJlbnQgYXR0YWNoZWQgZXZlbnRzXG4gIHZhciBsaXN0ZW5lcnMgPSB2bS4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzO1xuICBpZiAobGlzdGVuZXJzKSB7XG4gICAgdXBkYXRlQ29tcG9uZW50TGlzdGVuZXJzKHZtLCBsaXN0ZW5lcnMpO1xuICB9XG59XG5cbnZhciB0YXJnZXQ7XG5cbmZ1bmN0aW9uIGFkZCAoZXZlbnQsIGZuLCBvbmNlJCQxKSB7XG4gIGlmIChvbmNlJCQxKSB7XG4gICAgdGFyZ2V0LiRvbmNlKGV2ZW50LCBmbik7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0LiRvbihldmVudCwgZm4pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZSQxIChldmVudCwgZm4pIHtcbiAgdGFyZ2V0LiRvZmYoZXZlbnQsIGZuKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ29tcG9uZW50TGlzdGVuZXJzIChcbiAgdm0sXG4gIGxpc3RlbmVycyxcbiAgb2xkTGlzdGVuZXJzXG4pIHtcbiAgdGFyZ2V0ID0gdm07XG4gIHVwZGF0ZUxpc3RlbmVycyhsaXN0ZW5lcnMsIG9sZExpc3RlbmVycyB8fCB7fSwgYWRkLCByZW1vdmUkMSwgdm0pO1xufVxuXG5mdW5jdGlvbiBldmVudHNNaXhpbiAoVnVlKSB7XG4gIHZhciBob29rUkUgPSAvXmhvb2s6LztcbiAgVnVlLnByb3RvdHlwZS4kb24gPSBmdW5jdGlvbiAoZXZlbnQsIGZuKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGV2ZW50KSkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBldmVudC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdGhpcyQxLiRvbihldmVudFtpXSwgZm4pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAodm0uX2V2ZW50c1tldmVudF0gfHwgKHZtLl9ldmVudHNbZXZlbnRdID0gW10pKS5wdXNoKGZuKTtcbiAgICAgIC8vIG9wdGltaXplIGhvb2s6ZXZlbnQgY29zdCBieSB1c2luZyBhIGJvb2xlYW4gZmxhZyBtYXJrZWQgYXQgcmVnaXN0cmF0aW9uXG4gICAgICAvLyBpbnN0ZWFkIG9mIGEgaGFzaCBsb29rdXBcbiAgICAgIGlmIChob29rUkUudGVzdChldmVudCkpIHtcbiAgICAgICAgdm0uX2hhc0hvb2tFdmVudCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2bVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJG9uY2UgPSBmdW5jdGlvbiAoZXZlbnQsIGZuKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICBmdW5jdGlvbiBvbiAoKSB7XG4gICAgICB2bS4kb2ZmKGV2ZW50LCBvbik7XG4gICAgICBmbi5hcHBseSh2bSwgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgb24uZm4gPSBmbjtcbiAgICB2bS4kb24oZXZlbnQsIG9uKTtcbiAgICByZXR1cm4gdm1cbiAgfTtcblxuICBWdWUucHJvdG90eXBlLiRvZmYgPSBmdW5jdGlvbiAoZXZlbnQsIGZuKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICAvLyBhbGxcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHZtLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgcmV0dXJuIHZtXG4gICAgfVxuICAgIC8vIHNwZWNpZmljIGV2ZW50XG4gICAgdmFyIGNicyA9IHZtLl9ldmVudHNbZXZlbnRdO1xuICAgIGlmICghY2JzKSB7XG4gICAgICByZXR1cm4gdm1cbiAgICB9XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHZtLl9ldmVudHNbZXZlbnRdID0gbnVsbDtcbiAgICAgIHJldHVybiB2bVxuICAgIH1cbiAgICAvLyBzcGVjaWZpYyBoYW5kbGVyXG4gICAgdmFyIGNiO1xuICAgIHZhciBpID0gY2JzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBjYiA9IGNic1tpXTtcbiAgICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XG4gICAgICAgIGNicy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2bVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJGVtaXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIHZhciBjYnMgPSB2bS5fZXZlbnRzW2V2ZW50XTtcbiAgICBpZiAoY2JzKSB7XG4gICAgICBjYnMgPSBjYnMubGVuZ3RoID4gMSA/IHRvQXJyYXkoY2JzKSA6IGNicztcbiAgICAgIHZhciBhcmdzID0gdG9BcnJheShhcmd1bWVudHMsIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjYnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNic1tpXS5hcHBseSh2bSwgYXJncyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2bVxuICB9O1xufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgcmVzb2x2aW5nIHJhdyBjaGlsZHJlbiBWTm9kZXMgaW50byBhIHNsb3Qgb2JqZWN0LlxuICovXG5mdW5jdGlvbiByZXNvbHZlU2xvdHMgKFxuICBjaGlsZHJlbixcbiAgY29udGV4dFxuKSB7XG4gIHZhciBzbG90cyA9IHt9O1xuICBpZiAoIWNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIHNsb3RzXG4gIH1cbiAgdmFyIGRlZmF1bHRTbG90ID0gW107XG4gIHZhciBuYW1lLCBjaGlsZDtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgIC8vIG5hbWVkIHNsb3RzIHNob3VsZCBvbmx5IGJlIHJlc3BlY3RlZCBpZiB0aGUgdm5vZGUgd2FzIHJlbmRlcmVkIGluIHRoZVxuICAgIC8vIHNhbWUgY29udGV4dC5cbiAgICBpZiAoKGNoaWxkLmNvbnRleHQgPT09IGNvbnRleHQgfHwgY2hpbGQuZnVuY3Rpb25hbENvbnRleHQgPT09IGNvbnRleHQpICYmXG4gICAgICAgIGNoaWxkLmRhdGEgJiYgKG5hbWUgPSBjaGlsZC5kYXRhLnNsb3QpKSB7XG4gICAgICB2YXIgc2xvdCA9IChzbG90c1tuYW1lXSB8fCAoc2xvdHNbbmFtZV0gPSBbXSkpO1xuICAgICAgaWYgKGNoaWxkLnRhZyA9PT0gJ3RlbXBsYXRlJykge1xuICAgICAgICBzbG90LnB1c2guYXBwbHkoc2xvdCwgY2hpbGQuY2hpbGRyZW4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2xvdC5wdXNoKGNoaWxkKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZGVmYXVsdFNsb3QucHVzaChjaGlsZCk7XG4gICAgfVxuICB9XG4gIC8vIGlnbm9yZSBzaW5nbGUgd2hpdGVzcGFjZVxuICBpZiAoZGVmYXVsdFNsb3QubGVuZ3RoICYmICEoXG4gICAgZGVmYXVsdFNsb3QubGVuZ3RoID09PSAxICYmXG4gICAgKGRlZmF1bHRTbG90WzBdLnRleHQgPT09ICcgJyB8fCBkZWZhdWx0U2xvdFswXS5pc0NvbW1lbnQpXG4gICkpIHtcbiAgICBzbG90cy5kZWZhdWx0ID0gZGVmYXVsdFNsb3Q7XG4gIH1cbiAgcmV0dXJuIHNsb3RzXG59XG5cbmZ1bmN0aW9uIHJlc29sdmVTY29wZWRTbG90cyAoXG4gIGZuc1xuKSB7XG4gIHZhciByZXMgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBmbnMubGVuZ3RoOyBpKyspIHtcbiAgICByZXNbZm5zW2ldWzBdXSA9IGZuc1tpXVsxXTtcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qICAqL1xuXG52YXIgYWN0aXZlSW5zdGFuY2UgPSBudWxsO1xuXG5mdW5jdGlvbiBpbml0TGlmZWN5Y2xlICh2bSkge1xuICB2YXIgb3B0aW9ucyA9IHZtLiRvcHRpb25zO1xuXG4gIC8vIGxvY2F0ZSBmaXJzdCBub24tYWJzdHJhY3QgcGFyZW50XG4gIHZhciBwYXJlbnQgPSBvcHRpb25zLnBhcmVudDtcbiAgaWYgKHBhcmVudCAmJiAhb3B0aW9ucy5hYnN0cmFjdCkge1xuICAgIHdoaWxlIChwYXJlbnQuJG9wdGlvbnMuYWJzdHJhY3QgJiYgcGFyZW50LiRwYXJlbnQpIHtcbiAgICAgIHBhcmVudCA9IHBhcmVudC4kcGFyZW50O1xuICAgIH1cbiAgICBwYXJlbnQuJGNoaWxkcmVuLnB1c2godm0pO1xuICB9XG5cbiAgdm0uJHBhcmVudCA9IHBhcmVudDtcbiAgdm0uJHJvb3QgPSBwYXJlbnQgPyBwYXJlbnQuJHJvb3QgOiB2bTtcblxuICB2bS4kY2hpbGRyZW4gPSBbXTtcbiAgdm0uJHJlZnMgPSB7fTtcblxuICB2bS5fd2F0Y2hlciA9IG51bGw7XG4gIHZtLl9pbmFjdGl2ZSA9IG51bGw7XG4gIHZtLl9kaXJlY3RJbmFjdGl2ZSA9IGZhbHNlO1xuICB2bS5faXNNb3VudGVkID0gZmFsc2U7XG4gIHZtLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICB2bS5faXNCZWluZ0Rlc3Ryb3llZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBsaWZlY3ljbGVNaXhpbiAoVnVlKSB7XG4gIFZ1ZS5wcm90b3R5cGUuX3VwZGF0ZSA9IGZ1bmN0aW9uICh2bm9kZSwgaHlkcmF0aW5nKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICBpZiAodm0uX2lzTW91bnRlZCkge1xuICAgICAgY2FsbEhvb2sodm0sICdiZWZvcmVVcGRhdGUnKTtcbiAgICB9XG4gICAgdmFyIHByZXZFbCA9IHZtLiRlbDtcbiAgICB2YXIgcHJldlZub2RlID0gdm0uX3Zub2RlO1xuICAgIHZhciBwcmV2QWN0aXZlSW5zdGFuY2UgPSBhY3RpdmVJbnN0YW5jZTtcbiAgICBhY3RpdmVJbnN0YW5jZSA9IHZtO1xuICAgIHZtLl92bm9kZSA9IHZub2RlO1xuICAgIC8vIFZ1ZS5wcm90b3R5cGUuX19wYXRjaF9fIGlzIGluamVjdGVkIGluIGVudHJ5IHBvaW50c1xuICAgIC8vIGJhc2VkIG9uIHRoZSByZW5kZXJpbmcgYmFja2VuZCB1c2VkLlxuICAgIGlmICghcHJldlZub2RlKSB7XG4gICAgICAvLyBpbml0aWFsIHJlbmRlclxuICAgICAgdm0uJGVsID0gdm0uX19wYXRjaF9fKFxuICAgICAgICB2bS4kZWwsIHZub2RlLCBoeWRyYXRpbmcsIGZhbHNlIC8qIHJlbW92ZU9ubHkgKi8sXG4gICAgICAgIHZtLiRvcHRpb25zLl9wYXJlbnRFbG0sXG4gICAgICAgIHZtLiRvcHRpb25zLl9yZWZFbG1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHVwZGF0ZXNcbiAgICAgIHZtLiRlbCA9IHZtLl9fcGF0Y2hfXyhwcmV2Vm5vZGUsIHZub2RlKTtcbiAgICB9XG4gICAgYWN0aXZlSW5zdGFuY2UgPSBwcmV2QWN0aXZlSW5zdGFuY2U7XG4gICAgLy8gdXBkYXRlIF9fdnVlX18gcmVmZXJlbmNlXG4gICAgaWYgKHByZXZFbCkge1xuICAgICAgcHJldkVsLl9fdnVlX18gPSBudWxsO1xuICAgIH1cbiAgICBpZiAodm0uJGVsKSB7XG4gICAgICB2bS4kZWwuX192dWVfXyA9IHZtO1xuICAgIH1cbiAgICAvLyBpZiBwYXJlbnQgaXMgYW4gSE9DLCB1cGRhdGUgaXRzICRlbCBhcyB3ZWxsXG4gICAgaWYgKHZtLiR2bm9kZSAmJiB2bS4kcGFyZW50ICYmIHZtLiR2bm9kZSA9PT0gdm0uJHBhcmVudC5fdm5vZGUpIHtcbiAgICAgIHZtLiRwYXJlbnQuJGVsID0gdm0uJGVsO1xuICAgIH1cbiAgICAvLyB1cGRhdGVkIGhvb2sgaXMgY2FsbGVkIGJ5IHRoZSBzY2hlZHVsZXIgdG8gZW5zdXJlIHRoYXQgY2hpbGRyZW4gYXJlXG4gICAgLy8gdXBkYXRlZCBpbiBhIHBhcmVudCdzIHVwZGF0ZWQgaG9vay5cbiAgfTtcblxuICBWdWUucHJvdG90eXBlLiRmb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGlmICh2bS5fd2F0Y2hlcikge1xuICAgICAgdm0uX3dhdGNoZXIudXBkYXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJGRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICBpZiAodm0uX2lzQmVpbmdEZXN0cm95ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjYWxsSG9vayh2bSwgJ2JlZm9yZURlc3Ryb3knKTtcbiAgICB2bS5faXNCZWluZ0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgLy8gcmVtb3ZlIHNlbGYgZnJvbSBwYXJlbnRcbiAgICB2YXIgcGFyZW50ID0gdm0uJHBhcmVudDtcbiAgICBpZiAocGFyZW50ICYmICFwYXJlbnQuX2lzQmVpbmdEZXN0cm95ZWQgJiYgIXZtLiRvcHRpb25zLmFic3RyYWN0KSB7XG4gICAgICByZW1vdmUocGFyZW50LiRjaGlsZHJlbiwgdm0pO1xuICAgIH1cbiAgICAvLyB0ZWFyZG93biB3YXRjaGVyc1xuICAgIGlmICh2bS5fd2F0Y2hlcikge1xuICAgICAgdm0uX3dhdGNoZXIudGVhcmRvd24oKTtcbiAgICB9XG4gICAgdmFyIGkgPSB2bS5fd2F0Y2hlcnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHZtLl93YXRjaGVyc1tpXS50ZWFyZG93bigpO1xuICAgIH1cbiAgICAvLyByZW1vdmUgcmVmZXJlbmNlIGZyb20gZGF0YSBvYlxuICAgIC8vIGZyb3plbiBvYmplY3QgbWF5IG5vdCBoYXZlIG9ic2VydmVyLlxuICAgIGlmICh2bS5fZGF0YS5fX29iX18pIHtcbiAgICAgIHZtLl9kYXRhLl9fb2JfXy52bUNvdW50LS07XG4gICAgfVxuICAgIC8vIGNhbGwgdGhlIGxhc3QgaG9vay4uLlxuICAgIHZtLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgY2FsbEhvb2sodm0sICdkZXN0cm95ZWQnKTtcbiAgICAvLyB0dXJuIG9mZiBhbGwgaW5zdGFuY2UgbGlzdGVuZXJzLlxuICAgIHZtLiRvZmYoKTtcbiAgICAvLyByZW1vdmUgX192dWVfXyByZWZlcmVuY2VcbiAgICBpZiAodm0uJGVsKSB7XG4gICAgICB2bS4kZWwuX192dWVfXyA9IG51bGw7XG4gICAgfVxuICAgIC8vIGludm9rZSBkZXN0cm95IGhvb2tzIG9uIGN1cnJlbnQgcmVuZGVyZWQgdHJlZVxuICAgIHZtLl9fcGF0Y2hfXyh2bS5fdm5vZGUsIG51bGwpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBtb3VudENvbXBvbmVudCAoXG4gIHZtLFxuICBlbCxcbiAgaHlkcmF0aW5nXG4pIHtcbiAgdm0uJGVsID0gZWw7XG4gIGlmICghdm0uJG9wdGlvbnMucmVuZGVyKSB7XG4gICAgdm0uJG9wdGlvbnMucmVuZGVyID0gY3JlYXRlRW1wdHlWTm9kZTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAodm0uJG9wdGlvbnMudGVtcGxhdGUgJiYgdm0uJG9wdGlvbnMudGVtcGxhdGUuY2hhckF0KDApICE9PSAnIycpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAnWW91IGFyZSB1c2luZyB0aGUgcnVudGltZS1vbmx5IGJ1aWxkIG9mIFZ1ZSB3aGVyZSB0aGUgdGVtcGxhdGUgJyArXG4gICAgICAgICAgJ29wdGlvbiBpcyBub3QgYXZhaWxhYmxlLiBFaXRoZXIgcHJlLWNvbXBpbGUgdGhlIHRlbXBsYXRlcyBpbnRvICcgK1xuICAgICAgICAgICdyZW5kZXIgZnVuY3Rpb25zLCBvciB1c2UgdGhlIGNvbXBpbGVyLWluY2x1ZGVkIGJ1aWxkLicsXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ0ZhaWxlZCB0byBtb3VudCBjb21wb25lbnQ6IHRlbXBsYXRlIG9yIHJlbmRlciBmdW5jdGlvbiBub3QgZGVmaW5lZC4nLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNhbGxIb29rKHZtLCAnYmVmb3JlTW91bnQnKTtcblxuICB2YXIgdXBkYXRlQ29tcG9uZW50O1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgY29uZmlnLnBlcmZvcm1hbmNlICYmIHBlcmYpIHtcbiAgICB1cGRhdGVDb21wb25lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbmFtZSA9IHZtLl9uYW1lO1xuICAgICAgdmFyIHN0YXJ0VGFnID0gXCJzdGFydCBcIiArIG5hbWU7XG4gICAgICB2YXIgZW5kVGFnID0gXCJlbmQgXCIgKyBuYW1lO1xuICAgICAgcGVyZi5tYXJrKHN0YXJ0VGFnKTtcbiAgICAgIHZhciB2bm9kZSA9IHZtLl9yZW5kZXIoKTtcbiAgICAgIHBlcmYubWFyayhlbmRUYWcpO1xuICAgICAgcGVyZi5tZWFzdXJlKChuYW1lICsgXCIgcmVuZGVyXCIpLCBzdGFydFRhZywgZW5kVGFnKTtcbiAgICAgIHBlcmYubWFyayhzdGFydFRhZyk7XG4gICAgICB2bS5fdXBkYXRlKHZub2RlLCBoeWRyYXRpbmcpO1xuICAgICAgcGVyZi5tYXJrKGVuZFRhZyk7XG4gICAgICBwZXJmLm1lYXN1cmUoKG5hbWUgKyBcIiBwYXRjaFwiKSwgc3RhcnRUYWcsIGVuZFRhZyk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICB1cGRhdGVDb21wb25lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2bS5fdXBkYXRlKHZtLl9yZW5kZXIoKSwgaHlkcmF0aW5nKTtcbiAgICB9O1xuICB9XG5cbiAgdm0uX3dhdGNoZXIgPSBuZXcgV2F0Y2hlcih2bSwgdXBkYXRlQ29tcG9uZW50LCBub29wKTtcbiAgaHlkcmF0aW5nID0gZmFsc2U7XG5cbiAgLy8gbWFudWFsbHkgbW91bnRlZCBpbnN0YW5jZSwgY2FsbCBtb3VudGVkIG9uIHNlbGZcbiAgLy8gbW91bnRlZCBpcyBjYWxsZWQgZm9yIHJlbmRlci1jcmVhdGVkIGNoaWxkIGNvbXBvbmVudHMgaW4gaXRzIGluc2VydGVkIGhvb2tcbiAgaWYgKHZtLiR2bm9kZSA9PSBudWxsKSB7XG4gICAgdm0uX2lzTW91bnRlZCA9IHRydWU7XG4gICAgY2FsbEhvb2sodm0sICdtb3VudGVkJyk7XG4gIH1cbiAgcmV0dXJuIHZtXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNoaWxkQ29tcG9uZW50IChcbiAgdm0sXG4gIHByb3BzRGF0YSxcbiAgbGlzdGVuZXJzLFxuICBwYXJlbnRWbm9kZSxcbiAgcmVuZGVyQ2hpbGRyZW5cbikge1xuICAvLyBkZXRlcm1pbmUgd2hldGhlciBjb21wb25lbnQgaGFzIHNsb3QgY2hpbGRyZW5cbiAgLy8gd2UgbmVlZCB0byBkbyB0aGlzIGJlZm9yZSBvdmVyd3JpdGluZyAkb3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW5cbiAgdmFyIGhhc0NoaWxkcmVuID0gISEoXG4gICAgcmVuZGVyQ2hpbGRyZW4gfHwgICAgICAgICAgICAgICAvLyBoYXMgbmV3IHN0YXRpYyBzbG90c1xuICAgIHZtLiRvcHRpb25zLl9yZW5kZXJDaGlsZHJlbiB8fCAgLy8gaGFzIG9sZCBzdGF0aWMgc2xvdHNcbiAgICBwYXJlbnRWbm9kZS5kYXRhLnNjb3BlZFNsb3RzIHx8IC8vIGhhcyBuZXcgc2NvcGVkIHNsb3RzXG4gICAgdm0uJHNjb3BlZFNsb3RzICE9PSBlbXB0eU9iamVjdCAvLyBoYXMgb2xkIHNjb3BlZCBzbG90c1xuICApO1xuXG4gIHZtLiRvcHRpb25zLl9wYXJlbnRWbm9kZSA9IHBhcmVudFZub2RlO1xuICB2bS4kdm5vZGUgPSBwYXJlbnRWbm9kZTsgLy8gdXBkYXRlIHZtJ3MgcGxhY2Vob2xkZXIgbm9kZSB3aXRob3V0IHJlLXJlbmRlclxuICBpZiAodm0uX3Zub2RlKSB7IC8vIHVwZGF0ZSBjaGlsZCB0cmVlJ3MgcGFyZW50XG4gICAgdm0uX3Zub2RlLnBhcmVudCA9IHBhcmVudFZub2RlO1xuICB9XG4gIHZtLiRvcHRpb25zLl9yZW5kZXJDaGlsZHJlbiA9IHJlbmRlckNoaWxkcmVuO1xuXG4gIC8vIHVwZGF0ZSBwcm9wc1xuICBpZiAocHJvcHNEYXRhICYmIHZtLiRvcHRpb25zLnByb3BzKSB7XG4gICAgb2JzZXJ2ZXJTdGF0ZS5zaG91bGRDb252ZXJ0ID0gZmFsc2U7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIG9ic2VydmVyU3RhdGUuaXNTZXR0aW5nUHJvcHMgPSB0cnVlO1xuICAgIH1cbiAgICB2YXIgcHJvcHMgPSB2bS5fcHJvcHM7XG4gICAgdmFyIHByb3BLZXlzID0gdm0uJG9wdGlvbnMuX3Byb3BLZXlzIHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBwcm9wS2V5c1tpXTtcbiAgICAgIHByb3BzW2tleV0gPSB2YWxpZGF0ZVByb3Aoa2V5LCB2bS4kb3B0aW9ucy5wcm9wcywgcHJvcHNEYXRhLCB2bSk7XG4gICAgfVxuICAgIG9ic2VydmVyU3RhdGUuc2hvdWxkQ29udmVydCA9IHRydWU7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIG9ic2VydmVyU3RhdGUuaXNTZXR0aW5nUHJvcHMgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8ga2VlcCBhIGNvcHkgb2YgcmF3IHByb3BzRGF0YVxuICAgIHZtLiRvcHRpb25zLnByb3BzRGF0YSA9IHByb3BzRGF0YTtcbiAgfVxuICAvLyB1cGRhdGUgbGlzdGVuZXJzXG4gIGlmIChsaXN0ZW5lcnMpIHtcbiAgICB2YXIgb2xkTGlzdGVuZXJzID0gdm0uJG9wdGlvbnMuX3BhcmVudExpc3RlbmVycztcbiAgICB2bS4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzID0gbGlzdGVuZXJzO1xuICAgIHVwZGF0ZUNvbXBvbmVudExpc3RlbmVycyh2bSwgbGlzdGVuZXJzLCBvbGRMaXN0ZW5lcnMpO1xuICB9XG4gIC8vIHJlc29sdmUgc2xvdHMgKyBmb3JjZSB1cGRhdGUgaWYgaGFzIGNoaWxkcmVuXG4gIGlmIChoYXNDaGlsZHJlbikge1xuICAgIHZtLiRzbG90cyA9IHJlc29sdmVTbG90cyhyZW5kZXJDaGlsZHJlbiwgcGFyZW50Vm5vZGUuY29udGV4dCk7XG4gICAgdm0uJGZvcmNlVXBkYXRlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNJbkluYWN0aXZlVHJlZSAodm0pIHtcbiAgd2hpbGUgKHZtICYmICh2bSA9IHZtLiRwYXJlbnQpKSB7XG4gICAgaWYgKHZtLl9pbmFjdGl2ZSkgeyByZXR1cm4gdHJ1ZSB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlQ2hpbGRDb21wb25lbnQgKHZtLCBkaXJlY3QpIHtcbiAgaWYgKGRpcmVjdCkge1xuICAgIHZtLl9kaXJlY3RJbmFjdGl2ZSA9IGZhbHNlO1xuICAgIGlmIChpc0luSW5hY3RpdmVUcmVlKHZtKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICB9IGVsc2UgaWYgKHZtLl9kaXJlY3RJbmFjdGl2ZSkge1xuICAgIHJldHVyblxuICB9XG4gIGlmICh2bS5faW5hY3RpdmUgfHwgdm0uX2luYWN0aXZlID09IG51bGwpIHtcbiAgICB2bS5faW5hY3RpdmUgPSBmYWxzZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZtLiRjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgYWN0aXZhdGVDaGlsZENvbXBvbmVudCh2bS4kY2hpbGRyZW5baV0pO1xuICAgIH1cbiAgICBjYWxsSG9vayh2bSwgJ2FjdGl2YXRlZCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlYWN0aXZhdGVDaGlsZENvbXBvbmVudCAodm0sIGRpcmVjdCkge1xuICBpZiAoZGlyZWN0KSB7XG4gICAgdm0uX2RpcmVjdEluYWN0aXZlID0gdHJ1ZTtcbiAgICBpZiAoaXNJbkluYWN0aXZlVHJlZSh2bSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuICBpZiAoIXZtLl9pbmFjdGl2ZSkge1xuICAgIHZtLl9pbmFjdGl2ZSA9IHRydWU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2bS4kY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlYWN0aXZhdGVDaGlsZENvbXBvbmVudCh2bS4kY2hpbGRyZW5baV0pO1xuICAgIH1cbiAgICBjYWxsSG9vayh2bSwgJ2RlYWN0aXZhdGVkJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsbEhvb2sgKHZtLCBob29rKSB7XG4gIHZhciBoYW5kbGVycyA9IHZtLiRvcHRpb25zW2hvb2tdO1xuICBpZiAoaGFuZGxlcnMpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IGhhbmRsZXJzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaGFuZGxlcnNbaV0uY2FsbCh2bSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGhhbmRsZUVycm9yKGUsIHZtLCAoaG9vayArIFwiIGhvb2tcIikpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAodm0uX2hhc0hvb2tFdmVudCkge1xuICAgIHZtLiRlbWl0KCdob29rOicgKyBob29rKTtcbiAgfVxufVxuXG4vKiAgKi9cblxuXG52YXIgcXVldWUgPSBbXTtcbnZhciBoYXMgPSB7fTtcbnZhciBjaXJjdWxhciA9IHt9O1xudmFyIHdhaXRpbmcgPSBmYWxzZTtcbnZhciBmbHVzaGluZyA9IGZhbHNlO1xudmFyIGluZGV4ID0gMDtcblxuLyoqXG4gKiBSZXNldCB0aGUgc2NoZWR1bGVyJ3Mgc3RhdGUuXG4gKi9cbmZ1bmN0aW9uIHJlc2V0U2NoZWR1bGVyU3RhdGUgKCkge1xuICBxdWV1ZS5sZW5ndGggPSAwO1xuICBoYXMgPSB7fTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjaXJjdWxhciA9IHt9O1xuICB9XG4gIHdhaXRpbmcgPSBmbHVzaGluZyA9IGZhbHNlO1xufVxuXG4vKipcbiAqIEZsdXNoIGJvdGggcXVldWVzIGFuZCBydW4gdGhlIHdhdGNoZXJzLlxuICovXG5mdW5jdGlvbiBmbHVzaFNjaGVkdWxlclF1ZXVlICgpIHtcbiAgZmx1c2hpbmcgPSB0cnVlO1xuICB2YXIgd2F0Y2hlciwgaWQsIHZtO1xuXG4gIC8vIFNvcnQgcXVldWUgYmVmb3JlIGZsdXNoLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdDpcbiAgLy8gMS4gQ29tcG9uZW50cyBhcmUgdXBkYXRlZCBmcm9tIHBhcmVudCB0byBjaGlsZC4gKGJlY2F1c2UgcGFyZW50IGlzIGFsd2F5c1xuICAvLyAgICBjcmVhdGVkIGJlZm9yZSB0aGUgY2hpbGQpXG4gIC8vIDIuIEEgY29tcG9uZW50J3MgdXNlciB3YXRjaGVycyBhcmUgcnVuIGJlZm9yZSBpdHMgcmVuZGVyIHdhdGNoZXIgKGJlY2F1c2VcbiAgLy8gICAgdXNlciB3YXRjaGVycyBhcmUgY3JlYXRlZCBiZWZvcmUgdGhlIHJlbmRlciB3YXRjaGVyKVxuICAvLyAzLiBJZiBhIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQgZHVyaW5nIGEgcGFyZW50IGNvbXBvbmVudCdzIHdhdGNoZXIgcnVuLFxuICAvLyAgICBpdHMgd2F0Y2hlcnMgY2FuIGJlIHNraXBwZWQuXG4gIHF1ZXVlLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuaWQgLSBiLmlkOyB9KTtcblxuICAvLyBkbyBub3QgY2FjaGUgbGVuZ3RoIGJlY2F1c2UgbW9yZSB3YXRjaGVycyBtaWdodCBiZSBwdXNoZWRcbiAgLy8gYXMgd2UgcnVuIGV4aXN0aW5nIHdhdGNoZXJzXG4gIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHF1ZXVlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIHdhdGNoZXIgPSBxdWV1ZVtpbmRleF07XG4gICAgaWQgPSB3YXRjaGVyLmlkO1xuICAgIGhhc1tpZF0gPSBudWxsO1xuICAgIHdhdGNoZXIucnVuKCk7XG4gICAgLy8gaW4gZGV2IGJ1aWxkLCBjaGVjayBhbmQgc3RvcCBjaXJjdWxhciB1cGRhdGVzLlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGhhc1tpZF0gIT0gbnVsbCkge1xuICAgICAgY2lyY3VsYXJbaWRdID0gKGNpcmN1bGFyW2lkXSB8fCAwKSArIDE7XG4gICAgICBpZiAoY2lyY3VsYXJbaWRdID4gY29uZmlnLl9tYXhVcGRhdGVDb3VudCkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdZb3UgbWF5IGhhdmUgYW4gaW5maW5pdGUgdXBkYXRlIGxvb3AgJyArIChcbiAgICAgICAgICAgIHdhdGNoZXIudXNlclxuICAgICAgICAgICAgICA/IChcImluIHdhdGNoZXIgd2l0aCBleHByZXNzaW9uIFxcXCJcIiArICh3YXRjaGVyLmV4cHJlc3Npb24pICsgXCJcXFwiXCIpXG4gICAgICAgICAgICAgIDogXCJpbiBhIGNvbXBvbmVudCByZW5kZXIgZnVuY3Rpb24uXCJcbiAgICAgICAgICApLFxuICAgICAgICAgIHdhdGNoZXIudm1cbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBjYWxsIHVwZGF0ZWQgaG9va3NcbiAgaW5kZXggPSBxdWV1ZS5sZW5ndGg7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgd2F0Y2hlciA9IHF1ZXVlW2luZGV4XTtcbiAgICB2bSA9IHdhdGNoZXIudm07XG4gICAgaWYgKHZtLl93YXRjaGVyID09PSB3YXRjaGVyICYmIHZtLl9pc01vdW50ZWQpIHtcbiAgICAgIGNhbGxIb29rKHZtLCAndXBkYXRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGRldnRvb2wgaG9va1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGRldnRvb2xzICYmIGNvbmZpZy5kZXZ0b29scykge1xuICAgIGRldnRvb2xzLmVtaXQoJ2ZsdXNoJyk7XG4gIH1cblxuICByZXNldFNjaGVkdWxlclN0YXRlKCk7XG59XG5cbi8qKlxuICogUHVzaCBhIHdhdGNoZXIgaW50byB0aGUgd2F0Y2hlciBxdWV1ZS5cbiAqIEpvYnMgd2l0aCBkdXBsaWNhdGUgSURzIHdpbGwgYmUgc2tpcHBlZCB1bmxlc3MgaXQnc1xuICogcHVzaGVkIHdoZW4gdGhlIHF1ZXVlIGlzIGJlaW5nIGZsdXNoZWQuXG4gKi9cbmZ1bmN0aW9uIHF1ZXVlV2F0Y2hlciAod2F0Y2hlcikge1xuICB2YXIgaWQgPSB3YXRjaGVyLmlkO1xuICBpZiAoaGFzW2lkXSA9PSBudWxsKSB7XG4gICAgaGFzW2lkXSA9IHRydWU7XG4gICAgaWYgKCFmbHVzaGluZykge1xuICAgICAgcXVldWUucHVzaCh3YXRjaGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgYWxyZWFkeSBmbHVzaGluZywgc3BsaWNlIHRoZSB3YXRjaGVyIGJhc2VkIG9uIGl0cyBpZFxuICAgICAgLy8gaWYgYWxyZWFkeSBwYXN0IGl0cyBpZCwgaXQgd2lsbCBiZSBydW4gbmV4dCBpbW1lZGlhdGVseS5cbiAgICAgIHZhciBpID0gcXVldWUubGVuZ3RoIC0gMTtcbiAgICAgIHdoaWxlIChpID49IDAgJiYgcXVldWVbaV0uaWQgPiB3YXRjaGVyLmlkKSB7XG4gICAgICAgIGktLTtcbiAgICAgIH1cbiAgICAgIHF1ZXVlLnNwbGljZShNYXRoLm1heChpLCBpbmRleCkgKyAxLCAwLCB3YXRjaGVyKTtcbiAgICB9XG4gICAgLy8gcXVldWUgdGhlIGZsdXNoXG4gICAgaWYgKCF3YWl0aW5nKSB7XG4gICAgICB3YWl0aW5nID0gdHJ1ZTtcbiAgICAgIG5leHRUaWNrKGZsdXNoU2NoZWR1bGVyUXVldWUpO1xuICAgIH1cbiAgfVxufVxuXG4vKiAgKi9cblxudmFyIHVpZCQyID0gMDtcblxuLyoqXG4gKiBBIHdhdGNoZXIgcGFyc2VzIGFuIGV4cHJlc3Npb24sIGNvbGxlY3RzIGRlcGVuZGVuY2llcyxcbiAqIGFuZCBmaXJlcyBjYWxsYmFjayB3aGVuIHRoZSBleHByZXNzaW9uIHZhbHVlIGNoYW5nZXMuXG4gKiBUaGlzIGlzIHVzZWQgZm9yIGJvdGggdGhlICR3YXRjaCgpIGFwaSBhbmQgZGlyZWN0aXZlcy5cbiAqL1xudmFyIFdhdGNoZXIgPSBmdW5jdGlvbiBXYXRjaGVyIChcbiAgdm0sXG4gIGV4cE9yRm4sXG4gIGNiLFxuICBvcHRpb25zXG4pIHtcbiAgdGhpcy52bSA9IHZtO1xuICB2bS5fd2F0Y2hlcnMucHVzaCh0aGlzKTtcbiAgLy8gb3B0aW9uc1xuICBpZiAob3B0aW9ucykge1xuICAgIHRoaXMuZGVlcCA9ICEhb3B0aW9ucy5kZWVwO1xuICAgIHRoaXMudXNlciA9ICEhb3B0aW9ucy51c2VyO1xuICAgIHRoaXMubGF6eSA9ICEhb3B0aW9ucy5sYXp5O1xuICAgIHRoaXMuc3luYyA9ICEhb3B0aW9ucy5zeW5jO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZGVlcCA9IHRoaXMudXNlciA9IHRoaXMubGF6eSA9IHRoaXMuc3luYyA9IGZhbHNlO1xuICB9XG4gIHRoaXMuY2IgPSBjYjtcbiAgdGhpcy5pZCA9ICsrdWlkJDI7IC8vIHVpZCBmb3IgYmF0Y2hpbmdcbiAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB0aGlzLmRpcnR5ID0gdGhpcy5sYXp5OyAvLyBmb3IgbGF6eSB3YXRjaGVyc1xuICB0aGlzLmRlcHMgPSBbXTtcbiAgdGhpcy5uZXdEZXBzID0gW107XG4gIHRoaXMuZGVwSWRzID0gbmV3IF9TZXQoKTtcbiAgdGhpcy5uZXdEZXBJZHMgPSBuZXcgX1NldCgpO1xuICB0aGlzLmV4cHJlc3Npb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nXG4gICAgPyBleHBPckZuLnRvU3RyaW5nKClcbiAgICA6ICcnO1xuICAvLyBwYXJzZSBleHByZXNzaW9uIGZvciBnZXR0ZXJcbiAgaWYgKHR5cGVvZiBleHBPckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhpcy5nZXR0ZXIgPSBleHBPckZuO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZ2V0dGVyID0gcGFyc2VQYXRoKGV4cE9yRm4pO1xuICAgIGlmICghdGhpcy5nZXR0ZXIpIHtcbiAgICAgIHRoaXMuZ2V0dGVyID0gZnVuY3Rpb24gKCkge307XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgIFwiRmFpbGVkIHdhdGNoaW5nIHBhdGg6IFxcXCJcIiArIGV4cE9yRm4gKyBcIlxcXCIgXCIgK1xuICAgICAgICAnV2F0Y2hlciBvbmx5IGFjY2VwdHMgc2ltcGxlIGRvdC1kZWxpbWl0ZWQgcGF0aHMuICcgK1xuICAgICAgICAnRm9yIGZ1bGwgY29udHJvbCwgdXNlIGEgZnVuY3Rpb24gaW5zdGVhZC4nLFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgdGhpcy52YWx1ZSA9IHRoaXMubGF6eVxuICAgID8gdW5kZWZpbmVkXG4gICAgOiB0aGlzLmdldCgpO1xufTtcblxuLyoqXG4gKiBFdmFsdWF0ZSB0aGUgZ2V0dGVyLCBhbmQgcmUtY29sbGVjdCBkZXBlbmRlbmNpZXMuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldCAoKSB7XG4gIHB1c2hUYXJnZXQodGhpcyk7XG4gIHZhciB2YWx1ZTtcbiAgdmFyIHZtID0gdGhpcy52bTtcbiAgaWYgKHRoaXMudXNlcikge1xuICAgIHRyeSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuZ2V0dGVyLmNhbGwodm0sIHZtKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBoYW5kbGVFcnJvcihlLCB2bSwgKFwiZ2V0dGVyIGZvciB3YXRjaGVyIFxcXCJcIiArICh0aGlzLmV4cHJlc3Npb24pICsgXCJcXFwiXCIpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFsdWUgPSB0aGlzLmdldHRlci5jYWxsKHZtLCB2bSk7XG4gIH1cbiAgLy8gXCJ0b3VjaFwiIGV2ZXJ5IHByb3BlcnR5IHNvIHRoZXkgYXJlIGFsbCB0cmFja2VkIGFzXG4gIC8vIGRlcGVuZGVuY2llcyBmb3IgZGVlcCB3YXRjaGluZ1xuICBpZiAodGhpcy5kZWVwKSB7XG4gICAgdHJhdmVyc2UodmFsdWUpO1xuICB9XG4gIHBvcFRhcmdldCgpO1xuICB0aGlzLmNsZWFudXBEZXBzKCk7XG4gIHJldHVybiB2YWx1ZVxufTtcblxuLyoqXG4gKiBBZGQgYSBkZXBlbmRlbmN5IHRvIHRoaXMgZGlyZWN0aXZlLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5hZGREZXAgPSBmdW5jdGlvbiBhZGREZXAgKGRlcCkge1xuICB2YXIgaWQgPSBkZXAuaWQ7XG4gIGlmICghdGhpcy5uZXdEZXBJZHMuaGFzKGlkKSkge1xuICAgIHRoaXMubmV3RGVwSWRzLmFkZChpZCk7XG4gICAgdGhpcy5uZXdEZXBzLnB1c2goZGVwKTtcbiAgICBpZiAoIXRoaXMuZGVwSWRzLmhhcyhpZCkpIHtcbiAgICAgIGRlcC5hZGRTdWIodGhpcyk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIENsZWFuIHVwIGZvciBkZXBlbmRlbmN5IGNvbGxlY3Rpb24uXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLmNsZWFudXBEZXBzID0gZnVuY3Rpb24gY2xlYW51cERlcHMgKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHZhciBpID0gdGhpcy5kZXBzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIHZhciBkZXAgPSB0aGlzJDEuZGVwc1tpXTtcbiAgICBpZiAoIXRoaXMkMS5uZXdEZXBJZHMuaGFzKGRlcC5pZCkpIHtcbiAgICAgIGRlcC5yZW1vdmVTdWIodGhpcyQxKTtcbiAgICB9XG4gIH1cbiAgdmFyIHRtcCA9IHRoaXMuZGVwSWRzO1xuICB0aGlzLmRlcElkcyA9IHRoaXMubmV3RGVwSWRzO1xuICB0aGlzLm5ld0RlcElkcyA9IHRtcDtcbiAgdGhpcy5uZXdEZXBJZHMuY2xlYXIoKTtcbiAgdG1wID0gdGhpcy5kZXBzO1xuICB0aGlzLmRlcHMgPSB0aGlzLm5ld0RlcHM7XG4gIHRoaXMubmV3RGVwcyA9IHRtcDtcbiAgdGhpcy5uZXdEZXBzLmxlbmd0aCA9IDA7XG59O1xuXG4vKipcbiAqIFN1YnNjcmliZXIgaW50ZXJmYWNlLlxuICogV2lsbCBiZSBjYWxsZWQgd2hlbiBhIGRlcGVuZGVuY3kgY2hhbmdlcy5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlICgpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKHRoaXMubGF6eSkge1xuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICB9IGVsc2UgaWYgKHRoaXMuc3luYykge1xuICAgIHRoaXMucnVuKCk7XG4gIH0gZWxzZSB7XG4gICAgcXVldWVXYXRjaGVyKHRoaXMpO1xuICB9XG59O1xuXG4vKipcbiAqIFNjaGVkdWxlciBqb2IgaW50ZXJmYWNlLlxuICogV2lsbCBiZSBjYWxsZWQgYnkgdGhlIHNjaGVkdWxlci5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gcnVuICgpIHtcbiAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgdmFyIHZhbHVlID0gdGhpcy5nZXQoKTtcbiAgICBpZiAoXG4gICAgICB2YWx1ZSAhPT0gdGhpcy52YWx1ZSB8fFxuICAgICAgLy8gRGVlcCB3YXRjaGVycyBhbmQgd2F0Y2hlcnMgb24gT2JqZWN0L0FycmF5cyBzaG91bGQgZmlyZSBldmVuXG4gICAgICAvLyB3aGVuIHRoZSB2YWx1ZSBpcyB0aGUgc2FtZSwgYmVjYXVzZSB0aGUgdmFsdWUgbWF5XG4gICAgICAvLyBoYXZlIG11dGF0ZWQuXG4gICAgICBpc09iamVjdCh2YWx1ZSkgfHxcbiAgICAgIHRoaXMuZGVlcFxuICAgICkge1xuICAgICAgLy8gc2V0IG5ldyB2YWx1ZVxuICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIGlmICh0aGlzLnVzZXIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLmNiLmNhbGwodGhpcy52bSwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGhhbmRsZUVycm9yKGUsIHRoaXMudm0sIChcImNhbGxiYWNrIGZvciB3YXRjaGVyIFxcXCJcIiArICh0aGlzLmV4cHJlc3Npb24pICsgXCJcXFwiXCIpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYi5jYWxsKHRoaXMudm0sIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEV2YWx1YXRlIHRoZSB2YWx1ZSBvZiB0aGUgd2F0Y2hlci5cbiAqIFRoaXMgb25seSBnZXRzIGNhbGxlZCBmb3IgbGF6eSB3YXRjaGVycy5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUuZXZhbHVhdGUgPSBmdW5jdGlvbiBldmFsdWF0ZSAoKSB7XG4gIHRoaXMudmFsdWUgPSB0aGlzLmdldCgpO1xuICB0aGlzLmRpcnR5ID0gZmFsc2U7XG59O1xuXG4vKipcbiAqIERlcGVuZCBvbiBhbGwgZGVwcyBjb2xsZWN0ZWQgYnkgdGhpcyB3YXRjaGVyLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5kZXBlbmQgPSBmdW5jdGlvbiBkZXBlbmQgKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHZhciBpID0gdGhpcy5kZXBzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIHRoaXMkMS5kZXBzW2ldLmRlcGVuZCgpO1xuICB9XG59O1xuXG4vKipcbiAqIFJlbW92ZSBzZWxmIGZyb20gYWxsIGRlcGVuZGVuY2llcycgc3Vic2NyaWJlciBsaXN0LlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS50ZWFyZG93biA9IGZ1bmN0aW9uIHRlYXJkb3duICgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAvLyByZW1vdmUgc2VsZiBmcm9tIHZtJ3Mgd2F0Y2hlciBsaXN0XG4gICAgLy8gdGhpcyBpcyBhIHNvbWV3aGF0IGV4cGVuc2l2ZSBvcGVyYXRpb24gc28gd2Ugc2tpcCBpdFxuICAgIC8vIGlmIHRoZSB2bSBpcyBiZWluZyBkZXN0cm95ZWQuXG4gICAgaWYgKCF0aGlzLnZtLl9pc0JlaW5nRGVzdHJveWVkKSB7XG4gICAgICByZW1vdmUodGhpcy52bS5fd2F0Y2hlcnMsIHRoaXMpO1xuICAgIH1cbiAgICB2YXIgaSA9IHRoaXMuZGVwcy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdGhpcyQxLmRlcHNbaV0ucmVtb3ZlU3ViKHRoaXMkMSk7XG4gICAgfVxuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gIH1cbn07XG5cbi8qKlxuICogUmVjdXJzaXZlbHkgdHJhdmVyc2UgYW4gb2JqZWN0IHRvIGV2b2tlIGFsbCBjb252ZXJ0ZWRcbiAqIGdldHRlcnMsIHNvIHRoYXQgZXZlcnkgbmVzdGVkIHByb3BlcnR5IGluc2lkZSB0aGUgb2JqZWN0XG4gKiBpcyBjb2xsZWN0ZWQgYXMgYSBcImRlZXBcIiBkZXBlbmRlbmN5LlxuICovXG52YXIgc2Vlbk9iamVjdHMgPSBuZXcgX1NldCgpO1xuZnVuY3Rpb24gdHJhdmVyc2UgKHZhbCkge1xuICBzZWVuT2JqZWN0cy5jbGVhcigpO1xuICBfdHJhdmVyc2UodmFsLCBzZWVuT2JqZWN0cyk7XG59XG5cbmZ1bmN0aW9uIF90cmF2ZXJzZSAodmFsLCBzZWVuKSB7XG4gIHZhciBpLCBrZXlzO1xuICB2YXIgaXNBID0gQXJyYXkuaXNBcnJheSh2YWwpO1xuICBpZiAoKCFpc0EgJiYgIWlzT2JqZWN0KHZhbCkpIHx8ICFPYmplY3QuaXNFeHRlbnNpYmxlKHZhbCkpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAodmFsLl9fb2JfXykge1xuICAgIHZhciBkZXBJZCA9IHZhbC5fX29iX18uZGVwLmlkO1xuICAgIGlmIChzZWVuLmhhcyhkZXBJZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzZWVuLmFkZChkZXBJZCk7XG4gIH1cbiAgaWYgKGlzQSkge1xuICAgIGkgPSB2YWwubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHsgX3RyYXZlcnNlKHZhbFtpXSwgc2Vlbik7IH1cbiAgfSBlbHNlIHtcbiAgICBrZXlzID0gT2JqZWN0LmtleXModmFsKTtcbiAgICBpID0ga2V5cy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkgeyBfdHJhdmVyc2UodmFsW2tleXNbaV1dLCBzZWVuKTsgfVxuICB9XG59XG5cbi8qICAqL1xuXG52YXIgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uID0ge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBjb25maWd1cmFibGU6IHRydWUsXG4gIGdldDogbm9vcCxcbiAgc2V0OiBub29wXG59O1xuXG5mdW5jdGlvbiBwcm94eSAodGFyZ2V0LCBzb3VyY2VLZXksIGtleSkge1xuICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uZ2V0ID0gZnVuY3Rpb24gcHJveHlHZXR0ZXIgKCkge1xuICAgIHJldHVybiB0aGlzW3NvdXJjZUtleV1ba2V5XVxuICB9O1xuICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID0gZnVuY3Rpb24gcHJveHlTZXR0ZXIgKHZhbCkge1xuICAgIHRoaXNbc291cmNlS2V5XVtrZXldID0gdmFsO1xuICB9O1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbik7XG59XG5cbmZ1bmN0aW9uIGluaXRTdGF0ZSAodm0pIHtcbiAgdm0uX3dhdGNoZXJzID0gW107XG4gIHZhciBvcHRzID0gdm0uJG9wdGlvbnM7XG4gIGlmIChvcHRzLnByb3BzKSB7IGluaXRQcm9wcyh2bSwgb3B0cy5wcm9wcyk7IH1cbiAgaWYgKG9wdHMubWV0aG9kcykgeyBpbml0TWV0aG9kcyh2bSwgb3B0cy5tZXRob2RzKTsgfVxuICBpZiAob3B0cy5kYXRhKSB7XG4gICAgaW5pdERhdGEodm0pO1xuICB9IGVsc2Uge1xuICAgIG9ic2VydmUodm0uX2RhdGEgPSB7fSwgdHJ1ZSAvKiBhc1Jvb3REYXRhICovKTtcbiAgfVxuICBpZiAob3B0cy5jb21wdXRlZCkgeyBpbml0Q29tcHV0ZWQodm0sIG9wdHMuY29tcHV0ZWQpOyB9XG4gIGlmIChvcHRzLndhdGNoKSB7IGluaXRXYXRjaCh2bSwgb3B0cy53YXRjaCk7IH1cbn1cblxudmFyIGlzUmVzZXJ2ZWRQcm9wID0geyBrZXk6IDEsIHJlZjogMSwgc2xvdDogMSB9O1xuXG5mdW5jdGlvbiBpbml0UHJvcHMgKHZtLCBwcm9wc09wdGlvbnMpIHtcbiAgdmFyIHByb3BzRGF0YSA9IHZtLiRvcHRpb25zLnByb3BzRGF0YSB8fCB7fTtcbiAgdmFyIHByb3BzID0gdm0uX3Byb3BzID0ge307XG4gIC8vIGNhY2hlIHByb3Aga2V5cyBzbyB0aGF0IGZ1dHVyZSBwcm9wcyB1cGRhdGVzIGNhbiBpdGVyYXRlIHVzaW5nIEFycmF5XG4gIC8vIGluc3RlYWQgb2YgZHluYW1pYyBvYmplY3Qga2V5IGVudW1lcmF0aW9uLlxuICB2YXIga2V5cyA9IHZtLiRvcHRpb25zLl9wcm9wS2V5cyA9IFtdO1xuICB2YXIgaXNSb290ID0gIXZtLiRwYXJlbnQ7XG4gIC8vIHJvb3QgaW5zdGFuY2UgcHJvcHMgc2hvdWxkIGJlIGNvbnZlcnRlZFxuICBvYnNlcnZlclN0YXRlLnNob3VsZENvbnZlcnQgPSBpc1Jvb3Q7XG4gIHZhciBsb29wID0gZnVuY3Rpb24gKCBrZXkgKSB7XG4gICAga2V5cy5wdXNoKGtleSk7XG4gICAgdmFyIHZhbHVlID0gdmFsaWRhdGVQcm9wKGtleSwgcHJvcHNPcHRpb25zLCBwcm9wc0RhdGEsIHZtKTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoaXNSZXNlcnZlZFByb3Bba2V5XSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIChcIlxcXCJcIiArIGtleSArIFwiXFxcIiBpcyBhIHJlc2VydmVkIGF0dHJpYnV0ZSBhbmQgY2Fubm90IGJlIHVzZWQgYXMgY29tcG9uZW50IHByb3AuXCIpLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBkZWZpbmVSZWFjdGl2ZSQkMShwcm9wcywga2V5LCB2YWx1ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodm0uJHBhcmVudCAmJiAhb2JzZXJ2ZXJTdGF0ZS5pc1NldHRpbmdQcm9wcykge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBcIkF2b2lkIG11dGF0aW5nIGEgcHJvcCBkaXJlY3RseSBzaW5jZSB0aGUgdmFsdWUgd2lsbCBiZSBcIiArXG4gICAgICAgICAgICBcIm92ZXJ3cml0dGVuIHdoZW5ldmVyIHRoZSBwYXJlbnQgY29tcG9uZW50IHJlLXJlbmRlcnMuIFwiICtcbiAgICAgICAgICAgIFwiSW5zdGVhZCwgdXNlIGEgZGF0YSBvciBjb21wdXRlZCBwcm9wZXJ0eSBiYXNlZCBvbiB0aGUgcHJvcCdzIFwiICtcbiAgICAgICAgICAgIFwidmFsdWUuIFByb3AgYmVpbmcgbXV0YXRlZDogXFxcIlwiICsga2V5ICsgXCJcXFwiXCIsXG4gICAgICAgICAgICB2bVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWZpbmVSZWFjdGl2ZSQkMShwcm9wcywga2V5LCB2YWx1ZSk7XG4gICAgfVxuICAgIC8vIHN0YXRpYyBwcm9wcyBhcmUgYWxyZWFkeSBwcm94aWVkIG9uIHRoZSBjb21wb25lbnQncyBwcm90b3R5cGVcbiAgICAvLyBkdXJpbmcgVnVlLmV4dGVuZCgpLiBXZSBvbmx5IG5lZWQgdG8gcHJveHkgcHJvcHMgZGVmaW5lZCBhdFxuICAgIC8vIGluc3RhbnRpYXRpb24gaGVyZS5cbiAgICBpZiAoIShrZXkgaW4gdm0pKSB7XG4gICAgICBwcm94eSh2bSwgXCJfcHJvcHNcIiwga2V5KTtcbiAgICB9XG4gIH07XG5cbiAgZm9yICh2YXIga2V5IGluIHByb3BzT3B0aW9ucykgbG9vcCgga2V5ICk7XG4gIG9ic2VydmVyU3RhdGUuc2hvdWxkQ29udmVydCA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIGluaXREYXRhICh2bSkge1xuICB2YXIgZGF0YSA9IHZtLiRvcHRpb25zLmRhdGE7XG4gIGRhdGEgPSB2bS5fZGF0YSA9IHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nXG4gICAgPyBkYXRhLmNhbGwodm0pXG4gICAgOiBkYXRhIHx8IHt9O1xuICBpZiAoIWlzUGxhaW5PYmplY3QoZGF0YSkpIHtcbiAgICBkYXRhID0ge307XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgJ2RhdGEgZnVuY3Rpb25zIHNob3VsZCByZXR1cm4gYW4gb2JqZWN0OlxcbicgK1xuICAgICAgJ2h0dHBzOi8vdnVlanMub3JnL3YyL2d1aWRlL2NvbXBvbmVudHMuaHRtbCNkYXRhLU11c3QtQmUtYS1GdW5jdGlvbicsXG4gICAgICB2bVxuICAgICk7XG4gIH1cbiAgLy8gcHJveHkgZGF0YSBvbiBpbnN0YW5jZVxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpO1xuICB2YXIgcHJvcHMgPSB2bS4kb3B0aW9ucy5wcm9wcztcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIGlmIChwcm9wcyAmJiBoYXNPd24ocHJvcHMsIGtleXNbaV0pKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgIFwiVGhlIGRhdGEgcHJvcGVydHkgXFxcIlwiICsgKGtleXNbaV0pICsgXCJcXFwiIGlzIGFscmVhZHkgZGVjbGFyZWQgYXMgYSBwcm9wLiBcIiArXG4gICAgICAgIFwiVXNlIHByb3AgZGVmYXVsdCB2YWx1ZSBpbnN0ZWFkLlwiLFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKCFpc1Jlc2VydmVkKGtleXNbaV0pKSB7XG4gICAgICBwcm94eSh2bSwgXCJfZGF0YVwiLCBrZXlzW2ldKTtcbiAgICB9XG4gIH1cbiAgLy8gb2JzZXJ2ZSBkYXRhXG4gIG9ic2VydmUoZGF0YSwgdHJ1ZSAvKiBhc1Jvb3REYXRhICovKTtcbn1cblxudmFyIGNvbXB1dGVkV2F0Y2hlck9wdGlvbnMgPSB7IGxhenk6IHRydWUgfTtcblxuZnVuY3Rpb24gaW5pdENvbXB1dGVkICh2bSwgY29tcHV0ZWQpIHtcbiAgdmFyIHdhdGNoZXJzID0gdm0uX2NvbXB1dGVkV2F0Y2hlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gIGZvciAodmFyIGtleSBpbiBjb21wdXRlZCkge1xuICAgIHZhciB1c2VyRGVmID0gY29tcHV0ZWRba2V5XTtcbiAgICB2YXIgZ2V0dGVyID0gdHlwZW9mIHVzZXJEZWYgPT09ICdmdW5jdGlvbicgPyB1c2VyRGVmIDogdXNlckRlZi5nZXQ7XG4gICAgLy8gY3JlYXRlIGludGVybmFsIHdhdGNoZXIgZm9yIHRoZSBjb21wdXRlZCBwcm9wZXJ0eS5cbiAgICB3YXRjaGVyc1trZXldID0gbmV3IFdhdGNoZXIodm0sIGdldHRlciwgbm9vcCwgY29tcHV0ZWRXYXRjaGVyT3B0aW9ucyk7XG5cbiAgICAvLyBjb21wb25lbnQtZGVmaW5lZCBjb21wdXRlZCBwcm9wZXJ0aWVzIGFyZSBhbHJlYWR5IGRlZmluZWQgb24gdGhlXG4gICAgLy8gY29tcG9uZW50IHByb3RvdHlwZS4gV2Ugb25seSBuZWVkIHRvIGRlZmluZSBjb21wdXRlZCBwcm9wZXJ0aWVzIGRlZmluZWRcbiAgICAvLyBhdCBpbnN0YW50aWF0aW9uIGhlcmUuXG4gICAgaWYgKCEoa2V5IGluIHZtKSkge1xuICAgICAgZGVmaW5lQ29tcHV0ZWQodm0sIGtleSwgdXNlckRlZik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZUNvbXB1dGVkICh0YXJnZXQsIGtleSwgdXNlckRlZikge1xuICBpZiAodHlwZW9mIHVzZXJEZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uZ2V0ID0gY3JlYXRlQ29tcHV0ZWRHZXR0ZXIoa2V5KTtcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID0gbm9vcDtcbiAgfSBlbHNlIHtcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uZ2V0ID0gdXNlckRlZi5nZXRcbiAgICAgID8gdXNlckRlZi5jYWNoZSAhPT0gZmFsc2VcbiAgICAgICAgPyBjcmVhdGVDb21wdXRlZEdldHRlcihrZXkpXG4gICAgICAgIDogdXNlckRlZi5nZXRcbiAgICAgIDogbm9vcDtcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID0gdXNlckRlZi5zZXRcbiAgICAgID8gdXNlckRlZi5zZXRcbiAgICAgIDogbm9vcDtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbXB1dGVkR2V0dGVyIChrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbXB1dGVkR2V0dGVyICgpIHtcbiAgICB2YXIgd2F0Y2hlciA9IHRoaXMuX2NvbXB1dGVkV2F0Y2hlcnMgJiYgdGhpcy5fY29tcHV0ZWRXYXRjaGVyc1trZXldO1xuICAgIGlmICh3YXRjaGVyKSB7XG4gICAgICBpZiAod2F0Y2hlci5kaXJ0eSkge1xuICAgICAgICB3YXRjaGVyLmV2YWx1YXRlKCk7XG4gICAgICB9XG4gICAgICBpZiAoRGVwLnRhcmdldCkge1xuICAgICAgICB3YXRjaGVyLmRlcGVuZCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHdhdGNoZXIudmFsdWVcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdE1ldGhvZHMgKHZtLCBtZXRob2RzKSB7XG4gIHZhciBwcm9wcyA9IHZtLiRvcHRpb25zLnByb3BzO1xuICBmb3IgKHZhciBrZXkgaW4gbWV0aG9kcykge1xuICAgIHZtW2tleV0gPSBtZXRob2RzW2tleV0gPT0gbnVsbCA/IG5vb3AgOiBiaW5kKG1ldGhvZHNba2V5XSwgdm0pO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAobWV0aG9kc1trZXldID09IG51bGwpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICBcIm1ldGhvZCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaGFzIGFuIHVuZGVmaW5lZCB2YWx1ZSBpbiB0aGUgY29tcG9uZW50IGRlZmluaXRpb24uIFwiICtcbiAgICAgICAgICBcIkRpZCB5b3UgcmVmZXJlbmNlIHRoZSBmdW5jdGlvbiBjb3JyZWN0bHk/XCIsXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChwcm9wcyAmJiBoYXNPd24ocHJvcHMsIGtleSkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAoXCJtZXRob2QgXFxcIlwiICsga2V5ICsgXCJcXFwiIGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZCBhcyBhIHByb3AuXCIpLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRXYXRjaCAodm0sIHdhdGNoKSB7XG4gIGZvciAodmFyIGtleSBpbiB3YXRjaCkge1xuICAgIHZhciBoYW5kbGVyID0gd2F0Y2hba2V5XTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShoYW5kbGVyKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoYW5kbGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNyZWF0ZVdhdGNoZXIodm0sIGtleSwgaGFuZGxlcltpXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNyZWF0ZVdhdGNoZXIodm0sIGtleSwgaGFuZGxlcik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVdhdGNoZXIgKHZtLCBrZXksIGhhbmRsZXIpIHtcbiAgdmFyIG9wdGlvbnM7XG4gIGlmIChpc1BsYWluT2JqZWN0KGhhbmRsZXIpKSB7XG4gICAgb3B0aW9ucyA9IGhhbmRsZXI7XG4gICAgaGFuZGxlciA9IGhhbmRsZXIuaGFuZGxlcjtcbiAgfVxuICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgaGFuZGxlciA9IHZtW2hhbmRsZXJdO1xuICB9XG4gIHZtLiR3YXRjaChrZXksIGhhbmRsZXIsIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBzdGF0ZU1peGluIChWdWUpIHtcbiAgLy8gZmxvdyBzb21laG93IGhhcyBwcm9ibGVtcyB3aXRoIGRpcmVjdGx5IGRlY2xhcmVkIGRlZmluaXRpb24gb2JqZWN0XG4gIC8vIHdoZW4gdXNpbmcgT2JqZWN0LmRlZmluZVByb3BlcnR5LCBzbyB3ZSBoYXZlIHRvIHByb2NlZHVyYWxseSBidWlsZCB1cFxuICAvLyB0aGUgb2JqZWN0IGhlcmUuXG4gIHZhciBkYXRhRGVmID0ge307XG4gIGRhdGFEZWYuZ2V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fZGF0YSB9O1xuICB2YXIgcHJvcHNEZWYgPSB7fTtcbiAgcHJvcHNEZWYuZ2V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcHJvcHMgfTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBkYXRhRGVmLnNldCA9IGZ1bmN0aW9uIChuZXdEYXRhKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAnQXZvaWQgcmVwbGFjaW5nIGluc3RhbmNlIHJvb3QgJGRhdGEuICcgK1xuICAgICAgICAnVXNlIG5lc3RlZCBkYXRhIHByb3BlcnRpZXMgaW5zdGVhZC4nLFxuICAgICAgICB0aGlzXG4gICAgICApO1xuICAgIH07XG4gICAgcHJvcHNEZWYuc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgd2FybihcIiRwcm9wcyBpcyByZWFkb25seS5cIiwgdGhpcyk7XG4gICAgfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRkYXRhJywgZGF0YURlZik7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJHByb3BzJywgcHJvcHNEZWYpO1xuXG4gIFZ1ZS5wcm90b3R5cGUuJHNldCA9IHNldDtcbiAgVnVlLnByb3RvdHlwZS4kZGVsZXRlID0gZGVsO1xuXG4gIFZ1ZS5wcm90b3R5cGUuJHdhdGNoID0gZnVuY3Rpb24gKFxuICAgIGV4cE9yRm4sXG4gICAgY2IsXG4gICAgb3B0aW9uc1xuICApIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMudXNlciA9IHRydWU7XG4gICAgdmFyIHdhdGNoZXIgPSBuZXcgV2F0Y2hlcih2bSwgZXhwT3JGbiwgY2IsIG9wdGlvbnMpO1xuICAgIGlmIChvcHRpb25zLmltbWVkaWF0ZSkge1xuICAgICAgY2IuY2FsbCh2bSwgd2F0Y2hlci52YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiB1bndhdGNoRm4gKCkge1xuICAgICAgd2F0Y2hlci50ZWFyZG93bigpO1xuICAgIH1cbiAgfTtcbn1cblxuLyogICovXG5cbnZhciBob29rcyA9IHsgaW5pdDogaW5pdCwgcHJlcGF0Y2g6IHByZXBhdGNoLCBpbnNlcnQ6IGluc2VydCwgZGVzdHJveTogZGVzdHJveSB9O1xudmFyIGhvb2tzVG9NZXJnZSA9IE9iamVjdC5rZXlzKGhvb2tzKTtcblxuZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50IChcbiAgQ3RvcixcbiAgZGF0YSxcbiAgY29udGV4dCxcbiAgY2hpbGRyZW4sXG4gIHRhZ1xuKSB7XG4gIGlmICghQ3Rvcikge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIGJhc2VDdG9yID0gY29udGV4dC4kb3B0aW9ucy5fYmFzZTtcbiAgaWYgKGlzT2JqZWN0KEN0b3IpKSB7XG4gICAgQ3RvciA9IGJhc2VDdG9yLmV4dGVuZChDdG9yKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgQ3RvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB3YXJuKChcIkludmFsaWQgQ29tcG9uZW50IGRlZmluaXRpb246IFwiICsgKFN0cmluZyhDdG9yKSkpLCBjb250ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBhc3luYyBjb21wb25lbnRcbiAgaWYgKCFDdG9yLmNpZCkge1xuICAgIGlmIChDdG9yLnJlc29sdmVkKSB7XG4gICAgICBDdG9yID0gQ3Rvci5yZXNvbHZlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgQ3RvciA9IHJlc29sdmVBc3luY0NvbXBvbmVudChDdG9yLCBiYXNlQ3RvciwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBpdCdzIG9rIHRvIHF1ZXVlIHRoaXMgb24gZXZlcnkgcmVuZGVyIGJlY2F1c2VcbiAgICAgICAgLy8gJGZvcmNlVXBkYXRlIGlzIGJ1ZmZlcmVkIGJ5IHRoZSBzY2hlZHVsZXIuXG4gICAgICAgIGNvbnRleHQuJGZvcmNlVXBkYXRlKCk7XG4gICAgICB9KTtcbiAgICAgIGlmICghQ3Rvcikge1xuICAgICAgICAvLyByZXR1cm4gbm90aGluZyBpZiB0aGlzIGlzIGluZGVlZCBhbiBhc3luYyBjb21wb25lbnRcbiAgICAgICAgLy8gd2FpdCBmb3IgdGhlIGNhbGxiYWNrIHRvIHRyaWdnZXIgcGFyZW50IHVwZGF0ZS5cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gcmVzb2x2ZSBjb25zdHJ1Y3RvciBvcHRpb25zIGluIGNhc2UgZ2xvYmFsIG1peGlucyBhcmUgYXBwbGllZCBhZnRlclxuICAvLyBjb21wb25lbnQgY29uc3RydWN0b3IgY3JlYXRpb25cbiAgcmVzb2x2ZUNvbnN0cnVjdG9yT3B0aW9ucyhDdG9yKTtcblxuICBkYXRhID0gZGF0YSB8fCB7fTtcblxuICAvLyB0cmFuc2Zvcm0gY29tcG9uZW50IHYtbW9kZWwgZGF0YSBpbnRvIHByb3BzICYgZXZlbnRzXG4gIGlmIChkYXRhLm1vZGVsKSB7XG4gICAgdHJhbnNmb3JtTW9kZWwoQ3Rvci5vcHRpb25zLCBkYXRhKTtcbiAgfVxuXG4gIC8vIGV4dHJhY3QgcHJvcHNcbiAgdmFyIHByb3BzRGF0YSA9IGV4dHJhY3RQcm9wcyhkYXRhLCBDdG9yKTtcblxuICAvLyBmdW5jdGlvbmFsIGNvbXBvbmVudFxuICBpZiAoQ3Rvci5vcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICByZXR1cm4gY3JlYXRlRnVuY3Rpb25hbENvbXBvbmVudChDdG9yLCBwcm9wc0RhdGEsIGRhdGEsIGNvbnRleHQsIGNoaWxkcmVuKVxuICB9XG5cbiAgLy8gZXh0cmFjdCBsaXN0ZW5lcnMsIHNpbmNlIHRoZXNlIG5lZWRzIHRvIGJlIHRyZWF0ZWQgYXNcbiAgLy8gY2hpbGQgY29tcG9uZW50IGxpc3RlbmVycyBpbnN0ZWFkIG9mIERPTSBsaXN0ZW5lcnNcbiAgdmFyIGxpc3RlbmVycyA9IGRhdGEub247XG4gIC8vIHJlcGxhY2Ugd2l0aCBsaXN0ZW5lcnMgd2l0aCAubmF0aXZlIG1vZGlmaWVyXG4gIGRhdGEub24gPSBkYXRhLm5hdGl2ZU9uO1xuXG4gIGlmIChDdG9yLm9wdGlvbnMuYWJzdHJhY3QpIHtcbiAgICAvLyBhYnN0cmFjdCBjb21wb25lbnRzIGRvIG5vdCBrZWVwIGFueXRoaW5nXG4gICAgLy8gb3RoZXIgdGhhbiBwcm9wcyAmIGxpc3RlbmVyc1xuICAgIGRhdGEgPSB7fTtcbiAgfVxuXG4gIC8vIG1lcmdlIGNvbXBvbmVudCBtYW5hZ2VtZW50IGhvb2tzIG9udG8gdGhlIHBsYWNlaG9sZGVyIG5vZGVcbiAgbWVyZ2VIb29rcyhkYXRhKTtcblxuICAvLyByZXR1cm4gYSBwbGFjZWhvbGRlciB2bm9kZVxuICB2YXIgbmFtZSA9IEN0b3Iub3B0aW9ucy5uYW1lIHx8IHRhZztcbiAgdmFyIHZub2RlID0gbmV3IFZOb2RlKFxuICAgIChcInZ1ZS1jb21wb25lbnQtXCIgKyAoQ3Rvci5jaWQpICsgKG5hbWUgPyAoXCItXCIgKyBuYW1lKSA6ICcnKSksXG4gICAgZGF0YSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgY29udGV4dCxcbiAgICB7IEN0b3I6IEN0b3IsIHByb3BzRGF0YTogcHJvcHNEYXRhLCBsaXN0ZW5lcnM6IGxpc3RlbmVycywgdGFnOiB0YWcsIGNoaWxkcmVuOiBjaGlsZHJlbiB9XG4gICk7XG4gIHJldHVybiB2bm9kZVxufVxuXG5mdW5jdGlvbiBjcmVhdGVGdW5jdGlvbmFsQ29tcG9uZW50IChcbiAgQ3RvcixcbiAgcHJvcHNEYXRhLFxuICBkYXRhLFxuICBjb250ZXh0LFxuICBjaGlsZHJlblxuKSB7XG4gIHZhciBwcm9wcyA9IHt9O1xuICB2YXIgcHJvcE9wdGlvbnMgPSBDdG9yLm9wdGlvbnMucHJvcHM7XG4gIGlmIChwcm9wT3B0aW9ucykge1xuICAgIGZvciAodmFyIGtleSBpbiBwcm9wT3B0aW9ucykge1xuICAgICAgcHJvcHNba2V5XSA9IHZhbGlkYXRlUHJvcChrZXksIHByb3BPcHRpb25zLCBwcm9wc0RhdGEpO1xuICAgIH1cbiAgfVxuICAvLyBlbnN1cmUgdGhlIGNyZWF0ZUVsZW1lbnQgZnVuY3Rpb24gaW4gZnVuY3Rpb25hbCBjb21wb25lbnRzXG4gIC8vIGdldHMgYSB1bmlxdWUgY29udGV4dCAtIHRoaXMgaXMgbmVjZXNzYXJ5IGZvciBjb3JyZWN0IG5hbWVkIHNsb3QgY2hlY2tcbiAgdmFyIF9jb250ZXh0ID0gT2JqZWN0LmNyZWF0ZShjb250ZXh0KTtcbiAgdmFyIGggPSBmdW5jdGlvbiAoYSwgYiwgYywgZCkgeyByZXR1cm4gY3JlYXRlRWxlbWVudChfY29udGV4dCwgYSwgYiwgYywgZCwgdHJ1ZSk7IH07XG4gIHZhciB2bm9kZSA9IEN0b3Iub3B0aW9ucy5yZW5kZXIuY2FsbChudWxsLCBoLCB7XG4gICAgcHJvcHM6IHByb3BzLFxuICAgIGRhdGE6IGRhdGEsXG4gICAgcGFyZW50OiBjb250ZXh0LFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBzbG90czogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVzb2x2ZVNsb3RzKGNoaWxkcmVuLCBjb250ZXh0KTsgfVxuICB9KTtcbiAgaWYgKHZub2RlIGluc3RhbmNlb2YgVk5vZGUpIHtcbiAgICB2bm9kZS5mdW5jdGlvbmFsQ29udGV4dCA9IGNvbnRleHQ7XG4gICAgaWYgKGRhdGEuc2xvdCkge1xuICAgICAgKHZub2RlLmRhdGEgfHwgKHZub2RlLmRhdGEgPSB7fSkpLnNsb3QgPSBkYXRhLnNsb3Q7XG4gICAgfVxuICB9XG4gIHJldHVybiB2bm9kZVxufVxuXG5mdW5jdGlvbiBjcmVhdGVDb21wb25lbnRJbnN0YW5jZUZvclZub2RlIChcbiAgdm5vZGUsIC8vIHdlIGtub3cgaXQncyBNb3VudGVkQ29tcG9uZW50Vk5vZGUgYnV0IGZsb3cgZG9lc24ndFxuICBwYXJlbnQsIC8vIGFjdGl2ZUluc3RhbmNlIGluIGxpZmVjeWNsZSBzdGF0ZVxuICBwYXJlbnRFbG0sXG4gIHJlZkVsbVxuKSB7XG4gIHZhciB2bm9kZUNvbXBvbmVudE9wdGlvbnMgPSB2bm9kZS5jb21wb25lbnRPcHRpb25zO1xuICB2YXIgb3B0aW9ucyA9IHtcbiAgICBfaXNDb21wb25lbnQ6IHRydWUsXG4gICAgcGFyZW50OiBwYXJlbnQsXG4gICAgcHJvcHNEYXRhOiB2bm9kZUNvbXBvbmVudE9wdGlvbnMucHJvcHNEYXRhLFxuICAgIF9jb21wb25lbnRUYWc6IHZub2RlQ29tcG9uZW50T3B0aW9ucy50YWcsXG4gICAgX3BhcmVudFZub2RlOiB2bm9kZSxcbiAgICBfcGFyZW50TGlzdGVuZXJzOiB2bm9kZUNvbXBvbmVudE9wdGlvbnMubGlzdGVuZXJzLFxuICAgIF9yZW5kZXJDaGlsZHJlbjogdm5vZGVDb21wb25lbnRPcHRpb25zLmNoaWxkcmVuLFxuICAgIF9wYXJlbnRFbG06IHBhcmVudEVsbSB8fCBudWxsLFxuICAgIF9yZWZFbG06IHJlZkVsbSB8fCBudWxsXG4gIH07XG4gIC8vIGNoZWNrIGlubGluZS10ZW1wbGF0ZSByZW5kZXIgZnVuY3Rpb25zXG4gIHZhciBpbmxpbmVUZW1wbGF0ZSA9IHZub2RlLmRhdGEuaW5saW5lVGVtcGxhdGU7XG4gIGlmIChpbmxpbmVUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gaW5saW5lVGVtcGxhdGUucmVuZGVyO1xuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gaW5saW5lVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zO1xuICB9XG4gIHJldHVybiBuZXcgdm5vZGVDb21wb25lbnRPcHRpb25zLkN0b3Iob3B0aW9ucylcbn1cblxuZnVuY3Rpb24gaW5pdCAoXG4gIHZub2RlLFxuICBoeWRyYXRpbmcsXG4gIHBhcmVudEVsbSxcbiAgcmVmRWxtXG4pIHtcbiAgaWYgKCF2bm9kZS5jb21wb25lbnRJbnN0YW5jZSB8fCB2bm9kZS5jb21wb25lbnRJbnN0YW5jZS5faXNEZXN0cm95ZWQpIHtcbiAgICB2YXIgY2hpbGQgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSA9IGNyZWF0ZUNvbXBvbmVudEluc3RhbmNlRm9yVm5vZGUoXG4gICAgICB2bm9kZSxcbiAgICAgIGFjdGl2ZUluc3RhbmNlLFxuICAgICAgcGFyZW50RWxtLFxuICAgICAgcmVmRWxtXG4gICAgKTtcbiAgICBjaGlsZC4kbW91bnQoaHlkcmF0aW5nID8gdm5vZGUuZWxtIDogdW5kZWZpbmVkLCBoeWRyYXRpbmcpO1xuICB9IGVsc2UgaWYgKHZub2RlLmRhdGEua2VlcEFsaXZlKSB7XG4gICAgLy8ga2VwdC1hbGl2ZSBjb21wb25lbnRzLCB0cmVhdCBhcyBhIHBhdGNoXG4gICAgdmFyIG1vdW50ZWROb2RlID0gdm5vZGU7IC8vIHdvcmsgYXJvdW5kIGZsb3dcbiAgICBwcmVwYXRjaChtb3VudGVkTm9kZSwgbW91bnRlZE5vZGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByZXBhdGNoIChcbiAgb2xkVm5vZGUsXG4gIHZub2RlXG4pIHtcbiAgdmFyIG9wdGlvbnMgPSB2bm9kZS5jb21wb25lbnRPcHRpb25zO1xuICB2YXIgY2hpbGQgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSA9IG9sZFZub2RlLmNvbXBvbmVudEluc3RhbmNlO1xuICB1cGRhdGVDaGlsZENvbXBvbmVudChcbiAgICBjaGlsZCxcbiAgICBvcHRpb25zLnByb3BzRGF0YSwgLy8gdXBkYXRlZCBwcm9wc1xuICAgIG9wdGlvbnMubGlzdGVuZXJzLCAvLyB1cGRhdGVkIGxpc3RlbmVyc1xuICAgIHZub2RlLCAvLyBuZXcgcGFyZW50IHZub2RlXG4gICAgb3B0aW9ucy5jaGlsZHJlbiAvLyBuZXcgY2hpbGRyZW5cbiAgKTtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0ICh2bm9kZSkge1xuICBpZiAoIXZub2RlLmNvbXBvbmVudEluc3RhbmNlLl9pc01vdW50ZWQpIHtcbiAgICB2bm9kZS5jb21wb25lbnRJbnN0YW5jZS5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICBjYWxsSG9vayh2bm9kZS5jb21wb25lbnRJbnN0YW5jZSwgJ21vdW50ZWQnKTtcbiAgfVxuICBpZiAodm5vZGUuZGF0YS5rZWVwQWxpdmUpIHtcbiAgICBhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KHZub2RlLmNvbXBvbmVudEluc3RhbmNlLCB0cnVlIC8qIGRpcmVjdCAqLyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVzdHJveSAodm5vZGUpIHtcbiAgaWYgKCF2bm9kZS5jb21wb25lbnRJbnN0YW5jZS5faXNEZXN0cm95ZWQpIHtcbiAgICBpZiAoIXZub2RlLmRhdGEua2VlcEFsaXZlKSB7XG4gICAgICB2bm9kZS5jb21wb25lbnRJbnN0YW5jZS4kZGVzdHJveSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWFjdGl2YXRlQ2hpbGRDb21wb25lbnQodm5vZGUuY29tcG9uZW50SW5zdGFuY2UsIHRydWUgLyogZGlyZWN0ICovKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUFzeW5jQ29tcG9uZW50IChcbiAgZmFjdG9yeSxcbiAgYmFzZUN0b3IsXG4gIGNiXG4pIHtcbiAgaWYgKGZhY3RvcnkucmVxdWVzdGVkKSB7XG4gICAgLy8gcG9vbCBjYWxsYmFja3NcbiAgICBmYWN0b3J5LnBlbmRpbmdDYWxsYmFja3MucHVzaChjYik7XG4gIH0gZWxzZSB7XG4gICAgZmFjdG9yeS5yZXF1ZXN0ZWQgPSB0cnVlO1xuICAgIHZhciBjYnMgPSBmYWN0b3J5LnBlbmRpbmdDYWxsYmFja3MgPSBbY2JdO1xuICAgIHZhciBzeW5jID0gdHJ1ZTtcblxuICAgIHZhciByZXNvbHZlID0gZnVuY3Rpb24gKHJlcykge1xuICAgICAgaWYgKGlzT2JqZWN0KHJlcykpIHtcbiAgICAgICAgcmVzID0gYmFzZUN0b3IuZXh0ZW5kKHJlcyk7XG4gICAgICB9XG4gICAgICAvLyBjYWNoZSByZXNvbHZlZFxuICAgICAgZmFjdG9yeS5yZXNvbHZlZCA9IHJlcztcbiAgICAgIC8vIGludm9rZSBjYWxsYmFja3Mgb25seSBpZiB0aGlzIGlzIG5vdCBhIHN5bmNocm9ub3VzIHJlc29sdmVcbiAgICAgIC8vIChhc3luYyByZXNvbHZlcyBhcmUgc2hpbW1lZCBhcyBzeW5jaHJvbm91cyBkdXJpbmcgU1NSKVxuICAgICAgaWYgKCFzeW5jKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gY2JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGNic1tpXShyZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciByZWplY3QgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgIFwiRmFpbGVkIHRvIHJlc29sdmUgYXN5bmMgY29tcG9uZW50OiBcIiArIChTdHJpbmcoZmFjdG9yeSkpICtcbiAgICAgICAgKHJlYXNvbiA/IChcIlxcblJlYXNvbjogXCIgKyByZWFzb24pIDogJycpXG4gICAgICApO1xuICAgIH07XG5cbiAgICB2YXIgcmVzID0gZmFjdG9yeShyZXNvbHZlLCByZWplY3QpO1xuXG4gICAgLy8gaGFuZGxlIHByb21pc2VcbiAgICBpZiAocmVzICYmIHR5cGVvZiByZXMudGhlbiA9PT0gJ2Z1bmN0aW9uJyAmJiAhZmFjdG9yeS5yZXNvbHZlZCkge1xuICAgICAgcmVzLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICB9XG5cbiAgICBzeW5jID0gZmFsc2U7XG4gICAgLy8gcmV0dXJuIGluIGNhc2UgcmVzb2x2ZWQgc3luY2hyb25vdXNseVxuICAgIHJldHVybiBmYWN0b3J5LnJlc29sdmVkXG4gIH1cbn1cblxuZnVuY3Rpb24gZXh0cmFjdFByb3BzIChkYXRhLCBDdG9yKSB7XG4gIC8vIHdlIGFyZSBvbmx5IGV4dHJhY3RpbmcgcmF3IHZhbHVlcyBoZXJlLlxuICAvLyB2YWxpZGF0aW9uIGFuZCBkZWZhdWx0IHZhbHVlcyBhcmUgaGFuZGxlZCBpbiB0aGUgY2hpbGRcbiAgLy8gY29tcG9uZW50IGl0c2VsZi5cbiAgdmFyIHByb3BPcHRpb25zID0gQ3Rvci5vcHRpb25zLnByb3BzO1xuICBpZiAoIXByb3BPcHRpb25zKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIHJlcyA9IHt9O1xuICB2YXIgYXR0cnMgPSBkYXRhLmF0dHJzO1xuICB2YXIgcHJvcHMgPSBkYXRhLnByb3BzO1xuICB2YXIgZG9tUHJvcHMgPSBkYXRhLmRvbVByb3BzO1xuICBpZiAoYXR0cnMgfHwgcHJvcHMgfHwgZG9tUHJvcHMpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcE9wdGlvbnMpIHtcbiAgICAgIHZhciBhbHRLZXkgPSBoeXBoZW5hdGUoa2V5KTtcbiAgICAgIGNoZWNrUHJvcChyZXMsIHByb3BzLCBrZXksIGFsdEtleSwgdHJ1ZSkgfHxcbiAgICAgIGNoZWNrUHJvcChyZXMsIGF0dHJzLCBrZXksIGFsdEtleSkgfHxcbiAgICAgIGNoZWNrUHJvcChyZXMsIGRvbVByb3BzLCBrZXksIGFsdEtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wIChcbiAgcmVzLFxuICBoYXNoLFxuICBrZXksXG4gIGFsdEtleSxcbiAgcHJlc2VydmVcbikge1xuICBpZiAoaGFzaCkge1xuICAgIGlmIChoYXNPd24oaGFzaCwga2V5KSkge1xuICAgICAgcmVzW2tleV0gPSBoYXNoW2tleV07XG4gICAgICBpZiAoIXByZXNlcnZlKSB7XG4gICAgICAgIGRlbGV0ZSBoYXNoW2tleV07XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gZWxzZSBpZiAoaGFzT3duKGhhc2gsIGFsdEtleSkpIHtcbiAgICAgIHJlc1trZXldID0gaGFzaFthbHRLZXldO1xuICAgICAgaWYgKCFwcmVzZXJ2ZSkge1xuICAgICAgICBkZWxldGUgaGFzaFthbHRLZXldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIG1lcmdlSG9va3MgKGRhdGEpIHtcbiAgaWYgKCFkYXRhLmhvb2spIHtcbiAgICBkYXRhLmhvb2sgPSB7fTtcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGhvb2tzVG9NZXJnZS5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBob29rc1RvTWVyZ2VbaV07XG4gICAgdmFyIGZyb21QYXJlbnQgPSBkYXRhLmhvb2tba2V5XTtcbiAgICB2YXIgb3VycyA9IGhvb2tzW2tleV07XG4gICAgZGF0YS5ob29rW2tleV0gPSBmcm9tUGFyZW50ID8gbWVyZ2VIb29rJDEob3VycywgZnJvbVBhcmVudCkgOiBvdXJzO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlSG9vayQxIChvbmUsIHR3bykge1xuICByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHtcbiAgICBvbmUoYSwgYiwgYywgZCk7XG4gICAgdHdvKGEsIGIsIGMsIGQpO1xuICB9XG59XG5cbi8vIHRyYW5zZm9ybSBjb21wb25lbnQgdi1tb2RlbCBpbmZvICh2YWx1ZSBhbmQgY2FsbGJhY2spIGludG9cbi8vIHByb3AgYW5kIGV2ZW50IGhhbmRsZXIgcmVzcGVjdGl2ZWx5LlxuZnVuY3Rpb24gdHJhbnNmb3JtTW9kZWwgKG9wdGlvbnMsIGRhdGEpIHtcbiAgdmFyIHByb3AgPSAob3B0aW9ucy5tb2RlbCAmJiBvcHRpb25zLm1vZGVsLnByb3ApIHx8ICd2YWx1ZSc7XG4gIHZhciBldmVudCA9IChvcHRpb25zLm1vZGVsICYmIG9wdGlvbnMubW9kZWwuZXZlbnQpIHx8ICdpbnB1dCc7KGRhdGEucHJvcHMgfHwgKGRhdGEucHJvcHMgPSB7fSkpW3Byb3BdID0gZGF0YS5tb2RlbC52YWx1ZTtcbiAgdmFyIG9uID0gZGF0YS5vbiB8fCAoZGF0YS5vbiA9IHt9KTtcbiAgaWYgKG9uW2V2ZW50XSkge1xuICAgIG9uW2V2ZW50XSA9IFtkYXRhLm1vZGVsLmNhbGxiYWNrXS5jb25jYXQob25bZXZlbnRdKTtcbiAgfSBlbHNlIHtcbiAgICBvbltldmVudF0gPSBkYXRhLm1vZGVsLmNhbGxiYWNrO1xuICB9XG59XG5cbi8qICAqL1xuXG52YXIgU0lNUExFX05PUk1BTElaRSA9IDE7XG52YXIgQUxXQVlTX05PUk1BTElaRSA9IDI7XG5cbi8vIHdyYXBwZXIgZnVuY3Rpb24gZm9yIHByb3ZpZGluZyBhIG1vcmUgZmxleGlibGUgaW50ZXJmYWNlXG4vLyB3aXRob3V0IGdldHRpbmcgeWVsbGVkIGF0IGJ5IGZsb3dcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQgKFxuICBjb250ZXh0LFxuICB0YWcsXG4gIGRhdGEsXG4gIGNoaWxkcmVuLFxuICBub3JtYWxpemF0aW9uVHlwZSxcbiAgYWx3YXlzTm9ybWFsaXplXG4pIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkgfHwgaXNQcmltaXRpdmUoZGF0YSkpIHtcbiAgICBub3JtYWxpemF0aW9uVHlwZSA9IGNoaWxkcmVuO1xuICAgIGNoaWxkcmVuID0gZGF0YTtcbiAgICBkYXRhID0gdW5kZWZpbmVkO1xuICB9XG4gIGlmIChhbHdheXNOb3JtYWxpemUpIHsgbm9ybWFsaXphdGlvblR5cGUgPSBBTFdBWVNfTk9STUFMSVpFOyB9XG4gIHJldHVybiBfY3JlYXRlRWxlbWVudChjb250ZXh0LCB0YWcsIGRhdGEsIGNoaWxkcmVuLCBub3JtYWxpemF0aW9uVHlwZSlcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUVsZW1lbnQgKFxuICBjb250ZXh0LFxuICB0YWcsXG4gIGRhdGEsXG4gIGNoaWxkcmVuLFxuICBub3JtYWxpemF0aW9uVHlwZVxuKSB7XG4gIGlmIChkYXRhICYmIGRhdGEuX19vYl9fKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgXCJBdm9pZCB1c2luZyBvYnNlcnZlZCBkYXRhIG9iamVjdCBhcyB2bm9kZSBkYXRhOiBcIiArIChKU09OLnN0cmluZ2lmeShkYXRhKSkgKyBcIlxcblwiICtcbiAgICAgICdBbHdheXMgY3JlYXRlIGZyZXNoIHZub2RlIGRhdGEgb2JqZWN0cyBpbiBlYWNoIHJlbmRlciEnLFxuICAgICAgY29udGV4dFxuICAgICk7XG4gICAgcmV0dXJuIGNyZWF0ZUVtcHR5Vk5vZGUoKVxuICB9XG4gIGlmICghdGFnKSB7XG4gICAgLy8gaW4gY2FzZSBvZiBjb21wb25lbnQgOmlzIHNldCB0byBmYWxzeSB2YWx1ZVxuICAgIHJldHVybiBjcmVhdGVFbXB0eVZOb2RlKClcbiAgfVxuICAvLyBzdXBwb3J0IHNpbmdsZSBmdW5jdGlvbiBjaGlsZHJlbiBhcyBkZWZhdWx0IHNjb3BlZCBzbG90XG4gIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSAmJlxuICAgICAgdHlwZW9mIGNoaWxkcmVuWzBdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZGF0YSA9IGRhdGEgfHwge307XG4gICAgZGF0YS5zY29wZWRTbG90cyA9IHsgZGVmYXVsdDogY2hpbGRyZW5bMF0gfTtcbiAgICBjaGlsZHJlbi5sZW5ndGggPSAwO1xuICB9XG4gIGlmIChub3JtYWxpemF0aW9uVHlwZSA9PT0gQUxXQVlTX05PUk1BTElaRSkge1xuICAgIGNoaWxkcmVuID0gbm9ybWFsaXplQ2hpbGRyZW4oY2hpbGRyZW4pO1xuICB9IGVsc2UgaWYgKG5vcm1hbGl6YXRpb25UeXBlID09PSBTSU1QTEVfTk9STUFMSVpFKSB7XG4gICAgY2hpbGRyZW4gPSBzaW1wbGVOb3JtYWxpemVDaGlsZHJlbihjaGlsZHJlbik7XG4gIH1cbiAgdmFyIHZub2RlLCBucztcbiAgaWYgKHR5cGVvZiB0YWcgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIEN0b3I7XG4gICAgbnMgPSBjb25maWcuZ2V0VGFnTmFtZXNwYWNlKHRhZyk7XG4gICAgaWYgKGNvbmZpZy5pc1Jlc2VydmVkVGFnKHRhZykpIHtcbiAgICAgIC8vIHBsYXRmb3JtIGJ1aWx0LWluIGVsZW1lbnRzXG4gICAgICB2bm9kZSA9IG5ldyBWTm9kZShcbiAgICAgICAgY29uZmlnLnBhcnNlUGxhdGZvcm1UYWdOYW1lKHRhZyksIGRhdGEsIGNoaWxkcmVuLFxuICAgICAgICB1bmRlZmluZWQsIHVuZGVmaW5lZCwgY29udGV4dFxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKChDdG9yID0gcmVzb2x2ZUFzc2V0KGNvbnRleHQuJG9wdGlvbnMsICdjb21wb25lbnRzJywgdGFnKSkpIHtcbiAgICAgIC8vIGNvbXBvbmVudFxuICAgICAgdm5vZGUgPSBjcmVhdGVDb21wb25lbnQoQ3RvciwgZGF0YSwgY29udGV4dCwgY2hpbGRyZW4sIHRhZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHVua25vd24gb3IgdW5saXN0ZWQgbmFtZXNwYWNlZCBlbGVtZW50c1xuICAgICAgLy8gY2hlY2sgYXQgcnVudGltZSBiZWNhdXNlIGl0IG1heSBnZXQgYXNzaWduZWQgYSBuYW1lc3BhY2Ugd2hlbiBpdHNcbiAgICAgIC8vIHBhcmVudCBub3JtYWxpemVzIGNoaWxkcmVuXG4gICAgICB2bm9kZSA9IG5ldyBWTm9kZShcbiAgICAgICAgdGFnLCBkYXRhLCBjaGlsZHJlbixcbiAgICAgICAgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGNvbnRleHRcbiAgICAgICk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGRpcmVjdCBjb21wb25lbnQgb3B0aW9ucyAvIGNvbnN0cnVjdG9yXG4gICAgdm5vZGUgPSBjcmVhdGVDb21wb25lbnQodGFnLCBkYXRhLCBjb250ZXh0LCBjaGlsZHJlbik7XG4gIH1cbiAgaWYgKHZub2RlKSB7XG4gICAgaWYgKG5zKSB7IGFwcGx5TlModm5vZGUsIG5zKTsgfVxuICAgIHJldHVybiB2bm9kZVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBjcmVhdGVFbXB0eVZOb2RlKClcbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseU5TICh2bm9kZSwgbnMpIHtcbiAgdm5vZGUubnMgPSBucztcbiAgaWYgKHZub2RlLnRhZyA9PT0gJ2ZvcmVpZ25PYmplY3QnKSB7XG4gICAgLy8gdXNlIGRlZmF1bHQgbmFtZXNwYWNlIGluc2lkZSBmb3JlaWduT2JqZWN0XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKHZub2RlLmNoaWxkcmVuKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSB2bm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHZhciBjaGlsZCA9IHZub2RlLmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGNoaWxkLnRhZyAmJiAhY2hpbGQubnMpIHtcbiAgICAgICAgYXBwbHlOUyhjaGlsZCwgbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgcmVuZGVyaW5nIHYtZm9yIGxpc3RzLlxuICovXG5mdW5jdGlvbiByZW5kZXJMaXN0IChcbiAgdmFsLFxuICByZW5kZXJcbikge1xuICB2YXIgcmV0LCBpLCBsLCBrZXlzLCBrZXk7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkgfHwgdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXQgPSBuZXcgQXJyYXkodmFsLmxlbmd0aCk7XG4gICAgZm9yIChpID0gMCwgbCA9IHZhbC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHJldFtpXSA9IHJlbmRlcih2YWxbaV0sIGkpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHJldCA9IG5ldyBBcnJheSh2YWwpO1xuICAgIGZvciAoaSA9IDA7IGkgPCB2YWw7IGkrKykge1xuICAgICAgcmV0W2ldID0gcmVuZGVyKGkgKyAxLCBpKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsKSkge1xuICAgIGtleXMgPSBPYmplY3Qua2V5cyh2YWwpO1xuICAgIHJldCA9IG5ldyBBcnJheShrZXlzLmxlbmd0aCk7XG4gICAgZm9yIChpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgcmV0W2ldID0gcmVuZGVyKHZhbFtrZXldLCBrZXksIGkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbi8qICAqL1xuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZW5kZXJpbmcgPHNsb3Q+XG4gKi9cbmZ1bmN0aW9uIHJlbmRlclNsb3QgKFxuICBuYW1lLFxuICBmYWxsYmFjayxcbiAgcHJvcHMsXG4gIGJpbmRPYmplY3Rcbikge1xuICB2YXIgc2NvcGVkU2xvdEZuID0gdGhpcy4kc2NvcGVkU2xvdHNbbmFtZV07XG4gIGlmIChzY29wZWRTbG90Rm4pIHsgLy8gc2NvcGVkIHNsb3RcbiAgICBwcm9wcyA9IHByb3BzIHx8IHt9O1xuICAgIGlmIChiaW5kT2JqZWN0KSB7XG4gICAgICBleHRlbmQocHJvcHMsIGJpbmRPYmplY3QpO1xuICAgIH1cbiAgICByZXR1cm4gc2NvcGVkU2xvdEZuKHByb3BzKSB8fCBmYWxsYmFja1xuICB9IGVsc2Uge1xuICAgIHZhciBzbG90Tm9kZXMgPSB0aGlzLiRzbG90c1tuYW1lXTtcbiAgICAvLyB3YXJuIGR1cGxpY2F0ZSBzbG90IHVzYWdlXG4gICAgaWYgKHNsb3ROb2RlcyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBzbG90Tm9kZXMuX3JlbmRlcmVkICYmIHdhcm4oXG4gICAgICAgIFwiRHVwbGljYXRlIHByZXNlbmNlIG9mIHNsb3QgXFxcIlwiICsgbmFtZSArIFwiXFxcIiBmb3VuZCBpbiB0aGUgc2FtZSByZW5kZXIgdHJlZSBcIiArXG4gICAgICAgIFwiLSB0aGlzIHdpbGwgbGlrZWx5IGNhdXNlIHJlbmRlciBlcnJvcnMuXCIsXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgICBzbG90Tm9kZXMuX3JlbmRlcmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHNsb3ROb2RlcyB8fCBmYWxsYmFja1xuICB9XG59XG5cbi8qICAqL1xuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZXNvbHZpbmcgZmlsdGVyc1xuICovXG5mdW5jdGlvbiByZXNvbHZlRmlsdGVyIChpZCkge1xuICByZXR1cm4gcmVzb2x2ZUFzc2V0KHRoaXMuJG9wdGlvbnMsICdmaWx0ZXJzJywgaWQsIHRydWUpIHx8IGlkZW50aXR5XG59XG5cbi8qICAqL1xuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciBjaGVja2luZyBrZXlDb2RlcyBmcm9tIGNvbmZpZy5cbiAqL1xuZnVuY3Rpb24gY2hlY2tLZXlDb2RlcyAoXG4gIGV2ZW50S2V5Q29kZSxcbiAga2V5LFxuICBidWlsdEluQWxpYXNcbikge1xuICB2YXIga2V5Q29kZXMgPSBjb25maWcua2V5Q29kZXNba2V5XSB8fCBidWlsdEluQWxpYXM7XG4gIGlmIChBcnJheS5pc0FycmF5KGtleUNvZGVzKSkge1xuICAgIHJldHVybiBrZXlDb2Rlcy5pbmRleE9mKGV2ZW50S2V5Q29kZSkgPT09IC0xXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGtleUNvZGVzICE9PSBldmVudEtleUNvZGVcbiAgfVxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgbWVyZ2luZyB2LWJpbmQ9XCJvYmplY3RcIiBpbnRvIGEgVk5vZGUncyBkYXRhLlxuICovXG5mdW5jdGlvbiBiaW5kT2JqZWN0UHJvcHMgKFxuICBkYXRhLFxuICB0YWcsXG4gIHZhbHVlLFxuICBhc1Byb3Bcbikge1xuICBpZiAodmFsdWUpIHtcbiAgICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICAndi1iaW5kIHdpdGhvdXQgYXJndW1lbnQgZXhwZWN0cyBhbiBPYmplY3Qgb3IgQXJyYXkgdmFsdWUnLFxuICAgICAgICB0aGlzXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSB0b09iamVjdCh2YWx1ZSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ2NsYXNzJyB8fCBrZXkgPT09ICdzdHlsZScpIHtcbiAgICAgICAgICBkYXRhW2tleV0gPSB2YWx1ZVtrZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciB0eXBlID0gZGF0YS5hdHRycyAmJiBkYXRhLmF0dHJzLnR5cGU7XG4gICAgICAgICAgdmFyIGhhc2ggPSBhc1Byb3AgfHwgY29uZmlnLm11c3RVc2VQcm9wKHRhZywgdHlwZSwga2V5KVxuICAgICAgICAgICAgPyBkYXRhLmRvbVByb3BzIHx8IChkYXRhLmRvbVByb3BzID0ge30pXG4gICAgICAgICAgICA6IGRhdGEuYXR0cnMgfHwgKGRhdGEuYXR0cnMgPSB7fSk7XG4gICAgICAgICAgaGFzaFtrZXldID0gdmFsdWVba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZGF0YVxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgcmVuZGVyaW5nIHN0YXRpYyB0cmVlcy5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyU3RhdGljIChcbiAgaW5kZXgsXG4gIGlzSW5Gb3Jcbikge1xuICB2YXIgdHJlZSA9IHRoaXMuX3N0YXRpY1RyZWVzW2luZGV4XTtcbiAgLy8gaWYgaGFzIGFscmVhZHktcmVuZGVyZWQgc3RhdGljIHRyZWUgYW5kIG5vdCBpbnNpZGUgdi1mb3IsXG4gIC8vIHdlIGNhbiByZXVzZSB0aGUgc2FtZSB0cmVlIGJ5IGRvaW5nIGEgc2hhbGxvdyBjbG9uZS5cbiAgaWYgKHRyZWUgJiYgIWlzSW5Gb3IpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0cmVlKVxuICAgICAgPyBjbG9uZVZOb2Rlcyh0cmVlKVxuICAgICAgOiBjbG9uZVZOb2RlKHRyZWUpXG4gIH1cbiAgLy8gb3RoZXJ3aXNlLCByZW5kZXIgYSBmcmVzaCB0cmVlLlxuICB0cmVlID0gdGhpcy5fc3RhdGljVHJlZXNbaW5kZXhdID1cbiAgICB0aGlzLiRvcHRpb25zLnN0YXRpY1JlbmRlckZuc1tpbmRleF0uY2FsbCh0aGlzLl9yZW5kZXJQcm94eSk7XG4gIG1hcmtTdGF0aWModHJlZSwgKFwiX19zdGF0aWNfX1wiICsgaW5kZXgpLCBmYWxzZSk7XG4gIHJldHVybiB0cmVlXG59XG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIHYtb25jZS5cbiAqIEVmZmVjdGl2ZWx5IGl0IG1lYW5zIG1hcmtpbmcgdGhlIG5vZGUgYXMgc3RhdGljIHdpdGggYSB1bmlxdWUga2V5LlxuICovXG5mdW5jdGlvbiBtYXJrT25jZSAoXG4gIHRyZWUsXG4gIGluZGV4LFxuICBrZXlcbikge1xuICBtYXJrU3RhdGljKHRyZWUsIChcIl9fb25jZV9fXCIgKyBpbmRleCArIChrZXkgPyAoXCJfXCIgKyBrZXkpIDogXCJcIikpLCB0cnVlKTtcbiAgcmV0dXJuIHRyZWVcbn1cblxuZnVuY3Rpb24gbWFya1N0YXRpYyAoXG4gIHRyZWUsXG4gIGtleSxcbiAgaXNPbmNlXG4pIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodHJlZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyZWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0cmVlW2ldICYmIHR5cGVvZiB0cmVlW2ldICE9PSAnc3RyaW5nJykge1xuICAgICAgICBtYXJrU3RhdGljTm9kZSh0cmVlW2ldLCAoa2V5ICsgXCJfXCIgKyBpKSwgaXNPbmNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbWFya1N0YXRpY05vZGUodHJlZSwga2V5LCBpc09uY2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcmtTdGF0aWNOb2RlIChub2RlLCBrZXksIGlzT25jZSkge1xuICBub2RlLmlzU3RhdGljID0gdHJ1ZTtcbiAgbm9kZS5rZXkgPSBrZXk7XG4gIG5vZGUuaXNPbmNlID0gaXNPbmNlO1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdFJlbmRlciAodm0pIHtcbiAgdm0uJHZub2RlID0gbnVsbDsgLy8gdGhlIHBsYWNlaG9sZGVyIG5vZGUgaW4gcGFyZW50IHRyZWVcbiAgdm0uX3Zub2RlID0gbnVsbDsgLy8gdGhlIHJvb3Qgb2YgdGhlIGNoaWxkIHRyZWVcbiAgdm0uX3N0YXRpY1RyZWVzID0gbnVsbDtcbiAgdmFyIHBhcmVudFZub2RlID0gdm0uJG9wdGlvbnMuX3BhcmVudFZub2RlO1xuICB2YXIgcmVuZGVyQ29udGV4dCA9IHBhcmVudFZub2RlICYmIHBhcmVudFZub2RlLmNvbnRleHQ7XG4gIHZtLiRzbG90cyA9IHJlc29sdmVTbG90cyh2bS4kb3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW4sIHJlbmRlckNvbnRleHQpO1xuICB2bS4kc2NvcGVkU2xvdHMgPSBlbXB0eU9iamVjdDtcbiAgLy8gYmluZCB0aGUgY3JlYXRlRWxlbWVudCBmbiB0byB0aGlzIGluc3RhbmNlXG4gIC8vIHNvIHRoYXQgd2UgZ2V0IHByb3BlciByZW5kZXIgY29udGV4dCBpbnNpZGUgaXQuXG4gIC8vIGFyZ3Mgb3JkZXI6IHRhZywgZGF0YSwgY2hpbGRyZW4sIG5vcm1hbGl6YXRpb25UeXBlLCBhbHdheXNOb3JtYWxpemVcbiAgLy8gaW50ZXJuYWwgdmVyc2lvbiBpcyB1c2VkIGJ5IHJlbmRlciBmdW5jdGlvbnMgY29tcGlsZWQgZnJvbSB0ZW1wbGF0ZXNcbiAgdm0uX2MgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCkgeyByZXR1cm4gY3JlYXRlRWxlbWVudCh2bSwgYSwgYiwgYywgZCwgZmFsc2UpOyB9O1xuICAvLyBub3JtYWxpemF0aW9uIGlzIGFsd2F5cyBhcHBsaWVkIGZvciB0aGUgcHVibGljIHZlcnNpb24sIHVzZWQgaW5cbiAgLy8gdXNlci13cml0dGVuIHJlbmRlciBmdW5jdGlvbnMuXG4gIHZtLiRjcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHsgcmV0dXJuIGNyZWF0ZUVsZW1lbnQodm0sIGEsIGIsIGMsIGQsIHRydWUpOyB9O1xufVxuXG5mdW5jdGlvbiByZW5kZXJNaXhpbiAoVnVlKSB7XG4gIFZ1ZS5wcm90b3R5cGUuJG5leHRUaWNrID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgcmV0dXJuIG5leHRUaWNrKGZuLCB0aGlzKVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuX3JlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIHZhciByZWYgPSB2bS4kb3B0aW9ucztcbiAgICB2YXIgcmVuZGVyID0gcmVmLnJlbmRlcjtcbiAgICB2YXIgc3RhdGljUmVuZGVyRm5zID0gcmVmLnN0YXRpY1JlbmRlckZucztcbiAgICB2YXIgX3BhcmVudFZub2RlID0gcmVmLl9wYXJlbnRWbm9kZTtcblxuICAgIGlmICh2bS5faXNNb3VudGVkKSB7XG4gICAgICAvLyBjbG9uZSBzbG90IG5vZGVzIG9uIHJlLXJlbmRlcnNcbiAgICAgIGZvciAodmFyIGtleSBpbiB2bS4kc2xvdHMpIHtcbiAgICAgICAgdm0uJHNsb3RzW2tleV0gPSBjbG9uZVZOb2Rlcyh2bS4kc2xvdHNba2V5XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdm0uJHNjb3BlZFNsb3RzID0gKF9wYXJlbnRWbm9kZSAmJiBfcGFyZW50Vm5vZGUuZGF0YS5zY29wZWRTbG90cykgfHwgZW1wdHlPYmplY3Q7XG5cbiAgICBpZiAoc3RhdGljUmVuZGVyRm5zICYmICF2bS5fc3RhdGljVHJlZXMpIHtcbiAgICAgIHZtLl9zdGF0aWNUcmVlcyA9IFtdO1xuICAgIH1cbiAgICAvLyBzZXQgcGFyZW50IHZub2RlLiB0aGlzIGFsbG93cyByZW5kZXIgZnVuY3Rpb25zIHRvIGhhdmUgYWNjZXNzXG4gICAgLy8gdG8gdGhlIGRhdGEgb24gdGhlIHBsYWNlaG9sZGVyIG5vZGUuXG4gICAgdm0uJHZub2RlID0gX3BhcmVudFZub2RlO1xuICAgIC8vIHJlbmRlciBzZWxmXG4gICAgdmFyIHZub2RlO1xuICAgIHRyeSB7XG4gICAgICB2bm9kZSA9IHJlbmRlci5jYWxsKHZtLl9yZW5kZXJQcm94eSwgdm0uJGNyZWF0ZUVsZW1lbnQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGhhbmRsZUVycm9yKGUsIHZtLCBcInJlbmRlciBmdW5jdGlvblwiKTtcbiAgICAgIC8vIHJldHVybiBlcnJvciByZW5kZXIgcmVzdWx0LFxuICAgICAgLy8gb3IgcHJldmlvdXMgdm5vZGUgdG8gcHJldmVudCByZW5kZXIgZXJyb3IgY2F1c2luZyBibGFuayBjb21wb25lbnRcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB2bm9kZSA9IHZtLiRvcHRpb25zLnJlbmRlckVycm9yXG4gICAgICAgICAgPyB2bS4kb3B0aW9ucy5yZW5kZXJFcnJvci5jYWxsKHZtLl9yZW5kZXJQcm94eSwgdm0uJGNyZWF0ZUVsZW1lbnQsIGUpXG4gICAgICAgICAgOiB2bS5fdm5vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2bm9kZSA9IHZtLl92bm9kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gcmV0dXJuIGVtcHR5IHZub2RlIGluIGNhc2UgdGhlIHJlbmRlciBmdW5jdGlvbiBlcnJvcmVkIG91dFxuICAgIGlmICghKHZub2RlIGluc3RhbmNlb2YgVk5vZGUpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBBcnJheS5pc0FycmF5KHZub2RlKSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdNdWx0aXBsZSByb290IG5vZGVzIHJldHVybmVkIGZyb20gcmVuZGVyIGZ1bmN0aW9uLiBSZW5kZXIgZnVuY3Rpb24gJyArXG4gICAgICAgICAgJ3Nob3VsZCByZXR1cm4gYSBzaW5nbGUgcm9vdCBub2RlLicsXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHZub2RlID0gY3JlYXRlRW1wdHlWTm9kZSgpO1xuICAgIH1cbiAgICAvLyBzZXQgcGFyZW50XG4gICAgdm5vZGUucGFyZW50ID0gX3BhcmVudFZub2RlO1xuICAgIHJldHVybiB2bm9kZVxuICB9O1xuXG4gIC8vIGludGVybmFsIHJlbmRlciBoZWxwZXJzLlxuICAvLyB0aGVzZSBhcmUgZXhwb3NlZCBvbiB0aGUgaW5zdGFuY2UgcHJvdG90eXBlIHRvIHJlZHVjZSBnZW5lcmF0ZWQgcmVuZGVyXG4gIC8vIGNvZGUgc2l6ZS5cbiAgVnVlLnByb3RvdHlwZS5fbyA9IG1hcmtPbmNlO1xuICBWdWUucHJvdG90eXBlLl9uID0gdG9OdW1iZXI7XG4gIFZ1ZS5wcm90b3R5cGUuX3MgPSBfdG9TdHJpbmc7XG4gIFZ1ZS5wcm90b3R5cGUuX2wgPSByZW5kZXJMaXN0O1xuICBWdWUucHJvdG90eXBlLl90ID0gcmVuZGVyU2xvdDtcbiAgVnVlLnByb3RvdHlwZS5fcSA9IGxvb3NlRXF1YWw7XG4gIFZ1ZS5wcm90b3R5cGUuX2kgPSBsb29zZUluZGV4T2Y7XG4gIFZ1ZS5wcm90b3R5cGUuX20gPSByZW5kZXJTdGF0aWM7XG4gIFZ1ZS5wcm90b3R5cGUuX2YgPSByZXNvbHZlRmlsdGVyO1xuICBWdWUucHJvdG90eXBlLl9rID0gY2hlY2tLZXlDb2RlcztcbiAgVnVlLnByb3RvdHlwZS5fYiA9IGJpbmRPYmplY3RQcm9wcztcbiAgVnVlLnByb3RvdHlwZS5fdiA9IGNyZWF0ZVRleHRWTm9kZTtcbiAgVnVlLnByb3RvdHlwZS5fZSA9IGNyZWF0ZUVtcHR5Vk5vZGU7XG4gIFZ1ZS5wcm90b3R5cGUuX3UgPSByZXNvbHZlU2NvcGVkU2xvdHM7XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0SW5qZWN0aW9ucyAodm0pIHtcbiAgdmFyIHByb3ZpZGUgPSB2bS4kb3B0aW9ucy5wcm92aWRlO1xuICB2YXIgaW5qZWN0ID0gdm0uJG9wdGlvbnMuaW5qZWN0O1xuICBpZiAocHJvdmlkZSkge1xuICAgIHZtLl9wcm92aWRlZCA9IHR5cGVvZiBwcm92aWRlID09PSAnZnVuY3Rpb24nXG4gICAgICA/IHByb3ZpZGUuY2FsbCh2bSlcbiAgICAgIDogcHJvdmlkZTtcbiAgfVxuICBpZiAoaW5qZWN0KSB7XG4gICAgLy8gaW5qZWN0IGlzIDphbnkgYmVjYXVzZSBmbG93IGlzIG5vdCBzbWFydCBlbm91Z2ggdG8gZmlndXJlIG91dCBjYWNoZWRcbiAgICAvLyBpc0FycmF5IGhlcmVcbiAgICB2YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoaW5qZWN0KTtcbiAgICB2YXIga2V5cyA9IGlzQXJyYXlcbiAgICAgID8gaW5qZWN0XG4gICAgICA6IGhhc1N5bWJvbFxuICAgICAgICA/IFJlZmxlY3Qub3duS2V5cyhpbmplY3QpXG4gICAgICAgIDogT2JqZWN0LmtleXMoaW5qZWN0KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICB2YXIgcHJvdmlkZUtleSA9IGlzQXJyYXkgPyBrZXkgOiBpbmplY3Rba2V5XTtcbiAgICAgIHZhciBzb3VyY2UgPSB2bTtcbiAgICAgIHdoaWxlIChzb3VyY2UpIHtcbiAgICAgICAgaWYgKHNvdXJjZS5fcHJvdmlkZWQgJiYgc291cmNlLl9wcm92aWRlZFtwcm92aWRlS2V5XSkge1xuICAgICAgICAgIHZtW2tleV0gPSBzb3VyY2UuX3Byb3ZpZGVkW3Byb3ZpZGVLZXldO1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgc291cmNlID0gc291cmNlLiRwYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qICAqL1xuXG52YXIgdWlkID0gMDtcblxuZnVuY3Rpb24gaW5pdE1peGluIChWdWUpIHtcbiAgVnVlLnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgY29uZmlnLnBlcmZvcm1hbmNlICYmIHBlcmYpIHtcbiAgICAgIHBlcmYubWFyaygnaW5pdCcpO1xuICAgIH1cblxuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgLy8gYSB1aWRcbiAgICB2bS5fdWlkID0gdWlkKys7XG4gICAgLy8gYSBmbGFnIHRvIGF2b2lkIHRoaXMgYmVpbmcgb2JzZXJ2ZWRcbiAgICB2bS5faXNWdWUgPSB0cnVlO1xuICAgIC8vIG1lcmdlIG9wdGlvbnNcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLl9pc0NvbXBvbmVudCkge1xuICAgICAgLy8gb3B0aW1pemUgaW50ZXJuYWwgY29tcG9uZW50IGluc3RhbnRpYXRpb25cbiAgICAgIC8vIHNpbmNlIGR5bmFtaWMgb3B0aW9ucyBtZXJnaW5nIGlzIHByZXR0eSBzbG93LCBhbmQgbm9uZSBvZiB0aGVcbiAgICAgIC8vIGludGVybmFsIGNvbXBvbmVudCBvcHRpb25zIG5lZWRzIHNwZWNpYWwgdHJlYXRtZW50LlxuICAgICAgaW5pdEludGVybmFsQ29tcG9uZW50KHZtLCBvcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdm0uJG9wdGlvbnMgPSBtZXJnZU9wdGlvbnMoXG4gICAgICAgIHJlc29sdmVDb25zdHJ1Y3Rvck9wdGlvbnModm0uY29uc3RydWN0b3IpLFxuICAgICAgICBvcHRpb25zIHx8IHt9LFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICB9XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaW5pdFByb3h5KHZtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdm0uX3JlbmRlclByb3h5ID0gdm07XG4gICAgfVxuICAgIC8vIGV4cG9zZSByZWFsIHNlbGZcbiAgICB2bS5fc2VsZiA9IHZtO1xuICAgIGluaXRMaWZlY3ljbGUodm0pO1xuICAgIGluaXRFdmVudHModm0pO1xuICAgIGluaXRSZW5kZXIodm0pO1xuICAgIGNhbGxIb29rKHZtLCAnYmVmb3JlQ3JlYXRlJyk7XG4gICAgaW5pdFN0YXRlKHZtKTtcbiAgICBpbml0SW5qZWN0aW9ucyh2bSk7XG4gICAgY2FsbEhvb2sodm0sICdjcmVhdGVkJyk7XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjb25maWcucGVyZm9ybWFuY2UgJiYgcGVyZikge1xuICAgICAgdm0uX25hbWUgPSBmb3JtYXRDb21wb25lbnROYW1lKHZtLCBmYWxzZSk7XG4gICAgICBwZXJmLm1hcmsoJ2luaXQgZW5kJyk7XG4gICAgICBwZXJmLm1lYXN1cmUoKCh2bS5fbmFtZSkgKyBcIiBpbml0XCIpLCAnaW5pdCcsICdpbml0IGVuZCcpO1xuICAgIH1cblxuICAgIGlmICh2bS4kb3B0aW9ucy5lbCkge1xuICAgICAgdm0uJG1vdW50KHZtLiRvcHRpb25zLmVsKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGluaXRJbnRlcm5hbENvbXBvbmVudCAodm0sIG9wdGlvbnMpIHtcbiAgdmFyIG9wdHMgPSB2bS4kb3B0aW9ucyA9IE9iamVjdC5jcmVhdGUodm0uY29uc3RydWN0b3Iub3B0aW9ucyk7XG4gIC8vIGRvaW5nIHRoaXMgYmVjYXVzZSBpdCdzIGZhc3RlciB0aGFuIGR5bmFtaWMgZW51bWVyYXRpb24uXG4gIG9wdHMucGFyZW50ID0gb3B0aW9ucy5wYXJlbnQ7XG4gIG9wdHMucHJvcHNEYXRhID0gb3B0aW9ucy5wcm9wc0RhdGE7XG4gIG9wdHMuX3BhcmVudFZub2RlID0gb3B0aW9ucy5fcGFyZW50Vm5vZGU7XG4gIG9wdHMuX3BhcmVudExpc3RlbmVycyA9IG9wdGlvbnMuX3BhcmVudExpc3RlbmVycztcbiAgb3B0cy5fcmVuZGVyQ2hpbGRyZW4gPSBvcHRpb25zLl9yZW5kZXJDaGlsZHJlbjtcbiAgb3B0cy5fY29tcG9uZW50VGFnID0gb3B0aW9ucy5fY29tcG9uZW50VGFnO1xuICBvcHRzLl9wYXJlbnRFbG0gPSBvcHRpb25zLl9wYXJlbnRFbG07XG4gIG9wdHMuX3JlZkVsbSA9IG9wdGlvbnMuX3JlZkVsbTtcbiAgaWYgKG9wdGlvbnMucmVuZGVyKSB7XG4gICAgb3B0cy5yZW5kZXIgPSBvcHRpb25zLnJlbmRlcjtcbiAgICBvcHRzLnN0YXRpY1JlbmRlckZucyA9IG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVDb25zdHJ1Y3Rvck9wdGlvbnMgKEN0b3IpIHtcbiAgdmFyIG9wdGlvbnMgPSBDdG9yLm9wdGlvbnM7XG4gIGlmIChDdG9yLnN1cGVyKSB7XG4gICAgdmFyIHN1cGVyT3B0aW9ucyA9IHJlc29sdmVDb25zdHJ1Y3Rvck9wdGlvbnMoQ3Rvci5zdXBlcik7XG4gICAgdmFyIGNhY2hlZFN1cGVyT3B0aW9ucyA9IEN0b3Iuc3VwZXJPcHRpb25zO1xuICAgIGlmIChzdXBlck9wdGlvbnMgIT09IGNhY2hlZFN1cGVyT3B0aW9ucykge1xuICAgICAgLy8gc3VwZXIgb3B0aW9uIGNoYW5nZWQsXG4gICAgICAvLyBuZWVkIHRvIHJlc29sdmUgbmV3IG9wdGlvbnMuXG4gICAgICBDdG9yLnN1cGVyT3B0aW9ucyA9IHN1cGVyT3B0aW9ucztcbiAgICAgIC8vIGNoZWNrIGlmIHRoZXJlIGFyZSBhbnkgbGF0ZS1tb2RpZmllZC9hdHRhY2hlZCBvcHRpb25zICgjNDk3NilcbiAgICAgIHZhciBtb2RpZmllZE9wdGlvbnMgPSByZXNvbHZlTW9kaWZpZWRPcHRpb25zKEN0b3IpO1xuICAgICAgLy8gdXBkYXRlIGJhc2UgZXh0ZW5kIG9wdGlvbnNcbiAgICAgIGlmIChtb2RpZmllZE9wdGlvbnMpIHtcbiAgICAgICAgZXh0ZW5kKEN0b3IuZXh0ZW5kT3B0aW9ucywgbW9kaWZpZWRPcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIG9wdGlvbnMgPSBDdG9yLm9wdGlvbnMgPSBtZXJnZU9wdGlvbnMoc3VwZXJPcHRpb25zLCBDdG9yLmV4dGVuZE9wdGlvbnMpO1xuICAgICAgaWYgKG9wdGlvbnMubmFtZSkge1xuICAgICAgICBvcHRpb25zLmNvbXBvbmVudHNbb3B0aW9ucy5uYW1lXSA9IEN0b3I7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBvcHRpb25zXG59XG5cbmZ1bmN0aW9uIHJlc29sdmVNb2RpZmllZE9wdGlvbnMgKEN0b3IpIHtcbiAgdmFyIG1vZGlmaWVkO1xuICB2YXIgbGF0ZXN0ID0gQ3Rvci5vcHRpb25zO1xuICB2YXIgc2VhbGVkID0gQ3Rvci5zZWFsZWRPcHRpb25zO1xuICBmb3IgKHZhciBrZXkgaW4gbGF0ZXN0KSB7XG4gICAgaWYgKGxhdGVzdFtrZXldICE9PSBzZWFsZWRba2V5XSkge1xuICAgICAgaWYgKCFtb2RpZmllZCkgeyBtb2RpZmllZCA9IHt9OyB9XG4gICAgICBtb2RpZmllZFtrZXldID0gZGVkdXBlKGxhdGVzdFtrZXldLCBzZWFsZWRba2V5XSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBtb2RpZmllZFxufVxuXG5mdW5jdGlvbiBkZWR1cGUgKGxhdGVzdCwgc2VhbGVkKSB7XG4gIC8vIGNvbXBhcmUgbGF0ZXN0IGFuZCBzZWFsZWQgdG8gZW5zdXJlIGxpZmVjeWNsZSBob29rcyB3b24ndCBiZSBkdXBsaWNhdGVkXG4gIC8vIGJldHdlZW4gbWVyZ2VzXG4gIGlmIChBcnJheS5pc0FycmF5KGxhdGVzdCkpIHtcbiAgICB2YXIgcmVzID0gW107XG4gICAgc2VhbGVkID0gQXJyYXkuaXNBcnJheShzZWFsZWQpID8gc2VhbGVkIDogW3NlYWxlZF07XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXRlc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChzZWFsZWQuaW5kZXhPZihsYXRlc3RbaV0pIDwgMCkge1xuICAgICAgICByZXMucHVzaChsYXRlc3RbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxhdGVzdFxuICB9XG59XG5cbmZ1bmN0aW9uIFZ1ZSQyIChvcHRpb25zKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgISh0aGlzIGluc3RhbmNlb2YgVnVlJDIpKSB7XG4gICAgd2FybignVnVlIGlzIGEgY29uc3RydWN0b3IgYW5kIHNob3VsZCBiZSBjYWxsZWQgd2l0aCB0aGUgYG5ld2Aga2V5d29yZCcpO1xuICB9XG4gIHRoaXMuX2luaXQob3B0aW9ucyk7XG59XG5cbmluaXRNaXhpbihWdWUkMik7XG5zdGF0ZU1peGluKFZ1ZSQyKTtcbmV2ZW50c01peGluKFZ1ZSQyKTtcbmxpZmVjeWNsZU1peGluKFZ1ZSQyKTtcbnJlbmRlck1peGluKFZ1ZSQyKTtcblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRVc2UgKFZ1ZSkge1xuICBWdWUudXNlID0gZnVuY3Rpb24gKHBsdWdpbikge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChwbHVnaW4uaW5zdGFsbGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gYWRkaXRpb25hbCBwYXJhbWV0ZXJzXG4gICAgdmFyIGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cywgMSk7XG4gICAgYXJncy51bnNoaWZ0KHRoaXMpO1xuICAgIGlmICh0eXBlb2YgcGx1Z2luLmluc3RhbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBsdWdpbi5pbnN0YWxsLmFwcGx5KHBsdWdpbiwgYXJncyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcGx1Z2luID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwbHVnaW4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfVxuICAgIHBsdWdpbi5pbnN0YWxsZWQgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzXG4gIH07XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0TWl4aW4kMSAoVnVlKSB7XG4gIFZ1ZS5taXhpbiA9IGZ1bmN0aW9uIChtaXhpbikge1xuICAgIHRoaXMub3B0aW9ucyA9IG1lcmdlT3B0aW9ucyh0aGlzLm9wdGlvbnMsIG1peGluKTtcbiAgfTtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRFeHRlbmQgKFZ1ZSkge1xuICAvKipcbiAgICogRWFjaCBpbnN0YW5jZSBjb25zdHJ1Y3RvciwgaW5jbHVkaW5nIFZ1ZSwgaGFzIGEgdW5pcXVlXG4gICAqIGNpZC4gVGhpcyBlbmFibGVzIHVzIHRvIGNyZWF0ZSB3cmFwcGVkIFwiY2hpbGRcbiAgICogY29uc3RydWN0b3JzXCIgZm9yIHByb3RvdHlwYWwgaW5oZXJpdGFuY2UgYW5kIGNhY2hlIHRoZW0uXG4gICAqL1xuICBWdWUuY2lkID0gMDtcbiAgdmFyIGNpZCA9IDE7XG5cbiAgLyoqXG4gICAqIENsYXNzIGluaGVyaXRhbmNlXG4gICAqL1xuICBWdWUuZXh0ZW5kID0gZnVuY3Rpb24gKGV4dGVuZE9wdGlvbnMpIHtcbiAgICBleHRlbmRPcHRpb25zID0gZXh0ZW5kT3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgU3VwZXIgPSB0aGlzO1xuICAgIHZhciBTdXBlcklkID0gU3VwZXIuY2lkO1xuICAgIHZhciBjYWNoZWRDdG9ycyA9IGV4dGVuZE9wdGlvbnMuX0N0b3IgfHwgKGV4dGVuZE9wdGlvbnMuX0N0b3IgPSB7fSk7XG4gICAgaWYgKGNhY2hlZEN0b3JzW1N1cGVySWRdKSB7XG4gICAgICByZXR1cm4gY2FjaGVkQ3RvcnNbU3VwZXJJZF1cbiAgICB9XG5cbiAgICB2YXIgbmFtZSA9IGV4dGVuZE9wdGlvbnMubmFtZSB8fCBTdXBlci5vcHRpb25zLm5hbWU7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICghL15bYS16QS1aXVtcXHctXSokLy50ZXN0KG5hbWUpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ0ludmFsaWQgY29tcG9uZW50IG5hbWU6IFwiJyArIG5hbWUgKyAnXCIuIENvbXBvbmVudCBuYW1lcyAnICtcbiAgICAgICAgICAnY2FuIG9ubHkgY29udGFpbiBhbHBoYW51bWVyaWMgY2hhcmFjdGVycyBhbmQgdGhlIGh5cGhlbiwgJyArXG4gICAgICAgICAgJ2FuZCBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIuJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBTdWIgPSBmdW5jdGlvbiBWdWVDb21wb25lbnQgKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuX2luaXQob3B0aW9ucyk7XG4gICAgfTtcbiAgICBTdWIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTdXBlci5wcm90b3R5cGUpO1xuICAgIFN1Yi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTdWI7XG4gICAgU3ViLmNpZCA9IGNpZCsrO1xuICAgIFN1Yi5vcHRpb25zID0gbWVyZ2VPcHRpb25zKFxuICAgICAgU3VwZXIub3B0aW9ucyxcbiAgICAgIGV4dGVuZE9wdGlvbnNcbiAgICApO1xuICAgIFN1Ylsnc3VwZXInXSA9IFN1cGVyO1xuXG4gICAgLy8gRm9yIHByb3BzIGFuZCBjb21wdXRlZCBwcm9wZXJ0aWVzLCB3ZSBkZWZpbmUgdGhlIHByb3h5IGdldHRlcnMgb25cbiAgICAvLyB0aGUgVnVlIGluc3RhbmNlcyBhdCBleHRlbnNpb24gdGltZSwgb24gdGhlIGV4dGVuZGVkIHByb3RvdHlwZS4gVGhpc1xuICAgIC8vIGF2b2lkcyBPYmplY3QuZGVmaW5lUHJvcGVydHkgY2FsbHMgZm9yIGVhY2ggaW5zdGFuY2UgY3JlYXRlZC5cbiAgICBpZiAoU3ViLm9wdGlvbnMucHJvcHMpIHtcbiAgICAgIGluaXRQcm9wcyQxKFN1Yik7XG4gICAgfVxuICAgIGlmIChTdWIub3B0aW9ucy5jb21wdXRlZCkge1xuICAgICAgaW5pdENvbXB1dGVkJDEoU3ViKTtcbiAgICB9XG5cbiAgICAvLyBhbGxvdyBmdXJ0aGVyIGV4dGVuc2lvbi9taXhpbi9wbHVnaW4gdXNhZ2VcbiAgICBTdWIuZXh0ZW5kID0gU3VwZXIuZXh0ZW5kO1xuICAgIFN1Yi5taXhpbiA9IFN1cGVyLm1peGluO1xuICAgIFN1Yi51c2UgPSBTdXBlci51c2U7XG5cbiAgICAvLyBjcmVhdGUgYXNzZXQgcmVnaXN0ZXJzLCBzbyBleHRlbmRlZCBjbGFzc2VzXG4gICAgLy8gY2FuIGhhdmUgdGhlaXIgcHJpdmF0ZSBhc3NldHMgdG9vLlxuICAgIGNvbmZpZy5fYXNzZXRUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICBTdWJbdHlwZV0gPSBTdXBlclt0eXBlXTtcbiAgICB9KTtcbiAgICAvLyBlbmFibGUgcmVjdXJzaXZlIHNlbGYtbG9va3VwXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIFN1Yi5vcHRpb25zLmNvbXBvbmVudHNbbmFtZV0gPSBTdWI7XG4gICAgfVxuXG4gICAgLy8ga2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgc3VwZXIgb3B0aW9ucyBhdCBleHRlbnNpb24gdGltZS5cbiAgICAvLyBsYXRlciBhdCBpbnN0YW50aWF0aW9uIHdlIGNhbiBjaGVjayBpZiBTdXBlcidzIG9wdGlvbnMgaGF2ZVxuICAgIC8vIGJlZW4gdXBkYXRlZC5cbiAgICBTdWIuc3VwZXJPcHRpb25zID0gU3VwZXIub3B0aW9ucztcbiAgICBTdWIuZXh0ZW5kT3B0aW9ucyA9IGV4dGVuZE9wdGlvbnM7XG4gICAgU3ViLnNlYWxlZE9wdGlvbnMgPSBleHRlbmQoe30sIFN1Yi5vcHRpb25zKTtcblxuICAgIC8vIGNhY2hlIGNvbnN0cnVjdG9yXG4gICAgY2FjaGVkQ3RvcnNbU3VwZXJJZF0gPSBTdWI7XG4gICAgcmV0dXJuIFN1YlxuICB9O1xufVxuXG5mdW5jdGlvbiBpbml0UHJvcHMkMSAoQ29tcCkge1xuICB2YXIgcHJvcHMgPSBDb21wLm9wdGlvbnMucHJvcHM7XG4gIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgIHByb3h5KENvbXAucHJvdG90eXBlLCBcIl9wcm9wc1wiLCBrZXkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRDb21wdXRlZCQxIChDb21wKSB7XG4gIHZhciBjb21wdXRlZCA9IENvbXAub3B0aW9ucy5jb21wdXRlZDtcbiAgZm9yICh2YXIga2V5IGluIGNvbXB1dGVkKSB7XG4gICAgZGVmaW5lQ29tcHV0ZWQoQ29tcC5wcm90b3R5cGUsIGtleSwgY29tcHV0ZWRba2V5XSk7XG4gIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRBc3NldFJlZ2lzdGVycyAoVnVlKSB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYXNzZXQgcmVnaXN0cmF0aW9uIG1ldGhvZHMuXG4gICAqL1xuICBjb25maWcuX2Fzc2V0VHlwZXMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgIFZ1ZVt0eXBlXSA9IGZ1bmN0aW9uIChcbiAgICAgIGlkLFxuICAgICAgZGVmaW5pdGlvblxuICAgICkge1xuICAgICAgaWYgKCFkZWZpbml0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnNbdHlwZSArICdzJ11baWRdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBpZiAodHlwZSA9PT0gJ2NvbXBvbmVudCcgJiYgY29uZmlnLmlzUmVzZXJ2ZWRUYWcoaWQpKSB7XG4gICAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgICAnRG8gbm90IHVzZSBidWlsdC1pbiBvciByZXNlcnZlZCBIVE1MIGVsZW1lbnRzIGFzIGNvbXBvbmVudCAnICtcbiAgICAgICAgICAgICAgJ2lkOiAnICsgaWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSAnY29tcG9uZW50JyAmJiBpc1BsYWluT2JqZWN0KGRlZmluaXRpb24pKSB7XG4gICAgICAgICAgZGVmaW5pdGlvbi5uYW1lID0gZGVmaW5pdGlvbi5uYW1lIHx8IGlkO1xuICAgICAgICAgIGRlZmluaXRpb24gPSB0aGlzLm9wdGlvbnMuX2Jhc2UuZXh0ZW5kKGRlZmluaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSAnZGlyZWN0aXZlJyAmJiB0eXBlb2YgZGVmaW5pdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGRlZmluaXRpb24gPSB7IGJpbmQ6IGRlZmluaXRpb24sIHVwZGF0ZTogZGVmaW5pdGlvbiB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW9uc1t0eXBlICsgJ3MnXVtpZF0gPSBkZWZpbml0aW9uO1xuICAgICAgICByZXR1cm4gZGVmaW5pdGlvblxuICAgICAgfVxuICAgIH07XG4gIH0pO1xufVxuXG4vKiAgKi9cblxudmFyIHBhdHRlcm5UeXBlcyA9IFtTdHJpbmcsIFJlZ0V4cF07XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUgKG9wdHMpIHtcbiAgcmV0dXJuIG9wdHMgJiYgKG9wdHMuQ3Rvci5vcHRpb25zLm5hbWUgfHwgb3B0cy50YWcpXG59XG5cbmZ1bmN0aW9uIG1hdGNoZXMgKHBhdHRlcm4sIG5hbWUpIHtcbiAgaWYgKHR5cGVvZiBwYXR0ZXJuID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXR0ZXJuLnNwbGl0KCcsJykuaW5kZXhPZihuYW1lKSA+IC0xXG4gIH0gZWxzZSBpZiAocGF0dGVybiBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobmFtZSlcbiAgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gcHJ1bmVDYWNoZSAoY2FjaGUsIGZpbHRlcikge1xuICBmb3IgKHZhciBrZXkgaW4gY2FjaGUpIHtcbiAgICB2YXIgY2FjaGVkTm9kZSA9IGNhY2hlW2tleV07XG4gICAgaWYgKGNhY2hlZE5vZGUpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShjYWNoZWROb2RlLmNvbXBvbmVudE9wdGlvbnMpO1xuICAgICAgaWYgKG5hbWUgJiYgIWZpbHRlcihuYW1lKSkge1xuICAgICAgICBwcnVuZUNhY2hlRW50cnkoY2FjaGVkTm9kZSk7XG4gICAgICAgIGNhY2hlW2tleV0gPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwcnVuZUNhY2hlRW50cnkgKHZub2RlKSB7XG4gIGlmICh2bm9kZSkge1xuICAgIGlmICghdm5vZGUuY29tcG9uZW50SW5zdGFuY2UuX2luYWN0aXZlKSB7XG4gICAgICBjYWxsSG9vayh2bm9kZS5jb21wb25lbnRJbnN0YW5jZSwgJ2RlYWN0aXZhdGVkJyk7XG4gICAgfVxuICAgIHZub2RlLmNvbXBvbmVudEluc3RhbmNlLiRkZXN0cm95KCk7XG4gIH1cbn1cblxudmFyIEtlZXBBbGl2ZSA9IHtcbiAgbmFtZTogJ2tlZXAtYWxpdmUnLFxuICBhYnN0cmFjdDogdHJ1ZSxcblxuICBwcm9wczoge1xuICAgIGluY2x1ZGU6IHBhdHRlcm5UeXBlcyxcbiAgICBleGNsdWRlOiBwYXR0ZXJuVHlwZXNcbiAgfSxcblxuICBjcmVhdGVkOiBmdW5jdGlvbiBjcmVhdGVkICgpIHtcbiAgICB0aGlzLmNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgfSxcblxuICBkZXN0cm95ZWQ6IGZ1bmN0aW9uIGRlc3Ryb3llZCAoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcyQxLmNhY2hlKSB7XG4gICAgICBwcnVuZUNhY2hlRW50cnkodGhpcyQxLmNhY2hlW2tleV0pO1xuICAgIH1cbiAgfSxcblxuICB3YXRjaDoge1xuICAgIGluY2x1ZGU6IGZ1bmN0aW9uIGluY2x1ZGUgKHZhbCkge1xuICAgICAgcHJ1bmVDYWNoZSh0aGlzLmNhY2hlLCBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gbWF0Y2hlcyh2YWwsIG5hbWUpOyB9KTtcbiAgICB9LFxuICAgIGV4Y2x1ZGU6IGZ1bmN0aW9uIGV4Y2x1ZGUgKHZhbCkge1xuICAgICAgcHJ1bmVDYWNoZSh0aGlzLmNhY2hlLCBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gIW1hdGNoZXModmFsLCBuYW1lKTsgfSk7XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyICgpIHtcbiAgICB2YXIgdm5vZGUgPSBnZXRGaXJzdENvbXBvbmVudENoaWxkKHRoaXMuJHNsb3RzLmRlZmF1bHQpO1xuICAgIHZhciBjb21wb25lbnRPcHRpb25zID0gdm5vZGUgJiYgdm5vZGUuY29tcG9uZW50T3B0aW9ucztcbiAgICBpZiAoY29tcG9uZW50T3B0aW9ucykge1xuICAgICAgLy8gY2hlY2sgcGF0dGVyblxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKGNvbXBvbmVudE9wdGlvbnMpO1xuICAgICAgaWYgKG5hbWUgJiYgKFxuICAgICAgICAodGhpcy5pbmNsdWRlICYmICFtYXRjaGVzKHRoaXMuaW5jbHVkZSwgbmFtZSkpIHx8XG4gICAgICAgICh0aGlzLmV4Y2x1ZGUgJiYgbWF0Y2hlcyh0aGlzLmV4Y2x1ZGUsIG5hbWUpKVxuICAgICAgKSkge1xuICAgICAgICByZXR1cm4gdm5vZGVcbiAgICAgIH1cbiAgICAgIHZhciBrZXkgPSB2bm9kZS5rZXkgPT0gbnVsbFxuICAgICAgICAvLyBzYW1lIGNvbnN0cnVjdG9yIG1heSBnZXQgcmVnaXN0ZXJlZCBhcyBkaWZmZXJlbnQgbG9jYWwgY29tcG9uZW50c1xuICAgICAgICAvLyBzbyBjaWQgYWxvbmUgaXMgbm90IGVub3VnaCAoIzMyNjkpXG4gICAgICAgID8gY29tcG9uZW50T3B0aW9ucy5DdG9yLmNpZCArIChjb21wb25lbnRPcHRpb25zLnRhZyA/IChcIjo6XCIgKyAoY29tcG9uZW50T3B0aW9ucy50YWcpKSA6ICcnKVxuICAgICAgICA6IHZub2RlLmtleTtcbiAgICAgIGlmICh0aGlzLmNhY2hlW2tleV0pIHtcbiAgICAgICAgdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgPSB0aGlzLmNhY2hlW2tleV0uY29tcG9uZW50SW5zdGFuY2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNhY2hlW2tleV0gPSB2bm9kZTtcbiAgICAgIH1cbiAgICAgIHZub2RlLmRhdGEua2VlcEFsaXZlID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHZub2RlXG4gIH1cbn07XG5cbnZhciBidWlsdEluQ29tcG9uZW50cyA9IHtcbiAgS2VlcEFsaXZlOiBLZWVwQWxpdmVcbn07XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0R2xvYmFsQVBJIChWdWUpIHtcbiAgLy8gY29uZmlnXG4gIHZhciBjb25maWdEZWYgPSB7fTtcbiAgY29uZmlnRGVmLmdldCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbmZpZzsgfTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25maWdEZWYuc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgd2FybihcbiAgICAgICAgJ0RvIG5vdCByZXBsYWNlIHRoZSBWdWUuY29uZmlnIG9iamVjdCwgc2V0IGluZGl2aWR1YWwgZmllbGRzIGluc3RlYWQuJ1xuICAgICAgKTtcbiAgICB9O1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUsICdjb25maWcnLCBjb25maWdEZWYpO1xuXG4gIC8vIGV4cG9zZWQgdXRpbCBtZXRob2RzLlxuICAvLyBOT1RFOiB0aGVzZSBhcmUgbm90IGNvbnNpZGVyZWQgcGFydCBvZiB0aGUgcHVibGljIEFQSSAtIGF2b2lkIHJlbHlpbmcgb25cbiAgLy8gdGhlbSB1bmxlc3MgeW91IGFyZSBhd2FyZSBvZiB0aGUgcmlzay5cbiAgVnVlLnV0aWwgPSB7XG4gICAgd2Fybjogd2FybixcbiAgICBleHRlbmQ6IGV4dGVuZCxcbiAgICBtZXJnZU9wdGlvbnM6IG1lcmdlT3B0aW9ucyxcbiAgICBkZWZpbmVSZWFjdGl2ZTogZGVmaW5lUmVhY3RpdmUkJDFcbiAgfTtcblxuICBWdWUuc2V0ID0gc2V0O1xuICBWdWUuZGVsZXRlID0gZGVsO1xuICBWdWUubmV4dFRpY2sgPSBuZXh0VGljaztcblxuICBWdWUub3B0aW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGNvbmZpZy5fYXNzZXRUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgVnVlLm9wdGlvbnNbdHlwZSArICdzJ10gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB9KTtcblxuICAvLyB0aGlzIGlzIHVzZWQgdG8gaWRlbnRpZnkgdGhlIFwiYmFzZVwiIGNvbnN0cnVjdG9yIHRvIGV4dGVuZCBhbGwgcGxhaW4tb2JqZWN0XG4gIC8vIGNvbXBvbmVudHMgd2l0aCBpbiBXZWV4J3MgbXVsdGktaW5zdGFuY2Ugc2NlbmFyaW9zLlxuICBWdWUub3B0aW9ucy5fYmFzZSA9IFZ1ZTtcblxuICBleHRlbmQoVnVlLm9wdGlvbnMuY29tcG9uZW50cywgYnVpbHRJbkNvbXBvbmVudHMpO1xuXG4gIGluaXRVc2UoVnVlKTtcbiAgaW5pdE1peGluJDEoVnVlKTtcbiAgaW5pdEV4dGVuZChWdWUpO1xuICBpbml0QXNzZXRSZWdpc3RlcnMoVnVlKTtcbn1cblxuaW5pdEdsb2JhbEFQSShWdWUkMik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUkMi5wcm90b3R5cGUsICckaXNTZXJ2ZXInLCB7XG4gIGdldDogaXNTZXJ2ZXJSZW5kZXJpbmdcbn0pO1xuXG5WdWUkMi52ZXJzaW9uID0gJzIuMi4xJztcblxuLyogICovXG5cbi8vIGF0dHJpYnV0ZXMgdGhhdCBzaG91bGQgYmUgdXNpbmcgcHJvcHMgZm9yIGJpbmRpbmdcbnZhciBhY2NlcHRWYWx1ZSA9IG1ha2VNYXAoJ2lucHV0LHRleHRhcmVhLG9wdGlvbixzZWxlY3QnKTtcbnZhciBtdXN0VXNlUHJvcCA9IGZ1bmN0aW9uICh0YWcsIHR5cGUsIGF0dHIpIHtcbiAgcmV0dXJuIChcbiAgICAoYXR0ciA9PT0gJ3ZhbHVlJyAmJiBhY2NlcHRWYWx1ZSh0YWcpKSAmJiB0eXBlICE9PSAnYnV0dG9uJyB8fFxuICAgIChhdHRyID09PSAnc2VsZWN0ZWQnICYmIHRhZyA9PT0gJ29wdGlvbicpIHx8XG4gICAgKGF0dHIgPT09ICdjaGVja2VkJyAmJiB0YWcgPT09ICdpbnB1dCcpIHx8XG4gICAgKGF0dHIgPT09ICdtdXRlZCcgJiYgdGFnID09PSAndmlkZW8nKVxuICApXG59O1xuXG52YXIgaXNFbnVtZXJhdGVkQXR0ciA9IG1ha2VNYXAoJ2NvbnRlbnRlZGl0YWJsZSxkcmFnZ2FibGUsc3BlbGxjaGVjaycpO1xuXG52YXIgaXNCb29sZWFuQXR0ciA9IG1ha2VNYXAoXG4gICdhbGxvd2Z1bGxzY3JlZW4sYXN5bmMsYXV0b2ZvY3VzLGF1dG9wbGF5LGNoZWNrZWQsY29tcGFjdCxjb250cm9scyxkZWNsYXJlLCcgK1xuICAnZGVmYXVsdCxkZWZhdWx0Y2hlY2tlZCxkZWZhdWx0bXV0ZWQsZGVmYXVsdHNlbGVjdGVkLGRlZmVyLGRpc2FibGVkLCcgK1xuICAnZW5hYmxlZCxmb3Jtbm92YWxpZGF0ZSxoaWRkZW4saW5kZXRlcm1pbmF0ZSxpbmVydCxpc21hcCxpdGVtc2NvcGUsbG9vcCxtdWx0aXBsZSwnICtcbiAgJ211dGVkLG5vaHJlZixub3Jlc2l6ZSxub3NoYWRlLG5vdmFsaWRhdGUsbm93cmFwLG9wZW4scGF1c2VvbmV4aXQscmVhZG9ubHksJyArXG4gICdyZXF1aXJlZCxyZXZlcnNlZCxzY29wZWQsc2VhbWxlc3Msc2VsZWN0ZWQsc29ydGFibGUsdHJhbnNsYXRlLCcgK1xuICAndHJ1ZXNwZWVkLHR5cGVtdXN0bWF0Y2gsdmlzaWJsZSdcbik7XG5cbnZhciB4bGlua05TID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnO1xuXG52YXIgaXNYbGluayA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBuYW1lLmNoYXJBdCg1KSA9PT0gJzonICYmIG5hbWUuc2xpY2UoMCwgNSkgPT09ICd4bGluaydcbn07XG5cbnZhciBnZXRYbGlua1Byb3AgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gaXNYbGluayhuYW1lKSA/IG5hbWUuc2xpY2UoNiwgbmFtZS5sZW5ndGgpIDogJydcbn07XG5cbnZhciBpc0ZhbHN5QXR0clZhbHVlID0gZnVuY3Rpb24gKHZhbCkge1xuICByZXR1cm4gdmFsID09IG51bGwgfHwgdmFsID09PSBmYWxzZVxufTtcblxuLyogICovXG5cbmZ1bmN0aW9uIGdlbkNsYXNzRm9yVm5vZGUgKHZub2RlKSB7XG4gIHZhciBkYXRhID0gdm5vZGUuZGF0YTtcbiAgdmFyIHBhcmVudE5vZGUgPSB2bm9kZTtcbiAgdmFyIGNoaWxkTm9kZSA9IHZub2RlO1xuICB3aGlsZSAoY2hpbGROb2RlLmNvbXBvbmVudEluc3RhbmNlKSB7XG4gICAgY2hpbGROb2RlID0gY2hpbGROb2RlLmNvbXBvbmVudEluc3RhbmNlLl92bm9kZTtcbiAgICBpZiAoY2hpbGROb2RlLmRhdGEpIHtcbiAgICAgIGRhdGEgPSBtZXJnZUNsYXNzRGF0YShjaGlsZE5vZGUuZGF0YSwgZGF0YSk7XG4gICAgfVxuICB9XG4gIHdoaWxlICgocGFyZW50Tm9kZSA9IHBhcmVudE5vZGUucGFyZW50KSkge1xuICAgIGlmIChwYXJlbnROb2RlLmRhdGEpIHtcbiAgICAgIGRhdGEgPSBtZXJnZUNsYXNzRGF0YShkYXRhLCBwYXJlbnROb2RlLmRhdGEpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZ2VuQ2xhc3NGcm9tRGF0YShkYXRhKVxufVxuXG5mdW5jdGlvbiBtZXJnZUNsYXNzRGF0YSAoY2hpbGQsIHBhcmVudCkge1xuICByZXR1cm4ge1xuICAgIHN0YXRpY0NsYXNzOiBjb25jYXQoY2hpbGQuc3RhdGljQ2xhc3MsIHBhcmVudC5zdGF0aWNDbGFzcyksXG4gICAgY2xhc3M6IGNoaWxkLmNsYXNzXG4gICAgICA/IFtjaGlsZC5jbGFzcywgcGFyZW50LmNsYXNzXVxuICAgICAgOiBwYXJlbnQuY2xhc3NcbiAgfVxufVxuXG5mdW5jdGlvbiBnZW5DbGFzc0Zyb21EYXRhIChkYXRhKSB7XG4gIHZhciBkeW5hbWljQ2xhc3MgPSBkYXRhLmNsYXNzO1xuICB2YXIgc3RhdGljQ2xhc3MgPSBkYXRhLnN0YXRpY0NsYXNzO1xuICBpZiAoc3RhdGljQ2xhc3MgfHwgZHluYW1pY0NsYXNzKSB7XG4gICAgcmV0dXJuIGNvbmNhdChzdGF0aWNDbGFzcywgc3RyaW5naWZ5Q2xhc3MoZHluYW1pY0NsYXNzKSlcbiAgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICByZXR1cm4gJydcbn1cblxuZnVuY3Rpb24gY29uY2F0IChhLCBiKSB7XG4gIHJldHVybiBhID8gYiA/IChhICsgJyAnICsgYikgOiBhIDogKGIgfHwgJycpXG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeUNsYXNzICh2YWx1ZSkge1xuICB2YXIgcmVzID0gJyc7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gcmVzXG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB2YXIgc3RyaW5naWZpZWQ7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmICh2YWx1ZVtpXSkge1xuICAgICAgICBpZiAoKHN0cmluZ2lmaWVkID0gc3RyaW5naWZ5Q2xhc3ModmFsdWVbaV0pKSkge1xuICAgICAgICAgIHJlcyArPSBzdHJpbmdpZmllZCArICcgJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzLnNsaWNlKDAsIC0xKVxuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZVtrZXldKSB7IHJlcyArPSBrZXkgKyAnICc7IH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcy5zbGljZSgwLCAtMSlcbiAgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICByZXR1cm4gcmVzXG59XG5cbi8qICAqL1xuXG52YXIgbmFtZXNwYWNlTWFwID0ge1xuICBzdmc6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXG4gIG1hdGg6ICdodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MJ1xufTtcblxudmFyIGlzSFRNTFRhZyA9IG1ha2VNYXAoXG4gICdodG1sLGJvZHksYmFzZSxoZWFkLGxpbmssbWV0YSxzdHlsZSx0aXRsZSwnICtcbiAgJ2FkZHJlc3MsYXJ0aWNsZSxhc2lkZSxmb290ZXIsaGVhZGVyLGgxLGgyLGgzLGg0LGg1LGg2LGhncm91cCxuYXYsc2VjdGlvbiwnICtcbiAgJ2RpdixkZCxkbCxkdCxmaWdjYXB0aW9uLGZpZ3VyZSxocixpbWcsbGksbWFpbixvbCxwLHByZSx1bCwnICtcbiAgJ2EsYixhYmJyLGJkaSxiZG8sYnIsY2l0ZSxjb2RlLGRhdGEsZGZuLGVtLGksa2JkLG1hcmsscSxycCxydCxydGMscnVieSwnICtcbiAgJ3Msc2FtcCxzbWFsbCxzcGFuLHN0cm9uZyxzdWIsc3VwLHRpbWUsdSx2YXIsd2JyLGFyZWEsYXVkaW8sbWFwLHRyYWNrLHZpZGVvLCcgK1xuICAnZW1iZWQsb2JqZWN0LHBhcmFtLHNvdXJjZSxjYW52YXMsc2NyaXB0LG5vc2NyaXB0LGRlbCxpbnMsJyArXG4gICdjYXB0aW9uLGNvbCxjb2xncm91cCx0YWJsZSx0aGVhZCx0Ym9keSx0ZCx0aCx0ciwnICtcbiAgJ2J1dHRvbixkYXRhbGlzdCxmaWVsZHNldCxmb3JtLGlucHV0LGxhYmVsLGxlZ2VuZCxtZXRlcixvcHRncm91cCxvcHRpb24sJyArXG4gICdvdXRwdXQscHJvZ3Jlc3Msc2VsZWN0LHRleHRhcmVhLCcgK1xuICAnZGV0YWlscyxkaWFsb2csbWVudSxtZW51aXRlbSxzdW1tYXJ5LCcgK1xuICAnY29udGVudCxlbGVtZW50LHNoYWRvdyx0ZW1wbGF0ZSdcbik7XG5cbi8vIHRoaXMgbWFwIGlzIGludGVudGlvbmFsbHkgc2VsZWN0aXZlLCBvbmx5IGNvdmVyaW5nIFNWRyBlbGVtZW50cyB0aGF0IG1heVxuLy8gY29udGFpbiBjaGlsZCBlbGVtZW50cy5cbnZhciBpc1NWRyA9IG1ha2VNYXAoXG4gICdzdmcsYW5pbWF0ZSxjaXJjbGUsY2xpcHBhdGgsY3Vyc29yLGRlZnMsZGVzYyxlbGxpcHNlLGZpbHRlcixmb250LWZhY2UsJyArXG4gICdmb3JlaWduT2JqZWN0LGcsZ2x5cGgsaW1hZ2UsbGluZSxtYXJrZXIsbWFzayxtaXNzaW5nLWdseXBoLHBhdGgscGF0dGVybiwnICtcbiAgJ3BvbHlnb24scG9seWxpbmUscmVjdCxzd2l0Y2gsc3ltYm9sLHRleHQsdGV4dHBhdGgsdHNwYW4sdXNlLHZpZXcnLFxuICB0cnVlXG4pO1xuXG5cblxudmFyIGlzUmVzZXJ2ZWRUYWcgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHJldHVybiBpc0hUTUxUYWcodGFnKSB8fCBpc1NWRyh0YWcpXG59O1xuXG5mdW5jdGlvbiBnZXRUYWdOYW1lc3BhY2UgKHRhZykge1xuICBpZiAoaXNTVkcodGFnKSkge1xuICAgIHJldHVybiAnc3ZnJ1xuICB9XG4gIC8vIGJhc2ljIHN1cHBvcnQgZm9yIE1hdGhNTFxuICAvLyBub3RlIGl0IGRvZXNuJ3Qgc3VwcG9ydCBvdGhlciBNYXRoTUwgZWxlbWVudHMgYmVpbmcgY29tcG9uZW50IHJvb3RzXG4gIGlmICh0YWcgPT09ICdtYXRoJykge1xuICAgIHJldHVybiAnbWF0aCdcbiAgfVxufVxuXG52YXIgdW5rbm93bkVsZW1lbnRDYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5mdW5jdGlvbiBpc1Vua25vd25FbGVtZW50ICh0YWcpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICghaW5Ccm93c2VyKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICBpZiAoaXNSZXNlcnZlZFRhZyh0YWcpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgdGFnID0gdGFnLnRvTG93ZXJDYXNlKCk7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAodW5rbm93bkVsZW1lbnRDYWNoZVt0YWddICE9IG51bGwpIHtcbiAgICByZXR1cm4gdW5rbm93bkVsZW1lbnRDYWNoZVt0YWddXG4gIH1cbiAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICBpZiAodGFnLmluZGV4T2YoJy0nKSA+IC0xKSB7XG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjgyMTAzNjQvMTA3MDI0NFxuICAgIHJldHVybiAodW5rbm93bkVsZW1lbnRDYWNoZVt0YWddID0gKFxuICAgICAgZWwuY29uc3RydWN0b3IgPT09IHdpbmRvdy5IVE1MVW5rbm93bkVsZW1lbnQgfHxcbiAgICAgIGVsLmNvbnN0cnVjdG9yID09PSB3aW5kb3cuSFRNTEVsZW1lbnRcbiAgICApKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAodW5rbm93bkVsZW1lbnRDYWNoZVt0YWddID0gL0hUTUxVbmtub3duRWxlbWVudC8udGVzdChlbC50b1N0cmluZygpKSlcbiAgfVxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBRdWVyeSBhbiBlbGVtZW50IHNlbGVjdG9yIGlmIGl0J3Mgbm90IGFuIGVsZW1lbnQgYWxyZWFkeS5cbiAqL1xuZnVuY3Rpb24gcXVlcnkgKGVsKSB7XG4gIGlmICh0eXBlb2YgZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIHNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCk7XG4gICAgaWYgKCFzZWxlY3RlZCkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICAnQ2Fubm90IGZpbmQgZWxlbWVudDogJyArIGVsXG4gICAgICApO1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgfVxuICAgIHJldHVybiBzZWxlY3RlZFxuICB9IGVsc2Uge1xuICAgIHJldHVybiBlbFxuICB9XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50JDEgKHRhZ05hbWUsIHZub2RlKSB7XG4gIHZhciBlbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICBpZiAodGFnTmFtZSAhPT0gJ3NlbGVjdCcpIHtcbiAgICByZXR1cm4gZWxtXG4gIH1cbiAgLy8gZmFsc2Ugb3IgbnVsbCB3aWxsIHJlbW92ZSB0aGUgYXR0cmlidXRlIGJ1dCB1bmRlZmluZWQgd2lsbCBub3RcbiAgaWYgKHZub2RlLmRhdGEgJiYgdm5vZGUuZGF0YS5hdHRycyAmJiB2bm9kZS5kYXRhLmF0dHJzLm11bHRpcGxlICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbG0uc2V0QXR0cmlidXRlKCdtdWx0aXBsZScsICdtdWx0aXBsZScpO1xuICB9XG4gIHJldHVybiBlbG1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudE5TIChuYW1lc3BhY2UsIHRhZ05hbWUpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2VNYXBbbmFtZXNwYWNlXSwgdGFnTmFtZSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGV4dE5vZGUgKHRleHQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbW1lbnQgKHRleHQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGV4dClcbn1cblxuZnVuY3Rpb24gaW5zZXJ0QmVmb3JlIChwYXJlbnROb2RlLCBuZXdOb2RlLCByZWZlcmVuY2VOb2RlKSB7XG4gIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDaGlsZCAobm9kZSwgY2hpbGQpIHtcbiAgbm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZENoaWxkIChub2RlLCBjaGlsZCkge1xuICBub2RlLmFwcGVuZENoaWxkKGNoaWxkKTtcbn1cblxuZnVuY3Rpb24gcGFyZW50Tm9kZSAobm9kZSkge1xuICByZXR1cm4gbm9kZS5wYXJlbnROb2RlXG59XG5cbmZ1bmN0aW9uIG5leHRTaWJsaW5nIChub2RlKSB7XG4gIHJldHVybiBub2RlLm5leHRTaWJsaW5nXG59XG5cbmZ1bmN0aW9uIHRhZ05hbWUgKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUudGFnTmFtZVxufVxuXG5mdW5jdGlvbiBzZXRUZXh0Q29udGVudCAobm9kZSwgdGV4dCkge1xuICBub2RlLnRleHRDb250ZW50ID0gdGV4dDtcbn1cblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlIChub2RlLCBrZXksIHZhbCkge1xuICBub2RlLnNldEF0dHJpYnV0ZShrZXksIHZhbCk7XG59XG5cblxudmFyIG5vZGVPcHMgPSBPYmplY3QuZnJlZXplKHtcblx0Y3JlYXRlRWxlbWVudDogY3JlYXRlRWxlbWVudCQxLFxuXHRjcmVhdGVFbGVtZW50TlM6IGNyZWF0ZUVsZW1lbnROUyxcblx0Y3JlYXRlVGV4dE5vZGU6IGNyZWF0ZVRleHROb2RlLFxuXHRjcmVhdGVDb21tZW50OiBjcmVhdGVDb21tZW50LFxuXHRpbnNlcnRCZWZvcmU6IGluc2VydEJlZm9yZSxcblx0cmVtb3ZlQ2hpbGQ6IHJlbW92ZUNoaWxkLFxuXHRhcHBlbmRDaGlsZDogYXBwZW5kQ2hpbGQsXG5cdHBhcmVudE5vZGU6IHBhcmVudE5vZGUsXG5cdG5leHRTaWJsaW5nOiBuZXh0U2libGluZyxcblx0dGFnTmFtZTogdGFnTmFtZSxcblx0c2V0VGV4dENvbnRlbnQ6IHNldFRleHRDb250ZW50LFxuXHRzZXRBdHRyaWJ1dGU6IHNldEF0dHJpYnV0ZVxufSk7XG5cbi8qICAqL1xuXG52YXIgcmVmID0ge1xuICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSAoXywgdm5vZGUpIHtcbiAgICByZWdpc3RlclJlZih2bm9kZSk7XG4gIH0sXG4gIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlIChvbGRWbm9kZSwgdm5vZGUpIHtcbiAgICBpZiAob2xkVm5vZGUuZGF0YS5yZWYgIT09IHZub2RlLmRhdGEucmVmKSB7XG4gICAgICByZWdpc3RlclJlZihvbGRWbm9kZSwgdHJ1ZSk7XG4gICAgICByZWdpc3RlclJlZih2bm9kZSk7XG4gICAgfVxuICB9LFxuICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95ICh2bm9kZSkge1xuICAgIHJlZ2lzdGVyUmVmKHZub2RlLCB0cnVlKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gcmVnaXN0ZXJSZWYgKHZub2RlLCBpc1JlbW92YWwpIHtcbiAgdmFyIGtleSA9IHZub2RlLmRhdGEucmVmO1xuICBpZiAoIWtleSkgeyByZXR1cm4gfVxuXG4gIHZhciB2bSA9IHZub2RlLmNvbnRleHQ7XG4gIHZhciByZWYgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSB8fCB2bm9kZS5lbG07XG4gIHZhciByZWZzID0gdm0uJHJlZnM7XG4gIGlmIChpc1JlbW92YWwpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShyZWZzW2tleV0pKSB7XG4gICAgICByZW1vdmUocmVmc1trZXldLCByZWYpO1xuICAgIH0gZWxzZSBpZiAocmVmc1trZXldID09PSByZWYpIHtcbiAgICAgIHJlZnNba2V5XSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKHZub2RlLmRhdGEucmVmSW5Gb3IpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlZnNba2V5XSkgJiYgcmVmc1trZXldLmluZGV4T2YocmVmKSA8IDApIHtcbiAgICAgICAgcmVmc1trZXldLnB1c2gocmVmKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlZnNba2V5XSA9IFtyZWZdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZWZzW2tleV0gPSByZWY7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogVmlydHVhbCBET00gcGF0Y2hpbmcgYWxnb3JpdGhtIGJhc2VkIG9uIFNuYWJiZG9tIGJ5XG4gKiBTaW1vbiBGcmlpcyBWaW5kdW0gKEBwYWxkZXBpbmQpXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9wYWxkZXBpbmQvc25hYmJkb20vYmxvYi9tYXN0ZXIvTElDRU5TRVxuICpcbiAqIG1vZGlmaWVkIGJ5IEV2YW4gWW91IChAeXl4OTkwODAzKVxuICpcblxuLypcbiAqIE5vdCB0eXBlLWNoZWNraW5nIHRoaXMgYmVjYXVzZSB0aGlzIGZpbGUgaXMgcGVyZi1jcml0aWNhbCBhbmQgdGhlIGNvc3RcbiAqIG9mIG1ha2luZyBmbG93IHVuZGVyc3RhbmQgaXQgaXMgbm90IHdvcnRoIGl0LlxuICovXG5cbnZhciBlbXB0eU5vZGUgPSBuZXcgVk5vZGUoJycsIHt9LCBbXSk7XG5cbnZhciBob29rcyQxID0gWydjcmVhdGUnLCAnYWN0aXZhdGUnLCAndXBkYXRlJywgJ3JlbW92ZScsICdkZXN0cm95J107XG5cbmZ1bmN0aW9uIGlzVW5kZWYgKHMpIHtcbiAgcmV0dXJuIHMgPT0gbnVsbFxufVxuXG5mdW5jdGlvbiBpc0RlZiAocykge1xuICByZXR1cm4gcyAhPSBudWxsXG59XG5cbmZ1bmN0aW9uIHNhbWVWbm9kZSAodm5vZGUxLCB2bm9kZTIpIHtcbiAgcmV0dXJuIChcbiAgICB2bm9kZTEua2V5ID09PSB2bm9kZTIua2V5ICYmXG4gICAgdm5vZGUxLnRhZyA9PT0gdm5vZGUyLnRhZyAmJlxuICAgIHZub2RlMS5pc0NvbW1lbnQgPT09IHZub2RlMi5pc0NvbW1lbnQgJiZcbiAgICAhdm5vZGUxLmRhdGEgPT09ICF2bm9kZTIuZGF0YVxuICApXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUtleVRvT2xkSWR4IChjaGlsZHJlbiwgYmVnaW5JZHgsIGVuZElkeCkge1xuICB2YXIgaSwga2V5O1xuICB2YXIgbWFwID0ge307XG4gIGZvciAoaSA9IGJlZ2luSWR4OyBpIDw9IGVuZElkeDsgKytpKSB7XG4gICAga2V5ID0gY2hpbGRyZW5baV0ua2V5O1xuICAgIGlmIChpc0RlZihrZXkpKSB7IG1hcFtrZXldID0gaTsgfVxuICB9XG4gIHJldHVybiBtYXBcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGF0Y2hGdW5jdGlvbiAoYmFja2VuZCkge1xuICB2YXIgaSwgajtcbiAgdmFyIGNicyA9IHt9O1xuXG4gIHZhciBtb2R1bGVzID0gYmFja2VuZC5tb2R1bGVzO1xuICB2YXIgbm9kZU9wcyA9IGJhY2tlbmQubm9kZU9wcztcblxuICBmb3IgKGkgPSAwOyBpIDwgaG9va3MkMS5sZW5ndGg7ICsraSkge1xuICAgIGNic1tob29rcyQxW2ldXSA9IFtdO1xuICAgIGZvciAoaiA9IDA7IGogPCBtb2R1bGVzLmxlbmd0aDsgKytqKSB7XG4gICAgICBpZiAobW9kdWxlc1tqXVtob29rcyQxW2ldXSAhPT0gdW5kZWZpbmVkKSB7IGNic1tob29rcyQxW2ldXS5wdXNoKG1vZHVsZXNbal1baG9va3MkMVtpXV0pOyB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZW1wdHlOb2RlQXQgKGVsbSkge1xuICAgIHJldHVybiBuZXcgVk5vZGUobm9kZU9wcy50YWdOYW1lKGVsbSkudG9Mb3dlckNhc2UoKSwge30sIFtdLCB1bmRlZmluZWQsIGVsbSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVJtQ2IgKGNoaWxkRWxtLCBsaXN0ZW5lcnMpIHtcbiAgICBmdW5jdGlvbiByZW1vdmUkJDEgKCkge1xuICAgICAgaWYgKC0tcmVtb3ZlJCQxLmxpc3RlbmVycyA9PT0gMCkge1xuICAgICAgICByZW1vdmVOb2RlKGNoaWxkRWxtKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVtb3ZlJCQxLmxpc3RlbmVycyA9IGxpc3RlbmVycztcbiAgICByZXR1cm4gcmVtb3ZlJCQxXG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVOb2RlIChlbCkge1xuICAgIHZhciBwYXJlbnQgPSBub2RlT3BzLnBhcmVudE5vZGUoZWwpO1xuICAgIC8vIGVsZW1lbnQgbWF5IGhhdmUgYWxyZWFkeSBiZWVuIHJlbW92ZWQgZHVlIHRvIHYtaHRtbCAvIHYtdGV4dFxuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIG5vZGVPcHMucmVtb3ZlQ2hpbGQocGFyZW50LCBlbCk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGluUHJlID0gMDtcbiAgZnVuY3Rpb24gY3JlYXRlRWxtICh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBwYXJlbnRFbG0sIHJlZkVsbSwgbmVzdGVkKSB7XG4gICAgdm5vZGUuaXNSb290SW5zZXJ0ID0gIW5lc3RlZDsgLy8gZm9yIHRyYW5zaXRpb24gZW50ZXIgY2hlY2tcbiAgICBpZiAoY3JlYXRlQ29tcG9uZW50KHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIHBhcmVudEVsbSwgcmVmRWxtKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFyIGRhdGEgPSB2bm9kZS5kYXRhO1xuICAgIHZhciBjaGlsZHJlbiA9IHZub2RlLmNoaWxkcmVuO1xuICAgIHZhciB0YWcgPSB2bm9kZS50YWc7XG4gICAgaWYgKGlzRGVmKHRhZykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEucHJlKSB7XG4gICAgICAgICAgaW5QcmUrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWluUHJlICYmXG4gICAgICAgICAgIXZub2RlLm5zICYmXG4gICAgICAgICAgIShjb25maWcuaWdub3JlZEVsZW1lbnRzLmxlbmd0aCAmJiBjb25maWcuaWdub3JlZEVsZW1lbnRzLmluZGV4T2YodGFnKSA+IC0xKSAmJlxuICAgICAgICAgIGNvbmZpZy5pc1Vua25vd25FbGVtZW50KHRhZylcbiAgICAgICAgKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgICdVbmtub3duIGN1c3RvbSBlbGVtZW50OiA8JyArIHRhZyArICc+IC0gZGlkIHlvdSAnICtcbiAgICAgICAgICAgICdyZWdpc3RlciB0aGUgY29tcG9uZW50IGNvcnJlY3RseT8gRm9yIHJlY3Vyc2l2ZSBjb21wb25lbnRzLCAnICtcbiAgICAgICAgICAgICdtYWtlIHN1cmUgdG8gcHJvdmlkZSB0aGUgXCJuYW1lXCIgb3B0aW9uLicsXG4gICAgICAgICAgICB2bm9kZS5jb250ZXh0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdm5vZGUuZWxtID0gdm5vZGUubnNcbiAgICAgICAgPyBub2RlT3BzLmNyZWF0ZUVsZW1lbnROUyh2bm9kZS5ucywgdGFnKVxuICAgICAgICA6IG5vZGVPcHMuY3JlYXRlRWxlbWVudCh0YWcsIHZub2RlKTtcbiAgICAgIHNldFNjb3BlKHZub2RlKTtcblxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICB7XG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKHZub2RlLCBjaGlsZHJlbiwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgaWYgKGlzRGVmKGRhdGEpKSB7XG4gICAgICAgICAgaW52b2tlQ3JlYXRlSG9va3Modm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaW5zZXJ0KHBhcmVudEVsbSwgdm5vZGUuZWxtLCByZWZFbG0pO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBkYXRhICYmIGRhdGEucHJlKSB7XG4gICAgICAgIGluUHJlLS07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh2bm9kZS5pc0NvbW1lbnQpIHtcbiAgICAgIHZub2RlLmVsbSA9IG5vZGVPcHMuY3JlYXRlQ29tbWVudCh2bm9kZS50ZXh0KTtcbiAgICAgIGluc2VydChwYXJlbnRFbG0sIHZub2RlLmVsbSwgcmVmRWxtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdm5vZGUuZWxtID0gbm9kZU9wcy5jcmVhdGVUZXh0Tm9kZSh2bm9kZS50ZXh0KTtcbiAgICAgIGluc2VydChwYXJlbnRFbG0sIHZub2RlLmVsbSwgcmVmRWxtKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVDb21wb25lbnQgKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIHBhcmVudEVsbSwgcmVmRWxtKSB7XG4gICAgdmFyIGkgPSB2bm9kZS5kYXRhO1xuICAgIGlmIChpc0RlZihpKSkge1xuICAgICAgdmFyIGlzUmVhY3RpdmF0ZWQgPSBpc0RlZih2bm9kZS5jb21wb25lbnRJbnN0YW5jZSkgJiYgaS5rZWVwQWxpdmU7XG4gICAgICBpZiAoaXNEZWYoaSA9IGkuaG9vaykgJiYgaXNEZWYoaSA9IGkuaW5pdCkpIHtcbiAgICAgICAgaSh2bm9kZSwgZmFsc2UgLyogaHlkcmF0aW5nICovLCBwYXJlbnRFbG0sIHJlZkVsbSk7XG4gICAgICB9XG4gICAgICAvLyBhZnRlciBjYWxsaW5nIHRoZSBpbml0IGhvb2ssIGlmIHRoZSB2bm9kZSBpcyBhIGNoaWxkIGNvbXBvbmVudFxuICAgICAgLy8gaXQgc2hvdWxkJ3ZlIGNyZWF0ZWQgYSBjaGlsZCBpbnN0YW5jZSBhbmQgbW91bnRlZCBpdC4gdGhlIGNoaWxkXG4gICAgICAvLyBjb21wb25lbnQgYWxzbyBoYXMgc2V0IHRoZSBwbGFjZWhvbGRlciB2bm9kZSdzIGVsbS5cbiAgICAgIC8vIGluIHRoYXQgY2FzZSB3ZSBjYW4ganVzdCByZXR1cm4gdGhlIGVsZW1lbnQgYW5kIGJlIGRvbmUuXG4gICAgICBpZiAoaXNEZWYodm5vZGUuY29tcG9uZW50SW5zdGFuY2UpKSB7XG4gICAgICAgIGluaXRDb21wb25lbnQodm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgIGlmIChpc1JlYWN0aXZhdGVkKSB7XG4gICAgICAgICAgcmVhY3RpdmF0ZUNvbXBvbmVudCh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBwYXJlbnRFbG0sIHJlZkVsbSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0Q29tcG9uZW50ICh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSB7XG4gICAgaWYgKHZub2RlLmRhdGEucGVuZGluZ0luc2VydCkge1xuICAgICAgaW5zZXJ0ZWRWbm9kZVF1ZXVlLnB1c2guYXBwbHkoaW5zZXJ0ZWRWbm9kZVF1ZXVlLCB2bm9kZS5kYXRhLnBlbmRpbmdJbnNlcnQpO1xuICAgIH1cbiAgICB2bm9kZS5lbG0gPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZS4kZWw7XG4gICAgaWYgKGlzUGF0Y2hhYmxlKHZub2RlKSkge1xuICAgICAgaW52b2tlQ3JlYXRlSG9va3Modm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICBzZXRTY29wZSh2bm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVtcHR5IGNvbXBvbmVudCByb290LlxuICAgICAgLy8gc2tpcCBhbGwgZWxlbWVudC1yZWxhdGVkIG1vZHVsZXMgZXhjZXB0IGZvciByZWYgKCMzNDU1KVxuICAgICAgcmVnaXN0ZXJSZWYodm5vZGUpO1xuICAgICAgLy8gbWFrZSBzdXJlIHRvIGludm9rZSB0aGUgaW5zZXJ0IGhvb2tcbiAgICAgIGluc2VydGVkVm5vZGVRdWV1ZS5wdXNoKHZub2RlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWFjdGl2YXRlQ29tcG9uZW50ICh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBwYXJlbnRFbG0sIHJlZkVsbSkge1xuICAgIHZhciBpO1xuICAgIC8vIGhhY2sgZm9yICM0MzM5OiBhIHJlYWN0aXZhdGVkIGNvbXBvbmVudCB3aXRoIGlubmVyIHRyYW5zaXRpb25cbiAgICAvLyBkb2VzIG5vdCB0cmlnZ2VyIGJlY2F1c2UgdGhlIGlubmVyIG5vZGUncyBjcmVhdGVkIGhvb2tzIGFyZSBub3QgY2FsbGVkXG4gICAgLy8gYWdhaW4uIEl0J3Mgbm90IGlkZWFsIHRvIGludm9sdmUgbW9kdWxlLXNwZWNpZmljIGxvZ2ljIGluIGhlcmUgYnV0XG4gICAgLy8gdGhlcmUgZG9lc24ndCBzZWVtIHRvIGJlIGEgYmV0dGVyIHdheSB0byBkbyBpdC5cbiAgICB2YXIgaW5uZXJOb2RlID0gdm5vZGU7XG4gICAgd2hpbGUgKGlubmVyTm9kZS5jb21wb25lbnRJbnN0YW5jZSkge1xuICAgICAgaW5uZXJOb2RlID0gaW5uZXJOb2RlLmNvbXBvbmVudEluc3RhbmNlLl92bm9kZTtcbiAgICAgIGlmIChpc0RlZihpID0gaW5uZXJOb2RlLmRhdGEpICYmIGlzRGVmKGkgPSBpLnRyYW5zaXRpb24pKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjYnMuYWN0aXZhdGUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBjYnMuYWN0aXZhdGVbaV0oZW1wdHlOb2RlLCBpbm5lck5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGluc2VydGVkVm5vZGVRdWV1ZS5wdXNoKGlubmVyTm9kZSk7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVubGlrZSBhIG5ld2x5IGNyZWF0ZWQgY29tcG9uZW50LFxuICAgIC8vIGEgcmVhY3RpdmF0ZWQga2VlcC1hbGl2ZSBjb21wb25lbnQgZG9lc24ndCBpbnNlcnQgaXRzZWxmXG4gICAgaW5zZXJ0KHBhcmVudEVsbSwgdm5vZGUuZWxtLCByZWZFbG0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5zZXJ0IChwYXJlbnQsIGVsbSwgcmVmKSB7XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgaWYgKHJlZikge1xuICAgICAgICBub2RlT3BzLmluc2VydEJlZm9yZShwYXJlbnQsIGVsbSwgcmVmKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGVPcHMuYXBwZW5kQ2hpbGQocGFyZW50LCBlbG0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoaWxkcmVuICh2bm9kZSwgY2hpbGRyZW4sIGluc2VydGVkVm5vZGVRdWV1ZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7ICsraSkge1xuICAgICAgICBjcmVhdGVFbG0oY2hpbGRyZW5baV0sIGluc2VydGVkVm5vZGVRdWV1ZSwgdm5vZGUuZWxtLCBudWxsLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzUHJpbWl0aXZlKHZub2RlLnRleHQpKSB7XG4gICAgICBub2RlT3BzLmFwcGVuZENoaWxkKHZub2RlLmVsbSwgbm9kZU9wcy5jcmVhdGVUZXh0Tm9kZSh2bm9kZS50ZXh0KSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNQYXRjaGFibGUgKHZub2RlKSB7XG4gICAgd2hpbGUgKHZub2RlLmNvbXBvbmVudEluc3RhbmNlKSB7XG4gICAgICB2bm9kZSA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlLl92bm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIGlzRGVmKHZub2RlLnRhZylcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUNyZWF0ZUhvb2tzICh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSB7XG4gICAgZm9yICh2YXIgaSQxID0gMDsgaSQxIDwgY2JzLmNyZWF0ZS5sZW5ndGg7ICsraSQxKSB7XG4gICAgICBjYnMuY3JlYXRlW2kkMV0oZW1wdHlOb2RlLCB2bm9kZSk7XG4gICAgfVxuICAgIGkgPSB2bm9kZS5kYXRhLmhvb2s7IC8vIFJldXNlIHZhcmlhYmxlXG4gICAgaWYgKGlzRGVmKGkpKSB7XG4gICAgICBpZiAoaS5jcmVhdGUpIHsgaS5jcmVhdGUoZW1wdHlOb2RlLCB2bm9kZSk7IH1cbiAgICAgIGlmIChpLmluc2VydCkgeyBpbnNlcnRlZFZub2RlUXVldWUucHVzaCh2bm9kZSk7IH1cbiAgICB9XG4gIH1cblxuICAvLyBzZXQgc2NvcGUgaWQgYXR0cmlidXRlIGZvciBzY29wZWQgQ1NTLlxuICAvLyB0aGlzIGlzIGltcGxlbWVudGVkIGFzIGEgc3BlY2lhbCBjYXNlIHRvIGF2b2lkIHRoZSBvdmVyaGVhZFxuICAvLyBvZiBnb2luZyB0aHJvdWdoIHRoZSBub3JtYWwgYXR0cmlidXRlIHBhdGNoaW5nIHByb2Nlc3MuXG4gIGZ1bmN0aW9uIHNldFNjb3BlICh2bm9kZSkge1xuICAgIHZhciBpO1xuICAgIHZhciBhbmNlc3RvciA9IHZub2RlO1xuICAgIHdoaWxlIChhbmNlc3Rvcikge1xuICAgICAgaWYgKGlzRGVmKGkgPSBhbmNlc3Rvci5jb250ZXh0KSAmJiBpc0RlZihpID0gaS4kb3B0aW9ucy5fc2NvcGVJZCkpIHtcbiAgICAgICAgbm9kZU9wcy5zZXRBdHRyaWJ1dGUodm5vZGUuZWxtLCBpLCAnJyk7XG4gICAgICB9XG4gICAgICBhbmNlc3RvciA9IGFuY2VzdG9yLnBhcmVudDtcbiAgICB9XG4gICAgLy8gZm9yIHNsb3QgY29udGVudCB0aGV5IHNob3VsZCBhbHNvIGdldCB0aGUgc2NvcGVJZCBmcm9tIHRoZSBob3N0IGluc3RhbmNlLlxuICAgIGlmIChpc0RlZihpID0gYWN0aXZlSW5zdGFuY2UpICYmXG4gICAgICAgIGkgIT09IHZub2RlLmNvbnRleHQgJiZcbiAgICAgICAgaXNEZWYoaSA9IGkuJG9wdGlvbnMuX3Njb3BlSWQpKSB7XG4gICAgICBub2RlT3BzLnNldEF0dHJpYnV0ZSh2bm9kZS5lbG0sIGksICcnKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRWbm9kZXMgKHBhcmVudEVsbSwgcmVmRWxtLCB2bm9kZXMsIHN0YXJ0SWR4LCBlbmRJZHgsIGluc2VydGVkVm5vZGVRdWV1ZSkge1xuICAgIGZvciAoOyBzdGFydElkeCA8PSBlbmRJZHg7ICsrc3RhcnRJZHgpIHtcbiAgICAgIGNyZWF0ZUVsbSh2bm9kZXNbc3RhcnRJZHhdLCBpbnNlcnRlZFZub2RlUXVldWUsIHBhcmVudEVsbSwgcmVmRWxtKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VEZXN0cm95SG9vayAodm5vZGUpIHtcbiAgICB2YXIgaSwgajtcbiAgICB2YXIgZGF0YSA9IHZub2RlLmRhdGE7XG4gICAgaWYgKGlzRGVmKGRhdGEpKSB7XG4gICAgICBpZiAoaXNEZWYoaSA9IGRhdGEuaG9vaykgJiYgaXNEZWYoaSA9IGkuZGVzdHJveSkpIHsgaSh2bm9kZSk7IH1cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBjYnMuZGVzdHJveS5sZW5ndGg7ICsraSkgeyBjYnMuZGVzdHJveVtpXSh2bm9kZSk7IH1cbiAgICB9XG4gICAgaWYgKGlzRGVmKGkgPSB2bm9kZS5jaGlsZHJlbikpIHtcbiAgICAgIGZvciAoaiA9IDA7IGogPCB2bm9kZS5jaGlsZHJlbi5sZW5ndGg7ICsraikge1xuICAgICAgICBpbnZva2VEZXN0cm95SG9vayh2bm9kZS5jaGlsZHJlbltqXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlVm5vZGVzIChwYXJlbnRFbG0sIHZub2Rlcywgc3RhcnRJZHgsIGVuZElkeCkge1xuICAgIGZvciAoOyBzdGFydElkeCA8PSBlbmRJZHg7ICsrc3RhcnRJZHgpIHtcbiAgICAgIHZhciBjaCA9IHZub2Rlc1tzdGFydElkeF07XG4gICAgICBpZiAoaXNEZWYoY2gpKSB7XG4gICAgICAgIGlmIChpc0RlZihjaC50YWcpKSB7XG4gICAgICAgICAgcmVtb3ZlQW5kSW52b2tlUmVtb3ZlSG9vayhjaCk7XG4gICAgICAgICAgaW52b2tlRGVzdHJveUhvb2soY2gpO1xuICAgICAgICB9IGVsc2UgeyAvLyBUZXh0IG5vZGVcbiAgICAgICAgICByZW1vdmVOb2RlKGNoLmVsbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVBbmRJbnZva2VSZW1vdmVIb29rICh2bm9kZSwgcm0pIHtcbiAgICBpZiAocm0gfHwgaXNEZWYodm5vZGUuZGF0YSkpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMgPSBjYnMucmVtb3ZlLmxlbmd0aCArIDE7XG4gICAgICBpZiAoIXJtKSB7XG4gICAgICAgIC8vIGRpcmVjdGx5IHJlbW92aW5nXG4gICAgICAgIHJtID0gY3JlYXRlUm1DYih2bm9kZS5lbG0sIGxpc3RlbmVycyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB3ZSBoYXZlIGEgcmVjdXJzaXZlbHkgcGFzc2VkIGRvd24gcm0gY2FsbGJhY2tcbiAgICAgICAgLy8gaW5jcmVhc2UgdGhlIGxpc3RlbmVycyBjb3VudFxuICAgICAgICBybS5saXN0ZW5lcnMgKz0gbGlzdGVuZXJzO1xuICAgICAgfVxuICAgICAgLy8gcmVjdXJzaXZlbHkgaW52b2tlIGhvb2tzIG9uIGNoaWxkIGNvbXBvbmVudCByb290IG5vZGVcbiAgICAgIGlmIChpc0RlZihpID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2UpICYmIGlzRGVmKGkgPSBpLl92bm9kZSkgJiYgaXNEZWYoaS5kYXRhKSkge1xuICAgICAgICByZW1vdmVBbmRJbnZva2VSZW1vdmVIb29rKGksIHJtKTtcbiAgICAgIH1cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBjYnMucmVtb3ZlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGNicy5yZW1vdmVbaV0odm5vZGUsIHJtKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0RlZihpID0gdm5vZGUuZGF0YS5ob29rKSAmJiBpc0RlZihpID0gaS5yZW1vdmUpKSB7XG4gICAgICAgIGkodm5vZGUsIHJtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJtKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZU5vZGUodm5vZGUuZWxtKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVDaGlsZHJlbiAocGFyZW50RWxtLCBvbGRDaCwgbmV3Q2gsIGluc2VydGVkVm5vZGVRdWV1ZSwgcmVtb3ZlT25seSkge1xuICAgIHZhciBvbGRTdGFydElkeCA9IDA7XG4gICAgdmFyIG5ld1N0YXJ0SWR4ID0gMDtcbiAgICB2YXIgb2xkRW5kSWR4ID0gb2xkQ2gubGVuZ3RoIC0gMTtcbiAgICB2YXIgb2xkU3RhcnRWbm9kZSA9IG9sZENoWzBdO1xuICAgIHZhciBvbGRFbmRWbm9kZSA9IG9sZENoW29sZEVuZElkeF07XG4gICAgdmFyIG5ld0VuZElkeCA9IG5ld0NoLmxlbmd0aCAtIDE7XG4gICAgdmFyIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFswXTtcbiAgICB2YXIgbmV3RW5kVm5vZGUgPSBuZXdDaFtuZXdFbmRJZHhdO1xuICAgIHZhciBvbGRLZXlUb0lkeCwgaWR4SW5PbGQsIGVsbVRvTW92ZSwgcmVmRWxtO1xuXG4gICAgLy8gcmVtb3ZlT25seSBpcyBhIHNwZWNpYWwgZmxhZyB1c2VkIG9ubHkgYnkgPHRyYW5zaXRpb24tZ3JvdXA+XG4gICAgLy8gdG8gZW5zdXJlIHJlbW92ZWQgZWxlbWVudHMgc3RheSBpbiBjb3JyZWN0IHJlbGF0aXZlIHBvc2l0aW9uc1xuICAgIC8vIGR1cmluZyBsZWF2aW5nIHRyYW5zaXRpb25zXG4gICAgdmFyIGNhbk1vdmUgPSAhcmVtb3ZlT25seTtcblxuICAgIHdoaWxlIChvbGRTdGFydElkeCA8PSBvbGRFbmRJZHggJiYgbmV3U3RhcnRJZHggPD0gbmV3RW5kSWR4KSB7XG4gICAgICBpZiAoaXNVbmRlZihvbGRTdGFydFZub2RlKSkge1xuICAgICAgICBvbGRTdGFydFZub2RlID0gb2xkQ2hbKytvbGRTdGFydElkeF07IC8vIFZub2RlIGhhcyBiZWVuIG1vdmVkIGxlZnRcbiAgICAgIH0gZWxzZSBpZiAoaXNVbmRlZihvbGRFbmRWbm9kZSkpIHtcbiAgICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF07XG4gICAgICB9IGVsc2UgaWYgKHNhbWVWbm9kZShvbGRTdGFydFZub2RlLCBuZXdTdGFydFZub2RlKSkge1xuICAgICAgICBwYXRjaFZub2RlKG9sZFN0YXJ0Vm5vZGUsIG5ld1N0YXJ0Vm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgIG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFsrK29sZFN0YXJ0SWR4XTtcbiAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgICAgfSBlbHNlIGlmIChzYW1lVm5vZGUob2xkRW5kVm5vZGUsIG5ld0VuZFZub2RlKSkge1xuICAgICAgICBwYXRjaFZub2RlKG9sZEVuZFZub2RlLCBuZXdFbmRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF07XG4gICAgICAgIG5ld0VuZFZub2RlID0gbmV3Q2hbLS1uZXdFbmRJZHhdO1xuICAgICAgfSBlbHNlIGlmIChzYW1lVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3RW5kVm5vZGUpKSB7IC8vIFZub2RlIG1vdmVkIHJpZ2h0XG4gICAgICAgIHBhdGNoVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3RW5kVm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgIGNhbk1vdmUgJiYgbm9kZU9wcy5pbnNlcnRCZWZvcmUocGFyZW50RWxtLCBvbGRTdGFydFZub2RlLmVsbSwgbm9kZU9wcy5uZXh0U2libGluZyhvbGRFbmRWbm9kZS5lbG0pKTtcbiAgICAgICAgb2xkU3RhcnRWbm9kZSA9IG9sZENoWysrb2xkU3RhcnRJZHhdO1xuICAgICAgICBuZXdFbmRWbm9kZSA9IG5ld0NoWy0tbmV3RW5kSWR4XTtcbiAgICAgIH0gZWxzZSBpZiAoc2FtZVZub2RlKG9sZEVuZFZub2RlLCBuZXdTdGFydFZub2RlKSkgeyAvLyBWbm9kZSBtb3ZlZCBsZWZ0XG4gICAgICAgIHBhdGNoVm5vZGUob2xkRW5kVm5vZGUsIG5ld1N0YXJ0Vm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgIGNhbk1vdmUgJiYgbm9kZU9wcy5pbnNlcnRCZWZvcmUocGFyZW50RWxtLCBvbGRFbmRWbm9kZS5lbG0sIG9sZFN0YXJ0Vm5vZGUuZWxtKTtcbiAgICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF07XG4gICAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpc1VuZGVmKG9sZEtleVRvSWR4KSkgeyBvbGRLZXlUb0lkeCA9IGNyZWF0ZUtleVRvT2xkSWR4KG9sZENoLCBvbGRTdGFydElkeCwgb2xkRW5kSWR4KTsgfVxuICAgICAgICBpZHhJbk9sZCA9IGlzRGVmKG5ld1N0YXJ0Vm5vZGUua2V5KSA/IG9sZEtleVRvSWR4W25ld1N0YXJ0Vm5vZGUua2V5XSA6IG51bGw7XG4gICAgICAgIGlmIChpc1VuZGVmKGlkeEluT2xkKSkgeyAvLyBOZXcgZWxlbWVudFxuICAgICAgICAgIGNyZWF0ZUVsbShuZXdTdGFydFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIHBhcmVudEVsbSwgb2xkU3RhcnRWbm9kZS5lbG0pO1xuICAgICAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbG1Ub01vdmUgPSBvbGRDaFtpZHhJbk9sZF07XG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWVsbVRvTW92ZSkge1xuICAgICAgICAgICAgd2FybihcbiAgICAgICAgICAgICAgJ0l0IHNlZW1zIHRoZXJlIGFyZSBkdXBsaWNhdGUga2V5cyB0aGF0IGlzIGNhdXNpbmcgYW4gdXBkYXRlIGVycm9yLiAnICtcbiAgICAgICAgICAgICAgJ01ha2Ugc3VyZSBlYWNoIHYtZm9yIGl0ZW0gaGFzIGEgdW5pcXVlIGtleS4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc2FtZVZub2RlKGVsbVRvTW92ZSwgbmV3U3RhcnRWbm9kZSkpIHtcbiAgICAgICAgICAgIHBhdGNoVm5vZGUoZWxtVG9Nb3ZlLCBuZXdTdGFydFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICAgICAgb2xkQ2hbaWR4SW5PbGRdID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgY2FuTW92ZSAmJiBub2RlT3BzLmluc2VydEJlZm9yZShwYXJlbnRFbG0sIG5ld1N0YXJ0Vm5vZGUuZWxtLCBvbGRTdGFydFZub2RlLmVsbSk7XG4gICAgICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHNhbWUga2V5IGJ1dCBkaWZmZXJlbnQgZWxlbWVudC4gdHJlYXQgYXMgbmV3IGVsZW1lbnRcbiAgICAgICAgICAgIGNyZWF0ZUVsbShuZXdTdGFydFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIHBhcmVudEVsbSwgb2xkU3RhcnRWbm9kZS5lbG0pO1xuICAgICAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAob2xkU3RhcnRJZHggPiBvbGRFbmRJZHgpIHtcbiAgICAgIHJlZkVsbSA9IGlzVW5kZWYobmV3Q2hbbmV3RW5kSWR4ICsgMV0pID8gbnVsbCA6IG5ld0NoW25ld0VuZElkeCArIDFdLmVsbTtcbiAgICAgIGFkZFZub2RlcyhwYXJlbnRFbG0sIHJlZkVsbSwgbmV3Q2gsIG5ld1N0YXJ0SWR4LCBuZXdFbmRJZHgsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgfSBlbHNlIGlmIChuZXdTdGFydElkeCA+IG5ld0VuZElkeCkge1xuICAgICAgcmVtb3ZlVm5vZGVzKHBhcmVudEVsbSwgb2xkQ2gsIG9sZFN0YXJ0SWR4LCBvbGRFbmRJZHgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBhdGNoVm5vZGUgKG9sZFZub2RlLCB2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCByZW1vdmVPbmx5KSB7XG4gICAgaWYgKG9sZFZub2RlID09PSB2bm9kZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIHJldXNlIGVsZW1lbnQgZm9yIHN0YXRpYyB0cmVlcy5cbiAgICAvLyBub3RlIHdlIG9ubHkgZG8gdGhpcyBpZiB0aGUgdm5vZGUgaXMgY2xvbmVkIC1cbiAgICAvLyBpZiB0aGUgbmV3IG5vZGUgaXMgbm90IGNsb25lZCBpdCBtZWFucyB0aGUgcmVuZGVyIGZ1bmN0aW9ucyBoYXZlIGJlZW5cbiAgICAvLyByZXNldCBieSB0aGUgaG90LXJlbG9hZC1hcGkgYW5kIHdlIG5lZWQgdG8gZG8gYSBwcm9wZXIgcmUtcmVuZGVyLlxuICAgIGlmICh2bm9kZS5pc1N0YXRpYyAmJlxuICAgICAgICBvbGRWbm9kZS5pc1N0YXRpYyAmJlxuICAgICAgICB2bm9kZS5rZXkgPT09IG9sZFZub2RlLmtleSAmJlxuICAgICAgICAodm5vZGUuaXNDbG9uZWQgfHwgdm5vZGUuaXNPbmNlKSkge1xuICAgICAgdm5vZGUuZWxtID0gb2xkVm5vZGUuZWxtO1xuICAgICAgdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgPSBvbGRWbm9kZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB2YXIgaTtcbiAgICB2YXIgZGF0YSA9IHZub2RlLmRhdGE7XG4gICAgdmFyIGhhc0RhdGEgPSBpc0RlZihkYXRhKTtcbiAgICBpZiAoaGFzRGF0YSAmJiBpc0RlZihpID0gZGF0YS5ob29rKSAmJiBpc0RlZihpID0gaS5wcmVwYXRjaCkpIHtcbiAgICAgIGkob2xkVm5vZGUsIHZub2RlKTtcbiAgICB9XG4gICAgdmFyIGVsbSA9IHZub2RlLmVsbSA9IG9sZFZub2RlLmVsbTtcbiAgICB2YXIgb2xkQ2ggPSBvbGRWbm9kZS5jaGlsZHJlbjtcbiAgICB2YXIgY2ggPSB2bm9kZS5jaGlsZHJlbjtcbiAgICBpZiAoaGFzRGF0YSAmJiBpc1BhdGNoYWJsZSh2bm9kZSkpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBjYnMudXBkYXRlLmxlbmd0aDsgKytpKSB7IGNicy51cGRhdGVbaV0ob2xkVm5vZGUsIHZub2RlKTsgfVxuICAgICAgaWYgKGlzRGVmKGkgPSBkYXRhLmhvb2spICYmIGlzRGVmKGkgPSBpLnVwZGF0ZSkpIHsgaShvbGRWbm9kZSwgdm5vZGUpOyB9XG4gICAgfVxuICAgIGlmIChpc1VuZGVmKHZub2RlLnRleHQpKSB7XG4gICAgICBpZiAoaXNEZWYob2xkQ2gpICYmIGlzRGVmKGNoKSkge1xuICAgICAgICBpZiAob2xkQ2ggIT09IGNoKSB7IHVwZGF0ZUNoaWxkcmVuKGVsbSwgb2xkQ2gsIGNoLCBpbnNlcnRlZFZub2RlUXVldWUsIHJlbW92ZU9ubHkpOyB9XG4gICAgICB9IGVsc2UgaWYgKGlzRGVmKGNoKSkge1xuICAgICAgICBpZiAoaXNEZWYob2xkVm5vZGUudGV4dCkpIHsgbm9kZU9wcy5zZXRUZXh0Q29udGVudChlbG0sICcnKTsgfVxuICAgICAgICBhZGRWbm9kZXMoZWxtLCBudWxsLCBjaCwgMCwgY2gubGVuZ3RoIC0gMSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNEZWYob2xkQ2gpKSB7XG4gICAgICAgIHJlbW92ZVZub2RlcyhlbG0sIG9sZENoLCAwLCBvbGRDaC5sZW5ndGggLSAxKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNEZWYob2xkVm5vZGUudGV4dCkpIHtcbiAgICAgICAgbm9kZU9wcy5zZXRUZXh0Q29udGVudChlbG0sICcnKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9sZFZub2RlLnRleHQgIT09IHZub2RlLnRleHQpIHtcbiAgICAgIG5vZGVPcHMuc2V0VGV4dENvbnRlbnQoZWxtLCB2bm9kZS50ZXh0KTtcbiAgICB9XG4gICAgaWYgKGhhc0RhdGEpIHtcbiAgICAgIGlmIChpc0RlZihpID0gZGF0YS5ob29rKSAmJiBpc0RlZihpID0gaS5wb3N0cGF0Y2gpKSB7IGkob2xkVm5vZGUsIHZub2RlKTsgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUluc2VydEhvb2sgKHZub2RlLCBxdWV1ZSwgaW5pdGlhbCkge1xuICAgIC8vIGRlbGF5IGluc2VydCBob29rcyBmb3IgY29tcG9uZW50IHJvb3Qgbm9kZXMsIGludm9rZSB0aGVtIGFmdGVyIHRoZVxuICAgIC8vIGVsZW1lbnQgaXMgcmVhbGx5IGluc2VydGVkXG4gICAgaWYgKGluaXRpYWwgJiYgdm5vZGUucGFyZW50KSB7XG4gICAgICB2bm9kZS5wYXJlbnQuZGF0YS5wZW5kaW5nSW5zZXJ0ID0gcXVldWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgcXVldWVbaV0uZGF0YS5ob29rLmluc2VydChxdWV1ZVtpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGJhaWxlZCA9IGZhbHNlO1xuICAvLyBsaXN0IG9mIG1vZHVsZXMgdGhhdCBjYW4gc2tpcCBjcmVhdGUgaG9vayBkdXJpbmcgaHlkcmF0aW9uIGJlY2F1c2UgdGhleVxuICAvLyBhcmUgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgY2xpZW50IG9yIGhhcyBubyBuZWVkIGZvciBpbml0aWFsaXphdGlvblxuICB2YXIgaXNSZW5kZXJlZE1vZHVsZSA9IG1ha2VNYXAoJ2F0dHJzLHN0eWxlLGNsYXNzLHN0YXRpY0NsYXNzLHN0YXRpY1N0eWxlLGtleScpO1xuXG4gIC8vIE5vdGU6IHRoaXMgaXMgYSBicm93c2VyLW9ubHkgZnVuY3Rpb24gc28gd2UgY2FuIGFzc3VtZSBlbG1zIGFyZSBET00gbm9kZXMuXG4gIGZ1bmN0aW9uIGh5ZHJhdGUgKGVsbSwgdm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoIWFzc2VydE5vZGVNYXRjaChlbG0sIHZub2RlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gICAgdm5vZGUuZWxtID0gZWxtO1xuICAgIHZhciB0YWcgPSB2bm9kZS50YWc7XG4gICAgdmFyIGRhdGEgPSB2bm9kZS5kYXRhO1xuICAgIHZhciBjaGlsZHJlbiA9IHZub2RlLmNoaWxkcmVuO1xuICAgIGlmIChpc0RlZihkYXRhKSkge1xuICAgICAgaWYgKGlzRGVmKGkgPSBkYXRhLmhvb2spICYmIGlzRGVmKGkgPSBpLmluaXQpKSB7IGkodm5vZGUsIHRydWUgLyogaHlkcmF0aW5nICovKTsgfVxuICAgICAgaWYgKGlzRGVmKGkgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSkpIHtcbiAgICAgICAgLy8gY2hpbGQgY29tcG9uZW50LiBpdCBzaG91bGQgaGF2ZSBoeWRyYXRlZCBpdHMgb3duIHRyZWUuXG4gICAgICAgIGluaXRDb21wb25lbnQodm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpc0RlZih0YWcpKSB7XG4gICAgICBpZiAoaXNEZWYoY2hpbGRyZW4pKSB7XG4gICAgICAgIC8vIGVtcHR5IGVsZW1lbnQsIGFsbG93IGNsaWVudCB0byBwaWNrIHVwIGFuZCBwb3B1bGF0ZSBjaGlsZHJlblxuICAgICAgICBpZiAoIWVsbS5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICBjcmVhdGVDaGlsZHJlbih2bm9kZSwgY2hpbGRyZW4sIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGNoaWxkcmVuTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgIHZhciBjaGlsZE5vZGUgPSBlbG0uZmlyc3RDaGlsZDtcbiAgICAgICAgICBmb3IgKHZhciBpJDEgPSAwOyBpJDEgPCBjaGlsZHJlbi5sZW5ndGg7IGkkMSsrKSB7XG4gICAgICAgICAgICBpZiAoIWNoaWxkTm9kZSB8fCAhaHlkcmF0ZShjaGlsZE5vZGUsIGNoaWxkcmVuW2kkMV0sIGluc2VydGVkVm5vZGVRdWV1ZSkpIHtcbiAgICAgICAgICAgICAgY2hpbGRyZW5NYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hpbGROb2RlID0gY2hpbGROb2RlLm5leHRTaWJsaW5nO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBpZiBjaGlsZE5vZGUgaXMgbm90IG51bGwsIGl0IG1lYW5zIHRoZSBhY3R1YWwgY2hpbGROb2RlcyBsaXN0IGlzXG4gICAgICAgICAgLy8gbG9uZ2VyIHRoYW4gdGhlIHZpcnR1YWwgY2hpbGRyZW4gbGlzdC5cbiAgICAgICAgICBpZiAoIWNoaWxkcmVuTWF0Y2ggfHwgY2hpbGROb2RlKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgICAgICFiYWlsZWQpIHtcbiAgICAgICAgICAgICAgYmFpbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdQYXJlbnQ6ICcsIGVsbSk7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybignTWlzbWF0Y2hpbmcgY2hpbGROb2RlcyB2cy4gVk5vZGVzOiAnLCBlbG0uY2hpbGROb2RlcywgY2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXNEZWYoZGF0YSkpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgICAgICBpZiAoIWlzUmVuZGVyZWRNb2R1bGUoa2V5KSkge1xuICAgICAgICAgICAgaW52b2tlQ3JlYXRlSG9va3Modm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZWxtLmRhdGEgIT09IHZub2RlLnRleHQpIHtcbiAgICAgIGVsbS5kYXRhID0gdm5vZGUudGV4dDtcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGFzc2VydE5vZGVNYXRjaCAobm9kZSwgdm5vZGUpIHtcbiAgICBpZiAodm5vZGUudGFnKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB2bm9kZS50YWcuaW5kZXhPZigndnVlLWNvbXBvbmVudCcpID09PSAwIHx8XG4gICAgICAgIHZub2RlLnRhZy50b0xvd2VyQ2FzZSgpID09PSAobm9kZS50YWdOYW1lICYmIG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpKVxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbm9kZS5ub2RlVHlwZSA9PT0gKHZub2RlLmlzQ29tbWVudCA/IDggOiAzKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBwYXRjaCAob2xkVm5vZGUsIHZub2RlLCBoeWRyYXRpbmcsIHJlbW92ZU9ubHksIHBhcmVudEVsbSwgcmVmRWxtKSB7XG4gICAgaWYgKCF2bm9kZSkge1xuICAgICAgaWYgKG9sZFZub2RlKSB7IGludm9rZURlc3Ryb3lIb29rKG9sZFZub2RlKTsgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFyIGlzSW5pdGlhbFBhdGNoID0gZmFsc2U7XG4gICAgdmFyIGluc2VydGVkVm5vZGVRdWV1ZSA9IFtdO1xuXG4gICAgaWYgKCFvbGRWbm9kZSkge1xuICAgICAgLy8gZW1wdHkgbW91bnQgKGxpa2VseSBhcyBjb21wb25lbnQpLCBjcmVhdGUgbmV3IHJvb3QgZWxlbWVudFxuICAgICAgaXNJbml0aWFsUGF0Y2ggPSB0cnVlO1xuICAgICAgY3JlYXRlRWxtKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIHBhcmVudEVsbSwgcmVmRWxtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGlzUmVhbEVsZW1lbnQgPSBpc0RlZihvbGRWbm9kZS5ub2RlVHlwZSk7XG4gICAgICBpZiAoIWlzUmVhbEVsZW1lbnQgJiYgc2FtZVZub2RlKG9sZFZub2RlLCB2bm9kZSkpIHtcbiAgICAgICAgLy8gcGF0Y2ggZXhpc3Rpbmcgcm9vdCBub2RlXG4gICAgICAgIHBhdGNoVm5vZGUob2xkVm5vZGUsIHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIHJlbW92ZU9ubHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGlzUmVhbEVsZW1lbnQpIHtcbiAgICAgICAgICAvLyBtb3VudGluZyB0byBhIHJlYWwgZWxlbWVudFxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoaXMgaXMgc2VydmVyLXJlbmRlcmVkIGNvbnRlbnQgYW5kIGlmIHdlIGNhbiBwZXJmb3JtXG4gICAgICAgICAgLy8gYSBzdWNjZXNzZnVsIGh5ZHJhdGlvbi5cbiAgICAgICAgICBpZiAob2xkVm5vZGUubm9kZVR5cGUgPT09IDEgJiYgb2xkVm5vZGUuaGFzQXR0cmlidXRlKCdzZXJ2ZXItcmVuZGVyZWQnKSkge1xuICAgICAgICAgICAgb2xkVm5vZGUucmVtb3ZlQXR0cmlidXRlKCdzZXJ2ZXItcmVuZGVyZWQnKTtcbiAgICAgICAgICAgIGh5ZHJhdGluZyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoeWRyYXRpbmcpIHtcbiAgICAgICAgICAgIGlmIChoeWRyYXRlKG9sZFZub2RlLCB2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSkge1xuICAgICAgICAgICAgICBpbnZva2VJbnNlcnRIb29rKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIHRydWUpO1xuICAgICAgICAgICAgICByZXR1cm4gb2xkVm5vZGVcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgICAgICdUaGUgY2xpZW50LXNpZGUgcmVuZGVyZWQgdmlydHVhbCBET00gdHJlZSBpcyBub3QgbWF0Y2hpbmcgJyArXG4gICAgICAgICAgICAgICAgJ3NlcnZlci1yZW5kZXJlZCBjb250ZW50LiBUaGlzIGlzIGxpa2VseSBjYXVzZWQgYnkgaW5jb3JyZWN0ICcgK1xuICAgICAgICAgICAgICAgICdIVE1MIG1hcmt1cCwgZm9yIGV4YW1wbGUgbmVzdGluZyBibG9jay1sZXZlbCBlbGVtZW50cyBpbnNpZGUgJyArXG4gICAgICAgICAgICAgICAgJzxwPiwgb3IgbWlzc2luZyA8dGJvZHk+LiBCYWlsaW5nIGh5ZHJhdGlvbiBhbmQgcGVyZm9ybWluZyAnICtcbiAgICAgICAgICAgICAgICAnZnVsbCBjbGllbnQtc2lkZSByZW5kZXIuJ1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBlaXRoZXIgbm90IHNlcnZlci1yZW5kZXJlZCwgb3IgaHlkcmF0aW9uIGZhaWxlZC5cbiAgICAgICAgICAvLyBjcmVhdGUgYW4gZW1wdHkgbm9kZSBhbmQgcmVwbGFjZSBpdFxuICAgICAgICAgIG9sZFZub2RlID0gZW1wdHlOb2RlQXQob2xkVm5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlcGxhY2luZyBleGlzdGluZyBlbGVtZW50XG4gICAgICAgIHZhciBvbGRFbG0gPSBvbGRWbm9kZS5lbG07XG4gICAgICAgIHZhciBwYXJlbnRFbG0kMSA9IG5vZGVPcHMucGFyZW50Tm9kZShvbGRFbG0pO1xuICAgICAgICBjcmVhdGVFbG0oXG4gICAgICAgICAgdm5vZGUsXG4gICAgICAgICAgaW5zZXJ0ZWRWbm9kZVF1ZXVlLFxuICAgICAgICAgIC8vIGV4dHJlbWVseSByYXJlIGVkZ2UgY2FzZTogZG8gbm90IGluc2VydCBpZiBvbGQgZWxlbWVudCBpcyBpbiBhXG4gICAgICAgICAgLy8gbGVhdmluZyB0cmFuc2l0aW9uLiBPbmx5IGhhcHBlbnMgd2hlbiBjb21iaW5pbmcgdHJhbnNpdGlvbiArXG4gICAgICAgICAgLy8ga2VlcC1hbGl2ZSArIEhPQ3MuICgjNDU5MClcbiAgICAgICAgICBvbGRFbG0uX2xlYXZlQ2IgPyBudWxsIDogcGFyZW50RWxtJDEsXG4gICAgICAgICAgbm9kZU9wcy5uZXh0U2libGluZyhvbGRFbG0pXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHZub2RlLnBhcmVudCkge1xuICAgICAgICAgIC8vIGNvbXBvbmVudCByb290IGVsZW1lbnQgcmVwbGFjZWQuXG4gICAgICAgICAgLy8gdXBkYXRlIHBhcmVudCBwbGFjZWhvbGRlciBub2RlIGVsZW1lbnQsIHJlY3Vyc2l2ZWx5XG4gICAgICAgICAgdmFyIGFuY2VzdG9yID0gdm5vZGUucGFyZW50O1xuICAgICAgICAgIHdoaWxlIChhbmNlc3Rvcikge1xuICAgICAgICAgICAgYW5jZXN0b3IuZWxtID0gdm5vZGUuZWxtO1xuICAgICAgICAgICAgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpc1BhdGNoYWJsZSh2bm9kZSkpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2JzLmNyZWF0ZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICBjYnMuY3JlYXRlW2ldKGVtcHR5Tm9kZSwgdm5vZGUucGFyZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyZW50RWxtJDEgIT09IG51bGwpIHtcbiAgICAgICAgICByZW1vdmVWbm9kZXMocGFyZW50RWxtJDEsIFtvbGRWbm9kZV0sIDAsIDApO1xuICAgICAgICB9IGVsc2UgaWYgKGlzRGVmKG9sZFZub2RlLnRhZykpIHtcbiAgICAgICAgICBpbnZva2VEZXN0cm95SG9vayhvbGRWbm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbnZva2VJbnNlcnRIb29rKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIGlzSW5pdGlhbFBhdGNoKTtcbiAgICByZXR1cm4gdm5vZGUuZWxtXG4gIH1cbn1cblxuLyogICovXG5cbnZhciBkaXJlY3RpdmVzID0ge1xuICBjcmVhdGU6IHVwZGF0ZURpcmVjdGl2ZXMsXG4gIHVwZGF0ZTogdXBkYXRlRGlyZWN0aXZlcyxcbiAgZGVzdHJveTogZnVuY3Rpb24gdW5iaW5kRGlyZWN0aXZlcyAodm5vZGUpIHtcbiAgICB1cGRhdGVEaXJlY3RpdmVzKHZub2RlLCBlbXB0eU5vZGUpO1xuICB9XG59O1xuXG5mdW5jdGlvbiB1cGRhdGVEaXJlY3RpdmVzIChvbGRWbm9kZSwgdm5vZGUpIHtcbiAgaWYgKG9sZFZub2RlLmRhdGEuZGlyZWN0aXZlcyB8fCB2bm9kZS5kYXRhLmRpcmVjdGl2ZXMpIHtcbiAgICBfdXBkYXRlKG9sZFZub2RlLCB2bm9kZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX3VwZGF0ZSAob2xkVm5vZGUsIHZub2RlKSB7XG4gIHZhciBpc0NyZWF0ZSA9IG9sZFZub2RlID09PSBlbXB0eU5vZGU7XG4gIHZhciBpc0Rlc3Ryb3kgPSB2bm9kZSA9PT0gZW1wdHlOb2RlO1xuICB2YXIgb2xkRGlycyA9IG5vcm1hbGl6ZURpcmVjdGl2ZXMkMShvbGRWbm9kZS5kYXRhLmRpcmVjdGl2ZXMsIG9sZFZub2RlLmNvbnRleHQpO1xuICB2YXIgbmV3RGlycyA9IG5vcm1hbGl6ZURpcmVjdGl2ZXMkMSh2bm9kZS5kYXRhLmRpcmVjdGl2ZXMsIHZub2RlLmNvbnRleHQpO1xuXG4gIHZhciBkaXJzV2l0aEluc2VydCA9IFtdO1xuICB2YXIgZGlyc1dpdGhQb3N0cGF0Y2ggPSBbXTtcblxuICB2YXIga2V5LCBvbGREaXIsIGRpcjtcbiAgZm9yIChrZXkgaW4gbmV3RGlycykge1xuICAgIG9sZERpciA9IG9sZERpcnNba2V5XTtcbiAgICBkaXIgPSBuZXdEaXJzW2tleV07XG4gICAgaWYgKCFvbGREaXIpIHtcbiAgICAgIC8vIG5ldyBkaXJlY3RpdmUsIGJpbmRcbiAgICAgIGNhbGxIb29rJDEoZGlyLCAnYmluZCcsIHZub2RlLCBvbGRWbm9kZSk7XG4gICAgICBpZiAoZGlyLmRlZiAmJiBkaXIuZGVmLmluc2VydGVkKSB7XG4gICAgICAgIGRpcnNXaXRoSW5zZXJ0LnB1c2goZGlyKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZXhpc3RpbmcgZGlyZWN0aXZlLCB1cGRhdGVcbiAgICAgIGRpci5vbGRWYWx1ZSA9IG9sZERpci52YWx1ZTtcbiAgICAgIGNhbGxIb29rJDEoZGlyLCAndXBkYXRlJywgdm5vZGUsIG9sZFZub2RlKTtcbiAgICAgIGlmIChkaXIuZGVmICYmIGRpci5kZWYuY29tcG9uZW50VXBkYXRlZCkge1xuICAgICAgICBkaXJzV2l0aFBvc3RwYXRjaC5wdXNoKGRpcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGRpcnNXaXRoSW5zZXJ0Lmxlbmd0aCkge1xuICAgIHZhciBjYWxsSW5zZXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaXJzV2l0aEluc2VydC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjYWxsSG9vayQxKGRpcnNXaXRoSW5zZXJ0W2ldLCAnaW5zZXJ0ZWQnLCB2bm9kZSwgb2xkVm5vZGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgaWYgKGlzQ3JlYXRlKSB7XG4gICAgICBtZXJnZVZOb2RlSG9vayh2bm9kZS5kYXRhLmhvb2sgfHwgKHZub2RlLmRhdGEuaG9vayA9IHt9KSwgJ2luc2VydCcsIGNhbGxJbnNlcnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsSW5zZXJ0KCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRpcnNXaXRoUG9zdHBhdGNoLmxlbmd0aCkge1xuICAgIG1lcmdlVk5vZGVIb29rKHZub2RlLmRhdGEuaG9vayB8fCAodm5vZGUuZGF0YS5ob29rID0ge30pLCAncG9zdHBhdGNoJywgZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaXJzV2l0aFBvc3RwYXRjaC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjYWxsSG9vayQxKGRpcnNXaXRoUG9zdHBhdGNoW2ldLCAnY29tcG9uZW50VXBkYXRlZCcsIHZub2RlLCBvbGRWbm9kZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAoIWlzQ3JlYXRlKSB7XG4gICAgZm9yIChrZXkgaW4gb2xkRGlycykge1xuICAgICAgaWYgKCFuZXdEaXJzW2tleV0pIHtcbiAgICAgICAgLy8gbm8gbG9uZ2VyIHByZXNlbnQsIHVuYmluZFxuICAgICAgICBjYWxsSG9vayQxKG9sZERpcnNba2V5XSwgJ3VuYmluZCcsIG9sZFZub2RlLCBvbGRWbm9kZSwgaXNEZXN0cm95KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIGVtcHR5TW9kaWZpZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuZnVuY3Rpb24gbm9ybWFsaXplRGlyZWN0aXZlcyQxIChcbiAgZGlycyxcbiAgdm1cbikge1xuICB2YXIgcmVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgaWYgKCFkaXJzKSB7XG4gICAgcmV0dXJuIHJlc1xuICB9XG4gIHZhciBpLCBkaXI7XG4gIGZvciAoaSA9IDA7IGkgPCBkaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgZGlyID0gZGlyc1tpXTtcbiAgICBpZiAoIWRpci5tb2RpZmllcnMpIHtcbiAgICAgIGRpci5tb2RpZmllcnMgPSBlbXB0eU1vZGlmaWVycztcbiAgICB9XG4gICAgcmVzW2dldFJhd0Rpck5hbWUoZGlyKV0gPSBkaXI7XG4gICAgZGlyLmRlZiA9IHJlc29sdmVBc3NldCh2bS4kb3B0aW9ucywgJ2RpcmVjdGl2ZXMnLCBkaXIubmFtZSwgdHJ1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBnZXRSYXdEaXJOYW1lIChkaXIpIHtcbiAgcmV0dXJuIGRpci5yYXdOYW1lIHx8ICgoZGlyLm5hbWUpICsgXCIuXCIgKyAoT2JqZWN0LmtleXMoZGlyLm1vZGlmaWVycyB8fCB7fSkuam9pbignLicpKSlcbn1cblxuZnVuY3Rpb24gY2FsbEhvb2skMSAoZGlyLCBob29rLCB2bm9kZSwgb2xkVm5vZGUsIGlzRGVzdHJveSkge1xuICB2YXIgZm4gPSBkaXIuZGVmICYmIGRpci5kZWZbaG9va107XG4gIGlmIChmbikge1xuICAgIGZuKHZub2RlLmVsbSwgZGlyLCB2bm9kZSwgb2xkVm5vZGUsIGlzRGVzdHJveSk7XG4gIH1cbn1cblxudmFyIGJhc2VNb2R1bGVzID0gW1xuICByZWYsXG4gIGRpcmVjdGl2ZXNcbl07XG5cbi8qICAqL1xuXG5mdW5jdGlvbiB1cGRhdGVBdHRycyAob2xkVm5vZGUsIHZub2RlKSB7XG4gIGlmICghb2xkVm5vZGUuZGF0YS5hdHRycyAmJiAhdm5vZGUuZGF0YS5hdHRycykge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBrZXksIGN1ciwgb2xkO1xuICB2YXIgZWxtID0gdm5vZGUuZWxtO1xuICB2YXIgb2xkQXR0cnMgPSBvbGRWbm9kZS5kYXRhLmF0dHJzIHx8IHt9O1xuICB2YXIgYXR0cnMgPSB2bm9kZS5kYXRhLmF0dHJzIHx8IHt9O1xuICAvLyBjbG9uZSBvYnNlcnZlZCBvYmplY3RzLCBhcyB0aGUgdXNlciBwcm9iYWJseSB3YW50cyB0byBtdXRhdGUgaXRcbiAgaWYgKGF0dHJzLl9fb2JfXykge1xuICAgIGF0dHJzID0gdm5vZGUuZGF0YS5hdHRycyA9IGV4dGVuZCh7fSwgYXR0cnMpO1xuICB9XG5cbiAgZm9yIChrZXkgaW4gYXR0cnMpIHtcbiAgICBjdXIgPSBhdHRyc1trZXldO1xuICAgIG9sZCA9IG9sZEF0dHJzW2tleV07XG4gICAgaWYgKG9sZCAhPT0gY3VyKSB7XG4gICAgICBzZXRBdHRyKGVsbSwga2V5LCBjdXIpO1xuICAgIH1cbiAgfVxuICAvLyAjNDM5MTogaW4gSUU5LCBzZXR0aW5nIHR5cGUgY2FuIHJlc2V0IHZhbHVlIGZvciBpbnB1dFt0eXBlPXJhZGlvXVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGlzSUU5ICYmIGF0dHJzLnZhbHVlICE9PSBvbGRBdHRycy52YWx1ZSkge1xuICAgIHNldEF0dHIoZWxtLCAndmFsdWUnLCBhdHRycy52YWx1ZSk7XG4gIH1cbiAgZm9yIChrZXkgaW4gb2xkQXR0cnMpIHtcbiAgICBpZiAoYXR0cnNba2V5XSA9PSBudWxsKSB7XG4gICAgICBpZiAoaXNYbGluayhrZXkpKSB7XG4gICAgICAgIGVsbS5yZW1vdmVBdHRyaWJ1dGVOUyh4bGlua05TLCBnZXRYbGlua1Byb3Aoa2V5KSk7XG4gICAgICB9IGVsc2UgaWYgKCFpc0VudW1lcmF0ZWRBdHRyKGtleSkpIHtcbiAgICAgICAgZWxtLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRBdHRyIChlbCwga2V5LCB2YWx1ZSkge1xuICBpZiAoaXNCb29sZWFuQXR0cihrZXkpKSB7XG4gICAgLy8gc2V0IGF0dHJpYnV0ZSBmb3IgYmxhbmsgdmFsdWVcbiAgICAvLyBlLmcuIDxvcHRpb24gZGlzYWJsZWQ+U2VsZWN0IG9uZTwvb3B0aW9uPlxuICAgIGlmIChpc0ZhbHN5QXR0clZhbHVlKHZhbHVlKSkge1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShrZXksIGtleSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzRW51bWVyYXRlZEF0dHIoa2V5KSkge1xuICAgIGVsLnNldEF0dHJpYnV0ZShrZXksIGlzRmFsc3lBdHRyVmFsdWUodmFsdWUpIHx8IHZhbHVlID09PSAnZmFsc2UnID8gJ2ZhbHNlJyA6ICd0cnVlJyk7XG4gIH0gZWxzZSBpZiAoaXNYbGluayhrZXkpKSB7XG4gICAgaWYgKGlzRmFsc3lBdHRyVmFsdWUodmFsdWUpKSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGVOUyh4bGlua05TLCBnZXRYbGlua1Byb3Aoa2V5KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZU5TKHhsaW5rTlMsIGtleSwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoaXNGYWxzeUF0dHJWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9XG59XG5cbnZhciBhdHRycyA9IHtcbiAgY3JlYXRlOiB1cGRhdGVBdHRycyxcbiAgdXBkYXRlOiB1cGRhdGVBdHRyc1xufTtcblxuLyogICovXG5cbmZ1bmN0aW9uIHVwZGF0ZUNsYXNzIChvbGRWbm9kZSwgdm5vZGUpIHtcbiAgdmFyIGVsID0gdm5vZGUuZWxtO1xuICB2YXIgZGF0YSA9IHZub2RlLmRhdGE7XG4gIHZhciBvbGREYXRhID0gb2xkVm5vZGUuZGF0YTtcbiAgaWYgKCFkYXRhLnN0YXRpY0NsYXNzICYmICFkYXRhLmNsYXNzICYmXG4gICAgICAoIW9sZERhdGEgfHwgKCFvbGREYXRhLnN0YXRpY0NsYXNzICYmICFvbGREYXRhLmNsYXNzKSkpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBjbHMgPSBnZW5DbGFzc0ZvclZub2RlKHZub2RlKTtcblxuICAvLyBoYW5kbGUgdHJhbnNpdGlvbiBjbGFzc2VzXG4gIHZhciB0cmFuc2l0aW9uQ2xhc3MgPSBlbC5fdHJhbnNpdGlvbkNsYXNzZXM7XG4gIGlmICh0cmFuc2l0aW9uQ2xhc3MpIHtcbiAgICBjbHMgPSBjb25jYXQoY2xzLCBzdHJpbmdpZnlDbGFzcyh0cmFuc2l0aW9uQ2xhc3MpKTtcbiAgfVxuXG4gIC8vIHNldCB0aGUgY2xhc3NcbiAgaWYgKGNscyAhPT0gZWwuX3ByZXZDbGFzcykge1xuICAgIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbHMpO1xuICAgIGVsLl9wcmV2Q2xhc3MgPSBjbHM7XG4gIH1cbn1cblxudmFyIGtsYXNzID0ge1xuICBjcmVhdGU6IHVwZGF0ZUNsYXNzLFxuICB1cGRhdGU6IHVwZGF0ZUNsYXNzXG59O1xuXG4vKiAgKi9cblxudmFyIHZhbGlkRGl2aXNpb25DaGFyUkUgPSAvW1xcdykuK1xcLV8kXFxdXS87XG5cblxuXG5mdW5jdGlvbiB3cmFwRmlsdGVyIChleHAsIGZpbHRlcikge1xuICB2YXIgaSA9IGZpbHRlci5pbmRleE9mKCcoJyk7XG4gIGlmIChpIDwgMCkge1xuICAgIC8vIF9mOiByZXNvbHZlRmlsdGVyXG4gICAgcmV0dXJuIChcIl9mKFxcXCJcIiArIGZpbHRlciArIFwiXFxcIikoXCIgKyBleHAgKyBcIilcIilcbiAgfSBlbHNlIHtcbiAgICB2YXIgbmFtZSA9IGZpbHRlci5zbGljZSgwLCBpKTtcbiAgICB2YXIgYXJncyA9IGZpbHRlci5zbGljZShpICsgMSk7XG4gICAgcmV0dXJuIChcIl9mKFxcXCJcIiArIG5hbWUgKyBcIlxcXCIpKFwiICsgZXhwICsgXCIsXCIgKyBhcmdzKVxuICB9XG59XG5cbi8qICAqL1xuXG4vKiAgKi9cblxuLyoqXG4gKiBDcm9zcy1wbGF0Zm9ybSBjb2RlIGdlbmVyYXRpb24gZm9yIGNvbXBvbmVudCB2LW1vZGVsXG4gKi9cblxuXG4vKipcbiAqIENyb3NzLXBsYXRmb3JtIGNvZGVnZW4gaGVscGVyIGZvciBnZW5lcmF0aW5nIHYtbW9kZWwgdmFsdWUgYXNzaWdubWVudCBjb2RlLlxuICovXG5cblxuLyoqXG4gKiBwYXJzZSBkaXJlY3RpdmUgbW9kZWwgdG8gZG8gdGhlIGFycmF5IHVwZGF0ZSB0cmFuc2Zvcm0uIGFbaWR4XSA9IHZhbCA9PiAkJGEuc3BsaWNlKCQkaWR4LCAxLCB2YWwpXG4gKlxuICogZm9yIGxvb3AgcG9zc2libGUgY2FzZXM6XG4gKlxuICogLSB0ZXN0XG4gKiAtIHRlc3RbaWR4XVxuICogLSB0ZXN0W3Rlc3QxW2lkeF1dXG4gKiAtIHRlc3RbXCJhXCJdW2lkeF1cbiAqIC0geHh4LnRlc3RbYVthXS50ZXN0MVtpZHhdXVxuICogLSB0ZXN0Lnh4eC5hW1wiYXNhXCJdW3Rlc3QxW2lkeF1dXG4gKlxuICovXG5cbnZhciBzdHI7XG52YXIgaW5kZXgkMTtcblxuLyogICovXG5cbi8vIGluIHNvbWUgY2FzZXMsIHRoZSBldmVudCB1c2VkIGhhcyB0byBiZSBkZXRlcm1pbmVkIGF0IHJ1bnRpbWVcbi8vIHNvIHdlIHVzZWQgc29tZSByZXNlcnZlZCB0b2tlbnMgZHVyaW5nIGNvbXBpbGUuXG52YXIgUkFOR0VfVE9LRU4gPSAnX19yJztcbnZhciBDSEVDS0JPWF9SQURJT19UT0tFTiA9ICdfX2MnO1xuXG4vKiAgKi9cblxuLy8gbm9ybWFsaXplIHYtbW9kZWwgZXZlbnQgdG9rZW5zIHRoYXQgY2FuIG9ubHkgYmUgZGV0ZXJtaW5lZCBhdCBydW50aW1lLlxuLy8gaXQncyBpbXBvcnRhbnQgdG8gcGxhY2UgdGhlIGV2ZW50IGFzIHRoZSBmaXJzdCBpbiB0aGUgYXJyYXkgYmVjYXVzZVxuLy8gdGhlIHdob2xlIHBvaW50IGlzIGVuc3VyaW5nIHRoZSB2LW1vZGVsIGNhbGxiYWNrIGdldHMgY2FsbGVkIGJlZm9yZVxuLy8gdXNlci1hdHRhY2hlZCBoYW5kbGVycy5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUV2ZW50cyAob24pIHtcbiAgdmFyIGV2ZW50O1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKG9uW1JBTkdFX1RPS0VOXSkge1xuICAgIC8vIElFIGlucHV0W3R5cGU9cmFuZ2VdIG9ubHkgc3VwcG9ydHMgYGNoYW5nZWAgZXZlbnRcbiAgICBldmVudCA9IGlzSUUgPyAnY2hhbmdlJyA6ICdpbnB1dCc7XG4gICAgb25bZXZlbnRdID0gW10uY29uY2F0KG9uW1JBTkdFX1RPS0VOXSwgb25bZXZlbnRdIHx8IFtdKTtcbiAgICBkZWxldGUgb25bUkFOR0VfVE9LRU5dO1xuICB9XG4gIGlmIChvbltDSEVDS0JPWF9SQURJT19UT0tFTl0pIHtcbiAgICAvLyBDaHJvbWUgZmlyZXMgbWljcm90YXNrcyBpbiBiZXR3ZWVuIGNsaWNrL2NoYW5nZSwgbGVhZHMgdG8gIzQ1MjFcbiAgICBldmVudCA9IGlzQ2hyb21lID8gJ2NsaWNrJyA6ICdjaGFuZ2UnO1xuICAgIG9uW2V2ZW50XSA9IFtdLmNvbmNhdChvbltDSEVDS0JPWF9SQURJT19UT0tFTl0sIG9uW2V2ZW50XSB8fCBbXSk7XG4gICAgZGVsZXRlIG9uW0NIRUNLQk9YX1JBRElPX1RPS0VOXTtcbiAgfVxufVxuXG52YXIgdGFyZ2V0JDE7XG5cbmZ1bmN0aW9uIGFkZCQxIChcbiAgZXZlbnQsXG4gIGhhbmRsZXIsXG4gIG9uY2UsXG4gIGNhcHR1cmVcbikge1xuICBpZiAob25jZSkge1xuICAgIHZhciBvbGRIYW5kbGVyID0gaGFuZGxlcjtcbiAgICB2YXIgX3RhcmdldCA9IHRhcmdldCQxOyAvLyBzYXZlIGN1cnJlbnQgdGFyZ2V0IGVsZW1lbnQgaW4gY2xvc3VyZVxuICAgIGhhbmRsZXIgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgIHZhciByZXMgPSBhcmd1bWVudHMubGVuZ3RoID09PSAxXG4gICAgICAgID8gb2xkSGFuZGxlcihldilcbiAgICAgICAgOiBvbGRIYW5kbGVyLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICBpZiAocmVzICE9PSBudWxsKSB7XG4gICAgICAgIHJlbW92ZSQyKGV2ZW50LCBoYW5kbGVyLCBjYXB0dXJlLCBfdGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIHRhcmdldCQxLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIGNhcHR1cmUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmUkMiAoXG4gIGV2ZW50LFxuICBoYW5kbGVyLFxuICBjYXB0dXJlLFxuICBfdGFyZ2V0XG4pIHtcbiAgKF90YXJnZXQgfHwgdGFyZ2V0JDEpLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIGNhcHR1cmUpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVET01MaXN0ZW5lcnMgKG9sZFZub2RlLCB2bm9kZSkge1xuICBpZiAoIW9sZFZub2RlLmRhdGEub24gJiYgIXZub2RlLmRhdGEub24pIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgb24gPSB2bm9kZS5kYXRhLm9uIHx8IHt9O1xuICB2YXIgb2xkT24gPSBvbGRWbm9kZS5kYXRhLm9uIHx8IHt9O1xuICB0YXJnZXQkMSA9IHZub2RlLmVsbTtcbiAgbm9ybWFsaXplRXZlbnRzKG9uKTtcbiAgdXBkYXRlTGlzdGVuZXJzKG9uLCBvbGRPbiwgYWRkJDEsIHJlbW92ZSQyLCB2bm9kZS5jb250ZXh0KTtcbn1cblxudmFyIGV2ZW50cyA9IHtcbiAgY3JlYXRlOiB1cGRhdGVET01MaXN0ZW5lcnMsXG4gIHVwZGF0ZTogdXBkYXRlRE9NTGlzdGVuZXJzXG59O1xuXG4vKiAgKi9cblxuZnVuY3Rpb24gdXBkYXRlRE9NUHJvcHMgKG9sZFZub2RlLCB2bm9kZSkge1xuICBpZiAoIW9sZFZub2RlLmRhdGEuZG9tUHJvcHMgJiYgIXZub2RlLmRhdGEuZG9tUHJvcHMpIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIga2V5LCBjdXI7XG4gIHZhciBlbG0gPSB2bm9kZS5lbG07XG4gIHZhciBvbGRQcm9wcyA9IG9sZFZub2RlLmRhdGEuZG9tUHJvcHMgfHwge307XG4gIHZhciBwcm9wcyA9IHZub2RlLmRhdGEuZG9tUHJvcHMgfHwge307XG4gIC8vIGNsb25lIG9ic2VydmVkIG9iamVjdHMsIGFzIHRoZSB1c2VyIHByb2JhYmx5IHdhbnRzIHRvIG11dGF0ZSBpdFxuICBpZiAocHJvcHMuX19vYl9fKSB7XG4gICAgcHJvcHMgPSB2bm9kZS5kYXRhLmRvbVByb3BzID0gZXh0ZW5kKHt9LCBwcm9wcyk7XG4gIH1cblxuICBmb3IgKGtleSBpbiBvbGRQcm9wcykge1xuICAgIGlmIChwcm9wc1trZXldID09IG51bGwpIHtcbiAgICAgIGVsbVtrZXldID0gJyc7XG4gICAgfVxuICB9XG4gIGZvciAoa2V5IGluIHByb3BzKSB7XG4gICAgY3VyID0gcHJvcHNba2V5XTtcbiAgICAvLyBpZ25vcmUgY2hpbGRyZW4gaWYgdGhlIG5vZGUgaGFzIHRleHRDb250ZW50IG9yIGlubmVySFRNTCxcbiAgICAvLyBhcyB0aGVzZSB3aWxsIHRocm93IGF3YXkgZXhpc3RpbmcgRE9NIG5vZGVzIGFuZCBjYXVzZSByZW1vdmFsIGVycm9yc1xuICAgIC8vIG9uIHN1YnNlcXVlbnQgcGF0Y2hlcyAoIzMzNjApXG4gICAgaWYgKGtleSA9PT0gJ3RleHRDb250ZW50JyB8fCBrZXkgPT09ICdpbm5lckhUTUwnKSB7XG4gICAgICBpZiAodm5vZGUuY2hpbGRyZW4pIHsgdm5vZGUuY2hpbGRyZW4ubGVuZ3RoID0gMDsgfVxuICAgICAgaWYgKGN1ciA9PT0gb2xkUHJvcHNba2V5XSkgeyBjb250aW51ZSB9XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gJ3ZhbHVlJykge1xuICAgICAgLy8gc3RvcmUgdmFsdWUgYXMgX3ZhbHVlIGFzIHdlbGwgc2luY2VcbiAgICAgIC8vIG5vbi1zdHJpbmcgdmFsdWVzIHdpbGwgYmUgc3RyaW5naWZpZWRcbiAgICAgIGVsbS5fdmFsdWUgPSBjdXI7XG4gICAgICAvLyBhdm9pZCByZXNldHRpbmcgY3Vyc29yIHBvc2l0aW9uIHdoZW4gdmFsdWUgaXMgdGhlIHNhbWVcbiAgICAgIHZhciBzdHJDdXIgPSBjdXIgPT0gbnVsbCA/ICcnIDogU3RyaW5nKGN1cik7XG4gICAgICBpZiAoc2hvdWxkVXBkYXRlVmFsdWUoZWxtLCB2bm9kZSwgc3RyQ3VyKSkge1xuICAgICAgICBlbG0udmFsdWUgPSBzdHJDdXI7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsbVtrZXldID0gY3VyO1xuICAgIH1cbiAgfVxufVxuXG4vLyBjaGVjayBwbGF0Zm9ybXMvd2ViL3V0aWwvYXR0cnMuanMgYWNjZXB0VmFsdWVcblxuXG5mdW5jdGlvbiBzaG91bGRVcGRhdGVWYWx1ZSAoXG4gIGVsbSxcbiAgdm5vZGUsXG4gIGNoZWNrVmFsXG4pIHtcbiAgcmV0dXJuICghZWxtLmNvbXBvc2luZyAmJiAoXG4gICAgdm5vZGUudGFnID09PSAnb3B0aW9uJyB8fFxuICAgIGlzRGlydHkoZWxtLCBjaGVja1ZhbCkgfHxcbiAgICBpc0lucHV0Q2hhbmdlZChlbG0sIGNoZWNrVmFsKVxuICApKVxufVxuXG5mdW5jdGlvbiBpc0RpcnR5IChlbG0sIGNoZWNrVmFsKSB7XG4gIC8vIHJldHVybiB0cnVlIHdoZW4gdGV4dGJveCAoLm51bWJlciBhbmQgLnRyaW0pIGxvc2VzIGZvY3VzIGFuZCBpdHMgdmFsdWUgaXMgbm90IGVxdWFsIHRvIHRoZSB1cGRhdGVkIHZhbHVlXG4gIHJldHVybiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBlbG0gJiYgZWxtLnZhbHVlICE9PSBjaGVja1ZhbFxufVxuXG5mdW5jdGlvbiBpc0lucHV0Q2hhbmdlZCAoZWxtLCBuZXdWYWwpIHtcbiAgdmFyIHZhbHVlID0gZWxtLnZhbHVlO1xuICB2YXIgbW9kaWZpZXJzID0gZWxtLl92TW9kaWZpZXJzOyAvLyBpbmplY3RlZCBieSB2LW1vZGVsIHJ1bnRpbWVcbiAgaWYgKChtb2RpZmllcnMgJiYgbW9kaWZpZXJzLm51bWJlcikgfHwgZWxtLnR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHRvTnVtYmVyKHZhbHVlKSAhPT0gdG9OdW1iZXIobmV3VmFsKVxuICB9XG4gIGlmIChtb2RpZmllcnMgJiYgbW9kaWZpZXJzLnRyaW0pIHtcbiAgICByZXR1cm4gdmFsdWUudHJpbSgpICE9PSBuZXdWYWwudHJpbSgpXG4gIH1cbiAgcmV0dXJuIHZhbHVlICE9PSBuZXdWYWxcbn1cblxudmFyIGRvbVByb3BzID0ge1xuICBjcmVhdGU6IHVwZGF0ZURPTVByb3BzLFxuICB1cGRhdGU6IHVwZGF0ZURPTVByb3BzXG59O1xuXG4vKiAgKi9cblxudmFyIHBhcnNlU3R5bGVUZXh0ID0gY2FjaGVkKGZ1bmN0aW9uIChjc3NUZXh0KSB7XG4gIHZhciByZXMgPSB7fTtcbiAgdmFyIGxpc3REZWxpbWl0ZXIgPSAvOyg/IVteKF0qXFwpKS9nO1xuICB2YXIgcHJvcGVydHlEZWxpbWl0ZXIgPSAvOiguKykvO1xuICBjc3NUZXh0LnNwbGl0KGxpc3REZWxpbWl0ZXIpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgdmFyIHRtcCA9IGl0ZW0uc3BsaXQocHJvcGVydHlEZWxpbWl0ZXIpO1xuICAgICAgdG1wLmxlbmd0aCA+IDEgJiYgKHJlc1t0bXBbMF0udHJpbSgpXSA9IHRtcFsxXS50cmltKCkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXNcbn0pO1xuXG4vLyBtZXJnZSBzdGF0aWMgYW5kIGR5bmFtaWMgc3R5bGUgZGF0YSBvbiB0aGUgc2FtZSB2bm9kZVxuZnVuY3Rpb24gbm9ybWFsaXplU3R5bGVEYXRhIChkYXRhKSB7XG4gIHZhciBzdHlsZSA9IG5vcm1hbGl6ZVN0eWxlQmluZGluZyhkYXRhLnN0eWxlKTtcbiAgLy8gc3RhdGljIHN0eWxlIGlzIHByZS1wcm9jZXNzZWQgaW50byBhbiBvYmplY3QgZHVyaW5nIGNvbXBpbGF0aW9uXG4gIC8vIGFuZCBpcyBhbHdheXMgYSBmcmVzaCBvYmplY3QsIHNvIGl0J3Mgc2FmZSB0byBtZXJnZSBpbnRvIGl0XG4gIHJldHVybiBkYXRhLnN0YXRpY1N0eWxlXG4gICAgPyBleHRlbmQoZGF0YS5zdGF0aWNTdHlsZSwgc3R5bGUpXG4gICAgOiBzdHlsZVxufVxuXG4vLyBub3JtYWxpemUgcG9zc2libGUgYXJyYXkgLyBzdHJpbmcgdmFsdWVzIGludG8gT2JqZWN0XG5mdW5jdGlvbiBub3JtYWxpemVTdHlsZUJpbmRpbmcgKGJpbmRpbmdTdHlsZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheShiaW5kaW5nU3R5bGUpKSB7XG4gICAgcmV0dXJuIHRvT2JqZWN0KGJpbmRpbmdTdHlsZSlcbiAgfVxuICBpZiAodHlwZW9mIGJpbmRpbmdTdHlsZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcGFyc2VTdHlsZVRleHQoYmluZGluZ1N0eWxlKVxuICB9XG4gIHJldHVybiBiaW5kaW5nU3R5bGVcbn1cblxuLyoqXG4gKiBwYXJlbnQgY29tcG9uZW50IHN0eWxlIHNob3VsZCBiZSBhZnRlciBjaGlsZCdzXG4gKiBzbyB0aGF0IHBhcmVudCBjb21wb25lbnQncyBzdHlsZSBjb3VsZCBvdmVycmlkZSBpdFxuICovXG5mdW5jdGlvbiBnZXRTdHlsZSAodm5vZGUsIGNoZWNrQ2hpbGQpIHtcbiAgdmFyIHJlcyA9IHt9O1xuICB2YXIgc3R5bGVEYXRhO1xuXG4gIGlmIChjaGVja0NoaWxkKSB7XG4gICAgdmFyIGNoaWxkTm9kZSA9IHZub2RlO1xuICAgIHdoaWxlIChjaGlsZE5vZGUuY29tcG9uZW50SW5zdGFuY2UpIHtcbiAgICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZS5jb21wb25lbnRJbnN0YW5jZS5fdm5vZGU7XG4gICAgICBpZiAoY2hpbGROb2RlLmRhdGEgJiYgKHN0eWxlRGF0YSA9IG5vcm1hbGl6ZVN0eWxlRGF0YShjaGlsZE5vZGUuZGF0YSkpKSB7XG4gICAgICAgIGV4dGVuZChyZXMsIHN0eWxlRGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKChzdHlsZURhdGEgPSBub3JtYWxpemVTdHlsZURhdGEodm5vZGUuZGF0YSkpKSB7XG4gICAgZXh0ZW5kKHJlcywgc3R5bGVEYXRhKTtcbiAgfVxuXG4gIHZhciBwYXJlbnROb2RlID0gdm5vZGU7XG4gIHdoaWxlICgocGFyZW50Tm9kZSA9IHBhcmVudE5vZGUucGFyZW50KSkge1xuICAgIGlmIChwYXJlbnROb2RlLmRhdGEgJiYgKHN0eWxlRGF0YSA9IG5vcm1hbGl6ZVN0eWxlRGF0YShwYXJlbnROb2RlLmRhdGEpKSkge1xuICAgICAgZXh0ZW5kKHJlcywgc3R5bGVEYXRhKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vKiAgKi9cblxudmFyIGNzc1ZhclJFID0gL14tLS87XG52YXIgaW1wb3J0YW50UkUgPSAvXFxzKiFpbXBvcnRhbnQkLztcbnZhciBzZXRQcm9wID0gZnVuY3Rpb24gKGVsLCBuYW1lLCB2YWwpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChjc3NWYXJSRS50ZXN0KG5hbWUpKSB7XG4gICAgZWwuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgdmFsKTtcbiAgfSBlbHNlIGlmIChpbXBvcnRhbnRSRS50ZXN0KHZhbCkpIHtcbiAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCB2YWwucmVwbGFjZShpbXBvcnRhbnRSRSwgJycpLCAnaW1wb3J0YW50Jyk7XG4gIH0gZWxzZSB7XG4gICAgZWwuc3R5bGVbbm9ybWFsaXplKG5hbWUpXSA9IHZhbDtcbiAgfVxufTtcblxudmFyIHByZWZpeGVzID0gWydXZWJraXQnLCAnTW96JywgJ21zJ107XG5cbnZhciB0ZXN0RWw7XG52YXIgbm9ybWFsaXplID0gY2FjaGVkKGZ1bmN0aW9uIChwcm9wKSB7XG4gIHRlc3RFbCA9IHRlc3RFbCB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvcCA9IGNhbWVsaXplKHByb3ApO1xuICBpZiAocHJvcCAhPT0gJ2ZpbHRlcicgJiYgKHByb3AgaW4gdGVzdEVsLnN0eWxlKSkge1xuICAgIHJldHVybiBwcm9wXG4gIH1cbiAgdmFyIHVwcGVyID0gcHJvcC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3Auc2xpY2UoMSk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcHJlZml4ZWQgPSBwcmVmaXhlc1tpXSArIHVwcGVyO1xuICAgIGlmIChwcmVmaXhlZCBpbiB0ZXN0RWwuc3R5bGUpIHtcbiAgICAgIHJldHVybiBwcmVmaXhlZFxuICAgIH1cbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChvbGRWbm9kZSwgdm5vZGUpIHtcbiAgdmFyIGRhdGEgPSB2bm9kZS5kYXRhO1xuICB2YXIgb2xkRGF0YSA9IG9sZFZub2RlLmRhdGE7XG5cbiAgaWYgKCFkYXRhLnN0YXRpY1N0eWxlICYmICFkYXRhLnN0eWxlICYmXG4gICAgICAhb2xkRGF0YS5zdGF0aWNTdHlsZSAmJiAhb2xkRGF0YS5zdHlsZSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIGN1ciwgbmFtZTtcbiAgdmFyIGVsID0gdm5vZGUuZWxtO1xuICB2YXIgb2xkU3RhdGljU3R5bGUgPSBvbGRWbm9kZS5kYXRhLnN0YXRpY1N0eWxlO1xuICB2YXIgb2xkU3R5bGVCaW5kaW5nID0gb2xkVm5vZGUuZGF0YS5zdHlsZSB8fCB7fTtcblxuICAvLyBpZiBzdGF0aWMgc3R5bGUgZXhpc3RzLCBzdHlsZWJpbmRpbmcgYWxyZWFkeSBtZXJnZWQgaW50byBpdCB3aGVuIGRvaW5nIG5vcm1hbGl6ZVN0eWxlRGF0YVxuICB2YXIgb2xkU3R5bGUgPSBvbGRTdGF0aWNTdHlsZSB8fCBvbGRTdHlsZUJpbmRpbmc7XG5cbiAgdmFyIHN0eWxlID0gbm9ybWFsaXplU3R5bGVCaW5kaW5nKHZub2RlLmRhdGEuc3R5bGUpIHx8IHt9O1xuXG4gIHZub2RlLmRhdGEuc3R5bGUgPSBzdHlsZS5fX29iX18gPyBleHRlbmQoe30sIHN0eWxlKSA6IHN0eWxlO1xuXG4gIHZhciBuZXdTdHlsZSA9IGdldFN0eWxlKHZub2RlLCB0cnVlKTtcblxuICBmb3IgKG5hbWUgaW4gb2xkU3R5bGUpIHtcbiAgICBpZiAobmV3U3R5bGVbbmFtZV0gPT0gbnVsbCkge1xuICAgICAgc2V0UHJvcChlbCwgbmFtZSwgJycpO1xuICAgIH1cbiAgfVxuICBmb3IgKG5hbWUgaW4gbmV3U3R5bGUpIHtcbiAgICBjdXIgPSBuZXdTdHlsZVtuYW1lXTtcbiAgICBpZiAoY3VyICE9PSBvbGRTdHlsZVtuYW1lXSkge1xuICAgICAgLy8gaWU5IHNldHRpbmcgdG8gbnVsbCBoYXMgbm8gZWZmZWN0LCBtdXN0IHVzZSBlbXB0eSBzdHJpbmdcbiAgICAgIHNldFByb3AoZWwsIG5hbWUsIGN1ciA9PSBudWxsID8gJycgOiBjdXIpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgc3R5bGUgPSB7XG4gIGNyZWF0ZTogdXBkYXRlU3R5bGUsXG4gIHVwZGF0ZTogdXBkYXRlU3R5bGVcbn07XG5cbi8qICAqL1xuXG4vKipcbiAqIEFkZCBjbGFzcyB3aXRoIGNvbXBhdGliaWxpdHkgZm9yIFNWRyBzaW5jZSBjbGFzc0xpc3QgaXMgbm90IHN1cHBvcnRlZCBvblxuICogU1ZHIGVsZW1lbnRzIGluIElFXG4gKi9cbmZ1bmN0aW9uIGFkZENsYXNzIChlbCwgY2xzKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoIWNscyB8fCAhKGNscyA9IGNscy50cmltKCkpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgaWYgKGNscy5pbmRleE9mKCcgJykgPiAtMSkge1xuICAgICAgY2xzLnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbiAoYykgeyByZXR1cm4gZWwuY2xhc3NMaXN0LmFkZChjKTsgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGN1ciA9IFwiIFwiICsgKGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJykgKyBcIiBcIjtcbiAgICBpZiAoY3VyLmluZGV4T2YoJyAnICsgY2xzICsgJyAnKSA8IDApIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoY3VyICsgY2xzKS50cmltKCkpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBjbGFzcyB3aXRoIGNvbXBhdGliaWxpdHkgZm9yIFNWRyBzaW5jZSBjbGFzc0xpc3QgaXMgbm90IHN1cHBvcnRlZCBvblxuICogU1ZHIGVsZW1lbnRzIGluIElFXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzIChlbCwgY2xzKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoIWNscyB8fCAhKGNscyA9IGNscy50cmltKCkpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgaWYgKGNscy5pbmRleE9mKCcgJykgPiAtMSkge1xuICAgICAgY2xzLnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbiAoYykgeyByZXR1cm4gZWwuY2xhc3NMaXN0LnJlbW92ZShjKTsgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xzKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGN1ciA9IFwiIFwiICsgKGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJykgKyBcIiBcIjtcbiAgICB2YXIgdGFyID0gJyAnICsgY2xzICsgJyAnO1xuICAgIHdoaWxlIChjdXIuaW5kZXhPZih0YXIpID49IDApIHtcbiAgICAgIGN1ciA9IGN1ci5yZXBsYWNlKHRhciwgJyAnKTtcbiAgICB9XG4gICAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIGN1ci50cmltKCkpO1xuICB9XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiByZXNvbHZlVHJhbnNpdGlvbiAoZGVmJCQxKSB7XG4gIGlmICghZGVmJCQxKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKHR5cGVvZiBkZWYkJDEgPT09ICdvYmplY3QnKSB7XG4gICAgdmFyIHJlcyA9IHt9O1xuICAgIGlmIChkZWYkJDEuY3NzICE9PSBmYWxzZSkge1xuICAgICAgZXh0ZW5kKHJlcywgYXV0b0Nzc1RyYW5zaXRpb24oZGVmJCQxLm5hbWUgfHwgJ3YnKSk7XG4gICAgfVxuICAgIGV4dGVuZChyZXMsIGRlZiQkMSk7XG4gICAgcmV0dXJuIHJlc1xuICB9IGVsc2UgaWYgKHR5cGVvZiBkZWYkJDEgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGF1dG9Dc3NUcmFuc2l0aW9uKGRlZiQkMSlcbiAgfVxufVxuXG52YXIgYXV0b0Nzc1RyYW5zaXRpb24gPSBjYWNoZWQoZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnRlckNsYXNzOiAobmFtZSArIFwiLWVudGVyXCIpLFxuICAgIGVudGVyVG9DbGFzczogKG5hbWUgKyBcIi1lbnRlci10b1wiKSxcbiAgICBlbnRlckFjdGl2ZUNsYXNzOiAobmFtZSArIFwiLWVudGVyLWFjdGl2ZVwiKSxcbiAgICBsZWF2ZUNsYXNzOiAobmFtZSArIFwiLWxlYXZlXCIpLFxuICAgIGxlYXZlVG9DbGFzczogKG5hbWUgKyBcIi1sZWF2ZS10b1wiKSxcbiAgICBsZWF2ZUFjdGl2ZUNsYXNzOiAobmFtZSArIFwiLWxlYXZlLWFjdGl2ZVwiKVxuICB9XG59KTtcblxudmFyIGhhc1RyYW5zaXRpb24gPSBpbkJyb3dzZXIgJiYgIWlzSUU5O1xudmFyIFRSQU5TSVRJT04gPSAndHJhbnNpdGlvbic7XG52YXIgQU5JTUFUSU9OID0gJ2FuaW1hdGlvbic7XG5cbi8vIFRyYW5zaXRpb24gcHJvcGVydHkvZXZlbnQgc25pZmZpbmdcbnZhciB0cmFuc2l0aW9uUHJvcCA9ICd0cmFuc2l0aW9uJztcbnZhciB0cmFuc2l0aW9uRW5kRXZlbnQgPSAndHJhbnNpdGlvbmVuZCc7XG52YXIgYW5pbWF0aW9uUHJvcCA9ICdhbmltYXRpb24nO1xudmFyIGFuaW1hdGlvbkVuZEV2ZW50ID0gJ2FuaW1hdGlvbmVuZCc7XG5pZiAoaGFzVHJhbnNpdGlvbikge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHdpbmRvdy5vbnRyYW5zaXRpb25lbmQgPT09IHVuZGVmaW5lZCAmJlxuICAgIHdpbmRvdy5vbndlYmtpdHRyYW5zaXRpb25lbmQgIT09IHVuZGVmaW5lZCkge1xuICAgIHRyYW5zaXRpb25Qcm9wID0gJ1dlYmtpdFRyYW5zaXRpb24nO1xuICAgIHRyYW5zaXRpb25FbmRFdmVudCA9ICd3ZWJraXRUcmFuc2l0aW9uRW5kJztcbiAgfVxuICBpZiAod2luZG93Lm9uYW5pbWF0aW9uZW5kID09PSB1bmRlZmluZWQgJiZcbiAgICB3aW5kb3cub253ZWJraXRhbmltYXRpb25lbmQgIT09IHVuZGVmaW5lZCkge1xuICAgIGFuaW1hdGlvblByb3AgPSAnV2Via2l0QW5pbWF0aW9uJztcbiAgICBhbmltYXRpb25FbmRFdmVudCA9ICd3ZWJraXRBbmltYXRpb25FbmQnO1xuICB9XG59XG5cbi8vIGJpbmRpbmcgdG8gd2luZG93IGlzIG5lY2Vzc2FyeSB0byBtYWtlIGhvdCByZWxvYWQgd29yayBpbiBJRSBpbiBzdHJpY3QgbW9kZVxudmFyIHJhZiA9IGluQnJvd3NlciAmJiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gID8gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKHdpbmRvdylcbiAgOiBzZXRUaW1lb3V0O1xuXG5mdW5jdGlvbiBuZXh0RnJhbWUgKGZuKSB7XG4gIHJhZihmdW5jdGlvbiAoKSB7XG4gICAgcmFmKGZuKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFRyYW5zaXRpb25DbGFzcyAoZWwsIGNscykge1xuICAoZWwuX3RyYW5zaXRpb25DbGFzc2VzIHx8IChlbC5fdHJhbnNpdGlvbkNsYXNzZXMgPSBbXSkpLnB1c2goY2xzKTtcbiAgYWRkQ2xhc3MoZWwsIGNscyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRyYW5zaXRpb25DbGFzcyAoZWwsIGNscykge1xuICBpZiAoZWwuX3RyYW5zaXRpb25DbGFzc2VzKSB7XG4gICAgcmVtb3ZlKGVsLl90cmFuc2l0aW9uQ2xhc3NlcywgY2xzKTtcbiAgfVxuICByZW1vdmVDbGFzcyhlbCwgY2xzKTtcbn1cblxuZnVuY3Rpb24gd2hlblRyYW5zaXRpb25FbmRzIChcbiAgZWwsXG4gIGV4cGVjdGVkVHlwZSxcbiAgY2Jcbikge1xuICB2YXIgcmVmID0gZ2V0VHJhbnNpdGlvbkluZm8oZWwsIGV4cGVjdGVkVHlwZSk7XG4gIHZhciB0eXBlID0gcmVmLnR5cGU7XG4gIHZhciB0aW1lb3V0ID0gcmVmLnRpbWVvdXQ7XG4gIHZhciBwcm9wQ291bnQgPSByZWYucHJvcENvdW50O1xuICBpZiAoIXR5cGUpIHsgcmV0dXJuIGNiKCkgfVxuICB2YXIgZXZlbnQgPSB0eXBlID09PSBUUkFOU0lUSU9OID8gdHJhbnNpdGlvbkVuZEV2ZW50IDogYW5pbWF0aW9uRW5kRXZlbnQ7XG4gIHZhciBlbmRlZCA9IDA7XG4gIHZhciBlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgb25FbmQpO1xuICAgIGNiKCk7XG4gIH07XG4gIHZhciBvbkVuZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBlbCkge1xuICAgICAgaWYgKCsrZW5kZWQgPj0gcHJvcENvdW50KSB7XG4gICAgICAgIGVuZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGVuZGVkIDwgcHJvcENvdW50KSB7XG4gICAgICBlbmQoKTtcbiAgICB9XG4gIH0sIHRpbWVvdXQgKyAxKTtcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgb25FbmQpO1xufVxuXG52YXIgdHJhbnNmb3JtUkUgPSAvXFxiKHRyYW5zZm9ybXxhbGwpKCx8JCkvO1xuXG5mdW5jdGlvbiBnZXRUcmFuc2l0aW9uSW5mbyAoZWwsIGV4cGVjdGVkVHlwZSkge1xuICB2YXIgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpO1xuICB2YXIgdHJhbnNpdGlvbmVEZWxheXMgPSBzdHlsZXNbdHJhbnNpdGlvblByb3AgKyAnRGVsYXknXS5zcGxpdCgnLCAnKTtcbiAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbnMgPSBzdHlsZXNbdHJhbnNpdGlvblByb3AgKyAnRHVyYXRpb24nXS5zcGxpdCgnLCAnKTtcbiAgdmFyIHRyYW5zaXRpb25UaW1lb3V0ID0gZ2V0VGltZW91dCh0cmFuc2l0aW9uZURlbGF5cywgdHJhbnNpdGlvbkR1cmF0aW9ucyk7XG4gIHZhciBhbmltYXRpb25EZWxheXMgPSBzdHlsZXNbYW5pbWF0aW9uUHJvcCArICdEZWxheSddLnNwbGl0KCcsICcpO1xuICB2YXIgYW5pbWF0aW9uRHVyYXRpb25zID0gc3R5bGVzW2FuaW1hdGlvblByb3AgKyAnRHVyYXRpb24nXS5zcGxpdCgnLCAnKTtcbiAgdmFyIGFuaW1hdGlvblRpbWVvdXQgPSBnZXRUaW1lb3V0KGFuaW1hdGlvbkRlbGF5cywgYW5pbWF0aW9uRHVyYXRpb25zKTtcblxuICB2YXIgdHlwZTtcbiAgdmFyIHRpbWVvdXQgPSAwO1xuICB2YXIgcHJvcENvdW50ID0gMDtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChleHBlY3RlZFR5cGUgPT09IFRSQU5TSVRJT04pIHtcbiAgICBpZiAodHJhbnNpdGlvblRpbWVvdXQgPiAwKSB7XG4gICAgICB0eXBlID0gVFJBTlNJVElPTjtcbiAgICAgIHRpbWVvdXQgPSB0cmFuc2l0aW9uVGltZW91dDtcbiAgICAgIHByb3BDb3VudCA9IHRyYW5zaXRpb25EdXJhdGlvbnMubGVuZ3RoO1xuICAgIH1cbiAgfSBlbHNlIGlmIChleHBlY3RlZFR5cGUgPT09IEFOSU1BVElPTikge1xuICAgIGlmIChhbmltYXRpb25UaW1lb3V0ID4gMCkge1xuICAgICAgdHlwZSA9IEFOSU1BVElPTjtcbiAgICAgIHRpbWVvdXQgPSBhbmltYXRpb25UaW1lb3V0O1xuICAgICAgcHJvcENvdW50ID0gYW5pbWF0aW9uRHVyYXRpb25zLmxlbmd0aDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGltZW91dCA9IE1hdGgubWF4KHRyYW5zaXRpb25UaW1lb3V0LCBhbmltYXRpb25UaW1lb3V0KTtcbiAgICB0eXBlID0gdGltZW91dCA+IDBcbiAgICAgID8gdHJhbnNpdGlvblRpbWVvdXQgPiBhbmltYXRpb25UaW1lb3V0XG4gICAgICAgID8gVFJBTlNJVElPTlxuICAgICAgICA6IEFOSU1BVElPTlxuICAgICAgOiBudWxsO1xuICAgIHByb3BDb3VudCA9IHR5cGVcbiAgICAgID8gdHlwZSA9PT0gVFJBTlNJVElPTlxuICAgICAgICA/IHRyYW5zaXRpb25EdXJhdGlvbnMubGVuZ3RoXG4gICAgICAgIDogYW5pbWF0aW9uRHVyYXRpb25zLmxlbmd0aFxuICAgICAgOiAwO1xuICB9XG4gIHZhciBoYXNUcmFuc2Zvcm0gPVxuICAgIHR5cGUgPT09IFRSQU5TSVRJT04gJiZcbiAgICB0cmFuc2Zvcm1SRS50ZXN0KHN0eWxlc1t0cmFuc2l0aW9uUHJvcCArICdQcm9wZXJ0eSddKTtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIHRpbWVvdXQ6IHRpbWVvdXQsXG4gICAgcHJvcENvdW50OiBwcm9wQ291bnQsXG4gICAgaGFzVHJhbnNmb3JtOiBoYXNUcmFuc2Zvcm1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUaW1lb3V0IChkZWxheXMsIGR1cmF0aW9ucykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICB3aGlsZSAoZGVsYXlzLmxlbmd0aCA8IGR1cmF0aW9ucy5sZW5ndGgpIHtcbiAgICBkZWxheXMgPSBkZWxheXMuY29uY2F0KGRlbGF5cyk7XG4gIH1cblxuICByZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCwgZHVyYXRpb25zLm1hcChmdW5jdGlvbiAoZCwgaSkge1xuICAgIHJldHVybiB0b01zKGQpICsgdG9NcyhkZWxheXNbaV0pXG4gIH0pKVxufVxuXG5mdW5jdGlvbiB0b01zIChzKSB7XG4gIHJldHVybiBOdW1iZXIocy5zbGljZSgwLCAtMSkpICogMTAwMFxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gZW50ZXIgKHZub2RlLCB0b2dnbGVEaXNwbGF5KSB7XG4gIHZhciBlbCA9IHZub2RlLmVsbTtcblxuICAvLyBjYWxsIGxlYXZlIGNhbGxiYWNrIG5vd1xuICBpZiAoZWwuX2xlYXZlQ2IpIHtcbiAgICBlbC5fbGVhdmVDYi5jYW5jZWxsZWQgPSB0cnVlO1xuICAgIGVsLl9sZWF2ZUNiKCk7XG4gIH1cblxuICB2YXIgZGF0YSA9IHJlc29sdmVUcmFuc2l0aW9uKHZub2RlLmRhdGEudHJhbnNpdGlvbik7XG4gIGlmICghZGF0YSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChlbC5fZW50ZXJDYiB8fCBlbC5ub2RlVHlwZSAhPT0gMSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIGNzcyA9IGRhdGEuY3NzO1xuICB2YXIgdHlwZSA9IGRhdGEudHlwZTtcbiAgdmFyIGVudGVyQ2xhc3MgPSBkYXRhLmVudGVyQ2xhc3M7XG4gIHZhciBlbnRlclRvQ2xhc3MgPSBkYXRhLmVudGVyVG9DbGFzcztcbiAgdmFyIGVudGVyQWN0aXZlQ2xhc3MgPSBkYXRhLmVudGVyQWN0aXZlQ2xhc3M7XG4gIHZhciBhcHBlYXJDbGFzcyA9IGRhdGEuYXBwZWFyQ2xhc3M7XG4gIHZhciBhcHBlYXJUb0NsYXNzID0gZGF0YS5hcHBlYXJUb0NsYXNzO1xuICB2YXIgYXBwZWFyQWN0aXZlQ2xhc3MgPSBkYXRhLmFwcGVhckFjdGl2ZUNsYXNzO1xuICB2YXIgYmVmb3JlRW50ZXIgPSBkYXRhLmJlZm9yZUVudGVyO1xuICB2YXIgZW50ZXIgPSBkYXRhLmVudGVyO1xuICB2YXIgYWZ0ZXJFbnRlciA9IGRhdGEuYWZ0ZXJFbnRlcjtcbiAgdmFyIGVudGVyQ2FuY2VsbGVkID0gZGF0YS5lbnRlckNhbmNlbGxlZDtcbiAgdmFyIGJlZm9yZUFwcGVhciA9IGRhdGEuYmVmb3JlQXBwZWFyO1xuICB2YXIgYXBwZWFyID0gZGF0YS5hcHBlYXI7XG4gIHZhciBhZnRlckFwcGVhciA9IGRhdGEuYWZ0ZXJBcHBlYXI7XG4gIHZhciBhcHBlYXJDYW5jZWxsZWQgPSBkYXRhLmFwcGVhckNhbmNlbGxlZDtcbiAgdmFyIGR1cmF0aW9uID0gZGF0YS5kdXJhdGlvbjtcblxuICAvLyBhY3RpdmVJbnN0YW5jZSB3aWxsIGFsd2F5cyBiZSB0aGUgPHRyYW5zaXRpb24+IGNvbXBvbmVudCBtYW5hZ2luZyB0aGlzXG4gIC8vIHRyYW5zaXRpb24uIE9uZSBlZGdlIGNhc2UgdG8gY2hlY2sgaXMgd2hlbiB0aGUgPHRyYW5zaXRpb24+IGlzIHBsYWNlZFxuICAvLyBhcyB0aGUgcm9vdCBub2RlIG9mIGEgY2hpbGQgY29tcG9uZW50LiBJbiB0aGF0IGNhc2Ugd2UgbmVlZCB0byBjaGVja1xuICAvLyA8dHJhbnNpdGlvbj4ncyBwYXJlbnQgZm9yIGFwcGVhciBjaGVjay5cbiAgdmFyIGNvbnRleHQgPSBhY3RpdmVJbnN0YW5jZTtcbiAgdmFyIHRyYW5zaXRpb25Ob2RlID0gYWN0aXZlSW5zdGFuY2UuJHZub2RlO1xuICB3aGlsZSAodHJhbnNpdGlvbk5vZGUgJiYgdHJhbnNpdGlvbk5vZGUucGFyZW50KSB7XG4gICAgdHJhbnNpdGlvbk5vZGUgPSB0cmFuc2l0aW9uTm9kZS5wYXJlbnQ7XG4gICAgY29udGV4dCA9IHRyYW5zaXRpb25Ob2RlLmNvbnRleHQ7XG4gIH1cblxuICB2YXIgaXNBcHBlYXIgPSAhY29udGV4dC5faXNNb3VudGVkIHx8ICF2bm9kZS5pc1Jvb3RJbnNlcnQ7XG5cbiAgaWYgKGlzQXBwZWFyICYmICFhcHBlYXIgJiYgYXBwZWFyICE9PSAnJykge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIHN0YXJ0Q2xhc3MgPSBpc0FwcGVhciAmJiBhcHBlYXJDbGFzc1xuICAgID8gYXBwZWFyQ2xhc3NcbiAgICA6IGVudGVyQ2xhc3M7XG4gIHZhciBhY3RpdmVDbGFzcyA9IGlzQXBwZWFyICYmIGFwcGVhckFjdGl2ZUNsYXNzXG4gICAgPyBhcHBlYXJBY3RpdmVDbGFzc1xuICAgIDogZW50ZXJBY3RpdmVDbGFzcztcbiAgdmFyIHRvQ2xhc3MgPSBpc0FwcGVhciAmJiBhcHBlYXJUb0NsYXNzXG4gICAgPyBhcHBlYXJUb0NsYXNzXG4gICAgOiBlbnRlclRvQ2xhc3M7XG5cbiAgdmFyIGJlZm9yZUVudGVySG9vayA9IGlzQXBwZWFyXG4gICAgPyAoYmVmb3JlQXBwZWFyIHx8IGJlZm9yZUVudGVyKVxuICAgIDogYmVmb3JlRW50ZXI7XG4gIHZhciBlbnRlckhvb2sgPSBpc0FwcGVhclxuICAgID8gKHR5cGVvZiBhcHBlYXIgPT09ICdmdW5jdGlvbicgPyBhcHBlYXIgOiBlbnRlcilcbiAgICA6IGVudGVyO1xuICB2YXIgYWZ0ZXJFbnRlckhvb2sgPSBpc0FwcGVhclxuICAgID8gKGFmdGVyQXBwZWFyIHx8IGFmdGVyRW50ZXIpXG4gICAgOiBhZnRlckVudGVyO1xuICB2YXIgZW50ZXJDYW5jZWxsZWRIb29rID0gaXNBcHBlYXJcbiAgICA/IChhcHBlYXJDYW5jZWxsZWQgfHwgZW50ZXJDYW5jZWxsZWQpXG4gICAgOiBlbnRlckNhbmNlbGxlZDtcblxuICB2YXIgZXhwbGljaXRFbnRlckR1cmF0aW9uID0gdG9OdW1iZXIoXG4gICAgaXNPYmplY3QoZHVyYXRpb24pXG4gICAgICA/IGR1cmF0aW9uLmVudGVyXG4gICAgICA6IGR1cmF0aW9uXG4gICk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgZXhwbGljaXRFbnRlckR1cmF0aW9uICE9IG51bGwpIHtcbiAgICBjaGVja0R1cmF0aW9uKGV4cGxpY2l0RW50ZXJEdXJhdGlvbiwgJ2VudGVyJywgdm5vZGUpO1xuICB9XG5cbiAgdmFyIGV4cGVjdHNDU1MgPSBjc3MgIT09IGZhbHNlICYmICFpc0lFOTtcbiAgdmFyIHVzZXJXYW50c0NvbnRyb2wgPSBnZXRIb29rQWd1bWVudHNMZW5ndGgoZW50ZXJIb29rKTtcblxuICB2YXIgY2IgPSBlbC5fZW50ZXJDYiA9IG9uY2UoZnVuY3Rpb24gKCkge1xuICAgIGlmIChleHBlY3RzQ1NTKSB7XG4gICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIHRvQ2xhc3MpO1xuICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBhY3RpdmVDbGFzcyk7XG4gICAgfVxuICAgIGlmIChjYi5jYW5jZWxsZWQpIHtcbiAgICAgIGlmIChleHBlY3RzQ1NTKSB7XG4gICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgc3RhcnRDbGFzcyk7XG4gICAgICB9XG4gICAgICBlbnRlckNhbmNlbGxlZEhvb2sgJiYgZW50ZXJDYW5jZWxsZWRIb29rKGVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWZ0ZXJFbnRlckhvb2sgJiYgYWZ0ZXJFbnRlckhvb2soZWwpO1xuICAgIH1cbiAgICBlbC5fZW50ZXJDYiA9IG51bGw7XG4gIH0pO1xuXG4gIGlmICghdm5vZGUuZGF0YS5zaG93KSB7XG4gICAgLy8gcmVtb3ZlIHBlbmRpbmcgbGVhdmUgZWxlbWVudCBvbiBlbnRlciBieSBpbmplY3RpbmcgYW4gaW5zZXJ0IGhvb2tcbiAgICBtZXJnZVZOb2RlSG9vayh2bm9kZS5kYXRhLmhvb2sgfHwgKHZub2RlLmRhdGEuaG9vayA9IHt9KSwgJ2luc2VydCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnROb2RlO1xuICAgICAgdmFyIHBlbmRpbmdOb2RlID0gcGFyZW50ICYmIHBhcmVudC5fcGVuZGluZyAmJiBwYXJlbnQuX3BlbmRpbmdbdm5vZGUua2V5XTtcbiAgICAgIGlmIChwZW5kaW5nTm9kZSAmJlxuICAgICAgICAgIHBlbmRpbmdOb2RlLnRhZyA9PT0gdm5vZGUudGFnICYmXG4gICAgICAgICAgcGVuZGluZ05vZGUuZWxtLl9sZWF2ZUNiKSB7XG4gICAgICAgIHBlbmRpbmdOb2RlLmVsbS5fbGVhdmVDYigpO1xuICAgICAgfVxuICAgICAgZW50ZXJIb29rICYmIGVudGVySG9vayhlbCwgY2IpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gc3RhcnQgZW50ZXIgdHJhbnNpdGlvblxuICBiZWZvcmVFbnRlckhvb2sgJiYgYmVmb3JlRW50ZXJIb29rKGVsKTtcbiAgaWYgKGV4cGVjdHNDU1MpIHtcbiAgICBhZGRUcmFuc2l0aW9uQ2xhc3MoZWwsIHN0YXJ0Q2xhc3MpO1xuICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgYWN0aXZlQ2xhc3MpO1xuICAgIG5leHRGcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICBhZGRUcmFuc2l0aW9uQ2xhc3MoZWwsIHRvQ2xhc3MpO1xuICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBzdGFydENsYXNzKTtcbiAgICAgIGlmICghY2IuY2FuY2VsbGVkICYmICF1c2VyV2FudHNDb250cm9sKSB7XG4gICAgICAgIGlmIChpc1ZhbGlkRHVyYXRpb24oZXhwbGljaXRFbnRlckR1cmF0aW9uKSkge1xuICAgICAgICAgIHNldFRpbWVvdXQoY2IsIGV4cGxpY2l0RW50ZXJEdXJhdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2hlblRyYW5zaXRpb25FbmRzKGVsLCB0eXBlLCBjYik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmICh2bm9kZS5kYXRhLnNob3cpIHtcbiAgICB0b2dnbGVEaXNwbGF5ICYmIHRvZ2dsZURpc3BsYXkoKTtcbiAgICBlbnRlckhvb2sgJiYgZW50ZXJIb29rKGVsLCBjYik7XG4gIH1cblxuICBpZiAoIWV4cGVjdHNDU1MgJiYgIXVzZXJXYW50c0NvbnRyb2wpIHtcbiAgICBjYigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxlYXZlICh2bm9kZSwgcm0pIHtcbiAgdmFyIGVsID0gdm5vZGUuZWxtO1xuXG4gIC8vIGNhbGwgZW50ZXIgY2FsbGJhY2sgbm93XG4gIGlmIChlbC5fZW50ZXJDYikge1xuICAgIGVsLl9lbnRlckNiLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgZWwuX2VudGVyQ2IoKTtcbiAgfVxuXG4gIHZhciBkYXRhID0gcmVzb2x2ZVRyYW5zaXRpb24odm5vZGUuZGF0YS50cmFuc2l0aW9uKTtcbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIHJtKClcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoZWwuX2xlYXZlQ2IgfHwgZWwubm9kZVR5cGUgIT09IDEpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBjc3MgPSBkYXRhLmNzcztcbiAgdmFyIHR5cGUgPSBkYXRhLnR5cGU7XG4gIHZhciBsZWF2ZUNsYXNzID0gZGF0YS5sZWF2ZUNsYXNzO1xuICB2YXIgbGVhdmVUb0NsYXNzID0gZGF0YS5sZWF2ZVRvQ2xhc3M7XG4gIHZhciBsZWF2ZUFjdGl2ZUNsYXNzID0gZGF0YS5sZWF2ZUFjdGl2ZUNsYXNzO1xuICB2YXIgYmVmb3JlTGVhdmUgPSBkYXRhLmJlZm9yZUxlYXZlO1xuICB2YXIgbGVhdmUgPSBkYXRhLmxlYXZlO1xuICB2YXIgYWZ0ZXJMZWF2ZSA9IGRhdGEuYWZ0ZXJMZWF2ZTtcbiAgdmFyIGxlYXZlQ2FuY2VsbGVkID0gZGF0YS5sZWF2ZUNhbmNlbGxlZDtcbiAgdmFyIGRlbGF5TGVhdmUgPSBkYXRhLmRlbGF5TGVhdmU7XG4gIHZhciBkdXJhdGlvbiA9IGRhdGEuZHVyYXRpb247XG5cbiAgdmFyIGV4cGVjdHNDU1MgPSBjc3MgIT09IGZhbHNlICYmICFpc0lFOTtcbiAgdmFyIHVzZXJXYW50c0NvbnRyb2wgPSBnZXRIb29rQWd1bWVudHNMZW5ndGgobGVhdmUpO1xuXG4gIHZhciBleHBsaWNpdExlYXZlRHVyYXRpb24gPSB0b051bWJlcihcbiAgICBpc09iamVjdChkdXJhdGlvbilcbiAgICAgID8gZHVyYXRpb24ubGVhdmVcbiAgICAgIDogZHVyYXRpb25cbiAgKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBleHBsaWNpdExlYXZlRHVyYXRpb24gIT0gbnVsbCkge1xuICAgIGNoZWNrRHVyYXRpb24oZXhwbGljaXRMZWF2ZUR1cmF0aW9uLCAnbGVhdmUnLCB2bm9kZSk7XG4gIH1cblxuICB2YXIgY2IgPSBlbC5fbGVhdmVDYiA9IG9uY2UoZnVuY3Rpb24gKCkge1xuICAgIGlmIChlbC5wYXJlbnROb2RlICYmIGVsLnBhcmVudE5vZGUuX3BlbmRpbmcpIHtcbiAgICAgIGVsLnBhcmVudE5vZGUuX3BlbmRpbmdbdm5vZGUua2V5XSA9IG51bGw7XG4gICAgfVxuICAgIGlmIChleHBlY3RzQ1NTKSB7XG4gICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIGxlYXZlVG9DbGFzcyk7XG4gICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIGxlYXZlQWN0aXZlQ2xhc3MpO1xuICAgIH1cbiAgICBpZiAoY2IuY2FuY2VsbGVkKSB7XG4gICAgICBpZiAoZXhwZWN0c0NTUykge1xuICAgICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIGxlYXZlQ2xhc3MpO1xuICAgICAgfVxuICAgICAgbGVhdmVDYW5jZWxsZWQgJiYgbGVhdmVDYW5jZWxsZWQoZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBybSgpO1xuICAgICAgYWZ0ZXJMZWF2ZSAmJiBhZnRlckxlYXZlKGVsKTtcbiAgICB9XG4gICAgZWwuX2xlYXZlQ2IgPSBudWxsO1xuICB9KTtcblxuICBpZiAoZGVsYXlMZWF2ZSkge1xuICAgIGRlbGF5TGVhdmUocGVyZm9ybUxlYXZlKTtcbiAgfSBlbHNlIHtcbiAgICBwZXJmb3JtTGVhdmUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBlcmZvcm1MZWF2ZSAoKSB7XG4gICAgLy8gdGhlIGRlbGF5ZWQgbGVhdmUgbWF5IGhhdmUgYWxyZWFkeSBiZWVuIGNhbmNlbGxlZFxuICAgIGlmIChjYi5jYW5jZWxsZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyByZWNvcmQgbGVhdmluZyBlbGVtZW50XG4gICAgaWYgKCF2bm9kZS5kYXRhLnNob3cpIHtcbiAgICAgIChlbC5wYXJlbnROb2RlLl9wZW5kaW5nIHx8IChlbC5wYXJlbnROb2RlLl9wZW5kaW5nID0ge30pKVt2bm9kZS5rZXldID0gdm5vZGU7XG4gICAgfVxuICAgIGJlZm9yZUxlYXZlICYmIGJlZm9yZUxlYXZlKGVsKTtcbiAgICBpZiAoZXhwZWN0c0NTUykge1xuICAgICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZUNsYXNzKTtcbiAgICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVBY3RpdmVDbGFzcyk7XG4gICAgICBuZXh0RnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICBhZGRUcmFuc2l0aW9uQ2xhc3MoZWwsIGxlYXZlVG9DbGFzcyk7XG4gICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVDbGFzcyk7XG4gICAgICAgIGlmICghY2IuY2FuY2VsbGVkICYmICF1c2VyV2FudHNDb250cm9sKSB7XG4gICAgICAgICAgaWYgKGlzVmFsaWREdXJhdGlvbihleHBsaWNpdExlYXZlRHVyYXRpb24pKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGNiLCBleHBsaWNpdExlYXZlRHVyYXRpb24pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aGVuVHJhbnNpdGlvbkVuZHMoZWwsIHR5cGUsIGNiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBsZWF2ZSAmJiBsZWF2ZShlbCwgY2IpO1xuICAgIGlmICghZXhwZWN0c0NTUyAmJiAhdXNlcldhbnRzQ29udHJvbCkge1xuICAgICAgY2IoKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gb25seSB1c2VkIGluIGRldiBtb2RlXG5mdW5jdGlvbiBjaGVja0R1cmF0aW9uICh2YWwsIG5hbWUsIHZub2RlKSB7XG4gIGlmICh0eXBlb2YgdmFsICE9PSAnbnVtYmVyJykge1xuICAgIHdhcm4oXG4gICAgICBcIjx0cmFuc2l0aW9uPiBleHBsaWNpdCBcIiArIG5hbWUgKyBcIiBkdXJhdGlvbiBpcyBub3QgYSB2YWxpZCBudW1iZXIgLSBcIiArXG4gICAgICBcImdvdCBcIiArIChKU09OLnN0cmluZ2lmeSh2YWwpKSArIFwiLlwiLFxuICAgICAgdm5vZGUuY29udGV4dFxuICAgICk7XG4gIH0gZWxzZSBpZiAoaXNOYU4odmFsKSkge1xuICAgIHdhcm4oXG4gICAgICBcIjx0cmFuc2l0aW9uPiBleHBsaWNpdCBcIiArIG5hbWUgKyBcIiBkdXJhdGlvbiBpcyBOYU4gLSBcIiArXG4gICAgICAndGhlIGR1cmF0aW9uIGV4cHJlc3Npb24gbWlnaHQgYmUgaW5jb3JyZWN0LicsXG4gICAgICB2bm9kZS5jb250ZXh0XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1ZhbGlkRHVyYXRpb24gKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHZhbClcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgYSB0cmFuc2l0aW9uIGhvb2sncyBhcmd1bWVudCBsZW5ndGguIFRoZSBob29rIG1heSBiZTpcbiAqIC0gYSBtZXJnZWQgaG9vayAoaW52b2tlcikgd2l0aCB0aGUgb3JpZ2luYWwgaW4gLmZuc1xuICogLSBhIHdyYXBwZWQgY29tcG9uZW50IG1ldGhvZCAoY2hlY2sgLl9sZW5ndGgpXG4gKiAtIGEgcGxhaW4gZnVuY3Rpb24gKC5sZW5ndGgpXG4gKi9cbmZ1bmN0aW9uIGdldEhvb2tBZ3VtZW50c0xlbmd0aCAoZm4pIHtcbiAgaWYgKCFmbikgeyByZXR1cm4gZmFsc2UgfVxuICB2YXIgaW52b2tlckZucyA9IGZuLmZucztcbiAgaWYgKGludm9rZXJGbnMpIHtcbiAgICAvLyBpbnZva2VyXG4gICAgcmV0dXJuIGdldEhvb2tBZ3VtZW50c0xlbmd0aChcbiAgICAgIEFycmF5LmlzQXJyYXkoaW52b2tlckZucylcbiAgICAgICAgPyBpbnZva2VyRm5zWzBdXG4gICAgICAgIDogaW52b2tlckZuc1xuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKGZuLl9sZW5ndGggfHwgZm4ubGVuZ3RoKSA+IDFcbiAgfVxufVxuXG5mdW5jdGlvbiBfZW50ZXIgKF8sIHZub2RlKSB7XG4gIGlmICghdm5vZGUuZGF0YS5zaG93KSB7XG4gICAgZW50ZXIodm5vZGUpO1xuICB9XG59XG5cbnZhciB0cmFuc2l0aW9uID0gaW5Ccm93c2VyID8ge1xuICBjcmVhdGU6IF9lbnRlcixcbiAgYWN0aXZhdGU6IF9lbnRlcixcbiAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUkJDEgKHZub2RlLCBybSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKCF2bm9kZS5kYXRhLnNob3cpIHtcbiAgICAgIGxlYXZlKHZub2RlLCBybSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJtKCk7XG4gICAgfVxuICB9XG59IDoge307XG5cbnZhciBwbGF0Zm9ybU1vZHVsZXMgPSBbXG4gIGF0dHJzLFxuICBrbGFzcyxcbiAgZXZlbnRzLFxuICBkb21Qcm9wcyxcbiAgc3R5bGUsXG4gIHRyYW5zaXRpb25cbl07XG5cbi8qICAqL1xuXG4vLyB0aGUgZGlyZWN0aXZlIG1vZHVsZSBzaG91bGQgYmUgYXBwbGllZCBsYXN0LCBhZnRlciBhbGxcbi8vIGJ1aWx0LWluIG1vZHVsZXMgaGF2ZSBiZWVuIGFwcGxpZWQuXG52YXIgbW9kdWxlcyA9IHBsYXRmb3JtTW9kdWxlcy5jb25jYXQoYmFzZU1vZHVsZXMpO1xuXG52YXIgcGF0Y2ggPSBjcmVhdGVQYXRjaEZ1bmN0aW9uKHsgbm9kZU9wczogbm9kZU9wcywgbW9kdWxlczogbW9kdWxlcyB9KTtcblxuLyoqXG4gKiBOb3QgdHlwZSBjaGVja2luZyB0aGlzIGZpbGUgYmVjYXVzZSBmbG93IGRvZXNuJ3QgbGlrZSBhdHRhY2hpbmdcbiAqIHByb3BlcnRpZXMgdG8gRWxlbWVudHMuXG4gKi9cblxuLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5pZiAoaXNJRTkpIHtcbiAgLy8gaHR0cDovL3d3dy5tYXR0czQxMS5jb20vcG9zdC9pbnRlcm5ldC1leHBsb3Jlci05LW9uaW5wdXQvXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdGlvbmNoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIGlmIChlbCAmJiBlbC52bW9kZWwpIHtcbiAgICAgIHRyaWdnZXIoZWwsICdpbnB1dCcpO1xuICAgIH1cbiAgfSk7XG59XG5cbnZhciBtb2RlbCQxID0ge1xuICBpbnNlcnRlZDogZnVuY3Rpb24gaW5zZXJ0ZWQgKGVsLCBiaW5kaW5nLCB2bm9kZSkge1xuICAgIGlmICh2bm9kZS50YWcgPT09ICdzZWxlY3QnKSB7XG4gICAgICB2YXIgY2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldFNlbGVjdGVkKGVsLCBiaW5kaW5nLCB2bm9kZS5jb250ZXh0KTtcbiAgICAgIH07XG4gICAgICBjYigpO1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoaXNJRSB8fCBpc0VkZ2UpIHtcbiAgICAgICAgc2V0VGltZW91dChjYiwgMCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh2bm9kZS50YWcgPT09ICd0ZXh0YXJlYScgfHwgZWwudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICBlbC5fdk1vZGlmaWVycyA9IGJpbmRpbmcubW9kaWZpZXJzO1xuICAgICAgaWYgKCFiaW5kaW5nLm1vZGlmaWVycy5sYXp5KSB7XG4gICAgICAgIGlmICghaXNBbmRyb2lkKSB7XG4gICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY29tcG9zaXRpb25zdGFydCcsIG9uQ29tcG9zaXRpb25TdGFydCk7XG4gICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY29tcG9zaXRpb25lbmQnLCBvbkNvbXBvc2l0aW9uRW5kKTtcbiAgICAgICAgfVxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKGlzSUU5KSB7XG4gICAgICAgICAgZWwudm1vZGVsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgY29tcG9uZW50VXBkYXRlZDogZnVuY3Rpb24gY29tcG9uZW50VXBkYXRlZCAoZWwsIGJpbmRpbmcsIHZub2RlKSB7XG4gICAgaWYgKHZub2RlLnRhZyA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgIHNldFNlbGVjdGVkKGVsLCBiaW5kaW5nLCB2bm9kZS5jb250ZXh0KTtcbiAgICAgIC8vIGluIGNhc2UgdGhlIG9wdGlvbnMgcmVuZGVyZWQgYnkgdi1mb3IgaGF2ZSBjaGFuZ2VkLFxuICAgICAgLy8gaXQncyBwb3NzaWJsZSB0aGF0IHRoZSB2YWx1ZSBpcyBvdXQtb2Ytc3luYyB3aXRoIHRoZSByZW5kZXJlZCBvcHRpb25zLlxuICAgICAgLy8gZGV0ZWN0IHN1Y2ggY2FzZXMgYW5kIGZpbHRlciBvdXQgdmFsdWVzIHRoYXQgbm8gbG9uZ2VyIGhhcyBhIG1hdGNoaW5nXG4gICAgICAvLyBvcHRpb24gaW4gdGhlIERPTS5cbiAgICAgIHZhciBuZWVkUmVzZXQgPSBlbC5tdWx0aXBsZVxuICAgICAgICA/IGJpbmRpbmcudmFsdWUuc29tZShmdW5jdGlvbiAodikgeyByZXR1cm4gaGFzTm9NYXRjaGluZ09wdGlvbih2LCBlbC5vcHRpb25zKTsgfSlcbiAgICAgICAgOiBiaW5kaW5nLnZhbHVlICE9PSBiaW5kaW5nLm9sZFZhbHVlICYmIGhhc05vTWF0Y2hpbmdPcHRpb24oYmluZGluZy52YWx1ZSwgZWwub3B0aW9ucyk7XG4gICAgICBpZiAobmVlZFJlc2V0KSB7XG4gICAgICAgIHRyaWdnZXIoZWwsICdjaGFuZ2UnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHNldFNlbGVjdGVkIChlbCwgYmluZGluZywgdm0pIHtcbiAgdmFyIHZhbHVlID0gYmluZGluZy52YWx1ZTtcbiAgdmFyIGlzTXVsdGlwbGUgPSBlbC5tdWx0aXBsZTtcbiAgaWYgKGlzTXVsdGlwbGUgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgXCI8c2VsZWN0IG11bHRpcGxlIHYtbW9kZWw9XFxcIlwiICsgKGJpbmRpbmcuZXhwcmVzc2lvbikgKyBcIlxcXCI+IFwiICtcbiAgICAgIFwiZXhwZWN0cyBhbiBBcnJheSB2YWx1ZSBmb3IgaXRzIGJpbmRpbmcsIGJ1dCBnb3QgXCIgKyAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSkpLFxuICAgICAgdm1cbiAgICApO1xuICAgIHJldHVyblxuICB9XG4gIHZhciBzZWxlY3RlZCwgb3B0aW9uO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IGVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgb3B0aW9uID0gZWwub3B0aW9uc1tpXTtcbiAgICBpZiAoaXNNdWx0aXBsZSkge1xuICAgICAgc2VsZWN0ZWQgPSBsb29zZUluZGV4T2YodmFsdWUsIGdldFZhbHVlKG9wdGlvbikpID4gLTE7XG4gICAgICBpZiAob3B0aW9uLnNlbGVjdGVkICE9PSBzZWxlY3RlZCkge1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGxvb3NlRXF1YWwoZ2V0VmFsdWUob3B0aW9uKSwgdmFsdWUpKSB7XG4gICAgICAgIGlmIChlbC5zZWxlY3RlZEluZGV4ICE9PSBpKSB7XG4gICAgICAgICAgZWwuc2VsZWN0ZWRJbmRleCA9IGk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmICghaXNNdWx0aXBsZSkge1xuICAgIGVsLnNlbGVjdGVkSW5kZXggPSAtMTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYXNOb01hdGNoaW5nT3B0aW9uICh2YWx1ZSwgb3B0aW9ucykge1xuICBmb3IgKHZhciBpID0gMCwgbCA9IG9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKGxvb3NlRXF1YWwoZ2V0VmFsdWUob3B0aW9uc1tpXSksIHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlIChvcHRpb24pIHtcbiAgcmV0dXJuICdfdmFsdWUnIGluIG9wdGlvblxuICAgID8gb3B0aW9uLl92YWx1ZVxuICAgIDogb3B0aW9uLnZhbHVlXG59XG5cbmZ1bmN0aW9uIG9uQ29tcG9zaXRpb25TdGFydCAoZSkge1xuICBlLnRhcmdldC5jb21wb3NpbmcgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBvbkNvbXBvc2l0aW9uRW5kIChlKSB7XG4gIGUudGFyZ2V0LmNvbXBvc2luZyA9IGZhbHNlO1xuICB0cmlnZ2VyKGUudGFyZ2V0LCAnaW5wdXQnKTtcbn1cblxuZnVuY3Rpb24gdHJpZ2dlciAoZWwsIHR5cGUpIHtcbiAgdmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpO1xuICBlLmluaXRFdmVudCh0eXBlLCB0cnVlLCB0cnVlKTtcbiAgZWwuZGlzcGF0Y2hFdmVudChlKTtcbn1cblxuLyogICovXG5cbi8vIHJlY3Vyc2l2ZWx5IHNlYXJjaCBmb3IgcG9zc2libGUgdHJhbnNpdGlvbiBkZWZpbmVkIGluc2lkZSB0aGUgY29tcG9uZW50IHJvb3RcbmZ1bmN0aW9uIGxvY2F0ZU5vZGUgKHZub2RlKSB7XG4gIHJldHVybiB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSAmJiAoIXZub2RlLmRhdGEgfHwgIXZub2RlLmRhdGEudHJhbnNpdGlvbilcbiAgICA/IGxvY2F0ZU5vZGUodm5vZGUuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlKVxuICAgIDogdm5vZGVcbn1cblxudmFyIHNob3cgPSB7XG4gIGJpbmQ6IGZ1bmN0aW9uIGJpbmQgKGVsLCByZWYsIHZub2RlKSB7XG4gICAgdmFyIHZhbHVlID0gcmVmLnZhbHVlO1xuXG4gICAgdm5vZGUgPSBsb2NhdGVOb2RlKHZub2RlKTtcbiAgICB2YXIgdHJhbnNpdGlvbiA9IHZub2RlLmRhdGEgJiYgdm5vZGUuZGF0YS50cmFuc2l0aW9uO1xuICAgIHZhciBvcmlnaW5hbERpc3BsYXkgPSBlbC5fX3ZPcmlnaW5hbERpc3BsYXkgPVxuICAgICAgZWwuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnID8gJycgOiBlbC5zdHlsZS5kaXNwbGF5O1xuICAgIGlmICh2YWx1ZSAmJiB0cmFuc2l0aW9uICYmICFpc0lFOSkge1xuICAgICAgdm5vZGUuZGF0YS5zaG93ID0gdHJ1ZTtcbiAgICAgIGVudGVyKHZub2RlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBvcmlnaW5hbERpc3BsYXk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IHZhbHVlID8gb3JpZ2luYWxEaXNwbGF5IDogJ25vbmUnO1xuICAgIH1cbiAgfSxcblxuICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSAoZWwsIHJlZiwgdm5vZGUpIHtcbiAgICB2YXIgdmFsdWUgPSByZWYudmFsdWU7XG4gICAgdmFyIG9sZFZhbHVlID0gcmVmLm9sZFZhbHVlO1xuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKHZhbHVlID09PSBvbGRWYWx1ZSkgeyByZXR1cm4gfVxuICAgIHZub2RlID0gbG9jYXRlTm9kZSh2bm9kZSk7XG4gICAgdmFyIHRyYW5zaXRpb24gPSB2bm9kZS5kYXRhICYmIHZub2RlLmRhdGEudHJhbnNpdGlvbjtcbiAgICBpZiAodHJhbnNpdGlvbiAmJiAhaXNJRTkpIHtcbiAgICAgIHZub2RlLmRhdGEuc2hvdyA9IHRydWU7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgZW50ZXIodm5vZGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gZWwuX192T3JpZ2luYWxEaXNwbGF5O1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxlYXZlKHZub2RlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSB2YWx1ZSA/IGVsLl9fdk9yaWdpbmFsRGlzcGxheSA6ICdub25lJztcbiAgICB9XG4gIH0sXG5cbiAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQgKFxuICAgIGVsLFxuICAgIGJpbmRpbmcsXG4gICAgdm5vZGUsXG4gICAgb2xkVm5vZGUsXG4gICAgaXNEZXN0cm95XG4gICkge1xuICAgIGlmICghaXNEZXN0cm95KSB7XG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gZWwuX192T3JpZ2luYWxEaXNwbGF5O1xuICAgIH1cbiAgfVxufTtcblxudmFyIHBsYXRmb3JtRGlyZWN0aXZlcyA9IHtcbiAgbW9kZWw6IG1vZGVsJDEsXG4gIHNob3c6IHNob3dcbn07XG5cbi8qICAqL1xuXG4vLyBQcm92aWRlcyB0cmFuc2l0aW9uIHN1cHBvcnQgZm9yIGEgc2luZ2xlIGVsZW1lbnQvY29tcG9uZW50LlxuLy8gc3VwcG9ydHMgdHJhbnNpdGlvbiBtb2RlIChvdXQtaW4gLyBpbi1vdXQpXG5cbnZhciB0cmFuc2l0aW9uUHJvcHMgPSB7XG4gIG5hbWU6IFN0cmluZyxcbiAgYXBwZWFyOiBCb29sZWFuLFxuICBjc3M6IEJvb2xlYW4sXG4gIG1vZGU6IFN0cmluZyxcbiAgdHlwZTogU3RyaW5nLFxuICBlbnRlckNsYXNzOiBTdHJpbmcsXG4gIGxlYXZlQ2xhc3M6IFN0cmluZyxcbiAgZW50ZXJUb0NsYXNzOiBTdHJpbmcsXG4gIGxlYXZlVG9DbGFzczogU3RyaW5nLFxuICBlbnRlckFjdGl2ZUNsYXNzOiBTdHJpbmcsXG4gIGxlYXZlQWN0aXZlQ2xhc3M6IFN0cmluZyxcbiAgYXBwZWFyQ2xhc3M6IFN0cmluZyxcbiAgYXBwZWFyQWN0aXZlQ2xhc3M6IFN0cmluZyxcbiAgYXBwZWFyVG9DbGFzczogU3RyaW5nLFxuICBkdXJhdGlvbjogW051bWJlciwgU3RyaW5nLCBPYmplY3RdXG59O1xuXG4vLyBpbiBjYXNlIHRoZSBjaGlsZCBpcyBhbHNvIGFuIGFic3RyYWN0IGNvbXBvbmVudCwgZS5nLiA8a2VlcC1hbGl2ZT5cbi8vIHdlIHdhbnQgdG8gcmVjdXJzaXZlbHkgcmV0cmlldmUgdGhlIHJlYWwgY29tcG9uZW50IHRvIGJlIHJlbmRlcmVkXG5mdW5jdGlvbiBnZXRSZWFsQ2hpbGQgKHZub2RlKSB7XG4gIHZhciBjb21wT3B0aW9ucyA9IHZub2RlICYmIHZub2RlLmNvbXBvbmVudE9wdGlvbnM7XG4gIGlmIChjb21wT3B0aW9ucyAmJiBjb21wT3B0aW9ucy5DdG9yLm9wdGlvbnMuYWJzdHJhY3QpIHtcbiAgICByZXR1cm4gZ2V0UmVhbENoaWxkKGdldEZpcnN0Q29tcG9uZW50Q2hpbGQoY29tcE9wdGlvbnMuY2hpbGRyZW4pKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB2bm9kZVxuICB9XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RUcmFuc2l0aW9uRGF0YSAoY29tcCkge1xuICB2YXIgZGF0YSA9IHt9O1xuICB2YXIgb3B0aW9ucyA9IGNvbXAuJG9wdGlvbnM7XG4gIC8vIHByb3BzXG4gIGZvciAodmFyIGtleSBpbiBvcHRpb25zLnByb3BzRGF0YSkge1xuICAgIGRhdGFba2V5XSA9IGNvbXBba2V5XTtcbiAgfVxuICAvLyBldmVudHMuXG4gIC8vIGV4dHJhY3QgbGlzdGVuZXJzIGFuZCBwYXNzIHRoZW0gZGlyZWN0bHkgdG8gdGhlIHRyYW5zaXRpb24gbWV0aG9kc1xuICB2YXIgbGlzdGVuZXJzID0gb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzO1xuICBmb3IgKHZhciBrZXkkMSBpbiBsaXN0ZW5lcnMpIHtcbiAgICBkYXRhW2NhbWVsaXplKGtleSQxKV0gPSBsaXN0ZW5lcnNba2V5JDFdO1xuICB9XG4gIHJldHVybiBkYXRhXG59XG5cbmZ1bmN0aW9uIHBsYWNlaG9sZGVyIChoLCByYXdDaGlsZCkge1xuICByZXR1cm4gL1xcZC1rZWVwLWFsaXZlJC8udGVzdChyYXdDaGlsZC50YWcpXG4gICAgPyBoKCdrZWVwLWFsaXZlJylcbiAgICA6IG51bGxcbn1cblxuZnVuY3Rpb24gaGFzUGFyZW50VHJhbnNpdGlvbiAodm5vZGUpIHtcbiAgd2hpbGUgKCh2bm9kZSA9IHZub2RlLnBhcmVudCkpIHtcbiAgICBpZiAodm5vZGUuZGF0YS50cmFuc2l0aW9uKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpc1NhbWVDaGlsZCAoY2hpbGQsIG9sZENoaWxkKSB7XG4gIHJldHVybiBvbGRDaGlsZC5rZXkgPT09IGNoaWxkLmtleSAmJiBvbGRDaGlsZC50YWcgPT09IGNoaWxkLnRhZ1xufVxuXG52YXIgVHJhbnNpdGlvbiA9IHtcbiAgbmFtZTogJ3RyYW5zaXRpb24nLFxuICBwcm9wczogdHJhbnNpdGlvblByb3BzLFxuICBhYnN0cmFjdDogdHJ1ZSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlciAoaCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy4kc2xvdHMuZGVmYXVsdDtcbiAgICBpZiAoIWNoaWxkcmVuKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBmaWx0ZXIgb3V0IHRleHQgbm9kZXMgKHBvc3NpYmxlIHdoaXRlc3BhY2VzKVxuICAgIGNoaWxkcmVuID0gY2hpbGRyZW4uZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLnRhZzsgfSk7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIHdhcm4gbXVsdGlwbGUgZWxlbWVudHNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjaGlsZHJlbi5sZW5ndGggPiAxKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAnPHRyYW5zaXRpb24+IGNhbiBvbmx5IGJlIHVzZWQgb24gYSBzaW5nbGUgZWxlbWVudC4gVXNlICcgK1xuICAgICAgICAnPHRyYW5zaXRpb24tZ3JvdXA+IGZvciBsaXN0cy4nLFxuICAgICAgICB0aGlzLiRwYXJlbnRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdmFyIG1vZGUgPSB0aGlzLm1vZGU7XG5cbiAgICAvLyB3YXJuIGludmFsaWQgbW9kZVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAgIG1vZGUgJiYgbW9kZSAhPT0gJ2luLW91dCcgJiYgbW9kZSAhPT0gJ291dC1pbicpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdpbnZhbGlkIDx0cmFuc2l0aW9uPiBtb2RlOiAnICsgbW9kZSxcbiAgICAgICAgdGhpcy4kcGFyZW50XG4gICAgICApO1xuICAgIH1cblxuICAgIHZhciByYXdDaGlsZCA9IGNoaWxkcmVuWzBdO1xuXG4gICAgLy8gaWYgdGhpcyBpcyBhIGNvbXBvbmVudCByb290IG5vZGUgYW5kIHRoZSBjb21wb25lbnQnc1xuICAgIC8vIHBhcmVudCBjb250YWluZXIgbm9kZSBhbHNvIGhhcyB0cmFuc2l0aW9uLCBza2lwLlxuICAgIGlmIChoYXNQYXJlbnRUcmFuc2l0aW9uKHRoaXMuJHZub2RlKSkge1xuICAgICAgcmV0dXJuIHJhd0NoaWxkXG4gICAgfVxuXG4gICAgLy8gYXBwbHkgdHJhbnNpdGlvbiBkYXRhIHRvIGNoaWxkXG4gICAgLy8gdXNlIGdldFJlYWxDaGlsZCgpIHRvIGlnbm9yZSBhYnN0cmFjdCBjb21wb25lbnRzIGUuZy4ga2VlcC1hbGl2ZVxuICAgIHZhciBjaGlsZCA9IGdldFJlYWxDaGlsZChyYXdDaGlsZCk7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFjaGlsZCkge1xuICAgICAgcmV0dXJuIHJhd0NoaWxkXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2xlYXZpbmcpIHtcbiAgICAgIHJldHVybiBwbGFjZWhvbGRlcihoLCByYXdDaGlsZClcbiAgICB9XG5cbiAgICAvLyBlbnN1cmUgYSBrZXkgdGhhdCBpcyB1bmlxdWUgdG8gdGhlIHZub2RlIHR5cGUgYW5kIHRvIHRoaXMgdHJhbnNpdGlvblxuICAgIC8vIGNvbXBvbmVudCBpbnN0YW5jZS4gVGhpcyBrZXkgd2lsbCBiZSB1c2VkIHRvIHJlbW92ZSBwZW5kaW5nIGxlYXZpbmcgbm9kZXNcbiAgICAvLyBkdXJpbmcgZW50ZXJpbmcuXG4gICAgdmFyIGlkID0gXCJfX3RyYW5zaXRpb24tXCIgKyAodGhpcy5fdWlkKSArIFwiLVwiO1xuICAgIGNoaWxkLmtleSA9IGNoaWxkLmtleSA9PSBudWxsXG4gICAgICA/IGlkICsgY2hpbGQudGFnXG4gICAgICA6IGlzUHJpbWl0aXZlKGNoaWxkLmtleSlcbiAgICAgICAgPyAoU3RyaW5nKGNoaWxkLmtleSkuaW5kZXhPZihpZCkgPT09IDAgPyBjaGlsZC5rZXkgOiBpZCArIGNoaWxkLmtleSlcbiAgICAgICAgOiBjaGlsZC5rZXk7XG5cbiAgICB2YXIgZGF0YSA9IChjaGlsZC5kYXRhIHx8IChjaGlsZC5kYXRhID0ge30pKS50cmFuc2l0aW9uID0gZXh0cmFjdFRyYW5zaXRpb25EYXRhKHRoaXMpO1xuICAgIHZhciBvbGRSYXdDaGlsZCA9IHRoaXMuX3Zub2RlO1xuICAgIHZhciBvbGRDaGlsZCA9IGdldFJlYWxDaGlsZChvbGRSYXdDaGlsZCk7XG5cbiAgICAvLyBtYXJrIHYtc2hvd1xuICAgIC8vIHNvIHRoYXQgdGhlIHRyYW5zaXRpb24gbW9kdWxlIGNhbiBoYW5kIG92ZXIgdGhlIGNvbnRyb2wgdG8gdGhlIGRpcmVjdGl2ZVxuICAgIGlmIChjaGlsZC5kYXRhLmRpcmVjdGl2ZXMgJiYgY2hpbGQuZGF0YS5kaXJlY3RpdmVzLnNvbWUoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQubmFtZSA9PT0gJ3Nob3cnOyB9KSkge1xuICAgICAgY2hpbGQuZGF0YS5zaG93ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAob2xkQ2hpbGQgJiYgb2xkQ2hpbGQuZGF0YSAmJiAhaXNTYW1lQ2hpbGQoY2hpbGQsIG9sZENoaWxkKSkge1xuICAgICAgLy8gcmVwbGFjZSBvbGQgY2hpbGQgdHJhbnNpdGlvbiBkYXRhIHdpdGggZnJlc2ggb25lXG4gICAgICAvLyBpbXBvcnRhbnQgZm9yIGR5bmFtaWMgdHJhbnNpdGlvbnMhXG4gICAgICB2YXIgb2xkRGF0YSA9IG9sZENoaWxkICYmIChvbGRDaGlsZC5kYXRhLnRyYW5zaXRpb24gPSBleHRlbmQoe30sIGRhdGEpKTtcbiAgICAgIC8vIGhhbmRsZSB0cmFuc2l0aW9uIG1vZGVcbiAgICAgIGlmIChtb2RlID09PSAnb3V0LWluJykge1xuICAgICAgICAvLyByZXR1cm4gcGxhY2Vob2xkZXIgbm9kZSBhbmQgcXVldWUgdXBkYXRlIHdoZW4gbGVhdmUgZmluaXNoZXNcbiAgICAgICAgdGhpcy5fbGVhdmluZyA9IHRydWU7XG4gICAgICAgIG1lcmdlVk5vZGVIb29rKG9sZERhdGEsICdhZnRlckxlYXZlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMkMS5fbGVhdmluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMkMS4kZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwbGFjZWhvbGRlcihoLCByYXdDaGlsZClcbiAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ2luLW91dCcpIHtcbiAgICAgICAgdmFyIGRlbGF5ZWRMZWF2ZTtcbiAgICAgICAgdmFyIHBlcmZvcm1MZWF2ZSA9IGZ1bmN0aW9uICgpIHsgZGVsYXllZExlYXZlKCk7IH07XG4gICAgICAgIG1lcmdlVk5vZGVIb29rKGRhdGEsICdhZnRlckVudGVyJywgcGVyZm9ybUxlYXZlKTtcbiAgICAgICAgbWVyZ2VWTm9kZUhvb2soZGF0YSwgJ2VudGVyQ2FuY2VsbGVkJywgcGVyZm9ybUxlYXZlKTtcbiAgICAgICAgbWVyZ2VWTm9kZUhvb2sob2xkRGF0YSwgJ2RlbGF5TGVhdmUnLCBmdW5jdGlvbiAobGVhdmUpIHsgZGVsYXllZExlYXZlID0gbGVhdmU7IH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByYXdDaGlsZFxuICB9XG59O1xuXG4vKiAgKi9cblxuLy8gUHJvdmlkZXMgdHJhbnNpdGlvbiBzdXBwb3J0IGZvciBsaXN0IGl0ZW1zLlxuLy8gc3VwcG9ydHMgbW92ZSB0cmFuc2l0aW9ucyB1c2luZyB0aGUgRkxJUCB0ZWNobmlxdWUuXG5cbi8vIEJlY2F1c2UgdGhlIHZkb20ncyBjaGlsZHJlbiB1cGRhdGUgYWxnb3JpdGhtIGlzIFwidW5zdGFibGVcIiAtIGkuZS5cbi8vIGl0IGRvZXNuJ3QgZ3VhcmFudGVlIHRoZSByZWxhdGl2ZSBwb3NpdGlvbmluZyBvZiByZW1vdmVkIGVsZW1lbnRzLFxuLy8gd2UgZm9yY2UgdHJhbnNpdGlvbi1ncm91cCB0byB1cGRhdGUgaXRzIGNoaWxkcmVuIGludG8gdHdvIHBhc3Nlczpcbi8vIGluIHRoZSBmaXJzdCBwYXNzLCB3ZSByZW1vdmUgYWxsIG5vZGVzIHRoYXQgbmVlZCB0byBiZSByZW1vdmVkLFxuLy8gdHJpZ2dlcmluZyB0aGVpciBsZWF2aW5nIHRyYW5zaXRpb247IGluIHRoZSBzZWNvbmQgcGFzcywgd2UgaW5zZXJ0L21vdmVcbi8vIGludG8gdGhlIGZpbmFsIGRpc2lyZWQgc3RhdGUuIFRoaXMgd2F5IGluIHRoZSBzZWNvbmQgcGFzcyByZW1vdmVkXG4vLyBub2RlcyB3aWxsIHJlbWFpbiB3aGVyZSB0aGV5IHNob3VsZCBiZS5cblxudmFyIHByb3BzID0gZXh0ZW5kKHtcbiAgdGFnOiBTdHJpbmcsXG4gIG1vdmVDbGFzczogU3RyaW5nXG59LCB0cmFuc2l0aW9uUHJvcHMpO1xuXG5kZWxldGUgcHJvcHMubW9kZTtcblxudmFyIFRyYW5zaXRpb25Hcm91cCA9IHtcbiAgcHJvcHM6IHByb3BzLFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyIChoKSB7XG4gICAgdmFyIHRhZyA9IHRoaXMudGFnIHx8IHRoaXMuJHZub2RlLmRhdGEudGFnIHx8ICdzcGFuJztcbiAgICB2YXIgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB2YXIgcHJldkNoaWxkcmVuID0gdGhpcy5wcmV2Q2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuO1xuICAgIHZhciByYXdDaGlsZHJlbiA9IHRoaXMuJHNsb3RzLmRlZmF1bHQgfHwgW107XG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIHZhciB0cmFuc2l0aW9uRGF0YSA9IGV4dHJhY3RUcmFuc2l0aW9uRGF0YSh0aGlzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmF3Q2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjID0gcmF3Q2hpbGRyZW5baV07XG4gICAgICBpZiAoYy50YWcpIHtcbiAgICAgICAgaWYgKGMua2V5ICE9IG51bGwgJiYgU3RyaW5nKGMua2V5KS5pbmRleE9mKCdfX3ZsaXN0JykgIT09IDApIHtcbiAgICAgICAgICBjaGlsZHJlbi5wdXNoKGMpO1xuICAgICAgICAgIG1hcFtjLmtleV0gPSBjXG4gICAgICAgICAgOyhjLmRhdGEgfHwgKGMuZGF0YSA9IHt9KSkudHJhbnNpdGlvbiA9IHRyYW5zaXRpb25EYXRhO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB2YXIgb3B0cyA9IGMuY29tcG9uZW50T3B0aW9ucztcbiAgICAgICAgICB2YXIgbmFtZSA9IG9wdHMgPyAob3B0cy5DdG9yLm9wdGlvbnMubmFtZSB8fCBvcHRzLnRhZyB8fCAnJykgOiBjLnRhZztcbiAgICAgICAgICB3YXJuKChcIjx0cmFuc2l0aW9uLWdyb3VwPiBjaGlsZHJlbiBtdXN0IGJlIGtleWVkOiA8XCIgKyBuYW1lICsgXCI+XCIpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcmV2Q2hpbGRyZW4pIHtcbiAgICAgIHZhciBrZXB0ID0gW107XG4gICAgICB2YXIgcmVtb3ZlZCA9IFtdO1xuICAgICAgZm9yICh2YXIgaSQxID0gMDsgaSQxIDwgcHJldkNoaWxkcmVuLmxlbmd0aDsgaSQxKyspIHtcbiAgICAgICAgdmFyIGMkMSA9IHByZXZDaGlsZHJlbltpJDFdO1xuICAgICAgICBjJDEuZGF0YS50cmFuc2l0aW9uID0gdHJhbnNpdGlvbkRhdGE7XG4gICAgICAgIGMkMS5kYXRhLnBvcyA9IGMkMS5lbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGlmIChtYXBbYyQxLmtleV0pIHtcbiAgICAgICAgICBrZXB0LnB1c2goYyQxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZW1vdmVkLnB1c2goYyQxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5rZXB0ID0gaCh0YWcsIG51bGwsIGtlcHQpO1xuICAgICAgdGhpcy5yZW1vdmVkID0gcmVtb3ZlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gaCh0YWcsIG51bGwsIGNoaWxkcmVuKVxuICB9LFxuXG4gIGJlZm9yZVVwZGF0ZTogZnVuY3Rpb24gYmVmb3JlVXBkYXRlICgpIHtcbiAgICAvLyBmb3JjZSByZW1vdmluZyBwYXNzXG4gICAgdGhpcy5fX3BhdGNoX18oXG4gICAgICB0aGlzLl92bm9kZSxcbiAgICAgIHRoaXMua2VwdCxcbiAgICAgIGZhbHNlLCAvLyBoeWRyYXRpbmdcbiAgICAgIHRydWUgLy8gcmVtb3ZlT25seSAoIWltcG9ydGFudCwgYXZvaWRzIHVubmVjZXNzYXJ5IG1vdmVzKVxuICAgICk7XG4gICAgdGhpcy5fdm5vZGUgPSB0aGlzLmtlcHQ7XG4gIH0sXG5cbiAgdXBkYXRlZDogZnVuY3Rpb24gdXBkYXRlZCAoKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy5wcmV2Q2hpbGRyZW47XG4gICAgdmFyIG1vdmVDbGFzcyA9IHRoaXMubW92ZUNsYXNzIHx8ICgodGhpcy5uYW1lIHx8ICd2JykgKyAnLW1vdmUnKTtcbiAgICBpZiAoIWNoaWxkcmVuLmxlbmd0aCB8fCAhdGhpcy5oYXNNb3ZlKGNoaWxkcmVuWzBdLmVsbSwgbW92ZUNsYXNzKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gd2UgZGl2aWRlIHRoZSB3b3JrIGludG8gdGhyZWUgbG9vcHMgdG8gYXZvaWQgbWl4aW5nIERPTSByZWFkcyBhbmQgd3JpdGVzXG4gICAgLy8gaW4gZWFjaCBpdGVyYXRpb24gLSB3aGljaCBoZWxwcyBwcmV2ZW50IGxheW91dCB0aHJhc2hpbmcuXG4gICAgY2hpbGRyZW4uZm9yRWFjaChjYWxsUGVuZGluZ0Nicyk7XG4gICAgY2hpbGRyZW4uZm9yRWFjaChyZWNvcmRQb3NpdGlvbik7XG4gICAgY2hpbGRyZW4uZm9yRWFjaChhcHBseVRyYW5zbGF0aW9uKTtcblxuICAgIC8vIGZvcmNlIHJlZmxvdyB0byBwdXQgZXZlcnl0aGluZyBpbiBwb3NpdGlvblxuICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICB2YXIgZiA9IGJvZHkub2Zmc2V0SGVpZ2h0OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICBpZiAoYy5kYXRhLm1vdmVkKSB7XG4gICAgICAgIHZhciBlbCA9IGMuZWxtO1xuICAgICAgICB2YXIgcyA9IGVsLnN0eWxlO1xuICAgICAgICBhZGRUcmFuc2l0aW9uQ2xhc3MoZWwsIG1vdmVDbGFzcyk7XG4gICAgICAgIHMudHJhbnNmb3JtID0gcy5XZWJraXRUcmFuc2Zvcm0gPSBzLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcnO1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHRyYW5zaXRpb25FbmRFdmVudCwgZWwuX21vdmVDYiA9IGZ1bmN0aW9uIGNiIChlKSB7XG4gICAgICAgICAgaWYgKCFlIHx8IC90cmFuc2Zvcm0kLy50ZXN0KGUucHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0cmFuc2l0aW9uRW5kRXZlbnQsIGNiKTtcbiAgICAgICAgICAgIGVsLl9tb3ZlQ2IgPSBudWxsO1xuICAgICAgICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBtb3ZlQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGhhc01vdmU6IGZ1bmN0aW9uIGhhc01vdmUgKGVsLCBtb3ZlQ2xhc3MpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKCFoYXNUcmFuc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2hhc01vdmUgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFzTW92ZVxuICAgICAgfVxuICAgICAgLy8gRGV0ZWN0IHdoZXRoZXIgYW4gZWxlbWVudCB3aXRoIHRoZSBtb3ZlIGNsYXNzIGFwcGxpZWQgaGFzXG4gICAgICAvLyBDU1MgdHJhbnNpdGlvbnMuIFNpbmNlIHRoZSBlbGVtZW50IG1heSBiZSBpbnNpZGUgYW4gZW50ZXJpbmdcbiAgICAgIC8vIHRyYW5zaXRpb24gYXQgdGhpcyB2ZXJ5IG1vbWVudCwgd2UgbWFrZSBhIGNsb25lIG9mIGl0IGFuZCByZW1vdmVcbiAgICAgIC8vIGFsbCBvdGhlciB0cmFuc2l0aW9uIGNsYXNzZXMgYXBwbGllZCB0byBlbnN1cmUgb25seSB0aGUgbW92ZSBjbGFzc1xuICAgICAgLy8gaXMgYXBwbGllZC5cbiAgICAgIHZhciBjbG9uZSA9IGVsLmNsb25lTm9kZSgpO1xuICAgICAgaWYgKGVsLl90cmFuc2l0aW9uQ2xhc3Nlcykge1xuICAgICAgICBlbC5fdHJhbnNpdGlvbkNsYXNzZXMuZm9yRWFjaChmdW5jdGlvbiAoY2xzKSB7IHJlbW92ZUNsYXNzKGNsb25lLCBjbHMpOyB9KTtcbiAgICAgIH1cbiAgICAgIGFkZENsYXNzKGNsb25lLCBtb3ZlQ2xhc3MpO1xuICAgICAgY2xvbmUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRoaXMuJGVsLmFwcGVuZENoaWxkKGNsb25lKTtcbiAgICAgIHZhciBpbmZvID0gZ2V0VHJhbnNpdGlvbkluZm8oY2xvbmUpO1xuICAgICAgdGhpcy4kZWwucmVtb3ZlQ2hpbGQoY2xvbmUpO1xuICAgICAgcmV0dXJuICh0aGlzLl9oYXNNb3ZlID0gaW5mby5oYXNUcmFuc2Zvcm0pXG4gICAgfVxuICB9XG59O1xuXG5mdW5jdGlvbiBjYWxsUGVuZGluZ0NicyAoYykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGMuZWxtLl9tb3ZlQ2IpIHtcbiAgICBjLmVsbS5fbW92ZUNiKCk7XG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChjLmVsbS5fZW50ZXJDYikge1xuICAgIGMuZWxtLl9lbnRlckNiKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVjb3JkUG9zaXRpb24gKGMpIHtcbiAgYy5kYXRhLm5ld1BvcyA9IGMuZWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xufVxuXG5mdW5jdGlvbiBhcHBseVRyYW5zbGF0aW9uIChjKSB7XG4gIHZhciBvbGRQb3MgPSBjLmRhdGEucG9zO1xuICB2YXIgbmV3UG9zID0gYy5kYXRhLm5ld1BvcztcbiAgdmFyIGR4ID0gb2xkUG9zLmxlZnQgLSBuZXdQb3MubGVmdDtcbiAgdmFyIGR5ID0gb2xkUG9zLnRvcCAtIG5ld1Bvcy50b3A7XG4gIGlmIChkeCB8fCBkeSkge1xuICAgIGMuZGF0YS5tb3ZlZCA9IHRydWU7XG4gICAgdmFyIHMgPSBjLmVsbS5zdHlsZTtcbiAgICBzLnRyYW5zZm9ybSA9IHMuV2Via2l0VHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoXCIgKyBkeCArIFwicHgsXCIgKyBkeSArIFwicHgpXCI7XG4gICAgcy50cmFuc2l0aW9uRHVyYXRpb24gPSAnMHMnO1xuICB9XG59XG5cbnZhciBwbGF0Zm9ybUNvbXBvbmVudHMgPSB7XG4gIFRyYW5zaXRpb246IFRyYW5zaXRpb24sXG4gIFRyYW5zaXRpb25Hcm91cDogVHJhbnNpdGlvbkdyb3VwXG59O1xuXG4vKiAgKi9cblxuLy8gaW5zdGFsbCBwbGF0Zm9ybSBzcGVjaWZpYyB1dGlsc1xuVnVlJDIuY29uZmlnLm11c3RVc2VQcm9wID0gbXVzdFVzZVByb3A7XG5WdWUkMi5jb25maWcuaXNSZXNlcnZlZFRhZyA9IGlzUmVzZXJ2ZWRUYWc7XG5WdWUkMi5jb25maWcuZ2V0VGFnTmFtZXNwYWNlID0gZ2V0VGFnTmFtZXNwYWNlO1xuVnVlJDIuY29uZmlnLmlzVW5rbm93bkVsZW1lbnQgPSBpc1Vua25vd25FbGVtZW50O1xuXG4vLyBpbnN0YWxsIHBsYXRmb3JtIHJ1bnRpbWUgZGlyZWN0aXZlcyAmIGNvbXBvbmVudHNcbmV4dGVuZChWdWUkMi5vcHRpb25zLmRpcmVjdGl2ZXMsIHBsYXRmb3JtRGlyZWN0aXZlcyk7XG5leHRlbmQoVnVlJDIub3B0aW9ucy5jb21wb25lbnRzLCBwbGF0Zm9ybUNvbXBvbmVudHMpO1xuXG4vLyBpbnN0YWxsIHBsYXRmb3JtIHBhdGNoIGZ1bmN0aW9uXG5WdWUkMi5wcm90b3R5cGUuX19wYXRjaF9fID0gaW5Ccm93c2VyID8gcGF0Y2ggOiBub29wO1xuXG4vLyBwdWJsaWMgbW91bnQgbWV0aG9kXG5WdWUkMi5wcm90b3R5cGUuJG1vdW50ID0gZnVuY3Rpb24gKFxuICBlbCxcbiAgaHlkcmF0aW5nXG4pIHtcbiAgZWwgPSBlbCAmJiBpbkJyb3dzZXIgPyBxdWVyeShlbCkgOiB1bmRlZmluZWQ7XG4gIHJldHVybiBtb3VudENvbXBvbmVudCh0aGlzLCBlbCwgaHlkcmF0aW5nKVxufTtcblxuLy8gZGV2dG9vbHMgZ2xvYmFsIGhvb2tcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgaWYgKGNvbmZpZy5kZXZ0b29scykge1xuICAgIGlmIChkZXZ0b29scykge1xuICAgICAgZGV2dG9vbHMuZW1pdCgnaW5pdCcsIFZ1ZSQyKTtcbiAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaXNDaHJvbWUpIHtcbiAgICAgIGNvbnNvbGVbY29uc29sZS5pbmZvID8gJ2luZm8nIDogJ2xvZyddKFxuICAgICAgICAnRG93bmxvYWQgdGhlIFZ1ZSBEZXZ0b29scyBleHRlbnNpb24gZm9yIGEgYmV0dGVyIGRldmVsb3BtZW50IGV4cGVyaWVuY2U6XFxuJyArXG4gICAgICAgICdodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdnVlLWRldnRvb2xzJ1xuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAgIGNvbmZpZy5wcm9kdWN0aW9uVGlwICE9PSBmYWxzZSAmJlxuICAgICAgaW5Ccm93c2VyICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnNvbGVbY29uc29sZS5pbmZvID8gJ2luZm8nIDogJ2xvZyddKFxuICAgICAgXCJZb3UgYXJlIHJ1bm5pbmcgVnVlIGluIGRldmVsb3BtZW50IG1vZGUuXFxuXCIgK1xuICAgICAgXCJNYWtlIHN1cmUgdG8gdHVybiBvbiBwcm9kdWN0aW9uIG1vZGUgd2hlbiBkZXBsb3lpbmcgZm9yIHByb2R1Y3Rpb24uXFxuXCIgK1xuICAgICAgXCJTZWUgbW9yZSB0aXBzIGF0IGh0dHBzOi8vdnVlanMub3JnL2d1aWRlL2RlcGxveW1lbnQuaHRtbFwiXG4gICAgKTtcbiAgfVxufSwgMCk7XG5cbmV4cG9ydCBkZWZhdWx0IFZ1ZSQyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi92dWUvZGlzdC92dWUucnVudGltZS5lc20uanMiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgbnVsbCxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZGU2MWFhYzZcXFwiLFxcXCJwcmVzZXJ2ZVdoaXRlc3BhY2VcXFwiOmZhbHNlfSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQXBwLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvdG9tYWovY29kZS9qb3ViZWwvY29udGVudC10eXBlcy9oNXAtZmVlZGJhY2svc3JjL3NjcmlwdHMvQXBwLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIEFwcC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZGU2MWFhYzZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1kZTYxYWFjNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2NyaXB0cy9BcHAudnVlXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgcmF3U2NyaXB0RXhwb3J0cyxcbiAgY29tcGlsZWRUZW1wbGF0ZSxcbiAgc2NvcGVJZCxcbiAgY3NzTW9kdWxlc1xuKSB7XG4gIHZhciBlc01vZHVsZVxuICB2YXIgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzIHx8IHt9XG5cbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxuICB2YXIgdHlwZSA9IHR5cGVvZiByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlc01vZHVsZSA9IHJhd1NjcmlwdEV4cG9ydHNcbiAgICBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIH1cblxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKGNvbXBpbGVkVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZuc1xuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZFxuICB9XG5cbiAgLy8gaW5qZWN0IGNzc01vZHVsZXNcbiAgaWYgKGNzc01vZHVsZXMpIHtcbiAgICB2YXIgY29tcHV0ZWQgPSBPYmplY3QuY3JlYXRlKG9wdGlvbnMuY29tcHV0ZWQgfHwgbnVsbClcbiAgICBPYmplY3Qua2V5cyhjc3NNb2R1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtb2R1bGUgPSBjc3NNb2R1bGVzW2tleV1cbiAgICAgIGNvbXB1dGVkW2tleV0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBtb2R1bGUgfVxuICAgIH0pXG4gICAgb3B0aW9ucy5jb21wdXRlZCA9IGNvbXB1dGVkXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVzTW9kdWxlOiBlc01vZHVsZSxcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImg1cC1mZWVkYmFja1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZlZWRiYWNrLXRpdGxlXCIsXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwiaW5uZXJIVE1MXCI6IF92bS5fcyhfdm0ubWVzc2FnZSlcbiAgICB9XG4gIH0pLCBfYygndWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmVlZGJhY2stc2NvcmUtc2VsZWN0b3JcIlxuICB9LCBfdm0uX2woKF92bS5zY29yZXMpLCBmdW5jdGlvbihzY29yZSkge1xuICAgIHJldHVybiBfYygnbGknLCBbX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImZlZWRiYWNrLXNjb3JlXCIsXG4gICAgICBjbGFzczogc2NvcmUuY2xzXG4gICAgfSwgW19jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJmZWVkYmFjay1zY29yZS10aXRsZVwiXG4gICAgfSwgW192bS5fdihfdm0uX3Moc2NvcmUudGl0bGUpKV0pXSldKVxuICB9KSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1kZTYxYWFjNlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz97XCJpZFwiOlwiZGF0YS12LWRlNjFhYWM2XCIsXCJwcmVzZXJ2ZVdoaXRlc3BhY2VcIjpmYWxzZX0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9zY3JpcHRzL0FwcC52dWVcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vc3JjL3N0eWxlcy9tYWluLnNjc3MnKTtcblxuLy8gTG9hZCBsaWJyYXJ5XG5INVAuRmVlZGJhY2sgPSByZXF1aXJlKCcuLi9zY3JpcHRzL2ZlZWRiYWNrJykuZGVmYXVsdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW50cmllcy9kaXN0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==