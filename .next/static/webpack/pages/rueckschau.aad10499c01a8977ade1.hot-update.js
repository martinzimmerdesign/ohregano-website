webpackHotUpdate_N_E("pages/rueckschau",{

/***/ "./sections/rueckschau/Slider.js":
/*!***************************************!*\
  !*** ./sections/rueckschau/Slider.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Slider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Slider_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slider.module.css */ \"./sections/rueckschau/Slider.module.css\");\n/* harmony import */ var _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Slider_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _SliderElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SliderElement.js */ \"./sections/rueckschau/SliderElement.js\");\n/* harmony import */ var _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RueckschauData.js */ \"./sections/rueckschau/RueckschauData.js\");\nvar _jsxFileName = \"/Users/martinzimmer/github/ohregano-website/sections/rueckschau/Slider.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction Slider() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      isFocused = _useState[0],\n      setFocusedElement = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      wasDotClicked = _useState2[0],\n      setWasDotClicked = _useState2[1];\n\n  var resetDot = function resetDot() {\n    setFocusedElement(0);\n    setWasDotClicked(false);\n  };\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.time_slider,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.line,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  }, _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].map(function (dataElement) {\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 13\n      }\n    }, __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 15\n      }\n    }, isFocused == dataElement.id ? \"sef\" : \"\"), __jsx(\"div\", {\n      key: dataElement.id,\n      onClick: function onClick() {\n        return setWasDotClicked(true);\n      },\n      className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dot,\n      onMouseEnter: function onMouseEnter() {\n        return setFocusedElement(dataElement.id);\n      },\n      onMouseLeave: resetDot,\n      style: {\n        backgroundColor: isFocused == dataElement.id ? \"red\" : \"seagreen\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 15\n      }\n    }));\n  })), __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.values_bottom,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.left_value,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, \"Jetzt\"), __jsx(\"p\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.right_value,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }, \"1990\"))), __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.img_slider,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].map(function (dataElement) {\n    return __jsx(_SliderElement_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      key: dataElement.id,\n      id: dataElement.id,\n      wasDotClicked: wasDotClicked,\n      isFocused: isFocused,\n      setFocusedElement: setFocusedElement,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }\n    });\n  })));\n}\n\n_s(Slider, \"u33UcXE44XSxaowqV0MUtvbVkyI=\");\n\n_c = Slider;\n\nvar _c;\n\n$RefreshReg$(_c, \"Slider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvcnVlY2tzY2hhdS9TbGlkZXIuanM/OGIyOCJdLCJuYW1lcyI6WyJTbGlkZXIiLCJ1c2VTdGF0ZSIsImlzRm9jdXNlZCIsInNldEZvY3VzZWRFbGVtZW50Iiwid2FzRG90Q2xpY2tlZCIsInNldFdhc0RvdENsaWNrZWQiLCJyZXNldERvdCIsInN0eWxlcyIsInRpbWVfc2xpZGVyIiwibGluZSIsInJ1ZWNrc2NoYXVfZGF0YSIsIm1hcCIsImRhdGFFbGVtZW50IiwiaWQiLCJkb3QiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ2YWx1ZXNfYm90dG9tIiwibGVmdF92YWx1ZSIsInJpZ2h0X3ZhbHVlIiwiaW1nX3NsaWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFFUUMsc0RBQVEsQ0FBQyxDQUFELENBRmhCO0FBQUEsTUFFeEJDLFNBRndCO0FBQUEsTUFFYkMsaUJBRmE7O0FBQUEsbUJBR1dGLHNEQUFRLENBQUMsS0FBRCxDQUhuQjtBQUFBLE1BR3hCRyxhQUh3QjtBQUFBLE1BR1RDLGdCQUhTOztBQUsvQixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCSCxxQkFBaUIsQ0FBQyxDQUFELENBQWpCO0FBQ0FFLG9CQUFnQixDQUFDLEtBQUQsQ0FBaEI7QUFDRCxHQUhEOztBQUtBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFFRSx5REFBTSxDQUFDQyxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVELHlEQUFNLENBQUNFLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFR0MsMERBQWUsQ0FBQ0MsR0FBaEIsQ0FBb0IsVUFBQ0MsV0FBRDtBQUFBLFdBQ3JCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlWLFNBQVMsSUFBSVUsV0FBVyxDQUFDQyxFQUF6QixHQUE4QixLQUE5QixHQUFzQyxFQUExQyxDQURGLEVBRUU7QUFBSyxTQUFHLEVBQUVELFdBQVcsQ0FBQ0MsRUFBdEI7QUFBMEIsYUFBTyxFQUFFO0FBQUEsZUFBTVIsZ0JBQWdCLENBQUMsSUFBRCxDQUF0QjtBQUFBLE9BQW5DO0FBQWlFLGVBQVMsRUFBRUUseURBQU0sQ0FBQ08sR0FBbkY7QUFBd0Ysa0JBQVksRUFBRTtBQUFBLGVBQU1YLGlCQUFpQixDQUFDUyxXQUFXLENBQUNDLEVBQWIsQ0FBdkI7QUFBQSxPQUF0RztBQUErSSxrQkFBWSxFQUFFUCxRQUE3SjtBQUF1SyxXQUFLLEVBQUU7QUFBQ1MsdUJBQWUsRUFBRWIsU0FBUyxJQUFJVSxXQUFXLENBQUNDLEVBQXpCLEdBQThCLEtBQTlCLEdBQXNDO0FBQXhELE9BQTlLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixDQURxQjtBQUFBLEdBQXBCLENBRkgsQ0FERixFQVVFO0FBQUssYUFBUyxFQUFFTix5REFBTSxDQUFDUyxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVULHlEQUFNLENBQUNVLFVBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVFO0FBQUcsYUFBUyxFQUFFVix5REFBTSxDQUFDVyxXQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsQ0FWRixDQURKLEVBaUJJO0FBQUssYUFBUyxFQUFFWCx5REFBTSxDQUFDWSxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUtULDBEQUFlLENBQUNDLEdBQWhCLENBQW9CLFVBQUNDLFdBQUQ7QUFBQSxXQUNqQixNQUFDLHlEQUFEO0FBQWUsU0FBRyxFQUFFQSxXQUFXLENBQUNDLEVBQWhDO0FBQW9DLFFBQUUsRUFBRUQsV0FBVyxDQUFDQyxFQUFwRDtBQUF3RCxtQkFBYSxFQUFFVCxhQUF2RTtBQUFzRixlQUFTLEVBQUVGLFNBQWpHO0FBQTRHLHVCQUFpQixFQUFFQyxpQkFBL0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURpQjtBQUFBLEdBQXBCLENBRkwsQ0FqQkosQ0FERjtBQTBCRDs7R0FwQ3VCSCxNOztLQUFBQSxNIiwiZmlsZSI6Ii4vc2VjdGlvbnMvcnVlY2tzY2hhdS9TbGlkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2xpZGVyLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IFNsaWRlckVsZW1lbnQgZnJvbSAnLi9TbGlkZXJFbGVtZW50LmpzJztcbmltcG9ydCBydWVja3NjaGF1X2RhdGEgZnJvbSAnLi9SdWVja3NjaGF1RGF0YS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNsaWRlcigpIHtcblxuICBjb25zdCBbaXNGb2N1c2VkLCBzZXRGb2N1c2VkRWxlbWVudF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3dhc0RvdENsaWNrZWQsIHNldFdhc0RvdENsaWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHJlc2V0RG90ID0gKCkgPT4ge1xuICAgIHNldEZvY3VzZWRFbGVtZW50KDApO1xuICAgIHNldFdhc0RvdENsaWNrZWQoZmFsc2UpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVfc2xpZGVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmV9PlxuICAgICAgICAgICAgey8qIE1hcHBlbiBlaW5lbiBEb3QgZsO8ciBqZWRlcyBQbGFrYXQgKi99XG4gICAgICAgICAgICB7cnVlY2tzY2hhdV9kYXRhLm1hcCgoZGF0YUVsZW1lbnQpID0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cD57aXNGb2N1c2VkID09IGRhdGFFbGVtZW50LmlkID8gXCJzZWZcIiA6IFwiXCJ9PC9wPlxuICAgICAgICAgICAgICA8ZGl2IGtleT17ZGF0YUVsZW1lbnQuaWR9IG9uQ2xpY2s9eygpID0+IHNldFdhc0RvdENsaWNrZWQodHJ1ZSl9IGNsYXNzTmFtZT17c3R5bGVzLmRvdH0gb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRGb2N1c2VkRWxlbWVudChkYXRhRWxlbWVudC5pZCl9IG9uTW91c2VMZWF2ZT17cmVzZXREb3R9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBpc0ZvY3VzZWQgPT0gZGF0YUVsZW1lbnQuaWQgPyBcInJlZFwiIDogXCJzZWFncmVlblwifX0+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52YWx1ZXNfYm90dG9tfT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmxlZnRfdmFsdWV9PkpldHp0PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHRfdmFsdWV9PjE5OTA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1nX3NsaWRlcn0+XG4gICAgICAgICAgICB7LyogTWFwcGVuIGbDvHIgamVkZXMgUGxha2F0IGRhcyBCaWxkIGltIFNsaWRlciwgc293aWUgZGllIERldGFpbC1BbnNpY2h0IChsYXp5KSAqL31cbiAgICAgICAgICAgIHtydWVja3NjaGF1X2RhdGEubWFwKChkYXRhRWxlbWVudCkgPT5cbiAgICAgICAgICAgICAgICA8U2xpZGVyRWxlbWVudCBrZXk9e2RhdGFFbGVtZW50LmlkfSBpZD17ZGF0YUVsZW1lbnQuaWR9IHdhc0RvdENsaWNrZWQ9e3dhc0RvdENsaWNrZWR9IGlzRm9jdXNlZD17aXNGb2N1c2VkfSBzZXRGb2N1c2VkRWxlbWVudD17c2V0Rm9jdXNlZEVsZW1lbnR9Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sections/rueckschau/Slider.js\n");

/***/ })

})