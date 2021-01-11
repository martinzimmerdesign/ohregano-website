webpackHotUpdate_N_E("pages/rueckschau",{

/***/ "./sections/rueckschau/SliderElement.js":
/*!**********************************************!*\
  !*** ./sections/rueckschau/SliderElement.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SliderElement; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SliderElement_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SliderElement.module.css */ \"./sections/rueckschau/SliderElement.module.css\");\n/* harmony import */ var _SliderElement_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SliderElement_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\nvar _jsxFileName = \"/Users/martinzimmer/github/ohregano-website/sections/rueckschau/SliderElement.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction SliderElement(props) {\n  var onClick = function onClick() {\n    console.log(\"Wird geklickt\");\n    props.setFocusedElement(props.dataElement.id);\n    props.onClickHandler();\n  };\n\n  var variants = {\n    basic: {\n      enter: {\n        y: 0,\n        opacity: 1\n      },\n      exit: {\n        y: 50,\n        opacity: 0\n      }\n    },\n    frame: {\n      enter: {\n        border: \"2px solid rgba(255,255,255,1)\",\n        padding: \"20px\"\n      },\n      exit: {\n        border: \"2px solid rgba(0,0,0,0)\",\n        padding: \"0px\"\n      }\n    }\n  };\n  var bool = props.isFocused == props.dataElement.id;\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].div, {\n    animate: bool ? \"enter\" : \"exit\",\n    variants: variants.frame,\n    onClick: props.isDragging == false ? onClick : null,\n    onMouseEnter: function onMouseEnter() {\n      return props.setFocusedElement(props.dataElement.id);\n    },\n    onMouseLeave: function onMouseLeave() {\n      return props.setFocusedElement(-1);\n    },\n    className: _SliderElement_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.slide_element,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    onClick: props.isDragging == false ? onClick : null,\n    draggable: \"false\",\n    className: _SliderElement_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cover,\n    src: props.dataElement.img,\n    alt: \"Cover Img\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  })));\n}\n_c = SliderElement;\n\nvar _c;\n\n$RefreshReg$(_c, \"SliderElement\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvcnVlY2tzY2hhdS9TbGlkZXJFbGVtZW50LmpzPzE3ZDQiXSwibmFtZXMiOlsiU2xpZGVyRWxlbWVudCIsInByb3BzIiwib25DbGljayIsImNvbnNvbGUiLCJsb2ciLCJzZXRGb2N1c2VkRWxlbWVudCIsImRhdGFFbGVtZW50IiwiaWQiLCJvbkNsaWNrSGFuZGxlciIsInZhcmlhbnRzIiwiYmFzaWMiLCJlbnRlciIsInkiLCJvcGFjaXR5IiwiZXhpdCIsImZyYW1lIiwiYm9yZGVyIiwicGFkZGluZyIsImJvb2wiLCJpc0ZvY3VzZWQiLCJpc0RyYWdnaW5nIiwic3R5bGVzIiwic2xpZGVfZWxlbWVudCIsImNvdmVyIiwiaW1nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFFekMsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNsQkMsV0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUNBSCxTQUFLLENBQUNJLGlCQUFOLENBQXdCSixLQUFLLENBQUNLLFdBQU4sQ0FBa0JDLEVBQTFDO0FBQ0FOLFNBQUssQ0FBQ08sY0FBTjtBQUNILEdBSkQ7O0FBTUEsTUFBTUMsUUFBUSxHQUFHO0FBQ2JDLFNBQUssRUFBRTtBQUNMQyxXQUFLLEVBQUU7QUFBRUMsU0FBQyxFQUFFLENBQUw7QUFBUUMsZUFBTyxFQUFFO0FBQWpCLE9BREY7QUFFTEMsVUFBSSxFQUFFO0FBQUVGLFNBQUMsRUFBRSxFQUFMO0FBQVNDLGVBQU8sRUFBRTtBQUFsQjtBQUZELEtBRE07QUFLYkUsU0FBSyxFQUFFO0FBQ0hKLFdBQUssRUFBRTtBQUFFSyxjQUFNLEVBQUUsK0JBQVY7QUFBMkNDLGVBQU8sRUFBRTtBQUFwRCxPQURKO0FBRUhILFVBQUksRUFBRTtBQUFFRSxjQUFNLEVBQUUseUJBQVY7QUFBcUNDLGVBQU8sRUFBRTtBQUE5QztBQUZIO0FBTE0sR0FBakI7QUFXQSxNQUFJQyxJQUFJLEdBQUdqQixLQUFLLENBQUNrQixTQUFOLElBQW1CbEIsS0FBSyxDQUFDSyxXQUFOLENBQWtCQyxFQUFoRDtBQUVGLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksV0FBTyxFQUFFVyxJQUFJLEdBQUcsT0FBSCxHQUFhLE1BQXRDO0FBQThDLFlBQVEsRUFBRVQsUUFBUSxDQUFDTSxLQUFqRTtBQUF3RSxXQUFPLEVBQUVkLEtBQUssQ0FBQ21CLFVBQU4sSUFBb0IsS0FBcEIsR0FBNEJsQixPQUE1QixHQUFzQyxJQUF2SDtBQUE2SCxnQkFBWSxFQUFFO0FBQUEsYUFBTUQsS0FBSyxDQUFDSSxpQkFBTixDQUF3QkosS0FBSyxDQUFDSyxXQUFOLENBQWtCQyxFQUExQyxDQUFOO0FBQUEsS0FBM0k7QUFBZ00sZ0JBQVksRUFBRTtBQUFBLGFBQU1OLEtBQUssQ0FBQ0ksaUJBQU4sQ0FBd0IsQ0FBQyxDQUF6QixDQUFOO0FBQUEsS0FBOU07QUFBaVAsYUFBUyxFQUFFZ0IsZ0VBQU0sQ0FBQ0MsYUFBblE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUssV0FBTyxFQUFFckIsS0FBSyxDQUFDbUIsVUFBTixJQUFvQixLQUFwQixHQUE0QmxCLE9BQTVCLEdBQXNDLElBQXBEO0FBQTBELGFBQVMsRUFBQyxPQUFwRTtBQUE0RSxhQUFTLEVBQUVtQixnRUFBTSxDQUFDRSxLQUE5RjtBQUFxRyxPQUFHLEVBQUV0QixLQUFLLENBQUNLLFdBQU4sQ0FBa0JrQixHQUE1SDtBQUFpSSxPQUFHLEVBQUMsV0FBckk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLENBREosQ0FERjtBQU9EO0tBNUJ1QnhCLGEiLCJmaWxlIjoiLi9zZWN0aW9ucy9ydWVja3NjaGF1L1NsaWRlckVsZW1lbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vU2xpZGVyRWxlbWVudC5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2xpZGVyRWxlbWVudChwcm9wcykge1xuXG4gICAgY29uc3Qgb25DbGljayA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJXaXJkIGdla2xpY2t0XCIpO1xuICAgICAgICBwcm9wcy5zZXRGb2N1c2VkRWxlbWVudChwcm9wcy5kYXRhRWxlbWVudC5pZCk7XG4gICAgICAgIHByb3BzLm9uQ2xpY2tIYW5kbGVyKCk7XG4gICAgfVxuXG4gICAgY29uc3QgdmFyaWFudHMgPSB7XG4gICAgICAgIGJhc2ljOiB7XG4gICAgICAgICAgZW50ZXI6IHsgeTogMCwgb3BhY2l0eTogMSB9LFxuICAgICAgICAgIGV4aXQ6IHsgeTogNTAsIG9wYWNpdHk6IDAgfVxuICAgICAgICB9LFxuICAgICAgICBmcmFtZToge1xuICAgICAgICAgICAgZW50ZXI6IHsgYm9yZGVyOiBcIjJweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDEpXCIsIHBhZGRpbmc6IFwiMjBweFwiIH0sXG4gICAgICAgICAgICBleGl0OiB7IGJvcmRlcjogXCIycHggc29saWQgcmdiYSgwLDAsMCwwKVwiLCBwYWRkaW5nOiBcIjBweFwiIH1cbiAgICAgICAgICB9LFxuICAgICAgfTtcblxuICAgIGxldCBib29sID0gcHJvcHMuaXNGb2N1c2VkID09IHByb3BzLmRhdGFFbGVtZW50LmlkO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgPG1vdGlvbi5kaXYgYW5pbWF0ZT17Ym9vbCA/IFwiZW50ZXJcIiA6IFwiZXhpdFwifSB2YXJpYW50cz17dmFyaWFudHMuZnJhbWV9IG9uQ2xpY2s9e3Byb3BzLmlzRHJhZ2dpbmcgPT0gZmFsc2UgPyBvbkNsaWNrIDogbnVsbH0gb25Nb3VzZUVudGVyPXsoKSA9PiBwcm9wcy5zZXRGb2N1c2VkRWxlbWVudChwcm9wcy5kYXRhRWxlbWVudC5pZCl9IG9uTW91c2VMZWF2ZT17KCkgPT4gcHJvcHMuc2V0Rm9jdXNlZEVsZW1lbnQoLTEpfSBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZV9lbGVtZW50fT5cbiAgICAgICAgPGltZyBvbkNsaWNrPXtwcm9wcy5pc0RyYWdnaW5nID09IGZhbHNlID8gb25DbGljayA6IG51bGx9IGRyYWdnYWJsZT1cImZhbHNlXCIgY2xhc3NOYW1lPXtzdHlsZXMuY292ZXJ9IHNyYz17cHJvcHMuZGF0YUVsZW1lbnQuaW1nfSBhbHQ9XCJDb3ZlciBJbWdcIiAvPlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sections/rueckschau/SliderElement.js\n");

/***/ })

})