webpackHotUpdate_N_E("pages/rueckschau",{

/***/ "./sections/rueckschau/Slider.js":
/*!***************************************!*\
  !*** ./sections/rueckschau/Slider.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Slider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Slider_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slider.module.css */ \"./sections/rueckschau/Slider.module.css\");\n/* harmony import */ var _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Slider_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _SliderElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SliderElement.js */ \"./sections/rueckschau/SliderElement.js\");\n/* harmony import */ var _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RueckschauData.js */ \"./sections/rueckschau/RueckschauData.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-draggable */ \"./node_modules/react-draggable/build/cjs/cjs.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/martinzimmer/github/ohregano-website/sections/rueckschau/Slider.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nfunction Slider() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      isFocused = _useState[0],\n      setFocusedElement = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      wasDotClicked = _useState2[0],\n      setWasDotClicked = _useState2[1];\n\n  var resetDot = function resetDot() {\n    setFocusedElement(0);\n    setWasDotClicked(false);\n  };\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.time_slider,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.line,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 11\n    }\n  }, _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].map(function (dataElement) {\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      key: dataElement.id,\n      onClick: function onClick() {\n        return setWasDotClicked(true);\n      },\n      className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dot,\n      onMouseEnter: function onMouseEnter() {\n        return setFocusedElement(dataElement.id);\n      },\n      onMouseLeave: resetDot,\n      style: {\n        backgroundColor: isFocused == dataElement.id ? \"red\" : \"seagreen\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 15\n      }\n    }), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 15\n      }\n    }, isFocused == dataElement.id ? dataElement.year : \"\"));\n  })), __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.values_bottom,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.left_value,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }, \"Jetzt\"), __jsx(\"p\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.right_value,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }, \"1990\"))), __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.img_slider,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, __jsx(react_draggable__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    axis: \"x\",\n    handle: \".slide_element\",\n    defaultPosition: {\n      x: 0,\n      y: 0\n    },\n    position: null,\n    grid: [25, 25],\n    scale: 1,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].map(function (dataElement) {\n    return __jsx(_SliderElement_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      key: dataElement.id,\n      id: dataElement.id,\n      wasDotClicked: wasDotClicked,\n      isFocused: isFocused,\n      setFocusedElement: setFocusedElement,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 17\n      }\n    });\n  }))));\n}\n\n_s(Slider, \"u33UcXE44XSxaowqV0MUtvbVkyI=\");\n\n_c = Slider;\n\nvar _c;\n\n$RefreshReg$(_c, \"Slider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvcnVlY2tzY2hhdS9TbGlkZXIuanM/OGIyOCJdLCJuYW1lcyI6WyJTbGlkZXIiLCJ1c2VTdGF0ZSIsImlzRm9jdXNlZCIsInNldEZvY3VzZWRFbGVtZW50Iiwid2FzRG90Q2xpY2tlZCIsInNldFdhc0RvdENsaWNrZWQiLCJyZXNldERvdCIsInN0eWxlcyIsInRpbWVfc2xpZGVyIiwibGluZSIsInJ1ZWNrc2NoYXVfZGF0YSIsIm1hcCIsImRhdGFFbGVtZW50IiwiaWQiLCJkb3QiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ5ZWFyIiwidmFsdWVzX2JvdHRvbSIsImxlZnRfdmFsdWUiLCJyaWdodF92YWx1ZSIsImltZ19zbGlkZXIiLCJ4IiwieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUE7O0FBQUEsa0JBRVFDLHNEQUFRLENBQUMsQ0FBRCxDQUZoQjtBQUFBLE1BRXhCQyxTQUZ3QjtBQUFBLE1BRWJDLGlCQUZhOztBQUFBLG1CQUdXRixzREFBUSxDQUFDLEtBQUQsQ0FIbkI7QUFBQSxNQUd4QkcsYUFId0I7QUFBQSxNQUdUQyxnQkFIUzs7QUFLL0IsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQkgscUJBQWlCLENBQUMsQ0FBRCxDQUFqQjtBQUNBRSxvQkFBZ0IsQ0FBQyxLQUFELENBQWhCO0FBQ0QsR0FIRDs7QUFLQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRUUseURBQU0sQ0FBQ0MsV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFRCx5REFBTSxDQUFDRSxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUdDLDBEQUFlLENBQUNDLEdBQWhCLENBQW9CLFVBQUNDLFdBQUQ7QUFBQSxXQUNyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxTQUFHLEVBQUVBLFdBQVcsQ0FBQ0MsRUFBdEI7QUFBMEIsYUFBTyxFQUFFO0FBQUEsZUFBTVIsZ0JBQWdCLENBQUMsSUFBRCxDQUF0QjtBQUFBLE9BQW5DO0FBQWlFLGVBQVMsRUFBRUUseURBQU0sQ0FBQ08sR0FBbkY7QUFBd0Ysa0JBQVksRUFBRTtBQUFBLGVBQU1YLGlCQUFpQixDQUFDUyxXQUFXLENBQUNDLEVBQWIsQ0FBdkI7QUFBQSxPQUF0RztBQUErSSxrQkFBWSxFQUFFUCxRQUE3SjtBQUF1SyxXQUFLLEVBQUU7QUFBQ1MsdUJBQWUsRUFBRWIsU0FBUyxJQUFJVSxXQUFXLENBQUNDLEVBQXpCLEdBQThCLEtBQTlCLEdBQXNDO0FBQXhELE9BQTlLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSVgsU0FBUyxJQUFJVSxXQUFXLENBQUNDLEVBQXpCLEdBQThCRCxXQUFXLENBQUNJLElBQTFDLEdBQWlELEVBQXJELENBRkYsQ0FEcUI7QUFBQSxHQUFwQixDQUZILENBREYsRUFVRTtBQUFLLGFBQVMsRUFBRVQseURBQU0sQ0FBQ1UsYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFFVix5REFBTSxDQUFDVyxVQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFRTtBQUFHLGFBQVMsRUFBRVgseURBQU0sQ0FBQ1ksV0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLENBVkYsQ0FESixFQWlCSTtBQUFLLGFBQVMsRUFBRVoseURBQU0sQ0FBQ2EsVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsc0RBQUQ7QUFDQSxRQUFJLEVBQUMsR0FETDtBQUVBLFVBQU0sRUFBQyxnQkFGUDtBQUdBLG1CQUFlLEVBQUU7QUFBQ0MsT0FBQyxFQUFFLENBQUo7QUFBT0MsT0FBQyxFQUFFO0FBQVYsS0FIakI7QUFJQSxZQUFRLEVBQUUsSUFKVjtBQUtBLFFBQUksRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLENBTE47QUFNQSxTQUFLLEVBQUUsQ0FOUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUtaLDBEQUFlLENBQUNDLEdBQWhCLENBQW9CLFVBQUNDLFdBQUQ7QUFBQSxXQUNqQixNQUFDLHlEQUFEO0FBQWUsU0FBRyxFQUFFQSxXQUFXLENBQUNDLEVBQWhDO0FBQW9DLFFBQUUsRUFBRUQsV0FBVyxDQUFDQyxFQUFwRDtBQUF3RCxtQkFBYSxFQUFFVCxhQUF2RTtBQUFzRixlQUFTLEVBQUVGLFNBQWpHO0FBQTRHLHVCQUFpQixFQUFFQyxpQkFBL0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURpQjtBQUFBLEdBQXBCLENBUkwsQ0FEQSxDQWpCSixDQURGO0FBa0NEOztHQTVDdUJILE07O0tBQUFBLE0iLCJmaWxlIjoiLi9zZWN0aW9ucy9ydWVja3NjaGF1L1NsaWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TbGlkZXIubW9kdWxlLmNzcydcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgU2xpZGVyRWxlbWVudCBmcm9tICcuL1NsaWRlckVsZW1lbnQuanMnO1xuaW1wb3J0IHJ1ZWNrc2NoYXVfZGF0YSBmcm9tICcuL1J1ZWNrc2NoYXVEYXRhLmpzJztcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAncmVhY3QtZHJhZ2dhYmxlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2xpZGVyKCkge1xuXG4gIGNvbnN0IFtpc0ZvY3VzZWQsIHNldEZvY3VzZWRFbGVtZW50XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbd2FzRG90Q2xpY2tlZCwgc2V0V2FzRG90Q2xpY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgcmVzZXREb3QgPSAoKSA9PiB7XG4gICAgc2V0Rm9jdXNlZEVsZW1lbnQoMCk7XG4gICAgc2V0V2FzRG90Q2xpY2tlZChmYWxzZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZV9zbGlkZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGluZX0+XG4gICAgICAgICAgICB7LyogTWFwcGVuIGVpbmVuIERvdCBmw7xyIGplZGVzIFBsYWthdCAqL31cbiAgICAgICAgICAgIHtydWVja3NjaGF1X2RhdGEubWFwKChkYXRhRWxlbWVudCkgPT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXYga2V5PXtkYXRhRWxlbWVudC5pZH0gb25DbGljaz17KCkgPT4gc2V0V2FzRG90Q2xpY2tlZCh0cnVlKX0gY2xhc3NOYW1lPXtzdHlsZXMuZG90fSBvbk1vdXNlRW50ZXI9eygpID0+IHNldEZvY3VzZWRFbGVtZW50KGRhdGFFbGVtZW50LmlkKX0gb25Nb3VzZUxlYXZlPXtyZXNldERvdH0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IGlzRm9jdXNlZCA9PSBkYXRhRWxlbWVudC5pZCA/IFwicmVkXCIgOiBcInNlYWdyZWVuXCJ9fT48L2Rpdj5cbiAgICAgICAgICAgICAgPHA+e2lzRm9jdXNlZCA9PSBkYXRhRWxlbWVudC5pZCA/IGRhdGFFbGVtZW50LnllYXIgOiBcIlwifTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZhbHVlc19ib3R0b219PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubGVmdF92YWx1ZX0+SmV0enQ8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5yaWdodF92YWx1ZX0+MTk5MDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWdfc2xpZGVyfT5cbiAgICAgICAgPERyYWdnYWJsZVxuICAgICAgICBheGlzPVwieFwiXG4gICAgICAgIGhhbmRsZT1cIi5zbGlkZV9lbGVtZW50XCJcbiAgICAgICAgZGVmYXVsdFBvc2l0aW9uPXt7eDogMCwgeTogMH19XG4gICAgICAgIHBvc2l0aW9uPXtudWxsfVxuICAgICAgICBncmlkPXtbMjUsIDI1XX1cbiAgICAgICAgc2NhbGU9ezF9PlxuICAgICAgICAgICAgey8qIE1hcHBlbiBmw7xyIGplZGVzIFBsYWthdCBkYXMgQmlsZCBpbSBTbGlkZXIsIHNvd2llIGRpZSBEZXRhaWwtQW5zaWNodCAobGF6eSkgKi99XG4gICAgICAgICAgICB7cnVlY2tzY2hhdV9kYXRhLm1hcCgoZGF0YUVsZW1lbnQpID0+XG4gICAgICAgICAgICAgICAgPFNsaWRlckVsZW1lbnQga2V5PXtkYXRhRWxlbWVudC5pZH0gaWQ9e2RhdGFFbGVtZW50LmlkfSB3YXNEb3RDbGlja2VkPXt3YXNEb3RDbGlja2VkfSBpc0ZvY3VzZWQ9e2lzRm9jdXNlZH0gc2V0Rm9jdXNlZEVsZW1lbnQ9e3NldEZvY3VzZWRFbGVtZW50fS8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9EcmFnZ2FibGU+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sections/rueckschau/Slider.js\n");

/***/ })

})