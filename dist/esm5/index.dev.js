(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rxjs"), require("qrcode-generator"), require("axios"), require("uuid"), require("rxjs/operators"), require("js-base64"));
	else if(typeof define === 'function' && define.amd)
		define(["rxjs", "qrcode-generator", "axios", "uuid", "rxjs/operators", "js-base64"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("rxjs"), require("qrcode-generator"), require("axios"), require("uuid"), require("rxjs/operators"), require("js-base64")) : factory(root["rxjs"], root["qrcode-generator"], root["axios"], root["uuid"], root["rxjs/operators"], root["js-base64"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, (__WEBPACK_EXTERNAL_MODULE_rxjs__, __WEBPACK_EXTERNAL_MODULE_qrcode_generator__, __WEBPACK_EXTERNAL_MODULE_axios__, __WEBPACK_EXTERNAL_MODULE_uuid__, __WEBPACK_EXTERNAL_MODULE_rxjs_operators__, __WEBPACK_EXTERNAL_MODULE_js_base64__) => {
return /******/ (() => { // webpackBootstrap
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

/***/ "./source/web/Bridge/ConfigTypes.js":
/*!******************************************!*\
  !*** ./source/web/Bridge/ConfigTypes.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileType": () => (/* binding */ FileType),
/* harmony export */   "SupportContentType": () => (/* binding */ SupportContentType)
/* harmony export */ });
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
})(FileType || (FileType = {}));

var SupportContentType;

(function (SupportContentType) {
  SupportContentType["JSON"] = "application/json";
  SupportContentType["TEXT"] = "text/plain";
})(SupportContentType || (SupportContentType = {})); // export interface BasePlatformBridgeAble extends PlatformBridgeAble { }
// export interface WebBridgeAble extends BasePlatformBridgeAble { }
// export interface NodejsBridgeAble extends BasePlatformBridgeAble { }
// export interface MobilePlatformBridgeAble extends PlatformBridgeAble { }
// export interface MobileWebBridgeAble extends MobilePlatformBridgeAble { }
// export interface MobileNodejsBridgeAble extends MobilePlatformBridgeAble { }

/***/ }),

/***/ "./source/web/Bridge/Difference/index.js":
/*!***********************************************!*\
  !*** ./source/web/Bridge/Difference/index.js ***!
  \***********************************************/
/***/ (() => {

// import './Fetch/index'

/***/ }),

/***/ "./source/web/Bridge/Index.js":
/*!************************************!*\
  !*** ./source/web/Bridge/Index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Util_Equipment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Util/Equipment */ "./source/web/Util/Equipment.js");
/* harmony import */ var _Platform_Node_Mobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Platform/Node/Mobile */ "./source/web/Bridge/Platform/Node/Mobile.js");
/* harmony import */ var _Platform_Node_PC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Platform/Node/PC */ "./source/web/Bridge/Platform/Node/PC.js");
/* harmony import */ var _Platform_Web_Mobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Platform/Web/Mobile */ "./source/web/Bridge/Platform/Web/Mobile.js");
/* harmony import */ var _Platform_Web_PC__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Platform/Web/PC */ "./source/web/Bridge/Platform/Web/PC.js");
/* harmony import */ var _Difference_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Difference/index */ "./source/web/Bridge/Difference/index.js");
/* harmony import */ var _Difference_index__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Difference_index__WEBPACK_IMPORTED_MODULE_5__);






var runConfig = (0,_Util_Equipment__WEBPACK_IMPORTED_MODULE_0__.PlatformSelect)({
  web: {
    pc: _Platform_Web_PC__WEBPACK_IMPORTED_MODULE_4__.PCWebBridge,
    mobile: _Platform_Web_Mobile__WEBPACK_IMPORTED_MODULE_3__.MobileWebBridge
  },
  node: {
    pc: _Platform_Node_PC__WEBPACK_IMPORTED_MODULE_2__.PCNodejsBridge,
    mobile: _Platform_Node_Mobile__WEBPACK_IMPORTED_MODULE_1__.MobileNodejsBridge
  }
});
var Target = runConfig[_Util_Equipment__WEBPACK_IMPORTED_MODULE_0__.isPC ? 'pc' : 'mobile'];
var Platform = Reflect.construct(Target, []);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Platform);

/***/ }),

/***/ "./source/web/Bridge/Platform/BasePlatform.js":
/*!****************************************************!*\
  !*** ./source/web/Bridge/Platform/BasePlatform.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlatformBridge": () => (/* binding */ PlatformBridge)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Object */ "./source/web/Object/index.js");
/* harmony import */ var qrcode_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qrcode-generator */ "qrcode-generator");
/* harmony import */ var qrcode_generator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qrcode_generator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Hardware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Hardware */ "./source/web/Bridge/Platform/Hardware.js");
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






var PlatformBridge = /*#__PURE__*/function (_HardwareBase) {
  _inherits(PlatformBridge, _HardwareBase);

  var _super = _createSuper(PlatformBridge);

  function PlatformBridge() {
    _classCallCheck(this, PlatformBridge);

    return _super.apply(this, arguments);
  }

  _createClass(PlatformBridge, [{
    key: "createQrCode",
    value: function createQrCode(context, option) {
      return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (sub) {
        var _option$SideLength;

        var width = (_option$SideLength = option === null || option === void 0 ? void 0 : option.SideLength) !== null && _option$SideLength !== void 0 ? _option$SideLength : 200;
        var margin = 2;
        var qrCode = qrcode_generator__WEBPACK_IMPORTED_MODULE_2__((option === null || option === void 0 ? void 0 : option.type) || 4, (option === null || option === void 0 ? void 0 : option.Level) || "H");
        qrCode.addData(context !== null && context !== void 0 ? context : "");
        qrCode.make();
        var moduleCount = qrCode.getModuleCount();
        var cellSize = (width - margin * 2) / moduleCount;
        var base64 = qrCode.createDataURL(cellSize, margin); // const base64 = qrcode.createDataURL(cellSize, margin).replace('data:image/gif;base64', 'data:image/png;base64');

        sub.next(new _Object__WEBPACK_IMPORTED_MODULE_1__.StringObject(base64));
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
      return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) {
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
      return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) {
        axios__WEBPACK_IMPORTED_MODULE_3___default().request(req).then(function (response) {
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
          subscriber.next(new _Object__WEBPACK_IMPORTED_MODULE_1__.ObjectTarget(content));
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
}(_Hardware__WEBPACK_IMPORTED_MODULE_4__.HardwareBase);

/***/ }),

/***/ "./source/web/Bridge/Platform/Hardware.js":
/*!************************************************!*\
  !*** ./source/web/Bridge/Platform/Hardware.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HardwareBase": () => (/* binding */ HardwareBase)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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

/***/ }),

/***/ "./source/web/Bridge/Platform/Node/Mobile.js":
/*!***************************************************!*\
  !*** ./source/web/Bridge/Platform/Node/Mobile.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileNodejsBridge": () => (/* binding */ MobileNodejsBridge)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Object */ "./source/web/Object/index.js");
/* harmony import */ var _BasePlatform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BasePlatform */ "./source/web/Bridge/Platform/BasePlatform.js");
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




var MobileNodejsBridge = /*#__PURE__*/function (_PlatformBridge) {
  _inherits(MobileNodejsBridge, _PlatformBridge);

  var _super = _createSuper(MobileNodejsBridge);

  function MobileNodejsBridge() {
    _classCallCheck(this, MobileNodejsBridge);

    return _super.apply(this, arguments);
  }

  _createClass(MobileNodejsBridge, [{
    key: "open",
    value: function open(url) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _Object__WEBPACK_IMPORTED_MODULE_1__.BooleanObject(false));
    }
  }, {
    key: "loadFile",
    value: function loadFile(url, option) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _Object__WEBPACK_IMPORTED_MODULE_1__.ObjectTarget({
        total: 0,
        loaded: 0,
        data: new ArrayBuffer(0),
        finish: true,
        file: null
      }));
    }
  }]);

  return MobileNodejsBridge;
}(_BasePlatform__WEBPACK_IMPORTED_MODULE_2__.PlatformBridge);

/***/ }),

/***/ "./source/web/Bridge/Platform/Node/PC.js":
/*!***********************************************!*\
  !*** ./source/web/Bridge/Platform/Node/PC.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PCNodejsBridge": () => (/* binding */ PCNodejsBridge)
/* harmony export */ });
/* harmony import */ var _BasePlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BasePlatform */ "./source/web/Bridge/Platform/BasePlatform.js");
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


var PCNodejsBridge = /*#__PURE__*/function (_PlatformBridge) {
  _inherits(PCNodejsBridge, _PlatformBridge);

  var _super = _createSuper(PCNodejsBridge);

  function PCNodejsBridge() {
    _classCallCheck(this, PCNodejsBridge);

    return _super.apply(this, arguments);
  }

  return _createClass(PCNodejsBridge);
}(_BasePlatform__WEBPACK_IMPORTED_MODULE_0__.PlatformBridge);

/***/ }),

/***/ "./source/web/Bridge/Platform/Web/Mobile.js":
/*!**************************************************!*\
  !*** ./source/web/Bridge/Platform/Web/Mobile.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileWebBridge": () => (/* binding */ MobileWebBridge)
/* harmony export */ });
/* harmony import */ var _WebBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebBase */ "./source/web/Bridge/Platform/Web/WebBase.js");
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


var MobileWebBridge = /*#__PURE__*/function (_WebBridge) {
  _inherits(MobileWebBridge, _WebBridge);

  var _super = _createSuper(MobileWebBridge);

  function MobileWebBridge() {
    _classCallCheck(this, MobileWebBridge);

    return _super.apply(this, arguments);
  }

  return _createClass(MobileWebBridge);
}(_WebBase__WEBPACK_IMPORTED_MODULE_0__.WebBridge);

/***/ }),

/***/ "./source/web/Bridge/Platform/Web/PC.js":
/*!**********************************************!*\
  !*** ./source/web/Bridge/Platform/Web/PC.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PCWebBridge": () => (/* binding */ PCWebBridge)
/* harmony export */ });
/* harmony import */ var _WebBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebBase */ "./source/web/Bridge/Platform/Web/WebBase.js");
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


var PCWebBridge = /*#__PURE__*/function (_WebBridge) {
  _inherits(PCWebBridge, _WebBridge);

  var _super = _createSuper(PCWebBridge);

  function PCWebBridge() {
    _classCallCheck(this, PCWebBridge);

    return _super.apply(this, arguments);
  }

  return _createClass(PCWebBridge);
}(_WebBase__WEBPACK_IMPORTED_MODULE_0__.WebBridge);

/***/ }),

/***/ "./source/web/Bridge/Platform/Web/WebBase.js":
/*!***************************************************!*\
  !*** ./source/web/Bridge/Platform/Web/WebBase.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebBridge": () => (/* binding */ WebBridge)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Object */ "./source/web/Object/index.js");
/* harmony import */ var _BasePlatform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BasePlatform */ "./source/web/Bridge/Platform/BasePlatform.js");
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




var WebBridge = /*#__PURE__*/function (_PlatformBridge) {
  _inherits(WebBridge, _PlatformBridge);

  var _super = _createSuper(WebBridge);

  function WebBridge() {
    _classCallCheck(this, WebBridge);

    return _super.apply(this, arguments);
  }

  _createClass(WebBridge, [{
    key: "open",
    value: function open(url) {
      var result = window.open(url, "__blank");
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _Object__WEBPACK_IMPORTED_MODULE_1__.BooleanObject(result !== null));
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
      return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) {
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
            subscriber.next(new _Object__WEBPACK_IMPORTED_MODULE_1__.ObjectTarget({
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
            subscriber.next(new _Object__WEBPACK_IMPORTED_MODULE_1__.ObjectTarget({
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
}(_BasePlatform__WEBPACK_IMPORTED_MODULE_2__.PlatformBridge);

/***/ }),

/***/ "./source/web/Configs/index.js":
/*!*************************************!*\
  !*** ./source/web/Configs/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultRunConfig": () => (/* binding */ DefaultRunConfig)
/* harmony export */ });
/* harmony import */ var _Bridge_ConfigTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Bridge/ConfigTypes */ "./source/web/Bridge/ConfigTypes.js");

/**
 * 默认的配置
 */

var DefaultRunConfig = {
  development: true,
  environment: {},
  workConfig: {
    QRCodeWork: {
      type: 4,
      Level: "H",
      SideLength: 100
    },
    RunCommandWork: {},
    LoadFileWork: {
      type: _Bridge_ConfigTypes__WEBPACK_IMPORTED_MODULE_0__.FileType.All
    },
    FetchWork: {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }
  }
};

/***/ }),

/***/ "./source/web/Context.js":
/*!*******************************!*\
  !*** ./source/web/Context.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Context": () => (/* binding */ Context)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Types */ "./source/web/Types.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Configs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Configs */ "./source/web/Configs/index.js");
