webpackHotUpdate_N_E("pages/mitgliederbereich",{

/***/ "./pages/mitgliederbereich.js":
/*!************************************!*\
  !*** ./pages/mitgliederbereich.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Mitgliederbereich; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_title_Title_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/title/Title.js */ \"./components/title/Title.js\");\n/* harmony import */ var _components_container_PageContainer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/container/PageContainer.js */ \"./components/container/PageContainer.js\");\n/* harmony import */ var _components_container_ContentContainer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/container/ContentContainer.js */ \"./components/container/ContentContainer.js\");\n/* harmony import */ var _components_container_SectionContainer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/container/SectionContainer.js */ \"./components/container/SectionContainer.js\");\n/* harmony import */ var _components_paragraph_Paragraph_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/paragraph/Paragraph.js */ \"./components/paragraph/Paragraph.js\");\n/* harmony import */ var _lib_db_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/db.js */ \"./lib/db.js\");\n\n\n\nvar _jsxFileName = \"/Users/martinzimmer/github/ohregano-website/pages/mitgliederbereich.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\n\nMitgliederbereich.getInitialProps = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {\n    var db, path, data, querySnapshot;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            db = Object(_lib_db_js__WEBPACK_IMPORTED_MODULE_9__[\"loadFirebase\"])();\n            path = getPasswort();\n            data = [];\n            _context.next = 5;\n            return db.firestore().collection(path).get();\n\n          case 5:\n            querySnapshot = _context.sent;\n            querySnapshot.forEach(function (doc) {\n              data.push(doc.data());\n            });\n            return _context.abrupt(\"return\", {\n              data: data\n            });\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nfunction getPasswort(pw) {\n  console.log(pw);\n  return '' + pw;\n}\n\nfunction Mitgliederbereich(_ref2) {\n  _s();\n\n  var data = _ref2.data;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      input = _useState[0],\n      setInput = _useState[1];\n\n  var fetchData = /*#__PURE__*/function () {\n    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n      var db, data, querySnapshot;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              db = Object(_lib_db_js__WEBPACK_IMPORTED_MODULE_9__[\"loadFirebase\"])();\n              data = [];\n              _context2.next = 4;\n              return db.firestore().collection('contacts').get();\n\n            case 4:\n              querySnapshot = _context2.sent;\n              querySnapshot.forEach(function (doc) {\n                data.push(doc.data());\n              });\n              return _context2.abrupt(\"return\", {\n                data: data\n              });\n\n            case 7:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function fetchData() {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  var handleClick = function handleClick(event) {\n    event.preventDefault();\n    fetchData();\n  };\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 5\n    }\n  }, __jsx(_components_container_PageContainer_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    withFooter: true,\n    menuTypeLanding: false,\n    menuVisibility: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 5\n    }\n  }, __jsx(_components_container_ContentContainer_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }, __jsx(_components_container_SectionContainer_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, __jsx(_components_title_Title_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    title: \"Mitgliederbereich\",\n    caps: false,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }\n  }), __jsx(\"input\", {\n    value: input,\n    onChange: function onChange(e) {\n      return setInput(e.target.value);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 17\n    }\n  }), __jsx(\"button\", {\n    onClick: handleClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 17\n    }\n  }, \"Login\")))));\n}\n\n_s(Mitgliederbereich, \"RL+Zbs2TIka0YpcBOJptmHqCgYA=\");\n\n_c = Mitgliederbereich;\n\nvar _c;\n\n$RefreshReg$(_c, \"Mitgliederbereich\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWl0Z2xpZWRlcmJlcmVpY2guanM/Y2FiZiJdLCJuYW1lcyI6WyJNaXRnbGllZGVyYmVyZWljaCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImRiIiwibG9hZEZpcmViYXNlIiwicGF0aCIsImdldFBhc3N3b3J0IiwiZGF0YSIsImZpcmVzdG9yZSIsImNvbGxlY3Rpb24iLCJnZXQiLCJxdWVyeVNuYXBzaG90IiwiZm9yRWFjaCIsImRvYyIsInB1c2giLCJwdyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsImlucHV0Iiwic2V0SW5wdXQiLCJmZXRjaERhdGEiLCJoYW5kbGVDbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUEsaUJBQWlCLENBQUNDLGVBQWxCO0FBQUEsOExBQW9DLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMxQkMsY0FEMEIsR0FDckJDLCtEQUFZLEVBRFM7QUFFNUJDLGdCQUY0QixHQUVyQkMsV0FBVyxFQUZVO0FBRzVCQyxnQkFINEIsR0FHckIsRUFIcUI7QUFBQTtBQUFBLG1CQUlBSixFQUFFLENBQUNLLFNBQUgsR0FBZUMsVUFBZixDQUEwQkosSUFBMUIsRUFBZ0NLLEdBQWhDLEVBSkE7O0FBQUE7QUFJdEJDLHlCQUpzQjtBQUs1QkEseUJBQWEsQ0FBQ0MsT0FBZCxDQUFzQixVQUFBQyxHQUFHLEVBQUk7QUFDN0JOLGtCQUFJLENBQUNPLElBQUwsQ0FBVUQsR0FBRyxDQUFDTixJQUFKLEVBQVY7QUFDQyxhQUZEO0FBTDRCLDZDQVF6QjtBQUNMQSxrQkFBSSxFQUFKQTtBQURLLGFBUnlCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXBDOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWFFLFNBQVNELFdBQVQsQ0FBcUJTLEVBQXJCLEVBQXlCO0FBQ3ZCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsRUFBWjtBQUNBLFNBQU8sS0FBS0EsRUFBWjtBQUNEOztBQUVZLFNBQVNmLGlCQUFULFFBQXFDO0FBQUE7O0FBQUEsTUFBUk8sSUFBUSxTQUFSQSxJQUFROztBQUFBLGtCQUV0Qlcsc0RBQVEsQ0FBQyxFQUFELENBRmM7QUFBQSxNQUV6Q0MsS0FGeUM7QUFBQSxNQUVsQ0MsUUFGa0M7O0FBSWhELE1BQU1DLFNBQVM7QUFBQSxpTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUmxCLGdCQURRLEdBQ0hDLCtEQUFZLEVBRFQ7QUFFVkcsa0JBRlUsR0FFSCxFQUZHO0FBQUE7QUFBQSxxQkFHa0JKLEVBQUUsQ0FBQ0ssU0FBSCxHQUFlQyxVQUFmLENBQTBCLFVBQTFCLEVBQXNDQyxHQUF0QyxFQUhsQjs7QUFBQTtBQUdKQywyQkFISTtBQUlWQSwyQkFBYSxDQUFDQyxPQUFkLENBQXNCLFVBQUFDLEdBQUcsRUFBSTtBQUM3Qk4sb0JBQUksQ0FBQ08sSUFBTCxDQUFVRCxHQUFHLENBQUNOLElBQUosRUFBVjtBQUNDLGVBRkQ7QUFKVSxnREFPUDtBQUNMQSxvQkFBSSxFQUFKQTtBQURLLGVBUE87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVGMsU0FBUztBQUFBO0FBQUE7QUFBQSxLQUFmOztBQVlBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUMzQkEsU0FBSyxDQUFDQyxjQUFOO0FBQ0FILGFBQVM7QUFDWixHQUhEOztBQUtGLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsOEVBQUQ7QUFBZSxjQUFVLEVBQUUsSUFBM0I7QUFBaUMsbUJBQWUsRUFBRSxLQUFsRDtBQUF5RCxrQkFBYyxFQUFFLElBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGtFQUFEO0FBQU8sU0FBSyxFQUFDLG1CQUFiO0FBQWlDLFFBQUksRUFBRSxLQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFUTtBQUFPLFNBQUssRUFBRUYsS0FBZDtBQUFxQixZQUFRLEVBQUUsa0JBQUFNLENBQUM7QUFBQSxhQUFJTCxRQUFRLENBQUNLLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVo7QUFBQSxLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRlIsRUFHUTtBQUFRLFdBQU8sRUFBRUwsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhSLENBREYsQ0FERixDQURBLENBREY7QUFhRDs7R0FsQ3VCdEIsaUI7O0tBQUFBLGlCIiwiZmlsZSI6Ii4vcGFnZXMvbWl0Z2xpZWRlcmJlcmVpY2guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vY29tcG9uZW50cy90aXRsZS9UaXRsZS5qcydcbmltcG9ydCBQYWdlQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFpbmVyL1BhZ2VDb250YWluZXIuanMnXG5pbXBvcnQgQ29udGVudENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lci9Db250ZW50Q29udGFpbmVyLmpzJ1xuaW1wb3J0IFNlY3Rpb25Db250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXIvU2VjdGlvbkNvbnRhaW5lci5qcydcbmltcG9ydCBQYXJhZ3JhcGggZnJvbSAnLi4vY29tcG9uZW50cy9wYXJhZ3JhcGgvUGFyYWdyYXBoLmpzJ1xuaW1wb3J0IHsgbG9hZEZpcmViYXNlIH0gZnJvbSAnLi4vbGliL2RiLmpzJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5NaXRnbGllZGVyYmVyZWljaC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gICAgY29uc3QgZGIgPSBsb2FkRmlyZWJhc2UoKVxuICAgIGxldCBwYXRoID0gZ2V0UGFzc3dvcnQoKTtcbiAgICBsZXQgZGF0YSA9IFtdXG4gICAgICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBkYi5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKHBhdGgpLmdldCgpO1xuICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goZG9jID0+IHtcbiAgICAgICAgZGF0YS5wdXNoKGRvYy5kYXRhKCkpXG4gICAgICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGFcbiAgICB9XG4gIH0gXG5cbiAgZnVuY3Rpb24gZ2V0UGFzc3dvcnQocHcpIHtcbiAgICBjb25zb2xlLmxvZyhwdyk7XG4gICAgcmV0dXJuICcnICsgcHdcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNaXRnbGllZGVyYmVyZWljaCh7IGRhdGEgfSkge1xuXG4gICAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgZGIgPSBsb2FkRmlyZWJhc2UoKVxuICAgICAgICBsZXQgZGF0YSA9IFtdXG4gICAgICAgICAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZGIuZmlyZXN0b3JlKCkuY29sbGVjdGlvbignY29udGFjdHMnKS5nZXQoKTtcbiAgICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChkb2MgPT4ge1xuICAgICAgICAgICAgZGF0YS5wdXNoKGRvYy5kYXRhKCkpXG4gICAgICAgICAgICB9KVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRhdGFcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBmZXRjaERhdGEoKTtcbiAgICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICA8UGFnZUNvbnRhaW5lciB3aXRoRm9vdGVyPXt0cnVlfSBtZW51VHlwZUxhbmRpbmc9e2ZhbHNlfSBtZW51VmlzaWJpbGl0eT17dHJ1ZX0+XG4gICAgICA8Q29udGVudENvbnRhaW5lcj5cbiAgICAgICAgPFNlY3Rpb25Db250YWluZXI+XG4gICAgICAgICAgICA8VGl0bGUgdGl0bGU9XCJNaXRnbGllZGVyYmVyZWljaFwiIGNhcHM9e2ZhbHNlfSAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17aW5wdXR9IG9uQ2hhbmdlPXtlID0+IHNldElucHV0KGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PkxvZ2luPC9idXR0b24+XG4gICAgICAgIDwvU2VjdGlvbkNvbnRhaW5lcj5cbiAgICAgIDwvQ29udGVudENvbnRhaW5lcj5cbiAgICA8L1BhZ2VDb250YWluZXI+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/mitgliederbereich.js\n");

/***/ })

})