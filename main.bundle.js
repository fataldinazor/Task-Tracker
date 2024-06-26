/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
  --green1: #052e16;
  --green2: #14532d;
  --green3: #166534;
  --mint1: #10b981;
  --mint2: #6ee7b7;
  --mint3: #a7f3d0;
  --white1: #d1fae5;
  --white2: #ecfdf5;
}

.listName,
svg:hover {
  cursor: pointer;
}

button,
input {
  color: inherit;
  font: inherit;
}

button {
  border: none;
  appearance: none;
  outline: none;
  background: none;
  cursor: pointer;
}

body {
  background-color: var(--white2);
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 100vw;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.container {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 100px 1fr;
  height: inherit;
}

/* header */
.header {
  background-color: var(--green1);
  color: var(--white2);

  grid-column: 1/-1;
  grid-row: 1/2;

  padding: 1rem 1rem;

  display: flex;
  justify-content: space-between;
  border-radius: 0 0px 20px 0px;

  box-shadow: var(--shadow-lg);
}

.webName {
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2rem;
  font-weight: 700;
}

.logBtns {
  margin-right: 2rem;
  display: flex;
  gap: 2rem;
  padding: 1rem 0;
}

.signBtn,
.loginBtn {
  align-self: center;
  border-radius: 20px;
  padding: 10px 20px;
  background-color: var(--green2);
}

/* sidebar */
.sidebar {
  background-color: var(--mint3);
  color: var(--green2);

  grid-column: 1/2;
  grid-row: 2/-1;

  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;

  border-radius: 0  10px 10px 0;
  box-shadow: var(--shadow-lg);
}

.prjTitle {
  font-weight: 500;
  font-size: 1.5rem;
}

.prjList {
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 10px;
}

.addPrjBtn {
  background-color: var(--white1);
  padding: 0.2rem;
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: 1rem;
  margin-top: 10px;
}

.getPrjForm {
  margin: 0 0 10px 0;
}

.getPrjForm > .btnContainer {
  display: flex;
  justify-content: start;
  gap: 1rem;
}
.getPrjForm > .btnContainer > button {
  margin: 5px 0 0 0;
  border-radius: 10px;
  background-color: var(--white1);
  padding: 3px 20px;
}

.getPrjForm > label > input {
  width: 100%;
  margin: 5px 0 0 0;
  border-radius: 10px;
  padding: 4px;
  border: none;
  background-color: var(--white2);
}

.newPrj {
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: var(--white1);
}
.newPrj > .name {
  font-size: 1rem;
  font-weight: 600;
}

/* content */
.content {
  background-color: var(--white);
  grid-column: 2/-1;
  grid-row: 2/-1;

  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}

.contentInit {
  justify-self: start;

  font-size: 2rem;
  text-align: center;
  font-weight: 600;
  color: var(--green3);
}

.addTaskBtn {
  position: fixed;
  display: inline-block;
  background-color: #052e16;
  color: var(--white2);
  padding: 9px 20px;
  border-radius: 40%;
  font-weight: 800;
  text-align: justify;
  bottom: 20px;
  right: 20px;
}

.taskContainer {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.taskBlock {
  display: grid;
  width: inherit;
  grid-template-columns: 30px 20px 3fr 1fr 1fr;
  grid-template-rows: 50px 1fr;
  column-gap: 20px;
  background-color: var(--white1);
  text-align: left;
  font-size: 2rem;
  font-weight: 400;
  border-radius: 20px;
  box-shadow: var(--shadow);
}

.dispTaskPrior {
  grid-column: 1/2;
  grid-row: 1/-1;
  border-radius: 20px 0 0 20px;
}

.completeCheck {
  grid-column: 2/3;
  grid-row: 1/-1;
}

.dispTaskTitle {
  grid-column: 3/4;
  grid-row: 1/2;

  font-size: 2rem;
  font-weight: 600;
  padding: 5px 20px;
}

.dispTaskDesc {
  grid-column: 3/4;
  grid-row: 2/3;
  font-size: 1.2rem;

  padding: 10px 20px;
}

.dispTaskDate {
  text-align: center;
  font-size: 1.2rem;
  grid-column: 4/5;
  grid-row: 1/-1;
  justify-self: center;
  align-self: center;
}

.deleteTaskBtn {
  grid-column: 5/6;
  grid-row: 1/-1;
  align-self: center;
  justify-self: center;
}

dialog {
  position: fixed;
  margin: auto auto;
  border: none;
  border-radius: 20px;
}

dialog::backdrop {
  background-color: var(--green1);
  opacity: 50%;
}

.editTaskForm,
.getTaskForm {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  padding: 40px 20px;
  background-color: var(--mint3);
}

.editTaskForm > label,
.getTaskForm > label {
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 1rem;
}

h2,
.editTaskForm > .taskTitle,
.editTaskForm > .taskDesc,
.editTaskForm > .btnContainer,
.getTaskForm > .taskTitle,
.getTaskForm > .taskDesc,
.getTaskForm > .btnContainer {
  grid-column: 1/3;
}

h2{
  font-size: 3rem;
  color: var(--green1);
}

.editTaskForm > .btnContainer,
.getTaskForm > .btnContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  margin-top: 20px;
}

.editTaskForm > .btnContainer > button,
.getTaskForm > .btnContainer > button {
  justify-self: center;
  font-size: 1rem;
  background-color: var(--mint1);
  padding: 10px 30px;
  border-radius: 10px;
  color: var(--white2);
}

.editTaskForm > label > input,
.getTaskForm > label > input,
textarea {
  border: none;
  background-color: var(--white1);
  border-radius: 10px;
  padding: 5px 10px;
}

select {
  border: none;
  background-color: var(--white1);
  border-radius: 10px;
  padding: 7px 10px;
}

.disable {
  opacity: 50%;
  text-decoration: line-through;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n  --shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\r\n  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1),\r\n    0 4px 6px -4px rgb(0 0 0 / 0.1);\r\n  --green1: #052e16;\r\n  --green2: #14532d;\r\n  --green3: #166534;\r\n  --mint1: #10b981;\r\n  --mint2: #6ee7b7;\r\n  --mint3: #a7f3d0;\r\n  --white1: #d1fae5;\r\n  --white2: #ecfdf5;\r\n}\r\n\r\n.listName,\r\nsvg:hover {\r\n  cursor: pointer;\r\n}\r\n\r\nbutton,\r\ninput {\r\n  color: inherit;\r\n  font: inherit;\r\n}\r\n\r\nbutton {\r\n  border: none;\r\n  appearance: none;\r\n  outline: none;\r\n  background: none;\r\n  cursor: pointer;\r\n}\r\n\r\nbody {\r\n  background-color: var(--white2);\r\n  padding: 0;\r\n  margin: 0;\r\n  height: 100vh;\r\n  width: 100vw;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\r\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\n.container {\r\n  display: grid;\r\n  grid-template-columns: 1fr 4fr;\r\n  grid-template-rows: 100px 1fr;\r\n  height: inherit;\r\n}\r\n\r\n/* header */\r\n.header {\r\n  background-color: var(--green1);\r\n  color: var(--white2);\r\n\r\n  grid-column: 1/-1;\r\n  grid-row: 1/2;\r\n\r\n  padding: 1rem 1rem;\r\n\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border-radius: 0 0px 20px 0px;\r\n\r\n  box-shadow: var(--shadow-lg);\r\n}\r\n\r\n.webName {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  font-size: 2rem;\r\n  font-weight: 700;\r\n}\r\n\r\n.logBtns {\r\n  margin-right: 2rem;\r\n  display: flex;\r\n  gap: 2rem;\r\n  padding: 1rem 0;\r\n}\r\n\r\n.signBtn,\r\n.loginBtn {\r\n  align-self: center;\r\n  border-radius: 20px;\r\n  padding: 10px 20px;\r\n  background-color: var(--green2);\r\n}\r\n\r\n/* sidebar */\r\n.sidebar {\r\n  background-color: var(--mint3);\r\n  color: var(--green2);\r\n\r\n  grid-column: 1/2;\r\n  grid-row: 2/-1;\r\n\r\n  padding: 1rem;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  gap: 0.5rem;\r\n\r\n  border-radius: 0  10px 10px 0;\r\n  box-shadow: var(--shadow-lg);\r\n}\r\n\r\n.prjTitle {\r\n  font-weight: 500;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.prjList {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: start;\r\n  gap: 10px;\r\n}\r\n\r\n.addPrjBtn {\r\n  background-color: var(--white1);\r\n  padding: 0.2rem;\r\n  font-size: 1.5rem;\r\n  font-weight: 600;\r\n  border-radius: 1rem;\r\n  margin-top: 10px;\r\n}\r\n\r\n.getPrjForm {\r\n  margin: 0 0 10px 0;\r\n}\r\n\r\n.getPrjForm > .btnContainer {\r\n  display: flex;\r\n  justify-content: start;\r\n  gap: 1rem;\r\n}\r\n.getPrjForm > .btnContainer > button {\r\n  margin: 5px 0 0 0;\r\n  border-radius: 10px;\r\n  background-color: var(--white1);\r\n  padding: 3px 20px;\r\n}\r\n\r\n.getPrjForm > label > input {\r\n  width: 100%;\r\n  margin: 5px 0 0 0;\r\n  border-radius: 10px;\r\n  padding: 4px;\r\n  border: none;\r\n  background-color: var(--white2);\r\n}\r\n\r\n.newPrj {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  font-size: 1rem;\r\n  padding: 5px 10px;\r\n  border-radius: 10px;\r\n  background-color: var(--white1);\r\n}\r\n.newPrj > .name {\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n}\r\n\r\n/* content */\r\n.content {\r\n  background-color: var(--white);\r\n  grid-column: 2/-1;\r\n  grid-row: 2/-1;\r\n\r\n  padding: 1.5rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.contentInit {\r\n  justify-self: start;\r\n\r\n  font-size: 2rem;\r\n  text-align: center;\r\n  font-weight: 600;\r\n  color: var(--green3);\r\n}\r\n\r\n.addTaskBtn {\r\n  position: fixed;\r\n  display: inline-block;\r\n  background-color: #052e16;\r\n  color: var(--white2);\r\n  padding: 9px 20px;\r\n  border-radius: 40%;\r\n  font-weight: 800;\r\n  text-align: justify;\r\n  bottom: 20px;\r\n  right: 20px;\r\n}\r\n\r\n.taskContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n.taskBlock {\r\n  display: grid;\r\n  width: inherit;\r\n  grid-template-columns: 30px 20px 3fr 1fr 1fr;\r\n  grid-template-rows: 50px 1fr;\r\n  column-gap: 20px;\r\n  background-color: var(--white1);\r\n  text-align: left;\r\n  font-size: 2rem;\r\n  font-weight: 400;\r\n  border-radius: 20px;\r\n  box-shadow: var(--shadow);\r\n}\r\n\r\n.dispTaskPrior {\r\n  grid-column: 1/2;\r\n  grid-row: 1/-1;\r\n  border-radius: 20px 0 0 20px;\r\n}\r\n\r\n.completeCheck {\r\n  grid-column: 2/3;\r\n  grid-row: 1/-1;\r\n}\r\n\r\n.dispTaskTitle {\r\n  grid-column: 3/4;\r\n  grid-row: 1/2;\r\n\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  padding: 5px 20px;\r\n}\r\n\r\n.dispTaskDesc {\r\n  grid-column: 3/4;\r\n  grid-row: 2/3;\r\n  font-size: 1.2rem;\r\n\r\n  padding: 10px 20px;\r\n}\r\n\r\n.dispTaskDate {\r\n  text-align: center;\r\n  font-size: 1.2rem;\r\n  grid-column: 4/5;\r\n  grid-row: 1/-1;\r\n  justify-self: center;\r\n  align-self: center;\r\n}\r\n\r\n.deleteTaskBtn {\r\n  grid-column: 5/6;\r\n  grid-row: 1/-1;\r\n  align-self: center;\r\n  justify-self: center;\r\n}\r\n\r\ndialog {\r\n  position: fixed;\r\n  margin: auto auto;\r\n  border: none;\r\n  border-radius: 20px;\r\n}\r\n\r\ndialog::backdrop {\r\n  background-color: var(--green1);\r\n  opacity: 50%;\r\n}\r\n\r\n.editTaskForm,\r\n.getTaskForm {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-gap: 20px;\r\n\r\n  padding: 40px 20px;\r\n  background-color: var(--mint3);\r\n}\r\n\r\n.editTaskForm > label,\r\n.getTaskForm > label {\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: left;\r\n  font-size: 1rem;\r\n}\r\n\r\nh2,\r\n.editTaskForm > .taskTitle,\r\n.editTaskForm > .taskDesc,\r\n.editTaskForm > .btnContainer,\r\n.getTaskForm > .taskTitle,\r\n.getTaskForm > .taskDesc,\r\n.getTaskForm > .btnContainer {\r\n  grid-column: 1/3;\r\n}\r\n\r\nh2{\r\n  font-size: 3rem;\r\n  color: var(--green1);\r\n}\r\n\r\n.editTaskForm > .btnContainer,\r\n.getTaskForm > .btnContainer {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  column-gap: 20px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.editTaskForm > .btnContainer > button,\r\n.getTaskForm > .btnContainer > button {\r\n  justify-self: center;\r\n  font-size: 1rem;\r\n  background-color: var(--mint1);\r\n  padding: 10px 30px;\r\n  border-radius: 10px;\r\n  color: var(--white2);\r\n}\r\n\r\n.editTaskForm > label > input,\r\n.getTaskForm > label > input,\r\ntextarea {\r\n  border: none;\r\n  background-color: var(--white1);\r\n  border-radius: 10px;\r\n  padding: 5px 10px;\r\n}\r\n\r\nselect {\r\n  border: none;\r\n  background-color: var(--white1);\r\n  border-radius: 10px;\r\n  padding: 7px 10px;\r\n}\r\n\r\n.disable {\r\n  opacity: 50%;\r\n  text-decoration: line-through;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/trash.svg":
/*!******************************!*\
  !*** ./src/assets/trash.svg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg width=\"20px\" height=\"20px\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n</svg>");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPrjForm: () => (/* binding */ createPrjForm),
/* harmony export */   createTaskForm: () => (/* binding */ createTaskForm),
/* harmony export */   editTaskForm: () => (/* binding */ editTaskForm)
/* harmony export */ });
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.js */ "./src/list.js");
/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.js */ "./src/homepage.js");





const setElementAttribute = (element, id, type, name) => {
  element.setAttribute("id", id);
  element.setAttribute("type", type);
  element.setAttribute("name", name);
};

//Project form
function createPrjForm() {
  const prjList = document.querySelector(".prjList");
  if (document.querySelector(".getPrjForm")) {
    return;
  }
  const getPrjForm = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("form", "getPrjForm");
  const nameLabel = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", "", "Project Name:");
  nameLabel.setAttribute("for", "PrjName");
  const nameInput = document.createElement("input");
  nameInput.setAttribute("id", "PrjName");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("name", "project_name");
  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.textContent = "Submit";
  const resetBtn = document.createElement("button");
  resetBtn.setAttribute("type", "reset");
  resetBtn.textContent = "Reset";
  nameLabel.appendChild(nameInput);
  getPrjForm.appendChild(nameLabel);
  prjList.appendChild(getPrjForm);

  const btnContainer = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", "btnContainer");
  btnContainer.appendChild(submitBtn);
  btnContainer.appendChild(resetBtn);
  getPrjForm.appendChild(btnContainer);
  console.log("form created!");
}

