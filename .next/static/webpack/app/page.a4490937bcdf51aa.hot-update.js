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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"6926d9a9c222\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2FiYjAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI2OTI2ZDlhOWMyMjJcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/thank-you-page.tsx":
/*!***************************************!*\
  !*** ./components/thank-you-page.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ThankYouPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _images_skillit_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/skillit.png */ \"(app-pages-browser)/./components/images/skillit.png\");\n/* harmony import */ var _images_steps_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/steps.png */ \"(app-pages-browser)/./components/images/steps.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! overlayscrollbars-react */ \"(app-pages-browser)/./node_modules/overlayscrollbars-react/overlayscrollbars-react.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction ThankYouPage(param) {\n    let { onFinish } = param;\n    var _surveyData_;\n    _s();\n    const [surveyData, setSurveyData] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const getSkillColor = (value)=>{\n        switch(value){\n            case 1:\n                return \"bg-[#eb4444]\";\n            case 2:\n                return \"bg-[#ff9300]\";\n            case 3:\n                return \"bg-yellow-300\";\n            case 4:\n                return \"bg-[#a5ff99]\";\n            case 5:\n                return \"bg-[#00ff2d]\";\n            default:\n                return \"bg-gray-300\";\n        }\n    };\n    const finalizeDraft = async ()=>{\n        if (!token) {\n            console.error(\"No token found, user not logged in.\");\n            return;\n        }\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"https://localhost:7278/api/questions/finalizeDraft\", {}, {\n                headers: {\n                    Authorization: \"Bearer \".concat(token),\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            setSurveyData(response.data);\n        } catch (error) {\n            console.error(\"Error finalizing drafts:\", error);\n        }\n    };\n    finalizeDraft();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-[#1e1e1e] text-white flex flex-col items-center justify-between p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                src: _images_steps_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                alt: \"Competence Form\",\n                className: \"h-30 w-60 mt-10 max-w-lg transition-all\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vartotojas\\\\Documents\\\\Coding projects\\\\HTML_CSS_JS\\\\Competence-form\\\\components\\\\thank-you-page.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-xl text-center font-bold max-w-md mx-8 tracking-wide\",\n                children: \"Thank you! Your feedback will be sent to your manager.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vartotojas\\\\Documents\\\\Coding projects\\\\HTML_CSS_JS\\\\Competence-form\\\\components\\\\thank-you-page.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"overflow-hidden\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_7__.OverlayScrollbarsComponent, {\n                        options: {\n                            scrollbars: {\n                                visibility: \"auto\",\n                                autoHide: \"never\"\n                            }\n                        },\n                        className: \"overflow-y-scroll hide-vertical-scrollbar\",\n                        style: {\n                            maxHeight: \"calc(100vh - 200px)\",\n                            overflowX: \"hidden\",\n                            paddingBottom: \"40px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                            className: \"w-full table-auto border border-black\",\n                            style: {\n                                borderCollapse: \"collapse\",\n                                tableLayout: \"fixed\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                className: \"bg-[#08ec3c] text-black font-bold text-center px-2 py-4\",\n                                                style: {\n                                                    border: \"1px solid black\",\n                                                    height: \"60px\",\n                                                    boxShadow: \"1px 1px 0 black\"\n                                                },\n                                                children: \"SKILLS\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Vartotojas\\\\Documents\\\\Coding projects\\\\HTML_CSS_JS\\\\Competence-form\\\\components\\\\thank-you-page.tsx\",\n                                                lineNumber: 109,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                className: \"bg-[#08ec3c] text-black font-bold text-center px-2 py-4\",\n                                                style: {\n                                                    border: \"1px solid black\",\n                                                    height: \"60px\",\n                                                    boxShadow: \"1px 1px 0 black\"\n                                                },\n                                                children: \"LEVELS\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Vartotojas\\\\Documents\\\\Coding projects\\\\HTML_CSS_JS\\\\Competence-form\\\\components\\\\thank-you-page.tsx\",\n                                                lineNumber: 119,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Vartotojas\\\\Documents\\\\Coding projects\\\\HTML_CSS_JS\\\\Competence-form\\\\components\\\\thank-you-page.tsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Vartotojas\\\\Documents\\\\Coding projects\\\\HTML_CSS_JS\\\\Competence-form\\\\components\\\\thank-you-page.tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                    children: (_surveyData_ = surveyData[0]) === null || _surveyData_ === void 0 ? void 0 : _surveyData_.competences.map((competence, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    className: \"bg-white text-black font-medium text-center px-2 py-4\",\n                                                    style: {\n                                                        border: \"1px solid black\",\n                                                        height: \"60px\"\n                                                    },\n                                                    children: competence.competenceTitle\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Vartotojas\\\\Documents\\\\Coding projects\\\\HTML_CSS_JS\\\\Competence-form\\\\components\\\\thank-you-page.tsx\",\n                                                    lineNumber: 136,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    className: \"text-black text-center font-medium px-2 py-4 border border-black \".concat(getSkillColor(competence.value)),\n                                                    style: {\n                                                        height: \"60px\"\n                                                    },\n                                                    children: competence.value !== null ? competence.value : \"N/A\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Vartotojas\\\\Documents\\\\Coding projects\\\\HTML_CSS_JS\\\\Competence-form\\\\components\\\\thank-you-page.tsx\",\n                                                    lineNumber: 146,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, index, true, {\n                                            fileName: \"C:\\\\Users\\\\Vartotojas\\\\Documents\\\\Coding projects\\\\HTML_CSS_JS\\\\Competence-form\\\\components\\\\thank-you-page.tsx\",\n                                            lineNumber: 134,\n                                            columnNumber: 19\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Vartotojas\\\\Documents\\\\Coding projects\\\\HTML_CSS_JS\\\\Competence-form\\\\components\\\\thank-you-page.tsx\",\n                                    lineNumber: 131,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Vartotojas\\\\Documents\\\\Coding projects\\\\HTML_CSS_JS\\\\Competence-form\\\\components\\\\thank-you-page.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Vartotojas\\\\Documents\\\\Coding projects\\\\HTML_CSS_JS\\\\Competence-form\\\\components\\\\thank-you-page.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vartotojas\\\\Documents\\\\Coding projects\\\\HTML_CSS_JS\\\\Competence-form\\\\components\\\\thank-you-page.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vartotojas\\\\Documents\\\\Coding projects\\\\HTML_CSS_JS\\\\Competence-form\\\\components\\\\thank-you-page.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space-y-10 mb-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        onClick: onFinish,\n                        className: \"w-full py-4 px-6 bg-green-500 rounded-full text-black font-medium hover:bg-green-400 transition-colors\",\n                        children: \"OK\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Vartotojas\\\\Documents\\\\Coding projects\\\\HTML_CSS_JS\\\\Competence-form\\\\components\\\\thank-you-page.tsx\",\n                        lineNumber: 165,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        src: _images_skillit_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                        alt: \"Skillit Logo\",\n                        className: \"h-15 w-20 max-w-lg mx-auto transition-all\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Vartotojas\\\\Documents\\\\Coding projects\\\\HTML_CSS_JS\\\\Competence-form\\\\components\\\\thank-you-page.tsx\",\n                        lineNumber: 171,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Vartotojas\\\\Documents\\\\Coding projects\\\\HTML_CSS_JS\\\\Competence-form\\\\components\\\\thank-you-page.tsx\",\n                lineNumber: 164,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Vartotojas\\\\Documents\\\\Coding projects\\\\HTML_CSS_JS\\\\Competence-form\\\\components\\\\thank-you-page.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_s(ThankYouPage, \"0qZUbT5kc8I1okXUM9e5TGEnrjk=\");\n_c = ThankYouPage;\nvar _c;\n$RefreshReg$(_c, \"ThankYouPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdGhhbmsteW91LXBhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUErQztBQUNQO0FBQ0Q7QUFDUjtBQUNzQztBQUNwQztBQUNQO0FBZ0JYLFNBQVNPLGFBQWEsS0FBc0M7UUFBdEMsRUFBRUMsUUFBUSxFQUE0QixHQUF0QztRQThHcEJDOztJQTdHZixNQUFNLENBQUNBLFlBQVlDLGNBQWMsR0FBR0wsK0NBQVFBLENBQWlCLEVBQUU7SUFFL0QsTUFBTU0sZ0JBQWdCLENBQUNDO1FBQ3JCLE9BQVFBO1lBQ04sS0FBSztnQkFDSCxPQUFPO1lBQ1QsS0FBSztnQkFDSCxPQUFPO1lBQ1QsS0FBSztnQkFDSCxPQUFPO1lBQ1QsS0FBSztnQkFDSCxPQUFPO1lBQ1QsS0FBSztnQkFDSCxPQUFPO1lBQ1Q7Z0JBQ0UsT0FBTztRQUNYO0lBQ0Y7SUFFQSxNQUFNQyxnQkFBZ0I7UUFDcEIsSUFBSSxDQUFDQyxPQUFPO1lBQ1ZDLFFBQVFDLEtBQUssQ0FBQztZQUNkO1FBQ0Y7UUFFQSxJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNWCw2Q0FBS0EsQ0FBQ1ksSUFBSSxDQUMvQixzREFDQSxDQUFDLEdBQ0Q7Z0JBQ0VDLFNBQVM7b0JBQ1BDLGVBQWUsVUFBZ0IsT0FBTk47b0JBQ3pCLGdCQUFnQjtnQkFDbEI7WUFDRjtZQUVGSixjQUFjTyxTQUFTSSxJQUFJO1FBQzdCLEVBQ0EsT0FBT0wsT0FBTztZQUNaRCxRQUFRQyxLQUFLLENBQUMsNEJBQTRCQTtRQUM1QztJQUNGO0lBRUFIO0lBRUEscUJBQ0UsOERBQUNTO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDcEIsa0RBQUtBO2dCQUNKcUIsS0FBS3RCLHlEQUFLQTtnQkFDVnVCLEtBQUk7Z0JBQ0pGLFdBQVU7Ozs7OzswQkFHWiw4REFBQ0c7Z0JBQUdILFdBQVU7MEJBQTREOzs7Ozs7MEJBSzFFLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBRWIsNEVBQUNuQiwrRUFBMEJBO3dCQUN6QnVCLFNBQVM7NEJBQ1BDLFlBQVk7Z0NBQ1ZDLFlBQVk7Z0NBQ1pDLFVBQVU7NEJBQ1o7d0JBQ0Y7d0JBQ0FQLFdBQVU7d0JBQ1ZRLE9BQU87NEJBQ0xDLFdBQVc7NEJBQ1hDLFdBQVc7NEJBQ1hDLGVBQWU7d0JBQ2pCO2tDQUVBLDRFQUFDQzs0QkFDQ1osV0FBVTs0QkFDVlEsT0FBTztnQ0FDTEssZ0JBQWdCO2dDQUNoQkMsYUFBYTs0QkFDZjs7OENBRUEsOERBQUNDOzhDQUNDLDRFQUFDQzs7MERBRUMsOERBQUNDO2dEQUNDakIsV0FBVTtnREFDVlEsT0FBTztvREFDTFUsUUFBUTtvREFDUkMsUUFBUTtvREFDUkMsV0FBVztnREFDYjswREFDRDs7Ozs7OzBEQUdELDhEQUFDSDtnREFDQ2pCLFdBQVU7Z0RBQ1ZRLE9BQU87b0RBQ0xVLFFBQVE7b0RBQ1JDLFFBQVE7b0RBQ1JDLFdBQVc7Z0RBQ2I7MERBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUtMLDhEQUFDQzsrQ0FFRW5DLGVBQUFBLFVBQVUsQ0FBQyxFQUFFLGNBQWJBLG1DQUFBQSxhQUFlb0MsV0FBVyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsWUFBWUMsc0JBQzNDLDhEQUFDVDs7OERBRUMsOERBQUNVO29EQUNDMUIsV0FBVTtvREFDVlEsT0FBTzt3REFDTFUsUUFBUTt3REFDUkMsUUFBUTtvREFDVjs4REFFQ0ssV0FBV0csZUFBZTs7Ozs7OzhEQUc3Qiw4REFBQ0Q7b0RBQ0MxQixXQUFXLG9FQUVULE9BRjZFWixjQUM3RW9DLFdBQVduQyxLQUFLO29EQUVsQm1CLE9BQU87d0RBQ0xXLFFBQVE7b0RBQ1Y7OERBRUNLLFdBQVduQyxLQUFLLEtBQUssT0FBT21DLFdBQVduQyxLQUFLLEdBQUc7Ozs7Ozs7MkNBcEIzQ29DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQThCckIsOERBQUMxQjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUN2Qix5REFBTUE7d0JBQ0xtRCxTQUFTM0M7d0JBQ1RlLFdBQVU7a0NBQ1g7Ozs7OztrQ0FHRCw4REFBQ3BCLGtEQUFLQTt3QkFDSnFCLEtBQUt2QiwyREFBSUE7d0JBQ1R3QixLQUFJO3dCQUNKRixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEI7R0E1SndCaEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aGFuay15b3UtcGFnZS50c3g/NWE2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiXHJcbmltcG9ydCBsb2dvIGZyb20gXCIuL2ltYWdlcy9za2lsbGl0LnBuZ1wiO1xyXG5pbXBvcnQgc3RlcHMgZnJvbSBcIi4vaW1hZ2VzL3N0ZXBzLnBuZ1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IE92ZXJsYXlTY3JvbGxiYXJzQ29tcG9uZW50IH0gZnJvbSBcIm92ZXJsYXlzY3JvbGxiYXJzLXJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbnR5cGUgQ29tcGV0ZW5jZSA9IHtcclxuICBjb21wZXRlbmNlSWQ6IHN0cmluZztcclxuICBjb21wZXRlbmNlVGl0bGU6IHN0cmluZztcclxuICB2YWx1ZTogbnVtYmVyIHwgbnVsbDtcclxufTtcclxuXHJcbnR5cGUgRW1wbG95ZWVEYXRhID0ge1xyXG4gIHJlY29yZElkOiBzdHJpbmc7XHJcbiAgYXV0aG9ySWQ6IHN0cmluZztcclxuICBhdXRob3JVc2VybmFtZTogc3RyaW5nO1xyXG4gIGNvbXBldGVuY2VzOiBDb21wZXRlbmNlW107XHJcbiAgc3VibWl0dGVkQXQ6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRoYW5rWW91UGFnZSh7IG9uRmluaXNoIH06IHsgb25GaW5pc2g6ICgpID0+IHZvaWQgfSkge1xyXG4gIGNvbnN0IFtzdXJ2ZXlEYXRhLCBzZXRTdXJ2ZXlEYXRhXSA9IHVzZVN0YXRlPEVtcGxveWVlRGF0YVtdPihbXSk7XHJcblxyXG4gIGNvbnN0IGdldFNraWxsQ29sb3IgPSAodmFsdWU6IG51bWJlciB8IG51bGwpID0+IHtcclxuICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHJldHVybiBcImJnLVsjZWI0NDQ0XVwiO1xyXG4gICAgICBjYXNlIDI6XHJcbiAgICAgICAgcmV0dXJuIFwiYmctWyNmZjkzMDBdXCI7XHJcbiAgICAgIGNhc2UgMzpcclxuICAgICAgICByZXR1cm4gXCJiZy15ZWxsb3ctMzAwXCI7XHJcbiAgICAgIGNhc2UgNDpcclxuICAgICAgICByZXR1cm4gXCJiZy1bI2E1ZmY5OV1cIjtcclxuICAgICAgY2FzZSA1OlxyXG4gICAgICAgIHJldHVybiBcImJnLVsjMDBmZjJkXVwiO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBcImJnLWdyYXktMzAwXCI7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmluYWxpemVEcmFmdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIk5vIHRva2VuIGZvdW5kLCB1c2VyIG5vdCBsb2dnZWQgaW4uXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIFwiaHR0cHM6Ly9sb2NhbGhvc3Q6NzI3OC9hcGkvcXVlc3Rpb25zL2ZpbmFsaXplRHJhZnRcIixcclxuICAgICAgICB7fSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICBzZXRTdXJ2ZXlEYXRhKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmaW5hbGl6aW5nIGRyYWZ0czpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmluYWxpemVEcmFmdCgpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1bIzFlMWUxZV0gdGV4dC13aGl0ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC04XCI+XHJcbiAgICAgIDxJbWFnZVxyXG4gICAgICAgIHNyYz17c3RlcHN9XHJcbiAgICAgICAgYWx0PVwiQ29tcGV0ZW5jZSBGb3JtXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJoLTMwIHctNjAgbXQtMTAgbWF4LXctbGcgdHJhbnNpdGlvbi1hbGxcIlxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1jZW50ZXIgZm9udC1ib2xkIG1heC13LW1kIG14LTggdHJhY2tpbmctd2lkZVwiPlxyXG4gICAgICAgIFRoYW5rIHlvdSEgWW91ciBmZWVkYmFjayB3aWxsIGJlIHNlbnQgdG8geW91ciBtYW5hZ2VyLlxyXG4gICAgICA8L2gyPlxyXG5cclxuICAgICAgey8qIFRhYmxlIENvbnRlbnQgV3JhcHBlciBmb3IgU2luZ2xlIFVzZXIgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgey8qIE1haW4gU2Nyb2xsYWJsZSBDb250ZW50IHdpdGggT3ZlcmxheVNjcm9sbGJhcnMgKi99XHJcbiAgICAgICAgICA8T3ZlcmxheVNjcm9sbGJhcnNDb21wb25lbnRcclxuICAgICAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgICAgIHNjcm9sbGJhcnM6IHtcclxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IFwiYXV0b1wiLCAvLyBTaG93IHNjcm9sbGJhcnMgd2hlbiBzY3JvbGxpbmdcclxuICAgICAgICAgICAgICAgIGF1dG9IaWRlOiBcIm5ldmVyXCIsIC8vIEtlZXAgc2Nyb2xsYmFycyBhbHdheXMgdmlzaWJsZVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm92ZXJmbG93LXktc2Nyb2xsIGhpZGUtdmVydGljYWwtc2Nyb2xsYmFyXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBtYXhIZWlnaHQ6IFwiY2FsYygxMDB2aCAtIDIwMHB4KVwiLCAvLyBTZXQgYSB2ZXJ0aWNhbCBtYXggaGVpZ2h0XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3dYOiBcImhpZGRlblwiLCAvLyBObyBob3Jpem9udGFsIHNjcm9sbGluZ1xyXG4gICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiNDBweFwiLCAvLyBQYWRkaW5nIGZvciB2aXN1YWwgY2xhcml0eVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8dGFibGVcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgdGFibGUtYXV0byBib3JkZXIgYm9yZGVyLWJsYWNrXCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sbGFwc2U6IFwiY29sbGFwc2VcIixcclxuICAgICAgICAgICAgICAgIHRhYmxlTGF5b3V0OiBcImZpeGVkXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgey8qIEhlYWRlcjogU2tpbGwgVGl0bGVzICovfVxyXG4gICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1bIzA4ZWMzY10gdGV4dC1ibGFjayBmb250LWJvbGQgdGV4dC1jZW50ZXIgcHgtMiBweS00XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBibGFja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjYwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogXCIxcHggMXB4IDAgYmxhY2tcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgU0tJTExTXHJcbiAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLVsjMDhlYzNjXSB0ZXh0LWJsYWNrIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciBweC0yIHB5LTRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGJsYWNrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIjFweCAxcHggMCBibGFja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBMRVZFTFNcclxuICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7LyogRGlzcGxheSBEYXRhIGZvciBhIFNpbmdsZSBVc2VyICovfVxyXG4gICAgICAgICAgICAgICAge3N1cnZleURhdGFbMF0/LmNvbXBldGVuY2VzLm1hcCgoY29tcGV0ZW5jZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBTa2lsbCBUaXRsZSAqL31cclxuICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHRleHQtYmxhY2sgZm9udC1tZWRpdW0gdGV4dC1jZW50ZXIgcHgtMiBweS00XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgYmxhY2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjYwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NvbXBldGVuY2UuY29tcGV0ZW5jZVRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFNraWxsIExldmVsICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1ibGFjayB0ZXh0LWNlbnRlciBmb250LW1lZGl1bSBweC0yIHB5LTQgYm9yZGVyIGJvcmRlci1ibGFjayAke2dldFNraWxsQ29sb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBldGVuY2UudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICl9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI2MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjb21wZXRlbmNlLnZhbHVlICE9PSBudWxsID8gY29tcGV0ZW5jZS52YWx1ZSA6IFwiTi9BXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICA8L092ZXJsYXlTY3JvbGxiYXJzQ29tcG9uZW50PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xMCBtYi01XCI+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17b25GaW5pc2h9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktNCBweC02IGJnLWdyZWVuLTUwMCByb3VuZGVkLWZ1bGwgdGV4dC1ibGFjayBmb250LW1lZGl1bSBob3ZlcjpiZy1ncmVlbi00MDAgdHJhbnNpdGlvbi1jb2xvcnNcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIE9LXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzcmM9e2xvZ299XHJcbiAgICAgICAgICBhbHQ9XCJTa2lsbGl0IExvZ29cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaC0xNSB3LTIwIG1heC13LWxnIG14LWF1dG8gdHJhbnNpdGlvbi1hbGxcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiQnV0dG9uIiwibG9nbyIsInN0ZXBzIiwiSW1hZ2UiLCJPdmVybGF5U2Nyb2xsYmFyc0NvbXBvbmVudCIsInVzZVN0YXRlIiwiYXhpb3MiLCJUaGFua1lvdVBhZ2UiLCJvbkZpbmlzaCIsInN1cnZleURhdGEiLCJzZXRTdXJ2ZXlEYXRhIiwiZ2V0U2tpbGxDb2xvciIsInZhbHVlIiwiZmluYWxpemVEcmFmdCIsInRva2VuIiwiY29uc29sZSIsImVycm9yIiwicmVzcG9uc2UiLCJwb3N0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJkYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwiaDIiLCJvcHRpb25zIiwic2Nyb2xsYmFycyIsInZpc2liaWxpdHkiLCJhdXRvSGlkZSIsInN0eWxlIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3dYIiwicGFkZGluZ0JvdHRvbSIsInRhYmxlIiwiYm9yZGVyQ29sbGFwc2UiLCJ0YWJsZUxheW91dCIsInRoZWFkIiwidHIiLCJ0aCIsImJvcmRlciIsImhlaWdodCIsImJveFNoYWRvdyIsInRib2R5IiwiY29tcGV0ZW5jZXMiLCJtYXAiLCJjb21wZXRlbmNlIiwiaW5kZXgiLCJ0ZCIsImNvbXBldGVuY2VUaXRsZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/thank-you-page.tsx\n"));

/***/ })

});