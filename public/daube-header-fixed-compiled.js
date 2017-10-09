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
      var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }return function (t, n, r) {
    return n && e(t.prototype, n), r && e(t, r), t;
  };
}(),
    template = document.createElement("template");template.innerHTML = '\n  <style>\n\n    :host {\n      display: block;\n      font-size: 1rem;\n      font-family: Helvetica, Verdana, sans-serif;\n      color: rgba(0,0,0,0.87);\n      margin: 0;\n      padding: 0;\n      z-index: 0;\n    }\n\n    :host([hidden]) {\n      display: none;\n    }\n\n    header {\n      display: inline-block;\n      width: 100%;\n      position: fixed;\n      top: 0;\n      background-color: #237d32;\n      color: rgba(255,255,255,0.92);\n      height: 3.5rem;\n      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n      z-index: 3;\n    }\n\n    .daubemaintitle {\n      padding: 0.92rem 0rem 0.92rem 1.5rem;\n      font-weight: 200;\n      font-size: 1.66rem;\n      height: 3.5rem;\n      z-index: 4;\n    }\n\n  </style>\n\n  <header>\n    <div class="daubemaintitle">Header</div>\n    <slot></slot>\n  </header>\n  ', window.ShadyCSS && ShadyCSS.prepareTemplate(template, "daube-header-fixed");var DaubeHeaderFixed = function (e) {
  function t() {
    _classCallCheck(this, t);var e = _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));return e.attachShadow({ mode: "open" }), e.shadowRoot.appendChild(template.content.cloneNode(!0)), e;
  }return _inherits(t, HTMLElement), _createClass(t, [{ key: "attributeChangedCallback", value: function value(e, t, n) {
      switch (e) {case "headercolor":
          this.processHeaderColor();break;case "headertitle":
          this.processHeaderTitle();}
    } }, { key: "headertitle", get: function get() {
      return this._headertitle;
    }, set: function set(e) {
      this._headertitle !== e && (this._headertitle = e, this.setAttribute("headertitle", e));
    } }, { key: "headercolor", get: function get() {
      return this._headercolor;
    }, set: function set(e) {
      this._headercolor !== e && (this._headercolor = e, this.setAttribute("headercolor", e));
    } }], [{ key: "observedAttributes", get: function get() {
      return ["headertitle", "headercolor"];
    } }]), _createClass(t, [{ key: "connectedCallback", value: function value() {
      window.ShadyCSS && ShadyCSS.styleElement(this);
    } }, { key: "processHeaderTitle", value: function value() {
      var e = this.getMainTitle();this.hasAttribute("headertitle") ? e.innerHTML = this.getAttribute("headertitle") : e.innerHTML = "";
    } }, { key: "processHeaderColor", value: function value() {
      var e = this.getHeader();this.hasAttribute("headercolor") ? e.style.backgroundColor = this.getAttribute("headercolor") : e.style.removeProperty("background-color");
    } }, { key: "getHeader", value: function value() {
      return this.shadowRoot.querySelector("header");
    } }, { key: "getMainTitle", value: function value() {
      return this.shadowRoot.querySelector(".daubemaintitle");
    } }]), t;
}();customElements.define("daube-header-fixed", DaubeHeaderFixed);