//TaskForm
function createTaskForm(listId) {
  const listName=_list_js__WEBPACK_IMPORTED_MODULE_0__.getList(listId).name;
  const contentInit = document.querySelector(".contentInit");
  const idVal = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("input");
  idVal.setAttribute("value", listId);
  setElementAttribute(idVal, "", "hidden", "list_id");
  
  const getDialog = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("dialog");
  const getTaskForm = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("form", "getTaskForm");
  const heading = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", "", listName);

  //title
  const titleLabel = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", "taskTitle", "Title:");
  titleLabel.setAttribute("for", "taskTitle");
  const titleInput = document.createElement("input");
  setElementAttribute(titleInput, "taskTitle", "text", "task_name");
  titleLabel.appendChild(titleInput);

  //desc
  const descLabel = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", "taskDesc", "Description:");
  descLabel.setAttribute("for", "taskDesc");
  const descInput = document.createElement("textarea");
  descInput.setAttribute("rows", "4");
  descInput.setAttribute("cols", "40");
  setElementAttribute(descInput, "taskDesc", "text", "task_desc");
  descLabel.appendChild(descInput);

  //date
  const dateLabel = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", "taskDate", "Due Date:");
  dateLabel.setAttribute("for", "taskDate");
  const dateInput = document.createElement("input");
  setElementAttribute(dateInput, "taskDueDate", "date", "task_date");
  dateLabel.appendChild(dateInput);

  const priorLabel = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", "taskPrior", "Priority:");
  priorLabel.setAttribute("for", "taskPrior");
  const selectTask = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("select", "", "Select Priority of the Task");
  selectTask.setAttribute("name", "task_prior");
  const lowPrior = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("option", "", "Low");
  lowPrior.setAttribute("value", "low");
  const midPrior = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("option", "", "Medium");
  midPrior.setAttribute("value", "mid");
  const highPrior = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("option", "", "High");
  highPrior.setAttribute("value", "high");
  selectTask.appendChild(lowPrior);
  selectTask.appendChild(midPrior);
  selectTask.appendChild(highPrior);
  priorLabel.appendChild(selectTask);
  //buttons
  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.textContent = "Submit";
  const resetBtn = document.createElement("button");
  resetBtn.setAttribute("type", "reset");
  resetBtn.textContent = "Reset";

  // arranging the content
  getDialog.appendChild(getTaskForm);
  getTaskForm.appendChild(heading);
  getTaskForm.appendChild(idVal);
  getTaskForm.appendChild(titleLabel);
  getTaskForm.appendChild(descLabel);
  getTaskForm.appendChild(dateLabel);
  getTaskForm.appendChild(priorLabel);
  const btnContainer = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", "btnContainer");
  btnContainer.appendChild(submitBtn);
  btnContainer.appendChild(resetBtn);
  getTaskForm.appendChild(btnContainer);
  contentInit.appendChild(getDialog);
  getDialog.showModal();
}

function editTaskForm(currTask){
  const contentInit = document.querySelector(".contentInit");
  const idVal = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("input");
  idVal.setAttribute("value", currTask.listId);
  setElementAttribute(idVal, "", "hidden", "list_id");

  const taskId = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("input");
  taskId.setAttribute("value", currTask.id);
  setElementAttribute(taskId,"", "hidden", "task_id");

  const getDialog = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("dialog");
  const editTaskForm = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("form", "editTaskForm");
  const heading = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", "", `Edit ${currTask.title}`);

  //title
  const titleLabel = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", "taskTitle", "Title:");
  titleLabel.setAttribute("for", "taskTitle");
  const titleInput = document.createElement("input");
  setElementAttribute(titleInput, "taskTitle", "text", "task_name");
  titleLabel.appendChild(titleInput);

  //desc
  const descLabel = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", "taskDesc", "Description:");
  descLabel.setAttribute("for", "taskDesc");
  const descInput = document.createElement("textarea");
  descInput.setAttribute("rows", "4");
  descInput.setAttribute("cols", "40");
  setElementAttribute(descInput, "taskDesc", "text", "task_desc");
  descLabel.appendChild(descInput);

  //date
  const dateLabel = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", "taskDate", "Due Date:");
  dateLabel.setAttribute("for", "taskDate");
  const dateInput = document.createElement("input");
  setElementAttribute(dateInput, "taskDueDate", "date", "task_date");
  dateLabel.appendChild(dateInput);

  const priorLabel = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", "taskPrior", "Priority:");
  priorLabel.setAttribute("for", "taskPrior");
  const selectTask = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("select", "", "Select Priority of the Task");
  selectTask.setAttribute("name", "task_prior");
  const lowPrior = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("option", "", "Low");
  lowPrior.setAttribute("value", "low");
  const midPrior = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("option", "", "Medium");
  midPrior.setAttribute("value", "mid");
  const highPrior = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("option", "", "High");
  highPrior.setAttribute("value", "high");
  selectTask.appendChild(lowPrior);
  selectTask.appendChild(midPrior);
  selectTask.appendChild(highPrior);
  priorLabel.appendChild(selectTask);

  titleInput.value=currTask.title;
  descInput.value=currTask.desc;
  const date=new Date(currTask.dueDate);
  const formattedDate=date.toISOString().split('T')[0];
  dateInput.value=formattedDate;
  selectTask.value=currTask.priority;  

  //buttons
  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.textContent = "Submit";
  const resetBtn = document.createElement("button");
  resetBtn.setAttribute("type", "reset");
  resetBtn.textContent = "Reset";

  // arranging the content
  getDialog.appendChild(editTaskForm);
  editTaskForm.appendChild(heading);
  editTaskForm.appendChild(idVal);
  editTaskForm.appendChild(taskId);
  editTaskForm.appendChild(titleLabel);
  editTaskForm.appendChild(descLabel);
  editTaskForm.appendChild(dateLabel);
  editTaskForm.appendChild(priorLabel);
  const btnContainer = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", "btnContainer");
  btnContainer.appendChild(submitBtn);
  btnContainer.appendChild(resetBtn);
  editTaskForm.appendChild(btnContainer);
  contentInit.appendChild(getDialog);
  getDialog.showModal();

}




/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   createHome: () => (/* binding */ createHome)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


;

const createElement = (tag, classNames, textContent) => {
    const element = document.createElement(tag);
    if (classNames) {
      classNames.split(" ").forEach((className) => {
        element.classList.add(className);
      });
    }
    if (textContent) {
      element.textContent = textContent;
    }
    return element;
};

const createHome=()=>{
    const body = document.querySelector("body");
    const container = createElement("div", "container");
    body.appendChild(container);

    // header
    const header = createElement("div", "header");
    container.appendChild(header);

    const webName = createElement("div", "webName", "To Do List");
    const logBtns = createElement("div", "logBtns");
    const signBtn = createElement("button", "signBtn", "Sign Up");
    const loginBtn = createElement("button", "loginBtn", "Log In");

    header.appendChild(webName);
    logBtns.appendChild(signBtn);
    logBtns.appendChild(loginBtn);
    header.appendChild(logBtns);

    // sidebar
    const sidebar = createElement("div", "sidebar");
    container.appendChild(sidebar);
    const prjTitle = createElement("div", "prjTitle", "Projects");
    const prjList = createElement("div", "prjList");
    const prjCreate = createElement("button", "addPrjBtn", "+");

    sidebar.appendChild(prjTitle);
    sidebar.appendChild(prjList);
    sidebar.appendChild(prjCreate);
    // content
    const content = createElement("div", "content");
    container.appendChild(content);
    const contentInit = createElement(
    "div",
    "contentInit",
    "Add A Project to start Creating your To-Do List"
    );
    content.appendChild(contentInit);
}





/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createList: () => (/* binding */ createList),
/* harmony export */   deleteList: () => (/* binding */ deleteList),
/* harmony export */   getList: () => (/* binding */ getList),
/* harmony export */   getListIndex: () => (/* binding */ getListIndex),
/* harmony export */   lists: () => (/* binding */ lists)
/* harmony export */ });
let lists = [];

const List = (name) => {
  const id = Date.now().toString();
  let tasks = [];
  let completed = [];
  return {
    id,
    name,
    tasks,
    completed,
  };
};

const createList = (name) => {
  let list;
  if (lists.find((list) => list.name === name)) {
    list = List(name + "1");
  } else list = List(name);
  lists.push(list);
};

const deleteList = (listId) => {
  const listIndex = getListIndex(listId);
  lists.splice(listIndex, 1);
};

const getListIndex = (listId) => {
  return lists.findIndex((list) => listId === list.id);
};

const getList = (listId) => {
  return lists.find((list) => list.id === listId);
};





/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   getTask: () => (/* binding */ getTask),
/* harmony export */   getTaskIndex: () => (/* binding */ getTaskIndex),
/* harmony export */   markComplete: () => (/* binding */ markComplete),
/* harmony export */   updateTask: () => (/* binding */ updateTask)
/* harmony export */ });
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.js */ "./src/list.js");




const Task = (listId, title, desc, dueDate, priority) => {
  let id = Date.now().toString();
  let complete = false;
  return {
    id,
    listId,
    title,
    desc,
    dueDate,
    priority,
    complete,
  };
};

const createTask = (listId, title, desc, dueDate, priority) => {
  const list = (0,_list_js__WEBPACK_IMPORTED_MODULE_0__.getList)(listId);
  const task = Task(listId, title, desc, dueDate, priority);
  list["tasks"].push(task);
};

const deleteTask = (listId, taskId) => {
  const list = (0,_list_js__WEBPACK_IMPORTED_MODULE_0__.getList)(listId);
  const taskIndex = getTaskIndex(listId, taskId);
  list["tasks"].splice(taskIndex, 1);
};

const markComplete = (listId, taskId) => {
  const list = (0,_list_js__WEBPACK_IMPORTED_MODULE_0__.getList)(listId);
  const task = getTask(listId, taskId);
  const taskIndex = getTaskIndex(listId, taskId);
  list[completed].unshift(task);
  list.tasks.splice(taskIndex, 1);
};

const getTask = (listId, taskId,) => {
  const list = (0,_list_js__WEBPACK_IMPORTED_MODULE_0__.getList)(listId);
  const task = list["tasks"].find((task) => task.id === taskId);
  return task;
};

const updateTask=(listId, taskId, title, desc, dueDate, priority)=>{
  const task=getTask(listId, taskId);
  task.title=title;
  task.desc=desc;
  task.dueDate=dueDate;
  task.priority=priority;
}

const getTaskIndex = (listId, taskId) => {
  const list = (0,_list_js__WEBPACK_IMPORTED_MODULE_0__.getList)(listId);
  const taskIndex = list["tasks"].findIndex((task) => task.id === taskId);
  return taskIndex;
};




/***/ }),

/***/ "./src/uiControls.js":
/*!***************************!*\
  !*** ./src/uiControls.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   screenController: () => (/* binding */ screenController)
/* harmony export */ });
/* harmony import */ var _assets_trash_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/trash.svg */ "./src/assets/trash.svg");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/differenceInDays.mjs");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.js */ "./src/list.js");
/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage.js */ "./src/homepage.js");
/* harmony import */ var _forms_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forms.js */ "./src/forms.js");









