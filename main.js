/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst about = () => {\n\n        console.log(\"mod2\")\n\n        //About Page Module\n\n        //change justify content of body, so title shows at top of page\n        document.body.style.justifyContent = \"normal\";\n\n        //header and divider\n        const head = document.createElement(\"h1\");\n        head.textContent = \"A V A N T - G R U B\";\n        head.setAttribute(\"id\", \"head\");\n        content.appendChild(head);\n\n        const divider = document.createElement(\"HR\");\n        divider.setAttribute(\"id\", \"divider\");\n        head.appendChild(divider);\n\n        //navBarWrap\n        const navBarWrap = document.createElement(\"ul\");\n        navBarWrap.setAttribute(\"id\", \"navBarWrap\");\n        content.appendChild(navBarWrap);\n\n        //navBar\n        const navBar = document.createElement(\"ul\");\n        navBar.setAttribute(\"id\", \"navBar\");\n        navBarWrap.appendChild(navBar);\n\n        //ul, li, a\n        //tab1\n        const navTab1 = document.createElement(\"li\");\n        navTab1.setAttribute(\"id\", \"navTab\");\n        navBar.appendChild(navTab1);\n\n        const aRef1 = document.createElement(\"a\");\n        aRef1.href = \"http://www.cnn.com/\";\n        aRef1.textContent = \"about\";\n        aRef1.setAttribute(\"id\", \"aRef\");\n        navTab1.appendChild(aRef1);\n\n        //tab2\n\n        const navTab2 = document.createElement(\"li\");\n        navTab2.setAttribute(\"id\", \"navTab\");\n        navBar.appendChild(navTab2);\n\n        const aRef2 = document.createElement(\"a\");\n        aRef2.href = \"http://www.google.com/\";\n        aRef2.textContent = \"menu\";\n        aRef2.setAttribute(\"id\", \"aRef\");\n        navTab2.appendChild(aRef2);\n\n        //tab3\n        const navTab3 = document.createElement(\"li\");\n        navTab3.setAttribute(\"id\", \"navTab\");\n        navBar.appendChild(navTab3);\n\n\n        const aRef3 = document.createElement(\"a\");\n        aRef3.href = \"http://www.bing.com/\";\n        aRef3.textContent = \"reserve\";\n        aRef3.setAttribute(\"id\", \"aRef\");\n        navTab3.appendChild(aRef3);\n\n        //content\n        const div1 = document.createElement(\"h1\");\n        div1.setAttribute(\"id\", \"divCont\");\n        content.appendChild(div1);\n\n\n        const head2 = document.createElement(\"h3\");\n        head2.textContent = \"A B O U T\";\n        head2.setAttribute(\"id\", \"subHead\");\n        div1.appendChild(head2);\n\n        const para1 = document.createElement(\"p\");\n        let contString1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, a\n    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n    Ut enim ad minim veniam, quis nostrud exercitation ullamco \n    laboris nisi ut aliquip ex ea commodo consequat.`;\n        para1.textContent = contString1;\n        div1.appendChild(para1);\n\n        const para2 = document.createElement(\"p\");\n        let contString2 = `\n    Duis aute irure dolor in reprehenderit in voluptate velit esse \n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, \n    sunt in culpa qui officia deserunt mollit anim id est laborum.`;\n        para2.textContent = contString2;\n        div1.appendChild(para2);\n   \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst homePage = () =>{\nconsole.log(\"mod0\")\n//Home Page Module\n\n//header and divider\nconst head = document.createElement(\"h1\");\nhead.textContent = \"A V A N T - G R U B\";\nhead.setAttribute(\"id\", \"head\");\ncontent.appendChild(head);\n\nconst divider = document.createElement(\"HR\");\ndivider.setAttribute(\"id\", \"divider\");\nhead.appendChild(divider);\n\n//navBarWrap\nconst navBarWrap = document.createElement(\"ul\");\nnavBarWrap.setAttribute(\"id\", \"navBarWrap\");\ncontent.appendChild(navBarWrap);\n\n//navBar\nconst navBar = document.createElement(\"ul\");\nnavBar.setAttribute(\"id\", \"navBar\");\nnavBarWrap.appendChild(navBar);\n\n//ul, li, a\n//tab1\nconst navTab1 = document.createElement(\"li\");\nnavTab1.setAttribute(\"id\", \"navTab\");\nnavBar.appendChild(navTab1);\n\nconst aRef1 = document.createElement(\"a\");\naRef1.addEventListener(\"click\", event =>{aboutPage();});\naRef1.textContent = \"about\";\naRef1.setAttribute(\"id\", \"aRef\");\nnavTab1.appendChild(aRef1);\n\n//tab2\n\nconst navTab2 = document.createElement(\"li\");\nnavTab2.setAttribute(\"id\", \"navTab\");\nnavBar.appendChild(navTab2);\n\nconst aRef2 = document.createElement(\"a\");\naRef2.addEventListener(\"click\", event =>{changePage.menuPage();});\naRef2.textContent = \"menu\";\naRef2.setAttribute(\"id\", \"aRef\");\nnavTab2.appendChild(aRef2);\n\n//tab3\nconst navTab3 = document.createElement(\"li\");\nnavTab3.setAttribute(\"id\", \"navTab\");\nnavBar.appendChild(navTab3);\n\n\nconst aRef3 = document.createElement(\"a\");\naRef3.addEventListener(\"click\", event =>{changePage.menuPage();});\naRef3.textContent = \"reserve\";\naRef3.setAttribute(\"id\", \"aRef\");\nnavTab3.appendChild(aRef3);\n\n}//end homePage() \n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n\n//# sourceURL=webpack://restaurant-page/./src/homePage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage.js */ \"./src/homePage.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _reserve__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reserve */ \"./src/reserve.js\");\n\n\n\n\n\n\n\n(async () => {\n    let pageLoad = () => {\n\n        //content container\n        const content = document.querySelector('#content');\n    \n    \n        const changePage = {\n            homePage: () => { (0,_homePage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();},\n    \n            aboutPage: () => { (0,_about_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();},\n    \n            menuPage: () => { (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); },\n    \n            reservePage: () => { (0,_reserve__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();},\n\n            test: () => {alert(\"hi\");}\n    \n        };\n    \n        \n      //return {homePage, about, menu, reserve};\n    \n    }\n    await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./homePage.js */ \"./src/homePage.js\")).then(pageLoad());\n        let pageDisplay = (0,_homePage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        return pageDisplay;\n  })();  \n\n\n\n  \n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () =>{\n    console.log(\"mod2\")\n    \n    //About Page Module\n\n    //change justify content of body, so title shows at top of page\n    document.body.style.justifyContent = \"normal\";\n    \n    //header and divider\n    const head = document.createElement(\"h1\");\n    head.textContent = \"A V A N T - G R U B\";\n    head.setAttribute(\"id\", \"head\");\n    content.appendChild(head);\n    \n    const divider = document.createElement(\"HR\");\n    divider.setAttribute(\"id\", \"divider\");\n    head.appendChild(divider);\n    \n    //navBarWrap\n    const navBarWrap = document.createElement(\"ul\");\n    navBarWrap.setAttribute(\"id\", \"navBarWrap\");\n    content.appendChild(navBarWrap);\n    \n    //navBar\n    const navBar = document.createElement(\"ul\");\n    navBar.setAttribute(\"id\", \"navBar\");\n    navBarWrap.appendChild(navBar);\n    \n    //ul, li, a\n    //tab1\n    const navTab1 = document.createElement(\"li\");\n    navTab1.setAttribute(\"id\", \"navTab\");\n    navBar.appendChild(navTab1);\n    \n    const aRef1 = document.createElement(\"a\");\n    aRef1.href = \"http://www.cnn.com/\";\n    aRef1.textContent = \"about\";\n    aRef1.setAttribute(\"id\", \"aRef\");\n    navTab1.appendChild(aRef1);\n    \n    //tab2\n    \n    const navTab2 = document.createElement(\"li\");\n    navTab2.setAttribute(\"id\", \"navTab\");\n    navBar.appendChild(navTab2);\n    \n    const aRef2 = document.createElement(\"a\");\n    aRef2.href = \"http://www.google.com/\";\n    aRef2.textContent = \"menu\";\n    aRef2.setAttribute(\"id\", \"aRef\");\n    navTab2.appendChild(aRef2);\n    \n    //tab3\n    const navTab3 = document.createElement(\"li\");\n    navTab3.setAttribute(\"id\", \"navTab\");\n    navBar.appendChild(navTab3);\n    \n    \n    const aRef3 = document.createElement(\"a\");\n    aRef3.href = \"http://www.bing.com/\";\n    aRef3.textContent = \"reserve\";\n    aRef3.setAttribute(\"id\", \"aRef\");\n    navTab3.appendChild(aRef3);\n    \n    //content\n    const div1 = document.createElement(\"h1\");\n    div1.setAttribute(\"id\", \"divCont\");\n    content.appendChild(div1);\n\n    //menu\n    const head2 = document.createElement(\"h3\");\n    head2.textContent = \"M E N U\";\n    head2.setAttribute(\"id\", \"subHead\");\n    div1.appendChild(head2);\n\n    //items\n    const menuHead1 = document.createElement(\"h5\");\n    menuHead1.textContent = \"item one\";\n    menuHead1.setAttribute(\"id\", \"menuSubHead\");\n    div1.appendChild(menuHead1);\n\n    const para1 = document.createElement(\"p\");\n    let contString1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, a\n    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;\n    para1.textContent = contString1.toLocaleLowerCase();\n    div1.appendChild(para1);\n\n    const menuHead2 = document.createElement(\"h5\");\n    menuHead2.textContent = \"item two\";\n    menuHead2.setAttribute(\"id\", \"menuSubHead\");\n    div1.appendChild(menuHead2);\n\n    const para2 = document.createElement(\"p\");\n    let contString2 = `Ut enim ad minim veniam, quis nostrud exercitation ullamco \n    laboris nisi ut aliquip ex ea commodo consequat.`;\n    para2.textContent = contString2.toLocaleLowerCase();\n    div1.appendChild(para2);\n\n    const menuHead3 = document.createElement(\"h5\");\n    menuHead3.textContent = \"item three\";\n    menuHead3.setAttribute(\"id\", \"menuSubHead\");\n    div1.appendChild(menuHead3);\n\n    const para3 = document.createElement(\"p\");\n    let contString3 = `Duis aute irure dolor in reprehenderit in voluptate velit esse \n    cillum dolore eu fugiat nulla pariatur.`;\n    para3.textContent = contString3.toLocaleLowerCase();\n    div1.appendChild(para3);\n\n    const menuHead4 = document.createElement(\"h5\");\n    menuHead4.textContent = \"item four\";\n    menuHead4.setAttribute(\"id\", \"menuSubHead\");\n    div1.appendChild(menuHead4);\n\n    const para4 = document.createElement(\"p\");\n    let contString4 = ` Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;\n    para4.textContent = contString4.toLocaleLowerCase();\n    div1.appendChild(para4);\n\n\n\n    }//end homePage()\n    \n    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/reserve.js":
/*!************************!*\
  !*** ./src/reserve.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst reserve = () =>{\n    console.log(\"mod3\")\n    \n    //About Page Module\n\n    //change justify content of body, so title shows at top of page\n    document.body.style.justifyContent = \"normal\";\n    \n    //header and divider\n    const head = document.createElement(\"h1\");\n    head.textContent = \"A V A N T - G R U B\";\n    head.setAttribute(\"id\", \"head\");\n    content.appendChild(head);\n    \n    const divider = document.createElement(\"HR\");\n    divider.setAttribute(\"id\", \"divider\");\n    head.appendChild(divider);\n    \n    //navBarWrap\n    const navBarWrap = document.createElement(\"ul\");\n    navBarWrap.setAttribute(\"id\", \"navBarWrap\");\n    content.appendChild(navBarWrap);\n    \n    //navBar\n    const navBar = document.createElement(\"ul\");\n    navBar.setAttribute(\"id\", \"navBar\");\n    navBarWrap.appendChild(navBar);\n    \n    //ul, li, a\n    //tab1\n    const navTab1 = document.createElement(\"li\");\n    navTab1.setAttribute(\"id\", \"navTab\");\n    navBar.appendChild(navTab1);\n    \n    const aRef1 = document.createElement(\"a\");\n    aRef1.href = \"http://www.cnn.com/\";\n    aRef1.textContent = \"about\";\n    aRef1.setAttribute(\"id\", \"aRef\");\n    navTab1.appendChild(aRef1);\n    \n    //tab2\n    \n    const navTab2 = document.createElement(\"li\");\n    navTab2.setAttribute(\"id\", \"navTab\");\n    navBar.appendChild(navTab2);\n    \n    const aRef2 = document.createElement(\"a\");\n    aRef2.href = \"http://www.google.com/\";\n    aRef2.textContent = \"menu\";\n    aRef2.setAttribute(\"id\", \"aRef\");\n    navTab2.appendChild(aRef2);\n    \n    //tab3\n    const navTab3 = document.createElement(\"li\");\n    navTab3.setAttribute(\"id\", \"navTab\");\n    navBar.appendChild(navTab3);\n    \n    \n    const aRef3 = document.createElement(\"a\");\n    aRef3.href = \"http://www.bing.com/\";\n    aRef3.textContent = \"reserve\";\n    aRef3.setAttribute(\"id\", \"aRef\");\n    navTab3.appendChild(aRef3);\n    \n    //content\n    const div1 = document.createElement(\"h1\");\n    div1.setAttribute(\"id\", \"divCont\");\n    content.appendChild(div1);\n\n    \n    const head2 = document.createElement(\"h3\");\n    head2.textContent = \"R E S E R V E\";\n    head2.setAttribute(\"id\", \"subHead\");\n    div1.appendChild(head2);\n\n    const para1 = document.createElement(\"p\");\n    let contString1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, a\n    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n    Ut enim ad minim veniam, quis nostrud exercitation ullamco \n    laboris nisi ut aliquip ex ea commodo consequat.`;\n    para1.textContent = contString1;\n    div1.appendChild(para1);\n\n    const para2 = document.createElement(\"p\");\n    let contString2 = `000.000.000 | 0000 W 3RD AVE, CITY, STATE`;\n    para2.textContent = contString2;\n    para2.style.display = \"flex\";\n    para2.style.justifyContent = \"center\";\n    para2.style.marginTop = \"3em\";\n    div1.appendChild(para2);\n\n    }//end homePage()\n    \n    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reserve);\n\n//# sourceURL=webpack://restaurant-page/./src/reserve.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;