webpackHotUpdate_N_E("pages/mitgliederbereich",{

/***/ "./pages/mitgliederbereich.js":
/*!************************************!*\
  !*** ./pages/mitgliederbereich.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Mitgliederbereich; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_title_Title_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/title/Title.js */ \"./components/title/Title.js\");\n/* harmony import */ var _components_container_PageContainer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/container/PageContainer.js */ \"./components/container/PageContainer.js\");\n/* harmony import */ var _components_container_ContentContainer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/container/ContentContainer.js */ \"./components/container/ContentContainer.js\");\n/* harmony import */ var _components_container_SectionContainer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/container/SectionContainer.js */ \"./components/container/SectionContainer.js\");\n/* harmony import */ var _components_paragraph_Paragraph_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/paragraph/Paragraph.js */ \"./components/paragraph/Paragraph.js\");\n/* harmony import */ var _lib_db_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/db.js */ \"./lib/db.js\");\n\n\n\nvar _jsxFileName = \"/Users/martinzimmer/github/ohregano-website/pages/mitgliederbereich.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\nfunction Mitgliederbereich() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      input = _useState[0],\n      setInput = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      displayTable = _useState2[0],\n      setDisplayTable = _useState2[1];\n\n  var tableData = [];\n  var renderedTable = '';\n\n  var fetchData = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var db, result;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              db = Object(_lib_db_js__WEBPACK_IMPORTED_MODULE_9__[\"loadFirebase\"])();\n              _context.next = 3;\n              return new Promise(function (resolve, reject) {\n                db.firestore().collection('contacts/' + input + '/table').get().then(function (snapshot) {\n                  var data = [];\n                  snapshot.forEach(function (doc) {\n                    data.push(doc.data());\n                  });\n                  resolve(data);\n                })[\"catch\"](function (error) {\n                  reject([]);\n                });\n              });\n\n            case 3:\n              result = _context.sent;\n              return _context.abrupt(\"return\", result);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchData() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var handleClick = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              event.preventDefault();\n\n              if (!(input.length > 2)) {\n                _context2.next = 12;\n                break;\n              }\n\n              _context2.next = 4;\n              return fetchData();\n\n            case 4:\n              tableData = _context2.sent;\n              console.log(tableData);\n              _context2.next = 8;\n              return tableData[0];\n\n            case 8:\n              _context2.t0 = _context2.sent;\n              _context2.t1 = undefined;\n\n              if (!(_context2.t0 != _context2.t1)) {\n                _context2.next = 12;\n                break;\n              }\n\n              setDisplayTable(true);\n\n            case 12:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function handleClick(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 5\n    }\n  }, __jsx(_components_container_PageContainer_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    withFooter: true,\n    menuTypeLanding: false,\n    menuVisibility: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }, __jsx(_components_container_ContentContainer_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, __jsx(_components_container_SectionContainer_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, __jsx(_components_title_Title_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    title: \"Mitgliederbereich\",\n    caps: false,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }\n  }), __jsx(\"input\", {\n    value: input,\n    onChange: function onChange(e) {\n      return setInput(e.target.value);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 17\n    }\n  }), __jsx(\"button\", {\n    onClick: handleClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 17\n    }\n  }, \"Login\"), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 17\n    }\n  }, displayTable ? __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 38\n    }\n  }, tableData.map(function (tableElement) {\n    return tableElement.map(function (tableElementValue) {\n      return __jsx(\"p\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 43\n        }\n      }, tableElementValue.name);\n    });\n  })) : __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 86\n    }\n  }, \"Tabelle wird nicht gezeigt.\"))))));\n}\n\n_s(Mitgliederbereich, \"+haPeI5IcAqcObKa+MOaafcjjQM=\");\n\n_c = Mitgliederbereich;\n\nvar _c;\n\n$RefreshReg$(_c, \"Mitgliederbereich\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWl0Z2xpZWRlcmJlcmVpY2guanM/Y2FiZiJdLCJuYW1lcyI6WyJNaXRnbGllZGVyYmVyZWljaCIsInVzZVN0YXRlIiwiaW5wdXQiLCJzZXRJbnB1dCIsImRpc3BsYXlUYWJsZSIsInNldERpc3BsYXlUYWJsZSIsInRhYmxlRGF0YSIsInJlbmRlcmVkVGFibGUiLCJmZXRjaERhdGEiLCJkYiIsImxvYWRGaXJlYmFzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsImdldCIsInRoZW4iLCJzbmFwc2hvdCIsImRhdGEiLCJmb3JFYWNoIiwiZG9jIiwicHVzaCIsImVycm9yIiwicmVzdWx0IiwiaGFuZGxlQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInVuZGVmaW5lZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsInRhYmxlRWxlbWVudCIsInRhYmxlRWxlbWVudFZhbHVlIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsaUJBQVQsR0FBNkI7QUFBQTs7QUFBQTs7QUFBQSxrQkFFZEMsc0RBQVEsQ0FBQyxFQUFELENBRk07QUFBQSxNQUVqQ0MsS0FGaUM7QUFBQSxNQUUxQkMsUUFGMEI7O0FBQUEsbUJBR0FGLHNEQUFRLENBQUMsS0FBRCxDQUhSO0FBQUEsTUFHakNHLFlBSGlDO0FBQUEsTUFHbkJDLGVBSG1COztBQUt4QyxNQUFJQyxTQUFTLEdBQUcsRUFBaEI7QUFDQSxNQUFJQyxhQUFhLEdBQUcsRUFBcEI7O0FBRUEsTUFBTUMsU0FBUztBQUFBLGdNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNSQyxnQkFEUSxHQUNIQywrREFBWSxFQURUO0FBQUE7QUFBQSxxQkFF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Q0FEdUQ7QUFBQSxHQUFkLENBQU4sQ0FBSCxHQUNtRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURyRSxDQUpSLENBREYsQ0FERixDQURBLENBREY7QUFlRDs7R0F4RHVCdEMsaUI7O0tBQUFBLGlCIiwiZmlsZSI6Ii4vcGFnZXMvbWl0Z2xpZWRlcmJlcmVpY2guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vY29tcG9uZW50cy90aXRsZS9UaXRsZS5qcydcbmltcG9ydCBQYWdlQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFpbmVyL1BhZ2VDb250YWluZXIuanMnXG5pbXBvcnQgQ29udGVudENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lci9Db250ZW50Q29udGFpbmVyLmpzJ1xuaW1wb3J0IFNlY3Rpb25Db250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXIvU2VjdGlvbkNvbnRhaW5lci5qcydcbmltcG9ydCBQYXJhZ3JhcGggZnJvbSAnLi4vY29tcG9uZW50cy9wYXJhZ3JhcGgvUGFyYWdyYXBoLmpzJ1xuaW1wb3J0IHsgbG9hZEZpcmViYXNlIH0gZnJvbSAnLi4vbGliL2RiLmpzJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNaXRnbGllZGVyYmVyZWljaCgpIHtcblxuICAgIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtkaXNwbGF5VGFibGUsIHNldERpc3BsYXlUYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBsZXQgdGFibGVEYXRhID0gW11cbiAgICBsZXQgcmVuZGVyZWRUYWJsZSA9ICcnXG5cbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRiID0gbG9hZEZpcmViYXNlKCk7XG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBkYi5maXJlc3RvcmUoKVxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oJ2NvbnRhY3RzLycgKyBpbnB1dCArICcvdGFibGUnKVxuICAgICAgICAgICAgLmdldCgpXG4gICAgICAgICAgICAudGhlbihzbmFwc2hvdCA9PiB7IFxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gW11cbiAgICAgICAgICAgICAgICBzbmFwc2hvdC5mb3JFYWNoKGRvYyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaChkb2MuZGF0YSgpKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFtdKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZihpbnB1dC5sZW5ndGggPiAyICkge1xuICAgICAgICAgICAgdGFibGVEYXRhID0gYXdhaXQgZmV0Y2hEYXRhKClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhYmxlRGF0YSlcbiAgICAgICAgICAgIGlmKGF3YWl0IHRhYmxlRGF0YVswXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzZXREaXNwbGF5VGFibGUodHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgIDxQYWdlQ29udGFpbmVyIHdpdGhGb290ZXI9e3RydWV9IG1lbnVUeXBlTGFuZGluZz17ZmFsc2V9IG1lbnVWaXNpYmlsaXR5PXt0cnVlfT5cbiAgICAgIDxDb250ZW50Q29udGFpbmVyPlxuICAgICAgICA8U2VjdGlvbkNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxUaXRsZSB0aXRsZT1cIk1pdGdsaWVkZXJiZXJlaWNoXCIgY2Fwcz17ZmFsc2V9IC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtpbnB1dH0gb25DaGFuZ2U9e2UgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+TG9naW48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2PntkaXNwbGF5VGFibGUgPyA8ZGl2Pnt0YWJsZURhdGEubWFwKCh0YWJsZUVsZW1lbnQpID0+XG4gIHRhYmxlRWxlbWVudC5tYXAoKHRhYmxlRWxlbWVudFZhbHVlKSA9PiA8cD57dGFibGVFbGVtZW50VmFsdWUubmFtZX08L3A+KSl9PC9kaXY+IDogPHA+VGFiZWxsZSB3aXJkIG5pY2h0IGdlemVpZ3QuPC9wPn08L2Rpdj5cbiAgICAgICAgPC9TZWN0aW9uQ29udGFpbmVyPlxuICAgICAgPC9Db250ZW50Q29udGFpbmVyPlxuICAgIDwvUGFnZUNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/mitgliederbereich.js\n");

/***/ })

})