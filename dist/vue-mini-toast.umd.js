(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("vue-mini-toast", [], factory);
	else if(typeof exports === 'object')
		exports["vue-mini-toast"] = factory();
	else
		root["vue-mini-toast"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "03b5":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.fade-enter-active[data-v-0d2e3ffc],.fade-leave-active[data-v-0d2e3ffc]{-webkit-transition:opacity .2s linear;transition:opacity .2s linear\n}\n.fade-enter[data-v-0d2e3ffc],.fade-leave-to[data-v-0d2e3ffc]{opacity:0\n}\n.slide-enter-active[data-v-0d2e3ffc],.slide-leave-active[data-v-0d2e3ffc]{-webkit-transition:-webkit-transform .1s linear;transition:-webkit-transform .1s linear;transition:transform .1s linear;transition:transform .1s linear, -webkit-transform .1s linear\n}\n.slide-enter[data-v-0d2e3ffc],.slide-leave-to[data-v-0d2e3ffc]{-webkit-transform:translateY(100%);transform:translateY(100%)\n}\n.alert_wrapper[data-v-0d2e3ffc]{position:fixed;top:0;left:0;z-index:99999;width:100vw;height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:rgba(0,0,0,.4)\n}\n.alert_cont[data-v-0d2e3ffc]{position:absolute;bottom:0;left:8px;width:calc(100% - 16px);text-align:center\n}\n.btn_list[data-v-0d2e3ffc]{border-radius:12px;overflow:hidden;background-color:#fff\n}\n.btn_list .title[data-v-0d2e3ffc]{padding:10px 0;font-size:14px;color:#999;border-bottom:1px solid #eee\n}\n.btn_list .btn_item[data-v-0d2e3ffc]{padding:12px 0;border-bottom:1px solid #eee\n}\n.btn_list .btn_item[data-v-0d2e3ffc]:last-child{border-bottom:none\n}\n.cancel[data-v-0d2e3ffc]{margin:8px 0;padding:12px 0;border-radius:12px;overflow:hidden;font-weight:700;background-color:#fff;color:#1f91f0\n}", ""]);

// exports


/***/ }),

/***/ "1eb2":
/***/ (function(module, exports, __webpack_require__) {

// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}


/***/ }),

/***/ "2350":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "338d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_style_index_0_id_1581663b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3ff8");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_style_index_0_id_1581663b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_style_index_0_id_1581663b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_style_index_0_id_1581663b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3ff8":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("926f");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("20d27c01", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "66df":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirm_vue_vue_type_style_index_0_id_1f6e0b6a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6e3b");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirm_vue_vue_type_style_index_0_id_1f6e0b6a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirm_vue_vue_type_style_index_0_id_1f6e0b6a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirm_vue_vue_type_style_index_0_id_1f6e0b6a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6e3b":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("a3d3");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("85e85194", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "8381":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionSheet_vue_vue_type_style_index_0_id_0d2e3ffc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d172");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionSheet_vue_vue_type_style_index_0_id_0d2e3ffc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionSheet_vue_vue_type_style_index_0_id_0d2e3ffc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionSheet_vue_vue_type_style_index_0_id_0d2e3ffc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "926f":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.fade-enter-active[data-v-1581663b],.fade-leave-active[data-v-1581663b]{-webkit-transition:opacity .2s linear;transition:opacity .2s linear\n}\n.fade-enter[data-v-1581663b],.fade-leave-to[data-v-1581663b]{opacity:0\n}\n.pop-enter-active[data-v-1581663b],.pop-leave-active[data-v-1581663b]{-webkit-transition:all .06s linear;transition:all .06s linear\n}\n.pop-enter[data-v-1581663b],.pop-leave-to[data-v-1581663b]{-webkit-transform:scale(0);transform:scale(0);opacity:0\n}\n.alert_wrapper[data-v-1581663b]{position:fixed;top:0;left:0;z-index:99999;width:100vw;height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:rgba(0,0,0,.4)\n}\n.alert_cont[data-v-1581663b]{width:72vw;text-align:center;font-size:14px;border-radius:12px;overflow:hidden;background-color:#fff;color:#333\n}\n.alert_cont .cont[data-v-1581663b]{padding:15px 10px;border-bottom:1px solid #eee\n}\n.alert_cont .cont .title[data-v-1581663b]{padding-bottom:8px;font-size:17px;font-weight:700\n}\n.alert_cont .btn_list[data-v-1581663b]{display:-webkit-box;display:-ms-flexbox;display:flex\n}\n.alert_cont .btn_list .btn_item[data-v-1581663b]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;padding:9px 0;font-size:16px\n}", ""]);

// exports


/***/ }),

