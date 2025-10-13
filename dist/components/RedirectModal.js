"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ThemeContext_1 = require("@context/ThemeContext");
var material_1 = require("@mui/material");
var react_1 = __importDefault(require("react"));
var RedirectModal = function (_a) {
    var name = _a.name, link = _a.link, open = _a.open, setOpen = _a.setOpen;
    var theme = (0, ThemeContext_1.useThemeContext)().theme;
    var RedirectDialog = (0, material_1.styled)(material_1.Dialog)({
        width: "100%",
    });
    var Title = (0, material_1.styled)(material_1.DialogTitle)({
        color: theme.palette.common.white,
        backgroundColor: theme.palette.warning.main,
    });
    var Content = (0, material_1.styled)(material_1.DialogContent)({
        margin: "2rem 2rem 0 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    });
    var handleCloseModal = function () {
        setOpen(false);
    };
    var handleContinue = function () {
        setOpen(false);
        window.open(link, "_blank");
    };
    return (react_1.default.createElement(RedirectDialog, { open: open, onClose: handleCloseModal },
        react_1.default.createElement(Title, { variant: "h5" }, "Warning"),
        react_1.default.createElement(Content, null,
            react_1.default.createElement(material_1.Typography, { variant: "body1" },
                "You will be redirected to ",
                name)),
        react_1.default.createElement(material_1.DialogActions, null,
            react_1.default.createElement(material_1.Button, { onClick: handleCloseModal }, "Cancel"),
            react_1.default.createElement(material_1.Button, { onClick: handleContinue }, "Continue"))));
};
exports.default = RedirectModal;
//# sourceMappingURL=RedirectModal.js.map