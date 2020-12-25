webpackHotUpdate_N_E("pages/mitgliederbereich",{

/***/ "./components/button/Button.js":
/*!*************************************!*\
  !*** ./components/button/Button.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Button; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.module.css */ \"./components/button/Button.module.css\");\n/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Button_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\nvar _jsxFileName = \"/Users/martinzimmer/github/ohregano-website/components/button/Button.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Button(_ref) {\n  var title = _ref.title,\n      link = _ref.link,\n      color = _ref.color;\n  var variants = {\n    basic: {\n      enter: {\n        y: 0,\n        opacity: 1\n      },\n      hover: {\n        scale: 1.05\n      },\n      tap: {\n        scale: 0.95\n      },\n      exit: {\n        y: 50,\n        opacity: 0\n      }\n    },\n    arrow: {\n      enter: {\n        x: 0\n      },\n      hover: {\n        x: -10,\n        transition: {\n          repeat: Infinity,\n          repeatType: \"mirror\",\n          duration: 0.5,\n          ease: \"easeOut\"\n        }\n      },\n      exit: {\n        x: 0\n      }\n    }\n  };\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: link != undefined ? \"/\" + link : \"#\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n    whileHover: \"hover\",\n    whileTap: \"tap\",\n    variants: variants.basic,\n    style: {\n      backgroundColor: color == undefined ? \"var(--color-main)\" : color.toString()\n    },\n    className: _Button_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container + \" disable_select\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    className: _Button_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, title), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].img, {\n    variants: variants.arrow,\n    className: _Button_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon,\n    src: \"/icons/arrow.png\",\n    alt: \"Button Icon\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  })));\n}\n_c = Button;\n\nvar _c;\n\n$RefreshReg$(_c, \"Button\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9idXR0b24vQnV0dG9uLmpzPzIwYTQiXSwibmFtZXMiOlsiQnV0dG9uIiwidGl0bGUiLCJsaW5rIiwiY29sb3IiLCJ2YXJpYW50cyIsImJhc2ljIiwiZW50ZXIiLCJ5Iiwib3BhY2l0eSIsImhvdmVyIiwic2NhbGUiLCJ0YXAiLCJleGl0IiwiYXJyb3ciLCJ4IiwidHJhbnNpdGlvbiIsInJlcGVhdCIsIkluZmluaXR5IiwicmVwZWF0VHlwZSIsImR1cmF0aW9uIiwiZWFzZSIsInVuZGVmaW5lZCIsImJhY2tncm91bmRDb2xvciIsInRvU3RyaW5nIiwic3R5bGVzIiwiY29udGFpbmVyIiwiaWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxPQUF3QztBQUFBLE1BQXRCQyxLQUFzQixRQUF0QkEsS0FBc0I7QUFBQSxNQUFmQyxJQUFlLFFBQWZBLElBQWU7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFFckQsTUFBTUMsUUFBUSxHQUFHO0FBQ2ZDLFNBQUssRUFBRTtBQUNMQyxXQUFLLEVBQUU7QUFBRUMsU0FBQyxFQUFFLENBQUw7QUFBUUMsZUFBTyxFQUFFO0FBQWpCLE9BREY7QUFFTEMsV0FBSyxFQUFFO0FBQUVDLGFBQUssRUFBRTtBQUFULE9BRkY7QUFHTEMsU0FBRyxFQUFFO0FBQUVELGFBQUssRUFBRTtBQUFULE9BSEE7QUFJTEUsVUFBSSxFQUFFO0FBQUVMLFNBQUMsRUFBRSxFQUFMO0FBQVNDLGVBQU8sRUFBRTtBQUFsQjtBQUpELEtBRFE7QUFPZkssU0FBSyxFQUFFO0FBQ0xQLFdBQUssRUFBRTtBQUNMUSxTQUFDLEVBQUU7QUFERSxPQURGO0FBSUxMLFdBQUssRUFBRTtBQUFFSyxTQUFDLEVBQUUsQ0FBQyxFQUFOO0FBQ0xDLGtCQUFVLEVBQUU7QUFBRUMsZ0JBQU0sRUFBRUMsUUFBVjtBQUFvQkMsb0JBQVUsRUFBRSxRQUFoQztBQUEwQ0Msa0JBQVEsRUFBRSxHQUFwRDtBQUF5REMsY0FBSSxFQUFFO0FBQS9EO0FBRFAsT0FKRjtBQU9MUixVQUFJLEVBQUU7QUFDSkUsU0FBQyxFQUFFO0FBREM7QUFQRDtBQVBRLEdBQWpCO0FBb0JBLFNBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRVosSUFBSSxJQUFJbUIsU0FBUixHQUFvQixNQUFNbkIsSUFBMUIsR0FBaUMsR0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksY0FBVSxFQUFDLE9BQXZCO0FBQStCLFlBQVEsRUFBQyxLQUF4QztBQUE4QyxZQUFRLEVBQUVFLFFBQVEsQ0FBQ0MsS0FBakU7QUFBd0UsU0FBSyxFQUFFO0FBQUNpQixxQkFBZSxFQUFFbkIsS0FBSyxJQUFJa0IsU0FBVCxHQUFxQixtQkFBckIsR0FBMkNsQixLQUFLLENBQUNvQixRQUFOO0FBQTdELEtBQS9FO0FBQWdLLGFBQVMsRUFBRUMseURBQU0sQ0FBQ0MsU0FBUCxHQUFtQixpQkFBOUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFFRCx5REFBTSxDQUFDdkIsS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE2QkEsS0FBN0IsQ0FERixFQUdFLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksWUFBUSxFQUFFRyxRQUFRLENBQUNTLEtBQS9CO0FBQXNDLGFBQVMsRUFBRVcseURBQU0sQ0FBQ0UsSUFBeEQ7QUFBOEQsT0FBRyxFQUFDLGtCQUFsRTtBQUFxRixPQUFHLEVBQUMsYUFBekY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBRkYsQ0FERjtBQVVEO0tBaEN1QjFCLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL2J1dHRvbi9CdXR0b24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vQnV0dG9uLm1vZHVsZS5jc3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b24oeyB0aXRsZSwgbGluaywgY29sb3IgfSkge1xuXG4gIGNvbnN0IHZhcmlhbnRzID0ge1xuICAgIGJhc2ljOiB7XG4gICAgICBlbnRlcjogeyB5OiAwLCBvcGFjaXR5OiAxIH0sXG4gICAgICBob3ZlcjogeyBzY2FsZTogMS4wNSB9LFxuICAgICAgdGFwOiB7IHNjYWxlOiAwLjk1IH0sXG4gICAgICBleGl0OiB7IHk6IDUwLCBvcGFjaXR5OiAwIH1cbiAgICB9LFxuICAgIGFycm93OiB7XG4gICAgICBlbnRlcjoge1xuICAgICAgICB4OiAwLFxuICAgICAgfSxcbiAgICAgIGhvdmVyOiB7IHg6IC0xMCxcbiAgICAgICAgdHJhbnNpdGlvbjogeyByZXBlYXQ6IEluZmluaXR5LCByZXBlYXRUeXBlOiBcIm1pcnJvclwiLCBkdXJhdGlvbjogMC41LCBlYXNlOiBcImVhc2VPdXRcIiB9LFxuICAgICAgfSxcbiAgICAgIGV4aXQ6IHtcbiAgICAgICAgeDogMCxcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGluayBocmVmPXtsaW5rICE9IHVuZGVmaW5lZCA/IFwiL1wiICsgbGluayA6IFwiI1wifT5cbiAgICAgIHsvKiBDaGFuZ2UgZGVmYXVsdC1jb2xvciB0byBjdXN0b20tY29sb3IqL31cbiAgICAgIDxtb3Rpb24uZGl2IHdoaWxlSG92ZXI9XCJob3ZlclwiIHdoaWxlVGFwPVwidGFwXCIgdmFyaWFudHM9e3ZhcmlhbnRzLmJhc2ljfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogY29sb3IgPT0gdW5kZWZpbmVkID8gXCJ2YXIoLS1jb2xvci1tYWluKVwiIDogY29sb3IudG9TdHJpbmcoKSB9fSBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXIgKyBcIiBkaXNhYmxlX3NlbGVjdFwifT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pnt0aXRsZX08L2E+XG4gICAgICAgIHsvKiBTdGF0aWMgaW1nIGRpcmVjdGx5IGltcG9ydGVkIGZyb20gcHVibGljLyAqL31cbiAgICAgICAgPG1vdGlvbi5pbWcgdmFyaWFudHM9e3ZhcmlhbnRzLmFycm93fSBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSBzcmM9XCIvaWNvbnMvYXJyb3cucG5nXCIgYWx0PVwiQnV0dG9uIEljb25cIiAvPlxuICAgICAgPC9tb3Rpb24uZGl2PlxuICAgIDwvTGluaz5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/button/Button.js\n");

/***/ })

})