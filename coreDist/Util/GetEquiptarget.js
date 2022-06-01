"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const libraryQuote = (quote_name, node, rn, electron) => () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, Equipment_1.PlatformSelect)({
        web: () => (global || window)[quote_name] || require(quote_name),
        node: () => {
            const a = fetch;
            debugger;
        },
        electron: () => require(electron || quote_name),
    })();
    return result;
});
exports.libraryQuote = libraryQuote;
//# sourceMappingURL=GetEquiptarget.js.map