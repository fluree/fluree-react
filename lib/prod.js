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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
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

        return targetComponent;
    }

    return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

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
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
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

var SHOULD_LOG = true; // id counter to be used for various things that require unique identifiers

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
        connStatus[msg.conn].user = msg.data.body.user;
        connStatus[msg.conn].anonymous = msg.data.body.anonymous;
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
}


function _isReady(connId) {
  return connStatus[connId].ready;
} // we use a global to track connection state, get method for it


function _isClosed(connId) {
  var connObj = connStatus[connId];
  return connObj && Object.keys(connObj).length === 0;
}

function workerInvoke(obj) {
  // console.log('invoke', obj.action, workerInitialized, workerQueue);
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
  return workerInvoke(invokeObj);
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
  if (query !== null && _typeof(query) === "object") {
    return true;
  } else {
    return false;
  } // if (query !== null && (Array.isArray(query) || typeof query === "object")) {
  //   const graph = Array.isArray(query) ? query : query.graph;
  //   if (Array.isArray(graph) && graph.length > 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // } else {
  //   return false;
  // }

}

function workerErrorHandler(error) {
  console.error('Web worker error', JSON.stringify(error));
}

function instanceFromHostname() {
  var url = window.location.hostname || "";

  var _ref = url.match(/([^./]+)\.flur\.ee/) || [],
      _ref2 = _slicedToArray(_ref, 2),
      _ = _ref2[0],
      instance = _ref2[1]; // eslint-disable-line


  return instance;
} // Create a new connection with settings object.
// need to provide url, instance and token keys at minumum.


function ReactConnect(connSettings) {
  var settings;

  if (_typeof(connSettings) === 'object' && connSettings !== null) {
    // copy over all settings that can be serialized, else will fail web worker messaging
    settings = JSON.parse(JSON.stringify(connSettings));
  } else {
    settings = {
      servers: connSettings
    };
  } // initialize worker if not already done


  if (!fqlWorker) {
    fqlWorker = new Worker(settings.workerUrl || "/flureeworker.js");
    fqlWorker.onmessage = workerMessageHandler;
    fqlWorker.onerror = workerErrorHandler;
  }

  connIdCounter++;
  settings.id = connIdCounter;
  settings.instance = settings.instance || instanceFromHostname();
  settings.url = settings.url || 'https://' + settings.instance, settings.log = settings.log === false ? false : true;
  settings.removeNamespace = settings.removeNamespace === false ? false : true;
  var connId = settings.id;
  var localStorageKey = settings.instance + '/login';
  var savedSession = localStorage.getItem(localStorageKey) || {};
  SHOULD_LOG = settings.log;
  var conn = {
    id: settings.id,
    isReady: function isReady() {
      return _isReady(connId);
    },
    isClosed: function isClosed() {
      return _isClosed(connId);
    },
    login: function login(username, password, _cb, rememberMe) {
      return workerInvoke({
        conn: settings.id,
        action: "login",
        params: [username, password],
        cb: function cb(result) {
          if (_cb && typeof _cb === 'function') {
            if (result.status === 200 && rememberMe) localStorage.setItem(localStorageKey, result.body);

            _cb(result);
          }
        }
      });
    },
    invoke: function invoke(action, params, cb) {
      var invokeStatment = [action, params];
      return workerInvoke({
        conn: connId,
        action: "remoteInvoke",
        params: [invokeStatment],
        cb: cb
      });
    },
    getUser: function getUser() {
      return connStatus[connId].user;
    },
    getInstance: function getInstance() {
      return settings.instance;
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
    defaultBlock: function defaultBlock(block) {
      return workerInvoke({
        conn: connId,
        action: "defaultBlock",
        params: [block],
        cb: null
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
    user: settings.user,
    anonymous: settings.anonymous,
    // optional unauthorizedCallback will be called when a request is unauthorized
    unauthorizedCallback: connSettings.unauthorizedCallback
  }; // initiate our connection in the web worker

  workerInvoke({
    conn: 0,
    // conn 0 means not connection specific
    action: "connect",
    params: [settings]
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

function getMissingVars(flurQL, opts) {
  var vars = flurQL.vars;

  if (!vars || !Array.isArray(vars)) {
    return [];
  }

  if (opts && opts.vars) {
    return vars.filter(function (v) {
      return !opts.vars[v];
    });
  } else {
    return vars;
  }
} // Create an empty map of the top level query nodes so less
// boilerplate is required to test if a property exists in the
// wrapped component


function fillDefaultResult(query) {
  if (!query) return {};
  var graph = query.graph || query;

  if (!Array.isArray(graph)) {
    // invalid graph
    return;
  }

  var defaultResult = {};
  graph.map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        stream = _ref4[0],
        opts = _ref4[1];

    if (opts.as) {
      defaultResult[opts.as] = null;
    } else {
      defaultResult[stream] = null;
    }
  });
  return defaultResult;
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
      _this2.opts = Object.assign({
        vars: {}
      }, opts);
      _this2.id = nextId();
      _this2.queryIsFunction = typeof query === "function";
      _this2.query = _this2.queryIsFunction ? query(props, _this2.context) : query;
      _this2.isValidQuery = _this2.query && queryIsValid(_this2.query);
      _this2.missingVars = _this2.isValidQuery ? getMissingVars(_this2.query, _this2.opts) : []; // list of vars we need to check props for

      _this2.state = {
        result: _this2.isValidQuery ? fillDefaultResult(_this2.query) : {},
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
      key: "componentWillMount",
      value: function componentWillMount() {
        var _this3 = this;

        // get any missing vars from props and update this.opts with them
        if (this.missingVars.length !== 0) {
          this.missingVars.forEach(function (v) {
            if ('currentUser' === v) {
              _this3.opts.vars[v] = _this3.conn.getUser();
            } else {
              _this3.opts.vars[v] = _this3.props[v];
            }
          });
        } // register this component for later re-render calling, etc.


        componentIdx[this.id] = this; // apply time over-ride to options if there is one

        if (connStatus[this.conn.id].t) this.opts.t = connStatus[this.conn.id].t;

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
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        var _this4 = this;

        if (this.queryIsFunction) {
          var newQuery = query(nextProps, this.context);
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

            if (this.props[varName] !== nextProps[varName]) {
              didMissingVarsChange = true;
            }
          }

          if (didMissingVarsChange === true) {
            this.missingVars.forEach(function (v) {
              if ('currentUser' === v) {
                _this4.opts.vars[v] = _this4.conn.getUser();
              } else {
                _this4.opts.vars[v] = nextProps[v];
              }
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
    return wrapComponent(WrappedComponent, query, opts);
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
