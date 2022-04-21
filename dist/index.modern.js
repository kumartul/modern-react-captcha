import React, { useState, useRef } from 'react';

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

var NegativeLengthError = /*#__PURE__*/function (_RangeError) {
  _inheritsLoose(NegativeLengthError, _RangeError);

  function NegativeLengthError(message) {
    var _this;

    _this = _RangeError.call(this, message) || this;
    _this.name = 'NegativeLengthError';
    _this.message = message;
    return _this;
  }

  return NegativeLengthError;
}( /*#__PURE__*/_wrapNativeSuper(RangeError));

var MaxLengthExceededError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(MaxLengthExceededError, _Error);

  function MaxLengthExceededError(message) {
    var _this;

    _this = _Error.call(this, message) || this;
    _this.name = 'MaxLengthExceededError';
    _this.message = message;
    return _this;
  }

  return MaxLengthExceededError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

var generateRandomCaptcha = function generateRandomCaptcha(charset, length) {
  var characterSets = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    number: '0123456789',
    special: "~`!@#$%^&*()-_=+\\|{}[]:;\"'<>,./?"
  };
  charset = charset.toLowerCase();
  length = length || 6;

  if (!Number.isInteger(length)) {
    throw new TypeError('Length must be a positive integer');
  }

  if (length < 0) {
    throw new NegativeLengthError('Captcha length must be a positive number.');
  } else if (length < 4) {
    console.warn('Captcha length must be at least 4 characters long.');
  }

  if (length > 255) {
    throw new MaxLengthExceededError('Captcha length must be less than 255 characters long.');
  } else if (length > 8) {
    console.warn('Captcha length must be less than 8 characters long.');
  }

  var captchaCharset = '';
  var captcha = '';

  if (charset.includes('u')) {
    captchaCharset += characterSets.uppercase;
  }

  if (charset.includes('l')) {
    captchaCharset += characterSets.lowercase;
  }

  if (charset.includes('n')) {
    captchaCharset += characterSets.number;
  }

  if (charset.includes('s')) {
    captchaCharset += characterSets.special;
  }

  if (charset === '') {
    captchaCharset = characterSets.uppercase + characterSets.lowercase + characterSets.number + characterSets.special;
  }

  for (var i = 0; i < length; i++) {
    captcha += captchaCharset.charAt(Math.floor(Math.random() * captchaCharset.length));
  }

  return captcha;
};

var generateRandomHexColor = function generateRandomHexColor() {
  var hex = '0123456789ABCDEF';
  var color = '#';

  for (var i = 0; i < 6; i++) {
    color += hex.charAt(Math.floor(Math.random() * hex.length));
  }

  return color;
};

var RandomText = function RandomText(_ref) {
  var text = _ref.text,
      color = _ref.color,
      bgColor = _ref.bgColor;
  var fontSizes = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  var fontWeights = ['light', 'normal', 'bold'];
  var fontFamilies = ['Cambria', 'Calibri', 'Mangal', 'Arial Narrow', 'Sanskrit Text', 'Adobe Caslon Pro', 'Adobe Caslon Pro Bold', 'Adobe Garamand Pro', 'Adobe Garamand Pro Bold', 'Agency FB', 'Algerian', 'Aparajita', 'Arial', 'Arno Pro', 'Bahnschrift', 'Bauhas 93', 'Bell MT', 'Berlin Sans FB', 'Birch STD', 'Bradley Hand ITC', 'Broadway', 'Candara', 'Cascadia Code', 'Castellar', 'Consolas', 'Cooper Std Black', 'Curlz MT', 'Courier New', 'Gabriola', 'Ink Free', 'MV Boli', 'Orator Std', 'Papyrus', 'Tahoma', 'Cursive', 'sans-serif'];
  var captcha = text;
  return /*#__PURE__*/React.createElement("div", {
    className: "modern-react-captcha__captchaText",
    style: {
      width: 'fit-content',
      padding: '3px 10px',
      backgroundColor: "" + (bgColor === 'random' || !bgColor ? generateRandomHexColor() : bgColor)
    }
  }, captcha.split('').map(function (unit) {
    return /*#__PURE__*/React.createElement("span", {
      key: Math.random() - Math.random(),
      className: "modern-react-captcha__character",
      style: {
        color: "" + (color === 'random' ? generateRandomHexColor() : color),
        fontSize: fontSizes[Math.floor(Math.random() * fontSizes.length)] + "px",
        fontWeight: "" + fontWeights[Math.floor(Math.random() * fontWeights.length)],
        fontStyle: "" + (Math.random() > 0.5 ? 'italic' : 'normal'),
        fontFamily: "" + fontFamilies[Math.floor(Math.random() * fontFamilies.length)]
      }
    }, unit);
  }));
};

