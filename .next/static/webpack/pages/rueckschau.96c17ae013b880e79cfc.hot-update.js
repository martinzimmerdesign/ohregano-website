webpackHotUpdate_N_E("pages/rueckschau",{

/***/ "./sections/rueckschau/Slider.js":
/*!***************************************!*\
  !*** ./sections/rueckschau/Slider.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Slider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Slider_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slider.module.css */ \"./sections/rueckschau/Slider.module.css\");\n/* harmony import */ var _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Slider_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\nvar _jsxFileName = \"/Users/martinzimmer/github/ohregano-website/sections/rueckschau/Slider.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Slider() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      isFocused = _useState[0],\n      setFocusedElement = _useState[1];\n\n  console.log(isFocused);\n  var variants = {\n    content: {\n      open: {\n        y: 0,\n        opacity: 1,\n        zIndex: 400\n      },\n      closed: {\n        y: \"100vh\",\n        opacity: 0,\n        zIndex: 400,\n        transition: {\n          when: \"afterChildren\"\n        }\n      }\n    }\n  };\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isToggled = _useState2[0],\n      setToggled = _useState2[1];\n\n  var toggleTrueFalse = function toggleTrueFalse() {\n    return setToggled(!isToggled);\n  };\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.time_slider,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.line,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dot,\n    onMouseEnter: function onMouseEnter() {\n      return setFocusedElement(1);\n    },\n    onMouseLeave: function onMouseLeave() {\n      return setFocusedElement(0);\n    },\n    style: {\n      backgroundColor: isFocused == 1 ? \"red\" : \"seagreen\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dot,\n    onMouseEnter: function onMouseEnter() {\n      return setFocusedElement(2);\n    },\n    onMouseLeave: function onMouseLeave() {\n      return setFocusedElement(0);\n    },\n    style: {\n      backgroundColor: isFocused == 2 ? \"red\" : \"seagreen\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dot,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dot,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dot,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dot,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.values_bottom,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.left_value,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, \"Jetzt\"), __jsx(\"p\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.right_value,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }, \"1990\"))), __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.img_slider,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    onClick: toggleTrueFalse,\n    onMouseEnter: function onMouseEnter() {\n      return setFocusedElement(1);\n    },\n    onMouseLeave: function onMouseLeave() {\n      return setFocusedElement(0);\n    },\n    style: {\n      backgroundColor: isFocused == 1 ? \"red\" : \"seagreen\"\n    },\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.slide_element,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    onMouseEnter: function onMouseEnter() {\n      return setFocusedElement(2);\n    },\n    onMouseLeave: function onMouseLeave() {\n      return setFocusedElement(0);\n    },\n    style: {\n      backgroundColor: isFocused == 2 ? \"red\" : \"seagreen\"\n    },\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.slide_element,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n    initial: \"closed\",\n    animate: isToggled ? \"open\" : \"closed\",\n    transition: {\n      ease: \"easeInOut\",\n      duration: 0.2\n    },\n    variants: variants.content,\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content_wrapper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.left_value,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, \"Jetzt\"), __jsx(\"p\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.right_value,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  }, \"1990\")))));\n}\n\n_s(Slider, \"iq9420xSdPe2BHTkoTAXiFWSvkc=\");\n\n_c = Slider;\n\nvar _c;\n\n$RefreshReg$(_c, \"Slider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvcnVlY2tzY2hhdS9TbGlkZXIuanM/OGIyOCJdLCJuYW1lcyI6WyJTbGlkZXIiLCJ1c2VTdGF0ZSIsImlzRm9jdXNlZCIsInNldEZvY3VzZWRFbGVtZW50IiwiY29uc29sZSIsImxvZyIsInZhcmlhbnRzIiwiY29udGVudCIsIm9wZW4iLCJ5Iiwib3BhY2l0eSIsInpJbmRleCIsImNsb3NlZCIsInRyYW5zaXRpb24iLCJ3aGVuIiwiaXNUb2dnbGVkIiwic2V0VG9nZ2xlZCIsInRvZ2dsZVRydWVGYWxzZSIsInN0eWxlcyIsInRpbWVfc2xpZGVyIiwibGluZSIsImRvdCIsImJhY2tncm91bmRDb2xvciIsInZhbHVlc19ib3R0b20iLCJsZWZ0X3ZhbHVlIiwicmlnaHRfdmFsdWUiLCJpbWdfc2xpZGVyIiwic2xpZGVfZWxlbWVudCIsImVhc2UiLCJkdXJhdGlvbiIsImNvbnRlbnRfd3JhcHBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxrQkFFUUMsc0RBQVEsQ0FBQyxDQUFELENBRmhCO0FBQUEsTUFFeEJDLFNBRndCO0FBQUEsTUFFYkMsaUJBRmE7O0FBRy9CQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsU0FBWjtBQUVBLE1BQU1JLFFBQVEsR0FBRztBQUNmQyxXQUFPLEVBQUU7QUFDUEMsVUFBSSxFQUFFO0FBQUVDLFNBQUMsRUFBRSxDQUFMO0FBQVFDLGVBQU8sRUFBRSxDQUFqQjtBQUFvQkMsY0FBTSxFQUFFO0FBQTVCLE9BREM7QUFFUEMsWUFBTSxFQUFFO0FBQUVILFNBQUMsRUFBRSxPQUFMO0FBQWNDLGVBQU8sRUFBRSxDQUF2QjtBQUEwQkMsY0FBTSxFQUFFLEdBQWxDO0FBQXVDRSxrQkFBVSxFQUFFO0FBQ3pEQyxjQUFJLEVBQUU7QUFEbUQ7QUFBbkQ7QUFGRDtBQURNLEdBQWpCOztBQUwrQixtQkFj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Q29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2xpZGVyLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbGlkZXIoKSB7XG5cbiAgY29uc3QgW2lzRm9jdXNlZCwgc2V0Rm9jdXNlZEVsZW1lbnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnNvbGUubG9nKGlzRm9jdXNlZCk7XG5cbiAgY29uc3QgdmFyaWFudHMgPSB7XG4gICAgY29udGVudDoge1xuICAgICAgb3BlbjogeyB5OiAwLCBvcGFjaXR5OiAxLCB6SW5kZXg6IDQwMH0sXG4gICAgICBjbG9zZWQ6IHsgeTogXCIxMDB2aFwiLCBvcGFjaXR5OiAwLCB6SW5kZXg6IDQwMCwgdHJhbnNpdGlvbjoge1xuICAgICAgICB3aGVuOiBcImFmdGVyQ2hpbGRyZW5cIixcbiAgICAgIH0sIH0sXG4gICAgfVxuICB9XG5cbiAgY29uc3QgW2lzVG9nZ2xlZCwgc2V0VG9nZ2xlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRvZ2dsZVRydWVGYWxzZSA9ICgpID0+IHNldFRvZ2dsZWQoIWlzVG9nZ2xlZCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVfc2xpZGVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmV9PlxuICAgICAgICAgICAgey8qIE1hcHBlbiBlaW5lbiBEb3QgZsO8ciBqZWRlcyBQbGFrYXQgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRvdH0gb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRGb2N1c2VkRWxlbWVudCgxKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRGb2N1c2VkRWxlbWVudCgwKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IGlzRm9jdXNlZCA9PSAxID8gXCJyZWRcIiA6IFwic2VhZ3JlZW5cIn19PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kb3R9IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0Rm9jdXNlZEVsZW1lbnQoMil9IG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0Rm9jdXNlZEVsZW1lbnQoMCl9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBpc0ZvY3VzZWQgPT0gMiA/IFwicmVkXCIgOiBcInNlYWdyZWVuXCJ9fT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZG90fT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZG90fT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZG90fT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZG90fT48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZhbHVlc19ib3R0b219PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubGVmdF92YWx1ZX0+SmV0enQ8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5yaWdodF92YWx1ZX0+MTk5MDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWdfc2xpZGVyfT5cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RvZ2dsZVRydWVGYWxzZX0gb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRGb2N1c2VkRWxlbWVudCgxKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRGb2N1c2VkRWxlbWVudCgwKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IGlzRm9jdXNlZCA9PSAxID8gXCJyZWRcIiA6IFwic2VhZ3JlZW5cIn19IGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlX2VsZW1lbnR9PjwvZGl2PlxuICAgICAgICAgIDxkaXYgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRGb2N1c2VkRWxlbWVudCgyKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRGb2N1c2VkRWxlbWVudCgwKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IGlzRm9jdXNlZCA9PSAyID8gXCJyZWRcIiA6IFwic2VhZ3JlZW5cIn19IGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlX2VsZW1lbnR9PjwvZGl2PlxuXG4gICAgICAgICAgPG1vdGlvbi5kaXYgaW5pdGlhbD1cImNsb3NlZFwiIGFuaW1hdGU9e2lzVG9nZ2xlZCA/IFwib3BlblwiIDogXCJjbG9zZWRcIn0gdHJhbnNpdGlvbj17eyBlYXNlOiBcImVhc2VJbk91dFwiLCBkdXJhdGlvbjogMC4yIH19IHZhcmlhbnRzPXt2YXJpYW50cy5jb250ZW50fSBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50X3dyYXBwZXJ9PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0X3ZhbHVlfT5KZXR6dDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0X3ZhbHVlfT4xOTkwPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sections/rueckschau/Slider.js\n");

/***/ })

})