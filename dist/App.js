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
var ThemeContext_1 = require("@context/ThemeContext");
var TabPanel_1 = __importDefault(require("@components/TabPanel"));
var tabs_1 = require("@constants/tabs");
var socialLinks_1 = require("@constants/socialLinks");
var MyLink_1 = __importDefault(require("@components/MyLink"));
var MyTabs_1 = __importDefault(require("@components/MyTabs"));
var DeviceContext_1 = require("@context/DeviceContext");
var Download_1 = __importDefault(require("@mui/icons-material/Download"));
var files_1 = __importDefault(require("@assets/files"));
var App = function () {
    var _a, _b;
    var _c = (0, react_1.useState)(tabs_1.tabData[0].label), selectedTab = _c[0], setSelectedTab = _c[1];
    var theme = (0, ThemeContext_1.useThemeContext)().theme;
    var handleTabChange = function (_event, newValue) {
        setSelectedTab(newValue);
    };
    var Body = (0, material_1.styled)(material_1.Container)((_a = {
            width: "min(1200px, 100vw)",
            minWidth: "360px"
        },
        _a[theme.breakpoints.up("sm")] = {
            marginTop: "8%",
        },
        _a[theme.breakpoints.down("sm")] = {
            marginTop: "0",
        },
        _a));
    var Footer = (0, material_1.styled)(material_1.Container)((_b = {
            marginTop: "2%"
        },
        _b[theme.breakpoints.up("sm")] = {
            marginBottom: "8%",
        },
        _b[theme.breakpoints.down("sm")] = {
            marginBottom: "0",
        },
        _b));
    return (react_1.default.createElement(ThemeContext_1.MUITheme, null,
        react_1.default.createElement(DeviceContext_1.Device, null,
            react_1.default.createElement(Body, { disableGutters: true, fixed: true, maxWidth: false },
                react_1.default.createElement(MyTabs_1.default, { value: selectedTab, onChange: handleTabChange, tabData: tabs_1.tabData }),
                tabs_1.tabData.map(function (tab, index) { return (react_1.default.createElement(TabPanel_1.default, { key: index, value: selectedTab, index: tab.label }, tab.component({}))); })),
            react_1.default.createElement(Footer, { fixed: true },
                socialLinks_1.socialLinks.map(function (link, index) { return (react_1.default.createElement(MyLink_1.default, { key: index, name: link.name, link: link.link, icon: link.icon })); }),
                react_1.default.createElement(material_1.Button, { href: files_1.default.resume, download: "Resume.pdf", target: "_blank", rel: "noopener noreferrer" },
                    react_1.default.createElement(Download_1.default, null),
                    "Resume")))));
};
exports.default = App;
//# sourceMappingURL=App.js.map