/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Object */ "./source/web/Object/index.js");
/* harmony import */ var _Bridge_Index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Bridge/Index */ "./source/web/Bridge/Index.js");
/* harmony import */ var _Works_ExtendsWorks_BeginWork__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Works/ExtendsWorks/BeginWork */ "./source/web/Works/ExtendsWorks/BeginWork.js");
/* harmony import */ var _Object_valueUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Object/valueUtil */ "./source/web/Object/valueUtil.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var Context = /*#__PURE__*/function () {
  /**
   * 运行配置文件 todo
   */

  /**
   * 上下文变量
   */

  /**
   * 所有work
   */

  /**
   * 消息传输通道
   */
  function Context(runOptions) {
    var _this = this;

    _classCallCheck(this, Context);

    _defineProperty(this, "status", _Types__WEBPACK_IMPORTED_MODULE_1__.WorkType.WorkRunStatus.INIT);

    _defineProperty(this, "platform", _Bridge_Index__WEBPACK_IMPORTED_MODULE_5__["default"]);

    _defineProperty(this, "runOptions", void 0);

    _defineProperty(this, "runConstant", new Map());

    _defineProperty(this, "works", []);

    _defineProperty(this, "msgChannel", new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject());

    _defineProperty(this, "pools", []);

    this.runOptions = runOptions || _Configs__WEBPACK_IMPORTED_MODULE_3__.DefaultRunConfig;
    var sub = this.msgChannel.subscribe({
      next: function next(value) {
        return _this.workMessage(value);
      },
      error: function error(_error) {
        return _this.workError(_error);
      }
    });
    this.pools.push(sub);
    this.addWork(new _Works_ExtendsWorks_BeginWork__WEBPACK_IMPORTED_MODULE_6__.BeginWork());
  }
  /**
   * 需要销毁的Subscription
   */


  _createClass(Context, [{
    key: "addVariable",
    value:
    /**
     * 增加上下文变量
     * @param from
     * @param name
     * @param value
     */
    function addVariable(from, name, value) {
      var w_map = this.runConstant.get(from.uuid);
      !w_map && this.runConstant.set(from.uuid, new Map());
      this.runConstant.get(from.uuid).set(name, value);
    }
  }, {
    key: "workMessage",
    value: function workMessage(input) {
      console.log('msgChannel', input);
    }
  }, {
    key: "workError",
    value: function workError(error) {
      console.log('msgChannelError', error);
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
        var desc = '[content][Func:addWork][work isAble is false]';
        return this.sendLog({
          content: this,
          work: [],
          desc: desc,
          value: null,
          error: new Error(desc)
        });
      }

      if (this.status !== _Types__WEBPACK_IMPORTED_MODULE_1__.WorkType.WorkRunStatus.INIT) {
        return this.sendLog({
          content: this,
          work: [],
          desc: '[content][Func:addWork][context status is not init]',
          value: new _Object__WEBPACK_IMPORTED_MODULE_4__.BooleanObject(false)
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
                if (!(this.status !== _Types__WEBPACK_IMPORTED_MODULE_1__.WorkType.WorkRunStatus.INIT)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", this.sendLog({
                  content: this,
                  work: [],
                  desc: '[content][Func:prepareWorks][context status is not init]',
                  value: new _Object__WEBPACK_IMPORTED_MODULE_4__.BooleanObject(false)
                }));

              case 2:
                _context.next = 4;
                return Promise.all(this.works.map(function ($1, index, source) {
                  var before = source[index - 1];
                  var after = source[index + 1];
                  return $1.prepare(before, after);
                }));

              case 4:
                this.status = _Types__WEBPACK_IMPORTED_MODULE_1__.WorkType.WorkRunStatus.READY;

              case 5:
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
      if (this.status === _Types__WEBPACK_IMPORTED_MODULE_1__.WorkType.WorkRunStatus.INIT) {
        return this.sendLog({
          content: this,
          work: [],
          desc: '[context][Func:run][run status is not ready  or 已经初始化]',
          value: new _Object__WEBPACK_IMPORTED_MODULE_4__.BooleanObject(false)
        });
      }

      var inputWork = this.works[0];

      if (inputWork) {
        inputWork.startRun((0,_Object_valueUtil__WEBPACK_IMPORTED_MODULE_7__.decide)(input));
      }

      this.status = _Types__WEBPACK_IMPORTED_MODULE_1__.WorkType.WorkRunStatus.RUNNING;
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
        (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.forkJoin)(taskUns).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)).subscribe({
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
              desc: '[content][Func:stopWorkChain]',
              value: new _Object__WEBPACK_IMPORTED_MODULE_4__.ObjectTarget({
                id: 'stopWorkChain',
                value: (0,_Object_valueUtil__WEBPACK_IMPORTED_MODULE_7__.decide)(isSuccess),
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

/***/ }),

/***/ "./source/web/Object/Able/Base/ArrayObject.js":
/*!****************************************************!*\
  !*** ./source/web/Object/Able/Base/ArrayObject.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrayObject": () => (/* binding */ ArrayObject)
/* harmony export */ });
/* harmony import */ var _extend_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../extend-util */ "./source/web/Object/extend-util.js");
/* harmony import */ var _valueUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../valueUtil */ "./source/web/Object/valueUtil.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

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

// import { ControlFlow } from '../Control';
// import {
//   onlyDeclaration, Unit
// } from '../../util';
// import { ObjectTarget } from './ObjectTarget';
// import { NumberObject } from './NumberObject';
// import { StringObject } from './StringObject';
// import { BooleanObject } from './BooleanObject';
// import { decide } from '../../valueUtil';
// import { Value } from "../../../Object";
// @Unit(ControlFlow.ArrayEnum, 'execArray')
// export class ArrayObject<T>
//   extends ObjectTarget<Array<T>>
//   implements Value.ArrayAble<T>, ControlFlow.CollectionArray<T>
// {
//   declare _value: Array<T>;
//   constructor(...values: Array<Array<T> | number>) {
//     const first = values[0];
//     const firstIsArray = first instanceof Array;
//     var init: any = null;
//     if (firstIsArray && values.length === 1) {
//       init = first;
//     } else {
//       init = new Array(...values);
//     }
//     super(init);
//     this._value = init;
//   }
//   len(): number {
//     return this._value.length;
//   }
//   first(): T {
//     return this[0];
//   }
//   last(): T {
//     return this[this._value.length - 1];
//   }
//   // @attribute()@Params('index')
//   valueOfIndex(index: number): T {
//     return this[index];
//   }
//   valueOf(): Array<T> {
//     return this._value;
//   }
//   merge(target: ArrayObject<T>): ArrayObject<T> {
//     return new ArrayObject([...this._value, ...target._value]);
//   }
//   @onlyDeclaration
//   execArray(key: ControlFlow.ArrayEnum, ...args: any[]): any {
//     return null as any;
//   }
//   // array function
//   @onlyDeclaration
//   concat(...items: (T | ArrayObject<T>)[]): ArrayObject<T> {
//     return null as any;
//   }
//   @onlyDeclaration
//   copyWithin(target: number, start: number, end?: number): ArrayObject<T> {
//     return null as any;
//   }
//   @onlyDeclaration
//   fill(value: number, start?: number, end?: number): this {
//     return null as any;
//   }
//   @onlyDeclaration
//   find(
//     predicate: (value: number, index: number, obj: Uint8Array) => boolean,
//     thisArg?: any
//   ): Value.Mixins<Value.ObjectAble<T>> {
//     return null as any;
//   }
//   @onlyDeclaration
//   findIndex(
//     predicate: (value: number, index: number, obj: Uint8Array) => boolean,
//     thisArg?: any
//   ): NumberObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   lastIndexOf(searchElement: number, fromIndex?: number): NumberObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   pop(): ObjectTarget<T> {
//     return null as any;
//   }
//   @onlyDeclaration
//   push(...items: T[]): NumberObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   reverse(): ArrayObject<T> {
//     return null as any;
//   }
//   @onlyDeclaration
//   shift(): Value.Mixins {
//     return null as any;
//   }
//   @onlyDeclaration
//   unshift(...items: T[]): NumberObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   slice(start?: number, end?: number): ArrayObject<T> {
//     return null as any;
//   }
//   @onlyDeclaration
//   sort(compareFn?: (a: number, b: number) => number): this {
//     return null as any;
//   }
//   @onlyDeclaration
//   splice(start: number, deleteCount?: number, ...items: any[]): ArrayObject<T> {
//     return null as any;
//   }
//   @onlyDeclaration
//   includes(searchElement: T, fromIndex?: number): BooleanObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   indexOf(searchElement: T, fromIndex?: number): NumberObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   join(separator?: string): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   entries(): ObjectTarget<IterableIterator<[T, T]>> {
//     return null as any;
//   }
//   @onlyDeclaration
//   values(): ObjectTarget<IterableIterator<T>> {
//     return null as any;
//   }
//   @onlyDeclaration
//   keys(): ObjectTarget<IterableIterator<T>> {
//     return null as any;
//   }
//   @onlyDeclaration
//   forEach(
//     callbackfn: (value: T, index: number, array: readonly T[]) => void,
//     thisArg?: any
//   ): void {
//     return null as any;
//   }
//   @onlyDeclaration
//   filter<S extends T>(
//     predicate: (value: T, index: number, array: readonly T[]) => value is S,
//     thisArg?: any
//   ): ArrayObject<T> {
//     return null as any;
//   }
//   @onlyDeclaration
//   map<U>(
//     callbackfn: (value: T, index: number, array: T[]) => U,
//     thisArg?: any
//   ): ArrayObject<U> {
//     return null as any;
//   }
//   @onlyDeclaration
//   every<S extends T>(
//     predicate: (value: T, index: number, array: T[]) => value is S,
//     thisArg?: any
//   ): BooleanObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   some(
//     predicate: (value: T, index: number, array: T[]) => unknown,
//     thisArg?: any
//   ): BooleanObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   reduce(
//     callbackfn: (
//       previousValue: T,
//       currentValue: T,
//       currentIndex: number,
//       array: T[]
//     ) => T,
//     initialValue?: T
//   ): ArrayObject<T> {
//     return null as any;
//   }
//   @onlyDeclaration
//   reduceRight(
//     callbackfn: (
//       previousValue: T,
//       currentValue: T,
//       currentIndex: number,
//       array: T[]
//     ) => T,
//     initialValue?: T
//   ): ArrayObject<T> {
//     return null as any;
//   }
//   get length(): NumberObject {
//     return decide(this._value.length) as NumberObject;
//   }
// }


var ArrayWrapper = (0,_extend_util__WEBPACK_IMPORTED_MODULE_0__.createExtendsConstruct)(Array, ['length']);

var _ArrayObject = /*#__PURE__*/function (_ArrayWrapper) {
  _inherits(_ArrayObject, _ArrayWrapper);

  var _super = _createSuper(_ArrayObject);

  function _ArrayObject() {
    var _this;

    _classCallCheck(this, _ArrayObject);

    for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
      values[_key] = arguments[_key];
    }

    var first = values[0];
    var firstIsArray = first instanceof Array;
    var init = null;

    if (firstIsArray && values.length === 1) {
      init = first;
    } else {
      init = _construct(Array, values);
    }

    _this = _super.call(this, init);
    _this._value = init;
    return _this;
  }

  _createClass(_ArrayObject, [{
    key: "len",
    value: function len() {
      return this._value.length;
    }
  }, {
    key: "first",
    value: function first() {
      return this._value[0];
    }
  }, {
    key: "last",
    value: function last() {
      return this._value[this._value.length - 1];
    }
  }, {
    key: "valueOfIndex",
    value: function valueOfIndex(index) {
      return this._value[index];
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      return this._value;
    }
  }, {
    key: "length",
    get: function get() {
      return (0,_valueUtil__WEBPACK_IMPORTED_MODULE_1__.decide)(this._value.length);
    }
  }]);

  return _ArrayObject;
}(ArrayWrapper);

var ArrayObject = _ArrayObject;


/***/ }),

/***/ "./source/web/Object/Able/Base/BooleanObject.js":
/*!******************************************************!*\
  !*** ./source/web/Object/Able/Base/BooleanObject.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BooleanObject": () => (/* binding */ BooleanObject)
/* harmony export */ });
/* harmony import */ var _ObjectTarget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObjectTarget */ "./source/web/Object/Able/Base/ObjectTarget.js");
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var BooleanObject = /*#__PURE__*/function (_ObjectTarget) {
  _inherits(BooleanObject, _ObjectTarget);

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
}(_ObjectTarget__WEBPACK_IMPORTED_MODULE_0__.ObjectTarget);

_defineProperty(BooleanObject, "type", void 0);

/***/ }),

/***/ "./source/web/Object/Able/Base/DataObject.js":
/*!***************************************************!*\
  !*** ./source/web/Object/Able/Base/DataObject.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataObject": () => (/* binding */ DataObject)
/* harmony export */ });
/* harmony import */ var _ObjectTarget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObjectTarget */ "./source/web/Object/Able/Base/ObjectTarget.js");
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


var DataObject = /*#__PURE__*/function (_ObjectTarget) {
  _inherits(DataObject, _ObjectTarget);

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
    } // @attribute()

  }, {
    key: "valueOf",
    value: function valueOf() {
      return this._value;
    }
  }]);

  return DataObject;
}(_ObjectTarget__WEBPACK_IMPORTED_MODULE_0__.ObjectTarget);

/***/ }),

/***/ "./source/web/Object/Able/Base/DateObject.js":
/*!***************************************************!*\
  !*** ./source/web/Object/Able/Base/DateObject.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateObject": () => (/* binding */ DateObject)
/* harmony export */ });
/* harmony import */ var _extend_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../extend-util */ "./source/web/Object/extend-util.js");
/* harmony import */ var _valueUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../valueUtil */ "./source/web/Object/valueUtil.js");
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

