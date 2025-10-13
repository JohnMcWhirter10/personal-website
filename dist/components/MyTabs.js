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
var material_1 = require("@mui/material");
var react_1 = __importStar(require("react"));
var Menu_1 = __importDefault(require("@mui/icons-material/Menu"));
var react_2 = require("react");
var ThemeContext_1 = require("@context/ThemeContext");
var DeviceContext_1 = require("@context/DeviceContext");
var DesktopTab = (0, material_1.styled)(material_1.Tab)({
    marginLeft: 5,
    marginRight: 5,
    marginTop: "0.5rem",
    borderRadius: ".5em .5em 0 0",
    color: "white",
    backgroundColor: "#001F3F",
    transition: "margin-top 0.2s ease-in-out",
    "&:hover": {
        backgroundColor: "#003366",
        marginTop: "0",
    },
    "&.Mui-selected": {
        color: "white",
        backgroundColor: "#0066dd",
        marginTop: "0",
    },
});
var MobileTab = (0, material_1.styled)(material_1.Tab)({
    marginLeft: 0,
    height: "auto",
    width: "100%",
    maringRight: 0,
    borderRadius: 0,
    color: "#001F3F",
    backgroundColor: "white",
    "&:hover": {
        backgroundColor: "#001F3F",
        color: "white",
    },
    "&.Mui-selected": {
        color: "white",
        backgroundColor: "#0066dd",
        marginTop: "0",
    },
});
var MobileHeader = (0, material_1.styled)(material_1.Container)({
    display: "flex",
    alignItems: "center",
    backgroundColor: "#001F3F",
    color: "white",
    justifyContent: "space-between",
    paddingLeft: "1rem",
    paddingRight: "2rem",
});
var MenuButton = (0, material_1.styled)(material_1.IconButton)({
    left: "1rem",
    padding: "0.5rem",
});
var CurrentTabTitle = (0, material_1.styled)(material_1.Typography)({
    padding: "0.5rem",
    borderRadius: "0.5rem",
    fontStyle: "italic",
});
var MyTabs = function (_a) {
    var propValue = _a.value, onChange = _a.onChange, tabData = _a.tabData;
    var _b = (0, react_2.useState)(propValue), value = _b[0], setValue = _b[1];
    var _c = (0, react_2.useState)(false), isDrawerOpen = _c[0], setDrawerOpen = _c[1];
    var theme = (0, ThemeContext_1.useThemeContext)().theme;
    var isMobile = (0, DeviceContext_1.useDeviceContext)().isMobile;
    (0, react_1.useEffect)(function () {
        setValue(propValue);
    }, [propValue]);
    var toggleDrawer = function () {
        setDrawerOpen(!isDrawerOpen);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null, isMobile ? (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(MobileHeader, { fixed: true, disableGutters: true },
            react_1.default.createElement(CurrentTabTitle, { variant: "h4" }, propValue),
            react_1.default.createElement(MenuButton, { edge: "start", color: "inherit", "aria-label": "menu", onClick: toggleDrawer },
                react_1.default.createElement(Menu_1.default, null))),
        react_1.default.createElement(material_1.Drawer, { anchor: "right", open: isDrawerOpen, onClose: toggleDrawer },
            react_1.default.createElement(material_1.Tabs, { value: value, onChange: onChange, orientation: "vertical" }, tabData.map(function (tab, index) { return (react_1.default.createElement(MobileTab, { key: index, label: tab.label, value: tab.label, onClick: toggleDrawer })); }))))) : (react_1.default.createElement(material_1.Tabs, { value: value, onChange: onChange }, tabData.map(function (tab, index) { return (react_1.default.createElement(DesktopTab, { key: index, label: tab.label, value: tab.label })); })))));
};
exports.default = MyTabs;
//# sourceMappingURL=MyTabs.js.map