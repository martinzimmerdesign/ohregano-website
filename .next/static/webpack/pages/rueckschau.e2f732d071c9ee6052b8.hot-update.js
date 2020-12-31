webpackHotUpdate_N_E("pages/rueckschau",{

/***/ "./sections/rueckschau/Slider.js":
/*!***************************************!*\
  !*** ./sections/rueckschau/Slider.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Slider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Slider_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slider.module.css */ \"./sections/rueckschau/Slider.module.css\");\n/* harmony import */ var _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Slider_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _SliderElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SliderElement.js */ \"./sections/rueckschau/SliderElement.js\");\n/* harmony import */ var _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RueckschauData.js */ \"./sections/rueckschau/RueckschauData.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-draggable */ \"./node_modules/react-draggable/build/cjs/cjs.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/martinzimmer/github/ohregano-website/sections/rueckschau/Slider.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nfunction Slider() {\n  _s();\n\n  var _this = this;\n\n  // Welcher/es Dot/Plakat wird gerade fokussiert?\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      isFocused = _useState[0],\n      setFocusedElement = _useState[1]; // Wurde ein Dot geklickt?\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      wasDotClicked = _useState2[0],\n      setWasDotClicked = _useState2[1]; // Wird gerade gedraggt?\n\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isDragging = _useState3[0],\n      setIsDragging = _useState3[1]; // Bild oder Dot geklickt\n\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      wasClicked = _useState4[0],\n      setWasClicked = _useState4[1]; // Detail Ansicht\n\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isToggled = _useState5[0],\n      setToggled = _useState5[1];\n\n  var onClickHandler = function onClickHandler() {\n    setToggled(true);\n    setWasClicked(isFocused);\n  };\n\n  var resetDot = function resetDot() {\n    setFocusedElement(0);\n    setWasDotClicked(false);\n  };\n\n  var resetDragState = function resetDragState() {\n    setTimeout(function () {\n      setIsDragging(false);\n    }, 2000);\n  };\n\n  var variants = {\n    content: {\n      open: {\n        opacity: 0.5,\n        zIndex: 400\n      },\n      closed: {\n        opacity: 0,\n        zIndex: -100,\n        transition: {\n          when: \"afterChildren\"\n        }\n      }\n    }\n  };\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.time_slider,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.line,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 11\n    }\n  }, _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].map(function (dataElement) {\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      key: dataElement.id,\n      onClick: onClickHandler,\n      className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dot,\n      onMouseEnter: function onMouseEnter() {\n        return setFocusedElement(dataElement.id);\n      },\n      onMouseLeave: resetDot,\n      style: {\n        backgroundColor: isFocused == dataElement.id ? \"red\" : \"seagreen\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 15\n      }\n    }), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 15\n      }\n    }, isFocused == dataElement.id ? dataElement.year : \"\"));\n  })), __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.values_bottom,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.left_value,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  }, \"Jetzt\"), __jsx(\"p\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.right_value,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }\n  }, \"1990\"))), __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.img_slider,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }, __jsx(react_draggable__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    axis: \"x\",\n    handle: \".handle\",\n    defaultPosition: {\n      x: 0,\n      y: 0\n    },\n    position: null,\n    grid: [25, 25],\n    onDrag: function onDrag() {\n      return setIsDragging(true);\n    },\n    onStop: resetDragState,\n    scale: 1,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: \"flex\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 13\n    }\n  }, _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].map(function (dataElement) {\n    return __jsx(\"div\", {\n      onClick: function onClick() {\n        return console.log(\"nkesf\");\n      },\n      className: \"handle\",\n      style: {\n        display: \"inline-flex\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 19\n      }\n    }, __jsx(_SliderElement_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      key: dataElement.id,\n      dataElement: dataElement,\n      onClickHandler: onClickHandler,\n      isFocused: isFocused,\n      setFocusedElement: setFocusedElement,\n      isDragging: isDragging,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 21\n      }\n    }));\n  }))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n    initial: \"closed\",\n    animate: isToggled ? \"open\" : \"closed\",\n    transition: {\n      ease: \"easeInOut\",\n      duration: 0.2\n    },\n    variants: variants.content,\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.detailView,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }\n  }, _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"][wasClicked].id), __jsx(\"p\", {\n    onClick: function onClick() {\n      return setToggled(false);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 13\n    }\n  }, \"close\"), __jsx(\"img\", {\n    draggable: \"false\",\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cover,\n    src: _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"][wasClicked].img,\n    alt: \"Arrow Icon\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 13\n    }\n  }), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 13\n    }\n  }, _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"][wasClicked].title), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 13\n    }\n  }, _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"][wasClicked].date), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 13\n    }\n  }, _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"][wasClicked].text))));\n}\n\n_s(Slider, \"utnXvbGE3bdD51maXyk+t6sC1ig=\");\n\n_c = Slider;\n\nvar _c;\n\n$RefreshReg$(_c, \"Slider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvcnVlY2tzY2hhdS9TbGlkZXIuanM/OGIyOCJdLCJuYW1lcyI6WyJTbGlkZXIiLCJ1c2VTdGF0ZSIsImlzRm9jdXNlZCIsInNldEZvY3VzZWRFbGVtZW50Iiwid2FzRG90Q2xpY2tlZCIsInNldFdhc0RvdENsaWNrZWQiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsIndhc0NsaWNrZWQiLCJzZXRXYXNDbGlja2VkIiwiaXNUb2dnbGVkIiwic2V0VG9nZ2xlZCIsIm9uQ2xpY2tIYW5kbGVyIiwicmVzZXREb3QiLCJyZXNldERyYWdTdGF0ZSIsInNldFRpbWVvdXQiLCJ2YXJpYW50cyIsImNvbnRlbnQiLCJvcGVuIiwib3BhY2l0eSIsInpJbmRleCIsImNsb3NlZCIsInRyYW5zaXRpb24iLCJ3aGVuIiwic3R5bGVzIiwidGltZV9zbGlkZXIiLCJsaW5lIiwicnVlY2tzY2hhdV9kYXRhIiwibWFwIiwiZGF0YUVsZW1lbnQiLCJpZCIsImRvdCIsImJhY2tncm91bmRDb2xvciIsInllYXIiLCJ2YWx1ZXNfYm90dG9tIiwibGVmdF92YWx1ZSIsInJpZ2h0X3ZhbHVlIiwiaW1nX3NsaWRlciIsIngiLCJ5IiwiZGlzcGxheSIsImNvbnNvbGUiLCJsb2ciLCJlYXNlIiwiZHVyYXRpb24iLCJkZXRhaWxWaWV3IiwiY292ZXIiLCJpbWciLCJ0aXRsZSIsImRhdGUiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFFL0I7QUFGK0Isa0JBR1FDLHNEQUFRLENBQUMsQ0FBRCxDQUhoQjtBQUFBLE1BR3hCQyxTQUh3QjtBQUFBLE1BR2JDLGlCQUhhLGlCQUkvQjs7O0FBSitCLG1CQUtXRixzREFBUSxDQUFDLEtBQUQsQ0FMbkI7QUFBQSxNQUt4QkcsYUFMd0I7QUFBQSxNQUtU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QUFlLENBQUNuQixVQUFELENBQWYsQ0FBNEIwQyxJQUFoQyxDQU5GLENBbkJGLENBakJKLENBREY7QUFnREQ7O0dBdEZ1QmxELE07O0tBQUFBLE0iLCJmaWxlIjoiLi9zZWN0aW9ucy9ydWVja3NjaGF1L1NsaWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TbGlkZXIubW9kdWxlLmNzcydcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgU2xpZGVyRWxlbWVudCBmcm9tICcuL1NsaWRlckVsZW1lbnQuanMnO1xuaW1wb3J0IHJ1ZWNrc2NoYXVfZGF0YSBmcm9tICcuL1J1ZWNrc2NoYXVEYXRhLmpzJztcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAncmVhY3QtZHJhZ2dhYmxlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2xpZGVyKCkge1xuXG4gIC8vIFdlbGNoZXIvZXMgRG90L1BsYWthdCB3aXJkIGdlcmFkZSBmb2t1c3NpZXJ0P1xuICBjb25zdCBbaXNGb2N1c2VkLCBzZXRGb2N1c2VkRWxlbWVudF0gPSB1c2VTdGF0ZSgwKTtcbiAgLy8gV3VyZGUgZWluIERvdCBnZWtsaWNrdD9cbiAgY29uc3QgW3dhc0RvdENsaWNrZWQsIHNldFdhc0RvdENsaWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBXaXJkIGdlcmFkZSBnZWRyYWdndD9cbiAgY29uc3QgW2lzRHJhZ2dpbmcsIHNldElzRHJhZ2dpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBCaWxkIG9kZXIgRG90IGdla2xpY2t0XG4gIGNvbnN0IFt3YXNDbGlja2VkLCBzZXRXYXNDbGlja2VkXSA9IHVzZVN0YXRlKDApO1xuICAvLyBEZXRhaWwgQW5zaWNodFxuICBjb25zdCBbaXNUb2dnbGVkLCBzZXRUb2dnbGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvbkNsaWNrSGFuZGxlciA9ICgpID0+IHtcbiAgICBzZXRUb2dnbGVkKHRydWUpO1xuICAgIHNldFdhc0NsaWNrZWQoaXNGb2N1c2VkKTtcbiAgfVxuXG4gIGNvbnN0IHJlc2V0RG90ID0gKCkgPT4ge1xuICAgIHNldEZvY3VzZWRFbGVtZW50KDApO1xuICAgIHNldFdhc0RvdENsaWNrZWQoZmFsc2UpO1xuICB9XG5cbiAgY29uc3QgcmVzZXREcmFnU3RhdGUgPSAoKSA9PiB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHNldElzRHJhZ2dpbmcoZmFsc2UpXG4gICAgfSwgMjAwMCk7XG4gIH1cblxuICBjb25zdCB2YXJpYW50cyA9IHtcbiAgICBjb250ZW50OiB7XG4gICAgICBvcGVuOiB7IG9wYWNpdHk6IDAuNSwgekluZGV4OiA0MDB9LFxuICAgICAgY2xvc2VkOiB7IG9wYWNpdHk6IDAsIHpJbmRleDogLTEwMCwgdHJhbnNpdGlvbjoge1xuICAgICAgICB3aGVuOiBcImFmdGVyQ2hpbGRyZW5cIixcbiAgICAgIH0sIH0sXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVfc2xpZGVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmV9PlxuICAgICAgICAgICAgey8qIE1hcHBlbiBlaW5lbiBEb3QgZsO8ciBqZWRlcyBQbGFrYXQgKi99XG4gICAgICAgICAgICB7cnVlY2tzY2hhdV9kYXRhLm1hcCgoZGF0YUVsZW1lbnQpID0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGtleT17ZGF0YUVsZW1lbnQuaWR9IG9uQ2xpY2s9e29uQ2xpY2tIYW5kbGVyfSBjbGFzc05hbWU9e3N0eWxlcy5kb3R9IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0Rm9jdXNlZEVsZW1lbnQoZGF0YUVsZW1lbnQuaWQpfSBvbk1vdXNlTGVhdmU9e3Jlc2V0RG90fSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogaXNGb2N1c2VkID09IGRhdGFFbGVtZW50LmlkID8gXCJyZWRcIiA6IFwic2VhZ3JlZW5cIn19PjwvZGl2PlxuICAgICAgICAgICAgICA8cD57aXNGb2N1c2VkID09IGRhdGFFbGVtZW50LmlkID8gZGF0YUVsZW1lbnQueWVhciA6IFwiXCJ9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmFsdWVzX2JvdHRvbX0+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0X3ZhbHVlfT5KZXR6dDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0X3ZhbHVlfT4xOTkwPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltZ19zbGlkZXJ9PlxuICAgICAgICAgIDxEcmFnZ2FibGVcbiAgICAgICAgICBheGlzPVwieFwiXG4gICAgICAgICAgaGFuZGxlPVwiLmhhbmRsZVwiXG4gICAgICAgICAgZGVmYXVsdFBvc2l0aW9uPXt7eDogMCwgeTogMH19XG4gICAgICAgICAgcG9zaXRpb249e251bGx9XG4gICAgICAgICAgZ3JpZD17WzI1LCAyNV19XG4gICAgICAgICAgb25EcmFnPXsoKSA9PiBzZXRJc0RyYWdnaW5nKHRydWUpfVxuICAgICAgICAgIG9uU3RvcD17cmVzZXREcmFnU3RhdGV9XG4gICAgICAgICAgc2NhbGU9ezF9PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwifX0+XG4gICAgICAgICAgICAgIHsvKiBNYXBwZW4gZsO8ciBqZWRlcyBQbGFrYXQgZGFzIEJpbGQgaW0gU2xpZGVyLCBzb3dpZSBkaWUgRGV0YWlsLUFuc2ljaHQgKGxhenkpICovfVxuICAgICAgICAgICAgICB7cnVlY2tzY2hhdV9kYXRhLm1hcCgoZGF0YUVsZW1lbnQpID0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKFwibmtlc2ZcIil9IGNsYXNzTmFtZT1cImhhbmRsZVwiIHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmUtZmxleFwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxTbGlkZXJFbGVtZW50IGtleT17ZGF0YUVsZW1lbnQuaWR9IGRhdGFFbGVtZW50PXtkYXRhRWxlbWVudH0gb25DbGlja0hhbmRsZXI9e29uQ2xpY2tIYW5kbGVyfSBpc0ZvY3VzZWQ9e2lzRm9jdXNlZH0gc2V0Rm9jdXNlZEVsZW1lbnQ9e3NldEZvY3VzZWRFbGVtZW50fSBpc0RyYWdnaW5nPXtpc0RyYWdnaW5nfS8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICA8L0RyYWdnYWJsZT5cbiAgICAgICAgICA8bW90aW9uLmRpdiBpbml0aWFsPVwiY2xvc2VkXCIgYW5pbWF0ZT17aXNUb2dnbGVkID8gXCJvcGVuXCIgOiBcImNsb3NlZFwifSB0cmFuc2l0aW9uPXt7IGVhc2U6IFwiZWFzZUluT3V0XCIsIGR1cmF0aW9uOiAwLjIgfX0gdmFyaWFudHM9e3ZhcmlhbnRzLmNvbnRlbnR9IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbFZpZXd9PlxuICAgICAgICAgICAgPHA+e3J1ZWNrc2NoYXVfZGF0YVt3YXNDbGlja2VkXS5pZH08L3A+XG4gICAgICAgICAgICA8cCBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGVkKGZhbHNlKX0+Y2xvc2U8L3A+XG4gICAgICAgICAgICA8aW1nIGRyYWdnYWJsZT1cImZhbHNlXCIgY2xhc3NOYW1lPXtzdHlsZXMuY292ZXJ9IHNyYz17cnVlY2tzY2hhdV9kYXRhW3dhc0NsaWNrZWRdLmltZ30gYWx0PVwiQXJyb3cgSWNvblwiIC8+XG4gICAgICAgICAgICA8cD57cnVlY2tzY2hhdV9kYXRhW3dhc0NsaWNrZWRdLnRpdGxlfTwvcD5cbiAgICAgICAgICAgIDxwPntydWVja3NjaGF1X2RhdGFbd2FzQ2xpY2tlZF0uZGF0ZX08L3A+XG4gICAgICAgICAgICA8cD57cnVlY2tzY2hhdV9kYXRhW3dhc0NsaWNrZWRdLnRleHR9PC9wPlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sections/rueckschau/Slider.js\n");

/***/ })

})