/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);

function _regeneratorRuntime() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) {
            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
          }

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./source/node/Bridge/ConfigTypes.js":
/*!*******************************************!*\
  !*** ./source/node/Bridge/ConfigTypes.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SupportContentType = exports.FileType = void 0;
var FileType;

(function (FileType) {
  FileType["Audio"] = "audio/*";
  FileType["Video"] = "video/*";
  FileType["HTML"] = "text/html";
  FileType["Txt"] = "text/plain";
  FileType["Image"] = "image/*";
  FileType["Csv"] = ".csv";
  FileType["Pdf"] = "application/pdf";
  FileType["Word"] = "application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/msword\uFF0Capplication/vnd.openxmlformats-officedocument.wordprocessingml.document";
  FileType["All"] = "*";
})(FileType = exports.FileType || (exports.FileType = {}));

var SupportContentType;

(function (SupportContentType) {
  SupportContentType["JSON"] = "application/json";
  SupportContentType["TEXT"] = "text/plain";
})(SupportContentType = exports.SupportContentType || (exports.SupportContentType = {})); // export interface BasePlatformBridgeAble extends PlatformBridgeAble { }
// export interface WebBridgeAble extends BasePlatformBridgeAble { }
// export interface NodejsBridgeAble extends BasePlatformBridgeAble { }
// export interface MobilePlatformBridgeAble extends PlatformBridgeAble { }
// export interface MobileWebBridgeAble extends MobilePlatformBridgeAble { }
// export interface MobileNodejsBridgeAble extends MobilePlatformBridgeAble { }

/***/ }),

/***/ "./source/node/Bridge/Difference/index.js":
/*!************************************************!*\
  !*** ./source/node/Bridge/Difference/index.js ***!
  \************************************************/
/***/ (() => {

// import './Fetch/index'

/***/ }),

/***/ "./source/node/Bridge/Index.js":
/*!*************************************!*\
  !*** ./source/node/Bridge/Index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Equipment_1 = __webpack_require__(/*! ../Util/Equipment */ "./source/node/Util/Equipment.js");

var Mobile_1 = __webpack_require__(/*! ./Platform/Node/Mobile */ "./source/node/Bridge/Platform/Node/Mobile.js");

var PC_1 = __webpack_require__(/*! ./Platform/Node/PC */ "./source/node/Bridge/Platform/Node/PC.js");

var Mobile_2 = __webpack_require__(/*! ./Platform/Web/Mobile */ "./source/node/Bridge/Platform/Web/Mobile.js");

var PC_2 = __webpack_require__(/*! ./Platform/Web/PC */ "./source/node/Bridge/Platform/Web/PC.js");

__webpack_require__(/*! ./Difference/index */ "./source/node/Bridge/Difference/index.js");

var runConfig = (0, Equipment_1.PlatformSelect)({
  web: {
    pc: PC_2.PCWebBridge,
    mobile: Mobile_2.MobileWebBridge
  },
  node: {
    pc: PC_1.PCNodejsBridge,
    mobile: Mobile_1.MobileNodejsBridge
  },
  electron: {}
});
var Target = runConfig[Equipment_1.isElectron ? "electron" : Equipment_1.isPC ? "pc" : "mobile"];
var Platform = new Target();
exports["default"] = Platform;

/***/ }),

/***/ "./source/node/Bridge/Platform/BasePlatform.js":
/*!*****************************************************!*\
  !*** ./source/node/Bridge/Platform/BasePlatform.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PlatformBridge = void 0;

var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");

var ObjectAble_1 = __webpack_require__(/*! ../../Object/Able/ObjectAble */ "./source/node/Object/Able/ObjectAble.js");

var QRCode = __webpack_require__(/*! qrcode-generator */ "qrcode-generator");

var axios_1 = __webpack_require__(/*! axios */ "axios");

var Hardware_1 = __webpack_require__(/*! ./Hardware */ "./source/node/Bridge/Platform/Hardware.js");

var PlatformBridge = /*#__PURE__*/function (_Hardware_1$HardwareB) {
  _inherits(PlatformBridge, _Hardware_1$HardwareB);

  var _super = _createSuper(PlatformBridge);

  function PlatformBridge() {
    _classCallCheck(this, PlatformBridge);

    return _super.apply(this, arguments);
  }

  _createClass(PlatformBridge, [{
    key: "createQrCode",
    value: function createQrCode(context, option) {
      return new rxjs_1.Observable(function (sub) {
        var _option$SideLength;

        var width = (_option$SideLength = option === null || option === void 0 ? void 0 : option.SideLength) !== null && _option$SideLength !== void 0 ? _option$SideLength : 200;
        var margin = 2;
        var qrcode = QRCode((option === null || option === void 0 ? void 0 : option.type) || 4, (option === null || option === void 0 ? void 0 : option.Level) || "H");
        qrcode.addData(context !== null && context !== void 0 ? context : "");
        qrcode.make();
        var moduleCount = qrcode.getModuleCount();
        var cellSize = (width - margin * 2) / moduleCount;
        var base64 = qrcode.createDataURL(cellSize, margin); // const base64 = qrcode.createDataURL(cellSize, margin).replace('data:image/gif;base64', 'data:image/png;base64');

        sub.next(new ObjectAble_1.StringObject(base64));
        sub.complete();
        return {
          unsubscribe: function unsubscribe() {
            return sub.unsubscribe();
          }
        };
      });
    }
  }, {
    key: "loadRunInfo",
    value: function loadRunInfo() {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "runCommand",
    value: function runCommand(command, option) {
      return new rxjs_1.Observable(function (subscriber) {
        var result = null;
        var error = null;
        var status = false;

        try {
          result = eval(command === null || command === void 0 ? void 0 : command.toString());
          status = true;
        } catch (_error) {
          error = _error;
          status = false;
        } finally {
          subscriber.next({
            result: result,
            status: status,
            error: error,
            command: command
          });
          subscriber.complete();
        }

        return {
          unsubscribe: function unsubscribe() {
            return subscriber.unsubscribe();
          }
        };
      });
    }
  }, {
    key: "open",
    value: function open(url, option) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "loadFile",
    value: function loadFile(url, option) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "fetch",
    value: function fetch(req) {
      return new rxjs_1.Observable(function (subscriber) {
        axios_1["default"].request(req).then(function (response) {
          var error = null;
          var data = null;
          var content = {};

          if (response.status !== 200) {
            error = new Error("".concat(response.status, " ").concat(response.statusText));
          } else {
            data = response.data;
          }

          content.data = data;
          content.error = error;
          content.response = response;
          subscriber.next(new ObjectAble_1.ObjectTarget(content));
          subscriber.complete();
        })["catch"](function (error) {
          subscriber.error(error);
        });
        return {
          unsubscribe: function unsubscribe() {
            subscriber.unsubscribe();
          }
        };
      });
    }
  }]);

  return PlatformBridge;
}(Hardware_1.HardwareBase);

exports.PlatformBridge = PlatformBridge;

/***/ }),

/***/ "./source/node/Bridge/Platform/Hardware.js":
/*!*************************************************!*\
  !*** ./source/node/Bridge/Platform/Hardware.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.HardwareBase = void 0;

var HardwareBase = /*#__PURE__*/function () {
  function HardwareBase() {
    _classCallCheck(this, HardwareBase);
  }

  _createClass(HardwareBase, [{
    key: "takePhoto",
    value: function takePhoto(option) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "recordVideo",
    value: function recordVideo(option) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "getPhotos",
    value: function getPhotos() {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "getCurrentPosition",
    value: function getCurrentPosition() {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "watchPosition",
    value: function watchPosition(option) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "closePosition",
    value: function closePosition() {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "recordAudio",
    value: function recordAudio() {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "stopAudio",
    value: function stopAudio() {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "getFile",
    value: function getFile(option) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "startVibrator",
    value: function startVibrator(option) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "stopVibrator",
    value: function stopVibrator() {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "getSystemInfo",
    value: function getSystemInfo() {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "getVolume",
    value: function getVolume() {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "setVolume",
    value: function setVolume(volume) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "getBrightness",
    value: function getBrightness() {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "setBrightness",
    value: function setBrightness(brightness) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "scanBluetooth",
    value: function scanBluetooth() {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "connectBluetooth",
    value: function connectBluetooth(device) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "bluetoothSendData",
    value: function bluetoothSendData(data) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "bluetoothReceiveData",
    value: function bluetoothReceiveData(device) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "bluetoothClose",
    value: function bluetoothClose(device) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "speechInit",
    value: function speechInit(option) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "speak",
    value: function speak(text) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "stopSpeak",
    value: function stopSpeak() {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "clearSpeech",
    value: function clearSpeech() {
      throw new Error("Method not implemented.");
    }
  }]);

  return HardwareBase;
}();

exports.HardwareBase = HardwareBase;

/***/ }),

/***/ "./source/node/Bridge/Platform/Node/Mobile.js":
/*!****************************************************!*\
  !*** ./source/node/Bridge/Platform/Node/Mobile.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MobileNodejsBridge = void 0;

var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");

var ObjectAble_1 = __webpack_require__(/*! ../../../Object/Able/ObjectAble */ "./source/node/Object/Able/ObjectAble.js");

var BasePlatform_1 = __webpack_require__(/*! ../BasePlatform */ "./source/node/Bridge/Platform/BasePlatform.js");

var MobileNodejsBridge = /*#__PURE__*/function (_BasePlatform_1$Platf) {
  _inherits(MobileNodejsBridge, _BasePlatform_1$Platf);

  var _super = _createSuper(MobileNodejsBridge);

  function MobileNodejsBridge() {
    _classCallCheck(this, MobileNodejsBridge);

    return _super.apply(this, arguments);
  }

  _createClass(MobileNodejsBridge, [{
    key: "open",
    value: function open(url) {
      return (0, rxjs_1.of)(new ObjectAble_1.BooleanObject(false));
    }
  }, {
    key: "loadFile",
    value: function loadFile(url, option) {
      return (0, rxjs_1.of)(new ObjectAble_1.ObjectTarget({
        total: 0,
        loaded: 0,
        data: new ArrayBuffer(0),
        finish: true,
        file: null
      }));
    }
  }]);

  return MobileNodejsBridge;
}(BasePlatform_1.PlatformBridge);

exports.MobileNodejsBridge = MobileNodejsBridge;

/***/ }),

/***/ "./source/node/Bridge/Platform/Node/PC.js":
/*!************************************************!*\
  !*** ./source/node/Bridge/Platform/Node/PC.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PCNodejsBridge = void 0;

var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");

var ObjectAble_1 = __webpack_require__(/*! ../../../Object/Able/ObjectAble */ "./source/node/Object/Able/ObjectAble.js");

var fs = __webpack_require__(/*! fs */ "fs");

var BasePlatform_1 = __webpack_require__(/*! ../BasePlatform */ "./source/node/Bridge/Platform/BasePlatform.js");

var nodeOpen = __webpack_require__(/*! open */ "open");

var process = __webpack_require__(/*! child_process */ "child_process");
/*** */


var PCNodejsBridge = /*#__PURE__*/function (_BasePlatform_1$Platf) {
  _inherits(PCNodejsBridge, _BasePlatform_1$Platf);

  var _super = _createSuper(PCNodejsBridge);

  function PCNodejsBridge() {
    _classCallCheck(this, PCNodejsBridge);

    return _super.apply(this, arguments);
  }

  _createClass(PCNodejsBridge, [{
    key: "open",
    value: function open(url) {
      return new rxjs_1.Observable(function (subscriber) {
        nodeOpen(url, {
          wait: true
        }).then(function ($1) {
          debugger;
          subscriber.next(new ObjectAble_1.BooleanObject(true));
          subscriber.complete();
        });
        return {
          unsubscribe: function unsubscribe() {
            return subscriber.unsubscribe();
          }
        };
      });
    }
  }, {
    key: "loadFile",
    value: function loadFile(url, option) {
      return new rxjs_1.Observable(function (subscriber) {
        var stat = fs.lstatSync(url);
        var subs = [];

        if (!fs.existsSync(url)) {
          subscriber.error(new Error("".concat(url.toString(), " is not exists")));
        } else if (stat.isDirectory()) {
          subscriber.error(new Error("".concat(url.toString(), " is not file")));
        } else {
          var rs = fs.createReadStream(url);
          var data = Buffer.of();
          var sub1 = (0, rxjs_1.fromEvent)(rs, 'data').subscribe({
            next: function next(chunk) {
              data = Buffer.concat([data, chunk]);
              subscriber.next(new ObjectAble_1.ObjectTarget({
                total: stat.size,
                loaded: data.byteLength,
                data: data,
                finish: false,
                file: undefined
              }));
            },
            complete: function complete() {},
            error: function error(err) {}
          });
          var sub2 = (0, rxjs_1.fromEvent)(rs, 'end').subscribe({
            next: function next() {
              subscriber.complete();
            }
          });
          subs.push(sub1);
          subs.push(sub2);
        }

        return {
          unsubscribe: function unsubscribe() {
            subscriber.unsubscribe();
            subs.forEach(function ($1) {
              return $1.unsubscribe();
            });
          }
        };
      });
    }
    /**
     * = "#javascript#console.log('hello world')" :default
     *  = "#shell#echo hello world"
     * @param command
     * @param option
     * @returns
     */

  }, {
    key: "runCommand",
    value: function runCommand(command, option) {
      return new rxjs_1.Observable(function (subscriber) {
        var runJs = function runJs() {
          var result = undefined;
          var status = false;
          var error = undefined;

          try {
            result = eval(command === null || command === void 0 ? void 0 : command.toString());
            status = true;
          } catch (err) {
            result = undefined;
            status = false;
            error = err;
          }

          return {
            status: status,
            result: result,
            command: command,
            error: error
          };
        };

        if (command.startsWith('#shell#')) {
          process.exec(command, function (error, stdout, stderr) {
            subscriber.next({
              result: stdout,
              command: command,
              status: error != null,
              error: error
            });
            subscriber.complete();
          });
        } else if (command.startsWith('#javascript#')) {
          subscriber.next(runJs());
          subscriber.complete();
        } else {
          subscriber.next(runJs());
          subscriber.complete();
        }

        return {
          unsubscribe: function unsubscribe() {
            return subscriber.unsubscribe();
          }
        };
      });
    }
  }]);

  return PCNodejsBridge;
}(BasePlatform_1.PlatformBridge);

exports.PCNodejsBridge = PCNodejsBridge;

/***/ }),

/***/ "./source/node/Bridge/Platform/Web/Mobile.js":
/*!***************************************************!*\
  !*** ./source/node/Bridge/Platform/Web/Mobile.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MobileWebBridge = void 0;

var WebBase_1 = __webpack_require__(/*! ./WebBase */ "./source/node/Bridge/Platform/Web/WebBase.js");

var MobileWebBridge = /*#__PURE__*/function (_WebBase_1$WebBridge) {
  _inherits(MobileWebBridge, _WebBase_1$WebBridge);

  var _super = _createSuper(MobileWebBridge);

  function MobileWebBridge() {
    _classCallCheck(this, MobileWebBridge);

    return _super.apply(this, arguments);
  }

  return _createClass(MobileWebBridge);
}(WebBase_1.WebBridge);

exports.MobileWebBridge = MobileWebBridge;

/***/ }),

