"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcapstonemodule2"] = self["webpackChunkcapstonemodule2"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Crete+Round:ital@0;1&family=Inter:wght@200;300;400;500;600;700&family=Poppins:wght@200;300;600;800&family=Roboto:wght@700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  font-family: 'Poppins', serif;\\n  margin: 0%;\\n}\\n\\n.strDiv {\\n  /* margin: 1%; */\\n  display: flex;\\n  justify-content: space-between;\\n  font-weight: bold;\\n  font-size: large;\\n}\\n\\n.likeDiv {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  margin-bottom: 0%;\\n  padding-bottom: 0%;\\n}\\n\\n.meals-menu {\\n  display: flex;\\n  flex-wrap: wrap;\\n  gap: 1rem;\\n  justify-content: center;\\n}\\n\\n.mealItem {\\n  width: 27%;\\n  display: flex;\\n  flex-direction: column;\\n  border-radius: 2%;\\n  padding: 2rem;\\n  background: linear-gradient(rgb(255, 0, 0), rgb(231, 231, 0, 0.7));\\n}\\n\\n.thumb {\\n  height: 300px;\\n  width: 300px;\\n  border-radius: 5%;\\n  align-self: center;\\n  margin-top: 1%;\\n  margin-bottom: 2%;\\n}\\n\\n.imgLike {\\n  height: 20px;\\n}\\n\\n.imgLike:hover {\\n  filter: invert(8%) sepia(98%) saturate(6374%) hue-rotate(246deg) brightness(111%) contrast(147%);\\n}\\n\\n.imgLike:active {\\n  filter: invert(42%) sepia(98%) saturate(7352%) hue-rotate(354deg) brightness(98%) contrast(124%);\\n}\\n\\np {\\n  margin: 0%;\\n  font-size: 14px;\\n}\\n\\nspan {\\n  margin: 4%;\\n  font-size: 24px;\\n}\\n\\n.hide {\\n  display: none;\\n}\\n\\n.buttonDiv {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.button {\\n  background-color: rgba(255, 123, 0, 0.616);\\n  border: 1px solid black;\\n  border-radius: 3px;\\n  width: 40%;\\n  margin: 2%;\\n  font-weight: bold;\\n  font-size: 14px;\\n  text-align: center;\\n  margin-top: 5%;\\n  margin-bottom: 5%;\\n  cursor: pointer;\\n}\\n\\n.button:hover {\\n  background-color: rgba(208, 255, 0, 0.3);\\n  transition: 1s;\\n}\\n\\n#submit {\\n  font-family: 'Poppins', serif;\\n  font-weight: lighter;\\n  cursor: pointer;\\n}\\n\\n.open {\\n  background-color: rgba(3, 0, 0, 0.9);\\n  position: fixed;\\n  left: 0;\\n  top: 0;\\n  bottom: 0;\\n  right: 0;\\n  display: none;\\n}\\n\\n.close {\\n  margin-left: 74.5%;\\n  margin-top: 3.5%;\\n  position: fixed;\\n  border-radius: 5px;\\n}\\n\\n.comments-board {\\n  padding: 5px;\\n  margin: 3% auto;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: 1fr 1fr;\\n  width: 700px;\\n  height: 565px;\\n  background-color: rgb(255, 0, 0, 0.9);\\n  border-radius: 10px;\\n}\\n\\n.comments-board #imgThumb {\\n  width: 400px;\\n  height: 400px;\\n  border-radius: 5%;\\n  order: -1;\\n  margin: 0%;\\n}\\n\\n.comments-board button {\\n  width: 25%;\\n  padding: 1% 0%;\\n  border-radius: 5px;\\n  margin-left: 10%;\\n}\\n\\n.comments-board h2,\\nh4 {\\n  margin: 10% 10%;\\n}\\n\\n.comments-board h2 {\\n  font-size: 30px;\\n}\\n\\n.comments-board h4 {\\n  font-size: 14px;\\n}\\n\\n.comments-board input {\\n  margin: 1% 10%;\\n  width: 60%;\\n  height: 20px;\\n  border-radius: 5px;\\n  padding: 0%;\\n}\\n\\n.comments-board #comment {\\n  height: 70px;\\n}\\n\\n.divComments {\\n  display: flex;\\n  margin-top: 3%;\\n  border-radius: 5px;\\n  background-color: white;\\n  width: 175%;\\n  overflow-x: auto;\\n  transition: 0.5s;\\n}\\n\\n.comment {\\n  margin: 0.8px;\\n  padding: 2px;\\n  border-radius: 5px;\\n  background-color: rgb(206, 121, 138, 0.4);\\n}\\n\\n.imgCancel {\\n  height: 20px;\\n  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(282deg) brightness(104%) contrast(106%);\\n  cursor: pointer;\\n}\\n\\nform {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.exhibitionText {\\n  height: 150px;\\n}\\n\\n.nav {\\n  display: flex;\\n  margin: auto 2rem;\\n}\\n\\n#logo-nav {\\n  display: flex;\\n  gap: 2rem;\\n}\\n\\n.links-nav {\\n  display: flex;\\n  gap: 10rem;\\n  list-style: none;\\n  align-items: center;\\n  margin: auto;\\n}\\n\\na {\\n  font-size: 1.2rem;\\n  text-decoration: none;\\n  color: #000;\\n}\\n\\nfooter {\\n  margin-top: 2rem;\\n  background-color: #ffd800;\\n  padding: 2rem;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstonemodule2/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://capstonemodule2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://capstonemodule2/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://capstonemodule2/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://capstonemodule2/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://capstonemodule2/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://capstonemodule2/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://capstonemodule2/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://capstonemodule2/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://capstonemodule2/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_mealUI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/mealUI.js */ \"./src/modules/mealUI.js\");\n\n\n\n(0,_modules_mealUI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://capstonemodule2/./src/index.js?");

/***/ }),

