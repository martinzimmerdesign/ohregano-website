webpackHotUpdate_N_E("pages/rueckschau",{

/***/ "./sections/rueckschau/Slider.js":
/*!***************************************!*\
  !*** ./sections/rueckschau/Slider.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Slider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Slider_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slider.module.css */ \"./sections/rueckschau/Slider.module.css\");\n/* harmony import */ var _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Slider_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _SliderElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SliderElement.js */ \"./sections/rueckschau/SliderElement.js\");\n/* harmony import */ var _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RueckschauData.js */ \"./sections/rueckschau/RueckschauData.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-draggable */ \"./node_modules/react-draggable/build/cjs/cjs.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/martinzimmer/github/ohregano-website/sections/rueckschau/Slider.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nfunction Slider() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      isFocused = _useState[0],\n      setFocusedElement = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      wasDotClicked = _useState2[0],\n      setWasDotClicked = _useState2[1];\n\n  var resetDot = function resetDot() {\n    setFocusedElement(0);\n    setWasDotClicked(false);\n  };\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.time_slider,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.line,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 11\n    }\n  }, _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].map(function (dataElement) {\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      key: dataElement.id,\n      onClick: function onClick() {\n        return setWasDotClicked(true);\n      },\n      className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dot,\n      onMouseEnter: function onMouseEnter() {\n        return setFocusedElement(dataElement.id);\n      },\n      onMouseLeave: resetDot,\n      style: {\n        backgroundColor: isFocused == dataElement.id ? \"red\" : \"seagreen\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 15\n      }\n    }), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 15\n      }\n    }, isFocused == dataElement.id ? dataElement.year : \"\"));\n  })), __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.values_bottom,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.left_value,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }, \"Jetzt\"), __jsx(\"p\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.right_value,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }, \"1990\"))), __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.img_slider,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, __jsx(react_draggable__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    axis: \"x\",\n    handle: \".handle\",\n    defaultPosition: {\n      x: 0,\n      y: 0\n    },\n    position: null,\n    grid: [25, 25],\n    onDrag: function onDrag() {\n      return setFocusedElement(999);\n    },\n    onStop: function onStop() {\n      return setFocusedElement(999);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }, \"scale=\", 1, \">\", __jsx(\"div\", {\n    style: {\n      display: \"flex\",\n      height: \"100%\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].map(function (dataElement) {\n    return __jsx(\"div\", {\n      className: \"handle\",\n      style: {\n        display: \"inline-flex\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 19\n      }\n    }, __jsx(_SliderElement_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      key: dataElement.id,\n      id: dataElement.id,\n      wasDotClicked: wasDotClicked,\n      isFocused: isFocused,\n      setFocusedElement: setFocusedElement,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 76\n      }\n    }));\n  })))));\n}\n\n_s(Slider, \"u33UcXE44XSxaowqV0MUtvbVkyI=\");\n\n_c = Slider;\n\nvar _c;\n\n$RefreshReg$(_c, \"Slider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvcnVlY2tzY2hhdS9TbGlkZXIuanM/OGIyOCJdLCJuYW1lcyI6WyJTbGlkZXIiLCJ1c2VTdGF0ZSIsImlzRm9jdXNlZCIsInNldEZvY3VzZWRFbGVtZW50Iiwid2FzRG90Q2xpY2tlZCIsInNldFdhc0RvdENsaWNrZWQiLCJyZXNldERvdCIsInN0eWxlcyIsInRpbWVfc2xpZGVyIiwibGluZSIsInJ1ZWNrc2NoYXVfZGF0YSIsIm1hcCIsImRhdGFFbGVtZW50IiwiaWQiLCJkb3QiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ5ZWFyIiwidmFsdWVzX2JvdHRvbSIsImxlZnRfdmFsdWUiLCJyaWdodF92YWx1ZSIsImltZ19zbGlkZXIiLCJ4IiwieSIsImRpc3BsYXkiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBOztBQUFBLGtCQUVRQyxzREFBUSxDQUFDLENBQUQsQ0FGaEI7QUFBQSxNQUV4QkMsU0FGd0I7QUFBQSxNQUViQyxpQkFGYTs7QUFBQSxtQkFHV0Ysc0RBQVEsQ0FBQyxLQUFELENBSG5CO0FBQUEsTUFHeEJHLGFBSHdCO0FBQUEsTUFHVEMsZ0JBSFM7O0FBSy9CLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckJILHFCQUFpQixDQUFDLENBQUQsQ0FBakI7QUFDQUUsb0JBQWdCLENBQUMsS0FBRCxDQUFoQjtBQUNELEdBSEQ7O0FBS0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUVFLHlEQUFNLENBQUNDLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUQseURBQU0sQ0FBQ0UsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVHQywwREFBZSxDQUFDQyxHQUFoQixDQUFvQixVQUFDQyxXQUFEO0FBQUEsV0FDckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssU0FBRyxFQUFFQSxXQUFXLENBQUNDLEVBQXRCO0FBQTBCLGFBQU8sRUFBRTtBQUFBLGVBQU1SLGdCQUFnQixDQUFDLElBQUQsQ0FBdEI7QUFBQSxPQUFuQztBQUFpRSxlQUFTLEVBQUVFLHlEQUFNLENBQUNPLEdBQW5GO0FBQXdGLGtCQUFZLEVBQUU7QUFBQSxlQUFNWCxpQkFBaUIsQ0FBQ1MsV0FBVyxDQUFDQyxFQUFiLENBQXZCO0FBQUEsT0FBdEc7QUFBK0ksa0JBQVksRUFBRVAsUUFBN0o7QUFBdUssV0FBSyxFQUFFO0FBQUNTLHVCQUFlLEVBQUViLFNBQVMsSUFBSVUsV0FBVyxDQUFDQyxFQUF6QixHQUE4QixLQUE5QixHQUFzQztBQUF4RCxPQUE5SztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlYLFNBQVMsSUFBSVUsV0FBVyxDQUFDQyxFQUF6QixHQUE4QkQsV0FBVyxDQUFDSSxJQUExQyxHQUFpRCxFQUFyRCxDQUZGLENBRHFCO0FBQUEsR0FBcEIsQ0FGSCxDQURGLEVBVUU7QUFBSyxhQUFTLEVBQUVULHlEQUFNLENBQUNVLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBRVYseURBQU0sQ0FBQ1csVUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUU7QUFBRyxhQUFTLEVBQUVYLHlEQUFNLENBQUNZLFdBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixDQVZGLENBREosRUFpQkk7QUFBSyxhQUFTLEVBQUVaLHlEQUFNLENBQUNhLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQ0EsUUFBSSxFQUFDLEdBREw7QUFFQSxVQUFNLEVBQUMsU0FGUDtBQUdBLG1CQUFlLEVBQUU7QUFBQ0MsT0FBQyxFQUFFLENBQUo7QUFBT0MsT0FBQyxFQUFFO0FBQVYsS0FIakI7QUFJQSxZQUFRLEVBQUUsSUFKVjtBQUtBLFFBQUksRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLENBTE47QUFNQSxVQUFNLEVBQUU7QUFBQSxhQUFNbkIsaUJBQWlCLENBQUMsR0FBRCxDQUF2QjtBQUFBLEtBTlI7QUFPQSxVQUFNLEVBQUU7QUFBQSxhQUFNQSxpQkFBaUIsQ0FBQyxHQUFELENBQXZCO0FBQUEsS0FQUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUU8sQ0FSUCxPQVNFO0FBQUssU0FBSyxFQUFFO0FBQUNvQixhQUFPLEVBQUUsTUFBVjtBQUFrQkMsWUFBTSxFQUFFO0FBQTFCLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVHZCwwREFBZSxDQUFDQyxHQUFoQixDQUFvQixVQUFDQyxXQUFEO0FBQUEsV0FFakI7QUFBSyxlQUFTLEVBQUMsUUFBZjtBQUF3QixXQUFLLEVBQUU7QUFBQ1csZUFBTyxFQUFFO0FBQVYsT0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF5RCxNQUFDLHlEQUFEO0FBQWUsU0FBRyxFQUFFWCxXQUFXLENBQUNDLEVBQWhDO0FBQW9DLFFBQUUsRUFBRUQsV0FBVyxDQUFDQyxFQUFwRDtBQUF3RCxtQkFBYSxFQUFFVCxhQUF2RTtBQUFzRixlQUFTLEVBQUVGLFNBQWpHO0FBQTRHLHVCQUFpQixFQUFFQyxpQkFBL0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUF6RCxDQUZpQjtBQUFBLEdBQXBCLENBRkgsQ0FURixDQURGLENBakJKLENBREY7QUF3Q0Q7O0dBbER1QkgsTTs7S0FBQUEsTSIsImZpbGUiOiIuL3NlY3Rpb25zL3J1ZWNrc2NoYXUvU2xpZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NsaWRlci5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCBTbGlkZXJFbGVtZW50IGZyb20gJy4vU2xpZGVyRWxlbWVudC5qcyc7XG5pbXBvcnQgcnVlY2tzY2hhdV9kYXRhIGZyb20gJy4vUnVlY2tzY2hhdURhdGEuanMnO1xuaW1wb3J0IERyYWdnYWJsZSBmcm9tICdyZWFjdC1kcmFnZ2FibGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbGlkZXIoKSB7XG5cbiAgY29uc3QgW2lzRm9jdXNlZCwgc2V0Rm9jdXNlZEVsZW1lbnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt3YXNEb3RDbGlja2VkLCBzZXRXYXNEb3RDbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCByZXNldERvdCA9ICgpID0+IHtcbiAgICBzZXRGb2N1c2VkRWxlbWVudCgwKTtcbiAgICBzZXRXYXNEb3RDbGlja2VkKGZhbHNlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lX3NsaWRlcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5lfT5cbiAgICAgICAgICAgIHsvKiBNYXBwZW4gZWluZW4gRG90IGbDvHIgamVkZXMgUGxha2F0ICovfVxuICAgICAgICAgICAge3J1ZWNrc2NoYXVfZGF0YS5tYXAoKGRhdGFFbGVtZW50KSA9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2RhdGFFbGVtZW50LmlkfSBvbkNsaWNrPXsoKSA9PiBzZXRXYXNEb3RDbGlja2VkKHRydWUpfSBjbGFzc05hbWU9e3N0eWxlcy5kb3R9IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0Rm9jdXNlZEVsZW1lbnQoZGF0YUVsZW1lbnQuaWQpfSBvbk1vdXNlTGVhdmU9e3Jlc2V0RG90fSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogaXNGb2N1c2VkID09IGRhdGFFbGVtZW50LmlkID8gXCJyZWRcIiA6IFwic2VhZ3JlZW5cIn19PjwvZGl2PlxuICAgICAgICAgICAgICA8cD57aXNGb2N1c2VkID09IGRhdGFFbGVtZW50LmlkID8gZGF0YUVsZW1lbnQueWVhciA6IFwiXCJ9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmFsdWVzX2JvdHRvbX0+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0X3ZhbHVlfT5KZXR6dDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0X3ZhbHVlfT4xOTkwPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltZ19zbGlkZXJ9PlxuICAgICAgICAgIDxEcmFnZ2FibGVcbiAgICAgICAgICBheGlzPVwieFwiXG4gICAgICAgICAgaGFuZGxlPVwiLmhhbmRsZVwiXG4gICAgICAgICAgZGVmYXVsdFBvc2l0aW9uPXt7eDogMCwgeTogMH19XG4gICAgICAgICAgcG9zaXRpb249e251bGx9XG4gICAgICAgICAgZ3JpZD17WzI1LCAyNV19XG4gICAgICAgICAgb25EcmFnPXsoKSA9PiBzZXRGb2N1c2VkRWxlbWVudCg5OTkpfVxuICAgICAgICAgIG9uU3RvcD17KCkgPT4gc2V0Rm9jdXNlZEVsZW1lbnQoOTk5KX0+XG4gICAgICAgICAgc2NhbGU9ezF9PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBoZWlnaHQ6IFwiMTAwJVwifX0+XG4gICAgICAgICAgICAgIHsvKiBNYXBwZW4gZsO8ciBqZWRlcyBQbGFrYXQgZGFzIEJpbGQgaW0gU2xpZGVyLCBzb3dpZSBkaWUgRGV0YWlsLUFuc2ljaHQgKGxhenkpICovfVxuICAgICAgICAgICAgICB7cnVlY2tzY2hhdV9kYXRhLm1hcCgoZGF0YUVsZW1lbnQpID0+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbmRsZVwiIHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmUtZmxleFwifX0+PFNsaWRlckVsZW1lbnQga2V5PXtkYXRhRWxlbWVudC5pZH0gaWQ9e2RhdGFFbGVtZW50LmlkfSB3YXNEb3RDbGlja2VkPXt3YXNEb3RDbGlja2VkfSBpc0ZvY3VzZWQ9e2lzRm9jdXNlZH0gc2V0Rm9jdXNlZEVsZW1lbnQ9e3NldEZvY3VzZWRFbGVtZW50fS8+PC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgPC9EcmFnZ2FibGU+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sections/rueckschau/Slider.js\n");

/***/ })

})