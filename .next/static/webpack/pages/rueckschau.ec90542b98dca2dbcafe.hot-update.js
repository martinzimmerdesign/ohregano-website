webpackHotUpdate_N_E("pages/rueckschau",{

/***/ "./sections/rueckschau/SliderElement.js":
/*!**********************************************!*\
  !*** ./sections/rueckschau/SliderElement.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SliderElement; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Slider_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider.module.css */ \"./sections/rueckschau/Slider.module.css\");\n/* harmony import */ var _Slider_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Slider_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\nvar _jsxFileName = \"/Users/martinzimmer/github/ohregano-website/sections/rueckschau/SliderElement.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction SliderElement(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isToggled = _useState[0],\n      setToggled = _useState[1];\n\n  var toggleTrueFalse = function toggleTrueFalse() {\n    return setToggled(!isToggled);\n  };\n\n  var variants = {\n    content: {\n      open: {\n        y: 0,\n        opacity: 1,\n        zIndex: 400\n      },\n      closed: {\n        y: \"100vh\",\n        opacity: 0,\n        zIndex: 400,\n        transition: {\n          when: \"afterChildren\"\n        }\n      }\n    }\n  };\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (props.wasDotClicked && props.isFocused == props.id) {\n      setToggled(true);\n    }\n  });\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    onClick: props.isDragging == false ? toggleTrueFalse : console.log(\"nein\"),\n    onMouseEnter: function onMouseEnter() {\n      return props.setFocusedElement(props.id);\n    },\n    onMouseLeave: function onMouseLeave() {\n      return props.setFocusedElement(0);\n    },\n    style: {\n      backgroundColor: props.isFocused == props.id ? \"red\" : \"seagreen\"\n    },\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.slide_element,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }), isToggled ? __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].div, {\n    initial: \"closed\",\n    animate: isToggled ? \"open\" : \"closed\",\n    transition: {\n      ease: \"easeInOut\",\n      duration: 0.2\n    },\n    variants: variants.content,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    className: _Slider_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.left_value,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 17\n    }\n  }, props.dataElement.year))) : __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }\n  }));\n}\n/* \nTODO:\n- Jahreszahl über Slider D1\n- Horizontal Scrolling with dragging D1\n- Button to move right/left horizontally\n- Detail Layout for every image\n*/\n\n/* KEIN FOCUS AUFM HANDY */\n\n_s(SliderElement, \"eu13aKZgSvxe+zgRLrHdsbwqr14=\");\n\n_c = SliderElement;\n\nvar _c;\n\n$RefreshReg$(_c, \"SliderElement\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvcnVlY2tzY2hhdS9TbGlkZXJFbGVtZW50LmpzPzE3ZDQiXSwibmFtZXMiOlsiU2xpZGVyRWxlbWVudCIsInByb3BzIiwidXNlU3RhdGUiLCJpc1RvZ2dsZWQiLCJzZXRUb2dnbGVkIiwidG9nZ2xlVHJ1ZUZhbHNlIiwidmFyaWFudHMiLCJjb250ZW50Iiwib3BlbiIsInkiLCJvcGFjaXR5IiwiekluZGV4IiwiY2xvc2VkIiwidHJhbnNpdGlvbiIsIndoZW4iLCJ1c2VFZmZlY3QiLCJ3YXNEb3RDbGlja2VkIiwiaXNGb2N1c2VkIiwiaWQiLCJpc0RyYWdnaW5nIiwiY29uc29sZSIsImxvZyIsInNldEZvY3VzZWRFbGVtZW50IiwiYmFja2dyb3VuZENvbG9yIiwic3R5bGVzIiwic2xpZGVfZWxlbWVudCIsImVhc2UiLCJkdXJhdGlvbiIsImxlZnRfdmFsdWUiLCJkYXRhRWxlbWVudCIsInllYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQUE7O0FBQUEsa0JBRVRDLHNEQUFRLENBQUMsS0FBRCxDQUZDO0FBQUEsTUFFbENDLFNBRmtDO0FBQUEsTUFFdkJDLFVBRnVCOztBQUd6QyxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsV0FBTUQsVUFBVSxDQUFDLENBQUNELFNBQUYsQ0FBaEI7QUFBQSxHQUF4Qjs7QUFFQSxNQUFNRyxRQUFRLEdBQUc7QUFDYkMsV0FBTyxFQUFFO0FBQ1BDLFVBQUksRUFBRTtBQUFFQyxTQUFDLEVBQUUsQ0FBTDtBQUFRQyxlQUFPLEVBQUUsQ0FBakI7QUFBb0JDLGNBQU0sRUFBRTtBQUE1QixPQURDO0FBRVBDLFlBQU0sRUFBRTtBQUFFSCxTQUFDLEVBQUUsT0FBTDtBQUFjQyxlQUFPLEVBQUUsQ0FBdkI7QUFBMEJDLGNBQU0sRUFBRSxHQUFsQztBQUF1Q0Usa0JBQVUsRUFBRTtBQUN6REMsY0FBSSxFQUFFO0FBRG1EO0FBQW5EO0FBRkQ7QUFESSxHQUFqQjtBQVNBQyx5REFBUyxDQUFDLFlBQU07QUFDaEIsUUFBR2QsS0FBSyxDQUFDZSxhQUFOLElBQXVCZixLQUFLLENBQUNnQixTQUFOLElBQW1CaEIsS0FBSyxDQUFDaUIsRUFBbkQsRUFBdUQ7QUFDbkRkLGdCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0g7QUFDQSxHQUpRLENBQVQ7QUFNRixTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLFdBQU8sRUFBRUgsS0FBSyxDQUFDa0IsVUFBTixJQUFvQixLQUFwQixHQUE0QmQsZUFBNUIsR0FBOENlLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosQ0FBNUQ7QUFBa0YsZ0JBQVksRUFBRTtBQUFBLGFBQU1wQixLQUFLLENBQUNxQixpQkFBTixDQUF3QnJCLEtBQUssQ0FBQ2lCLEVBQTlCLENBQU47QUFBQSxLQUFoRztBQUF5SSxnQkFBWSxFQUFFO0FBQUEsYUFBTWpCLEtBQUssQ0FBQ3FCLGlCQUFOLENBQXdCLENBQXhCLENBQU47QUFBQSxLQUF2SjtBQUF5TCxTQUFLLEVBQUU7QUFBQ0MscUJBQWUsRUFBRXRCLEtBQUssQ0FBQ2dCLFNBQU4sSUFBbUJoQixLQUFLLENBQUNpQixFQUF6QixHQUE4QixLQUE5QixHQUFzQztBQUF4RCxLQUFoTTtBQUFxUSxhQUFTLEVBQUVNLHlEQUFNLENBQUNDLGFBQXZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVLdEIsU0FBUyxHQUNWLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksV0FBTyxFQUFDLFFBQXBCO0FBQTZCLFdBQU8sRUFBRUEsU0FBUyxHQUFHLE1BQUgsR0FBWSxRQUEzRDtBQUFxRSxjQUFVLEVBQUU7QUFBRXVCLFVBQUksRUFBRSxXQUFSO0FBQXFCQyxjQUFRLEVBQUU7QUFBL0IsS0FBakY7QUFBdUgsWUFBUSxFQUFFckIsUUFBUSxDQUFDQyxPQUExSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFFaUIseURBQU0sQ0FBQ0ksVUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrQzNCLEtBQUssQ0FBQzRCLFdBQU4sQ0FBa0JDLElBQXBELENBREosQ0FESixDQURVLEdBTVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJOLENBREY7QUFZRDtBQUVEOzs7Ozs7OztBQVFBOztHQTFDd0I5QixhOztLQUFBQSxhIiwiZmlsZSI6Ii4vc2VjdGlvbnMvcnVlY2tzY2hhdS9TbGlkZXJFbGVtZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NsaWRlci5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2xpZGVyRWxlbWVudChwcm9wcykge1xuXG4gICAgY29uc3QgW2lzVG9nZ2xlZCwgc2V0VG9nZ2xlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgdG9nZ2xlVHJ1ZUZhbHNlID0gKCkgPT4gc2V0VG9nZ2xlZCghaXNUb2dnbGVkKTtcblxuICAgIGNvbnN0IHZhcmlhbnRzID0ge1xuICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgb3BlbjogeyB5OiAwLCBvcGFjaXR5OiAxLCB6SW5kZXg6IDQwMH0sXG4gICAgICAgICAgY2xvc2VkOiB7IHk6IFwiMTAwdmhcIiwgb3BhY2l0eTogMCwgekluZGV4OiA0MDAsIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIHdoZW46IFwiYWZ0ZXJDaGlsZHJlblwiLFxuICAgICAgICAgIH0sIH0sXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYocHJvcHMud2FzRG90Q2xpY2tlZCAmJiBwcm9wcy5pc0ZvY3VzZWQgPT0gcHJvcHMuaWQpIHtcbiAgICAgICAgc2V0VG9nZ2xlZCh0cnVlKTtcbiAgICB9XG4gICAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e3Byb3BzLmlzRHJhZ2dpbmcgPT0gZmFsc2UgPyB0b2dnbGVUcnVlRmFsc2UgOiBjb25zb2xlLmxvZyhcIm5laW5cIikgfSBvbk1vdXNlRW50ZXI9eygpID0+IHByb3BzLnNldEZvY3VzZWRFbGVtZW50KHByb3BzLmlkKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBwcm9wcy5zZXRGb2N1c2VkRWxlbWVudCgwKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IHByb3BzLmlzRm9jdXNlZCA9PSBwcm9wcy5pZCA/IFwicmVkXCIgOiBcInNlYWdyZWVuXCJ9fSBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZV9lbGVtZW50fT48L2Rpdj5cbiAgICAgICAge2lzVG9nZ2xlZCA/XG4gICAgICAgIDxtb3Rpb24uZGl2IGluaXRpYWw9XCJjbG9zZWRcIiBhbmltYXRlPXtpc1RvZ2dsZWQgPyBcIm9wZW5cIiA6IFwiY2xvc2VkXCJ9IHRyYW5zaXRpb249e3sgZWFzZTogXCJlYXNlSW5PdXRcIiwgZHVyYXRpb246IDAuMiB9fSB2YXJpYW50cz17dmFyaWFudHMuY29udGVudH0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmxlZnRfdmFsdWV9Pntwcm9wcy5kYXRhRWxlbWVudC55ZWFyfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDogPGRpdj48L2Rpdj59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLyogXG5UT0RPOlxuLSBKYWhyZXN6YWhsIMO8YmVyIFNsaWRlciBEMVxuLSBIb3Jpem9udGFsIFNjcm9sbGluZyB3aXRoIGRyYWdnaW5nIEQxXG4tIEJ1dHRvbiB0byBtb3ZlIHJpZ2h0L2xlZnQgaG9yaXpvbnRhbGx5XG4tIERldGFpbCBMYXlvdXQgZm9yIGV2ZXJ5IGltYWdlXG4qL1xuXG4vKiBLRUlOIEZPQ1VTIEFVRk0gSEFORFkgKi8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sections/rueckschau/SliderElement.js\n");

/***/ })

})