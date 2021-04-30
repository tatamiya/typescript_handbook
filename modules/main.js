"use strict";
exports.__esModule = true;
var hello_module_js_1 = require("./hello_module.js");
hello_module_js_1["default"]();
var maths_js_1 = require("./maths.js");
console.log(maths_js_1.pi);
var absPhi = maths_js_1.absolute(maths_js_1.phi);
