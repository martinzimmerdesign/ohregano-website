webpackHotUpdate_N_E("pages/index",{

/***/ "./components/menu/List.js":
/*!*********************************!*\
  !*** ./components/menu/List.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return List; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _List_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./List.module.css */ \"./components/menu/List.module.css\");\n/* harmony import */ var _List_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_List_module_css__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/martinzimmer/github/ohregano-website/components/menu/List.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction List() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var variants = {\n    link: {\n      enter: {\n        x: 0,\n        opacity: 1\n      },\n      exit: {\n        x: -50,\n        opacity: 0\n      }\n    }\n  };\n  return __jsx(\"ul\", {\n    className: _List_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.list + \" disable_select\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].li, {\n    className: router.pathname == \"/\" ? _List_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.active : \"\",\n    variants: variants.link,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 22\n    }\n  }, \"Startseite\")), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].li, {\n    variants: variants.link,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, \"Musikalische Leitung\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].li, {\n    variants: variants.link,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, \"R\\xFCckschau\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].li, {\n    variants: variants.link,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, \"Mitgliederbereich\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].li, {\n    variants: variants.link,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, \"Test\"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/kontakt\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].li, {\n    className: router.pathname == \"/kontakt\" ? _List_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.active : \"\",\n    variants: variants.link,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 29\n    }\n  }, \"Kontakt\")));\n}\n\n_s(List, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = List;\n\nvar _c;\n\n$RefreshReg$(_c, \"List\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZW51L0xpc3QuanM/NWYyMiJdLCJuYW1lcyI6WyJMaXN0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidmFyaWFudHMiLCJsaW5rIiwiZW50ZXIiLCJ4Iiwib3BhY2l0eSIsImV4aXQiLCJzdHlsZXMiLCJsaXN0IiwicGF0aG5hbWUiLCJhY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFFL0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVFLE1BQU1DLFFBQVEsR0FBRztBQUNYQyxRQUFJLEVBQUU7QUFDSkMsV0FBSyxFQUFFO0FBQUVDLFNBQUMsRUFBRSxDQUFMO0FBQVFDLGVBQU8sRUFBRTtBQUFqQixPQURIO0FBRUpDLFVBQUksRUFBRTtBQUFFRixTQUFDLEVBQUUsQ0FBQyxFQUFOO0FBQVVDLGVBQU8sRUFBRTtBQUFuQjtBQUZGO0FBREssR0FBakI7QUFPQSxTQUNFO0FBQUksYUFBUyxFQUFFRSx1REFBTSxDQUFDQyxJQUFQLEdBQWUsaUJBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFlLE1BQUMsb0RBQUQsQ0FBUSxFQUFSO0FBQVcsYUFBUyxFQUFFVCxNQUFNLENBQUNVLFFBQVAsSUFBbUIsR0FBbkIsR0FBeUJGLHVEQUFNLENBQUNHLE1BQWhDLEdBQXlDLEVBQS9EO0FBQW1FLFlBQVEsRUFBRVQsUUFBUSxDQUFDQyxJQUF0RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFmLENBREYsRUFFRSxNQUFDLG9EQUFELENBQVEsRUFBUjtBQUFXLFlBQVEsRUFBRUQsUUFBUSxDQUFDQyxJQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUZGLEVBR0UsTUFBQyxvREFBRCxDQUFRLEVBQVI7QUFBVyxZQUFRLEVBQUVELFFBQVEsQ0FBQ0MsSUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFIRixFQUlFLE1BQUMsb0RBQUQsQ0FBUSxFQUFSO0FBQVcsWUFBUSxFQUFFRCxRQUFRLENBQUNDLElBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkYsRUFLRSxNQUFDLG9EQUFELENBQVEsRUFBUjtBQUFXLFlBQVEsRUFBRUQsUUFBUSxDQUFDQyxJQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsRUFNRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQixNQUFDLG9EQUFELENBQVEsRUFBUjtBQUFXLGFBQVMsRUFBRUgsTUFBTSxDQUFDVSxRQUFQLElBQW1CLFVBQW5CLEdBQWdDRix1REFBTSxDQUFDRyxNQUF2QyxHQUFnRCxFQUF0RTtBQUEwRSxZQUFRLEVBQUVULFFBQVEsQ0FBQ0MsSUFBN0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF0QixDQU5GLENBREY7QUFVRDs7R0FyQnVCSixJO1VBRVRFLHFEOzs7S0FGU0YsSSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWVudS9MaXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xpc3QubW9kdWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdCgpIHtcblxuY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgdmFyaWFudHMgPSB7XG4gICAgICAgIGxpbms6IHtcbiAgICAgICAgICBlbnRlcjogeyB4OiAwLCBvcGFjaXR5OiAxIH0sXG4gICAgICAgICAgZXhpdDogeyB4OiAtNTAsIG9wYWNpdHk6IDAgfVxuICAgICAgICB9LFxuICAgICAgfTtcblxuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5saXN0ICArIFwiIGRpc2FibGVfc2VsZWN0XCJ9PlxuICAgICAgPExpbmsgaHJlZj1cIi9cIj48bW90aW9uLmxpIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL1wiID8gc3R5bGVzLmFjdGl2ZSA6IFwiXCJ9IHZhcmlhbnRzPXt2YXJpYW50cy5saW5rfT5TdGFydHNlaXRlPC9tb3Rpb24ubGk+PC9MaW5rPlxuICAgICAgPG1vdGlvbi5saSB2YXJpYW50cz17dmFyaWFudHMubGlua30+TXVzaWthbGlzY2hlIExlaXR1bmc8L21vdGlvbi5saT5cbiAgICAgIDxtb3Rpb24ubGkgdmFyaWFudHM9e3ZhcmlhbnRzLmxpbmt9PlLDvGNrc2NoYXU8L21vdGlvbi5saT5cbiAgICAgIDxtb3Rpb24ubGkgdmFyaWFudHM9e3ZhcmlhbnRzLmxpbmt9Pk1pdGdsaWVkZXJiZXJlaWNoPC9tb3Rpb24ubGk+XG4gICAgICA8bW90aW9uLmxpIHZhcmlhbnRzPXt2YXJpYW50cy5saW5rfT5UZXN0PC9tb3Rpb24ubGk+XG4gICAgICA8TGluayBocmVmPVwiL2tvbnRha3RcIj48bW90aW9uLmxpIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL2tvbnRha3RcIiA/IHN0eWxlcy5hY3RpdmUgOiBcIlwifSB2YXJpYW50cz17dmFyaWFudHMubGlua30+S29udGFrdDwvbW90aW9uLmxpPjwvTGluaz5cbiAgICA8L3VsPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/menu/List.js\n");

/***/ })

})