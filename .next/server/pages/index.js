module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_native_web_dist_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native-web/dist/exports/StyleSheet */ \"react-native-web/dist/exports/StyleSheet\");\n/* harmony import */ var react_native_web_dist_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web/dist/exports/Text */ \"react-native-web/dist/exports/Text\");\n/* harmony import */ var react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-native-web/dist/exports/View */ \"react-native-web/dist/exports/View\");\n/* harmony import */ var react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName=\"/home/bresnow/fltngmmth01/pages/index.js\";function App(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_3___default.a,{style:styles.container,__self:this,__source:{fileName:_jsxFileName,lineNumber:7,columnNumber:5}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_2___default.a,{style:styles.text,__self:this,__source:{fileName:_jsxFileName,lineNumber:8,columnNumber:7}},\"Welcome to Expo + Next.js \\uD83D\\uDC4B\"));}var styles=react_native_web_dist_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1___default.a.create({container:{flex:1,justifyContent:'center',alignItems:'center'},text:{fontSize:16}});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkFwcCIsInN0eWxlcyIsImNvbnRhaW5lciIsInRleHQiLCJTdHlsZVNoZWV0IiwiY3JlYXRlIiwiZmxleCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OzREQUllLFFBQVNBLElBQVQsRUFBZSxDQUM1QixNQUNFLDREQUFDLHlFQUFELEVBQU0sS0FBSyxDQUFFQyxNQUFNLENBQUNDLFNBQXBCLDJFQUNFLDJEQUFDLHlFQUFELEVBQU0sS0FBSyxDQUFFRCxNQUFNLENBQUNFLElBQXBCLG9IQURGLENBREYsQ0FLRCxDQUVELEdBQU1GLE9BQU0sQ0FBR0csK0VBQVUsQ0FBQ0MsTUFBWCxDQUFrQixDQUMvQkgsU0FBUyxDQUFFLENBQ1RJLElBQUksQ0FBRSxDQURHLENBRVRDLGNBQWMsQ0FBRSxRQUZQLENBR1RDLFVBQVUsQ0FBRSxRQUhILENBRG9CLENBTS9CTCxJQUFJLENBQUUsQ0FDSk0sUUFBUSxDQUFFLEVBRE4sQ0FOeUIsQ0FBbEIsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGdlbmVyYXRlZDogQGV4cG8vbmV4dC1hZGFwdGVyQDIuMS40NVxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN0eWxlU2hlZXQsIFRleHQsIFZpZXcgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50ZXh0fT5XZWxjb21lIHRvIEV4cG8gKyBOZXh0LmpzIPCfkYs8L1RleHQ+XG4gICAgPC9WaWV3PlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIGNvbnRhaW5lcjoge1xuICAgIGZsZXg6IDEsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICB9LFxuICB0ZXh0OiB7XG4gICAgZm9udFNpemU6IDE2LFxuICB9LFxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-native-web/dist/exports/StyleSheet":
/*!***********************************************************!*\
  !*** external "react-native-web/dist/exports/StyleSheet" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-native-web/dist/exports/StyleSheet\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1uYXRpdmUtd2ViL2Rpc3QvZXhwb3J0cy9TdHlsZVNoZWV0XCI/M2JlZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1uYXRpdmUtd2ViL2Rpc3QvZXhwb3J0cy9TdHlsZVNoZWV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbmF0aXZlLXdlYi9kaXN0L2V4cG9ydHMvU3R5bGVTaGVldFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-native-web/dist/exports/StyleSheet\n");

/***/ }),

/***/ "react-native-web/dist/exports/Text":
/*!*****************************************************!*\
  !*** external "react-native-web/dist/exports/Text" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-native-web/dist/exports/Text\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1uYXRpdmUtd2ViL2Rpc3QvZXhwb3J0cy9UZXh0XCI/YzQzYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1uYXRpdmUtd2ViL2Rpc3QvZXhwb3J0cy9UZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbmF0aXZlLXdlYi9kaXN0L2V4cG9ydHMvVGV4dFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-native-web/dist/exports/Text\n");

/***/ }),

/***/ "react-native-web/dist/exports/View":
/*!*****************************************************!*\
  !*** external "react-native-web/dist/exports/View" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-native-web/dist/exports/View\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1uYXRpdmUtd2ViL2Rpc3QvZXhwb3J0cy9WaWV3XCI/MDEyMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1uYXRpdmUtd2ViL2Rpc3QvZXhwb3J0cy9WaWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbmF0aXZlLXdlYi9kaXN0L2V4cG9ydHMvVmlld1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-native-web/dist/exports/View\n");

/***/ })

/******/ });