"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _js = _interopRequireDefault(require("@eslint/js"));
var _globals = _interopRequireDefault(require("globals"));
var _config = require("eslint/config");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var _default = exports["default"] = (0, _config.defineConfig)([{
  files: ["**/*.{js,mjs,cjs}"],
  plugins: {
    js: _js["default"]
  },
  "extends": ["js/recommended"]
}, {
  files: ["**/*.{js,mjs,cjs}"],
  languageOptions: {
    globals: _globals["default"].browser
  }
}]);