'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('../node_modules/react/index.js'));
var PropTypes = _interopDefault(require('../node_modules/prop-types/index.js'));
var hoistNonReactStatics = _interopDefault(require('../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js'));
var Slider = _interopDefault(require('../node_modules/@material-ui/core/esm/Slider/index.js'));
var Tooltip = _interopDefault(require('../node_modules/@material-ui/core/esm/Tooltip/index.js'));

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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
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

var Login =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login(props, context) {
    var _this;

    _classCallCheck(this, Login);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Login).call(this, props));
    _this.state = {
      username: "",
      password: "",
      rememberme: true
    };
    _this.conn = context.conn;
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Login, [{
    key: "handleChange",
    value: function handleChange(event) {
      var target = event.target;
      var value = target.type === 'checkbox' ? target.checked : target.value;
      var name = target.name;
      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      var cb = this.handleResponse.bind(this);
      this.conn.login(this.state.username, this.state.password, {
        rememberme: this.state.rememberme
      }, cb);
      return;
    }
  }, {
    key: "handleResponse",
    value: function handleResponse(resp) {
      console.log("Have login response!");
      console.log(resp);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("form", {
        onSubmit: this.handleSubmit
      }, React.createElement("label", null, "Username:", React.createElement("input", {
        name: "username",
        type: "text",
        value: this.state.username,
        onChange: this.handleChange
      })), React.createElement("br", null), React.createElement("label", null, "Password:", React.createElement("input", {
        name: "password",
        type: "password",
        value: this.state.password,
        onChange: this.handleChange
      })), React.createElement("br", null), React.createElement("label", null, "Remember me?:", React.createElement("input", {
        name: "rememberme",
        type: "checkbox",
        checked: this.state.rememberme,
        onChange: this.handleInputChange
      })));
    }
  }]);

  return Login;
}(React.Component);

_defineProperty(Login, "contextTypes", {
  conn: PropTypes.object.isRequired
});

var NewUser =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(NewUser, _React$Component2);

  function NewUser(props, context) {
    var _this2;

    _classCallCheck(this, NewUser);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(NewUser).call(this, props));
    _this2.state = {
      username: "",
      password: "",
      rememberme: true
    };
    _this2.conn = context.conn;
    _this2.handleChange = _this2.handleChange.bind(_assertThisInitialized(_this2));
    _this2.handleSubmit = _this2.handleSubmit.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(NewUser, [{
    key: "handleChange",
    value: function handleChange(event) {
      var target = event.target;
      var value = target.type === 'checkbox' ? target.checked : target.value;
      var name = target.name;
      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      var cb = this.handleResponse.bind(this);
      var options = {
        rememberme: this.state.rememberme
      };
      this.conn.newuser(this.state.username, this.state.password, options, cb);
      return;
    }
  }, {
    key: "handleResponse",
    value: function handleResponse(resp) {
      console.log("Have login response!");
      console.log(resp);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("form", {
        onSubmit: this.handleSubmit
      }, React.createElement("label", null, "Username:", React.createElement("input", {
        name: "username",
        type: "text",
        value: this.state.username,
        onChange: this.handleChange
      })), React.createElement("br", null), React.createElement("label", null, "Password:", React.createElement("input", {
        name: "password",
        type: "password",
        value: this.state.password,
        onChange: this.handleChange
      })), React.createElement("br", null), React.createElement("label", null, "Remember me?:", React.createElement("input", {
        name: "rememberme",
        type: "checkbox",
        checked: this.state.rememberme,
        onChange: this.handleInputChange
      })));
    }
  }]);

  return NewUser;
}(React.Component);

_defineProperty(NewUser, "contextTypes", {
  conn: PropTypes.object.isRequired
});

var Samples = {
  Login: Login,
  NewUser: NewUser
};

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
} // in the case of a fatal error (i.e. cannot load web worker), report error to all components


function reportFatalError(msg) {
  Object.values(componentIdx).map(function (component) {
    component.setState({
      error: msg,
      status: "error",
      loading: false
    });
  });
  return;
} // worker.onmessage handler


