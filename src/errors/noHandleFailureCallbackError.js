class NoHandleFailureCallbackError extends Error {
	constructor(message) {
		super(message);

		this.name = 'NoHandleFailureCallbackError';
		this.message = message;
	}
}

export default NoHandleFailureCallbackError;