/***/ "./source/node/Bridge/Platform/Web/PC.js":
/*!***********************************************!*\
  !*** ./source/node/Bridge/Platform/Web/PC.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PCWebBridge = void 0;

var WebBase_1 = __webpack_require__(/*! ./WebBase */ "./source/node/Bridge/Platform/Web/WebBase.js");

var PCWebBridge = /*#__PURE__*/function (_WebBase_1$WebBridge) {
  _inherits(PCWebBridge, _WebBase_1$WebBridge);

  var _super = _createSuper(PCWebBridge);

  function PCWebBridge() {
    _classCallCheck(this, PCWebBridge);

    return _super.apply(this, arguments);
  }

  return _createClass(PCWebBridge);
}(WebBase_1.WebBridge);

exports.PCWebBridge = PCWebBridge;

/***/ }),

/***/ "./source/node/Bridge/Platform/Web/WebBase.js":
/*!****************************************************!*\
  !*** ./source/node/Bridge/Platform/Web/WebBase.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WebBridge = void 0;

var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");

var ObjectAble_1 = __webpack_require__(/*! ../../../Object/Able/ObjectAble */ "./source/node/Object/Able/ObjectAble.js");

var BasePlatform_1 = __webpack_require__(/*! ../BasePlatform */ "./source/node/Bridge/Platform/BasePlatform.js");

var WebBridge = /*#__PURE__*/function (_BasePlatform_1$Platf) {
  _inherits(WebBridge, _BasePlatform_1$Platf);

  var _super = _createSuper(WebBridge);

  function WebBridge() {
    _classCallCheck(this, WebBridge);

    return _super.apply(this, arguments);
  }

  _createClass(WebBridge, [{
    key: "open",
    value: function open(url) {
      var result = window.open(url, "__blank");
      return (0, rxjs_1.of)(new ObjectAble_1.BooleanObject(result !== null));
    }
    /**
     * 打开文件路径
     * @param url
     * @param option
     * @returns
     */

  }, {
    key: "loadFile",
    value: function loadFile(url, option) {
      return new rxjs_1.Observable(function (subscriber) {
        var input = document.createElement("input"); //input.value = url.toString();

        input.type = "file";
        input.id = "_temp_input_select";
        input.accept = (option === null || option === void 0 ? void 0 : option.type) || "*";
        input.style.display = "none";
        document.body.append(input);
        input.addEventListener("change", function (_) {
          var reader = new FileReader();
          var file = input.files[0];

          reader.onprogress = function (info) {
            var total = info.total,
                loaded = info.loaded;
            var data = reader.result;
            subscriber.next(new ObjectAble_1.ObjectTarget({
              total: total,
              loaded: loaded,
              data: data,
              finish: false,
              file: file
            }));
          };

          reader.onload = function (info) {
            var data = reader.result;
            var total = info.total,
                loaded = info.loaded;
            subscriber.next(new ObjectAble_1.ObjectTarget({
              total: total,
              loaded: loaded,
              data: data,
              finish: true,
              file: file
            }));
            subscriber.complete();
          };

          reader.onerror = function (ev) {
            subscriber.error(ev);
          };

          reader.readAsArrayBuffer(file);
        });
        input.click();
        return {
          unsubscribe: function unsubscribe() {
            return subscriber.unsubscribe();
          }
        };
      });
    }
  }]);

  return WebBridge;
}(BasePlatform_1.PlatformBridge);

exports.WebBridge = WebBridge;

/***/ }),

/***/ "./source/node/Configs/index.js":
/*!**************************************!*\
  !*** ./source/node/Configs/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DefaultRunConfig = void 0;

var ConfigTypes_1 = __webpack_require__(/*! ../Bridge/ConfigTypes */ "./source/node/Bridge/ConfigTypes.js");
/**
 * 默认的配置
 */


exports.DefaultRunConfig = {
  development: true,
  environment: {},
  workConfig: {
    QRCodeWork: {
      type: 4,
      Level: "H",
      SideLength: 100
    },
    RunCommandWork: {
      input: '$I$'
    },
    LoadFileWork: {
      type: ConfigTypes_1.FileType.All
    },
    FetchWork: {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }
  }
};

/***/ }),

/***/ "./source/node/Context.js":
/*!********************************!*\
  !*** ./source/node/Context.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));
exports.Context = void 0;

var Types_1 = __webpack_require__(/*! ./Types */ "./source/node/Types.js");

var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");

var Configs_1 = __webpack_require__(/*! ./Configs */ "./source/node/Configs/index.js");

var ObjectAble_1 = __webpack_require__(/*! ./Object/Able/ObjectAble */ "./source/node/Object/Able/ObjectAble.js");

var Index_1 = __webpack_require__(/*! ./Bridge/Index */ "./source/node/Bridge/Index.js");

var BeginWork_1 = __webpack_require__(/*! ./Works/ExtendsWorks/BeginWork */ "./source/node/Works/ExtendsWorks/BeginWork.js");

var valueUtil_1 = __webpack_require__(/*! ./Object/valueUtil */ "./source/node/Object/valueUtil.js");

var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");

var Context = /*#__PURE__*/function () {
  function Context(runOptions) {
    var _this = this;

    _classCallCheck(this, Context);

    this.status = Types_1.WorkType.WorkRunStatus.INIT;
    this.platform = Index_1["default"];
    /**
     * 上下文变量
     */

    this.runConstant = new Map();
    /**
     * 所有work
     */

    this.works = [];
    /**
     * 消息传输通道
     */

    this.msgChannel = new rxjs_1.Subject();
    /**
     * 需要销毁的Subscription
     */

    this.pools = [];
    this.runOptions = runOptions || Configs_1.DefaultRunConfig;
    var sub = this.msgChannel.subscribe({
      next: function next(value) {
        return _this.workMessage(value);
      },
      error: function error(_error) {
        return _this.workError(_error);
      }
    });
    this.pools.push(sub);
    this.addWork(new BeginWork_1.BeginWork());
  }
  /**
   * 增加上下文变量
   * @param from
   * @param name
   * @param value
   */


  _createClass(Context, [{
    key: "addVariable",
    value: function addVariable(from, name, value) {
      var w_map = this.runConstant.get(from.uuid);
      !w_map && this.runConstant.set(from.uuid, new Map());
      this.runConstant.get(from.uuid).set(name, value);
    }
  }, {
    key: "workMessage",
    value: function workMessage(input) {
      console.log("msgChannel", input);
    }
  }, {
    key: "workError",
    value: function workError(error) {
      console.log("msgChannelError", error);
      this.stopWorkChain();
    }
  }, {
    key: "addWorkLog",
    value: function addWorkLog(tap) {
      return this.msgChannel.subscribe(tap);
    }
  }, {
    key: "sendLog",
    value: function sendLog(status) {
      var log = {
        date: new Date(),
        work: status.work.filter(function ($1) {
          return $1 === null || $1 === void 0 ? void 0 : $1.name;
        }),
        desc: status.desc,
        value: status.value,
        error: status.error
      };
      this.msgChannel.next(log);
    }
  }, {
    key: "addWork",
    value: function addWork(work) {
      if (work.constructor.isAble && work.constructor.isAble() === false) {
        var desc = "[content][Func:addWork][work isAble is false]";
        return this.sendLog({
          content: this,
          work: [],
          desc: desc,
          value: null,
          error: new Error(desc)
        });
      }

      if (this.status !== Types_1.WorkType.WorkRunStatus.INIT) {
        return this.sendLog({
          content: this,
          work: [],
          desc: "[content][Func:addWork][context status is not init]",
          value: new ObjectAble_1.BooleanObject(false)
        });
      }

      work.context = this;
      this.works.push(work);
    }
  }, {
    key: "addWorks",
    value: function addWorks() {
      for (var _len = arguments.length, works = new Array(_len), _key = 0; _key < _len; _key++) {
        works[_key] = arguments[_key];
      }

      works.forEach(this.addWork);
    }
  }, {
    key: "prepareWorks",
    value: function () {
      var _prepareWorks = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.status !== Types_1.WorkType.WorkRunStatus.INIT)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", this.sendLog({
                  content: this,
                  work: [],
                  desc: "[content][Func:prepareWorks][context status is not init]",
                  value: new ObjectAble_1.BooleanObject(false)
                }));

              case 2:
                ;
                _context.next = 5;
                return Promise.all(this.works.map(function ($1, index, source) {
                  var before = source[index - 1];
                  var after = source[index + 1];
                  return $1.prepare(before, after);
                }));

              case 5:
                this.status = Types_1.WorkType.WorkRunStatus.READY;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function prepareWorks() {
        return _prepareWorks.apply(this, arguments);
      }

      return prepareWorks;
    }()
  }, {
    key: "dispatch",
    value: function dispatch(input) {
      if (this.status === Types_1.WorkType.WorkRunStatus.INIT) {
        return this.sendLog({
          content: this,
          work: [],
          desc: "[context][Func:run][run status is not ready  or 已经初始化]",
          value: new ObjectAble_1.BooleanObject(false)
        });
      }

      ;
      var inputWork = this.works[0];

      if (inputWork) {
        inputWork.startRun((0, valueUtil_1.decide)(input));
      }

      this.status = Types_1.WorkType.WorkRunStatus.RUNNING;
    }
    /**
     * 停止执行
     * 关闭
     */

  }, {
    key: "stopWorkChain",
    value: function stopWorkChain() {
      var _this2 = this;

      var that = this;
      return new Promise(function (resolve, reject) {
        var taskUns = _this2.works.map(function ($1) {
          return $1.stopWork();
        });

        var isSuccess = false;
        var errors = [];
        (0, rxjs_1.forkJoin)(taskUns).pipe((0, operators_1.take)(1)).subscribe({
          next: function next(values) {
            isSuccess = values.every(function ($1, index) {
              if ($1 === true) return true;
              errors.push(_this2.works[index]);
              return false;
            });
            resolve(isSuccess);
          },
          error: function error(_error2) {
            // 关闭报错
            reject(_error2);
          },
          complete: function complete() {
            _this2.sendLog({
              content: that,
              work: errors,
              desc: "[content][Func:stopWorkChain]",
              value: new ObjectAble_1.ObjectTarget({
                id: 'stopWorkChain',
                value: (0, valueUtil_1.decide)(isSuccess),
                option: {}
              })
            });
          }
        });
      });
    }
  }, {
    key: "clear",
    value: function clear() {
      this.pools.forEach(function ($1) {
        return $1.unsubscribe();
      });
    }
  }]);

  return Context;
}();

exports.Context = Context;

/***/ }),

/***/ "./source/node/Object/Able/ObjectAble.js":
/*!***********************************************!*\
  !*** ./source/node/Object/Able/ObjectAble.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DataObject = exports.DateObject = exports.BooleanObject = exports.StringObject = exports.NumberObject = exports.SetObject = exports.MapObject = exports.ArrayObject = exports.ObjectTarget = void 0;

var ObjectTarget_1 = __webpack_require__(/*! ./Targets/ObjectTarget */ "./source/node/Object/Able/Targets/ObjectTarget.js");

Object.defineProperty(exports, "ObjectTarget", ({
  enumerable: true,
  get: function get() {
    return ObjectTarget_1.ObjectTarget;
  }
}));

var ArrayObject_1 = __webpack_require__(/*! ./Targets/ArrayObject */ "./source/node/Object/Able/Targets/ArrayObject.js");

Object.defineProperty(exports, "ArrayObject", ({
  enumerable: true,
  get: function get() {
    return ArrayObject_1.ArrayObject;
  }
}));

var MapObject_1 = __webpack_require__(/*! ./Targets/MapObject */ "./source/node/Object/Able/Targets/MapObject.js");

Object.defineProperty(exports, "MapObject", ({
  enumerable: true,
  get: function get() {
    return MapObject_1.MapObject;
  }
}));

var SetObject_1 = __webpack_require__(/*! ./Targets/SetObject */ "./source/node/Object/Able/Targets/SetObject.js");

Object.defineProperty(exports, "SetObject", ({
  enumerable: true,
  get: function get() {
    return SetObject_1.SetObject;
  }
}));

var NumberObject_1 = __webpack_require__(/*! ./Targets/NumberObject */ "./source/node/Object/Able/Targets/NumberObject.js");

Object.defineProperty(exports, "NumberObject", ({
  enumerable: true,
  get: function get() {
    return NumberObject_1.NumberObject;
  }
}));

var StringObject_1 = __webpack_require__(/*! ./Targets/StringObject */ "./source/node/Object/Able/Targets/StringObject.js");

Object.defineProperty(exports, "StringObject", ({
  enumerable: true,
  get: function get() {
    return StringObject_1.StringObject;
  }
}));

var BooleanObject_1 = __webpack_require__(/*! ./Targets/BooleanObject */ "./source/node/Object/Able/Targets/BooleanObject.js");

Object.defineProperty(exports, "BooleanObject", ({
  enumerable: true,
  get: function get() {
    return BooleanObject_1.BooleanObject;
  }
}));

var DateObject_1 = __webpack_require__(/*! ./Targets/DateObject */ "./source/node/Object/Able/Targets/DateObject.js");

Object.defineProperty(exports, "DateObject", ({
  enumerable: true,
  get: function get() {
    return DateObject_1.DateObject;
  }
}));

var DataObject_1 = __webpack_require__(/*! ./Targets/DataObject */ "./source/node/Object/Able/Targets/DataObject.js");

Object.defineProperty(exports, "DataObject", ({
  enumerable: true,
  get: function get() {
    return DataObject_1.DataObject;
  }
}));

/***/ }),

/***/ "./source/node/Object/Able/Targets/ArrayObject.js":
/*!********************************************************!*\
  !*** ./source/node/Object/Able/Targets/ArrayObject.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var __param = this && this.__param || function (paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
};

var ArrayObject_1;
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ArrayObject = void 0;

var Control_1 = __webpack_require__(/*! ../../Control */ "./source/node/Object/Control.js");

var util_1 = __webpack_require__(/*! ../../util */ "./source/node/Object/util.js");

var ObjectTarget_1 = __webpack_require__(/*! ./ObjectTarget */ "./source/node/Object/Able/Targets/ObjectTarget.js");

var valueUtil_1 = __webpack_require__(/*! ../../valueUtil */ "./source/node/Object/valueUtil.js");

