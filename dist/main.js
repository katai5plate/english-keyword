/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.tsx","libs"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var keywords = __webpack_require__(/*! ./keywords.json */ "./src/keywords.json");
var _ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var SelectForm_1 = __webpack_require__(/*! ./components/organisms/SelectForm */ "./src/components/organisms/SelectForm.tsx");
var keywordList = keywords.reduce(function (p, _a) {
    var spel = _a.spel, c = __rest(_a, ["spel"]);
    return __spreadArrays(p, spel.map(function (v) { return (__assign(__assign({}, c), { spel: v.replace(/-/, ""), category: v.match(/-$/) ? "prefix" : v.match(/^-/) ? "suffix" : "root" })); }));
}, []);
var FC = function () {
    console.log(keywordList);
    var data = React.useState(keywordList)[0];
    return (React.createElement(React.Fragment, null,
        React.createElement(_.Grid, { container: true, alignItems: "center", justify: "center", style: { minHeight: "100vh" } },
            React.createElement(SelectForm_1.default, { text: "Prefix", list: data
                    .filter(function (_a) {
                    var category = _a.category;
                    return category === "prefix";
                })
                    .map(function (_a) {
                    var spel = _a.spel;
                    return spel;
                }) }),
            React.createElement(SelectForm_1.default, { text: "Root", list: data
                    .filter(function (_a) {
                    var category = _a.category;
                    return category === "root";
                })
                    .map(function (_a) {
                    var spel = _a.spel;
                    return spel;
                }) }),
            React.createElement(SelectForm_1.default, { text: "Suffix", list: data
                    .filter(function (_a) {
                    var category = _a.category;
                    return category === "suffix";
                })
                    .map(function (_a) {
                    var spel = _a.spel;
                    return spel;
                }) }))));
};
exports.default = FC;


/***/ }),

/***/ "./src/components/atoms/FormLabel.tsx":
/*!********************************************!*\
  !*** ./src/components/atoms/FormLabel.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var FC = function (_a) {
    var text = _a.text;
    return React.createElement(core_1.InputLabel, null, text);
};
exports.default = FC;


/***/ }),

/***/ "./src/components/molecules/SelectBox.tsx":
/*!************************************************!*\
  !*** ./src/components/molecules/SelectBox.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var FC = function (_a) {
    var list = _a.list, _b = _a.width, width = _b === void 0 ? 100 : _b;
    return (React.createElement(core_1.Select, { style: { width: width }, onChange: function () { } }, list.map(function (k, i) { return (React.createElement(core_1.MenuItem, { value: k, key: i }, k)); })));
};
exports.default = FC;


/***/ }),

/***/ "./src/components/organisms/SelectForm.tsx":
/*!*************************************************!*\
  !*** ./src/components/organisms/SelectForm.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var FormLabel_1 = __webpack_require__(/*! ../atoms/FormLabel */ "./src/components/atoms/FormLabel.tsx");
var SelectBox_1 = __webpack_require__(/*! ../molecules/SelectBox */ "./src/components/molecules/SelectBox.tsx");
var FC = function (_a) {
    var text = _a.text, list = _a.list;
    return (React.createElement(core_1.FormControl, null,
        React.createElement(FormLabel_1.default, { text: text }),
        React.createElement(SelectBox_1.default, { list: list })));
};
exports.default = FC;


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
var App_1 = __webpack_require__(/*! ./App */ "./src/App.tsx");
var app = document.createElement("div");
app.id = "app";
document.body.appendChild(app);
ReactDOM.render(React.createElement(App_1.default, null), document.getElementById("app"));


/***/ }),