/***/ "./src/modules/commentCard.js":
/*!************************************!*\
  !*** ./src/modules/commentCard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentCard = (name, date, comment) => {\n  const comments = document.querySelector('.divComments');\n  const div = document.createElement('div');\n  div.className = 'comment';\n  div.innerHTML = `<h5>${name}</h5><h6>${comment}</h6><h6>${date}</h6>`;\n  comments.appendChild(div);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCard);\n\n//# sourceURL=webpack://capstonemodule2/./src/modules/commentCard.js?");

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentCounter = () => {\n  const commentCount = document.getElementsByClassName('comment').length;\n  return commentCount;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);\n\n//# sourceURL=webpack://capstonemodule2/./src/modules/commentCounter.js?");

/***/ }),

/***/ "./src/modules/commentUI.js":
/*!**********************************!*\
  !*** ./src/modules/commentUI.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commentsCard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentsCard.js */ \"./src/modules/commentsCard.js\");\n/* harmony import */ var _getMeals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getMeals.js */ \"./src/modules/getMeals.js\");\n\n\n\nconst commentUI = async (idMeal) => {\n  const data = await (0,_getMeals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  data.meals.forEach((meal) => {\n    if (meal.idMeal === idMeal) {\n      (0,_commentsCard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(meal.strMeal, meal.strTags, meal.strMealThumb, meal.idMeal, meal.strArea);\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentUI);\n\n//# sourceURL=webpack://capstonemodule2/./src/modules/commentUI.js?");

/***/ }),

/***/ "./src/modules/commentary.js":
/*!***********************************!*\
  !*** ./src/modules/commentary.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComments.js */ \"./src/modules/getComments.js\");\n/* harmony import */ var _commentCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentCard.js */ \"./src/modules/commentCard.js\");\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/commentCounter.js\");\n\n\n\n\nconst commentary = async (idMeal) => {\n  const counter = document.querySelector('.divCounter');\n  const div = document.createElement('div');\n  div.className = 'counting';\n  const data = await (0,_getComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(idMeal);\n  data.forEach((comment) => {\n    (0,_commentCard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(comment.username, comment.creation_date, comment.comment);\n  });\n  counter.innerHTML = '';\n  div.innerHTML = `<h4></h4><h4>Comments(${(0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()})</h4>`;\n  counter.appendChild(div);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentary);\n\n//# sourceURL=webpack://capstonemodule2/./src/modules/commentary.js?");

/***/ }),