// import { ControlFlow } from '../Control';
// import { Value } from '../../../Object';
// import { ObjectTarget } from './ObjectTarget';
// import { StringObject } from './StringObject';
// import { NumberObject } from './NumberObject';
// import { Unit, onlyDeclaration } from '../../util';
// @Unit(ControlFlow.DateEnum)
// export class DateObject extends ObjectTarget<Date>
//   implements Value.DateAble, ControlFlow.DateFunction, ControlFlow.ObjectDate {
//   declare _value: Date;
//   constructor(value: Date = new Date()) {
//     super(value);
//     this._value = value;
//   }
//   // @attribute()
//   timestamp(): number {
//     return this.valueOf().getTime();
//   }
//   // @attribute()
//   valueOf(): Date {
//     return new Date(this._value);
//   }
//   @onlyDeclaration
//   execFunction(key: ControlFlow.DateEnum, ...args: any[]) {
//     throw new Error('Method not implemented.');
//   }
//   @onlyDeclaration
//   toDateString(): StringObject {
//     return null as any
//   }
//   @onlyDeclaration
//   toTimeString(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   toLocaleString(): StringObject {
//     return null as any
//   }
//   @onlyDeclaration
//   toLocaleDateString(): StringObject {
//     return null as any
//   }
//   @onlyDeclaration
//   toLocaleTimeString(): StringObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getTime(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getFullYear(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getUTCFullYear(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getMonth(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getUTCMonth(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getDate(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getUTCDate(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getDay(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getUTCDay(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getHours(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getUTCHours(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getMinutes(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getUTCMinutes(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getSeconds(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getUTCSeconds(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getMilliseconds(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getUTCMilliseconds(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getTimezoneOffset(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setTime(time: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setMilliseconds(ms: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setUTCMilliseconds(ms: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setSeconds(sec: number, ms?: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setUTCSeconds(sec: number, ms?: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setMinutes(min: number, sec?: number, ms?: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setUTCMinutes(min: number, sec?: number, ms?: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setHours(
//     hours: number,
//     min?: number,
//     sec?: number,
//     ms?: number
//   ): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setUTCHours(
//     hours: number,
//     min?: number,
//     sec?: number,
//     ms?: number
//   ): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setDate(date: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setUTCDate(date: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setMonth(month: number, date?: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setUTCMonth(month: number, date?: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setFullYear(year: number, month?: number, date?: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setUTCFullYear(year: number, month?: number, date?: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   toUTCString(): StringObject {
//     return null as any
//   }
//   @onlyDeclaration
//   toISOString(): StringObject {
//     return null as any
//   }
//   @onlyDeclaration
//   toJSON(key?: any): StringObject {
//     return null as any
//   }
// }


var DateWrapper = (0,_extend_util__WEBPACK_IMPORTED_MODULE_0__.createExtendsConstruct)(Date);

var _DateObject = /*#__PURE__*/function (_DateWrapper) {
  _inherits(_DateObject, _DateWrapper);

  var _super = _createSuper(_DateObject);

  function _DateObject() {
    var _this;

    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();

    _classCallCheck(this, _DateObject);

    _this = _super.call(this, value);
    _this._value = value;
    return _this;
  }

  _createClass(_DateObject, [{
    key: "valueOf",
    value: function valueOf() {
      return this._value;
    }
  }, {
    key: "toLocaleString",
    value: function toLocaleString() {
      return (0,_valueUtil__WEBPACK_IMPORTED_MODULE_1__.decide)(this._value.toLocaleDateString());
    }
  }, {
    key: "timestamp",
    value: function timestamp() {
      return (0,_valueUtil__WEBPACK_IMPORTED_MODULE_1__.decide)(this._value.getDate());
    }
  }]);

  return _DateObject;
}(DateWrapper);

var DateObject = _DateObject;


/***/ }),

/***/ "./source/web/Object/Able/Base/MapObject.js":
/*!**************************************************!*\
  !*** ./source/web/Object/Able/Base/MapObject.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapObject": () => (/* binding */ MapObject)
/* harmony export */ });
/* harmony import */ var _extend_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../extend-util */ "./source/web/Object/extend-util.js");
/* harmony import */ var _valueUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../valueUtil */ "./source/web/Object/valueUtil.js");
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

// import { ControlFlow } from '../Control';
// import { onlyDeclaration, Unit } from '../../util';
// import { BaseType } from '../../../Types';
// import { Value } from '../../../Object'
// import { ObjectTarget } from './ObjectTarget';
// import { decide } from '../../valueUtil';
// import { NumberObject } from './NumberObject';
// // @MapUint
// @Unit(ControlFlow.MapEnum)
// export class MapObject<T, U>
//   extends ObjectTarget<Map<T, U>>
//   implements Value.MapAble<T, U>, ControlFlow.CollectionMap<T, U>
// {
//   declare _value: Map<T, U>;
//   constructor(value: Map<T, U> = new Map()) {
//     super(value);
//     this._value = new Map(value);
//   }
//   // @attribute()
//   len(): number {
//     return this._value.size;
//   }
//   valueOf(): Map<T, U> {
//     return this._value;
//   }
//   merge(target: MapObject<T, U>): MapObject<T, U> {
//     const newMap = new Map<T, U>(this._value);
//     target._value.forEach(($1, key) => newMap.set(key, $1));
//     return new MapObject(newMap);
//   }
//   @onlyDeclaration
//   execFunction(key: ControlFlow.MapEnum, ...args: any[]): U | void {
//     return null as any;
//   }
//   @onlyDeclaration
//   get(key: string): U | void {
//     return null as any;
//   }
//   @onlyDeclaration
//   set(key: string, value: BaseType): void {
//     return null as any;
//   }
//   @onlyDeclaration
//   has(key: string): Value.BooleanAble {
//     return null as any;
//   }
//   @onlyDeclaration
//   delete(key: string): Value.BooleanAble {
//     return null as any;
//   }
//   @onlyDeclaration
//   clear(): void {
//     return null as any;
//   }
//   @onlyDeclaration
//   entries(): Value.ObjectAble<IterableIterator<[T, U]>> {
//     return null as any;
//   }
//   @onlyDeclaration
//   forEach(
//     callback: (value: U, key: T, map: Map<T, U>) => void,
//     thisArg?: any
//   ): void {
//     return null as any;
//   }
//   @onlyDeclaration
//   values(): Value.ObjectAble<IterableIterator<U>> {
//     return null as any;
//   }
//   @onlyDeclaration
//   keys(): Value.ObjectAble<IterableIterator<T>> {
//     return null as any;
//   }
//   get size(): Value.NumberAble {
//     return decide(this._value.size) as NumberObject;
//   }
// }


var MapWrapper = (0,_extend_util__WEBPACK_IMPORTED_MODULE_0__.createExtendsConstruct)(Map, ['size']);

var _MapObject = /*#__PURE__*/function (_MapWrapper) {
  _inherits(_MapObject, _MapWrapper);

  var _super = _createSuper(_MapObject);

  function _MapObject() {
    _classCallCheck(this, _MapObject);

    return _super.apply(this, arguments);
  }

  _createClass(_MapObject, [{
    key: "valueOf",
    value: function valueOf() {
      return this._value;
    }
  }, {
    key: "len",
    value: function len() {
      return this._value.size;
    }
  }, {
    key: "size",
    get: function get() {
      return (0,_valueUtil__WEBPACK_IMPORTED_MODULE_1__.decide)(this._value.size);
    }
  }]);

  return _MapObject;
}(MapWrapper);

var MapObject = _MapObject;


/***/ }),

/***/ "./source/web/Object/Able/Base/NULLObject.js":
/*!***************************************************!*\
  !*** ./source/web/Object/Able/Base/NULLObject.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NULLObject": () => (/* binding */ NULLObject)
/* harmony export */ });
/* harmony import */ var _ObjectTarget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObjectTarget */ "./source/web/Object/Able/Base/ObjectTarget.js");
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


var NULLObject = /*#__PURE__*/function (_ObjectTarget) {
  _inherits(NULLObject, _ObjectTarget);

  var _super = _createSuper(NULLObject);

  function NULLObject() {
    var _this;

    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, NULLObject);

    _this = _super.call(this, value);
    _this._value = value;
    return _this;
  } // @attribute()


  _createClass(NULLObject, [{
    key: "valueOf",
    value: function valueOf() {
      return this._value;
    }
  }, {
    key: "merge",
    value: function merge(target) {
      return new NULLObject(null);
    }
  }, {
    key: "isTruly",
    value: function isTruly() {
      return !!this._value;
    }
  }, {
    key: "isNull",
    value: function isNull() {
      return this._value === null;
    }
  }, {
    key: "isUndefined",
    value: function isUndefined() {
      return this._value === undefined;
    }
  }]);

  return NULLObject;
}(_ObjectTarget__WEBPACK_IMPORTED_MODULE_0__.ObjectTarget);

/***/ }),

/***/ "./source/web/Object/Able/Base/NumberObject.js":
/*!*****************************************************!*\
  !*** ./source/web/Object/Able/Base/NumberObject.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberObject": () => (/* binding */ NumberObject)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util */ "./source/web/Object/util.js");
/* harmony import */ var _BooleanObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BooleanObject */ "./source/web/Object/Able/Base/BooleanObject.js");
/* harmony import */ var _extend_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../extend-util */ "./source/web/Object/extend-util.js");
var _class;

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = undefined && undefined.__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var _NumberObject_1;




var NumberWrapper = (0,_extend_util__WEBPACK_IMPORTED_MODULE_2__.createExtendsConstruct)(Number);

var _NumberObject = _NumberObject_1 = (_class = /*#__PURE__*/function (_NumberWrapper) {
  _inherits(_NumberObject, _NumberWrapper);

  var _super = _createSuper(_NumberObject);

  function _NumberObject() {
    var _this;

    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    _classCallCheck(this, _NumberObject);

    _this = _super.call(this, value);
    _this._value = value;
    return _this;
  }

  _createClass(_NumberObject, [{
    key: "valueOf",
    value: function valueOf() {
      return this._value;
    }
  }, {
    key: "json",
    value: function json() {
      return _get(_getPrototypeOf(_NumberObject.prototype), "json", this).call(this);
    }
  }, {
    key: "compare",
    value: function compare(type, target) {
      return new _BooleanObject__WEBPACK_IMPORTED_MODULE_1__.BooleanObject(false);
    }
  }, {
    key: "more",
    value: function more(target) {
      return new _BooleanObject__WEBPACK_IMPORTED_MODULE_1__.BooleanObject(this._value > target._value);
    }
  }, {
    key: "equal",
    value: function equal(target) {
      return new _BooleanObject__WEBPACK_IMPORTED_MODULE_1__.BooleanObject(this._value === target._value);
    }
  }, {
    key: "less",
    value: function less(target) {
      return new _BooleanObject__WEBPACK_IMPORTED_MODULE_1__.BooleanObject(this._value < target._value);
    }
  }, {
    key: "moreEqual",
    value: function moreEqual(target) {
      return new _BooleanObject__WEBPACK_IMPORTED_MODULE_1__.BooleanObject(this._value >= target._value);
    }
  }, {
    key: "lessEqual",
    value: function lessEqual(target) {
      return new _BooleanObject__WEBPACK_IMPORTED_MODULE_1__.BooleanObject(this._value <= target._value);
    }
  }, {
    key: "calc",
    value: function calc(type, target) {
      return new _NumberObject_1(0);
    }
  }, {
    key: "plus",
    value: function plus(target) {
      return new _NumberObject_1(this._value + target._value);
    }
  }, {
    key: "reduce",
    value: function reduce(target) {
      return new _NumberObject_1(this._value - target._value);
    }
  }, {
    key: "multi",
    value: function multi(target) {
      return new _NumberObject_1(this._value * target._value);
    }
  }, {
    key: "divide",
    value: function divide(target) {
      return new _NumberObject_1(target._value === 0 ? Infinity : this._value / target._value);
    }
  }]);

  return _NumberObject;
}(NumberWrapper), _defineProperty(_class, "type", void 0), _class);

__decorate([_util__WEBPACK_IMPORTED_MODULE_0__.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", [String, Object]), __metadata("design:returntype", _BooleanObject__WEBPACK_IMPORTED_MODULE_1__.BooleanObject)], _NumberObject.prototype, "compare", null);

__decorate([_util__WEBPACK_IMPORTED_MODULE_0__.onlyDeclaration, __metadata("design:type", Function), __metadata("design:paramtypes", [String, Object]), __metadata("design:returntype", _NumberObject)], _NumberObject.prototype, "calc", null);

_NumberObject = _NumberObject_1 = __decorate([_util__WEBPACK_IMPORTED_MODULE_0__.CalcUnit, _util__WEBPACK_IMPORTED_MODULE_0__.CompareUnit, __metadata("design:paramtypes", [Number])], _NumberObject);
var NumberObject = _NumberObject;


/***/ }),

/***/ "./source/web/Object/Able/Base/ObjectTarget.js":
/*!*****************************************************!*\
  !*** ./source/web/Object/Able/Base/ObjectTarget.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjectTarget": () => (/* binding */ ObjectTarget)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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
    key: "json",
    value: function json() {
      var _require = __webpack_require__(/*! ./StringObject */ "./source/web/Object/Able/Base/StringObject.js"),
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

/***/ }),

/***/ "./source/web/Object/Able/Base/SetObject.js":
/*!**************************************************!*\
  !*** ./source/web/Object/Able/Base/SetObject.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetObject": () => (/* binding */ SetObject)
/* harmony export */ });
/* harmony import */ var _extend_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../extend-util */ "./source/web/Object/extend-util.js");
/* harmony import */ var _valueUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../valueUtil */ "./source/web/Object/valueUtil.js");
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

