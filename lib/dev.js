'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var reactIs = _interopDefault(require('react-is'));

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;

function getStatics(component) {
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  }

  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols$1) {
			symbols = getOwnPropertySymbols$1(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

{
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

{
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') ;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
}
});

function isStorageAvailable() {
  try {
    var storage = window.localStorage,
        x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return false;
  }
}

var storageAvailable = isStorageAvailable();

var SHOULD_LOG = false; // id counter to be used for various things that require unique identifiers

var idCounter = 0;

function nextId() {
  return idCounter++;
} // a stateful connection id, incremented for each connection.


var connIdCounter = 0; // map of each connection to an object containing keys:
// - ready (boolean)
// - user (user ident - two-tuple)
// - anonymous (boolean)
// - time - a time over-ride for all 'current' queries in the UI 
// - unauthorizedCallbacks - optionally provided functions to call when something is unauthorized

var connStatus = {}; // a map of each component ID to it's object

var componentIdx = {}; // for async calls to the worker, maintains the callback to execute with the result, when applicable

var callbackRegistry = {}; // holds worker reference globally. Don't initiate until first request for connection

var fqlWorker; // worker queue

var workerQueue = []; // worker initialized

var workerInitialized = false;

function addUnathorizedCallback(connId, cb) {
  var callbackID = Math.random();
  var callbackMap = connStatus[connId]['unauthorizedCallbacks'] || {}; // tag callback function so we can easily locate and remove later.

  cb.__fluree_cb_id = callbackID;
  callbackMap[callbackID] = cb;
  connStatus[connId]['unauthorizedCallbacks'] = callbackMap;
  return true;
}

function removeUnauthorizedCallback(connId, cb) {
  var callbackID = cb.__fluree_cb_id;
  if (callbackID) delete connStatus[connId]['unauthorizedCallbacks'][callbackID];
  return !!callbackID;
}

function executeUnauthorizedCallbacks(connId, data) {
  if (connStatus[connId]['unauthorizedCallbacks']) for (var key in connStatus[connId]['unauthorizedCallbacks']) {
    var cb = connStatus[connId]['unauthorizedCallbacks'][key];
    cb(data);
  }
} // worker.onmessage handler


function workerMessageHandler(e) {
  var msg = e.data;
  var cb;
  SHOULD_LOG && console.log("Message from worker: " + JSON.stringify(msg)); // if unauthorized response, trigger any registered unauthorizedCallbacks

  if (msg.data && msg.data.status === 401) executeUnauthorizedCallbacks(msg.conn, msg.data);

  switch (msg.event) {
    case "connInit":
      workerInitialized = true;
      workerQueue.forEach(workerInvoke);
      workerQueue = [];
      break;

    case "connStatus":
      var response = msg.data || {};
      var statusCode = response.status;

      if (connStatus[msg.conn]) {
        switch (statusCode) {
          case 200:
            connStatus[msg.conn].ready = true;
            break;

          case 401:
            // authorization error, need to log in
            connStatus[msg.conn].ready = false;
            connStatus[msg.conn].user = null;
            connStatus[msg.conn].anonymous = true;
            break;

          default:
            console.warn("Invalid connection response status: " + JSON.stringify(response));
            break;
        }
      } // check for callback


      cb = callbackRegistry[msg.ref];

      if (cb) {
        delete callbackRegistry[msg.ref];
        cb(msg, connStatus[msg.conn]);
      }

      break;

    case "connClosed":
      cb = callbackRegistry[msg.ref];

      if (cb) {
        delete callbackRegistry[msg.ref];
        cb(msg.data);
      }

      break;

    case "connLogout":
      cb = callbackRegistry[msg.ref];

      if (cb) {
        delete callbackRegistry[msg.ref];
        cb(msg.data);
      }

      break;

    case "setState":
      var comp = componentIdx[msg.ref];

      if (comp) {
        comp.setState(msg.data);
      } else {
        SHOULD_LOG && console.warn("Component no longer registered: " + msg.ref);
      }

      break;

    case "remoteInvoke":
      // check for a callback
      cb = callbackRegistry[msg.ref];

      if (cb) {
        delete callbackRegistry[msg.ref];
        cb(msg.data);
      }

      break;

    case "login":
      // if login successful, update conn's connStatus
      if (msg.data.status === 200) {
        connStatus[msg.conn].user = msg.data.result.username;
        connStatus[msg.conn].anonymous = false;
      } else {
        SHOULD_LOG && console.warn("Unable to authenticate: " + msg.data.message);
      } // if there was a callback passed to login(), execute


      cb = callbackRegistry[msg.ref];

      if (cb) {
        delete callbackRegistry[msg.ref];
        cb(msg.data);
      }

      break;

    default:
      SHOULD_LOG && console.warn("Unreconized event from worker: " + msg.event + ". Full message: " + JSON.stringify(msg));
      break;
  }

  return;
} // we use a global to track connection state, get method for it


function _isReady(connId) {
  return connStatus[connId].ready;
} // we use a global to track connection state, get method for it


function _isClosed(connId) {
  var connObj = connStatus[connId];
  return connObj && Object.keys(connObj).length === 0;
}

function workerInvoke(obj) {
  if (obj.cb) {
    if (typeof obj.cb === 'function') {
      obj.ref = obj.ref || nextId();
      callbackRegistry[obj.ref] = obj.cb;
    } else {
      console.warn('Callback supplied was not a function:', obj);
    }

    delete obj.cb;
  }

  if (workerInitialized) {
    fqlWorker.postMessage(obj);
  } else {
    workerQueue.push(obj);
  }

  return true;
} // Register a query, provide the connection, component ID, query and query options


function registerQuery(conn, compId, query, opts, forceUpdate) {
  var invokeObj = {
    conn: conn.id,
    action: "registerQuery",
    ref: compId,
    params: [compId, query, opts, forceUpdate]
  };

  if (connStatus[conn.id].ready) {
    return workerInvoke(invokeObj);
  } else {
    if (connStatus[conn.id].wiObj === undefined) {
      connStatus[conn.id].wiObj = [];
    }

    connStatus[conn.id].wiObj.push(invokeObj);
  }

  return false;
} // Remove query from registry


function unregisterQuery(conn, compId) {
  workerInvoke({
    conn: conn.id,
    ref: compId,
    action: "unregisterQuery",
    params: [compId]
  });
}

function queryIsValid(query) {
  if (query !== null && _typeof(query) === "object" && (query.vars === undefined || _typeof(query.vars) === "object") // null or object
  ) {
      return true;
    } else {
    return false;
  }
}

function workerErrorHandler(error) {
  console.error('Web worker error', JSON.stringify(error));
}
/**
 * Create a new connection with settings object.
 * 
 * @param {Object} config - Connection Settings
 * @param {string} [config.servers] - List of server URIs separated by commas
 * @param {string} [config.ledger] - Ledger name, i.e. 'my/ledger'
 * @param {string} [config.workerUrl='/flureeworker.js.gz'] - URL for flureeworker.js.gz
 * @param {boolean} [config.saveSession=false] - Will save session (token) locally so won't need to re-authenticate if token isn't expired
 * @param {string} [config.token] - You can supply a JWT token yourself
 * @param {boolean} [config.compact=true] - Option to remove namespaces from predicates when the namespace is the same as the collection
 * @param {boolean} [config.log=false] - Set to true to see logging. Debug logging must be enabled with 'Verbose' in DevTools.
 * @param {string} [config.username] - Set username for login when you want to automatically trigger the login with connection initialization.
 * @param {string} [config.password] - Set password for login when you want to automatically trigger the login with connection initialization.
 */


function ReactConnect(config) {
  var safeConfig;

  if (_typeof(config) === 'object' && config !== null) {
    // copy over all settings that can be serialized, else will fail web worker messaging
    safeConfig = JSON.parse(JSON.stringify(config));
  } else {
    safeConfig = {
      servers: config
    };
  } // initialize worker if not already done


  if (!fqlWorker) {
    fqlWorker = new Worker(safeConfig.workerUrl || "/flureeworker.js");
    fqlWorker.onmessage = workerMessageHandler;
    fqlWorker.onerror = workerErrorHandler;
  }

  connIdCounter++;
  safeConfig.id = connIdCounter;
  safeConfig.log = safeConfig.log === true ? true : false;
  safeConfig.compact = safeConfig.compact === false ? false : true;
  var connId = safeConfig.id;
  var localStorageKey = safeConfig.ledger + ':auth';
  var authData = localStorage.getItem(localStorageKey) || {};
  SHOULD_LOG = safeConfig.log;
  var conn = {
    id: safeConfig.id,
    isReady: function isReady() {
      return _isReady(connId);
    },
    isClosed: function isClosed() {
      return _isClosed(connId);
    },
    login: function login(username, password, _cb, rememberMe) {
      return workerInvoke({
        conn: safeConfig.id,
        action: "login",
        params: [username, password],
        cb: function cb(response) {
          if (response.status !== 200) {
            SHOULD_LOG && console.warn("Login failed: " + response.message);
          }

          if (_cb && typeof _cb === 'function') {
            if (response.status === 200 && rememberMe) localStorage.setItem(localStorageKey, response.result); // username, token

            _cb(result);
          } // execute pending callbacks on connection object


          conn.executeCallbacks(response.status === 200 ? "authenticated" : "authentication error");
        }
      });
    },
    executeCallbacks: function executeCallbacks(data) {
      var connectionStatus = connStatus[conn.id];

      if (connectionStatus.cb) {
        // callbacks registered?
        connectionStatus.cb.forEach(function (compId) {
          var comp = componentIdx[compId];

          if (comp) {
            comp.setState(data);
          } else {
            SHOULD_LOG && console.warn("Component no longer registered: " + compId);
          }
        });
      }

      if (connectionStatus.wiObj) {
        // workerInvoke objects registered?
        connectionStatus.wiObj.forEach(function (obj) {
          workerInvoke(obj);
        });
      } // reset connection callbacks


      connStatus[conn.id].cb = [];
      connStatus[conn.id].wiObj = [];
    },
    getUser: function getUser() {
      return connStatus[connId].user;
    },
    getInstance: function getInstance() {
      return safeConfig.instance;
    },
    isAuthenticated: function isAuthenticated() {
      if (connStatus[connId].anonymous === false) {
        return true;
      } else {
        return false;
      }
    },
    reset: function reset(cb) {
      connStatus[connId] = {
        ready: false,
        user: null,
        anonymous: true
      };
      return workerInvoke({
        conn: connId,
        action: "reset",
        params: [],
        cb: cb
      });
    },
    logout: function logout(cb) {
      connStatus[connId] = {
        ready: false,
        user: null,
        anonymous: true
      }; // if we stored credentials for 'rememberMe', clear them

      localStorage.removeItem(localStorageKey);
      return workerInvoke({
        conn: connId,
        action: "logout",
        params: [],
        cb: cb
      });
    },
    close: function close(cb) {
      // clear out connection state held locally
      connStatus[connId] = {};
      return workerInvoke({
        conn: connId,
        action: "close",
        params: [],
        cb: cb
      });
    },
    forceTime: function forceTime(t) {
      if (t && !(t instanceof Date)) {
        console.error("forceTime requires a date as a parameter, provided: " + t);
        return;
      }

      var tISOString = t ? t.toISOString() : null;
      var componentIds = Object.keys(componentIdx); // update central conn status to use this t for any new components rendered

      connStatus[connId].t = tISOString; // update options of all mounted components to add or remove 't' as applicable

      componentIds.map(function (id) {
        var component = componentIdx[id];
        if (t) component.opts.t = tISOString;else delete component.opts.t;
        registerQuery(component.conn, component.id, component.query, component.opts);
      });
    },
    getTime: function getTime() {
      return connStatus[connId].t ? new Date(Date.parse(connStatus[connId].t)) : null;
    },
    unauthorizedCallback: {
      add: function add(cb) {
        addUnathorizedCallback(connId, cb);
      },
      remove: function remove(cb) {
        removeUnauthorizedCallback(connId, cb);
      }
    }
  }; // initialize connection status, set ready to false

  connStatus[connId] = {
    ready: false,
    // if we already passed in a token, can also pass in the user/anonymous flags for storing
    user: safeConfig.user,
    anonymous: safeConfig.anonymous,
    // optional unauthorizedCallback will be called when a request is unauthorized
    unauthorizedCallback: config.unauthorizedCallback
  }; // initiate our connection in the web worker

  workerInvoke({
    conn: 0,
    // conn 0 means not connection specific
    action: "connect",
    params: [safeConfig],
    cb: function cb(msg, connStatus) {
      var response = msg.data || {};
      var data = {
        status: response.status === 200 ? "loading" : "connection error"
      };

      if (safeConfig.user) {
        // Authenticate?
        conn.login(safeConfig.user, safeConfig.password, undefined, safeConfig.rememberMe);
      } else {
        conn.executeCallbacks(data);
      }
    }
  }); // return connection object

  return conn;
}

function getDisplayName(component) {
  return component.displayName || component.name || "Component";
} // wraps react components that need a particular connection, making the
// connection available via the context to children


var FlureeProvider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FlureeProvider, _React$Component);

  function FlureeProvider(props, context) {
    var _this;

    _classCallCheck(this, FlureeProvider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FlureeProvider).call(this, props, context));

    if (!props.conn) {
      throw "FlureeProvider was not provided a conn prop, which should be a connection object.";
    }

    _this.conn = props.conn;
    return _this;
  }

  _createClass(FlureeProvider, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        conn: this.conn
      };
    }
  }, {
    key: "render",
    value: function render() {
      return React.Children.only(this.props.children);
    }
  }]);

  return FlureeProvider;
}(React.Component); // given a query and options, returns a vector of variables that
// were not provided via options. We use this to look for the variables
// in props


