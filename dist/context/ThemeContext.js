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
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUITheme = exports.useThemeContext = void 0;
var react_1 = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var CssBaseline_1 = __importDefault(require("@mui/material/CssBaseline"));
var defaultTheme = (0, styles_1.createTheme)({
    palette: {
        primary: {
            main: "#001F3F",
        },
        secondary: {
            main: "#003366",
        },
        background: {
            paper: "#ffffff",
        },
    },
    typography: {
        fontFamily: "Montserrat, sans-serif",
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "#e8e4e4",
                },
                "@media (max-width: 400px)": {
                    body: {
                        overflow: "auto",
                    },
                },
                "*::-webkit-scrollbar": {
                    width: "0.8em",
                },
                "*::-webkit-scrollbar-track": {
                    cursor: "pointer",
                    "-webkit-box-shadow": "inset 0 0 6px rgba(0,31,63,0.3)",
                },
                "*::-webkit-scrollbar-thumb": {
                    cursor: "pointer",
                    backgroundColor: "rgba(0,31,63,1)",
                    outline: "1px solid slategrey",
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    margin: "0",
                    paddingTop: "0",
                    paddingBottom: "0",
                    paddingLeft: "20",
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    margin: "0",
                    padding: "0",
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    height: 4,
                    marginTop: "1rem",
                    marginBottom: "1.2rem",
                    backgroundColor: "#001F3F",
                },
            },
        },
    },
});
defaultTheme.typography.h1 = __assign(__assign({}, defaultTheme.typography.h1), (_a = { fontSize: "4.9rem" }, _a[defaultTheme.breakpoints.up("md")] = {
    fontSize: "3.43rem",
}, _a));
defaultTheme.typography.h2 = __assign(__assign({}, defaultTheme.typography.h2), (_b = { fontSize: "4.18rem" }, _b[defaultTheme.breakpoints.down("md")] = {
    fontSize: "2.926rem",
}, _b));
defaultTheme.typography.h3 = __assign(__assign({}, defaultTheme.typography.h3), (_c = { fontSize: "3.46rem" }, _c[defaultTheme.breakpoints.down("md")] = {
    fontSize: "2.422rem",
}, _c));
defaultTheme.typography.h4 = __assign(__assign({}, defaultTheme.typography.h4), (_d = { fontSize: "2.74rem" }, _d[defaultTheme.breakpoints.down("md")] = {
    fontSize: "1.918rem",
}, _d));
defaultTheme.typography.h5 = __assign(__assign({}, defaultTheme.typography.h5), (_e = { fontSize: "2.02rem" }, _e[defaultTheme.breakpoints.down("md")] = {
    fontSize: "1.414rem",
}, _e));
defaultTheme.typography.h6 = __assign(__assign({}, defaultTheme.typography.h6), (_f = { fontSize: "1.6rem" }, _f[defaultTheme.breakpoints.down("md")] = {
    fontSize: "1.2rem",
}, _f));
var ThemeContext = (0, react_1.createContext)({ theme: defaultTheme });
var useThemeContext = function () { return (0, react_1.useContext)(ThemeContext); };
exports.useThemeContext = useThemeContext;
var MUITheme = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(styles_1.ThemeProvider, { theme: defaultTheme },
        react_1.default.createElement(CssBaseline_1.default, null),
        children));
};
exports.MUITheme = MUITheme;
//# sourceMappingURL=ThemeContext.js.map