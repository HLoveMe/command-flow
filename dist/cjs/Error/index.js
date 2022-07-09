"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecError = void 0;
class ExecError extends Error {
    date = new Date();
    work;
    constructor(work, error) {
        super();
        this.message = error.message;
        this.name = error.name;
        this.stack = error.stack;
        this.work = work;
    }
}
exports.ExecError = ExecError;