_defineProperty(FlureeProvider, "propTypes", {
  conn: propTypes.object.isRequired
});

_defineProperty(FlureeProvider, "childContextTypes", {
  conn: propTypes.object.isRequired
});

function getMissingVars(flurQL) {
  var vars = flurQL.vars ? Object.keys(flurQL.vars) : []; // return array of vars that have null as value

  return vars.filter(function (x) {
    return flurQL.vars[x] === null;
  }).map(function (x) {
    return x.substr(1);
  });
}

function wrapComponent(WrappedComponent, query, opts) {
  var flurQLDisplayName = "Fluree(".concat(getDisplayName(WrappedComponent), ")");

  var FlurQL =
  /*#__PURE__*/
  function (_React$Component2) {
    _inherits(FlurQL, _React$Component2);

    function FlurQL(props, context) {
      var _this2;

      _classCallCheck(this, FlurQL);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(FlurQL).call(this, props, context));
      _this2.conn = context.conn;
      _this2.id = nextId();
      _this2.queryIsFunction = typeof query === "function";
      _this2.query = _this2.queryIsFunction ? query(props, _this2.context) : query;
      _this2.isValidQuery = _this2.query && queryIsValid(_this2.query);
      _this2.missingVars = _this2.isValidQuery && _this2.query.vars ? getMissingVars(_this2.query) : []; // list of vars we need to check props for

      _this2.state = {
        result: {},
        error: _this2.query && !_this2.isValidQuery ? {
          status: 400,
          message: "Query is not valid: " + JSON.stringify(_this2.query)
        } : null,
        warning: _this2.query ? null : "No query yet, waiting...",
        status: "pending",
        loading: true
      };

      if (!_this2.conn) {
        throw "Could not find a Fluree connection (conn) in the context of " + flurQLDisplayName + ".";
      }

      return _this2;
    }

    _createClass(FlurQL, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this3 = this;

        // get any missing vars from props and update this.opts with them
        if (this.missingVars.length !== 0) {
          this.missingVars.forEach(function (v) {
            _this3.query.vars["?" + v] = _this3.props[v];
          });
        } // register this component for later re-render calling, etc.


        componentIdx[this.id] = this;

        if (this.query && this.isValidQuery) {
          registerQuery(this.conn, this.id, this.query, this.opts);
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        unregisterQuery(this.conn, this.id);
        delete componentIdx[this.id];
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        var _this4 = this;

        if (this.queryIsFunction) {
          var newQuery = query(this.props, this.context);
          this.query = newQuery;
          this.isValidQuery = queryIsValid(this.query);

          if (this.query && this.isValidQuery) {
            registerQuery(this.conn, this.id, this.query, this.opts);
          }
        } else {
          // check if any of the missing vars changed with the new props
          var didMissingVarsChange = false;

          for (var i = 0; i < this.missingVars.length; i++) {
            var varName = this.missingVars[i];

            if (prevProps[varName] !== this.props[varName]) {
              didMissingVarsChange = true;
            }
          }

          if (didMissingVarsChange === true) {
            this.missingVars.forEach(function (v) {
              _this4.query.vars["?" + v] = _this4.props[v];
            });
            registerQuery(this.conn, this.id, this.query, this.opts);
          }
        }
      }
    }, {
      key: "render",
      value: function render() {
        var result = this.state.result;
        var data = {
          id: this.id,
          result: result,
          forceUpdate: function () {
            if (this.query && this.isValidQuery) registerQuery(this.conn, this.id, this.query, this.opts, true);
          }.bind(this),
          deltas: this.state.deltas,
          error: this.state.error,
          warning: this.state.warning,
          status: this.state.status,
          loading: !(this.state.status === "loaded" || this.state.status === "error"),
          get: function get(keySeq, defaultValue) {
            keySeq = Array.isArray(keySeq) ? keySeq : [keySeq];
            var obj = result;
            var idx = 0;
            var length = keySeq.length;

            while (obj != null && idx < length) {
              obj = obj[keySeq[idx++]];
            }

            return idx == length && obj != null ? obj : defaultValue === undefined ? obj : defaultValue;
          }
        };
        var childProps = Object.assign({}, this.props, {
          data: data,
          invoke: this.conn.invoke
        });
        return React.createElement(WrappedComponent, childProps);
      }
    }]);

    return FlurQL;
  }(React.Component);

  _defineProperty(FlurQL, "displayName", flurQLDisplayName);

  _defineProperty(FlurQL, "WrappedComponent", WrappedComponent);

  _defineProperty(FlurQL, "contextTypes", {
    conn: propTypes.object.isRequired
  });

  return hoistNonReactStatics_cjs(FlurQL, WrappedComponent, {});
}

