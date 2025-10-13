"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var MyCertification_1 = __importDefault(require("@components/MyCertification"));
var material_1 = require("@mui/material");
var certifications_1 = require("@constants/certifications");
var CertificationsContainer = (0, material_1.styled)(material_1.Container)({
    minWidth: "100%",
    overflow: "auto",
    padding: 0,
});
var Certifications = function () {
    var inProgressCertifications = certifications_1.certifications.filter(function (certification) { return !certification.completed; });
    var completedCertifications = certifications_1.certifications.filter(function (certification) { return certification.completed; });
    return (react_1.default.createElement(CertificationsContainer, { fixed: true },
        react_1.default.createElement(material_1.Grid, { container: true, spacing: 4 },
            react_1.default.createElement(material_1.Grid, { item: true, xs: 12, md: 6 },
                react_1.default.createElement(material_1.Typography, { variant: "h5", gutterBottom: true }, "In Progress"),
                react_1.default.createElement(material_1.Divider, null),
                inProgressCertifications.map(function (certification, index) { return (react_1.default.createElement(MyCertification_1.default, { key: index, expectedDate: certification.expectedDate, title: certification.title, description: certification.description, tasks: certification.tasks, completed: false, credential: certification.credential, credentialWebsite: certification.credentialWebsite })); })),
            react_1.default.createElement(material_1.Grid, { item: true, xs: 12, md: 6 },
                react_1.default.createElement(material_1.Typography, { variant: "h5", gutterBottom: true }, "Completed"),
                react_1.default.createElement(material_1.Divider, null),
                completedCertifications.map(function (certification, index) { return (react_1.default.createElement(MyCertification_1.default, { key: index, title: certification.title, description: certification.description, tasks: certification.tasks, completed: true, credential: certification.credential, credentialWebsite: certification.credentialWebsite })); })))));
};
exports.default = Certifications;
//# sourceMappingURL=Certifications.js.map