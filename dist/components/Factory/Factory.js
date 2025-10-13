"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Paragraph_1 = __importDefault(require("@components/Factory/Paragraph"));
var Bullets_1 = __importDefault(require("@components/Factory/Bullets"));
var Factory = function (_a) {
    var componentData = _a.componentData;
    return (react_1.default.createElement(react_1.default.Fragment, null, Object.entries(componentData).map(function (_a) {
        var key = _a[0], value = _a[1];
        var type = value.type, variant = value.variant, data = value.data;
        switch (type) {
            case "paragraph":
                return (react_1.default.createElement(Paragraph_1.default, { key: key, title: key, variant: variant, data: data }));
            case "list":
                return (react_1.default.createElement(Bullets_1.default, { key: key, title: key, variant: variant, data: data }));
            default:
                return null;
        }
    })));
};
exports.default = Factory;
//# sourceMappingURL=Factory.js.map