// import { ControlFlow } from '../Control';
// import { onlyDeclaration, Unit } from '../../util';
// import { Value } from '../../../Object';
// import { ObjectTarget } from './ObjectTarget';
// import { NumberObject } from './NumberObject';
// import { decide } from '../../valueUtil';
// @Unit(ControlFlow.SetEnum)
// export class SetObject<T>
//   extends ObjectTarget<Set<T>>
//   implements Value.SetAble<T>, ControlFlow.CollectionSet<T>
// {
//   constructor(value?: Set<T> | Array<T>) {
//     const init = !!value
//       ? Array.isArray(value)
//         ? new Set(value)
//         : value
//       : new Set<T>();
//     super(init);
//     this._value = init;
//   }
//   // @attribute()
//   len(): number {
//     return this._value.size;
//   }
//   valueOf(): Set<T> {
//     return this._value;
//   }
//   merge(target: SetObject<T>): SetObject<T> {
//     const newSet = new Set<T>();
//     this._value.forEach(($1) => newSet.add($1));
//     target.forEach(($1) => newSet.add($1));
//     new Set().keys;
//     return new SetObject(newSet);
//   }
//   @onlyDeclaration
//   execFunction(key: ControlFlow.SetEnum, ...args: any[]): any {
//     return null as any;
//   }
//   @onlyDeclaration
//   has(value: T): Value.BooleanAble {
//     return null as any;
//   }
//   @onlyDeclaration
//   add(value: T): this {
//     return this;
//   }
//   @onlyDeclaration
//   delete(value: T): Value.BooleanAble {
//     return null as any;
//   }
//   @onlyDeclaration
//   clear(): void {
//     return null as any;
//   }
//   @onlyDeclaration
//   forEach(
//     callbackfn: (value: T, value2: T, set: Set<T>) => void,
//     thisArg?: any
//   ): void {
//     return null as any;
//   }
//   @onlyDeclaration
//   entries(): Value.ObjectAble<IterableIterator<[T, T]>> {
//     return null as any;
//   }
//   @onlyDeclaration
//   values(): Value.ObjectAble<IterableIterator<T>> {
//     return null as any;
//   }
//   @onlyDeclaration
//   keys(): Value.ObjectAble<IterableIterator<T>> {
//     return null as any;
//   }
//   get size(): Value.NumberAble {
//     return decide(this._value.size) as NumberObject;
//   }
// }


var SetWrapper = (0,_extend_util__WEBPACK_IMPORTED_MODULE_0__.createExtendsConstruct)(Set, ['size']);

var _SetObject = /*#__PURE__*/function (_SetWrapper) {
  _inherits(_SetObject, _SetWrapper);

  var _super = _createSuper(_SetObject);

  function _SetObject(source) {
    var _this;

    _classCallCheck(this, _SetObject);

    _this = _super.call(this);
    _this._value = new Set(source);
    return _this;
  }

  _createClass(_SetObject, [{
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
    key: "size",
    get: function get() {
      return (0,_valueUtil__WEBPACK_IMPORTED_MODULE_1__.decide)(this._value.size);
    }
  }]);

  return _SetObject;
}(SetWrapper);

var SetObject = _SetObject;


/***/ }),

/***/ "./source/web/Object/Able/Base/StringObject.js":
/*!*****************************************************!*\
  !*** ./source/web/Object/Able/Base/StringObject.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StringObject": () => (/* binding */ StringObject)
/* harmony export */ });
/* harmony import */ var _extend_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../extend-util */ "./source/web/Object/extend-util.js");
/* harmony import */ var _valueUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../valueUtil */ "./source/web/Object/valueUtil.js");
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

// import { ControlFlow } from '../Control';
// import { Value } from '../../../Object';
// import { ObjectTarget } from './ObjectTarget';
// import { onlyDeclaration, Unit } from '../../util';
// import { NumberObjectAble, NumberObject } from './NumberObject';
// import { BooleanObject } from './BooleanObject'
// @Unit(ControlFlow.StringEnum)
// export class StringObject
//   extends ObjectTarget<string>
//   implements Value.StringAble, ControlFlow.ObjectString {
//   static type: string;
//   declare _value: string;
//   constructor(value: string = '') {
//     super(value);
//     this._value = value;
//   }
//   // @attribute()
//   valueOf(): string {
//     return this._value;
//   }
//   @onlyDeclaration
//   execFunction(key: ControlFlow.StringEnum, ...args: any[]) {
//     // throw new Error('Method not implemented.');
//     return null as any;
//   }
//   get length(): NumberObjectAble {
//     return new NumberObject(this._value.length);
//   }
//   @onlyDeclaration
//   anchor(name: string): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   big(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   blink(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   bold(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   charAt(pos: number): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   charCodeAt(index: number): NumberObjectAble {
//     return null as any;
//   }
//   @onlyDeclaration
//   codePointAt(pos: number): Value.Mixins<Value.NumberAble> {
//     return null as any;
//   }
//   @onlyDeclaration
//   concat(...args: string[]): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   endsWith(searchString: string, endPosition?: number): BooleanObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   fixed(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   fontcolor(color: string): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   fontsize(size: number): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   includes(searchString: string, position?: number): BooleanObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   indexOf(searchString: string, position?: number): NumberObjectAble {
//     return null as any;
//   }
//   @onlyDeclaration
//   italics(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   lastIndexOf(searchString: string, position?: number): NumberObjectAble {
//     return null as any;
//   }
//   @onlyDeclaration
//   link(url: string): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   localeCompare(that: string): NumberObjectAble {
//     return null as any;
//   }
//   @onlyDeclaration
//   match(regexp: RegExp): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   matchAll(regexp: RegExp): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   normalize(form?: string): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   padEnd(targetLength: number, padString?: string): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   padStart(targetLength: number, padString?: string): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   repeat(count: number): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   replace(
//     searchValue: string | RegExp,
//     replaceValue: string | ((substring: string, ...args: any[]) => string)
//   ): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   replaceAll(
//     searchValue: string | RegExp,
//     replaceValue: string | ((substring: string, ...args: any[]) => string)
//   ): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   search(regexp: RegExp): NumberObjectAble {
//     return null as any;
//   }
//   @onlyDeclaration
//   slice(start: number, end?: number): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   small(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   split(separator?: string | RegExp, limit?: number): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   strike(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   sub(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   substr(start: number, length?: number): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   substring(start: number, end?: number): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   toLocaleLowerCase(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   toLocaleUpperCase(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   toLowerCase(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   toUpperCase(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   trim(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   trimLeft(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   trimRight(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   toString(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   sup(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   startsWith(searchString: string, position?: number): BooleanObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   trimStart(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   trimEnd(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   at(index: number): StringObject {
//     return null as any;
//   }
// }


var StringWrapper = (0,_extend_util__WEBPACK_IMPORTED_MODULE_0__.createExtendsConstruct)(String, ['length']);

var _StringObject = /*#__PURE__*/function (_StringWrapper) {
  _inherits(_StringObject, _StringWrapper);

  var _super = _createSuper(_StringObject);

  function _StringObject(value) {
    var _this;

    _classCallCheck(this, _StringObject);

    _this = _super.call(this);
    _this._value = value;
    return _this;
  }

  _createClass(_StringObject, [{
    key: "valueOf",
    value: function valueOf() {
      return this._value;
    }
  }, {
    key: "length",
    get: function get() {
      return (0,_valueUtil__WEBPACK_IMPORTED_MODULE_1__.decide)(this._value.length);
    }
  }]);

  return _StringObject;
}(StringWrapper);

var StringObject = _StringObject;


/***/ }),

/***/ "./source/web/Object/Able/Control.js":
/*!*******************************************!*\
  !*** ./source/web/Object/Able/Control.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlFlow": () => (/* binding */ ControlFlow)
/* harmony export */ });
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
  })(CalcEnum = ControlFlow.CalcEnum || (ControlFlow.CalcEnum = {}));
})(ControlFlow || (ControlFlow = {}));

/***/ }),

/***/ "./source/web/Object/Able/index.js":
/*!*****************************************!*\
  !*** ./source/web/Object/Able/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrayObject": () => (/* reexport safe */ _Base_ArrayObject__WEBPACK_IMPORTED_MODULE_1__.ArrayObject),
/* harmony export */   "BooleanObject": () => (/* reexport safe */ _Base_BooleanObject__WEBPACK_IMPORTED_MODULE_6__.BooleanObject),
/* harmony export */   "DataObject": () => (/* reexport safe */ _Base_DataObject__WEBPACK_IMPORTED_MODULE_8__.DataObject),
/* harmony export */   "DateObject": () => (/* reexport safe */ _Base_DateObject__WEBPACK_IMPORTED_MODULE_7__.DateObject),
/* harmony export */   "MapObject": () => (/* reexport safe */ _Base_MapObject__WEBPACK_IMPORTED_MODULE_2__.MapObject),
/* harmony export */   "NULLObject": () => (/* reexport safe */ _Base_NULLObject__WEBPACK_IMPORTED_MODULE_9__.NULLObject),
/* harmony export */   "NumberObject": () => (/* reexport safe */ _Base_NumberObject__WEBPACK_IMPORTED_MODULE_4__.NumberObject),
/* harmony export */   "ObjectTarget": () => (/* reexport safe */ _Base_ObjectTarget__WEBPACK_IMPORTED_MODULE_0__.ObjectTarget),
/* harmony export */   "SetObject": () => (/* reexport safe */ _Base_SetObject__WEBPACK_IMPORTED_MODULE_3__.SetObject),
/* harmony export */   "StringObject": () => (/* reexport safe */ _Base_StringObject__WEBPACK_IMPORTED_MODULE_5__.StringObject),
/* harmony export */   "createExtendsConstruct": () => (/* reexport safe */ _extend_util__WEBPACK_IMPORTED_MODULE_10__.createExtendsConstruct),
/* harmony export */   "createExtendsInstance": () => (/* reexport safe */ _extend_util__WEBPACK_IMPORTED_MODULE_10__.createExtendsInstance)
/* harmony export */ });
/* harmony import */ var _Base_ObjectTarget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base/ObjectTarget */ "./source/web/Object/Able/Base/ObjectTarget.js");
/* harmony import */ var _Base_ArrayObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Base/ArrayObject */ "./source/web/Object/Able/Base/ArrayObject.js");
/* harmony import */ var _Base_MapObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base/MapObject */ "./source/web/Object/Able/Base/MapObject.js");
/* harmony import */ var _Base_SetObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Base/SetObject */ "./source/web/Object/Able/Base/SetObject.js");
/* harmony import */ var _Base_NumberObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Base/NumberObject */ "./source/web/Object/Able/Base/NumberObject.js");
/* harmony import */ var _Base_StringObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Base/StringObject */ "./source/web/Object/Able/Base/StringObject.js");
/* harmony import */ var _Base_BooleanObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Base/BooleanObject */ "./source/web/Object/Able/Base/BooleanObject.js");
/* harmony import */ var _Base_DateObject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Base/DateObject */ "./source/web/Object/Able/Base/DateObject.js");
/* harmony import */ var _Base_DataObject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Base/DataObject */ "./source/web/Object/Able/Base/DataObject.js");
/* harmony import */ var _Base_NULLObject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Base/NULLObject */ "./source/web/Object/Able/Base/NULLObject.js");
/* harmony import */ var _extend_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../extend-util */ "./source/web/Object/extend-util.js");










 // import { MixinsObject } from './Targets/Mixins'



/***/ }),

/***/ "./source/web/Object/extend-util.js":
/*!******************************************!*\
  !*** ./source/web/Object/extend-util.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createExtendsConstruct": () => (/* binding */ createExtendsConstruct),
/* harmony export */   "createExtendsInstance": () => (/* binding */ createExtendsInstance)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./source/web/Object/util.js");
/* harmony import */ var _Able__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Able */ "./source/web/Object/Able/index.js");
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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = undefined && undefined.__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExtendsMap;
/***
  创建新的包装对象

  type PromiseWrapper = ValueExtends.ExtendsType<Promise<number>>
  const PromiseConstruct = createExtendsConstruct(Promise<number>)
  const instance: PromiseWrapper = Reflect.construct(PromiseConstruct, [(res, rej) => { res(111)}])
  instance.then(()=>{})

 */

function createExtendsConstruct(target) {
  var exclude = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (!ExtendsMap) ExtendsMap = new Map();
  if (ExtendsMap.has(target)) return ExtendsMap.get(target);
  var Enum = {};
  exclude = [].concat(_toConsumableArray(exclude), ['constructor', 'valueOf']);
  Object.keys(Object.getOwnPropertyDescriptors(target.prototype)).forEach(function ($1) {
    if (!exclude.includes($1) && _typeof($1) !== 'symbol') {
      Enum[$1] = $1;
    }
  });

  var KV = /*#__PURE__*/function (_Value$ObjectTarget) {
    _inherits(KV, _Value$ObjectTarget);

    var _super = _createSuper(KV);

    function KV() {
      var _this;

      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      _classCallCheck(this, KV);

      _this = _super.call(this);
      _this._value = value !== null && value !== void 0 ? value : {};
      return _this;
    }

    return _createClass(KV);
  }(_Able__WEBPACK_IMPORTED_MODULE_1__.ObjectTarget);

  KV = __decorate([(0,_util__WEBPACK_IMPORTED_MODULE_0__.Unit)(Enum), __metadata("design:paramtypes", [Object])], KV);
  ExtendsMap.set(target, KV);
  return KV;
}
/**
 * @param target  Date
 * @param construct ['2021-06-23']
 * @param exclude
 * @returns
 *
 *
  简化 createExtendsConstruct

  type PromiseWrapper = ValueExtends.ExtendsType<Promise<number>>
  const aa: PromiseWrapper = createExtendsInstance<Promise<number>>(Promise, [(res, rej) => { setTimeout(() => res(111), 2000) }])
  aa.then(res => { })

 */

function createExtendsInstance(target, construct) {
  var exclude = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var DateDome = createExtendsConstruct(target, exclude);
  return Reflect.construct(DateDome, construct);
}

/***/ }),

/***/ "./source/web/Object/index.js":
/*!************************************!*\
  !*** ./source/web/Object/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrayObject": () => (/* reexport safe */ _Able__WEBPACK_IMPORTED_MODULE_1__.ArrayObject),
