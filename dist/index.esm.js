import require$$0, { forwardRef, useMemo } from 'react';
import { startCase, lowerCase } from 'lodash';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production;

function requireReactJsxRuntime_production () {
	if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
	hasRequiredReactJsxRuntime_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
	  var key = null;
	  void 0 !== maybeKey && (key = "" + maybeKey);
	  void 0 !== config.key && (key = "" + config.key);
	  if ("key" in config) {
	    maybeKey = {};
	    for (var propName in config)
	      "key" !== propName && (maybeKey[propName] = config[propName]);
	  } else maybeKey = config;
	  config = maybeKey.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== config ? config : null,
	    props: maybeKey
	  };
	}
	reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_production.jsx = jsxProd;
	reactJsxRuntime_production.jsxs = jsxProd;
	return reactJsxRuntime_production;
}

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development () {
	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
	hasRequiredReactJsxRuntime_development = 1;
	"production" !== process.env.NODE_ENV &&
	  (function () {
	    function getComponentNameFromType(type) {
	      if (null == type) return null;
	      if ("function" === typeof type)
	        return type.$$typeof === REACT_CLIENT_REFERENCE
	          ? null
	          : type.displayName || type.name || null;
	      if ("string" === typeof type) return type;
	      switch (type) {
	        case REACT_FRAGMENT_TYPE:
	          return "Fragment";
	        case REACT_PROFILER_TYPE:
	          return "Profiler";
	        case REACT_STRICT_MODE_TYPE:
	          return "StrictMode";
	        case REACT_SUSPENSE_TYPE:
	          return "Suspense";
	        case REACT_SUSPENSE_LIST_TYPE:
	          return "SuspenseList";
	        case REACT_ACTIVITY_TYPE:
	          return "Activity";
	      }
	      if ("object" === typeof type)
	        switch (
	          ("number" === typeof type.tag &&
	            console.error(
	              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
	            ),
	          type.$$typeof)
	        ) {
	          case REACT_PORTAL_TYPE:
	            return "Portal";
	          case REACT_CONTEXT_TYPE:
	            return (type.displayName || "Context") + ".Provider";
	          case REACT_CONSUMER_TYPE:
	            return (type._context.displayName || "Context") + ".Consumer";
	          case REACT_FORWARD_REF_TYPE:
	            var innerType = type.render;
	            type = type.displayName;
	            type ||
	              ((type = innerType.displayName || innerType.name || ""),
	              (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
	            return type;
	          case REACT_MEMO_TYPE:
	            return (
	              (innerType = type.displayName || null),
	              null !== innerType
	                ? innerType
	                : getComponentNameFromType(type.type) || "Memo"
	            );
	          case REACT_LAZY_TYPE:
	            innerType = type._payload;
	            type = type._init;
	            try {
	              return getComponentNameFromType(type(innerType));
	            } catch (x) {}
	        }
	      return null;
	    }
	    function testStringCoercion(value) {
	      return "" + value;
	    }
	    function checkKeyStringCoercion(value) {
	      try {
	        testStringCoercion(value);
	        var JSCompiler_inline_result = !1;
	      } catch (e) {
	        JSCompiler_inline_result = !0;
	      }
	      if (JSCompiler_inline_result) {
	        JSCompiler_inline_result = console;
	        var JSCompiler_temp_const = JSCompiler_inline_result.error;
	        var JSCompiler_inline_result$jscomp$0 =
	          ("function" === typeof Symbol &&
	            Symbol.toStringTag &&
	            value[Symbol.toStringTag]) ||
	          value.constructor.name ||
	          "Object";
	        JSCompiler_temp_const.call(
	          JSCompiler_inline_result,
	          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
	          JSCompiler_inline_result$jscomp$0
	        );
	        return testStringCoercion(value);
	      }
	    }
	    function getTaskName(type) {
	      if (type === REACT_FRAGMENT_TYPE) return "<>";
	      if (
	        "object" === typeof type &&
	        null !== type &&
	        type.$$typeof === REACT_LAZY_TYPE
	      )
	        return "<...>";
	      try {
	        var name = getComponentNameFromType(type);
	        return name ? "<" + name + ">" : "<...>";
	      } catch (x) {
	        return "<...>";
	      }
	    }
	    function getOwner() {
	      var dispatcher = ReactSharedInternals.A;
	      return null === dispatcher ? null : dispatcher.getOwner();
	    }
	    function UnknownOwner() {
	      return Error("react-stack-top-frame");
	    }
	    function hasValidKey(config) {
	      if (hasOwnProperty.call(config, "key")) {
	        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
	        if (getter && getter.isReactWarning) return !1;
	      }
	      return void 0 !== config.key;
	    }
	    function defineKeyPropWarningGetter(props, displayName) {
	      function warnAboutAccessingKey() {
	        specialPropKeyWarningShown ||
	          ((specialPropKeyWarningShown = !0),
	          console.error(
	            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
	            displayName
	          ));
	      }
	      warnAboutAccessingKey.isReactWarning = !0;
	      Object.defineProperty(props, "key", {
	        get: warnAboutAccessingKey,
	        configurable: !0
	      });
	    }
	    function elementRefGetterWithDeprecationWarning() {
	      var componentName = getComponentNameFromType(this.type);
	      didWarnAboutElementRef[componentName] ||
	        ((didWarnAboutElementRef[componentName] = !0),
	        console.error(
	          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
	        ));
	      componentName = this.props.ref;
	      return void 0 !== componentName ? componentName : null;
	    }
	    function ReactElement(
	      type,
	      key,
	      self,
	      source,
	      owner,
	      props,
	      debugStack,
	      debugTask
	    ) {
	      self = props.ref;
	      type = {
	        $$typeof: REACT_ELEMENT_TYPE,
	        type: type,
	        key: key,
	        props: props,
	        _owner: owner
	      };
	      null !== (void 0 !== self ? self : null)
	        ? Object.defineProperty(type, "ref", {
	            enumerable: !1,
	            get: elementRefGetterWithDeprecationWarning
	          })
	        : Object.defineProperty(type, "ref", { enumerable: !1, value: null });
	      type._store = {};
	      Object.defineProperty(type._store, "validated", {
	        configurable: !1,
	        enumerable: !1,
	        writable: !0,
	        value: 0
	      });
	      Object.defineProperty(type, "_debugInfo", {
	        configurable: !1,
	        enumerable: !1,
	        writable: !0,
	        value: null
	      });
	      Object.defineProperty(type, "_debugStack", {
	        configurable: !1,
	        enumerable: !1,
	        writable: !0,
	        value: debugStack
	      });
	      Object.defineProperty(type, "_debugTask", {
	        configurable: !1,
	        enumerable: !1,
	        writable: !0,
	        value: debugTask
	      });
	      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
	      return type;
	    }
	    function jsxDEVImpl(
	      type,
	      config,
	      maybeKey,
	      isStaticChildren,
	      source,
	      self,
	      debugStack,
	      debugTask
	    ) {
	      var children = config.children;
	      if (void 0 !== children)
	        if (isStaticChildren)
	          if (isArrayImpl(children)) {
	            for (
	              isStaticChildren = 0;
	              isStaticChildren < children.length;
	              isStaticChildren++
	            )
	              validateChildKeys(children[isStaticChildren]);
	            Object.freeze && Object.freeze(children);
	          } else
	            console.error(
	              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
	            );
	        else validateChildKeys(children);
	      if (hasOwnProperty.call(config, "key")) {
	        children = getComponentNameFromType(type);
	        var keys = Object.keys(config).filter(function (k) {
	          return "key" !== k;
	        });
	        isStaticChildren =
	          0 < keys.length
	            ? "{key: someKey, " + keys.join(": ..., ") + ": ...}"
	            : "{key: someKey}";
	        didWarnAboutKeySpread[children + isStaticChildren] ||
	          ((keys =
	            0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}"),
	          console.error(
	            'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
	            isStaticChildren,
	            children,
	            keys,
	            children
	          ),
	          (didWarnAboutKeySpread[children + isStaticChildren] = !0));
	      }
	      children = null;
	      void 0 !== maybeKey &&
	        (checkKeyStringCoercion(maybeKey), (children = "" + maybeKey));
	      hasValidKey(config) &&
	        (checkKeyStringCoercion(config.key), (children = "" + config.key));
	      if ("key" in config) {
	        maybeKey = {};
	        for (var propName in config)
	          "key" !== propName && (maybeKey[propName] = config[propName]);
	      } else maybeKey = config;
	      children &&
	        defineKeyPropWarningGetter(
	          maybeKey,
	          "function" === typeof type
	            ? type.displayName || type.name || "Unknown"
	            : type
	        );
	      return ReactElement(
	        type,
	        children,
	        self,
	        source,
	        getOwner(),
	        maybeKey,
	        debugStack,
	        debugTask
	      );
	    }
	    function validateChildKeys(node) {
	      "object" === typeof node &&
	        null !== node &&
	        node.$$typeof === REACT_ELEMENT_TYPE &&
	        node._store &&
	        (node._store.validated = 1);
	    }
	    var React = require$$0,
	      REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	      REACT_PORTAL_TYPE = Symbol.for("react.portal"),
	      REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
	      REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
	      REACT_PROFILER_TYPE = Symbol.for("react.profiler");
	    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
	      REACT_CONTEXT_TYPE = Symbol.for("react.context"),
	      REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
	      REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
	      REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
	      REACT_MEMO_TYPE = Symbol.for("react.memo"),
	      REACT_LAZY_TYPE = Symbol.for("react.lazy"),
	      REACT_ACTIVITY_TYPE = Symbol.for("react.activity"),
	      REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"),
	      ReactSharedInternals =
	        React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
	      hasOwnProperty = Object.prototype.hasOwnProperty,
	      isArrayImpl = Array.isArray,
	      createTask = console.createTask
	        ? console.createTask
	        : function () {
	            return null;
	          };
	    React = {
	      "react-stack-bottom-frame": function (callStackForError) {
	        return callStackForError();
	      }
	    };
	    var specialPropKeyWarningShown;
	    var didWarnAboutElementRef = {};
	    var unknownOwnerDebugStack = React["react-stack-bottom-frame"].bind(
	      React,
	      UnknownOwner
	    )();
	    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
	    var didWarnAboutKeySpread = {};
	    reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
	    reactJsxRuntime_development.jsx = function (type, config, maybeKey, source, self) {
	      var trackActualOwner =
	        1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
	      return jsxDEVImpl(
	        type,
	        config,
	        maybeKey,
	        !1,
	        source,
	        self,
	        trackActualOwner
	          ? Error("react-stack-top-frame")
	          : unknownOwnerDebugStack,
	        trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
	      );
	    };
	    reactJsxRuntime_development.jsxs = function (type, config, maybeKey, source, self) {
	      var trackActualOwner =
	        1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
	      return jsxDEVImpl(
	        type,
	        config,
	        maybeKey,
	        !0,
	        source,
	        self,
	        trackActualOwner
	          ? Error("react-stack-top-frame")
	          : unknownOwnerDebugStack,
	        trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
	      );
	    };
	  })();
	return reactJsxRuntime_development;
}

if (process.env.NODE_ENV === 'production') {
  jsxRuntime.exports = requireReactJsxRuntime_production();
} else {
  jsxRuntime.exports = requireReactJsxRuntime_development();
}

var jsxRuntimeExports = jsxRuntime.exports;

class ImageNameParser {
    constructor(options = {}) {
        this.options = {
            prefix: '',
            suffix: '',
            capitalize: true,
            removeNumbers: false,
            customMappings: {},
            ...options,
        };
    }
    /**
     * Creates meaningful text from image filename
     */
    parseImageName(fileName) {
        if (!fileName)
            return '';
        // Remove file extension
        let name = this.removeFileExtension(fileName);
        // Check custom mappings
        if (this.options.customMappings && this.options.customMappings[name]) {
            return this.options.customMappings[name];
        }
        // Remove numbers (optional)
        if (this.options.removeNumbers) {
            name = name.replace(/\d+/g, '');
        }
        // Replace underscores, dashes and dots with spaces
        name = name.replace(/[_\.-]/g, ' ');
        // Separate camel case with spaces
        name = this.separateCamelCase(name);
        // Clean up extra spaces
        name = name.replace(/\s+/g, ' ').trim();
        // Convert to title case
        if (this.options.capitalize) {
            name = startCase(lowerCase(name));
        }
        else {
            name = lowerCase(name);
        }
        // Add prefix and suffix
        if (this.options.prefix) {
            name = `${this.options.prefix} ${name}`;
        }
        if (this.options.suffix) {
            name = `${name} ${this.options.suffix}`;
        }
        return name;
    }
    /**
     * Removes file extension
     */
    removeFileExtension(fileName) {
        return fileName.replace(/\.[^/.]+$/, '');
    }
    /**
     * Separates camel case text with spaces
     */
    separateCamelCase(text) {
        return text.replace(/([A-Z])/g, ' $1');
    }
    /**
     * Extracts filename from URL
     */
    extractFileNameFromUrl(url) {
        if (!url)
            return '';
        // Get filename from URL
        const urlParts = url.split('/');
        const fileName = urlParts[urlParts.length - 1];
        // Remove query parameters
        return fileName.split('?')[0];
    }
    /**
     * Extracts filename from src attribute and parses it
     */
    parseFromSrc(src) {
        const fileName = this.extractFileNameFromUrl(src);
        return this.parseImageName(fileName);
    }
}
// Default parser instance
const defaultParser = new ImageNameParser();

const SmartImage = forwardRef(({ src, alt, title, parserOptions, customParser, fallbackAlt = 'Image', fallbackTitle = 'Image', generateTitle = true, generateAlt = true, ...props }, ref) => {
    const parser = useMemo(() => {
        return customParser || new ImageNameParser(parserOptions);
    }, [customParser, parserOptions]);
    const generatedText = useMemo(() => {
        if (!src)
            return '';
        return parser.parseFromSrc(src);
    }, [src, parser]);
    const finalAlt = useMemo(() => {
        // Use provided alt if available
        if (alt !== undefined && alt !== '') {
            return alt;
        }
        // Use fallback if alt generation is disabled
        if (!generateAlt) {
            return fallbackAlt;
        }
        // Use generated text
        return generatedText || fallbackAlt;
    }, [alt, generateAlt, generatedText, fallbackAlt]);
    const finalTitle = useMemo(() => {
        // Use provided title if available
        if (title !== undefined && title !== '') {
            return title;
        }
        // Use fallback if title generation is disabled
        if (!generateTitle) {
            return fallbackTitle;
        }
        // Use generated text
        return generatedText || fallbackTitle;
    }, [title, generateTitle, generatedText, fallbackTitle]);
    return (jsxRuntimeExports.jsx("img", { ref: ref, src: src, alt: finalAlt, title: finalTitle, ...props }));
});
SmartImage.displayName = 'SmartImage';

const useImageAlt = (src, options = {}) => {
    const { parserOptions, customParser, fallbackAlt = 'Image', fallbackTitle = 'Image', generateTitle = true, generateAlt = true, } = options;
    const parser = useMemo(() => {
        return customParser || new ImageNameParser(parserOptions);
    }, [customParser, parserOptions]);
    const generatedText = useMemo(() => {
        if (!src)
            return '';
        return parser.parseFromSrc(src);
    }, [src, parser]);
    const alt = useMemo(() => {
        if (!generateAlt) {
            return fallbackAlt;
        }
        return generatedText || fallbackAlt;
    }, [generateAlt, generatedText, fallbackAlt]);
    const title = useMemo(() => {
        if (!generateTitle) {
            return fallbackTitle;
        }
        return generatedText || fallbackTitle;
    }, [generateTitle, generatedText, fallbackTitle]);
    return {
        alt,
        title,
        generatedText,
    };
};

var lib$2 = {};

var isReactComponent$1 = {};

var buildMatchMemberExpression$1 = {};

var matchesPattern$1 = {};

var generated$3 = {};

var shallowEqual$1 = {};

Object.defineProperty(shallowEqual$1, "__esModule", {
  value: true
});
shallowEqual$1.default = shallowEqual;
function shallowEqual(actual, expected) {
  const keys = Object.keys(expected);
  for (const key of keys) {
    if (actual[key] !== expected[key]) {
      return false;
    }
  }
  return true;
}

var deprecationWarning$1 = {};

Object.defineProperty(deprecationWarning$1, "__esModule", {
  value: true
});
deprecationWarning$1.default = deprecationWarning;
const warnings = new Set();
function deprecationWarning(oldName, newName, prefix = "", cacheKey = oldName) {
  if (warnings.has(cacheKey)) return;
  warnings.add(cacheKey);
  const {
    internal,
    trace
  } = captureShortStackTrace(1, 2);
  if (internal) {
    return;
  }
  console.warn(`${prefix}\`${oldName}\` has been deprecated, please migrate to \`${newName}\`\n${trace}`);
}
function captureShortStackTrace(skip, length) {
  const {
    stackTraceLimit,
    prepareStackTrace
  } = Error;
  let stackTrace;
  Error.stackTraceLimit = 1 + skip + length;
  Error.prepareStackTrace = function (err, stack) {
    stackTrace = stack;
  };
  new Error().stack;
  Error.stackTraceLimit = stackTraceLimit;
  Error.prepareStackTrace = prepareStackTrace;
  if (!stackTrace) return {
    internal: false,
    trace: ""
  };
  const shortStackTrace = stackTrace.slice(1 + skip, 1 + skip + length);
  return {
    internal: /[\\/]@babel[\\/]/.test(shortStackTrace[1].getFileName()),
    trace: shortStackTrace.map(frame => `    at ${frame}`).join("\n")
  };
}

Object.defineProperty(generated$3, "__esModule", {
  value: true
});
generated$3.isAccessor = isAccessor;
generated$3.isAnyTypeAnnotation = isAnyTypeAnnotation;
generated$3.isArgumentPlaceholder = isArgumentPlaceholder;
generated$3.isArrayExpression = isArrayExpression;
generated$3.isArrayPattern = isArrayPattern;
generated$3.isArrayTypeAnnotation = isArrayTypeAnnotation;
generated$3.isArrowFunctionExpression = isArrowFunctionExpression;
generated$3.isAssignmentExpression = isAssignmentExpression;
generated$3.isAssignmentPattern = isAssignmentPattern;
generated$3.isAwaitExpression = isAwaitExpression;
generated$3.isBigIntLiteral = isBigIntLiteral;
generated$3.isBinary = isBinary;
generated$3.isBinaryExpression = isBinaryExpression;
generated$3.isBindExpression = isBindExpression;
generated$3.isBlock = isBlock;
generated$3.isBlockParent = isBlockParent;
generated$3.isBlockStatement = isBlockStatement;
generated$3.isBooleanLiteral = isBooleanLiteral;
generated$3.isBooleanLiteralTypeAnnotation = isBooleanLiteralTypeAnnotation;
generated$3.isBooleanTypeAnnotation = isBooleanTypeAnnotation;
generated$3.isBreakStatement = isBreakStatement;
generated$3.isCallExpression = isCallExpression;
generated$3.isCatchClause = isCatchClause;
generated$3.isClass = isClass;
generated$3.isClassAccessorProperty = isClassAccessorProperty;
generated$3.isClassBody = isClassBody;
generated$3.isClassDeclaration = isClassDeclaration;
generated$3.isClassExpression = isClassExpression;
generated$3.isClassImplements = isClassImplements;
generated$3.isClassMethod = isClassMethod;
generated$3.isClassPrivateMethod = isClassPrivateMethod;
generated$3.isClassPrivateProperty = isClassPrivateProperty;
generated$3.isClassProperty = isClassProperty;
generated$3.isCompletionStatement = isCompletionStatement;
generated$3.isConditional = isConditional;
generated$3.isConditionalExpression = isConditionalExpression;
generated$3.isContinueStatement = isContinueStatement;
generated$3.isDebuggerStatement = isDebuggerStatement;
generated$3.isDecimalLiteral = isDecimalLiteral;
generated$3.isDeclaration = isDeclaration;
generated$3.isDeclareClass = isDeclareClass;
generated$3.isDeclareExportAllDeclaration = isDeclareExportAllDeclaration;
generated$3.isDeclareExportDeclaration = isDeclareExportDeclaration;
generated$3.isDeclareFunction = isDeclareFunction;
generated$3.isDeclareInterface = isDeclareInterface;
generated$3.isDeclareModule = isDeclareModule;
generated$3.isDeclareModuleExports = isDeclareModuleExports;
generated$3.isDeclareOpaqueType = isDeclareOpaqueType;
generated$3.isDeclareTypeAlias = isDeclareTypeAlias;
generated$3.isDeclareVariable = isDeclareVariable;
generated$3.isDeclaredPredicate = isDeclaredPredicate;
generated$3.isDecorator = isDecorator;
generated$3.isDirective = isDirective;
generated$3.isDirectiveLiteral = isDirectiveLiteral;
generated$3.isDoExpression = isDoExpression;
generated$3.isDoWhileStatement = isDoWhileStatement;
generated$3.isEmptyStatement = isEmptyStatement;
generated$3.isEmptyTypeAnnotation = isEmptyTypeAnnotation;
generated$3.isEnumBody = isEnumBody;
generated$3.isEnumBooleanBody = isEnumBooleanBody;
generated$3.isEnumBooleanMember = isEnumBooleanMember;
generated$3.isEnumDeclaration = isEnumDeclaration;
generated$3.isEnumDefaultedMember = isEnumDefaultedMember;
generated$3.isEnumMember = isEnumMember;
generated$3.isEnumNumberBody = isEnumNumberBody;
generated$3.isEnumNumberMember = isEnumNumberMember;
generated$3.isEnumStringBody = isEnumStringBody;
generated$3.isEnumStringMember = isEnumStringMember;
generated$3.isEnumSymbolBody = isEnumSymbolBody;
generated$3.isExistsTypeAnnotation = isExistsTypeAnnotation;
generated$3.isExportAllDeclaration = isExportAllDeclaration;
generated$3.isExportDeclaration = isExportDeclaration;
generated$3.isExportDefaultDeclaration = isExportDefaultDeclaration;
generated$3.isExportDefaultSpecifier = isExportDefaultSpecifier;
generated$3.isExportNamedDeclaration = isExportNamedDeclaration;
generated$3.isExportNamespaceSpecifier = isExportNamespaceSpecifier;
generated$3.isExportSpecifier = isExportSpecifier;
generated$3.isExpression = isExpression;
generated$3.isExpressionStatement = isExpressionStatement;
generated$3.isExpressionWrapper = isExpressionWrapper;
generated$3.isFile = isFile;
generated$3.isFlow = isFlow;
generated$3.isFlowBaseAnnotation = isFlowBaseAnnotation;
generated$3.isFlowDeclaration = isFlowDeclaration;
generated$3.isFlowPredicate = isFlowPredicate;
generated$3.isFlowType = isFlowType;
generated$3.isFor = isFor;
generated$3.isForInStatement = isForInStatement;
generated$3.isForOfStatement = isForOfStatement;
generated$3.isForStatement = isForStatement;
generated$3.isForXStatement = isForXStatement;
generated$3.isFunction = isFunction;
generated$3.isFunctionDeclaration = isFunctionDeclaration;
generated$3.isFunctionExpression = isFunctionExpression;
generated$3.isFunctionParameter = isFunctionParameter;
generated$3.isFunctionParent = isFunctionParent;
generated$3.isFunctionTypeAnnotation = isFunctionTypeAnnotation;
generated$3.isFunctionTypeParam = isFunctionTypeParam;
generated$3.isGenericTypeAnnotation = isGenericTypeAnnotation;
generated$3.isIdentifier = isIdentifier;
generated$3.isIfStatement = isIfStatement;
generated$3.isImmutable = isImmutable$2;
generated$3.isImport = isImport;
generated$3.isImportAttribute = isImportAttribute;
generated$3.isImportDeclaration = isImportDeclaration;
generated$3.isImportDefaultSpecifier = isImportDefaultSpecifier;
generated$3.isImportExpression = isImportExpression;
generated$3.isImportNamespaceSpecifier = isImportNamespaceSpecifier;
generated$3.isImportOrExportDeclaration = isImportOrExportDeclaration;
generated$3.isImportSpecifier = isImportSpecifier;
generated$3.isIndexedAccessType = isIndexedAccessType;
generated$3.isInferredPredicate = isInferredPredicate;
generated$3.isInterfaceDeclaration = isInterfaceDeclaration;
generated$3.isInterfaceExtends = isInterfaceExtends;
generated$3.isInterfaceTypeAnnotation = isInterfaceTypeAnnotation;
generated$3.isInterpreterDirective = isInterpreterDirective;
generated$3.isIntersectionTypeAnnotation = isIntersectionTypeAnnotation;
generated$3.isJSX = isJSX;
generated$3.isJSXAttribute = isJSXAttribute;
generated$3.isJSXClosingElement = isJSXClosingElement;
generated$3.isJSXClosingFragment = isJSXClosingFragment;
generated$3.isJSXElement = isJSXElement;
generated$3.isJSXEmptyExpression = isJSXEmptyExpression;
generated$3.isJSXExpressionContainer = isJSXExpressionContainer;
generated$3.isJSXFragment = isJSXFragment;
generated$3.isJSXIdentifier = isJSXIdentifier;
generated$3.isJSXMemberExpression = isJSXMemberExpression;
generated$3.isJSXNamespacedName = isJSXNamespacedName;
generated$3.isJSXOpeningElement = isJSXOpeningElement;
generated$3.isJSXOpeningFragment = isJSXOpeningFragment;
generated$3.isJSXSpreadAttribute = isJSXSpreadAttribute;
generated$3.isJSXSpreadChild = isJSXSpreadChild;
generated$3.isJSXText = isJSXText;
generated$3.isLVal = isLVal;
generated$3.isLabeledStatement = isLabeledStatement;
generated$3.isLiteral = isLiteral;
generated$3.isLogicalExpression = isLogicalExpression;
generated$3.isLoop = isLoop;
generated$3.isMemberExpression = isMemberExpression;
generated$3.isMetaProperty = isMetaProperty;
generated$3.isMethod = isMethod;
generated$3.isMiscellaneous = isMiscellaneous;
generated$3.isMixedTypeAnnotation = isMixedTypeAnnotation;
generated$3.isModuleDeclaration = isModuleDeclaration;
generated$3.isModuleExpression = isModuleExpression;
generated$3.isModuleSpecifier = isModuleSpecifier;
generated$3.isNewExpression = isNewExpression;
generated$3.isNoop = isNoop;
generated$3.isNullLiteral = isNullLiteral;
generated$3.isNullLiteralTypeAnnotation = isNullLiteralTypeAnnotation;
generated$3.isNullableTypeAnnotation = isNullableTypeAnnotation;
generated$3.isNumberLiteral = isNumberLiteral;
generated$3.isNumberLiteralTypeAnnotation = isNumberLiteralTypeAnnotation;
generated$3.isNumberTypeAnnotation = isNumberTypeAnnotation;
generated$3.isNumericLiteral = isNumericLiteral;
generated$3.isObjectExpression = isObjectExpression;
generated$3.isObjectMember = isObjectMember;
generated$3.isObjectMethod = isObjectMethod;
generated$3.isObjectPattern = isObjectPattern;
generated$3.isObjectProperty = isObjectProperty;
generated$3.isObjectTypeAnnotation = isObjectTypeAnnotation;
generated$3.isObjectTypeCallProperty = isObjectTypeCallProperty;
generated$3.isObjectTypeIndexer = isObjectTypeIndexer;
generated$3.isObjectTypeInternalSlot = isObjectTypeInternalSlot;
generated$3.isObjectTypeProperty = isObjectTypeProperty;
generated$3.isObjectTypeSpreadProperty = isObjectTypeSpreadProperty;
generated$3.isOpaqueType = isOpaqueType;
generated$3.isOptionalCallExpression = isOptionalCallExpression;
generated$3.isOptionalIndexedAccessType = isOptionalIndexedAccessType;
generated$3.isOptionalMemberExpression = isOptionalMemberExpression;
generated$3.isParenthesizedExpression = isParenthesizedExpression;
generated$3.isPattern = isPattern;
generated$3.isPatternLike = isPatternLike;
generated$3.isPipelineBareFunction = isPipelineBareFunction;
generated$3.isPipelinePrimaryTopicReference = isPipelinePrimaryTopicReference;
generated$3.isPipelineTopicExpression = isPipelineTopicExpression;
generated$3.isPlaceholder = isPlaceholder;
generated$3.isPrivate = isPrivate;
generated$3.isPrivateName = isPrivateName;
generated$3.isProgram = isProgram;
generated$3.isProperty = isProperty;
generated$3.isPureish = isPureish;
generated$3.isQualifiedTypeIdentifier = isQualifiedTypeIdentifier;
generated$3.isRecordExpression = isRecordExpression;
generated$3.isRegExpLiteral = isRegExpLiteral;
generated$3.isRegexLiteral = isRegexLiteral;
generated$3.isRestElement = isRestElement;
generated$3.isRestProperty = isRestProperty;
generated$3.isReturnStatement = isReturnStatement;
generated$3.isScopable = isScopable;
generated$3.isSequenceExpression = isSequenceExpression;
generated$3.isSpreadElement = isSpreadElement;
generated$3.isSpreadProperty = isSpreadProperty;
generated$3.isStandardized = isStandardized;
generated$3.isStatement = isStatement;
generated$3.isStaticBlock = isStaticBlock;
generated$3.isStringLiteral = isStringLiteral;
generated$3.isStringLiteralTypeAnnotation = isStringLiteralTypeAnnotation;
generated$3.isStringTypeAnnotation = isStringTypeAnnotation;
generated$3.isSuper = isSuper;
generated$3.isSwitchCase = isSwitchCase;
generated$3.isSwitchStatement = isSwitchStatement;
generated$3.isSymbolTypeAnnotation = isSymbolTypeAnnotation;
generated$3.isTSAnyKeyword = isTSAnyKeyword;
generated$3.isTSArrayType = isTSArrayType;
generated$3.isTSAsExpression = isTSAsExpression;
generated$3.isTSBaseType = isTSBaseType;
generated$3.isTSBigIntKeyword = isTSBigIntKeyword;
generated$3.isTSBooleanKeyword = isTSBooleanKeyword;
generated$3.isTSCallSignatureDeclaration = isTSCallSignatureDeclaration;
generated$3.isTSConditionalType = isTSConditionalType;
generated$3.isTSConstructSignatureDeclaration = isTSConstructSignatureDeclaration;
generated$3.isTSConstructorType = isTSConstructorType;
generated$3.isTSDeclareFunction = isTSDeclareFunction;
generated$3.isTSDeclareMethod = isTSDeclareMethod;
generated$3.isTSEntityName = isTSEntityName;
generated$3.isTSEnumBody = isTSEnumBody;
generated$3.isTSEnumDeclaration = isTSEnumDeclaration;
generated$3.isTSEnumMember = isTSEnumMember;
generated$3.isTSExportAssignment = isTSExportAssignment;
generated$3.isTSExpressionWithTypeArguments = isTSExpressionWithTypeArguments;
generated$3.isTSExternalModuleReference = isTSExternalModuleReference;
generated$3.isTSFunctionType = isTSFunctionType;
generated$3.isTSImportEqualsDeclaration = isTSImportEqualsDeclaration;
generated$3.isTSImportType = isTSImportType;
generated$3.isTSIndexSignature = isTSIndexSignature;
generated$3.isTSIndexedAccessType = isTSIndexedAccessType;
generated$3.isTSInferType = isTSInferType;
generated$3.isTSInstantiationExpression = isTSInstantiationExpression;
generated$3.isTSInterfaceBody = isTSInterfaceBody;
generated$3.isTSInterfaceDeclaration = isTSInterfaceDeclaration;
generated$3.isTSIntersectionType = isTSIntersectionType;
generated$3.isTSIntrinsicKeyword = isTSIntrinsicKeyword;
generated$3.isTSLiteralType = isTSLiteralType;
generated$3.isTSMappedType = isTSMappedType;
generated$3.isTSMethodSignature = isTSMethodSignature;
generated$3.isTSModuleBlock = isTSModuleBlock;
generated$3.isTSModuleDeclaration = isTSModuleDeclaration;
generated$3.isTSNamedTupleMember = isTSNamedTupleMember;
generated$3.isTSNamespaceExportDeclaration = isTSNamespaceExportDeclaration;
generated$3.isTSNeverKeyword = isTSNeverKeyword;
generated$3.isTSNonNullExpression = isTSNonNullExpression;
generated$3.isTSNullKeyword = isTSNullKeyword;
generated$3.isTSNumberKeyword = isTSNumberKeyword;
generated$3.isTSObjectKeyword = isTSObjectKeyword;
generated$3.isTSOptionalType = isTSOptionalType;
generated$3.isTSParameterProperty = isTSParameterProperty;
generated$3.isTSParenthesizedType = isTSParenthesizedType;
generated$3.isTSPropertySignature = isTSPropertySignature;
generated$3.isTSQualifiedName = isTSQualifiedName;
generated$3.isTSRestType = isTSRestType;
generated$3.isTSSatisfiesExpression = isTSSatisfiesExpression;
generated$3.isTSStringKeyword = isTSStringKeyword;
generated$3.isTSSymbolKeyword = isTSSymbolKeyword;
generated$3.isTSTemplateLiteralType = isTSTemplateLiteralType;
generated$3.isTSThisType = isTSThisType;
generated$3.isTSTupleType = isTSTupleType;
generated$3.isTSType = isTSType;
generated$3.isTSTypeAliasDeclaration = isTSTypeAliasDeclaration;
generated$3.isTSTypeAnnotation = isTSTypeAnnotation;
generated$3.isTSTypeAssertion = isTSTypeAssertion;
generated$3.isTSTypeElement = isTSTypeElement;
generated$3.isTSTypeLiteral = isTSTypeLiteral;
generated$3.isTSTypeOperator = isTSTypeOperator;
generated$3.isTSTypeParameter = isTSTypeParameter;
generated$3.isTSTypeParameterDeclaration = isTSTypeParameterDeclaration;
generated$3.isTSTypeParameterInstantiation = isTSTypeParameterInstantiation;
generated$3.isTSTypePredicate = isTSTypePredicate;
generated$3.isTSTypeQuery = isTSTypeQuery;
generated$3.isTSTypeReference = isTSTypeReference;
generated$3.isTSUndefinedKeyword = isTSUndefinedKeyword;
generated$3.isTSUnionType = isTSUnionType;
generated$3.isTSUnknownKeyword = isTSUnknownKeyword;
generated$3.isTSVoidKeyword = isTSVoidKeyword;
generated$3.isTaggedTemplateExpression = isTaggedTemplateExpression;
generated$3.isTemplateElement = isTemplateElement;
generated$3.isTemplateLiteral = isTemplateLiteral;
generated$3.isTerminatorless = isTerminatorless;
generated$3.isThisExpression = isThisExpression;
generated$3.isThisTypeAnnotation = isThisTypeAnnotation;
generated$3.isThrowStatement = isThrowStatement;
generated$3.isTopicReference = isTopicReference;
generated$3.isTryStatement = isTryStatement;
generated$3.isTupleExpression = isTupleExpression;
generated$3.isTupleTypeAnnotation = isTupleTypeAnnotation;
generated$3.isTypeAlias = isTypeAlias;
generated$3.isTypeAnnotation = isTypeAnnotation;
generated$3.isTypeCastExpression = isTypeCastExpression;
generated$3.isTypeParameter = isTypeParameter;
generated$3.isTypeParameterDeclaration = isTypeParameterDeclaration;
generated$3.isTypeParameterInstantiation = isTypeParameterInstantiation;
generated$3.isTypeScript = isTypeScript;
generated$3.isTypeofTypeAnnotation = isTypeofTypeAnnotation;
generated$3.isUnaryExpression = isUnaryExpression;
generated$3.isUnaryLike = isUnaryLike;
generated$3.isUnionTypeAnnotation = isUnionTypeAnnotation;
generated$3.isUpdateExpression = isUpdateExpression;
generated$3.isUserWhitespacable = isUserWhitespacable;
generated$3.isV8IntrinsicIdentifier = isV8IntrinsicIdentifier;
generated$3.isVariableDeclaration = isVariableDeclaration;
generated$3.isVariableDeclarator = isVariableDeclarator;
generated$3.isVariance = isVariance;
generated$3.isVoidPattern = isVoidPattern;
generated$3.isVoidTypeAnnotation = isVoidTypeAnnotation;
generated$3.isWhile = isWhile;
generated$3.isWhileStatement = isWhileStatement;
generated$3.isWithStatement = isWithStatement;
generated$3.isYieldExpression = isYieldExpression;
var _shallowEqual = shallowEqual$1;
var _deprecationWarning$2 = deprecationWarning$1;
function isArrayExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "ArrayExpression") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isAssignmentExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "AssignmentExpression") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isBinaryExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "BinaryExpression") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isInterpreterDirective(node, opts) {
  if (!node) return false;
  if (node.type !== "InterpreterDirective") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isDirective(node, opts) {
  if (!node) return false;
  if (node.type !== "Directive") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isDirectiveLiteral(node, opts) {
  if (!node) return false;
  if (node.type !== "DirectiveLiteral") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isBlockStatement(node, opts) {
  if (!node) return false;
  if (node.type !== "BlockStatement") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isBreakStatement(node, opts) {
  if (!node) return false;
  if (node.type !== "BreakStatement") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isCallExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "CallExpression") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isCatchClause(node, opts) {
  if (!node) return false;
  if (node.type !== "CatchClause") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isConditionalExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "ConditionalExpression") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isContinueStatement(node, opts) {
  if (!node) return false;
  if (node.type !== "ContinueStatement") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isDebuggerStatement(node, opts) {
  if (!node) return false;
  if (node.type !== "DebuggerStatement") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isDoWhileStatement(node, opts) {
  if (!node) return false;
  if (node.type !== "DoWhileStatement") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isEmptyStatement(node, opts) {
  if (!node) return false;
  if (node.type !== "EmptyStatement") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isExpressionStatement(node, opts) {
  if (!node) return false;
  if (node.type !== "ExpressionStatement") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isFile(node, opts) {
  if (!node) return false;
  if (node.type !== "File") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isForInStatement(node, opts) {
  if (!node) return false;
  if (node.type !== "ForInStatement") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isForStatement(node, opts) {
  if (!node) return false;
  if (node.type !== "ForStatement") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isFunctionDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "FunctionDeclaration") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isFunctionExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "FunctionExpression") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isIdentifier(node, opts) {
  if (!node) return false;
  if (node.type !== "Identifier") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isIfStatement(node, opts) {
  if (!node) return false;
  if (node.type !== "IfStatement") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isLabeledStatement(node, opts) {
  if (!node) return false;
  if (node.type !== "LabeledStatement") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isStringLiteral(node, opts) {
  if (!node) return false;
  if (node.type !== "StringLiteral") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isNumericLiteral(node, opts) {
  if (!node) return false;
  if (node.type !== "NumericLiteral") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isNullLiteral(node, opts) {
  if (!node) return false;
  if (node.type !== "NullLiteral") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isBooleanLiteral(node, opts) {
  if (!node) return false;
  if (node.type !== "BooleanLiteral") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isRegExpLiteral(node, opts) {
  if (!node) return false;
  if (node.type !== "RegExpLiteral") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isLogicalExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "LogicalExpression") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isMemberExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "MemberExpression") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isNewExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "NewExpression") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isProgram(node, opts) {
  if (!node) return false;
  if (node.type !== "Program") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isObjectExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "ObjectExpression") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isObjectMethod(node, opts) {
  if (!node) return false;
  if (node.type !== "ObjectMethod") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isObjectProperty(node, opts) {
  if (!node) return false;
  if (node.type !== "ObjectProperty") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isRestElement(node, opts) {
  if (!node) return false;
  if (node.type !== "RestElement") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isReturnStatement(node, opts) {
  if (!node) return false;
  if (node.type !== "ReturnStatement") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isSequenceExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "SequenceExpression") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isParenthesizedExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "ParenthesizedExpression") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isSwitchCase(node, opts) {
  if (!node) return false;
  if (node.type !== "SwitchCase") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isSwitchStatement(node, opts) {
  if (!node) return false;
  if (node.type !== "SwitchStatement") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isThisExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "ThisExpression") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isThrowStatement(node, opts) {
  if (!node) return false;
  if (node.type !== "ThrowStatement") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTryStatement(node, opts) {
  if (!node) return false;
  if (node.type !== "TryStatement") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isUnaryExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "UnaryExpression") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isUpdateExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "UpdateExpression") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isVariableDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "VariableDeclaration") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isVariableDeclarator(node, opts) {
  if (!node) return false;
  if (node.type !== "VariableDeclarator") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isWhileStatement(node, opts) {
  if (!node) return false;
  if (node.type !== "WhileStatement") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isWithStatement(node, opts) {
  if (!node) return false;
  if (node.type !== "WithStatement") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isAssignmentPattern(node, opts) {
  if (!node) return false;
  if (node.type !== "AssignmentPattern") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isArrayPattern(node, opts) {
  if (!node) return false;
  if (node.type !== "ArrayPattern") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isArrowFunctionExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "ArrowFunctionExpression") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isClassBody(node, opts) {
  if (!node) return false;
  if (node.type !== "ClassBody") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isClassExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "ClassExpression") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isClassDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "ClassDeclaration") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isExportAllDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "ExportAllDeclaration") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isExportDefaultDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "ExportDefaultDeclaration") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isExportNamedDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "ExportNamedDeclaration") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isExportSpecifier(node, opts) {
  if (!node) return false;
  if (node.type !== "ExportSpecifier") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isForOfStatement(node, opts) {
  if (!node) return false;
  if (node.type !== "ForOfStatement") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isImportDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "ImportDeclaration") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isImportDefaultSpecifier(node, opts) {
  if (!node) return false;
  if (node.type !== "ImportDefaultSpecifier") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isImportNamespaceSpecifier(node, opts) {
  if (!node) return false;
  if (node.type !== "ImportNamespaceSpecifier") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isImportSpecifier(node, opts) {
  if (!node) return false;
  if (node.type !== "ImportSpecifier") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isImportExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "ImportExpression") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isMetaProperty(node, opts) {
  if (!node) return false;
  if (node.type !== "MetaProperty") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isClassMethod(node, opts) {
  if (!node) return false;
  if (node.type !== "ClassMethod") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isObjectPattern(node, opts) {
  if (!node) return false;
  if (node.type !== "ObjectPattern") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isSpreadElement(node, opts) {
  if (!node) return false;
  if (node.type !== "SpreadElement") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isSuper(node, opts) {
  if (!node) return false;
  if (node.type !== "Super") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTaggedTemplateExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "TaggedTemplateExpression") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTemplateElement(node, opts) {
  if (!node) return false;
  if (node.type !== "TemplateElement") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTemplateLiteral(node, opts) {
  if (!node) return false;
  if (node.type !== "TemplateLiteral") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isYieldExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "YieldExpression") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isAwaitExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "AwaitExpression") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isImport(node, opts) {
  if (!node) return false;
  if (node.type !== "Import") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isBigIntLiteral(node, opts) {
  if (!node) return false;
  if (node.type !== "BigIntLiteral") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isExportNamespaceSpecifier(node, opts) {
  if (!node) return false;
  if (node.type !== "ExportNamespaceSpecifier") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isOptionalMemberExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "OptionalMemberExpression") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isOptionalCallExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "OptionalCallExpression") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isClassProperty(node, opts) {
  if (!node) return false;
  if (node.type !== "ClassProperty") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isClassAccessorProperty(node, opts) {
  if (!node) return false;
  if (node.type !== "ClassAccessorProperty") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isClassPrivateProperty(node, opts) {
  if (!node) return false;
  if (node.type !== "ClassPrivateProperty") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isClassPrivateMethod(node, opts) {
  if (!node) return false;
  if (node.type !== "ClassPrivateMethod") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isPrivateName(node, opts) {
  if (!node) return false;
  if (node.type !== "PrivateName") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isStaticBlock(node, opts) {
  if (!node) return false;
  if (node.type !== "StaticBlock") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isImportAttribute(node, opts) {
  if (!node) return false;
  if (node.type !== "ImportAttribute") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isAnyTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "AnyTypeAnnotation") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isArrayTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "ArrayTypeAnnotation") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isBooleanTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "BooleanTypeAnnotation") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isBooleanLiteralTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "BooleanLiteralTypeAnnotation") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isNullLiteralTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "NullLiteralTypeAnnotation") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isClassImplements(node, opts) {
  if (!node) return false;
  if (node.type !== "ClassImplements") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isDeclareClass(node, opts) {
  if (!node) return false;
  if (node.type !== "DeclareClass") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isDeclareFunction(node, opts) {
  if (!node) return false;
  if (node.type !== "DeclareFunction") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isDeclareInterface(node, opts) {
  if (!node) return false;
  if (node.type !== "DeclareInterface") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isDeclareModule(node, opts) {
  if (!node) return false;
  if (node.type !== "DeclareModule") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isDeclareModuleExports(node, opts) {
  if (!node) return false;
  if (node.type !== "DeclareModuleExports") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isDeclareTypeAlias(node, opts) {
  if (!node) return false;
  if (node.type !== "DeclareTypeAlias") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isDeclareOpaqueType(node, opts) {
  if (!node) return false;
  if (node.type !== "DeclareOpaqueType") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isDeclareVariable(node, opts) {
  if (!node) return false;
  if (node.type !== "DeclareVariable") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isDeclareExportDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "DeclareExportDeclaration") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isDeclareExportAllDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "DeclareExportAllDeclaration") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isDeclaredPredicate(node, opts) {
  if (!node) return false;
  if (node.type !== "DeclaredPredicate") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isExistsTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "ExistsTypeAnnotation") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isFunctionTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "FunctionTypeAnnotation") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isFunctionTypeParam(node, opts) {
  if (!node) return false;
  if (node.type !== "FunctionTypeParam") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isGenericTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "GenericTypeAnnotation") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isInferredPredicate(node, opts) {
  if (!node) return false;
  if (node.type !== "InferredPredicate") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isInterfaceExtends(node, opts) {
  if (!node) return false;
  if (node.type !== "InterfaceExtends") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isInterfaceDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "InterfaceDeclaration") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isInterfaceTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "InterfaceTypeAnnotation") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isIntersectionTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "IntersectionTypeAnnotation") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isMixedTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "MixedTypeAnnotation") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isEmptyTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "EmptyTypeAnnotation") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isNullableTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "NullableTypeAnnotation") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isNumberLiteralTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "NumberLiteralTypeAnnotation") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isNumberTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "NumberTypeAnnotation") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isObjectTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "ObjectTypeAnnotation") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isObjectTypeInternalSlot(node, opts) {
  if (!node) return false;
  if (node.type !== "ObjectTypeInternalSlot") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isObjectTypeCallProperty(node, opts) {
  if (!node) return false;
  if (node.type !== "ObjectTypeCallProperty") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isObjectTypeIndexer(node, opts) {
  if (!node) return false;
  if (node.type !== "ObjectTypeIndexer") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isObjectTypeProperty(node, opts) {
  if (!node) return false;
  if (node.type !== "ObjectTypeProperty") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isObjectTypeSpreadProperty(node, opts) {
  if (!node) return false;
  if (node.type !== "ObjectTypeSpreadProperty") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isOpaqueType(node, opts) {
  if (!node) return false;
  if (node.type !== "OpaqueType") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isQualifiedTypeIdentifier(node, opts) {
  if (!node) return false;
  if (node.type !== "QualifiedTypeIdentifier") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isStringLiteralTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "StringLiteralTypeAnnotation") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isStringTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "StringTypeAnnotation") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isSymbolTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "SymbolTypeAnnotation") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isThisTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "ThisTypeAnnotation") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTupleTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "TupleTypeAnnotation") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTypeofTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "TypeofTypeAnnotation") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTypeAlias(node, opts) {
  if (!node) return false;
  if (node.type !== "TypeAlias") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "TypeAnnotation") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTypeCastExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "TypeCastExpression") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTypeParameter(node, opts) {
  if (!node) return false;
  if (node.type !== "TypeParameter") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTypeParameterDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "TypeParameterDeclaration") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTypeParameterInstantiation(node, opts) {
  if (!node) return false;
  if (node.type !== "TypeParameterInstantiation") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isUnionTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "UnionTypeAnnotation") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isVariance(node, opts) {
  if (!node) return false;
  if (node.type !== "Variance") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isVoidTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "VoidTypeAnnotation") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isEnumDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "EnumDeclaration") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isEnumBooleanBody(node, opts) {
  if (!node) return false;
  if (node.type !== "EnumBooleanBody") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isEnumNumberBody(node, opts) {
  if (!node) return false;
  if (node.type !== "EnumNumberBody") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isEnumStringBody(node, opts) {
  if (!node) return false;
  if (node.type !== "EnumStringBody") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isEnumSymbolBody(node, opts) {
  if (!node) return false;
  if (node.type !== "EnumSymbolBody") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isEnumBooleanMember(node, opts) {
  if (!node) return false;
  if (node.type !== "EnumBooleanMember") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isEnumNumberMember(node, opts) {
  if (!node) return false;
  if (node.type !== "EnumNumberMember") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isEnumStringMember(node, opts) {
  if (!node) return false;
  if (node.type !== "EnumStringMember") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isEnumDefaultedMember(node, opts) {
  if (!node) return false;
  if (node.type !== "EnumDefaultedMember") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isIndexedAccessType(node, opts) {
  if (!node) return false;
  if (node.type !== "IndexedAccessType") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isOptionalIndexedAccessType(node, opts) {
  if (!node) return false;
  if (node.type !== "OptionalIndexedAccessType") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isJSXAttribute(node, opts) {
  if (!node) return false;
  if (node.type !== "JSXAttribute") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isJSXClosingElement(node, opts) {
  if (!node) return false;
  if (node.type !== "JSXClosingElement") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isJSXElement(node, opts) {
  if (!node) return false;
  if (node.type !== "JSXElement") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isJSXEmptyExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "JSXEmptyExpression") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isJSXExpressionContainer(node, opts) {
  if (!node) return false;
  if (node.type !== "JSXExpressionContainer") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isJSXSpreadChild(node, opts) {
  if (!node) return false;
  if (node.type !== "JSXSpreadChild") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isJSXIdentifier(node, opts) {
  if (!node) return false;
  if (node.type !== "JSXIdentifier") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isJSXMemberExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "JSXMemberExpression") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isJSXNamespacedName(node, opts) {
  if (!node) return false;
  if (node.type !== "JSXNamespacedName") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isJSXOpeningElement(node, opts) {
  if (!node) return false;
  if (node.type !== "JSXOpeningElement") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isJSXSpreadAttribute(node, opts) {
  if (!node) return false;
  if (node.type !== "JSXSpreadAttribute") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isJSXText(node, opts) {
  if (!node) return false;
  if (node.type !== "JSXText") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isJSXFragment(node, opts) {
  if (!node) return false;
  if (node.type !== "JSXFragment") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isJSXOpeningFragment(node, opts) {
  if (!node) return false;
  if (node.type !== "JSXOpeningFragment") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isJSXClosingFragment(node, opts) {
  if (!node) return false;
  if (node.type !== "JSXClosingFragment") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isNoop(node, opts) {
  if (!node) return false;
  if (node.type !== "Noop") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isPlaceholder(node, opts) {
  if (!node) return false;
  if (node.type !== "Placeholder") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isV8IntrinsicIdentifier(node, opts) {
  if (!node) return false;
  if (node.type !== "V8IntrinsicIdentifier") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isArgumentPlaceholder(node, opts) {
  if (!node) return false;
  if (node.type !== "ArgumentPlaceholder") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isBindExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "BindExpression") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isDecorator(node, opts) {
  if (!node) return false;
  if (node.type !== "Decorator") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isDoExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "DoExpression") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isExportDefaultSpecifier(node, opts) {
  if (!node) return false;
  if (node.type !== "ExportDefaultSpecifier") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isRecordExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "RecordExpression") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTupleExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "TupleExpression") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isDecimalLiteral(node, opts) {
  if (!node) return false;
  if (node.type !== "DecimalLiteral") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isModuleExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "ModuleExpression") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTopicReference(node, opts) {
  if (!node) return false;
  if (node.type !== "TopicReference") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isPipelineTopicExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "PipelineTopicExpression") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isPipelineBareFunction(node, opts) {
  if (!node) return false;
  if (node.type !== "PipelineBareFunction") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isPipelinePrimaryTopicReference(node, opts) {
  if (!node) return false;
  if (node.type !== "PipelinePrimaryTopicReference") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isVoidPattern(node, opts) {
  if (!node) return false;
  if (node.type !== "VoidPattern") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSParameterProperty(node, opts) {
  if (!node) return false;
  if (node.type !== "TSParameterProperty") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSDeclareFunction(node, opts) {
  if (!node) return false;
  if (node.type !== "TSDeclareFunction") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSDeclareMethod(node, opts) {
  if (!node) return false;
  if (node.type !== "TSDeclareMethod") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSQualifiedName(node, opts) {
  if (!node) return false;
  if (node.type !== "TSQualifiedName") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSCallSignatureDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "TSCallSignatureDeclaration") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSConstructSignatureDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "TSConstructSignatureDeclaration") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSPropertySignature(node, opts) {
  if (!node) return false;
  if (node.type !== "TSPropertySignature") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSMethodSignature(node, opts) {
  if (!node) return false;
  if (node.type !== "TSMethodSignature") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSIndexSignature(node, opts) {
  if (!node) return false;
  if (node.type !== "TSIndexSignature") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSAnyKeyword(node, opts) {
  if (!node) return false;
  if (node.type !== "TSAnyKeyword") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSBooleanKeyword(node, opts) {
  if (!node) return false;
  if (node.type !== "TSBooleanKeyword") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSBigIntKeyword(node, opts) {
  if (!node) return false;
  if (node.type !== "TSBigIntKeyword") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSIntrinsicKeyword(node, opts) {
  if (!node) return false;
  if (node.type !== "TSIntrinsicKeyword") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSNeverKeyword(node, opts) {
  if (!node) return false;
  if (node.type !== "TSNeverKeyword") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSNullKeyword(node, opts) {
  if (!node) return false;
  if (node.type !== "TSNullKeyword") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSNumberKeyword(node, opts) {
  if (!node) return false;
  if (node.type !== "TSNumberKeyword") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSObjectKeyword(node, opts) {
  if (!node) return false;
  if (node.type !== "TSObjectKeyword") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSStringKeyword(node, opts) {
  if (!node) return false;
  if (node.type !== "TSStringKeyword") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSSymbolKeyword(node, opts) {
  if (!node) return false;
  if (node.type !== "TSSymbolKeyword") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSUndefinedKeyword(node, opts) {
  if (!node) return false;
  if (node.type !== "TSUndefinedKeyword") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSUnknownKeyword(node, opts) {
  if (!node) return false;
  if (node.type !== "TSUnknownKeyword") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSVoidKeyword(node, opts) {
  if (!node) return false;
  if (node.type !== "TSVoidKeyword") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSThisType(node, opts) {
  if (!node) return false;
  if (node.type !== "TSThisType") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSFunctionType(node, opts) {
  if (!node) return false;
  if (node.type !== "TSFunctionType") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSConstructorType(node, opts) {
  if (!node) return false;
  if (node.type !== "TSConstructorType") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSTypeReference(node, opts) {
  if (!node) return false;
  if (node.type !== "TSTypeReference") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSTypePredicate(node, opts) {
  if (!node) return false;
  if (node.type !== "TSTypePredicate") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSTypeQuery(node, opts) {
  if (!node) return false;
  if (node.type !== "TSTypeQuery") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSTypeLiteral(node, opts) {
  if (!node) return false;
  if (node.type !== "TSTypeLiteral") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSArrayType(node, opts) {
  if (!node) return false;
  if (node.type !== "TSArrayType") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSTupleType(node, opts) {
  if (!node) return false;
  if (node.type !== "TSTupleType") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSOptionalType(node, opts) {
  if (!node) return false;
  if (node.type !== "TSOptionalType") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSRestType(node, opts) {
  if (!node) return false;
  if (node.type !== "TSRestType") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSNamedTupleMember(node, opts) {
  if (!node) return false;
  if (node.type !== "TSNamedTupleMember") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSUnionType(node, opts) {
  if (!node) return false;
  if (node.type !== "TSUnionType") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSIntersectionType(node, opts) {
  if (!node) return false;
  if (node.type !== "TSIntersectionType") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSConditionalType(node, opts) {
  if (!node) return false;
  if (node.type !== "TSConditionalType") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSInferType(node, opts) {
  if (!node) return false;
  if (node.type !== "TSInferType") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSParenthesizedType(node, opts) {
  if (!node) return false;
  if (node.type !== "TSParenthesizedType") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSTypeOperator(node, opts) {
  if (!node) return false;
  if (node.type !== "TSTypeOperator") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSIndexedAccessType(node, opts) {
  if (!node) return false;
  if (node.type !== "TSIndexedAccessType") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSMappedType(node, opts) {
  if (!node) return false;
  if (node.type !== "TSMappedType") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSTemplateLiteralType(node, opts) {
  if (!node) return false;
  if (node.type !== "TSTemplateLiteralType") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSLiteralType(node, opts) {
  if (!node) return false;
  if (node.type !== "TSLiteralType") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSExpressionWithTypeArguments(node, opts) {
  if (!node) return false;
  if (node.type !== "TSExpressionWithTypeArguments") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSInterfaceDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "TSInterfaceDeclaration") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSInterfaceBody(node, opts) {
  if (!node) return false;
  if (node.type !== "TSInterfaceBody") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSTypeAliasDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "TSTypeAliasDeclaration") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSInstantiationExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "TSInstantiationExpression") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSAsExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "TSAsExpression") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSSatisfiesExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "TSSatisfiesExpression") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSTypeAssertion(node, opts) {
  if (!node) return false;
  if (node.type !== "TSTypeAssertion") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSEnumBody(node, opts) {
  if (!node) return false;
  if (node.type !== "TSEnumBody") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSEnumDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "TSEnumDeclaration") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSEnumMember(node, opts) {
  if (!node) return false;
  if (node.type !== "TSEnumMember") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSModuleDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "TSModuleDeclaration") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSModuleBlock(node, opts) {
  if (!node) return false;
  if (node.type !== "TSModuleBlock") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSImportType(node, opts) {
  if (!node) return false;
  if (node.type !== "TSImportType") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSImportEqualsDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "TSImportEqualsDeclaration") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSExternalModuleReference(node, opts) {
  if (!node) return false;
  if (node.type !== "TSExternalModuleReference") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSNonNullExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "TSNonNullExpression") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSExportAssignment(node, opts) {
  if (!node) return false;
  if (node.type !== "TSExportAssignment") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSNamespaceExportDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "TSNamespaceExportDeclaration") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "TSTypeAnnotation") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSTypeParameterInstantiation(node, opts) {
  if (!node) return false;
  if (node.type !== "TSTypeParameterInstantiation") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSTypeParameterDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "TSTypeParameterDeclaration") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSTypeParameter(node, opts) {
  if (!node) return false;
  if (node.type !== "TSTypeParameter") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isStandardized(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "ArrayExpression":
    case "AssignmentExpression":
    case "BinaryExpression":
    case "InterpreterDirective":
    case "Directive":
    case "DirectiveLiteral":
    case "BlockStatement":
    case "BreakStatement":
    case "CallExpression":
    case "CatchClause":
    case "ConditionalExpression":
    case "ContinueStatement":
    case "DebuggerStatement":
    case "DoWhileStatement":
    case "EmptyStatement":
    case "ExpressionStatement":
    case "File":
    case "ForInStatement":
    case "ForStatement":
    case "FunctionDeclaration":
    case "FunctionExpression":
    case "Identifier":
    case "IfStatement":
    case "LabeledStatement":
    case "StringLiteral":
    case "NumericLiteral":
    case "NullLiteral":
    case "BooleanLiteral":
    case "RegExpLiteral":
    case "LogicalExpression":
    case "MemberExpression":
    case "NewExpression":
    case "Program":
    case "ObjectExpression":
    case "ObjectMethod":
    case "ObjectProperty":
    case "RestElement":
    case "ReturnStatement":
    case "SequenceExpression":
    case "ParenthesizedExpression":
    case "SwitchCase":
    case "SwitchStatement":
    case "ThisExpression":
    case "ThrowStatement":
    case "TryStatement":
    case "UnaryExpression":
    case "UpdateExpression":
    case "VariableDeclaration":
    case "VariableDeclarator":
    case "WhileStatement":
    case "WithStatement":
    case "AssignmentPattern":
    case "ArrayPattern":
    case "ArrowFunctionExpression":
    case "ClassBody":
    case "ClassExpression":
    case "ClassDeclaration":
    case "ExportAllDeclaration":
    case "ExportDefaultDeclaration":
    case "ExportNamedDeclaration":
    case "ExportSpecifier":
    case "ForOfStatement":
    case "ImportDeclaration":
    case "ImportDefaultSpecifier":
    case "ImportNamespaceSpecifier":
    case "ImportSpecifier":
    case "ImportExpression":
    case "MetaProperty":
    case "ClassMethod":
    case "ObjectPattern":
    case "SpreadElement":
    case "Super":
    case "TaggedTemplateExpression":
    case "TemplateElement":
    case "TemplateLiteral":
    case "YieldExpression":
    case "AwaitExpression":
    case "Import":
    case "BigIntLiteral":
    case "ExportNamespaceSpecifier":
    case "OptionalMemberExpression":
    case "OptionalCallExpression":
    case "ClassProperty":
    case "ClassAccessorProperty":
    case "ClassPrivateProperty":
    case "ClassPrivateMethod":
    case "PrivateName":
    case "StaticBlock":
    case "ImportAttribute":
      break;
    case "Placeholder":
      switch (node.expectedNode) {
        case "Identifier":
        case "StringLiteral":
        case "BlockStatement":
        case "ClassBody":
          break;
        default:
          return false;
      }
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isExpression(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "ArrayExpression":
    case "AssignmentExpression":
    case "BinaryExpression":
    case "CallExpression":
    case "ConditionalExpression":
    case "FunctionExpression":
    case "Identifier":
    case "StringLiteral":
    case "NumericLiteral":
    case "NullLiteral":
    case "BooleanLiteral":
    case "RegExpLiteral":
    case "LogicalExpression":
    case "MemberExpression":
    case "NewExpression":
    case "ObjectExpression":
    case "SequenceExpression":
    case "ParenthesizedExpression":
    case "ThisExpression":
    case "UnaryExpression":
    case "UpdateExpression":
    case "ArrowFunctionExpression":
    case "ClassExpression":
    case "ImportExpression":
    case "MetaProperty":
    case "Super":
    case "TaggedTemplateExpression":
    case "TemplateLiteral":
    case "YieldExpression":
    case "AwaitExpression":
    case "Import":
    case "BigIntLiteral":
    case "OptionalMemberExpression":
    case "OptionalCallExpression":
    case "TypeCastExpression":
    case "JSXElement":
    case "JSXFragment":
    case "BindExpression":
    case "DoExpression":
    case "RecordExpression":
    case "TupleExpression":
    case "DecimalLiteral":
    case "ModuleExpression":
    case "TopicReference":
    case "PipelineTopicExpression":
    case "PipelineBareFunction":
    case "PipelinePrimaryTopicReference":
    case "TSInstantiationExpression":
    case "TSAsExpression":
    case "TSSatisfiesExpression":
    case "TSTypeAssertion":
    case "TSNonNullExpression":
      break;
    case "Placeholder":
      switch (node.expectedNode) {
        case "Expression":
        case "Identifier":
        case "StringLiteral":
          break;
        default:
          return false;
      }
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isBinary(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "BinaryExpression":
    case "LogicalExpression":
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isScopable(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "BlockStatement":
    case "CatchClause":
    case "DoWhileStatement":
    case "ForInStatement":
    case "ForStatement":
    case "FunctionDeclaration":
    case "FunctionExpression":
    case "Program":
    case "ObjectMethod":
    case "SwitchStatement":
    case "WhileStatement":
    case "ArrowFunctionExpression":
    case "ClassExpression":
    case "ClassDeclaration":
    case "ForOfStatement":
    case "ClassMethod":
    case "ClassPrivateMethod":
    case "StaticBlock":
    case "TSModuleBlock":
      break;
    case "Placeholder":
      if (node.expectedNode === "BlockStatement") break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isBlockParent(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "BlockStatement":
    case "CatchClause":
    case "DoWhileStatement":
    case "ForInStatement":
    case "ForStatement":
    case "FunctionDeclaration":
    case "FunctionExpression":
    case "Program":
    case "ObjectMethod":
    case "SwitchStatement":
    case "WhileStatement":
    case "ArrowFunctionExpression":
    case "ForOfStatement":
    case "ClassMethod":
    case "ClassPrivateMethod":
    case "StaticBlock":
    case "TSModuleBlock":
      break;
    case "Placeholder":
      if (node.expectedNode === "BlockStatement") break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isBlock(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "BlockStatement":
    case "Program":
    case "TSModuleBlock":
      break;
    case "Placeholder":
      if (node.expectedNode === "BlockStatement") break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isStatement(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "BlockStatement":
    case "BreakStatement":
    case "ContinueStatement":
    case "DebuggerStatement":
    case "DoWhileStatement":
    case "EmptyStatement":
    case "ExpressionStatement":
    case "ForInStatement":
    case "ForStatement":
    case "FunctionDeclaration":
    case "IfStatement":
    case "LabeledStatement":
    case "ReturnStatement":
    case "SwitchStatement":
    case "ThrowStatement":
    case "TryStatement":
    case "VariableDeclaration":
    case "WhileStatement":
    case "WithStatement":
    case "ClassDeclaration":
    case "ExportAllDeclaration":
    case "ExportDefaultDeclaration":
    case "ExportNamedDeclaration":
    case "ForOfStatement":
    case "ImportDeclaration":
    case "DeclareClass":
    case "DeclareFunction":
    case "DeclareInterface":
    case "DeclareModule":
    case "DeclareModuleExports":
    case "DeclareTypeAlias":
    case "DeclareOpaqueType":
    case "DeclareVariable":
    case "DeclareExportDeclaration":
    case "DeclareExportAllDeclaration":
    case "InterfaceDeclaration":
    case "OpaqueType":
    case "TypeAlias":
    case "EnumDeclaration":
    case "TSDeclareFunction":
    case "TSInterfaceDeclaration":
    case "TSTypeAliasDeclaration":
    case "TSEnumDeclaration":
    case "TSModuleDeclaration":
    case "TSImportEqualsDeclaration":
    case "TSExportAssignment":
    case "TSNamespaceExportDeclaration":
      break;
    case "Placeholder":
      switch (node.expectedNode) {
        case "Statement":
        case "Declaration":
        case "BlockStatement":
          break;
        default:
          return false;
      }
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTerminatorless(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "BreakStatement":
    case "ContinueStatement":
    case "ReturnStatement":
    case "ThrowStatement":
    case "YieldExpression":
    case "AwaitExpression":
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isCompletionStatement(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "BreakStatement":
    case "ContinueStatement":
    case "ReturnStatement":
    case "ThrowStatement":
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isConditional(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "ConditionalExpression":
    case "IfStatement":
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isLoop(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "DoWhileStatement":
    case "ForInStatement":
    case "ForStatement":
    case "WhileStatement":
    case "ForOfStatement":
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isWhile(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "DoWhileStatement":
    case "WhileStatement":
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isExpressionWrapper(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "ExpressionStatement":
    case "ParenthesizedExpression":
    case "TypeCastExpression":
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isFor(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "ForInStatement":
    case "ForStatement":
    case "ForOfStatement":
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isForXStatement(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "ForInStatement":
    case "ForOfStatement":
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isFunction(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "FunctionDeclaration":
    case "FunctionExpression":
    case "ObjectMethod":
    case "ArrowFunctionExpression":
    case "ClassMethod":
    case "ClassPrivateMethod":
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isFunctionParent(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "FunctionDeclaration":
    case "FunctionExpression":
    case "ObjectMethod":
    case "ArrowFunctionExpression":
    case "ClassMethod":
    case "ClassPrivateMethod":
    case "StaticBlock":
    case "TSModuleBlock":
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isPureish(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "FunctionDeclaration":
    case "FunctionExpression":
    case "StringLiteral":
    case "NumericLiteral":
    case "NullLiteral":
    case "BooleanLiteral":
    case "RegExpLiteral":
    case "ArrowFunctionExpression":
    case "BigIntLiteral":
    case "DecimalLiteral":
      break;
    case "Placeholder":
      if (node.expectedNode === "StringLiteral") break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isDeclaration(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "FunctionDeclaration":
    case "VariableDeclaration":
    case "ClassDeclaration":
    case "ExportAllDeclaration":
    case "ExportDefaultDeclaration":
    case "ExportNamedDeclaration":
    case "ImportDeclaration":
    case "DeclareClass":
    case "DeclareFunction":
    case "DeclareInterface":
    case "DeclareModule":
    case "DeclareModuleExports":
    case "DeclareTypeAlias":
    case "DeclareOpaqueType":
    case "DeclareVariable":
    case "DeclareExportDeclaration":
    case "DeclareExportAllDeclaration":
    case "InterfaceDeclaration":
    case "OpaqueType":
    case "TypeAlias":
    case "EnumDeclaration":
    case "TSDeclareFunction":
    case "TSInterfaceDeclaration":
    case "TSTypeAliasDeclaration":
    case "TSEnumDeclaration":
    case "TSModuleDeclaration":
    case "TSImportEqualsDeclaration":
      break;
    case "Placeholder":
      if (node.expectedNode === "Declaration") break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isFunctionParameter(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "Identifier":
    case "RestElement":
    case "AssignmentPattern":
    case "ArrayPattern":
    case "ObjectPattern":
    case "VoidPattern":
      break;
    case "Placeholder":
      if (node.expectedNode === "Identifier") break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isPatternLike(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "Identifier":
    case "MemberExpression":
    case "RestElement":
    case "AssignmentPattern":
    case "ArrayPattern":
    case "ObjectPattern":
    case "VoidPattern":
    case "TSAsExpression":
    case "TSSatisfiesExpression":
    case "TSTypeAssertion":
    case "TSNonNullExpression":
      break;
    case "Placeholder":
      switch (node.expectedNode) {
        case "Pattern":
        case "Identifier":
          break;
        default:
          return false;
      }
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isLVal(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "Identifier":
    case "MemberExpression":
    case "RestElement":
    case "AssignmentPattern":
    case "ArrayPattern":
    case "ObjectPattern":
    case "TSParameterProperty":
    case "TSAsExpression":
    case "TSSatisfiesExpression":
    case "TSTypeAssertion":
    case "TSNonNullExpression":
      break;
    case "Placeholder":
      switch (node.expectedNode) {
        case "Pattern":
        case "Identifier":
          break;
        default:
          return false;
      }
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSEntityName(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "Identifier":
    case "TSQualifiedName":
      break;
    case "Placeholder":
      if (node.expectedNode === "Identifier") break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isLiteral(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "StringLiteral":
    case "NumericLiteral":
    case "NullLiteral":
    case "BooleanLiteral":
    case "RegExpLiteral":
    case "TemplateLiteral":
    case "BigIntLiteral":
    case "DecimalLiteral":
      break;
    case "Placeholder":
      if (node.expectedNode === "StringLiteral") break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isImmutable$2(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "StringLiteral":
    case "NumericLiteral":
    case "NullLiteral":
    case "BooleanLiteral":
    case "BigIntLiteral":
    case "JSXAttribute":
    case "JSXClosingElement":
    case "JSXElement":
    case "JSXExpressionContainer":
    case "JSXSpreadChild":
    case "JSXOpeningElement":
    case "JSXText":
    case "JSXFragment":
    case "JSXOpeningFragment":
    case "JSXClosingFragment":
    case "DecimalLiteral":
      break;
    case "Placeholder":
      if (node.expectedNode === "StringLiteral") break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isUserWhitespacable(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "ObjectMethod":
    case "ObjectProperty":
    case "ObjectTypeInternalSlot":
    case "ObjectTypeCallProperty":
    case "ObjectTypeIndexer":
    case "ObjectTypeProperty":
    case "ObjectTypeSpreadProperty":
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isMethod(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "ObjectMethod":
    case "ClassMethod":
    case "ClassPrivateMethod":
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isObjectMember(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "ObjectMethod":
    case "ObjectProperty":
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isProperty(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "ObjectProperty":
    case "ClassProperty":
    case "ClassAccessorProperty":
    case "ClassPrivateProperty":
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isUnaryLike(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "UnaryExpression":
    case "SpreadElement":
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isPattern(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "AssignmentPattern":
    case "ArrayPattern":
    case "ObjectPattern":
    case "VoidPattern":
      break;
    case "Placeholder":
      if (node.expectedNode === "Pattern") break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isClass(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "ClassExpression":
    case "ClassDeclaration":
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isImportOrExportDeclaration(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "ExportAllDeclaration":
    case "ExportDefaultDeclaration":
    case "ExportNamedDeclaration":
    case "ImportDeclaration":
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isExportDeclaration(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "ExportAllDeclaration":
    case "ExportDefaultDeclaration":
    case "ExportNamedDeclaration":
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isModuleSpecifier(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "ExportSpecifier":
    case "ImportDefaultSpecifier":
    case "ImportNamespaceSpecifier":
    case "ImportSpecifier":
    case "ExportNamespaceSpecifier":
    case "ExportDefaultSpecifier":
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isAccessor(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "ClassAccessorProperty":
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isPrivate(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "ClassPrivateProperty":
    case "ClassPrivateMethod":
    case "PrivateName":
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isFlow(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "AnyTypeAnnotation":
    case "ArrayTypeAnnotation":
    case "BooleanTypeAnnotation":
    case "BooleanLiteralTypeAnnotation":
    case "NullLiteralTypeAnnotation":
    case "ClassImplements":
    case "DeclareClass":
    case "DeclareFunction":
    case "DeclareInterface":
    case "DeclareModule":
    case "DeclareModuleExports":
    case "DeclareTypeAlias":
    case "DeclareOpaqueType":
    case "DeclareVariable":
    case "DeclareExportDeclaration":
    case "DeclareExportAllDeclaration":
    case "DeclaredPredicate":
    case "ExistsTypeAnnotation":
    case "FunctionTypeAnnotation":
    case "FunctionTypeParam":
    case "GenericTypeAnnotation":
    case "InferredPredicate":
    case "InterfaceExtends":
    case "InterfaceDeclaration":
    case "InterfaceTypeAnnotation":
    case "IntersectionTypeAnnotation":
    case "MixedTypeAnnotation":
    case "EmptyTypeAnnotation":
    case "NullableTypeAnnotation":
    case "NumberLiteralTypeAnnotation":
    case "NumberTypeAnnotation":
    case "ObjectTypeAnnotation":
    case "ObjectTypeInternalSlot":
    case "ObjectTypeCallProperty":
    case "ObjectTypeIndexer":
    case "ObjectTypeProperty":
    case "ObjectTypeSpreadProperty":
    case "OpaqueType":
    case "QualifiedTypeIdentifier":
    case "StringLiteralTypeAnnotation":
    case "StringTypeAnnotation":
    case "SymbolTypeAnnotation":
    case "ThisTypeAnnotation":
    case "TupleTypeAnnotation":
    case "TypeofTypeAnnotation":
    case "TypeAlias":
    case "TypeAnnotation":
    case "TypeCastExpression":
    case "TypeParameter":
    case "TypeParameterDeclaration":
    case "TypeParameterInstantiation":
    case "UnionTypeAnnotation":
    case "Variance":
    case "VoidTypeAnnotation":
    case "EnumDeclaration":
    case "EnumBooleanBody":
    case "EnumNumberBody":
    case "EnumStringBody":
    case "EnumSymbolBody":
    case "EnumBooleanMember":
    case "EnumNumberMember":
    case "EnumStringMember":
    case "EnumDefaultedMember":
    case "IndexedAccessType":
    case "OptionalIndexedAccessType":
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isFlowType(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "AnyTypeAnnotation":
    case "ArrayTypeAnnotation":
    case "BooleanTypeAnnotation":
    case "BooleanLiteralTypeAnnotation":
    case "NullLiteralTypeAnnotation":
    case "ExistsTypeAnnotation":
    case "FunctionTypeAnnotation":
    case "GenericTypeAnnotation":
    case "InterfaceTypeAnnotation":
    case "IntersectionTypeAnnotation":
    case "MixedTypeAnnotation":
    case "EmptyTypeAnnotation":
    case "NullableTypeAnnotation":
    case "NumberLiteralTypeAnnotation":
    case "NumberTypeAnnotation":
    case "ObjectTypeAnnotation":
    case "StringLiteralTypeAnnotation":
    case "StringTypeAnnotation":
    case "SymbolTypeAnnotation":
    case "ThisTypeAnnotation":
    case "TupleTypeAnnotation":
    case "TypeofTypeAnnotation":
    case "UnionTypeAnnotation":
    case "VoidTypeAnnotation":
    case "IndexedAccessType":
    case "OptionalIndexedAccessType":
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isFlowBaseAnnotation(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "AnyTypeAnnotation":
    case "BooleanTypeAnnotation":
    case "NullLiteralTypeAnnotation":
    case "MixedTypeAnnotation":
    case "EmptyTypeAnnotation":
    case "NumberTypeAnnotation":
    case "StringTypeAnnotation":
    case "SymbolTypeAnnotation":
    case "ThisTypeAnnotation":
    case "VoidTypeAnnotation":
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isFlowDeclaration(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "DeclareClass":
    case "DeclareFunction":
    case "DeclareInterface":
    case "DeclareModule":
    case "DeclareModuleExports":
    case "DeclareTypeAlias":
    case "DeclareOpaqueType":
    case "DeclareVariable":
    case "DeclareExportDeclaration":
    case "DeclareExportAllDeclaration":
    case "InterfaceDeclaration":
    case "OpaqueType":
    case "TypeAlias":
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isFlowPredicate(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "DeclaredPredicate":
    case "InferredPredicate":
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isEnumBody(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "EnumBooleanBody":
    case "EnumNumberBody":
    case "EnumStringBody":
    case "EnumSymbolBody":
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isEnumMember(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "EnumBooleanMember":
    case "EnumNumberMember":
    case "EnumStringMember":
    case "EnumDefaultedMember":
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isJSX(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "JSXAttribute":
    case "JSXClosingElement":
    case "JSXElement":
    case "JSXEmptyExpression":
    case "JSXExpressionContainer":
    case "JSXSpreadChild":
    case "JSXIdentifier":
    case "JSXMemberExpression":
    case "JSXNamespacedName":
    case "JSXOpeningElement":
    case "JSXSpreadAttribute":
    case "JSXText":
    case "JSXFragment":
    case "JSXOpeningFragment":
    case "JSXClosingFragment":
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isMiscellaneous(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "Noop":
    case "Placeholder":
    case "V8IntrinsicIdentifier":
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTypeScript(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "TSParameterProperty":
    case "TSDeclareFunction":
    case "TSDeclareMethod":
    case "TSQualifiedName":
    case "TSCallSignatureDeclaration":
    case "TSConstructSignatureDeclaration":
    case "TSPropertySignature":
    case "TSMethodSignature":
    case "TSIndexSignature":
    case "TSAnyKeyword":
    case "TSBooleanKeyword":
    case "TSBigIntKeyword":
    case "TSIntrinsicKeyword":
    case "TSNeverKeyword":
    case "TSNullKeyword":
    case "TSNumberKeyword":
    case "TSObjectKeyword":
    case "TSStringKeyword":
    case "TSSymbolKeyword":
    case "TSUndefinedKeyword":
    case "TSUnknownKeyword":
    case "TSVoidKeyword":
    case "TSThisType":
    case "TSFunctionType":
    case "TSConstructorType":
    case "TSTypeReference":
    case "TSTypePredicate":
    case "TSTypeQuery":
    case "TSTypeLiteral":
    case "TSArrayType":
    case "TSTupleType":
    case "TSOptionalType":
    case "TSRestType":
    case "TSNamedTupleMember":
    case "TSUnionType":
    case "TSIntersectionType":
    case "TSConditionalType":
    case "TSInferType":
    case "TSParenthesizedType":
    case "TSTypeOperator":
    case "TSIndexedAccessType":
    case "TSMappedType":
    case "TSTemplateLiteralType":
    case "TSLiteralType":
    case "TSExpressionWithTypeArguments":
    case "TSInterfaceDeclaration":
    case "TSInterfaceBody":
    case "TSTypeAliasDeclaration":
    case "TSInstantiationExpression":
    case "TSAsExpression":
    case "TSSatisfiesExpression":
    case "TSTypeAssertion":
    case "TSEnumBody":
    case "TSEnumDeclaration":
    case "TSEnumMember":
    case "TSModuleDeclaration":
    case "TSModuleBlock":
    case "TSImportType":
    case "TSImportEqualsDeclaration":
    case "TSExternalModuleReference":
    case "TSNonNullExpression":
    case "TSExportAssignment":
    case "TSNamespaceExportDeclaration":
    case "TSTypeAnnotation":
    case "TSTypeParameterInstantiation":
    case "TSTypeParameterDeclaration":
    case "TSTypeParameter":
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSTypeElement(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "TSCallSignatureDeclaration":
    case "TSConstructSignatureDeclaration":
    case "TSPropertySignature":
    case "TSMethodSignature":
    case "TSIndexSignature":
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSType(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "TSAnyKeyword":
    case "TSBooleanKeyword":
    case "TSBigIntKeyword":
    case "TSIntrinsicKeyword":
    case "TSNeverKeyword":
    case "TSNullKeyword":
    case "TSNumberKeyword":
    case "TSObjectKeyword":
    case "TSStringKeyword":
    case "TSSymbolKeyword":
    case "TSUndefinedKeyword":
    case "TSUnknownKeyword":
    case "TSVoidKeyword":
    case "TSThisType":
    case "TSFunctionType":
    case "TSConstructorType":
    case "TSTypeReference":
    case "TSTypePredicate":
    case "TSTypeQuery":
    case "TSTypeLiteral":
    case "TSArrayType":
    case "TSTupleType":
    case "TSOptionalType":
    case "TSRestType":
    case "TSUnionType":
    case "TSIntersectionType":
    case "TSConditionalType":
    case "TSInferType":
    case "TSParenthesizedType":
    case "TSTypeOperator":
    case "TSIndexedAccessType":
    case "TSMappedType":
    case "TSTemplateLiteralType":
    case "TSLiteralType":
    case "TSExpressionWithTypeArguments":
    case "TSImportType":
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isTSBaseType(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "TSAnyKeyword":
    case "TSBooleanKeyword":
    case "TSBigIntKeyword":
    case "TSIntrinsicKeyword":
    case "TSNeverKeyword":
    case "TSNullKeyword":
    case "TSNumberKeyword":
    case "TSObjectKeyword":
    case "TSStringKeyword":
    case "TSSymbolKeyword":
    case "TSUndefinedKeyword":
    case "TSUnknownKeyword":
    case "TSVoidKeyword":
    case "TSThisType":
    case "TSTemplateLiteralType":
    case "TSLiteralType":
      break;
    default:
      return false;
  }
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isNumberLiteral(node, opts) {
  (0, _deprecationWarning$2.default)("isNumberLiteral", "isNumericLiteral");
  if (!node) return false;
  if (node.type !== "NumberLiteral") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isRegexLiteral(node, opts) {
  (0, _deprecationWarning$2.default)("isRegexLiteral", "isRegExpLiteral");
  if (!node) return false;
  if (node.type !== "RegexLiteral") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isRestProperty(node, opts) {
  (0, _deprecationWarning$2.default)("isRestProperty", "isRestElement");
  if (!node) return false;
  if (node.type !== "RestProperty") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isSpreadProperty(node, opts) {
  (0, _deprecationWarning$2.default)("isSpreadProperty", "isSpreadElement");
  if (!node) return false;
  if (node.type !== "SpreadProperty") return false;
  return opts == null || (0, _shallowEqual.default)(node, opts);
}
function isModuleDeclaration(node, opts) {
  (0, _deprecationWarning$2.default)("isModuleDeclaration", "isImportOrExportDeclaration");
  return isImportOrExportDeclaration(node, opts);
}

Object.defineProperty(matchesPattern$1, "__esModule", {
  value: true
});
matchesPattern$1.default = matchesPattern;
var _index$v = generated$3;
function isMemberExpressionLike(node) {
  return (0, _index$v.isMemberExpression)(node) || (0, _index$v.isMetaProperty)(node);
}
function matchesPattern(member, match, allowPartial) {
  if (!isMemberExpressionLike(member)) return false;
  const parts = Array.isArray(match) ? match : match.split(".");
  const nodes = [];
  let node;
  for (node = member; isMemberExpressionLike(node); node = (_object = node.object) != null ? _object : node.meta) {
    var _object;
    nodes.push(node.property);
  }
  nodes.push(node);
  if (nodes.length < parts.length) return false;
  if (!allowPartial && nodes.length > parts.length) return false;
  for (let i = 0, j = nodes.length - 1; i < parts.length; i++, j--) {
    const node = nodes[j];
    let value;
    if ((0, _index$v.isIdentifier)(node)) {
      value = node.name;
    } else if ((0, _index$v.isStringLiteral)(node)) {
      value = node.value;
    } else if ((0, _index$v.isThisExpression)(node)) {
      value = "this";
    } else if ((0, _index$v.isSuper)(node)) {
      value = "super";
    } else if ((0, _index$v.isPrivateName)(node)) {
      value = "#" + node.id.name;
    } else {
      return false;
    }
    if (parts[i] !== value) return false;
  }
  return true;
}

Object.defineProperty(buildMatchMemberExpression$1, "__esModule", {
  value: true
});
buildMatchMemberExpression$1.default = buildMatchMemberExpression;
var _matchesPattern = matchesPattern$1;
function buildMatchMemberExpression(match, allowPartial) {
  const parts = match.split(".");
  return member => (0, _matchesPattern.default)(member, parts, allowPartial);
}

Object.defineProperty(isReactComponent$1, "__esModule", {
  value: true
});
isReactComponent$1.default = void 0;
var _buildMatchMemberExpression = buildMatchMemberExpression$1;
const isReactComponent = (0, _buildMatchMemberExpression.default)("React.Component");
isReactComponent$1.default = isReactComponent;

var isCompatTag$1 = {};

Object.defineProperty(isCompatTag$1, "__esModule", {
  value: true
});
isCompatTag$1.default = isCompatTag;
function isCompatTag(tagName) {
  return !!tagName && /^[a-z]/.test(tagName);
}

var buildChildren = {};

var cleanJSXElementLiteralChild = {};

var generated$2 = {};

var lowercase = {};

var validate$1 = {};

var definitions = {};

var core = {};

var is = {};

var isType = {};

var hasRequiredIsType;

function requireIsType () {
	if (hasRequiredIsType) return isType;
	hasRequiredIsType = 1;

	Object.defineProperty(isType, "__esModule", {
	  value: true
	});
	isType.default = isType$1;
	var _index = requireDefinitions();
	function isType$1(nodeType, targetType) {
	  if (nodeType === targetType) return true;
	  if (nodeType == null) return false;
	  if (_index.ALIAS_KEYS[targetType]) return false;
	  const aliases = _index.FLIPPED_ALIAS_KEYS[targetType];
	  if (aliases != null && aliases.includes(nodeType)) return true;
	  return false;
	}

	
	return isType;
}

var isPlaceholderType = {};

var hasRequiredIsPlaceholderType;

function requireIsPlaceholderType () {
	if (hasRequiredIsPlaceholderType) return isPlaceholderType;
	hasRequiredIsPlaceholderType = 1;

	Object.defineProperty(isPlaceholderType, "__esModule", {
	  value: true
	});
	isPlaceholderType.default = isPlaceholderType$1;
	var _index = requireDefinitions();
	function isPlaceholderType$1(placeholderType, targetType) {
	  if (placeholderType === targetType) return true;
	  const aliases = _index.PLACEHOLDERS_ALIAS[placeholderType];
	  if (aliases != null && aliases.includes(targetType)) return true;
	  return false;
	}

	
	return isPlaceholderType;
}

var hasRequiredIs;

function requireIs () {
	if (hasRequiredIs) return is;
	hasRequiredIs = 1;

	Object.defineProperty(is, "__esModule", {
	  value: true
	});
	is.default = is$1;
	var _shallowEqual = shallowEqual$1;
	var _isType = requireIsType();
	var _isPlaceholderType = requireIsPlaceholderType();
	var _index = requireDefinitions();
	function is$1(type, node, opts) {
	  if (!node) return false;
	  const matches = (0, _isType.default)(node.type, type);
	  if (!matches) {
	    if (!opts && node.type === "Placeholder" && type in _index.FLIPPED_ALIAS_KEYS) {
	      return (0, _isPlaceholderType.default)(node.expectedNode, type);
	    }
	    return false;
	  }
	  if (opts === undefined) {
	    return true;
	  } else {
	    return (0, _shallowEqual.default)(node, opts);
	  }
	}

	
	return is;
}

var isValidIdentifier$1 = {};

var lib$1 = {};

var identifier$1 = {};

Object.defineProperty(identifier$1, "__esModule", {
  value: true
});
identifier$1.isIdentifierChar = isIdentifierChar;
identifier$1.isIdentifierName = isIdentifierName;
identifier$1.isIdentifierStart = isIdentifierStart;
let nonASCIIidentifierStartChars = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u0870-\u0887\u0889-\u088e\u08a0-\u08c9\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c5d\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cdd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d04-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u1711\u171f-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4c\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c8a\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31bf\u31f0-\u31ff\u3400-\u4dbf\u4e00-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7cd\ua7d0\ua7d1\ua7d3\ua7d5-\ua7dc\ua7f2-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab69\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";
let nonASCIIidentifierChars = "\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u0897-\u089f\u08ca-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u09fe\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b55-\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c04\u0c3c\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0cf3\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d81-\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0ebc\u0ec8-\u0ece\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u180f-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1abf-\u1ace\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf4\u1cf7-\u1cf9\u1dc0-\u1dff\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\u30fb\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua82c\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua8ff-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f\uff65";
const nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
const nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;
const astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 2, 60, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 42, 9, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 496, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191];
const astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 80, 3, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 343, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 726, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
function isInAstralSet(code, set) {
  let pos = 0x10000;
  for (let i = 0, length = set.length; i < length; i += 2) {
    pos += set[i];
    if (pos > code) return false;
    pos += set[i + 1];
    if (pos >= code) return true;
  }
  return false;
}
function isIdentifierStart(code) {
  if (code < 65) return code === 36;
  if (code <= 90) return true;
  if (code < 97) return code === 95;
  if (code <= 122) return true;
  if (code <= 0xffff) {
    return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code));
  }
  return isInAstralSet(code, astralIdentifierStartCodes);
}
function isIdentifierChar(code) {
  if (code < 48) return code === 36;
  if (code < 58) return true;
  if (code < 65) return false;
  if (code <= 90) return true;
  if (code < 97) return code === 95;
  if (code <= 122) return true;
  if (code <= 0xffff) {
    return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code));
  }
  return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
}
function isIdentifierName(name) {
  let isFirst = true;
  for (let i = 0; i < name.length; i++) {
    let cp = name.charCodeAt(i);
    if ((cp & 0xfc00) === 0xd800 && i + 1 < name.length) {
      const trail = name.charCodeAt(++i);
      if ((trail & 0xfc00) === 0xdc00) {
        cp = 0x10000 + ((cp & 0x3ff) << 10) + (trail & 0x3ff);
      }
    }
    if (isFirst) {
      isFirst = false;
      if (!isIdentifierStart(cp)) {
        return false;
      }
    } else if (!isIdentifierChar(cp)) {
      return false;
    }
  }
  return !isFirst;
}

var keyword = {};

Object.defineProperty(keyword, "__esModule", {
  value: true
});
keyword.isKeyword = isKeyword;
keyword.isReservedWord = isReservedWord;
keyword.isStrictBindOnlyReservedWord = isStrictBindOnlyReservedWord;
keyword.isStrictBindReservedWord = isStrictBindReservedWord;
keyword.isStrictReservedWord = isStrictReservedWord;
const reservedWords = {
  keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"],
  strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
  strictBind: ["eval", "arguments"]
};
const keywords = new Set(reservedWords.keyword);
const reservedWordsStrictSet = new Set(reservedWords.strict);
const reservedWordsStrictBindSet = new Set(reservedWords.strictBind);
function isReservedWord(word, inModule) {
  return inModule && word === "await" || word === "enum";
}
function isStrictReservedWord(word, inModule) {
  return isReservedWord(word, inModule) || reservedWordsStrictSet.has(word);
}
function isStrictBindOnlyReservedWord(word) {
  return reservedWordsStrictBindSet.has(word);
}
function isStrictBindReservedWord(word, inModule) {
  return isStrictReservedWord(word, inModule) || isStrictBindOnlyReservedWord(word);
}
function isKeyword(word) {
  return keywords.has(word);
}

(function (exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	Object.defineProperty(exports, "isIdentifierChar", {
	  enumerable: true,
	  get: function () {
	    return _identifier.isIdentifierChar;
	  }
	});
	Object.defineProperty(exports, "isIdentifierName", {
	  enumerable: true,
	  get: function () {
	    return _identifier.isIdentifierName;
	  }
	});
	Object.defineProperty(exports, "isIdentifierStart", {
	  enumerable: true,
	  get: function () {
	    return _identifier.isIdentifierStart;
	  }
	});
	Object.defineProperty(exports, "isKeyword", {
	  enumerable: true,
	  get: function () {
	    return _keyword.isKeyword;
	  }
	});
	Object.defineProperty(exports, "isReservedWord", {
	  enumerable: true,
	  get: function () {
	    return _keyword.isReservedWord;
	  }
	});
	Object.defineProperty(exports, "isStrictBindOnlyReservedWord", {
	  enumerable: true,
	  get: function () {
	    return _keyword.isStrictBindOnlyReservedWord;
	  }
	});
	Object.defineProperty(exports, "isStrictBindReservedWord", {
	  enumerable: true,
	  get: function () {
	    return _keyword.isStrictBindReservedWord;
	  }
	});
	Object.defineProperty(exports, "isStrictReservedWord", {
	  enumerable: true,
	  get: function () {
	    return _keyword.isStrictReservedWord;
	  }
	});
	var _identifier = identifier$1;
	var _keyword = keyword;

	
} (lib$1));

Object.defineProperty(isValidIdentifier$1, "__esModule", {
  value: true
});
isValidIdentifier$1.default = isValidIdentifier;
var _helperValidatorIdentifier$1 = lib$1;
function isValidIdentifier(name, reserved = true) {
  if (typeof name !== "string") return false;
  if (reserved) {
    if ((0, _helperValidatorIdentifier$1.isKeyword)(name) || (0, _helperValidatorIdentifier$1.isStrictReservedWord)(name, true)) {
      return false;
    }
  }
  return (0, _helperValidatorIdentifier$1.isIdentifierName)(name);
}

var lib = {};

var hasRequiredLib$1;

function requireLib$1 () {
	if (hasRequiredLib$1) return lib;
	hasRequiredLib$1 = 1;

	Object.defineProperty(lib, "__esModule", {
	  value: true
	});
	lib.readCodePoint = readCodePoint;
	lib.readInt = readInt;
	lib.readStringContents = readStringContents;
	var _isDigit = function isDigit(code) {
	  return code >= 48 && code <= 57;
	};
	const forbiddenNumericSeparatorSiblings = {
	  decBinOct: new Set([46, 66, 69, 79, 95, 98, 101, 111]),
	  hex: new Set([46, 88, 95, 120])
	};
	const isAllowedNumericSeparatorSibling = {
	  bin: ch => ch === 48 || ch === 49,
	  oct: ch => ch >= 48 && ch <= 55,
	  dec: ch => ch >= 48 && ch <= 57,
	  hex: ch => ch >= 48 && ch <= 57 || ch >= 65 && ch <= 70 || ch >= 97 && ch <= 102
	};
	function readStringContents(type, input, pos, lineStart, curLine, errors) {
	  const initialPos = pos;
	  const initialLineStart = lineStart;
	  const initialCurLine = curLine;
	  let out = "";
	  let firstInvalidLoc = null;
	  let chunkStart = pos;
	  const {
	    length
	  } = input;
	  for (;;) {
	    if (pos >= length) {
	      errors.unterminated(initialPos, initialLineStart, initialCurLine);
	      out += input.slice(chunkStart, pos);
	      break;
	    }
	    const ch = input.charCodeAt(pos);
	    if (isStringEnd(type, ch, input, pos)) {
	      out += input.slice(chunkStart, pos);
	      break;
	    }
	    if (ch === 92) {
	      out += input.slice(chunkStart, pos);
	      const res = readEscapedChar(input, pos, lineStart, curLine, type === "template", errors);
	      if (res.ch === null && !firstInvalidLoc) {
	        firstInvalidLoc = {
	          pos,
	          lineStart,
	          curLine
	        };
	      } else {
	        out += res.ch;
	      }
	      ({
	        pos,
	        lineStart,
	        curLine
	      } = res);
	      chunkStart = pos;
	    } else if (ch === 8232 || ch === 8233) {
	      ++pos;
	      ++curLine;
	      lineStart = pos;
	    } else if (ch === 10 || ch === 13) {
	      if (type === "template") {
	        out += input.slice(chunkStart, pos) + "\n";
	        ++pos;
	        if (ch === 13 && input.charCodeAt(pos) === 10) {
	          ++pos;
	        }
	        ++curLine;
	        chunkStart = lineStart = pos;
	      } else {
	        errors.unterminated(initialPos, initialLineStart, initialCurLine);
	      }
	    } else {
	      ++pos;
	    }
	  }
	  return {
	    pos,
	    str: out,
	    firstInvalidLoc,
	    lineStart,
	    curLine,
	    containsInvalid: !!firstInvalidLoc
	  };
	}
	function isStringEnd(type, ch, input, pos) {
	  if (type === "template") {
	    return ch === 96 || ch === 36 && input.charCodeAt(pos + 1) === 123;
	  }
	  return ch === (type === "double" ? 34 : 39);
	}
	function readEscapedChar(input, pos, lineStart, curLine, inTemplate, errors) {
	  const throwOnInvalid = !inTemplate;
	  pos++;
	  const res = ch => ({
	    pos,
	    ch,
	    lineStart,
	    curLine
	  });
	  const ch = input.charCodeAt(pos++);
	  switch (ch) {
	    case 110:
	      return res("\n");
	    case 114:
	      return res("\r");
	    case 120:
	      {
	        let code;
	        ({
	          code,
	          pos
	        } = readHexChar(input, pos, lineStart, curLine, 2, false, throwOnInvalid, errors));
	        return res(code === null ? null : String.fromCharCode(code));
	      }
	    case 117:
	      {
	        let code;
	        ({
	          code,
	          pos
	        } = readCodePoint(input, pos, lineStart, curLine, throwOnInvalid, errors));
	        return res(code === null ? null : String.fromCodePoint(code));
	      }
	    case 116:
	      return res("\t");
	    case 98:
	      return res("\b");
	    case 118:
	      return res("\u000b");
	    case 102:
	      return res("\f");
	    case 13:
	      if (input.charCodeAt(pos) === 10) {
	        ++pos;
	      }
	    case 10:
	      lineStart = pos;
	      ++curLine;
	    case 8232:
	    case 8233:
	      return res("");
	    case 56:
	    case 57:
	      if (inTemplate) {
	        return res(null);
	      } else {
	        errors.strictNumericEscape(pos - 1, lineStart, curLine);
	      }
	    default:
	      if (ch >= 48 && ch <= 55) {
	        const startPos = pos - 1;
	        const match = /^[0-7]+/.exec(input.slice(startPos, pos + 2));
	        let octalStr = match[0];
	        let octal = parseInt(octalStr, 8);
	        if (octal > 255) {
	          octalStr = octalStr.slice(0, -1);
	          octal = parseInt(octalStr, 8);
	        }
	        pos += octalStr.length - 1;
	        const next = input.charCodeAt(pos);
	        if (octalStr !== "0" || next === 56 || next === 57) {
	          if (inTemplate) {
	            return res(null);
	          } else {
	            errors.strictNumericEscape(startPos, lineStart, curLine);
	          }
	        }
	        return res(String.fromCharCode(octal));
	      }
	      return res(String.fromCharCode(ch));
	  }
	}
	function readHexChar(input, pos, lineStart, curLine, len, forceLen, throwOnInvalid, errors) {
	  const initialPos = pos;
	  let n;
	  ({
	    n,
	    pos
	  } = readInt(input, pos, lineStart, curLine, 16, len, forceLen, false, errors, !throwOnInvalid));
	  if (n === null) {
	    if (throwOnInvalid) {
	      errors.invalidEscapeSequence(initialPos, lineStart, curLine);
	    } else {
	      pos = initialPos - 1;
	    }
	  }
	  return {
	    code: n,
	    pos
	  };
	}
	function readInt(input, pos, lineStart, curLine, radix, len, forceLen, allowNumSeparator, errors, bailOnError) {
	  const start = pos;
	  const forbiddenSiblings = radix === 16 ? forbiddenNumericSeparatorSiblings.hex : forbiddenNumericSeparatorSiblings.decBinOct;
	  const isAllowedSibling = radix === 16 ? isAllowedNumericSeparatorSibling.hex : radix === 10 ? isAllowedNumericSeparatorSibling.dec : radix === 8 ? isAllowedNumericSeparatorSibling.oct : isAllowedNumericSeparatorSibling.bin;
	  let invalid = false;
	  let total = 0;
	  for (let i = 0, e = len == null ? Infinity : len; i < e; ++i) {
	    const code = input.charCodeAt(pos);
	    let val;
	    if (code === 95 && allowNumSeparator !== "bail") {
	      const prev = input.charCodeAt(pos - 1);
	      const next = input.charCodeAt(pos + 1);
	      if (!allowNumSeparator) {
	        if (bailOnError) return {
	          n: null,
	          pos
	        };
	        errors.numericSeparatorInEscapeSequence(pos, lineStart, curLine);
	      } else if (Number.isNaN(next) || !isAllowedSibling(next) || forbiddenSiblings.has(prev) || forbiddenSiblings.has(next)) {
	        if (bailOnError) return {
	          n: null,
	          pos
	        };
	        errors.unexpectedNumericSeparator(pos, lineStart, curLine);
	      }
	      ++pos;
	      continue;
	    }
	    if (code >= 97) {
	      val = code - 97 + 10;
	    } else if (code >= 65) {
	      val = code - 65 + 10;
	    } else if (_isDigit(code)) {
	      val = code - 48;
	    } else {
	      val = Infinity;
	    }
	    if (val >= radix) {
	      if (val <= 9 && bailOnError) {
	        return {
	          n: null,
	          pos
	        };
	      } else if (val <= 9 && errors.invalidDigit(pos, lineStart, curLine, radix)) {
	        val = 0;
	      } else if (forceLen) {
	        val = 0;
	        invalid = true;
	      } else {
	        break;
	      }
	    }
	    ++pos;
	    total = total * radix + val;
	  }
	  if (pos === start || len != null && pos - start !== len || invalid) {
	    return {
	      n: null,
	      pos
	    };
	  }
	  return {
	    n: total,
	    pos
	  };
	}
	function readCodePoint(input, pos, lineStart, curLine, throwOnInvalid, errors) {
	  const ch = input.charCodeAt(pos);
	  let code;
	  if (ch === 123) {
	    ++pos;
	    ({
	      code,
	      pos
	    } = readHexChar(input, pos, lineStart, curLine, input.indexOf("}", pos) - pos, true, throwOnInvalid, errors));
	    ++pos;
	    if (code !== null && code > 0x10ffff) {
	      if (throwOnInvalid) {
	        errors.invalidCodePoint(pos, lineStart, curLine);
	      } else {
	        return {
	          code: null,
	          pos
	        };
	      }
	    }
	  } else {
	    ({
	      code,
	      pos
	    } = readHexChar(input, pos, lineStart, curLine, 4, false, throwOnInvalid, errors));
	  }
	  return {
	    code,
	    pos
	  };
	}

	
	return lib;
}

var constants = {};

Object.defineProperty(constants, "__esModule", {
  value: true
});
constants.UPDATE_OPERATORS = constants.UNARY_OPERATORS = constants.STRING_UNARY_OPERATORS = constants.STATEMENT_OR_BLOCK_KEYS = constants.NUMBER_UNARY_OPERATORS = constants.NUMBER_BINARY_OPERATORS = constants.LOGICAL_OPERATORS = constants.INHERIT_KEYS = constants.FOR_INIT_KEYS = constants.FLATTENABLE_KEYS = constants.EQUALITY_BINARY_OPERATORS = constants.COMPARISON_BINARY_OPERATORS = constants.COMMENT_KEYS = constants.BOOLEAN_UNARY_OPERATORS = constants.BOOLEAN_NUMBER_BINARY_OPERATORS = constants.BOOLEAN_BINARY_OPERATORS = constants.BINARY_OPERATORS = constants.ASSIGNMENT_OPERATORS = void 0;
constants.STATEMENT_OR_BLOCK_KEYS = ["consequent", "body", "alternate"];
constants.FLATTENABLE_KEYS = ["body", "expressions"];
constants.FOR_INIT_KEYS = ["left", "init"];
constants.COMMENT_KEYS = ["leadingComments", "trailingComments", "innerComments"];
const LOGICAL_OPERATORS = constants.LOGICAL_OPERATORS = ["||", "&&", "??"];
constants.UPDATE_OPERATORS = ["++", "--"];
const BOOLEAN_NUMBER_BINARY_OPERATORS = constants.BOOLEAN_NUMBER_BINARY_OPERATORS = [">", "<", ">=", "<="];
const EQUALITY_BINARY_OPERATORS = constants.EQUALITY_BINARY_OPERATORS = ["==", "===", "!=", "!=="];
const COMPARISON_BINARY_OPERATORS = constants.COMPARISON_BINARY_OPERATORS = [...EQUALITY_BINARY_OPERATORS, "in", "instanceof"];
const BOOLEAN_BINARY_OPERATORS = constants.BOOLEAN_BINARY_OPERATORS = [...COMPARISON_BINARY_OPERATORS, ...BOOLEAN_NUMBER_BINARY_OPERATORS];
const NUMBER_BINARY_OPERATORS = constants.NUMBER_BINARY_OPERATORS = ["-", "/", "%", "*", "**", "&", "|", ">>", ">>>", "<<", "^"];
constants.BINARY_OPERATORS = ["+", ...NUMBER_BINARY_OPERATORS, ...BOOLEAN_BINARY_OPERATORS, "|>"];
constants.ASSIGNMENT_OPERATORS = ["=", "+=", ...NUMBER_BINARY_OPERATORS.map(op => op + "="), ...LOGICAL_OPERATORS.map(op => op + "=")];
const BOOLEAN_UNARY_OPERATORS = constants.BOOLEAN_UNARY_OPERATORS = ["delete", "!"];
const NUMBER_UNARY_OPERATORS = constants.NUMBER_UNARY_OPERATORS = ["+", "-", "~"];
const STRING_UNARY_OPERATORS = constants.STRING_UNARY_OPERATORS = ["typeof"];
constants.UNARY_OPERATORS = ["void", "throw", ...BOOLEAN_UNARY_OPERATORS, ...NUMBER_UNARY_OPERATORS, ...STRING_UNARY_OPERATORS];
constants.INHERIT_KEYS = {
  optional: ["typeAnnotation", "typeParameters", "returnType"],
  force: ["start", "loc", "end"]
};
{
  constants.BLOCK_SCOPED_SYMBOL = Symbol.for("var used to be block scoped");
  constants.NOT_LOCAL_BINDING = Symbol.for("should not be considered a local binding");
}

var utils$1 = {};

var hasRequiredUtils;

function requireUtils () {
	if (hasRequiredUtils) return utils$1;
	hasRequiredUtils = 1;

	Object.defineProperty(utils$1, "__esModule", {
	  value: true
	});
	utils$1.allExpandedTypes = utils$1.VISITOR_KEYS = utils$1.NODE_PARENT_VALIDATIONS = utils$1.NODE_FIELDS = utils$1.FLIPPED_ALIAS_KEYS = utils$1.DEPRECATED_KEYS = utils$1.BUILDER_KEYS = utils$1.ALIAS_KEYS = void 0;
	utils$1.arrayOf = arrayOf;
	utils$1.arrayOfType = arrayOfType;
	utils$1.assertEach = assertEach;
	utils$1.assertNodeOrValueType = assertNodeOrValueType;
	utils$1.assertNodeType = assertNodeType;
	utils$1.assertOneOf = assertOneOf;
	utils$1.assertOptionalChainStart = assertOptionalChainStart;
	utils$1.assertShape = assertShape;
	utils$1.assertValueType = assertValueType;
	utils$1.chain = chain;
	utils$1.default = defineType;
	utils$1.defineAliasedType = defineAliasedType;
	utils$1.validate = validate;
	utils$1.validateArrayOfType = validateArrayOfType;
	utils$1.validateOptional = validateOptional;
	utils$1.validateOptionalType = validateOptionalType;
	utils$1.validateType = validateType;
	var _is = requireIs();
	var _validate = requireValidate();
	const VISITOR_KEYS = utils$1.VISITOR_KEYS = {};
	const ALIAS_KEYS = utils$1.ALIAS_KEYS = {};
	const FLIPPED_ALIAS_KEYS = utils$1.FLIPPED_ALIAS_KEYS = {};
	const NODE_FIELDS = utils$1.NODE_FIELDS = {};
	const BUILDER_KEYS = utils$1.BUILDER_KEYS = {};
	const DEPRECATED_KEYS = utils$1.DEPRECATED_KEYS = {};
	const NODE_PARENT_VALIDATIONS = utils$1.NODE_PARENT_VALIDATIONS = {};
	function getType(val) {
	  if (Array.isArray(val)) {
	    return "array";
	  } else if (val === null) {
	    return "null";
	  } else {
	    return typeof val;
	  }
	}
	function validate(validate) {
	  return {
	    validate
	  };
	}
	function validateType(...typeNames) {
	  return validate(assertNodeType(...typeNames));
	}
	function validateOptional(validate) {
	  return {
	    validate,
	    optional: true
	  };
	}
	function validateOptionalType(...typeNames) {
	  return {
	    validate: assertNodeType(...typeNames),
	    optional: true
	  };
	}
	function arrayOf(elementType) {
	  return chain(assertValueType("array"), assertEach(elementType));
	}
	function arrayOfType(...typeNames) {
	  return arrayOf(assertNodeType(...typeNames));
	}
	function validateArrayOfType(...typeNames) {
	  return validate(arrayOfType(...typeNames));
	}
	function assertEach(callback) {
	  const childValidator = process.env.BABEL_TYPES_8_BREAKING ? _validate.validateChild : () => {};
	  function validator(node, key, val) {
	    if (!Array.isArray(val)) return;
	    let i = 0;
	    const subKey = {
	      toString() {
	        return `${key}[${i}]`;
	      }
	    };
	    for (; i < val.length; i++) {
	      const v = val[i];
	      callback(node, subKey, v);
	      childValidator(node, subKey, v);
	    }
	  }
	  validator.each = callback;
	  return validator;
	}
	function assertOneOf(...values) {
	  function validate(node, key, val) {
	    if (!values.includes(val)) {
	      throw new TypeError(`Property ${key} expected value to be one of ${JSON.stringify(values)} but got ${JSON.stringify(val)}`);
	    }
	  }
	  validate.oneOf = values;
	  return validate;
	}
	const allExpandedTypes = utils$1.allExpandedTypes = [];
	function assertNodeType(...types) {
	  const expandedTypes = new Set();
	  allExpandedTypes.push({
	    types,
	    set: expandedTypes
	  });
	  function validate(node, key, val) {
	    const valType = val == null ? void 0 : val.type;
	    if (valType != null) {
	      if (expandedTypes.has(valType)) {
	        (0, _validate.validateChild)(node, key, val);
	        return;
	      }
	      if (valType === "Placeholder") {
	        for (const type of types) {
	          if ((0, _is.default)(type, val)) {
	            (0, _validate.validateChild)(node, key, val);
	            return;
	          }
	        }
	      }
	    }
	    throw new TypeError(`Property ${key} of ${node.type} expected node to be of a type ${JSON.stringify(types)} but instead got ${JSON.stringify(valType)}`);
	  }
	  validate.oneOfNodeTypes = types;
	  return validate;
	}
	function assertNodeOrValueType(...types) {
	  function validate(node, key, val) {
	    const primitiveType = getType(val);
	    for (const type of types) {
	      if (primitiveType === type || (0, _is.default)(type, val)) {
	        (0, _validate.validateChild)(node, key, val);
	        return;
	      }
	    }
	    throw new TypeError(`Property ${key} of ${node.type} expected node to be of a type ${JSON.stringify(types)} but instead got ${JSON.stringify(val == null ? void 0 : val.type)}`);
	  }
	  validate.oneOfNodeOrValueTypes = types;
	  return validate;
	}
	function assertValueType(type) {
	  function validate(node, key, val) {
	    if (getType(val) === type) {
	      return;
	    }
	    throw new TypeError(`Property ${key} expected type of ${type} but got ${getType(val)}`);
	  }
	  validate.type = type;
	  return validate;
	}
	function assertShape(shape) {
	  const keys = Object.keys(shape);
	  function validate(node, key, val) {
	    const errors = [];
	    for (const property of keys) {
	      try {
	        (0, _validate.validateField)(node, property, val[property], shape[property]);
	      } catch (error) {
	        if (error instanceof TypeError) {
	          errors.push(error.message);
	          continue;
	        }
	        throw error;
	      }
	    }
	    if (errors.length) {
	      throw new TypeError(`Property ${key} of ${node.type} expected to have the following:\n${errors.join("\n")}`);
	    }
	  }
	  validate.shapeOf = shape;
	  return validate;
	}
	function assertOptionalChainStart() {
	  function validate(node) {
	    var _current;
	    let current = node;
	    while (node) {
	      const {
	        type
	      } = current;
	      if (type === "OptionalCallExpression") {
	        if (current.optional) return;
	        current = current.callee;
	        continue;
	      }
	      if (type === "OptionalMemberExpression") {
	        if (current.optional) return;
	        current = current.object;
	        continue;
	      }
	      break;
	    }
	    throw new TypeError(`Non-optional ${node.type} must chain from an optional OptionalMemberExpression or OptionalCallExpression. Found chain from ${(_current = current) == null ? void 0 : _current.type}`);
	  }
	  return validate;
	}
	function chain(...fns) {
	  function validate(...args) {
	    for (const fn of fns) {
	      fn(...args);
	    }
	  }
	  validate.chainOf = fns;
	  if (fns.length >= 2 && "type" in fns[0] && fns[0].type === "array" && !("each" in fns[1])) {
	    throw new Error(`An assertValueType("array") validator can only be followed by an assertEach(...) validator.`);
	  }
	  return validate;
	}
	const validTypeOpts = new Set(["aliases", "builder", "deprecatedAlias", "fields", "inherits", "visitor", "validate"]);
	const validFieldKeys = new Set(["default", "optional", "deprecated", "validate"]);
	const store = {};
	function defineAliasedType(...aliases) {
	  return (type, opts = {}) => {
	    let defined = opts.aliases;
	    if (!defined) {
	      var _store$opts$inherits$;
	      if (opts.inherits) defined = (_store$opts$inherits$ = store[opts.inherits].aliases) == null ? void 0 : _store$opts$inherits$.slice();
	      defined != null ? defined : defined = [];
	      opts.aliases = defined;
	    }
	    const additional = aliases.filter(a => !defined.includes(a));
	    defined.unshift(...additional);
	    defineType(type, opts);
	  };
	}
	function defineType(type, opts = {}) {
	  const inherits = opts.inherits && store[opts.inherits] || {};
	  let fields = opts.fields;
	  if (!fields) {
	    fields = {};
	    if (inherits.fields) {
	      const keys = Object.getOwnPropertyNames(inherits.fields);
	      for (const key of keys) {
	        const field = inherits.fields[key];
	        const def = field.default;
	        if (Array.isArray(def) ? def.length > 0 : def && typeof def === "object") {
	          throw new Error("field defaults can only be primitives or empty arrays currently");
	        }
	        fields[key] = {
	          default: Array.isArray(def) ? [] : def,
	          optional: field.optional,
	          deprecated: field.deprecated,
	          validate: field.validate
	        };
	      }
	    }
	  }
	  const visitor = opts.visitor || inherits.visitor || [];
	  const aliases = opts.aliases || inherits.aliases || [];
	  const builder = opts.builder || inherits.builder || opts.visitor || [];
	  for (const k of Object.keys(opts)) {
	    if (!validTypeOpts.has(k)) {
	      throw new Error(`Unknown type option "${k}" on ${type}`);
	    }
	  }
	  if (opts.deprecatedAlias) {
	    DEPRECATED_KEYS[opts.deprecatedAlias] = type;
	  }
	  for (const key of visitor.concat(builder)) {
	    fields[key] = fields[key] || {};
	  }
	  for (const key of Object.keys(fields)) {
	    const field = fields[key];
	    if (field.default !== undefined && !builder.includes(key)) {
	      field.optional = true;
	    }
	    if (field.default === undefined) {
	      field.default = null;
	    } else if (!field.validate && field.default != null) {
	      field.validate = assertValueType(getType(field.default));
	    }
	    for (const k of Object.keys(field)) {
	      if (!validFieldKeys.has(k)) {
	        throw new Error(`Unknown field key "${k}" on ${type}.${key}`);
	      }
	    }
	  }
	  VISITOR_KEYS[type] = opts.visitor = visitor;
	  BUILDER_KEYS[type] = opts.builder = builder;
	  NODE_FIELDS[type] = opts.fields = fields;
	  ALIAS_KEYS[type] = opts.aliases = aliases;
	  aliases.forEach(alias => {
	    FLIPPED_ALIAS_KEYS[alias] = FLIPPED_ALIAS_KEYS[alias] || [];
	    FLIPPED_ALIAS_KEYS[alias].push(type);
	  });
	  if (opts.validate) {
	    NODE_PARENT_VALIDATIONS[type] = opts.validate;
	  }
	  store[type] = opts;
	}

	
	return utils$1;
}

var hasRequiredCore;

function requireCore () {
	if (hasRequiredCore) return core;
	hasRequiredCore = 1;

	Object.defineProperty(core, "__esModule", {
	  value: true
	});
	core.patternLikeCommon = core.importAttributes = core.functionTypeAnnotationCommon = core.functionDeclarationCommon = core.functionCommon = core.classMethodOrPropertyCommon = core.classMethodOrDeclareMethodCommon = void 0;
	var _is = requireIs();
	var _isValidIdentifier = isValidIdentifier$1;
	var _helperValidatorIdentifier = lib$1;
	var _helperStringParser = requireLib$1();
	var _index = constants;
	var _utils = requireUtils();
	const defineType = (0, _utils.defineAliasedType)("Standardized");
	defineType("ArrayExpression", {
	  fields: {
	    elements: {
	      validate: (0, _utils.arrayOf)((0, _utils.assertNodeOrValueType)("null", "Expression", "SpreadElement")),
	      default: !process.env.BABEL_TYPES_8_BREAKING ? [] : undefined
	    }
	  },
	  visitor: ["elements"],
	  aliases: ["Expression"]
	});
	defineType("AssignmentExpression", {
	  fields: {
	    operator: {
	      validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertValueType)("string") : Object.assign(function () {
	        const identifier = (0, _utils.assertOneOf)(..._index.ASSIGNMENT_OPERATORS);
	        const pattern = (0, _utils.assertOneOf)("=");
	        return function (node, key, val) {
	          const validator = (0, _is.default)("Pattern", node.left) ? pattern : identifier;
	          validator(node, key, val);
	        };
	      }(), {
	        oneOf: _index.ASSIGNMENT_OPERATORS
	      })
	    },
	    left: {
	      validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertNodeType)("LVal", "OptionalMemberExpression") : (0, _utils.assertNodeType)("Identifier", "MemberExpression", "OptionalMemberExpression", "ArrayPattern", "ObjectPattern", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression")
	    },
	    right: {
	      validate: (0, _utils.assertNodeType)("Expression")
	    }
	  },
	  builder: ["operator", "left", "right"],
	  visitor: ["left", "right"],
	  aliases: ["Expression"]
	});
	defineType("BinaryExpression", {
	  builder: ["operator", "left", "right"],
	  fields: {
	    operator: {
	      validate: (0, _utils.assertOneOf)(..._index.BINARY_OPERATORS)
	    },
	    left: {
	      validate: function () {
	        const expression = (0, _utils.assertNodeType)("Expression");
	        const inOp = (0, _utils.assertNodeType)("Expression", "PrivateName");
	        const validator = Object.assign(function (node, key, val) {
	          const validator = node.operator === "in" ? inOp : expression;
	          validator(node, key, val);
	        }, {
	          oneOfNodeTypes: ["Expression", "PrivateName"]
	        });
	        return validator;
	      }()
	    },
	    right: {
	      validate: (0, _utils.assertNodeType)("Expression")
	    }
	  },
	  visitor: ["left", "right"],
	  aliases: ["Binary", "Expression"]
	});
	defineType("InterpreterDirective", {
	  builder: ["value"],
	  fields: {
	    value: {
	      validate: (0, _utils.assertValueType)("string")
	    }
	  }
	});
	defineType("Directive", {
	  visitor: ["value"],
	  fields: {
	    value: {
	      validate: (0, _utils.assertNodeType)("DirectiveLiteral")
	    }
	  }
	});
	defineType("DirectiveLiteral", {
	  builder: ["value"],
	  fields: {
	    value: {
	      validate: (0, _utils.assertValueType)("string")
	    }
	  }
	});
	defineType("BlockStatement", {
	  builder: ["body", "directives"],
	  visitor: ["directives", "body"],
	  fields: {
	    directives: {
	      validate: (0, _utils.arrayOfType)("Directive"),
	      default: []
	    },
	    body: (0, _utils.validateArrayOfType)("Statement")
	  },
	  aliases: ["Scopable", "BlockParent", "Block", "Statement"]
	});
	defineType("BreakStatement", {
	  visitor: ["label"],
	  fields: {
	    label: {
	      validate: (0, _utils.assertNodeType)("Identifier"),
	      optional: true
	    }
	  },
	  aliases: ["Statement", "Terminatorless", "CompletionStatement"]
	});
	defineType("CallExpression", {
	  visitor: ["callee", "typeParameters", "typeArguments", "arguments"],
	  builder: ["callee", "arguments"],
	  aliases: ["Expression"],
	  fields: Object.assign({
	    callee: {
	      validate: (0, _utils.assertNodeType)("Expression", "Super", "V8IntrinsicIdentifier")
	    },
	    arguments: (0, _utils.validateArrayOfType)("Expression", "SpreadElement", "ArgumentPlaceholder"),
	    typeArguments: {
	      validate: (0, _utils.assertNodeType)("TypeParameterInstantiation"),
	      optional: true
	    }
	  }, process.env.BABEL_TYPES_8_BREAKING ? {} : {
	    optional: {
	      validate: (0, _utils.assertValueType)("boolean"),
	      optional: true
	    },
	    typeParameters: {
	      validate: (0, _utils.assertNodeType)("TSTypeParameterInstantiation"),
	      optional: true
	    }
	  })
	});
	defineType("CatchClause", {
	  visitor: ["param", "body"],
	  fields: {
	    param: {
	      validate: (0, _utils.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern"),
	      optional: true
	    },
	    body: {
	      validate: (0, _utils.assertNodeType)("BlockStatement")
	    }
	  },
	  aliases: ["Scopable", "BlockParent"]
	});
	defineType("ConditionalExpression", {
	  visitor: ["test", "consequent", "alternate"],
	  fields: {
	    test: {
	      validate: (0, _utils.assertNodeType)("Expression")
	    },
	    consequent: {
	      validate: (0, _utils.assertNodeType)("Expression")
	    },
	    alternate: {
	      validate: (0, _utils.assertNodeType)("Expression")
	    }
	  },
	  aliases: ["Expression", "Conditional"]
	});
	defineType("ContinueStatement", {
	  visitor: ["label"],
	  fields: {
	    label: {
	      validate: (0, _utils.assertNodeType)("Identifier"),
	      optional: true
	    }
	  },
	  aliases: ["Statement", "Terminatorless", "CompletionStatement"]
	});
	defineType("DebuggerStatement", {
	  aliases: ["Statement"]
	});
	defineType("DoWhileStatement", {
	  builder: ["test", "body"],
	  visitor: ["body", "test"],
	  fields: {
	    test: {
	      validate: (0, _utils.assertNodeType)("Expression")
	    },
	    body: {
	      validate: (0, _utils.assertNodeType)("Statement")
	    }
	  },
	  aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"]
	});
	defineType("EmptyStatement", {
	  aliases: ["Statement"]
	});
	defineType("ExpressionStatement", {
	  visitor: ["expression"],
	  fields: {
	    expression: {
	      validate: (0, _utils.assertNodeType)("Expression")
	    }
	  },
	  aliases: ["Statement", "ExpressionWrapper"]
	});
	defineType("File", {
	  builder: ["program", "comments", "tokens"],
	  visitor: ["program"],
	  fields: {
	    program: {
	      validate: (0, _utils.assertNodeType)("Program")
	    },
	    comments: {
	      validate: !process.env.BABEL_TYPES_8_BREAKING ? Object.assign(() => {}, {
	        each: {
	          oneOfNodeTypes: ["CommentBlock", "CommentLine"]
	        }
	      }) : (0, _utils.assertEach)((0, _utils.assertNodeType)("CommentBlock", "CommentLine")),
	      optional: true
	    },
	    tokens: {
	      validate: (0, _utils.assertEach)(Object.assign(() => {}, {
	        type: "any"
	      })),
	      optional: true
	    }
	  }
	});
	defineType("ForInStatement", {
	  visitor: ["left", "right", "body"],
	  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
	  fields: {
	    left: {
	      validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertNodeType)("VariableDeclaration", "LVal") : (0, _utils.assertNodeType)("VariableDeclaration", "Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression")
	    },
	    right: {
	      validate: (0, _utils.assertNodeType)("Expression")
	    },
	    body: {
	      validate: (0, _utils.assertNodeType)("Statement")
	    }
	  }
	});
	defineType("ForStatement", {
	  visitor: ["init", "test", "update", "body"],
	  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop"],
	  fields: {
	    init: {
	      validate: (0, _utils.assertNodeType)("VariableDeclaration", "Expression"),
	      optional: true
	    },
	    test: {
	      validate: (0, _utils.assertNodeType)("Expression"),
	      optional: true
	    },
	    update: {
	      validate: (0, _utils.assertNodeType)("Expression"),
	      optional: true
	    },
	    body: {
	      validate: (0, _utils.assertNodeType)("Statement")
	    }
	  }
	});
	const functionCommon = () => ({
	  params: (0, _utils.validateArrayOfType)("FunctionParameter"),
	  generator: {
	    default: false
	  },
	  async: {
	    default: false
	  }
	});
	core.functionCommon = functionCommon;
	const functionTypeAnnotationCommon = () => ({
	  returnType: {
	    validate: (0, _utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
	    optional: true
	  },
	  typeParameters: {
	    validate: (0, _utils.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
	    optional: true
	  }
	});
	core.functionTypeAnnotationCommon = functionTypeAnnotationCommon;
	const functionDeclarationCommon = () => Object.assign({}, functionCommon(), {
	  declare: {
	    validate: (0, _utils.assertValueType)("boolean"),
	    optional: true
	  },
	  id: {
	    validate: (0, _utils.assertNodeType)("Identifier"),
	    optional: true
	  }
	});
	core.functionDeclarationCommon = functionDeclarationCommon;
	defineType("FunctionDeclaration", {
	  builder: ["id", "params", "body", "generator", "async"],
	  visitor: ["id", "typeParameters", "params", "predicate", "returnType", "body"],
	  fields: Object.assign({}, functionDeclarationCommon(), functionTypeAnnotationCommon(), {
	    body: {
	      validate: (0, _utils.assertNodeType)("BlockStatement")
	    },
	    predicate: {
	      validate: (0, _utils.assertNodeType)("DeclaredPredicate", "InferredPredicate"),
	      optional: true
	    }
	  }),
	  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Statement", "Pureish", "Declaration"],
	  validate: !process.env.BABEL_TYPES_8_BREAKING ? undefined : function () {
	    const identifier = (0, _utils.assertNodeType)("Identifier");
	    return function (parent, key, node) {
	      if (!(0, _is.default)("ExportDefaultDeclaration", parent)) {
	        identifier(node, "id", node.id);
	      }
	    };
	  }()
	});
	defineType("FunctionExpression", {
	  inherits: "FunctionDeclaration",
	  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
	  fields: Object.assign({}, functionCommon(), functionTypeAnnotationCommon(), {
	    id: {
	      validate: (0, _utils.assertNodeType)("Identifier"),
	      optional: true
	    },
	    body: {
	      validate: (0, _utils.assertNodeType)("BlockStatement")
	    },
	    predicate: {
	      validate: (0, _utils.assertNodeType)("DeclaredPredicate", "InferredPredicate"),
	      optional: true
	    }
	  })
	});
	const patternLikeCommon = () => ({
	  typeAnnotation: {
	    validate: (0, _utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
	    optional: true
	  },
	  optional: {
	    validate: (0, _utils.assertValueType)("boolean"),
	    optional: true
	  },
	  decorators: {
	    validate: (0, _utils.arrayOfType)("Decorator"),
	    optional: true
	  }
	});
	core.patternLikeCommon = patternLikeCommon;
	defineType("Identifier", {
	  builder: ["name"],
	  visitor: ["typeAnnotation", "decorators"],
	  aliases: ["Expression", "FunctionParameter", "PatternLike", "LVal", "TSEntityName"],
	  fields: Object.assign({}, patternLikeCommon(), {
	    name: {
	      validate: process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.chain)((0, _utils.assertValueType)("string"), Object.assign(function (node, key, val) {
	        if (!(0, _isValidIdentifier.default)(val, false)) {
	          throw new TypeError(`"${val}" is not a valid identifier name`);
	        }
	      }, {
	        type: "string"
	      })) : (0, _utils.assertValueType)("string")
	    }
	  }),
	  validate: process.env.BABEL_TYPES_8_BREAKING ? function (parent, key, node) {
	    const match = /\.(\w+)$/.exec(key.toString());
	    if (!match) return;
	    const [, parentKey] = match;
	    const nonComp = {
	      computed: false
	    };
	    if (parentKey === "property") {
	      if ((0, _is.default)("MemberExpression", parent, nonComp)) return;
	      if ((0, _is.default)("OptionalMemberExpression", parent, nonComp)) return;
	    } else if (parentKey === "key") {
	      if ((0, _is.default)("Property", parent, nonComp)) return;
	      if ((0, _is.default)("Method", parent, nonComp)) return;
	    } else if (parentKey === "exported") {
	      if ((0, _is.default)("ExportSpecifier", parent)) return;
	    } else if (parentKey === "imported") {
	      if ((0, _is.default)("ImportSpecifier", parent, {
	        imported: node
	      })) return;
	    } else if (parentKey === "meta") {
	      if ((0, _is.default)("MetaProperty", parent, {
	        meta: node
	      })) return;
	    }
	    if (((0, _helperValidatorIdentifier.isKeyword)(node.name) || (0, _helperValidatorIdentifier.isReservedWord)(node.name, false)) && node.name !== "this") {
	      throw new TypeError(`"${node.name}" is not a valid identifier`);
	    }
	  } : undefined
	});
	defineType("IfStatement", {
	  visitor: ["test", "consequent", "alternate"],
	  aliases: ["Statement", "Conditional"],
	  fields: {
	    test: {
	      validate: (0, _utils.assertNodeType)("Expression")
	    },
	    consequent: {
	      validate: (0, _utils.assertNodeType)("Statement")
	    },
	    alternate: {
	      optional: true,
	      validate: (0, _utils.assertNodeType)("Statement")
	    }
	  }
	});
	defineType("LabeledStatement", {
	  visitor: ["label", "body"],
	  aliases: ["Statement"],
	  fields: {
	    label: {
	      validate: (0, _utils.assertNodeType)("Identifier")
	    },
	    body: {
	      validate: (0, _utils.assertNodeType)("Statement")
	    }
	  }
	});
	defineType("StringLiteral", {
	  builder: ["value"],
	  fields: {
	    value: {
	      validate: (0, _utils.assertValueType)("string")
	    }
	  },
	  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
	});
	defineType("NumericLiteral", {
	  builder: ["value"],
	  deprecatedAlias: "NumberLiteral",
	  fields: {
	    value: {
	      validate: (0, _utils.chain)((0, _utils.assertValueType)("number"), Object.assign(function (node, key, val) {
	      }, {
	        type: "number"
	      }))
	    }
	  },
	  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
	});
	defineType("NullLiteral", {
	  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
	});
	defineType("BooleanLiteral", {
	  builder: ["value"],
	  fields: {
	    value: {
	      validate: (0, _utils.assertValueType)("boolean")
	    }
	  },
	  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
	});
	defineType("RegExpLiteral", {
	  builder: ["pattern", "flags"],
	  deprecatedAlias: "RegexLiteral",
	  aliases: ["Expression", "Pureish", "Literal"],
	  fields: {
	    pattern: {
	      validate: (0, _utils.assertValueType)("string")
	    },
	    flags: {
	      validate: process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.chain)((0, _utils.assertValueType)("string"), Object.assign(function (node, key, val) {
	        const invalid = /[^gimsuy]/.exec(val);
	        if (invalid) {
	          throw new TypeError(`"${invalid[0]}" is not a valid RegExp flag`);
	        }
	      }, {
	        type: "string"
	      })) : (0, _utils.assertValueType)("string"),
	      default: ""
	    }
	  }
	});
	defineType("LogicalExpression", {
	  builder: ["operator", "left", "right"],
	  visitor: ["left", "right"],
	  aliases: ["Binary", "Expression"],
	  fields: {
	    operator: {
	      validate: (0, _utils.assertOneOf)(..._index.LOGICAL_OPERATORS)
	    },
	    left: {
	      validate: (0, _utils.assertNodeType)("Expression")
	    },
	    right: {
	      validate: (0, _utils.assertNodeType)("Expression")
	    }
	  }
	});
	defineType("MemberExpression", {
	  builder: ["object", "property", "computed", ...(!process.env.BABEL_TYPES_8_BREAKING ? ["optional"] : [])],
	  visitor: ["object", "property"],
	  aliases: ["Expression", "LVal", "PatternLike"],
	  fields: Object.assign({
	    object: {
	      validate: (0, _utils.assertNodeType)("Expression", "Super")
	    },
	    property: {
	      validate: function () {
	        const normal = (0, _utils.assertNodeType)("Identifier", "PrivateName");
	        const computed = (0, _utils.assertNodeType)("Expression");
	        const validator = function (node, key, val) {
	          const validator = node.computed ? computed : normal;
	          validator(node, key, val);
	        };
	        validator.oneOfNodeTypes = ["Expression", "Identifier", "PrivateName"];
	        return validator;
	      }()
	    },
	    computed: {
	      default: false
	    }
	  }, !process.env.BABEL_TYPES_8_BREAKING ? {
	    optional: {
	      validate: (0, _utils.assertValueType)("boolean"),
	      optional: true
	    }
	  } : {})
	});
	defineType("NewExpression", {
	  inherits: "CallExpression"
	});
	defineType("Program", {
	  visitor: ["directives", "body"],
	  builder: ["body", "directives", "sourceType", "interpreter"],
	  fields: {
	    sourceType: {
	      validate: (0, _utils.assertOneOf)("script", "module"),
	      default: "script"
	    },
	    interpreter: {
	      validate: (0, _utils.assertNodeType)("InterpreterDirective"),
	      default: null,
	      optional: true
	    },
	    directives: {
	      validate: (0, _utils.arrayOfType)("Directive"),
	      default: []
	    },
	    body: (0, _utils.validateArrayOfType)("Statement")
	  },
	  aliases: ["Scopable", "BlockParent", "Block"]
	});
	defineType("ObjectExpression", {
	  visitor: ["properties"],
	  aliases: ["Expression"],
	  fields: {
	    properties: (0, _utils.validateArrayOfType)("ObjectMethod", "ObjectProperty", "SpreadElement")
	  }
	});
	defineType("ObjectMethod", {
	  builder: ["kind", "key", "params", "body", "computed", "generator", "async"],
	  visitor: ["decorators", "key", "typeParameters", "params", "returnType", "body"],
	  fields: Object.assign({}, functionCommon(), functionTypeAnnotationCommon(), {
	    kind: Object.assign({
	      validate: (0, _utils.assertOneOf)("method", "get", "set")
	    }, !process.env.BABEL_TYPES_8_BREAKING ? {
	      default: "method"
	    } : {}),
	    computed: {
	      default: false
	    },
	    key: {
	      validate: function () {
	        const normal = (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral");
	        const computed = (0, _utils.assertNodeType)("Expression");
	        const validator = function (node, key, val) {
	          const validator = node.computed ? computed : normal;
	          validator(node, key, val);
	        };
	        validator.oneOfNodeTypes = ["Expression", "Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral"];
	        return validator;
	      }()
	    },
	    decorators: {
	      validate: (0, _utils.arrayOfType)("Decorator"),
	      optional: true
	    },
	    body: {
	      validate: (0, _utils.assertNodeType)("BlockStatement")
	    }
	  }),
	  aliases: ["UserWhitespacable", "Function", "Scopable", "BlockParent", "FunctionParent", "Method", "ObjectMember"]
	});
	defineType("ObjectProperty", {
	  builder: ["key", "value", "computed", "shorthand", ...(!process.env.BABEL_TYPES_8_BREAKING ? ["decorators"] : [])],
	  fields: {
	    computed: {
	      default: false
	    },
	    key: {
	      validate: function () {
	        const normal = (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "DecimalLiteral", "PrivateName");
	        const computed = (0, _utils.assertNodeType)("Expression");
	        const validator = Object.assign(function (node, key, val) {
	          const validator = node.computed ? computed : normal;
	          validator(node, key, val);
	        }, {
	          oneOfNodeTypes: ["Expression", "Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "DecimalLiteral", "PrivateName"]
	        });
	        return validator;
	      }()
	    },
	    value: {
	      validate: (0, _utils.assertNodeType)("Expression", "PatternLike")
	    },
	    shorthand: {
	      validate: process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.chain)((0, _utils.assertValueType)("boolean"), Object.assign(function (node, key, shorthand) {
	        if (!shorthand) return;
	        if (node.computed) {
	          throw new TypeError("Property shorthand of ObjectProperty cannot be true if computed is true");
	        }
	        if (!(0, _is.default)("Identifier", node.key)) {
	          throw new TypeError("Property shorthand of ObjectProperty cannot be true if key is not an Identifier");
	        }
	      }, {
	        type: "boolean"
	      })) : (0, _utils.assertValueType)("boolean"),
	      default: false
	    },
	    decorators: {
	      validate: (0, _utils.arrayOfType)("Decorator"),
	      optional: true
	    }
	  },
	  visitor: ["decorators", "key", "value"],
	  aliases: ["UserWhitespacable", "Property", "ObjectMember"],
	  validate: !process.env.BABEL_TYPES_8_BREAKING ? undefined : function () {
	    const pattern = (0, _utils.assertNodeType)("Identifier", "Pattern", "TSAsExpression", "TSSatisfiesExpression", "TSNonNullExpression", "TSTypeAssertion");
	    const expression = (0, _utils.assertNodeType)("Expression");
	    return function (parent, key, node) {
	      const validator = (0, _is.default)("ObjectPattern", parent) ? pattern : expression;
	      validator(node, "value", node.value);
	    };
	  }()
	});
	defineType("RestElement", {
	  visitor: ["argument", "typeAnnotation"],
	  builder: ["argument"],
	  aliases: ["FunctionParameter", "PatternLike", "LVal"],
	  deprecatedAlias: "RestProperty",
	  fields: Object.assign({}, patternLikeCommon(), {
	    argument: {
	      validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern", "MemberExpression", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression", "RestElement", "AssignmentPattern") : (0, _utils.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern", "MemberExpression", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression")
	    }
	  }),
	  validate: process.env.BABEL_TYPES_8_BREAKING ? function (parent, key) {
	    const match = /(\w+)\[(\d+)\]/.exec(key.toString());
	    if (!match) throw new Error("Internal Babel error: malformed key.");
	    const [, listKey, index] = match;
	    if (parent[listKey].length > +index + 1) {
	      throw new TypeError(`RestElement must be last element of ${listKey}`);
	    }
	  } : undefined
	});
	defineType("ReturnStatement", {
	  visitor: ["argument"],
	  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
	  fields: {
	    argument: {
	      validate: (0, _utils.assertNodeType)("Expression"),
	      optional: true
	    }
	  }
	});
	defineType("SequenceExpression", {
	  visitor: ["expressions"],
	  fields: {
	    expressions: (0, _utils.validateArrayOfType)("Expression")
	  },
	  aliases: ["Expression"]
	});
	defineType("ParenthesizedExpression", {
	  visitor: ["expression"],
	  aliases: ["Expression", "ExpressionWrapper"],
	  fields: {
	    expression: {
	      validate: (0, _utils.assertNodeType)("Expression")
	    }
	  }
	});
	defineType("SwitchCase", {
	  visitor: ["test", "consequent"],
	  fields: {
	    test: {
	      validate: (0, _utils.assertNodeType)("Expression"),
	      optional: true
	    },
	    consequent: (0, _utils.validateArrayOfType)("Statement")
	  }
	});
	defineType("SwitchStatement", {
	  visitor: ["discriminant", "cases"],
	  aliases: ["Statement", "BlockParent", "Scopable"],
	  fields: {
	    discriminant: {
	      validate: (0, _utils.assertNodeType)("Expression")
	    },
	    cases: (0, _utils.validateArrayOfType)("SwitchCase")
	  }
	});
	defineType("ThisExpression", {
	  aliases: ["Expression"]
	});
	defineType("ThrowStatement", {
	  visitor: ["argument"],
	  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
	  fields: {
	    argument: {
	      validate: (0, _utils.assertNodeType)("Expression")
	    }
	  }
	});
	defineType("TryStatement", {
	  visitor: ["block", "handler", "finalizer"],
	  aliases: ["Statement"],
	  fields: {
	    block: {
	      validate: process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.chain)((0, _utils.assertNodeType)("BlockStatement"), Object.assign(function (node) {
	        if (!node.handler && !node.finalizer) {
	          throw new TypeError("TryStatement expects either a handler or finalizer, or both");
	        }
	      }, {
	        oneOfNodeTypes: ["BlockStatement"]
	      })) : (0, _utils.assertNodeType)("BlockStatement")
	    },
	    handler: {
	      optional: true,
	      validate: (0, _utils.assertNodeType)("CatchClause")
	    },
	    finalizer: {
	      optional: true,
	      validate: (0, _utils.assertNodeType)("BlockStatement")
	    }
	  }
	});
	defineType("UnaryExpression", {
	  builder: ["operator", "argument", "prefix"],
	  fields: {
	    prefix: {
	      default: true
	    },
	    argument: {
	      validate: (0, _utils.assertNodeType)("Expression")
	    },
	    operator: {
	      validate: (0, _utils.assertOneOf)(..._index.UNARY_OPERATORS)
	    }
	  },
	  visitor: ["argument"],
	  aliases: ["UnaryLike", "Expression"]
	});
	defineType("UpdateExpression", {
	  builder: ["operator", "argument", "prefix"],
	  fields: {
	    prefix: {
	      default: false
	    },
	    argument: {
	      validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertNodeType)("Expression") : (0, _utils.assertNodeType)("Identifier", "MemberExpression")
	    },
	    operator: {
	      validate: (0, _utils.assertOneOf)(..._index.UPDATE_OPERATORS)
	    }
	  },
	  visitor: ["argument"],
	  aliases: ["Expression"]
	});
	defineType("VariableDeclaration", {
	  builder: ["kind", "declarations"],
	  visitor: ["declarations"],
	  aliases: ["Statement", "Declaration"],
	  fields: {
	    declare: {
	      validate: (0, _utils.assertValueType)("boolean"),
	      optional: true
	    },
	    kind: {
	      validate: (0, _utils.assertOneOf)("var", "let", "const", "using", "await using")
	    },
	    declarations: (0, _utils.validateArrayOfType)("VariableDeclarator")
	  },
	  validate: process.env.BABEL_TYPES_8_BREAKING ? (() => {
	    const withoutInit = (0, _utils.assertNodeType)("Identifier", "Placeholder");
	    const constOrLetOrVar = (0, _utils.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern", "Placeholder");
	    const usingOrAwaitUsing = (0, _utils.assertNodeType)("Identifier", "VoidPattern", "Placeholder");
	    return function (parent, key, node) {
	      const {
	        kind,
	        declarations
	      } = node;
	      const parentIsForX = (0, _is.default)("ForXStatement", parent, {
	        left: node
	      });
	      if (parentIsForX) {
	        if (declarations.length !== 1) {
	          throw new TypeError(`Exactly one VariableDeclarator is required in the VariableDeclaration of a ${parent.type}`);
	        }
	      }
	      for (const decl of declarations) {
	        if (kind === "const" || kind === "let" || kind === "var") {
	          if (!parentIsForX && !decl.init) {
	            withoutInit(decl, "id", decl.id);
	          } else {
	            constOrLetOrVar(decl, "id", decl.id);
	          }
	        } else {
	          usingOrAwaitUsing(decl, "id", decl.id);
	        }
	      }
	    };
	  })() : undefined
	});
	defineType("VariableDeclarator", {
	  visitor: ["id", "init"],
	  fields: {
	    id: {
	      validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertNodeType)("LVal", "VoidPattern") : (0, _utils.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern", "VoidPattern")
	    },
	    definite: {
	      optional: true,
	      validate: (0, _utils.assertValueType)("boolean")
	    },
	    init: {
	      optional: true,
	      validate: (0, _utils.assertNodeType)("Expression")
	    }
	  }
	});
	defineType("WhileStatement", {
	  visitor: ["test", "body"],
	  aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"],
	  fields: {
	    test: {
	      validate: (0, _utils.assertNodeType)("Expression")
	    },
	    body: {
	      validate: (0, _utils.assertNodeType)("Statement")
	    }
	  }
	});
	defineType("WithStatement", {
	  visitor: ["object", "body"],
	  aliases: ["Statement"],
	  fields: {
	    object: {
	      validate: (0, _utils.assertNodeType)("Expression")
	    },
	    body: {
	      validate: (0, _utils.assertNodeType)("Statement")
	    }
	  }
	});
	defineType("AssignmentPattern", {
	  visitor: ["left", "right", "decorators"],
	  builder: ["left", "right"],
	  aliases: ["FunctionParameter", "Pattern", "PatternLike", "LVal"],
	  fields: Object.assign({}, patternLikeCommon(), {
	    left: {
	      validate: (0, _utils.assertNodeType)("Identifier", "ObjectPattern", "ArrayPattern", "MemberExpression", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression")
	    },
	    right: {
	      validate: (0, _utils.assertNodeType)("Expression")
	    },
	    decorators: {
	      validate: (0, _utils.arrayOfType)("Decorator"),
	      optional: true
	    }
	  })
	});
	defineType("ArrayPattern", {
	  visitor: ["elements", "typeAnnotation"],
	  builder: ["elements"],
	  aliases: ["FunctionParameter", "Pattern", "PatternLike", "LVal"],
	  fields: Object.assign({}, patternLikeCommon(), {
	    elements: {
	      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeOrValueType)("null", "PatternLike")))
	    }
	  })
	});
	defineType("ArrowFunctionExpression", {
	  builder: ["params", "body", "async"],
	  visitor: ["typeParameters", "params", "predicate", "returnType", "body"],
	  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
	  fields: Object.assign({}, functionCommon(), functionTypeAnnotationCommon(), {
	    expression: {
	      validate: (0, _utils.assertValueType)("boolean")
	    },
	    body: {
	      validate: (0, _utils.assertNodeType)("BlockStatement", "Expression")
	    },
	    predicate: {
	      validate: (0, _utils.assertNodeType)("DeclaredPredicate", "InferredPredicate"),
	      optional: true
	    }
	  })
	});
	defineType("ClassBody", {
	  visitor: ["body"],
	  fields: {
	    body: (0, _utils.validateArrayOfType)("ClassMethod", "ClassPrivateMethod", "ClassProperty", "ClassPrivateProperty", "ClassAccessorProperty", "TSDeclareMethod", "TSIndexSignature", "StaticBlock")
	  }
	});
	defineType("ClassExpression", {
	  builder: ["id", "superClass", "body", "decorators"],
	  visitor: ["decorators", "id", "typeParameters", "superClass", "superTypeParameters", "mixins", "implements", "body"],
	  aliases: ["Scopable", "Class", "Expression"],
	  fields: {
	    id: {
	      validate: (0, _utils.assertNodeType)("Identifier"),
	      optional: true
	    },
	    typeParameters: {
	      validate: (0, _utils.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
	      optional: true
	    },
	    body: {
	      validate: (0, _utils.assertNodeType)("ClassBody")
	    },
	    superClass: {
	      optional: true,
	      validate: (0, _utils.assertNodeType)("Expression")
	    },
	    ["superTypeParameters"]: {
	      validate: (0, _utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
	      optional: true
	    },
	    implements: {
	      validate: (0, _utils.arrayOfType)("TSExpressionWithTypeArguments", "ClassImplements"),
	      optional: true
	    },
	    decorators: {
	      validate: (0, _utils.arrayOfType)("Decorator"),
	      optional: true
	    },
	    mixins: {
	      validate: (0, _utils.assertNodeType)("InterfaceExtends"),
	      optional: true
	    }
	  }
	});
	defineType("ClassDeclaration", {
	  inherits: "ClassExpression",
	  aliases: ["Scopable", "Class", "Statement", "Declaration"],
	  fields: {
	    id: {
	      validate: (0, _utils.assertNodeType)("Identifier"),
	      optional: true
	    },
	    typeParameters: {
	      validate: (0, _utils.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
	      optional: true
	    },
	    body: {
	      validate: (0, _utils.assertNodeType)("ClassBody")
	    },
	    superClass: {
	      optional: true,
	      validate: (0, _utils.assertNodeType)("Expression")
	    },
	    ["superTypeParameters"]: {
	      validate: (0, _utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
	      optional: true
	    },
	    implements: {
	      validate: (0, _utils.arrayOfType)("TSExpressionWithTypeArguments", "ClassImplements"),
	      optional: true
	    },
	    decorators: {
	      validate: (0, _utils.arrayOfType)("Decorator"),
	      optional: true
	    },
	    mixins: {
	      validate: (0, _utils.assertNodeType)("InterfaceExtends"),
	      optional: true
	    },
	    declare: {
	      validate: (0, _utils.assertValueType)("boolean"),
	      optional: true
	    },
	    abstract: {
	      validate: (0, _utils.assertValueType)("boolean"),
	      optional: true
	    }
	  },
	  validate: !process.env.BABEL_TYPES_8_BREAKING ? undefined : function () {
	    const identifier = (0, _utils.assertNodeType)("Identifier");
	    return function (parent, key, node) {
	      if (!(0, _is.default)("ExportDefaultDeclaration", parent)) {
	        identifier(node, "id", node.id);
	      }
	    };
	  }()
	});
	const importAttributes = core.importAttributes = {
	  attributes: {
	    optional: true,
	    validate: (0, _utils.arrayOfType)("ImportAttribute")
	  },
	  assertions: {
	    deprecated: true,
	    optional: true,
	    validate: (0, _utils.arrayOfType)("ImportAttribute")
	  }
	};
	defineType("ExportAllDeclaration", {
	  builder: ["source"],
	  visitor: ["source", "attributes", "assertions"],
	  aliases: ["Statement", "Declaration", "ImportOrExportDeclaration", "ExportDeclaration"],
	  fields: Object.assign({
	    source: {
	      validate: (0, _utils.assertNodeType)("StringLiteral")
	    },
	    exportKind: (0, _utils.validateOptional)((0, _utils.assertOneOf)("type", "value"))
	  }, importAttributes)
	});
	defineType("ExportDefaultDeclaration", {
	  visitor: ["declaration"],
	  aliases: ["Statement", "Declaration", "ImportOrExportDeclaration", "ExportDeclaration"],
	  fields: {
	    declaration: (0, _utils.validateType)("TSDeclareFunction", "FunctionDeclaration", "ClassDeclaration", "Expression"),
	    exportKind: (0, _utils.validateOptional)((0, _utils.assertOneOf)("value"))
	  }
	});
	defineType("ExportNamedDeclaration", {
	  builder: ["declaration", "specifiers", "source"],
	  visitor: ["declaration", "specifiers", "source", "attributes", "assertions"],
	  aliases: ["Statement", "Declaration", "ImportOrExportDeclaration", "ExportDeclaration"],
	  fields: Object.assign({
	    declaration: {
	      optional: true,
	      validate: process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.chain)((0, _utils.assertNodeType)("Declaration"), Object.assign(function (node, key, val) {
	        if (val && node.specifiers.length) {
	          throw new TypeError("Only declaration or specifiers is allowed on ExportNamedDeclaration");
	        }
	        if (val && node.source) {
	          throw new TypeError("Cannot export a declaration from a source");
	        }
	      }, {
	        oneOfNodeTypes: ["Declaration"]
	      })) : (0, _utils.assertNodeType)("Declaration")
	    }
	  }, importAttributes, {
	    specifiers: {
	      default: [],
	      validate: (0, _utils.arrayOf)(function () {
	        const sourced = (0, _utils.assertNodeType)("ExportSpecifier", "ExportDefaultSpecifier", "ExportNamespaceSpecifier");
	        const sourceless = (0, _utils.assertNodeType)("ExportSpecifier");
	        if (!process.env.BABEL_TYPES_8_BREAKING) return sourced;
	        return Object.assign(function (node, key, val) {
	          const validator = node.source ? sourced : sourceless;
	          validator(node, key, val);
	        }, {
	          oneOfNodeTypes: ["ExportSpecifier", "ExportDefaultSpecifier", "ExportNamespaceSpecifier"]
	        });
	      }())
	    },
	    source: {
	      validate: (0, _utils.assertNodeType)("StringLiteral"),
	      optional: true
	    },
	    exportKind: (0, _utils.validateOptional)((0, _utils.assertOneOf)("type", "value"))
	  })
	});
	defineType("ExportSpecifier", {
	  visitor: ["local", "exported"],
	  aliases: ["ModuleSpecifier"],
	  fields: {
	    local: {
	      validate: (0, _utils.assertNodeType)("Identifier")
	    },
	    exported: {
	      validate: (0, _utils.assertNodeType)("Identifier", "StringLiteral")
	    },
	    exportKind: {
	      validate: (0, _utils.assertOneOf)("type", "value"),
	      optional: true
	    }
	  }
	});
	defineType("ForOfStatement", {
	  visitor: ["left", "right", "body"],
	  builder: ["left", "right", "body", "await"],
	  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
	  fields: {
	    left: {
	      validate: function () {
	        if (!process.env.BABEL_TYPES_8_BREAKING) {
	          return (0, _utils.assertNodeType)("VariableDeclaration", "LVal");
	        }
	        const declaration = (0, _utils.assertNodeType)("VariableDeclaration");
	        const lval = (0, _utils.assertNodeType)("Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression");
	        return Object.assign(function (node, key, val) {
	          if ((0, _is.default)("VariableDeclaration", val)) {
	            declaration(node, key, val);
	          } else {
	            lval(node, key, val);
	          }
	        }, {
	          oneOfNodeTypes: ["VariableDeclaration", "Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression"]
	        });
	      }()
	    },
	    right: {
	      validate: (0, _utils.assertNodeType)("Expression")
	    },
	    body: {
	      validate: (0, _utils.assertNodeType)("Statement")
	    },
	    await: {
	      default: false
	    }
	  }
	});
	defineType("ImportDeclaration", {
	  builder: ["specifiers", "source"],
	  visitor: ["specifiers", "source", "attributes", "assertions"],
	  aliases: ["Statement", "Declaration", "ImportOrExportDeclaration"],
	  fields: Object.assign({}, importAttributes, {
	    module: {
	      optional: true,
	      validate: (0, _utils.assertValueType)("boolean")
	    },
	    phase: {
	      default: null,
	      validate: (0, _utils.assertOneOf)("source", "defer")
	    },
	    specifiers: (0, _utils.validateArrayOfType)("ImportSpecifier", "ImportDefaultSpecifier", "ImportNamespaceSpecifier"),
	    source: {
	      validate: (0, _utils.assertNodeType)("StringLiteral")
	    },
	    importKind: {
	      validate: (0, _utils.assertOneOf)("type", "typeof", "value"),
	      optional: true
	    }
	  })
	});
	defineType("ImportDefaultSpecifier", {
	  visitor: ["local"],
	  aliases: ["ModuleSpecifier"],
	  fields: {
	    local: {
	      validate: (0, _utils.assertNodeType)("Identifier")
	    }
	  }
	});
	defineType("ImportNamespaceSpecifier", {
	  visitor: ["local"],
	  aliases: ["ModuleSpecifier"],
	  fields: {
	    local: {
	      validate: (0, _utils.assertNodeType)("Identifier")
	    }
	  }
	});
	defineType("ImportSpecifier", {
	  visitor: ["imported", "local"],
	  builder: ["local", "imported"],
	  aliases: ["ModuleSpecifier"],
	  fields: {
	    local: {
	      validate: (0, _utils.assertNodeType)("Identifier")
	    },
	    imported: {
	      validate: (0, _utils.assertNodeType)("Identifier", "StringLiteral")
	    },
	    importKind: {
	      validate: (0, _utils.assertOneOf)("type", "typeof", "value"),
	      optional: true
	    }
	  }
	});
	defineType("ImportExpression", {
	  visitor: ["source", "options"],
	  aliases: ["Expression"],
	  fields: {
	    phase: {
	      default: null,
	      validate: (0, _utils.assertOneOf)("source", "defer")
	    },
	    source: {
	      validate: (0, _utils.assertNodeType)("Expression")
	    },
	    options: {
	      validate: (0, _utils.assertNodeType)("Expression"),
	      optional: true
	    }
	  }
	});
	defineType("MetaProperty", {
	  visitor: ["meta", "property"],
	  aliases: ["Expression"],
	  fields: {
	    meta: {
	      validate: process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.chain)((0, _utils.assertNodeType)("Identifier"), Object.assign(function (node, key, val) {
	        let property;
	        switch (val.name) {
	          case "function":
	            property = "sent";
	            break;
	          case "new":
	            property = "target";
	            break;
	          case "import":
	            property = "meta";
	            break;
	        }
	        if (!(0, _is.default)("Identifier", node.property, {
	          name: property
	        })) {
	          throw new TypeError("Unrecognised MetaProperty");
	        }
	      }, {
	        oneOfNodeTypes: ["Identifier"]
	      })) : (0, _utils.assertNodeType)("Identifier")
	    },
	    property: {
	      validate: (0, _utils.assertNodeType)("Identifier")
	    }
	  }
	});
	const classMethodOrPropertyCommon = () => ({
	  abstract: {
	    validate: (0, _utils.assertValueType)("boolean"),
	    optional: true
	  },
	  accessibility: {
	    validate: (0, _utils.assertOneOf)("public", "private", "protected"),
	    optional: true
	  },
	  static: {
	    default: false
	  },
	  override: {
	    default: false
	  },
	  computed: {
	    default: false
	  },
	  optional: {
	    validate: (0, _utils.assertValueType)("boolean"),
	    optional: true
	  },
	  key: {
	    validate: (0, _utils.chain)(function () {
	      const normal = (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral");
	      const computed = (0, _utils.assertNodeType)("Expression");
	      return function (node, key, val) {
	        const validator = node.computed ? computed : normal;
	        validator(node, key, val);
	      };
	    }(), (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "Expression"))
	  }
	});
	core.classMethodOrPropertyCommon = classMethodOrPropertyCommon;
	const classMethodOrDeclareMethodCommon = () => Object.assign({}, functionCommon(), classMethodOrPropertyCommon(), {
	  params: (0, _utils.validateArrayOfType)("FunctionParameter", "TSParameterProperty"),
	  kind: {
	    validate: (0, _utils.assertOneOf)("get", "set", "method", "constructor"),
	    default: "method"
	  },
	  access: {
	    validate: (0, _utils.chain)((0, _utils.assertValueType)("string"), (0, _utils.assertOneOf)("public", "private", "protected")),
	    optional: true
	  },
	  decorators: {
	    validate: (0, _utils.arrayOfType)("Decorator"),
	    optional: true
	  }
	});
	core.classMethodOrDeclareMethodCommon = classMethodOrDeclareMethodCommon;
	defineType("ClassMethod", {
	  aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method"],
	  builder: ["kind", "key", "params", "body", "computed", "static", "generator", "async"],
	  visitor: ["decorators", "key", "typeParameters", "params", "returnType", "body"],
	  fields: Object.assign({}, classMethodOrDeclareMethodCommon(), functionTypeAnnotationCommon(), {
	    body: {
	      validate: (0, _utils.assertNodeType)("BlockStatement")
	    }
	  })
	});
	defineType("ObjectPattern", {
	  visitor: ["decorators", "properties", "typeAnnotation"],
	  builder: ["properties"],
	  aliases: ["FunctionParameter", "Pattern", "PatternLike", "LVal"],
	  fields: Object.assign({}, patternLikeCommon(), {
	    properties: (0, _utils.validateArrayOfType)("RestElement", "ObjectProperty")
	  })
	});
	defineType("SpreadElement", {
	  visitor: ["argument"],
	  aliases: ["UnaryLike"],
	  deprecatedAlias: "SpreadProperty",
	  fields: {
	    argument: {
	      validate: (0, _utils.assertNodeType)("Expression")
	    }
	  }
	});
	defineType("Super", {
	  aliases: ["Expression"]
	});
	defineType("TaggedTemplateExpression", {
	  visitor: ["tag", "typeParameters", "quasi"],
	  builder: ["tag", "quasi"],
	  aliases: ["Expression"],
	  fields: {
	    tag: {
	      validate: (0, _utils.assertNodeType)("Expression")
	    },
	    quasi: {
	      validate: (0, _utils.assertNodeType)("TemplateLiteral")
	    },
	    ["typeParameters"]: {
	      validate: (0, _utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
	      optional: true
	    }
	  }
	});
	defineType("TemplateElement", {
	  builder: ["value", "tail"],
	  fields: {
	    value: {
	      validate: (0, _utils.chain)((0, _utils.assertShape)({
	        raw: {
	          validate: (0, _utils.assertValueType)("string")
	        },
	        cooked: {
	          validate: (0, _utils.assertValueType)("string"),
	          optional: true
	        }
	      }), function templateElementCookedValidator(node) {
	        const raw = node.value.raw;
	        let unterminatedCalled = false;
	        const error = () => {
	          throw new Error("Internal @babel/types error.");
	        };
	        const {
	          str,
	          firstInvalidLoc
	        } = (0, _helperStringParser.readStringContents)("template", raw, 0, 0, 0, {
	          unterminated() {
	            unterminatedCalled = true;
	          },
	          strictNumericEscape: error,
	          invalidEscapeSequence: error,
	          numericSeparatorInEscapeSequence: error,
	          unexpectedNumericSeparator: error,
	          invalidDigit: error,
	          invalidCodePoint: error
	        });
	        if (!unterminatedCalled) throw new Error("Invalid raw");
	        node.value.cooked = firstInvalidLoc ? null : str;
	      })
	    },
	    tail: {
	      default: false
	    }
	  }
	});
	defineType("TemplateLiteral", {
	  visitor: ["quasis", "expressions"],
	  aliases: ["Expression", "Literal"],
	  fields: {
	    quasis: (0, _utils.validateArrayOfType)("TemplateElement"),
	    expressions: {
	      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Expression", "TSType")), function (node, key, val) {
	        if (node.quasis.length !== val.length + 1) {
	          throw new TypeError(`Number of ${node.type} quasis should be exactly one more than the number of expressions.\nExpected ${val.length + 1} quasis but got ${node.quasis.length}`);
	        }
	      })
	    }
	  }
	});
	defineType("YieldExpression", {
	  builder: ["argument", "delegate"],
	  visitor: ["argument"],
	  aliases: ["Expression", "Terminatorless"],
	  fields: {
	    delegate: {
	      validate: process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.chain)((0, _utils.assertValueType)("boolean"), Object.assign(function (node, key, val) {
	        if (val && !node.argument) {
	          throw new TypeError("Property delegate of YieldExpression cannot be true if there is no argument");
	        }
	      }, {
	        type: "boolean"
	      })) : (0, _utils.assertValueType)("boolean"),
	      default: false
	    },
	    argument: {
	      optional: true,
	      validate: (0, _utils.assertNodeType)("Expression")
	    }
	  }
	});
	defineType("AwaitExpression", {
	  builder: ["argument"],
	  visitor: ["argument"],
	  aliases: ["Expression", "Terminatorless"],
	  fields: {
	    argument: {
	      validate: (0, _utils.assertNodeType)("Expression")
	    }
	  }
	});
	defineType("Import", {
	  aliases: ["Expression"]
	});
	defineType("BigIntLiteral", {
	  builder: ["value"],
	  fields: {
	    value: {
	      validate: (0, _utils.assertValueType)("string")
	    }
	  },
	  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
	});
	defineType("ExportNamespaceSpecifier", {
	  visitor: ["exported"],
	  aliases: ["ModuleSpecifier"],
	  fields: {
	    exported: {
	      validate: (0, _utils.assertNodeType)("Identifier")
	    }
	  }
	});
	defineType("OptionalMemberExpression", {
	  builder: ["object", "property", "computed", "optional"],
	  visitor: ["object", "property"],
	  aliases: ["Expression"],
	  fields: {
	    object: {
	      validate: (0, _utils.assertNodeType)("Expression")
	    },
	    property: {
	      validate: function () {
	        const normal = (0, _utils.assertNodeType)("Identifier");
	        const computed = (0, _utils.assertNodeType)("Expression");
	        const validator = Object.assign(function (node, key, val) {
	          const validator = node.computed ? computed : normal;
	          validator(node, key, val);
	        }, {
	          oneOfNodeTypes: ["Expression", "Identifier"]
	        });
	        return validator;
	      }()
	    },
	    computed: {
	      default: false
	    },
	    optional: {
	      validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertValueType)("boolean") : (0, _utils.chain)((0, _utils.assertValueType)("boolean"), (0, _utils.assertOptionalChainStart)())
	    }
	  }
	});
	defineType("OptionalCallExpression", {
	  visitor: ["callee", "typeParameters", "typeArguments", "arguments"],
	  builder: ["callee", "arguments", "optional"],
	  aliases: ["Expression"],
	  fields: Object.assign({
	    callee: {
	      validate: (0, _utils.assertNodeType)("Expression")
	    },
	    arguments: (0, _utils.validateArrayOfType)("Expression", "SpreadElement", "ArgumentPlaceholder"),
	    optional: {
	      validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertValueType)("boolean") : (0, _utils.chain)((0, _utils.assertValueType)("boolean"), (0, _utils.assertOptionalChainStart)())
	    },
	    typeArguments: {
	      validate: (0, _utils.assertNodeType)("TypeParameterInstantiation"),
	      optional: true
	    }
	  }, {
	    typeParameters: {
	      validate: (0, _utils.assertNodeType)("TSTypeParameterInstantiation"),
	      optional: true
	    }
	  })
	});
	defineType("ClassProperty", {
	  visitor: ["decorators", "variance", "key", "typeAnnotation", "value"],
	  builder: ["key", "value", "typeAnnotation", "decorators", "computed", "static"],
	  aliases: ["Property"],
	  fields: Object.assign({}, classMethodOrPropertyCommon(), {
	    value: {
	      validate: (0, _utils.assertNodeType)("Expression"),
	      optional: true
	    },
	    definite: {
	      validate: (0, _utils.assertValueType)("boolean"),
	      optional: true
	    },
	    typeAnnotation: {
	      validate: (0, _utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
	      optional: true
	    },
	    decorators: {
	      validate: (0, _utils.arrayOfType)("Decorator"),
	      optional: true
	    },
	    readonly: {
	      validate: (0, _utils.assertValueType)("boolean"),
	      optional: true
	    },
	    declare: {
	      validate: (0, _utils.assertValueType)("boolean"),
	      optional: true
	    },
	    variance: {
	      validate: (0, _utils.assertNodeType)("Variance"),
	      optional: true
	    }
	  })
	});
	defineType("ClassAccessorProperty", {
	  visitor: ["decorators", "key", "typeAnnotation", "value"],
	  builder: ["key", "value", "typeAnnotation", "decorators", "computed", "static"],
	  aliases: ["Property", "Accessor"],
	  fields: Object.assign({}, classMethodOrPropertyCommon(), {
	    key: {
	      validate: (0, _utils.chain)(function () {
	        const normal = (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "PrivateName");
	        const computed = (0, _utils.assertNodeType)("Expression");
	        return function (node, key, val) {
	          const validator = node.computed ? computed : normal;
	          validator(node, key, val);
	        };
	      }(), (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "Expression", "PrivateName"))
	    },
	    value: {
	      validate: (0, _utils.assertNodeType)("Expression"),
	      optional: true
	    },
	    definite: {
	      validate: (0, _utils.assertValueType)("boolean"),
	      optional: true
	    },
	    typeAnnotation: {
	      validate: (0, _utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
	      optional: true
	    },
	    decorators: {
	      validate: (0, _utils.arrayOfType)("Decorator"),
	      optional: true
	    },
	    readonly: {
	      validate: (0, _utils.assertValueType)("boolean"),
	      optional: true
	    },
	    declare: {
	      validate: (0, _utils.assertValueType)("boolean"),
	      optional: true
	    },
	    variance: {
	      validate: (0, _utils.assertNodeType)("Variance"),
	      optional: true
	    }
	  })
	});
	defineType("ClassPrivateProperty", {
	  visitor: ["decorators", "variance", "key", "typeAnnotation", "value"],
	  builder: ["key", "value", "decorators", "static"],
	  aliases: ["Property", "Private"],
	  fields: {
	    key: {
	      validate: (0, _utils.assertNodeType)("PrivateName")
	    },
	    value: {
	      validate: (0, _utils.assertNodeType)("Expression"),
	      optional: true
	    },
	    typeAnnotation: {
	      validate: (0, _utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
	      optional: true
	    },
	    decorators: {
	      validate: (0, _utils.arrayOfType)("Decorator"),
	      optional: true
	    },
	    static: {
	      validate: (0, _utils.assertValueType)("boolean"),
	      default: false
	    },
	    readonly: {
	      validate: (0, _utils.assertValueType)("boolean"),
	      optional: true
	    },
	    optional: {
	      validate: (0, _utils.assertValueType)("boolean"),
	      optional: true
	    },
	    definite: {
	      validate: (0, _utils.assertValueType)("boolean"),
	      optional: true
	    },
	    variance: {
	      validate: (0, _utils.assertNodeType)("Variance"),
	      optional: true
	    }
	  }
	});
	defineType("ClassPrivateMethod", {
	  builder: ["kind", "key", "params", "body", "static"],
	  visitor: ["decorators", "key", "typeParameters", "params", "returnType", "body"],
	  aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method", "Private"],
	  fields: Object.assign({}, classMethodOrDeclareMethodCommon(), functionTypeAnnotationCommon(), {
	    kind: {
	      validate: (0, _utils.assertOneOf)("get", "set", "method"),
	      default: "method"
	    },
	    key: {
	      validate: (0, _utils.assertNodeType)("PrivateName")
	    },
	    body: {
	      validate: (0, _utils.assertNodeType)("BlockStatement")
	    }
	  })
	});
	defineType("PrivateName", {
	  visitor: ["id"],
	  aliases: ["Private"],
	  fields: {
	    id: {
	      validate: (0, _utils.assertNodeType)("Identifier")
	    }
	  }
	});
	defineType("StaticBlock", {
	  visitor: ["body"],
	  fields: {
	    body: (0, _utils.validateArrayOfType)("Statement")
	  },
	  aliases: ["Scopable", "BlockParent", "FunctionParent"]
	});
	defineType("ImportAttribute", {
	  visitor: ["key", "value"],
	  fields: {
	    key: {
	      validate: (0, _utils.assertNodeType)("Identifier", "StringLiteral")
	    },
	    value: {
	      validate: (0, _utils.assertNodeType)("StringLiteral")
	    }
	  }
	});

	
	return core;
}

var flow = {};

var hasRequiredFlow;

function requireFlow () {
	if (hasRequiredFlow) return flow;
	hasRequiredFlow = 1;

	var _core = requireCore();
	var _utils = requireUtils();
	const defineType = (0, _utils.defineAliasedType)("Flow");
	const defineInterfaceishType = name => {
	  const isDeclareClass = name === "DeclareClass";
	  defineType(name, {
	    builder: ["id", "typeParameters", "extends", "body"],
	    visitor: ["id", "typeParameters", "extends", ...(isDeclareClass ? ["mixins", "implements"] : []), "body"],
	    aliases: ["FlowDeclaration", "Statement", "Declaration"],
	    fields: Object.assign({
	      id: (0, _utils.validateType)("Identifier"),
	      typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
	      extends: (0, _utils.validateOptional)((0, _utils.arrayOfType)("InterfaceExtends"))
	    }, isDeclareClass ? {
	      mixins: (0, _utils.validateOptional)((0, _utils.arrayOfType)("InterfaceExtends")),
	      implements: (0, _utils.validateOptional)((0, _utils.arrayOfType)("ClassImplements"))
	    } : {}, {
	      body: (0, _utils.validateType)("ObjectTypeAnnotation")
	    })
	  });
	};
	defineType("AnyTypeAnnotation", {
	  aliases: ["FlowType", "FlowBaseAnnotation"]
	});
	defineType("ArrayTypeAnnotation", {
	  visitor: ["elementType"],
	  aliases: ["FlowType"],
	  fields: {
	    elementType: (0, _utils.validateType)("FlowType")
	  }
	});
	defineType("BooleanTypeAnnotation", {
	  aliases: ["FlowType", "FlowBaseAnnotation"]
	});
	defineType("BooleanLiteralTypeAnnotation", {
	  builder: ["value"],
	  aliases: ["FlowType"],
	  fields: {
	    value: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
	  }
	});
	defineType("NullLiteralTypeAnnotation", {
	  aliases: ["FlowType", "FlowBaseAnnotation"]
	});
	defineType("ClassImplements", {
	  visitor: ["id", "typeParameters"],
	  fields: {
	    id: (0, _utils.validateType)("Identifier"),
	    typeParameters: (0, _utils.validateOptionalType)("TypeParameterInstantiation")
	  }
	});
	defineInterfaceishType("DeclareClass");
	defineType("DeclareFunction", {
	  builder: ["id"],
	  visitor: ["id", "predicate"],
	  aliases: ["FlowDeclaration", "Statement", "Declaration"],
	  fields: {
	    id: (0, _utils.validateType)("Identifier"),
	    predicate: (0, _utils.validateOptionalType)("DeclaredPredicate")
	  }
	});
	defineInterfaceishType("DeclareInterface");
	defineType("DeclareModule", {
	  builder: ["id", "body", "kind"],
	  visitor: ["id", "body"],
	  aliases: ["FlowDeclaration", "Statement", "Declaration"],
	  fields: {
	    id: (0, _utils.validateType)("Identifier", "StringLiteral"),
	    body: (0, _utils.validateType)("BlockStatement"),
	    kind: (0, _utils.validateOptional)((0, _utils.assertOneOf)("CommonJS", "ES"))
	  }
	});
	defineType("DeclareModuleExports", {
	  visitor: ["typeAnnotation"],
	  aliases: ["FlowDeclaration", "Statement", "Declaration"],
	  fields: {
	    typeAnnotation: (0, _utils.validateType)("TypeAnnotation")
	  }
	});
	defineType("DeclareTypeAlias", {
	  visitor: ["id", "typeParameters", "right"],
	  aliases: ["FlowDeclaration", "Statement", "Declaration"],
	  fields: {
	    id: (0, _utils.validateType)("Identifier"),
	    typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
	    right: (0, _utils.validateType)("FlowType")
	  }
	});
	defineType("DeclareOpaqueType", {
	  visitor: ["id", "typeParameters", "supertype"],
	  aliases: ["FlowDeclaration", "Statement", "Declaration"],
	  fields: {
	    id: (0, _utils.validateType)("Identifier"),
	    typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
	    supertype: (0, _utils.validateOptionalType)("FlowType"),
	    impltype: (0, _utils.validateOptionalType)("FlowType")
	  }
	});
	defineType("DeclareVariable", {
	  visitor: ["id"],
	  aliases: ["FlowDeclaration", "Statement", "Declaration"],
	  fields: {
	    id: (0, _utils.validateType)("Identifier")
	  }
	});
	defineType("DeclareExportDeclaration", {
	  visitor: ["declaration", "specifiers", "source", "attributes"],
	  aliases: ["FlowDeclaration", "Statement", "Declaration"],
	  fields: Object.assign({
	    declaration: (0, _utils.validateOptionalType)("Flow"),
	    specifiers: (0, _utils.validateOptional)((0, _utils.arrayOfType)("ExportSpecifier", "ExportNamespaceSpecifier")),
	    source: (0, _utils.validateOptionalType)("StringLiteral"),
	    default: (0, _utils.validateOptional)((0, _utils.assertValueType)("boolean"))
	  }, _core.importAttributes)
	});
	defineType("DeclareExportAllDeclaration", {
	  visitor: ["source", "attributes"],
	  aliases: ["FlowDeclaration", "Statement", "Declaration"],
	  fields: Object.assign({
	    source: (0, _utils.validateType)("StringLiteral"),
	    exportKind: (0, _utils.validateOptional)((0, _utils.assertOneOf)("type", "value"))
	  }, _core.importAttributes)
	});
	defineType("DeclaredPredicate", {
	  visitor: ["value"],
	  aliases: ["FlowPredicate"],
	  fields: {
	    value: (0, _utils.validateType)("Flow")
	  }
	});
	defineType("ExistsTypeAnnotation", {
	  aliases: ["FlowType"]
	});
	defineType("FunctionTypeAnnotation", {
	  builder: ["typeParameters", "params", "rest", "returnType"],
	  visitor: ["typeParameters", "this", "params", "rest", "returnType"],
	  aliases: ["FlowType"],
	  fields: {
	    typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
	    params: (0, _utils.validateArrayOfType)("FunctionTypeParam"),
	    rest: (0, _utils.validateOptionalType)("FunctionTypeParam"),
	    this: (0, _utils.validateOptionalType)("FunctionTypeParam"),
	    returnType: (0, _utils.validateType)("FlowType")
	  }
	});
	defineType("FunctionTypeParam", {
	  visitor: ["name", "typeAnnotation"],
	  fields: {
	    name: (0, _utils.validateOptionalType)("Identifier"),
	    typeAnnotation: (0, _utils.validateType)("FlowType"),
	    optional: (0, _utils.validateOptional)((0, _utils.assertValueType)("boolean"))
	  }
	});
	defineType("GenericTypeAnnotation", {
	  visitor: ["id", "typeParameters"],
	  aliases: ["FlowType"],
	  fields: {
	    id: (0, _utils.validateType)("Identifier", "QualifiedTypeIdentifier"),
	    typeParameters: (0, _utils.validateOptionalType)("TypeParameterInstantiation")
	  }
	});
	defineType("InferredPredicate", {
	  aliases: ["FlowPredicate"]
	});
	defineType("InterfaceExtends", {
	  visitor: ["id", "typeParameters"],
	  fields: {
	    id: (0, _utils.validateType)("Identifier", "QualifiedTypeIdentifier"),
	    typeParameters: (0, _utils.validateOptionalType)("TypeParameterInstantiation")
	  }
	});
	defineInterfaceishType("InterfaceDeclaration");
	defineType("InterfaceTypeAnnotation", {
	  visitor: ["extends", "body"],
	  aliases: ["FlowType"],
	  fields: {
	    extends: (0, _utils.validateOptional)((0, _utils.arrayOfType)("InterfaceExtends")),
	    body: (0, _utils.validateType)("ObjectTypeAnnotation")
	  }
	});
	defineType("IntersectionTypeAnnotation", {
	  visitor: ["types"],
	  aliases: ["FlowType"],
	  fields: {
	    types: (0, _utils.validate)((0, _utils.arrayOfType)("FlowType"))
	  }
	});
	defineType("MixedTypeAnnotation", {
	  aliases: ["FlowType", "FlowBaseAnnotation"]
	});
	defineType("EmptyTypeAnnotation", {
	  aliases: ["FlowType", "FlowBaseAnnotation"]
	});
	defineType("NullableTypeAnnotation", {
	  visitor: ["typeAnnotation"],
	  aliases: ["FlowType"],
	  fields: {
	    typeAnnotation: (0, _utils.validateType)("FlowType")
	  }
	});
	defineType("NumberLiteralTypeAnnotation", {
	  builder: ["value"],
	  aliases: ["FlowType"],
	  fields: {
	    value: (0, _utils.validate)((0, _utils.assertValueType)("number"))
	  }
	});
	defineType("NumberTypeAnnotation", {
	  aliases: ["FlowType", "FlowBaseAnnotation"]
	});
	defineType("ObjectTypeAnnotation", {
	  visitor: ["properties", "indexers", "callProperties", "internalSlots"],
	  aliases: ["FlowType"],
	  builder: ["properties", "indexers", "callProperties", "internalSlots", "exact"],
	  fields: {
	    properties: (0, _utils.validate)((0, _utils.arrayOfType)("ObjectTypeProperty", "ObjectTypeSpreadProperty")),
	    indexers: {
	      validate: (0, _utils.arrayOfType)("ObjectTypeIndexer"),
	      optional: true,
	      default: []
	    },
	    callProperties: {
	      validate: (0, _utils.arrayOfType)("ObjectTypeCallProperty"),
	      optional: true,
	      default: []
	    },
	    internalSlots: {
	      validate: (0, _utils.arrayOfType)("ObjectTypeInternalSlot"),
	      optional: true,
	      default: []
	    },
	    exact: {
	      validate: (0, _utils.assertValueType)("boolean"),
	      default: false
	    },
	    inexact: (0, _utils.validateOptional)((0, _utils.assertValueType)("boolean"))
	  }
	});
	defineType("ObjectTypeInternalSlot", {
	  visitor: ["id", "value"],
	  builder: ["id", "value", "optional", "static", "method"],
	  aliases: ["UserWhitespacable"],
	  fields: {
	    id: (0, _utils.validateType)("Identifier"),
	    value: (0, _utils.validateType)("FlowType"),
	    optional: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
	    static: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
	    method: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
	  }
	});
	defineType("ObjectTypeCallProperty", {
	  visitor: ["value"],
	  aliases: ["UserWhitespacable"],
	  fields: {
	    value: (0, _utils.validateType)("FlowType"),
	    static: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
	  }
	});
	defineType("ObjectTypeIndexer", {
	  visitor: ["variance", "id", "key", "value"],
	  builder: ["id", "key", "value", "variance"],
	  aliases: ["UserWhitespacable"],
	  fields: {
	    id: (0, _utils.validateOptionalType)("Identifier"),
	    key: (0, _utils.validateType)("FlowType"),
	    value: (0, _utils.validateType)("FlowType"),
	    static: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
	    variance: (0, _utils.validateOptionalType)("Variance")
	  }
	});
	defineType("ObjectTypeProperty", {
	  visitor: ["key", "value", "variance"],
	  aliases: ["UserWhitespacable"],
	  fields: {
	    key: (0, _utils.validateType)("Identifier", "StringLiteral"),
	    value: (0, _utils.validateType)("FlowType"),
	    kind: (0, _utils.validate)((0, _utils.assertOneOf)("init", "get", "set")),
	    static: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
	    proto: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
	    optional: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
	    variance: (0, _utils.validateOptionalType)("Variance"),
	    method: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
	  }
	});
	defineType("ObjectTypeSpreadProperty", {
	  visitor: ["argument"],
	  aliases: ["UserWhitespacable"],
	  fields: {
	    argument: (0, _utils.validateType)("FlowType")
	  }
	});
	defineType("OpaqueType", {
	  visitor: ["id", "typeParameters", "supertype", "impltype"],
	  aliases: ["FlowDeclaration", "Statement", "Declaration"],
	  fields: {
	    id: (0, _utils.validateType)("Identifier"),
	    typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
	    supertype: (0, _utils.validateOptionalType)("FlowType"),
	    impltype: (0, _utils.validateType)("FlowType")
	  }
	});
	defineType("QualifiedTypeIdentifier", {
	  visitor: ["qualification", "id"],
	  builder: ["id", "qualification"],
	  fields: {
	    id: (0, _utils.validateType)("Identifier"),
	    qualification: (0, _utils.validateType)("Identifier", "QualifiedTypeIdentifier")
	  }
	});
	defineType("StringLiteralTypeAnnotation", {
	  builder: ["value"],
	  aliases: ["FlowType"],
	  fields: {
	    value: (0, _utils.validate)((0, _utils.assertValueType)("string"))
	  }
	});
	defineType("StringTypeAnnotation", {
	  aliases: ["FlowType", "FlowBaseAnnotation"]
	});
	defineType("SymbolTypeAnnotation", {
	  aliases: ["FlowType", "FlowBaseAnnotation"]
	});
	defineType("ThisTypeAnnotation", {
	  aliases: ["FlowType", "FlowBaseAnnotation"]
	});
	defineType("TupleTypeAnnotation", {
	  visitor: ["types"],
	  aliases: ["FlowType"],
	  fields: {
	    types: (0, _utils.validate)((0, _utils.arrayOfType)("FlowType"))
	  }
	});
	defineType("TypeofTypeAnnotation", {
	  visitor: ["argument"],
	  aliases: ["FlowType"],
	  fields: {
	    argument: (0, _utils.validateType)("FlowType")
	  }
	});
	defineType("TypeAlias", {
	  visitor: ["id", "typeParameters", "right"],
	  aliases: ["FlowDeclaration", "Statement", "Declaration"],
	  fields: {
	    id: (0, _utils.validateType)("Identifier"),
	    typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
	    right: (0, _utils.validateType)("FlowType")
	  }
	});
	defineType("TypeAnnotation", {
	  visitor: ["typeAnnotation"],
	  fields: {
	    typeAnnotation: (0, _utils.validateType)("FlowType")
	  }
	});
	defineType("TypeCastExpression", {
	  visitor: ["expression", "typeAnnotation"],
	  aliases: ["ExpressionWrapper", "Expression"],
	  fields: {
	    expression: (0, _utils.validateType)("Expression"),
	    typeAnnotation: (0, _utils.validateType)("TypeAnnotation")
	  }
	});
	defineType("TypeParameter", {
	  visitor: ["bound", "default", "variance"],
	  fields: {
	    name: (0, _utils.validate)((0, _utils.assertValueType)("string")),
	    bound: (0, _utils.validateOptionalType)("TypeAnnotation"),
	    default: (0, _utils.validateOptionalType)("FlowType"),
	    variance: (0, _utils.validateOptionalType)("Variance")
	  }
	});
	defineType("TypeParameterDeclaration", {
	  visitor: ["params"],
	  fields: {
	    params: (0, _utils.validate)((0, _utils.arrayOfType)("TypeParameter"))
	  }
	});
	defineType("TypeParameterInstantiation", {
	  visitor: ["params"],
	  fields: {
	    params: (0, _utils.validate)((0, _utils.arrayOfType)("FlowType"))
	  }
	});
	defineType("UnionTypeAnnotation", {
	  visitor: ["types"],
	  aliases: ["FlowType"],
	  fields: {
	    types: (0, _utils.validate)((0, _utils.arrayOfType)("FlowType"))
	  }
	});
	defineType("Variance", {
	  builder: ["kind"],
	  fields: {
	    kind: (0, _utils.validate)((0, _utils.assertOneOf)("minus", "plus"))
	  }
	});
	defineType("VoidTypeAnnotation", {
	  aliases: ["FlowType", "FlowBaseAnnotation"]
	});
	defineType("EnumDeclaration", {
	  aliases: ["Statement", "Declaration"],
	  visitor: ["id", "body"],
	  fields: {
	    id: (0, _utils.validateType)("Identifier"),
	    body: (0, _utils.validateType)("EnumBooleanBody", "EnumNumberBody", "EnumStringBody", "EnumSymbolBody")
	  }
	});
	defineType("EnumBooleanBody", {
	  aliases: ["EnumBody"],
	  visitor: ["members"],
	  fields: {
	    explicitType: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
	    members: (0, _utils.validateArrayOfType)("EnumBooleanMember"),
	    hasUnknownMembers: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
	  }
	});
	defineType("EnumNumberBody", {
	  aliases: ["EnumBody"],
	  visitor: ["members"],
	  fields: {
	    explicitType: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
	    members: (0, _utils.validateArrayOfType)("EnumNumberMember"),
	    hasUnknownMembers: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
	  }
	});
	defineType("EnumStringBody", {
	  aliases: ["EnumBody"],
	  visitor: ["members"],
	  fields: {
	    explicitType: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
	    members: (0, _utils.validateArrayOfType)("EnumStringMember", "EnumDefaultedMember"),
	    hasUnknownMembers: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
	  }
	});
	defineType("EnumSymbolBody", {
	  aliases: ["EnumBody"],
	  visitor: ["members"],
	  fields: {
	    members: (0, _utils.validateArrayOfType)("EnumDefaultedMember"),
	    hasUnknownMembers: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
	  }
	});
	defineType("EnumBooleanMember", {
	  aliases: ["EnumMember"],
	  builder: ["id"],
	  visitor: ["id", "init"],
	  fields: {
	    id: (0, _utils.validateType)("Identifier"),
	    init: (0, _utils.validateType)("BooleanLiteral")
	  }
	});
	defineType("EnumNumberMember", {
	  aliases: ["EnumMember"],
	  visitor: ["id", "init"],
	  fields: {
	    id: (0, _utils.validateType)("Identifier"),
	    init: (0, _utils.validateType)("NumericLiteral")
	  }
	});
	defineType("EnumStringMember", {
	  aliases: ["EnumMember"],
	  visitor: ["id", "init"],
	  fields: {
	    id: (0, _utils.validateType)("Identifier"),
	    init: (0, _utils.validateType)("StringLiteral")
	  }
	});
	defineType("EnumDefaultedMember", {
	  aliases: ["EnumMember"],
	  visitor: ["id"],
	  fields: {
	    id: (0, _utils.validateType)("Identifier")
	  }
	});
	defineType("IndexedAccessType", {
	  visitor: ["objectType", "indexType"],
	  aliases: ["FlowType"],
	  fields: {
	    objectType: (0, _utils.validateType)("FlowType"),
	    indexType: (0, _utils.validateType)("FlowType")
	  }
	});
	defineType("OptionalIndexedAccessType", {
	  visitor: ["objectType", "indexType"],
	  aliases: ["FlowType"],
	  fields: {
	    objectType: (0, _utils.validateType)("FlowType"),
	    indexType: (0, _utils.validateType)("FlowType"),
	    optional: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
	  }
	});

	
	return flow;
}

var jsx = {};

var hasRequiredJsx;

function requireJsx () {
	if (hasRequiredJsx) return jsx;
	hasRequiredJsx = 1;

	var _utils = requireUtils();
	const defineType = (0, _utils.defineAliasedType)("JSX");
	defineType("JSXAttribute", {
	  visitor: ["name", "value"],
	  aliases: ["Immutable"],
	  fields: {
	    name: {
	      validate: (0, _utils.assertNodeType)("JSXIdentifier", "JSXNamespacedName")
	    },
	    value: {
	      optional: true,
	      validate: (0, _utils.assertNodeType)("JSXElement", "JSXFragment", "StringLiteral", "JSXExpressionContainer")
	    }
	  }
	});
	defineType("JSXClosingElement", {
	  visitor: ["name"],
	  aliases: ["Immutable"],
	  fields: {
	    name: {
	      validate: (0, _utils.assertNodeType)("JSXIdentifier", "JSXMemberExpression", "JSXNamespacedName")
	    }
	  }
	});
	defineType("JSXElement", {
	  builder: ["openingElement", "closingElement", "children", "selfClosing"],
	  visitor: ["openingElement", "children", "closingElement"],
	  aliases: ["Immutable", "Expression"],
	  fields: Object.assign({
	    openingElement: {
	      validate: (0, _utils.assertNodeType)("JSXOpeningElement")
	    },
	    closingElement: {
	      optional: true,
	      validate: (0, _utils.assertNodeType)("JSXClosingElement")
	    },
	    children: (0, _utils.validateArrayOfType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")
	  }, {
	    selfClosing: {
	      validate: (0, _utils.assertValueType)("boolean"),
	      optional: true
	    }
	  })
	});
	defineType("JSXEmptyExpression", {});
	defineType("JSXExpressionContainer", {
	  visitor: ["expression"],
	  aliases: ["Immutable"],
	  fields: {
	    expression: {
	      validate: (0, _utils.assertNodeType)("Expression", "JSXEmptyExpression")
	    }
	  }
	});
	defineType("JSXSpreadChild", {
	  visitor: ["expression"],
	  aliases: ["Immutable"],
	  fields: {
	    expression: {
	      validate: (0, _utils.assertNodeType)("Expression")
	    }
	  }
	});
	defineType("JSXIdentifier", {
	  builder: ["name"],
	  fields: {
	    name: {
	      validate: (0, _utils.assertValueType)("string")
	    }
	  }
	});
	defineType("JSXMemberExpression", {
	  visitor: ["object", "property"],
	  fields: {
	    object: {
	      validate: (0, _utils.assertNodeType)("JSXMemberExpression", "JSXIdentifier")
	    },
	    property: {
	      validate: (0, _utils.assertNodeType)("JSXIdentifier")
	    }
	  }
	});
	defineType("JSXNamespacedName", {
	  visitor: ["namespace", "name"],
	  fields: {
	    namespace: {
	      validate: (0, _utils.assertNodeType)("JSXIdentifier")
	    },
	    name: {
	      validate: (0, _utils.assertNodeType)("JSXIdentifier")
	    }
	  }
	});
	defineType("JSXOpeningElement", {
	  builder: ["name", "attributes", "selfClosing"],
	  visitor: ["name", "typeParameters", "typeArguments", "attributes"],
	  aliases: ["Immutable"],
	  fields: Object.assign({
	    name: {
	      validate: (0, _utils.assertNodeType)("JSXIdentifier", "JSXMemberExpression", "JSXNamespacedName")
	    },
	    selfClosing: {
	      default: false
	    },
	    attributes: (0, _utils.validateArrayOfType)("JSXAttribute", "JSXSpreadAttribute"),
	    typeArguments: {
	      validate: (0, _utils.assertNodeType)("TypeParameterInstantiation"),
	      optional: true
	    }
	  }, {
	    typeParameters: {
	      validate: (0, _utils.assertNodeType)("TSTypeParameterInstantiation"),
	      optional: true
	    }
	  })
	});
	defineType("JSXSpreadAttribute", {
	  visitor: ["argument"],
	  fields: {
	    argument: {
	      validate: (0, _utils.assertNodeType)("Expression")
	    }
	  }
	});
	defineType("JSXText", {
	  aliases: ["Immutable"],
	  builder: ["value"],
	  fields: {
	    value: {
	      validate: (0, _utils.assertValueType)("string")
	    }
	  }
	});
	defineType("JSXFragment", {
	  builder: ["openingFragment", "closingFragment", "children"],
	  visitor: ["openingFragment", "children", "closingFragment"],
	  aliases: ["Immutable", "Expression"],
	  fields: {
	    openingFragment: {
	      validate: (0, _utils.assertNodeType)("JSXOpeningFragment")
	    },
	    closingFragment: {
	      validate: (0, _utils.assertNodeType)("JSXClosingFragment")
	    },
	    children: (0, _utils.validateArrayOfType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")
	  }
	});
	defineType("JSXOpeningFragment", {
	  aliases: ["Immutable"]
	});
	defineType("JSXClosingFragment", {
	  aliases: ["Immutable"]
	});

	
	return jsx;
}

var misc = {};

var placeholders = {};

var hasRequiredPlaceholders;

function requirePlaceholders () {
	if (hasRequiredPlaceholders) return placeholders;
	hasRequiredPlaceholders = 1;

	Object.defineProperty(placeholders, "__esModule", {
	  value: true
	});
	placeholders.PLACEHOLDERS_FLIPPED_ALIAS = placeholders.PLACEHOLDERS_ALIAS = placeholders.PLACEHOLDERS = void 0;
	var _utils = requireUtils();
	const PLACEHOLDERS = placeholders.PLACEHOLDERS = ["Identifier", "StringLiteral", "Expression", "Statement", "Declaration", "BlockStatement", "ClassBody", "Pattern"];
	const PLACEHOLDERS_ALIAS = placeholders.PLACEHOLDERS_ALIAS = {
	  Declaration: ["Statement"],
	  Pattern: ["PatternLike", "LVal"]
	};
	for (const type of PLACEHOLDERS) {
	  const alias = _utils.ALIAS_KEYS[type];
	  if (alias != null && alias.length) PLACEHOLDERS_ALIAS[type] = alias;
	}
	const PLACEHOLDERS_FLIPPED_ALIAS = placeholders.PLACEHOLDERS_FLIPPED_ALIAS = {};
	Object.keys(PLACEHOLDERS_ALIAS).forEach(type => {
	  PLACEHOLDERS_ALIAS[type].forEach(alias => {
	    if (!hasOwnProperty.call(PLACEHOLDERS_FLIPPED_ALIAS, alias)) {
	      PLACEHOLDERS_FLIPPED_ALIAS[alias] = [];
	    }
	    PLACEHOLDERS_FLIPPED_ALIAS[alias].push(type);
	  });
	});

	
	return placeholders;
}

var hasRequiredMisc;

function requireMisc () {
	if (hasRequiredMisc) return misc;
	hasRequiredMisc = 1;

	var _utils = requireUtils();
	var _placeholders = requirePlaceholders();
	var _core = requireCore();
	const defineType = (0, _utils.defineAliasedType)("Miscellaneous");
	{
	  defineType("Noop", {
	    visitor: []
	  });
	}
	defineType("Placeholder", {
	  visitor: [],
	  builder: ["expectedNode", "name"],
	  fields: Object.assign({
	    name: {
	      validate: (0, _utils.assertNodeType)("Identifier")
	    },
	    expectedNode: {
	      validate: (0, _utils.assertOneOf)(..._placeholders.PLACEHOLDERS)
	    }
	  }, (0, _core.patternLikeCommon)())
	});
	defineType("V8IntrinsicIdentifier", {
	  builder: ["name"],
	  fields: {
	    name: {
	      validate: (0, _utils.assertValueType)("string")
	    }
	  }
	});

	
	return misc;
}

var experimental = {};

var hasRequiredExperimental;

function requireExperimental () {
	if (hasRequiredExperimental) return experimental;
	hasRequiredExperimental = 1;

	var _utils = requireUtils();
	(0, _utils.default)("ArgumentPlaceholder", {});
	(0, _utils.default)("BindExpression", {
	  visitor: ["object", "callee"],
	  aliases: ["Expression"],
	  fields: !process.env.BABEL_TYPES_8_BREAKING ? {
	    object: {
	      validate: Object.assign(() => {}, {
	        oneOfNodeTypes: ["Expression"]
	      })
	    },
	    callee: {
	      validate: Object.assign(() => {}, {
	        oneOfNodeTypes: ["Expression"]
	      })
	    }
	  } : {
	    object: {
	      validate: (0, _utils.assertNodeType)("Expression")
	    },
	    callee: {
	      validate: (0, _utils.assertNodeType)("Expression")
	    }
	  }
	});
	(0, _utils.default)("Decorator", {
	  visitor: ["expression"],
	  fields: {
	    expression: {
	      validate: (0, _utils.assertNodeType)("Expression")
	    }
	  }
	});
	(0, _utils.default)("DoExpression", {
	  visitor: ["body"],
	  builder: ["body", "async"],
	  aliases: ["Expression"],
	  fields: {
	    body: {
	      validate: (0, _utils.assertNodeType)("BlockStatement")
	    },
	    async: {
	      validate: (0, _utils.assertValueType)("boolean"),
	      default: false
	    }
	  }
	});
	(0, _utils.default)("ExportDefaultSpecifier", {
	  visitor: ["exported"],
	  aliases: ["ModuleSpecifier"],
	  fields: {
	    exported: {
	      validate: (0, _utils.assertNodeType)("Identifier")
	    }
	  }
	});
	(0, _utils.default)("RecordExpression", {
	  visitor: ["properties"],
	  aliases: ["Expression"],
	  fields: {
	    properties: (0, _utils.validateArrayOfType)("ObjectProperty", "SpreadElement")
	  }
	});
	(0, _utils.default)("TupleExpression", {
	  fields: {
	    elements: {
	      validate: (0, _utils.arrayOfType)("Expression", "SpreadElement"),
	      default: []
	    }
	  },
	  visitor: ["elements"],
	  aliases: ["Expression"]
	});
	{
	  (0, _utils.default)("DecimalLiteral", {
	    builder: ["value"],
	    fields: {
	      value: {
	        validate: (0, _utils.assertValueType)("string")
	      }
	    },
	    aliases: ["Expression", "Pureish", "Literal", "Immutable"]
	  });
	}
	(0, _utils.default)("ModuleExpression", {
	  visitor: ["body"],
	  fields: {
	    body: {
	      validate: (0, _utils.assertNodeType)("Program")
	    }
	  },
	  aliases: ["Expression"]
	});
	(0, _utils.default)("TopicReference", {
	  aliases: ["Expression"]
	});
	(0, _utils.default)("PipelineTopicExpression", {
	  builder: ["expression"],
	  visitor: ["expression"],
	  fields: {
	    expression: {
	      validate: (0, _utils.assertNodeType)("Expression")
	    }
	  },
	  aliases: ["Expression"]
	});
	(0, _utils.default)("PipelineBareFunction", {
	  builder: ["callee"],
	  visitor: ["callee"],
	  fields: {
	    callee: {
	      validate: (0, _utils.assertNodeType)("Expression")
	    }
	  },
	  aliases: ["Expression"]
	});
	(0, _utils.default)("PipelinePrimaryTopicReference", {
	  aliases: ["Expression"]
	});
	(0, _utils.default)("VoidPattern", {
	  aliases: ["Pattern", "PatternLike", "FunctionParameter"]
	});

	
	return experimental;
}

var typescript = {};

var hasRequiredTypescript;

function requireTypescript () {
	if (hasRequiredTypescript) return typescript;
	hasRequiredTypescript = 1;

	var _utils = requireUtils();
	var _core = requireCore();
	var _is = requireIs();
	const defineType = (0, _utils.defineAliasedType)("TypeScript");
	const bool = (0, _utils.assertValueType)("boolean");
	const tSFunctionTypeAnnotationCommon = () => ({
	  returnType: {
	    validate: (0, _utils.assertNodeType)("TSTypeAnnotation", "Noop"),
	    optional: true
	  },
	  typeParameters: {
	    validate: (0, _utils.assertNodeType)("TSTypeParameterDeclaration", "Noop"),
	    optional: true
	  }
	});
	defineType("TSParameterProperty", {
	  aliases: ["LVal"],
	  visitor: ["parameter"],
	  fields: {
	    accessibility: {
	      validate: (0, _utils.assertOneOf)("public", "private", "protected"),
	      optional: true
	    },
	    readonly: {
	      validate: (0, _utils.assertValueType)("boolean"),
	      optional: true
	    },
	    parameter: {
	      validate: (0, _utils.assertNodeType)("Identifier", "AssignmentPattern")
	    },
	    override: {
	      validate: (0, _utils.assertValueType)("boolean"),
	      optional: true
	    },
	    decorators: {
	      validate: (0, _utils.arrayOfType)("Decorator"),
	      optional: true
	    }
	  }
	});
	defineType("TSDeclareFunction", {
	  aliases: ["Statement", "Declaration"],
	  visitor: ["id", "typeParameters", "params", "returnType"],
	  fields: Object.assign({}, (0, _core.functionDeclarationCommon)(), tSFunctionTypeAnnotationCommon())
	});
	defineType("TSDeclareMethod", {
	  visitor: ["decorators", "key", "typeParameters", "params", "returnType"],
	  fields: Object.assign({}, (0, _core.classMethodOrDeclareMethodCommon)(), tSFunctionTypeAnnotationCommon())
	});
	defineType("TSQualifiedName", {
	  aliases: ["TSEntityName"],
	  visitor: ["left", "right"],
	  fields: {
	    left: (0, _utils.validateType)("TSEntityName"),
	    right: (0, _utils.validateType)("Identifier")
	  }
	});
	const signatureDeclarationCommon = () => ({
	  typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterDeclaration"),
	  ["parameters"]: (0, _utils.validateArrayOfType)("ArrayPattern", "Identifier", "ObjectPattern", "RestElement"),
	  ["typeAnnotation"]: (0, _utils.validateOptionalType)("TSTypeAnnotation")
	});
	const callConstructSignatureDeclaration = {
	  aliases: ["TSTypeElement"],
	  visitor: ["typeParameters", "parameters", "typeAnnotation"],
	  fields: signatureDeclarationCommon()
	};
	defineType("TSCallSignatureDeclaration", callConstructSignatureDeclaration);
	defineType("TSConstructSignatureDeclaration", callConstructSignatureDeclaration);
	const namedTypeElementCommon = () => ({
	  key: (0, _utils.validateType)("Expression"),
	  computed: {
	    default: false
	  },
	  optional: (0, _utils.validateOptional)(bool)
	});
	defineType("TSPropertySignature", {
	  aliases: ["TSTypeElement"],
	  visitor: ["key", "typeAnnotation"],
	  fields: Object.assign({}, namedTypeElementCommon(), {
	    readonly: (0, _utils.validateOptional)(bool),
	    typeAnnotation: (0, _utils.validateOptionalType)("TSTypeAnnotation"),
	    kind: {
	      optional: true,
	      validate: (0, _utils.assertOneOf)("get", "set")
	    }
	  })
	});
	defineType("TSMethodSignature", {
	  aliases: ["TSTypeElement"],
	  visitor: ["key", "typeParameters", "parameters", "typeAnnotation"],
	  fields: Object.assign({}, signatureDeclarationCommon(), namedTypeElementCommon(), {
	    kind: {
	      validate: (0, _utils.assertOneOf)("method", "get", "set")
	    }
	  })
	});
	defineType("TSIndexSignature", {
	  aliases: ["TSTypeElement"],
	  visitor: ["parameters", "typeAnnotation"],
	  fields: {
	    readonly: (0, _utils.validateOptional)(bool),
	    static: (0, _utils.validateOptional)(bool),
	    parameters: (0, _utils.validateArrayOfType)("Identifier"),
	    typeAnnotation: (0, _utils.validateOptionalType)("TSTypeAnnotation")
	  }
	});
	const tsKeywordTypes = ["TSAnyKeyword", "TSBooleanKeyword", "TSBigIntKeyword", "TSIntrinsicKeyword", "TSNeverKeyword", "TSNullKeyword", "TSNumberKeyword", "TSObjectKeyword", "TSStringKeyword", "TSSymbolKeyword", "TSUndefinedKeyword", "TSUnknownKeyword", "TSVoidKeyword"];
	for (const type of tsKeywordTypes) {
	  defineType(type, {
	    aliases: ["TSType", "TSBaseType"],
	    visitor: [],
	    fields: {}
	  });
	}
	defineType("TSThisType", {
	  aliases: ["TSType", "TSBaseType"],
	  visitor: [],
	  fields: {}
	});
	const fnOrCtrBase = {
	  aliases: ["TSType"],
	  visitor: ["typeParameters", "parameters", "typeAnnotation"]
	};
	defineType("TSFunctionType", Object.assign({}, fnOrCtrBase, {
	  fields: signatureDeclarationCommon()
	}));
	defineType("TSConstructorType", Object.assign({}, fnOrCtrBase, {
	  fields: Object.assign({}, signatureDeclarationCommon(), {
	    abstract: (0, _utils.validateOptional)(bool)
	  })
	}));
	defineType("TSTypeReference", {
	  aliases: ["TSType"],
	  visitor: ["typeName", "typeParameters"],
	  fields: {
	    typeName: (0, _utils.validateType)("TSEntityName"),
	    ["typeParameters"]: (0, _utils.validateOptionalType)("TSTypeParameterInstantiation")
	  }
	});
	defineType("TSTypePredicate", {
	  aliases: ["TSType"],
	  visitor: ["parameterName", "typeAnnotation"],
	  builder: ["parameterName", "typeAnnotation", "asserts"],
	  fields: {
	    parameterName: (0, _utils.validateType)("Identifier", "TSThisType"),
	    typeAnnotation: (0, _utils.validateOptionalType)("TSTypeAnnotation"),
	    asserts: (0, _utils.validateOptional)(bool)
	  }
	});
	defineType("TSTypeQuery", {
	  aliases: ["TSType"],
	  visitor: ["exprName", "typeParameters"],
	  fields: {
	    exprName: (0, _utils.validateType)("TSEntityName", "TSImportType"),
	    ["typeParameters"]: (0, _utils.validateOptionalType)("TSTypeParameterInstantiation")
	  }
	});
	defineType("TSTypeLiteral", {
	  aliases: ["TSType"],
	  visitor: ["members"],
	  fields: {
	    members: (0, _utils.validateArrayOfType)("TSTypeElement")
	  }
	});
	defineType("TSArrayType", {
	  aliases: ["TSType"],
	  visitor: ["elementType"],
	  fields: {
	    elementType: (0, _utils.validateType)("TSType")
	  }
	});
	defineType("TSTupleType", {
	  aliases: ["TSType"],
	  visitor: ["elementTypes"],
	  fields: {
	    elementTypes: (0, _utils.validateArrayOfType)("TSType", "TSNamedTupleMember")
	  }
	});
	defineType("TSOptionalType", {
	  aliases: ["TSType"],
	  visitor: ["typeAnnotation"],
	  fields: {
	    typeAnnotation: (0, _utils.validateType)("TSType")
	  }
	});
	defineType("TSRestType", {
	  aliases: ["TSType"],
	  visitor: ["typeAnnotation"],
	  fields: {
	    typeAnnotation: (0, _utils.validateType)("TSType")
	  }
	});
	defineType("TSNamedTupleMember", {
	  visitor: ["label", "elementType"],
	  builder: ["label", "elementType", "optional"],
	  fields: {
	    label: (0, _utils.validateType)("Identifier"),
	    optional: {
	      validate: bool,
	      default: false
	    },
	    elementType: (0, _utils.validateType)("TSType")
	  }
	});
	const unionOrIntersection = {
	  aliases: ["TSType"],
	  visitor: ["types"],
	  fields: {
	    types: (0, _utils.validateArrayOfType)("TSType")
	  }
	};
	defineType("TSUnionType", unionOrIntersection);
	defineType("TSIntersectionType", unionOrIntersection);
	defineType("TSConditionalType", {
	  aliases: ["TSType"],
	  visitor: ["checkType", "extendsType", "trueType", "falseType"],
	  fields: {
	    checkType: (0, _utils.validateType)("TSType"),
	    extendsType: (0, _utils.validateType)("TSType"),
	    trueType: (0, _utils.validateType)("TSType"),
	    falseType: (0, _utils.validateType)("TSType")
	  }
	});
	defineType("TSInferType", {
	  aliases: ["TSType"],
	  visitor: ["typeParameter"],
	  fields: {
	    typeParameter: (0, _utils.validateType)("TSTypeParameter")
	  }
	});
	defineType("TSParenthesizedType", {
	  aliases: ["TSType"],
	  visitor: ["typeAnnotation"],
	  fields: {
	    typeAnnotation: (0, _utils.validateType)("TSType")
	  }
	});
	defineType("TSTypeOperator", {
	  aliases: ["TSType"],
	  visitor: ["typeAnnotation"],
	  builder: ["typeAnnotation", "operator"],
	  fields: {
	    operator: {
	      validate: (0, _utils.assertValueType)("string")
	    },
	    typeAnnotation: (0, _utils.validateType)("TSType")
	  }
	});
	defineType("TSIndexedAccessType", {
	  aliases: ["TSType"],
	  visitor: ["objectType", "indexType"],
	  fields: {
	    objectType: (0, _utils.validateType)("TSType"),
	    indexType: (0, _utils.validateType)("TSType")
	  }
	});
	defineType("TSMappedType", {
	  aliases: ["TSType"],
	  visitor: ["typeParameter", "nameType", "typeAnnotation"],
	  builder: ["typeParameter", "typeAnnotation", "nameType"],
	  fields: Object.assign({}, {
	    typeParameter: (0, _utils.validateType)("TSTypeParameter")
	  }, {
	    readonly: (0, _utils.validateOptional)((0, _utils.assertOneOf)(true, false, "+", "-")),
	    optional: (0, _utils.validateOptional)((0, _utils.assertOneOf)(true, false, "+", "-")),
	    typeAnnotation: (0, _utils.validateOptionalType)("TSType"),
	    nameType: (0, _utils.validateOptionalType)("TSType")
	  })
	});
	defineType("TSTemplateLiteralType", {
	  aliases: ["TSType", "TSBaseType"],
	  visitor: ["quasis", "types"],
	  fields: {
	    quasis: (0, _utils.validateArrayOfType)("TemplateElement"),
	    types: {
	      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("TSType")), function (node, key, val) {
	        if (node.quasis.length !== val.length + 1) {
	          throw new TypeError(`Number of ${node.type} quasis should be exactly one more than the number of types.\nExpected ${val.length + 1} quasis but got ${node.quasis.length}`);
	        }
	      })
	    }
	  }
	});
	defineType("TSLiteralType", {
	  aliases: ["TSType", "TSBaseType"],
	  visitor: ["literal"],
	  fields: {
	    literal: {
	      validate: function () {
	        const unaryExpression = (0, _utils.assertNodeType)("NumericLiteral", "BigIntLiteral");
	        const unaryOperator = (0, _utils.assertOneOf)("-");
	        const literal = (0, _utils.assertNodeType)("NumericLiteral", "StringLiteral", "BooleanLiteral", "BigIntLiteral", "TemplateLiteral");
	        function validator(parent, key, node) {
	          if ((0, _is.default)("UnaryExpression", node)) {
	            unaryOperator(node, "operator", node.operator);
	            unaryExpression(node, "argument", node.argument);
	          } else {
	            literal(parent, key, node);
	          }
	        }
	        validator.oneOfNodeTypes = ["NumericLiteral", "StringLiteral", "BooleanLiteral", "BigIntLiteral", "TemplateLiteral", "UnaryExpression"];
	        return validator;
	      }()
	    }
	  }
	});
	{
	  defineType("TSExpressionWithTypeArguments", {
	    aliases: ["TSType"],
	    visitor: ["expression", "typeParameters"],
	    fields: {
	      expression: (0, _utils.validateType)("TSEntityName"),
	      typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterInstantiation")
	    }
	  });
	}
	defineType("TSInterfaceDeclaration", {
	  aliases: ["Statement", "Declaration"],
	  visitor: ["id", "typeParameters", "extends", "body"],
	  fields: {
	    declare: (0, _utils.validateOptional)(bool),
	    id: (0, _utils.validateType)("Identifier"),
	    typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterDeclaration"),
	    extends: (0, _utils.validateOptional)((0, _utils.arrayOfType)("TSExpressionWithTypeArguments")),
	    body: (0, _utils.validateType)("TSInterfaceBody")
	  }
	});
	defineType("TSInterfaceBody", {
	  visitor: ["body"],
	  fields: {
	    body: (0, _utils.validateArrayOfType)("TSTypeElement")
	  }
	});
	defineType("TSTypeAliasDeclaration", {
	  aliases: ["Statement", "Declaration"],
	  visitor: ["id", "typeParameters", "typeAnnotation"],
	  fields: {
	    declare: (0, _utils.validateOptional)(bool),
	    id: (0, _utils.validateType)("Identifier"),
	    typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterDeclaration"),
	    typeAnnotation: (0, _utils.validateType)("TSType")
	  }
	});
	defineType("TSInstantiationExpression", {
	  aliases: ["Expression"],
	  visitor: ["expression", "typeParameters"],
	  fields: {
	    expression: (0, _utils.validateType)("Expression"),
	    ["typeParameters"]: (0, _utils.validateOptionalType)("TSTypeParameterInstantiation")
	  }
	});
	const TSTypeExpression = {
	  aliases: ["Expression", "LVal", "PatternLike"],
	  visitor: ["expression", "typeAnnotation"],
	  fields: {
	    expression: (0, _utils.validateType)("Expression"),
	    typeAnnotation: (0, _utils.validateType)("TSType")
	  }
	};
	defineType("TSAsExpression", TSTypeExpression);
	defineType("TSSatisfiesExpression", TSTypeExpression);
	defineType("TSTypeAssertion", {
	  aliases: ["Expression", "LVal", "PatternLike"],
	  visitor: ["typeAnnotation", "expression"],
	  fields: {
	    typeAnnotation: (0, _utils.validateType)("TSType"),
	    expression: (0, _utils.validateType)("Expression")
	  }
	});
	defineType("TSEnumBody", {
	  visitor: ["members"],
	  fields: {
	    members: (0, _utils.validateArrayOfType)("TSEnumMember")
	  }
	});
	{
	  defineType("TSEnumDeclaration", {
	    aliases: ["Statement", "Declaration"],
	    visitor: ["id", "members"],
	    fields: {
	      declare: (0, _utils.validateOptional)(bool),
	      const: (0, _utils.validateOptional)(bool),
	      id: (0, _utils.validateType)("Identifier"),
	      members: (0, _utils.validateArrayOfType)("TSEnumMember"),
	      initializer: (0, _utils.validateOptionalType)("Expression"),
	      body: (0, _utils.validateOptionalType)("TSEnumBody")
	    }
	  });
	}
	defineType("TSEnumMember", {
	  visitor: ["id", "initializer"],
	  fields: {
	    id: (0, _utils.validateType)("Identifier", "StringLiteral"),
	    initializer: (0, _utils.validateOptionalType)("Expression")
	  }
	});
	defineType("TSModuleDeclaration", {
	  aliases: ["Statement", "Declaration"],
	  visitor: ["id", "body"],
	  fields: Object.assign({
	    kind: {
	      validate: (0, _utils.assertOneOf)("global", "module", "namespace")
	    },
	    declare: (0, _utils.validateOptional)(bool)
	  }, {
	    global: (0, _utils.validateOptional)(bool)
	  }, {
	    id: (0, _utils.validateType)("Identifier", "StringLiteral"),
	    body: (0, _utils.validateType)("TSModuleBlock", "TSModuleDeclaration")
	  })
	});
	defineType("TSModuleBlock", {
	  aliases: ["Scopable", "Block", "BlockParent", "FunctionParent"],
	  visitor: ["body"],
	  fields: {
	    body: (0, _utils.validateArrayOfType)("Statement")
	  }
	});
	defineType("TSImportType", {
	  aliases: ["TSType"],
	  builder: ["argument", "qualifier", "typeParameters"],
	  visitor: ["argument", "options", "qualifier", "typeParameters"],
	  fields: {
	    argument: (0, _utils.validateType)("StringLiteral"),
	    qualifier: (0, _utils.validateOptionalType)("TSEntityName"),
	    ["typeParameters"]: (0, _utils.validateOptionalType)("TSTypeParameterInstantiation"),
	    options: {
	      validate: (0, _utils.assertNodeType)("ObjectExpression"),
	      optional: true
	    }
	  }
	});
	defineType("TSImportEqualsDeclaration", {
	  aliases: ["Statement", "Declaration"],
	  visitor: ["id", "moduleReference"],
	  fields: Object.assign({}, {
	    isExport: (0, _utils.validate)(bool)
	  }, {
	    id: (0, _utils.validateType)("Identifier"),
	    moduleReference: (0, _utils.validateType)("TSEntityName", "TSExternalModuleReference"),
	    importKind: {
	      validate: (0, _utils.assertOneOf)("type", "value"),
	      optional: true
	    }
	  })
	});
	defineType("TSExternalModuleReference", {
	  visitor: ["expression"],
	  fields: {
	    expression: (0, _utils.validateType)("StringLiteral")
	  }
	});
	defineType("TSNonNullExpression", {
	  aliases: ["Expression", "LVal", "PatternLike"],
	  visitor: ["expression"],
	  fields: {
	    expression: (0, _utils.validateType)("Expression")
	  }
	});
	defineType("TSExportAssignment", {
	  aliases: ["Statement"],
	  visitor: ["expression"],
	  fields: {
	    expression: (0, _utils.validateType)("Expression")
	  }
	});
	defineType("TSNamespaceExportDeclaration", {
	  aliases: ["Statement"],
	  visitor: ["id"],
	  fields: {
	    id: (0, _utils.validateType)("Identifier")
	  }
	});
	defineType("TSTypeAnnotation", {
	  visitor: ["typeAnnotation"],
	  fields: {
	    typeAnnotation: {
	      validate: (0, _utils.assertNodeType)("TSType")
	    }
	  }
	});
	defineType("TSTypeParameterInstantiation", {
	  visitor: ["params"],
	  fields: {
	    params: (0, _utils.validateArrayOfType)("TSType")
	  }
	});
	defineType("TSTypeParameterDeclaration", {
	  visitor: ["params"],
	  fields: {
	    params: (0, _utils.validateArrayOfType)("TSTypeParameter")
	  }
	});
	defineType("TSTypeParameter", {
	  builder: ["constraint", "default", "name"],
	  visitor: ["constraint", "default"],
	  fields: {
	    name: {
	      validate: (0, _utils.assertValueType)("string")
	    },
	    in: {
	      validate: (0, _utils.assertValueType)("boolean"),
	      optional: true
	    },
	    out: {
	      validate: (0, _utils.assertValueType)("boolean"),
	      optional: true
	    },
	    const: {
	      validate: (0, _utils.assertValueType)("boolean"),
	      optional: true
	    },
	    constraint: {
	      validate: (0, _utils.assertNodeType)("TSType"),
	      optional: true
	    },
	    default: {
	      validate: (0, _utils.assertNodeType)("TSType"),
	      optional: true
	    }
	  }
	});

	
	return typescript;
}

var deprecatedAliases = {};

Object.defineProperty(deprecatedAliases, "__esModule", {
  value: true
});
deprecatedAliases.DEPRECATED_ALIASES = void 0;
deprecatedAliases.DEPRECATED_ALIASES = {
  ModuleDeclaration: "ImportOrExportDeclaration"
};

var hasRequiredDefinitions;

function requireDefinitions () {
	if (hasRequiredDefinitions) return definitions;
	hasRequiredDefinitions = 1;
	(function (exports) {

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		Object.defineProperty(exports, "ALIAS_KEYS", {
		  enumerable: true,
		  get: function () {
		    return _utils.ALIAS_KEYS;
		  }
		});
		Object.defineProperty(exports, "BUILDER_KEYS", {
		  enumerable: true,
		  get: function () {
		    return _utils.BUILDER_KEYS;
		  }
		});
		Object.defineProperty(exports, "DEPRECATED_ALIASES", {
		  enumerable: true,
		  get: function () {
		    return _deprecatedAliases.DEPRECATED_ALIASES;
		  }
		});
		Object.defineProperty(exports, "DEPRECATED_KEYS", {
		  enumerable: true,
		  get: function () {
		    return _utils.DEPRECATED_KEYS;
		  }
		});
		Object.defineProperty(exports, "FLIPPED_ALIAS_KEYS", {
		  enumerable: true,
		  get: function () {
		    return _utils.FLIPPED_ALIAS_KEYS;
		  }
		});
		Object.defineProperty(exports, "NODE_FIELDS", {
		  enumerable: true,
		  get: function () {
		    return _utils.NODE_FIELDS;
		  }
		});
		Object.defineProperty(exports, "NODE_PARENT_VALIDATIONS", {
		  enumerable: true,
		  get: function () {
		    return _utils.NODE_PARENT_VALIDATIONS;
		  }
		});
		Object.defineProperty(exports, "PLACEHOLDERS", {
		  enumerable: true,
		  get: function () {
		    return _placeholders.PLACEHOLDERS;
		  }
		});
		Object.defineProperty(exports, "PLACEHOLDERS_ALIAS", {
		  enumerable: true,
		  get: function () {
		    return _placeholders.PLACEHOLDERS_ALIAS;
		  }
		});
		Object.defineProperty(exports, "PLACEHOLDERS_FLIPPED_ALIAS", {
		  enumerable: true,
		  get: function () {
		    return _placeholders.PLACEHOLDERS_FLIPPED_ALIAS;
		  }
		});
		exports.TYPES = void 0;
		Object.defineProperty(exports, "VISITOR_KEYS", {
		  enumerable: true,
		  get: function () {
		    return _utils.VISITOR_KEYS;
		  }
		});
		requireCore();
		requireFlow();
		requireJsx();
		requireMisc();
		requireExperimental();
		requireTypescript();
		var _utils = requireUtils();
		var _placeholders = requirePlaceholders();
		var _deprecatedAliases = deprecatedAliases;
		Object.keys(_deprecatedAliases.DEPRECATED_ALIASES).forEach(deprecatedAlias => {
		  _utils.FLIPPED_ALIAS_KEYS[deprecatedAlias] = _utils.FLIPPED_ALIAS_KEYS[_deprecatedAliases.DEPRECATED_ALIASES[deprecatedAlias]];
		});
		for (const {
		  types,
		  set
		} of _utils.allExpandedTypes) {
		  for (const type of types) {
		    const aliases = _utils.FLIPPED_ALIAS_KEYS[type];
		    if (aliases) {
		      aliases.forEach(set.add, set);
		    } else {
		      set.add(type);
		    }
		  }
		}
		exports.TYPES = [].concat(Object.keys(_utils.VISITOR_KEYS), Object.keys(_utils.FLIPPED_ALIAS_KEYS), Object.keys(_utils.DEPRECATED_KEYS));

		
	} (definitions));
	return definitions;
}

var hasRequiredValidate;

function requireValidate () {
	if (hasRequiredValidate) return validate$1;
	hasRequiredValidate = 1;

	Object.defineProperty(validate$1, "__esModule", {
	  value: true
	});
	validate$1.default = validate;
	validate$1.validateChild = validateChild;
	validate$1.validateField = validateField;
	validate$1.validateInternal = validateInternal;
	var _index = requireDefinitions();
	function validate(node, key, val) {
	  if (!node) return;
	  const fields = _index.NODE_FIELDS[node.type];
	  if (!fields) return;
	  const field = fields[key];
	  validateField(node, key, val, field);
	  validateChild(node, key, val);
	}
	function validateInternal(field, node, key, val, maybeNode) {
	  if (!(field != null && field.validate)) return;
	  if (field.optional && val == null) return;
	  field.validate(node, key, val);
	  if (maybeNode) {
	    var _NODE_PARENT_VALIDATI;
	    const type = val.type;
	    if (type == null) return;
	    (_NODE_PARENT_VALIDATI = _index.NODE_PARENT_VALIDATIONS[type]) == null || _NODE_PARENT_VALIDATI.call(_index.NODE_PARENT_VALIDATIONS, node, key, val);
	  }
	}
	function validateField(node, key, val, field) {
	  if (!(field != null && field.validate)) return;
	  if (field.optional && val == null) return;
	  field.validate(node, key, val);
	}
	function validateChild(node, key, val) {
	  var _NODE_PARENT_VALIDATI2;
	  const type = val == null ? void 0 : val.type;
	  if (type == null) return;
	  (_NODE_PARENT_VALIDATI2 = _index.NODE_PARENT_VALIDATIONS[type]) == null || _NODE_PARENT_VALIDATI2.call(_index.NODE_PARENT_VALIDATIONS, node, key, val);
	}

	
	return validate$1;
}

Object.defineProperty(lowercase, "__esModule", {
  value: true
});
lowercase.anyTypeAnnotation = anyTypeAnnotation;
lowercase.argumentPlaceholder = argumentPlaceholder;
lowercase.arrayExpression = arrayExpression;
lowercase.arrayPattern = arrayPattern;
lowercase.arrayTypeAnnotation = arrayTypeAnnotation;
lowercase.arrowFunctionExpression = arrowFunctionExpression;
lowercase.assignmentExpression = assignmentExpression;
lowercase.assignmentPattern = assignmentPattern;
lowercase.awaitExpression = awaitExpression;
lowercase.bigIntLiteral = bigIntLiteral;
lowercase.binaryExpression = binaryExpression;
lowercase.bindExpression = bindExpression;
lowercase.blockStatement = blockStatement;
lowercase.booleanLiteral = booleanLiteral;
lowercase.booleanLiteralTypeAnnotation = booleanLiteralTypeAnnotation;
lowercase.booleanTypeAnnotation = booleanTypeAnnotation;
lowercase.breakStatement = breakStatement;
lowercase.callExpression = callExpression;
lowercase.catchClause = catchClause;
lowercase.classAccessorProperty = classAccessorProperty;
lowercase.classBody = classBody;
lowercase.classDeclaration = classDeclaration;
lowercase.classExpression = classExpression;
lowercase.classImplements = classImplements;
lowercase.classMethod = classMethod;
lowercase.classPrivateMethod = classPrivateMethod;
lowercase.classPrivateProperty = classPrivateProperty;
lowercase.classProperty = classProperty;
lowercase.conditionalExpression = conditionalExpression;
lowercase.continueStatement = continueStatement;
lowercase.debuggerStatement = debuggerStatement;
lowercase.decimalLiteral = decimalLiteral;
lowercase.declareClass = declareClass;
lowercase.declareExportAllDeclaration = declareExportAllDeclaration;
lowercase.declareExportDeclaration = declareExportDeclaration;
lowercase.declareFunction = declareFunction;
lowercase.declareInterface = declareInterface;
lowercase.declareModule = declareModule;
lowercase.declareModuleExports = declareModuleExports;
lowercase.declareOpaqueType = declareOpaqueType;
lowercase.declareTypeAlias = declareTypeAlias;
lowercase.declareVariable = declareVariable;
lowercase.declaredPredicate = declaredPredicate;
lowercase.decorator = decorator;
lowercase.directive = directive;
lowercase.directiveLiteral = directiveLiteral;
lowercase.doExpression = doExpression;
lowercase.doWhileStatement = doWhileStatement;
lowercase.emptyStatement = emptyStatement;
lowercase.emptyTypeAnnotation = emptyTypeAnnotation;
lowercase.enumBooleanBody = enumBooleanBody;
lowercase.enumBooleanMember = enumBooleanMember;
lowercase.enumDeclaration = enumDeclaration;
lowercase.enumDefaultedMember = enumDefaultedMember;
lowercase.enumNumberBody = enumNumberBody;
lowercase.enumNumberMember = enumNumberMember;
lowercase.enumStringBody = enumStringBody;
lowercase.enumStringMember = enumStringMember;
lowercase.enumSymbolBody = enumSymbolBody;
lowercase.existsTypeAnnotation = existsTypeAnnotation;
lowercase.exportAllDeclaration = exportAllDeclaration;
lowercase.exportDefaultDeclaration = exportDefaultDeclaration;
lowercase.exportDefaultSpecifier = exportDefaultSpecifier;
lowercase.exportNamedDeclaration = exportNamedDeclaration;
lowercase.exportNamespaceSpecifier = exportNamespaceSpecifier;
lowercase.exportSpecifier = exportSpecifier;
lowercase.expressionStatement = expressionStatement;
lowercase.file = file;
lowercase.forInStatement = forInStatement;
lowercase.forOfStatement = forOfStatement;
lowercase.forStatement = forStatement;
lowercase.functionDeclaration = functionDeclaration;
lowercase.functionExpression = functionExpression;
lowercase.functionTypeAnnotation = functionTypeAnnotation;
lowercase.functionTypeParam = functionTypeParam;
lowercase.genericTypeAnnotation = genericTypeAnnotation;
lowercase.identifier = identifier;
lowercase.ifStatement = ifStatement;
lowercase.import = _import;
lowercase.importAttribute = importAttribute;
lowercase.importDeclaration = importDeclaration;
lowercase.importDefaultSpecifier = importDefaultSpecifier;
lowercase.importExpression = importExpression;
lowercase.importNamespaceSpecifier = importNamespaceSpecifier;
lowercase.importSpecifier = importSpecifier;
lowercase.indexedAccessType = indexedAccessType;
lowercase.inferredPredicate = inferredPredicate;
lowercase.interfaceDeclaration = interfaceDeclaration;
lowercase.interfaceExtends = interfaceExtends;
lowercase.interfaceTypeAnnotation = interfaceTypeAnnotation;
lowercase.interpreterDirective = interpreterDirective;
lowercase.intersectionTypeAnnotation = intersectionTypeAnnotation;
lowercase.jSXAttribute = lowercase.jsxAttribute = jsxAttribute;
lowercase.jSXClosingElement = lowercase.jsxClosingElement = jsxClosingElement;
lowercase.jSXClosingFragment = lowercase.jsxClosingFragment = jsxClosingFragment;
lowercase.jSXElement = lowercase.jsxElement = jsxElement;
lowercase.jSXEmptyExpression = lowercase.jsxEmptyExpression = jsxEmptyExpression;
lowercase.jSXExpressionContainer = lowercase.jsxExpressionContainer = jsxExpressionContainer;
lowercase.jSXFragment = lowercase.jsxFragment = jsxFragment;
lowercase.jSXIdentifier = lowercase.jsxIdentifier = jsxIdentifier;
lowercase.jSXMemberExpression = lowercase.jsxMemberExpression = jsxMemberExpression;
lowercase.jSXNamespacedName = lowercase.jsxNamespacedName = jsxNamespacedName;
lowercase.jSXOpeningElement = lowercase.jsxOpeningElement = jsxOpeningElement;
lowercase.jSXOpeningFragment = lowercase.jsxOpeningFragment = jsxOpeningFragment;
lowercase.jSXSpreadAttribute = lowercase.jsxSpreadAttribute = jsxSpreadAttribute;
lowercase.jSXSpreadChild = lowercase.jsxSpreadChild = jsxSpreadChild;
lowercase.jSXText = lowercase.jsxText = jsxText;
lowercase.labeledStatement = labeledStatement;
lowercase.logicalExpression = logicalExpression;
lowercase.memberExpression = memberExpression;
lowercase.metaProperty = metaProperty;
lowercase.mixedTypeAnnotation = mixedTypeAnnotation;
lowercase.moduleExpression = moduleExpression;
lowercase.newExpression = newExpression;
lowercase.noop = noop;
lowercase.nullLiteral = nullLiteral;
lowercase.nullLiteralTypeAnnotation = nullLiteralTypeAnnotation;
lowercase.nullableTypeAnnotation = nullableTypeAnnotation;
lowercase.numberLiteral = NumberLiteral;
lowercase.numberLiteralTypeAnnotation = numberLiteralTypeAnnotation;
lowercase.numberTypeAnnotation = numberTypeAnnotation;
lowercase.numericLiteral = numericLiteral;
lowercase.objectExpression = objectExpression;
lowercase.objectMethod = objectMethod;
lowercase.objectPattern = objectPattern;
lowercase.objectProperty = objectProperty;
lowercase.objectTypeAnnotation = objectTypeAnnotation;
lowercase.objectTypeCallProperty = objectTypeCallProperty;
lowercase.objectTypeIndexer = objectTypeIndexer;
lowercase.objectTypeInternalSlot = objectTypeInternalSlot;
lowercase.objectTypeProperty = objectTypeProperty;
lowercase.objectTypeSpreadProperty = objectTypeSpreadProperty;
lowercase.opaqueType = opaqueType;
lowercase.optionalCallExpression = optionalCallExpression;
lowercase.optionalIndexedAccessType = optionalIndexedAccessType;
lowercase.optionalMemberExpression = optionalMemberExpression;
lowercase.parenthesizedExpression = parenthesizedExpression;
lowercase.pipelineBareFunction = pipelineBareFunction;
lowercase.pipelinePrimaryTopicReference = pipelinePrimaryTopicReference;
lowercase.pipelineTopicExpression = pipelineTopicExpression;
lowercase.placeholder = placeholder;
lowercase.privateName = privateName;
lowercase.program = program;
lowercase.qualifiedTypeIdentifier = qualifiedTypeIdentifier;
lowercase.recordExpression = recordExpression;
lowercase.regExpLiteral = regExpLiteral;
lowercase.regexLiteral = RegexLiteral;
lowercase.restElement = restElement;
lowercase.restProperty = RestProperty;
lowercase.returnStatement = returnStatement;
lowercase.sequenceExpression = sequenceExpression;
lowercase.spreadElement = spreadElement;
lowercase.spreadProperty = SpreadProperty;
lowercase.staticBlock = staticBlock;
lowercase.stringLiteral = stringLiteral;
lowercase.stringLiteralTypeAnnotation = stringLiteralTypeAnnotation;
lowercase.stringTypeAnnotation = stringTypeAnnotation;
lowercase.super = _super;
lowercase.switchCase = switchCase;
lowercase.switchStatement = switchStatement;
lowercase.symbolTypeAnnotation = symbolTypeAnnotation;
lowercase.taggedTemplateExpression = taggedTemplateExpression;
lowercase.templateElement = templateElement;
lowercase.templateLiteral = templateLiteral;
lowercase.thisExpression = thisExpression;
lowercase.thisTypeAnnotation = thisTypeAnnotation;
lowercase.throwStatement = throwStatement;
lowercase.topicReference = topicReference;
lowercase.tryStatement = tryStatement;
lowercase.tSAnyKeyword = lowercase.tsAnyKeyword = tsAnyKeyword;
lowercase.tSArrayType = lowercase.tsArrayType = tsArrayType;
lowercase.tSAsExpression = lowercase.tsAsExpression = tsAsExpression;
lowercase.tSBigIntKeyword = lowercase.tsBigIntKeyword = tsBigIntKeyword;
lowercase.tSBooleanKeyword = lowercase.tsBooleanKeyword = tsBooleanKeyword;
lowercase.tSCallSignatureDeclaration = lowercase.tsCallSignatureDeclaration = tsCallSignatureDeclaration;
lowercase.tSConditionalType = lowercase.tsConditionalType = tsConditionalType;
lowercase.tSConstructSignatureDeclaration = lowercase.tsConstructSignatureDeclaration = tsConstructSignatureDeclaration;
lowercase.tSConstructorType = lowercase.tsConstructorType = tsConstructorType;
lowercase.tSDeclareFunction = lowercase.tsDeclareFunction = tsDeclareFunction;
lowercase.tSDeclareMethod = lowercase.tsDeclareMethod = tsDeclareMethod;
lowercase.tSEnumBody = lowercase.tsEnumBody = tsEnumBody;
lowercase.tSEnumDeclaration = lowercase.tsEnumDeclaration = tsEnumDeclaration;
lowercase.tSEnumMember = lowercase.tsEnumMember = tsEnumMember;
lowercase.tSExportAssignment = lowercase.tsExportAssignment = tsExportAssignment;
lowercase.tSExpressionWithTypeArguments = lowercase.tsExpressionWithTypeArguments = tsExpressionWithTypeArguments;
lowercase.tSExternalModuleReference = lowercase.tsExternalModuleReference = tsExternalModuleReference;
lowercase.tSFunctionType = lowercase.tsFunctionType = tsFunctionType;
lowercase.tSImportEqualsDeclaration = lowercase.tsImportEqualsDeclaration = tsImportEqualsDeclaration;
lowercase.tSImportType = lowercase.tsImportType = tsImportType;
lowercase.tSIndexSignature = lowercase.tsIndexSignature = tsIndexSignature;
lowercase.tSIndexedAccessType = lowercase.tsIndexedAccessType = tsIndexedAccessType;
lowercase.tSInferType = lowercase.tsInferType = tsInferType;
lowercase.tSInstantiationExpression = lowercase.tsInstantiationExpression = tsInstantiationExpression;
lowercase.tSInterfaceBody = lowercase.tsInterfaceBody = tsInterfaceBody;
lowercase.tSInterfaceDeclaration = lowercase.tsInterfaceDeclaration = tsInterfaceDeclaration;
lowercase.tSIntersectionType = lowercase.tsIntersectionType = tsIntersectionType;
lowercase.tSIntrinsicKeyword = lowercase.tsIntrinsicKeyword = tsIntrinsicKeyword;
lowercase.tSLiteralType = lowercase.tsLiteralType = tsLiteralType;
lowercase.tSMappedType = lowercase.tsMappedType = tsMappedType;
lowercase.tSMethodSignature = lowercase.tsMethodSignature = tsMethodSignature;
lowercase.tSModuleBlock = lowercase.tsModuleBlock = tsModuleBlock;
lowercase.tSModuleDeclaration = lowercase.tsModuleDeclaration = tsModuleDeclaration;
lowercase.tSNamedTupleMember = lowercase.tsNamedTupleMember = tsNamedTupleMember;
lowercase.tSNamespaceExportDeclaration = lowercase.tsNamespaceExportDeclaration = tsNamespaceExportDeclaration;
lowercase.tSNeverKeyword = lowercase.tsNeverKeyword = tsNeverKeyword;
lowercase.tSNonNullExpression = lowercase.tsNonNullExpression = tsNonNullExpression;
lowercase.tSNullKeyword = lowercase.tsNullKeyword = tsNullKeyword;
lowercase.tSNumberKeyword = lowercase.tsNumberKeyword = tsNumberKeyword;
lowercase.tSObjectKeyword = lowercase.tsObjectKeyword = tsObjectKeyword;
lowercase.tSOptionalType = lowercase.tsOptionalType = tsOptionalType;
lowercase.tSParameterProperty = lowercase.tsParameterProperty = tsParameterProperty;
lowercase.tSParenthesizedType = lowercase.tsParenthesizedType = tsParenthesizedType;
lowercase.tSPropertySignature = lowercase.tsPropertySignature = tsPropertySignature;
lowercase.tSQualifiedName = lowercase.tsQualifiedName = tsQualifiedName;
lowercase.tSRestType = lowercase.tsRestType = tsRestType;
lowercase.tSSatisfiesExpression = lowercase.tsSatisfiesExpression = tsSatisfiesExpression;
lowercase.tSStringKeyword = lowercase.tsStringKeyword = tsStringKeyword;
lowercase.tSSymbolKeyword = lowercase.tsSymbolKeyword = tsSymbolKeyword;
lowercase.tSTemplateLiteralType = lowercase.tsTemplateLiteralType = tsTemplateLiteralType;
lowercase.tSThisType = lowercase.tsThisType = tsThisType;
lowercase.tSTupleType = lowercase.tsTupleType = tsTupleType;
lowercase.tSTypeAliasDeclaration = lowercase.tsTypeAliasDeclaration = tsTypeAliasDeclaration;
lowercase.tSTypeAnnotation = lowercase.tsTypeAnnotation = tsTypeAnnotation;
lowercase.tSTypeAssertion = lowercase.tsTypeAssertion = tsTypeAssertion;
lowercase.tSTypeLiteral = lowercase.tsTypeLiteral = tsTypeLiteral;
lowercase.tSTypeOperator = lowercase.tsTypeOperator = tsTypeOperator;
lowercase.tSTypeParameter = lowercase.tsTypeParameter = tsTypeParameter;
lowercase.tSTypeParameterDeclaration = lowercase.tsTypeParameterDeclaration = tsTypeParameterDeclaration;
lowercase.tSTypeParameterInstantiation = lowercase.tsTypeParameterInstantiation = tsTypeParameterInstantiation;
lowercase.tSTypePredicate = lowercase.tsTypePredicate = tsTypePredicate;
lowercase.tSTypeQuery = lowercase.tsTypeQuery = tsTypeQuery;
lowercase.tSTypeReference = lowercase.tsTypeReference = tsTypeReference;
lowercase.tSUndefinedKeyword = lowercase.tsUndefinedKeyword = tsUndefinedKeyword;
lowercase.tSUnionType = lowercase.tsUnionType = tsUnionType;
lowercase.tSUnknownKeyword = lowercase.tsUnknownKeyword = tsUnknownKeyword;
lowercase.tSVoidKeyword = lowercase.tsVoidKeyword = tsVoidKeyword;
lowercase.tupleExpression = tupleExpression;
lowercase.tupleTypeAnnotation = tupleTypeAnnotation;
lowercase.typeAlias = typeAlias;
lowercase.typeAnnotation = typeAnnotation;
lowercase.typeCastExpression = typeCastExpression;
lowercase.typeParameter = typeParameter;
lowercase.typeParameterDeclaration = typeParameterDeclaration;
lowercase.typeParameterInstantiation = typeParameterInstantiation;
lowercase.typeofTypeAnnotation = typeofTypeAnnotation;
lowercase.unaryExpression = unaryExpression;
lowercase.unionTypeAnnotation = unionTypeAnnotation;
lowercase.updateExpression = updateExpression;
lowercase.v8IntrinsicIdentifier = v8IntrinsicIdentifier;
lowercase.variableDeclaration = variableDeclaration;
lowercase.variableDeclarator = variableDeclarator;
lowercase.variance = variance;
lowercase.voidPattern = voidPattern;
lowercase.voidTypeAnnotation = voidTypeAnnotation;
lowercase.whileStatement = whileStatement;
lowercase.withStatement = withStatement;
lowercase.yieldExpression = yieldExpression;
var _validate = requireValidate();
var _deprecationWarning$1 = deprecationWarning$1;
var utils = requireUtils();
const {
  validateInternal: validate
} = _validate;
const {
  NODE_FIELDS
} = utils;
function bigIntLiteral(value) {
  if (typeof value === "bigint") {
    value = value.toString();
  }
  const node = {
    type: "BigIntLiteral",
    value
  };
  const defs = NODE_FIELDS.BigIntLiteral;
  validate(defs.value, node, "value", value);
  return node;
}
function arrayExpression(elements = []) {
  const node = {
    type: "ArrayExpression",
    elements
  };
  const defs = NODE_FIELDS.ArrayExpression;
  validate(defs.elements, node, "elements", elements, 1);
  return node;
}
function assignmentExpression(operator, left, right) {
  const node = {
    type: "AssignmentExpression",
    operator,
    left,
    right
  };
  const defs = NODE_FIELDS.AssignmentExpression;
  validate(defs.operator, node, "operator", operator);
  validate(defs.left, node, "left", left, 1);
  validate(defs.right, node, "right", right, 1);
  return node;
}
function binaryExpression(operator, left, right) {
  const node = {
    type: "BinaryExpression",
    operator,
    left,
    right
  };
  const defs = NODE_FIELDS.BinaryExpression;
  validate(defs.operator, node, "operator", operator);
  validate(defs.left, node, "left", left, 1);
  validate(defs.right, node, "right", right, 1);
  return node;
}
function interpreterDirective(value) {
  const node = {
    type: "InterpreterDirective",
    value
  };
  const defs = NODE_FIELDS.InterpreterDirective;
  validate(defs.value, node, "value", value);
  return node;
}
function directive(value) {
  const node = {
    type: "Directive",
    value
  };
  const defs = NODE_FIELDS.Directive;
  validate(defs.value, node, "value", value, 1);
  return node;
}
function directiveLiteral(value) {
  const node = {
    type: "DirectiveLiteral",
    value
  };
  const defs = NODE_FIELDS.DirectiveLiteral;
  validate(defs.value, node, "value", value);
  return node;
}
function blockStatement(body, directives = []) {
  const node = {
    type: "BlockStatement",
    body,
    directives
  };
  const defs = NODE_FIELDS.BlockStatement;
  validate(defs.body, node, "body", body, 1);
  validate(defs.directives, node, "directives", directives, 1);
  return node;
}
function breakStatement(label = null) {
  const node = {
    type: "BreakStatement",
    label
  };
  const defs = NODE_FIELDS.BreakStatement;
  validate(defs.label, node, "label", label, 1);
  return node;
}
function callExpression(callee, _arguments) {
  const node = {
    type: "CallExpression",
    callee,
    arguments: _arguments
  };
  const defs = NODE_FIELDS.CallExpression;
  validate(defs.callee, node, "callee", callee, 1);
  validate(defs.arguments, node, "arguments", _arguments, 1);
  return node;
}
function catchClause(param = null, body) {
  const node = {
    type: "CatchClause",
    param,
    body
  };
  const defs = NODE_FIELDS.CatchClause;
  validate(defs.param, node, "param", param, 1);
  validate(defs.body, node, "body", body, 1);
  return node;
}
function conditionalExpression(test, consequent, alternate) {
  const node = {
    type: "ConditionalExpression",
    test,
    consequent,
    alternate
  };
  const defs = NODE_FIELDS.ConditionalExpression;
  validate(defs.test, node, "test", test, 1);
  validate(defs.consequent, node, "consequent", consequent, 1);
  validate(defs.alternate, node, "alternate", alternate, 1);
  return node;
}
function continueStatement(label = null) {
  const node = {
    type: "ContinueStatement",
    label
  };
  const defs = NODE_FIELDS.ContinueStatement;
  validate(defs.label, node, "label", label, 1);
  return node;
}
function debuggerStatement() {
  return {
    type: "DebuggerStatement"
  };
}
function doWhileStatement(test, body) {
  const node = {
    type: "DoWhileStatement",
    test,
    body
  };
  const defs = NODE_FIELDS.DoWhileStatement;
  validate(defs.test, node, "test", test, 1);
  validate(defs.body, node, "body", body, 1);
  return node;
}
function emptyStatement() {
  return {
    type: "EmptyStatement"
  };
}
function expressionStatement(expression) {
  const node = {
    type: "ExpressionStatement",
    expression
  };
  const defs = NODE_FIELDS.ExpressionStatement;
  validate(defs.expression, node, "expression", expression, 1);
  return node;
}
function file(program, comments = null, tokens = null) {
  const node = {
    type: "File",
    program,
    comments,
    tokens
  };
  const defs = NODE_FIELDS.File;
  validate(defs.program, node, "program", program, 1);
  validate(defs.comments, node, "comments", comments, 1);
  validate(defs.tokens, node, "tokens", tokens);
  return node;
}
function forInStatement(left, right, body) {
  const node = {
    type: "ForInStatement",
    left,
    right,
    body
  };
  const defs = NODE_FIELDS.ForInStatement;
  validate(defs.left, node, "left", left, 1);
  validate(defs.right, node, "right", right, 1);
  validate(defs.body, node, "body", body, 1);
  return node;
}
function forStatement(init = null, test = null, update = null, body) {
  const node = {
    type: "ForStatement",
    init,
    test,
    update,
    body
  };
  const defs = NODE_FIELDS.ForStatement;
  validate(defs.init, node, "init", init, 1);
  validate(defs.test, node, "test", test, 1);
  validate(defs.update, node, "update", update, 1);
  validate(defs.body, node, "body", body, 1);
  return node;
}
function functionDeclaration(id = null, params, body, generator = false, async = false) {
  const node = {
    type: "FunctionDeclaration",
    id,
    params,
    body,
    generator,
    async
  };
  const defs = NODE_FIELDS.FunctionDeclaration;
  validate(defs.id, node, "id", id, 1);
  validate(defs.params, node, "params", params, 1);
  validate(defs.body, node, "body", body, 1);
  validate(defs.generator, node, "generator", generator);
  validate(defs.async, node, "async", async);
  return node;
}
function functionExpression(id = null, params, body, generator = false, async = false) {
  const node = {
    type: "FunctionExpression",
    id,
    params,
    body,
    generator,
    async
  };
  const defs = NODE_FIELDS.FunctionExpression;
  validate(defs.id, node, "id", id, 1);
  validate(defs.params, node, "params", params, 1);
  validate(defs.body, node, "body", body, 1);
  validate(defs.generator, node, "generator", generator);
  validate(defs.async, node, "async", async);
  return node;
}
function identifier(name) {
  const node = {
    type: "Identifier",
    name
  };
  const defs = NODE_FIELDS.Identifier;
  validate(defs.name, node, "name", name);
  return node;
}
function ifStatement(test, consequent, alternate = null) {
  const node = {
    type: "IfStatement",
    test,
    consequent,
    alternate
  };
  const defs = NODE_FIELDS.IfStatement;
  validate(defs.test, node, "test", test, 1);
  validate(defs.consequent, node, "consequent", consequent, 1);
  validate(defs.alternate, node, "alternate", alternate, 1);
  return node;
}
function labeledStatement(label, body) {
  const node = {
    type: "LabeledStatement",
    label,
    body
  };
  const defs = NODE_FIELDS.LabeledStatement;
  validate(defs.label, node, "label", label, 1);
  validate(defs.body, node, "body", body, 1);
  return node;
}
function stringLiteral(value) {
  const node = {
    type: "StringLiteral",
    value
  };
  const defs = NODE_FIELDS.StringLiteral;
  validate(defs.value, node, "value", value);
  return node;
}
function numericLiteral(value) {
  const node = {
    type: "NumericLiteral",
    value
  };
  const defs = NODE_FIELDS.NumericLiteral;
  validate(defs.value, node, "value", value);
  return node;
}
function nullLiteral() {
  return {
    type: "NullLiteral"
  };
}
function booleanLiteral(value) {
  const node = {
    type: "BooleanLiteral",
    value
  };
  const defs = NODE_FIELDS.BooleanLiteral;
  validate(defs.value, node, "value", value);
  return node;
}
function regExpLiteral(pattern, flags = "") {
  const node = {
    type: "RegExpLiteral",
    pattern,
    flags
  };
  const defs = NODE_FIELDS.RegExpLiteral;
  validate(defs.pattern, node, "pattern", pattern);
  validate(defs.flags, node, "flags", flags);
  return node;
}
function logicalExpression(operator, left, right) {
  const node = {
    type: "LogicalExpression",
    operator,
    left,
    right
  };
  const defs = NODE_FIELDS.LogicalExpression;
  validate(defs.operator, node, "operator", operator);
  validate(defs.left, node, "left", left, 1);
  validate(defs.right, node, "right", right, 1);
  return node;
}
function memberExpression(object, property, computed = false, optional = null) {
  const node = {
    type: "MemberExpression",
    object,
    property,
    computed,
    optional
  };
  const defs = NODE_FIELDS.MemberExpression;
  validate(defs.object, node, "object", object, 1);
  validate(defs.property, node, "property", property, 1);
  validate(defs.computed, node, "computed", computed);
  validate(defs.optional, node, "optional", optional);
  return node;
}
function newExpression(callee, _arguments) {
  const node = {
    type: "NewExpression",
    callee,
    arguments: _arguments
  };
  const defs = NODE_FIELDS.NewExpression;
  validate(defs.callee, node, "callee", callee, 1);
  validate(defs.arguments, node, "arguments", _arguments, 1);
  return node;
}
function program(body, directives = [], sourceType = "script", interpreter = null) {
  const node = {
    type: "Program",
    body,
    directives,
    sourceType,
    interpreter
  };
  const defs = NODE_FIELDS.Program;
  validate(defs.body, node, "body", body, 1);
  validate(defs.directives, node, "directives", directives, 1);
  validate(defs.sourceType, node, "sourceType", sourceType);
  validate(defs.interpreter, node, "interpreter", interpreter, 1);
  return node;
}
function objectExpression(properties) {
  const node = {
    type: "ObjectExpression",
    properties
  };
  const defs = NODE_FIELDS.ObjectExpression;
  validate(defs.properties, node, "properties", properties, 1);
  return node;
}
function objectMethod(kind = "method", key, params, body, computed = false, generator = false, async = false) {
  const node = {
    type: "ObjectMethod",
    kind,
    key,
    params,
    body,
    computed,
    generator,
    async
  };
  const defs = NODE_FIELDS.ObjectMethod;
  validate(defs.kind, node, "kind", kind);
  validate(defs.key, node, "key", key, 1);
  validate(defs.params, node, "params", params, 1);
  validate(defs.body, node, "body", body, 1);
  validate(defs.computed, node, "computed", computed);
  validate(defs.generator, node, "generator", generator);
  validate(defs.async, node, "async", async);
  return node;
}
function objectProperty(key, value, computed = false, shorthand = false, decorators = null) {
  const node = {
    type: "ObjectProperty",
    key,
    value,
    computed,
    shorthand,
    decorators
  };
  const defs = NODE_FIELDS.ObjectProperty;
  validate(defs.key, node, "key", key, 1);
  validate(defs.value, node, "value", value, 1);
  validate(defs.computed, node, "computed", computed);
  validate(defs.shorthand, node, "shorthand", shorthand);
  validate(defs.decorators, node, "decorators", decorators, 1);
  return node;
}
function restElement(argument) {
  const node = {
    type: "RestElement",
    argument
  };
  const defs = NODE_FIELDS.RestElement;
  validate(defs.argument, node, "argument", argument, 1);
  return node;
}
function returnStatement(argument = null) {
  const node = {
    type: "ReturnStatement",
    argument
  };
  const defs = NODE_FIELDS.ReturnStatement;
  validate(defs.argument, node, "argument", argument, 1);
  return node;
}
function sequenceExpression(expressions) {
  const node = {
    type: "SequenceExpression",
    expressions
  };
  const defs = NODE_FIELDS.SequenceExpression;
  validate(defs.expressions, node, "expressions", expressions, 1);
  return node;
}
function parenthesizedExpression(expression) {
  const node = {
    type: "ParenthesizedExpression",
    expression
  };
  const defs = NODE_FIELDS.ParenthesizedExpression;
  validate(defs.expression, node, "expression", expression, 1);
  return node;
}
function switchCase(test = null, consequent) {
  const node = {
    type: "SwitchCase",
    test,
    consequent
  };
  const defs = NODE_FIELDS.SwitchCase;
  validate(defs.test, node, "test", test, 1);
  validate(defs.consequent, node, "consequent", consequent, 1);
  return node;
}
function switchStatement(discriminant, cases) {
  const node = {
    type: "SwitchStatement",
    discriminant,
    cases
  };
  const defs = NODE_FIELDS.SwitchStatement;
  validate(defs.discriminant, node, "discriminant", discriminant, 1);
  validate(defs.cases, node, "cases", cases, 1);
  return node;
}
function thisExpression() {
  return {
    type: "ThisExpression"
  };
}
function throwStatement(argument) {
  const node = {
    type: "ThrowStatement",
    argument
  };
  const defs = NODE_FIELDS.ThrowStatement;
  validate(defs.argument, node, "argument", argument, 1);
  return node;
}
function tryStatement(block, handler = null, finalizer = null) {
  const node = {
    type: "TryStatement",
    block,
    handler,
    finalizer
  };
  const defs = NODE_FIELDS.TryStatement;
  validate(defs.block, node, "block", block, 1);
  validate(defs.handler, node, "handler", handler, 1);
  validate(defs.finalizer, node, "finalizer", finalizer, 1);
  return node;
}
function unaryExpression(operator, argument, prefix = true) {
  const node = {
    type: "UnaryExpression",
    operator,
    argument,
    prefix
  };
  const defs = NODE_FIELDS.UnaryExpression;
  validate(defs.operator, node, "operator", operator);
  validate(defs.argument, node, "argument", argument, 1);
  validate(defs.prefix, node, "prefix", prefix);
  return node;
}
function updateExpression(operator, argument, prefix = false) {
  const node = {
    type: "UpdateExpression",
    operator,
    argument,
    prefix
  };
  const defs = NODE_FIELDS.UpdateExpression;
  validate(defs.operator, node, "operator", operator);
  validate(defs.argument, node, "argument", argument, 1);
  validate(defs.prefix, node, "prefix", prefix);
  return node;
}
function variableDeclaration(kind, declarations) {
  const node = {
    type: "VariableDeclaration",
    kind,
    declarations
  };
  const defs = NODE_FIELDS.VariableDeclaration;
  validate(defs.kind, node, "kind", kind);
  validate(defs.declarations, node, "declarations", declarations, 1);
  return node;
}
function variableDeclarator(id, init = null) {
  const node = {
    type: "VariableDeclarator",
    id,
    init
  };
  const defs = NODE_FIELDS.VariableDeclarator;
  validate(defs.id, node, "id", id, 1);
  validate(defs.init, node, "init", init, 1);
  return node;
}
function whileStatement(test, body) {
  const node = {
    type: "WhileStatement",
    test,
    body
  };
  const defs = NODE_FIELDS.WhileStatement;
  validate(defs.test, node, "test", test, 1);
  validate(defs.body, node, "body", body, 1);
  return node;
}
function withStatement(object, body) {
  const node = {
    type: "WithStatement",
    object,
    body
  };
  const defs = NODE_FIELDS.WithStatement;
  validate(defs.object, node, "object", object, 1);
  validate(defs.body, node, "body", body, 1);
  return node;
}
function assignmentPattern(left, right) {
  const node = {
    type: "AssignmentPattern",
    left,
    right
  };
  const defs = NODE_FIELDS.AssignmentPattern;
  validate(defs.left, node, "left", left, 1);
  validate(defs.right, node, "right", right, 1);
  return node;
}
function arrayPattern(elements) {
  const node = {
    type: "ArrayPattern",
    elements
  };
  const defs = NODE_FIELDS.ArrayPattern;
  validate(defs.elements, node, "elements", elements, 1);
  return node;
}
function arrowFunctionExpression(params, body, async = false) {
  const node = {
    type: "ArrowFunctionExpression",
    params,
    body,
    async,
    expression: null
  };
  const defs = NODE_FIELDS.ArrowFunctionExpression;
  validate(defs.params, node, "params", params, 1);
  validate(defs.body, node, "body", body, 1);
  validate(defs.async, node, "async", async);
  return node;
}
function classBody(body) {
  const node = {
    type: "ClassBody",
    body
  };
  const defs = NODE_FIELDS.ClassBody;
  validate(defs.body, node, "body", body, 1);
  return node;
}
function classExpression(id = null, superClass = null, body, decorators = null) {
  const node = {
    type: "ClassExpression",
    id,
    superClass,
    body,
    decorators
  };
  const defs = NODE_FIELDS.ClassExpression;
  validate(defs.id, node, "id", id, 1);
  validate(defs.superClass, node, "superClass", superClass, 1);
  validate(defs.body, node, "body", body, 1);
  validate(defs.decorators, node, "decorators", decorators, 1);
  return node;
}
function classDeclaration(id = null, superClass = null, body, decorators = null) {
  const node = {
    type: "ClassDeclaration",
    id,
    superClass,
    body,
    decorators
  };
  const defs = NODE_FIELDS.ClassDeclaration;
  validate(defs.id, node, "id", id, 1);
  validate(defs.superClass, node, "superClass", superClass, 1);
  validate(defs.body, node, "body", body, 1);
  validate(defs.decorators, node, "decorators", decorators, 1);
  return node;
}
function exportAllDeclaration(source) {
  const node = {
    type: "ExportAllDeclaration",
    source
  };
  const defs = NODE_FIELDS.ExportAllDeclaration;
  validate(defs.source, node, "source", source, 1);
  return node;
}
function exportDefaultDeclaration(declaration) {
  const node = {
    type: "ExportDefaultDeclaration",
    declaration
  };
  const defs = NODE_FIELDS.ExportDefaultDeclaration;
  validate(defs.declaration, node, "declaration", declaration, 1);
  return node;
}
function exportNamedDeclaration(declaration = null, specifiers = [], source = null) {
  const node = {
    type: "ExportNamedDeclaration",
    declaration,
    specifiers,
    source
  };
  const defs = NODE_FIELDS.ExportNamedDeclaration;
  validate(defs.declaration, node, "declaration", declaration, 1);
  validate(defs.specifiers, node, "specifiers", specifiers, 1);
  validate(defs.source, node, "source", source, 1);
  return node;
}
function exportSpecifier(local, exported) {
  const node = {
    type: "ExportSpecifier",
    local,
    exported
  };
  const defs = NODE_FIELDS.ExportSpecifier;
  validate(defs.local, node, "local", local, 1);
  validate(defs.exported, node, "exported", exported, 1);
  return node;
}
function forOfStatement(left, right, body, _await = false) {
  const node = {
    type: "ForOfStatement",
    left,
    right,
    body,
    await: _await
  };
  const defs = NODE_FIELDS.ForOfStatement;
  validate(defs.left, node, "left", left, 1);
  validate(defs.right, node, "right", right, 1);
  validate(defs.body, node, "body", body, 1);
  validate(defs.await, node, "await", _await);
  return node;
}
function importDeclaration(specifiers, source) {
  const node = {
    type: "ImportDeclaration",
    specifiers,
    source
  };
  const defs = NODE_FIELDS.ImportDeclaration;
  validate(defs.specifiers, node, "specifiers", specifiers, 1);
  validate(defs.source, node, "source", source, 1);
  return node;
}
function importDefaultSpecifier(local) {
  const node = {
    type: "ImportDefaultSpecifier",
    local
  };
  const defs = NODE_FIELDS.ImportDefaultSpecifier;
  validate(defs.local, node, "local", local, 1);
  return node;
}
function importNamespaceSpecifier(local) {
  const node = {
    type: "ImportNamespaceSpecifier",
    local
  };
  const defs = NODE_FIELDS.ImportNamespaceSpecifier;
  validate(defs.local, node, "local", local, 1);
  return node;
}
function importSpecifier(local, imported) {
  const node = {
    type: "ImportSpecifier",
    local,
    imported
  };
  const defs = NODE_FIELDS.ImportSpecifier;
  validate(defs.local, node, "local", local, 1);
  validate(defs.imported, node, "imported", imported, 1);
  return node;
}
function importExpression(source, options = null) {
  const node = {
    type: "ImportExpression",
    source,
    options
  };
  const defs = NODE_FIELDS.ImportExpression;
  validate(defs.source, node, "source", source, 1);
  validate(defs.options, node, "options", options, 1);
  return node;
}
function metaProperty(meta, property) {
  const node = {
    type: "MetaProperty",
    meta,
    property
  };
  const defs = NODE_FIELDS.MetaProperty;
  validate(defs.meta, node, "meta", meta, 1);
  validate(defs.property, node, "property", property, 1);
  return node;
}
function classMethod(kind = "method", key, params, body, computed = false, _static = false, generator = false, async = false) {
  const node = {
    type: "ClassMethod",
    kind,
    key,
    params,
    body,
    computed,
    static: _static,
    generator,
    async
  };
  const defs = NODE_FIELDS.ClassMethod;
  validate(defs.kind, node, "kind", kind);
  validate(defs.key, node, "key", key, 1);
  validate(defs.params, node, "params", params, 1);
  validate(defs.body, node, "body", body, 1);
  validate(defs.computed, node, "computed", computed);
  validate(defs.static, node, "static", _static);
  validate(defs.generator, node, "generator", generator);
  validate(defs.async, node, "async", async);
  return node;
}
function objectPattern(properties) {
  const node = {
    type: "ObjectPattern",
    properties
  };
  const defs = NODE_FIELDS.ObjectPattern;
  validate(defs.properties, node, "properties", properties, 1);
  return node;
}
function spreadElement(argument) {
  const node = {
    type: "SpreadElement",
    argument
  };
  const defs = NODE_FIELDS.SpreadElement;
  validate(defs.argument, node, "argument", argument, 1);
  return node;
}
function _super() {
  return {
    type: "Super"
  };
}
function taggedTemplateExpression(tag, quasi) {
  const node = {
    type: "TaggedTemplateExpression",
    tag,
    quasi
  };
  const defs = NODE_FIELDS.TaggedTemplateExpression;
  validate(defs.tag, node, "tag", tag, 1);
  validate(defs.quasi, node, "quasi", quasi, 1);
  return node;
}
function templateElement(value, tail = false) {
  const node = {
    type: "TemplateElement",
    value,
    tail
  };
  const defs = NODE_FIELDS.TemplateElement;
  validate(defs.value, node, "value", value);
  validate(defs.tail, node, "tail", tail);
  return node;
}
function templateLiteral(quasis, expressions) {
  const node = {
    type: "TemplateLiteral",
    quasis,
    expressions
  };
  const defs = NODE_FIELDS.TemplateLiteral;
  validate(defs.quasis, node, "quasis", quasis, 1);
  validate(defs.expressions, node, "expressions", expressions, 1);
  return node;
}
function yieldExpression(argument = null, delegate = false) {
  const node = {
    type: "YieldExpression",
    argument,
    delegate
  };
  const defs = NODE_FIELDS.YieldExpression;
  validate(defs.argument, node, "argument", argument, 1);
  validate(defs.delegate, node, "delegate", delegate);
  return node;
}
function awaitExpression(argument) {
  const node = {
    type: "AwaitExpression",
    argument
  };
  const defs = NODE_FIELDS.AwaitExpression;
  validate(defs.argument, node, "argument", argument, 1);
  return node;
}
function _import() {
  return {
    type: "Import"
  };
}
function exportNamespaceSpecifier(exported) {
  const node = {
    type: "ExportNamespaceSpecifier",
    exported
  };
  const defs = NODE_FIELDS.ExportNamespaceSpecifier;
  validate(defs.exported, node, "exported", exported, 1);
  return node;
}
function optionalMemberExpression(object, property, computed = false, optional) {
  const node = {
    type: "OptionalMemberExpression",
    object,
    property,
    computed,
    optional
  };
  const defs = NODE_FIELDS.OptionalMemberExpression;
  validate(defs.object, node, "object", object, 1);
  validate(defs.property, node, "property", property, 1);
  validate(defs.computed, node, "computed", computed);
  validate(defs.optional, node, "optional", optional);
  return node;
}
function optionalCallExpression(callee, _arguments, optional) {
  const node = {
    type: "OptionalCallExpression",
    callee,
    arguments: _arguments,
    optional
  };
  const defs = NODE_FIELDS.OptionalCallExpression;
  validate(defs.callee, node, "callee", callee, 1);
  validate(defs.arguments, node, "arguments", _arguments, 1);
  validate(defs.optional, node, "optional", optional);
  return node;
}
function classProperty(key, value = null, typeAnnotation = null, decorators = null, computed = false, _static = false) {
  const node = {
    type: "ClassProperty",
    key,
    value,
    typeAnnotation,
    decorators,
    computed,
    static: _static
  };
  const defs = NODE_FIELDS.ClassProperty;
  validate(defs.key, node, "key", key, 1);
  validate(defs.value, node, "value", value, 1);
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  validate(defs.decorators, node, "decorators", decorators, 1);
  validate(defs.computed, node, "computed", computed);
  validate(defs.static, node, "static", _static);
  return node;
}
function classAccessorProperty(key, value = null, typeAnnotation = null, decorators = null, computed = false, _static = false) {
  const node = {
    type: "ClassAccessorProperty",
    key,
    value,
    typeAnnotation,
    decorators,
    computed,
    static: _static
  };
  const defs = NODE_FIELDS.ClassAccessorProperty;
  validate(defs.key, node, "key", key, 1);
  validate(defs.value, node, "value", value, 1);
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  validate(defs.decorators, node, "decorators", decorators, 1);
  validate(defs.computed, node, "computed", computed);
  validate(defs.static, node, "static", _static);
  return node;
}
function classPrivateProperty(key, value = null, decorators = null, _static = false) {
  const node = {
    type: "ClassPrivateProperty",
    key,
    value,
    decorators,
    static: _static
  };
  const defs = NODE_FIELDS.ClassPrivateProperty;
  validate(defs.key, node, "key", key, 1);
  validate(defs.value, node, "value", value, 1);
  validate(defs.decorators, node, "decorators", decorators, 1);
  validate(defs.static, node, "static", _static);
  return node;
}
function classPrivateMethod(kind = "method", key, params, body, _static = false) {
  const node = {
    type: "ClassPrivateMethod",
    kind,
    key,
    params,
    body,
    static: _static
  };
  const defs = NODE_FIELDS.ClassPrivateMethod;
  validate(defs.kind, node, "kind", kind);
  validate(defs.key, node, "key", key, 1);
  validate(defs.params, node, "params", params, 1);
  validate(defs.body, node, "body", body, 1);
  validate(defs.static, node, "static", _static);
  return node;
}
function privateName(id) {
  const node = {
    type: "PrivateName",
    id
  };
  const defs = NODE_FIELDS.PrivateName;
  validate(defs.id, node, "id", id, 1);
  return node;
}
function staticBlock(body) {
  const node = {
    type: "StaticBlock",
    body
  };
  const defs = NODE_FIELDS.StaticBlock;
  validate(defs.body, node, "body", body, 1);
  return node;
}
function importAttribute(key, value) {
  const node = {
    type: "ImportAttribute",
    key,
    value
  };
  const defs = NODE_FIELDS.ImportAttribute;
  validate(defs.key, node, "key", key, 1);
  validate(defs.value, node, "value", value, 1);
  return node;
}
function anyTypeAnnotation() {
  return {
    type: "AnyTypeAnnotation"
  };
}
function arrayTypeAnnotation(elementType) {
  const node = {
    type: "ArrayTypeAnnotation",
    elementType
  };
  const defs = NODE_FIELDS.ArrayTypeAnnotation;
  validate(defs.elementType, node, "elementType", elementType, 1);
  return node;
}
function booleanTypeAnnotation() {
  return {
    type: "BooleanTypeAnnotation"
  };
}
function booleanLiteralTypeAnnotation(value) {
  const node = {
    type: "BooleanLiteralTypeAnnotation",
    value
  };
  const defs = NODE_FIELDS.BooleanLiteralTypeAnnotation;
  validate(defs.value, node, "value", value);
  return node;
}
function nullLiteralTypeAnnotation() {
  return {
    type: "NullLiteralTypeAnnotation"
  };
}
function classImplements(id, typeParameters = null) {
  const node = {
    type: "ClassImplements",
    id,
    typeParameters
  };
  const defs = NODE_FIELDS.ClassImplements;
  validate(defs.id, node, "id", id, 1);
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  return node;
}
function declareClass(id, typeParameters = null, _extends = null, body) {
  const node = {
    type: "DeclareClass",
    id,
    typeParameters,
    extends: _extends,
    body
  };
  const defs = NODE_FIELDS.DeclareClass;
  validate(defs.id, node, "id", id, 1);
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  validate(defs.extends, node, "extends", _extends, 1);
  validate(defs.body, node, "body", body, 1);
  return node;
}
function declareFunction(id) {
  const node = {
    type: "DeclareFunction",
    id
  };
  const defs = NODE_FIELDS.DeclareFunction;
  validate(defs.id, node, "id", id, 1);
  return node;
}
function declareInterface(id, typeParameters = null, _extends = null, body) {
  const node = {
    type: "DeclareInterface",
    id,
    typeParameters,
    extends: _extends,
    body
  };
  const defs = NODE_FIELDS.DeclareInterface;
  validate(defs.id, node, "id", id, 1);
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  validate(defs.extends, node, "extends", _extends, 1);
  validate(defs.body, node, "body", body, 1);
  return node;
}
function declareModule(id, body, kind = null) {
  const node = {
    type: "DeclareModule",
    id,
    body,
    kind
  };
  const defs = NODE_FIELDS.DeclareModule;
  validate(defs.id, node, "id", id, 1);
  validate(defs.body, node, "body", body, 1);
  validate(defs.kind, node, "kind", kind);
  return node;
}
function declareModuleExports(typeAnnotation) {
  const node = {
    type: "DeclareModuleExports",
    typeAnnotation
  };
  const defs = NODE_FIELDS.DeclareModuleExports;
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  return node;
}
function declareTypeAlias(id, typeParameters = null, right) {
  const node = {
    type: "DeclareTypeAlias",
    id,
    typeParameters,
    right
  };
  const defs = NODE_FIELDS.DeclareTypeAlias;
  validate(defs.id, node, "id", id, 1);
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  validate(defs.right, node, "right", right, 1);
  return node;
}
function declareOpaqueType(id, typeParameters = null, supertype = null) {
  const node = {
    type: "DeclareOpaqueType",
    id,
    typeParameters,
    supertype
  };
  const defs = NODE_FIELDS.DeclareOpaqueType;
  validate(defs.id, node, "id", id, 1);
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  validate(defs.supertype, node, "supertype", supertype, 1);
  return node;
}
function declareVariable(id) {
  const node = {
    type: "DeclareVariable",
    id
  };
  const defs = NODE_FIELDS.DeclareVariable;
  validate(defs.id, node, "id", id, 1);
  return node;
}
function declareExportDeclaration(declaration = null, specifiers = null, source = null, attributes = null) {
  const node = {
    type: "DeclareExportDeclaration",
    declaration,
    specifiers,
    source,
    attributes
  };
  const defs = NODE_FIELDS.DeclareExportDeclaration;
  validate(defs.declaration, node, "declaration", declaration, 1);
  validate(defs.specifiers, node, "specifiers", specifiers, 1);
  validate(defs.source, node, "source", source, 1);
  validate(defs.attributes, node, "attributes", attributes, 1);
  return node;
}
function declareExportAllDeclaration(source, attributes = null) {
  const node = {
    type: "DeclareExportAllDeclaration",
    source,
    attributes
  };
  const defs = NODE_FIELDS.DeclareExportAllDeclaration;
  validate(defs.source, node, "source", source, 1);
  validate(defs.attributes, node, "attributes", attributes, 1);
  return node;
}
function declaredPredicate(value) {
  const node = {
    type: "DeclaredPredicate",
    value
  };
  const defs = NODE_FIELDS.DeclaredPredicate;
  validate(defs.value, node, "value", value, 1);
  return node;
}
function existsTypeAnnotation() {
  return {
    type: "ExistsTypeAnnotation"
  };
}
function functionTypeAnnotation(typeParameters = null, params, rest = null, returnType) {
  const node = {
    type: "FunctionTypeAnnotation",
    typeParameters,
    params,
    rest,
    returnType
  };
  const defs = NODE_FIELDS.FunctionTypeAnnotation;
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  validate(defs.params, node, "params", params, 1);
  validate(defs.rest, node, "rest", rest, 1);
  validate(defs.returnType, node, "returnType", returnType, 1);
  return node;
}
function functionTypeParam(name = null, typeAnnotation) {
  const node = {
    type: "FunctionTypeParam",
    name,
    typeAnnotation
  };
  const defs = NODE_FIELDS.FunctionTypeParam;
  validate(defs.name, node, "name", name, 1);
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  return node;
}
function genericTypeAnnotation(id, typeParameters = null) {
  const node = {
    type: "GenericTypeAnnotation",
    id,
    typeParameters
  };
  const defs = NODE_FIELDS.GenericTypeAnnotation;
  validate(defs.id, node, "id", id, 1);
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  return node;
}
function inferredPredicate() {
  return {
    type: "InferredPredicate"
  };
}
function interfaceExtends(id, typeParameters = null) {
  const node = {
    type: "InterfaceExtends",
    id,
    typeParameters
  };
  const defs = NODE_FIELDS.InterfaceExtends;
  validate(defs.id, node, "id", id, 1);
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  return node;
}
function interfaceDeclaration(id, typeParameters = null, _extends = null, body) {
  const node = {
    type: "InterfaceDeclaration",
    id,
    typeParameters,
    extends: _extends,
    body
  };
  const defs = NODE_FIELDS.InterfaceDeclaration;
  validate(defs.id, node, "id", id, 1);
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  validate(defs.extends, node, "extends", _extends, 1);
  validate(defs.body, node, "body", body, 1);
  return node;
}
function interfaceTypeAnnotation(_extends = null, body) {
  const node = {
    type: "InterfaceTypeAnnotation",
    extends: _extends,
    body
  };
  const defs = NODE_FIELDS.InterfaceTypeAnnotation;
  validate(defs.extends, node, "extends", _extends, 1);
  validate(defs.body, node, "body", body, 1);
  return node;
}
function intersectionTypeAnnotation(types) {
  const node = {
    type: "IntersectionTypeAnnotation",
    types
  };
  const defs = NODE_FIELDS.IntersectionTypeAnnotation;
  validate(defs.types, node, "types", types, 1);
  return node;
}
function mixedTypeAnnotation() {
  return {
    type: "MixedTypeAnnotation"
  };
}
function emptyTypeAnnotation() {
  return {
    type: "EmptyTypeAnnotation"
  };
}
function nullableTypeAnnotation(typeAnnotation) {
  const node = {
    type: "NullableTypeAnnotation",
    typeAnnotation
  };
  const defs = NODE_FIELDS.NullableTypeAnnotation;
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  return node;
}
function numberLiteralTypeAnnotation(value) {
  const node = {
    type: "NumberLiteralTypeAnnotation",
    value
  };
  const defs = NODE_FIELDS.NumberLiteralTypeAnnotation;
  validate(defs.value, node, "value", value);
  return node;
}
function numberTypeAnnotation() {
  return {
    type: "NumberTypeAnnotation"
  };
}
function objectTypeAnnotation(properties, indexers = [], callProperties = [], internalSlots = [], exact = false) {
  const node = {
    type: "ObjectTypeAnnotation",
    properties,
    indexers,
    callProperties,
    internalSlots,
    exact
  };
  const defs = NODE_FIELDS.ObjectTypeAnnotation;
  validate(defs.properties, node, "properties", properties, 1);
  validate(defs.indexers, node, "indexers", indexers, 1);
  validate(defs.callProperties, node, "callProperties", callProperties, 1);
  validate(defs.internalSlots, node, "internalSlots", internalSlots, 1);
  validate(defs.exact, node, "exact", exact);
  return node;
}
function objectTypeInternalSlot(id, value, optional, _static, method) {
  const node = {
    type: "ObjectTypeInternalSlot",
    id,
    value,
    optional,
    static: _static,
    method
  };
  const defs = NODE_FIELDS.ObjectTypeInternalSlot;
  validate(defs.id, node, "id", id, 1);
  validate(defs.value, node, "value", value, 1);
  validate(defs.optional, node, "optional", optional);
  validate(defs.static, node, "static", _static);
  validate(defs.method, node, "method", method);
  return node;
}
function objectTypeCallProperty(value) {
  const node = {
    type: "ObjectTypeCallProperty",
    value,
    static: null
  };
  const defs = NODE_FIELDS.ObjectTypeCallProperty;
  validate(defs.value, node, "value", value, 1);
  return node;
}
function objectTypeIndexer(id = null, key, value, variance = null) {
  const node = {
    type: "ObjectTypeIndexer",
    id,
    key,
    value,
    variance,
    static: null
  };
  const defs = NODE_FIELDS.ObjectTypeIndexer;
  validate(defs.id, node, "id", id, 1);
  validate(defs.key, node, "key", key, 1);
  validate(defs.value, node, "value", value, 1);
  validate(defs.variance, node, "variance", variance, 1);
  return node;
}
function objectTypeProperty(key, value, variance = null) {
  const node = {
    type: "ObjectTypeProperty",
    key,
    value,
    variance,
    kind: null,
    method: null,
    optional: null,
    proto: null,
    static: null
  };
  const defs = NODE_FIELDS.ObjectTypeProperty;
  validate(defs.key, node, "key", key, 1);
  validate(defs.value, node, "value", value, 1);
  validate(defs.variance, node, "variance", variance, 1);
  return node;
}
function objectTypeSpreadProperty(argument) {
  const node = {
    type: "ObjectTypeSpreadProperty",
    argument
  };
  const defs = NODE_FIELDS.ObjectTypeSpreadProperty;
  validate(defs.argument, node, "argument", argument, 1);
  return node;
}
function opaqueType(id, typeParameters = null, supertype = null, impltype) {
  const node = {
    type: "OpaqueType",
    id,
    typeParameters,
    supertype,
    impltype
  };
  const defs = NODE_FIELDS.OpaqueType;
  validate(defs.id, node, "id", id, 1);
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  validate(defs.supertype, node, "supertype", supertype, 1);
  validate(defs.impltype, node, "impltype", impltype, 1);
  return node;
}
function qualifiedTypeIdentifier(id, qualification) {
  const node = {
    type: "QualifiedTypeIdentifier",
    id,
    qualification
  };
  const defs = NODE_FIELDS.QualifiedTypeIdentifier;
  validate(defs.id, node, "id", id, 1);
  validate(defs.qualification, node, "qualification", qualification, 1);
  return node;
}
function stringLiteralTypeAnnotation(value) {
  const node = {
    type: "StringLiteralTypeAnnotation",
    value
  };
  const defs = NODE_FIELDS.StringLiteralTypeAnnotation;
  validate(defs.value, node, "value", value);
  return node;
}
function stringTypeAnnotation() {
  return {
    type: "StringTypeAnnotation"
  };
}
function symbolTypeAnnotation() {
  return {
    type: "SymbolTypeAnnotation"
  };
}
function thisTypeAnnotation() {
  return {
    type: "ThisTypeAnnotation"
  };
}
function tupleTypeAnnotation(types) {
  const node = {
    type: "TupleTypeAnnotation",
    types
  };
  const defs = NODE_FIELDS.TupleTypeAnnotation;
  validate(defs.types, node, "types", types, 1);
  return node;
}
function typeofTypeAnnotation(argument) {
  const node = {
    type: "TypeofTypeAnnotation",
    argument
  };
  const defs = NODE_FIELDS.TypeofTypeAnnotation;
  validate(defs.argument, node, "argument", argument, 1);
  return node;
}
function typeAlias(id, typeParameters = null, right) {
  const node = {
    type: "TypeAlias",
    id,
    typeParameters,
    right
  };
  const defs = NODE_FIELDS.TypeAlias;
  validate(defs.id, node, "id", id, 1);
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  validate(defs.right, node, "right", right, 1);
  return node;
}
function typeAnnotation(typeAnnotation) {
  const node = {
    type: "TypeAnnotation",
    typeAnnotation
  };
  const defs = NODE_FIELDS.TypeAnnotation;
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  return node;
}
function typeCastExpression(expression, typeAnnotation) {
  const node = {
    type: "TypeCastExpression",
    expression,
    typeAnnotation
  };
  const defs = NODE_FIELDS.TypeCastExpression;
  validate(defs.expression, node, "expression", expression, 1);
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  return node;
}
function typeParameter(bound = null, _default = null, variance = null) {
  const node = {
    type: "TypeParameter",
    bound,
    default: _default,
    variance,
    name: null
  };
  const defs = NODE_FIELDS.TypeParameter;
  validate(defs.bound, node, "bound", bound, 1);
  validate(defs.default, node, "default", _default, 1);
  validate(defs.variance, node, "variance", variance, 1);
  return node;
}
function typeParameterDeclaration(params) {
  const node = {
    type: "TypeParameterDeclaration",
    params
  };
  const defs = NODE_FIELDS.TypeParameterDeclaration;
  validate(defs.params, node, "params", params, 1);
  return node;
}
function typeParameterInstantiation(params) {
  const node = {
    type: "TypeParameterInstantiation",
    params
  };
  const defs = NODE_FIELDS.TypeParameterInstantiation;
  validate(defs.params, node, "params", params, 1);
  return node;
}
function unionTypeAnnotation(types) {
  const node = {
    type: "UnionTypeAnnotation",
    types
  };
  const defs = NODE_FIELDS.UnionTypeAnnotation;
  validate(defs.types, node, "types", types, 1);
  return node;
}
function variance(kind) {
  const node = {
    type: "Variance",
    kind
  };
  const defs = NODE_FIELDS.Variance;
  validate(defs.kind, node, "kind", kind);
  return node;
}
function voidTypeAnnotation() {
  return {
    type: "VoidTypeAnnotation"
  };
}
function enumDeclaration(id, body) {
  const node = {
    type: "EnumDeclaration",
    id,
    body
  };
  const defs = NODE_FIELDS.EnumDeclaration;
  validate(defs.id, node, "id", id, 1);
  validate(defs.body, node, "body", body, 1);
  return node;
}
function enumBooleanBody(members) {
  const node = {
    type: "EnumBooleanBody",
    members,
    explicitType: null,
    hasUnknownMembers: null
  };
  const defs = NODE_FIELDS.EnumBooleanBody;
  validate(defs.members, node, "members", members, 1);
  return node;
}
function enumNumberBody(members) {
  const node = {
    type: "EnumNumberBody",
    members,
    explicitType: null,
    hasUnknownMembers: null
  };
  const defs = NODE_FIELDS.EnumNumberBody;
  validate(defs.members, node, "members", members, 1);
  return node;
}
function enumStringBody(members) {
  const node = {
    type: "EnumStringBody",
    members,
    explicitType: null,
    hasUnknownMembers: null
  };
  const defs = NODE_FIELDS.EnumStringBody;
  validate(defs.members, node, "members", members, 1);
  return node;
}
function enumSymbolBody(members) {
  const node = {
    type: "EnumSymbolBody",
    members,
    hasUnknownMembers: null
  };
  const defs = NODE_FIELDS.EnumSymbolBody;
  validate(defs.members, node, "members", members, 1);
  return node;
}
function enumBooleanMember(id) {
  const node = {
    type: "EnumBooleanMember",
    id,
    init: null
  };
  const defs = NODE_FIELDS.EnumBooleanMember;
  validate(defs.id, node, "id", id, 1);
  return node;
}
function enumNumberMember(id, init) {
  const node = {
    type: "EnumNumberMember",
    id,
    init
  };
  const defs = NODE_FIELDS.EnumNumberMember;
  validate(defs.id, node, "id", id, 1);
  validate(defs.init, node, "init", init, 1);
  return node;
}
function enumStringMember(id, init) {
  const node = {
    type: "EnumStringMember",
    id,
    init
  };
  const defs = NODE_FIELDS.EnumStringMember;
  validate(defs.id, node, "id", id, 1);
  validate(defs.init, node, "init", init, 1);
  return node;
}
function enumDefaultedMember(id) {
  const node = {
    type: "EnumDefaultedMember",
    id
  };
  const defs = NODE_FIELDS.EnumDefaultedMember;
  validate(defs.id, node, "id", id, 1);
  return node;
}
function indexedAccessType(objectType, indexType) {
  const node = {
    type: "IndexedAccessType",
    objectType,
    indexType
  };
  const defs = NODE_FIELDS.IndexedAccessType;
  validate(defs.objectType, node, "objectType", objectType, 1);
  validate(defs.indexType, node, "indexType", indexType, 1);
  return node;
}
function optionalIndexedAccessType(objectType, indexType) {
  const node = {
    type: "OptionalIndexedAccessType",
    objectType,
    indexType,
    optional: null
  };
  const defs = NODE_FIELDS.OptionalIndexedAccessType;
  validate(defs.objectType, node, "objectType", objectType, 1);
  validate(defs.indexType, node, "indexType", indexType, 1);
  return node;
}
function jsxAttribute(name, value = null) {
  const node = {
    type: "JSXAttribute",
    name,
    value
  };
  const defs = NODE_FIELDS.JSXAttribute;
  validate(defs.name, node, "name", name, 1);
  validate(defs.value, node, "value", value, 1);
  return node;
}
function jsxClosingElement(name) {
  const node = {
    type: "JSXClosingElement",
    name
  };
  const defs = NODE_FIELDS.JSXClosingElement;
  validate(defs.name, node, "name", name, 1);
  return node;
}
function jsxElement(openingElement, closingElement = null, children, selfClosing = null) {
  const node = {
    type: "JSXElement",
    openingElement,
    closingElement,
    children,
    selfClosing
  };
  const defs = NODE_FIELDS.JSXElement;
  validate(defs.openingElement, node, "openingElement", openingElement, 1);
  validate(defs.closingElement, node, "closingElement", closingElement, 1);
  validate(defs.children, node, "children", children, 1);
  validate(defs.selfClosing, node, "selfClosing", selfClosing);
  return node;
}
function jsxEmptyExpression() {
  return {
    type: "JSXEmptyExpression"
  };
}
function jsxExpressionContainer(expression) {
  const node = {
    type: "JSXExpressionContainer",
    expression
  };
  const defs = NODE_FIELDS.JSXExpressionContainer;
  validate(defs.expression, node, "expression", expression, 1);
  return node;
}
function jsxSpreadChild(expression) {
  const node = {
    type: "JSXSpreadChild",
    expression
  };
  const defs = NODE_FIELDS.JSXSpreadChild;
  validate(defs.expression, node, "expression", expression, 1);
  return node;
}
function jsxIdentifier(name) {
  const node = {
    type: "JSXIdentifier",
    name
  };
  const defs = NODE_FIELDS.JSXIdentifier;
  validate(defs.name, node, "name", name);
  return node;
}
function jsxMemberExpression(object, property) {
  const node = {
    type: "JSXMemberExpression",
    object,
    property
  };
  const defs = NODE_FIELDS.JSXMemberExpression;
  validate(defs.object, node, "object", object, 1);
  validate(defs.property, node, "property", property, 1);
  return node;
}
function jsxNamespacedName(namespace, name) {
  const node = {
    type: "JSXNamespacedName",
    namespace,
    name
  };
  const defs = NODE_FIELDS.JSXNamespacedName;
  validate(defs.namespace, node, "namespace", namespace, 1);
  validate(defs.name, node, "name", name, 1);
  return node;
}
function jsxOpeningElement(name, attributes, selfClosing = false) {
  const node = {
    type: "JSXOpeningElement",
    name,
    attributes,
    selfClosing
  };
  const defs = NODE_FIELDS.JSXOpeningElement;
  validate(defs.name, node, "name", name, 1);
  validate(defs.attributes, node, "attributes", attributes, 1);
  validate(defs.selfClosing, node, "selfClosing", selfClosing);
  return node;
}
function jsxSpreadAttribute(argument) {
  const node = {
    type: "JSXSpreadAttribute",
    argument
  };
  const defs = NODE_FIELDS.JSXSpreadAttribute;
  validate(defs.argument, node, "argument", argument, 1);
  return node;
}
function jsxText(value) {
  const node = {
    type: "JSXText",
    value
  };
  const defs = NODE_FIELDS.JSXText;
  validate(defs.value, node, "value", value);
  return node;
}
function jsxFragment(openingFragment, closingFragment, children) {
  const node = {
    type: "JSXFragment",
    openingFragment,
    closingFragment,
    children
  };
  const defs = NODE_FIELDS.JSXFragment;
  validate(defs.openingFragment, node, "openingFragment", openingFragment, 1);
  validate(defs.closingFragment, node, "closingFragment", closingFragment, 1);
  validate(defs.children, node, "children", children, 1);
  return node;
}
function jsxOpeningFragment() {
  return {
    type: "JSXOpeningFragment"
  };
}
function jsxClosingFragment() {
  return {
    type: "JSXClosingFragment"
  };
}
function noop() {
  return {
    type: "Noop"
  };
}
function placeholder(expectedNode, name) {
  const node = {
    type: "Placeholder",
    expectedNode,
    name
  };
  const defs = NODE_FIELDS.Placeholder;
  validate(defs.expectedNode, node, "expectedNode", expectedNode);
  validate(defs.name, node, "name", name, 1);
  return node;
}
function v8IntrinsicIdentifier(name) {
  const node = {
    type: "V8IntrinsicIdentifier",
    name
  };
  const defs = NODE_FIELDS.V8IntrinsicIdentifier;
  validate(defs.name, node, "name", name);
  return node;
}
function argumentPlaceholder() {
  return {
    type: "ArgumentPlaceholder"
  };
}
function bindExpression(object, callee) {
  const node = {
    type: "BindExpression",
    object,
    callee
  };
  const defs = NODE_FIELDS.BindExpression;
  validate(defs.object, node, "object", object, 1);
  validate(defs.callee, node, "callee", callee, 1);
  return node;
}
function decorator(expression) {
  const node = {
    type: "Decorator",
    expression
  };
  const defs = NODE_FIELDS.Decorator;
  validate(defs.expression, node, "expression", expression, 1);
  return node;
}
function doExpression(body, async = false) {
  const node = {
    type: "DoExpression",
    body,
    async
  };
  const defs = NODE_FIELDS.DoExpression;
  validate(defs.body, node, "body", body, 1);
  validate(defs.async, node, "async", async);
  return node;
}
function exportDefaultSpecifier(exported) {
  const node = {
    type: "ExportDefaultSpecifier",
    exported
  };
  const defs = NODE_FIELDS.ExportDefaultSpecifier;
  validate(defs.exported, node, "exported", exported, 1);
  return node;
}
function recordExpression(properties) {
  const node = {
    type: "RecordExpression",
    properties
  };
  const defs = NODE_FIELDS.RecordExpression;
  validate(defs.properties, node, "properties", properties, 1);
  return node;
}
function tupleExpression(elements = []) {
  const node = {
    type: "TupleExpression",
    elements
  };
  const defs = NODE_FIELDS.TupleExpression;
  validate(defs.elements, node, "elements", elements, 1);
  return node;
}
function decimalLiteral(value) {
  const node = {
    type: "DecimalLiteral",
    value
  };
  const defs = NODE_FIELDS.DecimalLiteral;
  validate(defs.value, node, "value", value);
  return node;
}
function moduleExpression(body) {
  const node = {
    type: "ModuleExpression",
    body
  };
  const defs = NODE_FIELDS.ModuleExpression;
  validate(defs.body, node, "body", body, 1);
  return node;
}
function topicReference() {
  return {
    type: "TopicReference"
  };
}
function pipelineTopicExpression(expression) {
  const node = {
    type: "PipelineTopicExpression",
    expression
  };
  const defs = NODE_FIELDS.PipelineTopicExpression;
  validate(defs.expression, node, "expression", expression, 1);
  return node;
}
function pipelineBareFunction(callee) {
  const node = {
    type: "PipelineBareFunction",
    callee
  };
  const defs = NODE_FIELDS.PipelineBareFunction;
  validate(defs.callee, node, "callee", callee, 1);
  return node;
}
function pipelinePrimaryTopicReference() {
  return {
    type: "PipelinePrimaryTopicReference"
  };
}
function voidPattern() {
  return {
    type: "VoidPattern"
  };
}
function tsParameterProperty(parameter) {
  const node = {
    type: "TSParameterProperty",
    parameter
  };
  const defs = NODE_FIELDS.TSParameterProperty;
  validate(defs.parameter, node, "parameter", parameter, 1);
  return node;
}
function tsDeclareFunction(id = null, typeParameters = null, params, returnType = null) {
  const node = {
    type: "TSDeclareFunction",
    id,
    typeParameters,
    params,
    returnType
  };
  const defs = NODE_FIELDS.TSDeclareFunction;
  validate(defs.id, node, "id", id, 1);
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  validate(defs.params, node, "params", params, 1);
  validate(defs.returnType, node, "returnType", returnType, 1);
  return node;
}
function tsDeclareMethod(decorators = null, key, typeParameters = null, params, returnType = null) {
  const node = {
    type: "TSDeclareMethod",
    decorators,
    key,
    typeParameters,
    params,
    returnType
  };
  const defs = NODE_FIELDS.TSDeclareMethod;
  validate(defs.decorators, node, "decorators", decorators, 1);
  validate(defs.key, node, "key", key, 1);
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  validate(defs.params, node, "params", params, 1);
  validate(defs.returnType, node, "returnType", returnType, 1);
  return node;
}
function tsQualifiedName(left, right) {
  const node = {
    type: "TSQualifiedName",
    left,
    right
  };
  const defs = NODE_FIELDS.TSQualifiedName;
  validate(defs.left, node, "left", left, 1);
  validate(defs.right, node, "right", right, 1);
  return node;
}
function tsCallSignatureDeclaration(typeParameters = null, parameters, typeAnnotation = null) {
  const node = {
    type: "TSCallSignatureDeclaration",
    typeParameters,
    parameters,
    typeAnnotation
  };
  const defs = NODE_FIELDS.TSCallSignatureDeclaration;
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  validate(defs.parameters, node, "parameters", parameters, 1);
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  return node;
}
function tsConstructSignatureDeclaration(typeParameters = null, parameters, typeAnnotation = null) {
  const node = {
    type: "TSConstructSignatureDeclaration",
    typeParameters,
    parameters,
    typeAnnotation
  };
  const defs = NODE_FIELDS.TSConstructSignatureDeclaration;
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  validate(defs.parameters, node, "parameters", parameters, 1);
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  return node;
}
function tsPropertySignature(key, typeAnnotation = null) {
  const node = {
    type: "TSPropertySignature",
    key,
    typeAnnotation
  };
  const defs = NODE_FIELDS.TSPropertySignature;
  validate(defs.key, node, "key", key, 1);
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  return node;
}
function tsMethodSignature(key, typeParameters = null, parameters, typeAnnotation = null) {
  const node = {
    type: "TSMethodSignature",
    key,
    typeParameters,
    parameters,
    typeAnnotation,
    kind: null
  };
  const defs = NODE_FIELDS.TSMethodSignature;
  validate(defs.key, node, "key", key, 1);
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  validate(defs.parameters, node, "parameters", parameters, 1);
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  return node;
}
function tsIndexSignature(parameters, typeAnnotation = null) {
  const node = {
    type: "TSIndexSignature",
    parameters,
    typeAnnotation
  };
  const defs = NODE_FIELDS.TSIndexSignature;
  validate(defs.parameters, node, "parameters", parameters, 1);
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  return node;
}
function tsAnyKeyword() {
  return {
    type: "TSAnyKeyword"
  };
}
function tsBooleanKeyword() {
  return {
    type: "TSBooleanKeyword"
  };
}
function tsBigIntKeyword() {
  return {
    type: "TSBigIntKeyword"
  };
}
function tsIntrinsicKeyword() {
  return {
    type: "TSIntrinsicKeyword"
  };
}
function tsNeverKeyword() {
  return {
    type: "TSNeverKeyword"
  };
}
function tsNullKeyword() {
  return {
    type: "TSNullKeyword"
  };
}
function tsNumberKeyword() {
  return {
    type: "TSNumberKeyword"
  };
}
function tsObjectKeyword() {
  return {
    type: "TSObjectKeyword"
  };
}
function tsStringKeyword() {
  return {
    type: "TSStringKeyword"
  };
}
function tsSymbolKeyword() {
  return {
    type: "TSSymbolKeyword"
  };
}
function tsUndefinedKeyword() {
  return {
    type: "TSUndefinedKeyword"
  };
}
function tsUnknownKeyword() {
  return {
    type: "TSUnknownKeyword"
  };
}
function tsVoidKeyword() {
  return {
    type: "TSVoidKeyword"
  };
}
function tsThisType() {
  return {
    type: "TSThisType"
  };
}
function tsFunctionType(typeParameters = null, parameters, typeAnnotation = null) {
  const node = {
    type: "TSFunctionType",
    typeParameters,
    parameters,
    typeAnnotation
  };
  const defs = NODE_FIELDS.TSFunctionType;
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  validate(defs.parameters, node, "parameters", parameters, 1);
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  return node;
}
function tsConstructorType(typeParameters = null, parameters, typeAnnotation = null) {
  const node = {
    type: "TSConstructorType",
    typeParameters,
    parameters,
    typeAnnotation
  };
  const defs = NODE_FIELDS.TSConstructorType;
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  validate(defs.parameters, node, "parameters", parameters, 1);
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  return node;
}
function tsTypeReference(typeName, typeParameters = null) {
  const node = {
    type: "TSTypeReference",
    typeName,
    typeParameters
  };
  const defs = NODE_FIELDS.TSTypeReference;
  validate(defs.typeName, node, "typeName", typeName, 1);
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  return node;
}
function tsTypePredicate(parameterName, typeAnnotation = null, asserts = null) {
  const node = {
    type: "TSTypePredicate",
    parameterName,
    typeAnnotation,
    asserts
  };
  const defs = NODE_FIELDS.TSTypePredicate;
  validate(defs.parameterName, node, "parameterName", parameterName, 1);
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  validate(defs.asserts, node, "asserts", asserts);
  return node;
}
function tsTypeQuery(exprName, typeParameters = null) {
  const node = {
    type: "TSTypeQuery",
    exprName,
    typeParameters
  };
  const defs = NODE_FIELDS.TSTypeQuery;
  validate(defs.exprName, node, "exprName", exprName, 1);
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  return node;
}
function tsTypeLiteral(members) {
  const node = {
    type: "TSTypeLiteral",
    members
  };
  const defs = NODE_FIELDS.TSTypeLiteral;
  validate(defs.members, node, "members", members, 1);
  return node;
}
function tsArrayType(elementType) {
  const node = {
    type: "TSArrayType",
    elementType
  };
  const defs = NODE_FIELDS.TSArrayType;
  validate(defs.elementType, node, "elementType", elementType, 1);
  return node;
}
function tsTupleType(elementTypes) {
  const node = {
    type: "TSTupleType",
    elementTypes
  };
  const defs = NODE_FIELDS.TSTupleType;
  validate(defs.elementTypes, node, "elementTypes", elementTypes, 1);
  return node;
}
function tsOptionalType(typeAnnotation) {
  const node = {
    type: "TSOptionalType",
    typeAnnotation
  };
  const defs = NODE_FIELDS.TSOptionalType;
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  return node;
}
function tsRestType(typeAnnotation) {
  const node = {
    type: "TSRestType",
    typeAnnotation
  };
  const defs = NODE_FIELDS.TSRestType;
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  return node;
}
function tsNamedTupleMember(label, elementType, optional = false) {
  const node = {
    type: "TSNamedTupleMember",
    label,
    elementType,
    optional
  };
  const defs = NODE_FIELDS.TSNamedTupleMember;
  validate(defs.label, node, "label", label, 1);
  validate(defs.elementType, node, "elementType", elementType, 1);
  validate(defs.optional, node, "optional", optional);
  return node;
}
function tsUnionType(types) {
  const node = {
    type: "TSUnionType",
    types
  };
  const defs = NODE_FIELDS.TSUnionType;
  validate(defs.types, node, "types", types, 1);
  return node;
}
function tsIntersectionType(types) {
  const node = {
    type: "TSIntersectionType",
    types
  };
  const defs = NODE_FIELDS.TSIntersectionType;
  validate(defs.types, node, "types", types, 1);
  return node;
}
function tsConditionalType(checkType, extendsType, trueType, falseType) {
  const node = {
    type: "TSConditionalType",
    checkType,
    extendsType,
    trueType,
    falseType
  };
  const defs = NODE_FIELDS.TSConditionalType;
  validate(defs.checkType, node, "checkType", checkType, 1);
  validate(defs.extendsType, node, "extendsType", extendsType, 1);
  validate(defs.trueType, node, "trueType", trueType, 1);
  validate(defs.falseType, node, "falseType", falseType, 1);
  return node;
}
function tsInferType(typeParameter) {
  const node = {
    type: "TSInferType",
    typeParameter
  };
  const defs = NODE_FIELDS.TSInferType;
  validate(defs.typeParameter, node, "typeParameter", typeParameter, 1);
  return node;
}
function tsParenthesizedType(typeAnnotation) {
  const node = {
    type: "TSParenthesizedType",
    typeAnnotation
  };
  const defs = NODE_FIELDS.TSParenthesizedType;
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  return node;
}
function tsTypeOperator(typeAnnotation, operator) {
  const node = {
    type: "TSTypeOperator",
    typeAnnotation,
    operator
  };
  const defs = NODE_FIELDS.TSTypeOperator;
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  validate(defs.operator, node, "operator", operator);
  return node;
}
function tsIndexedAccessType(objectType, indexType) {
  const node = {
    type: "TSIndexedAccessType",
    objectType,
    indexType
  };
  const defs = NODE_FIELDS.TSIndexedAccessType;
  validate(defs.objectType, node, "objectType", objectType, 1);
  validate(defs.indexType, node, "indexType", indexType, 1);
  return node;
}
function tsMappedType(typeParameter, typeAnnotation = null, nameType = null) {
  const node = {
    type: "TSMappedType",
    typeParameter,
    typeAnnotation,
    nameType
  };
  const defs = NODE_FIELDS.TSMappedType;
  validate(defs.typeParameter, node, "typeParameter", typeParameter, 1);
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  validate(defs.nameType, node, "nameType", nameType, 1);
  return node;
}
function tsTemplateLiteralType(quasis, types) {
  const node = {
    type: "TSTemplateLiteralType",
    quasis,
    types
  };
  const defs = NODE_FIELDS.TSTemplateLiteralType;
  validate(defs.quasis, node, "quasis", quasis, 1);
  validate(defs.types, node, "types", types, 1);
  return node;
}
function tsLiteralType(literal) {
  const node = {
    type: "TSLiteralType",
    literal
  };
  const defs = NODE_FIELDS.TSLiteralType;
  validate(defs.literal, node, "literal", literal, 1);
  return node;
}
function tsExpressionWithTypeArguments(expression, typeParameters = null) {
  const node = {
    type: "TSExpressionWithTypeArguments",
    expression,
    typeParameters
  };
  const defs = NODE_FIELDS.TSExpressionWithTypeArguments;
  validate(defs.expression, node, "expression", expression, 1);
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  return node;
}
function tsInterfaceDeclaration(id, typeParameters = null, _extends = null, body) {
  const node = {
    type: "TSInterfaceDeclaration",
    id,
    typeParameters,
    extends: _extends,
    body
  };
  const defs = NODE_FIELDS.TSInterfaceDeclaration;
  validate(defs.id, node, "id", id, 1);
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  validate(defs.extends, node, "extends", _extends, 1);
  validate(defs.body, node, "body", body, 1);
  return node;
}
function tsInterfaceBody(body) {
  const node = {
    type: "TSInterfaceBody",
    body
  };
  const defs = NODE_FIELDS.TSInterfaceBody;
  validate(defs.body, node, "body", body, 1);
  return node;
}
function tsTypeAliasDeclaration(id, typeParameters = null, typeAnnotation) {
  const node = {
    type: "TSTypeAliasDeclaration",
    id,
    typeParameters,
    typeAnnotation
  };
  const defs = NODE_FIELDS.TSTypeAliasDeclaration;
  validate(defs.id, node, "id", id, 1);
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  return node;
}
function tsInstantiationExpression(expression, typeParameters = null) {
  const node = {
    type: "TSInstantiationExpression",
    expression,
    typeParameters
  };
  const defs = NODE_FIELDS.TSInstantiationExpression;
  validate(defs.expression, node, "expression", expression, 1);
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  return node;
}
function tsAsExpression(expression, typeAnnotation) {
  const node = {
    type: "TSAsExpression",
    expression,
    typeAnnotation
  };
  const defs = NODE_FIELDS.TSAsExpression;
  validate(defs.expression, node, "expression", expression, 1);
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  return node;
}
function tsSatisfiesExpression(expression, typeAnnotation) {
  const node = {
    type: "TSSatisfiesExpression",
    expression,
    typeAnnotation
  };
  const defs = NODE_FIELDS.TSSatisfiesExpression;
  validate(defs.expression, node, "expression", expression, 1);
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  return node;
}
function tsTypeAssertion(typeAnnotation, expression) {
  const node = {
    type: "TSTypeAssertion",
    typeAnnotation,
    expression
  };
  const defs = NODE_FIELDS.TSTypeAssertion;
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  validate(defs.expression, node, "expression", expression, 1);
  return node;
}
function tsEnumBody(members) {
  const node = {
    type: "TSEnumBody",
    members
  };
  const defs = NODE_FIELDS.TSEnumBody;
  validate(defs.members, node, "members", members, 1);
  return node;
}
function tsEnumDeclaration(id, members) {
  const node = {
    type: "TSEnumDeclaration",
    id,
    members
  };
  const defs = NODE_FIELDS.TSEnumDeclaration;
  validate(defs.id, node, "id", id, 1);
  validate(defs.members, node, "members", members, 1);
  return node;
}
function tsEnumMember(id, initializer = null) {
  const node = {
    type: "TSEnumMember",
    id,
    initializer
  };
  const defs = NODE_FIELDS.TSEnumMember;
  validate(defs.id, node, "id", id, 1);
  validate(defs.initializer, node, "initializer", initializer, 1);
  return node;
}
function tsModuleDeclaration(id, body) {
  const node = {
    type: "TSModuleDeclaration",
    id,
    body,
    kind: null
  };
  const defs = NODE_FIELDS.TSModuleDeclaration;
  validate(defs.id, node, "id", id, 1);
  validate(defs.body, node, "body", body, 1);
  return node;
}
function tsModuleBlock(body) {
  const node = {
    type: "TSModuleBlock",
    body
  };
  const defs = NODE_FIELDS.TSModuleBlock;
  validate(defs.body, node, "body", body, 1);
  return node;
}
function tsImportType(argument, qualifier = null, typeParameters = null) {
  const node = {
    type: "TSImportType",
    argument,
    qualifier,
    typeParameters
  };
  const defs = NODE_FIELDS.TSImportType;
  validate(defs.argument, node, "argument", argument, 1);
  validate(defs.qualifier, node, "qualifier", qualifier, 1);
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  return node;
}
function tsImportEqualsDeclaration(id, moduleReference) {
  const node = {
    type: "TSImportEqualsDeclaration",
    id,
    moduleReference,
    isExport: null
  };
  const defs = NODE_FIELDS.TSImportEqualsDeclaration;
  validate(defs.id, node, "id", id, 1);
  validate(defs.moduleReference, node, "moduleReference", moduleReference, 1);
  return node;
}
function tsExternalModuleReference(expression) {
  const node = {
    type: "TSExternalModuleReference",
    expression
  };
  const defs = NODE_FIELDS.TSExternalModuleReference;
  validate(defs.expression, node, "expression", expression, 1);
  return node;
}
function tsNonNullExpression(expression) {
  const node = {
    type: "TSNonNullExpression",
    expression
  };
  const defs = NODE_FIELDS.TSNonNullExpression;
  validate(defs.expression, node, "expression", expression, 1);
  return node;
}
function tsExportAssignment(expression) {
  const node = {
    type: "TSExportAssignment",
    expression
  };
  const defs = NODE_FIELDS.TSExportAssignment;
  validate(defs.expression, node, "expression", expression, 1);
  return node;
}
function tsNamespaceExportDeclaration(id) {
  const node = {
    type: "TSNamespaceExportDeclaration",
    id
  };
  const defs = NODE_FIELDS.TSNamespaceExportDeclaration;
  validate(defs.id, node, "id", id, 1);
  return node;
}
function tsTypeAnnotation(typeAnnotation) {
  const node = {
    type: "TSTypeAnnotation",
    typeAnnotation
  };
  const defs = NODE_FIELDS.TSTypeAnnotation;
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  return node;
}
function tsTypeParameterInstantiation(params) {
  const node = {
    type: "TSTypeParameterInstantiation",
    params
  };
  const defs = NODE_FIELDS.TSTypeParameterInstantiation;
  validate(defs.params, node, "params", params, 1);
  return node;
}
function tsTypeParameterDeclaration(params) {
  const node = {
    type: "TSTypeParameterDeclaration",
    params
  };
  const defs = NODE_FIELDS.TSTypeParameterDeclaration;
  validate(defs.params, node, "params", params, 1);
  return node;
}
function tsTypeParameter(constraint = null, _default = null, name) {
  const node = {
    type: "TSTypeParameter",
    constraint,
    default: _default,
    name
  };
  const defs = NODE_FIELDS.TSTypeParameter;
  validate(defs.constraint, node, "constraint", constraint, 1);
  validate(defs.default, node, "default", _default, 1);
  validate(defs.name, node, "name", name);
  return node;
}
function NumberLiteral(value) {
  (0, _deprecationWarning$1.default)("NumberLiteral", "NumericLiteral", "The node type ");
  return numericLiteral(value);
}
function RegexLiteral(pattern, flags = "") {
  (0, _deprecationWarning$1.default)("RegexLiteral", "RegExpLiteral", "The node type ");
  return regExpLiteral(pattern, flags);
}
function RestProperty(argument) {
  (0, _deprecationWarning$1.default)("RestProperty", "RestElement", "The node type ");
  return restElement(argument);
}
function SpreadProperty(argument) {
  (0, _deprecationWarning$1.default)("SpreadProperty", "SpreadElement", "The node type ");
  return spreadElement(argument);
}

var uppercase = {};

Object.defineProperty(uppercase, "__esModule", {
  value: true
});
uppercase.JSXIdentifier = uppercase.JSXFragment = uppercase.JSXExpressionContainer = uppercase.JSXEmptyExpression = uppercase.JSXElement = uppercase.JSXClosingFragment = uppercase.JSXClosingElement = uppercase.JSXAttribute = uppercase.IntersectionTypeAnnotation = uppercase.InterpreterDirective = uppercase.InterfaceTypeAnnotation = uppercase.InterfaceExtends = uppercase.InterfaceDeclaration = uppercase.InferredPredicate = uppercase.IndexedAccessType = uppercase.ImportSpecifier = uppercase.ImportNamespaceSpecifier = uppercase.ImportExpression = uppercase.ImportDefaultSpecifier = uppercase.ImportDeclaration = uppercase.ImportAttribute = uppercase.Import = uppercase.IfStatement = uppercase.Identifier = uppercase.GenericTypeAnnotation = uppercase.FunctionTypeParam = uppercase.FunctionTypeAnnotation = uppercase.FunctionExpression = uppercase.FunctionDeclaration = uppercase.ForStatement = uppercase.ForOfStatement = uppercase.ForInStatement = uppercase.File = uppercase.ExpressionStatement = uppercase.ExportSpecifier = uppercase.ExportNamespaceSpecifier = uppercase.ExportNamedDeclaration = uppercase.ExportDefaultSpecifier = uppercase.ExportDefaultDeclaration = uppercase.ExportAllDeclaration = uppercase.ExistsTypeAnnotation = uppercase.EnumSymbolBody = uppercase.EnumStringMember = uppercase.EnumStringBody = uppercase.EnumNumberMember = uppercase.EnumNumberBody = uppercase.EnumDefaultedMember = uppercase.EnumDeclaration = uppercase.EnumBooleanMember = uppercase.EnumBooleanBody = uppercase.EmptyTypeAnnotation = uppercase.EmptyStatement = uppercase.DoWhileStatement = uppercase.DoExpression = uppercase.DirectiveLiteral = uppercase.Directive = uppercase.Decorator = uppercase.DeclaredPredicate = uppercase.DeclareVariable = uppercase.DeclareTypeAlias = uppercase.DeclareOpaqueType = uppercase.DeclareModuleExports = uppercase.DeclareModule = uppercase.DeclareInterface = uppercase.DeclareFunction = uppercase.DeclareExportDeclaration = uppercase.DeclareExportAllDeclaration = uppercase.DeclareClass = uppercase.DecimalLiteral = uppercase.DebuggerStatement = uppercase.ContinueStatement = uppercase.ConditionalExpression = uppercase.ClassProperty = uppercase.ClassPrivateProperty = uppercase.ClassPrivateMethod = uppercase.ClassMethod = uppercase.ClassImplements = uppercase.ClassExpression = uppercase.ClassDeclaration = uppercase.ClassBody = uppercase.ClassAccessorProperty = uppercase.CatchClause = uppercase.CallExpression = uppercase.BreakStatement = uppercase.BooleanTypeAnnotation = uppercase.BooleanLiteralTypeAnnotation = uppercase.BooleanLiteral = uppercase.BlockStatement = uppercase.BindExpression = uppercase.BinaryExpression = uppercase.BigIntLiteral = uppercase.AwaitExpression = uppercase.AssignmentPattern = uppercase.AssignmentExpression = uppercase.ArrowFunctionExpression = uppercase.ArrayTypeAnnotation = uppercase.ArrayPattern = uppercase.ArrayExpression = uppercase.ArgumentPlaceholder = uppercase.AnyTypeAnnotation = void 0;
uppercase.TSNumberKeyword = uppercase.TSNullKeyword = uppercase.TSNonNullExpression = uppercase.TSNeverKeyword = uppercase.TSNamespaceExportDeclaration = uppercase.TSNamedTupleMember = uppercase.TSModuleDeclaration = uppercase.TSModuleBlock = uppercase.TSMethodSignature = uppercase.TSMappedType = uppercase.TSLiteralType = uppercase.TSIntrinsicKeyword = uppercase.TSIntersectionType = uppercase.TSInterfaceDeclaration = uppercase.TSInterfaceBody = uppercase.TSInstantiationExpression = uppercase.TSInferType = uppercase.TSIndexedAccessType = uppercase.TSIndexSignature = uppercase.TSImportType = uppercase.TSImportEqualsDeclaration = uppercase.TSFunctionType = uppercase.TSExternalModuleReference = uppercase.TSExpressionWithTypeArguments = uppercase.TSExportAssignment = uppercase.TSEnumMember = uppercase.TSEnumDeclaration = uppercase.TSEnumBody = uppercase.TSDeclareMethod = uppercase.TSDeclareFunction = uppercase.TSConstructorType = uppercase.TSConstructSignatureDeclaration = uppercase.TSConditionalType = uppercase.TSCallSignatureDeclaration = uppercase.TSBooleanKeyword = uppercase.TSBigIntKeyword = uppercase.TSAsExpression = uppercase.TSArrayType = uppercase.TSAnyKeyword = uppercase.SymbolTypeAnnotation = uppercase.SwitchStatement = uppercase.SwitchCase = uppercase.Super = uppercase.StringTypeAnnotation = uppercase.StringLiteralTypeAnnotation = uppercase.StringLiteral = uppercase.StaticBlock = uppercase.SpreadProperty = uppercase.SpreadElement = uppercase.SequenceExpression = uppercase.ReturnStatement = uppercase.RestProperty = uppercase.RestElement = uppercase.RegexLiteral = uppercase.RegExpLiteral = uppercase.RecordExpression = uppercase.QualifiedTypeIdentifier = uppercase.Program = uppercase.PrivateName = uppercase.Placeholder = uppercase.PipelineTopicExpression = uppercase.PipelinePrimaryTopicReference = uppercase.PipelineBareFunction = uppercase.ParenthesizedExpression = uppercase.OptionalMemberExpression = uppercase.OptionalIndexedAccessType = uppercase.OptionalCallExpression = uppercase.OpaqueType = uppercase.ObjectTypeSpreadProperty = uppercase.ObjectTypeProperty = uppercase.ObjectTypeInternalSlot = uppercase.ObjectTypeIndexer = uppercase.ObjectTypeCallProperty = uppercase.ObjectTypeAnnotation = uppercase.ObjectProperty = uppercase.ObjectPattern = uppercase.ObjectMethod = uppercase.ObjectExpression = uppercase.NumericLiteral = uppercase.NumberTypeAnnotation = uppercase.NumberLiteralTypeAnnotation = uppercase.NumberLiteral = uppercase.NullableTypeAnnotation = uppercase.NullLiteralTypeAnnotation = uppercase.NullLiteral = uppercase.Noop = uppercase.NewExpression = uppercase.ModuleExpression = uppercase.MixedTypeAnnotation = uppercase.MetaProperty = uppercase.MemberExpression = uppercase.LogicalExpression = uppercase.LabeledStatement = uppercase.JSXText = uppercase.JSXSpreadChild = uppercase.JSXSpreadAttribute = uppercase.JSXOpeningFragment = uppercase.JSXOpeningElement = uppercase.JSXNamespacedName = uppercase.JSXMemberExpression = void 0;
uppercase.YieldExpression = uppercase.WithStatement = uppercase.WhileStatement = uppercase.VoidTypeAnnotation = uppercase.VoidPattern = uppercase.Variance = uppercase.VariableDeclarator = uppercase.VariableDeclaration = uppercase.V8IntrinsicIdentifier = uppercase.UpdateExpression = uppercase.UnionTypeAnnotation = uppercase.UnaryExpression = uppercase.TypeofTypeAnnotation = uppercase.TypeParameterInstantiation = uppercase.TypeParameterDeclaration = uppercase.TypeParameter = uppercase.TypeCastExpression = uppercase.TypeAnnotation = uppercase.TypeAlias = uppercase.TupleTypeAnnotation = uppercase.TupleExpression = uppercase.TryStatement = uppercase.TopicReference = uppercase.ThrowStatement = uppercase.ThisTypeAnnotation = uppercase.ThisExpression = uppercase.TemplateLiteral = uppercase.TemplateElement = uppercase.TaggedTemplateExpression = uppercase.TSVoidKeyword = uppercase.TSUnknownKeyword = uppercase.TSUnionType = uppercase.TSUndefinedKeyword = uppercase.TSTypeReference = uppercase.TSTypeQuery = uppercase.TSTypePredicate = uppercase.TSTypeParameterInstantiation = uppercase.TSTypeParameterDeclaration = uppercase.TSTypeParameter = uppercase.TSTypeOperator = uppercase.TSTypeLiteral = uppercase.TSTypeAssertion = uppercase.TSTypeAnnotation = uppercase.TSTypeAliasDeclaration = uppercase.TSTupleType = uppercase.TSThisType = uppercase.TSTemplateLiteralType = uppercase.TSSymbolKeyword = uppercase.TSStringKeyword = uppercase.TSSatisfiesExpression = uppercase.TSRestType = uppercase.TSQualifiedName = uppercase.TSPropertySignature = uppercase.TSParenthesizedType = uppercase.TSParameterProperty = uppercase.TSOptionalType = uppercase.TSObjectKeyword = void 0;
var b = lowercase;
function alias(lowercase) {
  {
    return b[lowercase];
  }
}
uppercase.ArrayExpression = alias("arrayExpression");
  uppercase.AssignmentExpression = alias("assignmentExpression");
  uppercase.BinaryExpression = alias("binaryExpression");
  uppercase.InterpreterDirective = alias("interpreterDirective");
  uppercase.Directive = alias("directive");
  uppercase.DirectiveLiteral = alias("directiveLiteral");
  uppercase.BlockStatement = alias("blockStatement");
  uppercase.BreakStatement = alias("breakStatement");
  uppercase.CallExpression = alias("callExpression");
  uppercase.CatchClause = alias("catchClause");
  uppercase.ConditionalExpression = alias("conditionalExpression");
  uppercase.ContinueStatement = alias("continueStatement");
  uppercase.DebuggerStatement = alias("debuggerStatement");
  uppercase.DoWhileStatement = alias("doWhileStatement");
  uppercase.EmptyStatement = alias("emptyStatement");
  uppercase.ExpressionStatement = alias("expressionStatement");
  uppercase.File = alias("file");
  uppercase.ForInStatement = alias("forInStatement");
  uppercase.ForStatement = alias("forStatement");
  uppercase.FunctionDeclaration = alias("functionDeclaration");
  uppercase.FunctionExpression = alias("functionExpression");
  uppercase.Identifier = alias("identifier");
  uppercase.IfStatement = alias("ifStatement");
  uppercase.LabeledStatement = alias("labeledStatement");
  uppercase.StringLiteral = alias("stringLiteral");
  uppercase.NumericLiteral = alias("numericLiteral");
  uppercase.NullLiteral = alias("nullLiteral");
  uppercase.BooleanLiteral = alias("booleanLiteral");
  uppercase.RegExpLiteral = alias("regExpLiteral");
  uppercase.LogicalExpression = alias("logicalExpression");
  uppercase.MemberExpression = alias("memberExpression");
  uppercase.NewExpression = alias("newExpression");
  uppercase.Program = alias("program");
  uppercase.ObjectExpression = alias("objectExpression");
  uppercase.ObjectMethod = alias("objectMethod");
  uppercase.ObjectProperty = alias("objectProperty");
  uppercase.RestElement = alias("restElement");
  uppercase.ReturnStatement = alias("returnStatement");
  uppercase.SequenceExpression = alias("sequenceExpression");
  uppercase.ParenthesizedExpression = alias("parenthesizedExpression");
  uppercase.SwitchCase = alias("switchCase");
  uppercase.SwitchStatement = alias("switchStatement");
  uppercase.ThisExpression = alias("thisExpression");
  uppercase.ThrowStatement = alias("throwStatement");
  uppercase.TryStatement = alias("tryStatement");
  uppercase.UnaryExpression = alias("unaryExpression");
  uppercase.UpdateExpression = alias("updateExpression");
  uppercase.VariableDeclaration = alias("variableDeclaration");
  uppercase.VariableDeclarator = alias("variableDeclarator");
  uppercase.WhileStatement = alias("whileStatement");
  uppercase.WithStatement = alias("withStatement");
  uppercase.AssignmentPattern = alias("assignmentPattern");
  uppercase.ArrayPattern = alias("arrayPattern");
  uppercase.ArrowFunctionExpression = alias("arrowFunctionExpression");
  uppercase.ClassBody = alias("classBody");
  uppercase.ClassExpression = alias("classExpression");
  uppercase.ClassDeclaration = alias("classDeclaration");
  uppercase.ExportAllDeclaration = alias("exportAllDeclaration");
  uppercase.ExportDefaultDeclaration = alias("exportDefaultDeclaration");
  uppercase.ExportNamedDeclaration = alias("exportNamedDeclaration");
  uppercase.ExportSpecifier = alias("exportSpecifier");
  uppercase.ForOfStatement = alias("forOfStatement");
  uppercase.ImportDeclaration = alias("importDeclaration");
  uppercase.ImportDefaultSpecifier = alias("importDefaultSpecifier");
  uppercase.ImportNamespaceSpecifier = alias("importNamespaceSpecifier");
  uppercase.ImportSpecifier = alias("importSpecifier");
  uppercase.ImportExpression = alias("importExpression");
  uppercase.MetaProperty = alias("metaProperty");
  uppercase.ClassMethod = alias("classMethod");
  uppercase.ObjectPattern = alias("objectPattern");
  uppercase.SpreadElement = alias("spreadElement");
  uppercase.Super = alias("super");
  uppercase.TaggedTemplateExpression = alias("taggedTemplateExpression");
  uppercase.TemplateElement = alias("templateElement");
  uppercase.TemplateLiteral = alias("templateLiteral");
  uppercase.YieldExpression = alias("yieldExpression");
  uppercase.AwaitExpression = alias("awaitExpression");
  uppercase.Import = alias("import");
  uppercase.BigIntLiteral = alias("bigIntLiteral");
  uppercase.ExportNamespaceSpecifier = alias("exportNamespaceSpecifier");
  uppercase.OptionalMemberExpression = alias("optionalMemberExpression");
  uppercase.OptionalCallExpression = alias("optionalCallExpression");
  uppercase.ClassProperty = alias("classProperty");
  uppercase.ClassAccessorProperty = alias("classAccessorProperty");
  uppercase.ClassPrivateProperty = alias("classPrivateProperty");
  uppercase.ClassPrivateMethod = alias("classPrivateMethod");
  uppercase.PrivateName = alias("privateName");
  uppercase.StaticBlock = alias("staticBlock");
  uppercase.ImportAttribute = alias("importAttribute");
  uppercase.AnyTypeAnnotation = alias("anyTypeAnnotation");
  uppercase.ArrayTypeAnnotation = alias("arrayTypeAnnotation");
  uppercase.BooleanTypeAnnotation = alias("booleanTypeAnnotation");
  uppercase.BooleanLiteralTypeAnnotation = alias("booleanLiteralTypeAnnotation");
  uppercase.NullLiteralTypeAnnotation = alias("nullLiteralTypeAnnotation");
  uppercase.ClassImplements = alias("classImplements");
  uppercase.DeclareClass = alias("declareClass");
  uppercase.DeclareFunction = alias("declareFunction");
  uppercase.DeclareInterface = alias("declareInterface");
  uppercase.DeclareModule = alias("declareModule");
  uppercase.DeclareModuleExports = alias("declareModuleExports");
  uppercase.DeclareTypeAlias = alias("declareTypeAlias");
  uppercase.DeclareOpaqueType = alias("declareOpaqueType");
  uppercase.DeclareVariable = alias("declareVariable");
  uppercase.DeclareExportDeclaration = alias("declareExportDeclaration");
  uppercase.DeclareExportAllDeclaration = alias("declareExportAllDeclaration");
  uppercase.DeclaredPredicate = alias("declaredPredicate");
  uppercase.ExistsTypeAnnotation = alias("existsTypeAnnotation");
  uppercase.FunctionTypeAnnotation = alias("functionTypeAnnotation");
  uppercase.FunctionTypeParam = alias("functionTypeParam");
  uppercase.GenericTypeAnnotation = alias("genericTypeAnnotation");
  uppercase.InferredPredicate = alias("inferredPredicate");
  uppercase.InterfaceExtends = alias("interfaceExtends");
  uppercase.InterfaceDeclaration = alias("interfaceDeclaration");
  uppercase.InterfaceTypeAnnotation = alias("interfaceTypeAnnotation");
  uppercase.IntersectionTypeAnnotation = alias("intersectionTypeAnnotation");
  uppercase.MixedTypeAnnotation = alias("mixedTypeAnnotation");
  uppercase.EmptyTypeAnnotation = alias("emptyTypeAnnotation");
  uppercase.NullableTypeAnnotation = alias("nullableTypeAnnotation");
  uppercase.NumberLiteralTypeAnnotation = alias("numberLiteralTypeAnnotation");
  uppercase.NumberTypeAnnotation = alias("numberTypeAnnotation");
  uppercase.ObjectTypeAnnotation = alias("objectTypeAnnotation");
  uppercase.ObjectTypeInternalSlot = alias("objectTypeInternalSlot");
  uppercase.ObjectTypeCallProperty = alias("objectTypeCallProperty");
  uppercase.ObjectTypeIndexer = alias("objectTypeIndexer");
  uppercase.ObjectTypeProperty = alias("objectTypeProperty");
  uppercase.ObjectTypeSpreadProperty = alias("objectTypeSpreadProperty");
  uppercase.OpaqueType = alias("opaqueType");
  uppercase.QualifiedTypeIdentifier = alias("qualifiedTypeIdentifier");
  uppercase.StringLiteralTypeAnnotation = alias("stringLiteralTypeAnnotation");
  uppercase.StringTypeAnnotation = alias("stringTypeAnnotation");
  uppercase.SymbolTypeAnnotation = alias("symbolTypeAnnotation");
  uppercase.ThisTypeAnnotation = alias("thisTypeAnnotation");
  uppercase.TupleTypeAnnotation = alias("tupleTypeAnnotation");
  uppercase.TypeofTypeAnnotation = alias("typeofTypeAnnotation");
  uppercase.TypeAlias = alias("typeAlias");
  uppercase.TypeAnnotation = alias("typeAnnotation");
  uppercase.TypeCastExpression = alias("typeCastExpression");
  uppercase.TypeParameter = alias("typeParameter");
  uppercase.TypeParameterDeclaration = alias("typeParameterDeclaration");
  uppercase.TypeParameterInstantiation = alias("typeParameterInstantiation");
  uppercase.UnionTypeAnnotation = alias("unionTypeAnnotation");
  uppercase.Variance = alias("variance");
  uppercase.VoidTypeAnnotation = alias("voidTypeAnnotation");
  uppercase.EnumDeclaration = alias("enumDeclaration");
  uppercase.EnumBooleanBody = alias("enumBooleanBody");
  uppercase.EnumNumberBody = alias("enumNumberBody");
  uppercase.EnumStringBody = alias("enumStringBody");
  uppercase.EnumSymbolBody = alias("enumSymbolBody");
  uppercase.EnumBooleanMember = alias("enumBooleanMember");
  uppercase.EnumNumberMember = alias("enumNumberMember");
  uppercase.EnumStringMember = alias("enumStringMember");
  uppercase.EnumDefaultedMember = alias("enumDefaultedMember");
  uppercase.IndexedAccessType = alias("indexedAccessType");
  uppercase.OptionalIndexedAccessType = alias("optionalIndexedAccessType");
  uppercase.JSXAttribute = alias("jsxAttribute");
  uppercase.JSXClosingElement = alias("jsxClosingElement");
  uppercase.JSXElement = alias("jsxElement");
  uppercase.JSXEmptyExpression = alias("jsxEmptyExpression");
  uppercase.JSXExpressionContainer = alias("jsxExpressionContainer");
  uppercase.JSXSpreadChild = alias("jsxSpreadChild");
  uppercase.JSXIdentifier = alias("jsxIdentifier");
  uppercase.JSXMemberExpression = alias("jsxMemberExpression");
  uppercase.JSXNamespacedName = alias("jsxNamespacedName");
  uppercase.JSXOpeningElement = alias("jsxOpeningElement");
  uppercase.JSXSpreadAttribute = alias("jsxSpreadAttribute");
  uppercase.JSXText = alias("jsxText");
  uppercase.JSXFragment = alias("jsxFragment");
  uppercase.JSXOpeningFragment = alias("jsxOpeningFragment");
  uppercase.JSXClosingFragment = alias("jsxClosingFragment");
  uppercase.Noop = alias("noop");
  uppercase.Placeholder = alias("placeholder");
  uppercase.V8IntrinsicIdentifier = alias("v8IntrinsicIdentifier");
  uppercase.ArgumentPlaceholder = alias("argumentPlaceholder");
  uppercase.BindExpression = alias("bindExpression");
  uppercase.Decorator = alias("decorator");
  uppercase.DoExpression = alias("doExpression");
  uppercase.ExportDefaultSpecifier = alias("exportDefaultSpecifier");
  uppercase.RecordExpression = alias("recordExpression");
  uppercase.TupleExpression = alias("tupleExpression");
  uppercase.DecimalLiteral = alias("decimalLiteral");
  uppercase.ModuleExpression = alias("moduleExpression");
  uppercase.TopicReference = alias("topicReference");
  uppercase.PipelineTopicExpression = alias("pipelineTopicExpression");
  uppercase.PipelineBareFunction = alias("pipelineBareFunction");
  uppercase.PipelinePrimaryTopicReference = alias("pipelinePrimaryTopicReference");
  uppercase.VoidPattern = alias("voidPattern");
  uppercase.TSParameterProperty = alias("tsParameterProperty");
  uppercase.TSDeclareFunction = alias("tsDeclareFunction");
  uppercase.TSDeclareMethod = alias("tsDeclareMethod");
  uppercase.TSQualifiedName = alias("tsQualifiedName");
  uppercase.TSCallSignatureDeclaration = alias("tsCallSignatureDeclaration");
  uppercase.TSConstructSignatureDeclaration = alias("tsConstructSignatureDeclaration");
  uppercase.TSPropertySignature = alias("tsPropertySignature");
  uppercase.TSMethodSignature = alias("tsMethodSignature");
  uppercase.TSIndexSignature = alias("tsIndexSignature");
  uppercase.TSAnyKeyword = alias("tsAnyKeyword");
  uppercase.TSBooleanKeyword = alias("tsBooleanKeyword");
  uppercase.TSBigIntKeyword = alias("tsBigIntKeyword");
  uppercase.TSIntrinsicKeyword = alias("tsIntrinsicKeyword");
  uppercase.TSNeverKeyword = alias("tsNeverKeyword");
  uppercase.TSNullKeyword = alias("tsNullKeyword");
  uppercase.TSNumberKeyword = alias("tsNumberKeyword");
  uppercase.TSObjectKeyword = alias("tsObjectKeyword");
  uppercase.TSStringKeyword = alias("tsStringKeyword");
  uppercase.TSSymbolKeyword = alias("tsSymbolKeyword");
  uppercase.TSUndefinedKeyword = alias("tsUndefinedKeyword");
  uppercase.TSUnknownKeyword = alias("tsUnknownKeyword");
  uppercase.TSVoidKeyword = alias("tsVoidKeyword");
  uppercase.TSThisType = alias("tsThisType");
  uppercase.TSFunctionType = alias("tsFunctionType");
  uppercase.TSConstructorType = alias("tsConstructorType");
  uppercase.TSTypeReference = alias("tsTypeReference");
  uppercase.TSTypePredicate = alias("tsTypePredicate");
  uppercase.TSTypeQuery = alias("tsTypeQuery");
  uppercase.TSTypeLiteral = alias("tsTypeLiteral");
  uppercase.TSArrayType = alias("tsArrayType");
  uppercase.TSTupleType = alias("tsTupleType");
  uppercase.TSOptionalType = alias("tsOptionalType");
  uppercase.TSRestType = alias("tsRestType");
  uppercase.TSNamedTupleMember = alias("tsNamedTupleMember");
  uppercase.TSUnionType = alias("tsUnionType");
  uppercase.TSIntersectionType = alias("tsIntersectionType");
  uppercase.TSConditionalType = alias("tsConditionalType");
  uppercase.TSInferType = alias("tsInferType");
  uppercase.TSParenthesizedType = alias("tsParenthesizedType");
  uppercase.TSTypeOperator = alias("tsTypeOperator");
  uppercase.TSIndexedAccessType = alias("tsIndexedAccessType");
  uppercase.TSMappedType = alias("tsMappedType");
  uppercase.TSTemplateLiteralType = alias("tsTemplateLiteralType");
  uppercase.TSLiteralType = alias("tsLiteralType");
  uppercase.TSExpressionWithTypeArguments = alias("tsExpressionWithTypeArguments");
  uppercase.TSInterfaceDeclaration = alias("tsInterfaceDeclaration");
  uppercase.TSInterfaceBody = alias("tsInterfaceBody");
  uppercase.TSTypeAliasDeclaration = alias("tsTypeAliasDeclaration");
  uppercase.TSInstantiationExpression = alias("tsInstantiationExpression");
  uppercase.TSAsExpression = alias("tsAsExpression");
  uppercase.TSSatisfiesExpression = alias("tsSatisfiesExpression");
  uppercase.TSTypeAssertion = alias("tsTypeAssertion");
  uppercase.TSEnumBody = alias("tsEnumBody");
  uppercase.TSEnumDeclaration = alias("tsEnumDeclaration");
  uppercase.TSEnumMember = alias("tsEnumMember");
  uppercase.TSModuleDeclaration = alias("tsModuleDeclaration");
  uppercase.TSModuleBlock = alias("tsModuleBlock");
  uppercase.TSImportType = alias("tsImportType");
  uppercase.TSImportEqualsDeclaration = alias("tsImportEqualsDeclaration");
  uppercase.TSExternalModuleReference = alias("tsExternalModuleReference");
  uppercase.TSNonNullExpression = alias("tsNonNullExpression");
  uppercase.TSExportAssignment = alias("tsExportAssignment");
  uppercase.TSNamespaceExportDeclaration = alias("tsNamespaceExportDeclaration");
  uppercase.TSTypeAnnotation = alias("tsTypeAnnotation");
  uppercase.TSTypeParameterInstantiation = alias("tsTypeParameterInstantiation");
  uppercase.TSTypeParameterDeclaration = alias("tsTypeParameterDeclaration");
  uppercase.TSTypeParameter = alias("tsTypeParameter");
uppercase.NumberLiteral = b.numberLiteral;
  uppercase.RegexLiteral = b.regexLiteral;
  uppercase.RestProperty = b.restProperty;
  uppercase.SpreadProperty = b.spreadProperty;

(function (exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _lowercase = lowercase;
	Object.keys(_lowercase).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _lowercase[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function () {
	      return _lowercase[key];
	    }
	  });
	});
	var _uppercase = uppercase;
	Object.keys(_uppercase).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _uppercase[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function () {
	      return _uppercase[key];
	    }
	  });
	});

	
} (generated$2));

var hasRequiredCleanJSXElementLiteralChild;

function requireCleanJSXElementLiteralChild () {
	if (hasRequiredCleanJSXElementLiteralChild) return cleanJSXElementLiteralChild;
	hasRequiredCleanJSXElementLiteralChild = 1;

	Object.defineProperty(cleanJSXElementLiteralChild, "__esModule", {
	  value: true
	});
	cleanJSXElementLiteralChild.default = cleanJSXElementLiteralChild$1;
	var _index = generated$2;
	var _index2 = requireLib();
	function cleanJSXElementLiteralChild$1(child, args) {
	  const lines = child.value.split(/\r\n|\n|\r/);
	  let lastNonEmptyLine = 0;
	  for (let i = 0; i < lines.length; i++) {
	    if (/[^ \t]/.exec(lines[i])) {
	      lastNonEmptyLine = i;
	    }
	  }
	  let str = "";
	  for (let i = 0; i < lines.length; i++) {
	    const line = lines[i];
	    const isFirstLine = i === 0;
	    const isLastLine = i === lines.length - 1;
	    const isLastNonEmptyLine = i === lastNonEmptyLine;
	    let trimmedLine = line.replace(/\t/g, " ");
	    if (!isFirstLine) {
	      trimmedLine = trimmedLine.replace(/^ +/, "");
	    }
	    if (!isLastLine) {
	      trimmedLine = trimmedLine.replace(/ +$/, "");
	    }
	    if (trimmedLine) {
	      if (!isLastNonEmptyLine) {
	        trimmedLine += " ";
	      }
	      str += trimmedLine;
	    }
	  }
	  if (str) args.push((0, _index2.inherits)((0, _index.stringLiteral)(str), child));
	}

	
	return cleanJSXElementLiteralChild;
}

var hasRequiredBuildChildren;

function requireBuildChildren () {
	if (hasRequiredBuildChildren) return buildChildren;
	hasRequiredBuildChildren = 1;

	Object.defineProperty(buildChildren, "__esModule", {
	  value: true
	});
	buildChildren.default = buildChildren$1;
	var _index = generated$3;
	var _cleanJSXElementLiteralChild = requireCleanJSXElementLiteralChild();
	function buildChildren$1(node) {
	  const elements = [];
	  for (let i = 0; i < node.children.length; i++) {
	    let child = node.children[i];
	    if ((0, _index.isJSXText)(child)) {
	      (0, _cleanJSXElementLiteralChild.default)(child, elements);
	      continue;
	    }
	    if ((0, _index.isJSXExpressionContainer)(child)) child = child.expression;
	    if ((0, _index.isJSXEmptyExpression)(child)) continue;
	    elements.push(child);
	  }
	  return elements;
	}

	
	return buildChildren;
}

var assertNode$1 = {};

var isNode$1 = {};

Object.defineProperty(isNode$1, "__esModule", {
  value: true
});
isNode$1.default = isNode;
var _index$u = requireDefinitions();
function isNode(node) {
  return !!(node && _index$u.VISITOR_KEYS[node.type]);
}

Object.defineProperty(assertNode$1, "__esModule", {
  value: true
});
assertNode$1.default = assertNode;
var _isNode = isNode$1;
function assertNode(node) {
  if (!(0, _isNode.default)(node)) {
    var _node$type;
    const type = (_node$type = node == null ? void 0 : node.type) != null ? _node$type : JSON.stringify(node);
    throw new TypeError(`Not a valid node of type "${type}"`);
  }
}

var generated$1 = {};

Object.defineProperty(generated$1, "__esModule", {
  value: true
});
generated$1.assertAccessor = assertAccessor;
generated$1.assertAnyTypeAnnotation = assertAnyTypeAnnotation;
generated$1.assertArgumentPlaceholder = assertArgumentPlaceholder;
generated$1.assertArrayExpression = assertArrayExpression;
generated$1.assertArrayPattern = assertArrayPattern;
generated$1.assertArrayTypeAnnotation = assertArrayTypeAnnotation;
generated$1.assertArrowFunctionExpression = assertArrowFunctionExpression;
generated$1.assertAssignmentExpression = assertAssignmentExpression;
generated$1.assertAssignmentPattern = assertAssignmentPattern;
generated$1.assertAwaitExpression = assertAwaitExpression;
generated$1.assertBigIntLiteral = assertBigIntLiteral;
generated$1.assertBinary = assertBinary;
generated$1.assertBinaryExpression = assertBinaryExpression;
generated$1.assertBindExpression = assertBindExpression;
generated$1.assertBlock = assertBlock;
generated$1.assertBlockParent = assertBlockParent;
generated$1.assertBlockStatement = assertBlockStatement;
generated$1.assertBooleanLiteral = assertBooleanLiteral;
generated$1.assertBooleanLiteralTypeAnnotation = assertBooleanLiteralTypeAnnotation;
generated$1.assertBooleanTypeAnnotation = assertBooleanTypeAnnotation;
generated$1.assertBreakStatement = assertBreakStatement;
generated$1.assertCallExpression = assertCallExpression;
generated$1.assertCatchClause = assertCatchClause;
generated$1.assertClass = assertClass;
generated$1.assertClassAccessorProperty = assertClassAccessorProperty;
generated$1.assertClassBody = assertClassBody;
generated$1.assertClassDeclaration = assertClassDeclaration;
generated$1.assertClassExpression = assertClassExpression;
generated$1.assertClassImplements = assertClassImplements;
generated$1.assertClassMethod = assertClassMethod;
generated$1.assertClassPrivateMethod = assertClassPrivateMethod;
generated$1.assertClassPrivateProperty = assertClassPrivateProperty;
generated$1.assertClassProperty = assertClassProperty;
generated$1.assertCompletionStatement = assertCompletionStatement;
generated$1.assertConditional = assertConditional;
generated$1.assertConditionalExpression = assertConditionalExpression;
generated$1.assertContinueStatement = assertContinueStatement;
generated$1.assertDebuggerStatement = assertDebuggerStatement;
generated$1.assertDecimalLiteral = assertDecimalLiteral;
generated$1.assertDeclaration = assertDeclaration;
generated$1.assertDeclareClass = assertDeclareClass;
generated$1.assertDeclareExportAllDeclaration = assertDeclareExportAllDeclaration;
generated$1.assertDeclareExportDeclaration = assertDeclareExportDeclaration;
generated$1.assertDeclareFunction = assertDeclareFunction;
generated$1.assertDeclareInterface = assertDeclareInterface;
generated$1.assertDeclareModule = assertDeclareModule;
generated$1.assertDeclareModuleExports = assertDeclareModuleExports;
generated$1.assertDeclareOpaqueType = assertDeclareOpaqueType;
generated$1.assertDeclareTypeAlias = assertDeclareTypeAlias;
generated$1.assertDeclareVariable = assertDeclareVariable;
generated$1.assertDeclaredPredicate = assertDeclaredPredicate;
generated$1.assertDecorator = assertDecorator;
generated$1.assertDirective = assertDirective;
generated$1.assertDirectiveLiteral = assertDirectiveLiteral;
generated$1.assertDoExpression = assertDoExpression;
generated$1.assertDoWhileStatement = assertDoWhileStatement;
generated$1.assertEmptyStatement = assertEmptyStatement;
generated$1.assertEmptyTypeAnnotation = assertEmptyTypeAnnotation;
generated$1.assertEnumBody = assertEnumBody;
generated$1.assertEnumBooleanBody = assertEnumBooleanBody;
generated$1.assertEnumBooleanMember = assertEnumBooleanMember;
generated$1.assertEnumDeclaration = assertEnumDeclaration;
generated$1.assertEnumDefaultedMember = assertEnumDefaultedMember;
generated$1.assertEnumMember = assertEnumMember;
generated$1.assertEnumNumberBody = assertEnumNumberBody;
generated$1.assertEnumNumberMember = assertEnumNumberMember;
generated$1.assertEnumStringBody = assertEnumStringBody;
generated$1.assertEnumStringMember = assertEnumStringMember;
generated$1.assertEnumSymbolBody = assertEnumSymbolBody;
generated$1.assertExistsTypeAnnotation = assertExistsTypeAnnotation;
generated$1.assertExportAllDeclaration = assertExportAllDeclaration;
generated$1.assertExportDeclaration = assertExportDeclaration;
generated$1.assertExportDefaultDeclaration = assertExportDefaultDeclaration;
generated$1.assertExportDefaultSpecifier = assertExportDefaultSpecifier;
generated$1.assertExportNamedDeclaration = assertExportNamedDeclaration;
generated$1.assertExportNamespaceSpecifier = assertExportNamespaceSpecifier;
generated$1.assertExportSpecifier = assertExportSpecifier;
generated$1.assertExpression = assertExpression;
generated$1.assertExpressionStatement = assertExpressionStatement;
generated$1.assertExpressionWrapper = assertExpressionWrapper;
generated$1.assertFile = assertFile;
generated$1.assertFlow = assertFlow;
generated$1.assertFlowBaseAnnotation = assertFlowBaseAnnotation;
generated$1.assertFlowDeclaration = assertFlowDeclaration;
generated$1.assertFlowPredicate = assertFlowPredicate;
generated$1.assertFlowType = assertFlowType;
generated$1.assertFor = assertFor;
generated$1.assertForInStatement = assertForInStatement;
generated$1.assertForOfStatement = assertForOfStatement;
generated$1.assertForStatement = assertForStatement;
generated$1.assertForXStatement = assertForXStatement;
generated$1.assertFunction = assertFunction;
generated$1.assertFunctionDeclaration = assertFunctionDeclaration;
generated$1.assertFunctionExpression = assertFunctionExpression;
generated$1.assertFunctionParameter = assertFunctionParameter;
generated$1.assertFunctionParent = assertFunctionParent;
generated$1.assertFunctionTypeAnnotation = assertFunctionTypeAnnotation;
generated$1.assertFunctionTypeParam = assertFunctionTypeParam;
generated$1.assertGenericTypeAnnotation = assertGenericTypeAnnotation;
generated$1.assertIdentifier = assertIdentifier;
generated$1.assertIfStatement = assertIfStatement;
generated$1.assertImmutable = assertImmutable;
generated$1.assertImport = assertImport;
generated$1.assertImportAttribute = assertImportAttribute;
generated$1.assertImportDeclaration = assertImportDeclaration;
generated$1.assertImportDefaultSpecifier = assertImportDefaultSpecifier;
generated$1.assertImportExpression = assertImportExpression;
generated$1.assertImportNamespaceSpecifier = assertImportNamespaceSpecifier;
generated$1.assertImportOrExportDeclaration = assertImportOrExportDeclaration;
generated$1.assertImportSpecifier = assertImportSpecifier;
generated$1.assertIndexedAccessType = assertIndexedAccessType;
generated$1.assertInferredPredicate = assertInferredPredicate;
generated$1.assertInterfaceDeclaration = assertInterfaceDeclaration;
generated$1.assertInterfaceExtends = assertInterfaceExtends;
generated$1.assertInterfaceTypeAnnotation = assertInterfaceTypeAnnotation;
generated$1.assertInterpreterDirective = assertInterpreterDirective;
generated$1.assertIntersectionTypeAnnotation = assertIntersectionTypeAnnotation;
generated$1.assertJSX = assertJSX;
generated$1.assertJSXAttribute = assertJSXAttribute;
generated$1.assertJSXClosingElement = assertJSXClosingElement;
generated$1.assertJSXClosingFragment = assertJSXClosingFragment;
generated$1.assertJSXElement = assertJSXElement;
generated$1.assertJSXEmptyExpression = assertJSXEmptyExpression;
generated$1.assertJSXExpressionContainer = assertJSXExpressionContainer;
generated$1.assertJSXFragment = assertJSXFragment;
generated$1.assertJSXIdentifier = assertJSXIdentifier;
generated$1.assertJSXMemberExpression = assertJSXMemberExpression;
generated$1.assertJSXNamespacedName = assertJSXNamespacedName;
generated$1.assertJSXOpeningElement = assertJSXOpeningElement;
generated$1.assertJSXOpeningFragment = assertJSXOpeningFragment;
generated$1.assertJSXSpreadAttribute = assertJSXSpreadAttribute;
generated$1.assertJSXSpreadChild = assertJSXSpreadChild;
generated$1.assertJSXText = assertJSXText;
generated$1.assertLVal = assertLVal;
generated$1.assertLabeledStatement = assertLabeledStatement;
generated$1.assertLiteral = assertLiteral;
generated$1.assertLogicalExpression = assertLogicalExpression;
generated$1.assertLoop = assertLoop;
generated$1.assertMemberExpression = assertMemberExpression;
generated$1.assertMetaProperty = assertMetaProperty;
generated$1.assertMethod = assertMethod;
generated$1.assertMiscellaneous = assertMiscellaneous;
generated$1.assertMixedTypeAnnotation = assertMixedTypeAnnotation;
generated$1.assertModuleDeclaration = assertModuleDeclaration;
generated$1.assertModuleExpression = assertModuleExpression;
generated$1.assertModuleSpecifier = assertModuleSpecifier;
generated$1.assertNewExpression = assertNewExpression;
generated$1.assertNoop = assertNoop;
generated$1.assertNullLiteral = assertNullLiteral;
generated$1.assertNullLiteralTypeAnnotation = assertNullLiteralTypeAnnotation;
generated$1.assertNullableTypeAnnotation = assertNullableTypeAnnotation;
generated$1.assertNumberLiteral = assertNumberLiteral;
generated$1.assertNumberLiteralTypeAnnotation = assertNumberLiteralTypeAnnotation;
generated$1.assertNumberTypeAnnotation = assertNumberTypeAnnotation;
generated$1.assertNumericLiteral = assertNumericLiteral;
generated$1.assertObjectExpression = assertObjectExpression;
generated$1.assertObjectMember = assertObjectMember;
generated$1.assertObjectMethod = assertObjectMethod;
generated$1.assertObjectPattern = assertObjectPattern;
generated$1.assertObjectProperty = assertObjectProperty;
generated$1.assertObjectTypeAnnotation = assertObjectTypeAnnotation;
generated$1.assertObjectTypeCallProperty = assertObjectTypeCallProperty;
generated$1.assertObjectTypeIndexer = assertObjectTypeIndexer;
generated$1.assertObjectTypeInternalSlot = assertObjectTypeInternalSlot;
generated$1.assertObjectTypeProperty = assertObjectTypeProperty;
generated$1.assertObjectTypeSpreadProperty = assertObjectTypeSpreadProperty;
generated$1.assertOpaqueType = assertOpaqueType;
generated$1.assertOptionalCallExpression = assertOptionalCallExpression;
generated$1.assertOptionalIndexedAccessType = assertOptionalIndexedAccessType;
generated$1.assertOptionalMemberExpression = assertOptionalMemberExpression;
generated$1.assertParenthesizedExpression = assertParenthesizedExpression;
generated$1.assertPattern = assertPattern;
generated$1.assertPatternLike = assertPatternLike;
generated$1.assertPipelineBareFunction = assertPipelineBareFunction;
generated$1.assertPipelinePrimaryTopicReference = assertPipelinePrimaryTopicReference;
generated$1.assertPipelineTopicExpression = assertPipelineTopicExpression;
generated$1.assertPlaceholder = assertPlaceholder;
generated$1.assertPrivate = assertPrivate;
generated$1.assertPrivateName = assertPrivateName;
generated$1.assertProgram = assertProgram;
generated$1.assertProperty = assertProperty;
generated$1.assertPureish = assertPureish;
generated$1.assertQualifiedTypeIdentifier = assertQualifiedTypeIdentifier;
generated$1.assertRecordExpression = assertRecordExpression;
generated$1.assertRegExpLiteral = assertRegExpLiteral;
generated$1.assertRegexLiteral = assertRegexLiteral;
generated$1.assertRestElement = assertRestElement;
generated$1.assertRestProperty = assertRestProperty;
generated$1.assertReturnStatement = assertReturnStatement;
generated$1.assertScopable = assertScopable;
generated$1.assertSequenceExpression = assertSequenceExpression;
generated$1.assertSpreadElement = assertSpreadElement;
generated$1.assertSpreadProperty = assertSpreadProperty;
generated$1.assertStandardized = assertStandardized;
generated$1.assertStatement = assertStatement;
generated$1.assertStaticBlock = assertStaticBlock;
generated$1.assertStringLiteral = assertStringLiteral;
generated$1.assertStringLiteralTypeAnnotation = assertStringLiteralTypeAnnotation;
generated$1.assertStringTypeAnnotation = assertStringTypeAnnotation;
generated$1.assertSuper = assertSuper;
generated$1.assertSwitchCase = assertSwitchCase;
generated$1.assertSwitchStatement = assertSwitchStatement;
generated$1.assertSymbolTypeAnnotation = assertSymbolTypeAnnotation;
generated$1.assertTSAnyKeyword = assertTSAnyKeyword;
generated$1.assertTSArrayType = assertTSArrayType;
generated$1.assertTSAsExpression = assertTSAsExpression;
generated$1.assertTSBaseType = assertTSBaseType;
generated$1.assertTSBigIntKeyword = assertTSBigIntKeyword;
generated$1.assertTSBooleanKeyword = assertTSBooleanKeyword;
generated$1.assertTSCallSignatureDeclaration = assertTSCallSignatureDeclaration;
generated$1.assertTSConditionalType = assertTSConditionalType;
generated$1.assertTSConstructSignatureDeclaration = assertTSConstructSignatureDeclaration;
generated$1.assertTSConstructorType = assertTSConstructorType;
generated$1.assertTSDeclareFunction = assertTSDeclareFunction;
generated$1.assertTSDeclareMethod = assertTSDeclareMethod;
generated$1.assertTSEntityName = assertTSEntityName;
generated$1.assertTSEnumBody = assertTSEnumBody;
generated$1.assertTSEnumDeclaration = assertTSEnumDeclaration;
generated$1.assertTSEnumMember = assertTSEnumMember;
generated$1.assertTSExportAssignment = assertTSExportAssignment;
generated$1.assertTSExpressionWithTypeArguments = assertTSExpressionWithTypeArguments;
generated$1.assertTSExternalModuleReference = assertTSExternalModuleReference;
generated$1.assertTSFunctionType = assertTSFunctionType;
generated$1.assertTSImportEqualsDeclaration = assertTSImportEqualsDeclaration;
generated$1.assertTSImportType = assertTSImportType;
generated$1.assertTSIndexSignature = assertTSIndexSignature;
generated$1.assertTSIndexedAccessType = assertTSIndexedAccessType;
generated$1.assertTSInferType = assertTSInferType;
generated$1.assertTSInstantiationExpression = assertTSInstantiationExpression;
generated$1.assertTSInterfaceBody = assertTSInterfaceBody;
generated$1.assertTSInterfaceDeclaration = assertTSInterfaceDeclaration;
generated$1.assertTSIntersectionType = assertTSIntersectionType;
generated$1.assertTSIntrinsicKeyword = assertTSIntrinsicKeyword;
generated$1.assertTSLiteralType = assertTSLiteralType;
generated$1.assertTSMappedType = assertTSMappedType;
generated$1.assertTSMethodSignature = assertTSMethodSignature;
generated$1.assertTSModuleBlock = assertTSModuleBlock;
generated$1.assertTSModuleDeclaration = assertTSModuleDeclaration;
generated$1.assertTSNamedTupleMember = assertTSNamedTupleMember;
generated$1.assertTSNamespaceExportDeclaration = assertTSNamespaceExportDeclaration;
generated$1.assertTSNeverKeyword = assertTSNeverKeyword;
generated$1.assertTSNonNullExpression = assertTSNonNullExpression;
generated$1.assertTSNullKeyword = assertTSNullKeyword;
generated$1.assertTSNumberKeyword = assertTSNumberKeyword;
generated$1.assertTSObjectKeyword = assertTSObjectKeyword;
generated$1.assertTSOptionalType = assertTSOptionalType;
generated$1.assertTSParameterProperty = assertTSParameterProperty;
generated$1.assertTSParenthesizedType = assertTSParenthesizedType;
generated$1.assertTSPropertySignature = assertTSPropertySignature;
generated$1.assertTSQualifiedName = assertTSQualifiedName;
generated$1.assertTSRestType = assertTSRestType;
generated$1.assertTSSatisfiesExpression = assertTSSatisfiesExpression;
generated$1.assertTSStringKeyword = assertTSStringKeyword;
generated$1.assertTSSymbolKeyword = assertTSSymbolKeyword;
generated$1.assertTSTemplateLiteralType = assertTSTemplateLiteralType;
generated$1.assertTSThisType = assertTSThisType;
generated$1.assertTSTupleType = assertTSTupleType;
generated$1.assertTSType = assertTSType;
generated$1.assertTSTypeAliasDeclaration = assertTSTypeAliasDeclaration;
generated$1.assertTSTypeAnnotation = assertTSTypeAnnotation;
generated$1.assertTSTypeAssertion = assertTSTypeAssertion;
generated$1.assertTSTypeElement = assertTSTypeElement;
generated$1.assertTSTypeLiteral = assertTSTypeLiteral;
generated$1.assertTSTypeOperator = assertTSTypeOperator;
generated$1.assertTSTypeParameter = assertTSTypeParameter;
generated$1.assertTSTypeParameterDeclaration = assertTSTypeParameterDeclaration;
generated$1.assertTSTypeParameterInstantiation = assertTSTypeParameterInstantiation;
generated$1.assertTSTypePredicate = assertTSTypePredicate;
generated$1.assertTSTypeQuery = assertTSTypeQuery;
generated$1.assertTSTypeReference = assertTSTypeReference;
generated$1.assertTSUndefinedKeyword = assertTSUndefinedKeyword;
generated$1.assertTSUnionType = assertTSUnionType;
generated$1.assertTSUnknownKeyword = assertTSUnknownKeyword;
generated$1.assertTSVoidKeyword = assertTSVoidKeyword;
generated$1.assertTaggedTemplateExpression = assertTaggedTemplateExpression;
generated$1.assertTemplateElement = assertTemplateElement;
generated$1.assertTemplateLiteral = assertTemplateLiteral;
generated$1.assertTerminatorless = assertTerminatorless;
generated$1.assertThisExpression = assertThisExpression;
generated$1.assertThisTypeAnnotation = assertThisTypeAnnotation;
generated$1.assertThrowStatement = assertThrowStatement;
generated$1.assertTopicReference = assertTopicReference;
generated$1.assertTryStatement = assertTryStatement;
generated$1.assertTupleExpression = assertTupleExpression;
generated$1.assertTupleTypeAnnotation = assertTupleTypeAnnotation;
generated$1.assertTypeAlias = assertTypeAlias;
generated$1.assertTypeAnnotation = assertTypeAnnotation;
generated$1.assertTypeCastExpression = assertTypeCastExpression;
generated$1.assertTypeParameter = assertTypeParameter;
generated$1.assertTypeParameterDeclaration = assertTypeParameterDeclaration;
generated$1.assertTypeParameterInstantiation = assertTypeParameterInstantiation;
generated$1.assertTypeScript = assertTypeScript;
generated$1.assertTypeofTypeAnnotation = assertTypeofTypeAnnotation;
generated$1.assertUnaryExpression = assertUnaryExpression;
generated$1.assertUnaryLike = assertUnaryLike;
generated$1.assertUnionTypeAnnotation = assertUnionTypeAnnotation;
generated$1.assertUpdateExpression = assertUpdateExpression;
generated$1.assertUserWhitespacable = assertUserWhitespacable;
generated$1.assertV8IntrinsicIdentifier = assertV8IntrinsicIdentifier;
generated$1.assertVariableDeclaration = assertVariableDeclaration;
generated$1.assertVariableDeclarator = assertVariableDeclarator;
generated$1.assertVariance = assertVariance;
generated$1.assertVoidPattern = assertVoidPattern;
generated$1.assertVoidTypeAnnotation = assertVoidTypeAnnotation;
generated$1.assertWhile = assertWhile;
generated$1.assertWhileStatement = assertWhileStatement;
generated$1.assertWithStatement = assertWithStatement;
generated$1.assertYieldExpression = assertYieldExpression;
var _is = requireIs();
var _deprecationWarning = deprecationWarning$1;
function assert(type, node, opts) {
  if (!(0, _is.default)(type, node, opts)) {
    throw new Error(`Expected type "${type}" with option ${JSON.stringify(opts)}, ` + `but instead got "${node.type}".`);
  }
}
function assertArrayExpression(node, opts) {
  assert("ArrayExpression", node, opts);
}
function assertAssignmentExpression(node, opts) {
  assert("AssignmentExpression", node, opts);
}
function assertBinaryExpression(node, opts) {
  assert("BinaryExpression", node, opts);
}
function assertInterpreterDirective(node, opts) {
  assert("InterpreterDirective", node, opts);
}
function assertDirective(node, opts) {
  assert("Directive", node, opts);
}
function assertDirectiveLiteral(node, opts) {
  assert("DirectiveLiteral", node, opts);
}
function assertBlockStatement(node, opts) {
  assert("BlockStatement", node, opts);
}
function assertBreakStatement(node, opts) {
  assert("BreakStatement", node, opts);
}
function assertCallExpression(node, opts) {
  assert("CallExpression", node, opts);
}
function assertCatchClause(node, opts) {
  assert("CatchClause", node, opts);
}
function assertConditionalExpression(node, opts) {
  assert("ConditionalExpression", node, opts);
}
function assertContinueStatement(node, opts) {
  assert("ContinueStatement", node, opts);
}
function assertDebuggerStatement(node, opts) {
  assert("DebuggerStatement", node, opts);
}
function assertDoWhileStatement(node, opts) {
  assert("DoWhileStatement", node, opts);
}
function assertEmptyStatement(node, opts) {
  assert("EmptyStatement", node, opts);
}
function assertExpressionStatement(node, opts) {
  assert("ExpressionStatement", node, opts);
}
function assertFile(node, opts) {
  assert("File", node, opts);
}
function assertForInStatement(node, opts) {
  assert("ForInStatement", node, opts);
}
function assertForStatement(node, opts) {
  assert("ForStatement", node, opts);
}
function assertFunctionDeclaration(node, opts) {
  assert("FunctionDeclaration", node, opts);
}
function assertFunctionExpression(node, opts) {
  assert("FunctionExpression", node, opts);
}
function assertIdentifier(node, opts) {
  assert("Identifier", node, opts);
}
function assertIfStatement(node, opts) {
  assert("IfStatement", node, opts);
}
function assertLabeledStatement(node, opts) {
  assert("LabeledStatement", node, opts);
}
function assertStringLiteral(node, opts) {
  assert("StringLiteral", node, opts);
}
function assertNumericLiteral(node, opts) {
  assert("NumericLiteral", node, opts);
}
function assertNullLiteral(node, opts) {
  assert("NullLiteral", node, opts);
}
function assertBooleanLiteral(node, opts) {
  assert("BooleanLiteral", node, opts);
}
function assertRegExpLiteral(node, opts) {
  assert("RegExpLiteral", node, opts);
}
function assertLogicalExpression(node, opts) {
  assert("LogicalExpression", node, opts);
}
function assertMemberExpression(node, opts) {
  assert("MemberExpression", node, opts);
}
function assertNewExpression(node, opts) {
  assert("NewExpression", node, opts);
}
function assertProgram(node, opts) {
  assert("Program", node, opts);
}
function assertObjectExpression(node, opts) {
  assert("ObjectExpression", node, opts);
}
function assertObjectMethod(node, opts) {
  assert("ObjectMethod", node, opts);
}
function assertObjectProperty(node, opts) {
  assert("ObjectProperty", node, opts);
}
function assertRestElement(node, opts) {
  assert("RestElement", node, opts);
}
function assertReturnStatement(node, opts) {
  assert("ReturnStatement", node, opts);
}
function assertSequenceExpression(node, opts) {
  assert("SequenceExpression", node, opts);
}
function assertParenthesizedExpression(node, opts) {
  assert("ParenthesizedExpression", node, opts);
}
function assertSwitchCase(node, opts) {
  assert("SwitchCase", node, opts);
}
function assertSwitchStatement(node, opts) {
  assert("SwitchStatement", node, opts);
}
function assertThisExpression(node, opts) {
  assert("ThisExpression", node, opts);
}
function assertThrowStatement(node, opts) {
  assert("ThrowStatement", node, opts);
}
function assertTryStatement(node, opts) {
  assert("TryStatement", node, opts);
}
function assertUnaryExpression(node, opts) {
  assert("UnaryExpression", node, opts);
}
function assertUpdateExpression(node, opts) {
  assert("UpdateExpression", node, opts);
}
function assertVariableDeclaration(node, opts) {
  assert("VariableDeclaration", node, opts);
}
function assertVariableDeclarator(node, opts) {
  assert("VariableDeclarator", node, opts);
}
function assertWhileStatement(node, opts) {
  assert("WhileStatement", node, opts);
}
function assertWithStatement(node, opts) {
  assert("WithStatement", node, opts);
}
function assertAssignmentPattern(node, opts) {
  assert("AssignmentPattern", node, opts);
}
function assertArrayPattern(node, opts) {
  assert("ArrayPattern", node, opts);
}
function assertArrowFunctionExpression(node, opts) {
  assert("ArrowFunctionExpression", node, opts);
}
function assertClassBody(node, opts) {
  assert("ClassBody", node, opts);
}
function assertClassExpression(node, opts) {
  assert("ClassExpression", node, opts);
}
function assertClassDeclaration(node, opts) {
  assert("ClassDeclaration", node, opts);
}
function assertExportAllDeclaration(node, opts) {
  assert("ExportAllDeclaration", node, opts);
}
function assertExportDefaultDeclaration(node, opts) {
  assert("ExportDefaultDeclaration", node, opts);
}
function assertExportNamedDeclaration(node, opts) {
  assert("ExportNamedDeclaration", node, opts);
}
function assertExportSpecifier(node, opts) {
  assert("ExportSpecifier", node, opts);
}
function assertForOfStatement(node, opts) {
  assert("ForOfStatement", node, opts);
}
function assertImportDeclaration(node, opts) {
  assert("ImportDeclaration", node, opts);
}
function assertImportDefaultSpecifier(node, opts) {
  assert("ImportDefaultSpecifier", node, opts);
}
function assertImportNamespaceSpecifier(node, opts) {
  assert("ImportNamespaceSpecifier", node, opts);
}
function assertImportSpecifier(node, opts) {
  assert("ImportSpecifier", node, opts);
}
function assertImportExpression(node, opts) {
  assert("ImportExpression", node, opts);
}
function assertMetaProperty(node, opts) {
  assert("MetaProperty", node, opts);
}
function assertClassMethod(node, opts) {
  assert("ClassMethod", node, opts);
}
function assertObjectPattern(node, opts) {
  assert("ObjectPattern", node, opts);
}
function assertSpreadElement(node, opts) {
  assert("SpreadElement", node, opts);
}
function assertSuper(node, opts) {
  assert("Super", node, opts);
}
function assertTaggedTemplateExpression(node, opts) {
  assert("TaggedTemplateExpression", node, opts);
}
function assertTemplateElement(node, opts) {
  assert("TemplateElement", node, opts);
}
function assertTemplateLiteral(node, opts) {
  assert("TemplateLiteral", node, opts);
}
function assertYieldExpression(node, opts) {
  assert("YieldExpression", node, opts);
}
function assertAwaitExpression(node, opts) {
  assert("AwaitExpression", node, opts);
}
function assertImport(node, opts) {
  assert("Import", node, opts);
}
function assertBigIntLiteral(node, opts) {
  assert("BigIntLiteral", node, opts);
}
function assertExportNamespaceSpecifier(node, opts) {
  assert("ExportNamespaceSpecifier", node, opts);
}
function assertOptionalMemberExpression(node, opts) {
  assert("OptionalMemberExpression", node, opts);
}
function assertOptionalCallExpression(node, opts) {
  assert("OptionalCallExpression", node, opts);
}
function assertClassProperty(node, opts) {
  assert("ClassProperty", node, opts);
}
function assertClassAccessorProperty(node, opts) {
  assert("ClassAccessorProperty", node, opts);
}
function assertClassPrivateProperty(node, opts) {
  assert("ClassPrivateProperty", node, opts);
}
function assertClassPrivateMethod(node, opts) {
  assert("ClassPrivateMethod", node, opts);
}
function assertPrivateName(node, opts) {
  assert("PrivateName", node, opts);
}
function assertStaticBlock(node, opts) {
  assert("StaticBlock", node, opts);
}
function assertImportAttribute(node, opts) {
  assert("ImportAttribute", node, opts);
}
function assertAnyTypeAnnotation(node, opts) {
  assert("AnyTypeAnnotation", node, opts);
}
function assertArrayTypeAnnotation(node, opts) {
  assert("ArrayTypeAnnotation", node, opts);
}
function assertBooleanTypeAnnotation(node, opts) {
  assert("BooleanTypeAnnotation", node, opts);
}
function assertBooleanLiteralTypeAnnotation(node, opts) {
  assert("BooleanLiteralTypeAnnotation", node, opts);
}
function assertNullLiteralTypeAnnotation(node, opts) {
  assert("NullLiteralTypeAnnotation", node, opts);
}
function assertClassImplements(node, opts) {
  assert("ClassImplements", node, opts);
}
function assertDeclareClass(node, opts) {
  assert("DeclareClass", node, opts);
}
function assertDeclareFunction(node, opts) {
  assert("DeclareFunction", node, opts);
}
function assertDeclareInterface(node, opts) {
  assert("DeclareInterface", node, opts);
}
function assertDeclareModule(node, opts) {
  assert("DeclareModule", node, opts);
}
function assertDeclareModuleExports(node, opts) {
  assert("DeclareModuleExports", node, opts);
}
function assertDeclareTypeAlias(node, opts) {
  assert("DeclareTypeAlias", node, opts);
}
function assertDeclareOpaqueType(node, opts) {
  assert("DeclareOpaqueType", node, opts);
}
function assertDeclareVariable(node, opts) {
  assert("DeclareVariable", node, opts);
}
function assertDeclareExportDeclaration(node, opts) {
  assert("DeclareExportDeclaration", node, opts);
}
function assertDeclareExportAllDeclaration(node, opts) {
  assert("DeclareExportAllDeclaration", node, opts);
}
function assertDeclaredPredicate(node, opts) {
  assert("DeclaredPredicate", node, opts);
}
function assertExistsTypeAnnotation(node, opts) {
  assert("ExistsTypeAnnotation", node, opts);
}
function assertFunctionTypeAnnotation(node, opts) {
  assert("FunctionTypeAnnotation", node, opts);
}
function assertFunctionTypeParam(node, opts) {
  assert("FunctionTypeParam", node, opts);
}
function assertGenericTypeAnnotation(node, opts) {
  assert("GenericTypeAnnotation", node, opts);
}
function assertInferredPredicate(node, opts) {
  assert("InferredPredicate", node, opts);
}
function assertInterfaceExtends(node, opts) {
  assert("InterfaceExtends", node, opts);
}
function assertInterfaceDeclaration(node, opts) {
  assert("InterfaceDeclaration", node, opts);
}
function assertInterfaceTypeAnnotation(node, opts) {
  assert("InterfaceTypeAnnotation", node, opts);
}
function assertIntersectionTypeAnnotation(node, opts) {
  assert("IntersectionTypeAnnotation", node, opts);
}
function assertMixedTypeAnnotation(node, opts) {
  assert("MixedTypeAnnotation", node, opts);
}
function assertEmptyTypeAnnotation(node, opts) {
  assert("EmptyTypeAnnotation", node, opts);
}
function assertNullableTypeAnnotation(node, opts) {
  assert("NullableTypeAnnotation", node, opts);
}
function assertNumberLiteralTypeAnnotation(node, opts) {
  assert("NumberLiteralTypeAnnotation", node, opts);
}
function assertNumberTypeAnnotation(node, opts) {
  assert("NumberTypeAnnotation", node, opts);
}
function assertObjectTypeAnnotation(node, opts) {
  assert("ObjectTypeAnnotation", node, opts);
}
function assertObjectTypeInternalSlot(node, opts) {
  assert("ObjectTypeInternalSlot", node, opts);
}
function assertObjectTypeCallProperty(node, opts) {
  assert("ObjectTypeCallProperty", node, opts);
}
function assertObjectTypeIndexer(node, opts) {
  assert("ObjectTypeIndexer", node, opts);
}
function assertObjectTypeProperty(node, opts) {
  assert("ObjectTypeProperty", node, opts);
}
function assertObjectTypeSpreadProperty(node, opts) {
  assert("ObjectTypeSpreadProperty", node, opts);
}
function assertOpaqueType(node, opts) {
  assert("OpaqueType", node, opts);
}
function assertQualifiedTypeIdentifier(node, opts) {
  assert("QualifiedTypeIdentifier", node, opts);
}
function assertStringLiteralTypeAnnotation(node, opts) {
  assert("StringLiteralTypeAnnotation", node, opts);
}
function assertStringTypeAnnotation(node, opts) {
  assert("StringTypeAnnotation", node, opts);
}
function assertSymbolTypeAnnotation(node, opts) {
  assert("SymbolTypeAnnotation", node, opts);
}
function assertThisTypeAnnotation(node, opts) {
  assert("ThisTypeAnnotation", node, opts);
}
function assertTupleTypeAnnotation(node, opts) {
  assert("TupleTypeAnnotation", node, opts);
}
function assertTypeofTypeAnnotation(node, opts) {
  assert("TypeofTypeAnnotation", node, opts);
}
function assertTypeAlias(node, opts) {
  assert("TypeAlias", node, opts);
}
function assertTypeAnnotation(node, opts) {
  assert("TypeAnnotation", node, opts);
}
function assertTypeCastExpression(node, opts) {
  assert("TypeCastExpression", node, opts);
}
function assertTypeParameter(node, opts) {
  assert("TypeParameter", node, opts);
}
function assertTypeParameterDeclaration(node, opts) {
  assert("TypeParameterDeclaration", node, opts);
}
function assertTypeParameterInstantiation(node, opts) {
  assert("TypeParameterInstantiation", node, opts);
}
function assertUnionTypeAnnotation(node, opts) {
  assert("UnionTypeAnnotation", node, opts);
}
function assertVariance(node, opts) {
  assert("Variance", node, opts);
}
function assertVoidTypeAnnotation(node, opts) {
  assert("VoidTypeAnnotation", node, opts);
}
function assertEnumDeclaration(node, opts) {
  assert("EnumDeclaration", node, opts);
}
function assertEnumBooleanBody(node, opts) {
  assert("EnumBooleanBody", node, opts);
}
function assertEnumNumberBody(node, opts) {
  assert("EnumNumberBody", node, opts);
}
function assertEnumStringBody(node, opts) {
  assert("EnumStringBody", node, opts);
}
function assertEnumSymbolBody(node, opts) {
  assert("EnumSymbolBody", node, opts);
}
function assertEnumBooleanMember(node, opts) {
  assert("EnumBooleanMember", node, opts);
}
function assertEnumNumberMember(node, opts) {
  assert("EnumNumberMember", node, opts);
}
function assertEnumStringMember(node, opts) {
  assert("EnumStringMember", node, opts);
}
function assertEnumDefaultedMember(node, opts) {
  assert("EnumDefaultedMember", node, opts);
}
function assertIndexedAccessType(node, opts) {
  assert("IndexedAccessType", node, opts);
}
function assertOptionalIndexedAccessType(node, opts) {
  assert("OptionalIndexedAccessType", node, opts);
}
function assertJSXAttribute(node, opts) {
  assert("JSXAttribute", node, opts);
}
function assertJSXClosingElement(node, opts) {
  assert("JSXClosingElement", node, opts);
}
function assertJSXElement(node, opts) {
  assert("JSXElement", node, opts);
}
function assertJSXEmptyExpression(node, opts) {
  assert("JSXEmptyExpression", node, opts);
}
function assertJSXExpressionContainer(node, opts) {
  assert("JSXExpressionContainer", node, opts);
}
function assertJSXSpreadChild(node, opts) {
  assert("JSXSpreadChild", node, opts);
}
function assertJSXIdentifier(node, opts) {
  assert("JSXIdentifier", node, opts);
}
function assertJSXMemberExpression(node, opts) {
  assert("JSXMemberExpression", node, opts);
}
function assertJSXNamespacedName(node, opts) {
  assert("JSXNamespacedName", node, opts);
}
function assertJSXOpeningElement(node, opts) {
  assert("JSXOpeningElement", node, opts);
}
function assertJSXSpreadAttribute(node, opts) {
  assert("JSXSpreadAttribute", node, opts);
}
function assertJSXText(node, opts) {
  assert("JSXText", node, opts);
}
function assertJSXFragment(node, opts) {
  assert("JSXFragment", node, opts);
}
function assertJSXOpeningFragment(node, opts) {
  assert("JSXOpeningFragment", node, opts);
}
function assertJSXClosingFragment(node, opts) {
  assert("JSXClosingFragment", node, opts);
}
function assertNoop(node, opts) {
  assert("Noop", node, opts);
}
function assertPlaceholder(node, opts) {
  assert("Placeholder", node, opts);
}
function assertV8IntrinsicIdentifier(node, opts) {
  assert("V8IntrinsicIdentifier", node, opts);
}
function assertArgumentPlaceholder(node, opts) {
  assert("ArgumentPlaceholder", node, opts);
}
function assertBindExpression(node, opts) {
  assert("BindExpression", node, opts);
}
function assertDecorator(node, opts) {
  assert("Decorator", node, opts);
}
function assertDoExpression(node, opts) {
  assert("DoExpression", node, opts);
}
function assertExportDefaultSpecifier(node, opts) {
  assert("ExportDefaultSpecifier", node, opts);
}
function assertRecordExpression(node, opts) {
  assert("RecordExpression", node, opts);
}
function assertTupleExpression(node, opts) {
  assert("TupleExpression", node, opts);
}
function assertDecimalLiteral(node, opts) {
  assert("DecimalLiteral", node, opts);
}
function assertModuleExpression(node, opts) {
  assert("ModuleExpression", node, opts);
}
function assertTopicReference(node, opts) {
  assert("TopicReference", node, opts);
}
function assertPipelineTopicExpression(node, opts) {
  assert("PipelineTopicExpression", node, opts);
}
function assertPipelineBareFunction(node, opts) {
  assert("PipelineBareFunction", node, opts);
}
function assertPipelinePrimaryTopicReference(node, opts) {
  assert("PipelinePrimaryTopicReference", node, opts);
}
function assertVoidPattern(node, opts) {
  assert("VoidPattern", node, opts);
}
function assertTSParameterProperty(node, opts) {
  assert("TSParameterProperty", node, opts);
}
function assertTSDeclareFunction(node, opts) {
  assert("TSDeclareFunction", node, opts);
}
function assertTSDeclareMethod(node, opts) {
  assert("TSDeclareMethod", node, opts);
}
function assertTSQualifiedName(node, opts) {
  assert("TSQualifiedName", node, opts);
}
function assertTSCallSignatureDeclaration(node, opts) {
  assert("TSCallSignatureDeclaration", node, opts);
}
function assertTSConstructSignatureDeclaration(node, opts) {
  assert("TSConstructSignatureDeclaration", node, opts);
}
function assertTSPropertySignature(node, opts) {
  assert("TSPropertySignature", node, opts);
}
function assertTSMethodSignature(node, opts) {
  assert("TSMethodSignature", node, opts);
}
function assertTSIndexSignature(node, opts) {
  assert("TSIndexSignature", node, opts);
}
function assertTSAnyKeyword(node, opts) {
  assert("TSAnyKeyword", node, opts);
}
function assertTSBooleanKeyword(node, opts) {
  assert("TSBooleanKeyword", node, opts);
}
function assertTSBigIntKeyword(node, opts) {
  assert("TSBigIntKeyword", node, opts);
}
function assertTSIntrinsicKeyword(node, opts) {
  assert("TSIntrinsicKeyword", node, opts);
}
function assertTSNeverKeyword(node, opts) {
  assert("TSNeverKeyword", node, opts);
}
function assertTSNullKeyword(node, opts) {
  assert("TSNullKeyword", node, opts);
}
function assertTSNumberKeyword(node, opts) {
  assert("TSNumberKeyword", node, opts);
}
function assertTSObjectKeyword(node, opts) {
  assert("TSObjectKeyword", node, opts);
}
function assertTSStringKeyword(node, opts) {
  assert("TSStringKeyword", node, opts);
}
function assertTSSymbolKeyword(node, opts) {
  assert("TSSymbolKeyword", node, opts);
}
function assertTSUndefinedKeyword(node, opts) {
  assert("TSUndefinedKeyword", node, opts);
}
function assertTSUnknownKeyword(node, opts) {
  assert("TSUnknownKeyword", node, opts);
}
function assertTSVoidKeyword(node, opts) {
  assert("TSVoidKeyword", node, opts);
}
function assertTSThisType(node, opts) {
  assert("TSThisType", node, opts);
}
function assertTSFunctionType(node, opts) {
  assert("TSFunctionType", node, opts);
}
function assertTSConstructorType(node, opts) {
  assert("TSConstructorType", node, opts);
}
function assertTSTypeReference(node, opts) {
  assert("TSTypeReference", node, opts);
}
function assertTSTypePredicate(node, opts) {
  assert("TSTypePredicate", node, opts);
}
function assertTSTypeQuery(node, opts) {
  assert("TSTypeQuery", node, opts);
}
function assertTSTypeLiteral(node, opts) {
  assert("TSTypeLiteral", node, opts);
}
function assertTSArrayType(node, opts) {
  assert("TSArrayType", node, opts);
}
function assertTSTupleType(node, opts) {
  assert("TSTupleType", node, opts);
}
function assertTSOptionalType(node, opts) {
  assert("TSOptionalType", node, opts);
}
function assertTSRestType(node, opts) {
  assert("TSRestType", node, opts);
}
function assertTSNamedTupleMember(node, opts) {
  assert("TSNamedTupleMember", node, opts);
}
function assertTSUnionType(node, opts) {
  assert("TSUnionType", node, opts);
}
function assertTSIntersectionType(node, opts) {
  assert("TSIntersectionType", node, opts);
}
function assertTSConditionalType(node, opts) {
  assert("TSConditionalType", node, opts);
}
function assertTSInferType(node, opts) {
  assert("TSInferType", node, opts);
}
function assertTSParenthesizedType(node, opts) {
  assert("TSParenthesizedType", node, opts);
}
function assertTSTypeOperator(node, opts) {
  assert("TSTypeOperator", node, opts);
}
function assertTSIndexedAccessType(node, opts) {
  assert("TSIndexedAccessType", node, opts);
}
function assertTSMappedType(node, opts) {
  assert("TSMappedType", node, opts);
}
function assertTSTemplateLiteralType(node, opts) {
  assert("TSTemplateLiteralType", node, opts);
}
function assertTSLiteralType(node, opts) {
  assert("TSLiteralType", node, opts);
}
function assertTSExpressionWithTypeArguments(node, opts) {
  assert("TSExpressionWithTypeArguments", node, opts);
}
function assertTSInterfaceDeclaration(node, opts) {
  assert("TSInterfaceDeclaration", node, opts);
}
function assertTSInterfaceBody(node, opts) {
  assert("TSInterfaceBody", node, opts);
}
function assertTSTypeAliasDeclaration(node, opts) {
  assert("TSTypeAliasDeclaration", node, opts);
}
function assertTSInstantiationExpression(node, opts) {
  assert("TSInstantiationExpression", node, opts);
}
function assertTSAsExpression(node, opts) {
  assert("TSAsExpression", node, opts);
}
function assertTSSatisfiesExpression(node, opts) {
  assert("TSSatisfiesExpression", node, opts);
}
function assertTSTypeAssertion(node, opts) {
  assert("TSTypeAssertion", node, opts);
}
function assertTSEnumBody(node, opts) {
  assert("TSEnumBody", node, opts);
}
function assertTSEnumDeclaration(node, opts) {
  assert("TSEnumDeclaration", node, opts);
}
function assertTSEnumMember(node, opts) {
  assert("TSEnumMember", node, opts);
}
function assertTSModuleDeclaration(node, opts) {
  assert("TSModuleDeclaration", node, opts);
}
function assertTSModuleBlock(node, opts) {
  assert("TSModuleBlock", node, opts);
}
function assertTSImportType(node, opts) {
  assert("TSImportType", node, opts);
}
function assertTSImportEqualsDeclaration(node, opts) {
  assert("TSImportEqualsDeclaration", node, opts);
}
function assertTSExternalModuleReference(node, opts) {
  assert("TSExternalModuleReference", node, opts);
}
function assertTSNonNullExpression(node, opts) {
  assert("TSNonNullExpression", node, opts);
}
function assertTSExportAssignment(node, opts) {
  assert("TSExportAssignment", node, opts);
}
function assertTSNamespaceExportDeclaration(node, opts) {
  assert("TSNamespaceExportDeclaration", node, opts);
}
function assertTSTypeAnnotation(node, opts) {
  assert("TSTypeAnnotation", node, opts);
}
function assertTSTypeParameterInstantiation(node, opts) {
  assert("TSTypeParameterInstantiation", node, opts);
}
function assertTSTypeParameterDeclaration(node, opts) {
  assert("TSTypeParameterDeclaration", node, opts);
}
function assertTSTypeParameter(node, opts) {
  assert("TSTypeParameter", node, opts);
}
function assertStandardized(node, opts) {
  assert("Standardized", node, opts);
}
function assertExpression(node, opts) {
  assert("Expression", node, opts);
}
function assertBinary(node, opts) {
  assert("Binary", node, opts);
}
function assertScopable(node, opts) {
  assert("Scopable", node, opts);
}
function assertBlockParent(node, opts) {
  assert("BlockParent", node, opts);
}
function assertBlock(node, opts) {
  assert("Block", node, opts);
}
function assertStatement(node, opts) {
  assert("Statement", node, opts);
}
function assertTerminatorless(node, opts) {
  assert("Terminatorless", node, opts);
}
function assertCompletionStatement(node, opts) {
  assert("CompletionStatement", node, opts);
}
function assertConditional(node, opts) {
  assert("Conditional", node, opts);
}
function assertLoop(node, opts) {
  assert("Loop", node, opts);
}
function assertWhile(node, opts) {
  assert("While", node, opts);
}
function assertExpressionWrapper(node, opts) {
  assert("ExpressionWrapper", node, opts);
}
function assertFor(node, opts) {
  assert("For", node, opts);
}
function assertForXStatement(node, opts) {
  assert("ForXStatement", node, opts);
}
function assertFunction(node, opts) {
  assert("Function", node, opts);
}
function assertFunctionParent(node, opts) {
  assert("FunctionParent", node, opts);
}
function assertPureish(node, opts) {
  assert("Pureish", node, opts);
}
function assertDeclaration(node, opts) {
  assert("Declaration", node, opts);
}
function assertFunctionParameter(node, opts) {
  assert("FunctionParameter", node, opts);
}
function assertPatternLike(node, opts) {
  assert("PatternLike", node, opts);
}
function assertLVal(node, opts) {
  assert("LVal", node, opts);
}
function assertTSEntityName(node, opts) {
  assert("TSEntityName", node, opts);
}
function assertLiteral(node, opts) {
  assert("Literal", node, opts);
}
function assertImmutable(node, opts) {
  assert("Immutable", node, opts);
}
function assertUserWhitespacable(node, opts) {
  assert("UserWhitespacable", node, opts);
}
function assertMethod(node, opts) {
  assert("Method", node, opts);
}
function assertObjectMember(node, opts) {
  assert("ObjectMember", node, opts);
}
function assertProperty(node, opts) {
  assert("Property", node, opts);
}
function assertUnaryLike(node, opts) {
  assert("UnaryLike", node, opts);
}
function assertPattern(node, opts) {
  assert("Pattern", node, opts);
}
function assertClass(node, opts) {
  assert("Class", node, opts);
}
function assertImportOrExportDeclaration(node, opts) {
  assert("ImportOrExportDeclaration", node, opts);
}
function assertExportDeclaration(node, opts) {
  assert("ExportDeclaration", node, opts);
}
function assertModuleSpecifier(node, opts) {
  assert("ModuleSpecifier", node, opts);
}
function assertAccessor(node, opts) {
  assert("Accessor", node, opts);
}
function assertPrivate(node, opts) {
  assert("Private", node, opts);
}
function assertFlow(node, opts) {
  assert("Flow", node, opts);
}
function assertFlowType(node, opts) {
  assert("FlowType", node, opts);
}
function assertFlowBaseAnnotation(node, opts) {
  assert("FlowBaseAnnotation", node, opts);
}
function assertFlowDeclaration(node, opts) {
  assert("FlowDeclaration", node, opts);
}
function assertFlowPredicate(node, opts) {
  assert("FlowPredicate", node, opts);
}
function assertEnumBody(node, opts) {
  assert("EnumBody", node, opts);
}
function assertEnumMember(node, opts) {
  assert("EnumMember", node, opts);
}
function assertJSX(node, opts) {
  assert("JSX", node, opts);
}
function assertMiscellaneous(node, opts) {
  assert("Miscellaneous", node, opts);
}
function assertTypeScript(node, opts) {
  assert("TypeScript", node, opts);
}
function assertTSTypeElement(node, opts) {
  assert("TSTypeElement", node, opts);
}
function assertTSType(node, opts) {
  assert("TSType", node, opts);
}
function assertTSBaseType(node, opts) {
  assert("TSBaseType", node, opts);
}
function assertNumberLiteral(node, opts) {
  (0, _deprecationWarning.default)("assertNumberLiteral", "assertNumericLiteral");
  assert("NumberLiteral", node, opts);
}
function assertRegexLiteral(node, opts) {
  (0, _deprecationWarning.default)("assertRegexLiteral", "assertRegExpLiteral");
  assert("RegexLiteral", node, opts);
}
function assertRestProperty(node, opts) {
  (0, _deprecationWarning.default)("assertRestProperty", "assertRestElement");
  assert("RestProperty", node, opts);
}
function assertSpreadProperty(node, opts) {
  (0, _deprecationWarning.default)("assertSpreadProperty", "assertSpreadElement");
  assert("SpreadProperty", node, opts);
}
function assertModuleDeclaration(node, opts) {
  (0, _deprecationWarning.default)("assertModuleDeclaration", "assertImportOrExportDeclaration");
  assert("ModuleDeclaration", node, opts);
}

var createTypeAnnotationBasedOnTypeof$1 = {};

Object.defineProperty(createTypeAnnotationBasedOnTypeof$1, "__esModule", {
  value: true
});
createTypeAnnotationBasedOnTypeof$1.default = void 0;
var _index$t = generated$2;
createTypeAnnotationBasedOnTypeof$1.default = createTypeAnnotationBasedOnTypeof;
function createTypeAnnotationBasedOnTypeof(type) {
  switch (type) {
    case "string":
      return (0, _index$t.stringTypeAnnotation)();
    case "number":
      return (0, _index$t.numberTypeAnnotation)();
    case "undefined":
      return (0, _index$t.voidTypeAnnotation)();
    case "boolean":
      return (0, _index$t.booleanTypeAnnotation)();
    case "function":
      return (0, _index$t.genericTypeAnnotation)((0, _index$t.identifier)("Function"));
    case "object":
      return (0, _index$t.genericTypeAnnotation)((0, _index$t.identifier)("Object"));
    case "symbol":
      return (0, _index$t.genericTypeAnnotation)((0, _index$t.identifier)("Symbol"));
    case "bigint":
      return (0, _index$t.anyTypeAnnotation)();
  }
  throw new Error("Invalid typeof value: " + type);
}

var createFlowUnionType$1 = {};

var removeTypeDuplicates$3 = {};

Object.defineProperty(removeTypeDuplicates$3, "__esModule", {
  value: true
});
removeTypeDuplicates$3.default = removeTypeDuplicates$2;
var _index$s = generated$3;
function getQualifiedName$1(node) {
  return (0, _index$s.isIdentifier)(node) ? node.name : `${node.id.name}.${getQualifiedName$1(node.qualification)}`;
}
function removeTypeDuplicates$2(nodesIn) {
  const nodes = Array.from(nodesIn);
  const generics = new Map();
  const bases = new Map();
  const typeGroups = new Set();
  const types = [];
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (!node) continue;
    if (types.includes(node)) {
      continue;
    }
    if ((0, _index$s.isAnyTypeAnnotation)(node)) {
      return [node];
    }
    if ((0, _index$s.isFlowBaseAnnotation)(node)) {
      bases.set(node.type, node);
      continue;
    }
    if ((0, _index$s.isUnionTypeAnnotation)(node)) {
      if (!typeGroups.has(node.types)) {
        nodes.push(...node.types);
        typeGroups.add(node.types);
      }
      continue;
    }
    if ((0, _index$s.isGenericTypeAnnotation)(node)) {
      const name = getQualifiedName$1(node.id);
      if (generics.has(name)) {
        let existing = generics.get(name);
        if (existing.typeParameters) {
          if (node.typeParameters) {
            existing.typeParameters.params.push(...node.typeParameters.params);
            existing.typeParameters.params = removeTypeDuplicates$2(existing.typeParameters.params);
          }
        } else {
          existing = node.typeParameters;
        }
      } else {
        generics.set(name, node);
      }
      continue;
    }
    types.push(node);
  }
  for (const [, baseType] of bases) {
    types.push(baseType);
  }
  for (const [, genericName] of generics) {
    types.push(genericName);
  }
  return types;
}

Object.defineProperty(createFlowUnionType$1, "__esModule", {
  value: true
});
createFlowUnionType$1.default = createFlowUnionType;
var _index$r = generated$2;
var _removeTypeDuplicates$1 = removeTypeDuplicates$3;
function createFlowUnionType(types) {
  const flattened = (0, _removeTypeDuplicates$1.default)(types);
  if (flattened.length === 1) {
    return flattened[0];
  } else {
    return (0, _index$r.unionTypeAnnotation)(flattened);
  }
}

var createTSUnionType$1 = {};

var removeTypeDuplicates$1 = {};

Object.defineProperty(removeTypeDuplicates$1, "__esModule", {
  value: true
});
removeTypeDuplicates$1.default = removeTypeDuplicates;
var _index$q = generated$3;
function getQualifiedName(node) {
  return (0, _index$q.isIdentifier)(node) ? node.name : (0, _index$q.isThisExpression)(node) ? "this" : `${node.right.name}.${getQualifiedName(node.left)}`;
}
function removeTypeDuplicates(nodesIn) {
  const nodes = Array.from(nodesIn);
  const generics = new Map();
  const bases = new Map();
  const typeGroups = new Set();
  const types = [];
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (!node) continue;
    if (types.includes(node)) {
      continue;
    }
    if ((0, _index$q.isTSAnyKeyword)(node)) {
      return [node];
    }
    if ((0, _index$q.isTSBaseType)(node)) {
      bases.set(node.type, node);
      continue;
    }
    if ((0, _index$q.isTSUnionType)(node)) {
      if (!typeGroups.has(node.types)) {
        nodes.push(...node.types);
        typeGroups.add(node.types);
      }
      continue;
    }
    const typeArgumentsKey = "typeParameters";
    if ((0, _index$q.isTSTypeReference)(node) && node[typeArgumentsKey]) {
      const typeArguments = node[typeArgumentsKey];
      const name = getQualifiedName(node.typeName);
      if (generics.has(name)) {
        let existing = generics.get(name);
        const existingTypeArguments = existing[typeArgumentsKey];
        if (existingTypeArguments) {
          existingTypeArguments.params.push(...typeArguments.params);
          existingTypeArguments.params = removeTypeDuplicates(existingTypeArguments.params);
        } else {
          existing = typeArguments;
        }
      } else {
        generics.set(name, node);
      }
      continue;
    }
    types.push(node);
  }
  for (const [, baseType] of bases) {
    types.push(baseType);
  }
  for (const [, genericName] of generics) {
    types.push(genericName);
  }
  return types;
}

Object.defineProperty(createTSUnionType$1, "__esModule", {
  value: true
});
createTSUnionType$1.default = createTSUnionType;
var _index$p = generated$2;
var _removeTypeDuplicates = removeTypeDuplicates$1;
var _index2$5 = generated$3;
function createTSUnionType(typeAnnotations) {
  const types = typeAnnotations.map(type => {
    return (0, _index2$5.isTSTypeAnnotation)(type) ? type.typeAnnotation : type;
  });
  const flattened = (0, _removeTypeDuplicates.default)(types);
  if (flattened.length === 1) {
    return flattened[0];
  } else {
    return (0, _index$p.tsUnionType)(flattened);
  }
}

var productions = {};

Object.defineProperty(productions, "__esModule", {
  value: true
});
productions.buildUndefinedNode = buildUndefinedNode;
var _index$o = generated$2;
function buildUndefinedNode() {
  return (0, _index$o.unaryExpression)("void", (0, _index$o.numericLiteral)(0), true);
}

var cloneNode$1 = {};

Object.defineProperty(cloneNode$1, "__esModule", {
  value: true
});
cloneNode$1.default = cloneNode;
var _index$n = requireDefinitions();
var _index2$4 = generated$3;
const {
  hasOwn
} = {
  hasOwn: Function.call.bind(Object.prototype.hasOwnProperty)
};
function cloneIfNode(obj, deep, withoutLoc, commentsCache) {
  if (obj && typeof obj.type === "string") {
    return cloneNodeInternal(obj, deep, withoutLoc, commentsCache);
  }
  return obj;
}
function cloneIfNodeOrArray(obj, deep, withoutLoc, commentsCache) {
  if (Array.isArray(obj)) {
    return obj.map(node => cloneIfNode(node, deep, withoutLoc, commentsCache));
  }
  return cloneIfNode(obj, deep, withoutLoc, commentsCache);
}
function cloneNode(node, deep = true, withoutLoc = false) {
  return cloneNodeInternal(node, deep, withoutLoc, new Map());
}
function cloneNodeInternal(node, deep = true, withoutLoc = false, commentsCache) {
  if (!node) return node;
  const {
    type
  } = node;
  const newNode = {
    type: node.type
  };
  if ((0, _index2$4.isIdentifier)(node)) {
    newNode.name = node.name;
    if (hasOwn(node, "optional") && typeof node.optional === "boolean") {
      newNode.optional = node.optional;
    }
    if (hasOwn(node, "typeAnnotation")) {
      newNode.typeAnnotation = deep ? cloneIfNodeOrArray(node.typeAnnotation, true, withoutLoc, commentsCache) : node.typeAnnotation;
    }
    if (hasOwn(node, "decorators")) {
      newNode.decorators = deep ? cloneIfNodeOrArray(node.decorators, true, withoutLoc, commentsCache) : node.decorators;
    }
  } else if (!hasOwn(_index$n.NODE_FIELDS, type)) {
    throw new Error(`Unknown node type: "${type}"`);
  } else {
    for (const field of Object.keys(_index$n.NODE_FIELDS[type])) {
      if (hasOwn(node, field)) {
        if (deep) {
          newNode[field] = (0, _index2$4.isFile)(node) && field === "comments" ? maybeCloneComments(node.comments, deep, withoutLoc, commentsCache) : cloneIfNodeOrArray(node[field], true, withoutLoc, commentsCache);
        } else {
          newNode[field] = node[field];
        }
      }
    }
  }
  if (hasOwn(node, "loc")) {
    if (withoutLoc) {
      newNode.loc = null;
    } else {
      newNode.loc = node.loc;
    }
  }
  if (hasOwn(node, "leadingComments")) {
    newNode.leadingComments = maybeCloneComments(node.leadingComments, deep, withoutLoc, commentsCache);
  }
  if (hasOwn(node, "innerComments")) {
    newNode.innerComments = maybeCloneComments(node.innerComments, deep, withoutLoc, commentsCache);
  }
  if (hasOwn(node, "trailingComments")) {
    newNode.trailingComments = maybeCloneComments(node.trailingComments, deep, withoutLoc, commentsCache);
  }
  if (hasOwn(node, "extra")) {
    newNode.extra = Object.assign({}, node.extra);
  }
  return newNode;
}
function maybeCloneComments(comments, deep, withoutLoc, commentsCache) {
  if (!comments || !deep) {
    return comments;
  }
  return comments.map(comment => {
    const cache = commentsCache.get(comment);
    if (cache) return cache;
    const {
      type,
      value,
      loc
    } = comment;
    const ret = {
      type,
      value,
      loc
    };
    if (withoutLoc) {
      ret.loc = null;
    }
    commentsCache.set(comment, ret);
    return ret;
  });
}

var clone$1 = {};

Object.defineProperty(clone$1, "__esModule", {
  value: true
});
clone$1.default = clone;
var _cloneNode$5 = cloneNode$1;
function clone(node) {
  return (0, _cloneNode$5.default)(node, false);
}

var cloneDeep$1 = {};

Object.defineProperty(cloneDeep$1, "__esModule", {
  value: true
});
cloneDeep$1.default = cloneDeep;
var _cloneNode$4 = cloneNode$1;
function cloneDeep(node) {
  return (0, _cloneNode$4.default)(node);
}

var cloneDeepWithoutLoc$1 = {};

Object.defineProperty(cloneDeepWithoutLoc$1, "__esModule", {
  value: true
});
cloneDeepWithoutLoc$1.default = cloneDeepWithoutLoc;
var _cloneNode$3 = cloneNode$1;
function cloneDeepWithoutLoc(node) {
  return (0, _cloneNode$3.default)(node, true, true);
}

var cloneWithoutLoc$1 = {};

Object.defineProperty(cloneWithoutLoc$1, "__esModule", {
  value: true
});
cloneWithoutLoc$1.default = cloneWithoutLoc;
var _cloneNode$2 = cloneNode$1;
function cloneWithoutLoc(node) {
  return (0, _cloneNode$2.default)(node, false, true);
}

var addComment$1 = {};

var addComments$1 = {};

Object.defineProperty(addComments$1, "__esModule", {
  value: true
});
addComments$1.default = addComments;
function addComments(node, type, comments) {
  if (!comments || !node) return node;
  const key = `${type}Comments`;
  if (node[key]) {
    if (type === "leading") {
      node[key] = comments.concat(node[key]);
    } else {
      node[key].push(...comments);
    }
  } else {
    node[key] = comments;
  }
  return node;
}

Object.defineProperty(addComment$1, "__esModule", {
  value: true
});
addComment$1.default = addComment;
var _addComments = addComments$1;
function addComment(node, type, content, line) {
  return (0, _addComments.default)(node, type, [{
    type: line ? "CommentLine" : "CommentBlock",
    value: content
  }]);
}

var inheritInnerComments$1 = {};

var inherit$1 = {};

Object.defineProperty(inherit$1, "__esModule", {
  value: true
});
inherit$1.default = inherit;
function inherit(key, child, parent) {
  if (child && parent) {
    child[key] = Array.from(new Set([].concat(child[key], parent[key]).filter(Boolean)));
  }
}

Object.defineProperty(inheritInnerComments$1, "__esModule", {
  value: true
});
inheritInnerComments$1.default = inheritInnerComments;
var _inherit$2 = inherit$1;
function inheritInnerComments(child, parent) {
  (0, _inherit$2.default)("innerComments", child, parent);
}

var inheritLeadingComments$1 = {};

Object.defineProperty(inheritLeadingComments$1, "__esModule", {
  value: true
});
inheritLeadingComments$1.default = inheritLeadingComments;
var _inherit$1 = inherit$1;
function inheritLeadingComments(child, parent) {
  (0, _inherit$1.default)("leadingComments", child, parent);
}

var inheritsComments$1 = {};

var inheritTrailingComments$1 = {};

Object.defineProperty(inheritTrailingComments$1, "__esModule", {
  value: true
});
inheritTrailingComments$1.default = inheritTrailingComments;
var _inherit = inherit$1;
function inheritTrailingComments(child, parent) {
  (0, _inherit.default)("trailingComments", child, parent);
}

Object.defineProperty(inheritsComments$1, "__esModule", {
  value: true
});
inheritsComments$1.default = inheritsComments;
var _inheritTrailingComments = inheritTrailingComments$1;
var _inheritLeadingComments = inheritLeadingComments$1;
var _inheritInnerComments = inheritInnerComments$1;
function inheritsComments(child, parent) {
  (0, _inheritTrailingComments.default)(child, parent);
  (0, _inheritLeadingComments.default)(child, parent);
  (0, _inheritInnerComments.default)(child, parent);
  return child;
}

var removeComments$1 = {};

Object.defineProperty(removeComments$1, "__esModule", {
  value: true
});
removeComments$1.default = removeComments;
var _index$m = constants;
function removeComments(node) {
  _index$m.COMMENT_KEYS.forEach(key => {
    node[key] = null;
  });
  return node;
}

var generated = {};

Object.defineProperty(generated, "__esModule", {
  value: true
});
generated.WHILE_TYPES = generated.USERWHITESPACABLE_TYPES = generated.UNARYLIKE_TYPES = generated.TYPESCRIPT_TYPES = generated.TSTYPE_TYPES = generated.TSTYPEELEMENT_TYPES = generated.TSENTITYNAME_TYPES = generated.TSBASETYPE_TYPES = generated.TERMINATORLESS_TYPES = generated.STATEMENT_TYPES = generated.STANDARDIZED_TYPES = generated.SCOPABLE_TYPES = generated.PUREISH_TYPES = generated.PROPERTY_TYPES = generated.PRIVATE_TYPES = generated.PATTERN_TYPES = generated.PATTERNLIKE_TYPES = generated.OBJECTMEMBER_TYPES = generated.MODULESPECIFIER_TYPES = generated.MODULEDECLARATION_TYPES = generated.MISCELLANEOUS_TYPES = generated.METHOD_TYPES = generated.LVAL_TYPES = generated.LOOP_TYPES = generated.LITERAL_TYPES = generated.JSX_TYPES = generated.IMPORTOREXPORTDECLARATION_TYPES = generated.IMMUTABLE_TYPES = generated.FUNCTION_TYPES = generated.FUNCTIONPARENT_TYPES = generated.FUNCTIONPARAMETER_TYPES = generated.FOR_TYPES = generated.FORXSTATEMENT_TYPES = generated.FLOW_TYPES = generated.FLOWTYPE_TYPES = generated.FLOWPREDICATE_TYPES = generated.FLOWDECLARATION_TYPES = generated.FLOWBASEANNOTATION_TYPES = generated.EXPRESSION_TYPES = generated.EXPRESSIONWRAPPER_TYPES = generated.EXPORTDECLARATION_TYPES = generated.ENUMMEMBER_TYPES = generated.ENUMBODY_TYPES = generated.DECLARATION_TYPES = generated.CONDITIONAL_TYPES = generated.COMPLETIONSTATEMENT_TYPES = generated.CLASS_TYPES = generated.BLOCK_TYPES = generated.BLOCKPARENT_TYPES = generated.BINARY_TYPES = generated.ACCESSOR_TYPES = void 0;
var _index$l = requireDefinitions();
generated.STANDARDIZED_TYPES = _index$l.FLIPPED_ALIAS_KEYS["Standardized"];
generated.EXPRESSION_TYPES = _index$l.FLIPPED_ALIAS_KEYS["Expression"];
generated.BINARY_TYPES = _index$l.FLIPPED_ALIAS_KEYS["Binary"];
generated.SCOPABLE_TYPES = _index$l.FLIPPED_ALIAS_KEYS["Scopable"];
generated.BLOCKPARENT_TYPES = _index$l.FLIPPED_ALIAS_KEYS["BlockParent"];
generated.BLOCK_TYPES = _index$l.FLIPPED_ALIAS_KEYS["Block"];
generated.STATEMENT_TYPES = _index$l.FLIPPED_ALIAS_KEYS["Statement"];
generated.TERMINATORLESS_TYPES = _index$l.FLIPPED_ALIAS_KEYS["Terminatorless"];
generated.COMPLETIONSTATEMENT_TYPES = _index$l.FLIPPED_ALIAS_KEYS["CompletionStatement"];
generated.CONDITIONAL_TYPES = _index$l.FLIPPED_ALIAS_KEYS["Conditional"];
generated.LOOP_TYPES = _index$l.FLIPPED_ALIAS_KEYS["Loop"];
generated.WHILE_TYPES = _index$l.FLIPPED_ALIAS_KEYS["While"];
generated.EXPRESSIONWRAPPER_TYPES = _index$l.FLIPPED_ALIAS_KEYS["ExpressionWrapper"];
generated.FOR_TYPES = _index$l.FLIPPED_ALIAS_KEYS["For"];
generated.FORXSTATEMENT_TYPES = _index$l.FLIPPED_ALIAS_KEYS["ForXStatement"];
generated.FUNCTION_TYPES = _index$l.FLIPPED_ALIAS_KEYS["Function"];
generated.FUNCTIONPARENT_TYPES = _index$l.FLIPPED_ALIAS_KEYS["FunctionParent"];
generated.PUREISH_TYPES = _index$l.FLIPPED_ALIAS_KEYS["Pureish"];
generated.DECLARATION_TYPES = _index$l.FLIPPED_ALIAS_KEYS["Declaration"];
generated.FUNCTIONPARAMETER_TYPES = _index$l.FLIPPED_ALIAS_KEYS["FunctionParameter"];
generated.PATTERNLIKE_TYPES = _index$l.FLIPPED_ALIAS_KEYS["PatternLike"];
generated.LVAL_TYPES = _index$l.FLIPPED_ALIAS_KEYS["LVal"];
generated.TSENTITYNAME_TYPES = _index$l.FLIPPED_ALIAS_KEYS["TSEntityName"];
generated.LITERAL_TYPES = _index$l.FLIPPED_ALIAS_KEYS["Literal"];
generated.IMMUTABLE_TYPES = _index$l.FLIPPED_ALIAS_KEYS["Immutable"];
generated.USERWHITESPACABLE_TYPES = _index$l.FLIPPED_ALIAS_KEYS["UserWhitespacable"];
generated.METHOD_TYPES = _index$l.FLIPPED_ALIAS_KEYS["Method"];
generated.OBJECTMEMBER_TYPES = _index$l.FLIPPED_ALIAS_KEYS["ObjectMember"];
generated.PROPERTY_TYPES = _index$l.FLIPPED_ALIAS_KEYS["Property"];
generated.UNARYLIKE_TYPES = _index$l.FLIPPED_ALIAS_KEYS["UnaryLike"];
generated.PATTERN_TYPES = _index$l.FLIPPED_ALIAS_KEYS["Pattern"];
generated.CLASS_TYPES = _index$l.FLIPPED_ALIAS_KEYS["Class"];
const IMPORTOREXPORTDECLARATION_TYPES = generated.IMPORTOREXPORTDECLARATION_TYPES = _index$l.FLIPPED_ALIAS_KEYS["ImportOrExportDeclaration"];
generated.EXPORTDECLARATION_TYPES = _index$l.FLIPPED_ALIAS_KEYS["ExportDeclaration"];
generated.MODULESPECIFIER_TYPES = _index$l.FLIPPED_ALIAS_KEYS["ModuleSpecifier"];
generated.ACCESSOR_TYPES = _index$l.FLIPPED_ALIAS_KEYS["Accessor"];
generated.PRIVATE_TYPES = _index$l.FLIPPED_ALIAS_KEYS["Private"];
generated.FLOW_TYPES = _index$l.FLIPPED_ALIAS_KEYS["Flow"];
generated.FLOWTYPE_TYPES = _index$l.FLIPPED_ALIAS_KEYS["FlowType"];
generated.FLOWBASEANNOTATION_TYPES = _index$l.FLIPPED_ALIAS_KEYS["FlowBaseAnnotation"];
generated.FLOWDECLARATION_TYPES = _index$l.FLIPPED_ALIAS_KEYS["FlowDeclaration"];
generated.FLOWPREDICATE_TYPES = _index$l.FLIPPED_ALIAS_KEYS["FlowPredicate"];
generated.ENUMBODY_TYPES = _index$l.FLIPPED_ALIAS_KEYS["EnumBody"];
generated.ENUMMEMBER_TYPES = _index$l.FLIPPED_ALIAS_KEYS["EnumMember"];
generated.JSX_TYPES = _index$l.FLIPPED_ALIAS_KEYS["JSX"];
generated.MISCELLANEOUS_TYPES = _index$l.FLIPPED_ALIAS_KEYS["Miscellaneous"];
generated.TYPESCRIPT_TYPES = _index$l.FLIPPED_ALIAS_KEYS["TypeScript"];
generated.TSTYPEELEMENT_TYPES = _index$l.FLIPPED_ALIAS_KEYS["TSTypeElement"];
generated.TSTYPE_TYPES = _index$l.FLIPPED_ALIAS_KEYS["TSType"];
generated.TSBASETYPE_TYPES = _index$l.FLIPPED_ALIAS_KEYS["TSBaseType"];
generated.MODULEDECLARATION_TYPES = IMPORTOREXPORTDECLARATION_TYPES;

var ensureBlock$1 = {};

var toBlock$1 = {};

Object.defineProperty(toBlock$1, "__esModule", {
  value: true
});
toBlock$1.default = toBlock;
var _index$k = generated$3;
var _index2$3 = generated$2;
function toBlock(node, parent) {
  if ((0, _index$k.isBlockStatement)(node)) {
    return node;
  }
  let blockNodes = [];
  if ((0, _index$k.isEmptyStatement)(node)) {
    blockNodes = [];
  } else {
    if (!(0, _index$k.isStatement)(node)) {
      if ((0, _index$k.isFunction)(parent)) {
        node = (0, _index2$3.returnStatement)(node);
      } else {
        node = (0, _index2$3.expressionStatement)(node);
      }
    }
    blockNodes = [node];
  }
  return (0, _index2$3.blockStatement)(blockNodes);
}

Object.defineProperty(ensureBlock$1, "__esModule", {
  value: true
});
ensureBlock$1.default = ensureBlock;
var _toBlock = toBlock$1;
function ensureBlock(node, key = "body") {
  const result = (0, _toBlock.default)(node[key], node);
  node[key] = result;
  return result;
}

var toBindingIdentifierName$1 = {};

var toIdentifier$1 = {};

Object.defineProperty(toIdentifier$1, "__esModule", {
  value: true
});
toIdentifier$1.default = toIdentifier;
var _isValidIdentifier$2 = isValidIdentifier$1;
var _helperValidatorIdentifier = lib$1;
function toIdentifier(input) {
  input = input + "";
  let name = "";
  for (const c of input) {
    name += (0, _helperValidatorIdentifier.isIdentifierChar)(c.codePointAt(0)) ? c : "-";
  }
  name = name.replace(/^[-0-9]+/, "");
  name = name.replace(/[-\s]+(.)?/g, function (match, c) {
    return c ? c.toUpperCase() : "";
  });
  if (!(0, _isValidIdentifier$2.default)(name)) {
    name = `_${name}`;
  }
  return name || "_";
}

Object.defineProperty(toBindingIdentifierName$1, "__esModule", {
  value: true
});
toBindingIdentifierName$1.default = toBindingIdentifierName;
var _toIdentifier = toIdentifier$1;
function toBindingIdentifierName(name) {
  name = (0, _toIdentifier.default)(name);
  if (name === "eval" || name === "arguments") name = "_" + name;
  return name;
}

var toComputedKey$1 = {};

Object.defineProperty(toComputedKey$1, "__esModule", {
  value: true
});
toComputedKey$1.default = toComputedKey;
var _index$j = generated$3;
var _index2$2 = generated$2;
function toComputedKey(node, key = node.key || node.property) {
  if (!node.computed && (0, _index$j.isIdentifier)(key)) key = (0, _index2$2.stringLiteral)(key.name);
  return key;
}

var toExpression$1 = {};

Object.defineProperty(toExpression$1, "__esModule", {
  value: true
});
toExpression$1.default = void 0;
var _index$i = generated$3;
toExpression$1.default = toExpression;
function toExpression(node) {
  if ((0, _index$i.isExpressionStatement)(node)) {
    node = node.expression;
  }
  if ((0, _index$i.isExpression)(node)) {
    return node;
  }
  if ((0, _index$i.isClass)(node)) {
    node.type = "ClassExpression";
    node.abstract = false;
  } else if ((0, _index$i.isFunction)(node)) {
    node.type = "FunctionExpression";
  }
  if (!(0, _index$i.isExpression)(node)) {
    throw new Error(`cannot turn ${node.type} to an expression`);
  }
  return node;
}

var toKeyAlias$1 = {};

var removePropertiesDeep$1 = {};

var traverseFast$1 = {};

Object.defineProperty(traverseFast$1, "__esModule", {
  value: true
});
traverseFast$1.default = traverseFast;
var _index$h = requireDefinitions();
const _skip = Symbol();
const _stop = Symbol();
function traverseFast(node, enter, opts) {
  if (!node) return false;
  const keys = _index$h.VISITOR_KEYS[node.type];
  if (!keys) return false;
  opts = opts || {};
  const ret = enter(node, opts);
  if (ret !== undefined) {
    switch (ret) {
      case _skip:
        return false;
      case _stop:
        return true;
    }
  }
  for (const key of keys) {
    const subNode = node[key];
    if (!subNode) continue;
    if (Array.isArray(subNode)) {
      for (const node of subNode) {
        if (traverseFast(node, enter, opts)) return true;
      }
    } else {
      if (traverseFast(subNode, enter, opts)) return true;
    }
  }
  return false;
}
traverseFast.skip = _skip;
traverseFast.stop = _stop;

var removeProperties$1 = {};

Object.defineProperty(removeProperties$1, "__esModule", {
  value: true
});
removeProperties$1.default = removeProperties;
var _index$g = constants;
const CLEAR_KEYS = ["tokens", "start", "end", "loc", "raw", "rawValue"];
const CLEAR_KEYS_PLUS_COMMENTS = [..._index$g.COMMENT_KEYS, "comments", ...CLEAR_KEYS];
function removeProperties(node, opts = {}) {
  const map = opts.preserveComments ? CLEAR_KEYS : CLEAR_KEYS_PLUS_COMMENTS;
  for (const key of map) {
    if (node[key] != null) node[key] = undefined;
  }
  for (const key of Object.keys(node)) {
    if (key[0] === "_" && node[key] != null) node[key] = undefined;
  }
  const symbols = Object.getOwnPropertySymbols(node);
  for (const sym of symbols) {
    node[sym] = null;
  }
}

Object.defineProperty(removePropertiesDeep$1, "__esModule", {
  value: true
});
removePropertiesDeep$1.default = removePropertiesDeep;
var _traverseFast = traverseFast$1;
var _removeProperties = removeProperties$1;
function removePropertiesDeep(tree, opts) {
  (0, _traverseFast.default)(tree, _removeProperties.default, opts);
  return tree;
}

Object.defineProperty(toKeyAlias$1, "__esModule", {
  value: true
});
toKeyAlias$1.default = toKeyAlias;
var _index$f = generated$3;
var _cloneNode$1 = cloneNode$1;
var _removePropertiesDeep = removePropertiesDeep$1;
function toKeyAlias(node, key = node.key) {
  let alias;
  if (node.kind === "method") {
    return toKeyAlias.increment() + "";
  } else if ((0, _index$f.isIdentifier)(key)) {
    alias = key.name;
  } else if ((0, _index$f.isStringLiteral)(key)) {
    alias = JSON.stringify(key.value);
  } else {
    alias = JSON.stringify((0, _removePropertiesDeep.default)((0, _cloneNode$1.default)(key)));
  }
  if (node.computed) {
    alias = `[${alias}]`;
  }
  if (node.static) {
    alias = `static:${alias}`;
  }
  return alias;
}
toKeyAlias.uid = 0;
toKeyAlias.increment = function () {
  if (toKeyAlias.uid >= Number.MAX_SAFE_INTEGER) {
    return toKeyAlias.uid = 0;
  } else {
    return toKeyAlias.uid++;
  }
};

var toStatement$1 = {};

Object.defineProperty(toStatement$1, "__esModule", {
  value: true
});
toStatement$1.default = void 0;
var _index$e = generated$3;
var _index2$1 = generated$2;
toStatement$1.default = toStatement;
function toStatement(node, ignore) {
  if ((0, _index$e.isStatement)(node)) {
    return node;
  }
  let mustHaveId = false;
  let newType;
  if ((0, _index$e.isClass)(node)) {
    mustHaveId = true;
    newType = "ClassDeclaration";
  } else if ((0, _index$e.isFunction)(node)) {
    mustHaveId = true;
    newType = "FunctionDeclaration";
  } else if ((0, _index$e.isAssignmentExpression)(node)) {
    return (0, _index2$1.expressionStatement)(node);
  }
  if (mustHaveId && !node.id) {
    newType = false;
  }
  if (!newType) {
    if (ignore) {
      return false;
    } else {
      throw new Error(`cannot turn ${node.type} to a statement`);
    }
  }
  node.type = newType;
  return node;
}

var valueToNode$1 = {};

Object.defineProperty(valueToNode$1, "__esModule", {
  value: true
});
valueToNode$1.default = void 0;
var _isValidIdentifier$1 = isValidIdentifier$1;
var _index$d = generated$2;
valueToNode$1.default = valueToNode;
const objectToString = Function.call.bind(Object.prototype.toString);
function isRegExp(value) {
  return objectToString(value) === "[object RegExp]";
}
function isPlainObject(value) {
  if (typeof value !== "object" || value === null || Object.prototype.toString.call(value) !== "[object Object]") {
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  return proto === null || Object.getPrototypeOf(proto) === null;
}
function valueToNode(value) {
  if (value === undefined) {
    return (0, _index$d.identifier)("undefined");
  }
  if (value === true || value === false) {
    return (0, _index$d.booleanLiteral)(value);
  }
  if (value === null) {
    return (0, _index$d.nullLiteral)();
  }
  if (typeof value === "string") {
    return (0, _index$d.stringLiteral)(value);
  }
  if (typeof value === "number") {
    let result;
    if (Number.isFinite(value)) {
      result = (0, _index$d.numericLiteral)(Math.abs(value));
    } else {
      let numerator;
      if (Number.isNaN(value)) {
        numerator = (0, _index$d.numericLiteral)(0);
      } else {
        numerator = (0, _index$d.numericLiteral)(1);
      }
      result = (0, _index$d.binaryExpression)("/", numerator, (0, _index$d.numericLiteral)(0));
    }
    if (value < 0 || Object.is(value, -0)) {
      result = (0, _index$d.unaryExpression)("-", result);
    }
    return result;
  }
  if (typeof value === "bigint") {
    if (value < 0) {
      return (0, _index$d.unaryExpression)("-", (0, _index$d.bigIntLiteral)(-value));
    } else {
      return (0, _index$d.bigIntLiteral)(value);
    }
  }
  if (isRegExp(value)) {
    const pattern = value.source;
    const flags = /\/([a-z]*)$/.exec(value.toString())[1];
    return (0, _index$d.regExpLiteral)(pattern, flags);
  }
  if (Array.isArray(value)) {
    return (0, _index$d.arrayExpression)(value.map(valueToNode));
  }
  if (isPlainObject(value)) {
    const props = [];
    for (const key of Object.keys(value)) {
      let nodeKey,
        computed = false;
      if ((0, _isValidIdentifier$1.default)(key)) {
        if (key === "__proto__") {
          computed = true;
          nodeKey = (0, _index$d.stringLiteral)(key);
        } else {
          nodeKey = (0, _index$d.identifier)(key);
        }
      } else {
        nodeKey = (0, _index$d.stringLiteral)(key);
      }
      props.push((0, _index$d.objectProperty)(nodeKey, valueToNode(value[key]), computed));
    }
    return (0, _index$d.objectExpression)(props);
  }
  throw new Error("don't know how to turn this value into a node");
}

var appendToMemberExpression$1 = {};

Object.defineProperty(appendToMemberExpression$1, "__esModule", {
  value: true
});
appendToMemberExpression$1.default = appendToMemberExpression;
var _index$c = generated$2;
function appendToMemberExpression(member, append, computed = false) {
  member.object = (0, _index$c.memberExpression)(member.object, member.property, member.computed);
  member.property = append;
  member.computed = !!computed;
  return member;
}

var inherits$1 = {};

Object.defineProperty(inherits$1, "__esModule", {
  value: true
});
inherits$1.default = inherits;
var _index$b = constants;
var _inheritsComments = inheritsComments$1;
function inherits(child, parent) {
  if (!child || !parent) return child;
  for (const key of _index$b.INHERIT_KEYS.optional) {
    if (child[key] == null) {
      child[key] = parent[key];
    }
  }
  for (const key of Object.keys(parent)) {
    if (key[0] === "_" && key !== "__clone") {
      child[key] = parent[key];
    }
  }
  for (const key of _index$b.INHERIT_KEYS.force) {
    child[key] = parent[key];
  }
  (0, _inheritsComments.default)(child, parent);
  return child;
}

var prependToMemberExpression = {};

var hasRequiredPrependToMemberExpression;

function requirePrependToMemberExpression () {
	if (hasRequiredPrependToMemberExpression) return prependToMemberExpression;
	hasRequiredPrependToMemberExpression = 1;

	Object.defineProperty(prependToMemberExpression, "__esModule", {
	  value: true
	});
	prependToMemberExpression.default = prependToMemberExpression$1;
	var _index = generated$2;
	var _index2 = requireLib();
	function prependToMemberExpression$1(member, prepend) {
	  if ((0, _index2.isSuper)(member.object)) {
	    throw new Error("Cannot prepend node to super property access (`super.foo`).");
	  }
	  member.object = (0, _index.memberExpression)(prepend, member.object);
	  return member;
	}

	
	return prependToMemberExpression;
}

var getAssignmentIdentifiers$1 = {};

Object.defineProperty(getAssignmentIdentifiers$1, "__esModule", {
  value: true
});
getAssignmentIdentifiers$1.default = getAssignmentIdentifiers;
function getAssignmentIdentifiers(node) {
  const search = [].concat(node);
  const ids = Object.create(null);
  while (search.length) {
    const id = search.pop();
    if (!id) continue;
    switch (id.type) {
      case "ArrayPattern":
        search.push(...id.elements);
        break;
      case "AssignmentExpression":
      case "AssignmentPattern":
      case "ForInStatement":
      case "ForOfStatement":
        search.push(id.left);
        break;
      case "ObjectPattern":
        search.push(...id.properties);
        break;
      case "ObjectProperty":
        search.push(id.value);
        break;
      case "RestElement":
      case "UpdateExpression":
        search.push(id.argument);
        break;
      case "UnaryExpression":
        if (id.operator === "delete") {
          search.push(id.argument);
        }
        break;
      case "Identifier":
        ids[id.name] = id;
        break;
    }
  }
  return ids;
}

var getBindingIdentifiers$1 = {};

Object.defineProperty(getBindingIdentifiers$1, "__esModule", {
  value: true
});
getBindingIdentifiers$1.default = getBindingIdentifiers;
var _index$a = generated$3;
function getBindingIdentifiers(node, duplicates, outerOnly, newBindingsOnly) {
  const search = [].concat(node);
  const ids = Object.create(null);
  while (search.length) {
    const id = search.shift();
    if (!id) continue;
    if (newBindingsOnly && ((0, _index$a.isAssignmentExpression)(id) || (0, _index$a.isUnaryExpression)(id) || (0, _index$a.isUpdateExpression)(id))) {
      continue;
    }
    if ((0, _index$a.isIdentifier)(id)) {
      if (duplicates) {
        const _ids = ids[id.name] = ids[id.name] || [];
        _ids.push(id);
      } else {
        ids[id.name] = id;
      }
      continue;
    }
    if ((0, _index$a.isExportDeclaration)(id) && !(0, _index$a.isExportAllDeclaration)(id)) {
      if ((0, _index$a.isDeclaration)(id.declaration)) {
        search.push(id.declaration);
      }
      continue;
    }
    if (outerOnly) {
      if ((0, _index$a.isFunctionDeclaration)(id)) {
        search.push(id.id);
        continue;
      }
      if ((0, _index$a.isFunctionExpression)(id)) {
        continue;
      }
    }
    const keys = getBindingIdentifiers.keys[id.type];
    if (keys) {
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const nodes = id[key];
        if (nodes) {
          if (Array.isArray(nodes)) {
            search.push(...nodes);
          } else {
            search.push(nodes);
          }
        }
      }
    }
  }
  return ids;
}
const keys = {
  DeclareClass: ["id"],
  DeclareFunction: ["id"],
  DeclareModule: ["id"],
  DeclareVariable: ["id"],
  DeclareInterface: ["id"],
  DeclareTypeAlias: ["id"],
  DeclareOpaqueType: ["id"],
  InterfaceDeclaration: ["id"],
  TypeAlias: ["id"],
  OpaqueType: ["id"],
  CatchClause: ["param"],
  LabeledStatement: ["label"],
  UnaryExpression: ["argument"],
  AssignmentExpression: ["left"],
  ImportSpecifier: ["local"],
  ImportNamespaceSpecifier: ["local"],
  ImportDefaultSpecifier: ["local"],
  ImportDeclaration: ["specifiers"],
  TSImportEqualsDeclaration: ["id"],
  ExportSpecifier: ["exported"],
  ExportNamespaceSpecifier: ["exported"],
  ExportDefaultSpecifier: ["exported"],
  FunctionDeclaration: ["id", "params"],
  FunctionExpression: ["id", "params"],
  ArrowFunctionExpression: ["params"],
  ObjectMethod: ["params"],
  ClassMethod: ["params"],
  ClassPrivateMethod: ["params"],
  ForInStatement: ["left"],
  ForOfStatement: ["left"],
  ClassDeclaration: ["id"],
  ClassExpression: ["id"],
  RestElement: ["argument"],
  UpdateExpression: ["argument"],
  ObjectProperty: ["value"],
  AssignmentPattern: ["left"],
  ArrayPattern: ["elements"],
  ObjectPattern: ["properties"],
  VariableDeclaration: ["declarations"],
  VariableDeclarator: ["id"]
};
getBindingIdentifiers.keys = keys;

var getOuterBindingIdentifiers$1 = {};

Object.defineProperty(getOuterBindingIdentifiers$1, "__esModule", {
  value: true
});
getOuterBindingIdentifiers$1.default = void 0;
var _getBindingIdentifiers$2 = getBindingIdentifiers$1;
getOuterBindingIdentifiers$1.default = getOuterBindingIdentifiers;
function getOuterBindingIdentifiers(node, duplicates) {
  return (0, _getBindingIdentifiers$2.default)(node, duplicates, true);
}

var getFunctionName$1 = {};

Object.defineProperty(getFunctionName$1, "__esModule", {
  value: true
});
getFunctionName$1.default = getFunctionName;
var _index$9 = generated$3;
function getNameFromLiteralId(id) {
  if ((0, _index$9.isNullLiteral)(id)) {
    return "null";
  }
  if ((0, _index$9.isRegExpLiteral)(id)) {
    return `/${id.pattern}/${id.flags}`;
  }
  if ((0, _index$9.isTemplateLiteral)(id)) {
    return id.quasis.map(quasi => quasi.value.raw).join("");
  }
  if (id.value !== undefined) {
    return String(id.value);
  }
  return null;
}
function getObjectMemberKey(node) {
  if (!node.computed || (0, _index$9.isLiteral)(node.key)) {
    return node.key;
  }
}
function getFunctionName(node, parent) {
  if ("id" in node && node.id) {
    return {
      name: node.id.name,
      originalNode: node.id
    };
  }
  let prefix = "";
  let id;
  if ((0, _index$9.isObjectProperty)(parent, {
    value: node
  })) {
    id = getObjectMemberKey(parent);
  } else if ((0, _index$9.isObjectMethod)(node) || (0, _index$9.isClassMethod)(node)) {
    id = getObjectMemberKey(node);
    if (node.kind === "get") prefix = "get ";else if (node.kind === "set") prefix = "set ";
  } else if ((0, _index$9.isVariableDeclarator)(parent, {
    init: node
  })) {
    id = parent.id;
  } else if ((0, _index$9.isAssignmentExpression)(parent, {
    operator: "=",
    right: node
  })) {
    id = parent.left;
  }
  if (!id) return null;
  const name = (0, _index$9.isLiteral)(id) ? getNameFromLiteralId(id) : (0, _index$9.isIdentifier)(id) ? id.name : (0, _index$9.isPrivateName)(id) ? id.id.name : null;
  if (name == null) return null;
  return {
    name: prefix + name,
    originalNode: id
  };
}

var traverse$1 = {};

Object.defineProperty(traverse$1, "__esModule", {
  value: true
});
traverse$1.default = traverse;
var _index$8 = requireDefinitions();
function traverse(node, handlers, state) {
  if (typeof handlers === "function") {
    handlers = {
      enter: handlers
    };
  }
  const {
    enter,
    exit
  } = handlers;
  traverseSimpleImpl(node, enter, exit, state, []);
}
function traverseSimpleImpl(node, enter, exit, state, ancestors) {
  const keys = _index$8.VISITOR_KEYS[node.type];
  if (!keys) return;
  if (enter) enter(node, ancestors, state);
  for (const key of keys) {
    const subNode = node[key];
    if (Array.isArray(subNode)) {
      for (let i = 0; i < subNode.length; i++) {
        const child = subNode[i];
        if (!child) continue;
        ancestors.push({
          node,
          key,
          index: i
        });
        traverseSimpleImpl(child, enter, exit, state, ancestors);
        ancestors.pop();
      }
    } else if (subNode) {
      ancestors.push({
        node,
        key
      });
      traverseSimpleImpl(subNode, enter, exit, state, ancestors);
      ancestors.pop();
    }
  }
  if (exit) exit(node, ancestors, state);
}

var isBinding$1 = {};

Object.defineProperty(isBinding$1, "__esModule", {
  value: true
});
isBinding$1.default = isBinding;
var _getBindingIdentifiers$1 = getBindingIdentifiers$1;
function isBinding(node, parent, grandparent) {
  if (grandparent && node.type === "Identifier" && parent.type === "ObjectProperty" && grandparent.type === "ObjectExpression") {
    return false;
  }
  const keys = _getBindingIdentifiers$1.default.keys[parent.type];
  if (keys) {
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const val = parent[key];
      if (Array.isArray(val)) {
        if (val.includes(node)) return true;
      } else {
        if (val === node) return true;
      }
    }
  }
  return false;
}

var isBlockScoped$1 = {};

var isLet$1 = {};

Object.defineProperty(isLet$1, "__esModule", {
  value: true
});
isLet$1.default = isLet;
var _index$7 = generated$3;
{
  var BLOCK_SCOPED_SYMBOL$1 = Symbol.for("var used to be block scoped");
}
function isLet(node) {
  {
    return (0, _index$7.isVariableDeclaration)(node) && (node.kind !== "var" || node[BLOCK_SCOPED_SYMBOL$1]);
  }
}

Object.defineProperty(isBlockScoped$1, "__esModule", {
  value: true
});
isBlockScoped$1.default = isBlockScoped;
var _index$6 = generated$3;
var _isLet = isLet$1;
function isBlockScoped(node) {
  return (0, _index$6.isFunctionDeclaration)(node) || (0, _index$6.isClassDeclaration)(node) || (0, _isLet.default)(node);
}

var isImmutable$1 = {};

Object.defineProperty(isImmutable$1, "__esModule", {
  value: true
});
isImmutable$1.default = isImmutable;
var _isType = requireIsType();
var _index$5 = generated$3;
function isImmutable(node) {
  if ((0, _isType.default)(node.type, "Immutable")) return true;
  if ((0, _index$5.isIdentifier)(node)) {
    if (node.name === "undefined") {
      return true;
    } else {
      return false;
    }
  }
  return false;
}

var isNodesEquivalent$1 = {};

Object.defineProperty(isNodesEquivalent$1, "__esModule", {
  value: true
});
isNodesEquivalent$1.default = isNodesEquivalent;
var _index$4 = requireDefinitions();
function isNodesEquivalent(a, b) {
  if (typeof a !== "object" || typeof b !== "object" || a == null || b == null) {
    return a === b;
  }
  if (a.type !== b.type) {
    return false;
  }
  const fields = Object.keys(_index$4.NODE_FIELDS[a.type] || a.type);
  const visitorKeys = _index$4.VISITOR_KEYS[a.type];
  for (const field of fields) {
    const val_a = a[field];
    const val_b = b[field];
    if (typeof val_a !== typeof val_b) {
      return false;
    }
    if (val_a == null && val_b == null) {
      continue;
    } else if (val_a == null || val_b == null) {
      return false;
    }
    if (Array.isArray(val_a)) {
      if (!Array.isArray(val_b)) {
        return false;
      }
      if (val_a.length !== val_b.length) {
        return false;
      }
      for (let i = 0; i < val_a.length; i++) {
        if (!isNodesEquivalent(val_a[i], val_b[i])) {
          return false;
        }
      }
      continue;
    }
    if (typeof val_a === "object" && !(visitorKeys != null && visitorKeys.includes(field))) {
      for (const key of Object.keys(val_a)) {
        if (val_a[key] !== val_b[key]) {
          return false;
        }
      }
      continue;
    }
    if (!isNodesEquivalent(val_a, val_b)) {
      return false;
    }
  }
  return true;
}

var isReferenced$1 = {};

Object.defineProperty(isReferenced$1, "__esModule", {
  value: true
});
isReferenced$1.default = isReferenced;
function isReferenced(node, parent, grandparent) {
  switch (parent.type) {
    case "MemberExpression":
    case "OptionalMemberExpression":
      if (parent.property === node) {
        return !!parent.computed;
      }
      return parent.object === node;
    case "JSXMemberExpression":
      return parent.object === node;
    case "VariableDeclarator":
      return parent.init === node;
    case "ArrowFunctionExpression":
      return parent.body === node;
    case "PrivateName":
      return false;
    case "ClassMethod":
    case "ClassPrivateMethod":
    case "ObjectMethod":
      if (parent.key === node) {
        return !!parent.computed;
      }
      return false;
    case "ObjectProperty":
      if (parent.key === node) {
        return !!parent.computed;
      }
      return !grandparent || grandparent.type !== "ObjectPattern";
    case "ClassProperty":
    case "ClassAccessorProperty":
      if (parent.key === node) {
        return !!parent.computed;
      }
      return true;
    case "ClassPrivateProperty":
      return parent.key !== node;
    case "ClassDeclaration":
    case "ClassExpression":
      return parent.superClass === node;
    case "AssignmentExpression":
      return parent.right === node;
    case "AssignmentPattern":
      return parent.right === node;
    case "LabeledStatement":
      return false;
    case "CatchClause":
      return false;
    case "RestElement":
      return false;
    case "BreakStatement":
    case "ContinueStatement":
      return false;
    case "FunctionDeclaration":
    case "FunctionExpression":
      return false;
    case "ExportNamespaceSpecifier":
    case "ExportDefaultSpecifier":
      return false;
    case "ExportSpecifier":
      if (grandparent != null && grandparent.source) {
        return false;
      }
      return parent.local === node;
    case "ImportDefaultSpecifier":
    case "ImportNamespaceSpecifier":
    case "ImportSpecifier":
      return false;
    case "ImportAttribute":
      return false;
    case "JSXAttribute":
      return false;
    case "ObjectPattern":
    case "ArrayPattern":
      return false;
    case "MetaProperty":
      return false;
    case "ObjectTypeProperty":
      return parent.key !== node;
    case "TSEnumMember":
      return parent.id !== node;
    case "TSPropertySignature":
      if (parent.key === node) {
        return !!parent.computed;
      }
      return true;
  }
  return true;
}

var isScope$1 = {};

Object.defineProperty(isScope$1, "__esModule", {
  value: true
});
isScope$1.default = isScope;
var _index$3 = generated$3;
function isScope(node, parent) {
  if ((0, _index$3.isBlockStatement)(node) && ((0, _index$3.isFunction)(parent) || (0, _index$3.isCatchClause)(parent))) {
    return false;
  }
  if ((0, _index$3.isPattern)(node) && ((0, _index$3.isFunction)(parent) || (0, _index$3.isCatchClause)(parent))) {
    return true;
  }
  return (0, _index$3.isScopable)(node);
}

var isSpecifierDefault$1 = {};

Object.defineProperty(isSpecifierDefault$1, "__esModule", {
  value: true
});
isSpecifierDefault$1.default = isSpecifierDefault;
var _index$2 = generated$3;
function isSpecifierDefault(specifier) {
  return (0, _index$2.isImportDefaultSpecifier)(specifier) || (0, _index$2.isIdentifier)(specifier.imported || specifier.exported, {
    name: "default"
  });
}

var isValidES3Identifier$1 = {};

Object.defineProperty(isValidES3Identifier$1, "__esModule", {
  value: true
});
isValidES3Identifier$1.default = isValidES3Identifier;
var _isValidIdentifier = isValidIdentifier$1;
const RESERVED_WORDS_ES3_ONLY = new Set(["abstract", "boolean", "byte", "char", "double", "enum", "final", "float", "goto", "implements", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "synchronized", "throws", "transient", "volatile"]);
function isValidES3Identifier(name) {
  return (0, _isValidIdentifier.default)(name) && !RESERVED_WORDS_ES3_ONLY.has(name);
}

var isVar$1 = {};

Object.defineProperty(isVar$1, "__esModule", {
  value: true
});
isVar$1.default = isVar;
var _index$1 = generated$3;
{
  var BLOCK_SCOPED_SYMBOL = Symbol.for("var used to be block scoped");
}
function isVar(node) {
  {
    return (0, _index$1.isVariableDeclaration)(node, {
      kind: "var"
    }) && !node[BLOCK_SCOPED_SYMBOL];
  }
}

var toSequenceExpression$1 = {};

var gatherSequenceExpressions$1 = {};

Object.defineProperty(gatherSequenceExpressions$1, "__esModule", {
  value: true
});
gatherSequenceExpressions$1.default = gatherSequenceExpressions;
var _getBindingIdentifiers = getBindingIdentifiers$1;
var _index = generated$3;
var _index2 = generated$2;
var _productions = productions;
var _cloneNode = cloneNode$1;
function gatherSequenceExpressions(nodes, declars) {
  const exprs = [];
  let ensureLastUndefined = true;
  for (const node of nodes) {
    if (!(0, _index.isEmptyStatement)(node)) {
      ensureLastUndefined = false;
    }
    if ((0, _index.isExpression)(node)) {
      exprs.push(node);
    } else if ((0, _index.isExpressionStatement)(node)) {
      exprs.push(node.expression);
    } else if ((0, _index.isVariableDeclaration)(node)) {
      if (node.kind !== "var") return;
      for (const declar of node.declarations) {
        const bindings = (0, _getBindingIdentifiers.default)(declar);
        for (const key of Object.keys(bindings)) {
          declars.push({
            kind: node.kind,
            id: (0, _cloneNode.default)(bindings[key])
          });
        }
        if (declar.init) {
          exprs.push((0, _index2.assignmentExpression)("=", declar.id, declar.init));
        }
      }
      ensureLastUndefined = true;
    } else if ((0, _index.isIfStatement)(node)) {
      const consequent = node.consequent ? gatherSequenceExpressions([node.consequent], declars) : (0, _productions.buildUndefinedNode)();
      const alternate = node.alternate ? gatherSequenceExpressions([node.alternate], declars) : (0, _productions.buildUndefinedNode)();
      if (!consequent || !alternate) return;
      exprs.push((0, _index2.conditionalExpression)(node.test, consequent, alternate));
    } else if ((0, _index.isBlockStatement)(node)) {
      const body = gatherSequenceExpressions(node.body, declars);
      if (!body) return;
      exprs.push(body);
    } else if ((0, _index.isEmptyStatement)(node)) {
      if (nodes.indexOf(node) === 0) {
        ensureLastUndefined = true;
      }
    } else {
      return;
    }
  }
  if (ensureLastUndefined) {
    exprs.push((0, _productions.buildUndefinedNode)());
  }
  if (exprs.length === 1) {
    return exprs[0];
  } else {
    return (0, _index2.sequenceExpression)(exprs);
  }
}

Object.defineProperty(toSequenceExpression$1, "__esModule", {
  value: true
});
toSequenceExpression$1.default = toSequenceExpression;
var _gatherSequenceExpressions = gatherSequenceExpressions$1;
function toSequenceExpression(nodes, scope) {
  if (!(nodes != null && nodes.length)) return;
  const declars = [];
  const result = (0, _gatherSequenceExpressions.default)(nodes, declars);
  if (!result) return;
  for (const declar of declars) {
    scope.push(declar);
  }
  return result;
}

var hasRequiredLib;

function requireLib () {
	if (hasRequiredLib) return lib$2;
	hasRequiredLib = 1;
	(function (exports) {

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		var _exportNames = {
		  react: true,
		  assertNode: true,
		  createTypeAnnotationBasedOnTypeof: true,
		  createUnionTypeAnnotation: true,
		  createFlowUnionType: true,
		  createTSUnionType: true,
		  cloneNode: true,
		  clone: true,
		  cloneDeep: true,
		  cloneDeepWithoutLoc: true,
		  cloneWithoutLoc: true,
		  addComment: true,
		  addComments: true,
		  inheritInnerComments: true,
		  inheritLeadingComments: true,
		  inheritsComments: true,
		  inheritTrailingComments: true,
		  removeComments: true,
		  ensureBlock: true,
		  toBindingIdentifierName: true,
		  toBlock: true,
		  toComputedKey: true,
		  toExpression: true,
		  toIdentifier: true,
		  toKeyAlias: true,
		  toStatement: true,
		  valueToNode: true,
		  appendToMemberExpression: true,
		  inherits: true,
		  prependToMemberExpression: true,
		  removeProperties: true,
		  removePropertiesDeep: true,
		  removeTypeDuplicates: true,
		  getAssignmentIdentifiers: true,
		  getBindingIdentifiers: true,
		  getOuterBindingIdentifiers: true,
		  getFunctionName: true,
		  traverse: true,
		  traverseFast: true,
		  shallowEqual: true,
		  is: true,
		  isBinding: true,
		  isBlockScoped: true,
		  isImmutable: true,
		  isLet: true,
		  isNode: true,
		  isNodesEquivalent: true,
		  isPlaceholderType: true,
		  isReferenced: true,
		  isScope: true,
		  isSpecifierDefault: true,
		  isType: true,
		  isValidES3Identifier: true,
		  isValidIdentifier: true,
		  isVar: true,
		  matchesPattern: true,
		  validate: true,
		  buildMatchMemberExpression: true,
		  __internal__deprecationWarning: true
		};
		Object.defineProperty(exports, "__internal__deprecationWarning", {
		  enumerable: true,
		  get: function () {
		    return _deprecationWarning.default;
		  }
		});
		Object.defineProperty(exports, "addComment", {
		  enumerable: true,
		  get: function () {
		    return _addComment.default;
		  }
		});
		Object.defineProperty(exports, "addComments", {
		  enumerable: true,
		  get: function () {
		    return _addComments.default;
		  }
		});
		Object.defineProperty(exports, "appendToMemberExpression", {
		  enumerable: true,
		  get: function () {
		    return _appendToMemberExpression.default;
		  }
		});
		Object.defineProperty(exports, "assertNode", {
		  enumerable: true,
		  get: function () {
		    return _assertNode.default;
		  }
		});
		Object.defineProperty(exports, "buildMatchMemberExpression", {
		  enumerable: true,
		  get: function () {
		    return _buildMatchMemberExpression.default;
		  }
		});
		Object.defineProperty(exports, "clone", {
		  enumerable: true,
		  get: function () {
		    return _clone.default;
		  }
		});
		Object.defineProperty(exports, "cloneDeep", {
		  enumerable: true,
		  get: function () {
		    return _cloneDeep.default;
		  }
		});
		Object.defineProperty(exports, "cloneDeepWithoutLoc", {
		  enumerable: true,
		  get: function () {
		    return _cloneDeepWithoutLoc.default;
		  }
		});
		Object.defineProperty(exports, "cloneNode", {
		  enumerable: true,
		  get: function () {
		    return _cloneNode.default;
		  }
		});
		Object.defineProperty(exports, "cloneWithoutLoc", {
		  enumerable: true,
		  get: function () {
		    return _cloneWithoutLoc.default;
		  }
		});
		Object.defineProperty(exports, "createFlowUnionType", {
		  enumerable: true,
		  get: function () {
		    return _createFlowUnionType.default;
		  }
		});
		Object.defineProperty(exports, "createTSUnionType", {
		  enumerable: true,
		  get: function () {
		    return _createTSUnionType.default;
		  }
		});
		Object.defineProperty(exports, "createTypeAnnotationBasedOnTypeof", {
		  enumerable: true,
		  get: function () {
		    return _createTypeAnnotationBasedOnTypeof.default;
		  }
		});
		Object.defineProperty(exports, "createUnionTypeAnnotation", {
		  enumerable: true,
		  get: function () {
		    return _createFlowUnionType.default;
		  }
		});
		Object.defineProperty(exports, "ensureBlock", {
		  enumerable: true,
		  get: function () {
		    return _ensureBlock.default;
		  }
		});
		Object.defineProperty(exports, "getAssignmentIdentifiers", {
		  enumerable: true,
		  get: function () {
		    return _getAssignmentIdentifiers.default;
		  }
		});
		Object.defineProperty(exports, "getBindingIdentifiers", {
		  enumerable: true,
		  get: function () {
		    return _getBindingIdentifiers.default;
		  }
		});
		Object.defineProperty(exports, "getFunctionName", {
		  enumerable: true,
		  get: function () {
		    return _getFunctionName.default;
		  }
		});
		Object.defineProperty(exports, "getOuterBindingIdentifiers", {
		  enumerable: true,
		  get: function () {
		    return _getOuterBindingIdentifiers.default;
		  }
		});
		Object.defineProperty(exports, "inheritInnerComments", {
		  enumerable: true,
		  get: function () {
		    return _inheritInnerComments.default;
		  }
		});
		Object.defineProperty(exports, "inheritLeadingComments", {
		  enumerable: true,
		  get: function () {
		    return _inheritLeadingComments.default;
		  }
		});
		Object.defineProperty(exports, "inheritTrailingComments", {
		  enumerable: true,
		  get: function () {
		    return _inheritTrailingComments.default;
		  }
		});
		Object.defineProperty(exports, "inherits", {
		  enumerable: true,
		  get: function () {
		    return _inherits.default;
		  }
		});
		Object.defineProperty(exports, "inheritsComments", {
		  enumerable: true,
		  get: function () {
		    return _inheritsComments.default;
		  }
		});
		Object.defineProperty(exports, "is", {
		  enumerable: true,
		  get: function () {
		    return _is.default;
		  }
		});
		Object.defineProperty(exports, "isBinding", {
		  enumerable: true,
		  get: function () {
		    return _isBinding.default;
		  }
		});
		Object.defineProperty(exports, "isBlockScoped", {
		  enumerable: true,
		  get: function () {
		    return _isBlockScoped.default;
		  }
		});
		Object.defineProperty(exports, "isImmutable", {
		  enumerable: true,
		  get: function () {
		    return _isImmutable.default;
		  }
		});
		Object.defineProperty(exports, "isLet", {
		  enumerable: true,
		  get: function () {
		    return _isLet.default;
		  }
		});
		Object.defineProperty(exports, "isNode", {
		  enumerable: true,
		  get: function () {
		    return _isNode.default;
		  }
		});
		Object.defineProperty(exports, "isNodesEquivalent", {
		  enumerable: true,
		  get: function () {
		    return _isNodesEquivalent.default;
		  }
		});
		Object.defineProperty(exports, "isPlaceholderType", {
		  enumerable: true,
		  get: function () {
		    return _isPlaceholderType.default;
		  }
		});
		Object.defineProperty(exports, "isReferenced", {
		  enumerable: true,
		  get: function () {
		    return _isReferenced.default;
		  }
		});
		Object.defineProperty(exports, "isScope", {
		  enumerable: true,
		  get: function () {
		    return _isScope.default;
		  }
		});
		Object.defineProperty(exports, "isSpecifierDefault", {
		  enumerable: true,
		  get: function () {
		    return _isSpecifierDefault.default;
		  }
		});
		Object.defineProperty(exports, "isType", {
		  enumerable: true,
		  get: function () {
		    return _isType.default;
		  }
		});
		Object.defineProperty(exports, "isValidES3Identifier", {
		  enumerable: true,
		  get: function () {
		    return _isValidES3Identifier.default;
		  }
		});
		Object.defineProperty(exports, "isValidIdentifier", {
		  enumerable: true,
		  get: function () {
		    return _isValidIdentifier.default;
		  }
		});
		Object.defineProperty(exports, "isVar", {
		  enumerable: true,
		  get: function () {
		    return _isVar.default;
		  }
		});
		Object.defineProperty(exports, "matchesPattern", {
		  enumerable: true,
		  get: function () {
		    return _matchesPattern.default;
		  }
		});
		Object.defineProperty(exports, "prependToMemberExpression", {
		  enumerable: true,
		  get: function () {
		    return _prependToMemberExpression.default;
		  }
		});
		exports.react = void 0;
		Object.defineProperty(exports, "removeComments", {
		  enumerable: true,
		  get: function () {
		    return _removeComments.default;
		  }
		});
		Object.defineProperty(exports, "removeProperties", {
		  enumerable: true,
		  get: function () {
		    return _removeProperties.default;
		  }
		});
		Object.defineProperty(exports, "removePropertiesDeep", {
		  enumerable: true,
		  get: function () {
		    return _removePropertiesDeep.default;
		  }
		});
		Object.defineProperty(exports, "removeTypeDuplicates", {
		  enumerable: true,
		  get: function () {
		    return _removeTypeDuplicates.default;
		  }
		});
		Object.defineProperty(exports, "shallowEqual", {
		  enumerable: true,
		  get: function () {
		    return _shallowEqual.default;
		  }
		});
		Object.defineProperty(exports, "toBindingIdentifierName", {
		  enumerable: true,
		  get: function () {
		    return _toBindingIdentifierName.default;
		  }
		});
		Object.defineProperty(exports, "toBlock", {
		  enumerable: true,
		  get: function () {
		    return _toBlock.default;
		  }
		});
		Object.defineProperty(exports, "toComputedKey", {
		  enumerable: true,
		  get: function () {
		    return _toComputedKey.default;
		  }
		});
		Object.defineProperty(exports, "toExpression", {
		  enumerable: true,
		  get: function () {
		    return _toExpression.default;
		  }
		});
		Object.defineProperty(exports, "toIdentifier", {
		  enumerable: true,
		  get: function () {
		    return _toIdentifier.default;
		  }
		});
		Object.defineProperty(exports, "toKeyAlias", {
		  enumerable: true,
		  get: function () {
		    return _toKeyAlias.default;
		  }
		});
		Object.defineProperty(exports, "toStatement", {
		  enumerable: true,
		  get: function () {
		    return _toStatement.default;
		  }
		});
		Object.defineProperty(exports, "traverse", {
		  enumerable: true,
		  get: function () {
		    return _traverse.default;
		  }
		});
		Object.defineProperty(exports, "traverseFast", {
		  enumerable: true,
		  get: function () {
		    return _traverseFast.default;
		  }
		});
		Object.defineProperty(exports, "validate", {
		  enumerable: true,
		  get: function () {
		    return _validate.default;
		  }
		});
		Object.defineProperty(exports, "valueToNode", {
		  enumerable: true,
		  get: function () {
		    return _valueToNode.default;
		  }
		});
		var _isReactComponent = isReactComponent$1;
		var _isCompatTag = isCompatTag$1;
		var _buildChildren = requireBuildChildren();
		var _assertNode = assertNode$1;
		var _index = generated$1;
		Object.keys(_index).forEach(function (key) {
		  if (key === "default" || key === "__esModule") return;
		  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
		  if (key in exports && exports[key] === _index[key]) return;
		  Object.defineProperty(exports, key, {
		    enumerable: true,
		    get: function () {
		      return _index[key];
		    }
		  });
		});
		var _createTypeAnnotationBasedOnTypeof = createTypeAnnotationBasedOnTypeof$1;
		var _createFlowUnionType = createFlowUnionType$1;
		var _createTSUnionType = createTSUnionType$1;
		var _productions = productions;
		Object.keys(_productions).forEach(function (key) {
		  if (key === "default" || key === "__esModule") return;
		  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
		  if (key in exports && exports[key] === _productions[key]) return;
		  Object.defineProperty(exports, key, {
		    enumerable: true,
		    get: function () {
		      return _productions[key];
		    }
		  });
		});
		var _index2 = generated$2;
		Object.keys(_index2).forEach(function (key) {
		  if (key === "default" || key === "__esModule") return;
		  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
		  if (key in exports && exports[key] === _index2[key]) return;
		  Object.defineProperty(exports, key, {
		    enumerable: true,
		    get: function () {
		      return _index2[key];
		    }
		  });
		});
		var _cloneNode = cloneNode$1;
		var _clone = clone$1;
		var _cloneDeep = cloneDeep$1;
		var _cloneDeepWithoutLoc = cloneDeepWithoutLoc$1;
		var _cloneWithoutLoc = cloneWithoutLoc$1;
		var _addComment = addComment$1;
		var _addComments = addComments$1;
		var _inheritInnerComments = inheritInnerComments$1;
		var _inheritLeadingComments = inheritLeadingComments$1;
		var _inheritsComments = inheritsComments$1;
		var _inheritTrailingComments = inheritTrailingComments$1;
		var _removeComments = removeComments$1;
		var _index3 = generated;
		Object.keys(_index3).forEach(function (key) {
		  if (key === "default" || key === "__esModule") return;
		  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
		  if (key in exports && exports[key] === _index3[key]) return;
		  Object.defineProperty(exports, key, {
		    enumerable: true,
		    get: function () {
		      return _index3[key];
		    }
		  });
		});
		var _index4 = constants;
		Object.keys(_index4).forEach(function (key) {
		  if (key === "default" || key === "__esModule") return;
		  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
		  if (key in exports && exports[key] === _index4[key]) return;
		  Object.defineProperty(exports, key, {
		    enumerable: true,
		    get: function () {
		      return _index4[key];
		    }
		  });
		});
		var _ensureBlock = ensureBlock$1;
		var _toBindingIdentifierName = toBindingIdentifierName$1;
		var _toBlock = toBlock$1;
		var _toComputedKey = toComputedKey$1;
		var _toExpression = toExpression$1;
		var _toIdentifier = toIdentifier$1;
		var _toKeyAlias = toKeyAlias$1;
		var _toStatement = toStatement$1;
		var _valueToNode = valueToNode$1;
		var _index5 = requireDefinitions();
		Object.keys(_index5).forEach(function (key) {
		  if (key === "default" || key === "__esModule") return;
		  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
		  if (key in exports && exports[key] === _index5[key]) return;
		  Object.defineProperty(exports, key, {
		    enumerable: true,
		    get: function () {
		      return _index5[key];
		    }
		  });
		});
		var _appendToMemberExpression = appendToMemberExpression$1;
		var _inherits = inherits$1;
		var _prependToMemberExpression = requirePrependToMemberExpression();
		var _removeProperties = removeProperties$1;
		var _removePropertiesDeep = removePropertiesDeep$1;
		var _removeTypeDuplicates = removeTypeDuplicates$3;
		var _getAssignmentIdentifiers = getAssignmentIdentifiers$1;
		var _getBindingIdentifiers = getBindingIdentifiers$1;
		var _getOuterBindingIdentifiers = getOuterBindingIdentifiers$1;
		var _getFunctionName = getFunctionName$1;
		var _traverse = traverse$1;
		Object.keys(_traverse).forEach(function (key) {
		  if (key === "default" || key === "__esModule") return;
		  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
		  if (key in exports && exports[key] === _traverse[key]) return;
		  Object.defineProperty(exports, key, {
		    enumerable: true,
		    get: function () {
		      return _traverse[key];
		    }
		  });
		});
		var _traverseFast = traverseFast$1;
		var _shallowEqual = shallowEqual$1;
		var _is = requireIs();
		var _isBinding = isBinding$1;
		var _isBlockScoped = isBlockScoped$1;
		var _isImmutable = isImmutable$1;
		var _isLet = isLet$1;
		var _isNode = isNode$1;
		var _isNodesEquivalent = isNodesEquivalent$1;
		var _isPlaceholderType = requireIsPlaceholderType();
		var _isReferenced = isReferenced$1;
		var _isScope = isScope$1;
		var _isSpecifierDefault = isSpecifierDefault$1;
		var _isType = requireIsType();
		var _isValidES3Identifier = isValidES3Identifier$1;
		var _isValidIdentifier = isValidIdentifier$1;
		var _isVar = isVar$1;
		var _matchesPattern = matchesPattern$1;
		var _validate = requireValidate();
		var _buildMatchMemberExpression = buildMatchMemberExpression$1;
		var _index6 = generated$3;
		Object.keys(_index6).forEach(function (key) {
		  if (key === "default" || key === "__esModule") return;
		  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
		  if (key in exports && exports[key] === _index6[key]) return;
		  Object.defineProperty(exports, key, {
		    enumerable: true,
		    get: function () {
		      return _index6[key];
		    }
		  });
		});
		var _deprecationWarning = deprecationWarning$1;
		var _toSequenceExpression = toSequenceExpression$1;
		exports.react = {
		  isReactComponent: _isReactComponent.default,
		  isCompatTag: _isCompatTag.default,
		  buildChildren: _buildChildren.default
		};
		{
		  exports.toSequenceExpression = _toSequenceExpression.default;
		}
		if (process.env.BABEL_TYPES_8_BREAKING) {
		  console.warn("BABEL_TYPES_8_BREAKING is not supported anymore. Use the latest Babel 8.0.0 pre-release instead!");
		}

		
	} (lib$2));
	return lib$2;
}

var libExports = requireLib();

function imageAltGeneratorPlugin(babel, options = {}) {
    const { parserOptions = {}, include = [], exclude = [], generateTitle = true, generateAlt = true, fallbackAlt = 'Image', fallbackTitle = 'Image', } = options;
    const parser = new ImageNameParser(parserOptions);
    // Helper function to process img attributes
    const processImgAttributes = (attributes) => {
        let srcAttribute = null;
        let altAttribute = null;
        let titleAttribute = null;
        // Find existing attributes (only JSXAttribute, skip JSXSpreadAttribute)
        attributes.forEach(attr => {
            if (attr.type === 'JSXAttribute') {
                if (attr.name.name === 'src') {
                    srcAttribute = attr;
                }
                else if (attr.name.name === 'alt') {
                    altAttribute = attr;
                }
                else if (attr.name.name === 'title') {
                    titleAttribute = attr;
                }
            }
        });
        // Skip if no src attribute or if src value is not a string literal
        if (!srcAttribute || !srcAttribute.value || srcAttribute.value.type !== 'StringLiteral') {
            return;
        }
        const srcValue = srcAttribute.value.value;
        const generatedText = parser.parseFromSrc(srcValue);
        // Add alt attribute if missing or empty
        if (generateAlt && (!altAttribute ||
            !altAttribute.value ||
            altAttribute.value.type !== 'StringLiteral' ||
            !altAttribute.value.value)) {
            const newAltAttribute = libExports.jsxAttribute(libExports.jsxIdentifier('alt'), libExports.stringLiteral(generatedText || fallbackAlt));
            if (altAttribute) {
                // Update existing alt attribute
                altAttribute.value = newAltAttribute.value;
            }
            else {
                // Add new alt attribute
                attributes.push(newAltAttribute);
            }
        }
        // Add title attribute if missing or empty
        if (generateTitle && (!titleAttribute ||
            !titleAttribute.value ||
            titleAttribute.value.type !== 'StringLiteral' ||
            !titleAttribute.value.value)) {
            const newTitleAttribute = libExports.jsxAttribute(libExports.jsxIdentifier('title'), libExports.stringLiteral(generatedText || fallbackTitle));
            if (titleAttribute) {
                // Update existing title attribute
                titleAttribute.value = newTitleAttribute.value;
            }
            else {
                // Add new title attribute
                attributes.push(newTitleAttribute);
            }
        }
    };
    return {
        name: 'image-alt-title-generator',
        visitor: {
            // Handle both JSXElement (for <img></img>) and JSXOpeningElement (for <img />)
            JSXElement(path) {
                var _a, _b;
                const { node } = path;
                // Only process img tags
                if (node.openingElement.name.type !== 'JSXIdentifier' ||
                    node.openingElement.name.name !== 'img') {
                    return;
                }
                // File path check
                const filename = ((_b = (_a = this.file) === null || _a === void 0 ? void 0 : _a.opts) === null || _b === void 0 ? void 0 : _b.filename) || '';
                if (exclude.length > 0 && exclude.some(pattern => filename.includes(pattern))) {
                    return;
                }
                if (include.length > 0 && !include.some(pattern => filename.includes(pattern))) {
                    return;
                }
                processImgAttributes(node.openingElement.attributes);
            },
            // Handle self-closing img tags (<img />)
            JSXOpeningElement(path) {
                var _a, _b;
                const { node } = path;
                // Only process img tags
                if (node.name.type !== 'JSXIdentifier' || node.name.name !== 'img') {
                    return;
                }
                // File path check
                const filename = ((_b = (_a = this.file) === null || _a === void 0 ? void 0 : _a.opts) === null || _b === void 0 ? void 0 : _b.filename) || '';
                if (exclude.length > 0 && exclude.some(pattern => filename.includes(pattern))) {
                    return;
                }
                if (include.length > 0 && !include.some(pattern => filename.includes(pattern))) {
                    return;
                }
                processImgAttributes(node.attributes);
            }
        }
    };
}

function imageAltGeneratorLoader(source, sourceMap) {
    const options = this.getOptions() || {};
    const { parserOptions = {}, generateTitle = true, generateAlt = true, fallbackAlt = 'Image', fallbackTitle = 'Image', } = options;
    const parser = new ImageNameParser(parserOptions);
    // Find and replace img tags using simple regex
    const imgTagRegex = /<img([^>]*?)>/g;
    const processedSource = source.replace(imgTagRegex, (match, attributes) => {
        var _a, _b;
        // Find src attribute
        const srcMatch = attributes.match(/src=["']([^"']+)["']/);
        if (!srcMatch) {
            return match; // Don't modify if no src
        }
        const srcValue = srcMatch[1];
        const generatedText = parser.parseFromSrc(srcValue);
        let newAttributes = attributes;
        // Alt attribute check
        const hasAlt = /alt=["']([^"']*)["']/.test(attributes);
        const altValue = ((_a = attributes.match(/alt=["']([^"']*)["']/)) === null || _a === void 0 ? void 0 : _a[1]) || '';
        if (generateAlt && (!hasAlt || !altValue)) {
            const newAlt = generatedText || fallbackAlt;
            if (hasAlt) {
                // Update existing alt
                newAttributes = newAttributes.replace(/alt=["']([^"']*)["']/, `alt="${newAlt}"`);
            }
            else {
                // Add new alt
                newAttributes += ` alt="${newAlt}"`;
            }
        }
        // Title attribute check
        const hasTitle = /title=["']([^"']*)["']/.test(attributes);
        const titleValue = ((_b = attributes.match(/title=["']([^"']*)["']/)) === null || _b === void 0 ? void 0 : _b[1]) || '';
        if (generateTitle && (!hasTitle || !titleValue)) {
            const newTitle = generatedText || fallbackTitle;
            if (hasTitle) {
                // Update existing title
                newAttributes = newAttributes.replace(/title=["']([^"']*)["']/, `title="${newTitle}"`);
            }
            else {
                // Add new title
                newAttributes += ` title="${newTitle}"`;
            }
        }
        return `<img${newAttributes}>`;
    });
    return processedSource;
}

function imageAltGeneratorVitePlugin(options = {}) {
    const { parserOptions = {}, include = [], exclude = [], generateTitle = true, generateAlt = true, fallbackAlt = 'Image', fallbackTitle = 'Image', } = options;
    const parser = new ImageNameParser(parserOptions);
    return {
        name: 'image-alt-title-generator',
        enforce: 'pre',
        transform(code, id) {
            // Process JSX/TSX files and HTML files
            if (!id.match(/\.(jsx?|tsx?|html|vue|svelte)$/)) {
                return null;
            }
            // File filtering
            if (exclude.length > 0 && exclude.some(pattern => id.includes(pattern))) {
                return null;
            }
            if (include.length > 0 && !include.some(pattern => id.includes(pattern))) {
                return null;
            }
            // Find and replace img tags (both <img> and <img />)
            const imgTagRegex = /<img([^>]*?)(\/?)>/g;
            let modified = false;
            let newCode = code;
            newCode = code.replace(imgTagRegex, (match, attributes, selfClosing) => {
                var _a, _b;
                // Find src attribute
                const srcMatch = attributes.match(/src=["']([^"']+)["']/);
                if (!srcMatch) {
                    return match; // Don't modify if no src
                }
                const srcValue = srcMatch[1];
                const generatedText = parser.parseFromSrc(srcValue);
                let newAttributes = attributes;
                // Alt attribute check
                const hasAlt = /alt=["']([^"']*)["']/.test(attributes);
                const altValue = ((_a = attributes.match(/alt=["']([^"']*)["']/)) === null || _a === void 0 ? void 0 : _a[1]) || '';
                if (generateAlt && (!hasAlt || !altValue)) {
                    const newAlt = generatedText || fallbackAlt;
                    if (hasAlt) {
                        // Update existing alt (only if empty)
                        newAttributes = newAttributes.replace(/alt=["']([^"']*)["']/, `alt="${newAlt}"`);
                    }
                    else {
                        // Add new alt
                        newAttributes += ` alt="${newAlt}"`;
                    }
                    modified = true;
                }
                // Title attribute check
                const hasTitle = /title=["']([^"']*)["']/.test(attributes);
                const titleValue = ((_b = attributes.match(/title=["']([^"']*)["']/)) === null || _b === void 0 ? void 0 : _b[1]) || '';
                if (generateTitle && (!hasTitle || !titleValue)) {
                    const newTitle = generatedText || fallbackTitle;
                    if (hasTitle) {
                        // Update existing title (only if empty)
                        newAttributes = newAttributes.replace(/title=["']([^"']*)["']/, `title="${newTitle}"`);
                    }
                    else {
                        // Add new title
                        newAttributes += ` title="${newTitle}"`;
                    }
                    modified = true;
                }
                // Preserve self-closing syntax
                return `<img${newAttributes}${selfClosing}>`;
            });
            return modified ? { code: newCode, map: null } : null;
        }
    };
}

// Components (React-specific)
// Default exports - this allows both named and default imports
const webImageAltGenerator = {
    SmartImage,
    useImageAlt,
    ImageNameParser,
    defaultParser,
    babelPlugin: imageAltGeneratorPlugin,
    webpackLoader: imageAltGeneratorLoader,
    vitePlugin: imageAltGeneratorVitePlugin,
};

export { ImageNameParser, SmartImage, imageAltGeneratorPlugin as babelPlugin, webImageAltGenerator as default, defaultParser, imageAltGeneratorVitePlugin as imageAltGenerator, useImageAlt, imageAltGeneratorVitePlugin as vitePlugin, imageAltGeneratorLoader as webpackLoader };
//# sourceMappingURL=index.esm.js.map
