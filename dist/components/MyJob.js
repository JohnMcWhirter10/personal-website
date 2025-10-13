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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var ArrowRight_1 = __importDefault(require("@mui/icons-material/ArrowRight"));
var Job = (0, material_1.styled)(material_1.Card)(function (_a) {
    var hasBullets = _a.hasBullets;
    return ({
        cursor: hasBullets ? "pointer" : "",
        width: "100%",
        marginTop: "1rem",
        marginBottom: "1rem",
        transition: hasBullets ? "transform 0.3s ease-in-out" : "",
        "&:hover": {
            transform: hasBullets ? "scale(1.05)" : "",
        },
    });
});
var MyJob = function (_a) {
    var title = _a.title, companyTitle = _a.companyTitle, location = _a.location, startDate = _a.startDate, endDate = _a.endDate, bulletPoints = _a.bulletPoints;
    var _b = (0, react_1.useState)(false), expanded = _b[0], setExpanded = _b[1];
    var handleToggle = function () {
        setExpanded(!expanded);
    };
    return (react_1.default.createElement(Job, { hasBullets: !!bulletPoints, onClick: bulletPoints ? handleToggle : function () { } },
        react_1.default.createElement(material_1.CardContent, null,
            react_1.default.createElement(material_1.Typography, { variant: "h6", gutterBottom: true, align: "left" },
                react_1.default.createElement("b", null, title)),
            react_1.default.createElement(material_1.Typography, { variant: "body1", align: "left" }, companyTitle),
            react_1.default.createElement(material_1.Grid, { container: true, alignItems: "center", justifyContent: "space-between" },
                react_1.default.createElement(material_1.Grid, { item: true },
                    react_1.default.createElement(material_1.Typography, { variant: "body1", align: "left" }, location)),
                react_1.default.createElement(material_1.Grid, { item: true },
                    react_1.default.createElement(material_1.Typography, { variant: "body1", align: "right" },
                        startDate,
                        endDate ? " - ".concat(endDate) : null))),
            bulletPoints ? (react_1.default.createElement(material_1.Collapse, { in: expanded },
                react_1.default.createElement(material_1.List, null, bulletPoints.map(function (point, index) { return (react_1.default.createElement(material_1.ListItem, { key: index, sx: { display: "flex", alignItems: "flex-start" } },
                    react_1.default.createElement(ArrowRight_1.default, { sx: {
                            alignSelf: "flex-start",
                            fontSize: "1.2rem",
                        } }),
                    react_1.default.createElement(material_1.ListItemText, { primary: point, primaryTypographyProps: { variant: "body1" } }))); })))) : null)));
};
exports.default = MyJob;
//# sourceMappingURL=MyJob.js.map