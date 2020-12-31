webpackHotUpdate_N_E("pages/rueckschau",{

/***/ "./sections/rueckschau/Slider.js":
/*!***************************************!*\
  !*** ./sections/rueckschau/Slider.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Slider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Slider_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slider.module.css */ \"./sections/rueckschau/Slider.module.css\");\n/* harmony import */ var _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Slider_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _SliderElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SliderElement.js */ \"./sections/rueckschau/SliderElement.js\");\n/* harmony import */ var _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RueckschauData.js */ \"./sections/rueckschau/RueckschauData.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-draggable */ \"./node_modules/react-draggable/build/cjs/cjs.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/martinzimmer/github/ohregano-website/sections/rueckschau/Slider.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nfunction Slider() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      isFocused = _useState[0],\n      setFocusedElement = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      wasDotClicked = _useState2[0],\n      setWasDotClicked = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isDragging = _useState3[0],\n      setIsDragging = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      wasClicked = _useState4[0],\n      setWasClicked = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isToggled = _useState5[0],\n      setToggled = _useState5[1];\n\n  var onClickHandler = function onClickHandler() {\n    setToggled(true);\n    setWasClicked(isFocused);\n  };\n\n  var variants = {\n    content: {\n      open: {\n        opacity: 1,\n        zIndex: 400\n      },\n      closed: {\n        opacity: 0,\n        zIndex: -100,\n        transition: {\n          when: \"afterChildren\"\n        }\n      }\n    }\n  };\n\n  var resetDot = function resetDot() {\n    setFocusedElement(0);\n    setWasDotClicked(false);\n  };\n\n  var resetDragState = function resetDragState() {\n    setTimeout(function () {\n      setIsDragging(false);\n    }, 2000);\n  };\n\n  console.log(\"isDragging: \" + isDragging);\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.time_slider,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.line,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 11\n    }\n  }, _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].map(function (dataElement) {\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      key: dataElement.id,\n      onClick: function onClick() {\n        return setWasDotClicked(true);\n      },\n      className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dot,\n      onMouseEnter: function onMouseEnter() {\n        return setFocusedElement(dataElement.id);\n      },\n      onMouseLeave: resetDot,\n      style: {\n        backgroundColor: isFocused == dataElement.id ? \"red\" : \"seagreen\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 15\n      }\n    }), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 15\n      }\n    }, isFocused == dataElement.id ? dataElement.year : \"\"));\n  })), __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.values_bottom,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.left_value,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }\n  }, \"Jetzt\"), __jsx(\"p\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.right_value,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }\n  }, \"1990\"))), __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.img_slider,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }, __jsx(react_draggable__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    axis: \"x\",\n    handle: \".handle\",\n    defaultPosition: {\n      x: 0,\n      y: 0\n    },\n    position: null,\n    grid: [25, 25],\n    onDrag: function onDrag() {\n      return setIsDragging(true);\n    },\n    onStop: resetDragState,\n    scale: 1,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: \"flex\",\n      height: \"100%\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }\n  }, _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].map(function (dataElement) {\n    return __jsx(\"div\", {\n      onClick: isDragging == false ? onClickHandler : console.log(\"nein\"),\n      className: \"handle\",\n      style: {\n        display: \"inline-flex\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 19\n      }\n    }, __jsx(_SliderElement_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      key: dataElement.id,\n      id: dataElement.id,\n      wasDotClicked: wasDotClicked,\n      isFocused: isFocused,\n      setFocusedElement: setFocusedElement,\n      isDragging: isDragging,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 145\n      }\n    }));\n  }))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n    initial: \"closed\",\n    animate: isToggled ? \"open\" : \"closed\",\n    transition: {\n      ease: \"easeInOut\",\n      duration: 0.2\n    },\n    variants: variants.content,\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.detailView,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }\n  }, _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"][wasClicked].id))));\n}\n\n_s(Slider, \"utnXvbGE3bdD51maXyk+t6sC1ig=\");\n\n_c = Slider;\n\nvar _c;\n\n$RefreshReg$(_c, \"Slider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvcnVlY2tzY2hhdS9TbGlkZXIuanM/OGIyOCJdLCJuYW1lcyI6WyJTbGlkZXIiLCJ1c2VTdGF0ZSIsImlzRm9jdXNlZCIsInNldEZvY3VzZWRFbGVtZW50Iiwid2FzRG90Q2xpY2tlZCIsInNldFdhc0RvdENsaWNrZWQiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsIndhc0NsaWNrZWQiLCJzZXRXYXNDbGlja2VkIiwiaXNUb2dnbGVkIiwic2V0VG9nZ2xlZCIsIm9uQ2xpY2tIYW5kbGVyIiwidmFyaWFudHMiLCJjb250ZW50Iiwib3BlbiIsIm9wYWNpdHkiLCJ6SW5kZXgiLCJjbG9zZWQiLCJ0cmFuc2l0aW9uIiwid2hlbiIsInJlc2V0RG90IiwicmVzZXREcmFnU3RhdGUiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsInRpbWVfc2xpZGVyIiwibGluZSIsInJ1ZWNrc2NoYXVfZGF0YSIsIm1hcCIsImRhdGFFbGVtZW50IiwiaWQiLCJkb3QiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ5ZWFyIiwidmFsdWVzX2JvdHRvbSIsImxlZnRfdmFsdWUiLCJyaWdodF92YWx1ZSIsImltZ19zbGlkZXIiLCJ4IiwieSIsImRpc3BsYXkiLCJoZWlnaHQiLCJlYXNlIiwiZHVyYXRpb24iLCJkZXRhaWxWaWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFFUUMsc0RBQVEsQ0FBQyxDQUFELENBRmhCO0FBQUEsTUFFeEJDLFNBRndCO0FBQUEsTUFFYkMsaUJBRmE7O0FBQUEsbUJBR1dGLHNEQUFRLENBQUMsS0FBRCxDQUhuQjtBQUFBLE1BR3hCRyxhQUh3QjtBQUFBLE1BR1RDLGdCQUhTOztBQUFBLG1CQUlLSixzREFBUSxDQUFDLEtBQUQsQ0FKYjtB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QyxpQkFBL0g7QUFBa0osZ0JBQVUsRUFBRUcsVUFBOUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUE5SCxDQUZpQjtBQUFBLEdBQXBCLENBRkgsQ0FURixDQURGLEVBbUJFLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksV0FBTyxFQUFDLFFBQXBCO0FBQTZCLFdBQU8sRUFBRUksU0FBUyxHQUFHLE1BQUgsR0FBWSxRQUEzRDtBQUFxRSxjQUFVLEVBQUU7QUFBRWtDLFVBQUksRUFBRSxXQUFSO0FBQXFCQyxjQUFRLEVBQUU7QUFBL0IsS0FBakY7QUFBdUgsWUFBUSxFQUFFaEMsUUFBUSxDQUFDQyxPQUExSTtBQUFtSixhQUFTLEVBQUVZLHlEQUFNLENBQUNvQixVQUFySztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJakIsMERBQWUsQ0FBQ3JCLFVBQUQsQ0FBZixDQUE0QndCLEVBQWhDLENBREYsQ0FuQkYsQ0FqQkosQ0FERjtBQTJDRDs7R0EvRXVCaEMsTTs7S0FBQUEsTSIsImZpbGUiOiIuL3NlY3Rpb25zL3J1ZWNrc2NoYXUvU2xpZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NsaWRlci5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCBTbGlkZXJFbGVtZW50IGZyb20gJy4vU2xpZGVyRWxlbWVudC5qcyc7XG5pbXBvcnQgcnVlY2tzY2hhdV9kYXRhIGZyb20gJy4vUnVlY2tzY2hhdURhdGEuanMnO1xuaW1wb3J0IERyYWdnYWJsZSBmcm9tICdyZWFjdC1kcmFnZ2FibGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbGlkZXIoKSB7XG5cbiAgY29uc3QgW2lzRm9jdXNlZCwgc2V0Rm9jdXNlZEVsZW1lbnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt3YXNEb3RDbGlja2VkLCBzZXRXYXNEb3RDbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzRHJhZ2dpbmcsIHNldElzRHJhZ2dpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbd2FzQ2xpY2tlZCwgc2V0V2FzQ2xpY2tlZF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBbaXNUb2dnbGVkLCBzZXRUb2dnbGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvbkNsaWNrSGFuZGxlciA9ICgpID0+IHtcbiAgICBzZXRUb2dnbGVkKHRydWUpO1xuICAgIHNldFdhc0NsaWNrZWQoaXNGb2N1c2VkKTtcbiAgfVxuXG4gIGNvbnN0IHZhcmlhbnRzID0ge1xuICAgICAgY29udGVudDoge1xuICAgICAgICBvcGVuOiB7IG9wYWNpdHk6IDEsIHpJbmRleDogNDAwfSxcbiAgICAgICAgY2xvc2VkOiB7IG9wYWNpdHk6IDAsIHpJbmRleDogLTEwMCwgdHJhbnNpdGlvbjoge1xuICAgICAgICAgIHdoZW46IFwiYWZ0ZXJDaGlsZHJlblwiLFxuICAgICAgICB9LCB9LFxuICAgICAgfVxuICAgIH1cblxuICBjb25zdCByZXNldERvdCA9ICgpID0+IHtcbiAgICBzZXRGb2N1c2VkRWxlbWVudCgwKTtcbiAgICBzZXRXYXNEb3RDbGlja2VkKGZhbHNlKTtcbiAgfVxuXG4gIGNvbnN0IHJlc2V0RHJhZ1N0YXRlID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBzZXRJc0RyYWdnaW5nKGZhbHNlKVxuICAgIH0sIDIwMDApO1xuICB9XG5cbiAgY29uc29sZS5sb2coXCJpc0RyYWdnaW5nOiBcIiArIGlzRHJhZ2dpbmcpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lX3NsaWRlcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5lfT5cbiAgICAgICAgICAgIHsvKiBNYXBwZW4gZWluZW4gRG90IGbDvHIgamVkZXMgUGxha2F0ICovfVxuICAgICAgICAgICAge3J1ZWNrc2NoYXVfZGF0YS5tYXAoKGRhdGFFbGVtZW50KSA9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2RhdGFFbGVtZW50LmlkfSBvbkNsaWNrPXsoKSA9PiBzZXRXYXNEb3RDbGlja2VkKHRydWUpfSBjbGFzc05hbWU9e3N0eWxlcy5kb3R9IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0Rm9jdXNlZEVsZW1lbnQoZGF0YUVsZW1lbnQuaWQpfSBvbk1vdXNlTGVhdmU9e3Jlc2V0RG90fSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogaXNGb2N1c2VkID09IGRhdGFFbGVtZW50LmlkID8gXCJyZWRcIiA6IFwic2VhZ3JlZW5cIn19PjwvZGl2PlxuICAgICAgICAgICAgICA8cD57aXNGb2N1c2VkID09IGRhdGFFbGVtZW50LmlkID8gZGF0YUVsZW1lbnQueWVhciA6IFwiXCJ9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmFsdWVzX2JvdHRvbX0+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0X3ZhbHVlfT5KZXR6dDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0X3ZhbHVlfT4xOTkwPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltZ19zbGlkZXJ9PlxuICAgICAgICAgIDxEcmFnZ2FibGVcbiAgICAgICAgICBheGlzPVwieFwiXG4gICAgICAgICAgaGFuZGxlPVwiLmhhbmRsZVwiXG4gICAgICAgICAgZGVmYXVsdFBvc2l0aW9uPXt7eDogMCwgeTogMH19XG4gICAgICAgICAgcG9zaXRpb249e251bGx9XG4gICAgICAgICAgZ3JpZD17WzI1LCAyNV19XG4gICAgICAgICAgb25EcmFnPXsoKSA9PiBzZXRJc0RyYWdnaW5nKHRydWUpfVxuICAgICAgICAgIG9uU3RvcD17cmVzZXREcmFnU3RhdGV9XG4gICAgICAgICAgc2NhbGU9ezF9PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBoZWlnaHQ6IFwiMTAwJVwifX0+XG4gICAgICAgICAgICAgIHsvKiBNYXBwZW4gZsO8ciBqZWRlcyBQbGFrYXQgZGFzIEJpbGQgaW0gU2xpZGVyLCBzb3dpZSBkaWUgRGV0YWlsLUFuc2ljaHQgKGxhenkpICovfVxuICAgICAgICAgICAgICB7cnVlY2tzY2hhdV9kYXRhLm1hcCgoZGF0YUVsZW1lbnQpID0+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2lzRHJhZ2dpbmcgPT0gZmFsc2UgPyBvbkNsaWNrSGFuZGxlciA6IGNvbnNvbGUubG9nKFwibmVpblwiKX0gY2xhc3NOYW1lPVwiaGFuZGxlXCIgc3R5bGU9e3tkaXNwbGF5OiBcImlubGluZS1mbGV4XCJ9fT48U2xpZGVyRWxlbWVudCBrZXk9e2RhdGFFbGVtZW50LmlkfSBpZD17ZGF0YUVsZW1lbnQuaWR9IHdhc0RvdENsaWNrZWQ9e3dhc0RvdENsaWNrZWR9IGlzRm9jdXNlZD17aXNGb2N1c2VkfSBzZXRGb2N1c2VkRWxlbWVudD17c2V0Rm9jdXNlZEVsZW1lbnR9IGlzRHJhZ2dpbmc9e2lzRHJhZ2dpbmd9Lz48L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICA8L0RyYWdnYWJsZT5cbiAgICAgICAgICA8bW90aW9uLmRpdiBpbml0aWFsPVwiY2xvc2VkXCIgYW5pbWF0ZT17aXNUb2dnbGVkID8gXCJvcGVuXCIgOiBcImNsb3NlZFwifSB0cmFuc2l0aW9uPXt7IGVhc2U6IFwiZWFzZUluT3V0XCIsIGR1cmF0aW9uOiAwLjIgfX0gdmFyaWFudHM9e3ZhcmlhbnRzLmNvbnRlbnR9IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbFZpZXd9PlxuICAgICAgICAgICAgPHA+e3J1ZWNrc2NoYXVfZGF0YVt3YXNDbGlja2VkXS5pZH08L3A+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sections/rueckschau/Slider.js\n");

/***/ })

})