/* harmony export */   "BooleanObject": () => (/* reexport safe */ _Able__WEBPACK_IMPORTED_MODULE_1__.BooleanObject),
/* harmony export */   "DataObject": () => (/* reexport safe */ _Able__WEBPACK_IMPORTED_MODULE_1__.DataObject),
/* harmony export */   "DateObject": () => (/* reexport safe */ _Able__WEBPACK_IMPORTED_MODULE_1__.DateObject),
/* harmony export */   "MapObject": () => (/* reexport safe */ _Able__WEBPACK_IMPORTED_MODULE_1__.MapObject),
/* harmony export */   "NULLObject": () => (/* reexport safe */ _Able__WEBPACK_IMPORTED_MODULE_1__.NULLObject),
/* harmony export */   "NumberObject": () => (/* reexport safe */ _Able__WEBPACK_IMPORTED_MODULE_1__.NumberObject),
/* harmony export */   "ObjectTarget": () => (/* reexport safe */ _Able__WEBPACK_IMPORTED_MODULE_1__.ObjectTarget),
/* harmony export */   "SetObject": () => (/* reexport safe */ _Able__WEBPACK_IMPORTED_MODULE_1__.SetObject),
/* harmony export */   "StringObject": () => (/* reexport safe */ _Able__WEBPACK_IMPORTED_MODULE_1__.StringObject),
/* harmony export */   "createExtendsConstruct": () => (/* reexport safe */ _Able__WEBPACK_IMPORTED_MODULE_1__.createExtendsConstruct),
/* harmony export */   "createExtendsInstance": () => (/* reexport safe */ _Able__WEBPACK_IMPORTED_MODULE_1__.createExtendsInstance)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./source/web/Object/types.js");
/* harmony import */ var _Able__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Able */ "./source/web/Object/Able/index.js");
/* harmony import */ var _extend_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extend-util */ "./source/web/Object/extend-util.js");




/***/ }),

/***/ "./source/web/Object/types.js":
/*!************************************!*\
  !*** ./source/web/Object/types.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./source/web/Object/util.js":
/*!***********************************!*\
  !*** ./source/web/Object/util.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalcUnit": () => (/* binding */ CalcUnit),
/* harmony export */   "CompareUnit": () => (/* binding */ CompareUnit),
/* harmony export */   "Unit": () => (/* binding */ Unit),
/* harmony export */   "onlyDeclaration": () => (/* binding */ onlyDeclaration),
/* harmony export */   "onlyDeclarationTag": () => (/* binding */ onlyDeclarationTag)
/* harmony export */ });
/* harmony import */ var _Able__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Able */ "./source/web/Object/Able/index.js");
/* harmony import */ var _Able_Control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Able/Control */ "./source/web/Object/Able/Control.js");
/* harmony import */ var _valueUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./valueUtil */ "./source/web/Object/valueUtil.js");



var onlyDeclarationTag = 'onlyDeclaration'; // export function attribute() {
//   return function ($1: any, $2: string, descriptor: PropertyDescriptor) {
//     ($1.constructor.attributes as Set<string>).add($2);
//   };
// }
// export function Params(params: any) {
//   return function (target: any, methodName: any, paramsIndex: any) {
//     !target.$Meta && (target.$Meta = {});
//     !target.$Meta[methodName] && (target.$Meta[methodName] = {});
//     target.$Meta[methodName][paramsIndex] = params;
//   };
// }
// export class ObjectManager {
//   static types: Set<string> = new Set();
// }
// export function DefaultValue(value: string) {
//   return function (target: any, propertyName: string) {
//     target[propertyName] = value;
//     ObjectManager.types.add(value);
//   };
// }

/**
 * 声明 方式无效 仅仅作为标记
 */

function onlyDeclaration(target, name, dec) {
  dec.value.declaration = onlyDeclarationTag;
}
function CompareUnit(host) {
  var _host$prototype$compa;

  Object.keys(_Able_Control__WEBPACK_IMPORTED_MODULE_1__.ControlFlow.CompareEnum).forEach(function (item) {
    var key = _Able_Control__WEBPACK_IMPORTED_MODULE_1__.ControlFlow.CompareEnum[item];
    var comFunction = host.prototype[key];

    if (!comFunction || comFunction.declaration === onlyDeclarationTag) {
      host.prototype[key] = function () {
        return new _Able__WEBPACK_IMPORTED_MODULE_0__.BooleanObject(false);
      };
    }
  });
  if (((_host$prototype$compa = host.prototype.compare) === null || _host$prototype$compa === void 0 ? void 0 : _host$prototype$compa.declaration) === onlyDeclarationTag || !!host.prototype.compare === false) host.prototype.compare = function (type, target) {
    var _host$prototype$type;

    var execFunc = (_host$prototype$type = host.prototype[type]) === null || _host$prototype$type === void 0 ? void 0 : _host$prototype$type.bind(this);
    if (execFunc && typeof execFunc === 'function') return execFunc.call(this, target);
    return false;
  };
}
function CalcUnit(host) {
  var _host$prototype$calc;

  Object.keys(_Able_Control__WEBPACK_IMPORTED_MODULE_1__.ControlFlow.CalcEnum).forEach(function (item) {
    var key = _Able_Control__WEBPACK_IMPORTED_MODULE_1__.ControlFlow.CalcEnum[item];
    var comFunction = host.prototype[key];

    if (!comFunction || comFunction.declaration === onlyDeclarationTag) {
      host.prototype[key] = function () {
        return new _Able__WEBPACK_IMPORTED_MODULE_0__.NumberObject(0);
      };
    }
  });
  if (((_host$prototype$calc = host.prototype.calc) === null || _host$prototype$calc === void 0 ? void 0 : _host$prototype$calc.declaration) === onlyDeclarationTag || !!host.prototype.calc === false) host.prototype.calc = function (type, target) {
    var _host$prototype$type2;

    var execFunc = (_host$prototype$type2 = host.prototype[type]) === null || _host$prototype$type2 === void 0 ? void 0 : _host$prototype$type2.bind(this);
    if (execFunc && typeof execFunc === 'function') return execFunc.call(this, target);
    return false;
  };
}
function Unit(target) {
  var execName = 'execFunction';
  return function (host) {
    var _host$prototype$execN;

    Object.keys(target).forEach(function (item) {
      var key = target[item];
      var comFunction = host.prototype[key];

      if (!comFunction || comFunction.declaration === onlyDeclarationTag) {
        host.prototype[key] = function () {
          var value = this.valueOf();
          var execFunc = value[key];
          var result;

          if (typeof execFunc === 'function') {
            result = execFunc.bind(value).apply(void 0, arguments);
          } else result = value;

          return (0,_valueUtil__WEBPACK_IMPORTED_MODULE_2__.decide)(result);
        };
      }
    });
    if (((_host$prototype$execN = host.prototype[execName]) === null || _host$prototype$execN === void 0 ? void 0 : _host$prototype$execN.declaration) === onlyDeclarationTag || !!host.prototype[execName] === false) host.prototype[execName] = function (type) {
      var _host$prototype$type3;

      var execFunc = (_host$prototype$type3 = host.prototype[type]) === null || _host$prototype$type3 === void 0 ? void 0 : _host$prototype$type3.bind(this);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (execFunc && typeof execFunc === 'function') return execFunc.apply(void 0, args);
      return false;
    };
  };
}

/***/ }),

/***/ "./source/web/Object/valueUtil.js":
/*!****************************************!*\
  !*** ./source/web/Object/valueUtil.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decide": () => (/* binding */ decide),
/* harmony export */   "isAbleType": () => (/* binding */ isAbleType)
/* harmony export */ });
/* harmony import */ var _Able__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Able */ "./source/web/Object/Able/index.js");
 // type Detail<T> = ValueExtends.IsValue<T> extends true ? T : ValueExtends.GetDeepAchieve<T>

var ObjectMap = null;

var init = function init() {
  if (ObjectMap === null) {
    ObjectMap = {
      '[object Object]': _Able__WEBPACK_IMPORTED_MODULE_0__.ObjectTarget,
      '[object Map]': _Able__WEBPACK_IMPORTED_MODULE_0__.MapObject,
      '[object Set]': _Able__WEBPACK_IMPORTED_MODULE_0__.SetObject,
      '[object Array]': _Able__WEBPACK_IMPORTED_MODULE_0__.ArrayObject,
      '[object Boolean]': _Able__WEBPACK_IMPORTED_MODULE_0__.BooleanObject,
      '[object Date]': _Able__WEBPACK_IMPORTED_MODULE_0__.DateObject,
      '[object Number]': _Able__WEBPACK_IMPORTED_MODULE_0__.NumberObject,
      '[object String]': _Able__WEBPACK_IMPORTED_MODULE_0__.StringObject,
      '[object ArrayBuffer]': _Able__WEBPACK_IMPORTED_MODULE_0__.DataObject,
      '[object Uint8Array]': _Able__WEBPACK_IMPORTED_MODULE_0__.DataObject,
      '[object Promise]': _Able__WEBPACK_IMPORTED_MODULE_0__.ObjectTarget,
      '[object Null]': _Able__WEBPACK_IMPORTED_MODULE_0__.NULLObject,
      '[object Undefined]': _Able__WEBPACK_IMPORTED_MODULE_0__.NULLObject
    };
  }

  return ObjectMap;
};

var isAbleType = function isAbleType(value) {
  init();
  return Object.prototype.toString.call(value) === '[object flow-object]';
};
/**
 * 将js 数据转为 BaseType
 * 如果是BaseType类型 将不会包装。见[force]
 * @param value
 * @param force 是否强制包装
 * @returns
 */

function decide(value) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  init();
  if (isAbleType(value) && force === false) return value;
  var key = Object.prototype.toString.call(value);
  var Target = ObjectMap[key];

  if (Target) {
    return new Target(value !== null && value !== void 0 ? value : {});
  }

  return new _Able__WEBPACK_IMPORTED_MODULE_0__.ObjectTarget(value);
}
;

/***/ }),

/***/ "./source/web/Types.js":
/*!*****************************!*\
  !*** ./source/web/Types.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkType": () => (/* binding */ WorkType)
/* harmony export */ });
var WorkType;

(function (WorkType) {
  var WorkRunStatus;

  (function (WorkRunStatus) {
    WorkRunStatus[WorkRunStatus["INIT"] = 0] = "INIT"; // FROZEN,//冻结状态

    WorkRunStatus[WorkRunStatus["READY"] = 1] = "READY"; // PRE_RUN,//预运行状态 已经初始化

    WorkRunStatus[WorkRunStatus["RUNNING"] = 2] = "RUNNING";
    WorkRunStatus[WorkRunStatus["COMPLETE"] = 3] = "COMPLETE";
  })(WorkRunStatus = WorkType.WorkRunStatus || (WorkType.WorkRunStatus = {}));
})(WorkType || (WorkType = {}));

/***/ }),

/***/ "./source/web/Util/Equipment.js":
/*!**************************************!*\
  !*** ./source/web/Util/Equipment.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JSRUNEnvirType": () => (/* binding */ JSRUNEnvirType),
/* harmony export */   "PlatformSelect": () => (/* binding */ PlatformSelect),
/* harmony export */   "currentEnir": () => (/* binding */ currentEnir),
/* harmony export */   "getJSEnvironment": () => (/* binding */ getJSEnvironment),
/* harmony export */   "isJS": () => (/* binding */ isJS),
/* harmony export */   "isMobile": () => (/* binding */ isMobile),
/* harmony export */   "isNode": () => (/* binding */ isNode),
/* harmony export */   "isPC": () => (/* binding */ isPC),
/* harmony export */   "isReactNative": () => (/* binding */ isReactNative),
/* harmony export */   "isWeb": () => (/* binding */ isWeb)
/* harmony export */ });
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "./source/web/Util/tools.js");

var JSRUNEnvirType;

(function (JSRUNEnvirType) {
  JSRUNEnvirType[JSRUNEnvirType["NODE_PC"] = 10] = "NODE_PC";
  JSRUNEnvirType[JSRUNEnvirType["WEB_PC"] = 20] = "WEB_PC";
  JSRUNEnvirType[JSRUNEnvirType["WEB_MOBILE"] = 26] = "WEB_MOBILE";
  JSRUNEnvirType[JSRUNEnvirType["OTHER"] = 100] = "OTHER";
})(JSRUNEnvirType || (JSRUNEnvirType = {}));

