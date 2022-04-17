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

        inputRef.current.value = '';
    }

    return (
        <div className="r-captcha">
            <RandomText text={captcha} color={color} bgColor={bgColor} />

            {reload && <button className='r-captcha__reloadBtn' onClick={reloadCaptcha}>{reloadText ? reloadText : 'Reload Captcha'}{reloadIcon && <img src={reloadIcon} alt='Reload' style={{ width: '20px', height: '20px' }} />}</button>}

            <input ref={inputRef} type="text" placeholder="Enter captcha" />
            <button type="button" onClick={evaluateCaptcha}>Submit</button>
        </div>
    );
}

export default ReactCaptcha;