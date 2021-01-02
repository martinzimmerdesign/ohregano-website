webpackHotUpdate_N_E("pages/rueckschau",{

/***/ "./sections/rueckschau/Slider.js":
/*!***************************************!*\
  !*** ./sections/rueckschau/Slider.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Slider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Slider_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slider.module.css */ \"./sections/rueckschau/Slider.module.css\");\n/* harmony import */ var _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Slider_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _SliderElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SliderElement.js */ \"./sections/rueckschau/SliderElement.js\");\n/* harmony import */ var _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RueckschauData.js */ \"./sections/rueckschau/RueckschauData.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-draggable */ \"./node_modules/react-draggable/build/cjs/cjs.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/martinzimmer/github/ohregano-website/sections/rueckschau/Slider.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nfunction Slider() {\n  _s();\n\n  var _this = this;\n\n  // Welcher/es Dot/Plakat wird gerade fokussiert?\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(-1),\n      isFocused = _useState[0],\n      setFocusedElement = _useState[1]; // Wurde ein Dot geklickt?\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      wasDotClicked = _useState2[0],\n      setWasDotClicked = _useState2[1]; // Wird gerade gedraggt?\n\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isDragging = _useState3[0],\n      setIsDragging = _useState3[1]; // Bild oder Dot geklickt\n\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(-1),\n      wasClicked = _useState4[0],\n      setWasClicked = _useState4[1]; // Detail Ansicht\n\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isToggled = _useState5[0],\n      setToggled = _useState5[1]; // Scroll Value\n\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      scrollValue = _useState6[0],\n      setScrollValue = _useState6[1];\n\n  var onClickHandler = function onClickHandler() {\n    setToggled(true);\n    setWasClicked(isFocused);\n  };\n\n  var resetDot = function resetDot() {\n    setFocusedElement(-1);\n    setWasDotClicked(false);\n  };\n\n  var resetDragState = function resetDragState() {\n    setTimeout(function () {\n      setIsDragging(false);\n    }, 1200);\n  };\n\n  var variants = {\n    content: {\n      open: {\n        opacity: 1,\n        zIndex: 400\n      },\n      closed: {\n        opacity: 0,\n        zIndex: -100,\n        transition: {\n          when: \"afterChildren\"\n        }\n      }\n    },\n    img: {\n      hover: {\n        scale: 1.05\n      },\n      notHover: {\n        scale: 1\n      }\n    },\n    focusedDot: {\n      enter: {\n        backgroundColor: \"#b4a58e\",\n        padding: \"10px\",\n        border: \"10px solid rgba(255,255,255,0.95)\"\n      },\n      exit: {\n        backgroundColor: \"#ffffff\",\n        border: \"2px solid rgba(255,255,255,0)\",\n        padding: \"0px\"\n      }\n    },\n    focusedDate: {\n      enter: {\n        opacity: 1,\n        paddingLeft: \"10px\"\n      },\n      exit: {\n        opacity: 0,\n        paddingLeft: \"0px\"\n      }\n    }\n  };\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.time_slider,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"content_container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.timeline_wrapper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.timeline,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 15\n    }\n  }), __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.values_bottom,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 15\n    }\n  }, __jsx(\"p\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.left_value,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 15\n    }\n  }, \"Jetzt\"), __jsx(\"p\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.right_value,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 15\n    }\n  }, \"1990\")), __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dots,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 15\n    }\n  }, _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].map(function (dataElement) {\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 15\n      }\n    }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n      transition: {\n        ease: \"easeInOut\",\n        duration: 0.2\n      },\n      animate: isFocused == dataElement.id ? \"enter\" : \"exit\",\n      variants: variants.focusedDot,\n      key: dataElement.id,\n      onClick: onClickHandler,\n      className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dot,\n      onMouseEnter: function onMouseEnter() {\n        return setFocusedElement(dataElement.id);\n      },\n      onMouseLeave: resetDot,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 17\n      }\n    }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].p, {\n      transition: {\n        ease: \"easeInOut\",\n        duration: 0.2\n      },\n      animate: isFocused == dataElement.id ? \"enter\" : \"exit\",\n      variants: variants.focusedDate,\n      className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.year,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 17\n      }\n    }, isFocused == dataElement.id ? dataElement.year : \"\"));\n  }))))), __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.img_slider,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 9\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].img, {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.img_buttons + \" disable_select\",\n    whileHover: {\n      scale: 1.05\n    },\n    whileTap: {\n      scale: 0.95\n    },\n    src: \"/icons/right-chevron.png\",\n    alt: \"Next Icon\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }\n  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n    animate: {\n      x: scrollValue\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 11\n    }\n  }, __jsx(react_draggable__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    axis: \"x\",\n    handle: \".handle\",\n    defaultPosition: {\n      x: 0,\n      y: 0\n    },\n    position: null,\n    grid: [25, 25],\n    onDrag: function onDrag() {\n      return setIsDragging(true);\n    },\n    onStop: resetDragState,\n    scale: 1,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: \"flex\",\n      alignItems: \"center\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 13\n    }\n  }, _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].map(function (dataElement) {\n    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n      className: \"handle\",\n      style: {\n        display: \"inline-flex\",\n        marginRight: \"-200px\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 19\n      }\n    }, __jsx(_SliderElement_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      key: dataElement.id,\n      dataElement: dataElement,\n      onClickHandler: onClickHandler,\n      isFocused: isFocused,\n      setFocusedElement: setFocusedElement,\n      isDragging: isDragging,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 21\n      }\n    }));\n  })))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n    initial: \"closed\",\n    animate: isToggled ? \"open\" : \"closed\",\n    transition: {\n      ease: \"easeInOut\",\n      duration: 0.2\n    },\n    variants: variants.content,\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.detailView,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 11\n    }\n  }, wasClicked >= 0 ? __jsx(\"div\", {\n    className: \"content_container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 13\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].img, {\n    whileHover: {\n      scale: 1.15\n    },\n    whileTap: {\n      scale: 0.90\n    },\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.detailClose,\n    onClick: function onClick() {\n      return setToggled(false);\n    },\n    draggable: \"false\",\n    src: \"/icons/error.png\",\n    alt: \"Back Button Icon\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 15\n    }\n  }), __jsx(\"div\", {\n    style: {\n      display: \"flex\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 15\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 17\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].img, {\n    whileHover: {\n      scale: 1.05\n    },\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.detailImg,\n    draggable: \"false\",\n    src: _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"][wasClicked].img,\n    alt: \"Arrow Icon\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 19\n    }\n  })), __jsx(\"div\", {\n    style: {\n      display: \"flex\",\n      flexDirection: \"column\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.detailTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 19\n    }\n  }, _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"][wasClicked].title), __jsx(\"div\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.line,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 19\n    }\n  }), __jsx(\"p\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.detailDate,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 19\n    }\n  }, _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"][wasClicked].date), __jsx(\"p\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.detailText,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 19\n    }\n  }, _RueckschauData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"][wasClicked].text)))) : __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 22\n    }\n  }))));\n}\n\n_s(Slider, \"FcSpxv1tPbJ6odKeEENYLtabTgY=\");\n\n_c = Slider;\n\nvar _c;\n\n$RefreshReg$(_c, \"Slider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvcnVlY2tzY2hhdS9TbGlkZXIuanM/OGIyOCJdLCJuYW1lcyI6WyJTbGlkZXIiLCJ1c2VTdGF0ZSIsImlzRm9jdXNlZCIsInNldEZvY3VzZWRFbGVtZW50Iiwid2FzRG90Q2xpY2tlZCIsInNldFdhc0RvdENsaWNrZWQiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsIndhc0NsaWNrZWQiLCJzZXRXYXNDbGlja2VkIiwiaXNUb2dnbGVkIiwic2V0VG9nZ2xlZCIsInNjcm9sbFZhbHVlIiwic2V0U2Nyb2xsVmFsdWUiLCJvbkNsaWNrSGFuZGxlciIsInJlc2V0RG90IiwicmVzZXREcmFnU3RhdGUiLCJzZXRUaW1lb3V0IiwidmFyaWFudHMiLCJjb250ZW50Iiwib3BlbiIsIm9wYWNpdHkiLCJ6SW5kZXgiLCJjbG9zZWQiLCJ0cmFuc2l0aW9uIiwid2hlbiIsImltZyIsImhvdmVyIiwic2NhbGUiLCJub3RIb3ZlciIsImZvY3VzZWREb3QiLCJlbnRlciIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJib3JkZXIiLCJleGl0IiwiZm9jdXNlZERhdGUiLCJwYWRkaW5nTGVmdCIsInN0eWxlcyIsInRpbWVfc2xpZGVyIiwidGltZWxpbmVfd3JhcHBlciIsInRpbWVsaW5lIiwidmFsdWVzX2JvdHRvbSIsImxlZnRfdmFsdWUiLCJyaWdodF92YWx1ZSIsImRvdHMiLCJydWVja3NjaGF1X2RhdGEiLCJtYXAiLCJkYXRhRWxlbWVudCIsImVhc2UiLCJkdXJhdGlvbiIsImlkIiwiZG90IiwieWVhciIsImltZ19zbGlkZXIiLCJpbWdfYnV0dG9ucyIsIngiLCJ5IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJtYXJnaW5SaWdodCIsImRldGFpbFZpZXciLCJkZXRhaWxDbG9zZSIsImRldGFpbEltZyIsImZsZXhEaXJlY3Rpb24iLCJkZXRhaWxUaXRsZSIsInRpdGxlIiwibGluZSIsImRldGFpbERhdGUiLCJkYXRlIiwiZGV0YWlsVGV4dCIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBOztBQUUvQjtBQUYrQixrQkFHUUMsc0RBQVEsQ0FBQyxDQUFDLENBQUYsQ0FIaEI7QUFBQSxNQUd4QkMsU0FId0I7QUFBQSxNQUdiQyxpQkFIYSxpQkFJL0I7OztBQUorQixtQkFLV0Ysc0RBQVEsQ0FBQyxLQUFELENBTG5CO0FBQUEsTUFLeEJHLGFBTHdCO0FBQUEsTUFLVEMsZ0JBTFMsa0JBTS9COzs7QUFOK0IsbUJBT0tKLHNEQUFRLENBQUMsS0FBRCxDQVBiO0FBQUEsTUFPeEJLLFVBUHdCO0FBQUEsTUFPWkMsYUFQWSxrQkFRL0I7OztBQVIrQixtQkFTS04sc0RBQVEsQ0FBQyxDQUFDLENBQUYsQ0FUYjtBQUFBLE1BU3hCTyxVQVR3QjtBQUFBLE1BU1pDLGFBVFksa0JBVS9COzs7QUFWK0IsbUJBV0NSLHNEQUFRLENBQUMsS0FBRCxDQVhUO0FBQUEsTUFXeEJTLFNBWHdCO0FBQUEsTUFXYkMsVUFYYSxrQkFZL0I7OztBQVorQixtQkFhT1Ysc0RBQVEsQ0FBQyxDQUFELENBYmY7QUFBQSxNQWF4QlcsV0Fid0I7QUFBQSxNQWFYQyxjQWJXOztBQWUvQixNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0JILGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDQUYsaUJBQWEsQ0FBQ1AsU0FBRCxDQUFiO0FBQ0QsR0FIRDs7QUFLQSxNQUFNYSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCWixxQkFBaUIsQ0FBQyxDQUFDLENBQUYsQ0FBakI7QUFDQUUsb0JBQWdCLENBQUMsS0FBRCxDQUFoQjtBQUNELEdBSEQ7O0FBS0EsTUFBTVcsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCQyxjQUFVLENBQUMsWUFBVztBQUNwQlYsbUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDRCxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0QsR0FKRDs7QUFNQSxNQUFNVyxRQUFRLEdBQUc7QUFDZkMsV0FBTyxFQUFFO0FBQ1BDLFVBQUksRUFBRTtBQUFFQyxlQUFPLEVBQUUsQ0FBWDtBQUFjQyxjQUFNLEVBQUU7QUFBdEIsT0FEQztBQUVQQyxZQUFNLEVBQUU7QUFBRUYsZUFBTyxFQUFFLENBQVg7QUFBY0MsY0FBTSxFQUFFLENBQUMsR0FBdkI7QUFBNEJFLGtCQUFVLEVBQUU7QUFDOUNDLGNBQUksRUFBRTtBQUR3QztBQUF4QztBQUZELEtBRE07QUFPZkMsT0FBRyxFQUFFO0FBQ0hDLFdBQUssRUFBRTtBQUFFQyxhQUFLLEVBQUU7QUFBVCxPQURKO0FBRUhDLGNBQVEsRUFBRTtBQUFFRCxhQUFLLEVBQUU7QUFBVDtBQUZQLEtBUFU7QUFXZkUsY0FBVSxFQUFFO0FBQ1ZDLFdBQUssRUFBRTtBQUFFQyx1QkFBZSxFQUFFLFNBQW5CO0FBQStCQyxlQUFPLEVBQUUsTUFBeEM7QUFBZ0RDLGNBQU0sRUFBRTtBQUF4RCxPQURHO0FBRVZDLFVBQUksRUFBRTtBQUFFSCx1QkFBZSxFQUFFLFNBQW5CO0FBQThCRSxjQUFNLEVBQUUsK0JBQXRDO0FBQXVFRCxlQUFPLEVBQUU7QUFBaEY7QUFGSSxLQVhHO0FBZWZHLGVBQVcsRUFBRTtBQUNYTCxXQUFLLEVBQUU7QUFBRVYsZUFBTyxFQUFFLENBQVg7QUFBZWdCLG1CQUFXLEVBQUU7QUFBNUIsT0FESTtBQUVYRixVQUFJLEVBQUU7QUFBRWQsZUFBTyxFQUFFLENBQVg7QUFBY2dCLG1CQUFXLEVBQUU7QUFBM0I7QUFGSztBQWZFLEdBQWpCO0FBcUJBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFFQyx5REFBTSxDQUFDQyxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFRCx5REFBTSxDQUFDRSxnQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFRix5REFBTSxDQUFDRyxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBRUgseURBQU0sQ0FBQ0ksYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUcsYUFBUyxFQUFFSix5REFBTSxDQUFDSyxVQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsRUFFQTtBQUFHLGFBQVMsRUFBRUwseURBQU0sQ0FBQ00sV0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZBLENBRkYsRUFPRTtBQUFLLGFBQVMsRUFBRU4seURBQU0sQ0FBQ08sSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDQywwREFBZSxDQUFDQyxHQUFoQixDQUFvQixVQUFDQyxXQUFEO0FBQUEsV0FDckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksZ0JBQVUsRUFBRTtBQUFFQyxZQUFJLEVBQUUsV0FBUjtBQUFxQkMsZ0JBQVEsRUFBRTtBQUEvQixPQUF4QjtBQUE4RCxhQUFPLEVBQUVoRCxTQUFTLElBQUk4QyxXQUFXLENBQUNHLEVBQXpCLEdBQThCLE9BQTlCLEdBQXdDLE1BQS9HO0FBQXVILGNBQVEsRUFBRWpDLFFBQVEsQ0FBQ1ksVUFBMUk7QUFBc0osU0FBRyxFQUFFa0IsV0FBVyxDQUFDRyxFQUF2SztBQUEySyxhQUFPLEVBQUVyQyxjQUFwTDtBQUFvTSxlQUFTLEVBQUV3Qix5REFBTSxDQUFDYyxHQUF0TjtBQUEyTixrQkFBWSxFQUFFO0FBQUEsZUFBTWpELGlCQUFpQixDQUFDNkMsV0FBVyxDQUFDRyxFQUFiLENBQXZCO0FBQUEsT0FBek87QUFBa1Isa0JBQVksRUFBRXBDLFFBQWhTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFLE1BQUMsb0RBQUQsQ0FBUSxDQUFSO0FBQVUsZ0JBQVUsRUFBRTtBQUFFa0MsWUFBSSxFQUFFLFdBQVI7QUFBcUJDLGdCQUFRLEVBQUU7QUFBL0IsT0FBdEI7QUFBNEQsYUFBTyxFQUFFaEQsU0FBUyxJQUFJOEMsV0FBVyxDQUFDRyxFQUF6QixHQUE4QixPQUE5QixHQUF3QyxNQUE3RztBQUFxSCxjQUFRLEVBQUVqQyxRQUFRLENBQUNrQixXQUF4STtBQUFxSixlQUFTLEVBQUVFLHlEQUFNLENBQUNlLElBQXZLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBOEtuRCxTQUFTLElBQUk4QyxXQUFXLENBQUNHLEVBQXpCLEdBQThCSCxXQUFXLENBQUNLLElBQTFDLEdBQWlELEVBQS9OLENBRkYsQ0FEcUI7QUFBQSxHQUFwQixDQURELENBUEYsQ0FERixDQURGLENBREosRUFxQkk7QUFBSyxhQUFTLEVBQUVmLHlEQUFNLENBQUNnQixVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyxvREFBRCxDQUFRLEdBQVI7QUFBWSxhQUFTLEVBQUVoQix5REFBTSxDQUFDaUIsV0FBUCxHQUFxQixpQkFBNUM7QUFBK0QsY0FBVSxFQUFFO0FBQUUzQixXQUFLLEVBQUU7QUFBVCxLQUEzRTtBQUE0RixZQUFRLEVBQUU7QUFBRUEsV0FBSyxFQUFFO0FBQVQsS0FBdEc7QUFBdUgsT0FBRyxFQUFDLDBCQUEzSDtBQUFzSixPQUFHLEVBQUMsV0FBMUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLEVBRUUsTUFBQyxvREFBRCxDQUFRLEdBQVI7QUFBWSxXQUFPLEVBQUU7QUFBQzRCLE9BQUMsRUFBRTVDO0FBQUosS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsc0RBQUQ7QUFDQSxRQUFJLEVBQUMsR0FETDtBQUVBLFVBQU0sRUFBQyxTQUZQO0FBR0EsbUJBQWUsRUFBRTtBQUFDNEMsT0FBQyxFQUFFLENBQUo7QUFBT0MsT0FBQyxFQUFFO0FBQVYsS0FIakI7QUFJQSxZQUFRLEVBQUUsSUFKVjtBQUtBLFFBQUksRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLENBTE47QUFNQSxVQUFNLEVBQUU7QUFBQSxhQUFNbEQsYUFBYSxDQUFDLElBQUQsQ0FBbkI7QUFBQSxLQU5SO0FBT0EsVUFBTSxFQUFFUyxjQVBSO0FBUUEsU0FBSyxFQUFFLENBUlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNFO0FBQUssU0FBSyxFQUFFO0FBQUMwQyxhQUFPLEVBQUUsTUFBVjtBQUFrQkMsZ0JBQVUsRUFBRTtBQUE5QixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFR2IsMERBQWUsQ0FBQ0MsR0FBaEIsQ0FBb0IsVUFBQ0MsV0FBRDtBQUFBLFdBQ2pCLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksZUFBUyxFQUFDLFFBQXRCO0FBQStCLFdBQUssRUFBRTtBQUFDVSxlQUFPLEVBQUUsYUFBVjtBQUF5QkUsbUJBQVcsRUFBRTtBQUF0QyxPQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyx5REFBRDtBQUFlLFNBQUcsRUFBRVosV0FBVyxDQUFDRyxFQUFoQztBQUFvQyxpQkFBVyxFQUFFSCxXQUFqRDtBQUE4RCxvQkFBYyxFQUFFbEMsY0FBOUU7QUFBOEYsZUFBUyxFQUFFWixTQUF6RztBQUFvSCx1QkFBaUIsRUFBRUMsaUJBQXZJO0FBQTBKLGdCQUFVLEVBQUVHLFVBQXRLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURpQjtBQUFBLEdBQXBCLENBRkgsQ0FURixDQURBLENBRkYsRUFzQkUsTUFBQyxvREFBRCxDQUFRLEdBQVI7QUFBWSxXQUFPLEVBQUMsUUFBcEI7QUFBNkIsV0FBTyxFQUFFSSxTQUFTLEdBQUcsTUFBSCxHQUFZLFFBQTNEO0FBQXFFLGNBQVUsRUFBRTtBQUFFdUMsVUFBSSxFQUFFLFdBQVI7QUFBcUJDLGNBQVEsRUFBRTtBQUEvQixLQUFqRjtBQUF1SCxZQUFRLEVBQUVoQyxRQUFRLENBQUNDLE9BQTFJO0FBQW1KLGFBQVMsRUFBRW1CLHlEQUFNLENBQUN1QixVQUFySztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dyRCxVQUFVLElBQUksQ0FBZCxHQUNEO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFELENBQVEsR0FBUjtBQUFZLGNBQVUsRUFBRTtBQUFFb0IsV0FBSyxFQUFFO0FBQVQsS0FBeEI7QUFBeUMsWUFBUSxFQUFFO0FBQUVBLFdBQUssRUFBRTtBQUFULEtBQW5EO0FBQW9FLGFBQVMsRUFBRVUseURBQU0sQ0FBQ3dCLFdBQXRGO0FBQW1HLFdBQU8sRUFBRTtBQUFBLGFBQU1uRCxVQUFVLENBQUMsS0FBRCxDQUFoQjtBQUFBLEtBQTVHO0FBQXFJLGFBQVMsRUFBQyxPQUEvSTtBQUF1SixPQUFHLEVBQUMsa0JBQTNKO0FBQThLLE9BQUcsRUFBQyxrQkFBbEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxTQUFLLEVBQUU7QUFBQytDLGFBQU8sRUFBRTtBQUFWLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFELENBQVEsR0FBUjtBQUFZLGNBQVUsRUFBRTtBQUFFOUIsV0FBSyxFQUFFO0FBQVQsS0FBeEI7QUFBeUMsYUFBUyxFQUFFVSx5REFBTSxDQUFDeUIsU0FBM0Q7QUFBc0UsYUFBUyxFQUFDLE9BQWhGO0FBQXdGLE9BQUcsRUFBRWpCLDBEQUFlLENBQUN0QyxVQUFELENBQWYsQ0FBNEJrQixHQUF6SDtBQUE4SCxPQUFHLEVBQUMsWUFBbEk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFLLFNBQUssRUFBRTtBQUFDZ0MsYUFBTyxFQUFFLE1BQVY7QUFBa0JNLG1CQUFhLEVBQUU7QUFBakMsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUUxQix5REFBTSxDQUFDMkIsV0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtQ25CLDBEQUFlLENBQUN0QyxVQUFELENBQWYsQ0FBNEIwRCxLQUEvRCxDQURGLEVBRUU7QUFBSyxhQUFTLEVBQUU1Qix5REFBTSxDQUFDNkIsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBRyxhQUFTLEVBQUU3Qix5REFBTSxDQUFDOEIsVUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrQ3RCLDBEQUFlLENBQUN0QyxVQUFELENBQWYsQ0FBNEI2RCxJQUE5RCxDQUhGLEVBSUU7QUFBRyxhQUFTLEVBQUUvQix5REFBTSxDQUFDZ0MsVUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrQ3hCLDBEQUFlLENBQUN0QyxVQUFELENBQWYsQ0FBNEIrRCxJQUE5RCxDQUpGLENBSkYsQ0FGRixDQURDLEdBY1E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWZYLENBdEJGLENBckJKLENBREY7QUFnRUQ7O0dBcEh1QnZFLE07O0tBQUFBLE0iLCJmaWxlIjoiLi9zZWN0aW9ucy9ydWVja3NjaGF1L1NsaWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TbGlkZXIubW9kdWxlLmNzcydcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgU2xpZGVyRWxlbWVudCBmcm9tICcuL1NsaWRlckVsZW1lbnQuanMnO1xuaW1wb3J0IHJ1ZWNrc2NoYXVfZGF0YSBmcm9tICcuL1J1ZWNrc2NoYXVEYXRhLmpzJztcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAncmVhY3QtZHJhZ2dhYmxlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2xpZGVyKCkge1xuXG4gIC8vIFdlbGNoZXIvZXMgRG90L1BsYWthdCB3aXJkIGdlcmFkZSBmb2t1c3NpZXJ0P1xuICBjb25zdCBbaXNGb2N1c2VkLCBzZXRGb2N1c2VkRWxlbWVudF0gPSB1c2VTdGF0ZSgtMSk7XG4gIC8vIFd1cmRlIGVpbiBEb3QgZ2VrbGlja3Q/XG4gIGNvbnN0IFt3YXNEb3RDbGlja2VkLCBzZXRXYXNEb3RDbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgLy8gV2lyZCBnZXJhZGUgZ2VkcmFnZ3Q/XG4gIGNvbnN0IFtpc0RyYWdnaW5nLCBzZXRJc0RyYWdnaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgLy8gQmlsZCBvZGVyIERvdCBnZWtsaWNrdFxuICBjb25zdCBbd2FzQ2xpY2tlZCwgc2V0V2FzQ2xpY2tlZF0gPSB1c2VTdGF0ZSgtMSk7XG4gIC8vIERldGFpbCBBbnNpY2h0XG4gIGNvbnN0IFtpc1RvZ2dsZWQsIHNldFRvZ2dsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBTY3JvbGwgVmFsdWVcbiAgY29uc3QgW3Njcm9sbFZhbHVlLCBzZXRTY3JvbGxWYWx1ZV0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBvbkNsaWNrSGFuZGxlciA9ICgpID0+IHtcbiAgICBzZXRUb2dnbGVkKHRydWUpO1xuICAgIHNldFdhc0NsaWNrZWQoaXNGb2N1c2VkKTtcbiAgfVxuXG4gIGNvbnN0IHJlc2V0RG90ID0gKCkgPT4ge1xuICAgIHNldEZvY3VzZWRFbGVtZW50KC0xKTtcbiAgICBzZXRXYXNEb3RDbGlja2VkKGZhbHNlKTtcbiAgfVxuXG4gIGNvbnN0IHJlc2V0RHJhZ1N0YXRlID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBzZXRJc0RyYWdnaW5nKGZhbHNlKVxuICAgIH0sIDEyMDApO1xuICB9XG5cbiAgY29uc3QgdmFyaWFudHMgPSB7XG4gICAgY29udGVudDoge1xuICAgICAgb3BlbjogeyBvcGFjaXR5OiAxLCB6SW5kZXg6IDQwMH0sXG4gICAgICBjbG9zZWQ6IHsgb3BhY2l0eTogMCwgekluZGV4OiAtMTAwLCB0cmFuc2l0aW9uOiB7XG4gICAgICAgIHdoZW46IFwiYWZ0ZXJDaGlsZHJlblwiLFxuICAgICAgfSwgfSxcbiAgICB9LFxuICAgIGltZzoge1xuICAgICAgaG92ZXI6IHsgc2NhbGU6IDEuMDV9LFxuICAgICAgbm90SG92ZXI6IHsgc2NhbGU6IDF9XG4gICAgfSxcbiAgICBmb2N1c2VkRG90OiB7XG4gICAgICBlbnRlcjogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2I0YTU4ZVwiICwgcGFkZGluZzogXCIxMHB4XCIsIGJvcmRlcjogXCIxMHB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC45NSlcIiB9LFxuICAgICAgZXhpdDogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLCBib3JkZXI6IFwiMnB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMClcIiwgcGFkZGluZzogXCIwcHhcIiB9XG4gICAgfSxcbiAgICBmb2N1c2VkRGF0ZToge1xuICAgICAgZW50ZXI6IHsgb3BhY2l0eTogMSAsIHBhZGRpbmdMZWZ0OiBcIjEwcHhcIiB9LFxuICAgICAgZXhpdDogeyBvcGFjaXR5OiAwLCBwYWRkaW5nTGVmdDogXCIwcHhcIiB9XG4gICAgfSxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lX3NsaWRlcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZV93cmFwcGVyfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZX0+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmFsdWVzX2JvdHRvbX0+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmxlZnRfdmFsdWV9PkpldHp0PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5yaWdodF92YWx1ZX0+MTk5MDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7LyogTWFwcGVuIGVpbmVuIERvdCBmw7xyIGplZGVzIFBsYWthdCAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kb3RzfT5cbiAgICAgICAgICAgICAge3J1ZWNrc2NoYXVfZGF0YS5tYXAoKGRhdGFFbGVtZW50KSA9PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IHRyYW5zaXRpb249e3sgZWFzZTogXCJlYXNlSW5PdXRcIiwgZHVyYXRpb246IDAuMiB9fSBhbmltYXRlPXtpc0ZvY3VzZWQgPT0gZGF0YUVsZW1lbnQuaWQgPyBcImVudGVyXCIgOiBcImV4aXRcIn0gdmFyaWFudHM9e3ZhcmlhbnRzLmZvY3VzZWREb3R9IGtleT17ZGF0YUVsZW1lbnQuaWR9IG9uQ2xpY2s9e29uQ2xpY2tIYW5kbGVyfSBjbGFzc05hbWU9e3N0eWxlcy5kb3R9IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0Rm9jdXNlZEVsZW1lbnQoZGF0YUVsZW1lbnQuaWQpfSBvbk1vdXNlTGVhdmU9e3Jlc2V0RG90fT48L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5wIHRyYW5zaXRpb249e3sgZWFzZTogXCJlYXNlSW5PdXRcIiwgZHVyYXRpb246IDAuMiB9fSBhbmltYXRlPXtpc0ZvY3VzZWQgPT0gZGF0YUVsZW1lbnQuaWQgPyBcImVudGVyXCIgOiBcImV4aXRcIn0gdmFyaWFudHM9e3ZhcmlhbnRzLmZvY3VzZWREYXRlfSBjbGFzc05hbWU9e3N0eWxlcy55ZWFyfT57aXNGb2N1c2VkID09IGRhdGFFbGVtZW50LmlkID8gZGF0YUVsZW1lbnQueWVhciA6IFwiXCJ9PC9tb3Rpb24ucD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltZ19zbGlkZXJ9PlxuICAgICAgICA8bW90aW9uLmltZyBjbGFzc05hbWU9e3N0eWxlcy5pbWdfYnV0dG9ucyArIFwiIGRpc2FibGVfc2VsZWN0XCJ9IHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMDUgfX0gd2hpbGVUYXA9e3sgc2NhbGU6IDAuOTUgfX0gc3JjPVwiL2ljb25zL3JpZ2h0LWNoZXZyb24ucG5nXCIgYWx0PVwiTmV4dCBJY29uXCIgLz5cbiAgICAgICAgICA8bW90aW9uLmRpdiBhbmltYXRlPXt7eDogc2Nyb2xsVmFsdWV9fT5cbiAgICAgICAgICA8RHJhZ2dhYmxlXG4gICAgICAgICAgYXhpcz1cInhcIlxuICAgICAgICAgIGhhbmRsZT1cIi5oYW5kbGVcIlxuICAgICAgICAgIGRlZmF1bHRQb3NpdGlvbj17e3g6IDAsIHk6IDB9fVxuICAgICAgICAgIHBvc2l0aW9uPXtudWxsfVxuICAgICAgICAgIGdyaWQ9e1syNSwgMjVdfVxuICAgICAgICAgIG9uRHJhZz17KCkgPT4gc2V0SXNEcmFnZ2luZyh0cnVlKX1cbiAgICAgICAgICBvblN0b3A9e3Jlc2V0RHJhZ1N0YXRlfVxuICAgICAgICAgIHNjYWxlPXsxfT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICB7LyogTWFwcGVuIGbDvHIgamVkZXMgUGxha2F0IGRhcyBCaWxkIGltIFNsaWRlciwgc293aWUgZGllIERldGFpbC1BbnNpY2h0IChsYXp5KSAqL31cbiAgICAgICAgICAgICAge3J1ZWNrc2NoYXVfZGF0YS5tYXAoKGRhdGFFbGVtZW50KSA9PlxuICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiaGFuZGxlXCIgc3R5bGU9e3tkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsIG1hcmdpblJpZ2h0OiBcIi0yMDBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxTbGlkZXJFbGVtZW50IGtleT17ZGF0YUVsZW1lbnQuaWR9IGRhdGFFbGVtZW50PXtkYXRhRWxlbWVudH0gb25DbGlja0hhbmRsZXI9e29uQ2xpY2tIYW5kbGVyfSBpc0ZvY3VzZWQ9e2lzRm9jdXNlZH0gc2V0Rm9jdXNlZEVsZW1lbnQ9e3NldEZvY3VzZWRFbGVtZW50fSBpc0RyYWdnaW5nPXtpc0RyYWdnaW5nfS8+XG4gICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgPC9EcmFnZ2FibGU+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgIDxtb3Rpb24uZGl2IGluaXRpYWw9XCJjbG9zZWRcIiBhbmltYXRlPXtpc1RvZ2dsZWQgPyBcIm9wZW5cIiA6IFwiY2xvc2VkXCJ9IHRyYW5zaXRpb249e3sgZWFzZTogXCJlYXNlSW5PdXRcIiwgZHVyYXRpb246IDAuMiB9fSB2YXJpYW50cz17dmFyaWFudHMuY29udGVudH0gY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsVmlld30+XG4gICAgICAgICAgICB7d2FzQ2xpY2tlZCA+PSAwID9cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPG1vdGlvbi5pbWcgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4xNSB9fSB3aGlsZVRhcD17eyBzY2FsZTogMC45MCB9fSBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxDbG9zZX0gb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlZChmYWxzZSl9IGRyYWdnYWJsZT1cImZhbHNlXCIgc3JjPVwiL2ljb25zL2Vycm9yLnBuZ1wiIGFsdD1cIkJhY2sgQnV0dG9uIEljb25cIiAvPlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCJ9fT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPG1vdGlvbi5pbWcgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4wNSB9fSBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxJbWd9IGRyYWdnYWJsZT1cImZhbHNlXCIgc3JjPXtydWVja3NjaGF1X2RhdGFbd2FzQ2xpY2tlZF0uaW1nfSBhbHQ9XCJBcnJvdyBJY29uXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCJ9fT5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbFRpdGxlfT57cnVlY2tzY2hhdV9kYXRhW3dhc0NsaWNrZWRdLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGluZX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxEYXRlfT57cnVlY2tzY2hhdV9kYXRhW3dhc0NsaWNrZWRdLmRhdGV9PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsVGV4dH0+e3J1ZWNrc2NoYXVfZGF0YVt3YXNDbGlja2VkXS50ZXh0fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4gOiA8ZGl2PjwvZGl2Pn1cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sections/rueckschau/Slider.js\n");

/***/ })

})