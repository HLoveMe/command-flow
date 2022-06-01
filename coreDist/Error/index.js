"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecError = void 0;
class ExecError extends Error {
    constructor(work, error) {
        super();
        this.date = new Date();
        this.message = error.message;
        this.name = error.name;
        this.stack = error.stack;
        this.work = work;
    }
}
exports.ExecError = ExecError;
//# sourceMappingURL=index.js.map