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
// MyLink.tsx
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var RedirectModal_1 = __importDefault(require("./RedirectModal"));
var MyLink = function (_a) {
    var name = _a.name, link = _a.link, Icon = _a.icon;
    var _b = (0, react_1.useState)(false), openModal = _b[0], setOpenModal = _b[1];
    var handleClick = function () {
        setOpenModal(true);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.Button, { onClick: handleClick },
            Icon ? react_1.default.createElement(Icon, null) : "",
            name),
        react_1.default.createElement(RedirectModal_1.default, { name: name, link: link, open: openModal, setOpen: setOpenModal })));
};
exports.default = MyLink;
//# sourceMappingURL=MyLink.js.map