/***/ "./src/modules/commentsCard.js":
/*!*************************************!*\
  !*** ./src/modules/commentsCard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _postComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postComment.js */ \"./src/modules/postComment.js\");\n/* harmony import */ var _commentary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentary.js */ \"./src/modules/commentary.js\");\n\n\n\nconst commentsCard = (title, tag, imageThumb, id, area) => {\n  const commentsBoard = document.querySelector('.comments-board');\n\n  const imgThumb = document.createElement('img');\n  imgThumb.id = 'imgThumb';\n  imgThumb.src = imageThumb;\n\n  const form = document.createElement('form');\n\n  const divText = document.createElement('div');\n  divText.className = 'divText';\n  const divCounter = document.createElement('div');\n  divCounter.className = 'divCounter';\n  const divTable = document.createElement('div');\n  divTable.className = 'divComments';\n\n  if (!tag) {\n    tag = '';\n  }\n\n  divText.innerHTML = `<h2>${title}</h2><h4>${area} ${tag}</h4>`;\n\n  const inputName = document.createElement('input');\n  inputName.id = 'name';\n  inputName.className = 'remove';\n  inputName.placeholder = 'Your Name';\n  inputName.required = true;\n\n  const inputComment = document.createElement('input');\n  inputComment.id = 'comment';\n  inputComment.placeholder = 'Your Insights';\n  inputComment.required = true;\n\n  const submitButton = document.createElement('button');\n  submitButton.id = 'submit';\n  submitButton.textContent = 'SUBMIT';\n\n  const inputs = [inputName, inputComment, submitButton];\n\n  for (let i = 0; i < inputs.length; i += 1) {\n    form.appendChild(inputs[i]);\n  }\n\n  commentsBoard.appendChild(imgThumb);\n  commentsBoard.appendChild(divText);\n  divText.appendChild(form);\n  divText.appendChild(divCounter);\n  commentsBoard.appendChild(divTable);\n  (0,_commentary_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id);\n\n  form.addEventListener('submit', (event) => {\n    event.preventDefault();\n    const userName = document.getElementById('name');\n    const comment = document.getElementById('comment');\n    (0,_postComment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(userName.value, comment.value, id);\n    userName.value = 'Please Wait';\n    comment.value = 'Please Wait';\n    setTimeout(() => {\n      userName.value = '';\n      comment.value = '';\n      divTable.innerHTML = '';\n      (0,_commentary_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id);\n    }, 2000);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsCard);\n\n//# sourceURL=webpack://capstonemodule2/./src/modules/commentsCard.js?");

/***/ }),

/***/ "./src/modules/getComments.js":
/*!************************************!*\
  !*** ./src/modules/getComments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getComments = async (idMeal) => {\n  let url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ooCKDNVhVwx5nuC5j8LT/comments?item_id=';\n  url += idMeal;\n  const response = await fetch(url);\n  const data = await response.json(url);\n  return data;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);\n\n//# sourceURL=webpack://capstonemodule2/./src/modules/getComments.js?");

/***/ }),

/***/ "./src/modules/getMeals.js":
/*!*********************************!*\
  !*** ./src/modules/getMeals.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';\n\nconst getMeals = async () => {\n  const response = await fetch(URL);\n  const data = await response.json();\n  return data;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMeals);\n\n//# sourceURL=webpack://capstonemodule2/./src/modules/getMeals.js?");

/***/ }),

/***/ "./src/modules/mealCard.js":
/*!*********************************!*\
  !*** ./src/modules/mealCard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_heart_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/heart.svg */ \"./src/images/heart.svg\");\n/* harmony import */ var _postLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postLike.js */ \"./src/modules/postLike.js\");\n/* harmony import */ var _images_x_circle_fill_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/x-circle-fill.svg */ \"./src/images/x-circle-fill.svg\");\n/* harmony import */ var _commentUI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commentUI.js */ \"./src/modules/commentUI.js\");\n\n\n\n\n\nconst myCancel = new Image();\nmyCancel.src = _images_x_circle_fill_svg__WEBPACK_IMPORTED_MODULE_2__;\nmyCancel.classList = ('imgCancel');\n\nconst myLike = new Image();\nmyLike.src = _images_heart_svg__WEBPACK_IMPORTED_MODULE_0__;\nmyLike.classList = 'imgLike';\n\nconst mealCard = (title, id, imageId, likeNum) => {\n  const board = document.querySelector('.meals-menu');\n\n  const div = document.createElement('div');\n  div.className = 'mealItem';\n  const strDiv = document.createElement('div');\n  strDiv.className = 'strDiv';\n  const likeDiv = document.createElement('div');\n  likeDiv.className = 'likeDiv';\n  const buttonDiv = document.createElement('div');\n  buttonDiv.className = 'buttonDiv';\n\n  const buttonReservation = document.createElement('div');\n  buttonReservation.className = 'button';\n\n  const buttonComment = document.createElement('div');\n  buttonComment.className = 'button';\n\n  div.innerHTML = `<img class='thumb' src='${imageId}'>`;\n  strDiv.innerHTML = `<span>${title}</span>`;\n  likeDiv.innerHTML = `<span class='hide'>${id}</span><img class='imgLike' src='${_images_heart_svg__WEBPACK_IMPORTED_MODULE_0__}'><div class=\"stop\">${likeNum}</div><p class=\"stop\">Likes</p>`;\n  buttonReservation.innerHTML = `<div>Reservations</div><span class='hide'>${id}</span>`;\n  buttonComment.innerHTML = `<div>Comments</div><span class='hide'>${id}</span>`;\n\n  strDiv.appendChild(likeDiv);\n  div.appendChild(strDiv);\n  buttonDiv.appendChild(buttonComment);\n  buttonDiv.appendChild(buttonReservation);\n  div.appendChild(buttonDiv);\n  board.appendChild(div);\n\n  likeDiv.addEventListener('click', (e) => {\n    if (e.target.classList.contains('stop')) {\n      return;\n    }\n    (0,_postLike_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e.target.previousElementSibling.textContent);\n    const sumlike = e.target.nextElementSibling.textContent;\n    e.target.nextElementSibling.textContent = parseInt(sumlike, 10) + 1;\n  });\n\n  const overlay = document.querySelector('.open');\n  const cancel = document.querySelector('.close');\n  cancel.appendChild(myCancel);\n\n  buttonComment.addEventListener('click', (e) => {\n    overlay.style.display = 'block';\n    (0,_commentUI_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(e.target.nextElementSibling.textContent);\n  });\n\n  cancel.addEventListener('click', () => {\n    overlay.style.display = 'none';\n    document.querySelector('.comments-board').innerHTML = '';\n  });\n\n  cancel.addEventListener('click', () => {\n    overlay.style.display = 'none';\n    document.querySelector('.comments-board').innerHTML = '';\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mealCard);\n\n//# sourceURL=webpack://capstonemodule2/./src/modules/mealCard.js?");

