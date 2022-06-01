var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PlatformSelect } from "./Equipment";
/**
 * 获取引用
 * @param quote_name
 * @param node
 * @param rn
 * @param electron
 * @returns
 * libraryQuote('fetch','node-fetch')
 */
export const libraryQuote = (quote_name, node, rn, electron) => () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield PlatformSelect({
        web: () => (global || window)[quote_name] || require(quote_name),
        node: () => {
            const a = fetch;
            debugger;
        },
        electron: () => require(electron || quote_name),
    })();
    return result;
});
//# sourceMappingURL=GetEquiptarget.js.map