var ArrayObject = ArrayObject_1 = /*#__PURE__*/function (_ObjectTarget_1$Objec) {
  _inherits(ArrayObject, _ObjectTarget_1$Objec);

  var _super = _createSuper(ArrayObject);

  function ArrayObject(value) {
    var _this;

    _classCallCheck(this, ArrayObject);

    var init = typeof value === 'number' ? new Array(value) : Array.isArray(value) ? value : [];
    _this = _super.call(this, init);
    _this._value = init;
    return _this;
  }

  _createClass(ArrayObject, [{
    key: "len",
    value: function len() {
      return this._value.length;
    }
  }, {
    key: "first",
    value: function first() {
      return this[0];
    }
  }, {
    key: "last",
    value: function last() {
      return this[this._value.length - 1];
    }
  }, {
    key: "valueOfIndex",
    value: function valueOfIndex(index) {
      return this[index];
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      return this._value;
    }
  }, {
    key: "merge",
    value: function merge(target) {
      return new ArrayObject_1([].concat(_toConsumableArray(this._value), _toConsumableArray(target._value)));
    }
  }, {
    key: "collectionArray",
    value: function collectionArray(key) {
      return null;
    }
  }, {
    key: "concat",
    value: // array function
    function concat() {
      return null;
    }
  }, {
    key: "copyWithin",
    value: function copyWithin(target, start, end) {
      return null;
    }
  }, {
    key: "fill",
    value: function fill(value, start, end) {
      return null;
    }
  }, {
    key: "find",
    value: function find(predicate, thisArg) {
      return null;
    }
  }, {
    key: "findIndex",
    value: function findIndex(predicate, thisArg) {
      return null;
    }
  }, {
    key: "lastIndexOf",
    value: function lastIndexOf(searchElement, fromIndex) {
      return null;
    }
  }, {
    key: "pop",
    value: function pop() {
      return null;
    }
  }, {
    key: "push",
    value: function push() {
      return null;
    }
  }, {
    key: "reverse",
    value: function reverse() {
      return null;
    }
  }, {
    key: "shift",
    value: function shift() {
      return null;
    }
  }, {
    key: "unshift",
    value: function unshift() {
      return null;
    }
  }, {
    key: "slice",
    value: function slice(start, end) {
      return null;
    }
  }, {
    key: "sort",
    value: function sort(compareFn) {
      return null;
    }
  }, {
    key: "splice",
    value: function splice(start, deleteCount) {
      return null;
    }
  }, {
    key: "includes",
    value: function includes(searchElement, fromIndex) {
      return null;
    }
  }, {
    key: "indexOf",
    value: function indexOf(searchElement, fromIndex) {
      return null;
    }
  }, {
    key: "join",
    value: function join(separator) {
      return null;
    }
  }, {
    key: "entries",
    value: function entries() {
      return null;
    }
  }, {
    key: "values",
    value: function values() {
      return null;
    }
  }, {
    key: "keys",
    value: function keys() {
      return null;
    }
  }, {
    key: "forEach",
    value: function forEach(callbackfn, thisArg) {
      return null;
    }
  }, {
    key: "filter",
    value: function filter(predicate, thisArg) {
      return null;
    }
  }, {
    key: "map",
    value: function map(callbackfn, thisArg) {
      return null;
    }
  }, {
    key: "every",
    value: function every(predicate, thisArg) {
      return null;
    }
  }, {
    key: "some",
    value: function some(predicate, thisArg) {
      return null;
    }
  }, {
    key: "reduce",
    value: function reduce(callbackfn, initialValue) {
      return null;
    }
  }, {
    key: "reduceRight",
    value: function reduceRight(callbackfn, initialValue) {
      return null;
    }
  }, {
    key: "toLocaleString",
    value: function toLocaleString() {
      return null;
    }
  }, {
    key: "length",
    get: function get() {
      return (0, valueUtil_1.decide)(this._value.length);
    }
  }]);

  return ArrayObject;
}(ObjectTarget_1.ObjectTarget);

ArrayObject.attributes = new Set();
ArrayObject.empty = new ArrayObject_1([]);

__decorate([(0, util_1.attribute)(), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", Number)], ArrayObject.prototype, "len", null);

__decorate([(0, util_1.attribute)(), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", Object)], ArrayObject.prototype, "first", null);

__decorate([(0, util_1.attribute)(), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", Object)], ArrayObject.prototype, "last", null);

__decorate([(0, util_1.attribute)(), __param(0, (0, util_1.Params)("index")), __metadata("design:type", Function), __metadata("design:paramtypes", [Number]), __metadata("design:returntype", Object)], ArrayObject.prototype, "valueOfIndex", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", [String, Object]), __metadata("design:returntype", Object)], ArrayObject.prototype, "collectionArray", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", Object)], ArrayObject.prototype, "concat", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", [Number, Number, Number]), __metadata("design:returntype", Object)], ArrayObject.prototype, "copyWithin", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", [Number, Number, Number]), __metadata("design:returntype", Object)], ArrayObject.prototype, "fill", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", [Function, Object]), __metadata("design:returntype", Object)], ArrayObject.prototype, "find", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", [Function, Object]), __metadata("design:returntype", Object)], ArrayObject.prototype, "findIndex", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", [Number, Number]), __metadata("design:returntype", Object)], ArrayObject.prototype, "lastIndexOf", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", Object)], ArrayObject.prototype, "pop", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", Object)], ArrayObject.prototype, "push", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", Object)], ArrayObject.prototype, "reverse", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", Object)], ArrayObject.prototype, "shift", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", Object)], ArrayObject.prototype, "unshift", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", [Number, Number]), __metadata("design:returntype", Object)], ArrayObject.prototype, "slice", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", [Function]), __metadata("design:returntype", Object)], ArrayObject.prototype, "sort", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", [Number, Number, Object]), __metadata("design:returntype", Object)], ArrayObject.prototype, "splice", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Number]), __metadata("design:returntype", Object)], ArrayObject.prototype, "includes", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Number]), __metadata("design:returntype", Object)], ArrayObject.prototype, "indexOf", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", [String]), __metadata("design:returntype", Object)], ArrayObject.prototype, "join", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", ObjectTarget_1.ObjectTarget)], ArrayObject.prototype, "entries", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", ObjectTarget_1.ObjectTarget)], ArrayObject.prototype, "values", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", ObjectTarget_1.ObjectTarget)], ArrayObject.prototype, "keys", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", [Function, Object]), __metadata("design:returntype", Object)], ArrayObject.prototype, "forEach", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", [Function, Object]), __metadata("design:returntype", Object)], ArrayObject.prototype, "filter", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", [Function, Object]), __metadata("design:returntype", Object)], ArrayObject.prototype, "map", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", [Function, Object]), __metadata("design:returntype", Object)], ArrayObject.prototype, "every", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", [Function, Object]), __metadata("design:returntype", Object)], ArrayObject.prototype, "some", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", [Function, Object]), __metadata("design:returntype", Object)], ArrayObject.prototype, "reduce", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", [Function, Object]), __metadata("design:returntype", Object)], ArrayObject.prototype, "reduceRight", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", Object)], ArrayObject.prototype, "toLocaleString", null);

__decorate([(0, util_1.DefaultValue)(Object.prototype.toString.call([])), __metadata("design:type", String)], ArrayObject, "type", void 0);

ArrayObject = ArrayObject_1 = __decorate([util_1.ArrayUint, __metadata("design:paramtypes", [Object])], ArrayObject);
exports.ArrayObject = ArrayObject;

/***/ }),

/***/ "./source/node/Object/Able/Targets/BooleanObject.js":
/*!**********************************************************!*\
  !*** ./source/node/Object/Able/Targets/BooleanObject.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BooleanObject = void 0;

var util_1 = __webpack_require__(/*! ../../util */ "./source/node/Object/util.js");

var ObjectTarget_1 = __webpack_require__(/*! ./ObjectTarget */ "./source/node/Object/Able/Targets/ObjectTarget.js");

var BooleanObject = /*#__PURE__*/function (_ObjectTarget_1$Objec) {
  _inherits(BooleanObject, _ObjectTarget_1$Objec);

  var _super = _createSuper(BooleanObject);

  function BooleanObject() {
    var _this;

    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, BooleanObject);

    _this = _super.call(this, value);
    _this._value = value;
    return _this;
  }

  _createClass(BooleanObject, [{
    key: "valueOf",
    value: function valueOf() {
      return !!this._value;
    }
  }]);

  return BooleanObject;
}(ObjectTarget_1.ObjectTarget);

BooleanObject.attributes = new Set();
BooleanObject.empty = new BooleanObject(false);

__decorate([(0, util_1.attribute)(), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", Boolean)], BooleanObject.prototype, "valueOf", null);

__decorate([(0, util_1.DefaultValue)(Object.prototype.toString.call(new Boolean(1))), __metadata("design:type", String)], BooleanObject, "type", void 0);

exports.BooleanObject = BooleanObject;

/***/ }),

/***/ "./source/node/Object/Able/Targets/DataObject.js":
/*!*******************************************************!*\
  !*** ./source/node/Object/Able/Targets/DataObject.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DataObject = void 0;

var util_1 = __webpack_require__(/*! ../../util */ "./source/node/Object/util.js");

var ObjectTarget_1 = __webpack_require__(/*! ./ObjectTarget */ "./source/node/Object/Able/Targets/ObjectTarget.js");

var DataObject = /*#__PURE__*/function (_ObjectTarget_1$Objec) {
  _inherits(DataObject, _ObjectTarget_1$Objec);

  var _super = _createSuper(DataObject);

  function DataObject() {
    var _this;

    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new ArrayBuffer(0);

    _classCallCheck(this, DataObject);

    _this = _super.call(this, value);
    _this._value = value;
    return _this;
  }

  _createClass(DataObject, [{
    key: "data",
    value: function data() {
      return this.valueOf();
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      return this._value;
    }
  }]);

  return DataObject;
}(ObjectTarget_1.ObjectTarget);

DataObject.attributes = new Set();
DataObject.empty = new DataObject(new ArrayBuffer(0));

__decorate([(0, util_1.attribute)(), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", ArrayBuffer)], DataObject.prototype, "valueOf", null);

exports.DataObject = DataObject;

/***/ }),

/***/ "./source/node/Object/Able/Targets/DateObject.js":
/*!*******************************************************!*\
  !*** ./source/node/Object/Able/Targets/DateObject.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DateObject = void 0;

var util_1 = __webpack_require__(/*! ../../util */ "./source/node/Object/util.js");

var ObjectTarget_1 = __webpack_require__(/*! ./ObjectTarget */ "./source/node/Object/Able/Targets/ObjectTarget.js");

var DateObject = /*#__PURE__*/function (_ObjectTarget_1$Objec) {
  _inherits(DateObject, _ObjectTarget_1$Objec);

  var _super = _createSuper(DateObject);

  function DateObject() {
    var _this;

    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();

    _classCallCheck(this, DateObject);

    _this = _super.call(this, value);
    _this._value = value;
    return _this;
  }

  _createClass(DateObject, [{
    key: "timestamp",
    value: function timestamp() {
      return this.valueOf().getTime();
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      return new Date(this._value);
    }
  }]);

  return DateObject;
}(ObjectTarget_1.ObjectTarget);

DateObject.attributes = new Set();
DateObject.empty = new DateObject(new Date());

__decorate([(0, util_1.attribute)(), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", Number)], DateObject.prototype, "timestamp", null);

__decorate([(0, util_1.attribute)(), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", Date)], DateObject.prototype, "valueOf", null);

__decorate([(0, util_1.DefaultValue)(Object.prototype.toString.call(new Date())), __metadata("design:type", String)], DateObject, "type", void 0);

exports.DateObject = DateObject;

/***/ }),

/***/ "./source/node/Object/Able/Targets/MapObject.js":
/*!******************************************************!*\
  !*** ./source/node/Object/Able/Targets/MapObject.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapObject_1;
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MapObject = void 0;

var Control_1 = __webpack_require__(/*! ../../Control */ "./source/node/Object/Control.js");

var util_1 = __webpack_require__(/*! ../../util */ "./source/node/Object/util.js");

var ObjectTarget_1 = __webpack_require__(/*! ./ObjectTarget */ "./source/node/Object/Able/Targets/ObjectTarget.js");

var valueUtil_1 = __webpack_require__(/*! ../../valueUtil */ "./source/node/Object/valueUtil.js");

var MapObject = MapObject_1 = /*#__PURE__*/function (_ObjectTarget_1$Objec) {
  _inherits(MapObject, _ObjectTarget_1$Objec);

  var _super = _createSuper(MapObject);

  function MapObject() {
    var _this;

    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();

    _classCallCheck(this, MapObject);

    _this = _super.call(this, value);
    _this._value = new Map(value);
    return _this;
  }

  _createClass(MapObject, [{
    key: "len",
    value: function len() {
      return this._value.size;
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      return this._value;
    }
  }, {
    key: "merge",
    value: function merge(target) {
      var newMap = new Map(this._value);

      target._value.forEach(function ($1, key) {
        return newMap.set(key, $1);
      });

      return new MapObject_1(newMap);
    }
  }, {
    key: "collectionMap",
    value: function collectionMap(key) {
      return null;
    }
  }, {
    key: "get",
    value: function get(key) {
      return null;
    }
  }, {
    key: "set",
    value: function set(key, value) {
      return null;
    }
  }, {
    key: "has",
    value: function has(key) {
      return null;
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      return null;
    }
  }, {
    key: "clear",
    value: function clear() {
      return null;
    }
  }, {
    key: "entries",
    value: function entries() {
      return null;
    }
  }, {
    key: "forEach",
    value: function forEach(callback, thisArg) {
      return null;
    }
  }, {
    key: "values",
    value: function values() {
      return null;
    }
  }, {
    key: "keys",
    value: function keys() {
      return null;
    }
  }, {
    key: "size",
    get: function get() {
      return (0, valueUtil_1.decide)(this._value.size);
    }
  }]);

  return MapObject;
}(ObjectTarget_1.ObjectTarget);

MapObject.attributes = new Set();
MapObject.empty = new MapObject_1(new Map());

__decorate([(0, util_1.attribute)(), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", Number)], MapObject.prototype, "len", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", [String, Object]), __metadata("design:returntype", Object)], MapObject.prototype, "collectionMap", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", [String]), __metadata("design:returntype", Object)], MapObject.prototype, "get", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", [String, Object]), __metadata("design:returntype", Object)], MapObject.prototype, "set", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", [String]), __metadata("design:returntype", Object)], MapObject.prototype, "has", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", [String]), __metadata("design:returntype", Object)], MapObject.prototype, "delete", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", Object)], MapObject.prototype, "clear", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", Object)], MapObject.prototype, "entries", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", [Function, Object]), __metadata("design:returntype", Object)], MapObject.prototype, "forEach", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", Object)], MapObject.prototype, "values", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", Object)], MapObject.prototype, "keys", null);

__decorate([(0, util_1.DefaultValue)(Object.prototype.toString.call(new Map())), __metadata("design:type", String)], MapObject, "type", void 0);

MapObject = MapObject_1 = __decorate([util_1.MapUint, __metadata("design:paramtypes", [Map])], MapObject);
exports.MapObject = MapObject;

/***/ }),

/***/ "./source/node/Object/Able/Targets/NumberObject.js":
/*!*********************************************************!*\
  !*** ./source/node/Object/Able/Targets/NumberObject.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NumberObject_1;
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.NumberObject = void 0;

var util_1 = __webpack_require__(/*! ../../util */ "./source/node/Object/util.js");

var ObjectTarget_1 = __webpack_require__(/*! ./ObjectTarget */ "./source/node/Object/Able/Targets/ObjectTarget.js");

var BooleanObject_1 = __webpack_require__(/*! ./BooleanObject */ "./source/node/Object/Able/Targets/BooleanObject.js");

