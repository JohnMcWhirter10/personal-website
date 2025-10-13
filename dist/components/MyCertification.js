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
var icons_material_1 = require("@mui/icons-material");
var MyLink_1 = __importDefault(require("./MyLink"));
var Certification = (0, material_1.styled)(material_1.Card)({
    cursor: "pointer",
    width: "100%",
    marginTop: "1rem",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
        transform: "scale(1.05)",
    },
});
var MyCertification = function (_a) {
    var title = _a.title, expectedDate = _a.expectedDate, description = _a.description, tasks = _a.tasks, completed = _a.completed, credential = _a.credential, credentialWebsite = _a.credentialWebsite;
    var _b = (0, react_1.useState)(false), open = _b[0], setOpen = _b[1];
    var formatDate = function (dateString) {
        var date = new Date(dateString);
        var month = date.toLocaleString("default", { month: "long" });
        var day = date.getDate();
        var year = date.getFullYear();
        return "".concat(month, " ").concat(day, ", ").concat(year);
    };
    var handleToggle = function () {
        setOpen(!open);
    };
    return (react_1.default.createElement(Certification, { onClick: handleToggle },
        react_1.default.createElement(material_1.CardContent, null,
            react_1.default.createElement(material_1.Typography, { variant: "h6", gutterBottom: true, sx: {
                    fontWeight: "bold",
                    fontStyle: "italic",
                    textAlign: "left",
                    cursor: "pointer",
                } },
                title,
                " ",
                completed ? react_1.default.createElement(icons_material_1.CheckCircleOutline, { color: "success" }) : null),
            credential ?
                react_1.default.createElement(material_1.Typography, { variant: 'body1', gutterBottom: true },
                    credential,
                    " ",
                    credentialWebsite ? react_1.default.createElement(MyLink_1.default, { link: credentialWebsite, name: "Go to Site" })
                        : null) : null,
            react_1.default.createElement(material_1.Typography, { variant: "body1", gutterBottom: true }, description),
            react_1.default.createElement(material_1.Collapse, { in: open, timeout: "auto", unmountOnExit: true },
                react_1.default.createElement(material_1.List, { disablePadding: true }, tasks.map(function (task, index) { return (react_1.default.createElement(material_1.ListItem, { key: index, disablePadding: true, sx: { marginBottom: "1rem", marginTop: "1rem" } },
                    react_1.default.createElement(material_1.Grid, { item: true, xs: 1, display: "flex", justifyContent: "center", alignItems: "center" }, task.completed ? (react_1.default.createElement(icons_material_1.CheckCircleOutline, { color: "success" })) : (react_1.default.createElement(material_1.Box, { width: 24, height: 24 }))),
                    react_1.default.createElement(material_1.Grid, { item: true, xs: 11 },
                        react_1.default.createElement(material_1.Typography, { variant: "body1" }, task.name)))); })),
                expectedDate && (react_1.default.createElement(material_1.Typography, { variant: "body1", fontWeight: "bold" },
                    "Expected Date: ",
                    formatDate(expectedDate)))))));
};
exports.default = MyCertification;
//# sourceMappingURL=MyCertification.js.map