"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.libraryQuote = void 0;
const Equipment_1 = require("./Equipment");
/**
 * 获取引用
 * @param quote_name
 * @param node
 * @param rn
 * @param electron
 * @returns
 * libraryQuote('fetch','node-fetch')
 */
const libraryQuote = (quote_name, node, rn, electron) => async () => {
    const result = await (0, Equipment_1.PlatformSelect)({
        web: () => (global || window)[quote_name] || require(quote_name),
        node: () => {
            const a = fetch;
            debugger;
        },
        electron: () => require(electron || quote_name),
    })();
    return result;
};
exports.libraryQuote = libraryQuote;
//# sourceMappingURL=GetEquiptarget.js.map