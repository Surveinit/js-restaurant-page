/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/home.js */ \"./src/module/home.js\");\n/* harmony import */ var _module_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/menu.js */ \"./src/module/menu.js\");\n/* harmony import */ var _module_about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/about.js */ \"./src/module/about.js\");\nconsole.log('from index.js')\n\n;\n\n\n\n(function run() {\n  const contentContainer = document.getElementById(\"content\");\n  contentContainer.innerHTML = \"\";\n  \n  document.getElementById(\"home-btn\").addEventListener(\"click\", _module_home_js__WEBPACK_IMPORTED_MODULE_0__.homeModule);\n  document.getElementById(\"menu-btn\").addEventListener(\"click\", _module_menu_js__WEBPACK_IMPORTED_MODULE_1__.menuModule);\n  document.getElementById(\"about-btn\").addEventListener(\"click\", _module_about_js__WEBPACK_IMPORTED_MODULE_2__.aboutModule);\n   \n})();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUVBLENBQThDO0FBQ0E7QUFDRTs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsdURBQVU7QUFDMUUsZ0VBQWdFLHVEQUFVO0FBQzFFLGlFQUFpRSx5REFBVztBQUM1RTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnZnJvbSBpbmRleC5qcycpXG5cbmltcG9ydCB7IGhvbWVNb2R1bGUgfSBmcm9tIFwiLi9tb2R1bGUvaG9tZS5qc1wiO1xuaW1wb3J0IHsgbWVudU1vZHVsZSB9IGZyb20gXCIuL21vZHVsZS9tZW51LmpzXCI7XG5pbXBvcnQgeyBhYm91dE1vZHVsZSB9IGZyb20gXCIuL21vZHVsZS9hYm91dC5qc1wiO1xuXG4oZnVuY3Rpb24gcnVuKCkge1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWUtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBob21lTW9kdWxlKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWVudU1vZHVsZSk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXQtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhYm91dE1vZHVsZSk7XG4gICBcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/module/about.js":
/*!*****************************!*\
  !*** ./src/module/about.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutModule: () => (/* binding */ aboutModule)\n/* harmony export */ });\nfunction aboutModule() {\n  const contentContainer = document.getElementById(\"content\");\n  contentContainer.innerHTML = \"\";\n\n  const authorHeading = document.createElement(\"h2\");\n  const authorDescription = document.createElement(\"p\");\n\n  authorHeading.textContent = \"Surve\";\n  authorDescription.content = \"I am the best ig!\";\n\n  contentContainer.appendChild(authorHeading);\n  contentContainer.appendChild(authorDescription);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlL2Fib3V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGUvYWJvdXQuanM/MjVkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gYWJvdXRNb2R1bGUoKSB7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICBjb25zdCBhdXRob3JIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb25zdCBhdXRob3JEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIGF1dGhvckhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlN1cnZlXCI7XG4gIGF1dGhvckRlc2NyaXB0aW9uLmNvbnRlbnQgPSBcIkkgYW0gdGhlIGJlc3QgaWchXCI7XG5cbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChhdXRob3JIZWFkaW5nKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChhdXRob3JEZXNjcmlwdGlvbik7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/module/about.js\n");

/***/ }),

/***/ "./src/module/home.js":
/*!****************************!*\
  !*** ./src/module/home.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homeModule: () => (/* binding */ homeModule)\n/* harmony export */ });\nfunction homeModule() {\n  const contentContainer = document.getElementById(\"content\");\n  contentContainer.innerHTML = \"\";\n\n  const recipeHeading = document.createElement(\"h2\");\n  const recipeImage = document.createElement(\"img\");\n\n  recipeHeading.textContent = \"Puranpoli\";\n  recipeImage.src = \"https://static.tnn.in/thumb/msid-114212590,thumbsize-1439396,width-1280,height-720,resizemode-75/114212590.jpg\";\n\n  contentContainer.appendChild(recipeHeading);\n  contentContainer.appendChild(recipeImage);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlL2hvbWUuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZS9ob21lLmpzPzI4ZTAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGhvbWVNb2R1bGUoKSB7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICBjb25zdCByZWNpcGVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb25zdCByZWNpcGVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgcmVjaXBlSGVhZGluZy50ZXh0Q29udGVudCA9IFwiUHVyYW5wb2xpXCI7XG4gIHJlY2lwZUltYWdlLnNyYyA9IFwiaHR0cHM6Ly9zdGF0aWMudG5uLmluL3RodW1iL21zaWQtMTE0MjEyNTkwLHRodW1ic2l6ZS0xNDM5Mzk2LHdpZHRoLTEyODAsaGVpZ2h0LTcyMCxyZXNpemVtb2RlLTc1LzExNDIxMjU5MC5qcGdcIjtcblxuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHJlY2lwZUhlYWRpbmcpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHJlY2lwZUltYWdlKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/module/home.js\n");

/***/ }),

