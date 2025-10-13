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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MyJob_1 = __importDefault(require("@components/MyJob"));
var honors_1 = require("@constants/honors");
var material_1 = require("@mui/material");
var react_1 = __importDefault(require("react"));
var HonorsContainer = (0, material_1.styled)(material_1.Container)({
    minWidth: "100%",
    overflow: "auto",
});
var Honors = function () {
    return (react_1.default.createElement(HonorsContainer, { fixed: true, sx: { minHeight: "100%", minWidth: "100%" } }, honors_1.honors.map(function (honor, index) { return (react_1.default.createElement(material_1.Container, { key: honor.title },
        react_1.default.createElement(MyJob_1.default, __assign({}, honor)))); })));
};
exports.default = Honors;
//# sourceMappingURL=Honors.js.map