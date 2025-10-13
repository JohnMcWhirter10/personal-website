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
var ThemeContext_1 = require("@context/ThemeContext");
var icons_material_1 = require("@mui/icons-material");
var RedirectModal_1 = __importDefault(require("../RedirectModal"));
var Factory_1 = __importDefault(require("@components/Factory/Factory"));
var MyProject = function (_a) {
    var title = _a.title, link = _a.link, imagePath = _a.imagePath, componentData = _a.componentData;
    var _b = (0, react_1.useState)(false), showModal = _b[0], setShowModal = _b[1];
    var _c = (0, react_1.useState)(false), redirectModal = _c[0], setRedirectModal = _c[1];
    var theme = (0, ThemeContext_1.useThemeContext)().theme;
    var Title = (0, material_1.styled)(material_1.Typography)({
        textAlign: "left",
        fontWeight: "bold",
        textDecoration: "none",
        position: "relative",
    });
    var Project = (0, material_1.styled)(material_1.Card)({
        cursor: "pointer",
        maxWidth: 400,
        maxHeight: 280,
        width: "100%",
        marginTop: "1rem",
        marginBottom: "1rem",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
            transform: "scale(1.05)",
        },
    });
    var Preview = (0, material_1.styled)(material_1.CardMedia)({
        maxHeight: 250,
        width: "100%",
        aspectRatio: "16 / 9",
    });
    var openModal = function () {
        setShowModal(true);
    };
    var closeModal = function () {
        setShowModal(false);
    };
    var openRedirectModal = function () {
        setRedirectModal(true);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Project, { onClick: openModal },
            react_1.default.createElement(Preview, { image: imagePath, title: title }),
            react_1.default.createElement(material_1.CardActions, null,
                react_1.default.createElement(Title, null, title))),
        react_1.default.createElement(material_1.Dialog, { fullScreen: true, open: showModal },
            react_1.default.createElement(material_1.IconButton, { sx: {
                    position: "absolute",
                    zIndex: theme.zIndex.appBar + 1,
                    top: 0,
                    right: 0,
                    color: theme.palette.common.white,
                }, onClick: closeModal },
                react_1.default.createElement(icons_material_1.Close, null)),
            react_1.default.createElement(material_1.DialogTitle, { sx: {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.common.white,
                } },
                react_1.default.createElement(material_1.Typography, { variant: "h5" }, title)),
            react_1.default.createElement(material_1.DialogContent, { sx: {
                    marginTop: "2rem",
                    minHeight: "auto",
                    display: "flex",
                    flexDirection: "column",
                    overflowX: "hidden",
                    alignItems: "center",
                } },
                imagePath && (react_1.default.createElement("img", { src: imagePath, alt: title, style: { maxHeight: 400, width: "auto", maxWidth: "90vw" } })),
                react_1.default.createElement(Factory_1.default, { componentData: componentData })),
            react_1.default.createElement(material_1.DialogActions, { sx: {
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "2rem",
                } }, link ? (react_1.default.createElement(material_1.Button, { onClick: openRedirectModal },
                react_1.default.createElement(material_1.Typography, { variant: "h6" }, "Visit Repository"))) : (""))),
        link ? (react_1.default.createElement(RedirectModal_1.default, { name: "Github", link: link, open: redirectModal, setOpen: setRedirectModal })) : ("")));
};
exports.default = MyProject;
//# sourceMappingURL=MyProject.js.map