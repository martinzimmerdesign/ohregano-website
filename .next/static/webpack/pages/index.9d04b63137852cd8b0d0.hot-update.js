webpackHotUpdate_N_E("pages/index",{

/***/ "./components/container/SectionContainer.js":
/*!**************************************************!*\
  !*** ./components/container/SectionContainer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.m.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n\n\nvar _jsxFileName = \"/Users/martinzimmer/github/ohregano-website/components/container/SectionContainer.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nfunction SectionContainer(props) {\n  _s();\n\n  var thres = props.threshold;\n  console.log(thres);\n\n  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__[\"useInView\"])({\n    threshold: thres === undefined ? thres : 0.2,\n    triggerOnce: true,\n    delay: 0.3\n  }),\n      _useInView2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useInView, 3),\n      ref = _useInView2[0],\n      inView = _useInView2[1],\n      entry = _useInView2[2];\n\n  var variants = {\n    initial: {},\n    enter: {\n      transition: {\n        staggerChildren: 0.12\n      }\n    },\n    exit: {},\n    hover: {},\n    tap: {}\n  };\n  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n    ref: ref,\n    animate: inView ? \"enter\" : \"exit\",\n    initial: \"exit\",\n    variants: variants,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, props.children));\n}\n\n_s(SectionContainer, \"xcNnOkK/eOBEx/AJ1BTvf70kBfM=\", false, function () {\n  return [react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__[\"useInView\"]];\n});\n\n_c = SectionContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SectionContainer);\n\nvar _c;\n\n$RefreshReg$(_c, \"SectionContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWluZXIvU2VjdGlvbkNvbnRhaW5lci5qcz83ZGZhIl0sIm5hbWVzIjpbIlNlY3Rpb25Db250YWluZXIiLCJwcm9wcyIsInRocmVzIiwidGhyZXNob2xkIiwiY29uc29sZSIsImxvZyIsInVzZUluVmlldyIsInVuZGVmaW5lZCIsInRyaWdnZXJPbmNlIiwiZGVsYXkiLCJyZWYiLCJpblZpZXciLCJlbnRyeSIsInZhcmlhbnRzIiwiaW5pdGlhbCIsImVudGVyIiwidHJhbnNpdGlvbiIsInN0YWdnZXJDaGlsZHJlbiIsImV4aXQiLCJob3ZlciIsInRhcCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsZ0JBQVQsQ0FBMkJDLEtBQTNCLEVBQWtDO0FBQUE7O0FBRTlCLE1BQUlDLEtBQUssR0FBR0QsS0FBSyxDQUFDRSxTQUFsQjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWjs7QUFIOEIsbUJBS0RJLDZFQUFTLENBQUM7QUFDckNILGFBQVMsRUFBRUQsS0FBSyxLQUFLSyxTQUFWLEdBQXNCTCxLQUF0QixHQUE4QixHQURKO0FBRXJDTSxlQUFXLEVBQUUsSUFGd0I7QUFHckNDLFNBQUssRUFBRTtBQUg4QixHQUFELENBTFI7QUFBQTtBQUFBLE1BS3ZCQyxHQUx1QjtBQUFBLE1BS2xCQyxNQUxrQjtBQUFBLE1BS1ZDLEtBTFU7O0FBVy9CLE1BQU1DLFFBQVEsR0FBRztBQUNoQkMsV0FBTyxFQUFFLEVBRE87QUFHaEJDLFNBQUssRUFBRTtBQUFFQyxnQkFBVSxFQUFFO0FBQUVDLHVCQUFlLEVBQUU7QUFBbkI7QUFBZCxLQUhTO0FBS2hCQyxRQUFJLEVBQUUsRUFMVTtBQU9oQkMsU0FBSyxFQUFFLEVBUFM7QUFRaEJDLE9BQUcsRUFBRTtBQVJXLEdBQWpCO0FBV0QsU0FDRSxNQUFDLG9EQUFELENBQVEsR0FBUjtBQUNBLE9BQUcsRUFBRVYsR0FETDtBQUVBLFdBQU8sRUFBRUMsTUFBTSxHQUFHLE9BQUgsR0FBYSxNQUY1QjtBQUdBLFdBQU8sRUFBQyxNQUhSO0FBSUEsWUFBUSxFQUFFRSxRQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0daLEtBQUssQ0FBQ29CLFFBRFQsQ0FMQSxDQURGO0FBV0Q7O0dBakNRckIsZ0I7VUFLd0JNLHFFOzs7S0FMeEJOLGdCO0FBa0NNQSwrRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvY29udGFpbmVyL1NlY3Rpb25Db250YWluZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSAncmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmZ1bmN0aW9uIFNlY3Rpb25Db250YWluZXIgKHByb3BzKSB7XG5cbiAgICBsZXQgdGhyZXMgPSBwcm9wcy50aHJlc2hvbGRcbiAgICBjb25zb2xlLmxvZyh0aHJlcylcblxuICAgIGNvbnN0IFtyZWYsIGluVmlldywgZW50cnldID0gdXNlSW5WaWV3KHtcbiAgICAgIHRocmVzaG9sZDogdGhyZXMgPT09IHVuZGVmaW5lZCA/IHRocmVzIDogMC4yLFxuICAgICAgdHJpZ2dlck9uY2U6IHRydWUsXG4gICAgICBkZWxheTogMC4zXG4gICAgfSlcblxuICAgY29uc3QgdmFyaWFudHMgPSB7XG4gICAgaW5pdGlhbDoge1xuICAgIH0sXG4gICAgZW50ZXI6IHsgdHJhbnNpdGlvbjogeyBzdGFnZ2VyQ2hpbGRyZW46IDAuMTIgfVxuICAgIH0sXG4gICAgZXhpdDoge1xuICAgIH0sXG4gICAgaG92ZXI6IHsgfSxcbiAgICB0YXA6IHsgfSxcbiAgfTsgXG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgIHJlZj17cmVmfVxuICAgIGFuaW1hdGU9e2luVmlldyA/IFwiZW50ZXJcIiA6IFwiZXhpdFwifVxuICAgIGluaXRpYWw9XCJleGl0XCJcbiAgICB2YXJpYW50cz17dmFyaWFudHN9PlxuICAgIDxkaXY+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uQ29udGFpbmVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/container/SectionContainer.js\n");

/***/ })

})