/***/ "a3d3":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.fade-enter-active[data-v-1f6e0b6a],.fade-leave-active[data-v-1f6e0b6a]{-webkit-transition:opacity .2s linear;transition:opacity .2s linear\n}\n.fade-enter[data-v-1f6e0b6a],.fade-leave-to[data-v-1f6e0b6a]{opacity:0\n}\n.pop-enter-active[data-v-1f6e0b6a],.pop-leave-active[data-v-1f6e0b6a]{-webkit-transition:all .06s linear;transition:all .06s linear\n}\n.pop-enter[data-v-1f6e0b6a],.pop-leave-to[data-v-1f6e0b6a]{-webkit-transform:scale(0);transform:scale(0);opacity:0\n}\n.alert_wrapper[data-v-1f6e0b6a]{position:fixed;top:0;left:0;z-index:99999;width:100vw;height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:rgba(0,0,0,.4)\n}\n.alert_cont[data-v-1f6e0b6a]{width:72vw;text-align:center;font-size:14px;border-radius:12px;overflow:hidden;background-color:#fff;color:#333\n}\n.alert_cont .cont[data-v-1f6e0b6a]{padding:15px 10px;border-bottom:1px solid #eee\n}\n.alert_cont .cont .title[data-v-1f6e0b6a]{padding-bottom:8px;font-size:17px;font-weight:700\n}\n.alert_cont .btn_list[data-v-1f6e0b6a]{display:-webkit-box;display:-ms-flexbox;display:flex\n}\n.alert_cont .btn_list .btn_item[data-v-1f6e0b6a]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;padding:9px 0;border-right:1px solid #eee;font-size:16px\n}\n.alert_cont .btn_list .btn_item[data-v-1f6e0b6a]:last-child{border-right:none\n}", ""]);

// exports


/***/ }),

/***/ "bb92":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("efaa");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("c92d96f4", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "d172":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("03b5");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("f42f8ca8", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "d503":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Popup_vue_vue_type_style_index_0_id_456d7aa9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bb92");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Popup_vue_vue_type_style_index_0_id_456d7aa9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Popup_vue_vue_type_style_index_0_id_456d7aa9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Popup_vue_vue_type_style_index_0_id_456d7aa9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "efaa":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.fade-enter-active[data-v-456d7aa9],.fade-leave-active[data-v-456d7aa9]{-webkit-transition:all .2s linear;transition:all .2s linear\n}\n.fade-enter[data-v-456d7aa9],.fade-leave-to[data-v-456d7aa9]{opacity:0\n}\n.pop_cont[data-v-456d7aa9]{position:fixed;left:50%;z-index:99999;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);max-width:86vw;padding:6px 12px;border-radius:4px;font-size:14px\n}\n.pop_cont.middle[data-v-456d7aa9]{top:50%\n}\n.pop_cont.top[data-v-456d7aa9]{top:10%\n}\n.pop_cont.bottom[data-v-456d7aa9]{top:90%\n}\n.pop_cont.black[data-v-456d7aa9]{background-color:rgba(0,0,0,.6);color:#fff\n}\n.pop_cont.light[data-v-456d7aa9]{border:1px solid #999;background-color:hsla(0,0%,100%,.6);color:#888\n}", ""]);

// exports


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
var setPublicPath = __webpack_require__("1eb2");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/objectSpread.js

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/typeof.js
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"5cff126b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/Popup.vue?vue&type=template&id=456d7aa9&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShow),expression:"isShow"}],class:("pop_cont " + (_vm.option.align) + " " + (_vm.option.theme))},[_vm._v(_vm._s(_vm.msg || _vm.option.msg))])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/Popup.vue?vue&type=template&id=456d7aa9&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/Popup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var Popupvue_type_script_lang_js_ = ({
  name: "popup",
  data: function data() {
    return {
      option: {
        msg: '',
        align: 'middle',
        theme: 'black',
        delay: 2000
      },
      msg: '',
      isShow: false
    };
  },
  watch: {
    isShow: function isShow(val) {
      var _this = this;

      if (val) {
        setTimeout(function () {
          _this.isShow = false;

          _this.callback();
        }, this.option.delay);
      }
    }
  },
  methods: {
    callback: function callback() {}
  }
});
// CONCATENATED MODULE: ./src/lib/Popup.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_Popupvue_type_script_lang_js_ = (Popupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/lib/Popup.vue?vue&type=style&index=0&id=456d7aa9&scoped=true&lang=css&
var Popupvue_type_style_index_0_id_456d7aa9_scoped_true_lang_css_ = __webpack_require__("d503");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/lib/Popup.vue






