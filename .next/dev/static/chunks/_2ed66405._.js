(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/MarkdownEditor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MarkdownEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function MarkdownEditor({ value, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "editor",
                className: "text-white w-fit bg-gray-800 rounded-lg rounded-b-none py-1 px-2",
                children: "Markdown.md"
            }, void 0, false, {
                fileName: "[project]/app/components/MarkdownEditor.tsx",
                lineNumber: 9,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                id: "editor",
                value: value,
                onChange: (e)=>onChange(e.target.value),
                className: "w-full h-full p-4 bg-gray-800 rounded-lg rounded-tl-none text-white focus:outline-none font-mono text-sm resize-none",
                spellCheck: "false",
                placeholder: "Type your code here"
            }, void 0, false, {
                fileName: "[project]/app/components/MarkdownEditor.tsx",
                lineNumber: 12,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/MarkdownEditor.tsx",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
_c = MarkdownEditor;
var _c;
__turbopack_context__.k.register(_c, "MarkdownEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$markdown$2d$to$2d$jsx$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/markdown-to-jsx/dist/index.modern.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MarkdownEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/MarkdownEditor.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const MarkdownContent = ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$markdown$2d$to$2d$jsx$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        options: {
            overrides: {
                img: {
                    component: 'img',
                    props: {
                        className: 'max-w-full h-auto',
                        loading: 'lazy'
                    }
                },
                p: {
                    component: 'p',
                    props: {
                        className: 'leading-relaxed'
                    }
                },
                h1: {
                    component: 'h1',
                    props: {
                        className: 'text-3xl font-bold'
                    }
                },
                h2: {
                    component: 'h2',
                    props: {
                        className: 'text-2xl font-bold'
                    }
                },
                h3: {
                    component: 'h3',
                    props: {
                        className: 'text-xl font-bold'
                    }
                },
                ul: {
                    component: 'ul',
                    props: {
                        className: 'list-disc pl-6'
                    }
                },
                ol: {
                    component: 'ol',
                    props: {
                        className: 'list-decimal pl-6'
                    }
                },
                li: {
                    component: 'li'
                },
                a: {
                    component: 'a',
                    props: {
                        className: 'text-blue-400 hover:underline'
                    }
                },
                blockquote: {
                    component: 'blockquote',
                    props: {
                        className: 'border-l-4 border-gray-500 pl-4 italic'
                    }
                },
                code: {
                    component: 'code',
                    props: {
                        className: 'bg-gray-700 px-1 rounded text-sm'
                    }
                },
                pre: {
                    component: 'pre',
                    props: {
                        className: 'bg-gray-800 p-4 rounded-lg overflow-x-auto'
                    }
                }
            }
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c = MarkdownContent;
function Home() {
    _s();
    const [markdown, setMarkdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('# Hello World\n\nStart typing markdown your here');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4",
                children: "Markdown Visualizer"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 48,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 grid grid-cols-1 md:grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MarkdownEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        value: markdown,
                        onChange: setMarkdown
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 52,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-gray-800 rounded-lg overflow-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-semibold mb-2",
                                children: "Preview"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 54,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "prose prose-invert max-w-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MarkdownContent, {
                                    children: markdown
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 56,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 55,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 53,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 51,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 47,
        columnNumber: 9
    }, this);
}
_s(Home, "TcYfMekJZE4k/LZsJmlF5tz+B9U=");
_c1 = Home;
var _c, _c1;
__turbopack_context__.k.register(_c, "MarkdownContent");
__turbopack_context__.k.register(_c1, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
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
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
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
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
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
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
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
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/markdown-to-jsx/dist/index.modern.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RuleType",
    ()=>c,
    "compiler",
    ()=>Kn,
    "default",
    ()=>Xn,
    "sanitizer",
    ()=>jn,
    "slugify",
    ()=>Rn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function t() {
    return t = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", t.apply(null, arguments);
}
const r = [
    "strong",
    "em",
    "del",
    "mark"
], e = [
    [
        "**",
        r[0]
    ],
    [
        "__",
        r[0]
    ],
    [
        "~~",
        r[2]
    ],
    [
        "==",
        r[3]
    ],
    [
        "*",
        "em"
    ],
    [
        "_",
        "em"
    ]
];
function o(n, t) {
    for(var r = 1, e = t + 1; e < n.length && r > 0;)"\\" !== n[e] ? ("[" === n[e] && r++, "]" === n[e] && r--, e++) : e += 2;
    if (0 === r && e < n.length && ("(" === n[e] || "[" === n[e])) {
        var o = "(" === n[e] ? ")" : "]", u = 1;
        for(e++; e < n.length && u > 0;)"\\" !== n[e] ? ("(" === n[e] && ")" === o && u++, n[e] === o && u--, e++) : e += 2;
        if (0 === u) return e;
    }
    return -1;
}
function u(n, t) {
    if (!t || !t.inline && !t.simple) return null;
    var r = n[0];
    if ("*" !== r && "_" !== r && "~" !== r && "=" !== r) return null;
    for(var u = "", a = 0, c = "", i = 0; i < 6; i++){
        var l = e[i][0];
        if (n.startsWith(l) && n.length >= 2 * l.length) {
            u = l, a = l.length, c = e[i][1];
            break;
        }
    }
    if (!u) return null;
    for(var f = a, s = !1, _ = !1, d = "", p = 0, y = "", h = !1, m = ""; f < n.length;){
        var g = n[f];
        if (h) y += g, h = !1, m = g, f++;
        else if ("\\" !== g) if ("`" !== g || 0 !== p) {
            if ("[" === g && !s && 0 === p) {
                var k = o(n, f);
                if (-1 !== k) {
                    y += n.slice(f, k), f = k, m = n[k - 1];
                    continue;
                }
            }
            if (_) y += g, d ? g === d && (d = "") : '"' === g || "'" === g ? d = g : ">" === g && (_ = !1), m = g, f++;
            else if ("<" !== g || s) {
                if ("\n" === g && "\n" === m && !s && 0 === p) return null;
                if (!s && 0 === p) {
                    for(var v = 0; f + v < n.length && n[f + v] === u[0];)v++;
                    if (v >= a && (1 !== a || "*" !== u && "_" !== u || n[f - 1] !== u && n[f + 1] !== u)) {
                        var x = [
                            n.slice(0, f + v),
                            c,
                            y + n.slice(f + a, f + v)
                        ];
                        return x.index = 0, x.input = n, x;
                    }
                }
                y += g, m = g, f++;
            } else {
                var q = n[f + 1], b = n.indexOf(">", f);
                if (-1 !== b) {
                    var S = n.slice(f, b + 1).endsWith("/>");
                    "/" === q ? p = Math.max(0, p - 1) : S || p++;
                }
                _ = !0, y += g, m = g, f++;
            }
        } else s = !s, y += g, m = g, f++;
        else y += g, h = !0, m = g, f++;
    }
    return null;
}
const a = [
    "children",
    "options"
], c = {
    blockQuote: "0",
    breakLine: "1",
    breakThematic: "2",
    codeBlock: "3",
    codeFenced: "4",
    codeInline: "5",
    footnote: "6",
    footnoteReference: "7",
    gfmTask: "8",
    heading: "9",
    headingSetext: "10",
    htmlBlock: "11",
    htmlComment: "12",
    htmlSelfClosing: "13",
    image: "14",
    link: "15",
    linkAngleBraceStyleDetector: "16",
    linkBareUrlDetector: "17",
    linkMailtoDetector: "18",
    newlineCoalescer: "19",
    orderedList: "20",
    paragraph: "21",
    ref: "22",
    refImage: "23",
    refLink: "24",
    table: "25",
    tableSeparator: "26",
    text: "27",
    textEscaped: "28",
    textFormatted: "34",
    unorderedList: "30"
}, i = [
    "allowFullScreen",
    "allowTransparency",
    "autoComplete",
    "autoFocus",
    "autoPlay",
    "cellPadding",
    "cellSpacing",
    "charSet",
    "classId",
    "colSpan",
    "contentEditable",
    "contextMenu",
    "crossOrigin",
    "encType",
    "formAction",
    "formEncType",
    "formMethod",
    "formNoValidate",
    "formTarget",
    "frameBorder",
    "hrefLang",
    "inputMode",
    "keyParams",
    "keyType",
    "marginHeight",
    "marginWidth",
    "maxLength",
    "mediaGroup",
    "minLength",
    "noValidate",
    "radioGroup",
    "readOnly",
    "rowSpan",
    "spellCheck",
    "srcDoc",
    "srcLang",
    "srcSet",
    "tabIndex",
    "useMap"
].reduce((n, t)=>(n[t.toLowerCase()] = t, n), {
    class: "className",
    for: "htmlFor"
}), l = {
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    nbsp: " ",
    quot: "“"
}, f = [
    "style",
    "script",
    "pre"
], s = [
    "src",
    "href",
    "data",
    "formAction",
    "srcDoc",
    "action"
], _ = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi, d = /\n{2,}$/, p = /^(\s*>[\s\S]*?)(?=\n\n|$)/, y = /^ *> ?/gm, h = /^(?:\[!([^\]]*)\]\n)?([\s\S]*)/, m = /^ {2,}\n/, g = /^(?:([-*_])( *\1){2,}) *(?:\n *)+\n/, k = /^(?: {1,3})?(`{3,}|~{3,}) *(\S+)? *([^\n]*?)?\n([\s\S]*?)(?:\1\n?|$)/, v = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/, x = /^(`+)((?:\\`|(?!\1)`|[^`])+)\1/, q = /^(?:\n *)*\n/, b = /\r\n?/g, S = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/, $ = /^\[\^([^\]]+)]/, z = /\f/g, A = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/, E = /^\[(x|\s)\]/, R = /^(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, w = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, L = /^([^\n]+)\n *(=|-)\2{2,} *\n/, B = /^<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>/i;
function C(n) {
    const t = B.exec(n);
    if (!t) return null;
    const r = t[1], e = r.toLowerCase(), o = e.length + 1;
    let u = t[0].length;
    "\n" === n[u] && u++;
    const a = u;
    let c = u, i = 1;
    const l = n.length;
    for(; i > 0;){
        const t = n.indexOf("<", u);
        if (-1 === t) return null;
        let a = -1, f = -1;
        if ("/" === n[t + 1]) f = t;
        else if (n[t + 1] === e[0] || n[t + 1] === r[0]) {
            let u = !0;
            for(let o = 0; o < e.length; o++){
                const a = n[t + 1 + o];
                if (a !== e[o] && a !== r[o]) {
                    u = !1;
                    break;
                }
            }
            !u || " " !== n[t + o] && ">" !== n[t + o] || (a = t);
        }
        if (-1 !== a || -1 !== f) if (-1 !== a && (-1 === f || a < f)) u = a + o + 1, i++;
        else {
            let t = f + 2;
            for(; t < l;){
                const r = n[t];
                if (" " !== r && "\t" !== r && "\n" !== r && "\r" !== r) break;
                t++;
            }
            if (t + e.length > l) return null;
            let o = !0;
            for(let u = 0; u < e.length; u++){
                const a = n[t + u];
                if (a !== e[u] && a !== r[u]) {
                    o = !1;
                    break;
                }
            }
            if (!o) {
                u = t;
                continue;
            }
            for(t += e.length; t < l;){
                const r = n[t];
                if (" " !== r && "\t" !== r && "\n" !== r && "\r" !== r) break;
                t++;
            }
            if (t >= l || ">" !== n[t]) {
                u = t;
                continue;
            }
            c = f, u = t + 1, i--;
        }
        else u = t + 1;
    }
    let f = 0;
    for(; u + f < l && "\n" === n[u + f];)f++;
    return [
        n.slice(0, u + f),
        r,
        t[2],
        n.slice(a, c)
    ];
}
const I = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, M = /^<!--[\s\S]*?(?:-->)/, T = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/, F = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i, O = /^\{.*\}$/, P = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, j = /^<([^ >]+[:@\/][^ >]+)>/, D = /-([a-z])?/gi, Z = /^(\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/, N = /^[^\n]+(?:  \n|\n{2,})/, G = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/, U = /^!\[([^\]]*)\] ?\[([^\]]*)\]/, V = /^\[([^\]]*)\] ?\[([^\]]*)\]/, H = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/, Q = /\t/g, W = /(^ *\||\| *$)/g, J = /^ *:-+: *$/, K = /^ *:-+ *$/, X = /^ *-+: *$/, Y = /^(:[a-zA-Z0-9-_]+:)/, nn = /^\\([^0-9A-Za-z\s])/, tn = /\\([^0-9A-Za-z\s])/g, rn = /^[\s\S](?:(?!  \n|[0-9]\.|http)[^=*_~\-\n:<`\\\[!])*/, en = /^\n+/, on = /^([ \t]*)/, un = /(?:^|\n)( *)$/, an = "(?:\\d+\\.)", cn = "(?:[*+-])";
function ln(n) {
    return "( *)(" + (1 === n ? an : cn) + ") +";
}
const fn = ln(1), sn = ln(2);
function _n(n) {
    return RegExp("^" + (1 === n ? fn : sn));
}
const dn = _n(1), pn = _n(2);
function yn(n) {
    return RegExp("^" + (1 === n ? fn : sn) + "[^\\n]*(?:\\n(?!\\1" + (1 === n ? an : cn) + " )[^\\n]*)*(\\n|$)", "gm");
}
const hn = yn(1), mn = yn(2);
function gn(n) {
    const t = 1 === n ? an : cn;
    return RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)");
}
const kn = gn(1), vn = gn(2);
function xn(n, t) {
    const r = 1 === t, e = r ? kn : vn, o = r ? hn : mn, u = r ? dn : pn;
    return {
        t: (n)=>u.test(n),
        o: In(function(n, t) {
            const r = un.exec(t.prevCapture);
            return r && (t.list || !t.inline && !t.simple) ? e.exec(n = r[1] + n) : null;
        }),
        u: 1,
        i (n, t, e) {
            const a = r ? +n[2] : void 0, c = n[0].replace(d, "\n").match(o), i = u.exec(c[0]), l = RegExp("^ {1," + (i ? i[0].length : 0) + "}", "gm");
            let f = !1;
            return {
                items: c.map(function(n, r) {
                    const o = n.replace(l, "").replace(u, ""), a = r === c.length - 1, i = An(o, "\n\n") || a && f;
                    f = i;
                    const s = e.inline, _ = e.list;
                    let d;
                    e.list = !0, i ? (e.inline = !1, d = $n(o) + "\n\n") : (e.inline = !0, d = $n(o));
                    const p = t(d, e);
                    return e.inline = s, e.list = _, p;
                }),
                ordered: r,
                start: a
            };
        }
    };
}
const qn = RegExp("^\\[((?:\\[[^\\[\\]]*(?:\\[[^\\[\\]]*\\][^\\[\\]]*)*\\]|[^\\[\\]])*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"), bn = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/;
function Sn(n) {
    return "string" == typeof n;
}
function $n(n) {
    let t = n.length;
    for(; t > 0 && n[t - 1] <= " ";)t--;
    return n.slice(0, t);
}
function zn(n, t) {
    return n.startsWith(t);
}
function An(n, t) {
    return -1 !== n.indexOf(t);
}
function En(n, t, r) {
    if (Array.isArray(r)) {
        for(let t = 0; t < r.length; t++)if (zn(n, r[t])) return !0;
        return !1;
    }
    return r(n, t);
}
function Rn(n) {
    return n.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase();
}
function wn(n) {
    return X.test(n) ? "right" : J.test(n) ? "center" : K.test(n) ? "left" : null;
}
function Ln(n, t, r, e) {
    const o = r.inTable;
    r.inTable = !0;
    let u = [
        []
    ], a = "";
    function c() {
        if (!a) return;
        const n = u[u.length - 1];
        n.push.apply(n, t(a, r)), a = "";
    }
    return n.trim().split(/(`[^`]*`|\\\||\|)/).filter(Boolean).forEach((n, t, r)=>{
        "|" === n.trim() && (c(), e) ? 0 !== t && t !== r.length - 1 && u.push([]) : a += n;
    }), c(), r.inTable = o, u;
}
function Bn(n, t, r) {
    r.inline = !0;
    const e = n[2] ? n[2].replace(W, "").split("|").map(wn) : [], o = n[3] ? function(n, t, r) {
        return n.trim().split("\n").map(function(n) {
            return Ln(n, t, r, !0);
        });
    }(n[3], t, r) : [], u = Ln(n[1], t, r, !!o.length);
    return r.inline = !1, o.length ? {
        align: e,
        cells: o,
        header: u,
        type: "25"
    } : {
        children: u,
        type: "21"
    };
}
function Cn(n, t) {
    return null == n.align[t] ? {} : {
        textAlign: n.align[t]
    };
}
function In(n) {
    return n.inline = 1, n;
}
function Mn(n) {
    return In(function(t, r) {
        return r.inline ? n.exec(t) : null;
    });
}
function Tn(n) {
    return In(function(t, r) {
        return r.inline || r.simple ? n.exec(t) : null;
    });
}
function Fn(n) {
    return function(t, r) {
        return r.inline || r.simple ? null : n.exec(t);
    };
}
function On(n) {
    return In(function(t) {
        return n.exec(t);
    });
}
const Pn = /(javascript|vbscript|data(?!:image)):/i;
function jn(n) {
    try {
        const t = decodeURIComponent(n).replace(/[^A-Za-z0-9/:]/g, "");
        if (Pn.test(t)) return null;
    } catch (n) {
        return null;
    }
    return n;
}
function Dn(n) {
    return n ? n.replace(tn, "$1") : n;
}
function Zn(n, t, r) {
    const e = r.inline || !1, o = r.simple || !1;
    r.inline = !0, r.simple = !0;
    const u = n(t, r);
    return r.inline = e, r.simple = o, u;
}
function Nn(n, t, r) {
    const e = r.inline || !1, o = r.simple || !1;
    r.inline = !1, r.simple = !0;
    const u = n(t, r);
    return r.inline = e, r.simple = o, u;
}
function Gn(n, t, r) {
    const e = r.inline || !1;
    r.inline = !1;
    const o = n(t, r);
    return r.inline = e, o;
}
const Un = (n, t, r)=>({
        children: Zn(t, n[2], r)
    });
function Vn() {
    return {};
}
function Hn(...n) {
    return n.filter(Boolean).join(" ");
}
function Qn(n, t, r) {
    let e = n;
    const o = t.split(".");
    for(; o.length && (e = e[o[0]], void 0 !== e);)o.shift();
    return e || r;
}
function Wn(n, t, r, e) {
    if (!t || !t.trim()) return null;
    const o = t.match(_);
    return o ? o.reduce(function(t, o) {
        const u = o.indexOf("=");
        if (-1 !== u) {
            const a = (function(n) {
                return -1 !== n.indexOf("-") && null === n.match(T) && (n = n.replace(D, function(n, t) {
                    return t.toUpperCase();
                })), n;
            })(o.slice(0, u)).trim(), c = i[a] || a;
            if ("ref" === c) return t;
            const l = t[c] = function(n, t, r, e) {
                return "style" === t ? (function(n) {
                    const t = [];
                    if (!n) return t;
                    let r = "", e = 0, o = "";
                    for(let u = 0; u < n.length; u++){
                        const a = n[u];
                        if ('"' === a || "'" === a) o ? a === o && (o = "", e--) : (o = a, e++);
                        else if ("(" === a && r.endsWith("url")) e++;
                        else if (")" === a && e > 0) e--;
                        else if (";" === a && 0 === e) {
                            const n = r.indexOf(":");
                            n > 0 && t.push([
                                r.slice(0, n).trim(),
                                r.slice(n + 1).trim()
                            ]), r = "";
                            continue;
                        }
                        r += a;
                    }
                    const u = r.indexOf(":");
                    return u > 0 && t.push([
                        r.slice(0, u).trim(),
                        r.slice(u + 1).trim()
                    ]), t;
                })(r).reduce(function(t, [r, o]) {
                    return t[r.replace(/(-[a-z])/g, (n)=>n[1].toUpperCase())] = e(o, n, r), t;
                }, {}) : -1 !== s.indexOf(t) ? e(Dn(r), n, t) : (r.match(O) && (r = Dn(r.slice(1, r.length - 1))), "true" === r || "false" !== r && r);
            }(n, a, function(n) {
                const t = n[0];
                return ('"' === t || "'" === t) && n.length >= 2 && n[n.length - 1] === t ? n.slice(1, -1) : n;
            }(o.slice(u + 1).trim()), r);
            "string" == typeof l && (B.test(l) || F.test(l)) && (t[c] = e(l.trim()));
        } else "style" !== o && (t[i[o] || o] = !0);
        return t;
    }, {}) : null;
}
function Jn(n, t) {
    for(let r = 0; r < n.length; r++)if (n[r].test(t)) return !0;
    return !1;
}
function Kn(r = "", e = {}) {
    e.overrides = e.overrides || {}, e.namedCodesToUnicode = e.namedCodesToUnicode ? t({}, l, e.namedCodesToUnicode) : l;
    const o = e.slugify || Rn, a = e.sanitizer || jn, c = e.createElement || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"], i = [
        p,
        k,
        v,
        e.enforceAtxHeadings ? w : R,
        L,
        Z,
        kn,
        vn
    ], s = [
        ...i,
        N,
        B,
        M,
        F
    ];
    function _(n, r, ...o) {
        const u = Qn(e.overrides, n + ".props", {});
        return c(function(n, t) {
            const r = Qn(t, n);
            return r ? "function" == typeof r || "object" == typeof r && "render" in r ? r : Qn(t, n + ".component", n) : n;
        }(n, e.overrides), t({}, r, u, {
            className: Hn(null == r ? void 0 : r.className, u.className) || void 0
        }), ...o);
    }
    function d(n) {
        n = n.replace(A, "");
        let r = !1;
        e.forceInline ? r = !0 : e.forceBlock || (r = !1 === H.test(n));
        const u = W(r ? n : $n(n).replace(en, "") + "\n\n", {
            inline: r
        });
        if (e.ast) return u;
        const a = J(u);
        for(; Sn(a[a.length - 1]) && !a[a.length - 1].trim();)a.pop();
        if (T.length && a.push(_("footer", {
            key: "footer"
        }, T.map(function(n) {
            return _("div", {
                id: o(n.identifier, Rn),
                key: n.identifier
            }, n.identifier, J(W(n.footnote, {
                inline: !0
            })));
        }))), null === e.wrapper) return a;
        const i = e.wrapper || (r ? "span" : "div");
        let l;
        if (a.length > 1 || e.forceWrapper) l = a;
        else {
            if (1 === a.length) return l = a[0], "string" == typeof l ? _("span", {
                key: "outer"
            }, l) : l;
            l = null;
        }
        return c(i, t({
            key: "outer"
        }, e.wrapperProps), l);
    }
    const T = [], O = {}, D = {
        0: {
            t: [
                ">"
            ],
            o: Fn(p),
            u: 1,
            i (n, t, r) {
                const [, e, o] = n[0].replace(y, "").match(h);
                return {
                    alert: e,
                    children: t(o, r)
                };
            }
        },
        1: {
            t: [
                "  "
            ],
            o: Mn(m),
            u: 1,
            i: Vn
        },
        2: {
            t: function(n, t) {
                if (t.inline || t.simple) return !1;
                var r = n[0];
                return "-" === r || "*" === r || "_" === r;
            },
            o: Fn(g),
            u: 1,
            i: Vn
        },
        3: {
            t: [
                "    "
            ],
            o: Fn(v),
            u: 0,
            i: (n)=>({
                    lang: void 0,
                    text: Dn($n(n[0].replace(/^ {4}/gm, "")))
                })
        },
        4: {
            t: [
                "```",
                "~~~"
            ],
            o: Fn(k),
            u: 0,
            i: (n)=>({
                    attrs: Wn("code", n[3] || "", a, d),
                    lang: n[2] || void 0,
                    text: n[4],
                    type: "3"
                })
        },
        5: {
            t: [
                "`"
            ],
            o: Tn(x),
            u: 3,
            i: (n)=>({
                    text: Dn(n[2])
                })
        },
        6: {
            t: [
                "[^"
            ],
            o: Fn(S),
            u: 0,
            i: (n)=>(T.push({
                    footnote: n[2],
                    identifier: n[1]
                }), {})
        },
        7: {
            t: [
                "[^"
            ],
            o: Mn($),
            u: 1,
            i: (n)=>({
                    target: "#" + o(n[1], Rn),
                    text: n[1]
                })
        },
        8: {
            t: [
                "[ ]",
                "[x]"
            ],
            o: Mn(E),
            u: 1,
            i: (n)=>({
                    completed: "x" === n[1].toLowerCase()
                })
        },
        9: {
            t: [
                "#"
            ],
            o: Fn(e.enforceAtxHeadings ? w : R),
            u: 1,
            i: (n, t, r)=>({
                    children: Zn(t, n[2], r),
                    id: o(n[2], Rn),
                    level: n[1].length
                })
        },
        10: {
            t: (n)=>{
                const t = n.indexOf("\n");
                return t > 0 && t < n.length - 1 && ("=" === n[t + 1] || "-" === n[t + 1]);
            },
            o: Fn(L),
            u: 1,
            i: (n, t, r)=>({
                    children: Zn(t, n[1], r),
                    level: "=" === n[2] ? 1 : 2,
                    type: "9"
                })
        },
        11: {
            t: [
                "<"
            ],
            o: In(C),
            u: 1,
            i (n, t, r) {
                const [, e] = n[3].match(on), o = RegExp("^" + e, "gm"), u = n[3].replace(o, ""), c = Jn(s, u) ? Gn : Zn, i = n[1].toLowerCase(), l = -1 !== f.indexOf(i), _ = (l ? i : n[1]).trim(), p = {
                    attrs: Wn(_, n[2], a, d),
                    noInnerParse: l,
                    tag: _
                };
                if (r.inAnchor = r.inAnchor || "a" === i, l) p.text = n[3];
                else {
                    const n = r.inHTML;
                    r.inHTML = !0, p.children = c(t, u, r), r.inHTML = n;
                }
                return r.inAnchor = !1, p;
            }
        },
        13: {
            t: [
                "<"
            ],
            o: On(F),
            u: 1,
            i (n) {
                const t = n[1].trim();
                return {
                    attrs: Wn(t, n[2] || "", a, d),
                    tag: t
                };
            }
        },
        12: {
            t: [
                "\x3c!--"
            ],
            o: On(M),
            u: 1,
            i: ()=>({})
        },
        14: {
            t: [
                "!["
            ],
            o: Tn(bn),
            u: 1,
            i: (n)=>({
                    alt: Dn(n[1]),
                    target: Dn(n[2]),
                    title: Dn(n[3])
                })
        },
        15: {
            t: [
                "["
            ],
            o: Mn(qn),
            u: 3,
            i: (n, t, r)=>({
                    children: Nn(t, n[1], r),
                    target: Dn(n[2]),
                    title: Dn(n[3])
                })
        },
        16: {
            t: function(n, t) {
                return !(!t.inline || t.inAnchor) && "<" === n[0] && (An(n, ":") || An(n, "@") || An(n, "/"));
            },
            o: Mn(j),
            u: 0,
            i (n) {
                let t = n[1], r = !1;
                return An(t, "@") && !An(t, "//") && (r = !0, t = t.replace("mailto:", "")), {
                    children: [
                        {
                            text: t,
                            type: "27"
                        }
                    ],
                    target: r ? "mailto:" + t : t,
                    type: "15"
                };
            }
        },
        17: {
            t: (n, t)=>!t.inAnchor && !e.disableAutoLink && zn(n, "http"),
            o: Mn(P),
            u: 0,
            i: (n)=>({
                    children: [
                        {
                            text: n[1],
                            type: "27"
                        }
                    ],
                    target: n[1],
                    title: void 0,
                    type: "15"
                })
        },
        20: xn(0, 1),
        30: xn(0, 2),
        19: {
            t: [
                "\n"
            ],
            o: Fn(q),
            u: 3,
            i: Vn
        },
        21: {
            t: function(n, t) {
                return !t.inline && !t.simple;
            },
            o: In(function(n, t) {
                if (t.inline || t.simple || t.inHTML && !An(n, "\n\n") && !An(t.prevCapture, "\n\n")) return null;
                let r = "", e = 0;
                for(;;){
                    const t = n.indexOf("\n", e), o = n.slice(e, -1 === t ? void 0 : t + 1), u = n[e];
                    if ((">" === u || "#" === u || "|" === u || "`" === u || "~" === u || "*" === u || "-" === u || "_" === u || " " === u) && Jn(i, o)) break;
                    if (r += o, -1 === t || !o.trim()) break;
                    e = t + 1;
                }
                const o = $n(r);
                return "" === o ? null : [
                    r,
                    ,
                    o
                ];
            }),
            u: 3,
            i: Un
        },
        22: {
            t: [
                "["
            ],
            o: Mn(G),
            u: 0,
            i: (n)=>(O[n[1]] = {
                    target: n[2],
                    title: n[4]
                }, {})
        },
        23: {
            t: [
                "!["
            ],
            o: Tn(U),
            u: 0,
            i: (n)=>({
                    alt: n[1] ? Dn(n[1]) : void 0,
                    ref: n[2]
                })
        },
        24: {
            t: (n)=>"[" === n[0] && !An(n, "]("),
            o: Mn(V),
            u: 0,
            i: (n, t, r)=>({
                    children: t(n[1], r),
                    fallbackChildren: n[0],
                    ref: n[2]
                })
        },
        25: {
            t: [
                "|"
            ],
            o: Fn(Z),
            u: 1,
            i: Bn
        },
        27: {
            o: In(function(n, t) {
                let r;
                return zn(n, ":") && (r = Y.exec(n)), r || rn.exec(n);
            }),
            u: 4,
            i (n) {
                const t = n[0];
                return {
                    text: An(t, "&") ? t.replace(I, (n, t)=>e.namedCodesToUnicode[t] || n) : t
                };
            }
        },
        34: {
            t: [
                "*",
                "_",
                "~",
                "="
            ],
            o: In(u),
            u: 2,
            i: (n, t, r)=>({
                    children: t(n[2], r),
                    tag: n[1]
                })
        },
        28: {
            t: [
                "\\"
            ],
            o: Tn(nn),
            u: 1,
            i: (n)=>({
                    text: n[1],
                    type: "27"
                })
        }
    };
    !0 === e.disableParsingRawHTML && (delete D[11], delete D[13]);
    const W = function(n) {
        var t = Object.keys(n);
        function r(e, o) {
            var u = [];
            if (o.prevCapture = o.prevCapture || "", e.trim()) for(; e;)for(var a = 0; a < t.length;){
                var c = t[a], i = n[c];
                if (!i.t || En(e, o, i.t)) {
                    var l = i.o(e, o);
                    if (l && l[0]) {
                        e = e.substring(l[0].length);
                        var f = i.i(l, r, o);
                        o.prevCapture += l[0], f.type || (f.type = c), u.push(f);
                        break;
                    }
                    a++;
                } else a++;
            }
            return o.prevCapture = "", u;
        }
        return t.sort(function(t, r) {
            return n[t].u - n[r].u || (t < r ? -1 : 1);
        }), function(n, t) {
            return r(function(n) {
                return n.replace(b, "\n").replace(z, "").replace(Q, "    ");
            }(n), t);
        };
    }(D), J = function(n, r, e, o, u) {
        function a(n) {
            return Array.isArray(n) ? n.map((n)=>"text" in n ? n.text : "") : "text" in n ? n.text : "";
        }
        return function c(i, l = {}) {
            const f = (l.renderDepth || 0) + 1;
            if (f > 2500) return a(i);
            l.renderDepth = f;
            try {
                if (Array.isArray(i)) {
                    const n = l.key, t = [];
                    let r = !1;
                    for(let n = 0; n < i.length; n++){
                        l.key = n;
                        const e = c(i[n], l), o = Sn(e);
                        o && r ? t[t.length - 1] += e : null !== e && t.push(e), r = o;
                    }
                    return l.key = n, l.renderDepth = f - 1, t;
                }
                const a = function(a, c, i) {
                    const l = ()=>(function(n, r, e, o, u, a, c) {
                            switch(n.type){
                                case "0":
                                    {
                                        const t = {
                                            key: e.key
                                        };
                                        return n.alert && (t.className = "markdown-alert-" + a(n.alert.toLowerCase(), Rn), n.children.unshift({
                                            attrs: {},
                                            children: [
                                                {
                                                    type: "27",
                                                    text: n.alert
                                                }
                                            ],
                                            noInnerParse: !0,
                                            type: "11",
                                            tag: "header"
                                        })), o("blockquote", t, r(n.children, e));
                                    }
                                case "1":
                                    return o("br", {
                                        key: e.key
                                    });
                                case "2":
                                    return o("hr", {
                                        key: e.key
                                    });
                                case "3":
                                    return o("pre", {
                                        key: e.key
                                    }, o("code", t({}, n.attrs, {
                                        className: n.lang ? "lang-" + n.lang : ""
                                    }), n.text));
                                case "5":
                                    return o("code", {
                                        key: e.key
                                    }, n.text);
                                case "7":
                                    return o("a", {
                                        key: e.key,
                                        href: u(n.target, "a", "href")
                                    }, o("sup", {
                                        key: e.key
                                    }, n.text));
                                case "8":
                                    return o("input", {
                                        checked: n.completed,
                                        key: e.key,
                                        readOnly: !0,
                                        type: "checkbox"
                                    });
                                case "9":
                                    return o("h" + n.level, {
                                        id: n.id,
                                        key: e.key
                                    }, r(n.children, e));
                                case "11":
                                    return o(n.tag, t({
                                        key: e.key
                                    }, n.attrs), n.text || (n.children ? r(n.children, e) : ""));
                                case "13":
                                    return o(n.tag, t({}, n.attrs, {
                                        key: e.key
                                    }));
                                case "14":
                                    return o("img", {
                                        key: e.key,
                                        alt: n.alt || void 0,
                                        title: n.title || void 0,
                                        src: u(n.target, "img", "src")
                                    });
                                case "15":
                                    return o("a", {
                                        key: e.key,
                                        href: u(n.target, "a", "href"),
                                        title: n.title
                                    }, r(n.children, e));
                                case "23":
                                    return c[n.ref] ? o("img", {
                                        key: e.key,
                                        alt: n.alt,
                                        src: u(c[n.ref].target, "img", "src"),
                                        title: c[n.ref].title
                                    }) : null;
                                case "24":
                                    return c[n.ref] ? o("a", {
                                        key: e.key,
                                        href: u(c[n.ref].target, "a", "href"),
                                        title: c[n.ref].title
                                    }, r(n.children, e)) : o("span", {
                                        key: e.key
                                    }, n.fallbackChildren);
                                case "25":
                                    {
                                        const t = n;
                                        return o("table", {
                                            key: e.key
                                        }, o("thead", null, o("tr", null, t.header.map(function(n, u) {
                                            return o("th", {
                                                key: u,
                                                style: Cn(t, u)
                                            }, r(n, e));
                                        }))), o("tbody", null, t.cells.map(function(n, u) {
                                            return o("tr", {
                                                key: u
                                            }, n.map(function(n, u) {
                                                return o("td", {
                                                    key: u,
                                                    style: Cn(t, u)
                                                }, r(n, e));
                                            }));
                                        })));
                                    }
                                case "27":
                                    return n.text;
                                case "34":
                                    return o(n.tag, {
                                        key: e.key
                                    }, r(n.children, e));
                                case "20":
                                case "30":
                                    return o(n.ordered ? "ol" : "ul", {
                                        key: e.key,
                                        start: "20" === n.type ? n.start : void 0
                                    }, n.items.map(function(n, t) {
                                        return o("li", {
                                            key: t
                                        }, r(n, e));
                                    }));
                                case "19":
                                    return "\n";
                                case "21":
                                    return o("p", {
                                        key: e.key
                                    }, r(n.children, e));
                                default:
                                    return null;
                            }
                        })(a, c, i, r, e, o, u);
                    return n ? n(l, a, c, i) : l();
                }(i, c, l);
                return l.renderDepth = f - 1, a;
            } catch (n) {
                if (n instanceof RangeError && n.message.includes("Maximum call stack")) return a(i);
                throw n;
            }
        };
    }(e.renderRule, _, a, o, O);
    return d(r);
}
const Xn = (n)=>{
    let { children: r, options: e } = n, o = function(n, t) {
        if (null == n) return {};
        var r = {};
        for(var e in n)if (({}).hasOwnProperty.call(n, e)) {
            if (-1 !== t.indexOf(e)) continue;
            r[e] = n[e];
        }
        return r;
    }(n, a);
    return Kn(null == r ? "" : r, t({}, e, {
        wrapperProps: t({}, null == e ? void 0 : e.wrapperProps, o)
    }));
};
;
 //# sourceMappingURL=index.modern.js.map
}),
]);

//# sourceMappingURL=_2ed66405._.js.map