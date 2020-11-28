webpackHotUpdate_N_E("pages/mitgliederbereich",{

/***/ "./pages/mitgliederbereich.js":
/*!************************************!*\
  !*** ./pages/mitgliederbereich.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Mitgliederbereich; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_title_Title_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/title/Title.js */ \"./components/title/Title.js\");\n/* harmony import */ var _components_container_PageContainer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/container/PageContainer.js */ \"./components/container/PageContainer.js\");\n/* harmony import */ var _components_container_ContentContainer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/container/ContentContainer.js */ \"./components/container/ContentContainer.js\");\n/* harmony import */ var _components_container_SectionContainer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/container/SectionContainer.js */ \"./components/container/SectionContainer.js\");\n/* harmony import */ var _components_paragraph_Paragraph_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/paragraph/Paragraph.js */ \"./components/paragraph/Paragraph.js\");\n/* harmony import */ var _lib_db_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/db.js */ \"./lib/db.js\");\n\n\n\nvar _jsxFileName = \"/Users/martinzimmer/github/ohregano-website/pages/mitgliederbereich.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\nfunction Mitgliederbereich() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      input = _useState[0],\n      setInput = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      displayTable = _useState2[0],\n      setDisplayTable = _useState2[1];\n\n  var tableData = [];\n  var renderData = [];\n  var test = \"tesfefst\";\n\n  var fetchData = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var db, result;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              db = Object(_lib_db_js__WEBPACK_IMPORTED_MODULE_9__[\"loadFirebase\"])();\n              _context.next = 3;\n              return new Promise(function (resolve, reject) {\n                db.firestore().collection('contacts/' + input + '/table').get().then(function (snapshot) {\n                  var data = [];\n                  snapshot.forEach(function (doc) {\n                    data.push(doc.data());\n                  });\n                  resolve(data);\n                })[\"catch\"](function (error) {\n                  reject([]);\n                });\n              });\n\n            case 3:\n              result = _context.sent;\n              return _context.abrupt(\"return\", result);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchData() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var handleClick = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {\n      var i;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              event.preventDefault();\n\n              if (!(input.length > 2)) {\n                _context2.next = 12;\n                break;\n              }\n\n              _context2.next = 4;\n              return fetchData();\n\n            case 4:\n              tableData = _context2.sent;\n              _context2.next = 7;\n              return tableData[0];\n\n            case 7:\n              _context2.t0 = _context2.sent;\n              _context2.t1 = undefined;\n\n              if (!(_context2.t0 != _context2.t1)) {\n                _context2.next = 12;\n                break;\n              }\n\n              for (i = 0; i < tableData.length; i++) {\n                console.log(tableData[i].name);\n                console.log(tableData[i].email);\n                renderData.push(tableData[i].name);\n                console.log(renderData);\n              }\n\n              setDisplayTable(true);\n\n            case 12:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function handleClick(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }\n  }, __jsx(_components_container_PageContainer_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    withFooter: true,\n    menuTypeLanding: false,\n    menuVisibility: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 5\n    }\n  }, __jsx(_components_container_ContentContainer_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }, __jsx(_components_container_SectionContainer_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }, __jsx(_components_title_Title_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    title: \"Mitgliederbereich\",\n    caps: false,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  }), __jsx(\"input\", {\n    value: input,\n    onChange: function onChange(e) {\n      return setInput(e.target.value);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 17\n    }\n  }), __jsx(\"button\", {\n    onClick: handleClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 17\n    }\n  }, \"Login\"), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 5\n    }\n  }, displayTable ? __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 26\n    }\n  }, \"Tabelle wird angezeigt.\", test) : __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }, \"Tabelle wird nicht gezeigt.\"))))));\n}\n\n_s(Mitgliederbereich, \"+haPeI5IcAqcObKa+MOaafcjjQM=\");\n\n_c = Mitgliederbereich;\n\nvar _c;\n\n$RefreshReg$(_c, \"Mitgliederbereich\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWl0Z2xpZWRlcmJlcmVpY2guanM/Y2FiZiJdLCJuYW1lcyI6WyJNaXRnbGllZGVyYmVyZWljaCIsInVzZVN0YXRlIiwiaW5wdXQiLCJzZXRJbnB1dCIsImRpc3BsYXlUYWJsZSIsInNldERpc3BsYXlUYWJsZSIsInRhYmxlRGF0YSIsInJlbmRlckRhdGEiLCJ0ZXN0IiwiZmV0Y2hEYXRhIiwiZGIiLCJsb2FkRmlyZWJhc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZpcmVzdG9yZSIsImNvbGxlY3Rpb24iLCJnZXQiLCJ0aGVuIiwic25hcHNob3QiLCJkYXRhIiwiZm9yRWFjaCIsImRvYyIsInB1c2giLCJlcnJvciIsInJlc3VsdCIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImxlbmd0aCIsInVuZGVmaW5lZCIsImkiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsImVtYWlsIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxpQkFBVCxHQUE2QjtBQUFBOztBQUFBLGtCQUVkQyxzREFBUSxDQUFDLEVBQUQsQ0FGTTtBQUFBLE1BRWpDQyxLQUZpQztBQUFBLE1BRTFCQyxRQUYwQjs7QUFBQSxtQkFHQUYsc0RBQVEsQ0FBQyxLQUFELENBSFI7QUFBQSxNQUdqQ0csWUFIaUM7QUFBQSxNQUduQkMsZUFIbUI7O0FBS3hDLE1BQUlDLFNBQVMsR0FBRyxFQUFoQjtBQUNBLE1BQUlDLFVBQVUsR0FBRyxFQUFqQjtBQUNBLE1BQUlDLElBQUksR0FBRyxVQUFYOztBQUVBLE1BQU1DLFNBQVM7QUFBQSxnTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUkMsZ0JBRFEsR0FDSEMsK0RBQVksRUFEVDtBQUFBO0FBQUEscUJBRUssSUFB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QUE7QUFBQTtBQUFBO0FBQUEsYUFIUixFQUlKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTXRCLFlBQVksR0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUEyQkksSUFBM0IsQ0FBSCxHQUVkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBRkosQ0FKSSxDQURGLENBREYsQ0FEQSxDQURGO0FBaUJEOztHQTlEdUJSLGlCOztLQUFBQSxpQiIsImZpbGUiOiIuL3BhZ2VzL21pdGdsaWVkZXJiZXJlaWNoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFRpdGxlIGZyb20gJy4uL2NvbXBvbmVudHMvdGl0bGUvVGl0bGUuanMnXG5pbXBvcnQgUGFnZUNvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lci9QYWdlQ29udGFpbmVyLmpzJ1xuaW1wb3J0IENvbnRlbnRDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXIvQ29udGVudENvbnRhaW5lci5qcydcbmltcG9ydCBTZWN0aW9uQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFpbmVyL1NlY3Rpb25Db250YWluZXIuanMnXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gJy4uL2NvbXBvbmVudHMvcGFyYWdyYXBoL1BhcmFncmFwaC5qcydcbmltcG9ydCB7IGxvYWRGaXJlYmFzZSB9IGZyb20gJy4uL2xpYi9kYi5qcydcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWl0Z2xpZWRlcmJlcmVpY2goKSB7XG5cbiAgICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZGlzcGxheVRhYmxlLCBzZXREaXNwbGF5VGFibGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgbGV0IHRhYmxlRGF0YSA9IFtdXG4gICAgbGV0IHJlbmRlckRhdGEgPSBbXVxuICAgIGxldCB0ZXN0ID0gXCJ0ZXNmZWZzdFwiXG5cbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRiID0gbG9hZEZpcmViYXNlKCk7XG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBkYi5maXJlc3RvcmUoKVxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oJ2NvbnRhY3RzLycgKyBpbnB1dCArICcvdGFibGUnKVxuICAgICAgICAgICAgLmdldCgpXG4gICAgICAgICAgICAudGhlbihzbmFwc2hvdCA9PiB7IFxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gW11cbiAgICAgICAgICAgICAgICBzbmFwc2hvdC5mb3JFYWNoKGRvYyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaChkb2MuZGF0YSgpKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFtdKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZihpbnB1dC5sZW5ndGggPiAyICkge1xuICAgICAgICAgICAgdGFibGVEYXRhID0gYXdhaXQgZmV0Y2hEYXRhKCk7XG4gICAgICAgICAgICBpZihhd2FpdCB0YWJsZURhdGFbMF0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRhYmxlRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFibGVEYXRhW2ldLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFibGVEYXRhW2ldLmVtYWlsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckRhdGEucHVzaCh0YWJsZURhdGFbaV0ubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZW5kZXJEYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0RGlzcGxheVRhYmxlKHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICA8UGFnZUNvbnRhaW5lciB3aXRoRm9vdGVyPXt0cnVlfSBtZW51VHlwZUxhbmRpbmc9e2ZhbHNlfSBtZW51VmlzaWJpbGl0eT17dHJ1ZX0+XG4gICAgICA8Q29udGVudENvbnRhaW5lcj5cbiAgICAgICAgPFNlY3Rpb25Db250YWluZXI+XG4gICAgICAgICAgICA8VGl0bGUgdGl0bGU9XCJNaXRnbGllZGVyYmVyZWljaFwiIGNhcHM9e2ZhbHNlfSAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17aW5wdXR9IG9uQ2hhbmdlPXtlID0+IHNldElucHV0KGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PkxvZ2luPC9idXR0b24+XG4gICAgPGRpdj57ZGlzcGxheVRhYmxlID8gPHA+VGFiZWxsZSB3aXJkIGFuZ2V6ZWlndC57dGVzdH08L3A+XG4gICAgICAgIDogXG4gICAgICAgIDxwPlRhYmVsbGUgd2lyZCBuaWNodCBnZXplaWd0LjwvcD59XG4gICAgPC9kaXY+XG4gICAgICAgIDwvU2VjdGlvbkNvbnRhaW5lcj5cbiAgICAgIDwvQ29udGVudENvbnRhaW5lcj5cbiAgICA8L1BhZ2VDb250YWluZXI+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/mitgliederbereich.js\n");

/***/ })

})