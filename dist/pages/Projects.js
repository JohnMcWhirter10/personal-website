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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MyProject_1 = __importDefault(require("@components/Projects/MyProject"));
var projects_1 = require("@constants/projects");
var material_1 = require("@mui/material");
var react_1 = __importDefault(require("react"));
var ProjectsContainer = (0, material_1.styled)(material_1.Container)({
    height: "auto",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 20,
    overflow: "auto",
});
var Projects = function () {
    return (react_1.default.createElement(ProjectsContainer, null, projects_1.projects.map(function (project, index) { return (react_1.default.createElement(MyProject_1.default, __assign({ key: project.title }, project))); })));
};
exports.default = Projects;
//# sourceMappingURL=Projects.js.map