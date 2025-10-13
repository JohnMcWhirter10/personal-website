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
exports.Device = exports.useDeviceContext = void 0;
var react_1 = __importStar(require("react"));
var ThemeContext_1 = require("./ThemeContext");
var DeviceContext = (0, react_1.createContext)({ isMobile: false });
var useDeviceContext = function () { return (0, react_1.useContext)(DeviceContext); };
exports.useDeviceContext = useDeviceContext;
var Device = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(false), isMobile = _b[0], setIsMobile = _b[1];
    var theme = (0, ThemeContext_1.useThemeContext)().theme;
    (0, react_1.useEffect)(function () {
        var handleResize = function () {
            var sm = theme.breakpoints.values.sm;
            setIsMobile(window.innerWidth < sm);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return function () {
            window.removeEventListener("resize", handleResize);
        };
    }, [theme]);
    return (react_1.default.createElement(DeviceContext.Provider, { value: { isMobile: isMobile } }, children));
};
exports.Device = Device;
//# sourceMappingURL=DeviceContext.js.map