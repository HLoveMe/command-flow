export class ExecError extends Error {
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
//# sourceMappingURL=index.js.map