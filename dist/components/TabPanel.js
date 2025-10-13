"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@mui/material");
var react_1 = __importStar(require("react"));
var TabContainer = (0, material_1.styled)(material_1.Container)({
    padding: "1.5rem",
    background: "#eee",
    borderRadius: ".15em",
    boxShadow: "0 3px 15px rgba(0,0,0,0.3)",
    height: "min(70vh, 800px)",
    width: "100%",
    overflowY: "auto",
});
var TabPanel = function (_a) {
    var children = _a.children, propValue = _a.value, index = _a.index;
    var _b = (0, react_1.useState)(propValue), value = _b[0], setValue = _b[1];
    (0, react_1.useEffect)(function () {
        setValue(propValue);
    }, [propValue]);
    return (react_1.default.createElement(TabContainer, { fixed: true, disableGutters: true, maxWidth: false, role: "tabpanel", sx: { display: value === index ? "flex" : "none" }, id: "tabpanel-".concat(index), "aria-labelledby": "tab-".concat(index) }, value === index && react_1.default.createElement(react_1.default.Fragment, null, children)));
};
exports.default = TabPanel;
//# sourceMappingURL=TabPanel.js.map