/* normalize component */

var component = normalizeComponent(
  lib_Popupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "456d7aa9",
  null
  
)

component.options.__file = "Popup.vue"
/* harmony default export */ var Popup = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"5cff126b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/Alert.vue?vue&type=template&id=1581663b&scoped=true&
var Alertvue_type_template_id_1581663b_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShow),expression:"isShow"}],staticClass:"alert_wrapper"},[_c('transition',{attrs:{"name":"pop"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShow),expression:"isShow"}],staticClass:"alert_cont"},[_c('div',{staticClass:"cont"},[_c('div',{staticClass:"title"},[_vm._v(_vm._s(_vm.option.title))]),_c('p',{staticClass:"msg"},[_vm._v(_vm._s(_vm.option.msg))])]),_c('div',{staticClass:"btn_list"},[_c('div',{staticClass:"btn_item",style:({color: _vm.option.btnColor}),on:{"click":function($event){_vm.isShow=false;_vm.callback()}}},[_vm._v(_vm._s(_vm.option.btn))])])])])],1)])}
var Alertvue_type_template_id_1581663b_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/Alert.vue?vue&type=template&id=1581663b&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/Alert.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Alertvue_type_script_lang_js_ = ({
  name: "alert",
  data: function data() {
    return {
      option: {
        title: '提示',
        msg: '确定操作？',
        btn: '确定',
        btnColor: '#1f91f0'
      },
      isShow: false
    };
  },
  methods: {
    callback: function callback() {}
  }
});
// CONCATENATED MODULE: ./src/lib/Alert.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_Alertvue_type_script_lang_js_ = (Alertvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/lib/Alert.vue?vue&type=style&index=0&id=1581663b&scoped=true&lang=css&
var Alertvue_type_style_index_0_id_1581663b_scoped_true_lang_css_ = __webpack_require__("338d");

// CONCATENATED MODULE: ./src/lib/Alert.vue






/* normalize component */

var Alert_component = normalizeComponent(
  lib_Alertvue_type_script_lang_js_,
  Alertvue_type_template_id_1581663b_scoped_true_render,
  Alertvue_type_template_id_1581663b_scoped_true_staticRenderFns,
  false,
  null,
  "1581663b",
  null
  
)

Alert_component.options.__file = "Alert.vue"
/* harmony default export */ var Alert = (Alert_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"5cff126b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/Confirm.vue?vue&type=template&id=1f6e0b6a&scoped=true&
var Confirmvue_type_template_id_1f6e0b6a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShow),expression:"isShow"}],staticClass:"alert_wrapper"},[_c('transition',{attrs:{"name":"pop"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShow),expression:"isShow"}],staticClass:"alert_cont"},[_c('div',{staticClass:"cont"},[_c('div',{staticClass:"title"},[_vm._v(_vm._s(_vm.option.title))]),_c('p',{staticClass:"msg"},[_vm._v(_vm._s(_vm.option.msg))])]),_c('div',{staticClass:"btn_list"},_vm._l((_vm.option.btn),function(item,index){return _c('div',{key:index,staticClass:"btn_item",style:({color: _vm.option.btnColor[index]}),on:{"click":function($event){_vm.isShow=false;_vm.callback(index)}}},[_vm._v(_vm._s(item))])}))])])],1)])}
var Confirmvue_type_template_id_1f6e0b6a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/Confirm.vue?vue&type=template&id=1f6e0b6a&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/Confirm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Confirmvue_type_script_lang_js_ = ({
  name: "confirm",
  data: function data() {
    return {
      option: {
        title: '提示',
        msg: '确定操作？',
        btn: ['确定', '取消'],
        btnColor: ['#1f91f0', '#1f91f0']
      },
      isShow: false
    };
  },
  methods: {
    callback: function callback(index) {}
  }
});
// CONCATENATED MODULE: ./src/lib/Confirm.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_Confirmvue_type_script_lang_js_ = (Confirmvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/lib/Confirm.vue?vue&type=style&index=0&id=1f6e0b6a&scoped=true&lang=css&
var Confirmvue_type_style_index_0_id_1f6e0b6a_scoped_true_lang_css_ = __webpack_require__("66df");

// CONCATENATED MODULE: ./src/lib/Confirm.vue






/* normalize component */

var Confirm_component = normalizeComponent(
  lib_Confirmvue_type_script_lang_js_,
  Confirmvue_type_template_id_1f6e0b6a_scoped_true_render,
  Confirmvue_type_template_id_1f6e0b6a_scoped_true_staticRenderFns,
  false,
  null,
  "1f6e0b6a",
  null
  
)

