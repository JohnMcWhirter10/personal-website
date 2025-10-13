"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@mui/material");
var react_1 = __importDefault(require("react"));
var Paragraph = function (_a) {
    var title = _a.title, variant = _a.variant, data = _a.data;
    return (react_1.default.createElement(material_1.Container, { sx: {
            width: "100%",
            marginTop: "1rem",
            marginBottom: "1rem",
        } },
        react_1.default.createElement(material_1.Typography, { variant: variant, sx: { width: "100%", fontWeight: "bold" } }, title),
        react_1.default.createElement(material_1.Typography, { variant: variant, sx: { paddingTop: "1rem", width: "100%" } }, data)));
};
exports.default = Paragraph;
//# sourceMappingURL=Paragraph.js.map