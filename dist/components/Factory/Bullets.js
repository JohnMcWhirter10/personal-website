"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@mui/material");
var ArrowRight_1 = __importDefault(require("@mui/icons-material/ArrowRight"));
var react_1 = __importDefault(require("react"));
var Bullets = function (_a) {
    var title = _a.title, variant = _a.variant, data = _a.data;
    return (react_1.default.createElement(material_1.Container, { sx: {
            width: "100%",
            marginTop: "1rem",
            marginBottom: "1rem",
        } },
        react_1.default.createElement(material_1.Typography, { variant: variant, sx: { textAlign: "left", fontWeight: "bold" } }, title),
        react_1.default.createElement(material_1.List, { sx: { pl: 0 } }, data.map(function (point, index) { return (react_1.default.createElement(material_1.ListItem, { key: index, sx: { display: "flex", alignItems: "flex-start", pl: 0 } },
            react_1.default.createElement(ArrowRight_1.default, { sx: { alignSelf: "flex-start", mr: 1 } }),
            react_1.default.createElement(material_1.ListItemText, { primary: point, primaryTypographyProps: { variant: "body1" } }))); }))));
};
exports.default = Bullets;
//# sourceMappingURL=Bullets.js.map