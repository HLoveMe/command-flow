"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Equipment_1 = require("../../../Util/Equipment");
var node_fetch_1 = require("node-fetch");
var Fetch;
if (Equipment_1.isWeb) {
    Fetch = window.fetch;
}
else if (Equipment_1.isNode) {
    debugger;
    Fetch = node_fetch_1.default;
}
window.fetch = Fetch;
//# sourceMappingURL=index.js.map