const screenController = () => {
  window.addEventListener("load", (0,_homepage_js__WEBPACK_IMPORTED_MODULE_3__.createHome)());
  const addPrjBtn = document.querySelector(".addPrjBtn");
  const prjList = document.querySelector(".prjList");
  const contentInit = document.querySelector(".contentInit");

  //sideBar Functionality
  addPrjBtn.addEventListener("click", _forms_js__WEBPACK_IMPORTED_MODULE_4__.createPrjForm);

  //handle form submission
  document.addEventListener("submit", (event) => {
    if (event.target.classList.contains("getPrjForm")) submitPrjForm(event);
    else if (event.target.classList.contains("getTaskForm"))
      submitTaskForm(event);
    else if (event.target.classList.contains("editTaskForm"))
      submitEditedTaskForm(event);
  });

  // handle project list clicks
  prjList.addEventListener("click", function (event) {
    if (
      event.target.classList.contains("trashIcon") ||
      event.target.closest(".trashIcon")
    )
      deletePrj(event);
  });

  //handle main content click events
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("listName")) {
      getTask(event);
    } else if (event.target.classList.contains("addTaskBtn")) {
      (0,_forms_js__WEBPACK_IMPORTED_MODULE_4__.createTaskForm)(event.target.id);
    } else if (event.target.closest(".deleteTaskBtn")) deleteTask(event);
    else if (
      event.target.parentElement.classList.contains("taskBlock") &&
      !event.target.classList.contains("completeCheck")
    )
      editTask(event);
    else if (event.target.classList.contains("completeCheck")) {
      completedTasks(event);
    }
  });

  function completedTasks(event) {
    const parentElement = event.target.parentElement;
    if (event.target.checked) {
      parentElement.classList.add("disable");
    } else {
      parentElement.classList.remove("disable");
    }
  }

  //handle esc key to close dialogs
  document.addEventListener("keydown", function (event) {
    if (event.key === "Esc" || event.key === "Escape") {
      const dialog = document.querySelector("dialog");
      if (contentInit.contains(dialog)) contentInit.removeChild(dialog);
    }
  });

  // sidebar functions
  //form submission for projects
  function submitPrjForm(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const prjName = formData.get("project_name");
    if (prjName) {
      _list_js__WEBPACK_IMPORTED_MODULE_2__.createList(prjName);
      console.log(_list_js__WEBPACK_IMPORTED_MODULE_2__.lists);
    }
    prjList.textContent = "";
    displayLists();
    e.target.remove();
  }

  //delete Project
  function deletePrj(e) {
    _list_js__WEBPACK_IMPORTED_MODULE_2__.deleteList(e.target.parentElement.parentElement.className);
    prjList.textContent = "";
    displayLists();
  }

  // displayLists
  function displayLists() {
    _list_js__WEBPACK_IMPORTED_MODULE_2__.lists.forEach((list) => {
      const newPrj = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "newPrj");
      newPrj.setAttribute("id", list.id);
      const name = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "listName", list.name);
      const svgDiv = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "trashIcon");
      svgDiv.innerHTML = _assets_trash_svg__WEBPACK_IMPORTED_MODULE_0__["default"];
      newPrj.appendChild(name);
      newPrj.appendChild(svgDiv);
      prjList.appendChild(newPrj);
    });
  }

  // create Task Container
  function createTaskContainer(listId) {
    const element = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "taskContainer");
    element.setAttribute("id", `list-${listId}`);
    return element;
  }

  //mainContent
  // get task for a project
  function getTask(e) {
    const listId = e.target.parentElement.id;
    createContent(listId);
  }
  function createContent(listId) {
    contentInit.innerHTML = "";
    const taskContainer = createTaskContainer(listId);
    contentInit.appendChild(taskContainer);
    createAddTaskBtn(listId);
    displayTasks(listId);
  }

  function createAddTaskBtn(listId) {
    const addTaskBtn = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_3__.createElement)("button", "addTaskBtn", "+");
    addTaskBtn.setAttribute("id", listId);
    contentInit.appendChild(addTaskBtn);
  }

  const getPriorColor = (prior) => {
    if (prior === "high") return "FF0000";
    else if (prior === "mid") return "FFFF00";
    else if (prior === "low") return "00FF00";
  };

  const truncateString = (str) => {
    if (str.length > 35) str = `${str.slice(0, 35)}...`;
    return str;
  };

  const timeRemaining = (dateDiff) => {
    if (dateDiff < 0) {
      return `The task was due ${Math.abs(dateDiff)} days ago`;
    } else if (dateDiff > 0) {
      return `The task is due in ${dateDiff} days`;
    } else if (dateDiff === 0) {
      return `The task is due today`;
    }
  };

  const displayTasks = (listId) => {
    const taskContainer = document.querySelector(`#list-${listId}`);
    if (!taskContainer) {
      console.warn("Task Container is not yet created");
      return;
    }
    taskContainer.textContent = "";
    const list = _list_js__WEBPACK_IMPORTED_MODULE_2__.getList(listId);
    if (list["tasks"].length === 0) {
      taskContainer.textContent =
        "Click on the Add Button below to start Creating your Tasks";
    } else {
      list["tasks"].forEach((task) => {
        const currDate = new Date();
        const taskDueDate = task.dueDate;
        const diffDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.differenceInDays)(taskDueDate, currDate);

        const taskBlock = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "taskBlock");
        taskBlock.setAttribute("id", task.id);
        const taskTitle = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "dispTaskTitle", task.title);
        const taskDesc = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_3__.createElement)(
          "div",
          "dispTaskDesc",
          truncateString(task.desc)
        );
        const checkBox = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_3__.createElement)("input", "completeCheck");
        checkBox.setAttribute("type", "checkbox");
        const taskDate = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_3__.createElement)(
          "div",
          "dispTaskDate",
          timeRemaining(diffDate)
        );
        const taskPrior = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "dispTaskPrior");
        const deleteTaskBtn = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "deleteTaskBtn");
        deleteTaskBtn.innerHTML = _assets_trash_svg__WEBPACK_IMPORTED_MODULE_0__["default"];
        const color = getPriorColor(task.priority);
        taskPrior.style.backgroundColor = `#${color}`;

        taskBlock.appendChild(taskTitle);
        taskBlock.appendChild(taskDesc);
        taskBlock.appendChild(taskDate);
        taskBlock.appendChild(taskPrior);
        taskBlock.appendChild(checkBox);
        taskBlock.appendChild(deleteTaskBtn);

        taskContainer.appendChild(taskBlock);
      });
    }
  };

  function deleteTask(e) {
    const taskId = e.target.parentElement.parentElement.id;
    const listId =
      e.target.parentElement.parentElement.parentElement.id.slice(5);
    _task_js__WEBPACK_IMPORTED_MODULE_1__.deleteTask(listId, taskId);
    displayTasks(listId);
  }

  function editTask(event) {
    const taskId = event.target.parentElement.id;
    const listId = event.target.parentElement.parentElement.id.slice(5);
    const currTask = _task_js__WEBPACK_IMPORTED_MODULE_1__.getTask(listId, taskId);
    (0,_forms_js__WEBPACK_IMPORTED_MODULE_4__.editTaskForm)(currTask);
  }

  const submitTaskForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const listId = formData.get("list_id");
    const taskTitle = formData.get("task_name");
    const taskDesc = formData.get("task_desc");
    const dueDate = formData.get("task_date");
    const taskPrior = formData.get("task_prior");
    if (listId && taskTitle && taskDesc && dueDate && taskPrior) {
      _task_js__WEBPACK_IMPORTED_MODULE_1__.createTask(listId, taskTitle, taskDesc, dueDate, taskPrior);
      console.log(_list_js__WEBPACK_IMPORTED_MODULE_2__.lists);
    }
    const dialog = document.querySelector("dialog");
    dialog.close();
    contentInit.removeChild(dialog);
    displayTasks(listId);
  };

  const submitEditedTaskForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const taskId = formData.get("task_id");
    const listId = formData.get("list_id");
    const taskTitle = formData.get("task_name");
    const taskDesc = formData.get("task_desc");
    const dueDate = formData.get("task_date");
    const taskPrior = formData.get("task_prior");
    if (listId && taskTitle && taskDesc && dueDate && taskPrior) {
      _task_js__WEBPACK_IMPORTED_MODULE_1__.updateTask(
        listId,
        taskId,
        taskTitle,
        taskDesc,
        dueDate,
        taskPrior
      );
      console.log(_list_js__WEBPACK_IMPORTED_MODULE_2__.lists);
    }
    const dialog = document.querySelector("dialog");
    dialog.close();
    contentInit.removeChild(dialog);
    displayTasks(listId);
  };
  const checkBox = document.querySelector(".completeCheck");

  _list_js__WEBPACK_IMPORTED_MODULE_2__.createList("Study");
  displayLists();
  _list_js__WEBPACK_IMPORTED_MODULE_2__.lists.forEach((list) => {
    if (list.name === "Study") {
      const listId = list.id;
      _task_js__WEBPACK_IMPORTED_MODULE_1__.createTask(
        listId,
        "Exam",
        "Study for the exam scheduled next week",
        "2024-06-05",
        "high"
      );
      displayTasks(listId);
    }
  });
};



/***/ }),

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTimezoneOffsetInMilliseconds: () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds(),
    ),
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}


/***/ }),

/***/ "./node_modules/date-fns/constants.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/constants.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),
/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */

/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
const daysInWeek = 7;

/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
const daysInYear = 365.2425;

/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
const minTime = -maxTime;

/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = 1000;

/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
const minutesInYear = 525600;

/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
const minutesInMonth = 43200;

/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
const minutesInDay = 1440;

/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
const minutesInHour = 60;

/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
const monthsInQuarter = 3;

/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
const monthsInYear = 12;

/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
const quartersInYear = 4;

/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
const secondsInHour = 3600;

/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
const secondsInMinute = 60;

/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
const secondsInDay = secondsInHour * 24;

/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
const secondsInWeek = secondsInDay * 7;

/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
const secondsInYear = secondsInDay * daysInYear;

/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
const secondsInMonth = secondsInYear / 12;

/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
const secondsInQuarter = secondsInMonth * 3;


/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarDays.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarDays.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInCalendarDays: () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/getTimezoneOffsetInMilliseconds.mjs */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs");




/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(dateLeft, dateRight) {
  const startOfDayLeft = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const startOfDayRight = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  const timestampLeft =
    +startOfDayLeft - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayLeft);
  const timestampRight =
    +startOfDayRight - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayRight);

  // Round the number of days to the nearest integer because the number of
  // milliseconds in a day is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round((timestampLeft - timestampRight) / _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.millisecondsInDay);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInCalendarDays);


/***/ }),

/***/ "./node_modules/date-fns/differenceInDays.mjs":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/differenceInDays.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInDays: () => (/* binding */ differenceInDays)
/* harmony export */ });
/* harmony import */ var _differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./differenceInCalendarDays.mjs */ "./node_modules/date-fns/differenceInCalendarDays.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");



/**
 * @name differenceInDays
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full day periods between two dates. Fractional days are
 * truncated towards zero.
 *
 * One "full day" is the distance between a local time in one day to the same
 * local time on the next or previous day. A full day can sometimes be less than
 * or more than 24 hours if a daylight savings change happens between two dates.
 *
 * To ignore DST and only measure exact 24-hour periods, use this instead:
 * `Math.trunc(differenceInHours(dateLeft, dateRight)/24)|0`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of full days according to the local timezone
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 365
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 0
 *
 * @example
 * // How many full days are between
 * // 1 March 2020 0:00 and 1 June 2020 0:00 ?
 * // Note: because local time is used, the
 * // result will always be 92 days, even in
 * // time zones where DST starts and the
 * // period has only 92*24-1 hours.
 * const result = differenceInDays(
 *   new Date(2020, 5, 1),
 *   new Date(2020, 2, 1)
 * )
 * //=> 92
 */
function differenceInDays(dateLeft, dateRight) {
  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft);
  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);

  const sign = compareLocalAsc(_dateLeft, _dateRight);
  const difference = Math.abs((0,_differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__.differenceInCalendarDays)(_dateLeft, _dateRight));

  _dateLeft.setDate(_dateLeft.getDate() - sign * difference);

  // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
  // If so, result must be decreased by 1 in absolute value
  const isLastDayNotFull = Number(
    compareLocalAsc(_dateLeft, _dateRight) === -sign,
  );
  const result = sign * (difference - isLastDayNotFull);
  // Prevent negative zero
  return result === 0 ? 0 : result;
}

// Like `compareAsc` but uses local time not UTC, which is needed
// for accurate equality comparisons of UTC timestamps that end up
// having the same representation in local time, e.g. one hour before
// DST ends vs. the instant that DST ends.
function compareLocalAsc(dateLeft, dateRight) {
  const diff =
    dateLeft.getFullYear() - dateRight.getFullYear() ||
    dateLeft.getMonth() - dateRight.getMonth() ||
    dateLeft.getDate() - dateRight.getDate() ||
    dateLeft.getHours() - dateRight.getHours() ||
    dateLeft.getMinutes() - dateRight.getMinutes() ||
    dateLeft.getSeconds() - dateRight.getSeconds() ||
    dateLeft.getMilliseconds() - dateRight.getMilliseconds();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInDays);


/***/ }),

/***/ "./node_modules/date-fns/startOfDay.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _uiControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uiControls */ "./src/uiControls.js");


;


