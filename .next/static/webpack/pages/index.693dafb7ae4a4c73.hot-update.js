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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tsparticles */ \"./node_modules/react-tsparticles/esm/index.js\");\n/* harmony import */ var tsparticles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsparticles */ \"./node_modules/tsparticles/esm/index.js\");\n\n\n\n\n\n\nfunction App() {\n    var particlesInit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function(main) {\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        console.log(main);\n                        return [\n                            4,\n                            (0,tsparticles__WEBPACK_IMPORTED_MODULE_3__.loadFull)(main)\n                        ];\n                    case 1:\n                        _state.sent();\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function particlesInit(main) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var particlesLoaded = function(container) {\n        console.log(container);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_tsparticles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        id: \"tsparticles\",\n        init: particlesInit,\n        loaded: particlesLoaded,\n        options: {\n            background: {\n                color: \"#162747\"\n            },\n            fpsLimit: 40,\n            interactivity: {\n                detectsOn: \"canvas\",\n                events: {\n                    resize: true\n                }\n            },\n            particles: {\n                color: {\n                    value: \"#f1f1f1\"\n                },\n                number: {\n                    density: {\n                        enable: true,\n                        area: 1080\n                    },\n                    limit: 0,\n                    value: 500\n                },\n                opacity: {\n                    animation: {\n                        enable: true,\n                        minimumValue: 0.5,\n                        speed: 1,\n                        sync: false\n                    },\n                    random: {\n                        enable: true,\n                        minimumValue: 0.1\n                    },\n                    value: 1\n                },\n                shape: {\n                    type: \"circle\"\n                },\n                size: {\n                    random: {\n                        enable: true,\n                        minimumValue: 0.5\n                    },\n                    value: 1\n                }\n            }\n        }\n    }, void 0, false, {\n        fileName: \"D:\\\\website\\\\pages\\\\components\\\\particlesBackground.js\",\n        lineNumber: 19,\n        columnNumber: 6\n    }, this);\n}\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL3BhcnRpY2xlc0JhY2tncm91bmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7OztBQUF5QjtBQUNnQjtBQUNGO0FBRXZDLFNBQVNHLEdBQUcsR0FBRztJQUNiLElBQU1DLGFBQWE7bUJBQUcsNkZBQU9DLElBQUksRUFBSzs7Ozt3QkFDcENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUMsQ0FBQzt3QkFHbEI7OzRCQUFNSCxxREFBUSxDQUFDRyxJQUFJLENBQUM7MEJBQUE7O3dCQUFwQixhQUFvQixDQUFDOzs7Ozs7UUFDdkIsQ0FBQzt3QkFMS0QsYUFBYSxDQUFVQyxJQUFJOzs7T0FLaEM7SUFFRCxJQUFNRyxlQUFlLEdBQUcsU0FBQ0MsU0FBUyxFQUFLO1FBQ3JDSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsU0FBUyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUNELHFCQUdHLDhEQUFDUix5REFBUztRQUNMUyxFQUFFLEVBQUMsYUFBYTtRQUNoQkMsSUFBSSxFQUFFUCxhQUFhO1FBQ25CUSxNQUFNLEVBQUVKLGVBQWU7UUFDbkJLLE9BQU8sRUFBRTtZQUNYQyxVQUFVLEVBQUU7Z0JBQ1ZDLEtBQUssRUFBRSxTQUFTO2FBQ2pCO1lBQ0RDLFFBQVEsRUFBRSxFQUFFO1lBQ1pDLGFBQWEsRUFBRTtnQkFDYkMsU0FBUyxFQUFFLFFBQVE7Z0JBQ25CQyxNQUFNLEVBQUU7b0JBQ05DLE1BQU0sRUFBRSxJQUFJO2lCQUNiO2FBQ0Y7WUFDREMsU0FBUyxFQUFFO2dCQUNUTixLQUFLLEVBQUU7b0JBQ0xPLEtBQUssRUFBRSxTQUFTO2lCQUNqQjtnQkFDREMsTUFBTSxFQUFFO29CQUNOQyxPQUFPLEVBQUU7d0JBQ1BDLE1BQU0sRUFBRSxJQUFJO3dCQUNaQyxJQUFJLEVBQUUsSUFBSTtxQkFDWDtvQkFDREMsS0FBSyxFQUFFLENBQUM7b0JBQ1JMLEtBQUssRUFBRSxHQUFHO2lCQUNYO2dCQUNETSxPQUFPLEVBQUU7b0JBQ1BDLFNBQVMsRUFBRTt3QkFDVEosTUFBTSxFQUFFLElBQUk7d0JBQ1pLLFlBQVksRUFBRSxHQUFHO3dCQUNqQkMsS0FBSyxFQUFFLENBQUM7d0JBQ1JDLElBQUksRUFBRSxLQUFLO3FCQUNaO29CQUNEQyxNQUFNLEVBQUU7d0JBQ05SLE1BQU0sRUFBRSxJQUFJO3dCQUNaSyxZQUFZLEVBQUUsR0FBRztxQkFDbEI7b0JBQ0RSLEtBQUssRUFBRSxDQUFDO2lCQUNUO2dCQUNEWSxLQUFLLEVBQUU7b0JBQ0xDLElBQUksRUFBRSxRQUFRO2lCQUVmO2dCQUNEQyxJQUFJLEVBQUU7b0JBQ0pILE1BQU0sRUFBRTt3QkFDTlIsTUFBTSxFQUFFLElBQUk7d0JBQ1pLLFlBQVksRUFBRSxHQUFHO3FCQUNsQjtvQkFDRFIsS0FBSyxFQUFFLENBQUM7aUJBQ1Q7YUFDRjtTQUNGOzs7OztZQUNILENBRUo7QUFDSixDQUFDO0FBdEVRbkIsS0FBQUEsR0FBRztBQXdFWiwrREFBZUEsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvcGFydGljbGVzQmFja2dyb3VuZC5qcz83YTU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgUGFydGljbGVzIGZyb20gJ3JlYWN0LXRzcGFydGljbGVzJ1xyXG5pbXBvcnQgeyBsb2FkRnVsbCB9IGZyb20gXCJ0c3BhcnRpY2xlc1wiO1xyXG4gXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICBjb25zdCBwYXJ0aWNsZXNJbml0ID0gYXN5bmMgKG1haW4pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKG1haW4pO1xyXG4gXHJcbiAgXHJcbiAgICBhd2FpdCBsb2FkRnVsbChtYWluKTtcclxuICB9O1xyXG4gXHJcbiAgY29uc3QgcGFydGljbGVzTG9hZGVkID0gKGNvbnRhaW5lcikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coY29udGFpbmVyKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICBcclxuICAgICAgXHJcbiAgICAgPFBhcnRpY2xlc1xyXG4gICAgICAgICAgaWQ9XCJ0c3BhcnRpY2xlc1wiXHJcbiAgICAgICAgICBpbml0PXtwYXJ0aWNsZXNJbml0fVxyXG4gICAgICAgICAgbG9hZGVkPXtwYXJ0aWNsZXNMb2FkZWR9XHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMTYyNzQ3JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZnBzTGltaXQ6IDQwLFxyXG4gICAgICAgICAgICBpbnRlcmFjdGl2aXR5OiB7XHJcbiAgICAgICAgICAgICAgZGV0ZWN0c09uOiAnY2FudmFzJyxcclxuICAgICAgICAgICAgICBldmVudHM6IHtcclxuICAgICAgICAgICAgICAgIHJlc2l6ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBhcnRpY2xlczoge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCIjZjFmMWYxXCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIG51bWJlcjoge1xyXG4gICAgICAgICAgICAgICAgZGVuc2l0eToge1xyXG4gICAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIGFyZWE6IDEwODBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsaW1pdDogMCxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiA1MDAsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBvcGFjaXR5OiB7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBtaW5pbXVtVmFsdWU6IDAuNSxcclxuICAgICAgICAgICAgICAgICAgc3BlZWQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgIHN5bmM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJhbmRvbToge1xyXG4gICAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIG1pbmltdW1WYWx1ZTogMC4xLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAxLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgc2hhcGU6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdjaXJjbGUnLFxyXG4gICAgICAgXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBzaXplOiB7XHJcbiAgICAgICAgICAgICAgICByYW5kb206IHtcclxuICAgICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBtaW5pbXVtVmFsdWU6IDAuNVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAxXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAvPiAgXHJcbiAgXHJcbiAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuICJdLCJuYW1lcyI6WyJSZWFjdCIsIlBhcnRpY2xlcyIsImxvYWRGdWxsIiwiQXBwIiwicGFydGljbGVzSW5pdCIsIm1haW4iLCJjb25zb2xlIiwibG9nIiwicGFydGljbGVzTG9hZGVkIiwiY29udGFpbmVyIiwiaWQiLCJpbml0IiwibG9hZGVkIiwib3B0aW9ucyIsImJhY2tncm91bmQiLCJjb2xvciIsImZwc0xpbWl0IiwiaW50ZXJhY3Rpdml0eSIsImRldGVjdHNPbiIsImV2ZW50cyIsInJlc2l6ZSIsInBhcnRpY2xlcyIsInZhbHVlIiwibnVtYmVyIiwiZGVuc2l0eSIsImVuYWJsZSIsImFyZWEiLCJsaW1pdCIsIm9wYWNpdHkiLCJhbmltYXRpb24iLCJtaW5pbXVtVmFsdWUiLCJzcGVlZCIsInN5bmMiLCJyYW5kb20iLCJzaGFwZSIsInR5cGUiLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/particlesBackground.js\n"));

/***/ })

});