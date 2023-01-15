export function formatData(data) {
    return data.map((posting) => Object.fromEntries(Object.entries(posting).map(([key, value]) => [
        key,
        trimAndRemoveLineBreaks(value),
    ])));
}
function trimAndRemoveLineBreaks(text) {
    return text.replace(/(\r\n|\n|\r)/gm, '').trim();
}
//# sourceMappingURL=formatData.js.map