var NumberObject = NumberObject_1 = /*#__PURE__*/function (_ObjectTarget_1$Objec) {
  _inherits(NumberObject, _ObjectTarget_1$Objec);

  var _super = _createSuper(NumberObject);

  function NumberObject() {
    var _this;

    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    _classCallCheck(this, NumberObject);

    _this = _super.call(this, value);
    _this._value = value;
    return _this;
  }

  _createClass(NumberObject, [{
    key: "valueOf",
    value: function valueOf() {
      return this._value;
    }
  }, {
    key: "merge",
    value: function merge(target) {
      return new NumberObject_1(this._value + target._value);
    } // Compare
    // compare: ControlFlow.CompareExec;

  }, {
    key: "more",
    value: function more(target) {
      return new BooleanObject_1.BooleanObject(this._value > target._value);
    }
  }, {
    key: "equal",
    value: function equal(target) {
      return new BooleanObject_1.BooleanObject(this._value === target._value);
    }
  }, {
    key: "less",
    value: function less(target) {
      return new BooleanObject_1.BooleanObject(this._value < target._value);
    }
  }, {
    key: "moreEqual",
    value: function moreEqual(target) {
      return new BooleanObject_1.BooleanObject(this._value >= target._value);
    }
  }, {
    key: "lessEqual",
    value: function lessEqual(target) {
      return new BooleanObject_1.BooleanObject(this._value <= target._value);
    } // Calc
    // calc: ControlFlow.CalcFunction;

  }, {
    key: "plus",
    value: function plus(target) {
      return new NumberObject_1(this._value + target._value);
    }
  }, {
    key: "reduce",
    value: function reduce(target) {
      return new NumberObject_1(this._value - target._value);
    }
  }, {
    key: "multi",
    value: function multi(target) {
      return new NumberObject_1(this._value * target._value);
    }
  }, {
    key: "divide",
    value: function divide(target) {
      return new NumberObject_1(target._value === 0 ? Infinity : this._value / target._value);
    }
  }]);

  return NumberObject;
}(ObjectTarget_1.ObjectTarget);

NumberObject.attributes = new Set();
NumberObject.empty = new NumberObject_1(0);

__decorate([(0, util_1.attribute)(), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", Number)], NumberObject.prototype, "valueOf", null);

__decorate([(0, util_1.DefaultValue)(Object.prototype.toString.call(new Number())), __metadata("design:type", String)], NumberObject, "type", void 0);

NumberObject = NumberObject_1 = __decorate([util_1.CalcUnit, util_1.CompareUnit, __metadata("design:paramtypes", [Number])], NumberObject);
exports.NumberObject = NumberObject;

/***/ }),

/***/ "./source/node/Object/Able/Targets/ObjectTarget.js":
/*!*********************************************************!*\
  !*** ./source/node/Object/Able/Targets/ObjectTarget.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ObjectTarget = void 0;

var util_1 = __webpack_require__(/*! ../../util */ "./source/node/Object/util.js");

var ObjectTarget = /*#__PURE__*/function (_Symbol$toStringTag) {
  function ObjectTarget() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ObjectTarget);

    this._value = value;
  }

  _createClass(ObjectTarget, [{
    key: _Symbol$toStringTag,
    get: function get() {
      return 'flow-object';
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      return this._value;
    }
  }, {
    key: "merge",
    value: function merge(target) {
      try {
        var result = Object.assign(this._value, target._value);
        return new ObjectTarget(result);
      } catch (error) {
        return new ObjectTarget(null);
      }
    }
  }, {
    key: "json",
    value: function json() {
      var _require = __webpack_require__(/*! ./StringObject */ "./source/node/Object/Able/Targets/StringObject.js"),
          StringObject = _require.StringObject;

      try {
        return new StringObject(JSON.stringify(this._value));
      } catch (error) {
        return new StringObject("{}");
      }
    }
  }]);

  return ObjectTarget;
}(Symbol.toStringTag);

ObjectTarget.attributes = new Set();
ObjectTarget.empty = new ObjectTarget({});

__decorate([(0, util_1.DefaultValue)(Object.prototype.toString.call({})), __metadata("design:type", String)], ObjectTarget, "type", void 0);

exports.ObjectTarget = ObjectTarget;

/***/ }),

/***/ "./source/node/Object/Able/Targets/SetObject.js":
/*!******************************************************!*\
  !*** ./source/node/Object/Able/Targets/SetObject.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SetObject_1;
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SetObject = void 0;

var Control_1 = __webpack_require__(/*! ../../Control */ "./source/node/Object/Control.js");

var util_1 = __webpack_require__(/*! ../../util */ "./source/node/Object/util.js");

var ObjectTarget_1 = __webpack_require__(/*! ./ObjectTarget */ "./source/node/Object/Able/Targets/ObjectTarget.js");

var valueUtil_1 = __webpack_require__(/*! ../../valueUtil */ "./source/node/Object/valueUtil.js");

var SetObject = SetObject_1 = /*#__PURE__*/function (_ObjectTarget_1$Objec) {
  _inherits(SetObject, _ObjectTarget_1$Objec);

  var _super = _createSuper(SetObject);

  function SetObject(value) {
    var _this;

    _classCallCheck(this, SetObject);

    var init = !!value ? Array.isArray(value) ? new Set(value) : value : new Set();
    _this = _super.call(this, init);
    _this._value = init;
    return _this;
  }

  _createClass(SetObject, [{
    key: "len",
    value: function len() {
      return this._value.size;
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      return this._value;
    }
  }, {
    key: "merge",
    value: function merge(target) {
      var newSet = new Set();

      this._value.forEach(function ($1) {
        return newSet.add($1);
      });

      target.forEach(function ($1) {
        return newSet.add($1);
      });
      new Set().keys;
      return new SetObject_1(newSet);
    }
  }, {
    key: "collectionSet",
    value: function collectionSet(key) {
      return null;
    }
  }, {
    key: "has",
    value: function has(value) {
      return null;
    }
  }, {
    key: "add",
    value: function add(value) {
      return null;
    }
  }, {
    key: "delete",
    value: function _delete(value) {
      return null;
    }
  }, {
    key: "clear",
    value: function clear() {
      return null;
    }
  }, {
    key: "forEach",
    value: function forEach(callbackfn, thisArg) {
      return null;
    }
  }, {
    key: "entries",
    value: function entries() {
      return null;
    }
  }, {
    key: "values",
    value: function values() {
      return null;
    }
  }, {
    key: "keys",
    value: function keys() {
      return null;
    }
  }, {
    key: "size",
    get: function get() {
      return (0, valueUtil_1.decide)(this._value.size);
    }
  }]);

  return SetObject;
}(ObjectTarget_1.ObjectTarget);

SetObject.attributes = new Set();
SetObject.empty = new SetObject_1(new Set());

__decorate([(0, util_1.attribute)(), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", Number)], SetObject.prototype, "len", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", [String, Object]), __metadata("design:returntype", Object)], SetObject.prototype, "collectionSet", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", Object)], SetObject.prototype, "has", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", Object)], SetObject.prototype, "add", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", Object)], SetObject.prototype, "delete", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", Object)], SetObject.prototype, "clear", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", [Function, Object]), __metadata("design:returntype", Object)], SetObject.prototype, "forEach", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", ObjectTarget_1.ObjectTarget)], SetObject.prototype, "entries", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", ObjectTarget_1.ObjectTarget)], SetObject.prototype, "values", null);

__decorate([util_1.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", ObjectTarget_1.ObjectTarget)], SetObject.prototype, "keys", null);

__decorate([(0, util_1.DefaultValue)(Object.prototype.toString.call(new Set())), __metadata("design:type", String)], SetObject, "type", void 0);

SetObject = SetObject_1 = __decorate([util_1.SetUint, __metadata("design:paramtypes", [Object])], SetObject);
exports.SetObject = SetObject;

/***/ }),

/***/ "./source/node/Object/Able/Targets/StringObject.js":
/*!*********************************************************!*\
  !*** ./source/node/Object/Able/Targets/StringObject.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.StringObject = void 0;

var util_1 = __webpack_require__(/*! ../../util */ "./source/node/Object/util.js");

var ObjectTarget_1 = __webpack_require__(/*! ./ObjectTarget */ "./source/node/Object/Able/Targets/ObjectTarget.js");

var StringObject = /*#__PURE__*/function (_ObjectTarget_1$Objec) {
  _inherits(StringObject, _ObjectTarget_1$Objec);

  var _super = _createSuper(StringObject);

  function StringObject() {
    var _this;

    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    _classCallCheck(this, StringObject);

    _this = _super.call(this, value);
    _this._value = value;
    return _this;
  }

  _createClass(StringObject, [{
    key: "valueOf",
    value: function valueOf() {
      return this._value;
    }
  }]);

  return StringObject;
}(ObjectTarget_1.ObjectTarget);

StringObject.attributes = new Set();
StringObject.empty = new StringObject("");

__decorate([(0, util_1.attribute)(), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", String)], StringObject.prototype, "valueOf", null);

__decorate([(0, util_1.DefaultValue)(Object.prototype.toString.call(new String())), __metadata("design:type", String)], StringObject, "type", void 0);

exports.StringObject = StringObject;

/***/ }),

/***/ "./source/node/Object/Control.js":
/*!***************************************!*\
  !*** ./source/node/Object/Control.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
 // import { BooleanAble, NumberAble, ValueAble } from "./Able/Ables";

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ControlFlow = void 0;
var ControlFlow;

(function (ControlFlow) {
  // 比较属性 compare
  var CompareEnum;

  (function (CompareEnum) {
    CompareEnum["More"] = "more";
    CompareEnum["Equal"] = "equal";
    CompareEnum["Less"] = "less";
    CompareEnum["MoreEqual"] = "moreEqual";
    CompareEnum["LessEqual"] = "lessEqual";
  })(CompareEnum = ControlFlow.CompareEnum || (ControlFlow.CompareEnum = {})); // 计算属性


  var CalcEnum;

  (function (CalcEnum) {
    CalcEnum["Plus"] = "plus";
    CalcEnum["Reduce"] = "reduce";
    CalcEnum["Multi"] = "multi";
    CalcEnum["Divide"] = "divide";
  })(CalcEnum = ControlFlow.CalcEnum || (ControlFlow.CalcEnum = {})); //集合属性


  var CollectionEnum;

  (function (CollectionEnum) {
    CollectionEnum["Contain"] = "contain";
    CollectionEnum["Add"] = "add";
    CollectionEnum["ValueFor"] = "valueFor";
    CollectionEnum["Keys"] = "keys";
    CollectionEnum["Values"] = "values";
  })(CollectionEnum = ControlFlow.CollectionEnum || (ControlFlow.CollectionEnum = {})); //Object.keys(Object.getOwnPropertyDescriptors(Array.prototype)).map($1=>`${$1}: ControlFlow.ArrayFunction`).join('\n')


  var ArrayEnum;

  (function (ArrayEnum) {
    ArrayEnum["Concat"] = "concat";
    ArrayEnum["CopyWithin"] = "copyWithin";
    ArrayEnum["Fill"] = "fill";
    ArrayEnum["Find"] = "find";
    ArrayEnum["FindIndex"] = "findIndex";
    ArrayEnum["LastIndexOf"] = "lastIndexOf";
    ArrayEnum["Pop"] = "pop";
    ArrayEnum["Push"] = "push";
    ArrayEnum["Reverse"] = "reverse";
    ArrayEnum["Shift"] = "shift";
    ArrayEnum["Unshift"] = "unshift";
    ArrayEnum["Slice"] = "slice";
    ArrayEnum["Sort"] = "sort";
    ArrayEnum["Splice"] = "splice";
    ArrayEnum["Includes"] = "includes";
    ArrayEnum["IndexOf"] = "indexOf";
    ArrayEnum["Join"] = "join";
    ArrayEnum["Keys"] = "keys";
    ArrayEnum["Entries"] = "entries";
    ArrayEnum["Values"] = "values";
    ArrayEnum["ForEach"] = "forEach";
    ArrayEnum["Filter"] = "filter";
    ArrayEnum["Map"] = "map";
    ArrayEnum["Every"] = "every";
    ArrayEnum["Some"] = "some";
    ArrayEnum["Reduce"] = "reduce";
    ArrayEnum["ReduceRight"] = "reduceRight";
  })(ArrayEnum = ControlFlow.ArrayEnum || (ControlFlow.ArrayEnum = {}));

  var SetEnum;

  (function (SetEnum) {
    SetEnum["Has"] = "has";
    SetEnum["Add"] = "add";
    SetEnum["Delete"] = "delete";
    SetEnum["Clear"] = "clear";
    SetEnum["Entries"] = "entries";
    SetEnum["ForEach"] = "forEach";
    SetEnum["Values"] = "values";
    SetEnum["Keys"] = "keys";
  })(SetEnum = ControlFlow.SetEnum || (ControlFlow.SetEnum = {}));

  var MapEnum;

  (function (MapEnum) {
    MapEnum["Get"] = "get";
    MapEnum["Set"] = "set";
    MapEnum["Has"] = "has";
    MapEnum["Delete"] = "delete";
    MapEnum["Clear"] = "clear";
    MapEnum["Entries"] = "entries";
    MapEnum["ForEach"] = "forEach";
    MapEnum["Keys"] = "keys";
    MapEnum["Values"] = "values";
  })(MapEnum = ControlFlow.MapEnum || (ControlFlow.MapEnum = {}));
})(ControlFlow = exports.ControlFlow || (exports.ControlFlow = {}));

/***/ }),

/***/ "./source/node/Object/util.js":
/*!************************************!*\
  !*** ./source/node/Object/util.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MapUint = exports.SetUint = exports.ArrayUint = exports.CalcUnit = exports.CompareUnit = exports.onlyDeclaration = exports.DefaultValue = exports.ObjectManager = exports.Params = exports.attribute = exports.onlyDeclarationTag = void 0;

var ObjectAble_1 = __webpack_require__(/*! ./Able/ObjectAble */ "./source/node/Object/Able/ObjectAble.js");

var Control_1 = __webpack_require__(/*! ./Control */ "./source/node/Object/Control.js");

var valueUtil_1 = __webpack_require__(/*! ./valueUtil */ "./source/node/Object/valueUtil.js");

exports.onlyDeclarationTag = 'onlyDeclaration';

function attribute() {
  return function ($1, $2, descriptor) {
    $1.constructor.attributes.add($2);
  };
}

exports.attribute = attribute;

function Params(params) {
  return function (target, methodName, paramsIndex) {
    !target.$Meta && (target.$Meta = {});
    !target.$Meta[methodName] && (target.$Meta[methodName] = {});
    target.$Meta[methodName][paramsIndex] = params;
  };
}

exports.Params = Params;

var ObjectManager = /*#__PURE__*/_createClass(function ObjectManager() {
  _classCallCheck(this, ObjectManager);
});

exports.ObjectManager = ObjectManager;
ObjectManager.types = new Set();

function DefaultValue(value) {
  return function (target, propertyName) {
    target[propertyName] = value;
    ObjectManager.types.add(value);
  };
}

exports.DefaultValue = DefaultValue;
/**
 * 声明 方式无效 仅仅作为标记
 */

function onlyDeclaration(target, name, dec) {
  dec.value.declaration = exports.onlyDeclarationTag;
}

exports.onlyDeclaration = onlyDeclaration;

