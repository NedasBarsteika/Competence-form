"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"ad08576b1947\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2FiYjAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJhZDA4NTc2YjE5NDdcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/thank-you-page.tsx":
/*!***************************************!*\
  !*** ./components/thank-you-page.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ThankYouPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _images_skillit_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/skillit.png */ \"(app-pages-browser)/./components/images/skillit.png\");\n/* harmony import */ var _images_steps_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/steps.png */ \"(app-pages-browser)/./components/images/steps.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! overlayscrollbars-react */ \"(app-pages-browser)/./node_modules/overlayscrollbars-react/overlayscrollbars-react.mjs\");\n\n\n\n\n\n\nfunction ThankYouPage(param) {\n    let { surveyData, competenceTitles, onFinish } = param;\n    var _surveyData_;\n    console.log(surveyData);\n    const getSkillColor = (value)=>{\n        switch(value){\n            case 1:\n                return \"bg-[#eb4444]\";\n            case 2:\n                return \"bg-[#ff9300]\";\n            case 3:\n                return \"bg-yellow-300\";\n            case 4:\n                return \"bg-[#a5ff99]\";\n            case 5:\n                return \"bg-[#00ff2d]\";\n            default:\n                return \"bg-gray-300\";\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-[#1e1e1e] text-white flex flex-col items-center justify-between p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                src: _images_steps_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                alt: \"Competence Form\",\n                className: \"h-30 w-60 mt-10 max-w-lg transition-all\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vartotojas\\\\Documents\\\\Coding projects\\\\HTML_CSS_JS\\\\Competence-form\\\\components\\\\thank-you-page.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-xl text-center font-bold max-w-md mx-8 tracking-wide\",\n                children: \"Thank you! Your feedback will be sent to your manager.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vartotojas\\\\Documents\\\\Coding projects\\\\HTML_CSS_JS\\\\Competence-form\\\\components\\\\thank-you-page.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"overflow-hidden\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_5__.OverlayScrollbarsComponent, {\n                        options: {\n                            scrollbars: {\n                                visibility: \"auto\",\n                                autoHide: \"never\"\n                            }\n                        },\n                        className: \"overflow-y-scroll hide-vertical-scrollbar\",\n                        style: {\n                            maxHeight: \"calc(100vh - 200px)\",\n                            overflowX: \"hidden\",\n                            paddingBottom: \"40px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                            className: \"w-full table-auto border border-black\",\n                            style: {\n                                borderCollapse: \"collapse\",\n                                tableLayout: \"fixed\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                className: \"bg-[#08ec3c] text-black font-bold text-center px-2 py-4\",\n                                                style: {\n                                                    border: \"1px solid black\",\n                                                    height: \"60px\",\n                                                    boxShadow: \"1px 1px 0 black\"\n                                                },\n                                                children: \"SKILLS\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Vartotojas\\\\Documents\\\\Coding projects\\\\HTML_CSS_JS\\\\Competence-form\\\\components\\\\thank-you-page.tsx\",\n                                                lineNumber: 82,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                className: \"bg-[#08ec3c] text-black font-bold text-center px-2 py-4\",\n                                                style: {\n                                                    border: \"1px solid black\",\n                                                    height: \"60px\",\n                                                    boxShadow: \"1px 1px 0 black\"\n                                                },\n                                                children: \"LEVELS\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Vartotojas\\\\Documents\\\\Coding projects\\\\HTML_CSS_JS\\\\Competence-form\\\\components\\\\thank-you-page.tsx\",\n                                                lineNumber: 92,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Vartotojas\\\\Documents\\\\Coding projects\\\\HTML_CSS_JS\\\\Competence-form\\\\components\\\\thank-you-page.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Vartotojas\\\\Documents\\\\Coding projects\\\\HTML_CSS_JS\\\\Competence-form\\\\components\\\\thank-you-page.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                    children: (_surveyData_ = surveyData[0]) === null || _surveyData_ === void 0 ? void 0 : _surveyData_.competences.map((competence, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    className: \"bg-white text-black font-medium text-center px-2 py-4\",\n                                                    style: {\n                                                        border: \"1px solid black\",\n                                                        height: \"60px\"\n                                                    },\n                                                    children: competence.competenceTitle\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Vartotojas\\\\Documents\\\\Coding projects\\\\HTML_CSS_JS\\\\Competence-form\\\\components\\\\thank-you-page.tsx\",\n                                                    lineNumber: 109,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    className: \"text-black text-center font-medium px-2 py-4 border border-black \".concat(getSkillColor(competence.value)),\n                                                    style: {\n                                                        height: \"60px\"\n                                                    },\n                                                    children: competence.value !== null ? competence.value : \"N/A\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Vartotojas\\\\Documents\\\\Coding projects\\\\HTML_CSS_JS\\\\Competence-form\\\\components\\\\thank-you-page.tsx\",\n                                                    lineNumber: 119,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, index, true, {\n                                            fileName: \"C:\\\\Users\\\\Vartotojas\\\\Documents\\\\Coding projects\\\\HTML_CSS_JS\\\\Competence-form\\\\components\\\\thank-you-page.tsx\",\n                                            lineNumber: 107,\n                                            columnNumber: 19\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Vartotojas\\\\Documents\\\\Coding projects\\\\HTML_CSS_JS\\\\Competence-form\\\\components\\\\thank-you-page.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Vartotojas\\\\Documents\\\\Coding projects\\\\HTML_CSS_JS\\\\Competence-form\\\\components\\\\thank-you-page.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Vartotojas\\\\Documents\\\\Coding projects\\\\HTML_CSS_JS\\\\Competence-form\\\\components\\\\thank-you-page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vartotojas\\\\Documents\\\\Coding projects\\\\HTML_CSS_JS\\\\Competence-form\\\\components\\\\thank-you-page.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vartotojas\\\\Documents\\\\Coding projects\\\\HTML_CSS_JS\\\\Competence-form\\\\components\\\\thank-you-page.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space-y-10 mb-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        onClick: onFinish,\n                        className: \"w-full py-4 px-6 bg-green-500 rounded-full text-black font-medium hover:bg-green-400 transition-colors\",\n                        children: \"OK\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Vartotojas\\\\Documents\\\\Coding projects\\\\HTML_CSS_JS\\\\Competence-form\\\\components\\\\thank-you-page.tsx\",\n                        lineNumber: 138,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        src: _images_skillit_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                        alt: \"Skillit Logo\",\n                        className: \"h-15 w-20 max-w-lg mx-auto transition-all\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Vartotojas\\\\Documents\\\\Coding projects\\\\HTML_CSS_JS\\\\Competence-form\\\\components\\\\thank-you-page.tsx\",\n                        lineNumber: 144,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Vartotojas\\\\Documents\\\\Coding projects\\\\HTML_CSS_JS\\\\Competence-form\\\\components\\\\thank-you-page.tsx\",\n                lineNumber: 137,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Vartotojas\\\\Documents\\\\Coding projects\\\\HTML_CSS_JS\\\\Competence-form\\\\components\\\\thank-you-page.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_c = ThankYouPage;\nvar _c;\n$RefreshReg$(_c, \"ThankYouPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdGhhbmsteW91LXBhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStDO0FBQ1A7QUFDRDtBQUNSO0FBQ3NDO0FBa0J0RCxTQUFTSyxhQUFhLEtBQTZIO1FBQTdILEVBQUVDLFVBQVUsRUFBRUMsZ0JBQWdCLEVBQUVDLFFBQVEsRUFBcUYsR0FBN0g7UUFtRnBCRjtJQWxGZkcsUUFBUUMsR0FBRyxDQUFDSjtJQUNaLE1BQU1LLGdCQUFnQixDQUFDQztRQUNyQixPQUFRQTtZQUNOLEtBQUs7Z0JBQ0gsT0FBTztZQUNULEtBQUs7Z0JBQ0gsT0FBTztZQUNULEtBQUs7Z0JBQ0gsT0FBTztZQUNULEtBQUs7Z0JBQ0gsT0FBTztZQUNULEtBQUs7Z0JBQ0gsT0FBTztZQUNUO2dCQUNFLE9BQU87UUFDWDtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDWCxrREFBS0E7Z0JBQ0pZLEtBQUtiLHlEQUFLQTtnQkFDVmMsS0FBSTtnQkFDSkYsV0FBVTs7Ozs7OzBCQUdaLDhEQUFDRztnQkFBR0gsV0FBVTswQkFBNEQ7Ozs7OzswQkFLMUUsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFFYiw0RUFBQ1YsK0VBQTBCQTt3QkFDekJjLFNBQVM7NEJBQ1BDLFlBQVk7Z0NBQ1ZDLFlBQVk7Z0NBQ1pDLFVBQVU7NEJBQ1o7d0JBQ0Y7d0JBQ0FQLFdBQVU7d0JBQ1ZRLE9BQU87NEJBQ0xDLFdBQVc7NEJBQ1hDLFdBQVc7NEJBQ1hDLGVBQWU7d0JBQ2pCO2tDQUVBLDRFQUFDQzs0QkFDQ1osV0FBVTs0QkFDVlEsT0FBTztnQ0FDTEssZ0JBQWdCO2dDQUNoQkMsYUFBYTs0QkFDZjs7OENBRUEsOERBQUNDOzhDQUNDLDRFQUFDQzs7MERBRUMsOERBQUNDO2dEQUNDakIsV0FBVTtnREFDVlEsT0FBTztvREFDTFUsUUFBUTtvREFDUkMsUUFBUTtvREFDUkMsV0FBVztnREFDYjswREFDRDs7Ozs7OzBEQUdELDhEQUFDSDtnREFDQ2pCLFdBQVU7Z0RBQ1ZRLE9BQU87b0RBQ0xVLFFBQVE7b0RBQ1JDLFFBQVE7b0RBQ1JDLFdBQVc7Z0RBQ2I7MERBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUtMLDhEQUFDQzsrQ0FFRTdCLGVBQUFBLFVBQVUsQ0FBQyxFQUFFLGNBQWJBLG1DQUFBQSxhQUFlOEIsV0FBVyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsWUFBWUMsc0JBQzNDLDhEQUFDVDs7OERBRUMsOERBQUNVO29EQUNDMUIsV0FBVTtvREFDVlEsT0FBTzt3REFDTFUsUUFBUTt3REFDUkMsUUFBUTtvREFDVjs4REFFQ0ssV0FBV0csZUFBZTs7Ozs7OzhEQUc3Qiw4REFBQ0Q7b0RBQ0MxQixXQUFXLG9FQUVULE9BRjZFSCxjQUM3RTJCLFdBQVcxQixLQUFLO29EQUVsQlUsT0FBTzt3REFDTFcsUUFBUTtvREFDVjs4REFFQ0ssV0FBVzFCLEtBQUssS0FBSyxPQUFPMEIsV0FBVzFCLEtBQUssR0FBRzs7Ozs7OzsyQ0FwQjNDMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBOEJyQiw4REFBQzFCO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ2QseURBQU1BO3dCQUNMMEMsU0FBU2xDO3dCQUNUTSxXQUFVO2tDQUNYOzs7Ozs7a0NBR0QsOERBQUNYLGtEQUFLQTt3QkFDSlksS0FBS2QsMkRBQUlBO3dCQUNUZSxLQUFJO3dCQUNKRixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEI7S0FqSXdCVCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RoYW5rLXlvdS1wYWdlLnRzeD81YTY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCJcclxuaW1wb3J0IGxvZ28gZnJvbSBcIi4vaW1hZ2VzL3NraWxsaXQucG5nXCI7XHJcbmltcG9ydCBzdGVwcyBmcm9tIFwiLi9pbWFnZXMvc3RlcHMucG5nXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgT3ZlcmxheVNjcm9sbGJhcnNDb21wb25lbnQgfSBmcm9tIFwib3ZlcmxheXNjcm9sbGJhcnMtcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxudHlwZSBDb21wZXRlbmNlMiA9IHtcclxuICBjb21wZXRlbmNlSWQ6IHN0cmluZztcclxuICBjb21wZXRlbmNlVGl0bGU6IHN0cmluZztcclxuICB2YWx1ZTogbnVtYmVyIHwgbnVsbDtcclxufTtcclxuXHJcbnR5cGUgRW1wbG95ZWVEYXRhMiA9IHtcclxuICByZWNvcmRJZDogc3RyaW5nO1xyXG4gIGF1dGhvcklkOiBzdHJpbmc7XHJcbiAgYXV0aG9yVXNlcm5hbWU6IHN0cmluZztcclxuICBjb21wZXRlbmNlczogQ29tcGV0ZW5jZTJbXTtcclxuICBzdWJtaXR0ZWRBdDogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGhhbmtZb3VQYWdlKHsgc3VydmV5RGF0YSwgY29tcGV0ZW5jZVRpdGxlcywgb25GaW5pc2ggfTogeyBzdXJ2ZXlEYXRhOiBFbXBsb3llZURhdGEyW107IGNvbXBldGVuY2VUaXRsZXM6IHN0cmluZ1tdOyBvbkZpbmlzaDogKCkgPT4gdm9pZCB9KSB7XHJcbiAgY29uc29sZS5sb2coc3VydmV5RGF0YSk7XHJcbiAgY29uc3QgZ2V0U2tpbGxDb2xvciA9ICh2YWx1ZTogbnVtYmVyIHwgbnVsbCkgPT4ge1xyXG4gICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgcmV0dXJuIFwiYmctWyNlYjQ0NDRdXCI7XHJcbiAgICAgIGNhc2UgMjpcclxuICAgICAgICByZXR1cm4gXCJiZy1bI2ZmOTMwMF1cIjtcclxuICAgICAgY2FzZSAzOlxyXG4gICAgICAgIHJldHVybiBcImJnLXllbGxvdy0zMDBcIjtcclxuICAgICAgY2FzZSA0OlxyXG4gICAgICAgIHJldHVybiBcImJnLVsjYTVmZjk5XVwiO1xyXG4gICAgICBjYXNlIDU6XHJcbiAgICAgICAgcmV0dXJuIFwiYmctWyMwMGZmMmRdXCI7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIFwiYmctZ3JheS0zMDBcIjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctWyMxZTFlMWVdIHRleHQtd2hpdGUgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtOFwiPlxyXG4gICAgICA8SW1hZ2VcclxuICAgICAgICBzcmM9e3N0ZXBzfVxyXG4gICAgICAgIGFsdD1cIkNvbXBldGVuY2UgRm9ybVwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiaC0zMCB3LTYwIG10LTEwIG1heC13LWxnIHRyYW5zaXRpb24tYWxsXCJcclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtY2VudGVyIGZvbnQtYm9sZCBtYXgtdy1tZCBteC04IHRyYWNraW5nLXdpZGVcIj5cclxuICAgICAgICBUaGFuayB5b3UhIFlvdXIgZmVlZGJhY2sgd2lsbCBiZSBzZW50IHRvIHlvdXIgbWFuYWdlci5cclxuICAgICAgPC9oMj5cclxuXHJcbiAgICAgIHsvKiBUYWJsZSBDb250ZW50IFdyYXBwZXIgZm9yIFNpbmdsZSBVc2VyICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgIHsvKiBNYWluIFNjcm9sbGFibGUgQ29udGVudCB3aXRoIE92ZXJsYXlTY3JvbGxiYXJzICovfVxyXG4gICAgICAgICAgPE92ZXJsYXlTY3JvbGxiYXJzQ29tcG9uZW50XHJcbiAgICAgICAgICAgIG9wdGlvbnM9e3tcclxuICAgICAgICAgICAgICBzY3JvbGxiYXJzOiB7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBcImF1dG9cIiwgLy8gU2hvdyBzY3JvbGxiYXJzIHdoZW4gc2Nyb2xsaW5nXHJcbiAgICAgICAgICAgICAgICBhdXRvSGlkZTogXCJuZXZlclwiLCAvLyBLZWVwIHNjcm9sbGJhcnMgYWx3YXlzIHZpc2libGVcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvdmVyZmxvdy15LXNjcm9sbCBoaWRlLXZlcnRpY2FsLXNjcm9sbGJhclwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBcImNhbGMoMTAwdmggLSAyMDBweClcIiwgLy8gU2V0IGEgdmVydGljYWwgbWF4IGhlaWdodFxyXG4gICAgICAgICAgICAgIG92ZXJmbG93WDogXCJoaWRkZW5cIiwgLy8gTm8gaG9yaXpvbnRhbCBzY3JvbGxpbmdcclxuICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjQwcHhcIiwgLy8gUGFkZGluZyBmb3IgdmlzdWFsIGNsYXJpdHlcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHRhYmxlXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHRhYmxlLWF1dG8gYm9yZGVyIGJvcmRlci1ibGFja1wiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbGxhcHNlOiBcImNvbGxhcHNlXCIsXHJcbiAgICAgICAgICAgICAgICB0YWJsZUxheW91dDogXCJmaXhlZFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBIZWFkZXI6IFNraWxsIFRpdGxlcyAqL31cclxuICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctWyMwOGVjM2NdIHRleHQtYmxhY2sgZm9udC1ib2xkIHRleHQtY2VudGVyIHB4LTIgcHktNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgYmxhY2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI2MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IFwiMXB4IDFweCAwIGJsYWNrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFNLSUxMU1xyXG4gICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1bIzA4ZWMzY10gdGV4dC1ibGFjayBmb250LWJvbGQgdGV4dC1jZW50ZXIgcHgtMiBweS00XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBibGFja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjYwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogXCIxcHggMXB4IDAgYmxhY2tcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgTEVWRUxTXHJcbiAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgey8qIERpc3BsYXkgRGF0YSBmb3IgYSBTaW5nbGUgVXNlciAqL31cclxuICAgICAgICAgICAgICAgIHtzdXJ2ZXlEYXRhWzBdPy5jb21wZXRlbmNlcy5tYXAoKGNvbXBldGVuY2UsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogU2tpbGwgVGl0bGUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSB0ZXh0LWJsYWNrIGZvbnQtbWVkaXVtIHRleHQtY2VudGVyIHB4LTIgcHktNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGJsYWNrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI2MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjb21wZXRlbmNlLmNvbXBldGVuY2VUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBTa2lsbCBMZXZlbCAqL31cclxuICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtYmxhY2sgdGV4dC1jZW50ZXIgZm9udC1tZWRpdW0gcHgtMiBweS00IGJvcmRlciBib3JkZXItYmxhY2sgJHtnZXRTa2lsbENvbG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wZXRlbmNlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICApfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y29tcGV0ZW5jZS52YWx1ZSAhPT0gbnVsbCA/IGNvbXBldGVuY2UudmFsdWUgOiBcIk4vQVwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgPC9PdmVybGF5U2Nyb2xsYmFyc0NvbXBvbmVudD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMTAgbWItNVwiPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e29uRmluaXNofVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTQgcHgtNiBiZy1ncmVlbi01MDAgcm91bmRlZC1mdWxsIHRleHQtYmxhY2sgZm9udC1tZWRpdW0gaG92ZXI6YmctZ3JlZW4tNDAwIHRyYW5zaXRpb24tY29sb3JzXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBPS1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPXtsb2dvfVxyXG4gICAgICAgICAgYWx0PVwiU2tpbGxpdCBMb2dvXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTUgdy0yMCBtYXgtdy1sZyBteC1hdXRvIHRyYW5zaXRpb24tYWxsXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsImxvZ28iLCJzdGVwcyIsIkltYWdlIiwiT3ZlcmxheVNjcm9sbGJhcnNDb21wb25lbnQiLCJUaGFua1lvdVBhZ2UiLCJzdXJ2ZXlEYXRhIiwiY29tcGV0ZW5jZVRpdGxlcyIsIm9uRmluaXNoIiwiY29uc29sZSIsImxvZyIsImdldFNraWxsQ29sb3IiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsImgyIiwib3B0aW9ucyIsInNjcm9sbGJhcnMiLCJ2aXNpYmlsaXR5IiwiYXV0b0hpZGUiLCJzdHlsZSIsIm1heEhlaWdodCIsIm92ZXJmbG93WCIsInBhZGRpbmdCb3R0b20iLCJ0YWJsZSIsImJvcmRlckNvbGxhcHNlIiwidGFibGVMYXlvdXQiLCJ0aGVhZCIsInRyIiwidGgiLCJib3JkZXIiLCJoZWlnaHQiLCJib3hTaGFkb3ciLCJ0Ym9keSIsImNvbXBldGVuY2VzIiwibWFwIiwiY29tcGV0ZW5jZSIsImluZGV4IiwidGQiLCJjb21wZXRlbmNlVGl0bGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/thank-you-page.tsx\n"));

/***/ })

});