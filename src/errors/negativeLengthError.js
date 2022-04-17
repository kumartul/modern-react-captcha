class NegativeLengthError extends RangeError {
	constructor(message) {
		super(message);

		this.name = 'NegativeLengthError';
		this.message = message;
	}
}

export default NegativeLengthError;