function CompareUnit(host) {
  var _host$prototype$compa;

  Object.keys(Control_1.ControlFlow.CompareEnum).forEach(function (item) {
    var key = Control_1.ControlFlow.CompareEnum[item];
    var comFunction = host.prototype[key];

    if (!comFunction || comFunction.declaration === exports.onlyDeclarationTag) {
      host.prototype[key] = function () {
        return new ObjectAble_1.BooleanObject(false);
      };
    }
  });
  if (((_host$prototype$compa = host.prototype.compare) === null || _host$prototype$compa === void 0 ? void 0 : _host$prototype$compa.declaration) === exports.onlyDeclarationTag || !!host.prototype.compare === false) host.prototype.compare = function (type, target) {
    var _host$prototype$type;

    var execFunc = (_host$prototype$type = host.prototype[type]) === null || _host$prototype$type === void 0 ? void 0 : _host$prototype$type.bind(this);
    if (execFunc && typeof execFunc === "function") return execFunc.call(this, target);
    return false;
  };
}

exports.CompareUnit = CompareUnit;

function CalcUnit(host) {
  var _host$prototype$calc;

  Object.keys(Control_1.ControlFlow.CalcEnum).forEach(function (item) {
    var key = Control_1.ControlFlow.CalcEnum[item];
    var comFunction = host.prototype[key];

    if (!comFunction || comFunction.declaration === exports.onlyDeclarationTag) {
      host.prototype[key] = function () {
        return new ObjectAble_1.NumberObject(0);
      };
    }
  });
  if (((_host$prototype$calc = host.prototype.calc) === null || _host$prototype$calc === void 0 ? void 0 : _host$prototype$calc.declaration) === exports.onlyDeclarationTag || !!host.prototype.calc === false) host.prototype.calc = function (type, target) {
    var _host$prototype$type2;

    var execFunc = (_host$prototype$type2 = host.prototype[type]) === null || _host$prototype$type2 === void 0 ? void 0 : _host$prototype$type2.bind(this);
    if (execFunc && typeof execFunc === "function") return execFunc.call(this, target);
    return false;
  };
}

exports.CalcUnit = CalcUnit;

function ArrayUint(host) {
  var _host$prototype$colle;

  Object.keys(Control_1.ControlFlow.ArrayEnum).forEach(function (item) {
    var key = Control_1.ControlFlow.ArrayEnum[item];
    var comFunction = host.prototype[key];

    if (!comFunction || comFunction.declaration === exports.onlyDeclarationTag) {
      host.prototype[key] = function () {
        var value = this.valueOf();
        var execFunc = value[key];
        var result;

        if (typeof execFunc === "function") {
          result = execFunc.bind(value).apply(void 0, arguments);
        } else result = value;

        return (0, valueUtil_1.decide)(result);
      };
    }
  });
  if (((_host$prototype$colle = host.prototype.collectionArray) === null || _host$prototype$colle === void 0 ? void 0 : _host$prototype$colle.declaration) === exports.onlyDeclarationTag || !!host.prototype.collectionArray === false) host.prototype.collectionArray = function (type) {
    var _host$prototype$type3;

    var execFunc = (_host$prototype$type3 = host.prototype[type]) === null || _host$prototype$type3 === void 0 ? void 0 : _host$prototype$type3.bind(this);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (execFunc && typeof execFunc === "function") return execFunc.apply(void 0, args);
    return false;
  };
}

exports.ArrayUint = ArrayUint;

function SetUint(host) {
  var _host$prototype$colle2;

  Object.keys(Control_1.ControlFlow.SetEnum).forEach(function (item) {
    var key = Control_1.ControlFlow.SetEnum[item];
    var comFunction = host.prototype[key];

    if (!comFunction || comFunction.declaration === exports.onlyDeclarationTag) {
      host.prototype[key] = function () {
        var value = this.valueOf();
        var execFunc = value[key];
        var result;

        if (typeof execFunc === "function") {
          result = execFunc.bind(value).apply(void 0, arguments);
        } else result = value;

        return (0, valueUtil_1.decide)(result);
      };
    }
  });
  if (((_host$prototype$colle2 = host.prototype.collectionSet) === null || _host$prototype$colle2 === void 0 ? void 0 : _host$prototype$colle2.declaration) === exports.onlyDeclarationTag || !!host.prototype.collectionSet === false) host.prototype.collectionSet = function (type) {
    var _host$prototype$type4;

    var execFunc = (_host$prototype$type4 = host.prototype[type]) === null || _host$prototype$type4 === void 0 ? void 0 : _host$prototype$type4.bind(this);

    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    if (execFunc && typeof execFunc === "function") return execFunc.apply(void 0, args);
    return false;
  };
}

exports.SetUint = SetUint;

function MapUint(host) {
  var _host$prototype$colle3;

  Object.keys(Control_1.ControlFlow.MapEnum).forEach(function (item) {
    var key = Control_1.ControlFlow.MapEnum[item];
    var comFunction = host.prototype[key];

    if (!comFunction || comFunction.declaration === exports.onlyDeclarationTag) {
      host.prototype[key] = function () {
        var value = this.valueOf();
        var execFunc = value[key];
        var result;

        if (typeof execFunc === "function") {
          result = execFunc.bind(value).apply(void 0, arguments);
        } else result = value;

        return (0, valueUtil_1.decide)(result);
      };
    }
  });
  if (((_host$prototype$colle3 = host.prototype.collectionMap) === null || _host$prototype$colle3 === void 0 ? void 0 : _host$prototype$colle3.declaration) === exports.onlyDeclarationTag || !!host.prototype.collectionMap === false) host.prototype.collectionMap = function (type) {
    var _host$prototype$type5;

    var execFunc = (_host$prototype$type5 = host.prototype[type]) === null || _host$prototype$type5 === void 0 ? void 0 : _host$prototype$type5.bind(this);

    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    if (execFunc && typeof execFunc === "function") return execFunc.apply(void 0, args);
    return false;
  };
}

exports.MapUint = MapUint;

/***/ }),

/***/ "./source/node/Object/valueUtil.js":
/*!*****************************************!*\
  !*** ./source/node/Object/valueUtil.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.decide = exports.isAbleType = void 0;

var __1 = __webpack_require__(/*! .. */ "./source/node/index.js");

var Value = __webpack_require__(/*! ./Able/ObjectAble */ "./source/node/Object/Able/ObjectAble.js");

var ObjectMap = null;

var init = function init() {
  if (ObjectMap === null) {
    ObjectMap = {
      "[object Object]": Value.ObjectTarget,
      "[object Map]": Value.MapObject,
      "[object Set]": Value.SetObject,
      "[object Array]": Value.ArrayObject,
      "[object Boolean]": Value.BooleanObject,
      "[object Date]": Value.DateObject,
      "[object Number]": Value.NumberObject,
      "[object String]": Value.StringObject,
      "[object ArrayBuffer]": Value.DataObject,
      "[object Uint8Array]": Value.DataObject,
      "[object Promise]": Value.ObjectTarget,
      '[object Null]': Value.ObjectTarget,
      '[object Undefined]': Value.ObjectTarget
    };
  }

  return ObjectMap;
};

var isAbleType = function isAbleType(value) {
  init();
  return Object.prototype.toString.call(value) === '[object flow-object]';
};

exports.isAbleType = isAbleType;
/**
 * 将js 数据转为 BaseType
 * 如果是BaseType类型 将不会包装。见[force]
 * @param value
 * @param force 是否强制包装
 * @returns
 */

var decide = function decide(value) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  init();
  if ((0, exports.isAbleType)(value) && force === false) return value;
  var key = Object.prototype.toString.call(value);
  var Target = ObjectMap[key];

  if (Target) {
    return new Target(value !== null && value !== void 0 ? value : {});
  }

  return new __1.ObjectTarget(value !== null && value !== void 0 ? value : {});
};

exports.decide = decide;

/***/ }),

/***/ "./source/node/Types.js":
/*!******************************!*\
  !*** ./source/node/Types.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WorkType = void 0;
var WorkType;

(function (WorkType) {
  var WorkRunStatus;

  (function (WorkRunStatus) {
    WorkRunStatus[WorkRunStatus["INIT"] = 0] = "INIT"; // FROZEN,//冻结状态 

    WorkRunStatus[WorkRunStatus["READY"] = 1] = "READY"; // PRE_RUN,//预运行状态 已经初始化

    WorkRunStatus[WorkRunStatus["RUNNING"] = 2] = "RUNNING";
    WorkRunStatus[WorkRunStatus["COMPLETE"] = 3] = "COMPLETE";
  })(WorkRunStatus = WorkType.WorkRunStatus || (WorkType.WorkRunStatus = {}));
})(WorkType = exports.WorkType || (exports.WorkType = {}));

/***/ }),

/***/ "./source/node/Util/Equipment.js":
/*!***************************************!*\
  !*** ./source/node/Util/Equipment.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PlatformSelect = exports.isJS = exports.isMobile = exports.isElectron = exports.isPC = exports.isNode = exports.isWeb = exports.currentEnir = exports.JSRUNEnvirType = exports.getJSEnvironment = exports.isReactNative = void 0;
var JSRUNEnvirType;

(function (JSRUNEnvirType) {
  JSRUNEnvirType[JSRUNEnvirType["NODE_PC"] = 10] = "NODE_PC";
  JSRUNEnvirType[JSRUNEnvirType["WEB_PC"] = 20] = "WEB_PC";
  JSRUNEnvirType[JSRUNEnvirType["WEB_MOBILE"] = 26] = "WEB_MOBILE";
  JSRUNEnvirType[JSRUNEnvirType["ELECTRON_PC"] = 40] = "ELECTRON_PC";
  JSRUNEnvirType[JSRUNEnvirType["OTHER"] = 100] = "OTHER";
})(JSRUNEnvirType || (JSRUNEnvirType = {}));

exports.JSRUNEnvirType = JSRUNEnvirType;
var EnvirType = {
  /**
   * WIndow 浏览器 运行环境
   */
  WINDOWS: "win",

  /**
   * MAC 浏览器 运行环境
   */
  MACINTOSH: "mac",

  /***
   * Linux 浏览器 运行环境
   */
  LINUX: "linux",

  /***
   * ios 浏览器  运行环境
   */
  IOS: "iOS",

  /**
   * 安卓 浏览器 运行环境
   */
  ANDROID: "Android",

  /**
   * 黑莓 运行环境
   */
  BLACKBERRY: "bb",

  /***
   * Win iphone 运行环境
   */
  WINDOWS_PHONE: "winphone",
  Other: 'other'
};
/**
 * 是否为 rn 代码
 */

function isReactNative() {
  var GLOBAL;

  try {
    GLOBAL = window;
  } catch (error) {
    GLOBAL = global || globalThis;
  }

  return GLOBAL && GLOBAL.ReactNative && GLOBAL.ReactNative.NativeModules;
}

exports.isReactNative = isReactNative;

function getJSEnvironment() {
  if (navigator.userAgent) {
    var userAgent = navigator.userAgent;
    var platform, result;

    var getDesktopOS = function getDesktopOS() {
      var pf = navigator.platform;

      if (pf.indexOf("Win") != -1) {
        // 说明当前是Windows操作系统
        var rVersion = /Windows NT (\d+).(\d)/i;
        var uaResult = userAgent.match(rVersion);
        var sVersionStr = "";

        if (uaResult[1] == "6") {
          if (uaResult[2] == 1) {
            sVersionStr = "7"; // 说明当前运行在Windows 7 中
          } else if (uaResult[2] > 1) {
            sVersionStr = "8"; // 说明当前运行在Windows 8 中
          }
        } else {
          sVersionStr = uaResult[1];
        }

        return {
          name: EnvirType.WINDOWS,
          versionStr: sVersionStr
        };
      } else if (pf.indexOf("Mac") != -1) {
        return {
          name: EnvirType.MACINTOSH,
          versionStr: ""
        }; // Macintosh操作系统
      } else if (pf.indexOf("Linux") != -1) {
        return {
          name: EnvirType.LINUX,
          versionStr: ""
        }; // 说明当前运行在Linux操作系统
      }

      return null;
    };

    platform = /Windows Phone (?:OS )?([\d.]*)/; // windows phone的正则表达式

    result = userAgent.match(platform);

    if (result) {
      return {
        name: EnvirType.WINDOWS_PHONE,
        versionStr: result[1]
      };
    } // BlackBerry 10


    if (userAgent.indexOf("(BB10;") > 0) {
      platform = /\sVersion\/([\d.]+)\s/; // BlackBerry的regular expression

      result = userAgent.match(platform);

      if (result) {
        return {
          name: EnvirType.BLACKBERRY,
          versionStr: result[1]
        };
      } else {
        return {
          name: EnvirType.BLACKBERRY,
          versionStr: "10"
        };
      }
    } // iOS, Android, BlackBerry 6.0+:


    platform = /\(([a-zA-Z ]+);\s(?:[U]?[;]?)([\D]+)((?:[\d._]*))(?:.*[\)][^\d]*)([\d.]*)\s/;
    result = userAgent.match(platform);

    if (result) {
      var appleDevices = /iPhone|iPad|iPod/;
      var bbDevices = /PlayBook|BlackBerry/;

      if (result[0].match(appleDevices)) {
        result[3] = result[3].replace(/_/g, ".");
        return {
          name: EnvirType.IOS,
          versionStr: result[3]
        }; // iOS操作系统
      } else if (result[2].match(/Android/)) {
        result[2] = result[2].replace(/\s/g, "");
        return {
          name: EnvirType.ANDROID,
          versionStr: result[3]
        }; // Android操作系统
      } else if (result[0].match(bbDevices)) {
        return {
          name: EnvirType.BLACKBERRY,
          versionStr: result[4]
        }; // Blackberry
      }
    } //Android平台上的Firefox浏览器


    platform = /\((Android)[\s]?([\d][.\d]*)?;.*Firefox\/[\d][.\d]*/;
    result = userAgent.match(platform);

    if (result) {
      return {
        name: EnvirType.ANDROID,
        versionStr: result.length == 3 ? result[2] : ""
      };
    } // Desktop


    return getDesktopOS();
  } else {
    return {
      name: EnvirType.Other,
      versionStr: ""
    };
  }
}

exports.getJSEnvironment = getJSEnvironment;
var currentEnir;
exports.currentEnir = currentEnir;

if ((globalThis || window).process) {
  if ((globalThis || window) && (globalThis || window).process && (globalThis || window).process.versions && (globalThis || window).process.versions["electron"]) {
    exports.currentEnir = currentEnir = JSRUNEnvirType.ELECTRON_PC;
  } else exports.currentEnir = currentEnir = JSRUNEnvirType.NODE_PC;
} else {
  var typeName = getJSEnvironment().name;

  switch (typeName) {
    case EnvirType.WINDOWS:
      exports.currentEnir = currentEnir = JSRUNEnvirType.WEB_PC;
      break;

    case EnvirType.MACINTOSH:
      exports.currentEnir = currentEnir = JSRUNEnvirType.WEB_PC;
      break;

    case EnvirType.IOS:
      exports.currentEnir = currentEnir = JSRUNEnvirType.WEB_MOBILE;
      break;

    case EnvirType.ANDROID:
      exports.currentEnir = currentEnir = JSRUNEnvirType.WEB_MOBILE;
      break;

    case EnvirType.LINUX:
      exports.currentEnir = currentEnir = JSRUNEnvirType.WEB_PC;
      break;

    default:
      exports.currentEnir = currentEnir = JSRUNEnvirType.OTHER;
      break;
  }
}

var isWeb = currentEnir === JSRUNEnvirType.WEB_MOBILE || currentEnir === JSRUNEnvirType.WEB_PC;
exports.isWeb = isWeb;
var isNode = currentEnir === JSRUNEnvirType.NODE_PC;
exports.isNode = isNode;
var isElectron = currentEnir === JSRUNEnvirType.ELECTRON_PC;
exports.isElectron = isElectron;
var isPC = currentEnir === JSRUNEnvirType.NODE_PC || currentEnir === JSRUNEnvirType.WEB_PC || currentEnir === JSRUNEnvirType.ELECTRON_PC;
exports.isPC = isPC;
var isMobile = currentEnir === JSRUNEnvirType.WEB_MOBILE;
exports.isMobile = isMobile;
var isJS = true;
exports.isJS = isJS;

var PlatformSelect = function PlatformSelect(select) {
  var target;

  if (isElectron) {
    target = select.electron;
  } else if (isWeb) {
    target = select.web;
  } else if (isNode) {
    target = select.node;
  }

  return target;
};

exports.PlatformSelect = PlatformSelect;

/***/ }),