Confirm_component.options.__file = "Confirm.vue"
/* harmony default export */ var Confirm = (Confirm_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"5cff126b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/ActionSheet.vue?vue&type=template&id=0d2e3ffc&scoped=true&
var ActionSheetvue_type_template_id_0d2e3ffc_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShow),expression:"isShow"}],staticClass:"alert_wrapper"},[_c('transition',{attrs:{"name":"slide"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShow),expression:"isShow"}],staticClass:"alert_cont"},[_c('div',{staticClass:"btn_list"},[(_vm.option.title.length)?_c('div',{staticClass:"title"},[_vm._v(_vm._s(_vm.option.title))]):_vm._e(),_vm._l((_vm.option.btn),function(item,index){return _c('div',{key:index,staticClass:"btn_item",style:({color: _vm.option.btnColor[index]}),on:{"click":function($event){_vm.isShow=false;_vm.callback(item, index)}}},[_vm._v(_vm._s(item)+"\n                    ")])})],2),_c('div',{staticClass:"cancel",on:{"click":function($event){_vm.isShow=false}}},[_vm._v("取消")])])])],1)])}
var ActionSheetvue_type_template_id_0d2e3ffc_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/ActionSheet.vue?vue&type=template&id=0d2e3ffc&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/ActionSheet.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ActionSheetvue_type_script_lang_js_ = ({
  name: "actionSheet",
  data: function data() {
    return {
      option: {
        title: '',
        btn: ['选项1', '选项2'],
        btnColor: ['#3e9af0', '#3e9af0']
      },
      isShow: false
    };
  },
  methods: {
    callback: function callback(item, index) {}
  }
});
// CONCATENATED MODULE: ./src/lib/ActionSheet.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_ActionSheetvue_type_script_lang_js_ = (ActionSheetvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/lib/ActionSheet.vue?vue&type=style&index=0&id=0d2e3ffc&scoped=true&lang=css&
var ActionSheetvue_type_style_index_0_id_0d2e3ffc_scoped_true_lang_css_ = __webpack_require__("8381");

// CONCATENATED MODULE: ./src/lib/ActionSheet.vue






/* normalize component */

var ActionSheet_component = normalizeComponent(
  lib_ActionSheetvue_type_script_lang_js_,
  ActionSheetvue_type_template_id_0d2e3ffc_scoped_true_render,
  ActionSheetvue_type_template_id_0d2e3ffc_scoped_true_staticRenderFns,
  false,
  null,
  "0d2e3ffc",
  null
  
)

ActionSheet_component.options.__file = "ActionSheet.vue"
/* harmony default export */ var ActionSheet = (ActionSheet_component.exports);
// CONCATENATED MODULE: ./src/lib/index.js






var lib_plugin = {
  install: function install(Vue) {
    var popup = new (Vue.extend(Popup))();
    var alert = new (Vue.extend(Alert))();
    var confirm = new (Vue.extend(Confirm))();
    var actionSheet = new (Vue.extend(ActionSheet))();
    document.getElementsByTagName('body')[0].appendChild(popup.$mount().$el);
    document.getElementsByTagName('body')[0].appendChild(alert.$mount().$el);
    document.getElementsByTagName('body')[0].appendChild(confirm.$mount().$el);
    document.getElementsByTagName('body')[0].appendChild(actionSheet.$mount().$el);

    Vue.prototype.$pop = function (option, callback) {
      if (typeof option === 'string') {
        popup.msg = option;
      } else if (_typeof(option) === 'object') {
        popup.option = _objectSpread({}, popup.option, option);
      }

      popup.callback = function () {
        callback && callback();
      };

      popup.isShow = true;
    };

    Vue.prototype.$alert = function (option, callback) {
      if (_typeof(option) === 'object') {
        alert.option = _objectSpread({}, alert.option, option);
      }

      alert.callback = function () {
        callback && callback();
      };

      alert.isShow = true;
    };

    Vue.prototype.$confirm = function (option, callback) {
      if (_typeof(option) === 'object') {
        confirm.option = _objectSpread({}, confirm.option, option);
      }

      confirm.callback = function (index) {
        callback && callback(index);
      };

      confirm.isShow = true;
    };

    Vue.prototype.$actionSheet = function (option, callback) {
      if (_typeof(option) === 'object') {
        actionSheet.option = _objectSpread({}, actionSheet.option, option);
      }

      actionSheet.callback = function (item, index) {
        callback && callback(item, index);
      };

      actionSheet.isShow = true;
    };
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(lib_plugin);
}

/* harmony default export */ var lib = (lib_plugin);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (lib);



/***/ })

/******/ });
});
//# sourceMappingURL=vue-mini-toast.umd.js.map