"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/particlesBackground.js":
/*!*************************************************!*\
  !*** ./pages/components/particlesBackground.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tsparticles */ \"./node_modules/react-tsparticles/esm/index.js\");\n/* harmony import */ var tsparticles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsparticles */ \"./node_modules/tsparticles/esm/index.js\");\n\n\n\n\n\n\nfunction App() {\n    var particlesInit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function(main) {\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        console.log(main);\n                        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets\n                        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready\n                        // starting from v2 you can add only the features you need reducing the bundle size\n                        return [\n                            4,\n                            (0,tsparticles__WEBPACK_IMPORTED_MODULE_3__.loadFull)(main)\n                        ];\n                    case 1:\n                        _state.sent();\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function particlesInit(main) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var particlesLoaded = function(container) {\n        console.log(container);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_tsparticles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            id: \"tsparticles\",\n            init: particlesInit,\n            loaded: particlesLoaded,\n            options: {\n                background: {\n                    color: \"#162747\"\n                },\n                fpsLimit: 40,\n                interactivity: {\n                    detectsOn: \"canvas\",\n                    events: {\n                        resize: true\n                    }\n                },\n                particles: {\n                    color: {\n                        value: \"#f1f1f1\"\n                    },\n                    number: {\n                        density: {\n                            enable: true,\n                            area: 1080\n                        },\n                        limit: 0,\n                        value: 500\n                    },\n                    opacity: {\n                        animation: {\n                            enable: true,\n                            minimumValue: 0.5,\n                            speed: 1,\n                            sync: false\n                        },\n                        random: {\n                            enable: true,\n                            minimumValue: 0.1\n                        },\n                        value: 1\n                    },\n                    shape: {\n                        type: \"circle\"\n                    },\n                    size: {\n                        random: {\n                            enable: true,\n                            minimumValue: 0.5\n                        },\n                        value: 1\n                    }\n                }\n            }\n        }, void 0, false, {\n            fileName: \"D:\\\\website\\\\pages\\\\components\\\\particlesBackground.js\",\n            lineNumber: 21,\n            columnNumber: 6\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\website\\\\pages\\\\components\\\\particlesBackground.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL3BhcnRpY2xlc0JhY2tncm91bmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7OztBQUF5QjtBQUNnQjtBQUNGO0FBRXZDLFNBQVNHLEdBQUcsR0FBRztJQUNiLElBQU1DLGFBQWE7bUJBQUcsNkZBQU9DLElBQUksRUFBSzs7Ozt3QkFDcENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUMsQ0FBQzt3QkFFbEIsMkZBQTJGO3dCQUMzRixrR0FBa0c7d0JBQ2xHLG1GQUFtRjt3QkFDbkY7OzRCQUFNSCxxREFBUSxDQUFDRyxJQUFJLENBQUM7MEJBQUE7O3dCQUFwQixhQUFvQixDQUFDOzs7Ozs7UUFDdkIsQ0FBQzt3QkFQS0QsYUFBYSxDQUFVQyxJQUFJOzs7T0FPaEM7SUFFRCxJQUFNRyxlQUFlLEdBQUcsU0FBQ0MsU0FBUyxFQUFLO1FBQ3JDSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsU0FBUyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUNELHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxLQUFLO2tCQUVuQiw0RUFBQ1YseURBQVM7WUFDTFcsRUFBRSxFQUFDLGFBQWE7WUFDaEJDLElBQUksRUFBRVQsYUFBYTtZQUNuQlUsTUFBTSxFQUFFTixlQUFlO1lBQ25CTyxPQUFPLEVBQUU7Z0JBQ1hDLFVBQVUsRUFBRTtvQkFDVkMsS0FBSyxFQUFFLFNBQVM7aUJBQ2pCO2dCQUNEQyxRQUFRLEVBQUUsRUFBRTtnQkFDWkMsYUFBYSxFQUFFO29CQUNiQyxTQUFTLEVBQUUsUUFBUTtvQkFDbkJDLE1BQU0sRUFBRTt3QkFDTkMsTUFBTSxFQUFFLElBQUk7cUJBQ2I7aUJBQ0Y7Z0JBQ0RDLFNBQVMsRUFBRTtvQkFDVE4sS0FBSyxFQUFFO3dCQUNMTyxLQUFLLEVBQUUsU0FBUztxQkFDakI7b0JBQ0RDLE1BQU0sRUFBRTt3QkFDTkMsT0FBTyxFQUFFOzRCQUNQQyxNQUFNLEVBQUUsSUFBSTs0QkFDWkMsSUFBSSxFQUFFLElBQUk7eUJBQ1g7d0JBQ0RDLEtBQUssRUFBRSxDQUFDO3dCQUNSTCxLQUFLLEVBQUUsR0FBRztxQkFDWDtvQkFDRE0sT0FBTyxFQUFFO3dCQUNQQyxTQUFTLEVBQUU7NEJBQ1RKLE1BQU0sRUFBRSxJQUFJOzRCQUNaSyxZQUFZLEVBQUUsR0FBRzs0QkFDakJDLEtBQUssRUFBRSxDQUFDOzRCQUNSQyxJQUFJLEVBQUUsS0FBSzt5QkFDWjt3QkFDREMsTUFBTSxFQUFFOzRCQUNOUixNQUFNLEVBQUUsSUFBSTs0QkFDWkssWUFBWSxFQUFFLEdBQUc7eUJBQ2xCO3dCQUNEUixLQUFLLEVBQUUsQ0FBQztxQkFDVDtvQkFDRFksS0FBSyxFQUFFO3dCQUNMQyxJQUFJLEVBQUUsUUFBUTtxQkFFZjtvQkFDREMsSUFBSSxFQUFFO3dCQUNKSCxNQUFNLEVBQUU7NEJBQ05SLE1BQU0sRUFBRSxJQUFJOzRCQUNaSyxZQUFZLEVBQUUsR0FBRzt5QkFDbEI7d0JBQ0RSLEtBQUssRUFBRSxDQUFDO3FCQUNUO2lCQUNGO2FBQ0Y7Ozs7O2dCQUNIOzs7OztZQUNBLENBQ0o7QUFDSixDQUFDO0FBeEVRckIsS0FBQUEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL3BhcnRpY2xlc0JhY2tncm91bmQuanM/N2E1NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IFBhcnRpY2xlcyBmcm9tICdyZWFjdC10c3BhcnRpY2xlcydcclxuaW1wb3J0IHsgbG9hZEZ1bGwgfSBmcm9tIFwidHNwYXJ0aWNsZXNcIjtcclxuIFxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgY29uc3QgcGFydGljbGVzSW5pdCA9IGFzeW5jIChtYWluKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhtYWluKTtcclxuIFxyXG4gICAgLy8geW91IGNhbiBpbml0aWFsaXplIHRoZSB0c1BhcnRpY2xlcyBpbnN0YW5jZSAobWFpbikgaGVyZSwgYWRkaW5nIGN1c3RvbSBzaGFwZXMgb3IgcHJlc2V0c1xyXG4gICAgLy8gdGhpcyBsb2FkcyB0aGUgdHNwYXJ0aWNsZXMgcGFja2FnZSBidW5kbGUsIGl0J3MgdGhlIGVhc2llc3QgbWV0aG9kIGZvciBnZXR0aW5nIGV2ZXJ5dGhpbmcgcmVhZHlcclxuICAgIC8vIHN0YXJ0aW5nIGZyb20gdjIgeW91IGNhbiBhZGQgb25seSB0aGUgZmVhdHVyZXMgeW91IG5lZWQgcmVkdWNpbmcgdGhlIGJ1bmRsZSBzaXplXHJcbiAgICBhd2FpdCBsb2FkRnVsbChtYWluKTtcclxuICB9O1xyXG4gXHJcbiAgY29uc3QgcGFydGljbGVzTG9hZGVkID0gKGNvbnRhaW5lcikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coY29udGFpbmVyKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICBcclxuICAgICA8UGFydGljbGVzXHJcbiAgICAgICAgICBpZD1cInRzcGFydGljbGVzXCJcclxuICAgICAgICAgIGluaXQ9e3BhcnRpY2xlc0luaXR9XHJcbiAgICAgICAgICBsb2FkZWQ9e3BhcnRpY2xlc0xvYWRlZH1cclxuICAgICAgICAgICAgICBvcHRpb25zPXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgICAgICAgICBjb2xvcjogJyMxNjI3NDcnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmcHNMaW1pdDogNDAsXHJcbiAgICAgICAgICAgIGludGVyYWN0aXZpdHk6IHtcclxuICAgICAgICAgICAgICBkZXRlY3RzT246ICdjYW52YXMnLFxyXG4gICAgICAgICAgICAgIGV2ZW50czoge1xyXG4gICAgICAgICAgICAgICAgcmVzaXplOiB0cnVlXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGFydGljbGVzOiB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcIiNmMWYxZjFcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgbnVtYmVyOiB7XHJcbiAgICAgICAgICAgICAgICBkZW5zaXR5OiB7XHJcbiAgICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgYXJlYTogMTA4MFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxpbWl0OiAwLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IDUwMCxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIG1pbmltdW1WYWx1ZTogMC41LFxyXG4gICAgICAgICAgICAgICAgICBzcGVlZDogMSxcclxuICAgICAgICAgICAgICAgICAgc3luYzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmFuZG9tOiB7XHJcbiAgICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgbWluaW11bVZhbHVlOiAwLjEsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IDEsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBzaGFwZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2NpcmNsZScsXHJcbiAgICAgICBcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHNpemU6IHtcclxuICAgICAgICAgICAgICAgIHJhbmRvbToge1xyXG4gICAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIG1pbmltdW1WYWx1ZTogMC41XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IDFcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgIC8+ICBcclxuICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiBcclxuXHJcbiAiXSwibmFtZXMiOlsiUmVhY3QiLCJQYXJ0aWNsZXMiLCJsb2FkRnVsbCIsIkFwcCIsInBhcnRpY2xlc0luaXQiLCJtYWluIiwiY29uc29sZSIsImxvZyIsInBhcnRpY2xlc0xvYWRlZCIsImNvbnRhaW5lciIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwiaW5pdCIsImxvYWRlZCIsIm9wdGlvbnMiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJmcHNMaW1pdCIsImludGVyYWN0aXZpdHkiLCJkZXRlY3RzT24iLCJldmVudHMiLCJyZXNpemUiLCJwYXJ0aWNsZXMiLCJ2YWx1ZSIsIm51bWJlciIsImRlbnNpdHkiLCJlbmFibGUiLCJhcmVhIiwibGltaXQiLCJvcGFjaXR5IiwiYW5pbWF0aW9uIiwibWluaW11bVZhbHVlIiwic3BlZWQiLCJzeW5jIiwicmFuZG9tIiwic2hhcGUiLCJ0eXBlIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/particlesBackground.js\n"));

/***/ })

});