/***/ "./source/node/Util/channel-value-util.js":
/*!************************************************!*\
  !*** ./source/node/Util/channel-value-util.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.wrapperValue = exports.unpackValue = void 0;

var __1 = __webpack_require__(/*! .. */ "./source/node/index.js");

var valueUtil_1 = __webpack_require__(/*! ../Object/valueUtil */ "./source/node/Object/valueUtil.js");
/**
 * 解包
 * @param value
 * @returns
 */


var unpackValue = function unpackValue(value) {
  if (!!value === false) return "";
  return value._value.value.valueOf();
};

exports.unpackValue = unpackValue;
/**
 * 组合包装
 * @param input
 * @param value
 * @returns
 */

function wrapperValue(input, value) {
  var nextValue = (0, valueUtil_1.decide)(value);
  return new __1.ObjectTarget(_objectSpread(_objectSpread({}, input._value), {}, {
    value: nextValue
  }));
}

exports.wrapperValue = wrapperValue;

/***/ }),

/***/ "./source/node/Works/ExtendsWorks/Base64Work.js":
/*!******************************************************!*\
  !*** ./source/node/Works/ExtendsWorks/Base64Work.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Base64EnCodeWork = exports.Base64DecodeWork = void 0;

var js_base64_1 = __webpack_require__(/*! js-base64 */ "js-base64");

var Instruction_1 = __webpack_require__(/*! ../Instruction */ "./source/node/Works/Instruction.js");

var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");

var Equipment_1 = __webpack_require__(/*! ../../Util/Equipment */ "./source/node/Util/Equipment.js");

var channel_value_util_1 = __webpack_require__(/*! ../../Util/channel-value-util */ "./source/node/Util/channel-value-util.js"); //编码


var Base64EnCodeWork = /*#__PURE__*/function (_Instruction_1$Instru) {
  _inherits(Base64EnCodeWork, _Instruction_1$Instru);

  var _super = _createSuper(Base64EnCodeWork);

  function Base64EnCodeWork() {
    var _this;

    _classCallCheck(this, Base64EnCodeWork);

    _this = _super.apply(this, arguments);
    _this.name = "Base64EnCodeWork";
    return _this;
  }

  _createClass(Base64EnCodeWork, [{
    key: "run",
    value: function run(input) {
      return new rxjs_1.Observable(function (subscriber) {
        var target;
        if (input === null || input === undefined) target = '';else {
          target = (0, channel_value_util_1.unpackValue)(input);
        }
        subscriber.next((0, channel_value_util_1.wrapperValue)(input, js_base64_1.Base64.encode(target)));
        subscriber.complete();
        return {
          unsubscribe: function unsubscribe() {
            return subscriber.unsubscribe();
          }
        };
      });
    }
  }], [{
    key: "isAble",
    value: function isAble() {
      return Equipment_1.isJS;
    }
  }]);

  return Base64EnCodeWork;
}(Instruction_1.InstructionMTM);

exports.Base64EnCodeWork = Base64EnCodeWork; //解码

var Base64DecodeWork = /*#__PURE__*/function (_Instruction_1$Instru2) {
  _inherits(Base64DecodeWork, _Instruction_1$Instru2);

  var _super2 = _createSuper(Base64DecodeWork);

  function Base64DecodeWork() {
    var _this2;

    _classCallCheck(this, Base64DecodeWork);

    _this2 = _super2.apply(this, arguments);
    _this2.name = "Base64DecodeWork";
    return _this2;
  }

  _createClass(Base64DecodeWork, [{
    key: "run",
    value: function run(input) {
      return new rxjs_1.Observable(function (subscriber) {
        var target;
        if (input === null || input === undefined) target = '';else {
          target = (0, channel_value_util_1.unpackValue)(input);
        }
        subscriber.next((0, channel_value_util_1.wrapperValue)(input, js_base64_1.Base64.decode(target)));
        subscriber.complete();
        return {
          unsubscribe: function unsubscribe() {
            return subscriber.unsubscribe();
          }
        };
      });
    }
  }], [{
    key: "isAble",
    value: function isAble() {
      return Equipment_1.isJS;
    }
  }]);

  return Base64DecodeWork;
}(Instruction_1.InstructionMTM);

exports.Base64DecodeWork = Base64DecodeWork;

/***/ }),

/***/ "./source/node/Works/ExtendsWorks/BeginWork.js":
/*!*****************************************************!*\
  !*** ./source/node/Works/ExtendsWorks/BeginWork.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BeginWork = void 0;

var uuid_1 = __webpack_require__(/*! uuid */ "uuid");

var Instruction_1 = __webpack_require__(/*! ../Instruction */ "./source/node/Works/Instruction.js");

var Equipment_1 = __webpack_require__(/*! ../../Util/Equipment */ "./source/node/Util/Equipment.js");

var ObjectAble_1 = __webpack_require__(/*! ../../Object/Able/ObjectAble */ "./source/node/Object/Able/ObjectAble.js");

var valueUtil_1 = __webpack_require__(/*! ../../Object/valueUtil */ "./source/node/Object/valueUtil.js");

var BeginWork = /*#__PURE__*/function (_Instruction_1$Instru) {
  _inherits(BeginWork, _Instruction_1$Instru);

  var _super = _createSuper(BeginWork);

  function BeginWork() {
    var _this;

    _classCallCheck(this, BeginWork);

    _this = _super.call(this);
    _this.name = "BeginWork";
    _this.uuid = (0, uuid_1.v4)();
    return _this;
  } // // 处理上一个的传入
  // _connectChannel() {
  //   const that = this;
  //   // 处理启动指令 仅仅头部work会触发
  //   var sub1: Subscription =
  //     this.inputSubject
  //       .pipe(
  //         take(Infinity)
  //       ).subscribe({
  //         next: (value: BaseType) => that._run(value),
  //         error: (error) => that.error(error),
  //         complete: null,
  //       })
  //   this.inputSubscription = sub1;
  //   this.pools.push(sub1);
  // }
  // _run(input?: BaseType, initOption?: any): void {
  //   // this.nextWork?.next(input);
  //   this.nextWork.next(input);
  // }

  /**
   * 运行 头部
   * @param value
   */


  _createClass(BeginWork, [{
    key: "startRun",
    value: function startRun(value, runId) {
      var id = runId !== null && runId !== void 0 ? runId : (0, uuid_1.v4)();
      this.nextWork.next(new ObjectAble_1.ObjectTarget({
        id: id,
        value: (0, valueUtil_1.decide)(value),
        option: {}
      }));
    }
  }, {
    key: "completeOneLoop",
    value: function completeOneLoop() {}
  }], [{
    key: "isAble",
    value: function isAble() {
      return Equipment_1.isJS;
    }
  }]);

  return BeginWork;
}(Instruction_1.InstructionOTO);

exports.BeginWork = BeginWork;
BeginWork._id = 0;

/***/ }),

/***/ "./source/node/Works/ExtendsWorks/FetchWork.js":
/*!*****************************************************!*\
  !*** ./source/node/Works/ExtendsWorks/FetchWork.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Instruction_1 = __webpack_require__(/*! ../Instruction */ "./source/node/Works/Instruction.js");

var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");

var Equipment_1 = __webpack_require__(/*! ../../Util/Equipment */ "./source/node/Util/Equipment.js");

var __1 = __webpack_require__(/*! ../.. */ "./source/node/index.js");

var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");

var FetchWork = /*#__PURE__*/function (_Instruction_1$Instru) {
  _inherits(FetchWork, _Instruction_1$Instru);

  var _super = _createSuper(FetchWork);

  function FetchWork() {
    var _this;

    _classCallCheck(this, FetchWork);

    _this = _super.apply(this, arguments);
    _this.name = "FetchWork";
    return _this;
  }

  _createClass(FetchWork, [{
    key: "_getInitOption",
    value: function _getInitOption(input, baseOption) {
      var initParams = input.valueOf();
      var url = initParams.url,
          method = initParams.method,
          timeout = initParams.timeout,
          data = initParams.data;
      var request = {
        url: url,
        method: initParams.method || baseOption.method || "GET",
        timeout: timeout || baseOption.timeout || 10000,
        headers: _objectSpread(_objectSpread({}, baseOption.headers || {}), initParams.headers || {})
      };
      request.data = data;

      if (method.toLocaleUpperCase() === "GET") {
        request.headers['Content-Type'] = request.headers['Content-Type'] || 'application/json';
      }

      request.timeoutErrorMessage = '请求超时';
      return request;
    }
  }, {
    key: "run",
    value: function run(input, baseOption) {
      var _this2 = this;

      var that = this;

      var options = this._getInitOption(input._value.value, baseOption);

      return new rxjs_1.Observable(function (subscriber) {
        var fetchSub = that.context.platform.fetch(options).pipe((0, operators_1.tap)(function (result) {
          var _result$valueOf = result.valueOf(),
              data = _result$valueOf.data;

          _this2.logMsg("[FetchWork][load:data]".concat(data), input);
        })).subscribe({
          next: function next(data) {
            var result = data.valueOf();

            if (result.error) {
              subscriber.error(result.error);
            } else {
              subscriber.next(new __1.ObjectTarget(_objectSpread(_objectSpread({}, input._value), {}, {
                value: result.data
              })));
              subscriber.complete();
            }
          },
          error: function error(_error) {
            return subscriber.error(_error);
          },
          complete: function complete() {
            return subscriber.complete();
          }
        });
        return {
          unsubscribe: function unsubscribe() {
            subscriber.unsubscribe();
            fetchSub.unsubscribe();
          }
        };
      });
    }
  }], [{
    key: "isAble",
    value: function isAble() {
      return Equipment_1.isJS;
    }
  }]);

  return FetchWork;
}(Instruction_1.InstructionOTO);

exports["default"] = FetchWork;

/***/ }),

/***/ "./source/node/Works/ExtendsWorks/LoadFileWork.js":
/*!********************************************************!*\
  !*** ./source/node/Works/ExtendsWorks/LoadFileWork.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Instruction_1 = __webpack_require__(/*! ../Instruction */ "./source/node/Works/Instruction.js");

var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");

var ObjectAble_1 = __webpack_require__(/*! ../../Object/Able/ObjectAble */ "./source/node/Object/Able/ObjectAble.js");

var Equipment_1 = __webpack_require__(/*! ../../Util/Equipment */ "./source/node/Util/Equipment.js");

var ConfigTypes_1 = __webpack_require__(/*! ../../Bridge/ConfigTypes */ "./source/node/Bridge/ConfigTypes.js");

var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");

var channel_value_util_1 = __webpack_require__(/*! ../../Util/channel-value-util */ "./source/node/Util/channel-value-util.js");

var LoadFileWork = /*#__PURE__*/function (_Instruction_1$Instru) {
  _inherits(LoadFileWork, _Instruction_1$Instru);

  var _super = _createSuper(LoadFileWork);

  function LoadFileWork(config) {
    var _this;

    _classCallCheck(this, LoadFileWork);

    _this = _super.call(this);
    _this.name = "LoadFileWork";
    _this.currentConfig = {
      type: ConfigTypes_1.FileType.All
    };
    _this.currentConfig = config || {
      type: ConfigTypes_1.FileType.All
    };
    return _this;
  }

  _createClass(LoadFileWork, [{
    key: "run",
    value: function run(input, option) {
      var _this2 = this;

      var that = this;

      var runOption = _objectSpread(_objectSpread({}, option), this.currentConfig);

      return new rxjs_1.Observable(function (subscriber) {
        var target = (0, channel_value_util_1.unpackValue)(input);
        var sub = that.context.platform.loadFile(target, runOption).pipe((0, operators_1.tap)(function (obj) {
          var _obj$valueOf = obj.valueOf(),
              loaded = _obj$valueOf.loaded,
              total = _obj$valueOf.total,
              finish = _obj$valueOf.finish;

          _this2.logMsg("\u52A0\u8F7D\u8FDB\u5EA6[load:progress]---\uFF1A".concat(loaded, "/").concat(total, " \u662F\u5426\u5B8C\u6210\uFF1A").concat(finish), input);
        }), (0, operators_1.takeLast)(1)).subscribe({
          next: function next(obj) {
            var _obj$valueOf2 = obj.valueOf(),
                data = _obj$valueOf2.data,
                file = _obj$valueOf2.file;

            subscriber.next(new ObjectAble_1.ObjectTarget(_objectSpread(_objectSpread({}, input._value), {}, {
              value: new ObjectAble_1.DataObject(data),
              option: {
                file: file
              }
            })));
            subscriber.complete();
          },
          complete: function complete() {
            return subscriber.complete();
          },
          error: function error(err) {
            return subscriber.error(err);
          }
        });
        return {
          unsubscribe: function unsubscribe() {
            sub.unsubscribe();
            subscriber.unsubscribe();
          }
        };
      });
    }
  }], [{
    key: "isAble",
    value: function isAble() {
      return Equipment_1.isJS;
    }
  }]);

  return LoadFileWork;
}(Instruction_1.InstructionOTO);

exports["default"] = LoadFileWork;

/***/ }),

/***/ "./source/node/Works/ExtendsWorks/OpenURLWork.js":
/*!*******************************************************!*\
  !*** ./source/node/Works/ExtendsWorks/OpenURLWork.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Instruction_1 = __webpack_require__(/*! ../Instruction */ "./source/node/Works/Instruction.js");

var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");

var ObjectAble_1 = __webpack_require__(/*! ../../Object/Able/ObjectAble */ "./source/node/Object/Able/ObjectAble.js");

var Equipment_1 = __webpack_require__(/*! ../../Util/Equipment */ "./source/node/Util/Equipment.js");

var channel_value_util_1 = __webpack_require__(/*! ../../Util/channel-value-util */ "./source/node/Util/channel-value-util.js");
/**
 * 打开路径
 * http://www.baidu.com
 * node window: file:///C:/Users/Administrator    file:///C:/Users/Administrator/Desktop/116513f379bd664b7cfe5b3b40f5737d.jpg
 *
 * node:可以打开文件 网页
 * web:只能代开网页
 */


