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
var RedirectModal_1 = __importDefault(require("@components/RedirectModal"));
var material_1 = require("@mui/material");
var react_1 = __importStar(require("react"));
var EducationContainer = (0, material_1.styled)(material_1.Container)({
    minWidth: "100%",
});
var GraduationDate = (0, material_1.styled)(material_1.Typography)(function (_a) {
    var theme = _a.theme;
    return ({});
});
var University = (0, material_1.styled)(material_1.Card)(function (_a) {
    var theme = _a.theme;
    return ({
        width: "100%",
        cursor: "pointer",
        marginTop: "1rem",
        marginBottom: "1rem",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
            transform: "scale(1.05)",
        },
    });
});
var UniversityName = (0, material_1.styled)(material_1.Typography)(function (_a) {
    var theme = _a.theme;
    return ({
        fontWeight: 700,
        marginBottom: "10px",
    });
});
var Degree = (0, material_1.styled)(material_1.Typography)(function (_a) {
    var theme = _a.theme;
    return ({
        marginBottom: "8px",
    });
});
var CollegeEducation = function (_a) {
    var collegeName = _a.collegeName, degree = _a.degree, graduationDate = _a.graduationDate, primaryColor = _a.primaryColor, secondaryColor = _a.secondaryColor, link = _a.link;
    var StyledCollege = (0, material_1.styled)(University)({
        backgroundColor: primaryColor,
        color: secondaryColor,
    });
    var _b = (0, react_1.useState)(false), redirectModal = _b[0], setRedirectModal = _b[1];
    var openRedirectModal = function () {
        setRedirectModal(true);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledCollege, { onClick: openRedirectModal },
            react_1.default.createElement(material_1.CardContent, null,
                react_1.default.createElement(UniversityName, { variant: "h6" }, collegeName),
                react_1.default.createElement(Degree, { variant: "body1" }, degree),
                react_1.default.createElement(GraduationDate, { variant: "body2" }, graduationDate))),
        react_1.default.createElement(RedirectModal_1.default, { name: collegeName, link: link, open: redirectModal, setOpen: setRedirectModal })));
};
var Education = function () {
    return (react_1.default.createElement(EducationContainer, null,
        react_1.default.createElement(CollegeEducation, { collegeName: "Texas A&M University", degree: "Bachelor of Science in Computer and Electrical Engineering", graduationDate: "Graduated Class of 2023", primaryColor: "#500000", secondaryColor: "#ffffff", link: "https://engineering.tamu.edu/electrical/academics/degrees/undergraduate/bs-ce.html" }),
        react_1.default.createElement(CollegeEducation, { collegeName: "South Plains College", degree: "Pre-Engineering", graduationDate: "Completed Coursework relevant to Engineering, Transferred to Blinn College", primaryColor: "#f68523", secondaryColor: "#01355a", link: "https://www.southplainscollege.edu/" }),
        react_1.default.createElement(CollegeEducation, { collegeName: "Blinn College", degree: "Pre-Engineering", graduationDate: "Completed Coursework relevant to Computer and Electrical Engineering, Transferred to Texas A&M University", primaryColor: "#0a2140", secondaryColor: "#fdb814", link: "https://www.blinn.edu/" })));
};
exports.default = Education;
//# sourceMappingURL=Education.js.map