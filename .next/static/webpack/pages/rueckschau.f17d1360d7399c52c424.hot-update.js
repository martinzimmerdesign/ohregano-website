webpackHotUpdate_N_E("pages/rueckschau",{

/***/ "./sections/rueckschau/Slider.js":
/*!***************************************!*\
  !*** ./sections/rueckschau/Slider.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Slider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Slider_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slider.module.css */ \"./sections/rueckschau/Slider.module.css\");\n/* harmony import */ var _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Slider_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _SliderElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SliderElement.js */ \"./sections/rueckschau/SliderElement.js\");\n/* harmony import */ var _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RueckschauData.js */ \"./sections/rueckschau/RueckschauData.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-draggable */ \"./node_modules/react-draggable/build/cjs/cjs.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/martinzimmer/github/ohregano-website/sections/rueckschau/Slider.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nfunction Slider() {\n  _s();\n\n  var _this = this;\n\n  // Welcher/es Dot/Plakat wird gerade fokussiert?\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(-1),\n      isFocused = _useState[0],\n      setFocusedElement = _useState[1]; // Wurde ein Dot geklickt?\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      wasDotClicked = _useState2[0],\n      setWasDotClicked = _useState2[1]; // Wird gerade gedraggt?\n\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isDragging = _useState3[0],\n      setIsDragging = _useState3[1]; // Bild oder Dot geklickt\n\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(-1),\n      wasClicked = _useState4[0],\n      setWasClicked = _useState4[1]; // Detail Ansicht\n\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isToggled = _useState5[0],\n      setToggled = _useState5[1];\n\n  var onClickHandler = function onClickHandler() {\n    setToggled(true);\n    setWasClicked(isFocused);\n  };\n\n  var resetDot = function resetDot() {\n    setFocusedElement(-1);\n    setWasDotClicked(false);\n  };\n\n  var resetDragState = function resetDragState() {\n    setTimeout(function () {\n      setIsDragging(false);\n    }, 2000);\n  };\n\n  var variants = {\n    content: {\n      open: {\n        opacity: 1,\n        zIndex: 400\n      },\n      closed: {\n        opacity: 0,\n        zIndex: -100,\n        transition: {\n          when: \"afterChildren\"\n        }\n      }\n    },\n    img: {\n      hover: {\n        scale: 1.05\n      },\n      notHover: {\n        scale: 1\n      }\n    }\n  };\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.time_slider,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"content_container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.timeline,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }, _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].map(function (dataElement) {\n    return __jsx(\"div\", {\n      style: {\n        marginTop: \"-8px\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 15\n      }\n    }, __jsx(\"div\", {\n      key: dataElement.id,\n      onClick: onClickHandler,\n      className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dot,\n      onMouseEnter: function onMouseEnter() {\n        return setFocusedElement(dataElement.id);\n      },\n      onMouseLeave: resetDot,\n      style: {\n        backgroundColor: isFocused == dataElement.id ? \"white\" : \"#b4a58e\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 17\n      }\n    }), __jsx(\"p\", {\n      className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.year,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 17\n      }\n    }, isFocused == dataElement.id ? dataElement.year : \"\"));\n  })), __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.values_bottom,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.left_value,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 15\n    }\n  }, \"Jetzt\"), __jsx(\"p\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.right_value,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 15\n    }\n  }, \"1990\")))), __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.img_slider,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }, __jsx(react_draggable__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    axis: \"x\",\n    handle: \".handle\",\n    defaultPosition: {\n      x: 0,\n      y: 0\n    },\n    position: null,\n    grid: [25, 25],\n    onDrag: function onDrag() {\n      return setIsDragging(true);\n    },\n    onStop: resetDragState,\n    scale: 1,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: \"flex\",\n      alignItems: \"center\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  }, _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].map(function (dataElement) {\n    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n      className: \"handle\",\n      style: {\n        display: \"inline-flex\",\n        marginRight: \"-200px\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 19\n      }\n    }, __jsx(_SliderElement_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      key: dataElement.id,\n      dataElement: dataElement,\n      onClickHandler: onClickHandler,\n      isFocused: isFocused,\n      setFocusedElement: setFocusedElement,\n      isDragging: isDragging,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 21\n      }\n    }));\n  }))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n    initial: \"closed\",\n    animate: isToggled ? \"open\" : \"closed\",\n    transition: {\n      ease: \"easeInOut\",\n      duration: 0.2\n    },\n    variants: variants.content,\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.detailView,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 11\n    }\n  }, wasClicked >= 0 ? __jsx(\"div\", {\n    className: \"content_container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.detailClose,\n    onClick: function onClick() {\n      return setToggled(false);\n    },\n    draggable: \"false\",\n    src: \"/icons/error.png\",\n    alt: \"Back Button Icon\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 15\n    }\n  }), __jsx(\"div\", {\n    style: {\n      display: \"flex\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 15\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.detailImg,\n    draggable: \"false\",\n    src: _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"][wasClicked].img,\n    alt: \"Arrow Icon\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 19\n    }\n  })), __jsx(\"div\", {\n    style: {\n      display: \"flex\",\n      flexDirection: \"column\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.detailTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 19\n    }\n  }, _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"][wasClicked].title), __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.line,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 19\n    }\n  }), __jsx(\"p\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.detailDate,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 19\n    }\n  }, _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"][wasClicked].date), __jsx(\"p\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.detailText,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 19\n    }\n  }, _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"][wasClicked].text)))) : __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 22\n    }\n  }))));\n}\n\n_s(Slider, \"9awkWBIuAc65dPsavVCrkF69eMw=\");\n\n_c = Slider;\n\nvar _c;\n\n$RefreshReg$(_c, \"Slider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvcnVlY2tzY2hhdS9TbGlkZXIuanM/OGIyOCJdLCJuYW1lcyI6WyJTbGlkZXIiLCJ1c2VTdGF0ZSIsImlzRm9jdXNlZCIsInNldEZvY3VzZWRFbGVtZW50Iiwid2FzRG90Q2xpY2tlZCIsInNldFdhc0RvdENsaWNrZWQiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsIndhc0NsaWNrZWQiLCJzZXRXYXNDbGlja2VkIiwiaXNUb2dnbGVkIiwic2V0VG9nZ2xlZCIsIm9uQ2xpY2tIYW5kbGVyIiwicmVzZXREb3QiLCJyZXNldERyYWdTdGF0ZSIsInNldFRpbWVvdXQiLCJ2YXJpYW50cyIsImNvbnRlbnQiLCJvcGVuIiwib3BhY2l0eSIsInpJbmRleCIsImNsb3NlZCIsInRyYW5zaXRpb24iLCJ3aGVuIiwiaW1nIiwiaG92ZXIiLCJzY2FsZSIsIm5vdEhvdmVyIiwic3R5bGVzIiwidGltZV9zbGlkZXIiLCJ0aW1lbGluZSIsInJ1ZWNrc2NoYXVfZGF0YSIsIm1hcCIsImRhdGFFbGVtZW50IiwibWFyZ2luVG9wIiwiaWQiLCJkb3QiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ5ZWFyIiwidmFsdWVzX2JvdHRvbSIsImxlZnRfdmFsdWUiLCJyaWdodF92YWx1ZSIsImltZ19zbGlkZXIiLCJ4IiwieSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwibWFyZ2luUmlnaHQiLCJlYXNlIiwiZHVyYXRpb24iLCJkZXRhaWxWaWV3IiwiZGV0YWlsQ2xvc2UiLCJkZXRhaWxJbWciLCJmbGV4RGlyZWN0aW9uIiwiZGV0YWlsVGl0bGUiLCJ0aXRsZSIsImxpbmUiLCJkZXRhaWxEYXRlIiwiZGF0ZSIsImRldGFpbFRleHQiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFFL0I7QUFGK0Is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O0FBQUE7QUFBQTtBQUFBLEtBQWtDNUIsMERBQWUsQ0FBQ3ZCLFVBQUQsQ0FBZixDQUE0Qm9ELElBQTlELENBSkYsQ0FKRixDQUZGLENBREMsR0FjUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZlgsQ0FuQkYsQ0FsQkosQ0FERjtBQTBERDs7R0FwR3VCNUQsTTs7S0FBQUEsTSIsImZpbGUiOiIuL3NlY3Rpb25zL3J1ZWNrc2NoYXUvU2xpZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NsaWRlci5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCBTbGlkZXJFbGVtZW50IGZyb20gJy4vU2xpZGVyRWxlbWVudC5qcyc7XG5pbXBvcnQgcnVlY2tzY2hhdV9kYXRhIGZyb20gJy4vUnVlY2tzY2hhdURhdGEuanMnO1xuaW1wb3J0IERyYWdnYWJsZSBmcm9tICdyZWFjdC1kcmFnZ2FibGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbGlkZXIoKSB7XG5cbiAgLy8gV2VsY2hlci9lcyBEb3QvUGxha2F0IHdpcmQgZ2VyYWRlIGZva3Vzc2llcnQ/XG4gIGNvbnN0IFtpc0ZvY3VzZWQsIHNldEZvY3VzZWRFbGVtZW50XSA9IHVzZVN0YXRlKC0xKTtcbiAgLy8gV3VyZGUgZWluIERvdCBnZWtsaWNrdD9cbiAgY29uc3QgW3dhc0RvdENsaWNrZWQsIHNldFdhc0RvdENsaWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBXaXJkIGdlcmFkZSBnZWRyYWdndD9cbiAgY29uc3QgW2lzRHJhZ2dpbmcsIHNldElzRHJhZ2dpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBCaWxkIG9kZXIgRG90IGdla2xpY2t0XG4gIGNvbnN0IFt3YXNDbGlja2VkLCBzZXRXYXNDbGlja2VkXSA9IHVzZVN0YXRlKC0xKTtcbiAgLy8gRGV0YWlsIEFuc2ljaHRcbiAgY29uc3QgW2lzVG9nZ2xlZCwgc2V0VG9nZ2xlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25DbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgc2V0VG9nZ2xlZCh0cnVlKTtcbiAgICBzZXRXYXNDbGlja2VkKGlzRm9jdXNlZCk7XG4gIH1cblxuICBjb25zdCByZXNldERvdCA9ICgpID0+IHtcbiAgICBzZXRGb2N1c2VkRWxlbWVudCgtMSk7XG4gICAgc2V0V2FzRG90Q2xpY2tlZChmYWxzZSk7XG4gIH1cblxuICBjb25zdCByZXNldERyYWdTdGF0ZSA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgc2V0SXNEcmFnZ2luZyhmYWxzZSlcbiAgICB9LCAyMDAwKTtcbiAgfVxuXG4gIGNvbnN0IHZhcmlhbnRzID0ge1xuICAgIGNvbnRlbnQ6IHtcbiAgICAgIG9wZW46IHsgb3BhY2l0eTogMSwgekluZGV4OiA0MDB9LFxuICAgICAgY2xvc2VkOiB7IG9wYWNpdHk6IDAsIHpJbmRleDogLTEwMCwgdHJhbnNpdGlvbjoge1xuICAgICAgICB3aGVuOiBcImFmdGVyQ2hpbGRyZW5cIixcbiAgICAgIH0sIH0sXG4gICAgfSxcbiAgICBpbWc6IHtcbiAgICAgIGhvdmVyOiB7IHNjYWxlOiAxLjA1fSxcbiAgICAgIG5vdEhvdmVyOiB7IHNjYWxlOiAxfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lX3NsaWRlcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZX0+XG4gICAgICAgICAgICAgIHsvKiBNYXBwZW4gZWluZW4gRG90IGbDvHIgamVkZXMgUGxha2F0ICovfVxuICAgICAgICAgICAgICB7cnVlY2tzY2hhdV9kYXRhLm1hcCgoZGF0YUVsZW1lbnQpID0+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6IFwiLThweFwifX0+XG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2RhdGFFbGVtZW50LmlkfSBvbkNsaWNrPXtvbkNsaWNrSGFuZGxlcn0gY2xhc3NOYW1lPXtzdHlsZXMuZG90fSBvbk1vdXNlRW50ZXI9eygpID0+IHNldEZvY3VzZWRFbGVtZW50KGRhdGFFbGVtZW50LmlkKX0gb25Nb3VzZUxlYXZlPXtyZXNldERvdH0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IGlzRm9jdXNlZCA9PSBkYXRhRWxlbWVudC5pZCA/IFwid2hpdGVcIiA6IFwiI2I0YTU4ZVwifX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMueWVhcn0+e2lzRm9jdXNlZCA9PSBkYXRhRWxlbWVudC5pZCA/IGRhdGFFbGVtZW50LnllYXIgOiBcIlwifTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmFsdWVzX2JvdHRvbX0+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmxlZnRfdmFsdWV9PkpldHp0PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5yaWdodF92YWx1ZX0+MTk5MDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWdfc2xpZGVyfT5cbiAgICAgICAgICA8RHJhZ2dhYmxlXG4gICAgICAgICAgYXhpcz1cInhcIlxuICAgICAgICAgIGhhbmRsZT1cIi5oYW5kbGVcIlxuICAgICAgICAgIGRlZmF1bHRQb3NpdGlvbj17e3g6IDAsIHk6IDB9fVxuICAgICAgICAgIHBvc2l0aW9uPXtudWxsfVxuICAgICAgICAgIGdyaWQ9e1syNSwgMjVdfVxuICAgICAgICAgIG9uRHJhZz17KCkgPT4gc2V0SXNEcmFnZ2luZyh0cnVlKX1cbiAgICAgICAgICBvblN0b3A9e3Jlc2V0RHJhZ1N0YXRlfVxuICAgICAgICAgIHNjYWxlPXsxfT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICB7LyogTWFwcGVuIGbDvHIgamVkZXMgUGxha2F0IGRhcyBCaWxkIGltIFNsaWRlciwgc293aWUgZGllIERldGFpbC1BbnNpY2h0IChsYXp5KSAqL31cbiAgICAgICAgICAgICAge3J1ZWNrc2NoYXVfZGF0YS5tYXAoKGRhdGFFbGVtZW50KSA9PlxuICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiaGFuZGxlXCIgc3R5bGU9e3tkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsIG1hcmdpblJpZ2h0OiBcIi0yMDBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxTbGlkZXJFbGVtZW50IGtleT17ZGF0YUVsZW1lbnQuaWR9IGRhdGFFbGVtZW50PXtkYXRhRWxlbWVudH0gb25DbGlja0hhbmRsZXI9e29uQ2xpY2tIYW5kbGVyfSBpc0ZvY3VzZWQ9e2lzRm9jdXNlZH0gc2V0Rm9jdXNlZEVsZW1lbnQ9e3NldEZvY3VzZWRFbGVtZW50fSBpc0RyYWdnaW5nPXtpc0RyYWdnaW5nfS8+XG4gICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgPC9EcmFnZ2FibGU+XG4gICAgICAgICAgPG1vdGlvbi5kaXYgaW5pdGlhbD1cImNsb3NlZFwiIGFuaW1hdGU9e2lzVG9nZ2xlZCA/IFwib3BlblwiIDogXCJjbG9zZWRcIn0gdHJhbnNpdGlvbj17eyBlYXNlOiBcImVhc2VJbk91dFwiLCBkdXJhdGlvbjogMC4yIH19IHZhcmlhbnRzPXt2YXJpYW50cy5jb250ZW50fSBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxWaWV3fT5cbiAgICAgICAgICAgIHt3YXNDbGlja2VkID49IDAgP1xuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbENsb3NlfSBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGVkKGZhbHNlKX0gZHJhZ2dhYmxlPVwiZmFsc2VcIiBzcmM9XCIvaWNvbnMvZXJyb3IucG5nXCIgYWx0PVwiQmFjayBCdXR0b24gSWNvblwiIC8+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIn19PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbEltZ30gZHJhZ2dhYmxlPVwiZmFsc2VcIiBzcmM9e3J1ZWNrc2NoYXVfZGF0YVt3YXNDbGlja2VkXS5pbWd9IGFsdD1cIkFycm93IEljb25cIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIn19PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsVGl0bGV9PntydWVja3NjaGF1X2RhdGFbd2FzQ2xpY2tlZF0udGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5lfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbERhdGV9PntydWVja3NjaGF1X2RhdGFbd2FzQ2xpY2tlZF0uZGF0ZX08L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxUZXh0fT57cnVlY2tzY2hhdV9kYXRhW3dhc0NsaWNrZWRdLnRleHR9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PiA6IDxkaXY+PC9kaXY+fVxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sections/rueckschau/Slider.js\n");

/***/ })

})