/***/ "./src/keywords.json":
/*!***************************!*\
  !*** ./src/keywords.json ***!
  \***************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"spel\":[\"-able\",\"-ible\"],\"mean\":[\"できる\",\"しうる\"],\"url\":\"http://gogengo.me/roots/86\"},{\"spel\":[\"-age\"],\"mean\":[\"こと\"],\"url\":\"http://gogengo.me/roots/414\"},{\"spel\":[\"-al\"],\"mean\":[\"性質\"],\"url\":\"http://gogengo.me/roots/334\"},{\"spel\":[\"-ance\",\"-ence\"],\"mean\":[\"もの\",\"こと\"],\"url\":\"http://gogengo.me/roots/330\"},{\"spel\":[\"-ar\"],\"mean\":[\"のような\"],\"url\":\"http://gogengo.me/roots/393\"},{\"spel\":[\"-ary\"],\"mean\":[\"もの\"],\"url\":\"http://gogengo.me/roots/471\"},{\"spel\":[\"-ate\"],\"mean\":[\"する\"],\"url\":\"http://gogengo.me/roots/356\"},{\"spel\":[\"-ation\"],\"mean\":[\"すること\"],\"url\":\"http://gogengo.me/roots/546\"},{\"spel\":[\"-cracy\"],\"mean\":[\"統治\"],\"url\":\"http://gogengo.me/roots/536\"},{\"spel\":[\"-ed\"],\"mean\":[\"性質\"],\"url\":\"http://gogengo.me/roots/305\"},{\"spel\":[\"-ee\"],\"mean\":[\"人\"],\"url\":\"http://gogengo.me/roots/345\"},{\"spel\":[\"-en\"],\"mean\":[\"する\"],\"url\":\"http://gogengo.me/roots/400\"},{\"spel\":[\"-ent\",\"-ant\"],\"mean\":[\"人\",\"もの\",\"性質\"],\"url\":\"http://gogengo.me/roots/368\"},{\"spel\":[\"-ful\"],\"mean\":[\"満たされている性質\"],\"url\":\"http://gogengo.me/roots/412\"},{\"spel\":[\"-graphy\"],\"mean\":[\"書かれたもの\"],\"url\":\"http://gogengo.me/roots/446\"},{\"spel\":[\"-hedron\"],\"mean\":[\"面体\"],\"url\":\"http://gogengo.me/roots/277\"},{\"spel\":[\"-ic\"],\"mean\":[\"性質\"],\"url\":\"http://gogengo.me/roots/349\"},{\"spel\":[\"-ice\",\"-se\"],\"mean\":[\"こと\"],\"url\":\"http://gogengo.me/roots/365\"},{\"spel\":[\"-ics\"],\"mean\":[\"学問\"],\"url\":\"http://gogengo.me/roots/480\"},{\"spel\":[\"-ify\"],\"mean\":[\"する\"],\"url\":\"http://gogengo.me/roots/362\"},{\"spel\":[\"-ine\",\"-in\"],\"mean\":[\"化学物質\"],\"url\":\"http://gogengo.me/roots/432\"},{\"spel\":[\"-ing\"],\"mean\":[\"こと\",\"もの\"],\"url\":\"http://gogengo.me/roots/378\"},{\"spel\":[\"-ion\",\"-tion\"],\"mean\":[\"こと\",\"もの\"],\"url\":\"http://gogengo.me/roots/232\"},{\"spel\":[\"-ism\"],\"mean\":[\"主義\",\"主張\"],\"url\":\"http://gogengo.me/roots/333\"},{\"spel\":[\"-ist\"],\"mean\":[\"専門家\",\"主義者\",\"人\"],\"url\":\"http://gogengo.me/roots/292\"},{\"spel\":[\"-ity\"],\"mean\":[\"こと\"],\"url\":\"http://gogengo.me/roots/353\"},{\"spel\":[\"-ium\"],\"mean\":[\"物質\"],\"url\":\"http://gogengo.me/roots/359\"},{\"spel\":[\"-ive\"],\"mean\":[\"性質\"],\"url\":\"http://gogengo.me/roots/245\"},{\"spel\":[\"-ize\",\"-ise\"],\"mean\":[\"する\"],\"url\":\"http://gogengo.me/roots/320\"},{\"spel\":[\"-less\"],\"mean\":[\"〜がない\"],\"url\":\"http://gogengo.me/roots/486\"},{\"spel\":[\"-logy\"],\"mean\":[\"学問\"],\"url\":\"http://gogengo.me/roots/190\"},{\"spel\":[\"-ly\"],\"mean\":[\"のような\",\"ごとの\"],\"url\":\"http://gogengo.me/roots/342\"},{\"spel\":[\"-ment\"],\"mean\":[\"こと\"],\"url\":\"http://gogengo.me/roots/338\"},{\"spel\":[\"-ness\"],\"mean\":[\"こと\"],\"url\":\"http://gogengo.me/roots/409\"},{\"spel\":[\"-or\",\"-er\"],\"mean\":[\"人\",\"もの\"],\"url\":\"http://gogengo.me/roots/261\"},{\"spel\":[\"-ory\"],\"mean\":[\"場所\"],\"url\":\"http://gogengo.me/roots/347\"},{\"spel\":[\"-osis\"],\"mean\":[\"病気\"],\"url\":\"http://gogengo.me/roots/209\"},{\"spel\":[\"-ous\"],\"mean\":[\"性質\"],\"url\":\"http://gogengo.me/roots/390\"},{\"spel\":[\"-pathy\"],\"mean\":[\"感情\"],\"url\":\"http://gogengo.me/roots/219\"},{\"spel\":[\"-phile\",\"-phila\"],\"mean\":[\"愛する\"],\"url\":\"http://gogengo.me/roots/294\"},{\"spel\":[\"-phobia\"],\"mean\":[\"恐怖症\"],\"url\":\"http://gogengo.me/roots/120\"},{\"spel\":[\"-scope\"],\"mean\":[\"見るもの\"],\"url\":\"http://gogengo.me/roots/205\"},{\"spel\":[\"-ture\",\"-ure\"],\"mean\":[\"こと\"],\"url\":\"http://gogengo.me/roots/350\"},{\"spel\":[\"-y\",\"-cy\"],\"mean\":[\"こと\"],\"url\":\"http://gogengo.me/roots/361\"},{\"spel\":[\"a-\"],\"mean\":[\"否定\"],\"url\":\"http://gogengo.me/roots/259\"},{\"spel\":[\"ab-\"],\"mean\":[\"離れた\"],\"url\":\"http://gogengo.me/roots/57\"},{\"spel\":[\"acro-\"],\"mean\":[\"高い\"],\"url\":\"http://gogengo.me/roots/185\"},{\"spel\":[\"act\"],\"mean\":[\"行為\"],\"url\":\"http://gogengo.me/roots/231\"},{\"spel\":[\"ad-\",\"at-\",\"ap-\",\"af-\",\"as-\",\"ag-\",\"ac-\",\"an-\",\"a-\"],\"mean\":[\"その方向へ\",\"付加\"],\"url\":\"http://gogengo.me/roots/160\"},{\"spel\":[\"alb\"],\"mean\":[\"白\"],\"url\":\"http://gogengo.me/roots/425\"},{\"spel\":[\"ali\",\"alter\",\"el\"],\"mean\":[\"別\"],\"url\":\"http://gogengo.me/roots/433\"},{\"spel\":[\"alt\"],\"mean\":[\"高い\"],\"url\":\"http://gogengo.me/roots/440\"},{\"spel\":[\"ambi-\",\"be-\"],\"mean\":[\"周囲の\",\"歩く\",\"あらゆる\"],\"url\":\"http://gogengo.me/roots/283\"},{\"spel\":[\"ammonia\",\"Ammon\"],\"mean\":[\"アメン神殿\",\"アンモニア\"],\"url\":\"http://gogengo.me/roots/439\"},{\"spel\":[\"ana-\"],\"mean\":[\"上げる\",\"戻す\"],\"url\":\"http://gogengo.me/roots/520\"},{\"spel\":[\"angle\"],\"mean\":[\"カド\"],\"url\":\"http://gogengo.me/roots/504\"},{\"spel\":[\"anima\",\"anemo\"],\"mean\":[\"魂\",\"命\",\"風\"],\"url\":\"http://gogengo.me/roots/332\"},{\"spel\":[\"annu\"],\"mean\":[\"年\"],\"url\":\"http://gogengo.me/roots/268\"},{\"spel\":[\"ante\"],\"mean\":[\"前に\"],\"url\":\"http://gogengo.me/roots/472\"},{\"spel\":[\"anti-\"],\"mean\":[\"反する\"],\"url\":\"http://gogengo.me/roots/258\"},{\"spel\":[\"aria\"],\"mean\":[\"空気\"],\"url\":\"http://gogengo.me/roots/495\"},{\"spel\":[\"arm\"],\"mean\":[\"組み合わせる\",\"武器\",\"腕\"],\"url\":\"http://gogengo.me/roots/109\"},{\"spel\":[\"aster\",\"astro\"],\"mean\":[\"星\"],\"url\":\"http://gogengo.me/roots/110\"},{\"spel\":[\"athlon\"],\"mean\":[\"競技\"],\"url\":\"http://gogengo.me/roots/59\"},{\"spel\":[\"auc\",\"auth\"],\"mean\":[\"増やす\"],\"url\":\"http://gogengo.me/roots/304\"},{\"spel\":[\"audio\",\"aud\",\"edi\",\"ey\"],\"mean\":[\"聞く\",\"音声の\",\"聴覚の\"],\"url\":\"http://gogengo.me/roots/291\"},{\"spel\":[\"auto-\"],\"mean\":[\"自身\"],\"url\":\"http://gogengo.me/roots/537\"},{\"spel\":[\"bai\"],\"mean\":[\"行く\"],\"url\":\"http://gogengo.me/roots/490\"},{\"spel\":[\"bat\"],\"mean\":[\"たたく\"],\"url\":\"http://gogengo.me/roots/445\"},{\"spel\":[\"bed\"],\"mean\":[\"眠る場所\"],\"url\":\"http://gogengo.me/roots/241\"},{\"spel\":[\"bene-\",\"bon-\"],\"mean\":[\"よい\"],\"url\":\"http://gogengo.me/roots/315\"},{\"spel\":[\"bet\"],\"mean\":[\"餌\",\"餌をやる\"],\"url\":\"http://gogengo.me/roots/479\"},{\"spel\":[\"bi-\"],\"mean\":[\"2 つの\"],\"url\":\"http://gogengo.me/roots/30\"},{\"spel\":[\"biblio\"],\"mean\":[\"本\"],\"url\":\"http://gogengo.me/roots/437\"},{\"spel\":[\"bio\",\"bium\"],\"mean\":[\"命\"],\"url\":\"http://gogengo.me/roots/506\"},{\"spel\":[\"bole\"],\"mean\":[\"投げること\"],\"url\":\"http://gogengo.me/roots/534\"},{\"spel\":[\"book\"],\"mean\":[\"書き残す\",\"本\",\"予約\"],\"url\":\"http://gogengo.me/roots/477\"},{\"spel\":[\"bredan\"],\"mean\":[\"生み出す\"],\"url\":\"http://gogengo.me/roots/234\"},{\"spel\":[\"busi\"],\"mean\":[\"勤める\"],\"url\":\"http://gogengo.me/roots/73\"},{\"spel\":[\"by\"],\"mean\":[\"わきの\",\"副次的な\"],\"url\":\"http://gogengo.me/roots/72\"},{\"spel\":[\"cadentia\",\"chance\"],\"mean\":[\"サイコロを振る\",\"運\"],\"url\":\"http://gogengo.me/roots/175\"},{\"spel\":[\"calare\"],\"mean\":[\"呼ぶ\",\"叫ぶ\"],\"url\":\"http://gogengo.me/roots/444\"},{\"spel\":[\"calc\"],\"mean\":[\"石\",\"石灰\"],\"url\":\"http://gogengo.me/roots/358\"},{\"spel\":[\"cand\"],\"mean\":[\"白\"],\"url\":\"http://gogengo.me/roots/426\"},{\"spel\":[\"cap\"],\"mean\":[\"頭\"],\"url\":\"http://gogengo.me/roots/450\"},{\"spel\":[\"card\",\"carta\"],\"mean\":[\"紙\",\"手札\"],\"url\":\"http://gogengo.me/roots/111\"},{\"spel\":[\"causa\"],\"mean\":[\"原因\"],\"url\":\"http://gogengo.me/roots/424\"},{\"spel\":[\"cede\",\"ceed\",\"cess\"],\"mean\":[\"進む\"],\"url\":\"http://gogengo.me/roots/371\"},{\"spel\":[\"cel\",\"celer\"],\"mean\":[\"上げる\"],\"url\":\"http://gogengo.me/roots/382\"},{\"spel\":[\"cell\",\"ceal\"],\"mean\":[\"隠す\"],\"url\":\"http://gogengo.me/roots/379\"},{\"spel\":[\"center\"],\"mean\":[\"中央\"],\"url\":\"http://gogengo.me/roots/492\"},{\"spel\":[\"centi\",\"cent\"],\"mean\":[\"100\",\"100 分の 1\"],\"url\":\"http://gogengo.me/roots/285\"},{\"spel\":[\"cept\",\"cip\",\"cap\",\"ceive\",\"cup\",\"chase\"],\"mean\":[\"つかみ取る\"],\"url\":\"http://gogengo.me/roots/328\"},{\"spel\":[\"change\",\"cambire\"],\"mean\":[\"変える\"],\"url\":\"http://gogengo.me/roots/235\"},{\"spel\":[\"charge\",\"car\"],\"mean\":[\"台車\",\"積む\",\"満たす\"],\"url\":\"http://gogengo.me/roots/69\"},{\"spel\":[\"chol\"],\"mean\":[\"胆汁\"],\"url\":\"http://gogengo.me/roots/428\"},{\"spel\":[\"chrono\"],\"mean\":[\"時の\"],\"url\":\"http://gogengo.me/roots/189\"},{\"spel\":[\"circu\",\"circle\",\"circum\",\"cycle\"],\"mean\":[\"輪\",\"周囲\"],\"url\":\"http://gogengo.me/roots/407\"},{\"spel\":[\"cis\",\"cid\"],\"mean\":[\"切る\"],\"url\":\"http://gogengo.me/roots/467\"},{\"spel\":[\"civis\"],\"mean\":[\"町民\"],\"url\":\"http://gogengo.me/roots/543\"},{\"spel\":[\"clin\"],\"mean\":[\"寄りかかる\",\"病院\"],\"url\":\"http://gogengo.me/roots/300\"},{\"spel\":[\"clude\"],\"mean\":[\"閉じる\"],\"url\":\"http://gogengo.me/roots/37\"},{\"spel\":[\"code\"],\"mean\":[\"符号\",\"法典\"],\"url\":\"http://gogengo.me/roots/89\"},{\"spel\":[\"cogni\"],\"mean\":[\"知る\"],\"url\":\"http://gogengo.me/roots/473\"},{\"spel\":[\"com-\",\"con-\",\"co-\"],\"mean\":[\"共に\",\"強意\"],\"url\":\"http://gogengo.me/roots/33\"},{\"spel\":[\"contra-\",\"contro-\"],\"mean\":[\"反対に\"],\"url\":\"http://gogengo.me/roots/478\"},{\"spel\":[\"cor\"],\"mean\":[\"心\"],\"url\":\"http://gogengo.me/roots/455\"},{\"spel\":[\"crease\"],\"mean\":[\"増える\",\"成長する\"],\"url\":\"http://gogengo.me/roots/282\"},{\"spel\":[\"cred\"],\"mean\":[\"信じる\"],\"url\":\"http://gogengo.me/roots/452\"},{\"spel\":[\"cult\",\"cole\"],\"mean\":[\"耕す\",\"住む\"],\"url\":\"http://gogengo.me/roots/402\"},{\"spel\":[\"cur\",\"cour\"],\"mean\":[\"走る\"],\"url\":\"http://gogengo.me/roots/364\"},{\"spel\":[\"cure\"],\"mean\":[\"手入れ\",\"気遣い\"],\"url\":\"http://gogengo.me/roots/301\"},{\"spel\":[\"cutte\"],\"mean\":[\"切る\"],\"url\":\"http://gogengo.me/roots/525\"},{\"spel\":[\"day\"],\"mean\":[\"日にち\"],\"url\":\"http://gogengo.me/roots/225\"},{\"spel\":[\"de-\"],\"mean\":[\"離れる\",\"下へ\",\"否定\",\"徹底的に\",\"強意\"],\"url\":\"http://gogengo.me/roots/162\"},{\"spel\":[\"deca-\",\"deci-\"],\"mean\":[\"10 の\"],\"url\":\"http://gogengo.me/roots/60\"},{\"spel\":[\"dem\"],\"mean\":[\"人々\"],\"url\":\"http://gogengo.me/roots/373\"},{\"spel\":[\"demi-\"],\"mean\":[\"半分の\"],\"url\":\"http://gogengo.me/roots/263\"},{\"spel\":[\"dendro-\"],\"mean\":[\"樹木の\"],\"url\":\"http://gogengo.me/roots/191\"},{\"spel\":[\"dent\"],\"mean\":[\"歯\"],\"url\":\"http://gogengo.me/roots/303\"},{\"spel\":[\"derma\"],\"mean\":[\"真皮\"],\"url\":\"http://gogengo.me/roots/165\"},{\"spel\":[\"dia-\"],\"mean\":[\"横切って\"],\"url\":\"http://gogengo.me/roots/318\"},{\"spel\":[\"dict\"],\"mean\":[\"話す\"],\"url\":\"http://gogengo.me/roots/470\"},{\"spel\":[\"dis-\",\"di-\"],\"mean\":[\"否定\",\"離れて\",\"強意\"],\"url\":\"http://gogengo.me/roots/104\"},{\"spel\":[\"dodeca-\"],\"mean\":[\"12 の\"],\"url\":\"http://gogengo.me/roots/62\"},{\"spel\":[\"dom\",\"dan\"],\"mean\":[\"家\",\"領域\",\"支配\"],\"url\":\"http://gogengo.me/roots/465\"},{\"spel\":[\"don\",\"dit\",\"dat\"],\"mean\":[\"与える\"],\"url\":\"http://gogengo.me/roots/410\"},{\"spel\":[\"doxa\"],\"mean\":[\"意見\"],\"url\":\"http://gogengo.me/roots/532\"},{\"spel\":[\"duce\",\"duct\"],\"mean\":[\"導く\"],\"url\":\"http://gogengo.me/roots/50\"},{\"spel\":[\"duo\",\"dup\"],\"mean\":[\"2 つ\"],\"url\":\"http://gogengo.me/roots/511\"},{\"spel\":[\"ego\"],\"mean\":[\"自分\"],\"url\":\"http://gogengo.me/roots/431\"},{\"spel\":[\"electr\"],\"mean\":[\"電気\",\"琥珀\"],\"url\":\"http://gogengo.me/roots/415\"},{\"spel\":[\"ennea-\"],\"mean\":[\"9 つの\"],\"url\":\"http://gogengo.me/roots/63\"},{\"spel\":[\"epi-\"],\"mean\":[\"上の\",\"間の\"],\"url\":\"http://gogengo.me/roots/163\"},{\"spel\":[\"equal\",\"equi\"],\"mean\":[\"等しい\"],\"url\":\"http://gogengo.me/roots/499\"},{\"spel\":[\"ess\",\"sent\",\"est\"],\"mean\":[\"存在する\"],\"url\":\"http://gogengo.me/roots/462\"},{\"spel\":[\"ethn\"],\"mean\":[\"民族\"],\"url\":\"http://gogengo.me/roots/348\"},{\"spel\":[\"etymo\"],\"mean\":[\"本当\"],\"url\":\"http://gogengo.me/roots/375\"},{\"spel\":[\"ex-\",\"ef-\",\"e-\"],\"mean\":[\"外へ\"],\"url\":\"http://gogengo.me/roots/35\"},{\"spel\":[\"fail\",\"fault\",\"false\"],\"mean\":[\"誤り\"],\"url\":\"http://gogengo.me/roots/357\"},{\"spel\":[\"fare\"],\"mean\":[\"旅\"],\"url\":\"http://gogengo.me/roots/386\"},{\"spel\":[\"fer\",\"fort\"],\"mean\":[\"運ぶ\"],\"url\":\"http://gogengo.me/roots/233\"},{\"spel\":[\"fess\"],\"mean\":[\"言う\"],\"url\":\"http://gogengo.me/roots/405\"},{\"spel\":[\"fic\",\"fact\",\"fect\",\"feat\",\"fig\",\"fy\",\"face\"],\"mean\":[\"つくる\",\"する\",\"面\"],\"url\":\"http://gogengo.me/roots/346\"},{\"spel\":[\"fili\"],\"mean\":[\"子ども\"],\"url\":\"http://gogengo.me/roots/494\"},{\"spel\":[\"fin\"],\"mean\":[\"終わる\",\"境界を定める\"],\"url\":\"http://gogengo.me/roots/335\"},{\"spel\":[\"fix\"],\"mean\":[\"固定する\"],\"url\":\"http://gogengo.me/roots/211\"},{\"spel\":[\"flame\"],\"mean\":[\"炎\"],\"url\":\"http://gogengo.me/roots/244\"},{\"spel\":[\"flict\"],\"mean\":[\"ぶつける\"],\"url\":\"http://gogengo.me/roots/421\"},{\"spel\":[\"flow\",\"flood\",\"flu\"],\"mean\":[\"流れ\"],\"url\":\"http://gogengo.me/roots/370\"},{\"spel\":[\"foris\"],\"mean\":[\"外側\",\"森林\"],\"url\":\"http://gogengo.me/roots/186\"},{\"spel\":[\"form\",\"forma\"],\"mean\":[\"形\"],\"url\":\"http://gogengo.me/roots/144\"},{\"spel\":[\"fort\",\"firm\"],\"mean\":[\"強い\",\"かたい\"],\"url\":\"http://gogengo.me/roots/419\"},{\"spel\":[\"fund\"],\"mean\":[\"基礎を置く\",\"底\"],\"url\":\"http://gogengo.me/roots/519\"},{\"spel\":[\"gen\",\"gene\",\"gn\"],\"mean\":[\"生む\",\"種類\"],\"url\":\"http://gogengo.me/roots/118\"},{\"spel\":[\"god\"],\"mean\":[\"呼ぶ\"],\"url\":\"http://gogengo.me/roots/264\"},{\"spel\":[\"gon\"],\"mean\":[\"カド\"],\"url\":\"http://gogengo.me/roots/61\"},{\"spel\":[\"grace\",\"grate\",\"gree\"],\"mean\":[\"喜び\",\"慈悲深さ\"],\"url\":\"http://gogengo.me/roots/411\"},{\"spel\":[\"graph\",\"gram\"],\"mean\":[\"書く\",\"書かれたもの\"],\"url\":\"http://gogengo.me/roots/135\"},{\"spel\":[\"grav\",\"gri\"],\"mean\":[\"重い\"],\"url\":\"http://gogengo.me/roots/457\"},{\"spel\":[\"gregate\"],\"mean\":[\"集まり\",\"群れ\"],\"url\":\"http://gogengo.me/roots/319\"},{\"spel\":[\"gress\",\"grad\"],\"mean\":[\"歩く\",\"段階\"],\"url\":\"http://gogengo.me/roots/51\"},{\"spel\":[\"group\"],\"mean\":[\"結び目\",\"集まり\"],\"url\":\"http://gogengo.me/roots/253\"},{\"spel\":[\"habit\",\"hibit\"],\"mean\":[\"保つ\"],\"url\":\"http://gogengo.me/roots/321\"},{\"spel\":[\"happ\"],\"mean\":[\"機会\"],\"url\":\"http://gogengo.me/roots/142\"},{\"spel\":[\"hard\"],\"mean\":[\"かたい\"],\"url\":\"http://gogengo.me/roots/517\"},{\"spel\":[\"head\",\"kaput\"],\"mean\":[\"頭\"],\"url\":\"http://gogengo.me/roots/254\"},{\"spel\":[\"hemi-\"],\"mean\":[\"半分の\"],\"url\":\"http://gogengo.me/roots/265\"},{\"spel\":[\"hepta-\"],\"mean\":[\"7 つの\"],\"url\":\"http://gogengo.me/roots/64\"},{\"spel\":[\"her\",\"herit\"],\"mean\":[\"受け継ぐ\"],\"url\":\"http://gogengo.me/roots/413\"},{\"spel\":[\"her\",\"hes\"],\"mean\":[\"粘着する\"],\"url\":\"http://gogengo.me/roots/308\"},{\"spel\":[\"hexa-\"],\"mean\":[\"6 つの\"],\"url\":\"http://gogengo.me/roots/65\"},{\"spel\":[\"hippos\"],\"mean\":[\"馬\"],\"url\":\"http://gogengo.me/roots/541\"},{\"spel\":[\"historia\",\"storia\"],\"mean\":[\"歴史\",\"階\"],\"url\":\"http://gogengo.me/roots/126\"},{\"spel\":[\"horr\"],\"mean\":[\"ぞっとする\"],\"url\":\"http://gogengo.me/roots/507\"},{\"spel\":[\"host\",\"hosp\"],\"mean\":[\"見知らぬ人\",\"客\"],\"url\":\"http://gogengo.me/roots/491\"},{\"spel\":[\"hydro-\"],\"mean\":[\"水の\"],\"url\":\"http://gogengo.me/roots/116\"},{\"spel\":[\"ieg\",\"isol\"],\"mean\":[\"水に囲まれたもの\",\"島\"],\"url\":\"http://gogengo.me/roots/355\"},{\"spel\":[\"igni\"],\"mean\":[\"火\"],\"url\":\"http://gogengo.me/roots/385\"},{\"spel\":[\"in-\",\"im-\"],\"mean\":[\"否定\"],\"url\":\"http://gogengo.me/roots/366\"},{\"spel\":[\"in-\",\"im-\",\"en-\",\"em-\"],\"mean\":[\"中へ\",\"上に\",\"その方向へ\",\"その状態にする\"],\"url\":\"http://gogengo.me/roots/47\"},{\"spel\":[\"inter-\",\"enter-\"],\"mean\":[\"間の\"],\"url\":\"http://gogengo.me/roots/39\"},{\"spel\":[\"it\"],\"mean\":[\"行く\"],\"url\":\"http://gogengo.me/roots/395\"},{\"spel\":[\"ject\"],\"mean\":[\"投げる\"],\"url\":\"http://gogengo.me/roots/236\"},{\"spel\":[\"joie\"],\"mean\":[\"喜び\"],\"url\":\"http://gogengo.me/roots/96\"},{\"spel\":[\"join\"],\"mean\":[\"繋げる\"],\"url\":\"http://gogengo.me/roots/306\"},{\"spel\":[\"jour\"],\"mean\":[\"日\"],\"url\":\"http://gogengo.me/roots/547\"},{\"spel\":[\"just\",\"jure\"],\"mean\":[\"ただしさ\",\"法律\",\"ちょうど\"],\"url\":\"http://gogengo.me/roots/360\"},{\"spel\":[\"kinetos\"],\"mean\":[\"運動\"],\"url\":\"http://gogengo.me/roots/213\"},{\"spel\":[\"know\",\"gno\"],\"mean\":[\"知る\"],\"url\":\"http://gogengo.me/roots/363\"},{\"spel\":[\"kwo\",\"quo\"],\"mean\":[\"どれほどの\"],\"url\":\"http://gogengo.me/roots/514\"},{\"spel\":[\"lab\"],\"mean\":[\"働く\"],\"url\":\"http://gogengo.me/roots/466\"},{\"spel\":[\"laryng\"],\"mean\":[\"喉頭 (こうとう)\"],\"url\":\"http://gogengo.me/roots/204\"},{\"spel\":[\"lat\"],\"mean\":[\"運ぶ\"],\"url\":\"http://gogengo.me/roots/403\"},{\"spel\":[\"latus\"],\"mean\":[\"生む\"],\"url\":\"http://gogengo.me/roots/372\"},{\"spel\":[\"laud\"],\"mean\":[\"称える\"],\"url\":\"http://gogengo.me/roots/195\"},{\"spel\":[\"lend\"],\"mean\":[\"土地\"],\"url\":\"http://gogengo.me/roots/354\"},{\"spel\":[\"lex\"],\"mean\":[\"法\"],\"url\":\"http://gogengo.me/roots/535\"},{\"spel\":[\"liber\"],\"mean\":[\"自由\"],\"url\":\"http://gogengo.me/roots/542\"},{\"spel\":[\"like\"],\"mean\":[\"体質に合う\",\"好き\",\"似ている\"],\"url\":\"http://gogengo.me/roots/198\"},{\"spel\":[\"linea\"],\"mean\":[\"リネン\",\"線\"],\"url\":\"http://gogengo.me/roots/237\"},{\"spel\":[\"lingua\"],\"mean\":[\"舌\",\"言葉\"],\"url\":\"http://gogengo.me/roots/418\"},{\"spel\":[\"lith\"],\"mean\":[\"岩\"],\"url\":\"http://gogengo.me/roots/489\"},{\"spel\":[\"logo-\"],\"mean\":[\"言語の\"],\"url\":\"http://gogengo.me/roots/297\"},{\"spel\":[\"logue\"],\"mean\":[\"談話\"],\"url\":\"http://gogengo.me/roots/52\"},{\"spel\":[\"long\"],\"mean\":[\"長い\"],\"url\":\"http://gogengo.me/roots/53\"},{\"spel\":[\"loqu\",\"locu\"],\"mean\":[\"力強く話す\"],\"url\":\"http://gogengo.me/roots/454\"},{\"spel\":[\"lve\",\"lut\",\"lue\",\"lye\"],\"mean\":[\"ほどく\"],\"url\":\"http://gogengo.me/roots/406\"},{\"spel\":[\"macro-\"],\"mean\":[\"大きな\",\"長い\"],\"url\":\"http://gogengo.me/roots/505\"},{\"spel\":[\"mal-\"],\"mean\":[\"悪い\"],\"url\":\"http://gogengo.me/roots/311\"},{\"spel\":[\"man\"],\"mean\":[\"人\"],\"url\":\"http://gogengo.me/roots/438\"},{\"spel\":[\"mani\",\"main\",\"man\",\"manu\"],\"mean\":[\"手\"],\"url\":\"http://gogengo.me/roots/302\"},{\"spel\":[\"marine\",\"marinus\"],\"mean\":[\"海の\"],\"url\":\"http://gogengo.me/roots/246\"},{\"spel\":[\"mark\",\"merg\"],\"mean\":[\"境界\",\"印\"],\"url\":\"http://gogengo.me/roots/513\"},{\"spel\":[\"mega-\"],\"mean\":[\"大きな\"],\"url\":\"http://gogengo.me/roots/206\"},{\"spel\":[\"melan\"],\"mean\":[\"黒\"],\"url\":\"http://gogengo.me/roots/427\"},{\"spel\":[\"memor\"],\"mean\":[\"心に留める\"],\"url\":\"http://gogengo.me/roots/544\"},{\"spel\":[\"ment\",\"man\"],\"mean\":[\"考える\"],\"url\":\"http://gogengo.me/roots/545\"},{\"spel\":[\"meso-\",\"mid-\"],\"mean\":[\"中間\"],\"url\":\"http://gogengo.me/roots/539\"},{\"spel\":[\"meter\",\"metry\"],\"mean\":[\"測る\",\"測定器\",\"メートル\"],\"url\":\"http://gogengo.me/roots/119\"},{\"spel\":[\"micro-\"],\"mean\":[\"小さな\"],\"url\":\"http://gogengo.me/roots/207\"},{\"spel\":[\"migr\",\"mut\",\"mun\",\"mon\"],\"mean\":[\"動く\",\"変わる\"],\"url\":\"http://gogengo.me/roots/388\"},{\"spel\":[\"milli-\"],\"mean\":[\"千\",\"千分の一\"],\"url\":\"http://gogengo.me/roots/290\"},{\"spel\":[\"mis-\"],\"mean\":[\"誤って\",\"悪い\"],\"url\":\"http://gogengo.me/roots/171\"},{\"spel\":[\"mit\",\"mess\",\"miss\",\"mise\"],\"mean\":[\"送る\"],\"url\":\"http://gogengo.me/roots/329\"},{\"spel\":[\"mono-\"],\"mean\":[\"単一の\"],\"url\":\"http://gogengo.me/roots/134\"},{\"spel\":[\"month\",\"mona\"],\"mean\":[\"月\"],\"url\":\"http://gogengo.me/roots/343\"},{\"spel\":[\"morn\"],\"mean\":[\"朝\"],\"url\":\"http://gogengo.me/roots/281\"},{\"spel\":[\"moros\"],\"mean\":[\"ばか\"],\"url\":\"http://gogengo.me/roots/327\"},{\"spel\":[\"moun\",\"men\"],\"mean\":[\"突き出る\",\"積み重ねる\"],\"url\":\"http://gogengo.me/roots/508\"},{\"spel\":[\"movere\",\"mov\",\"mot\"],\"mean\":[\"動く\"],\"url\":\"http://gogengo.me/roots/538\"},{\"spel\":[\"multi-\"],\"mean\":[\"多くの\"],\"url\":\"http://gogengo.me/roots/124\"},{\"spel\":[\"nat\"],\"mean\":[\"生まれる\"],\"url\":\"http://gogengo.me/roots/461\"},{\"spel\":[\"nect\",\"nex\"],\"mean\":[\"結びつける\"],\"url\":\"http://gogengo.me/roots/307\"},{\"spel\":[\"neuro\",\"neur\",\"nerv\"],\"mean\":[\"神経\"],\"url\":\"http://gogengo.me/roots/208\"},{\"spel\":[\"night\",\"nekwt\"],\"mean\":[\"夜\"],\"url\":\"http://gogengo.me/roots/280\"},{\"spel\":[\"nomen\"],\"mean\":[\"名前\"],\"url\":\"http://gogengo.me/roots/443\"},{\"spel\":[\"non-\",\"ne-\"],\"mean\":[\"否定\"],\"url\":\"http://gogengo.me/roots/127\"},{\"spel\":[\"norm\"],\"mean\":[\"規格\"],\"url\":\"http://gogengo.me/roots/396\"},{\"spel\":[\"nounce\"],\"mean\":[\"叫ぶ\"],\"url\":\"http://gogengo.me/roots/509\"},{\"spel\":[\"nov\",\"neo\",\"newo\"],\"mean\":[\"新しい\"],\"url\":\"http://gogengo.me/roots/458\"},{\"spel\":[\"numer\"],\"mean\":[\"数\"],\"url\":\"http://gogengo.me/roots/501\"},{\"spel\":[\"nur\",\"nutri\",\"nour\"],\"mean\":[\"養う\",\"育てる\"],\"url\":\"http://gogengo.me/roots/456\"},{\"spel\":[\"nut\"],\"mean\":[\"木の実\",\"核\"],\"url\":\"http://gogengo.me/roots/130\"},{\"spel\":[\"ob-\",\"oc-\",\"of-\",\"op-\"],\"mean\":[\"その方向へ\",\"反対の\"],\"url\":\"http://gogengo.me/roots/183\"},{\"spel\":[\"octa-\"],\"mean\":[\"8 つの\"],\"url\":\"http://gogengo.me/roots/66\"},{\"spel\":[\"omni-\"],\"mean\":[\"すべて\"],\"url\":\"http://gogengo.me/roots/485\"},{\"spel\":[\"one\",\"oi-no\"],\"mean\":[\"1 つ\"],\"url\":\"http://gogengo.me/roots/528\"},{\"spel\":[\"ope\"],\"mean\":[\"はたらく\",\"最高\"],\"url\":\"http://gogengo.me/roots/484\"},{\"spel\":[\"opt\"],\"mean\":[\"選ぶ\"],\"url\":\"http://gogengo.me/roots/496\"},{\"spel\":[\"ordi\"],\"mean\":[\"整理\"],\"url\":\"http://gogengo.me/roots/199\"},{\"spel\":[\"ori\"],\"mean\":[\"生まれる\"],\"url\":\"http://gogengo.me/roots/482\"},{\"spel\":[\"ortho-\"],\"mean\":[\"まっすぐ\",\"ただしさ\"],\"url\":\"http://gogengo.me/roots/531\"},{\"spel\":[\"over-\"],\"mean\":[\"上に\",\"過度に\",\"超えて\"],\"url\":\"http://gogengo.me/roots/146\"},{\"spel\":[\"oxy-\"],\"mean\":[\"酸\"],\"url\":\"http://gogengo.me/roots/389\"},{\"spel\":[\"pan\"],\"mean\":[\"パン\"],\"url\":\"http://gogengo.me/roots/384\"},{\"spel\":[\"pan-\"],\"mean\":[\"すべて\"],\"url\":\"http://gogengo.me/roots/524\"},{\"spel\":[\"para-\"],\"mean\":[\"反する\",\"近く\"],\"url\":\"http://gogengo.me/roots/533\"},{\"spel\":[\"part\"],\"mean\":[\"部分\"],\"url\":\"http://gogengo.me/roots/417\"},{\"spel\":[\"pass\"],\"mean\":[\"歩く\"],\"url\":\"http://gogengo.me/roots/435\"},{\"spel\":[\"pay\",\"paier\"],\"mean\":[\"満足させる\",\"支払う\"],\"url\":\"http://gogengo.me/roots/262\"},{\"spel\":[\"pear\"],\"mean\":[\"前に出る\"],\"url\":\"http://gogengo.me/roots/107\"},{\"spel\":[\"pede\",\"pod\",\"foot\"],\"mean\":[\"足\"],\"url\":\"http://gogengo.me/roots/287\"},{\"spel\":[\"pend\"],\"mean\":[\"ぶら下げる\"],\"url\":\"http://gogengo.me/roots/377\"},{\"spel\":[\"penta-\",\"pent-\"],\"mean\":[\"5 つの\"],\"url\":\"http://gogengo.me/roots/67\"},{\"spel\":[\"per-\",\"par-\"],\"mean\":[\"徹底的に\"],\"url\":\"http://gogengo.me/roots/184\"},{\"spel\":[\"peri-\"],\"mean\":[\"周辺の\"],\"url\":\"http://gogengo.me/roots/210\"},{\"spel\":[\"philo-\"],\"mean\":[\"愛\"],\"url\":\"http://gogengo.me/roots/325\"},{\"spel\":[\"phone\"],\"mean\":[\"音\"],\"url\":\"http://gogengo.me/roots/203\"},{\"spel\":[\"photo-\"],\"mean\":[\"光\"],\"url\":\"http://gogengo.me/roots/137\"},{\"spel\":[\"plane\"],\"mean\":[\"平面\"],\"url\":\"http://gogengo.me/roots/121\"},{\"spel\":[\"ply\",\"ploy\",\"play\",\"plex\"],\"mean\":[\"折る\"],\"url\":\"http://gogengo.me/roots/187\"},{\"spel\":[\"point\",\"pungere\"],\"mean\":[\"穴を開ける\",\"指す\"],\"url\":\"http://gogengo.me/roots/401\"},{\"spel\":[\"polar\",\"polus\"],\"mean\":[\"極の\"],\"url\":\"http://gogengo.me/roots/158\"},{\"spel\":[\"poly-\"],\"mean\":[\"たくさんの\"],\"url\":\"http://gogengo.me/roots/68\"},{\"spel\":[\"popul\",\"publ\"],\"mean\":[\"人々\"],\"url\":\"http://gogengo.me/roots/392\"},{\"spel\":[\"port\"],\"mean\":[\"運ぶ\",\"港\"],\"url\":\"http://gogengo.me/roots/159\"},{\"spel\":[\"pos\",\"posit\",\"pose\",\"pone\"],\"mean\":[\"置く\"],\"url\":\"http://gogengo.me/roots/341\"},{\"spel\":[\"posi\",\"pot\"],\"mean\":[\"飲む\"],\"url\":\"http://gogengo.me/roots/510\"},{\"spel\":[\"posse\",\"pot\"],\"mean\":[\"できる\"],\"url\":\"http://gogengo.me/roots/463\"},{\"spel\":[\"post-\"],\"mean\":[\"後に\"],\"url\":\"http://gogengo.me/roots/367\"},{\"spel\":[\"potamo\",\"potamos\"],\"mean\":[\"川\"],\"url\":\"http://gogengo.me/roots/540\"},{\"spel\":[\"pre-\",\"pro-\",\"pur-\"],\"mean\":[\"前に\",\"前もって\",\"代わりの\"],\"url\":\"http://gogengo.me/roots/49\"},{\"spel\":[\"press\"],\"mean\":[\"押す\"],\"url\":\"http://gogengo.me/roots/323\"},{\"spel\":[\"prou\"],\"mean\":[\"利益\"],\"url\":\"http://gogengo.me/roots/468\"},{\"spel\":[\"psycho-\"],\"mean\":[\"精神\",\"心理\"],\"url\":\"http://gogengo.me/roots/212\"},{\"spel\":[\"pul\",\"ple\",\"ply\"],\"mean\":[\"満たす\"],\"url\":\"http://gogengo.me/roots/453\"},{\"spel\":[\"puta\"],\"mean\":[\"数える\"],\"url\":\"http://gogengo.me/roots/518\"},{\"spel\":[\"quali\"],\"mean\":[\"質\"],\"url\":\"http://gogengo.me/roots/487\"},{\"spel\":[\"quire\",\"quis\",\"quest\"],\"mean\":[\"探し求める\"],\"url\":\"http://gogengo.me/roots/381\"},{\"spel\":[\"re\"],\"mean\":[\"もの\"],\"url\":\"http://gogengo.me/roots/394\"},{\"spel\":[\"re-\"],\"mean\":[\"後ろへ\",\"再び\",\"反対に\",\"強意\"],\"url\":\"http://gogengo.me/roots/44\"},{\"spel\":[\"rect\",\"ress\",\"reg\"],\"mean\":[\"導く\",\"まっすぐな\"],\"url\":\"http://gogengo.me/roots/498\"},{\"spel\":[\"retro-\"],\"mean\":[\"後ろ\"],\"url\":\"http://gogengo.me/roots/214\"},{\"spel\":[\"roll\",\"ret\"],\"mean\":[\"回転する\",\"名簿\"],\"url\":\"http://gogengo.me/roots/101\"},{\"spel\":[\"rub\"],\"mean\":[\"赤\"],\"url\":\"http://gogengo.me/roots/429\"},{\"spel\":[\"sacr\"],\"mean\":[\"神聖な\"],\"url\":\"http://gogengo.me/roots/488\"},{\"spel\":[\"sal\"],\"mean\":[\"塩\"],\"url\":\"http://gogengo.me/roots/449\"},{\"spel\":[\"satis\"],\"mean\":[\"十分な\"],\"url\":\"http://gogengo.me/roots/420\"},{\"spel\":[\"sci\"],\"mean\":[\"知る\"],\"url\":\"http://gogengo.me/roots/408\"},{\"spel\":[\"scoru\"],\"mean\":[\"20 の集まり\",\"印\"],\"url\":\"http://gogengo.me/roots/526\"},{\"spel\":[\"scribe\"],\"mean\":[\"書く\"],\"url\":\"http://gogengo.me/roots/38\"},{\"spel\":[\"se\",\"selu\",\"sui\"],\"mean\":[\"それ自身\"],\"url\":\"http://gogengo.me/roots/527\"},{\"spel\":[\"se-\"],\"mean\":[\"離れて\"],\"url\":\"http://gogengo.me/roots/299\"},{\"spel\":[\"sect\"],\"mean\":[\"切る\"],\"url\":\"http://gogengo.me/roots/260\"},{\"spel\":[\"see\"],\"mean\":[\"見る\"],\"url\":\"http://gogengo.me/roots/148\"},{\"spel\":[\"semi-\"],\"mean\":[\"半分の\"],\"url\":\"http://gogengo.me/roots/267\"},{\"spel\":[\"sensus\"],\"mean\":[\"感じる\",\"意味\"],\"url\":\"http://gogengo.me/roots/131\"},{\"spel\":[\"serv\"],\"mean\":[\"仕える\"],\"url\":\"http://gogengo.me/roots/474\"},{\"spel\":[\"serv\"],\"mean\":[\"見守る\"],\"url\":\"http://gogengo.me/roots/475\"},{\"spel\":[\"set\",\"sed\"],\"mean\":[\"座る\",\"置く\"],\"url\":\"http://gogengo.me/roots/284\"},{\"spel\":[\"sidus\",\"siren\"],\"mean\":[\"星\"],\"url\":\"http://gogengo.me/roots/530\"},{\"spel\":[\"sign\"],\"mean\":[\"しるし\"],\"url\":\"http://gogengo.me/roots/441\"},{\"spel\":[\"sim-\",\"sin-\"],\"mean\":[\"1 つ\"],\"url\":\"http://gogengo.me/roots/512\"},{\"spel\":[\"simil\",\"simul\"],\"mean\":[\"似ている\"],\"url\":\"http://gogengo.me/roots/500\"},{\"spel\":[\"sist\",\"st\"],\"mean\":[\"立つ\"],\"url\":\"http://gogengo.me/roots/161\"},{\"spel\":[\"skep\"],\"mean\":[\"切る\",\"形\"],\"url\":\"http://gogengo.me/roots/523\"},{\"spel\":[\"sode\"],\"mean\":[\"入る\"],\"url\":\"http://gogengo.me/roots/374\"},{\"spel\":[\"soft\"],\"mean\":[\"やさしい\",\"ゆるやかな\"],\"url\":\"http://gogengo.me/roots/516\"},{\"spel\":[\"sophy\",\"sophi\"],\"mean\":[\"知\",\"賢さ\"],\"url\":\"http://gogengo.me/roots/326\"},{\"spel\":[\"space\",\"spatium\"],\"mean\":[\"距離\",\"宇宙\"],\"url\":\"http://gogengo.me/roots/298\"},{\"spel\":[\"spect\"],\"mean\":[\"見る\"],\"url\":\"http://gogengo.me/roots/188\"},{\"spel\":[\"spectro-\"],\"mean\":[\"分光\"],\"url\":\"http://gogengo.me/roots/215\"},{\"spel\":[\"spell\",\"spel\"],\"mean\":[\"暗唱する\",\"つづる\"],\"url\":\"http://gogengo.me/roots/180\"},{\"spel\":[\"sphaira\"],\"mean\":[\"球\"],\"url\":\"http://gogengo.me/roots/266\"},{\"spel\":[\"stetho-\"],\"mean\":[\"胸の\"],\"url\":\"http://gogengo.me/roots/216\"},{\"spel\":[\"sub-\",\"suf-\",\"sup-\",\"sus-\",\"suc-\"],\"mean\":[\"下に\",\"代理\"],\"url\":\"http://gogengo.me/roots/45\"},{\"spel\":[\"sucre\",\"saccharon\"],\"mean\":[\"砂糖\",\"砂利\"],\"url\":\"http://gogengo.me/roots/529\"},{\"spel\":[\"sum\"],\"mean\":[\"一番高い\"],\"url\":\"http://gogengo.me/roots/460\"},{\"spel\":[\"sur-\"],\"mean\":[\"上の\",\"超えて\"],\"url\":\"http://gogengo.me/roots/54\"},{\"spel\":[\"sure\"],\"mean\":[\"確実な\"],\"url\":\"http://gogengo.me/roots/103\"},{\"spel\":[\"sym-\",\"syn-\"],\"mean\":[\"一緒の\"],\"url\":\"http://gogengo.me/roots/217\"},{\"spel\":[\"tail\"],\"mean\":[\"切る\"],\"url\":\"http://gogengo.me/roots/324\"},{\"spel\":[\"tain\",\"tinent\",\"tinue\"],\"mean\":[\"つかんで離さない\"],\"url\":\"http://gogengo.me/roots/336\"},{\"spel\":[\"talk\",\"talo\"],\"mean\":[\"詳しく述べる\"],\"url\":\"http://gogengo.me/roots/82\"},{\"spel\":[\"tange\"],\"mean\":[\"触れる\"],\"url\":\"http://gogengo.me/roots/422\"},{\"spel\":[\"techno-\"],\"mean\":[\"技術の\"],\"url\":\"http://gogengo.me/roots/296\"},{\"spel\":[\"tect\"],\"mean\":[\"覆う\"],\"url\":\"http://gogengo.me/roots/380\"},{\"spel\":[\"tele-\"],\"mean\":[\"遠く\"],\"url\":\"http://gogengo.me/roots/139\"},{\"spel\":[\"tempt\",\"tent\"],\"mean\":[\"試す\"],\"url\":\"http://gogengo.me/roots/502\"},{\"spel\":[\"tend\",\"tens\",\"tent\"],\"mean\":[\"伸ばす\"],\"url\":\"http://gogengo.me/roots/344\"},{\"spel\":[\"term\",\"terminus\"],\"mean\":[\"終わり\"],\"url\":\"http://gogengo.me/roots/451\"},{\"spel\":[\"tetra-\"],\"mean\":[\"4 つの\"],\"url\":\"http://gogengo.me/roots/276\"},{\"spel\":[\"the\",\"theo\"],\"mean\":[\"神\"],\"url\":\"http://gogengo.me/roots/404\"},{\"spel\":[\"therapy\"],\"mean\":[\"治療\"],\"url\":\"http://gogengo.me/roots/122\"},{\"spel\":[\"thesis\"],\"mean\":[\"置く\"],\"url\":\"http://gogengo.me/roots/138\"},{\"spel\":[\"time\"],\"mean\":[\"時\"],\"url\":\"http://gogengo.me/roots/150\"},{\"spel\":[\"tom\"],\"mean\":[\"切る\"],\"url\":\"http://gogengo.me/roots/416\"},{\"spel\":[\"tone\"],\"mean\":[\"音\",\"調子\"],\"url\":\"http://gogengo.me/roots/136\"},{\"spel\":[\"topo\"],\"mean\":[\"場所\",\"位置\"],\"url\":\"http://gogengo.me/roots/447\"},{\"spel\":[\"tract\"],\"mean\":[\"引っぱる\"],\"url\":\"http://gogengo.me/roots/322\"},{\"spel\":[\"trans-\",\"tra-\"],\"mean\":[\"向こう側へ\",\"変換\"],\"url\":\"http://gogengo.me/roots/157\"},{\"spel\":[\"tri-\"],\"mean\":[\"3 つの\"],\"url\":\"http://gogengo.me/roots/46\"},{\"spel\":[\"un-\"],\"mean\":[\"否定\"],\"url\":\"http://gogengo.me/roots/141\"},{\"spel\":[\"unda\"],\"mean\":[\"波\"],\"url\":\"http://gogengo.me/roots/483\"},{\"spel\":[\"under\"],\"mean\":[\"下に\"],\"url\":\"http://gogengo.me/roots/481\"},{\"spel\":[\"uni\"],\"mean\":[\"ひとつにする\"],\"url\":\"http://gogengo.me/roots/201\"},{\"spel\":[\"uni-\"],\"mean\":[\"1 つの\"],\"url\":\"http://gogengo.me/roots/143\"},{\"spel\":[\"use\"],\"mean\":[\"使う\"],\"url\":\"http://gogengo.me/roots/156\"},{\"spel\":[\"vac\"],\"mean\":[\"からっぽ\"],\"url\":\"http://gogengo.me/roots/398\"},{\"spel\":[\"vade\"],\"mean\":[\"進んで行く\"],\"url\":\"http://gogengo.me/roots/317\"},{\"spel\":[\"val\"],\"mean\":[\"価値\",\"強い\"],\"url\":\"http://gogengo.me/roots/497\"},{\"spel\":[\"vene\"],\"mean\":[\"来る\"],\"url\":\"http://gogengo.me/roots/464\"},{\"spel\":[\"verb\"],\"mean\":[\"言語\",\"動詞\"],\"url\":\"http://gogengo.me/roots/133\"},{\"spel\":[\"vert\",\"verse\"],\"mean\":[\"向きを変える\",\"形や性質を変える\"],\"url\":\"http://gogengo.me/roots/240\"},{\"spel\":[\"vid\",\"vis\"],\"mean\":[\"分ける\"],\"url\":\"http://gogengo.me/roots/459\"},{\"spel\":[\"view\",\"vis\"],\"mean\":[\"見る\"],\"url\":\"http://gogengo.me/roots/151\"},{\"spel\":[\"vince\"],\"mean\":[\"征服する\"],\"url\":\"http://gogengo.me/roots/476\"},{\"spel\":[\"vive\",\"viv\",\"vit\"],\"mean\":[\"生きる\"],\"url\":\"http://gogengo.me/roots/56\"},{\"spel\":[\"voc\",\"vok\"],\"mean\":[\"呼ぶ\",\"声\"],\"url\":\"http://gogengo.me/roots/469\"},{\"spel\":[\"volve\",\"volt\"],\"mean\":[\"回転する\"],\"url\":\"http://gogengo.me/roots/36\"},{\"spel\":[\"ware\"],\"mean\":[\"知覚する\",\"気を払う\"],\"url\":\"http://gogengo.me/roots/515\"},{\"spel\":[\"way\",\"weg\",\"wegh\",\"via\"],\"mean\":[\"道\",\"行く\"],\"url\":\"http://gogengo.me/roots/83\"},{\"spel\":[\"weik\",\"week\"],\"mean\":[\"巻き付ける\",\"週\"],\"url\":\"http://gogengo.me/roots/278\"},{\"spel\":[\"well\"],\"mean\":[\"よい\"],\"url\":\"http://gogengo.me/roots/387\"},{\"spel\":[\"word\"],\"mean\":[\"単語\"],\"url\":\"http://gogengo.me/roots/436\"},{\"spel\":[\"work\"],\"mean\":[\"はたらく\"],\"url\":\"http://gogengo.me/roots/84\"},{\"spel\":[\"xeno-\"],\"mean\":[\"外国人\",\"未知の\"],\"url\":\"http://gogengo.me/roots/223\"},{\"spel\":[\"yer\"],\"mean\":[\"年\"],\"url\":\"http://gogengo.me/roots/227\"},{\"spel\":[\"yester-\"],\"mean\":[\"すぐ前の\"],\"url\":\"http://gogengo.me/roots/224\"}]");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvRm9ybUxhYmVsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvU2VsZWN0Qm94LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvU2VsZWN0Rm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXgudHN4XCIsXCJsaWJzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBrZXl3b3JkcyBmcm9tIFwiLi9rZXl3b3Jkcy5qc29uXCI7XG5pbXBvcnQgKiBhcyBfIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IFNlbGVjdEZvcm0gZnJvbSBcIi4vY29tcG9uZW50cy9vcmdhbmlzbXMvU2VsZWN0Rm9ybVwiO1xuXG5jb25zdCBrZXl3b3JkTGlzdCA9IGtleXdvcmRzLnJlZHVjZShcbiAgKHAsIHsgc3BlbCwgLi4uYyB9KSA9PiBbXG4gICAgLi4ucCxcbiAgICAuLi5zcGVsLm1hcCh2ID0+ICh7XG4gICAgICAuLi5jLFxuICAgICAgc3BlbDogdi5yZXBsYWNlKC8tLywgXCJcIiksXG4gICAgICBjYXRlZ29yeTogdi5tYXRjaCgvLSQvKSA/IFwicHJlZml4XCIgOiB2Lm1hdGNoKC9eLS8pID8gXCJzdWZmaXhcIiA6IFwicm9vdFwiXG4gICAgfSkpXG4gIF0sXG4gIFtdIGFzIHtcbiAgICBzcGVsOiBzdHJpbmc7XG4gICAgbWVhbjogc3RyaW5nW107XG4gICAgY2F0ZWdvcnk6IHN0cmluZztcbiAgfVtdXG4pO1xuXG5jb25zdCBGQzogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGtleXdvcmRMaXN0KTtcbiAgY29uc3QgW2RhdGFdID0gUmVhY3QudXNlU3RhdGUoa2V5d29yZExpc3QpO1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxfLkdyaWRcbiAgICAgICAgY29udGFpbmVyXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcbiAgICAgICAgc3R5bGU9e3sgbWluSGVpZ2h0OiBcIjEwMHZoXCIgfX1cbiAgICAgID5cbiAgICAgICAgPFNlbGVjdEZvcm1cbiAgICAgICAgICB0ZXh0PVwiUHJlZml4XCJcbiAgICAgICAgICBsaXN0PXtkYXRhXG4gICAgICAgICAgICAuZmlsdGVyKCh7IGNhdGVnb3J5IH0pID0+IGNhdGVnb3J5ID09PSBcInByZWZpeFwiKVxuICAgICAgICAgICAgLm1hcCgoeyBzcGVsIH0pID0+IHNwZWwpfVxuICAgICAgICAvPlxuICAgICAgICA8U2VsZWN0Rm9ybVxuICAgICAgICAgIHRleHQ9XCJSb290XCJcbiAgICAgICAgICBsaXN0PXtkYXRhXG4gICAgICAgICAgICAuZmlsdGVyKCh7IGNhdGVnb3J5IH0pID0+IGNhdGVnb3J5ID09PSBcInJvb3RcIilcbiAgICAgICAgICAgIC5tYXAoKHsgc3BlbCB9KSA9PiBzcGVsKX1cbiAgICAgICAgLz5cbiAgICAgICAgPFNlbGVjdEZvcm1cbiAgICAgICAgICB0ZXh0PVwiU3VmZml4XCJcbiAgICAgICAgICBsaXN0PXtkYXRhXG4gICAgICAgICAgICAuZmlsdGVyKCh7IGNhdGVnb3J5IH0pID0+IGNhdGVnb3J5ID09PSBcInN1ZmZpeFwiKVxuICAgICAgICAgICAgLm1hcCgoeyBzcGVsIH0pID0+IHNwZWwpfVxuICAgICAgICAvPlxuICAgICAgPC9fLkdyaWQ+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZDO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJbnB1dExhYmVsIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICB0ZXh0OiBzdHJpbmc7XG59XG5jb25zdCBGQzogUmVhY3QuRkM8UHJvcHM+ID0gKHsgdGV4dCB9KSA9PiA8SW5wdXRMYWJlbD57dGV4dH08L0lucHV0TGFiZWw+O1xuXG5leHBvcnQgZGVmYXVsdCBGQztcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2VsZWN0LCBNZW51SXRlbSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgbGlzdDogc3RyaW5nW107XG4gIHdpZHRoPzogbnVtYmVyO1xufVxuY29uc3QgRkM6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGxpc3QsIHdpZHRoID0gMTAwIH0pID0+IChcbiAgPFNlbGVjdCBzdHlsZT17eyB3aWR0aCB9fSBvbkNoYW5nZT17KCkgPT4ge319PlxuICAgIHtsaXN0Lm1hcCgoaywgaSkgPT4gKFxuICAgICAgPE1lbnVJdGVtIHZhbHVlPXtrfSBrZXk9e2l9PlxuICAgICAgICB7a31cbiAgICAgIDwvTWVudUl0ZW0+XG4gICAgKSl9XG4gIDwvU2VsZWN0PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRkM7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgRm9ybUxhYmVsIGZyb20gXCIuLi9hdG9tcy9Gb3JtTGFiZWxcIjtcbmltcG9ydCBTZWxlY3RCb3ggZnJvbSBcIi4uL21vbGVjdWxlcy9TZWxlY3RCb3hcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdGV4dDogc3RyaW5nO1xuICBsaXN0OiBzdHJpbmdbXTtcbn1cbmNvbnN0IEZDOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyB0ZXh0LCBsaXN0IH0pID0+IChcbiAgPEZvcm1Db250cm9sPlxuICAgIDxGb3JtTGFiZWwgdGV4dD17dGV4dH0gLz5cbiAgICA8U2VsZWN0Qm94IGxpc3Q9e2xpc3R9IC8+XG4gIDwvRm9ybUNvbnRyb2w+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGQztcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcblxuY29uc3QgYXBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmFwcC5pZCA9IFwiYXBwXCI7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFwcCk7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9