/***/ }),

/***/ "./src/modules/mealCounter.js":
/*!************************************!*\
  !*** ./src/modules/mealCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mealCounter = () => {\n  const counterContainer = document.getElementById('meals-counter');\n  const mealCount = document.getElementsByClassName('mealItem').length;\n  counterContainer.textContent = `(${mealCount})`;\n  return mealCount;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mealCounter);\n\n//# sourceURL=webpack://capstonemodule2/./src/modules/mealCounter.js?");

/***/ }),

/***/ "./src/modules/mealUI.js":
/*!*******************************!*\
  !*** ./src/modules/mealUI.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getMeals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getMeals.js */ \"./src/modules/getMeals.js\");\n/* harmony import */ var _mealCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mealCard.js */ \"./src/modules/mealCard.js\");\n/* harmony import */ var _mealCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mealCounter.js */ \"./src/modules/mealCounter.js\");\n\n\n\n\nconst URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ooCKDNVhVwx5nuC5j8LT/likes/';\n\nconst mealUI = async () => {\n  const response = await fetch(URL);\n  const likes = await response.json();\n\n  const data = await (0,_getMeals_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  data.meals.forEach((meal) => {\n    let likeNum = 0;\n    likes.forEach((item) => {\n      if (item.item_id === meal.idMeal) {\n        likeNum = item.likes;\n      }\n    });\n    (0,_mealCard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(meal.strMeal, meal.idMeal, meal.strMealThumb, likeNum, meal.strTags);\n  });\n  (0,_mealCounter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mealUI);\n\n//# sourceURL=webpack://capstonemodule2/./src/modules/mealUI.js?");

/***/ }),

/***/ "./src/modules/postComment.js":
/*!************************************!*\
  !*** ./src/modules/postComment.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ooCKDNVhVwx5nuC5j8LT/comments';\n\nconst postComment = async (name, comment, idMeal) => {\n  const response = await fetch(URL, {\n    method: 'POST',\n    body: JSON.stringify({\n      // eslint-disable-next-line\n      item_id: idMeal,\n      // eslint-disable-next-line\n      username: name,\n      // eslint-disable-next-line\n      comment: comment,\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  });\n  const data = await response.json();\n  return data;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postComment);\n\n//# sourceURL=webpack://capstonemodule2/./src/modules/postComment.js?");

/***/ }),

/***/ "./src/modules/postLike.js":
/*!*********************************!*\
  !*** ./src/modules/postLike.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ooCKDNVhVwx5nuC5j8LT/likes/';\n\nconst postLike = async (idMeal) => {\n  const response = await fetch(URL, {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: idMeal,\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  });\n  const data = await response.json();\n  return data;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postLike);\n\n//# sourceURL=webpack://capstonemodule2/./src/modules/postLike.js?");

/***/ }),

/***/ "./src/images/heart.svg":
/*!******************************!*\
  !*** ./src/images/heart.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"65dbf0248ce60eeeb693.svg\";\n\n//# sourceURL=webpack://capstonemodule2/./src/images/heart.svg?");

/***/ }),

/***/ "./src/images/x-circle-fill.svg":
/*!**************************************!*\
  !*** ./src/images/x-circle-fill.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5d22680f86668e10574e.svg\";\n\n//# sourceURL=webpack://capstonemodule2/./src/images/x-circle-fill.svg?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);