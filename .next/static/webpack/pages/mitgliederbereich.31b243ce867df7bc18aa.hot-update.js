webpackHotUpdate_N_E("pages/mitgliederbereich",{

/***/ "./pages/mitgliederbereich.js":
/*!************************************!*\
  !*** ./pages/mitgliederbereich.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Mitgliederbereich; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_title_Title_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/title/Title.js */ \"./components/title/Title.js\");\n/* harmony import */ var _components_container_PageContainer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/container/PageContainer.js */ \"./components/container/PageContainer.js\");\n/* harmony import */ var _components_container_ContentContainer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/container/ContentContainer.js */ \"./components/container/ContentContainer.js\");\n/* harmony import */ var _components_container_SectionContainer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/container/SectionContainer.js */ \"./components/container/SectionContainer.js\");\n/* harmony import */ var _components_paragraph_Paragraph_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/paragraph/Paragraph.js */ \"./components/paragraph/Paragraph.js\");\n/* harmony import */ var _lib_db_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/db.js */ \"./lib/db.js\");\n\n\n\nvar _jsxFileName = \"/Users/martinzimmer/github/ohregano-website/pages/mitgliederbereich.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\n\nMitgliederbereich.getInitialProps = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {\n    var db, data, querySnapshot;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            db = Object(_lib_db_js__WEBPACK_IMPORTED_MODULE_9__[\"loadFirebase\"])();\n            data = [];\n            _context.next = 4;\n            return db.firestore().collection('contacts/' + 'singvogel/' + password.toString()).get();\n\n          case 4:\n            querySnapshot = _context.sent;\n            querySnapshot.forEach(function (doc) {\n              data.push(doc.data());\n            });\n            return _context.abrupt(\"return\", {\n              data: data\n            });\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n/* function loadTable(password) {\n    const db = loadFirebase()\n    let data = []\n    const querySnapshot = db.firestore().collection('contacts/' + 'singvogel/' + password.toString()).get()\n    querySnapshot.forEach(doc => {\n      data.push(doc.data())\n    })\n    return {\n      data\n    }\n} */\n\n\nfunction Mitgliederbereich(_ref2) {\n  _s();\n\n  var data = _ref2.data;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('table'),\n      input = _useState[0],\n      setInput = _useState[1];\n\n  console.log(data[0].name);\n  console.log(input);\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }\n  }, __jsx(_components_container_PageContainer_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    withFooter: true,\n    menuTypeLanding: false,\n    menuVisibility: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }\n  }, __jsx(_components_container_ContentContainer_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }, __jsx(_components_container_SectionContainer_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }\n  }, __jsx(_components_title_Title_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    title: \"Mitgliederbereich\",\n    caps: false,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }), __jsx(\"form\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, __jsx(\"input\", {\n    value: input,\n    onChange: function onChange(e) {\n      return setInput(e.target.value);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  }), __jsx(\"button\", {\n    onClick: loadTable(input),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 17\n    }\n  }, \"Login\"))))));\n}\n\n_s(Mitgliederbereich, \"tYgiP8nYjFhgIaD5wY1xwrk2Tl8=\");\n\n_c = Mitgliederbereich;\n\nvar _c;\n\n$RefreshReg$(_c, \"Mitgliederbereich\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWl0Z2xpZWRlcmJlcmVpY2guanM/Y2FiZiJdLCJuYW1lcyI6WyJNaXRnbGllZGVyYmVyZWljaCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImRiIiwibG9hZEZpcmViYXNlIiwiZGF0YSIsImZpcmVzdG9yZSIsImNvbGxlY3Rpb24iLCJwYXNzd29yZCIsInRvU3RyaW5nIiwiZ2V0IiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJkb2MiLCJwdXNoIiwidXNlU3RhdGUiLCJpbnB1dCIsInNldElucHV0IiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJsb2FkVGFibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUEsaUJBQWlCLENBQUNDLGVBQWxCO0FBQUEsOExBQW9DLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMxQkMsY0FEMEIsR0FDckJDLCtEQUFZLEVBRFM7QUFFNUJDLGdCQUY0QixHQUVyQixFQUZxQjtBQUFBO0FBQUEsbUJBR0pGLEVBQUUsQ0FBQ0csU0FBSCxHQUFlQyxVQUFmLENBQTBCLGNBQWMsWUFBZCxHQUE2QkMsUUFBUSxDQUFDQyxRQUFULEVBQXZELEVBQTRFQyxHQUE1RSxFQUhJOztBQUFBO0FBRzFCQyx5QkFIMEI7QUFJaENBLHlCQUFhLENBQUNDLE9BQWQsQ0FBc0IsVUFBQUMsR0FBRyxFQUFJO0FBQzNCUixrQkFBSSxDQUFDUyxJQUFMLENBQVVELEdBQUcsQ0FBQ1IsSUFBSixFQUFWO0FBQ0QsYUFGRDtBQUpnQyw2Q0FPekI7QUFDTEEsa0JBQUksRUFBSkE7QUFESyxhQVB5Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFwQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlBOzs7Ozs7Ozs7Ozs7O0FBWWUsU0FBU0wsaUJBQVQsUUFBcUM7QUFBQTs7QUFBQSxNQUFSSyxJQUFRLFNBQVJBLElBQVE7O0FBQUEsa0JBRXRCVSxzREFBUSxDQUFDLE9BQUQsQ0FGYztBQUFBLE1BRXpDQyxLQUZ5QztBQUFBLE1BRWxDQyxRQUZrQzs7QUFJaERDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZZCxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFlLElBQXBCO0FBQ0FGLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaO0FBRUYsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyw4RUFBRDtBQUFlLGNBQVUsRUFBRSxJQUEzQjtBQUFpQyxtQkFBZSxFQUFFLEtBQWxEO0FBQXlELGtCQUFjLEVBQUUsSUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsa0VBQUQ7QUFBTyxTQUFLLEVBQUMsbUJBQWI7QUFBaUMsUUFBSSxFQUFFLEtBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFPLFNBQUssRUFBRUEsS0FBZDtBQUFxQixZQUFRLEVBQUUsa0JBQUFLLENBQUM7QUFBQSxhQUFJSixRQUFRLENBQUNJLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVo7QUFBQSxLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsRUFFSTtBQUFRLFdBQU8sRUFBRUMsU0FBUyxDQUFDUixLQUFELENBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixDQUZKLENBREYsQ0FERixDQURBLENBREY7QUFlRDs7R0F0QnVCaEIsaUI7O0tBQUFBLGlCIiwiZmlsZSI6Ii4vcGFnZXMvbWl0Z2xpZWRlcmJlcmVpY2guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vY29tcG9uZW50cy90aXRsZS9UaXRsZS5qcydcbmltcG9ydCBQYWdlQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFpbmVyL1BhZ2VDb250YWluZXIuanMnXG5pbXBvcnQgQ29udGVudENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lci9Db250ZW50Q29udGFpbmVyLmpzJ1xuaW1wb3J0IFNlY3Rpb25Db250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXIvU2VjdGlvbkNvbnRhaW5lci5qcydcbmltcG9ydCBQYXJhZ3JhcGggZnJvbSAnLi4vY29tcG9uZW50cy9wYXJhZ3JhcGgvUGFyYWdyYXBoLmpzJ1xuaW1wb3J0IHsgbG9hZEZpcmViYXNlIH0gZnJvbSAnLi4vbGliL2RiLmpzJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5NaXRnbGllZGVyYmVyZWljaC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gICAgY29uc3QgZGIgPSBsb2FkRmlyZWJhc2UoKVxuICAgIGxldCBkYXRhID0gW11cbiAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZGIuZmlyZXN0b3JlKCkuY29sbGVjdGlvbignY29udGFjdHMvJyArICdzaW5ndm9nZWwvJyArIHBhc3N3b3JkLnRvU3RyaW5nKCkpLmdldCgpXG4gICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGRvYyA9PiB7XG4gICAgICBkYXRhLnB1c2goZG9jLmRhdGEoKSlcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICBkYXRhXG4gICAgfVxuICB9XG5cbi8qIGZ1bmN0aW9uIGxvYWRUYWJsZShwYXNzd29yZCkge1xuICAgIGNvbnN0IGRiID0gbG9hZEZpcmViYXNlKClcbiAgICBsZXQgZGF0YSA9IFtdXG4gICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGRiLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ2NvbnRhY3RzLycgKyAnc2luZ3ZvZ2VsLycgKyBwYXNzd29yZC50b1N0cmluZygpKS5nZXQoKVxuICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChkb2MgPT4ge1xuICAgICAgZGF0YS5wdXNoKGRvYy5kYXRhKCkpXG4gICAgfSlcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YVxuICAgIH1cbn0gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWl0Z2xpZWRlcmJlcmVpY2goeyBkYXRhIH0pIHtcblxuICAgIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoJ3RhYmxlJyk7XG5cbiAgICBjb25zb2xlLmxvZyhkYXRhWzBdLm5hbWUpXG4gICAgY29uc29sZS5sb2coaW5wdXQpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgIDxQYWdlQ29udGFpbmVyIHdpdGhGb290ZXI9e3RydWV9IG1lbnVUeXBlTGFuZGluZz17ZmFsc2V9IG1lbnVWaXNpYmlsaXR5PXt0cnVlfT5cbiAgICAgIDxDb250ZW50Q29udGFpbmVyPlxuICAgICAgICA8U2VjdGlvbkNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxUaXRsZSB0aXRsZT1cIk1pdGdsaWVkZXJiZXJlaWNoXCIgY2Fwcz17ZmFsc2V9IC8+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17aW5wdXR9IG9uQ2hhbmdlPXtlID0+IHNldElucHV0KGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bG9hZFRhYmxlKGlucHV0KX0+TG9naW48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9TZWN0aW9uQ29udGFpbmVyPlxuICAgICAgPC9Db250ZW50Q29udGFpbmVyPlxuICAgIDwvUGFnZUNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/mitgliederbereich.js\n");

/***/ })

})