var EnvirType = {
  /**
   * WIndow 浏览器 运行环境
   */
  WINDOWS: 'win',

  /**
   * MAC 浏览器 运行环境
   */
  MACINTOSH: 'mac',

  /***
   * Linux 浏览器 运行环境
   */
  LINUX: 'linux',

  /***
   * ios 浏览器  运行环境
   */
  IOS: 'iOS',

  /**
   * 安卓 浏览器 运行环境
   */
  ANDROID: 'Android',

  /**
   * 黑莓 运行环境
   */
  BLACKBERRY: 'bb',

  /***
   * Win iphone 运行环境
   */
  WINDOWS_PHONE: 'winphone',
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
    GLOBAL = __webpack_require__.g || globalThis;
  }

  return GLOBAL && GLOBAL.ReactNative && GLOBAL.ReactNative.NativeModules;
}
function getJSEnvironment() {
  if (navigator.userAgent) {
    var userAgent = navigator.userAgent;
    var platform, result;

    var getDesktopOS = function getDesktopOS() {
      var pf = navigator.platform;

      if (pf.indexOf('Win') != -1) {
        // 说明当前是Windows操作系统
        var rVersion = /Windows NT (\d+).(\d)/i;
        var uaResult = userAgent.match(rVersion);
        var sVersionStr = '';

        if (uaResult[1] == '6') {
          if (uaResult[2] == 1) {
            sVersionStr = '7'; // 说明当前运行在Windows 7 中
          } else if (uaResult[2] > 1) {
            sVersionStr = '8'; // 说明当前运行在Windows 8 中
          }
        } else {
          sVersionStr = uaResult[1];
        }

        return {
          name: EnvirType.WINDOWS,
          versionStr: sVersionStr
        };
      } else if (pf.indexOf('Mac') != -1) {
        return {
          name: EnvirType.MACINTOSH,
          versionStr: ''
        }; // Macintosh操作系统
      } else if (pf.indexOf('Linux') != -1) {
        return {
          name: EnvirType.LINUX,
          versionStr: ''
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


    if (userAgent.indexOf('(BB10;') > 0) {
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
          versionStr: '10'
        };
      }
    } // iOS, Android, BlackBerry 6.0+:


    platform = /\(([a-zA-Z ]+);\s(?:[U]?[;]?)([\D]+)((?:[\d._]*))(?:.*[\)][^\d]*)([\d.]*)\s/;
    result = userAgent.match(platform);

    if (result) {
      var appleDevices = /iPhone|iPad|iPod/;
      var bbDevices = /PlayBook|BlackBerry/;

      if (result[0].match(appleDevices)) {
        result[3] = result[3].replace(/_/g, '.');
        return {
          name: EnvirType.IOS,
          versionStr: result[3]
        }; // iOS操作系统
      } else if (result[2].match(/Android/)) {
        result[2] = result[2].replace(/\s/g, '');
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
        versionStr: result.length == 3 ? result[2] : ''
      };
    } // Desktop


    return getDesktopOS();
  } else {
    return {
      name: EnvirType.Other,
      versionStr: ''
    };
  }
}
var topThis = Function('return this')();
var currentEnir;

if (topThis.process && (0,_tools__WEBPACK_IMPORTED_MODULE_0__.getObjectType)(topThis.process) === '[object process]') {
  currentEnir = JSRUNEnvirType.NODE_PC;
} else {
  var typeName = getJSEnvironment().name;

  switch (typeName) {
    case EnvirType.WINDOWS:
      currentEnir = JSRUNEnvirType.WEB_PC;
      break;

    case EnvirType.MACINTOSH:
      currentEnir = JSRUNEnvirType.WEB_PC;
      break;

    case EnvirType.IOS:
      currentEnir = JSRUNEnvirType.WEB_MOBILE;
      break;

    case EnvirType.ANDROID:
      currentEnir = JSRUNEnvirType.WEB_MOBILE;
      break;

    case EnvirType.LINUX:
      currentEnir = JSRUNEnvirType.WEB_PC;
      break;

    default:
      currentEnir = JSRUNEnvirType.OTHER;
      break;
  }
}

var isWeb = currentEnir === JSRUNEnvirType.WEB_MOBILE || currentEnir === JSRUNEnvirType.WEB_PC;
var isNode = currentEnir === JSRUNEnvirType.NODE_PC;
var isPC = currentEnir === JSRUNEnvirType.NODE_PC || currentEnir === JSRUNEnvirType.WEB_PC;
var isMobile = currentEnir === JSRUNEnvirType.WEB_MOBILE;
var isJS = true;

var PlatformSelect = function PlatformSelect(select) {
  var target;

  if (isWeb) {
    target = select.web;
  } else if (isNode) {
    target = select.node;
  }

  return target;
};



/***/ }),

/***/ "./source/web/Util/channel-value-util.js":
/*!***********************************************!*\
  !*** ./source/web/Util/channel-value-util.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unpackValue": () => (/* binding */ unpackValue),
/* harmony export */   "wrapperValue": () => (/* binding */ wrapperValue)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./source/web/index.js");
/* harmony import */ var _Object_valueUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Object/valueUtil */ "./source/web/Object/valueUtil.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * 解包
 * @param value
 * @returns
 */

function unpackValue(value) {
  if (!!value === false) return '';
  return value._value.value.valueOf();
}
/**
 * 组合包装
 * @param input
 * @param value
 * @returns
 * wrapperValue(null,string) = wrapperValue<string>(null,StringObject) => ChannelObject<StringObject>
 */

function wrapperValue(input, value) {
  var nextValue = (0,_Object_valueUtil__WEBPACK_IMPORTED_MODULE_1__.decide)(value);
  return new ___WEBPACK_IMPORTED_MODULE_0__.ObjectTarget(_objectSpread(_objectSpread({}, input._value), {}, {
    value: nextValue
  }));
}

/***/ }),

/***/ "./source/web/Util/tools.js":
/*!**********************************!*\
  !*** ./source/web/Util/tools.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getObjectType": () => (/* binding */ getObjectType),
/* harmony export */   "has": () => (/* binding */ has),
/* harmony export */   "noop": () => (/* binding */ noop)
/* harmony export */ });
/*
 * @Author:
 * @Date: 2022-06-08 19:31:16
 * @Last Modified by: zihao.zhu
 * @Last Modified time: 2022-07-06 15:53:56
 * @desc : undefined
 */
var isURL = function isURL(url) {
  var strRegex = '^((https|http|ftp)://)?' + //(https或http或ftp):// 可有可无
  "(([\\w_!~*'()\\.&=+$%-]+: )?[\\w_!~*'()\\.&=+$%-]+@)?" + //ftp的user@  可有可无
  '(([0-9]{1,3}\\.){3}[0-9]{1,3}' + // IP形式的URL- 3位数字.3位数字.3位数字.3位数字
  '|' + // 允许IP和DOMAIN（域名）
  '(localhost)|' + //匹配localhost
  "([\\w_!~*'()-]+\\.)*" + // 域名- 至少一个[英文或数字_!~*\'()-]加上.
  '\\w+\\.' + // 一级域名 -英文或数字  加上.
  '[a-zA-Z]{1,6})' + // 顶级域名- 1-6位英文
  '(:[0-9]{1,5})?' + // 端口- :80 ,1-5位数字
  '((/?)|' + // url无参数结尾 - 斜杆或这没有
  "(/[\\w_!~*'()\\.;?:@&=+$,%#-]+)+/?)$"; //请求参数结尾- 英文或数字和[]内的各种字符

  var re = new RegExp(strRegex, 'i'); //i不区分大小写
  //将url做uri转码后再匹配，解除请求参数中的中文和空字符影响

  if (re.test(encodeURI(url))) {
    return true;
  } else {
    return false;
  }
};

var isWindowFilePath = function isWindowFilePath(url) {
  return url.startsWith('file://');
};

var has = Function.call.bind(Object.prototype.hasOwnProperty);

var getObjectType = function getObjectType(source) {
  return Object.prototype.toString.call(source);
};

function noop() {}



/***/ }),

/***/ "./source/web/Works/ExtendsWorks/Base64Work.js":
/*!*****************************************************!*\
  !*** ./source/web/Works/ExtendsWorks/Base64Work.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Base64DecodeWork": () => (/* binding */ Base64DecodeWork),
/* harmony export */   "Base64EnCodeWork": () => (/* binding */ Base64EnCodeWork)
/* harmony export */ });
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-base64 */ "js-base64");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Instruction */ "./source/web/Works/Instruction.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Util_Equipment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Util/Equipment */ "./source/web/Util/Equipment.js");
/* harmony import */ var _Util_channel_value_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Util/channel-value-util */ "./source/web/Util/channel-value-util.js");
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 //编码

var Base64EnCodeWork = /*#__PURE__*/function (_InstructionMTM) {
  _inherits(Base64EnCodeWork, _InstructionMTM);

  var _super = _createSuper(Base64EnCodeWork);

  function Base64EnCodeWork() {
    var _this;

    _classCallCheck(this, Base64EnCodeWork);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "name", "Base64EnCodeWork");

    return _this;
  }

  _createClass(Base64EnCodeWork, [{
    key: "run",
    value: function run(input) {
      return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(function (subscriber) {
        var target;
        if (input === null || input === undefined) target = '';else {
          target = (0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_4__.unpackValue)(input);
        }
        subscriber.next((0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_4__.wrapperValue)(input, js_base64__WEBPACK_IMPORTED_MODULE_0__.Base64.encode(target)));
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
      return _Util_Equipment__WEBPACK_IMPORTED_MODULE_3__.isJS;
    }
  }]);

  return Base64EnCodeWork;
}(_Instruction__WEBPACK_IMPORTED_MODULE_1__.InstructionMTM); //解码


var Base64DecodeWork = /*#__PURE__*/function (_InstructionMTM2) {
  _inherits(Base64DecodeWork, _InstructionMTM2);

  var _super2 = _createSuper(Base64DecodeWork);

  function Base64DecodeWork() {
    var _this2;

    _classCallCheck(this, Base64DecodeWork);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this2), "name", "Base64DecodeWork");

    return _this2;
  }

  _createClass(Base64DecodeWork, [{
    key: "run",
    value: function run(input) {
      return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(function (subscriber) {
        var target;
        if (input === null || input === undefined) target = '';else {
          target = (0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_4__.unpackValue)(input);
        }
        subscriber.next((0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_4__.wrapperValue)(input, js_base64__WEBPACK_IMPORTED_MODULE_0__.Base64.decode(target)));
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
      return _Util_Equipment__WEBPACK_IMPORTED_MODULE_3__.isJS;
    }
  }]);

  return Base64DecodeWork;
}(_Instruction__WEBPACK_IMPORTED_MODULE_1__.InstructionMTM);



/***/ }),

/***/ "./source/web/Works/ExtendsWorks/BeginWork.js":
/*!****************************************************!*\
  !*** ./source/web/Works/ExtendsWorks/BeginWork.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BeginWork": () => (/* binding */ BeginWork)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Instruction */ "./source/web/Works/Instruction.js");
/* harmony import */ var _Util_Equipment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Util/Equipment */ "./source/web/Util/Equipment.js");
/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Object */ "./source/web/Object/index.js");
/* harmony import */ var _Object_valueUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Object/valueUtil */ "./source/web/Object/valueUtil.js");
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var BeginWork = /*#__PURE__*/function (_InstructionOTO) {
  _inherits(BeginWork, _InstructionOTO);

  var _super = _createSuper(BeginWork);

  // 输入 头部work
  // inputSubject: Subject<BaseType> = new Subject<BaseType>();
  function BeginWork() {
    var _this;

    _classCallCheck(this, BeginWork);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "name", "BeginWork");

    _defineProperty(_assertThisInitialized(_this), "inputSubscription", void 0);

    _this.uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)();
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
      var id = runId !== null && runId !== void 0 ? runId : (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)();
      this.nextWork.next(new _Object__WEBPACK_IMPORTED_MODULE_3__.ObjectTarget({
        id: id,
        value: (0,_Object_valueUtil__WEBPACK_IMPORTED_MODULE_4__.decide)(value),
        option: {}
      }));
    }
  }, {
    key: "completeOneLoop",
    value: function completeOneLoop() {}
  }], [{
    key: "isAble",
    value: function isAble() {
      return _Util_Equipment__WEBPACK_IMPORTED_MODULE_2__.isJS;
    }
  }]);

  return BeginWork;
}(_Instruction__WEBPACK_IMPORTED_MODULE_1__.InstructionOTO);

_defineProperty(BeginWork, "OPTION", void 0);

_defineProperty(BeginWork, "_id", 0);

/***/ }),

