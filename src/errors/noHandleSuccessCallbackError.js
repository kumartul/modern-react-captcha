class NoHandleSuccessCallbackError extends Error {
    constructor(message) {
        super(message);

        this.name = 'NoHandleSuccessCallbackError';
        this.message = message;
    }
}

export default NoHandleSuccessCallbackError;