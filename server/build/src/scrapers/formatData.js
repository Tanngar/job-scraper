"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatData = void 0;
function formatData(data) {
    return data.map((posting) => Object.fromEntries(Object.entries(posting).map(([key, value]) => [
        key,
        trimAndRemoveLineBreaks(value),
    ])));
}
exports.formatData = formatData;
function trimAndRemoveLineBreaks(text) {
    return text.replace(/(\r\n|\n|\r)/gm, '').trim();
}
//# sourceMappingURL=formatData.js.map