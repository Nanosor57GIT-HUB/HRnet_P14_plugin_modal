"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./main.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Modal = props => {
  //props transform(css)
  const toggle = props.toggle;
  const action = props.action;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container-modal ".concat(toggle ? "active" : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ContainerCloseModal"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "../../images/closeModal.svg",
    className: "closeModal",
    alt: "close-modal",
    onClick: action
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "close"
  }, "Close")), /*#__PURE__*/_react.default.createElement("div", {
    className: "containerTitle"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "hrnetTitle"
  }, "HRnet"), /*#__PURE__*/_react.default.createElement("h1", {
    className: "TitleSociete"
  }, "WealthHealth"))));
};
var _default = Modal;
exports.default = _default;