RandomText.defaultProps = {
  text: '',
  color: 'random',
  bgColor: 'random'
};

var NoHandleSuccessCallbackError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(NoHandleSuccessCallbackError, _Error);

  function NoHandleSuccessCallbackError(message) {
    var _this;

    _this = _Error.call(this, message) || this;
    _this.name = 'NoHandleSuccessCallbackError';
    _this.message = message;
    return _this;
  }

  return NoHandleSuccessCallbackError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

var NoHandleFailureCallbackError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(NoHandleFailureCallbackError, _Error);

  function NoHandleFailureCallbackError(message) {
    var _this;

    _this = _Error.call(this, message) || this;
    _this.name = 'NoHandleFailureCallbackError';
    _this.message = message;
    return _this;
  }

  return NoHandleFailureCallbackError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

var ReactCaptcha = function ReactCaptcha(_ref) {
  var charset = _ref.charset,
      length = _ref.length,
      color = _ref.color,
      bgColor = _ref.bgColor,
      reload = _ref.reload,
      reloadText = _ref.reloadText,
      reloadIcon = _ref.reloadIcon,
      handleSuccess = _ref.handleSuccess,
      handleFailure = _ref.handleFailure;

  if (!handleSuccess) {
    throw new NoHandleSuccessCallbackError('You must provide a callback function for successs');
  }

  if (!handleFailure) {
    throw new NoHandleFailureCallbackError('You must provide a callback function for failure');
  }

  if (typeof handleSuccess !== 'function') {
    throw new TypeError('handleSuccess must be a function');
  }

  if (typeof handleFailure !== 'function') {
    throw new TypeError('handleFailure must be a function');
  }

  var _useState = useState(generateRandomCaptcha(charset, length)),
      captcha = _useState[0],
      setCaptcha = _useState[1];

  var inputRef = useRef(null);

  var reloadCaptcha = function reloadCaptcha() {
    setCaptcha(generateRandomCaptcha(charset, length));
  };

  var evaluateCaptcha = function evaluateCaptcha() {
    if (captcha === inputRef.current.value) {
      handleSuccess();
    } else {
      handleFailure();
    }

    inputRef.current.value = '';
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "modern-react-captcha"
  }, /*#__PURE__*/React.createElement(RandomText, {
    text: captcha,
    color: color,
    bgColor: bgColor
  }), reload && /*#__PURE__*/React.createElement("button", {
    className: "modern-react-captcha__reloadBtn",
    onClick: reloadCaptcha
  }, reloadText, reloadIcon && /*#__PURE__*/React.createElement("img", {
    src: reloadIcon,
    alt: "Reload",
    style: {
      width: '20px',
      height: '20px'
    }
  })), /*#__PURE__*/React.createElement("input", {
    onChange: evaluateCaptcha,
    ref: inputRef,
    type: "text",
    placeholder: "Enter captcha",
    className: "modern-react-captcha__inputField"
  }));
};

ReactCaptcha.defaultProps = {
  charset: 'ulns',
  length: 6,
  color: '#000',
  bgColor: '#fff',
  reload: false,
  reloadText: 'Reload Captcha'
};

export default ReactCaptcha;
//# sourceMappingURL=index.modern.js.map
