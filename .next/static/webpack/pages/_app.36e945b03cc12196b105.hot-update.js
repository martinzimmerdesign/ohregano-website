webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./shared/globals.css":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./shared/globals.css ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* For the smallest screens & global values */\\n:root {\\n  /* Colors */\\n  --color-main: #F7C331;\\n  --color-text: #241515;\\n  --color-secondary: #F7882F;\\n  /* Footer */\\n  --color-footer-main: #3B3B3B;\\n  --color-footer-secondary: #242220;\\n\\n  /* Shapes */\\n  --color-bg-shape: #DCC7AA;\\n\\n  /* Screen */\\n  --content-max-width: 1500px;\\n  --border-width: 30px;\\n  /* Fonts */\\n  --font-main: 'Open Sans', sans-serif;\\n  --font-secondary: ;\\n\\n  /* Font Size */\\n  --font-size-title: 2em;\\n  --font-size-p-title: 1.5em;\\n  --font-size-section-title: 2.5em;\\n  --font-size-paragraph: 1.2em;\\n  --font-size-input: 1.1em;\\n  --font-size-note: 0.8em;\\n  --font-size-navigation: 1.4em;\\n}\\n\\n/* Mobile */\\n@media (min-width: 43em) {\\n  :root {\\n  --font-size-title: 3em;\\n  --font-size-p-title: 2em;\\n  --font-size-section-title: 3em;\\n  --font-size-paragraph: 1.3em;\\n  --font-size-note: 0.9em;\\n  --font-size-navigation: 1.5em;\\n  --border-width: 60px;\\n  }\\n}\\n\\n/* Tablet */\\n@media (min-width: 62em) {\\n  :root {\\n  --font-size-title: 4em;\\n  --font-size-p-title: 2em;\\n  --font-size-section-title: 3em;\\n  --font-size-paragraph: 1.4em;\\n  --font-size-note: 1em;\\n  --font-size-navigation: 1.6em;\\n  --border-width: 70px;\\n  }\\n}\\n\\n/* Desktop */\\n@media (min-width: 82em) {\\n  :root {\\n  --font-size-title: 5em;\\n  --font-size-p-title: 2em;\\n  --font-size-section-title: 3em;\\n  --font-size-paragraph: 1.3em;\\n  --font-size-input: 1.3em;\\n  --font-size-note: 1.2em;\\n  --font-size-navigation: 1.3em;\\n  --border-width: 90px;\\n  }\\n}\\n\\n/* Desktop Big */\\n@media (min-width: 102em) {\\n  :root {\\n  --font-size-title: 5em;\\n  --font-size-p-title: 2.5em;\\n  --font-size-section-title: 4em;\\n  --font-size-paragraph: 1.5em;\\n  --font-size-note: 1.2em;\\n  --font-size-navigation: 1.8em;\\n  --border-width: 120px;\\n  }\\n\\n}\\n\\n.content_container {\\n  width: calc(100% - ( 2* var(--border-width)));\\n  margin: 0px var(--border-width);\\n  max-width: var(--content-max-width);\\n  margin: 0 auto;\\n}\\n\\n.note {\\n  font-size: var(--font-size-note);\\n  margin: 2px 0px;\\n}\\n\\nhtml,\\nbody {\\n  width: 100%;\\n  height: 100%;\\n  padding: 0;\\n  margin: 0;\\n  font-family: var(--font-main), BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\\n}\\n\\n/* Hide scrollbar for Chrome, Safari and Opera */\\nbody::-webkit-scrollbar {\\n  display: none;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\\n.disable_select {\\n-webkit-user-select: none;\\n-moz-user-select: none;\\n-ms-user-select: none;\\nuser-select: none;\\n}\\n\\n/* Landing Page Slider */\\n.indicators {\\n  display: none;\\n}\\n\\n/* Desktop */\\n@media (min-width: 82em) {\\n  .indicators {\\n    float: right;\\n    margin-right: 30px;\\n  }\\n\\n  .indicator {\\n    position: relative;\\n    display: inline-block;\\n    margin: 6px;\\n    background-color: rgba(255,255,255,0.3);\\n    padding: 5px;\\n    bottom: 65px;\\n    border-radius: 20px;\\n  }\\n\\n  .indicator.active {\\n    background-color: white;\\n  }\\n}\\n\\n/* Desktop Big */\\n@media (min-width: 102em) {\\n  .indicators {\\n    margin: var(--border-width);\\n  }\\n\\n  .indicator {\\n    margin: 8px;\\n    padding: 6px;\\n    bottom: 100px;\\n  }\\n}\\n\\n/* Formular conf */\\n\\n/* Change Autocomplete styles in Chrome*/\\ninput:-webkit-autofill,\\ninput:-webkit-autofill:hover,\\ninput:-webkit-autofill:focus,\\ntextarea:-webkit-autofill,\\ntextarea:-webkit-autofill:hover,\\ntextarea:-webkit-autofill:focus,\\nselect:-webkit-autofill,\\nselect:-webkit-autofill:hover,\\nselect:-webkit-autofill:focus {\\n\\n}\\n\\n*:focus {\\n  outline: none;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://shared/globals.css\"],\"names\":[],\"mappings\":\"AAEA,6CAA6C;AAC7C;EACE,WAAW;EACX,qBAAqB;EACrB,qBAAqB;EACrB,0BAA0B;EAC1B,WAAW;EACX,4BAA4B;EAC5B,iCAAiC;;EAEjC,WAAW;EACX,yBAAyB;;EAEzB,WAAW;EACX,2BAA2B;EAC3B,oBAAoB;EACpB,UAAU;EACV,oCAAoC;EACpC,kBAAkB;;EAElB,cAAc;EACd,sBAAsB;EACtB,0BAA0B;EAC1B,gCAAgC;EAChC,4BAA4B;EAC5B,wBAAwB;EACxB,uBAAuB;EACvB,6BAA6B;AAC/B;;AAEA,WAAW;AACX;EACE;EACA,sBAAsB;EACtB,wBAAwB;EACxB,8BAA8B;EAC9B,4BAA4B;EAC5B,uBAAuB;EACvB,6BAA6B;EAC7B,oBAAoB;EACpB;AACF;;AAEA,WAAW;AACX;EACE;EACA,sBAAsB;EACtB,wBAAwB;EACxB,8BAA8B;EAC9B,4BAA4B;EAC5B,qBAAqB;EACrB,6BAA6B;EAC7B,oBAAoB;EACpB;AACF;;AAEA,YAAY;AACZ;EACE;EACA,sBAAsB;EACtB,wBAAwB;EACxB,8BAA8B;EAC9B,4BAA4B;EAC5B,wBAAwB;EACxB,uBAAuB;EACvB,6BAA6B;EAC7B,oBAAoB;EACpB;AACF;;AAEA,gBAAgB;AAChB;EACE;EACA,sBAAsB;EACtB,0BAA0B;EAC1B,8BAA8B;EAC9B,4BAA4B;EAC5B,uBAAuB;EACvB,6BAA6B;EAC7B,qBAAqB;EACrB;;AAEF;;AAEA;EACE,6CAA6C;EAC7C,+BAA+B;EAC/B,mCAAmC;EACnC,cAAc;AAChB;;AAEA;EACE,gCAAgC;EAChC,eAAe;AACjB;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,UAAU;EACV,SAAS;EACT;wEACsE;AACxE;;AAEA,gDAAgD;AAChD;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;AACA,yBAAyB;AACzB,sBAAsB;AACtB,qBAAqB;AACrB,iBAAiB;AACjB;;AAEA,wBAAwB;AACxB;EACE,aAAa;AACf;;AAEA,YAAY;AACZ;EACE;IACE,YAAY;IACZ,kBAAkB;EACpB;;EAEA;IACE,kBAAkB;IAClB,qBAAqB;IACrB,WAAW;IACX,uCAAuC;IACvC,YAAY;IACZ,YAAY;IACZ,mBAAmB;EACrB;;EAEA;IACE,uBAAuB;EACzB;AACF;;AAEA,gBAAgB;AAChB;EACE;IACE,2BAA2B;EAC7B;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,aAAa;EACf;AACF;;AAEA,kBAAkB;;AAElB,wCAAwC;AACxC;;;;;;;;;;AAUA;;AAEA;EACE,aAAa;AACf\",\"sourcesContent\":[\"@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');\\n\\n/* For the smallest screens & global values */\\n:root {\\n  /* Colors */\\n  --color-main: #F7C331;\\n  --color-text: #241515;\\n  --color-secondary: #F7882F;\\n  /* Footer */\\n  --color-footer-main: #3B3B3B;\\n  --color-footer-secondary: #242220;\\n\\n  /* Shapes */\\n  --color-bg-shape: #DCC7AA;\\n\\n  /* Screen */\\n  --content-max-width: 1500px;\\n  --border-width: 30px;\\n  /* Fonts */\\n  --font-main: 'Open Sans', sans-serif;\\n  --font-secondary: ;\\n\\n  /* Font Size */\\n  --font-size-title: 2em;\\n  --font-size-p-title: 1.5em;\\n  --font-size-section-title: 2.5em;\\n  --font-size-paragraph: 1.2em;\\n  --font-size-input: 1.1em;\\n  --font-size-note: 0.8em;\\n  --font-size-navigation: 1.4em;\\n}\\n\\n/* Mobile */\\n@media (min-width: 43em) {\\n  :root {\\n  --font-size-title: 3em;\\n  --font-size-p-title: 2em;\\n  --font-size-section-title: 3em;\\n  --font-size-paragraph: 1.3em;\\n  --font-size-note: 0.9em;\\n  --font-size-navigation: 1.5em;\\n  --border-width: 60px;\\n  }\\n}\\n\\n/* Tablet */\\n@media (min-width: 62em) {\\n  :root {\\n  --font-size-title: 4em;\\n  --font-size-p-title: 2em;\\n  --font-size-section-title: 3em;\\n  --font-size-paragraph: 1.4em;\\n  --font-size-note: 1em;\\n  --font-size-navigation: 1.6em;\\n  --border-width: 70px;\\n  }\\n}\\n\\n/* Desktop */\\n@media (min-width: 82em) {\\n  :root {\\n  --font-size-title: 5em;\\n  --font-size-p-title: 2em;\\n  --font-size-section-title: 3em;\\n  --font-size-paragraph: 1.3em;\\n  --font-size-input: 1.3em;\\n  --font-size-note: 1.2em;\\n  --font-size-navigation: 1.3em;\\n  --border-width: 90px;\\n  }\\n}\\n\\n/* Desktop Big */\\n@media (min-width: 102em) {\\n  :root {\\n  --font-size-title: 5em;\\n  --font-size-p-title: 2.5em;\\n  --font-size-section-title: 4em;\\n  --font-size-paragraph: 1.5em;\\n  --font-size-note: 1.2em;\\n  --font-size-navigation: 1.8em;\\n  --border-width: 120px;\\n  }\\n\\n}\\n\\n.content_container {\\n  width: calc(100% - ( 2* var(--border-width)));\\n  margin: 0px var(--border-width);\\n  max-width: var(--content-max-width);\\n  margin: 0 auto;\\n}\\n\\n.note {\\n  font-size: var(--font-size-note);\\n  margin: 2px 0px;\\n}\\n\\nhtml,\\nbody {\\n  width: 100%;\\n  height: 100%;\\n  padding: 0;\\n  margin: 0;\\n  font-family: var(--font-main), BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\\n}\\n\\n/* Hide scrollbar for Chrome, Safari and Opera */\\nbody::-webkit-scrollbar {\\n  display: none;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\\n.disable_select {\\n-webkit-user-select: none;\\n-moz-user-select: none;\\n-ms-user-select: none;\\nuser-select: none;\\n}\\n\\n/* Landing Page Slider */\\n.indicators {\\n  display: none;\\n}\\n\\n/* Desktop */\\n@media (min-width: 82em) {\\n  .indicators {\\n    float: right;\\n    margin-right: 30px;\\n  }\\n\\n  .indicator {\\n    position: relative;\\n    display: inline-block;\\n    margin: 6px;\\n    background-color: rgba(255,255,255,0.3);\\n    padding: 5px;\\n    bottom: 65px;\\n    border-radius: 20px;\\n  }\\n\\n  .indicator.active {\\n    background-color: white;\\n  }\\n}\\n\\n/* Desktop Big */\\n@media (min-width: 102em) {\\n  .indicators {\\n    margin: var(--border-width);\\n  }\\n\\n  .indicator {\\n    margin: 8px;\\n    padding: 6px;\\n    bottom: 100px;\\n  }\\n}\\n\\n/* Formular conf */\\n\\n/* Change Autocomplete styles in Chrome*/\\ninput:-webkit-autofill,\\ninput:-webkit-autofill:hover,\\ninput:-webkit-autofill:focus,\\ntextarea:-webkit-autofill,\\ntextarea:-webkit-autofill:hover,\\ntextarea:-webkit-autofill:focus,\\nselect:-webkit-autofill,\\nselect:-webkit-autofill:hover,\\nselect:-webkit-autofill:focus {\\n\\n}\\n\\n*:focus {\\n  outline: none;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2hhcmVkL2dsb2JhbHMuY3NzPzE3NjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeUY7QUFDekYsOEJBQThCLG1GQUEyQjtBQUN6RCw4QkFBOEIsUUFBUywyRUFBMkUsa0JBQWtCO0FBQ3BJO0FBQ0EsOEJBQThCLFFBQVMsMERBQTBELDBDQUEwQywwQkFBMEIsK0JBQStCLGlEQUFpRCxzQ0FBc0MsZ0RBQWdELGtEQUFrRCx5QkFBeUIsd0RBQXdELHVCQUF1QixnREFBZ0QsK0JBQStCLHFDQUFxQyxpQ0FBaUMsNkJBQTZCLDRCQUE0QixrQ0FBa0MsR0FBRyw0Q0FBNEMsV0FBVywyQkFBMkIsNkJBQTZCLG1DQUFtQyxpQ0FBaUMsNEJBQTRCLGtDQUFrQyx5QkFBeUIsS0FBSyxHQUFHLDRDQUE0QyxXQUFXLDJCQUEyQiw2QkFBNkIsbUNBQW1DLGlDQUFpQywwQkFBMEIsa0NBQWtDLHlCQUF5QixLQUFLLEdBQUcsNkNBQTZDLFdBQVcsMkJBQTJCLDZCQUE2QixtQ0FBbUMsaUNBQWlDLDZCQUE2Qiw0QkFBNEIsa0NBQWtDLHlCQUF5QixLQUFLLEdBQUcsa0RBQWtELFdBQVcsMkJBQTJCLCtCQUErQixtQ0FBbUMsaUNBQWlDLDRCQUE0QixrQ0FBa0MsMEJBQTBCLEtBQUssS0FBSyx3QkFBd0Isa0RBQWtELG9DQUFvQyx3Q0FBd0MsbUJBQW1CLEdBQUcsV0FBVyxxQ0FBcUMsb0JBQW9CLEdBQUcsaUJBQWlCLGdCQUFnQixpQkFBaUIsZUFBZSxjQUFjLDJKQUEySixHQUFHLGdGQUFnRixrQkFBa0IsR0FBRyxPQUFPLG1CQUFtQiwwQkFBMEIsR0FBRyxPQUFPLDJCQUEyQixHQUFHLHFCQUFxQiw0QkFBNEIseUJBQXlCLHdCQUF3QixvQkFBb0IsR0FBRyw0Q0FBNEMsa0JBQWtCLEdBQUcsNkNBQTZDLGlCQUFpQixtQkFBbUIseUJBQXlCLEtBQUssa0JBQWtCLHlCQUF5Qiw0QkFBNEIsa0JBQWtC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c0ZBQXVCLEVBQUMiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPyEuL3NoYXJlZC9nbG9iYWxzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogRm9yIHRoZSBzbWFsbGVzdCBzY3JlZW5zICYgZ2xvYmFsIHZhbHVlcyAqL1xcbjpyb290IHtcXG4gIC8qIENvbG9ycyAqL1xcbiAgLS1jb2xvci1tYWluOiAjRjdDMzMxO1xcbiAgLS1jb2xvci10ZXh0OiAjMjQxNTE1O1xcbiAgLS1jb2xvci1zZWNvbmRhcnk6ICNGNzg4MkY7XFxuICAvKiBGb290ZXIgKi9cXG4gIC0tY29sb3ItZm9vdGVyLW1haW46ICMzQjNCM0I7XFxuICAtLWNvbG9yLWZvb3Rlci1zZWNvbmRhcnk6ICMyNDIyMjA7XFxuXFxuICAvKiBTaGFwZXMgKi9cXG4gIC0tY29sb3ItYmctc2hhcGU6ICNEQ0M3QUE7XFxuXFxuICAvKiBTY3JlZW4gKi9cXG4gIC0tY29udGVudC1tYXgtd2lkdGg6IDE1MDBweDtcXG4gIC0tYm9yZGVyLXdpZHRoOiAzMHB4O1xcbiAgLyogRm9udHMgKi9cXG4gIC0tZm9udC1tYWluOiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIC0tZm9udC1zZWNvbmRhcnk6IDtcXG5cXG4gIC8qIEZvbnQgU2l6ZSAqL1xcbiAgLS1mb250LXNpemUtdGl0bGU6IDJlbTtcXG4gIC0tZm9udC1zaXplLXAtdGl0bGU6IDEuNWVtO1xcbiAgLS1mb250LXNpemUtc2VjdGlvbi10aXRsZTogMi41ZW07XFxuICAtLWZvbnQtc2l6ZS1wYXJhZ3JhcGg6IDEuMmVtO1xcbiAgLS1mb250LXNpemUtaW5wdXQ6IDEuMWVtO1xcbiAgLS1mb250LXNpemUtbm90ZTogMC44ZW07XFxuICAtLWZvbnQtc2l6ZS1uYXZpZ2F0aW9uOiAxLjRlbTtcXG59XFxuXFxuLyogTW9iaWxlICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDQzZW0pIHtcXG4gIDpyb290IHtcXG4gIC0tZm9udC1zaXplLXRpdGxlOiAzZW07XFxuICAtLWZvbnQtc2l6ZS1wLXRpdGxlOiAyZW07XFxuICAtLWZvbnQtc2l6ZS1zZWN0aW9uLXRpdGxlOiAzZW07XFxuICAtLWZvbnQtc2l6ZS1wYXJhZ3JhcGg6IDEuM2VtO1xcbiAgLS1mb250LXNpemUtbm90ZTogMC45ZW07XFxuICAtLWZvbnQtc2l6ZS1uYXZpZ2F0aW9uOiAxLjVlbTtcXG4gIC0tYm9yZGVyLXdpZHRoOiA2MHB4O1xcbiAgfVxcbn1cXG5cXG4vKiBUYWJsZXQgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNjJlbSkge1xcbiAgOnJvb3Qge1xcbiAgLS1mb250LXNpemUtdGl0bGU6IDRlbTtcXG4gIC0tZm9udC1zaXplLXAtdGl0bGU6IDJlbTtcXG4gIC0tZm9udC1zaXplLXNlY3Rpb24tdGl0bGU6IDNlbTtcXG4gIC0tZm9udC1zaXplLXBhcmFncmFwaDogMS40ZW07XFxuICAtLWZvbnQtc2l6ZS1ub3RlOiAxZW07XFxuICAtLWZvbnQtc2l6ZS1uYXZpZ2F0aW9uOiAxLjZlbTtcXG4gIC0tYm9yZGVyLXdpZHRoOiA3MHB4O1xcbiAgfVxcbn1cXG5cXG4vKiBEZXNrdG9wICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDgyZW0pIHtcXG4gIDpyb290IHtcXG4gIC0tZm9udC1zaXplLXRpdGxlOiA1ZW07XFxuICAtLWZvbnQtc2l6ZS1wLXRpdGxlOiAyZW07XFxuICAtLWZvbnQtc2l6ZS1zZWN0aW9uLXRpdGxlOiAzZW07XFxuICAtLWZvbnQtc2l6ZS1wYXJhZ3JhcGg6IDEuM2VtO1xcbiAgLS1mb250LXNpemUtaW5wdXQ6IDEuM2VtO1xcbiAgLS1mb250LXNpemUtbm90ZTogMS4yZW07XFxuICAtLWZvbnQtc2l6ZS1uYXZpZ2F0aW9uOiAxLjNlbTtcXG4gIC0tYm9yZGVyLXdpZHRoOiA5MHB4O1xcbiAgfVxcbn1cXG5cXG4vKiBEZXNrdG9wIEJpZyAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiAxMDJlbSkge1xcbiAgOnJvb3Qge1xcbiAgLS1mb250LXNpemUtdGl0bGU6IDVlbTtcXG4gIC0tZm9udC1zaXplLXAtdGl0bGU6IDIuNWVtO1xcbiAgLS1mb250LXNpemUtc2VjdGlvbi10aXRsZTogNGVtO1xcbiAgLS1mb250LXNpemUtcGFyYWdyYXBoOiAxLjVlbTtcXG4gIC0tZm9udC1zaXplLW5vdGU6IDEuMmVtO1xcbiAgLS1mb250LXNpemUtbmF2aWdhdGlvbjogMS44ZW07XFxuICAtLWJvcmRlci13aWR0aDogMTIwcHg7XFxuICB9XFxuXFxufVxcblxcbi5jb250ZW50X2NvbnRhaW5lciB7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gKCAyKiB2YXIoLS1ib3JkZXItd2lkdGgpKSk7XFxuICBtYXJnaW46IDBweCB2YXIoLS1ib3JkZXItd2lkdGgpO1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1jb250ZW50LW1heC13aWR0aCk7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLm5vdGUge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbm90ZSk7XFxuICBtYXJnaW46IDJweCAwcHg7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tYWluKSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBPeHlnZW4sXFxuICAgIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4vKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uZGlzYWJsZV9zZWxlY3Qge1xcbi13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4tbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxudXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi8qIExhbmRpbmcgUGFnZSBTbGlkZXIgKi9cXG4uaW5kaWNhdG9ycyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBEZXNrdG9wICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDgyZW0pIHtcXG4gIC5pbmRpY2F0b3JzIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxuICB9XFxuXFxuICAuaW5kaWNhdG9yIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbjogNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm90dG9tOiA2NXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgfVxcblxcbiAgLmluZGljYXRvci5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIH1cXG59XFxuXFxuLyogRGVza3RvcCBCaWcgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyZW0pIHtcXG4gIC5pbmRpY2F0b3JzIHtcXG4gICAgbWFyZ2luOiB2YXIoLS1ib3JkZXItd2lkdGgpO1xcbiAgfVxcblxcbiAgLmluZGljYXRvciB7XFxuICAgIG1hcmdpbjogOHB4O1xcbiAgICBwYWRkaW5nOiA2cHg7XFxuICAgIGJvdHRvbTogMTAwcHg7XFxuICB9XFxufVxcblxcbi8qIEZvcm11bGFyIGNvbmYgKi9cXG5cXG4vKiBDaGFuZ2UgQXV0b2NvbXBsZXRlIHN0eWxlcyBpbiBDaHJvbWUqL1xcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmZvY3VzLFxcbnRleHRhcmVhOi13ZWJraXQtYXV0b2ZpbGwsXFxudGV4dGFyZWE6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcXG50ZXh0YXJlYTotd2Via2l0LWF1dG9maWxsOmZvY3VzLFxcbnNlbGVjdDotd2Via2l0LWF1dG9maWxsLFxcbnNlbGVjdDotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxcbnNlbGVjdDotd2Via2l0LWF1dG9maWxsOmZvY3VzIHtcXG5cXG59XFxuXFxuKjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc2hhcmVkL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBLDZDQUE2QztBQUM3QztFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQixXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLGlDQUFpQzs7RUFFakMsV0FBVztFQUNYLHlCQUF5Qjs7RUFFekIsV0FBVztFQUNYLDJCQUEyQjtFQUMzQixvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLG9DQUFvQztFQUNwQyxrQkFBa0I7O0VBRWxCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLGdDQUFnQztFQUNoQyw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2Qiw2QkFBNkI7QUFDL0I7O0FBRUEsV0FBVztBQUNYO0VBQ0U7RUFDQSxzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLDhCQUE4QjtFQUM5Qiw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixvQkFBb0I7RUFDcEI7QUFDRjs7QUFFQSxXQUFXO0FBQ1g7RUFDRTtFQUNBLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsOEJBQThCO0VBQzlCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQjtBQUNGOztBQUVBLFlBQVk7QUFDWjtFQUNFO0VBQ0Esc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4Qiw4QkFBOEI7RUFDOUIsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQjtBQUNGOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFO0VBQ0Esc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCOztBQUVGOztBQUVBO0VBQ0UsNkNBQTZDO0VBQzdDLCtCQUErQjtFQUMvQixtQ0FBbUM7RUFDbkMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUNWLFNBQVM7RUFDVDt3RUFDc0U7QUFDeEU7O0FBRUEsZ0RBQWdEO0FBQ2hEO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QixzQkFBc0I7QUFDdEIscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsWUFBWTtBQUNaO0VBQ0U7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsdUNBQXVDO0lBQ3ZDLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsdUJBQXVCO0VBQ3pCO0FBQ0Y7O0FBRUEsZ0JBQWdCO0FBQ2hCO0VBQ0U7SUFDRSwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7RUFDZjtBQUNGOztBQUVBLGtCQUFrQjs7QUFFbEIsd0NBQXdDO0FBQ3hDOzs7Ozs7Ozs7O0FBVUE7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4vKiBGb3IgdGhlIHNtYWxsZXN0IHNjcmVlbnMgJiBnbG9iYWwgdmFsdWVzICovXFxuOnJvb3Qge1xcbiAgLyogQ29sb3JzICovXFxuICAtLWNvbG9yLW1haW46ICNGN0MzMzE7XFxuICAtLWNvbG9yLXRleHQ6ICMyNDE1MTU7XFxuICAtLWNvbG9yLXNlY29uZGFyeTogI0Y3ODgyRjtcXG4gIC8qIEZvb3RlciAqL1xcbiAgLS1jb2xvci1mb290ZXItbWFpbjogIzNCM0IzQjtcXG4gIC0tY29sb3ItZm9vdGVyLXNlY29uZGFyeTogIzI0MjIyMDtcXG5cXG4gIC8qIFNoYXBlcyAqL1xcbiAgLS1jb2xvci1iZy1zaGFwZTogI0RDQzdBQTtcXG5cXG4gIC8qIFNjcmVlbiAqL1xcbiAgLS1jb250ZW50LW1heC13aWR0aDogMTUwMHB4O1xcbiAgLS1ib3JkZXItd2lkdGg6IDMwcHg7XFxuICAvKiBGb250cyAqL1xcbiAgLS1mb250LW1haW46ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgLS1mb250LXNlY29uZGFyeTogO1xcblxcbiAgLyogRm9udCBTaXplICovXFxuICAtLWZvbnQtc2l6ZS10aXRsZTogMmVtO1xcbiAgLS1mb250LXNpemUtcC10aXRsZTogMS41ZW07XFxuICAtLWZvbnQtc2l6ZS1zZWN0aW9uLXRpdGxlOiAyLjVlbTtcXG4gIC0tZm9udC1zaXplLXBhcmFncmFwaDogMS4yZW07XFxuICAtLWZvbnQtc2l6ZS1pbnB1dDogMS4xZW07XFxuICAtLWZvbnQtc2l6ZS1ub3RlOiAwLjhlbTtcXG4gIC0tZm9udC1zaXplLW5hdmlnYXRpb246IDEuNGVtO1xcbn1cXG5cXG4vKiBNb2JpbGUgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNDNlbSkge1xcbiAgOnJvb3Qge1xcbiAgLS1mb250LXNpemUtdGl0bGU6IDNlbTtcXG4gIC0tZm9udC1zaXplLXAtdGl0bGU6IDJlbTtcXG4gIC0tZm9udC1zaXplLXNlY3Rpb24tdGl0bGU6IDNlbTtcXG4gIC0tZm9udC1zaXplLXBhcmFncmFwaDogMS4zZW07XFxuICAtLWZvbnQtc2l6ZS1ub3RlOiAwLjllbTtcXG4gIC0tZm9udC1zaXplLW5hdmlnYXRpb246IDEuNWVtO1xcbiAgLS1ib3JkZXItd2lkdGg6IDYwcHg7XFxuICB9XFxufVxcblxcbi8qIFRhYmxldCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA2MmVtKSB7XFxuICA6cm9vdCB7XFxuICAtLWZvbnQtc2l6ZS10aXRsZTogNGVtO1xcbiAgLS1mb250LXNpemUtcC10aXRsZTogMmVtO1xcbiAgLS1mb250LXNpemUtc2VjdGlvbi10aXRsZTogM2VtO1xcbiAgLS1mb250LXNpemUtcGFyYWdyYXBoOiAxLjRlbTtcXG4gIC0tZm9udC1zaXplLW5vdGU6IDFlbTtcXG4gIC0tZm9udC1zaXplLW5hdmlnYXRpb246IDEuNmVtO1xcbiAgLS1ib3JkZXItd2lkdGg6IDcwcHg7XFxuICB9XFxufVxcblxcbi8qIERlc2t0b3AgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogODJlbSkge1xcbiAgOnJvb3Qge1xcbiAgLS1mb250LXNpemUtdGl0bGU6IDVlbTtcXG4gIC0tZm9udC1zaXplLXAtdGl0bGU6IDJlbTtcXG4gIC0tZm9udC1zaXplLXNlY3Rpb24tdGl0bGU6IDNlbTtcXG4gIC0tZm9udC1zaXplLXBhcmFncmFwaDogMS4zZW07XFxuICAtLWZvbnQtc2l6ZS1pbnB1dDogMS4zZW07XFxuICAtLWZvbnQtc2l6ZS1ub3RlOiAxLjJlbTtcXG4gIC0tZm9udC1zaXplLW5hdmlnYXRpb246IDEuM2VtO1xcbiAgLS1ib3JkZXItd2lkdGg6IDkwcHg7XFxuICB9XFxufVxcblxcbi8qIERlc2t0b3AgQmlnICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMmVtKSB7XFxuICA6cm9vdCB7XFxuICAtLWZvbnQtc2l6ZS10aXRsZTogNWVtO1xcbiAgLS1mb250LXNpemUtcC10aXRsZTogMi41ZW07XFxuICAtLWZvbnQtc2l6ZS1zZWN0aW9uLXRpdGxlOiA0ZW07XFxuICAtLWZvbnQtc2l6ZS1wYXJhZ3JhcGg6IDEuNWVtO1xcbiAgLS1mb250LXNpemUtbm90ZTogMS4yZW07XFxuICAtLWZvbnQtc2l6ZS1uYXZpZ2F0aW9uOiAxLjhlbTtcXG4gIC0tYm9yZGVyLXdpZHRoOiAxMjBweDtcXG4gIH1cXG5cXG59XFxuXFxuLmNvbnRlbnRfY29udGFpbmVyIHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAoIDIqIHZhcigtLWJvcmRlci13aWR0aCkpKTtcXG4gIG1hcmdpbjogMHB4IHZhcigtLWJvcmRlci13aWR0aCk7XFxuICBtYXgtd2lkdGg6IHZhcigtLWNvbnRlbnQtbWF4LXdpZHRoKTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ubm90ZSB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1ub3RlKTtcXG4gIG1hcmdpbjogMnB4IDBweDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1haW4pLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sIE94eWdlbixcXG4gICAgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qIEhpZGUgc2Nyb2xsYmFyIGZvciBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5kaXNhYmxlX3NlbGVjdCB7XFxuLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4tbW96LXVzZXItc2VsZWN0OiBub25lO1xcbi1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG51c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLyogTGFuZGluZyBQYWdlIFNsaWRlciAqL1xcbi5pbmRpY2F0b3JzIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIERlc2t0b3AgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogODJlbSkge1xcbiAgLmluZGljYXRvcnMge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcXG4gIH1cXG5cXG4gIC5pbmRpY2F0b3Ige1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWFyZ2luOiA2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3R0b206IDY1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICB9XFxuXFxuICAuaW5kaWNhdG9yLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgfVxcbn1cXG5cXG4vKiBEZXNrdG9wIEJpZyAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiAxMDJlbSkge1xcbiAgLmluZGljYXRvcnMge1xcbiAgICBtYXJnaW46IHZhcigtLWJvcmRlci13aWR0aCk7XFxuICB9XFxuXFxuICAuaW5kaWNhdG9yIHtcXG4gICAgbWFyZ2luOiA4cHg7XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gICAgYm90dG9tOiAxMDBweDtcXG4gIH1cXG59XFxuXFxuLyogRm9ybXVsYXIgY29uZiAqL1xcblxcbi8qIENoYW5nZSBBdXRvY29tcGxldGUgc3R5bGVzIGluIENocm9tZSovXFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsXFxudGV4dGFyZWE6LXdlYmtpdC1hdXRvZmlsbCxcXG50ZXh0YXJlYTotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxcbnRleHRhcmVhOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsXFxuc2VsZWN0Oi13ZWJraXQtYXV0b2ZpbGwsXFxuc2VsZWN0Oi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXFxuc2VsZWN0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xcblxcbn1cXG5cXG4qOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./shared/globals.css\n");

/***/ })

})