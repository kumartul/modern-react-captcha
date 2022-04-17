class NoReloadOptionError extends Error {
    constructor(message) {
        super(message);

        this.name = 'NoReloadOptionError';
        this.message = message;
    }
}

export default NoReloadOptionError;