/***/ "./source/web/Works/ExtendsWorks/FetchWork.js":
/*!****************************************************!*\
  !*** ./source/web/Works/ExtendsWorks/FetchWork.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FetchWork)
/* harmony export */ });
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Instruction */ "./source/web/Works/Instruction.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Util_Equipment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Util/Equipment */ "./source/web/Util/Equipment.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../.. */ "./source/web/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var FetchWork = /*#__PURE__*/function (_InstructionOTO) {
  _inherits(FetchWork, _InstructionOTO);

  var _super = _createSuper(FetchWork);

  function FetchWork() {
    var _this;

    _classCallCheck(this, FetchWork);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "name", "FetchWork");

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

      return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (subscriber) {
        var fetchSub = that.context.platform.fetch(options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(function (result) {
          var _result$valueOf = result.valueOf(),
              data = _result$valueOf.data;

          _this2.logMsg("[FetchWork][load:data]".concat(data), input);
        })).subscribe({
          next: function next(data) {
            var result = data.valueOf();

            if (result.error) {
              subscriber.error(result.error);
            } else {
              subscriber.next(new ___WEBPACK_IMPORTED_MODULE_3__.ObjectTarget(_objectSpread(_objectSpread({}, input._value), {}, {
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
      return _Util_Equipment__WEBPACK_IMPORTED_MODULE_2__.isJS;
    }
  }]);

  return FetchWork;
}(_Instruction__WEBPACK_IMPORTED_MODULE_0__.InstructionOTO);



/***/ }),

/***/ "./source/web/Works/ExtendsWorks/LoadFileWork.js":
/*!*******************************************************!*\
  !*** ./source/web/Works/ExtendsWorks/LoadFileWork.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoadFileWork)
/* harmony export */ });
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Instruction */ "./source/web/Works/Instruction.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Object */ "./source/web/Object/index.js");
/* harmony import */ var _Util_Equipment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Util/Equipment */ "./source/web/Util/Equipment.js");
/* harmony import */ var _Bridge_ConfigTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Bridge/ConfigTypes */ "./source/web/Bridge/ConfigTypes.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Util_channel_value_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Util/channel-value-util */ "./source/web/Util/channel-value-util.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var LoadFileWork = /*#__PURE__*/function (_InstructionOTO) {
  _inherits(LoadFileWork, _InstructionOTO);

  var _super = _createSuper(LoadFileWork);

  function LoadFileWork(config) {
    var _this;

    _classCallCheck(this, LoadFileWork);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "name", "LoadFileWork");

    _defineProperty(_assertThisInitialized(_this), "currentConfig", {
      type: _Bridge_ConfigTypes__WEBPACK_IMPORTED_MODULE_4__.FileType.All
    });

    _this.currentConfig = config || {
      type: _Bridge_ConfigTypes__WEBPACK_IMPORTED_MODULE_4__.FileType.All
    };
    return _this;
  }

  _createClass(LoadFileWork, [{
    key: "run",
    value: function run(input, option) {
      var _this2 = this;

      var that = this;

      var runOption = _objectSpread(_objectSpread({}, option), this.currentConfig);

      return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (subscriber) {
        var target = (0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_6__.unpackValue)(input);
        var sub = that.context.platform.loadFile(target, runOption).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(function (obj) {
          var _obj$valueOf = obj.valueOf(),
              loaded = _obj$valueOf.loaded,
              total = _obj$valueOf.total,
              finish = _obj$valueOf.finish;

          _this2.logMsg("\u52A0\u8F7D\u8FDB\u5EA6[load:progress]---\uFF1A".concat(loaded, "/").concat(total, " \u662F\u5426\u5B8C\u6210\uFF1A").concat(finish), input);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeLast)(1)).subscribe({
          next: function next(obj) {
            var _obj$valueOf2 = obj.valueOf(),
                data = _obj$valueOf2.data,
                file = _obj$valueOf2.file;

            subscriber.next(new _Object__WEBPACK_IMPORTED_MODULE_2__.ObjectTarget(_objectSpread(_objectSpread({}, input._value), {}, {
              value: new _Object__WEBPACK_IMPORTED_MODULE_2__.DataObject(data),
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
      return _Util_Equipment__WEBPACK_IMPORTED_MODULE_3__.isJS;
    }
  }]);

  return LoadFileWork;
}(_Instruction__WEBPACK_IMPORTED_MODULE_0__.InstructionOTO);



/***/ }),

/***/ "./source/web/Works/ExtendsWorks/OpenURLWork.js":
/*!******************************************************!*\
  !*** ./source/web/Works/ExtendsWorks/OpenURLWork.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OpenURLWork)
/* harmony export */ });
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Instruction */ "./source/web/Works/Instruction.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Object */ "./source/web/Object/index.js");
/* harmony import */ var _Util_Equipment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Util/Equipment */ "./source/web/Util/Equipment.js");
/* harmony import */ var _Util_channel_value_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Util/channel-value-util */ "./source/web/Util/channel-value-util.js");
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/**
 * 打开路径
 * http://www.baidu.com
 * node window: file:///C:/Users/Administrator    file:///C:/Users/Administrator/Desktop/116513f379bd664b7cfe5b3b40f5737d.jpg
 *
 * node:可以打开文件 网页
 * web:只能代开网页
 */

var OpenURLWork = /*#__PURE__*/function (_InstructionOTO) {
  _inherits(OpenURLWork, _InstructionOTO);

  var _super = _createSuper(OpenURLWork);

  function OpenURLWork() {
    var _this;

    _classCallCheck(this, OpenURLWork);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "name", "OpenURLWork");

    return _this;
  }

  _createClass(OpenURLWork, [{
    key: "run",
    value: function run(input, option) {
      var that = this;
      return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (subscriber) {
        var target = (0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_4__.unpackValue)(input);
        var sub = that.context.platform.open(target, option).subscribe({
          next: function next(_) {
            return subscriber.next((0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_4__.wrapperValue)(input, new _Object__WEBPACK_IMPORTED_MODULE_2__.BooleanObject(true)));
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
      return _Util_Equipment__WEBPACK_IMPORTED_MODULE_3__.isJS;
    }
  }]);

  return OpenURLWork;
}(_Instruction__WEBPACK_IMPORTED_MODULE_0__.InstructionOTO);



/***/ }),

/***/ "./source/web/Works/ExtendsWorks/QRCodeWork.js":
/*!*****************************************************!*\
  !*** ./source/web/Works/ExtendsWorks/QRCodeWork.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QRCodeWork": () => (/* binding */ QRCodeWork)
/* harmony export */ });
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Instruction */ "./source/web/Works/Instruction.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Util_Equipment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Util/Equipment */ "./source/web/Util/Equipment.js");
/* harmony import */ var _Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Util/channel-value-util */ "./source/web/Util/channel-value-util.js");
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/**
 * 字符串生产QRcode base64
 * input => StringObject
 * output => StringObject
 */

var QRCodeWork = /*#__PURE__*/function (_InstructionOTO) {
  _inherits(QRCodeWork, _InstructionOTO);

  var _super = _createSuper(QRCodeWork);

  function QRCodeWork() {
    var _this;

    _classCallCheck(this, QRCodeWork);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "name", "QRCodeWork");

    return _this;
  }

  _createClass(QRCodeWork, [{
    key: "run",
    value: function run(input, option) {
      var that = this;
      return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (subscriber) {
        var target;
        if (input === null || input === undefined) target = "";else {
          target = (0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__.unpackValue)(input);
        }
        var sub = that.context.platform.createQrCode(target, option).subscribe({
          next: function next(res) {
            return subscriber.next((0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__.wrapperValue)(input, res._value));
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
      return _Util_Equipment__WEBPACK_IMPORTED_MODULE_2__.isJS; // return isNode || isWeb || isRN
    }
  }]);

  return QRCodeWork;
}(_Instruction__WEBPACK_IMPORTED_MODULE_0__.InstructionOTO);



/***/ }),

/***/ "./source/web/Works/ExtendsWorks/RunCommandWork.js":
/*!*********************************************************!*\
  !*** ./source/web/Works/ExtendsWorks/RunCommandWork.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RunCommandWork)
/* harmony export */ });
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Instruction */ "./source/web/Works/Instruction.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Util_Equipment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Util/Equipment */ "./source/web/Util/Equipment.js");
/* harmony import */ var _Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Util/channel-value-util */ "./source/web/Util/channel-value-util.js");
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/**
 * "1 + $I$ "
 * @param template
 * @param input
 * @param option
 * @returns
 */

function handleEvalCommand(template, params, config, runOption) {
  var input = (0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__.unpackValue)(params);
  var runCommand = template;

  if (typeof input === 'string') {
    var placeholder = config['*'];

    if (placeholder) {
      runCommand = runCommand.replaceAll(placeholder, input);
    }
  } else {
    Object.keys(config).forEach(function (key) {
      var placeholder = config[key];
      var value = input[key];
      runCommand = runCommand.replaceAll(placeholder, value);
    });
  }

  return runCommand;
}
/**
 * 默认：
 * run javascript
 *
 * node:指定
 *  = "#javascript#console.log('hello world')"
 *  = "#shell#echo hello world"
 *
 *  lastWork-output-value:1000
 *  new RunCommandWork('$I$ + 1') === new RunCommandWork('$I$ + 1',{'*':'$I$ '})
 *  ===>run "1000 + 1"
 *  ==================================
 *
 *  lastWork-output-value:{A:1000,B:2}
 *  new RunCommandWork('$X$ + 20 * $Y$',{'A':'$X$,'B':'$Y$' '})
 *  ===> "1000 + 20 * 2"
 *  ===================================
 *
 *  lastWork-output-value:{A:1000,B:2}
 *  new RunCommandWork((params:{A:1000,B:2})=>{
 *     return `${A} * 2 + ${B}`
 *  })
 */


var RunCommandWork = /*#__PURE__*/function (_InstructionOTO) {
  _inherits(RunCommandWork, _InstructionOTO);

  var _super = _createSuper(RunCommandWork);

  function RunCommandWork() {
    var _this;

    _classCallCheck(this, RunCommandWork);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "template", '');

    _defineProperty(_assertThisInitialized(_this), "name", "RunCommandWork");

    _defineProperty(_assertThisInitialized(_this), "paramsConfig", {});

    _defineProperty(_assertThisInitialized(_this), "callBack", null);

    if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
      var template = (arguments.length <= 0 ? undefined : arguments[0]) || '$I$';
      var paramsConfig = (arguments.length <= 1 ? undefined : arguments[1]) || {
        "*": "$I$"
      };
      _this.template = template;
      _this.paramsConfig = paramsConfig;
    } else if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'function') {
      _this.callBack = arguments.length <= 0 ? undefined : arguments[0];
    }

    return _this;
  }

  _createClass(RunCommandWork, [{
    key: "run",
    value: function run(command, option) {
      var _this2 = this;

      var that = this;
      return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (subscriber) {
        var target;

        if (that.callBack && typeof that.callBack === 'function') {
          target = _this2.callBack((0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__.unpackValue)(command), option);
        } else target = handleEvalCommand(that.template, command, _this2.paramsConfig, option);

        var sub = that.context.platform.runCommand(target).subscribe({
          next: function next(info) {
            _this2.logMsg("\u6267\u884Ccommand\uFF1A".concat(info.error ? '失败' : '成功', "\u3002\u7ED3\u679C\uFF1A").concat(info.result), command);

            subscriber.next((0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__.wrapperValue)(command, !!(info.error ? undefined : info.result)));
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
      return _Util_Equipment__WEBPACK_IMPORTED_MODULE_2__.isJS; // return isNode || isWeb || isRN || isElectron
    }
  }]);

  return RunCommandWork;
}(_Instruction__WEBPACK_IMPORTED_MODULE_0__.InstructionOTO);



/***/ }),

/***/ "./source/web/Works/ExtendsWorks/UtilWork.js":
/*!***************************************************!*\
  !*** ./source/web/Works/ExtendsWorks/UtilWork.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DelayIntervalWork": () => (/* binding */ DelayIntervalWork),
/* harmony export */   "IntervalWork": () => (/* binding */ IntervalWork),
/* harmony export */   "TimeoutWork": () => (/* binding */ TimeoutWork)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Object_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Object/index */ "./source/web/Object/index.js");
/* harmony import */ var _Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Util/channel-value-util */ "./source/web/Util/channel-value-util.js");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Instruction */ "./source/web/Works/Instruction.js");
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // 一直发