function flureeQL(query, opts) {
  return function (WrappedComponent) {
    return wrapComponent(WrappedComponent, query);
  };
}

var TimeTravel =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(TimeTravel, _React$Component3);

  function TimeTravel(props, context) {
    var _this5;

    _classCallCheck(this, TimeTravel);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(TimeTravel).call(this, props));
    _this5.state = {
      block: null
    };
    _this5.conn = context.conn;
    return _this5;
  }

  _createClass(TimeTravel, [{
    key: "handleChange",
    value: function handleChange(event) {
      var block = event.target.value;
      this.setState({
        block: block
      });
      this.conn.defaultBlock(block);
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      console.log("conn: @@@@@@@@");
      console.log(this.conn);
      this.conn.defaultBlock(this.state.block); // alert('A block was submitted: ' + this.state.block);

      return;
    }
  }, {
    key: "render",
    value: function render() {
      var isStorage = isStorageAvailable();
      return React.createElement("form", {
        onSubmit: this.handleSubmit.bind(this)
      }, React.createElement("input", {
        type: "number",
        value: this.state.block,
        onChange: this.handleChange.bind(this)
      }));
    }
  }]);

  return TimeTravel;
}(React.Component);

_defineProperty(TimeTravel, "contextTypes", {
  conn: propTypes.object.isRequired
});

exports.FlureeProvider = FlureeProvider;
exports.ReactConnect = ReactConnect;
exports.TimeTravel = TimeTravel;
exports.flureeQL = flureeQL;
exports.registerQuery = registerQuery;
exports.unregisterQuery = unregisterQuery;
