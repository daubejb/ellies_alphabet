"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}function _possibleConstructorReturn(e, t) {
  if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
}function _inherits(e, t) {
  if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}var _createClass = function () {
  function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
    }
  }return function (t, n, o) {
    return n && e(t.prototype, n), o && e(t, o), t;
  };
}(),
    daubeModalTemplate = document.createElement("template");daubeModalTemplate.innerHTML = '\n  <style>\n\n    :host {\n      display: block;\n      font-size: 1rem;\n      font-family: Helvetica, Verdana, sans-serif;\n      color: rgba(0,0,0,0.87);\n      margin: 0;\n      padding: 0;\n      z-index: 1;\n    }\n\n    :host([hidden]) {\n      display: none;\n    }\n\n    #daubemodal {\n      position: fixed;\n      border-radius: 3px;\n      box-shadow:  0px 11px 15px -7px rgba(0, 0, 0, 0.2),\n                    0px 24px 38px 3px rgba(0, 0, 0, 0.14),\n                    0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n      padding: 2rem;\n      background-color: white;\n      margin: auto;\n      width: 16rem;\n      height: 10rem;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: 1;\n    }\n    #entirescreen {\n      width: 100%;\n      height: 100%;\n      position: fixed;\n      padding: 0;\n      margin: 0;\n      top: 0;\n      left: 0;\n      background-color: rgba(0,0,0,0.2);\n      z-index: 1;\n    }\n    #details {\n      display: block;\n      z-index: 1;\n    }\n  </style>\n  <div id="entirescreen" style="display: none;"></div>\n  <div id="daubemodal" style="display: none;">\n    <slot name="message"></slot>\n    <slot name="details" id="details"></slot>\n    <slot name="positive"></slot>\n  </div>\n', window.ShadyCSS && ShadyCSS.prepareTemplate(daubeModalTemplate, "daube-modal");var DaubeModal = function (e) {
  function t() {
    _classCallCheck(this, t);var e = _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));return e.attachShadow({ mode: "open" }), e.shadowRoot.appendChild(daubeModalTemplate.content.cloneNode(!0)), e;
  }return _inherits(t, HTMLElement), _createClass(t, [{ key: "attributeChangedCallback", value: function value(e, t, n) {
      "display" === e && (this.toggleDisplay(), console.log("display toggled"));
    } }, { key: "display", get: function get() {
      return this.hasAttribute("display");
    }, set: function set(e) {
      e ? this.setAttribute("display", "") : this.removeAttribute("display");
    } }], [{ key: "observedAttributes", get: function get() {
      return ["display"];
    } }]), _createClass(t, [{ key: "connectedCallback", value: function value() {
      var e = this;this.shadowRoot.querySelector("#entirescreen").addEventListener("click", function (t) {
        console.log("entire screen clicked"), e.removeAttribute("display");
      }), this.querySelector(".primary").addEventListener("click", function (t) {
        console.log("primary button clicked"), e.removeAttribute("display");
      }), window.ShadyCSS && ShadyCSS.styleElement(this);
    } }, { key: "disconnectedCallback", value: function value() {
      var e = this;this.shadowRoot.querySelector("#entirescreen").removeEventListener("click", function (t) {
        console.log("entire screen clicked"), e.removeAttribute("display");
      }), this.querySelector(".primary").removeEventListener("click", function (t) {
        console.log("primary button clicked"), e.removeAttribute("display");
      });
    } }, { key: "toggleDisplay", value: function value() {
      var e = this.shadowRoot.querySelector("#daubemodal"),
          t = this.shadowRoot.querySelector("#entirescreen");this.display ? (e.style.display = "block", t.style.display = "block") : (e.style.display = "none", t.style.display = "none");
    } }]), t;
}();customElements.define("daube-modal", DaubeModal);