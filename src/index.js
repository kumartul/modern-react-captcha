import React, { useState, useRef } from 'react';

import RandomText, { generateRandomCaptcha } from './components/RandomText';

import NoHandleSuccessCallbackError from './errors/noHandleSuccessCallbackError';
import NoHandleFailureCallbackError from './errors/noHandleFailureCallbackError';

const ReactCaptcha = ({ charset, length, color, bgColor, reload, reloadText, reloadIcon, handleSuccess, handleFailure }) => {
    if(!handleSuccess) {
        throw new NoHandleSuccessCallbackError('You must provide a callback function for successs');
    }
    if(!handleFailure) {
        throw new NoHandleFailureCallbackError('You must provide a callback function for failure');
    }

	if(typeof handleSuccess !== 'function') {
		throw new TypeError('handleSuccess must be a function');
	}
	if(typeof handleFailure !== 'function') {
		throw new TypeError('handleFailure must be a function');
	}

    const [captcha, setCaptcha] = useState(generateRandomCaptcha(charset, length));
    const inputRef = useRef(null);

    const reloadCaptcha = () => {
        setCaptcha(generateRandomCaptcha(charset, length));
    }

    const evaluateCaptcha = () => {
        if (captcha === inputRef.current.value) {
            handleSuccess();
        }
        else {
            handleFailure();
        }
    }

    return (
        <div className="modern-react-captcha">
            <RandomText text={captcha} color={color} bgColor={bgColor} />

            {reload && <button type="button" className='modern-react-captcha__reloadBtn' onClick={reloadCaptcha}>{reloadText}{reloadIcon && <img src={reloadIcon} alt='Reload' style={{ width: '20px', height: '20px' }} />}</button>}

            <input onChange={evaluateCaptcha} ref={inputRef} type="text" placeholder="Enter captcha" className='modern-react-captcha__inputField' />
        </div>
    );
}

ReactCaptcha.defaultProps = {
	charset: 'ulns',
	length: 6,
	color: '#000',
	bgColor: '#fff',
	reload: false,
	reloadText: 'Reload Captcha'
}

export default ReactCaptcha;