/***/ "./src/module/menu.js":
/*!****************************!*\
  !*** ./src/module/menu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuModule: () => (/* binding */ menuModule)\n/* harmony export */ });\nconst recipes = [\n  {\n    name: \"Puranpoli\",\n    description:\n      \"Sweet flatbread stuffed with lentil jaggery filling, festive treat.\",\n  },\n  {\n    name: \"Misal Pav\",\n    description: \"Spicy sprout curry topped with farsan, served with pav.\",\n  },\n  {\n    name: \"Bhakri with Thecha\",\n    description: \"Jowar roti paired with spicy green chili garlic chutney.\",\n  },\n  {\n    name: \"Sabudana Khichdi\",\n    description:\n      \"Tapioca pearls stir-fried with peanuts, potatoes, and spices.\",\n  },\n  {\n    name: \"Vada Pav\",\n    description:\n      \"Spicy potato fritter in bun with chutney, Mumbai's favorite snack.\",\n  },\n];\n\nfunction menuModule() {\n  const contentContainer = document.getElementById(\"content\");\n  contentContainer.innerHTML = \"\";\n\n  recipes.forEach((recipe) => {\n    const card = document.createElement(\"div\");\n    card.classList.add(\"card\");\n    card.dataset.id = recipe.id;\n\n    card.innerHTML = `<h2>${recipe.name}</h2>\n    <p>${recipe.description}</p>`;\n\n    contentContainer.appendChild(card);\n  });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlL21lbnUuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLFlBQVk7QUFDeEMsU0FBUyxtQkFBbUI7O0FBRTVCO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZS9tZW51LmpzPzYwNmMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVjaXBlcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiUHVyYW5wb2xpXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlN3ZWV0IGZsYXRicmVhZCBzdHVmZmVkIHdpdGggbGVudGlsIGphZ2dlcnkgZmlsbGluZywgZmVzdGl2ZSB0cmVhdC5cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTWlzYWwgUGF2XCIsXG4gICAgZGVzY3JpcHRpb246IFwiU3BpY3kgc3Byb3V0IGN1cnJ5IHRvcHBlZCB3aXRoIGZhcnNhbiwgc2VydmVkIHdpdGggcGF2LlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJCaGFrcmkgd2l0aCBUaGVjaGFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJKb3dhciByb3RpIHBhaXJlZCB3aXRoIHNwaWN5IGdyZWVuIGNoaWxpIGdhcmxpYyBjaHV0bmV5LlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJTYWJ1ZGFuYSBLaGljaGRpXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRhcGlvY2EgcGVhcmxzIHN0aXItZnJpZWQgd2l0aCBwZWFudXRzLCBwb3RhdG9lcywgYW5kIHNwaWNlcy5cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVmFkYSBQYXZcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiU3BpY3kgcG90YXRvIGZyaXR0ZXIgaW4gYnVuIHdpdGggY2h1dG5leSwgTXVtYmFpJ3MgZmF2b3JpdGUgc25hY2suXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gbWVudU1vZHVsZSgpIHtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgY29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIHJlY2lwZXMuZm9yRWFjaCgocmVjaXBlKSA9PiB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBjYXJkLmRhdGFzZXQuaWQgPSByZWNpcGUuaWQ7XG5cbiAgICBjYXJkLmlubmVySFRNTCA9IGA8aDI+JHtyZWNpcGUubmFtZX08L2gyPlxuICAgIDxwPiR7cmVjaXBlLmRlc2NyaXB0aW9ufTwvcD5gO1xuXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcbiAgfSk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/module/menu.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;