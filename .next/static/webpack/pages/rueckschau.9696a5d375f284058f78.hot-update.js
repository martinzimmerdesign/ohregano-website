webpackHotUpdate_N_E("pages/rueckschau",{

/***/ "./sections/rueckschau/SliderElement.js":
/*!**********************************************!*\
  !*** ./sections/rueckschau/SliderElement.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SliderElement; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SliderElement_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SliderElement.module.css */ \"./sections/rueckschau/SliderElement.module.css\");\n/* harmony import */ var _SliderElement_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SliderElement_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\nvar _jsxFileName = \"/Users/martinzimmer/github/ohregano-website/sections/rueckschau/SliderElement.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction SliderElement(props) {\n  var onClick = function onClick() {\n    console.log(\"Wird geklickt\");\n    props.setFocusedElement(props.dataElement.id);\n    props.onClickHandler();\n  };\n\n  var variants = {\n    basic: {\n      enter: {\n        y: 0,\n        opacity: 1\n      },\n      exit: {\n        y: 50,\n        opacity: 0\n      }\n    },\n    frame: {\n      /* enter: { border: \"2px solid rgba(255,255,255,1)\", padding: \"20px\" },\n      exit: { border: \"2px solid rgba(0,0,0,0)\", padding: \"0px\" } */\n    }\n  };\n  var bool = props.isFocused == props.dataElement.id;\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].div, {\n    animate: bool ? \"enter\" : \"exit\",\n    variants: variants.frame,\n    onClick: props.isDragging == false ? onClick : null,\n    onMouseEnter: function onMouseEnter() {\n      return props.setFocusedElement(props.dataElement.id);\n    },\n    onMouseLeave: function onMouseLeave() {\n      return props.setFocusedElement(-1);\n    },\n    className: _SliderElement_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.slide_element,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    onClick: props.isDragging == false ? onClick : null,\n    draggable: \"false\",\n    className: _SliderElement_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cover,\n    src: props.dataElement.img,\n    alt: \"Cover Img\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  })));\n}\n_c = SliderElement;\n\nvar _c;\n\n$RefreshReg$(_c, \"SliderElement\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvcnVlY2tzY2hhdS9TbGlkZXJFbGVtZW50LmpzPzE3ZDQiXSwibmFtZXMiOlsiU2xpZGVyRWxlbWVudCIsInByb3BzIiwib25DbGljayIsImNvbnNvbGUiLCJsb2ciLCJzZXRGb2N1c2VkRWxlbWVudCIsImRhdGFFbGVtZW50IiwiaWQiLCJvbkNsaWNrSGFuZGxlciIsInZhcmlhbnRzIiwiYmFzaWMiLCJlbnRlciIsInkiLCJvcGFjaXR5IiwiZXhpdCIsImZyYW1lIiwiYm9vbCIsImlzRm9jdXNlZCIsImlzRHJhZ2dpbmciLCJzdHlsZXMiLCJzbGlkZV9lbGVtZW50IiwiY292ZXIiLCJpbWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUV6QyxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ2xCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBQ0FILFNBQUssQ0FBQ0ksaUJBQU4sQ0FBd0JKLEtBQUssQ0FBQ0ssV0FBTixDQUFrQkMsRUFBMUM7QUFDQU4sU0FBSyxDQUFDTyxjQUFOO0FBQ0gsR0FKRDs7QUFNQSxNQUFNQyxRQUFRLEdBQUc7QUFDYkMsU0FBSyxFQUFFO0FBQ0xDLFdBQUssRUFBRTtBQUFFQyxTQUFDLEVBQUUsQ0FBTDtBQUFRQyxlQUFPLEVBQUU7QUFBakIsT0FERjtBQUVMQyxVQUFJLEVBQUU7QUFBRUYsU0FBQyxFQUFFLEVBQUw7QUFBU0MsZUFBTyxFQUFFO0FBQWxCO0FBRkQsS0FETTtBQUtiRSxTQUFLLEVBQUU7QUFDSDs7QUFERztBQUxNLEdBQWpCO0FBV0EsTUFBSUMsSUFBSSxHQUFHZixLQUFLLENBQUNnQixTQUFOLElBQW1CaEIsS0FBSyxDQUFDSyxXQUFOLENBQWtCQyxFQUFoRDtBQUVGLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksV0FBTyxFQUFFUyxJQUFJLEdBQUcsT0FBSCxHQUFhLE1BQXRDO0FBQThDLFlBQVEsRUFBRVAsUUFBUSxDQUFDTSxLQUFqRTtBQUF3RSxXQUFPLEVBQUVkLEtBQUssQ0FBQ2lCLFVBQU4sSUFBb0IsS0FBcEIsR0FBNEJoQixPQUE1QixHQUFzQyxJQUF2SDtBQUE2SCxnQkFBWSxFQUFFO0FBQUEsYUFBTUQsS0FBSyxDQUFDSSxpQkFBTixDQUF3QkosS0FBSyxDQUFDSyxXQUFOLENBQWtCQyxFQUExQyxDQUFOO0FBQUEsS0FBM0k7QUFBZ00sZ0JBQVksRUFBRTtBQUFBLGFBQU1OLEtBQUssQ0FBQ0ksaUJBQU4sQ0FBd0IsQ0FBQyxDQUF6QixDQUFOO0FBQUEsS0FBOU07QUFBaVAsYUFBUyxFQUFFYyxnRUFBTSxDQUFDQyxhQUFuUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSyxXQUFPLEVBQUVuQixLQUFLLENBQUNpQixVQUFOLElBQW9CLEtBQXBCLEdBQTRCaEIsT0FBNUIsR0FBc0MsSUFBcEQ7QUFBMEQsYUFBUyxFQUFDLE9BQXBFO0FBQTRFLGFBQVMsRUFBRWlCLGdFQUFNLENBQUNFLEtBQTlGO0FBQXFHLE9BQUcsRUFBRXBCLEtBQUssQ0FBQ0ssV0FBTixDQUFrQmdCLEdBQTVIO0FBQWlJLE9BQUcsRUFBQyxXQUFySTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsQ0FESixDQURGO0FBT0Q7S0E1QnVCdEIsYSIsImZpbGUiOiIuL3NlY3Rpb25zL3J1ZWNrc2NoYXUvU2xpZGVyRWxlbWVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9TbGlkZXJFbGVtZW50Lm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbGlkZXJFbGVtZW50KHByb3BzKSB7XG5cbiAgICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIldpcmQgZ2VrbGlja3RcIik7XG4gICAgICAgIHByb3BzLnNldEZvY3VzZWRFbGVtZW50KHByb3BzLmRhdGFFbGVtZW50LmlkKTtcbiAgICAgICAgcHJvcHMub25DbGlja0hhbmRsZXIoKTtcbiAgICB9XG5cbiAgICBjb25zdCB2YXJpYW50cyA9IHtcbiAgICAgICAgYmFzaWM6IHtcbiAgICAgICAgICBlbnRlcjogeyB5OiAwLCBvcGFjaXR5OiAxIH0sXG4gICAgICAgICAgZXhpdDogeyB5OiA1MCwgb3BhY2l0eTogMCB9XG4gICAgICAgIH0sXG4gICAgICAgIGZyYW1lOiB7XG4gICAgICAgICAgICAvKiBlbnRlcjogeyBib3JkZXI6IFwiMnB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMSlcIiwgcGFkZGluZzogXCIyMHB4XCIgfSxcbiAgICAgICAgICAgIGV4aXQ6IHsgYm9yZGVyOiBcIjJweCBzb2xpZCByZ2JhKDAsMCwwLDApXCIsIHBhZGRpbmc6IFwiMHB4XCIgfSAqL1xuICAgICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgbGV0IGJvb2wgPSBwcm9wcy5pc0ZvY3VzZWQgPT0gcHJvcHMuZGF0YUVsZW1lbnQuaWQ7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICA8bW90aW9uLmRpdiBhbmltYXRlPXtib29sID8gXCJlbnRlclwiIDogXCJleGl0XCJ9IHZhcmlhbnRzPXt2YXJpYW50cy5mcmFtZX0gb25DbGljaz17cHJvcHMuaXNEcmFnZ2luZyA9PSBmYWxzZSA/IG9uQ2xpY2sgOiBudWxsfSBvbk1vdXNlRW50ZXI9eygpID0+IHByb3BzLnNldEZvY3VzZWRFbGVtZW50KHByb3BzLmRhdGFFbGVtZW50LmlkKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBwcm9wcy5zZXRGb2N1c2VkRWxlbWVudCgtMSl9IGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlX2VsZW1lbnR9PlxuICAgICAgICA8aW1nIG9uQ2xpY2s9e3Byb3BzLmlzRHJhZ2dpbmcgPT0gZmFsc2UgPyBvbkNsaWNrIDogbnVsbH0gZHJhZ2dhYmxlPVwiZmFsc2VcIiBjbGFzc05hbWU9e3N0eWxlcy5jb3Zlcn0gc3JjPXtwcm9wcy5kYXRhRWxlbWVudC5pbWd9IGFsdD1cIkNvdmVyIEltZ1wiIC8+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sections/rueckschau/SliderElement.js\n");

/***/ })

})