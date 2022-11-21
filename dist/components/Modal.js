"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const ContainerModal = _styledComponents.default.section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: ", ";\n  position: fixed;\n  width: 100%;\n  inset: 0;\n"])), props => props.background || 'rgba(0,0,0, .6)');
const ModalStyles = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background: ", ";\n  width: ", ";\n  height: ", ";\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  padding: 11px;\n"])), props => props.backgroundModal || 'white', props => props.width || '500px', props => props.height || '300px');
const Modal = _ref => {
  let {
    isOpen,
    onRequestClose,
    children,
    background,
    width,
    height,
    backgroundModal
  } = _ref;
  if (isOpen) {
    document.querySelector('body').style.overflow = 'hidden';
  } else {
    document.querySelector('body').style.overflow = 'auto';
  }
  if (isOpen) {
    return /*#__PURE__*/_react.default.createElement(ContainerModal, {
      "data-testid": "modal",
      background: background,
      onClick: onRequestClose
    }, /*#__PURE__*/_react.default.createElement(ModalStyles, {
      width: width,
      height: height,
      backgroundModal: backgroundModal
    }, children));
  }
};
var _default = Modal;
exports.default = _default;