var IntervalWork = /*#__PURE__*/function (_InstructionOTM) {
  _inherits(IntervalWork, _InstructionOTM);

  var _super = _createSuper(IntervalWork);

  function IntervalWork(interval) {
    var _this;

    var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
    var notifier = arguments.length > 2 ? arguments[2] : undefined;

    _classCallCheck(this, IntervalWork);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "name", "IntervalWork");

    _defineProperty(_assertThisInitialized(_this), "intervalTime", void 0);

    _defineProperty(_assertThisInitialized(_this), "maxCount", void 0);

    _defineProperty(_assertThisInitialized(_this), "notifier", void 0);

    _this.intervalTime = interval || 1000;
    _this.maxCount = max;
    _this.notifier = notifier || rxjs__WEBPACK_IMPORTED_MODULE_0__.NEVER;
    return _this;
  }

  _createClass(IntervalWork, [{
    key: "run",
    value: function run(input) {
      var _this2 = this;

      var intervalTime = parseInt((0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__.unpackValue)(input)) || this.intervalTime || 1000;
      var that = this;
      return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
        var sub = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.interval)(intervalTime, rxjs__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(that.maxCount), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.takeUntil)(_this2.notifier)).subscribe({
          next: function next(value) {
            return observer.next((0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__.wrapperValue)(input, value));
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
}(_Instruction__WEBPACK_IMPORTED_MODULE_4__.InstructionOTM); // 定时发


var TimeoutWork = /*#__PURE__*/function (_InstructionOTO) {
  _inherits(TimeoutWork, _InstructionOTO);

  var _super2 = _createSuper(TimeoutWork);

  function TimeoutWork(interval) {
    var _this3;

    _classCallCheck(this, TimeoutWork);

    _this3 = _super2.call(this);

    _defineProperty(_assertThisInitialized(_this3), "name", "TimeoutWork");

    _defineProperty(_assertThisInitialized(_this3), "intervalTime", void 0);

    _this3.intervalTime = interval || 1000;
    return _this3;
  }

  _createClass(TimeoutWork, [{
    key: "run",
    value: function run(input) {
      var intervalTime = parseInt((0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__.unpackValue)(input)) || this.intervalTime || 1000;
      var that = this;
      return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
        var sub = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.interval)(intervalTime, rxjs__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1)).subscribe({
          next: function next(value) {
            observer.next((0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__.wrapperValue)(input, value));
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
}(_Instruction__WEBPACK_IMPORTED_MODULE_4__.InstructionOTO); // 延迟 然后一直发


var DelayIntervalWork = /*#__PURE__*/function (_InstructionOTM2) {
  _inherits(DelayIntervalWork, _InstructionOTM2);

  var _super3 = _createSuper(DelayIntervalWork);

  function DelayIntervalWork() {
    var _this4;

    var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
    var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;
    var notifier = arguments.length > 3 ? arguments[3] : undefined;

    _classCallCheck(this, DelayIntervalWork);

    _this4 = _super3.call(this);

    _defineProperty(_assertThisInitialized(_this4), "name", 'DelayIntervalWork');

    _defineProperty(_assertThisInitialized(_this4), "intervalTime", void 0);

    _defineProperty(_assertThisInitialized(_this4), "maxCount", void 0);

    _defineProperty(_assertThisInitialized(_this4), "delayTime", void 0);

    _defineProperty(_assertThisInitialized(_this4), "notifier", void 0);

    _this4.intervalTime = interval || 1000;
    _this4.maxCount = max;
    _this4.delayTime = delay || 0;
    _this4.notifier = notifier || rxjs__WEBPACK_IMPORTED_MODULE_0__.NEVER;
    return _this4;
  }

  _createClass(DelayIntervalWork, [{
    key: "run",
    value: function run(input) {
      var _this5 = this;

      var intervalTime = parseInt((0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__.unpackValue)(input)) || this.intervalTime || 1000;
      var that = this;
      return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
        var sub = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.timer)(that.delayTime, intervalTime, rxjs__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(that.maxCount), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.takeUntil)(_this5.notifier)).subscribe({
          next: function next(value) {
            return observer.next((0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__.wrapperValue)(input, new _Object_index__WEBPACK_IMPORTED_MODULE_2__.NumberObject(value)));
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
}(_Instruction__WEBPACK_IMPORTED_MODULE_4__.InstructionOTM);



/***/ }),

/***/ "./source/web/Works/Instruction.js":
/*!*****************************************!*\
  !*** ./source/web/Works/Instruction.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Instruction": () => (/* binding */ Instruction),
/* harmony export */   "InstructionMTM": () => (/* binding */ InstructionMTM),
/* harmony export */   "InstructionOTM": () => (/* binding */ InstructionOTM),
/* harmony export */   "InstructionOTO": () => (/* binding */ InstructionOTO)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Util_Equipment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Util/Equipment */ "./source/web/Util/Equipment.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _WorkUnit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WorkUnit */ "./source/web/Works/WorkUnit.js");
/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Object */ "./source/web/Object/index.js");
/* harmony import */ var _Util_channel_value_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Util/channel-value-util */ "./source/web/Util/channel-value-util.js");
/* harmony import */ var _Util_tools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Util/tools */ "./source/web/Util/tools.js");
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









/**
 * 一次输入--->一次输出 InstructionOTO
 * 一次输入--->多次输出 InstructionOTM
 * n次输入---->m次输出 InstructionMTM
 */

var Instruction = /*#__PURE__*/function (_Subject) {
  _inherits(Instruction, _Subject);

  var _super = _createSuper(Instruction);

  // 订阅自己的
  // 运行配置 config:OPTION todo
  function Instruction() {
    var _this;

    _classCallCheck(this, Instruction);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "name", "Instruction");

    _defineProperty(_assertThisInitialized(_this), "id", Instruction._id++);

    _defineProperty(_assertThisInitialized(_this), "uuid", void 0);

    _defineProperty(_assertThisInitialized(_this), "beforeWork", void 0);

    _defineProperty(_assertThisInitialized(_this), "nextWork", void 0);

    _defineProperty(_assertThisInitialized(_this), "context", void 0);

    _defineProperty(_assertThisInitialized(_this), "runSubscriptions", new Map());

    _defineProperty(_assertThisInitialized(_this), "pools", []);

    _defineProperty(_assertThisInitialized(_this), "config", {
      development: true
    });

    _this.uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)();
    return _this;
  } // 连接上下通道


  _createClass(Instruction, [{
    key: "prepare",
    value: function prepare(before, next) {
      var _this$context;

      this.beforeWork = before;
      this.nextWork = next;
      this.config = ((_this$context = this.context) === null || _this$context === void 0 ? void 0 : _this$context.runOptions) || {};

      this._connectChannel();

      return Promise.resolve();
    } // 处理上一个的传入

  }, {
    key: "_connectChannel",
    value: function _connectChannel() {
      var _this2 = this;

      var that = this; // // 处理数据

      var sub2 = this.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(function (value) {
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
      var execFunc = (0,_Util_Equipment__WEBPACK_IMPORTED_MODULE_1__.PlatformSelect)({
        web: function web() {
          var _that$web_run;

          return ((_that$web_run = that.web_run) !== null && _that$web_run !== void 0 ? _that$web_run : that.run || _Util_tools__WEBPACK_IMPORTED_MODULE_7__.noop).bind(that)(value, nextOption);
        },
        node: function node() {
          var _that$node_run;

          return ((_that$node_run = that.node_run) !== null && _that$node_run !== void 0 ? _that$node_run : that.run || _Util_tools__WEBPACK_IMPORTED_MODULE_7__.noop).bind(that)(value, nextOption);
        },
        other: function other() {
          return (that.run || _Util_tools__WEBPACK_IMPORTED_MODULE_7__.noop).bind(that)(value, nextOption);
        }
      });
      sendLog("[Work][Func:run]->入口", value);
      var uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)();
      var runSub = execFunc(value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(function (_value) {
        sendLog("[Work][Func:run]->结果", _value);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.observeOn)(rxjs__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler)).subscribe({
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
      var unit = new _WorkUnit__WEBPACK_IMPORTED_MODULE_4__.WorkUnit(that.context, that, runSub, uuid);
      this.runSubscriptions.set(unit.uuid, unit);
    }
  }, {
    key: "stopWork",
    value: function stopWork() {
      var that = this;
      return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscribe) {
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
        value: new _Object__WEBPACK_IMPORTED_MODULE_5__.StringObject(err.message)
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
      var _this$config2, _this$context2;

      ((_this$config2 = this.config) === null || _this$config2 === void 0 ? void 0 : _this$config2.development) && ((_this$context2 = this.context) === null || _this$context2 === void 0 ? void 0 : _this$context2.sendLog({
        work: [this],
        content: this.context,
        desc: msg,
        value: (0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_6__.wrapperValue)(input, null)
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
          value: (0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_6__.wrapperValue)(value, null)
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
      return _Util_Equipment__WEBPACK_IMPORTED_MODULE_1__.isJS;
    }
  }]);

  return Instruction;
}(rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject);

_defineProperty(Instruction, "_id", 0);

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
      return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) {
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
var InstructionOTM = /*#__PURE__*/function (_Instruction2) {
  _inherits(InstructionOTM, _Instruction2);

  var _super3 = _createSuper(InstructionOTM);

  function InstructionOTM() {
    var _this4;

    _classCallCheck(this, InstructionOTM);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this4 = _super3.call.apply(_super3, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this4), "name", "MultipleInstruction");

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
      return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) {
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

_defineProperty(InstructionOTM, "OPTION", void 0);

var InstructionMTM = /*#__PURE__*/function (_Instruction3) {
  _inherits(InstructionMTM, _Instruction3);

  var _super4 = _createSuper(InstructionMTM);

  function InstructionMTM() {
    var _this5;

    _classCallCheck(this, InstructionMTM);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this5 = _super4.call.apply(_super4, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this5), "name", "MultipleInstruction");

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
      return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) {
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

_defineProperty(InstructionMTM, "OPTION", void 0);

/***/ }),

/***/ "./source/web/Works/WorkUnit.js":
/*!**************************************!*\
  !*** ./source/web/Works/WorkUnit.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkUnit": () => (/* binding */ WorkUnit)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var WorkUnit = /*#__PURE__*/_createClass(function WorkUnit(context, work, sub, uuid) {
  _classCallCheck(this, WorkUnit);

  _defineProperty(this, "context", void 0);

  _defineProperty(this, "work", void 0);

  _defineProperty(this, "uuid", void 0);

  _defineProperty(this, "sub", void 0);

  this.context = context;
  this.work = work;
  this.sub = sub;
  this.uuid = uuid !== null && uuid !== void 0 ? uuid : (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)();
});

/***/ }),

/***/ "./source/web/index.js":
/*!*****************************!*\
  !*** ./source/web/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrayObject": () => (/* reexport safe */ _Object__WEBPACK_IMPORTED_MODULE_0__.ArrayObject),
/* harmony export */   "Base64DecodeWork": () => (/* reexport safe */ _Works_ExtendsWorks_Base64Work__WEBPACK_IMPORTED_MODULE_5__.Base64DecodeWork),
/* harmony export */   "Base64EnCodeWork": () => (/* reexport safe */ _Works_ExtendsWorks_Base64Work__WEBPACK_IMPORTED_MODULE_5__.Base64EnCodeWork),
/* harmony export */   "BooleanObject": () => (/* reexport safe */ _Object__WEBPACK_IMPORTED_MODULE_0__.BooleanObject),
/* harmony export */   "Context": () => (/* reexport safe */ _Context__WEBPACK_IMPORTED_MODULE_3__.Context),
/* harmony export */   "ControlFlow": () => (/* reexport safe */ _Object_Able_Control__WEBPACK_IMPORTED_MODULE_2__.ControlFlow),
/* harmony export */   "DataObject": () => (/* reexport safe */ _Object__WEBPACK_IMPORTED_MODULE_0__.DataObject),
/* harmony export */   "DateObject": () => (/* reexport safe */ _Object__WEBPACK_IMPORTED_MODULE_0__.DateObject),
/* harmony export */   "DelayIntervalWork": () => (/* reexport safe */ _Works_ExtendsWorks_UtilWork__WEBPACK_IMPORTED_MODULE_11__.DelayIntervalWork),
/* harmony export */   "FetchWork": () => (/* reexport safe */ _Works_ExtendsWorks_FetchWork__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "InstructionMTM": () => (/* reexport safe */ _Works_Instruction__WEBPACK_IMPORTED_MODULE_4__.InstructionMTM),
/* harmony export */   "InstructionOTM": () => (/* reexport safe */ _Works_Instruction__WEBPACK_IMPORTED_MODULE_4__.InstructionOTM),
/* harmony export */   "InstructionOTO": () => (/* reexport safe */ _Works_Instruction__WEBPACK_IMPORTED_MODULE_4__.InstructionOTO),
/* harmony export */   "IntervalWork": () => (/* reexport safe */ _Works_ExtendsWorks_UtilWork__WEBPACK_IMPORTED_MODULE_11__.IntervalWork),
/* harmony export */   "LoadFileWork": () => (/* reexport safe */ _Works_ExtendsWorks_LoadFileWork__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "MapObject": () => (/* reexport safe */ _Object__WEBPACK_IMPORTED_MODULE_0__.MapObject),
/* harmony export */   "NULLObject": () => (/* reexport safe */ _Object__WEBPACK_IMPORTED_MODULE_0__.NULLObject),
/* harmony export */   "NumberObject": () => (/* reexport safe */ _Object__WEBPACK_IMPORTED_MODULE_0__.NumberObject),
/* harmony export */   "ObjectTarget": () => (/* reexport safe */ _Object__WEBPACK_IMPORTED_MODULE_0__.ObjectTarget),
/* harmony export */   "OpenURLWork": () => (/* reexport safe */ _Works_ExtendsWorks_OpenURLWork__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "QRCodeWork": () => (/* reexport safe */ _Works_ExtendsWorks_QRCodeWork__WEBPACK_IMPORTED_MODULE_8__.QRCodeWork),
/* harmony export */   "RunCommandWork": () => (/* reexport safe */ _Works_ExtendsWorks_RunCommandWork__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "SetObject": () => (/* reexport safe */ _Object__WEBPACK_IMPORTED_MODULE_0__.SetObject),
/* harmony export */   "StringObject": () => (/* reexport safe */ _Object__WEBPACK_IMPORTED_MODULE_0__.StringObject),
/* harmony export */   "TimeoutWork": () => (/* reexport safe */ _Works_ExtendsWorks_UtilWork__WEBPACK_IMPORTED_MODULE_11__.TimeoutWork),
/* harmony export */   "WorkType": () => (/* reexport safe */ _Types__WEBPACK_IMPORTED_MODULE_1__.WorkType),
/* harmony export */   "createExtendsConstruct": () => (/* reexport safe */ _Object__WEBPACK_IMPORTED_MODULE_0__.createExtendsConstruct),
/* harmony export */   "createExtendsInstance": () => (/* reexport safe */ _Object__WEBPACK_IMPORTED_MODULE_0__.createExtendsInstance),
/* harmony export */   "decide": () => (/* reexport safe */ _Object_valueUtil__WEBPACK_IMPORTED_MODULE_13__.decide),
/* harmony export */   "isAbleType": () => (/* reexport safe */ _Object_valueUtil__WEBPACK_IMPORTED_MODULE_13__.isAbleType),
/* harmony export */   "unpackValue": () => (/* reexport safe */ _Util_channel_value_util__WEBPACK_IMPORTED_MODULE_12__.unpackValue),
/* harmony export */   "wrapperValue": () => (/* reexport safe */ _Util_channel_value_util__WEBPACK_IMPORTED_MODULE_12__.wrapperValue)
/* harmony export */ });
/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Object */ "./source/web/Object/index.js");
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Types */ "./source/web/Types.js");
/* harmony import */ var _Object_Able_Control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Object/Able/Control */ "./source/web/Object/Able/Control.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Context */ "./source/web/Context.js");
/* harmony import */ var _Works_Instruction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Works/Instruction */ "./source/web/Works/Instruction.js");
/* harmony import */ var _Works_ExtendsWorks_Base64Work__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Works/ExtendsWorks/Base64Work */ "./source/web/Works/ExtendsWorks/Base64Work.js");
/* harmony import */ var _Works_ExtendsWorks_LoadFileWork__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Works/ExtendsWorks/LoadFileWork */ "./source/web/Works/ExtendsWorks/LoadFileWork.js");
/* harmony import */ var _Works_ExtendsWorks_OpenURLWork__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Works/ExtendsWorks/OpenURLWork */ "./source/web/Works/ExtendsWorks/OpenURLWork.js");
/* harmony import */ var _Works_ExtendsWorks_QRCodeWork__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Works/ExtendsWorks/QRCodeWork */ "./source/web/Works/ExtendsWorks/QRCodeWork.js");
/* harmony import */ var _Works_ExtendsWorks_FetchWork__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Works/ExtendsWorks/FetchWork */ "./source/web/Works/ExtendsWorks/FetchWork.js");
/* harmony import */ var _Works_ExtendsWorks_RunCommandWork__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Works/ExtendsWorks/RunCommandWork */ "./source/web/Works/ExtendsWorks/RunCommandWork.js");
/* harmony import */ var _Works_ExtendsWorks_UtilWork__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Works/ExtendsWorks/UtilWork */ "./source/web/Works/ExtendsWorks/UtilWork.js");
/* harmony import */ var _Util_channel_value_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Util/channel-value-util */ "./source/web/Util/channel-value-util.js");
/* harmony import */ var _Object_valueUtil__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Object/valueUtil */ "./source/web/Object/valueUtil.js");














 // 1

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_axios__;

/***/ }),

/***/ "js-base64":
/*!****************************!*\
  !*** external "js-base64" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_js_base64__;

/***/ }),

/***/ "qrcode-generator":
/*!***********************************!*\
  !*** external "qrcode-generator" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_qrcode_generator__;

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_rxjs__;

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_rxjs_operators__;

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_uuid__;

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	var __webpack_exports__ = __webpack_require__("./source/web/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.dev.js.map