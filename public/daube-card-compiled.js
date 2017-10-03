"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=(void 0===t?"undefined":_typeof(t))&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":_typeof(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),template=document.createElement("template");template.innerHTML='\n  <style>\n\n    :host {\n      display: block;\n      font-size: 1rem;\n      font-family: Helvetica, Verdana, sans-serif;\n      color: rgba(0,0,0,0.87);\n      margin: 0;\n      padding: 0;\n      z-index: 5;\n    }\n\n    :host([hidden]) {\n      display: none;\n    }\n\n    .daubecard {\n      max-width: 45rem;\n      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n      transition: 0.3s;\n      border-radius: 3px;\n      padding: 1.25rem 2rem 1.25rem 2rem;\n      margin: 0 auto;\n      margin-top: 2rem;\n      background-color: white;\n    }\n\n  </style>\n\n  <div class="daubecard">\n    <slot></slot>\n  </div>\n',window.ShadyCSS&&ShadyCSS.prepareTemplate(template,"daube-card");var DaubeCard=function(e){function t(){_classCallCheck(this,t);var e=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.attachShadow({mode:"open"}),e.shadowRoot.appendChild(template.content.cloneNode(!0)),e}return _inherits(t,HTMLElement),_createClass(t,[{key:"attributeChangedCallback",value:function(e,t,n){switch(e){case"cardcolor":this.processCardColor()}}},{key:"cardcolor",get:function(){return this._cardcolor},set:function(e){this._cardcolor!==e&&(this._cardcolor=e,this.setAttribute("cardcolor",e))}}],[{key:"observedAttributes",get:function(){return["cardcolor"]}}]),_createClass(t,[{key:"connectedCallback",value:function(){window.ShadyCSS&&ShadyCSS.styleElement(this)}},{key:"processCardColor",value:function(){var e=this.getCard();this.hasAttribute("cardcolor")?e.style.backgroundColor=this.getAttribute("cardcolor"):e.style.removeProperty("background-color")}},{key:"getCard",value:function(){return this.shadowRoot.querySelector(".daubecard")}}]),t}();customElements.define("daube-card",DaubeCard);