var OpenURLWork = /*#__PURE__*/function (_Instruction_1$Instru) {
  _inherits(OpenURLWork, _Instruction_1$Instru);

  var _super = _createSuper(OpenURLWork);

  function OpenURLWork() {
    var _this;

    _classCallCheck(this, OpenURLWork);

    _this = _super.apply(this, arguments);
    _this.name = "OpenURLWork";
    return _this;
  }

  _createClass(OpenURLWork, [{
    key: "run",
    value: function run(input, option) {
      var that = this;
      return new rxjs_1.Observable(function (subscriber) {
        var target = (0, channel_value_util_1.unpackValue)(input);
        var sub = that.context.platform.open(target, option).subscribe({
          next: function next(_) {
            return subscriber.next((0, channel_value_util_1.wrapperValue)(input, new ObjectAble_1.BooleanObject(true)));
          },
          complete: function complete() {
            return subscriber.complete();
          },
          error: function error(err) {
            return subscriber.error(err);
          }
        });
        return {
          unsubscribe: function unsubscribe() {
            sub.unsubscribe();
            subscriber.unsubscribe();
          }
        };
      });
    }
  }], [{
    key: "isAble",
    value: function isAble() {
      return Equipment_1.isJS;
    }
  }]);

  return OpenURLWork;
}(Instruction_1.InstructionOTO);

exports["default"] = OpenURLWork;

/***/ }),

/***/ "./source/node/Works/ExtendsWorks/QRCodeWork.js":
/*!******************************************************!*\
  !*** ./source/node/Works/ExtendsWorks/QRCodeWork.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.QRCodeWork = void 0;

var Instruction_1 = __webpack_require__(/*! ../Instruction */ "./source/node/Works/Instruction.js");

var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");

var Equipment_1 = __webpack_require__(/*! ../../Util/Equipment */ "./source/node/Util/Equipment.js");

var channel_value_util_1 = __webpack_require__(/*! ../../Util/channel-value-util */ "./source/node/Util/channel-value-util.js");
/**
 * 字符串生产QRcode base64
 * input => StringObject
 * output => StringObject
 */


var QRCodeWork = /*#__PURE__*/function (_Instruction_1$Instru) {
  _inherits(QRCodeWork, _Instruction_1$Instru);

  var _super = _createSuper(QRCodeWork);

  function QRCodeWork() {
    var _this;

    _classCallCheck(this, QRCodeWork);

    _this = _super.apply(this, arguments);
    _this.name = "QRCodeWork";
    return _this;
  }

  _createClass(QRCodeWork, [{
    key: "run",
    value: function run(input, option) {
      var that = this;
      return new rxjs_1.Observable(function (subscriber) {
        var target;
        if (input === null || input === undefined) target = "";else {
          target = (0, channel_value_util_1.unpackValue)(input);
        }
        var sub = that.context.platform.createQrCode(target, option).subscribe({
          next: function next(res) {
            return subscriber.next((0, channel_value_util_1.wrapperValue)(input, res));
          },
          complete: function complete() {
            return subscriber.complete();
          },
          error: function error(err) {
            return subscriber.error(err);
          }
        });
        return {
          unsubscribe: function unsubscribe() {
            sub.unsubscribe();
            subscriber.unsubscribe();
          }
        };
      });
    }
  }], [{
    key: "isAble",
    value: function isAble() {
      return Equipment_1.isJS; // return isNode || isWeb || isRN
    }
  }]);

  return QRCodeWork;
}(Instruction_1.InstructionOTO);

exports.QRCodeWork = QRCodeWork;

/***/ }),

/***/ "./source/node/Works/ExtendsWorks/RunCommandWork.js":
/*!**********************************************************!*\
  !*** ./source/node/Works/ExtendsWorks/RunCommandWork.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Instruction_1 = __webpack_require__(/*! ../Instruction */ "./source/node/Works/Instruction.js");

var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");

var Equipment_1 = __webpack_require__(/*! ../../Util/Equipment */ "./source/node/Util/Equipment.js");

var channel_value_util_1 = __webpack_require__(/*! ../../Util/channel-value-util */ "./source/node/Util/channel-value-util.js");
/**
 * "1 + $I$ "
 * @param template
 * @param input
 * @param option
 * @returns
 */


function handleEvalCommand(template, input, option) {
  var inputKey = option.input;
  var command = template.replace(inputKey, input);
  return command;
}
/**
 * 默认：
 * run javascript
 *
 * node:指定
 *  = "#javascript#console.log('hello world')"
 *  = "#shell#echo hello world"
 */


var RunCommandWork = /*#__PURE__*/function (_Instruction_1$Instru) {
  _inherits(RunCommandWork, _Instruction_1$Instru);

  var _super = _createSuper(RunCommandWork);

  function RunCommandWork() {
    var _this;

    var template = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '$I$';

    _classCallCheck(this, RunCommandWork);

    _this = _super.call(this);
    _this.template = '';
    _this.name = "RunCommandWork";
    _this.template = template;
    return _this;
  }

  _createClass(RunCommandWork, [{
    key: "run",
    value: function run(command, option) {
      var _this2 = this;

      var that = this;
      return new rxjs_1.Observable(function (subscriber) {
        var target = handleEvalCommand(that.template, (0, channel_value_util_1.unpackValue)(command), option);
        var sub = that.context.platform.runCommand(target).subscribe({
          next: function next(info) {
            _this2.logMsg("\u6267\u884Ccommand\uFF1A".concat(info.error ? '失败' : '成功', "\u3002\u7ED3\u679C\uFF1A").concat(info.result), command);

            subscriber.next((0, channel_value_util_1.wrapperValue)(command, info.error ? undefined : info.result));
          },
          complete: function complete() {
            return subscriber.complete();
          },
          error: function error(err) {
            return subscriber.error(err);
          }
        });
        return {
          unsubscribe: function unsubscribe() {
            sub.unsubscribe();
            subscriber.unsubscribe();
          }
        };
      });
    }
  }], [{
    key: "isAble",
    value: function isAble() {
      return Equipment_1.isJS; // return isNode || isWeb || isRN || isElectron
    }
  }]);

  return RunCommandWork;
}(Instruction_1.InstructionOTO);

exports["default"] = RunCommandWork;

/***/ }),

/***/ "./source/node/Works/ExtendsWorks/UtilWork.js":
/*!****************************************************!*\
  !*** ./source/node/Works/ExtendsWorks/UtilWork.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DelayIntervalWork = exports.TimeoutWork = exports.IntervalWork = void 0;

var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");

var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");

var __1 = __webpack_require__(/*! ../.. */ "./source/node/index.js");

var channel_value_util_1 = __webpack_require__(/*! ../../Util/channel-value-util */ "./source/node/Util/channel-value-util.js");

var Instruction_1 = __webpack_require__(/*! ../Instruction */ "./source/node/Works/Instruction.js"); // 一直发


var IntervalWork = /*#__PURE__*/function (_Instruction_1$Instru) {
  _inherits(IntervalWork, _Instruction_1$Instru);

  var _super = _createSuper(IntervalWork);

  function IntervalWork(interval) {
    var _this;

    var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
    var notifier = arguments.length > 2 ? arguments[2] : undefined;

    _classCallCheck(this, IntervalWork);

    _this = _super.call(this);
    _this.name = "IntervalWork";
    _this.intervalTime = interval || 1000;
    _this.maxCount = max;
    _this.notifier = notifier || rxjs_1.NEVER;
    return _this;
  }

  _createClass(IntervalWork, [{
    key: "run",
    value: function run(input) {
      var _this2 = this;

      var intervalTime = parseInt((0, channel_value_util_1.unpackValue)(input)) || this.intervalTime || 1000;
      var that = this;
      return new rxjs_1.Observable(function (observer) {
        var sub = (0, rxjs_1.interval)(intervalTime, rxjs_1.asyncScheduler).pipe((0, operators_1.take)(that.maxCount), (0, operators_1.takeUntil)(_this2.notifier)).subscribe({
          next: function next(value) {
            return observer.next((0, channel_value_util_1.wrapperValue)(input, new __1.NumberObject(value)));
          },
          error: function error(_error) {
            return observer.error(_error);
          },
          complete: function complete() {
            return observer.complete();
          }
        });
        return {
          unsubscribe: function unsubscribe() {
            observer.unsubscribe();
            sub.unsubscribe();
          }
        };
      });
    }
  }]);

  return IntervalWork;
}(Instruction_1.InstructionOTM);

exports.IntervalWork = IntervalWork; // 定时发

var TimeoutWork = /*#__PURE__*/function (_Instruction_1$Instru2) {
  _inherits(TimeoutWork, _Instruction_1$Instru2);

  var _super2 = _createSuper(TimeoutWork);

  function TimeoutWork(interval) {
    var _this3;

    _classCallCheck(this, TimeoutWork);

    _this3 = _super2.call(this);
    _this3.name = "TimeoutWork";
    _this3.intervalTime = interval || 1000;
    return _this3;
  }

  _createClass(TimeoutWork, [{
    key: "run",
    value: function run(input) {
      var intervalTime = parseInt((0, channel_value_util_1.unpackValue)(input)) || this.intervalTime || 1000;
      var that = this;
      return new rxjs_1.Observable(function (observer) {
        var sub = (0, rxjs_1.interval)(intervalTime, rxjs_1.asyncScheduler).pipe((0, operators_1.take)(1)).subscribe({
          next: function next(value) {
            observer.next((0, channel_value_util_1.wrapperValue)(input, new __1.NumberObject(value)));
          },
          error: function error(_error2) {
            return observer.error(_error2);
          },
          complete: function complete() {
            return observer.complete();
          }
        });
        return {
          unsubscribe: function unsubscribe() {
            observer.unsubscribe();
            sub.unsubscribe();
          }
        };
      });
    }
  }]);

  return TimeoutWork;
}(Instruction_1.InstructionOTO);

exports.TimeoutWork = TimeoutWork; // 延迟 然后一直发

var DelayIntervalWork = /*#__PURE__*/function (_Instruction_1$Instru3) {
  _inherits(DelayIntervalWork, _Instruction_1$Instru3);

  var _super3 = _createSuper(DelayIntervalWork);

  function DelayIntervalWork() {
    var _this4;

    var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
    var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;
    var notifier = arguments.length > 3 ? arguments[3] : undefined;

    _classCallCheck(this, DelayIntervalWork);

    _this4 = _super3.call(this);
    _this4.name = 'DelayIntervalWork';
    _this4.intervalTime = interval || 1000;
    _this4.maxCount = max;
    _this4.delayTime = delay || 0;
    _this4.notifier = notifier || rxjs_1.NEVER;
    return _this4;
  }

  _createClass(DelayIntervalWork, [{
    key: "run",
    value: function run(input) {
      var _this5 = this;

      var intervalTime = parseInt((0, channel_value_util_1.unpackValue)(input)) || this.intervalTime || 1000;
      var that = this;
      return new rxjs_1.Observable(function (observer) {
        var sub = (0, rxjs_1.timer)(that.delayTime, intervalTime, rxjs_1.asyncScheduler).pipe((0, operators_1.take)(that.maxCount), (0, operators_1.takeUntil)(_this5.notifier)).subscribe({
          next: function next(value) {
            return observer.next((0, channel_value_util_1.wrapperValue)(input, new __1.NumberObject(value)));
          },
          error: function error(_error3) {
            return observer.error(_error3);
          },
          complete: function complete() {
            return observer.complete();
          }
        });
        return {
          unsubscribe: function unsubscribe() {
            observer.unsubscribe();
            sub.unsubscribe();
          }
        };
      });
    }
  }]);

  return DelayIntervalWork;
}(Instruction_1.InstructionOTM);

exports.DelayIntervalWork = DelayIntervalWork;

/***/ }),

/***/ "./source/node/Works/Instruction.js":
/*!******************************************!*\
  !*** ./source/node/Works/Instruction.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.InstructionMTM = exports.InstructionOTM = exports.InstructionOTO = exports.Instruction = void 0;

var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");

var Equipment_1 = __webpack_require__(/*! ../Util/Equipment */ "./source/node/Util/Equipment.js");

var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");

var uuid_1 = __webpack_require__(/*! uuid */ "uuid");

var WorkUnit_1 = __webpack_require__(/*! ./WorkUnit */ "./source/node/Works/WorkUnit.js");

var ObjectAble_1 = __webpack_require__(/*! ../Object/Able/ObjectAble */ "./source/node/Object/Able/ObjectAble.js");

var channel_value_util_1 = __webpack_require__(/*! ../Util/channel-value-util */ "./source/node/Util/channel-value-util.js");
/**
 * 一次输入--->一次输出 InstructionOTO
 * 一次输入--->多次输出 InstructionOTM
 * n次输入---->m次输出 InstructionMTM
 */


