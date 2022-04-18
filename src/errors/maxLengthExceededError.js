class MaxLengthExceededError extends Error {
	constructor(message) {
		super(message);

		this.name = 'MaxLengthExceededError';
		this.message = message;
	}
}

export default MaxLengthExceededError;
