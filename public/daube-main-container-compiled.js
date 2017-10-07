"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(e, n) {
  if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}function _possibleConstructorReturn(e, n) {
  if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !n || "object" != (typeof n === "undefined" ? "undefined" : _typeof(n)) && "function" != typeof n ? e : n;
}function _inherits(e, n) {
  if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + (typeof n === "undefined" ? "undefined" : _typeof(n)));e.prototype = Object.create(n && n.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n);
}var _createClass = function () {
  function e(e, n) {
    for (var t = 0; t < n.length; t++) {
      var o = n[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
    }
  }return function (n, t, o) {
    return t && e(n.prototype, t), o && e(n, o), n;
  };
}(),
    template = document.createElement("template");template.innerHTML = "\n  <style>\n\n    :host {\n      display: block;\n      font-size: 1rem;\n      font-family: Helvetica, Verdana, sans-serif;\n      color: rgba(0,0,0,0.87);\n      margin: 0;\n      padding: 0;\n      z-index: 0;\n    }\n\n    :host([hidden]) {\n      display: none;\n    }\n\n    section {\n      margin: 0;\n      padding: 0;\n      padding-top: 3.5rem;\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-color: #f2f2f2;\n      z-index: 0;\n    }\n\n  </style>\n\n  <section>\n    <slot></slot>\n  </section>\n", window.ShadyCSS && ShadyCSS.prepareTemplate(template, "daube-main-container");var DaubeMainContainer = function (e) {
  function n() {
    _classCallCheck(this, n);var e = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));return e.attachShadow({ mode: "open" }), e.shadowRoot.appendChild(template.content.cloneNode(!0)), e;
  }return _inherits(n, HTMLElement), _createClass(n, null, [{ key: "observedAttributes", get: function get() {} }]), _createClass(n, [{ key: "connectedCallback", value: function value() {
      window.ShadyCSS && ShadyCSS.styleElement(this);
    } }]), n;
}();customElements.define("daube-main-container", DaubeMainContainer);