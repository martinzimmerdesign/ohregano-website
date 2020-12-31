webpackHotUpdate_N_E("pages/rueckschau",{

/***/ "./sections/rueckschau/Slider.js":
/*!***************************************!*\
  !*** ./sections/rueckschau/Slider.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Slider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Slider_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slider.module.css */ \"./sections/rueckschau/Slider.module.css\");\n/* harmony import */ var _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Slider_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _SliderElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SliderElement.js */ \"./sections/rueckschau/SliderElement.js\");\n/* harmony import */ var _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RueckschauData.js */ \"./sections/rueckschau/RueckschauData.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-draggable */ \"./node_modules/react-draggable/build/cjs/cjs.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/martinzimmer/github/ohregano-website/sections/rueckschau/Slider.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nfunction Slider() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      isFocused = _useState[0],\n      setFocusedElement = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      wasDotClicked = _useState2[0],\n      setWasDotClicked = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isDragging = _useState3[0],\n      setIsDragging = _useState3[1];\n\n  var resetDot = function resetDot() {\n    setFocusedElement(0);\n    setWasDotClicked(false);\n  };\n\n  var resetDragState = function resetDragState() {\n    setTimeout(function () {\n      setIsDragging(false);\n    }, 2000);\n  };\n\n  console.log(\"isDragging: \" + isDragging);\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.time_slider,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.line,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }, _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].map(function (dataElement) {\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      key: dataElement.id,\n      onClick: function onClick() {\n        return setWasDotClicked(true);\n      },\n      className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dot,\n      onMouseEnter: function onMouseEnter() {\n        return setFocusedElement(dataElement.id);\n      },\n      onMouseLeave: resetDot,\n      style: {\n        backgroundColor: isFocused == dataElement.id ? \"red\" : \"seagreen\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 15\n      }\n    }), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 15\n      }\n    }, isFocused == dataElement.id ? dataElement.year : \"\"));\n  })), __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.values_bottom,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.left_value,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }, \"Jetzt\"), __jsx(\"p\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.right_value,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }\n  }, \"1990\"))), __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.img_slider,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }, __jsx(react_draggable__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    axis: \"x\",\n    handle: \".handle\",\n    defaultPosition: {\n      x: 0,\n      y: 0\n    },\n    position: null,\n    grid: [25, 25],\n    onDrag: function onDrag() {\n      return setIsDragging(true);\n    },\n    onStop: resetDragState,\n    scale: 1,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: \"flex\",\n      height: \"100%\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }\n  }, _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].map(function (dataElement) {\n    return __jsx(\"div\", {\n      className: \"handle\",\n      style: {\n        display: \"inline-flex\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 19\n      }\n    }, __jsx(_SliderElement_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      key: dataElement.id,\n      id: dataElement.id,\n      wasDotClicked: wasDotClicked,\n      isFocused: isFocused,\n      setFocusedElement: setFocusedElement,\n      isDragging: isDragging,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 76\n      }\n    }), __jsx(\"div\", {\n      className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.detailView,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 21\n      }\n    }, __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 13\n      }\n    }, \"fjklsefkj test\")));\n  })))));\n}\n\n_s(Slider, \"4FGnevkF+oxTixvu1wrqmxA7JdI=\");\n\n_c = Slider;\n\nvar _c;\n\n$RefreshReg$(_c, \"Slider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvcnVlY2tzY2hhdS9TbGlkZXIuanM/OGIyOCJdLCJuYW1lcyI6WyJTbGlkZXIiLCJ1c2VTdGF0ZSIsImlzRm9jdXNlZCIsInNldEZvY3VzZWRFbGVtZW50Iiwid2FzRG90Q2xpY2tlZCIsInNldFdhc0RvdENsaWNrZWQiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsInJlc2V0RG90IiwicmVzZXREcmFnU3RhdGUiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsInRpbWVfc2xpZGVyIiwibGluZSIsInJ1ZWNrc2NoYXVfZGF0YSIsIm1hcCIsImRhdGFFbGVtZW50IiwiaWQiLCJkb3QiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ5ZWFyIiwidmFsdWVzX2JvdHRvbSIsImxlZnRfdmFsdWUiLCJyaWdodF92YWx1ZSIsImltZ19zbGlkZXIiLCJ4IiwieSIsImRpc3BsYXkiLCJoZWlnaHQiLCJkZXRhaWxWaWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFFUUMsc0RBQVEsQ0FBQyxDQUFELENBRmhCO0FBQUEsTUFFeEJDLFNBRndCO0FBQUEsTUFFYkMsaUJBRmE7O0FBQUEsbUJBR1dGLHNEQUFRLENBQUMsS0FBRCxDQUhuQjtBQUFBLE1BR3hCRyxhQUh3QjtBQUFBLE1BR1RDLGdCQUhTOztBQUFBLG1CQUlLSixzREFBUSxDQUFDLEtBQUQsQ0FKYjtBQUFBLE1BSXhCSyxVQUp3QjtBQUFBLE1BSVpDLGFBSlk7O0FBTS9CLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckJMLHFCQUFpQixDQUFDLENBQUQsQ0FBakI7QUFDQUUsb0JBQWdCLENBQUMsS0FBRCxDQUFoQjtBQUNELEdBSEQ7O0FBS0EsTUFBTUksY0FBYyxHQUFHLFNB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QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF5RCxNQUFDLHlEQUFEO0FBQWUsU0FBRyxFQUFFWCxXQUFXLENBQUNDLEVBQWhDO0FBQW9DLFFBQUUsRUFBRUQsV0FBVyxDQUFDQyxFQUFwRDtBQUF3RCxtQkFBYSxFQUFFZixhQUF2RTtBQUFzRixlQUFTLEVBQUVGLFNBQWpHO0FBQTRHLHVCQUFpQixFQUFFQyxpQkFBL0g7QUFBa0osZ0JBQVUsRUFBRUcsVUFBOUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUF6RCxFQUNFO0FBQUssZUFBUyxFQUFFTyx5REFBTSxDQUFDa0IsVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRFEsQ0FERixDQUZpQjtBQUFBLEdBQXBCLENBRkgsQ0FURixDQURGLENBakJKLENBREY7QUE2Q0Q7O0dBaEV1Qi9CLE07O0tBQUFBLE0iLCJmaWxlIjoiLi9zZWN0aW9ucy9ydWVja3NjaGF1L1NsaWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TbGlkZXIubW9kdWxlLmNzcydcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgU2xpZGVyRWxlbWVudCBmcm9tICcuL1NsaWRlckVsZW1lbnQuanMnO1xuaW1wb3J0IHJ1ZWNrc2NoYXVfZGF0YSBmcm9tICcuL1J1ZWNrc2NoYXVEYXRhLmpzJztcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAncmVhY3QtZHJhZ2dhYmxlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2xpZGVyKCkge1xuXG4gIGNvbnN0IFtpc0ZvY3VzZWQsIHNldEZvY3VzZWRFbGVtZW50XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbd2FzRG90Q2xpY2tlZCwgc2V0V2FzRG90Q2xpY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0RyYWdnaW5nLCBzZXRJc0RyYWdnaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCByZXNldERvdCA9ICgpID0+IHtcbiAgICBzZXRGb2N1c2VkRWxlbWVudCgwKTtcbiAgICBzZXRXYXNEb3RDbGlja2VkKGZhbHNlKTtcbiAgfVxuXG4gIGNvbnN0IHJlc2V0RHJhZ1N0YXRlID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBzZXRJc0RyYWdnaW5nKGZhbHNlKVxuICAgIH0sIDIwMDApO1xuICB9XG5cbiAgY29uc29sZS5sb2coXCJpc0RyYWdnaW5nOiBcIiArIGlzRHJhZ2dpbmcpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lX3NsaWRlcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5lfT5cbiAgICAgICAgICAgIHsvKiBNYXBwZW4gZWluZW4gRG90IGbDvHIgamVkZXMgUGxha2F0ICovfVxuICAgICAgICAgICAge3J1ZWNrc2NoYXVfZGF0YS5tYXAoKGRhdGFFbGVtZW50KSA9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2RhdGFFbGVtZW50LmlkfSBvbkNsaWNrPXsoKSA9PiBzZXRXYXNEb3RDbGlja2VkKHRydWUpfSBjbGFzc05hbWU9e3N0eWxlcy5kb3R9IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0Rm9jdXNlZEVsZW1lbnQoZGF0YUVsZW1lbnQuaWQpfSBvbk1vdXNlTGVhdmU9e3Jlc2V0RG90fSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogaXNGb2N1c2VkID09IGRhdGFFbGVtZW50LmlkID8gXCJyZWRcIiA6IFwic2VhZ3JlZW5cIn19PjwvZGl2PlxuICAgICAgICAgICAgICA8cD57aXNGb2N1c2VkID09IGRhdGFFbGVtZW50LmlkID8gZGF0YUVsZW1lbnQueWVhciA6IFwiXCJ9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmFsdWVzX2JvdHRvbX0+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0X3ZhbHVlfT5KZXR6dDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0X3ZhbHVlfT4xOTkwPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltZ19zbGlkZXJ9PlxuICAgICAgICAgIDxEcmFnZ2FibGVcbiAgICAgICAgICBheGlzPVwieFwiXG4gICAgICAgICAgaGFuZGxlPVwiLmhhbmRsZVwiXG4gICAgICAgICAgZGVmYXVsdFBvc2l0aW9uPXt7eDogMCwgeTogMH19XG4gICAgICAgICAgcG9zaXRpb249e251bGx9XG4gICAgICAgICAgZ3JpZD17WzI1LCAyNV19XG4gICAgICAgICAgb25EcmFnPXsoKSA9PiBzZXRJc0RyYWdnaW5nKHRydWUpfVxuICAgICAgICAgIG9uU3RvcD17cmVzZXREcmFnU3RhdGV9XG4gICAgICAgICAgc2NhbGU9ezF9PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBoZWlnaHQ6IFwiMTAwJVwifX0+XG4gICAgICAgICAgICAgIHsvKiBNYXBwZW4gZsO8ciBqZWRlcyBQbGFrYXQgZGFzIEJpbGQgaW0gU2xpZGVyLCBzb3dpZSBkaWUgRGV0YWlsLUFuc2ljaHQgKGxhenkpICovfVxuICAgICAgICAgICAgICB7cnVlY2tzY2hhdV9kYXRhLm1hcCgoZGF0YUVsZW1lbnQpID0+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbmRsZVwiIHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmUtZmxleFwifX0+PFNsaWRlckVsZW1lbnQga2V5PXtkYXRhRWxlbWVudC5pZH0gaWQ9e2RhdGFFbGVtZW50LmlkfSB3YXNEb3RDbGlja2VkPXt3YXNEb3RDbGlja2VkfSBpc0ZvY3VzZWQ9e2lzRm9jdXNlZH0gc2V0Rm9jdXNlZEVsZW1lbnQ9e3NldEZvY3VzZWRFbGVtZW50fSBpc0RyYWdnaW5nPXtpc0RyYWdnaW5nfS8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsVmlld30+XG4gICAgICAgICAgICA8cD5mamtsc2Vma2ogdGVzdDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgIDwvRHJhZ2dhYmxlPlxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sections/rueckschau/Slider.js\n");

/***/ })

})