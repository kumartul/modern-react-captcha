import React from 'react';

import NegativeLengthError from '../errors/negativeLengthError';
import MaxLengthExceededError from '../errors/maxLengthExceededError';

// Function : Generates a random captcha
export const generateRandomCaptcha = (charset, length) => {
    const characterSets = {
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        number: '0123456789',
        special: `~\`!@#$%^&*()-_=+\\|{}[]:;"'<>,./?`
    }

    charset = charset.toLowerCase();
    length = length || 6;

    if(!Number.isInteger(length)) {
        throw new TypeError('Length must be a positive integer');
    }

    if(length < 0) {
        throw new NegativeLengthError('Captcha length must be a positive number.');
    }
    else if(length < 4) {
        console.warn('Captcha length must be at least 4 characters long.');
    }

    if(length > 255) {
        throw new MaxLengthExceededError('Captcha length must be less than 255 characters long.');
    }
    else if(length > 8) {
        console.warn('Captcha length must be less than 8 characters long.');
    }

    let captchaCharset = '';
    let captcha = '';

    if(charset.includes('u')) {
        captchaCharset += characterSets.uppercase;
    }
    if(charset.includes('l')) {
        captchaCharset += characterSets.lowercase;
    }
    if(charset.includes('n')) {
        captchaCharset += characterSets.number;
    }
    if(charset.includes('s')) {
        captchaCharset += characterSets.special;
    }

    if(charset === '') {
        captchaCharset = characterSets.uppercase + characterSets.lowercase + characterSets.number + characterSets.special;
    }

    for(let i = 0; i < length; i++) {
        captcha += captchaCharset.charAt(Math.floor(Math.random() * captchaCharset.length));
    }

    return captcha;
}

// Function: Generates a random hex color
const generateRandomHexColor = () => {
    const hex = '0123456789ABCDEF';
    let color = '#';

    for(let i = 0; i < 6; i++) {
        color += hex.charAt(Math.floor(Math.random() * hex.length));
    }

    return color;
}

const RandomText = ({ text, color, bgColor }) => {
    const fontSizes = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    const fontWeights = ['light', 'normal', 'bold'];
    const fontFamilies = ['Cambria', 'Calibri', 'Mangal', 'Arial Narrow', 'Sanskrit Text', 'Adobe Caslon Pro', 'Adobe Caslon Pro Bold', 'Adobe Garamand Pro', 'Adobe Garamand Pro Bold', 'Agency FB', 'Algerian', 'Aparajita', 'Arial', 'Arno Pro', 'Bahnschrift', 'Bauhas 93', 'Bell MT', 'Berlin Sans FB', 'Birch STD', 'Bradley Hand ITC', 'Broadway', 'Candara', 'Cascadia Code', 'Castellar', 'Consolas', 'Cooper Std Black', 'Curlz MT', 'Courier New', 'Gabriola', 'Ink Free', 'MV Boli', 'Orator Std', 'Papyrus', 'Tahoma', 'Cursive', 'sans-serif'];

    const captcha = text;

    return (
        <div className="r-captcha__captchaText" style={{ width: 'fit-content', padding: '3px 10px', backgroundColor: `${(bgColor === 'random' || !bgColor) ? generateRandomHexColor() : bgColor}` }}>
            {
                captcha.split('').map(unit => (
                    <span key={Math.random() - Math.random()} className='r-captcha__character' style={{ color: `${color === 'random' ? generateRandomHexColor() : color}`, fontSize: `${fontSizes[Math.floor(Math.random() * fontSizes.length)]}px`, fontWeight: `${fontWeights[Math.floor(Math.random() * fontWeights.length)]}`, fontStyle: `${Math.random() > 0.5 ? 'italic' : 'normal'}`, fontFamily: `${fontFamilies[Math.floor(Math.random() * fontFamilies.length)]}` }}>{unit}</span>
                ))
            }
        </div>
    );
}

RandomText.defaultProps = {
	text: '',
	color: 'random',
	bgColor: 'random'
}

export default RandomText;
