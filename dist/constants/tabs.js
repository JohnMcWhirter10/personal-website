"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tabData = void 0;
var Home_1 = __importDefault(require("@pages/Home"));
var Certifications_1 = __importDefault(require("@pages/Certifications"));
var Experience_1 = __importDefault(require("@pages/Experience"));
var Honors_1 = __importDefault(require("@pages/Honors"));
var Projects_1 = __importDefault(require("@pages/Projects"));
var Education_1 = __importDefault(require("@pages/Education"));
exports.tabData = [
    { label: "Home", component: Home_1.default },
    { label: "Experience", component: Experience_1.default },
    { label: "Education", component: Education_1.default },
    { label: "Certifications", component: Certifications_1.default },
    { label: "Honors", component: Honors_1.default },
    { label: "Projects", component: Projects_1.default },
];
//# sourceMappingURL=tabs.js.map