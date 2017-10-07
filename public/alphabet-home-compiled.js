"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _createClass=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),template=document.createElement("template");template.innerHTML='\n<style>\n  :host {\n    display: block;\n  }\n  .header {\n    height: 350px;\n    overflow: hidden;\n  }\n  h1 {\n    letter-spacing: 2px;\n    font-weight: 500;\n  }\n  p {\n    font-weight: 300;\n    font-size: 18px;\n  }\n  .maintitle {\n    font-size: 4.2em;\n    color: #6b8e23;\n  }\n  .footer {\n    font-size: 13px;\n  }\n  a:link, a:visited {\n    color: #6b8e23;\n    text-decoration: none;\n  }\n  a:hover {\n    text-decoration: underline;\n  }\n  .signin-view {\n    padding-top: 10%;\n    max-width: 400px;\n    margin: auto;\n    text-align: center;\n    display: block;\n  }\n  .btn {\n      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n      transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n      border-color: #6b8e23;\n      border-radius: 2px;\n      height: 2.25rem;\n      background-color: #6b8e23;\n      color: white;\n      cursor: pointer;\n      margin: 0.5rem;\n  }\n  .btn:hover {\n      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n  }\n  button.primary {\n    float: right;\n  }\n  #logout {\n    position: fixed;\n    top: 0;\n    right: 0;\n    font-size: 0.9rem;\n    margin: 1.25rem 1rem 0 0;\n    cursor: pointer;\n  }\n\n  .letter {\n    position: relative;\n    margin: auto;\n    height: 5rem;\n    font-size: 5rem;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    text-align: center;\n    vertical-align: middle;\n    line-height: 5rem;\n    z-index: 5;\n    cursor: pointer;\n  }\n\n  </style>\n\n  <div class="signin-view" id="signin" style="display:none">\n    <div class="header">\n        <div class="maintitle">Ellie\'s Alphabet</div>\n        <p role="main">A simple game to help my daughter learn her alphabet letters</p>\n        <br/>\n        <button id="googlelogin" class="btn">Sign in with Google</button>\n    </div>\n    <p class="footer">Created by <a href="https://twitter.com/jeffdaube">Jeffrey B. Daube</a>.\n    Find this on <a href="https://github.com/daubejb/ellies_alphabet">GitHub</a>.</p>\n  </div>\n  <div id="home" style="display:none;">\n    <daube-header-fixed headertitle="Ellie\'s Alphabet">\n      <span id="logout">LOGOUT</span>\n    </daube-header-fixed>\n    <daube-modal id="daubemodal">\n      <button class="primary" slot="positive" id="primary">Play again</button>\n    </daube-modal>\n    <daube-main-container>\n      <daube-card id="topcard">\n        <div id="topletter" class="letter">A</div>\n      </daube-card>\n      <daube-card id="middlecard">\n        <div id="middleletter" class="letter">B</div>\n      </daube-card>\n      <daube-card id="bottomcard">\n        <div id="bottomletter" class="letter">C</div>\n      </daube-card>\n    </daube-main-container>\n  </div>\n',window.ShadyCSS&&ShadyCSS.prepareTemplate(template,"alphabet-home");var AlphabetHome=function(e){function t(){_classCallCheck(this,t);var e=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.attachShadow({mode:"open"}),e.shadowRoot.appendChild(template.content.cloneNode(!0)),e.shadowRoot.querySelector("#googlelogin").addEventListener("click",function(t){console.log("login button clicked"),e.googleLogin()}),e.shadowRoot.querySelector("#logout").addEventListener("click",function(t){console.log("logout button clicked"),e.googleLogout()}),e}return _inherits(t,HTMLElement),_createClass(t,null,[{key:"observedAttributes",get:function(){}}]),_createClass(t,[{key:"connectedCallback",value:function(){window.ShadyCSS&&ShadyCSS.styleElement(this);var e=this.shadowRoot.querySelector("#signin"),t=this.shadowRoot.querySelector("#home"),o=this;firebase.auth().onAuthStateChanged(function(n){n?(e.style.display="none",t.style.display="block",o.generateQuestion()):(console.log("user is not authenticated"),e.style.display="block",t.style.display="none")})}},{key:"googleLogin",value:function(){var e=new firebase.auth.GoogleAuthProvider;firebase.auth().signInWithPopup(e).then(function(e){e.credential.accessToken,e.user}).catch(function(e){e.code,e.message,e.email,e.credential})}},{key:"googleLogout",value:function(){console.log("User requested to log out"),firebase.auth().signOut().then(function(){console.log("User logged out")}).catch(function(e){console.log("Error occured")})}},{key:"generateQuestion",value:function(){var e=this.brainGetRandomLetters(),t=this.uiDisplayLetters(e),o=this.brainPrepareLetterAudio(e),n=this.brainDetermineCorrectLetter(e),i=new Audio("./audio/Where_is_the_letter_"+n+".mp3");i.play(),i="",this.uiCreateEventListeners(t,o,e)}},{key:"brainGetRandomLetters",value:function(){for(var e=this.getOneRandomLetter(),t=this.getOneRandomLetter(),o=this.getOneRandomLetter(),n=Math.floor(3*Math.random()+1);t===e;)t=this.getOneRandomLetter();for(;o===e||o===t;)o=this.getOneRandomLetter();var i=e.toUpperCase(),r=t.toUpperCase(),a=o.toUpperCase();switch(n){case 1:n="top";break;case 2:n="middle";break;case 3:n="bottom"}return{top:i,middle:r,bottom:a,selection:n}}},{key:"brainDetermineCorrectLetter",value:function(e){var t="";switch(e.selection){case"top":t=e.top;break;case"middle":t=e.middle;break;case"bottom":t=e.bottom}return t}},{key:"brainPrepareLetterAudio",value:function(e){return{topAudio:new Audio("./audio/"+e.top+".mp3"),middleAudio:new Audio("./audio/"+e.middle+".mp3"),bottomAudio:new Audio("./audio/"+e.bottom+".mp3")}}},{key:"brainGetRandomMessage",value:function(){var e="";switch(Math.floor(4*Math.random()+1)){case 1:e="Excellent";break;case 2:e="Correct";break;case 3:e="Good_job";break;case 4:e="Nice_work"}return e}},{key:"getOneRandomLetter",value:function(){return String.fromCharCode(Math.floor(25*Math.random())+97)}},{key:"evaluateClick",value:function(e,t,o,n){if(t===e.selection){var i="#00ff00",r=this.brainGetRandomMessage(),a=new Audio("./audio/"+r+".mp3");this.uiChangeSelectionColor(t,e,i,a),this.resetAll(o,n,e),this.uiDisplayModal()}else{var i="#ff0000",l=new Audio("./audio/Please_try_again.mp3");this.uiChangeSelectionColor(t,e,i,l)}}},{key:"resetAll",value:function(e,t,o){t.topAudio="",t.middleAudio="",t.bottomAudio="",e.top.outerHTML=e.top.outerHTML,e.middle.outerHTML=e.middle.outerHTML,e.bottom.outerHTML=e.bottom.outerHTML}},{key:"uiGetPositions",value:function(){return{top:this.shadowRoot.querySelector("#topletter"),middle:this.shadowRoot.querySelector("#middleletter"),bottom:this.shadowRoot.querySelector("#bottomletter")}}},{key:"uiDisplayLetters",value:function(e){var t=this.uiGetPositions();return t.top.innerHTML=e.top,t.middle.innerHTML=e.middle,t.bottom.innerHTML=e.bottom,t}},{key:"uiChangeSelectionColor",value:function(e,t,o,n){var i=this.shadowRoot.querySelector("#topcard"),r=this.shadowRoot.querySelector("#middlecard"),a=this.shadowRoot.querySelector("#bottomcard");switch(n.play(),e){case"top":i.setAttribute("cardcolor",o);break;case"middle":r.setAttribute("cardcolor",o);break;case"bottom":a.setAttribute("cardcolor",o)}}},{key:"uiResetColors",value:function(){this.shadowRoot.querySelector("#topcard").setAttribute("cardcolor","#ffffff"),this.shadowRoot.querySelector("#middlecard").setAttribute("cardcolor","#ffffff"),this.shadowRoot.querySelector("#bottomcard").setAttribute("cardcolor","#ffffff")}},{key:"uiCreateEventListeners",value:function(e,t,o){var n=this,i=this;e.top.addEventListener("click",function(n){i.uiTopClicked(e,t,o)}),e.middle.addEventListener("click",function(n){i.uiMiddleClicked(e,t,o)}),e.bottom.addEventListener("click",function(n){i.uiBottomClicked(e,t,o)}),this.shadowRoot.querySelector("#primary").addEventListener("click",function(e){n.uiResetColors(),n.generateQuestion()},{once:!0})}},{key:"uiDisplayModal",value:function(){this.shadowRoot.querySelector("#daubemodal").setAttribute("display","")}},{key:"uiTopClicked",value:function(e,t,o){var n=this;t.topAudio.play(),setTimeout(function(){n.evaluateClick(o,"top",e,t)},1e3)}},{key:"uiMiddleClicked",value:function(e,t,o){var n=this;t.middleAudio.play(),setTimeout(function(){n.evaluateClick(o,"middle",e,t)},1e3)}},{key:"uiBottomClicked",value:function(e,t,o){var n=this;t.bottomAudio.play(),setTimeout(function(){n.evaluateClick(o,"bottom",e,t)},1e3)}}]),t}();customElements.define("alphabet-home",AlphabetHome);