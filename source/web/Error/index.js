export class ExecError extends Error {
    constructor(work, error) {
        super();
        this.date = new Date();
        this.message = error.message;
        this.name = error.name;
        this.stack = error.stack;
        this.work = work;
    }
}
//# sourceMappingURL=index.js.map