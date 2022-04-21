import React, { useState } from 'react';

import ReactCaptcha from 'modern-react-captcha';

import '../style/Form.css';

const Form = () => {
	let captchaMatched = false;

	const handleSuccess = () => {
		captchaMatched = true;
	}

	const handleFailure = () => {
		captchaMatched = false;
	}

	const handleSubmit = event => {
		event.preventDefault();

		if(captchaMatched) {
			alert('Form submitted successfully...');
		}
		else {
			alert('Submission failed! Captcha did not match...');
		}
	}

	return (
		<form className="container my-5" onSubmit={handleSubmit}>
			<div className="mb-3">
				<label htmlFor="email" className="form-label">Email address</label>
				<input type="email" className="form-control" id="email" aria-describedby="emailHelp" aria-required="true" required />
				<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
			</div>

			<div className="mb-3">
				<label htmlFor="password" className="form-label">Password</label>
				<input type="password" className="form-control" id="password" aria-required="true" required />
			</div>

			<div className="mb-3">
				<ReactCaptcha charset='ul' length={5} color='#f5f5f5' bgColor='#4a4a4a' reload handleSuccess={handleSuccess} handleFailure={handleFailure} />
			</div>

			<button type="submit" id="submit-btn" className="btn btn-primary">Submit</button>
		</form>
	);
}

export default Form;
