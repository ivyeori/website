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

/***/ "./pages/MusicDesign.js":
/*!******************************!*\
  !*** ./pages/MusicDesign.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar MusicPlayer = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            name: \"Cupid\",\n            src: \"song.mp3\",\n            thumbnail: \"https://images.genius.com/d383c213dfdcede4fd45fa7c1570463e.1000x1000x1.jpg\"\n        },\n        {\n            name: \"Clyde\",\n            src: \"song2.mp3\",\n            thumbnail: \"https://images.genius.com/89cb8f4c43bc185242f660876eb4f308.1000x1000x1.jpg\"\n        },\n        {\n            name: \"Song 3\",\n            src: \"path/to/song3.mp3\",\n            thumbnail: \"song3_thumbnail.jpg\"\n        }\n    ]), songs = ref[0], setSongs = ref[1];\n    var handlePlayPauseClick = function() {\n        setIsPlaying(!isPlaying);\n    };\n    var handleSkipClick = function() {\n        setCurrentSongIndex(currentSongIndex === songs.length - 1 ? 0 : currentSongIndex + 1);\n    };\n    var playPauseButton = isPlaying ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: handlePlayPauseClick,\n        className: \"hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n            xmlns: \"http://www.w3.org/2000/svg\",\n            width: \"24\",\n            height: \"24\",\n            viewBox: \"0 0 24 24\",\n            fill: \"none\",\n            stroke: \"currentColor\",\n            strokeWidth: \"2\",\n            strokeLinecap: \"round\",\n            strokeLinejoin: \"round\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                    x: \"6\",\n                    y: \"4\",\n                    width: \"4\",\n                    height: \"16\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\website\\\\pages\\\\MusicDesign.js\",\n                    lineNumber: 20,\n                    columnNumber: 185\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                    x: \"14\",\n                    y: \"4\",\n                    width: \"4\",\n                    height: \"16\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\website\\\\pages\\\\MusicDesign.js\",\n                    lineNumber: 20,\n                    columnNumber: 232\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\website\\\\pages\\\\MusicDesign.js\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\website\\\\pages\\\\MusicDesign.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: handlePlayPauseClick,\n        className: \"hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n            xmlns: \"http://www.w3.org/2000/svg\",\n            width: \"24\",\n            height: \"24\",\n            viewBox: \"0 0 24 24\",\n            fill: \"none\",\n            stroke: \"currentColor\",\n            strokeWidth: \"2\",\n            strokeLinecap: \"round\",\n            strokeLinejoin: \"round\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"polygon\", {\n                points: \"5 3 19 12 5 21 5 3\"\n            }, void 0, false, {\n                fileName: \"D:\\\\website\\\\pages\\\\MusicDesign.js\",\n                lineNumber: 24,\n                columnNumber: 186\n            }, _this)\n        }, void 0, false, {\n            fileName: \"D:\\\\website\\\\pages\\\\MusicDesign.js\",\n            lineNumber: 24,\n            columnNumber: 8\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\website\\\\pages\\\\MusicDesign.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentSongIndex = ref1[0], setCurrentSongIndex = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isPlaying = ref2[0], setIsPlaying = ref2[1];\n    var audioRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var handleSongClick = function(songIndex) {\n        setCurrentSongIndex(songIndex);\n        setThumbnail(song.thumbnail);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        audioRef.current.volume = 0.1;\n        if (isPlaying) {\n            audioRef.current.play();\n        } else {\n            audioRef.current.pause();\n        }\n    }, [\n        isPlaying\n    ]);\n    var currentSong = songs[currentSongIndex];\n    var handleSkipBackClick = function() {\n        audioRef.current.currentTime -= 10;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"grid place-items-center min-h-screen bg-gradient-to-t from-blue-200 to-indigo-900 p-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"grid grid-cols-1 sm:grid-cols-3 gap-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-gray-900 shadow-lg rounded p-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"group relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"w-full md:w-72 block rounded\",\n                                    src: currentSong.thumbnail,\n                                    alt: \"\".concat(currentSong.name, \" thumbnail\")\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\website\\\\pages\\\\MusicDesign.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 9\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: handleSkipBackClick,\n                                            className: \"hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                xmlns: \"http://www.w3.org/2000/svg\",\n                                                width: \"24\",\n                                                height: \"24\",\n                                                viewBox: \"0 0 24 24\",\n                                                fill: \"none\",\n                                                stroke: \"currentColor\",\n                                                strokeWidth: \"2\",\n                                                strokeLinecap: \"round\",\n                                                strokeLinejoin: \"round\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"polygon\", {\n                                                        points: \"19 20 9 12 19 4 19 20\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\website\\\\pages\\\\MusicDesign.js\",\n                                                        lineNumber: 70,\n                                                        columnNumber: 181\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"line\", {\n                                                        x1: \"5\",\n                                                        y1: \"19\",\n                                                        x2: \"5\",\n                                                        y2: \"5\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\website\\\\pages\\\\MusicDesign.js\",\n                                                        lineNumber: 70,\n                                                        columnNumber: 231\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\website\\\\pages\\\\MusicDesign.js\",\n                                                lineNumber: 70,\n                                                columnNumber: 3\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\website\\\\pages\\\\MusicDesign.js\",\n                                            lineNumber: 69,\n                                            columnNumber: 11\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            children: playPauseButton\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\website\\\\pages\\\\MusicDesign.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 1\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: handleSkipClick,\n                                            className: \"hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                xmlns: \"http://www.w3.org/2000/svg\",\n                                                width: \"24\",\n                                                height: \"24\",\n                                                viewBox: \"0 0 24 24\",\n                                                fill: \"none\",\n                                                stroke: \"currentColor\",\n                                                strokeWidth: \"2\",\n                                                strokeLinecap: \"round\",\n                                                strokeLinejoin: \"round\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"polygon\", {\n                                                        points: \"5 4 15 12 5 20 5 4\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\website\\\\pages\\\\MusicDesign.js\",\n                                                        lineNumber: 79,\n                                                        columnNumber: 191\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"line\", {\n                                                        x1: \"19\",\n                                                        y1: \"5\",\n                                                        x2: \"19\",\n                                                        y2: \"19\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\website\\\\pages\\\\MusicDesign.js\",\n                                                        lineNumber: 79,\n                                                        columnNumber: 238\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\website\\\\pages\\\\MusicDesign.js\",\n                                                lineNumber: 79,\n                                                columnNumber: 13\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\website\\\\pages\\\\MusicDesign.js\",\n                                            lineNumber: 78,\n                                            columnNumber: 13\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\website\\\\pages\\\\MusicDesign.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 11\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\website\\\\pages\\\\MusicDesign.js\",\n                            lineNumber: 65,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"p-5\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-white text-lg\",\n                                children: currentSong.name\n                            }, void 0, false, {\n                                fileName: \"D:\\\\website\\\\pages\\\\MusicDesign.js\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\website\\\\pages\\\\MusicDesign.js\",\n                            lineNumber: 87,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\website\\\\pages\\\\MusicDesign.js\",\n                    lineNumber: 64,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\website\\\\pages\\\\MusicDesign.js\",\n                lineNumber: 60,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                ref: audioRef,\n                src: currentSong.src,\n                onEnded: function() {\n                    return setIsPlaying(false);\n                },\n                onLoadedData: function() {\n                    return setIsPlaying(true);\n                },\n                autoPlay: true\n            }, void 0, false, {\n                fileName: \"D:\\\\website\\\\pages\\\\MusicDesign.js\",\n                lineNumber: 94,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\website\\\\pages\\\\MusicDesign.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, _this);\n};\n_s(MusicPlayer, \"2O1eM0tFFd7kEAsBmYI8lvwbMto=\");\n_c = MusicPlayer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MusicPlayer);\nvar _c;\n$RefreshReg$(_c, \"MusicPlayer\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBSTt3REFBQ0MsRUFBRSxFQUFDLElBQUk7d0RBQUNDLEVBQUUsRUFBQyxHQUFHO3dEQUFDQyxFQUFFLEVBQUMsSUFBSTt3REFBQ0MsRUFBRSxFQUFDLElBQUk7Ozs7OzZEQUFROzs7Ozs7cURBQU07Ozs7O2lEQUUxUTs7Ozs7O3lDQUlMOzs7Ozs7aUNBQ0Y7c0NBQ04sOERBQUNQLEtBQUc7NEJBQUM5QixTQUFTLEVBQUMsS0FBSztzQ0FDbEIsNEVBQUNzQyxJQUFFO2dDQUFDdEMsU0FBUyxFQUFDLG9CQUFvQjswQ0FBRXlCLFdBQVcsQ0FBQ3hDLElBQUk7Ozs7O3FDQUFNOzs7OztpQ0FFdEQ7Ozs7Ozt5QkFDRjs7Ozs7cUJBRUU7MEJBQ1YsOERBQUNzRCxPQUFLO2dCQUNSQyxHQUFHLEVBQUV4QixRQUFRO2dCQUNiOUIsR0FBRyxFQUFFdUMsV0FBVyxDQUFDdkMsR0FBRztnQkFDcEJ1RCxPQUFPLEVBQUU7MkJBQU1sRCxZQUFZLENBQUMsS0FBSyxDQUFDO2lCQUFBO2dCQUNsQ21ELFlBQVksRUFBRTsyQkFBTW5ELFlBQVksQ0FBQyxJQUFJLENBQUM7aUJBQUE7Z0JBQ3RDb0QsUUFBUTs7Ozs7cUJBQ1I7Ozs7OzthQUNLLENBQ0o7QUFDSCxDQUFDO0dBcEdLM0QsV0FBVztBQUFYQSxLQUFBQSxXQUFXO0FBc0dqQiwrREFBZUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9NdXNpY0Rlc2lnbi5qcz9iZGQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBNdXNpY1BsYXllciA9ICgpID0+IHtcclxuICBjb25zdCBbc29uZ3MsIHNldFNvbmdzXSA9IHVzZVN0YXRlKFtcclxuICAgIHsgbmFtZTogJ0N1cGlkJywgc3JjOiAnc29uZy5tcDMnLCB0aHVtYm5haWw6ICdodHRwczovL2ltYWdlcy5nZW5pdXMuY29tL2QzODNjMjEzZGZkY2VkZTRmZDQ1ZmE3YzE1NzA0NjNlLjEwMDB4MTAwMHgxLmpwZycgfSxcclxuICAgIHsgbmFtZTogJ0NseWRlJywgc3JjOiAnc29uZzIubXAzJywgdGh1bWJuYWlsOiAnaHR0cHM6Ly9pbWFnZXMuZ2VuaXVzLmNvbS84OWNiOGY0YzQzYmMxODUyNDJmNjYwODc2ZWI0ZjMwOC4xMDAweDEwMDB4MS5qcGcnIH0sXHJcbiAgICB7IG5hbWU6ICdTb25nIDMnLCBzcmM6ICdwYXRoL3RvL3NvbmczLm1wMycsIHRodW1ibmFpbDogJ3NvbmczX3RodW1ibmFpbC5qcGcnIH1cclxuICBdKTtcclxuICBjb25zdCBoYW5kbGVQbGF5UGF1c2VDbGljayA9ICgpID0+IHtcclxuICAgIHNldElzUGxheWluZyghaXNQbGF5aW5nKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTa2lwQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50U29uZ0luZGV4KGN1cnJlbnRTb25nSW5kZXggPT09IHNvbmdzLmxlbmd0aCAtIDEgPyAwIDogY3VycmVudFNvbmdJbmRleCArIDEpO1xyXG5cclxuICB9O1xyXG4gIGNvbnN0IHBsYXlQYXVzZUJ1dHRvbiA9IGlzUGxheWluZyA/IChcclxuICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlUGxheVBhdXNlQ2xpY2t9IGNsYXNzTmFtZT1cImhvdmVyOnNjYWxlLTExMCB0ZXh0LXdoaXRlIG9wYWNpdHktMCB0cmFuc2Zvcm0gdHJhbnNsYXRlLXktMyBncm91cC1ob3Zlcjp0cmFuc2xhdGUteS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb25cIj5cclxuICAgICBcclxuICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiPjxyZWN0IHg9XCI2XCIgeT1cIjRcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCIxNlwiPjwvcmVjdD48cmVjdCB4PVwiMTRcIiB5PVwiNFwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjE2XCI+PC9yZWN0Pjwvc3ZnPlxyXG4gICAgPC9idXR0b24+XHJcbiAgKSA6IChcclxuICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlUGxheVBhdXNlQ2xpY2t9IGNsYXNzTmFtZT1cImhvdmVyOnNjYWxlLTExMCB0ZXh0LXdoaXRlIG9wYWNpdHktMCB0cmFuc2Zvcm0gdHJhbnNsYXRlLXktMyBncm91cC1ob3Zlcjp0cmFuc2xhdGUteS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb25cIiA+XHJcbiAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCI+PHBvbHlnb24gcG9pbnRzPVwiNSAzIDE5IDEyIDUgMjEgNSAzXCI+PC9wb2x5Z29uPjwvc3ZnPlxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxuICBjb25zdCBbY3VycmVudFNvbmdJbmRleCwgc2V0Q3VycmVudFNvbmdJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTb25nQ2xpY2sgPSAoc29uZ0luZGV4KSA9PiB7XHJcbiAgICBzZXRDdXJyZW50U29uZ0luZGV4KHNvbmdJbmRleCk7XHJcbiAgICBzZXRUaHVtYm5haWwoc29uZy50aHVtYm5haWwpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhdWRpb1JlZi5jdXJyZW50LnZvbHVtZSA9IDAuMTtcclxuICAgIGlmIChpc1BsYXlpbmcpIHtcclxuICAgICAgYXVkaW9SZWYuY3VycmVudC5wbGF5KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhdWRpb1JlZi5jdXJyZW50LnBhdXNlKCk7XHJcbiAgICB9XHJcbiAgfSwgW2lzUGxheWluZ10pO1xyXG5cclxuICBcclxuICBcclxuXHJcbiAgY29uc3QgY3VycmVudFNvbmcgPSBzb25nc1tjdXJyZW50U29uZ0luZGV4XTtcclxuICBjb25zdCBoYW5kbGVTa2lwQmFja0NsaWNrID0gKCkgPT4ge1xyXG4gICAgYXVkaW9SZWYuY3VycmVudC5jdXJyZW50VGltZSAtPSAxMDtcclxuICB9O1xyXG5cclxuICBcclxuXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cImdyaWQgcGxhY2UtaXRlbXMtY2VudGVyIG1pbi1oLXNjcmVlbiBiZy1ncmFkaWVudC10by10IGZyb20tYmx1ZS0yMDAgdG8taW5kaWdvLTkwMCBwLTVcIj5cclxuIFxyXG4gICBcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTMgZ2FwLTRcIj5cclxuICAgIFxyXG5cclxuICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTkwMCBzaGFkb3ctbGcgcm91bmRlZCBwLTNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy03MiBibG9jayByb3VuZGVkXCIgc3JjPXtjdXJyZW50U29uZy50aHVtYm5haWx9IGFsdD17YCR7Y3VycmVudFNvbmcubmFtZX0gdGh1bWJuYWlsYH0gLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYmctYmxhY2sgcm91bmRlZCBiZy1vcGFjaXR5LTAgZ3JvdXAtaG92ZXI6Ymctb3BhY2l0eS02MCB3LWZ1bGwgaC1mdWxsIHRvcC0wIGZsZXggaXRlbXMtY2VudGVyIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24ganVzdGlmeS1ldmVubHlcIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNraXBCYWNrQ2xpY2t9IGNsYXNzTmFtZT1cImhvdmVyOnNjYWxlLTExMCB0ZXh0LXdoaXRlIG9wYWNpdHktMCB0cmFuc2Zvcm0gdHJhbnNsYXRlLXktMyBncm91cC1ob3Zlcjp0cmFuc2xhdGUteS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb25cIj5cclxuICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCI+PHBvbHlnb24gcG9pbnRzPVwiMTkgMjAgOSAxMiAxOSA0IDE5IDIwXCI+PC9wb2x5Z29uPjxsaW5lIHgxPVwiNVwiIHkxPVwiMTlcIiB4Mj1cIjVcIiB5Mj1cIjVcIj48L2xpbmU+PC9zdmc+XHJcbjwvYnV0dG9uPlxyXG5cclxuXHJcbjxidXR0b24+XHJcbiAgICAgIHtwbGF5UGF1c2VCdXR0b259XHJcbiAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gIG9uQ2xpY2s9e2hhbmRsZVNraXBDbGlja30gIGNsYXNzTmFtZT1cImhvdmVyOnNjYWxlLTExMCB0ZXh0LXdoaXRlIG9wYWNpdHktMCB0cmFuc2Zvcm0gdHJhbnNsYXRlLXktMyBncm91cC1ob3Zlcjp0cmFuc2xhdGUteS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb25cIj5cclxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiPjxwb2x5Z29uIHBvaW50cz1cIjUgNCAxNSAxMiA1IDIwIDUgNFwiPjwvcG9seWdvbj48bGluZSB4MT1cIjE5XCIgeTE9XCI1XCIgeDI9XCIxOVwiIHkyPVwiMTlcIj48L2xpbmU+PC9zdmc+XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNVwiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1sZ1wiPntjdXJyZW50U29uZy5uYW1lfTwvaDM+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPGF1ZGlvXHJcbiAgcmVmPXthdWRpb1JlZn1cclxuICBzcmM9e2N1cnJlbnRTb25nLnNyY31cclxuICBvbkVuZGVkPXsoKSA9PiBzZXRJc1BsYXlpbmcoZmFsc2UpfVxyXG4gIG9uTG9hZGVkRGF0YT17KCkgPT4gc2V0SXNQbGF5aW5nKHRydWUpfVxyXG4gIGF1dG9QbGF5XHJcbi8+XHJcbjwvbWFpbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE11c2ljUGxheWVyIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJNdXNpY1BsYXllciIsIm5hbWUiLCJzcmMiLCJ0aHVtYm5haWwiLCJzb25ncyIsInNldFNvbmdzIiwiaGFuZGxlUGxheVBhdXNlQ2xpY2siLCJzZXRJc1BsYXlpbmciLCJpc1BsYXlpbmciLCJoYW5kbGVTa2lwQ2xpY2siLCJzZXRDdXJyZW50U29uZ0luZGV4IiwiY3VycmVudFNvbmdJbmRleCIsImxlbmd0aCIsInBsYXlQYXVzZUJ1dHRvbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJzdmciLCJ4bWxucyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInJlY3QiLCJ4IiwieSIsInBvbHlnb24iLCJwb2ludHMiLCJhdWRpb1JlZiIsImhhbmRsZVNvbmdDbGljayIsInNvbmdJbmRleCIsInNldFRodW1ibmFpbCIsInNvbmciLCJjdXJyZW50Iiwidm9sdW1lIiwicGxheSIsInBhdXNlIiwiY3VycmVudFNvbmciLCJoYW5kbGVTa2lwQmFja0NsaWNrIiwiY3VycmVudFRpbWUiLCJtYWluIiwic2VjdGlvbiIsImRpdiIsImltZyIsImFsdCIsImxpbmUiLCJ4MSIsInkxIiwieDIiLCJ5MiIsImgzIiwiYXVkaW8iLCJyZWYiLCJvbkVuZGVkIiwib25Mb2FkZWREYXRhIiwiYXV0b1BsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/MusicDesign.js\n"));

/***/ })

});