function workerMessageHandler(e) {
  var msg = e.data;
  var cb;
  SHOULD_LOG && console.log("Message from worker: " + JSON.stringify(msg)); // console.log('returned message', msg)
  // if unauthorized response, trigger any registered unauthorizedCallbacks

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

      var timeTravelWidget = componentIdx['TimeTravelWidget'];

      if (timeTravelWidget && msg.ref !== "TimeTravelWidget") {
        if (timeTravelWidget.state.changedBlock) {
          timeTravelWidget.setState(function (state) {
            return _objectSpread2({}, state, {
              changedBlock: false
            });
          });
        } else {
          timeTravelWidget.setState(function (state) {
            return _objectSpread2({}, state, {
              shouldUpdate: true
            });
          });
        }
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
  if (query !== null && _typeof(query) === "object" && (query.select || query.selectOne) && (query.vars === undefined || _typeof(query.vars) === "object") // null or object
  ) {
      return true;
    } else {
    return false;
  }
}

function workerErrorHandler(error) {
  console.error('Error loading Fluree web worker, check that it exists.');
  console.error(error);
  reportFatalError("Unable to load web worker, check console for error.");
  return;
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
    login: function login(username, password, options, _cb) {
      return workerInvoke({
        conn: safeConfig.id,
        action: "login",
        params: [username, password, options],
        cb: function cb(response) {
          if (response.status !== 200) {
            SHOULD_LOG && console.warn("Login failed: " + response.message);
          }

          if (_cb && typeof _cb === 'function') {
            if (response.status === 200 && options.rememberMe) localStorage.setItem(localStorageKey, response.result); // username, token

            _cb(result);
          } // execute pending callbacks on connection object


          conn.executeCallbacks(response.status === 200 ? "authenticated" : "authentication error");
        }
      });
    },
    newuser: function newuser(username, password, options, _cb2) {
      return workerInvoke({
        conn: safeConfig.id,
        action: "pw.newuser",
        params: [username, password, options],
        cb: function cb(response) {
          if (response.status !== 200) {
            SHOULD_LOG && console.warn("Login failed: " + response.message);
          }

          if (_cb2 && typeof _cb2 === 'function') {
            if (response.status === 200 && options.rememberMe) localStorage.setItem(localStorageKey, response.result); // username, token

            _cb2(result);
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
      // if (t && !(t instanceof Date)) {
      //   console.error("forceTime requires a date as a parameter, provided: " + t)
      //   return;
      // }
      var blockQuery = t instanceof Date ? t.toISOString() : t; // const tISOString = t ? t.toISOString() : null;

      var componentIds = Object.keys(componentIdx); // update central conn status to use this t for any new components rendered

      connStatus[connId].t = blockQuery; // update options of all mounted components to add or remove 't' as applicable

      componentIds.map(function (id) {
        var component = componentIdx[id];

        if (component.blockQuery) {
          return;
        }

        if (t || t === 0) {
          component.query.block = blockQuery;
        } else {
          delete component.opts.t;
        }

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
  conn: PropTypes.object.isRequired
});

_defineProperty(FlureeProvider, "childContextTypes", {
  conn: PropTypes.object.isRequired
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
        result: _this2.query.selectOne ? null : [],
        // default query result [] unless selectOne query
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
    conn: PropTypes.object.isRequired
  });

  return hoistNonReactStatics(FlurQL, WrappedComponent, {});
}

function flureeQL(query, opts) {
  return function (WrappedComponent) {
    return wrapComponent(WrappedComponent, query);
  };
}

function ValueLabelComponent(props) {
  var children = props.children,
      open = props.open,
      value = props.value;
  return React.createElement(Tooltip, {
    open: open,
    enterTouchDelay: 0,
    placement: "top",
    title: value
  }, children);
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired
};

var TimeTravel =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(TimeTravel, _React$Component3);

  function TimeTravel(props, context) {
    var _this5;

    _classCallCheck(this, TimeTravel);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(TimeTravel).call(this, props, context));

    _defineProperty(_assertThisInitialized(_this5), "handleChange", function (event, value) {
      if (_this5.state.value === value) {
        return;
      }

      _this5.conn.forceTime(_this5.useBlock ? value : new Date(value));

      _this5.setState(function (state) {
        return _objectSpread2({}, state, {
          value: value,
          changedBlock: true
        });
      });
    });

    _this5.conn = context.conn;
    _this5.id = "TimeTravelWidget";
    _this5.useBlock = !props.dateTime;
    _this5.blockQuery = {
      "selectOne": ["?maxBlock", "?lastBlockTime", "?firstBlockTime"],
      "where": [["?s", "_block/number", "?bNum"], ["?maxBlock", "(max ?bNum)"], ["?minBlock", "(min ?bNum)"], ["?maxS", "_block/number", "?maxBlock"], ["?maxS", "_block/instant", "?lastBlockTime"], ["?minS", "_block/number", "?minBlock"], ["?minS", "_block/instant", "?firstBlockTime"]]
    };
    _this5.state = {
      value: _this5.useBlock ? 2 : new Date().valueOf(),
      min: _this5.useBlock ? 1 : 1451624400000,
      max: _this5.useBlock ? 2 : new Date().valueOf()
    };
    return _this5;
  }

  _createClass(TimeTravel, [{
    key: "changeFunc",
    value: function changeFunc(arg) {
      var _this6 = this;

      return this.setState(function (state) {
        return _objectSpread2({}, state, _defineProperty({}, _this6.useBlock ? 'block' : 'time', arg));
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      componentIdx[this.id] = this;
      registerQuery(this.conn, this.id, this.blockQuery, null, true);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.shouldUpdate) {
        registerQuery(this.conn, this.id, this.blockQuery, null, true);
        this.setState(function (state) {
          return _objectSpread2({}, state, {
            shouldUpdate: false
          });
        });
      }

      if (this.state.result && (!prevState.result || prevState.result[0] !== this.state.result[0])) {
        var max = this.useBlock ? this.state.result[0] : this.state.result[1] + 1;
        var min = this.useBlock ? 1 : this.state.result[2] + 1;
        this.setState(function (state) {
          return _objectSpread2({}, state, {
            max: max,
            min: min,
            value: max
          });
        });
        this.conn.forceTime(this.useBlock ? max : new Date(max));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      return React.createElement(Slider, {
        value: this.state.value,
        scale: function scale(x) {
          return _this7.useBlock ? x : new Date(x).toLocaleString();
        },
        min: this.state.min,
        max: this.state.max,
        style: _objectSpread2({}, styleObj, {}, this.props.style),
        onChange: this.handleChange,
        ValueLabelComponent: ValueLabelComponent
      });
    }
  }]);

  return TimeTravel;
}(React.Component);

_defineProperty(TimeTravel, "contextTypes", {
  conn: PropTypes.object.isRequired
});

_defineProperty(TimeTravel, "propTypes", {
  dateTime: PropTypes.bool
});

var styleObj = {
  width: 300,
  marginTop: 10,
  marginBottom: 10
};

exports.FlureeProvider = FlureeProvider;
exports.ReactConnect = ReactConnect;
exports.Samples = Samples;
exports.TimeTravel = TimeTravel;
exports.flureeQL = flureeQL;
exports.registerQuery = registerQuery;
exports.unregisterQuery = unregisterQuery;
