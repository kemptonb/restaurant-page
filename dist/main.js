/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\n//content container\nconst content = document.querySelector('#content');\n\n//header and divider\nconst head = document.createElement(\"h1\");\nhead.textContent = \"A V A N T - G R U B\";\nhead.setAttribute(\"id\", \"head\");\ncontent.appendChild(head);\n\nconst divider = document.createElement(\"HR\");\ndivider.setAttribute(\"id\", \"divider\");\nhead.appendChild(divider);\n\n//navBar\nconst navBarWrap = document.createElement(\"ul\");\nnavBarWrap.setAttribute(\"id\", \"navBarWrap\");\ncontent.appendChild(navBarWrap);\n\nconst navBar = document.createElement(\"ul\");\nnavBar.setAttribute(\"id\", \"navBar\");\nnavBarWrap.appendChild(navBar);\n\nconst navTab1 = document.createElement(\"li\");\nnavTab1.textContent = \"about\";\nnavTab1.setAttribute(\"id\", \"navTab\");\nnavBar.appendChild(navTab1);\n\nconst navTab2 = document.createElement(\"li\");\nnavTab2.setAttribute(\"id\", \"navTab\");\nnavTab2.textContent = \"menu\";\nnavBar.appendChild(navTab2);\n\nconst navTab3 = document.createElement(\"li\");\nnavTab3.setAttribute(\"id\", \"navTab\");\nnavTab3.textContent = \"contact\";\nnavBar.appendChild(navTab3);\n\nconst divider2 = document.createElement(\"HR\");\ndivider2.setAttribute(\"id\", \"divider2\");\ncontent.appendChild(divider2);\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;