var Instruction = /*#__PURE__*/function (_rxjs_1$Subject) {
  _inherits(Instruction, _rxjs_1$Subject);

  var _super = _createSuper(Instruction);

  function Instruction() {
    var _this;

    _classCallCheck(this, Instruction);

    _this = _super.call(this);
    _this.name = "Instruction";
    _this.id = Instruction._id++;
    _this.runSubscriptions = new Map();
    _this.pools = []; // 订阅自己的
    // 运行配置 config:OPTION todo

    _this.config = {
      development: true
    };
    _this.uuid = (0, uuid_1.v4)();
    return _this;
  } // 连接上下通道


  _createClass(Instruction, [{
    key: "prepare",
    value: function prepare(before, next) {
      this.beforeWork = before;
      this.nextWork = next;
      this.config = this.context.runOptions;

      this._connectChannel();

      return Promise.resolve();
    } // 处理上一个的传入

  }, {
    key: "_connectChannel",
    value: function _connectChannel() {
      var _this2 = this;

      var that = this; // // 处理数据

      var sub2 = this.pipe((0, operators_1.tap)(function (value) {
        var _this2$config, _that$context;

        ((_this2$config = _this2.config) === null || _this2$config === void 0 ? void 0 : _this2$config.development) && ((_that$context = that.context) === null || _that$context === void 0 ? void 0 : _that$context.sendLog({
          work: [that],
          content: _this2.context,
          desc: "[Work:preRun]->接受到数据",
          value: value
        }));
      })).subscribe({
        complete: function complete() {},
        error: function error(_error2) {
          return that.error(_error2);
        },
        next: function next(value) {
          return that._run(value);
        }
      });
      this.pools.push(sub2);
    }
  }, {
    key: "_run",
    value: function _run(value) {
      var _this3 = this,
          _this$config;

      var sendLog = function sendLog(desc, _value, _error) {
        var _that$config, _that$context2;

        ((_that$config = that.config) === null || _that$config === void 0 ? void 0 : _that$config.development) && ((_that$context2 = that.context) === null || _that$context2 === void 0 ? void 0 : _that$context2.sendLog({
          work: [that],
          content: _this3.context,
          desc: desc,
          value: _value || value,
          error: _error
        }));
      };

      value = this.nextValue(value) || value;
      var that = this;
      var nextOption = (((_this$config = this.config) === null || _this$config === void 0 ? void 0 : _this$config.workConfig) || {})[this.name] || {};
      var execFunc = (0, Equipment_1.PlatformSelect)({
        web: function web() {
          var _that$web_run;

          return ((_that$web_run = that.web_run) !== null && _that$web_run !== void 0 ? _that$web_run : that.run).bind(that)(value, nextOption);
        },
        node: function node() {
          var _that$node_run;

          return ((_that$node_run = that.node_run) !== null && _that$node_run !== void 0 ? _that$node_run : that.run).bind(that)(value, nextOption);
        },
        electron: function electron() {
          var _that$electron_run;

          return ((_that$electron_run = that.electron_run) !== null && _that$electron_run !== void 0 ? _that$electron_run : that.run).bind(that)(value, nextOption);
        },
        other: function other() {
          return that.run.bind(that)(value, nextOption);
        }
      });
      sendLog("[Work][Func:run]->入口", value);
      if (!execFunc === true) return sendLog("[Work][Func:run]->没有实现run", value);
      ;
      var uuid = (0, uuid_1.v4)();
      var runSub = execFunc(value).pipe((0, operators_1.tap)(function (_value) {
        return sendLog("[Work][Func:run]->结果", _value);
      }), (0, operators_1.observeOn)(rxjs_1.asyncScheduler)).subscribe({
        complete: function complete() {
          var unit = that.runSubscriptions.get(uuid);
          unit === null || unit === void 0 ? void 0 : unit.sub.unsubscribe();
          that.runSubscriptions["delete"](uuid);
        },
        error: function error(err) {
          sendLog("[Work][Func:run]->执行错误", value, err);
          that.completeOneLoop(value, null, false);
        },
        next: function next(res) {
          var _that$nextWork;

          sendLog("[Work][Func:run]->将执行下一个Work", res);
          that.completeOneLoop(value, res, true);
          (_that$nextWork = that.nextWork) === null || _that$nextWork === void 0 ? void 0 : _that$nextWork.next(res);
        }
      });
      var unit = new WorkUnit_1.WorkUnit(that.context, that, runSub, uuid);
      this.runSubscriptions.set(unit.uuid, unit);
    }
  }, {
    key: "stopWork",
    value: function stopWork() {
      var that = this;
      return new rxjs_1.Observable(function (subscribe) {
        that.runSubscriptions.forEach(function (value) {
          value === null || value === void 0 ? void 0 : value.sub.unsubscribe();
        });
        subscribe.next(true);
        subscribe.complete();
        return {
          unsubscribe: function unsubscribe() {
            return subscribe.unsubscribe();
          }
        };
      });
    }
  }, {
    key: "clear",
    value: function clear() {
      this.pools && this.pools.forEach(function ($1) {
        return $1.unsubscribe();
      });
      this.pools.length = 0;
      this.unsubscribe();
    }
  }, {
    key: "error",
    value: function error(err) {
      this.context && this.context.sendLog({
        work: [this],
        content: this.context,
        desc: "[Work:preRun]-接受上一个消息错误",
        date: new Date(),
        value: new ObjectAble_1.StringObject(err.message)
      });
    }
  }, {
    key: "addVariable",
    value: function addVariable(name, value) {
      this.context && this.context.addVariable(this, name, value);
    }
  }, {
    key: "logMsg",
    value: function logMsg(msg, input) {
      var _this$config2, _this$context;

      ((_this$config2 = this.config) === null || _this$config2 === void 0 ? void 0 : _this$config2.development) && ((_this$context = this.context) === null || _this$context === void 0 ? void 0 : _this$context.sendLog({
        work: [this],
        content: this.context,
        desc: msg,
        value: (0, channel_value_util_1.wrapperValue)(input, null)
      }));
    } //重写

  }, {
    key: "next",
    value: function next(value) {
      if (this.closed === false) {
        _get(_getPrototypeOf(Instruction.prototype), "next", this).call(this, value);
      } else {
        this.context.sendLog({
          work: [this],
          content: this.context,
          desc: this.toString() + " 已经关闭",
          value: (0, channel_value_util_1.wrapperValue)(value, null)
        });
      }
    } // 声明周期
    // 处理输入的值

  }, {
    key: "nextValue",
    value: function nextValue(input) {
      return input;
    }
  }, {
    key: "completeOneLoop",
    value: function completeOneLoop(input, toValue, success) {} // 基础

  }, {
    key: "toString",
    value: function toString() {
      return "[".concat(this.name, ":").concat(this.id, "]");
    }
  }, {
    key: "isAble",
    value: function isAble() {
      return this.__proto__.isAble();
    }
  }], [{
    key: "isAble",
    value: function isAble() {
      return Equipment_1.isJS;
    }
  }]);

  return Instruction;
}(rxjs_1.Subject);

exports.Instruction = Instruction;
Instruction._id = 0;

var InstructionOTO = /*#__PURE__*/function (_Instruction) {
  _inherits(InstructionOTO, _Instruction);

  var _super2 = _createSuper(InstructionOTO);

  function InstructionOTO() {
    _classCallCheck(this, InstructionOTO);

    return _super2.apply(this, arguments);
  }

  _createClass(InstructionOTO, [{
    key: "nextValue",
    value: function nextValue(input) {
      return input;
    }
  }, {
    key: "completeOneLoop",
    value: function completeOneLoop(input, toValue, success) {}
  }, {
    key: "run",
    value: function run(input) {
      return new rxjs_1.Observable(function (subscriber) {
        subscriber.next(input);
        subscriber.complete();
        return {
          unsubscribe: function unsubscribe() {
            return subscriber.unsubscribe();
          }
        };
      });
    }
  }]);

  return InstructionOTO;
}(Instruction);

exports.InstructionOTO = InstructionOTO;

var InstructionOTM = /*#__PURE__*/function (_Instruction2) {
  _inherits(InstructionOTM, _Instruction2);

  var _super3 = _createSuper(InstructionOTM);

  function InstructionOTM() {
    var _this4;

    _classCallCheck(this, InstructionOTM);

    _this4 = _super3.apply(this, arguments);
    _this4.name = "MultipleInstruction";
    return _this4;
  }

  _createClass(InstructionOTM, [{
    key: "nextValue",
    value: function nextValue(input) {
      return input;
    }
  }, {
    key: "completeOneLoop",
    value: function completeOneLoop(input, next, success) {}
  }, {
    key: "run",
    value: function run(input) {
      return new rxjs_1.Observable(function (subscriber) {
        // subscriber.next(input);
        // 输出多次
        subscriber.next(input);
        subscriber.complete();
        return {
          unsubscribe: function unsubscribe() {
            return subscriber.unsubscribe();
          }
        };
      });
    }
  }]);

  return InstructionOTM;
}(Instruction);

exports.InstructionOTM = InstructionOTM;

var InstructionMTM = /*#__PURE__*/function (_Instruction3) {
  _inherits(InstructionMTM, _Instruction3);

  var _super4 = _createSuper(InstructionMTM);

  function InstructionMTM() {
    var _this5;

    _classCallCheck(this, InstructionMTM);

    _this5 = _super4.apply(this, arguments);
    _this5.name = "MultipleInstruction";
    return _this5;
  }

  _createClass(InstructionMTM, [{
    key: "nextValue",
    value: function nextValue(input) {
      return input;
    }
  }, {
    key: "completeOneLoop",
    value: function completeOneLoop(input, next, success) {}
  }, {
    key: "run",
    value: function run(input) {
      return new rxjs_1.Observable(function (subscriber) {
        // subscriber.next(input);
        // 输出多次
        subscriber.next(input);
        subscriber.complete();
        return {
          unsubscribe: function unsubscribe() {
            return subscriber.unsubscribe();
          }
        };
      });
    }
  }]);

  return InstructionMTM;
}(Instruction);

exports.InstructionMTM = InstructionMTM;

/***/ }),

/***/ "./source/node/Works/WorkUnit.js":
/*!***************************************!*\
  !*** ./source/node/Works/WorkUnit.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WorkUnit = void 0;

var uuid_1 = __webpack_require__(/*! uuid */ "uuid");

var WorkUnit = /*#__PURE__*/_createClass(function WorkUnit(context, work, sub, uuid) {
  _classCallCheck(this, WorkUnit);

  this.context = context;
  this.work = work;
  this.sub = sub;
  this.uuid = uuid !== null && uuid !== void 0 ? uuid : (0, uuid_1.v4)();
});

exports.WorkUnit = WorkUnit;

/***/ }),

/***/ "./source/node/index.js":
/*!******************************!*\
  !*** ./source/node/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.decide = exports.isAbleType = exports.wrapperValue = exports.unpackValue = exports.FetchWork = exports.DelayIntervalWork = exports.TimeoutWork = exports.IntervalWork = exports.RunCommandWork = exports.QRCodeWork = exports.OpenURLWork = exports.LoadFileWork = exports.Base64EnCodeWork = exports.Base64DecodeWork = exports.InstructionOTO = exports.InstructionOTM = exports.InstructionMTM = exports.ControlFlow = exports.WorkType = exports.Context = exports.DataObject = exports.DateObject = exports.BooleanObject = exports.StringObject = exports.NumberObject = exports.SetObject = exports.MapObject = exports.ArrayObject = exports.ObjectTarget = void 0;

var ObjectAble_1 = __webpack_require__(/*! ./Object/Able/ObjectAble */ "./source/node/Object/Able/ObjectAble.js");

Object.defineProperty(exports, "ObjectTarget", ({
  enumerable: true,
  get: function get() {
    return ObjectAble_1.ObjectTarget;
  }
}));
Object.defineProperty(exports, "ArrayObject", ({
  enumerable: true,
  get: function get() {
    return ObjectAble_1.ArrayObject;
  }
}));
Object.defineProperty(exports, "MapObject", ({
  enumerable: true,
  get: function get() {
    return ObjectAble_1.MapObject;
  }
}));
Object.defineProperty(exports, "SetObject", ({
  enumerable: true,
  get: function get() {
    return ObjectAble_1.SetObject;
  }
}));
Object.defineProperty(exports, "NumberObject", ({
  enumerable: true,
  get: function get() {
    return ObjectAble_1.NumberObject;
  }
}));
Object.defineProperty(exports, "StringObject", ({
  enumerable: true,
  get: function get() {
    return ObjectAble_1.StringObject;
  }
}));
Object.defineProperty(exports, "BooleanObject", ({
  enumerable: true,
  get: function get() {
    return ObjectAble_1.BooleanObject;
  }
}));
Object.defineProperty(exports, "DateObject", ({
  enumerable: true,
  get: function get() {
    return ObjectAble_1.DateObject;
  }
}));
Object.defineProperty(exports, "DataObject", ({
  enumerable: true,
  get: function get() {
    return ObjectAble_1.DataObject;
  }
}));

var Types_1 = __webpack_require__(/*! ./Types */ "./source/node/Types.js");

Object.defineProperty(exports, "WorkType", ({
  enumerable: true,
  get: function get() {
    return Types_1.WorkType;
  }
}));

var Control_1 = __webpack_require__(/*! ./Object/Control */ "./source/node/Object/Control.js");

Object.defineProperty(exports, "ControlFlow", ({
  enumerable: true,
  get: function get() {
    return Control_1.ControlFlow;
  }
}));

var Context_1 = __webpack_require__(/*! ./Context */ "./source/node/Context.js");

Object.defineProperty(exports, "Context", ({
  enumerable: true,
  get: function get() {
    return Context_1.Context;
  }
}));

var Instruction_1 = __webpack_require__(/*! ./Works/Instruction */ "./source/node/Works/Instruction.js");

Object.defineProperty(exports, "InstructionMTM", ({
  enumerable: true,
  get: function get() {
    return Instruction_1.InstructionMTM;
  }
}));
Object.defineProperty(exports, "InstructionOTM", ({
  enumerable: true,
  get: function get() {
    return Instruction_1.InstructionOTM;
  }
}));
Object.defineProperty(exports, "InstructionOTO", ({
  enumerable: true,
  get: function get() {
    return Instruction_1.InstructionOTO;
  }
}));

var Base64Work_1 = __webpack_require__(/*! ./Works/ExtendsWorks/Base64Work */ "./source/node/Works/ExtendsWorks/Base64Work.js");

Object.defineProperty(exports, "Base64DecodeWork", ({
  enumerable: true,
  get: function get() {
    return Base64Work_1.Base64DecodeWork;
  }
}));
Object.defineProperty(exports, "Base64EnCodeWork", ({
  enumerable: true,
  get: function get() {
    return Base64Work_1.Base64EnCodeWork;
  }
}));

var LoadFileWork_1 = __webpack_require__(/*! ./Works/ExtendsWorks/LoadFileWork */ "./source/node/Works/ExtendsWorks/LoadFileWork.js");

exports.LoadFileWork = LoadFileWork_1["default"];

var OpenURLWork_1 = __webpack_require__(/*! ./Works/ExtendsWorks/OpenURLWork */ "./source/node/Works/ExtendsWorks/OpenURLWork.js");

exports.OpenURLWork = OpenURLWork_1["default"];

var QRCodeWork_1 = __webpack_require__(/*! ./Works/ExtendsWorks/QRCodeWork */ "./source/node/Works/ExtendsWorks/QRCodeWork.js");

Object.defineProperty(exports, "QRCodeWork", ({
  enumerable: true,
  get: function get() {
    return QRCodeWork_1.QRCodeWork;
  }
}));

var FetchWork_1 = __webpack_require__(/*! ./Works/ExtendsWorks/FetchWork */ "./source/node/Works/ExtendsWorks/FetchWork.js");

exports.FetchWork = FetchWork_1["default"];

var RunCommandWork_1 = __webpack_require__(/*! ./Works/ExtendsWorks/RunCommandWork */ "./source/node/Works/ExtendsWorks/RunCommandWork.js");

exports.RunCommandWork = RunCommandWork_1["default"];

var UtilWork_1 = __webpack_require__(/*! ./Works/ExtendsWorks/UtilWork */ "./source/node/Works/ExtendsWorks/UtilWork.js");

Object.defineProperty(exports, "IntervalWork", ({
  enumerable: true,
  get: function get() {
    return UtilWork_1.IntervalWork;
  }
}));
Object.defineProperty(exports, "TimeoutWork", ({
  enumerable: true,
  get: function get() {
    return UtilWork_1.TimeoutWork;
  }
}));
Object.defineProperty(exports, "DelayIntervalWork", ({
  enumerable: true,
  get: function get() {
    return UtilWork_1.DelayIntervalWork;
  }
}));

var channel_value_util_1 = __webpack_require__(/*! ./Util/channel-value-util */ "./source/node/Util/channel-value-util.js");

Object.defineProperty(exports, "unpackValue", ({
  enumerable: true,
  get: function get() {
    return channel_value_util_1.unpackValue;
  }
}));
Object.defineProperty(exports, "wrapperValue", ({
  enumerable: true,
  get: function get() {
    return channel_value_util_1.wrapperValue;
  }
}));

var valueUtil_1 = __webpack_require__(/*! ./Object/valueUtil */ "./source/node/Object/valueUtil.js");

Object.defineProperty(exports, "isAbleType", ({
  enumerable: true,
  get: function get() {
    return valueUtil_1.isAbleType;
  }
}));
Object.defineProperty(exports, "decide", ({
  enumerable: true,
  get: function get() {
    return valueUtil_1.decide;
  }
})); // 1

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "js-base64":
/*!****************************!*\
  !*** external "js-base64" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("js-base64");

/***/ }),

/***/ "open":
/*!***********************!*\
  !*** external "open" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("open");

/***/ }),

/***/ "qrcode-generator":
/*!***********************************!*\
  !*** external "qrcode-generator" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("qrcode-generator");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("rxjs/operators");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("uuid");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./source/node/index.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map