(0,_uiControls__WEBPACK_IMPORTED_MODULE_1__.screenController)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxNQUFNLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLE9BQU8sT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxVQUFVLEtBQUssWUFBWSxjQUFjLGFBQWEsWUFBWSxhQUFhLFdBQVcsWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLGNBQWMsYUFBYSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsWUFBWSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsWUFBWSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssYUFBYSxXQUFXLFlBQVksYUFBYSxh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Ozs7Ozs7Ozs7O0FDdk0zQztBQUNaO0FBQ0EsQ0FBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDa0M7QUFDbEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDbkQ7QUFDYjtBQUNrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaURBQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaURBQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaURBQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlEQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpREFBTztBQUN0QjtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7OztVQ3pEdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBWTtBQUNaO0FBQ0EsQ0FBcUI7QUFDeUI7QUFDOUM7QUFDQSw2REFBZ0IsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2FsdGVybmF0ZS10b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYWx0ZXJuYXRlLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9hbHRlcm5hdGUtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9hbHRlcm5hdGUtdG9kb2xpc3QvLi9zcmMvYXNzZXRzL3RyYXNoLnN2ZyIsIndlYnBhY2s6Ly9hbHRlcm5hdGUtdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYWx0ZXJuYXRlLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2FsdGVybmF0ZS10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYWx0ZXJuYXRlLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2FsdGVybmF0ZS10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9hbHRlcm5hdGUtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9hbHRlcm5hdGUtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9hbHRlcm5hdGUtdG9kb2xpc3QvLi9zcmMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vYWx0ZXJuYXRlLXRvZG9saXN0Ly4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL2FsdGVybmF0ZS10b2RvbGlzdC8uL3NyYy9saXN0LmpzIiwid2VicGFjazovL2FsdGVybmF0ZS10b2RvbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL2FsdGVybmF0ZS10b2RvbGlzdC8uL3NyYy91aUNvbnRyb2xzLmpzIiwid2VicGFjazovL2FsdGVybmF0ZS10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMubWpzIiwid2VicGFjazovL2FsdGVybmF0ZS10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb25zdGFudHMubWpzIiwid2VicGFjazovL2FsdGVybmF0ZS10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMubWpzIiwid2VicGFjazovL2FsdGVybmF0ZS10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlSW5EYXlzLm1qcyIsIndlYnBhY2s6Ly9hbHRlcm5hdGUtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZkRheS5tanMiLCJ3ZWJwYWNrOi8vYWx0ZXJuYXRlLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3RvRGF0ZS5tanMiLCJ3ZWJwYWNrOi8vYWx0ZXJuYXRlLXRvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FsdGVybmF0ZS10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hbHRlcm5hdGUtdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FsdGVybmF0ZS10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FsdGVybmF0ZS10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FsdGVybmF0ZS10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYWx0ZXJuYXRlLXRvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgLS1zaGFkb3c6IDAgNHB4IDZweCAtMXB4IHJnYigwIDAgMCAvIDAuMSksIDAgMnB4IDRweCAtMnB4IHJnYigwIDAgMCAvIDAuMSk7XHJcbiAgLS1zaGFkb3ctbGc6IDAgMTBweCAxNXB4IC0zcHggcmdiKDAgMCAwIC8gMC4xKSxcclxuICAgIDAgNHB4IDZweCAtNHB4IHJnYigwIDAgMCAvIDAuMSk7XHJcbiAgLS1ncmVlbjE6ICMwNTJlMTY7XHJcbiAgLS1ncmVlbjI6ICMxNDUzMmQ7XHJcbiAgLS1ncmVlbjM6ICMxNjY1MzQ7XHJcbiAgLS1taW50MTogIzEwYjk4MTtcclxuICAtLW1pbnQyOiAjNmVlN2I3O1xyXG4gIC0tbWludDM6ICNhN2YzZDA7XHJcbiAgLS13aGl0ZTE6ICNkMWZhZTU7XHJcbiAgLS13aGl0ZTI6ICNlY2ZkZjU7XHJcbn1cclxuXHJcbi5saXN0TmFtZSxcclxuc3ZnOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbixcclxuaW5wdXQge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGZvbnQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUyKTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxufVxyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLFxyXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmcjtcclxuICBoZWlnaHQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi8qIGhlYWRlciAqL1xyXG4uaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbjEpO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZTIpO1xyXG5cclxuICBncmlkLWNvbHVtbjogMS8tMTtcclxuICBncmlkLXJvdzogMS8yO1xyXG5cclxuICBwYWRkaW5nOiAxcmVtIDFyZW07XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMHB4IDIwcHggMHB4O1xyXG5cclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbGcpO1xyXG59XHJcblxyXG4ud2ViTmFtZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmxvZ0J0bnMge1xyXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMnJlbTtcclxuICBwYWRkaW5nOiAxcmVtIDA7XHJcbn1cclxuXHJcbi5zaWduQnRuLFxyXG4ubG9naW5CdG4ge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbjIpO1xyXG59XHJcblxyXG4vKiBzaWRlYmFyICovXHJcbi5zaWRlYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taW50Myk7XHJcbiAgY29sb3I6IHZhcigtLWdyZWVuMik7XHJcblxyXG4gIGdyaWQtY29sdW1uOiAxLzI7XHJcbiAgZ3JpZC1yb3c6IDIvLTE7XHJcblxyXG4gIHBhZGRpbmc6IDFyZW07XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgZ2FwOiAwLjVyZW07XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDAgIDEwcHggMTBweCAwO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1sZyk7XHJcbn1cclxuXHJcbi5wcmpUaXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLnByakxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuLmFkZFByakJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUxKTtcclxuICBwYWRkaW5nOiAwLjJyZW07XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5nZXRQcmpGb3JtIHtcclxuICBtYXJnaW46IDAgMCAxMHB4IDA7XHJcbn1cclxuXHJcbi5nZXRQcmpGb3JtID4gLmJ0bkNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG4uZ2V0UHJqRm9ybSA+IC5idG5Db250YWluZXIgPiBidXR0b24ge1xyXG4gIG1hcmdpbjogNXB4IDAgMCAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUxKTtcclxuICBwYWRkaW5nOiAzcHggMjBweDtcclxufVxyXG5cclxuLmdldFByakZvcm0gPiBsYWJlbCA+IGlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDVweCAwIDAgMDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUyKTtcclxufVxyXG5cclxuLm5ld1ByaiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUxKTtcclxufVxyXG4ubmV3UHJqID4gLm5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4vKiBjb250ZW50ICovXHJcbi5jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgZ3JpZC1jb2x1bW46IDIvLTE7XHJcbiAgZ3JpZC1yb3c6IDIvLTE7XHJcblxyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5jb250ZW50SW5pdCB7XHJcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcclxuXHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiB2YXIoLS1ncmVlbjMpO1xyXG59XHJcblxyXG4uYWRkVGFza0J0biB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyZTE2O1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZTIpO1xyXG4gIHBhZGRpbmc6IDlweCAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwJTtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgYm90dG9tOiAyMHB4O1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4udGFza0NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuLnRhc2tCbG9jayB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICB3aWR0aDogaW5oZXJpdDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMjBweCAzZnIgMWZyIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyO1xyXG4gIGNvbHVtbi1nYXA6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUxKTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcclxufVxyXG5cclxuLmRpc3BUYXNrUHJpb3Ige1xyXG4gIGdyaWQtY29sdW1uOiAxLzI7XHJcbiAgZ3JpZC1yb3c6IDEvLTE7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweCAwIDAgMjBweDtcclxufVxyXG5cclxuLmNvbXBsZXRlQ2hlY2sge1xyXG4gIGdyaWQtY29sdW1uOiAyLzM7XHJcbiAgZ3JpZC1yb3c6IDEvLTE7XHJcbn1cclxuXHJcbi5kaXNwVGFza1RpdGxlIHtcclxuICBncmlkLWNvbHVtbjogMy80O1xyXG4gIGdyaWQtcm93OiAxLzI7XHJcblxyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xyXG59XHJcblxyXG4uZGlzcFRhc2tEZXNjIHtcclxuICBncmlkLWNvbHVtbjogMy80O1xyXG4gIGdyaWQtcm93OiAyLzM7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcblxyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxufVxyXG5cclxuLmRpc3BUYXNrRGF0ZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGdyaWQtY29sdW1uOiA0LzU7XHJcbiAgZ3JpZC1yb3c6IDEvLTE7XHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4uZGVsZXRlVGFza0J0biB7XHJcbiAgZ3JpZC1jb2x1bW46IDUvNjtcclxuICBncmlkLXJvdzogMS8tMTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbmRpYWxvZyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG5kaWFsb2c6OmJhY2tkcm9wIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbjEpO1xyXG4gIG9wYWNpdHk6IDUwJTtcclxufVxyXG5cclxuLmVkaXRUYXNrRm9ybSxcclxuLmdldFRhc2tGb3JtIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBncmlkLWdhcDogMjBweDtcclxuXHJcbiAgcGFkZGluZzogNDBweCAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pbnQzKTtcclxufVxyXG5cclxuLmVkaXRUYXNrRm9ybSA+IGxhYmVsLFxyXG4uZ2V0VGFza0Zvcm0gPiBsYWJlbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG5oMixcclxuLmVkaXRUYXNrRm9ybSA+IC50YXNrVGl0bGUsXHJcbi5lZGl0VGFza0Zvcm0gPiAudGFza0Rlc2MsXHJcbi5lZGl0VGFza0Zvcm0gPiAuYnRuQ29udGFpbmVyLFxyXG4uZ2V0VGFza0Zvcm0gPiAudGFza1RpdGxlLFxyXG4uZ2V0VGFza0Zvcm0gPiAudGFza0Rlc2MsXHJcbi5nZXRUYXNrRm9ybSA+IC5idG5Db250YWluZXIge1xyXG4gIGdyaWQtY29sdW1uOiAxLzM7XHJcbn1cclxuXHJcbmgye1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBjb2xvcjogdmFyKC0tZ3JlZW4xKTtcclxufVxyXG5cclxuLmVkaXRUYXNrRm9ybSA+IC5idG5Db250YWluZXIsXHJcbi5nZXRUYXNrRm9ybSA+IC5idG5Db250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGNvbHVtbi1nYXA6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmVkaXRUYXNrRm9ybSA+IC5idG5Db250YWluZXIgPiBidXR0b24sXHJcbi5nZXRUYXNrRm9ybSA+IC5idG5Db250YWluZXIgPiBidXR0b24ge1xyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taW50MSk7XHJcbiAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgY29sb3I6IHZhcigtLXdoaXRlMik7XHJcbn1cclxuXHJcbi5lZGl0VGFza0Zvcm0gPiBsYWJlbCA+IGlucHV0LFxyXG4uZ2V0VGFza0Zvcm0gPiBsYWJlbCA+IGlucHV0LFxyXG50ZXh0YXJlYSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUxKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDdweCAxMHB4O1xyXG59XHJcblxyXG4uZGlzYWJsZSB7XHJcbiAgb3BhY2l0eTogNTAlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtF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Q3RCOztBQUVBOzs7RUFHRSxZQUFZO0VBQ1osK0JBQStCO0VBQy9CLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osK0JBQStCO0VBQy9CLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0FBQy9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gIC0tc2hhZG93OiAwIDRweCA2cHggLTFweCByZ2IoMCAwIDAgLyAwLjEpLCAwIDJweCA0cHggLTJweCByZ2IoMCAwIDAgLyAwLjEpO1xcclxcbiAgLS1zaGFkb3ctbGc6IDAgMTBweCAxNXB4IC0zcHggcmdiKDAgMCAwIC8gMC4xKSxcXHJcXG4gICAgMCA0cHggNnB4IC00cHggcmdiKDAgMCAwIC8gMC4xKTtcXHJcXG4gIC0tZ3JlZW4xOiAjMDUyZTE2O1xcclxcbiAgLS1ncmVlbjI6ICMxNDUzMmQ7XFxyXFxuICAtLWdyZWVuMzogIzE2NjUzNDtcXHJcXG4gIC0tbWludDE6ICMxMGI5ODE7XFxyXFxuICAtLW1pbnQyOiAjNmVlN2I3O1xcclxcbiAgLS1taW50MzogI2E3ZjNkMDtcXHJcXG4gIC0td2hpdGUxOiAjZDFmYWU1O1xcclxcbiAgLS13aGl0ZTI6ICNlY2ZkZjU7XFxyXFxufVxcclxcblxcclxcbi5saXN0TmFtZSxcXHJcXG5zdmc6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQge1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICBmb250OiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlMik7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLFxcclxcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XFxyXFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi8qIGhlYWRlciAqL1xcclxcbi5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4xKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZTIpO1xcclxcblxcclxcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxyXFxuICBncmlkLXJvdzogMS8yO1xcclxcblxcclxcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgMHB4IDIwcHggMHB4O1xcclxcblxcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWxnKTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYk5hbWUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5sb2dCdG5zIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5zaWduQnRuLFxcclxcbi5sb2dpbkJ0biB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogc2lkZWJhciAqL1xcclxcbi5zaWRlYmFyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pbnQzKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ncmVlbjIpO1xcclxcblxcclxcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXHJcXG4gIGdyaWQtcm93OiAyLy0xO1xcclxcblxcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuXFxyXFxuICBib3JkZXItcmFkaXVzOiAwICAxMHB4IDEwcHggMDtcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1sZyk7XFxyXFxufVxcclxcblxcclxcbi5wcmpUaXRsZSB7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5wcmpMaXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFByakJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZTEpO1xcclxcbiAgcGFkZGluZzogMC4ycmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5nZXRQcmpGb3JtIHtcXHJcXG4gIG1hcmdpbjogMCAwIDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmdldFByakZvcm0gPiAuYnRuQ29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG4uZ2V0UHJqRm9ybSA+IC5idG5Db250YWluZXIgPiBidXR0b24ge1xcclxcbiAgbWFyZ2luOiA1cHggMCAwIDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUxKTtcXHJcXG4gIHBhZGRpbmc6IDNweCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2V0UHJqRm9ybSA+IGxhYmVsID4gaW5wdXQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW46IDVweCAwIDAgMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiA0cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZTIpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3UHJqIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZTEpO1xcclxcbn1cXHJcXG4ubmV3UHJqID4gLm5hbWUge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogY29udGVudCAqL1xcclxcbi5jb250ZW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gIGdyaWQtY29sdW1uOiAyLy0xO1xcclxcbiAgZ3JpZC1yb3c6IDIvLTE7XFxyXFxuXFxyXFxuICBwYWRkaW5nOiAxLjVyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnRJbml0IHtcXHJcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxyXFxuXFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6IHZhcigtLWdyZWVuMyk7XFxyXFxufVxcclxcblxcclxcbi5hZGRUYXNrQnRuIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTJlMTY7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUyKTtcXHJcXG4gIHBhZGRpbmc6IDlweCAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNDAlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxuICBib3R0b206IDIwcHg7XFxyXFxuICByaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrQmxvY2sge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHdpZHRoOiBpbmhlcml0O1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDIwcHggM2ZyIDFmciAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyO1xcclxcbiAgY29sdW1uLWdhcDogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlMSk7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcFRhc2tQcmlvciB7XFxyXFxuICBncmlkLWNvbHVtbjogMS8yO1xcclxcbiAgZ3JpZC1yb3c6IDEvLTE7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4IDAgMCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcGxldGVDaGVjayB7XFxyXFxuICBncmlkLWNvbHVtbjogMi8zO1xcclxcbiAgZ3JpZC1yb3c6IDEvLTE7XFxyXFxufVxcclxcblxcclxcbi5kaXNwVGFza1RpdGxlIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAzLzQ7XFxyXFxuICBncmlkLXJvdzogMS8yO1xcclxcblxcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcFRhc2tEZXNjIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAzLzQ7XFxyXFxuICBncmlkLXJvdzogMi8zO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuXFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5kaXNwVGFza0RhdGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBncmlkLWNvbHVtbjogNC81O1xcclxcbiAgZ3JpZC1yb3c6IDEvLTE7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZVRhc2tCdG4ge1xcclxcbiAgZ3JpZC1jb2x1bW46IDUvNjtcXHJcXG4gIGdyaWQtcm93OiAxLy0xO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmRpYWxvZyB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBtYXJnaW46IGF1dG8gYXV0bztcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbmRpYWxvZzo6YmFja2Ryb3Age1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4xKTtcXHJcXG4gIG9wYWNpdHk6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXRUYXNrRm9ybSxcXHJcXG4uZ2V0VGFza0Zvcm0ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIGdyaWQtZ2FwOiAyMHB4O1xcclxcblxcclxcbiAgcGFkZGluZzogNDBweCAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWludDMpO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdFRhc2tGb3JtID4gbGFiZWwsXFxyXFxuLmdldFRhc2tGb3JtID4gbGFiZWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMixcXHJcXG4uZWRpdFRhc2tGb3JtID4gLnRhc2tUaXRsZSxcXHJcXG4uZWRpdFRhc2tGb3JtID4gLnRhc2tEZXNjLFxcclxcbi5lZGl0VGFza0Zvcm0gPiAuYnRuQ29udGFpbmVyLFxcclxcbi5nZXRUYXNrRm9ybSA+IC50YXNrVGl0bGUsXFxyXFxuLmdldFRhc2tGb3JtID4gLnRhc2tEZXNjLFxcclxcbi5nZXRUYXNrRm9ybSA+IC5idG5Db250YWluZXIge1xcclxcbiAgZ3JpZC1jb2x1bW46IDEvMztcXHJcXG59XFxyXFxuXFxyXFxuaDJ7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tZ3JlZW4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXRUYXNrRm9ybSA+IC5idG5Db250YWluZXIsXFxyXFxuLmdldFRhc2tGb3JtID4gLmJ0bkNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgY29sdW1uLWdhcDogMjBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5lZGl0VGFza0Zvcm0gPiAuYnRuQ29udGFpbmVyID4gYnV0dG9uLFxcclxcbi5nZXRUYXNrRm9ybSA+IC5idG5Db250YWluZXIgPiBidXR0b24ge1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taW50MSk7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlMik7XFxyXFxufVxcclxcblxcclxcbi5lZGl0VGFza0Zvcm0gPiBsYWJlbCA+IGlucHV0LFxcclxcbi5nZXRUYXNrRm9ybSA+IGxhYmVsID4gaW5wdXQsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUxKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0IHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlMSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogN3B4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5kaXNhYmxlIHtcXHJcXG4gIG9wYWNpdHk6IDUwJTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IFwiPHN2ZyB3aWR0aD1cXFwiMjBweFxcXCIgaGVpZ2h0PVxcXCIyMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+XFxyXFxuPHBhdGggZD1cXFwiTTE4IDZMMTcuMTk5MSAxOC4wMTI5QzE3LjEyOSAxOS4wNjUgMTcuMDkzOSAxOS41OTExIDE2Ljg2NjcgMTkuOTlDMTYuNjY2NiAyMC4zNDEyIDE2LjM2NDggMjAuNjIzNSAxNi4wMDExIDIwLjc5OThDMTUuNTg4IDIxIDE1LjA2MDcgMjEgMTQuMDA2MiAyMUg5Ljk5Mzc3QzguOTM5MjcgMjEgOC40MTIwMiAyMSA3Ljk5ODg5IDIwLjc5OThDNy42MzUxNyAyMC42MjM1IDcuMzMzMzkgMjAuMzQxMiA3LjEzMzMyIDE5Ljk5QzYuOTA2MDcgMTkuNTkxMSA2Ljg3MSAxOS4wNjUgNi44MDA4NiAxOC4wMTI5TDYgNk00IDZIMjBNMTYgNkwxNS43Mjk0IDUuMTg4MDdDMTUuNDY3MSA0LjQwMTI1IDE1LjMzNTkgNC4wMDc4NCAxNS4wOTI3IDMuNzE2OThDMTQuODc3OSAzLjQ2MDEzIDE0LjYwMjEgMy4yNjEzMiAxNC4yOTA1IDMuMTM4NzhDMTMuOTM3NiAzIDEzLjUyMyAzIDEyLjY5MzYgM0gxMS4zMDY0QzEwLjQ3NyAzIDEwLjA2MjQgMyA5LjcwOTUxIDMuMTM4NzhDOS4zOTc5MiAzLjI2MTMyIDkuMTIyMDggMy40NjAxMyA4LjkwNzI5IDMuNzE2OThDOC42NjQwNSA0LjAwNzg0IDguNTMyOTIgNC40MDEyNSA4LjI3MDY0IDUuMTg4MDdMOCA2XFxcIiBzdHJva2U9XFxcIiMwMDAwMDBcXFwiIHN0cm9rZS13aWR0aD1cXFwiMlxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIi8+XFxyXFxuPC9zdmc+XCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgKiBhcyBsaXN0TW9kdWxlIGZyb20gXCIuL2xpc3QuanNcIjtcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL2hvbWVwYWdlLmpzXCI7XHJcblxyXG5jb25zdCBzZXRFbGVtZW50QXR0cmlidXRlID0gKGVsZW1lbnQsIGlkLCB0eXBlLCBuYW1lKSA9PiB7XHJcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XHJcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHR5cGUpO1xyXG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBuYW1lKTtcclxufTtcclxuXHJcbi8vUHJvamVjdCBmb3JtXHJcbmZ1bmN0aW9uIGNyZWF0ZVByakZvcm0oKSB7XHJcbiAgY29uc3QgcHJqTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJqTGlzdFwiKTtcclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nZXRQcmpGb3JtXCIpKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGNvbnN0IGdldFByakZvcm0gPSBjcmVhdGVFbGVtZW50KFwiZm9ybVwiLCBcImdldFByakZvcm1cIik7XHJcbiAgY29uc3QgbmFtZUxhYmVsID0gY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIFwiXCIsIFwiUHJvamVjdCBOYW1lOlwiKTtcclxuICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiUHJqTmFtZVwiKTtcclxuICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiUHJqTmFtZVwiKTtcclxuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XHJcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcm9qZWN0X25hbWVcIik7XHJcbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcclxuICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xyXG4gIGNvbnN0IHJlc2V0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICByZXNldEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmVzZXRcIik7XHJcbiAgcmVzZXRCdG4udGV4dENvbnRlbnQgPSBcIlJlc2V0XCI7XHJcbiAgbmFtZUxhYmVsLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XHJcbiAgZ2V0UHJqRm9ybS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xyXG4gIHByakxpc3QuYXBwZW5kQ2hpbGQoZ2V0UHJqRm9ybSk7XHJcblxyXG4gIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJidG5Db250YWluZXJcIik7XHJcbiAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XHJcbiAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlc2V0QnRuKTtcclxuICBnZXRQcmpGb3JtLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XHJcbiAgY29uc29sZS5sb2coXCJmb3JtIGNyZWF0ZWQhXCIpO1xyXG59XHJcblxyXG4vL1Rhc2tGb3JtXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tGb3JtKGxpc3RJZCkge1xyXG4gIGNvbnN0IGxpc3ROYW1lPWxpc3RNb2R1bGUuZ2V0TGlzdChsaXN0SWQpLm5hbWU7XHJcbiAgY29uc3QgY29udGVudEluaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRJbml0XCIpO1xyXG4gIGNvbnN0IGlkVmFsID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGlkVmFsLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGxpc3RJZCk7XHJcbiAgc2V0RWxlbWVudEF0dHJpYnV0ZShpZFZhbCwgXCJcIiwgXCJoaWRkZW5cIiwgXCJsaXN0X2lkXCIpO1xyXG4gIFxyXG4gIGNvbnN0IGdldERpYWxvZyA9IGNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XHJcbiAgY29uc3QgZ2V0VGFza0Zvcm0gPSBjcmVhdGVFbGVtZW50KFwiZm9ybVwiLCBcImdldFRhc2tGb3JtXCIpO1xyXG4gIGNvbnN0IGhlYWRpbmcgPSBjcmVhdGVFbGVtZW50KFwiaDJcIiwgXCJcIiwgbGlzdE5hbWUpO1xyXG5cclxuICAvL3RpdGxlXHJcbiAgY29uc3QgdGl0bGVMYWJlbCA9IGNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBcInRhc2tUaXRsZVwiLCBcIlRpdGxlOlwiKTtcclxuICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2tUaXRsZVwiKTtcclxuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIHNldEVsZW1lbnRBdHRyaWJ1dGUodGl0bGVJbnB1dCwgXCJ0YXNrVGl0bGVcIiwgXCJ0ZXh0XCIsIFwidGFza19uYW1lXCIpO1xyXG4gIHRpdGxlTGFiZWwuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XHJcblxyXG4gIC8vZGVzY1xyXG4gIGNvbnN0IGRlc2NMYWJlbCA9IGNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBcInRhc2tEZXNjXCIsIFwiRGVzY3JpcHRpb246XCIpO1xyXG4gIGRlc2NMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrRGVzY1wiKTtcclxuICBjb25zdCBkZXNjSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgZGVzY0lucHV0LnNldEF0dHJpYnV0ZShcInJvd3NcIiwgXCI0XCIpO1xyXG4gIGRlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoXCJjb2xzXCIsIFwiNDBcIik7XHJcbiAgc2V0RWxlbWVudEF0dHJpYnV0ZShkZXNjSW5wdXQsIFwidGFza0Rlc2NcIiwgXCJ0ZXh0XCIsIFwidGFza19kZXNjXCIpO1xyXG4gIGRlc2NMYWJlbC5hcHBlbmRDaGlsZChkZXNjSW5wdXQpO1xyXG5cclxuICAvL2RhdGVcclxuICBjb25zdCBkYXRlTGFiZWwgPSBjcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgXCJ0YXNrRGF0ZVwiLCBcIkR1ZSBEYXRlOlwiKTtcclxuICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFza0RhdGVcIik7XHJcbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIHNldEVsZW1lbnRBdHRyaWJ1dGUoZGF0ZUlucHV0LCBcInRhc2tEdWVEYXRlXCIsIFwiZGF0ZVwiLCBcInRhc2tfZGF0ZVwiKTtcclxuICBkYXRlTGFiZWwuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcclxuXHJcbiAgY29uc3QgcHJpb3JMYWJlbCA9IGNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBcInRhc2tQcmlvclwiLCBcIlByaW9yaXR5OlwiKTtcclxuICBwcmlvckxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2tQcmlvclwiKTtcclxuICBjb25zdCBzZWxlY3RUYXNrID0gY3JlYXRlRWxlbWVudChcInNlbGVjdFwiLCBcIlwiLCBcIlNlbGVjdCBQcmlvcml0eSBvZiB0aGUgVGFza1wiKTtcclxuICBzZWxlY3RUYXNrLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0YXNrX3ByaW9yXCIpO1xyXG4gIGNvbnN0IGxvd1ByaW9yID0gY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCBcIlwiLCBcIkxvd1wiKTtcclxuICBsb3dQcmlvci5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImxvd1wiKTtcclxuICBjb25zdCBtaWRQcmlvciA9IGNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgXCJcIiwgXCJNZWRpdW1cIik7XHJcbiAgbWlkUHJpb3Iuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJtaWRcIik7XHJcbiAgY29uc3QgaGlnaFByaW9yID0gY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCBcIlwiLCBcIkhpZ2hcIik7XHJcbiAgaGlnaFByaW9yLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiaGlnaFwiKTtcclxuICBzZWxlY3RUYXNrLmFwcGVuZENoaWxkKGxvd1ByaW9yKTtcclxuICBzZWxlY3RUYXNrLmFwcGVuZENoaWxkKG1pZFByaW9yKTtcclxuICBzZWxlY3RUYXNrLmFwcGVuZENoaWxkKGhpZ2hQcmlvcik7XHJcbiAgcHJpb3JMYWJlbC5hcHBlbmRDaGlsZChzZWxlY3RUYXNrKTtcclxuICAvL2J1dHRvbnNcclxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xyXG4gIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XHJcbiAgY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIHJlc2V0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyZXNldFwiKTtcclxuICByZXNldEJ0bi50ZXh0Q29udGVudCA9IFwiUmVzZXRcIjtcclxuXHJcbiAgLy8gYXJyYW5naW5nIHRoZSBjb250ZW50XHJcbiAgZ2V0RGlhbG9nLmFwcGVuZENoaWxkKGdldFRhc2tGb3JtKTtcclxuICBnZXRUYXNrRm9ybS5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuICBnZXRUYXNrRm9ybS5hcHBlbmRDaGlsZChpZFZhbCk7XHJcbiAgZ2V0VGFza0Zvcm0uYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XHJcbiAgZ2V0VGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGVzY0xhYmVsKTtcclxuICBnZXRUYXNrRm9ybS5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xyXG4gIGdldFRhc2tGb3JtLmFwcGVuZENoaWxkKHByaW9yTGFiZWwpO1xyXG4gIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJidG5Db250YWluZXJcIik7XHJcbiAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XHJcbiAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlc2V0QnRuKTtcclxuICBnZXRUYXNrRm9ybS5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xyXG4gIGNvbnRlbnRJbml0LmFwcGVuZENoaWxkKGdldERpYWxvZyk7XHJcbiAgZ2V0RGlhbG9nLnNob3dNb2RhbCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlZGl0VGFza0Zvcm0oY3VyclRhc2spe1xyXG4gIGNvbnN0IGNvbnRlbnRJbml0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50SW5pdFwiKTtcclxuICBjb25zdCBpZFZhbCA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBpZFZhbC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBjdXJyVGFzay5saXN0SWQpO1xyXG4gIHNldEVsZW1lbnRBdHRyaWJ1dGUoaWRWYWwsIFwiXCIsIFwiaGlkZGVuXCIsIFwibGlzdF9pZFwiKTtcclxuXHJcbiAgY29uc3QgdGFza0lkID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIHRhc2tJZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBjdXJyVGFzay5pZCk7XHJcbiAgc2V0RWxlbWVudEF0dHJpYnV0ZSh0YXNrSWQsXCJcIiwgXCJoaWRkZW5cIiwgXCJ0YXNrX2lkXCIpO1xyXG5cclxuICBjb25zdCBnZXREaWFsb2cgPSBjcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xyXG4gIGNvbnN0IGVkaXRUYXNrRm9ybSA9IGNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIFwiZWRpdFRhc2tGb3JtXCIpO1xyXG4gIGNvbnN0IGhlYWRpbmcgPSBjcmVhdGVFbGVtZW50KFwiaDJcIiwgXCJcIiwgYEVkaXQgJHtjdXJyVGFzay50aXRsZX1gKTtcclxuXHJcbiAgLy90aXRsZVxyXG4gIGNvbnN0IHRpdGxlTGFiZWwgPSBjcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgXCJ0YXNrVGl0bGVcIiwgXCJUaXRsZTpcIik7XHJcbiAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrVGl0bGVcIik7XHJcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBzZXRFbGVtZW50QXR0cmlidXRlKHRpdGxlSW5wdXQsIFwidGFza1RpdGxlXCIsIFwidGV4dFwiLCBcInRhc2tfbmFtZVwiKTtcclxuICB0aXRsZUxhYmVsLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xyXG5cclxuICAvL2Rlc2NcclxuICBjb25zdCBkZXNjTGFiZWwgPSBjcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgXCJ0YXNrRGVzY1wiLCBcIkRlc2NyaXB0aW9uOlwiKTtcclxuICBkZXNjTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFza0Rlc2NcIik7XHJcbiAgY29uc3QgZGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gIGRlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyb3dzXCIsIFwiNFwiKTtcclxuICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKFwiY29sc1wiLCBcIjQwXCIpO1xyXG4gIHNldEVsZW1lbnRBdHRyaWJ1dGUoZGVzY0lucHV0LCBcInRhc2tEZXNjXCIsIFwidGV4dFwiLCBcInRhc2tfZGVzY1wiKTtcclxuICBkZXNjTGFiZWwuYXBwZW5kQ2hpbGQoZGVzY0lucHV0KTtcclxuXHJcbiAgLy9kYXRlXHJcbiAgY29uc3QgZGF0ZUxhYmVsID0gY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIFwidGFza0RhdGVcIiwgXCJEdWUgRGF0ZTpcIik7XHJcbiAgZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2tEYXRlXCIpO1xyXG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBzZXRFbGVtZW50QXR0cmlidXRlKGRhdGVJbnB1dCwgXCJ0YXNrRHVlRGF0ZVwiLCBcImRhdGVcIiwgXCJ0YXNrX2RhdGVcIik7XHJcbiAgZGF0ZUxhYmVsLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XHJcblxyXG4gIGNvbnN0IHByaW9yTGFiZWwgPSBjcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgXCJ0YXNrUHJpb3JcIiwgXCJQcmlvcml0eTpcIik7XHJcbiAgcHJpb3JMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrUHJpb3JcIik7XHJcbiAgY29uc3Qgc2VsZWN0VGFzayA9IGNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgXCJcIiwgXCJTZWxlY3QgUHJpb3JpdHkgb2YgdGhlIFRhc2tcIik7XHJcbiAgc2VsZWN0VGFzay5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFza19wcmlvclwiKTtcclxuICBjb25zdCBsb3dQcmlvciA9IGNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgXCJcIiwgXCJMb3dcIik7XHJcbiAgbG93UHJpb3Iuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJsb3dcIik7XHJcbiAgY29uc3QgbWlkUHJpb3IgPSBjcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIFwiXCIsIFwiTWVkaXVtXCIpO1xyXG4gIG1pZFByaW9yLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwibWlkXCIpO1xyXG4gIGNvbnN0IGhpZ2hQcmlvciA9IGNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgXCJcIiwgXCJIaWdoXCIpO1xyXG4gIGhpZ2hQcmlvci5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImhpZ2hcIik7XHJcbiAgc2VsZWN0VGFzay5hcHBlbmRDaGlsZChsb3dQcmlvcik7XHJcbiAgc2VsZWN0VGFzay5hcHBlbmRDaGlsZChtaWRQcmlvcik7XHJcbiAgc2VsZWN0VGFzay5hcHBlbmRDaGlsZChoaWdoUHJpb3IpO1xyXG4gIHByaW9yTGFiZWwuYXBwZW5kQ2hpbGQoc2VsZWN0VGFzayk7XHJcblxyXG4gIHRpdGxlSW5wdXQudmFsdWU9Y3VyclRhc2sudGl0bGU7XHJcbiAgZGVzY0lucHV0LnZhbHVlPWN1cnJUYXNrLmRlc2M7XHJcbiAgY29uc3QgZGF0ZT1uZXcgRGF0ZShjdXJyVGFzay5kdWVEYXRlKTtcclxuICBjb25zdCBmb3JtYXR0ZWREYXRlPWRhdGUudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gIGRhdGVJbnB1dC52YWx1ZT1mb3JtYXR0ZWREYXRlO1xyXG4gIHNlbGVjdFRhc2sudmFsdWU9Y3VyclRhc2sucHJpb3JpdHk7ICBcclxuXHJcbiAgLy9idXR0b25zXHJcbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcclxuICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xyXG4gIGNvbnN0IHJlc2V0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICByZXNldEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmVzZXRcIik7XHJcbiAgcmVzZXRCdG4udGV4dENvbnRlbnQgPSBcIlJlc2V0XCI7XHJcblxyXG4gIC8vIGFycmFuZ2luZyB0aGUgY29udGVudFxyXG4gIGdldERpYWxvZy5hcHBlbmRDaGlsZChlZGl0VGFza0Zvcm0pO1xyXG4gIGVkaXRUYXNrRm9ybS5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuICBlZGl0VGFza0Zvcm0uYXBwZW5kQ2hpbGQoaWRWYWwpO1xyXG4gIGVkaXRUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrSWQpO1xyXG4gIGVkaXRUYXNrRm9ybS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcclxuICBlZGl0VGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGVzY0xhYmVsKTtcclxuICBlZGl0VGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcclxuICBlZGl0VGFza0Zvcm0uYXBwZW5kQ2hpbGQocHJpb3JMYWJlbCk7XHJcbiAgY29uc3QgYnRuQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImJ0bkNvbnRhaW5lclwiKTtcclxuICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcclxuICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQocmVzZXRCdG4pO1xyXG4gIGVkaXRUYXNrRm9ybS5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xyXG4gIGNvbnRlbnRJbml0LmFwcGVuZENoaWxkKGdldERpYWxvZyk7XHJcbiAgZ2V0RGlhbG9nLnNob3dNb2RhbCgpO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlUHJqRm9ybSwgY3JlYXRlVGFza0Zvcm0sIGVkaXRUYXNrRm9ybSB9O1xyXG4iLCIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0YWcsIGNsYXNzTmFtZXMsIHRleHRDb250ZW50KSA9PiB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG4gICAgaWYgKGNsYXNzTmFtZXMpIHtcclxuICAgICAgY2xhc3NOYW1lcy5zcGxpdChcIiBcIikuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRleHRDb250ZW50KSB7XHJcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcclxuICAgIH1cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlSG9tZT0oKT0+e1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImNvbnRhaW5lclwiKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuXHJcbiAgICAvLyBoZWFkZXJcclxuICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJoZWFkZXJcIik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHJcbiAgICBjb25zdCB3ZWJOYW1lID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIndlYk5hbWVcIiwgXCJUbyBEbyBMaXN0XCIpO1xyXG4gICAgY29uc3QgbG9nQnRucyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJsb2dCdG5zXCIpO1xyXG4gICAgY29uc3Qgc2lnbkJ0biA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJzaWduQnRuXCIsIFwiU2lnbiBVcFwiKTtcclxuICAgIGNvbnN0IGxvZ2luQnRuID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcImxvZ2luQnRuXCIsIFwiTG9nIEluXCIpO1xyXG5cclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh3ZWJOYW1lKTtcclxuICAgIGxvZ0J0bnMuYXBwZW5kQ2hpbGQoc2lnbkJ0bik7XHJcbiAgICBsb2dCdG5zLmFwcGVuZENoaWxkKGxvZ2luQnRuKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dCdG5zKTtcclxuXHJcbiAgICAvLyBzaWRlYmFyXHJcbiAgICBjb25zdCBzaWRlYmFyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInNpZGViYXJcIik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XHJcbiAgICBjb25zdCBwcmpUaXRsZSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJwcmpUaXRsZVwiLCBcIlByb2plY3RzXCIpO1xyXG4gICAgY29uc3QgcHJqTGlzdCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJwcmpMaXN0XCIpO1xyXG4gICAgY29uc3QgcHJqQ3JlYXRlID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcImFkZFByakJ0blwiLCBcIitcIik7XHJcblxyXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChwcmpUaXRsZSk7XHJcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByakxpc3QpO1xyXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChwcmpDcmVhdGUpO1xyXG4gICAgLy8gY29udGVudFxyXG4gICAgY29uc3QgY29udGVudCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJjb250ZW50XCIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG4gICAgY29uc3QgY29udGVudEluaXQgPSBjcmVhdGVFbGVtZW50KFxyXG4gICAgXCJkaXZcIixcclxuICAgIFwiY29udGVudEluaXRcIixcclxuICAgIFwiQWRkIEEgUHJvamVjdCB0byBzdGFydCBDcmVhdGluZyB5b3VyIFRvLURvIExpc3RcIlxyXG4gICAgKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudEluaXQpO1xyXG59XHJcblxyXG5leHBvcnQge2NyZWF0ZUVsZW1lbnQsY3JlYXRlSG9tZX07XHJcblxyXG4iLCJsZXQgbGlzdHMgPSBbXTtcclxuXHJcbmNvbnN0IExpc3QgPSAobmFtZSkgPT4ge1xyXG4gIGNvbnN0IGlkID0gRGF0ZS5ub3coKS50b1N0cmluZygpO1xyXG4gIGxldCB0YXNrcyA9IFtdO1xyXG4gIGxldCBjb21wbGV0ZWQgPSBbXTtcclxuICByZXR1cm4ge1xyXG4gICAgaWQsXHJcbiAgICBuYW1lLFxyXG4gICAgdGFza3MsXHJcbiAgICBjb21wbGV0ZWQsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUxpc3QgPSAobmFtZSkgPT4ge1xyXG4gIGxldCBsaXN0O1xyXG4gIGlmIChsaXN0cy5maW5kKChsaXN0KSA9PiBsaXN0Lm5hbWUgPT09IG5hbWUpKSB7XHJcbiAgICBsaXN0ID0gTGlzdChuYW1lICsgXCIxXCIpO1xyXG4gIH0gZWxzZSBsaXN0ID0gTGlzdChuYW1lKTtcclxuICBsaXN0cy5wdXNoKGxpc3QpO1xyXG59O1xyXG5cclxuY29uc3QgZGVsZXRlTGlzdCA9IChsaXN0SWQpID0+IHtcclxuICBjb25zdCBsaXN0SW5kZXggPSBnZXRMaXN0SW5kZXgobGlzdElkKTtcclxuICBsaXN0cy5zcGxpY2UobGlzdEluZGV4LCAxKTtcclxufTtcclxuXHJcbmNvbnN0IGdldExpc3RJbmRleCA9IChsaXN0SWQpID0+IHtcclxuICByZXR1cm4gbGlzdHMuZmluZEluZGV4KChsaXN0KSA9PiBsaXN0SWQgPT09IGxpc3QuaWQpO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0TGlzdCA9IChsaXN0SWQpID0+IHtcclxuICByZXR1cm4gbGlzdHMuZmluZCgobGlzdCkgPT4gbGlzdC5pZCA9PT0gbGlzdElkKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgeyBsaXN0cywgY3JlYXRlTGlzdCwgZ2V0TGlzdCwgZGVsZXRlTGlzdCwgZ2V0TGlzdEluZGV4IH07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgZ2V0TGlzdEluZGV4LCBnZXRMaXN0IH0gZnJvbSBcIi4vbGlzdC5qc1wiO1xyXG5cclxuY29uc3QgVGFzayA9IChsaXN0SWQsIHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xyXG4gIGxldCBpZCA9IERhdGUubm93KCkudG9TdHJpbmcoKTtcclxuICBsZXQgY29tcGxldGUgPSBmYWxzZTtcclxuICByZXR1cm4ge1xyXG4gICAgaWQsXHJcbiAgICBsaXN0SWQsXHJcbiAgICB0aXRsZSxcclxuICAgIGRlc2MsXHJcbiAgICBkdWVEYXRlLFxyXG4gICAgcHJpb3JpdHksXHJcbiAgICBjb21wbGV0ZSxcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlVGFzayA9IChsaXN0SWQsIHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xyXG4gIGNvbnN0IGxpc3QgPSBnZXRMaXN0KGxpc3RJZCk7XHJcbiAgY29uc3QgdGFzayA9IFRhc2sobGlzdElkLCB0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkpO1xyXG4gIGxpc3RbXCJ0YXNrc1wiXS5wdXNoKHRhc2spO1xyXG59O1xyXG5cclxuY29uc3QgZGVsZXRlVGFzayA9IChsaXN0SWQsIHRhc2tJZCkgPT4ge1xyXG4gIGNvbnN0IGxpc3QgPSBnZXRMaXN0KGxpc3RJZCk7XHJcbiAgY29uc3QgdGFza0luZGV4ID0gZ2V0VGFza0luZGV4KGxpc3RJZCwgdGFza0lkKTtcclxuICBsaXN0W1widGFza3NcIl0uc3BsaWNlKHRhc2tJbmRleCwgMSk7XHJcbn07XHJcblxyXG5jb25zdCBtYXJrQ29tcGxldGUgPSAobGlzdElkLCB0YXNrSWQpID0+IHtcclxuICBjb25zdCBsaXN0ID0gZ2V0TGlzdChsaXN0SWQpO1xyXG4gIGNvbnN0IHRhc2sgPSBnZXRUYXNrKGxpc3RJZCwgdGFza0lkKTtcclxuICBjb25zdCB0YXNrSW5kZXggPSBnZXRUYXNrSW5kZXgobGlzdElkLCB0YXNrSWQpO1xyXG4gIGxpc3RbY29tcGxldGVkXS51bnNoaWZ0KHRhc2spO1xyXG4gIGxpc3QudGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRUYXNrID0gKGxpc3RJZCwgdGFza0lkLCkgPT4ge1xyXG4gIGNvbnN0IGxpc3QgPSBnZXRMaXN0KGxpc3RJZCk7XHJcbiAgY29uc3QgdGFzayA9IGxpc3RbXCJ0YXNrc1wiXS5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xyXG4gIHJldHVybiB0YXNrO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlVGFzaz0obGlzdElkLCB0YXNrSWQsIHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSk9PntcclxuICBjb25zdCB0YXNrPWdldFRhc2sobGlzdElkLCB0YXNrSWQpO1xyXG4gIHRhc2sudGl0bGU9dGl0bGU7XHJcbiAgdGFzay5kZXNjPWRlc2M7XHJcbiAgdGFzay5kdWVEYXRlPWR1ZURhdGU7XHJcbiAgdGFzay5wcmlvcml0eT1wcmlvcml0eTtcclxufVxyXG5cclxuY29uc3QgZ2V0VGFza0luZGV4ID0gKGxpc3RJZCwgdGFza0lkKSA9PiB7XHJcbiAgY29uc3QgbGlzdCA9IGdldExpc3QobGlzdElkKTtcclxuICBjb25zdCB0YXNrSW5kZXggPSBsaXN0W1widGFza3NcIl0uZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xyXG4gIHJldHVybiB0YXNrSW5kZXg7XHJcbn07XHJcblxyXG5leHBvcnQgeyBjcmVhdGVUYXNrLCBnZXRUYXNrLCBnZXRUYXNrSW5kZXgsIGRlbGV0ZVRhc2ssIG1hcmtDb21wbGV0ZSx1cGRhdGVUYXNrIH07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHN2ZzEgZnJvbSBcIi4vYXNzZXRzL3RyYXNoLnN2Z1wiO1xyXG5pbXBvcnQgeyBmb3JtYXQsIGRpZmZlcmVuY2VJbkRheXMgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuaW1wb3J0ICogYXMgdGFza01vZHVsZSBmcm9tIFwiLi90YXNrLmpzXCI7XHJcbmltcG9ydCAqIGFzIGxpc3RNb2R1bGUgZnJvbSBcIi4vbGlzdC5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBjcmVhdGVIb21lIH0gZnJvbSBcIi4vaG9tZXBhZ2UuanNcIjtcclxuaW1wb3J0IHsgY3JlYXRlUHJqRm9ybSwgY3JlYXRlVGFza0Zvcm0sIGVkaXRUYXNrRm9ybSB9IGZyb20gXCIuL2Zvcm1zLmpzXCI7XHJcblxyXG5jb25zdCBzY3JlZW5Db250cm9sbGVyID0gKCkgPT4ge1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBjcmVhdGVIb21lKCkpO1xyXG4gIGNvbnN0IGFkZFByakJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUHJqQnRuXCIpO1xyXG4gIGNvbnN0IHByakxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByakxpc3RcIik7XHJcbiAgY29uc3QgY29udGVudEluaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRJbml0XCIpO1xyXG5cclxuICAvL3NpZGVCYXIgRnVuY3Rpb25hbGl0eVxyXG4gIGFkZFByakJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlUHJqRm9ybSk7XHJcblxyXG4gIC8vaGFuZGxlIGZvcm0gc3VibWlzc2lvblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImdldFByakZvcm1cIikpIHN1Ym1pdFByakZvcm0oZXZlbnQpO1xyXG4gICAgZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImdldFRhc2tGb3JtXCIpKVxyXG4gICAgICBzdWJtaXRUYXNrRm9ybShldmVudCk7XHJcbiAgICBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZWRpdFRhc2tGb3JtXCIpKVxyXG4gICAgICBzdWJtaXRFZGl0ZWRUYXNrRm9ybShldmVudCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIGhhbmRsZSBwcm9qZWN0IGxpc3QgY2xpY2tzXHJcbiAgcHJqTGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0cmFzaEljb25cIikgfHxcclxuICAgICAgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIudHJhc2hJY29uXCIpXHJcbiAgICApXHJcbiAgICAgIGRlbGV0ZVByaihldmVudCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vaGFuZGxlIG1haW4gY29udGVudCBjbGljayBldmVudHNcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImxpc3ROYW1lXCIpKSB7XHJcbiAgICAgIGdldFRhc2soZXZlbnQpO1xyXG4gICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWRkVGFza0J0blwiKSkge1xyXG4gICAgICBjcmVhdGVUYXNrRm9ybShldmVudC50YXJnZXQuaWQpO1xyXG4gICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xvc2VzdChcIi5kZWxldGVUYXNrQnRuXCIpKSBkZWxldGVUYXNrKGV2ZW50KTtcclxuICAgIGVsc2UgaWYgKFxyXG4gICAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YXNrQmxvY2tcIikgJiZcclxuICAgICAgIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjb21wbGV0ZUNoZWNrXCIpXHJcbiAgICApXHJcbiAgICAgIGVkaXRUYXNrKGV2ZW50KTtcclxuICAgIGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjb21wbGV0ZUNoZWNrXCIpKSB7XHJcbiAgICAgIGNvbXBsZXRlZFRhc2tzKGV2ZW50KTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gY29tcGxldGVkVGFza3MoZXZlbnQpIHtcclxuICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcclxuICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICBwYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZVwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vaGFuZGxlIGVzYyBrZXkgdG8gY2xvc2UgZGlhbG9nc1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NcIiB8fCBldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZ1wiKTtcclxuICAgICAgaWYgKGNvbnRlbnRJbml0LmNvbnRhaW5zKGRpYWxvZykpIGNvbnRlbnRJbml0LnJlbW92ZUNoaWxkKGRpYWxvZyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIHNpZGViYXIgZnVuY3Rpb25zXHJcbiAgLy9mb3JtIHN1Ym1pc3Npb24gZm9yIHByb2plY3RzXHJcbiAgZnVuY3Rpb24gc3VibWl0UHJqRm9ybShlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XHJcbiAgICBjb25zdCBwcmpOYW1lID0gZm9ybURhdGEuZ2V0KFwicHJvamVjdF9uYW1lXCIpO1xyXG4gICAgaWYgKHByak5hbWUpIHtcclxuICAgICAgbGlzdE1vZHVsZS5jcmVhdGVMaXN0KHByak5hbWUpO1xyXG4gICAgICBjb25zb2xlLmxvZyhsaXN0TW9kdWxlLmxpc3RzKTtcclxuICAgIH1cclxuICAgIHByakxpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgZGlzcGxheUxpc3RzKCk7XHJcbiAgICBlLnRhcmdldC5yZW1vdmUoKTtcclxuICB9XHJcblxyXG4gIC8vZGVsZXRlIFByb2plY3RcclxuICBmdW5jdGlvbiBkZWxldGVQcmooZSkge1xyXG4gICAgbGlzdE1vZHVsZS5kZWxldGVMaXN0KGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc05hbWUpO1xyXG4gICAgcHJqTGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICBkaXNwbGF5TGlzdHMoKTtcclxuICB9XHJcblxyXG4gIC8vIGRpc3BsYXlMaXN0c1xyXG4gIGZ1bmN0aW9uIGRpc3BsYXlMaXN0cygpIHtcclxuICAgIGxpc3RNb2R1bGUubGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xyXG4gICAgICBjb25zdCBuZXdQcmogPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibmV3UHJqXCIpO1xyXG4gICAgICBuZXdQcmouc2V0QXR0cmlidXRlKFwiaWRcIiwgbGlzdC5pZCk7XHJcbiAgICAgIGNvbnN0IG5hbWUgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibGlzdE5hbWVcIiwgbGlzdC5uYW1lKTtcclxuICAgICAgY29uc3Qgc3ZnRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInRyYXNoSWNvblwiKTtcclxuICAgICAgc3ZnRGl2LmlubmVySFRNTCA9IHN2ZzE7XHJcbiAgICAgIG5ld1Byai5hcHBlbmRDaGlsZChuYW1lKTtcclxuICAgICAgbmV3UHJqLmFwcGVuZENoaWxkKHN2Z0Rpdik7XHJcbiAgICAgIHByakxpc3QuYXBwZW5kQ2hpbGQobmV3UHJqKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gY3JlYXRlIFRhc2sgQ29udGFpbmVyXHJcbiAgZnVuY3Rpb24gY3JlYXRlVGFza0NvbnRhaW5lcihsaXN0SWQpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwidGFza0NvbnRhaW5lclwiKTtcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgYGxpc3QtJHtsaXN0SWR9YCk7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIC8vbWFpbkNvbnRlbnRcclxuICAvLyBnZXQgdGFzayBmb3IgYSBwcm9qZWN0XHJcbiAgZnVuY3Rpb24gZ2V0VGFzayhlKSB7XHJcbiAgICBjb25zdCBsaXN0SWQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmlkO1xyXG4gICAgY3JlYXRlQ29udGVudChsaXN0SWQpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBjcmVhdGVDb250ZW50KGxpc3RJZCkge1xyXG4gICAgY29udGVudEluaXQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBjcmVhdGVUYXNrQ29udGFpbmVyKGxpc3RJZCk7XHJcbiAgICBjb250ZW50SW5pdC5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcclxuICAgIGNyZWF0ZUFkZFRhc2tCdG4obGlzdElkKTtcclxuICAgIGRpc3BsYXlUYXNrcyhsaXN0SWQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlQWRkVGFza0J0bihsaXN0SWQpIHtcclxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiYWRkVGFza0J0blwiLCBcIitcIik7XHJcbiAgICBhZGRUYXNrQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIGxpc3RJZCk7XHJcbiAgICBjb250ZW50SW5pdC5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldFByaW9yQ29sb3IgPSAocHJpb3IpID0+IHtcclxuICAgIGlmIChwcmlvciA9PT0gXCJoaWdoXCIpIHJldHVybiBcIkZGMDAwMFwiO1xyXG4gICAgZWxzZSBpZiAocHJpb3IgPT09IFwibWlkXCIpIHJldHVybiBcIkZGRkYwMFwiO1xyXG4gICAgZWxzZSBpZiAocHJpb3IgPT09IFwibG93XCIpIHJldHVybiBcIjAwRkYwMFwiO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRydW5jYXRlU3RyaW5nID0gKHN0cikgPT4ge1xyXG4gICAgaWYgKHN0ci5sZW5ndGggPiAzNSkgc3RyID0gYCR7c3RyLnNsaWNlKDAsIDM1KX0uLi5gO1xyXG4gICAgcmV0dXJuIHN0cjtcclxuICB9O1xyXG5cclxuICBjb25zdCB0aW1lUmVtYWluaW5nID0gKGRhdGVEaWZmKSA9PiB7XHJcbiAgICBpZiAoZGF0ZURpZmYgPCAwKSB7XHJcbiAgICAgIHJldHVybiBgVGhlIHRhc2sgd2FzIGR1ZSAke01hdGguYWJzKGRhdGVEaWZmKX0gZGF5cyBhZ29gO1xyXG4gICAgfSBlbHNlIGlmIChkYXRlRGlmZiA+IDApIHtcclxuICAgICAgcmV0dXJuIGBUaGUgdGFzayBpcyBkdWUgaW4gJHtkYXRlRGlmZn0gZGF5c2A7XHJcbiAgICB9IGVsc2UgaWYgKGRhdGVEaWZmID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBgVGhlIHRhc2sgaXMgZHVlIHRvZGF5YDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBkaXNwbGF5VGFza3MgPSAobGlzdElkKSA9PiB7XHJcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2xpc3QtJHtsaXN0SWR9YCk7XHJcbiAgICBpZiAoIXRhc2tDb250YWluZXIpIHtcclxuICAgICAgY29uc29sZS53YXJuKFwiVGFzayBDb250YWluZXIgaXMgbm90IHlldCBjcmVhdGVkXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0YXNrQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIGNvbnN0IGxpc3QgPSBsaXN0TW9kdWxlLmdldExpc3QobGlzdElkKTtcclxuICAgIGlmIChsaXN0W1widGFza3NcIl0ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRhc2tDb250YWluZXIudGV4dENvbnRlbnQgPVxyXG4gICAgICAgIFwiQ2xpY2sgb24gdGhlIEFkZCBCdXR0b24gYmVsb3cgdG8gc3RhcnQgQ3JlYXRpbmcgeW91ciBUYXNrc1wiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGlzdFtcInRhc2tzXCJdLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSB0YXNrLmR1ZURhdGU7XHJcbiAgICAgICAgY29uc3QgZGlmZkRhdGUgPSBkaWZmZXJlbmNlSW5EYXlzKHRhc2tEdWVEYXRlLCBjdXJyRGF0ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhc2tCbG9jayA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0YXNrQmxvY2tcIik7XHJcbiAgICAgICAgdGFza0Jsb2NrLnNldEF0dHJpYnV0ZShcImlkXCIsIHRhc2suaWQpO1xyXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJkaXNwVGFza1RpdGxlXCIsIHRhc2sudGl0bGUpO1xyXG4gICAgICAgIGNvbnN0IHRhc2tEZXNjID0gY3JlYXRlRWxlbWVudChcclxuICAgICAgICAgIFwiZGl2XCIsXHJcbiAgICAgICAgICBcImRpc3BUYXNrRGVzY1wiLFxyXG4gICAgICAgICAgdHJ1bmNhdGVTdHJpbmcodGFzay5kZXNjKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgY2hlY2tCb3ggPSBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgXCJjb21wbGV0ZUNoZWNrXCIpO1xyXG4gICAgICAgIGNoZWNrQm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcclxuICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgICBcImRpdlwiLFxyXG4gICAgICAgICAgXCJkaXNwVGFza0RhdGVcIixcclxuICAgICAgICAgIHRpbWVSZW1haW5pbmcoZGlmZkRhdGUpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCB0YXNrUHJpb3IgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZGlzcFRhc2tQcmlvclwiKTtcclxuICAgICAgICBjb25zdCBkZWxldGVUYXNrQnRuID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImRlbGV0ZVRhc2tCdG5cIik7XHJcbiAgICAgICAgZGVsZXRlVGFza0J0bi5pbm5lckhUTUwgPSBzdmcxO1xyXG4gICAgICAgIGNvbnN0IGNvbG9yID0gZ2V0UHJpb3JDb2xvcih0YXNrLnByaW9yaXR5KTtcclxuICAgICAgICB0YXNrUHJpb3Iuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYCMke2NvbG9yfWA7XHJcblxyXG4gICAgICAgIHRhc2tCbG9jay5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xyXG4gICAgICAgIHRhc2tCbG9jay5hcHBlbmRDaGlsZCh0YXNrRGVzYyk7XHJcbiAgICAgICAgdGFza0Jsb2NrLmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcclxuICAgICAgICB0YXNrQmxvY2suYXBwZW5kQ2hpbGQodGFza1ByaW9yKTtcclxuICAgICAgICB0YXNrQmxvY2suYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xyXG4gICAgICAgIHRhc2tCbG9jay5hcHBlbmRDaGlsZChkZWxldGVUYXNrQnRuKTtcclxuXHJcbiAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQmxvY2spO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBkZWxldGVUYXNrKGUpIHtcclxuICAgIGNvbnN0IHRhc2tJZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZDtcclxuICAgIGNvbnN0IGxpc3RJZCA9XHJcbiAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkLnNsaWNlKDUpO1xyXG4gICAgdGFza01vZHVsZS5kZWxldGVUYXNrKGxpc3RJZCwgdGFza0lkKTtcclxuICAgIGRpc3BsYXlUYXNrcyhsaXN0SWQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZWRpdFRhc2soZXZlbnQpIHtcclxuICAgIGNvbnN0IHRhc2tJZCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmlkO1xyXG4gICAgY29uc3QgbGlzdElkID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZC5zbGljZSg1KTtcclxuICAgIGNvbnN0IGN1cnJUYXNrID0gdGFza01vZHVsZS5nZXRUYXNrKGxpc3RJZCwgdGFza0lkKTtcclxuICAgIGVkaXRUYXNrRm9ybShjdXJyVGFzayk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzdWJtaXRUYXNrRm9ybSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XHJcbiAgICBjb25zdCBsaXN0SWQgPSBmb3JtRGF0YS5nZXQoXCJsaXN0X2lkXCIpO1xyXG4gICAgY29uc3QgdGFza1RpdGxlID0gZm9ybURhdGEuZ2V0KFwidGFza19uYW1lXCIpO1xyXG4gICAgY29uc3QgdGFza0Rlc2MgPSBmb3JtRGF0YS5nZXQoXCJ0YXNrX2Rlc2NcIik7XHJcbiAgICBjb25zdCBkdWVEYXRlID0gZm9ybURhdGEuZ2V0KFwidGFza19kYXRlXCIpO1xyXG4gICAgY29uc3QgdGFza1ByaW9yID0gZm9ybURhdGEuZ2V0KFwidGFza19wcmlvclwiKTtcclxuICAgIGlmIChsaXN0SWQgJiYgdGFza1RpdGxlICYmIHRhc2tEZXNjICYmIGR1ZURhdGUgJiYgdGFza1ByaW9yKSB7XHJcbiAgICAgIHRhc2tNb2R1bGUuY3JlYXRlVGFzayhsaXN0SWQsIHRhc2tUaXRsZSwgdGFza0Rlc2MsIGR1ZURhdGUsIHRhc2tQcmlvcik7XHJcbiAgICAgIGNvbnNvbGUubG9nKGxpc3RNb2R1bGUubGlzdHMpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZ1wiKTtcclxuICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgY29udGVudEluaXQucmVtb3ZlQ2hpbGQoZGlhbG9nKTtcclxuICAgIGRpc3BsYXlUYXNrcyhsaXN0SWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN1Ym1pdEVkaXRlZFRhc2tGb3JtID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGUudGFyZ2V0KTtcclxuICAgIGNvbnN0IHRhc2tJZCA9IGZvcm1EYXRhLmdldChcInRhc2tfaWRcIik7XHJcbiAgICBjb25zdCBsaXN0SWQgPSBmb3JtRGF0YS5nZXQoXCJsaXN0X2lkXCIpO1xyXG4gICAgY29uc3QgdGFza1RpdGxlID0gZm9ybURhdGEuZ2V0KFwidGFza19uYW1lXCIpO1xyXG4gICAgY29uc3QgdGFza0Rlc2MgPSBmb3JtRGF0YS5nZXQoXCJ0YXNrX2Rlc2NcIik7XHJcbiAgICBjb25zdCBkdWVEYXRlID0gZm9ybURhdGEuZ2V0KFwidGFza19kYXRlXCIpO1xyXG4gICAgY29uc3QgdGFza1ByaW9yID0gZm9ybURhdGEuZ2V0KFwidGFza19wcmlvclwiKTtcclxuICAgIGlmIChsaXN0SWQgJiYgdGFza1RpdGxlICYmIHRhc2tEZXNjICYmIGR1ZURhdGUgJiYgdGFza1ByaW9yKSB7XHJcbiAgICAgIHRhc2tNb2R1bGUudXBkYXRlVGFzayhcclxuICAgICAgICBsaXN0SWQsXHJcbiAgICAgICAgdGFza0lkLFxyXG4gICAgICAgIHRhc2tUaXRsZSxcclxuICAgICAgICB0YXNrRGVzYyxcclxuICAgICAgICBkdWVEYXRlLFxyXG4gICAgICAgIHRhc2tQcmlvclxyXG4gICAgICApO1xyXG4gICAgICBjb25zb2xlLmxvZyhsaXN0TW9kdWxlLmxpc3RzKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaWFsb2dcIik7XHJcbiAgICBkaWFsb2cuY2xvc2UoKTtcclxuICAgIGNvbnRlbnRJbml0LnJlbW92ZUNoaWxkKGRpYWxvZyk7XHJcbiAgICBkaXNwbGF5VGFza3MobGlzdElkKTtcclxuICB9O1xyXG4gIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wbGV0ZUNoZWNrXCIpO1xyXG5cclxuICBsaXN0TW9kdWxlLmNyZWF0ZUxpc3QoXCJTdHVkeVwiKTtcclxuICBkaXNwbGF5TGlzdHMoKTtcclxuICBsaXN0TW9kdWxlLmxpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcclxuICAgIGlmIChsaXN0Lm5hbWUgPT09IFwiU3R1ZHlcIikge1xyXG4gICAgICBjb25zdCBsaXN0SWQgPSBsaXN0LmlkO1xyXG4gICAgICB0YXNrTW9kdWxlLmNyZWF0ZVRhc2soXHJcbiAgICAgICAgbGlzdElkLFxyXG4gICAgICAgIFwiRXhhbVwiLFxyXG4gICAgICAgIFwiU3R1ZHkgZm9yIHRoZSBleGFtIHNjaGVkdWxlZCBuZXh0IHdlZWtcIixcclxuICAgICAgICBcIjIwMjQtMDYtMDVcIixcclxuICAgICAgICBcImhpZ2hcIlxyXG4gICAgICApO1xyXG4gICAgICBkaXNwbGF5VGFza3MobGlzdElkKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuZXhwb3J0IHsgc2NyZWVuQ29udHJvbGxlciB9O1xyXG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IHV0Y0RhdGUgPSBuZXcgRGF0ZShcbiAgICBEYXRlLlVUQyhcbiAgICAgIF9kYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICBfZGF0ZS5nZXRNb250aCgpLFxuICAgICAgX2RhdGUuZ2V0RGF0ZSgpLFxuICAgICAgX2RhdGUuZ2V0SG91cnMoKSxcbiAgICAgIF9kYXRlLmdldE1pbnV0ZXMoKSxcbiAgICAgIF9kYXRlLmdldFNlY29uZHMoKSxcbiAgICAgIF9kYXRlLmdldE1pbGxpc2Vjb25kcygpLFxuICAgICksXG4gICk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoX2RhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiArZGF0ZSAtICt1dGNEYXRlO1xufVxuIiwiLyoqXG4gKiBAbW9kdWxlIGNvbnN0YW50c1xuICogQHN1bW1hcnkgVXNlZnVsIGNvbnN0YW50c1xuICogQGRlc2NyaXB0aW9uXG4gKiBDb2xsZWN0aW9uIG9mIHVzZWZ1bCBkYXRlIGNvbnN0YW50cy5cbiAqXG4gKiBUaGUgY29uc3RhbnRzIGNvdWxkIGJlIGltcG9ydGVkIGZyb20gYGRhdGUtZm5zL2NvbnN0YW50c2A6XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG1heFRpbWUsIG1pblRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogZnVuY3Rpb24gaXNBbGxvd2VkVGltZSh0aW1lKSB7XG4gKiAgIHJldHVybiB0aW1lIDw9IG1heFRpbWUgJiYgdGltZSA+PSBtaW5UaW1lO1xuICogfVxuICogYGBgXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBzdW1tYXJ5IERheXMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3QgZGF5c0luV2VlayA9IDc7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAc3VtbWFyeSBEYXlzIGluIDEgeWVhci5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEhvdyBtYW55IGRheXMgaW4gYSB5ZWFyLlxuICpcbiAqIE9uZSB5ZWFycyBlcXVhbHMgMzY1LjI0MjUgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGE6XG4gKlxuICogPiBMZWFwIHllYXIgb2NjdXJlcyBldmVyeSA0IHllYXJzLCBleGNlcHQgZm9yIHllYXJzIHRoYXQgYXJlIGRpdmlzYWJsZSBieSAxMDAgYW5kIG5vdCBkaXZpc2FibGUgYnkgNDAwLlxuICogPiAxIG1lYW4geWVhciA9ICgzNjUrMS80LTEvMTAwKzEvNDAwKSBkYXlzID0gMzY1LjI0MjUgZGF5c1xuICovXG5leHBvcnQgY29uc3QgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWF4VGltZVxuICogQHN1bW1hcnkgTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1heFRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogY29uc3QgaXNWYWxpZCA9IDg2NDAwMDAwMDAwMDAwMDEgPD0gbWF4VGltZTtcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBuZXcgRGF0ZSg4NjQwMDAwMDAwMDAwMDAxKTtcbiAqIC8vPT4gSW52YWxpZCBEYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBzdW1tYXJ5IE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtaW5UaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGNvbnN0IGlzVmFsaWQgPSAtODY0MDAwMDAwMDAwMDAwMSA+PSBtaW5UaW1lO1xuICogLy89PiBmYWxzZVxuICpcbiAqIG5ldyBEYXRlKC04NjQwMDAwMDAwMDAwMDAxKVxuICogLy89PiBJbnZhbGlkIERhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1pblRpbWUgPSAtbWF4VGltZTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luV2Vla1xuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luV2VlayA9IDYwNDgwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luRGF5XG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbkRheSA9IDg2NDAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJblllYXJcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luWWVhciA9IDUyNTYwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbk1vbnRoXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgbW9udGguXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5Nb250aCA9IDQzMjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luRGF5XG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luRGF5ID0gMTQ0MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBob3VyLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luSG91ciA9IDYwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAc3VtbWFyeSBNb250aHMgaW4gMSBxdWFydGVyLlxuICovXG5leHBvcnQgY29uc3QgbW9udGhzSW5RdWFydGVyID0gMztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQHN1bW1hcnkgTW9udGhzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vbnRoc0luWWVhciA9IDEyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBzdW1tYXJ5IFF1YXJ0ZXJzIGluIDEgeWVhclxuICovXG5leHBvcnQgY29uc3QgcXVhcnRlcnNJblllYXIgPSA0O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIGhvdXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIG1pbnV0ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luV2Vla1xuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJblllYXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIG1vbnRoXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5Nb250aCA9IHNlY29uZHNJblllYXIgLyAxMjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBxdWFydGVyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMztcbiIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luRGF5IH0gZnJvbSBcIi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZkRheSB9IGZyb20gXCIuL3N0YXJ0T2ZEYXkubWpzXCI7XG5pbXBvcnQgeyBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIH0gZnJvbSBcIi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy4gVGhpcyBtZWFucyB0aGF0IHRoZSB0aW1lcyBhcmUgcmVtb3ZlZFxuICogZnJvbSB0aGUgZGF0ZXMgYW5kIHRoZW4gdGhlIGRpZmZlcmVuY2UgaW4gZGF5cyBpcyBjYWxjdWxhdGVkLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIGVhcmxpZXIgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5c1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzowMDowMCBhbmQgMiBKdWx5IDIwMTIgMDA6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTIsIDYsIDIsIDAsIDApLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgMClcbiAqIClcbiAqIC8vPT4gMzY2XG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzo1OTowMCBhbmQgMyBKdWx5IDIwMTEgMDA6MDE6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDMsIDAsIDEpLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgNTkpXG4gKiApXG4gKiAvLz0+IDFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IHN0YXJ0T2ZEYXlMZWZ0ID0gc3RhcnRPZkRheShkYXRlTGVmdCk7XG4gIGNvbnN0IHN0YXJ0T2ZEYXlSaWdodCA9IHN0YXJ0T2ZEYXkoZGF0ZVJpZ2h0KTtcblxuICBjb25zdCB0aW1lc3RhbXBMZWZ0ID1cbiAgICArc3RhcnRPZkRheUxlZnQgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlMZWZ0KTtcbiAgY29uc3QgdGltZXN0YW1wUmlnaHQgPVxuICAgICtzdGFydE9mRGF5UmlnaHQgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlSaWdodCk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXIgYmVjYXVzZSB0aGUgbnVtYmVyIG9mXG4gIC8vIG1pbGxpc2Vjb25kcyBpbiBhIGRheSBpcyBub3QgY29uc3RhbnQgKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2ZcbiAgLy8gdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KS5cbiAgcmV0dXJuIE1hdGgucm91bmQoKHRpbWVzdGFtcExlZnQgLSB0aW1lc3RhbXBSaWdodCkgLyBtaWxsaXNlY29uZHNJbkRheSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzO1xuIiwiaW1wb3J0IHsgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzIH0gZnJvbSBcIi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkRheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgZnVsbCBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgZnVsbCBkYXkgcGVyaW9kcyBiZXR3ZWVuIHR3byBkYXRlcy4gRnJhY3Rpb25hbCBkYXlzIGFyZVxuICogdHJ1bmNhdGVkIHRvd2FyZHMgemVyby5cbiAqXG4gKiBPbmUgXCJmdWxsIGRheVwiIGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIGEgbG9jYWwgdGltZSBpbiBvbmUgZGF5IHRvIHRoZSBzYW1lXG4gKiBsb2NhbCB0aW1lIG9uIHRoZSBuZXh0IG9yIHByZXZpb3VzIGRheS4gQSBmdWxsIGRheSBjYW4gc29tZXRpbWVzIGJlIGxlc3MgdGhhblxuICogb3IgbW9yZSB0aGFuIDI0IGhvdXJzIGlmIGEgZGF5bGlnaHQgc2F2aW5ncyBjaGFuZ2UgaGFwcGVucyBiZXR3ZWVuIHR3byBkYXRlcy5cbiAqXG4gKiBUbyBpZ25vcmUgRFNUIGFuZCBvbmx5IG1lYXN1cmUgZXhhY3QgMjQtaG91ciBwZXJpb2RzLCB1c2UgdGhpcyBpbnN0ZWFkOlxuICogYE1hdGgudHJ1bmMoZGlmZmVyZW5jZUluSG91cnMoZGF0ZUxlZnQsIGRhdGVSaWdodCkvMjQpfDBgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIGVhcmxpZXIgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2YgZnVsbCBkYXlzIGFjY29yZGluZyB0byB0aGUgbG9jYWwgdGltZXpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgZnVsbCBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzowMDowMCBhbmQgMiBKdWx5IDIwMTIgMDA6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5EYXlzKFxuICogICBuZXcgRGF0ZSgyMDEyLCA2LCAyLCAwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDApXG4gKiApXG4gKiAvLz0+IDM2NVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBmdWxsIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjU5OjAwIGFuZCAzIEp1bHkgMjAxMSAwMDowMTowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDMsIDAsIDEpLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgNTkpXG4gKiApXG4gKiAvLz0+IDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgZnVsbCBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAxIE1hcmNoIDIwMjAgMDowMCBhbmQgMSBKdW5lIDIwMjAgMDowMCA/XG4gKiAvLyBOb3RlOiBiZWNhdXNlIGxvY2FsIHRpbWUgaXMgdXNlZCwgdGhlXG4gKiAvLyByZXN1bHQgd2lsbCBhbHdheXMgYmUgOTIgZGF5cywgZXZlbiBpblxuICogLy8gdGltZSB6b25lcyB3aGVyZSBEU1Qgc3RhcnRzIGFuZCB0aGVcbiAqIC8vIHBlcmlvZCBoYXMgb25seSA5MioyNC0xIGhvdXJzLlxuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluRGF5cyhcbiAqICAgbmV3IERhdGUoMjAyMCwgNSwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMjAsIDIsIDEpXG4gKiApXG4gKiAvLz0+IDkyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5EYXlzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3QgX2RhdGVMZWZ0ID0gdG9EYXRlKGRhdGVMZWZ0KTtcbiAgY29uc3QgX2RhdGVSaWdodCA9IHRvRGF0ZShkYXRlUmlnaHQpO1xuXG4gIGNvbnN0IHNpZ24gPSBjb21wYXJlTG9jYWxBc2MoX2RhdGVMZWZ0LCBfZGF0ZVJpZ2h0KTtcbiAgY29uc3QgZGlmZmVyZW5jZSA9IE1hdGguYWJzKGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhfZGF0ZUxlZnQsIF9kYXRlUmlnaHQpKTtcblxuICBfZGF0ZUxlZnQuc2V0RGF0ZShfZGF0ZUxlZnQuZ2V0RGF0ZSgpIC0gc2lnbiAqIGRpZmZlcmVuY2UpO1xuXG4gIC8vIE1hdGguYWJzKGRpZmYgaW4gZnVsbCBkYXlzIC0gZGlmZiBpbiBjYWxlbmRhciBkYXlzKSA9PT0gMSBpZiBsYXN0IGNhbGVuZGFyIGRheSBpcyBub3QgZnVsbFxuICAvLyBJZiBzbywgcmVzdWx0IG11c3QgYmUgZGVjcmVhc2VkIGJ5IDEgaW4gYWJzb2x1dGUgdmFsdWVcbiAgY29uc3QgaXNMYXN0RGF5Tm90RnVsbCA9IE51bWJlcihcbiAgICBjb21wYXJlTG9jYWxBc2MoX2RhdGVMZWZ0LCBfZGF0ZVJpZ2h0KSA9PT0gLXNpZ24sXG4gICk7XG4gIGNvbnN0IHJlc3VsdCA9IHNpZ24gKiAoZGlmZmVyZW5jZSAtIGlzTGFzdERheU5vdEZ1bGwpO1xuICAvLyBQcmV2ZW50IG5lZ2F0aXZlIHplcm9cbiAgcmV0dXJuIHJlc3VsdCA9PT0gMCA/IDAgOiByZXN1bHQ7XG59XG5cbi8vIExpa2UgYGNvbXBhcmVBc2NgIGJ1dCB1c2VzIGxvY2FsIHRpbWUgbm90IFVUQywgd2hpY2ggaXMgbmVlZGVkXG4vLyBmb3IgYWNjdXJhdGUgZXF1YWxpdHkgY29tcGFyaXNvbnMgb2YgVVRDIHRpbWVzdGFtcHMgdGhhdCBlbmQgdXBcbi8vIGhhdmluZyB0aGUgc2FtZSByZXByZXNlbnRhdGlvbiBpbiBsb2NhbCB0aW1lLCBlLmcuIG9uZSBob3VyIGJlZm9yZVxuLy8gRFNUIGVuZHMgdnMuIHRoZSBpbnN0YW50IHRoYXQgRFNUIGVuZHMuXG5mdW5jdGlvbiBjb21wYXJlTG9jYWxBc2MoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBkaWZmID1cbiAgICBkYXRlTGVmdC5nZXRGdWxsWWVhcigpIC0gZGF0ZVJpZ2h0LmdldEZ1bGxZZWFyKCkgfHxcbiAgICBkYXRlTGVmdC5nZXRNb250aCgpIC0gZGF0ZVJpZ2h0LmdldE1vbnRoKCkgfHxcbiAgICBkYXRlTGVmdC5nZXREYXRlKCkgLSBkYXRlUmlnaHQuZ2V0RGF0ZSgpIHx8XG4gICAgZGF0ZUxlZnQuZ2V0SG91cnMoKSAtIGRhdGVSaWdodC5nZXRIb3VycygpIHx8XG4gICAgZGF0ZUxlZnQuZ2V0TWludXRlcygpIC0gZGF0ZVJpZ2h0LmdldE1pbnV0ZXMoKSB8fFxuICAgIGRhdGVMZWZ0LmdldFNlY29uZHMoKSAtIGRhdGVSaWdodC5nZXRTZWNvbmRzKCkgfHxcbiAgICBkYXRlTGVmdC5nZXRNaWxsaXNlY29uZHMoKSAtIGRhdGVSaWdodC5nZXRNaWxsaXNlY29uZHMoKTtcblxuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTtcbiAgICAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGRpZmZlcmVuY2VJbkRheXM7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mRGF5KGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZkRheTtcbiIsIi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBhcmd1bWVudCAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgY29uc3QgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoXG4gICAgYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiBhcmd1bWVudCA9PT0gXCJvYmplY3RcIiAmJiBhcmdTdHIgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IGFyZ3VtZW50LmNvbnN0cnVjdG9yKCthcmd1bWVudCk7XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcIm51bWJlclwiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgTnVtYmVyXVwiIHx8XG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcInN0cmluZ1wiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgU3RyaW5nXVwiXG4gICkge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCB0b0RhdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQge3NjcmVlbkNvbnRyb2xsZXJ9IGZyb20gJy4vdWlDb250cm9scyc7XHJcblxyXG5zY3JlZW5Db250cm9sbGVyKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9