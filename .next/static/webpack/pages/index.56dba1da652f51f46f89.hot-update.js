webpackHotUpdate_N_E("pages/index",{

/***/ "./components/container/SectionContainer.js":
/*!**************************************************!*\
  !*** ./components/container/SectionContainer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.m.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n\n\nvar _jsxFileName = \"/Users/martinzimmer/github/ohregano-website/components/container/SectionContainer.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nfunction SectionContainer(_ref) {\n  _s();\n\n  var threshold = _ref.threshold;\n\n  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__[\"useInView\"])({\n    threshold: props.threshold = !undefined ? props.threshold : 0.16,\n    triggerOnce: true,\n    delay: 0.3\n  }),\n      _useInView2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useInView, 3),\n      ref = _useInView2[0],\n      inView = _useInView2[1],\n      entry = _useInView2[2];\n\n  var variants = {\n    initial: {},\n    enter: {\n      transition: {\n        staggerChildren: 0.12\n      }\n    },\n    exit: {},\n    hover: {},\n    tap: {}\n  };\n  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n    ref: ref,\n    animate: inView ? \"enter\" : \"exit\",\n    initial: \"exit\",\n    variants: variants,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, props.children));\n}\n\n_s(SectionContainer, \"xcNnOkK/eOBEx/AJ1BTvf70kBfM=\", false, function () {\n  return [react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__[\"useInView\"]];\n});\n\n_c = SectionContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SectionContainer);\n\nvar _c;\n\n$RefreshReg$(_c, \"SectionContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWluZXIvU2VjdGlvbkNvbnRhaW5lci5qcz83ZGZhIl0sIm5hbWVzIjpbIlNlY3Rpb25Db250YWluZXIiLCJ0aHJlc2hvbGQiLCJ1c2VJblZpZXciLCJwcm9wcyIsInVuZGVmaW5lZCIsInRyaWdnZXJPbmNlIiwiZGVsYXkiLCJyZWYiLCJpblZpZXciLCJlbnRyeSIsInZhcmlhbnRzIiwiaW5pdGlhbCIsImVudGVyIiwidHJhbnNpdGlvbiIsInN0YWdnZXJDaGlsZHJlbiIsImV4aXQiLCJob3ZlciIsInRhcCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsZ0JBQVQsT0FBMEM7QUFBQTs7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7O0FBQUEsbUJBRVRDLDZFQUFTLENBQUM7QUFDckNELGFBQVMsRUFBRUUsS0FBSyxDQUFDRixTQUFOLEdBQWlCLENBQUVHLFNBQUYsR0FBY0QsS0FBSyxDQUFDRixTQUFwQixHQUFnQyxJQUR2QjtBQUVyQ0ksZUFBVyxFQUFFLElBRndCO0FBR3JDQyxTQUFLLEVBQUU7QUFIOEIsR0FBRCxDQUZBO0FBQUE7QUFBQSxNQUUvQkMsR0FGK0I7QUFBQSxNQUUxQkMsTUFGMEI7QUFBQSxNQUVsQkMsS0FGa0I7O0FBUXZDLE1BQU1DLFFBQVEsR0FBRztBQUNoQkMsV0FBTyxFQUFFLEVBRE87QUFHaEJDLFNBQUssRUFBRTtBQUFFQyxnQkFBVSxFQUFFO0FBQUVDLHVCQUFlLEVBQUU7QUFBbkI7QUFBZCxLQUhTO0FBS2hCQyxRQUFJLEVBQUUsRUFMVTtBQU9oQkMsU0FBSyxFQUFFLEVBUFM7QUFRaEJDLE9BQUcsRUFBRTtBQVJXLEdBQWpCO0FBV0QsU0FDRSxNQUFDLG9EQUFELENBQVEsR0FBUjtBQUNBLE9BQUcsRUFBRVYsR0FETDtBQUVBLFdBQU8sRUFBRUMsTUFBTSxHQUFHLE9BQUgsR0FBYSxNQUY1QjtBQUdBLFdBQU8sRUFBQyxNQUhSO0FBSUEsWUFBUSxFQUFFRSxRQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dQLEtBQUssQ0FBQ2UsUUFEVCxDQUxBLENBREY7QUFXRDs7R0E5QlFsQixnQjtVQUV3QkUscUU7OztLQUZ4QkYsZ0I7QUErQk1BLCtFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jb250YWluZXIvU2VjdGlvbkNvbnRhaW5lci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tICdyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXInO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuZnVuY3Rpb24gU2VjdGlvbkNvbnRhaW5lciAoeyB0aHJlc2hvbGQgfSkge1xuXG4gICAgY29uc3QgW3JlZiwgaW5WaWV3LCBlbnRyeV0gPSB1c2VJblZpZXcoe1xuICAgICAgdGhyZXNob2xkOiBwcm9wcy50aHJlc2hvbGQgPSEgdW5kZWZpbmVkID8gcHJvcHMudGhyZXNob2xkIDogMC4xNixcbiAgICAgIHRyaWdnZXJPbmNlOiB0cnVlLFxuICAgICAgZGVsYXk6IDAuM1xuICAgIH0pXG5cbiAgIGNvbnN0IHZhcmlhbnRzID0ge1xuICAgIGluaXRpYWw6IHtcbiAgICB9LFxuICAgIGVudGVyOiB7IHRyYW5zaXRpb246IHsgc3RhZ2dlckNoaWxkcmVuOiAwLjEyIH1cbiAgICB9LFxuICAgIGV4aXQ6IHtcbiAgICB9LFxuICAgIGhvdmVyOiB7IH0sXG4gICAgdGFwOiB7IH0sXG4gIH07IFxuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICByZWY9e3JlZn1cbiAgICBhbmltYXRlPXtpblZpZXcgPyBcImVudGVyXCIgOiBcImV4aXRcIn1cbiAgICBpbml0aWFsPVwiZXhpdFwiXG4gICAgdmFyaWFudHM9e3ZhcmlhbnRzfT5cbiAgICA8ZGl2PlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbkNvbnRhaW5lcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/container/SectionContainer.js\n");

/***/ })

})