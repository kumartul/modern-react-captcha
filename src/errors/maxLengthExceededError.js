class MaxLengthExceddedError extends Error {
	constructor(message) {
		super(message);

		this.name = 'MaxLengthExceddedError';
		this.message = message;
	}
}

export default MaxLengthExceddedError;