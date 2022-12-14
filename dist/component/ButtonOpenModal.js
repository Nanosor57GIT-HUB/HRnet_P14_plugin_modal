"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _hrnet_component_plugin_modal = require("hrnet_component_plugin_modal");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const ButtonOpenModal = () => {
  const [modalState, setModalState] = (0, _react.useState)(false);
  function openModal() {
    setModalState(!modalState);
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "header-container"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "toggleModal nav-link",
    onClick: openModal
  }, "Click-Me !"), /*#__PURE__*/_react.default.createElement(_hrnet_component_plugin_modal.Modal, {
    toggle: modalState,
    action: openModal
  }));
};
var _default = ButtonOpenModal;
exports.default = _default;