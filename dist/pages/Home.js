"use strict";
// noinspection SpellCheckingInspection
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
var images_1 = __importDefault(require("@assets/images"));
var icons_material_1 = require("@mui/icons-material");
var ThemeContext_1 = require("@context/ThemeContext");
var ScrollIcon = (0, material_1.styled)(icons_material_1.KeyboardDoubleArrowDown)({
    fontSize: "3rem",
});
var ScrollButton = (0, material_1.styled)(material_1.Button)({
    cursor: "pointer",
    flexDirection: "column",
    width: "100%",
});
var Headshot = (0, material_1.styled)(material_1.Avatar)({
    width: "100%",
    padding: "2.1rem",
    height: "auto",
});
var HomeGridContainer = (0, material_1.styled)(material_1.Grid)({
    minWidth: "100%",
    overflow: "auto",
    padding: 0,
});
var Home = function () {
    var aboutMeRef = (0, react_1.useRef)(null);
    var theme = (0, ThemeContext_1.useThemeContext)().theme;
    var isSmallScreen = (0, material_1.useMediaQuery)(theme.breakpoints.down("sm"));
    var handleScrollToAbout = function () {
        var _a;
        (_a = aboutMeRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
    };
    return (react_1.default.createElement(HomeGridContainer, { container: true },
        react_1.default.createElement(material_1.Grid, { item: true, xs: 12 },
            react_1.default.createElement(material_1.Typography, { variant: "h2", align: "center", width: "100%" },
                react_1.default.createElement("i", null, "Howdy, I'm Brea!")),
            react_1.default.createElement(ScrollButton, { onClick: handleScrollToAbout, sx: { display: isSmallScreen ? "flex" : "none" } },
                react_1.default.createElement(material_1.Typography, { variant: "h5", align: "center", width: "100%" }, "Scroll"),
                react_1.default.createElement(ScrollIcon, null))),
        react_1.default.createElement(material_1.Grid, { item: true, sm: 12, md: 6, display: "flex", width: "100%", alignItems: "center" },
            react_1.default.createElement(Headshot, { alt: "Professional Headshot", src: images_1.default.headshot, variant: "square" })),
        react_1.default.createElement(material_1.Grid, { item: true, sm: 12, md: 6, ref: aboutMeRef, padding: "1rem", display: "flex", flexDirection: "column", justifyContent: "space-evenly" },
            react_1.default.createElement(material_1.Typography, { variant: "h6", textAlign: "center", fontStyle: "italic" },
                "Computer Engineer",
                react_1.default.createElement("br", null),
                "Software Developer",
                react_1.default.createElement("br", null),
                "Electrical Engineer"),
            react_1.default.createElement(material_1.Typography, { variant: "body1", align: "justify" },
                "Howdy, I'm ",
                react_1.default.createElement("i", null, "John Brea McWhirter"),
                ", a software and electrical engineer with a deep-seated passion for technology. Growing up surrounded by cattle, farmland, and oil, I developed a work ethic which has allowed me to pursue and achieve greatly in my personal interests. Armed with a degree in Computer Engineering, I'm advancing technology and bringing a unique perspective on its implementation. Currently rooted in the vibrant Dallas-Fort Worth Area, I'm thriving as a Software Developer, crafting solutions that push boundaries and spark progress. Thank you for finding the time to navigate to my website! I am honored that you have chosen to learn a little about me. Please contact me through my LinkedIn page for any and all inquiries!"))));
};
exports.default = Home;
//# sourceMappingURL=Home.js.map