'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxForm = require('redux-form');

var _Button = require('../../ui/components/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {};


var renderField = function renderField(_ref) {
  var input = _ref.input,
      label = _ref.label,
      type = _ref.type,
      element = _ref.element,
      rows = _ref.rows,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error;
  return _react2.default.createElement(
    'div',
    { className: styles.group },
    _react2.default.createElement(
      'label',
      null,
      label
    ),
    element === 'input' ? _react2.default.createElement('input', _extends({}, input, { type: type, placeholder: label })) : _react2.default.createElement('textarea', _extends({}, input, { rows: rows, placeholder: label })),
    touched && error && _react2.default.createElement(
      'div',
      { className: styles.error },
      error
    )
  );
};

var ArticleForm = function ArticleForm(_ref2) {
  var header = _ref2.header,
      handleSubmit = _ref2.handleSubmit;
  return _react2.default.createElement(
    'form',
    null,
    _react2.default.createElement(
      'h2',
      { className: styles.title },
      header
    ),
    _react2.default.createElement(_reduxForm.Field, {
      component: renderField,
      element: 'input',
      type: 'text',
      name: 'title',
      label: 'Title' }),
    _react2.default.createElement(_reduxForm.Field, {
      component: renderField,
      element: 'textarea',
      rows: 3,
      name: 'excerpt',
      label: 'Excerpt' }),
    _react2.default.createElement(_reduxForm.Field, {
      component: renderField,
      element: 'textarea',
      rows: 5,
      name: 'content',
      label: 'Content' }),
    _react2.default.createElement(
      'div',
      { className: styles.button },
      _react2.default.createElement(
        _Button2.default,
        { type: 'submit', onClick: handleSubmit },
        header
      )
    )
  );
};

ArticleForm.propTypes = {
  header: _propTypes2.default.string.isRequired,
  onSubmit: _propTypes2.default.func.isRequired
};

function validate(values) {
  var errors = {};

  if (!values.title) errors.title = 'Required.';
  if (!values.excerpt) errors.excerpt = 'Required.';
  if (!values.content) errors.content = 'Required.';

  return errors;
}

exports.default = (0, _reduxForm.reduxForm)({
  form: 'article',
  validate: validate
})(ArticleForm);