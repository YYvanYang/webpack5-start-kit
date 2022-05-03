"use strict";
(self["webpackChunkwebpack5_start_kit"] = self["webpackChunkwebpack5_start_kit"] || []).push([["main"],{

/***/ 187:
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 861);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 324);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ 757);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ 294);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      message = _useState2[0],
      setMessage = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    function getMessage() {
      return _getMessage.apply(this, arguments);
    }

    function _getMessage() {
      _getMessage = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var _, message;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __webpack_require__.e(/*! import() */ "src___js").then(__webpack_require__.bind(__webpack_require__, /*! ./_ */ 650));

              case 2:
                _ = _context.sent;
                message = _.join(['Hello', 'World'], ' ');
                setMessage(message);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _getMessage.apply(this, arguments);
    }

    getMessage();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h1", null, "Hello World"), message);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ 579:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 294);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ 745);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ 187);



var container = document.getElementById('app');
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container); // createRoot(container!) if you use TypeScript

root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(579)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41ZmExZTU0Mzc0NzA5Mjk2MzRlMC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0csR0FBVCxHQUFlO0VBQ2IsZ0JBQThCRCwrQ0FBUSxFQUF0QztFQUFBO0VBQUEsSUFBT0UsT0FBUDtFQUFBLElBQWdCQyxVQUFoQjs7RUFDQUosZ0RBQVMsQ0FBQyxZQUFNO0lBQUEsU0FDQ0ssVUFERDtNQUFBO0lBQUE7O0lBQUE7TUFBQSx1TEFDZDtRQUFBOztRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBO2dCQUFBLE9BQ2tCLHFIQURsQjs7Y0FBQTtnQkFDUUMsQ0FEUjtnQkFFUUgsT0FGUixHQUVrQkcsQ0FBQyxDQUFDQyxJQUFGLENBQU8sQ0FBQyxPQUFELEVBQVUsT0FBVixDQUFQLEVBQTJCLEdBQTNCLENBRmxCO2dCQUdFSCxVQUFVLENBQUNELE9BQUQsQ0FBVjs7Y0FIRjtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUEsQ0FEYztNQUFBO0lBQUE7O0lBTWRFLFVBQVU7RUFDWCxDQVBRLEVBT04sRUFQTSxDQUFUO0VBUUEsb0JBQ0UscUZBQ0UscUZBREYsRUFFR0YsT0FGSCxDQURGO0FBTUQ7O0FBRUQsaUVBQWVELEdBQWY7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFFQSxJQUFNTyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUF4QixDQUFsQjtBQUNBLElBQU1DLElBQUksR0FBR0osNERBQVUsQ0FBQ0MsU0FBRCxDQUF2QixFQUFvQzs7QUFDcENHLElBQUksQ0FBQ0MsTUFBTCxlQUFZLDJEQUFDLDRDQUFELE9BQVoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrNS1zdGFydC1raXQvLi9zcmMvQXBwLmpzIiwid2VicGFjazovL3dlYnBhY2s1LXN0YXJ0LWtpdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldE1lc3NhZ2UoKSB7XG4gICAgICBjb25zdCBfID0gYXdhaXQgaW1wb3J0KCcuL18nKTtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBfLmpvaW4oWydIZWxsbycsICdXb3JsZCddLCAnICcpO1xuICAgICAgc2V0TWVzc2FnZShtZXNzYWdlKTtcbiAgICB9XG4gICAgZ2V0TWVzc2FnZSgpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5IZWxsbyBXb3JsZDwvaDE+XG4gICAgICB7bWVzc2FnZX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpOyAvLyBjcmVhdGVSb290KGNvbnRhaW5lciEpIGlmIHlvdSB1c2UgVHlwZVNjcmlwdFxucm9vdC5yZW5kZXIoPEFwcCAvPik7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBcHAiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImdldE1lc3NhZ2UiLCJfIiwiam9pbiIsImNyZWF0ZVJvb3QiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=