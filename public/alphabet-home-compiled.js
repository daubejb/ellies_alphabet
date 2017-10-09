"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),template=document.createElement("template");template.innerHTML='\n<style>\n  :host {\n    display: block;\n  }\n  .header {\n    height: 350px;\n    overflow: hidden;\n  }\n  h1 {\n    letter-spacing: 2px;\n    font-weight: 500;\n  }\n  p {\n    font-weight: 300;\n    font-size: 18px;\n  }\n  .maintitle {\n    font-size: 4.2em;\n    color: #6b8e23;\n  }\n  .footer {\n    font-size: 13px;\n  }\n  a:link, a:visited {\n    color: #6b8e23;\n    text-decoration: none;\n  }\n  a:hover {\n    text-decoration: underline;\n  }\n  .signin-view {\n    padding-top: 10%;\n    max-width: 400px;\n    margin: auto;\n    text-align: center;\n    display: block;\n  }\n  .btn {\n      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n      transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n      border-color: #6b8e23;\n      border-radius: 2px;\n      height: 2.25rem;\n      background-color: #6b8e23;\n      color: white;\n      cursor: pointer;\n      margin: 0.5rem;\n  }\n  .btn:hover {\n      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n  }\n  button.primary {\n    position: absolute;\n    margin: 1rem 0 0 0;\n    padding: 0;\n    bottom: 1rem;\n    left: calc(50% - 5rem);\n    height: 5rem;\n    width: 10rem;\n    font-size: 1.5rem;\n  }\n\n  #picture {\n    display: block;\n    max-width: 60%;\n    max-height: 60%;\n    width: auto;\n    height: auto;\n    margin: auto;\n  }\n\n  #logout {\n    position: fixed;\n    top: 0;\n    right: 0;\n    font-size: 0.9rem;\n    margin: 1.25rem 1rem 0 0;\n    cursor: pointer;\n  }\n\n  .letter {\n    position: relative;\n    margin: auto;\n    height: 5rem;\n    font-size: 5rem;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    text-align: center;\n    vertical-align: middle;\n    line-height: 5rem;\n    z-index: 5;\n    cursor: pointer;\n  }\n\n  #sentance {\n    font-size: 1.20rem;\n    font-color: #A9A9A9;\n  }\n\n  #sentance::first-letter {\n    font-size: 175%;\n    font-weight: 600;\n  }\n\n  #bigLetter {\n    font-size: 175%;\n    color: #6b8e23;\n    font-weight: 600;\n  }\n  </style>\n\n  <div class="signin-view" id="signin" style="display:none">\n    <div class="header">\n        <div class="maintitle">Ellie\'s Alphabet</div>\n        <p role="main">A simple game to help my daughter learn her alphabet letters</p>\n        <br/>\n        <button id="googlelogin" class="btn">Sign in with Google</button>\n    </div>\n    <p class="footer">Created by <a href="https://twitter.com/jeffdaube">Jeffrey B. Daube</a>.\n    Find this on <a href="https://github.com/daubejb/ellies_alphabet">GitHub</a>.</p>\n  </div>\n  <div id="home" style="display:none;">\n    <daube-header-fixed headertitle="Ellie\'s Alphabet">\n      <span id="logout">LOGOUT</span>\n    </daube-header-fixed>\n    <daube-modal id="daubemodal">\n      <p class ="sentance" slot="message" id="sentance">Test</p>\n      <img class="picture" slot="details" id="picture">\n      <button class="btn primary" slot="positive" id="primary">Play again</button>\n    </daube-modal>\n    <daube-main-container>\n      <daube-card id="topcard">\n        <div id="topletter" class="letter">A</div>\n      </daube-card>\n      <daube-card id="middlecard">\n        <div id="middleletter" class="letter">B</div>\n      </daube-card>\n      <daube-card id="bottomcard">\n        <div id="bottomletter" class="letter">C</div>\n      </daube-card>\n    </daube-main-container>\n  </div>\n',window.ShadyCSS&&ShadyCSS.prepareTemplate(template,"alphabet-home");var AlphabetHome=function(e){function t(){_classCallCheck(this,t);var e=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.attachShadow({mode:"open"}),e.shadowRoot.appendChild(template.content.cloneNode(!0)),e.shadowRoot.querySelector("#googlelogin").addEventListener("click",function(t){console.log("login button clicked"),e.googleLogin()}),e.shadowRoot.querySelector("#logout").addEventListener("click",function(t){console.log("logout button clicked"),e.googleLogout()}),e}return _inherits(t,HTMLElement),_createClass(t,null,[{key:"observedAttributes",get:function(){}}]),_createClass(t,[{key:"connectedCallback",value:function(){window.ShadyCSS&&ShadyCSS.styleElement(this);var e=this.shadowRoot.querySelector("#signin"),t=this.shadowRoot.querySelector("#home"),n=this;firebase.auth().onAuthStateChanged(function(o){o?(e.style.display="none",t.style.display="block",n.generateQuestion()):(console.log("user is not authenticated"),e.style.display="block",t.style.display="none")})}},{key:"googleLogin",value:function(){var e=new firebase.auth.GoogleAuthProvider;firebase.auth().signInWithPopup(e).then(function(e){e.credential.accessToken,e.user}).catch(function(e){e.code,e.message,e.email,e.credential})}},{key:"googleLogout",value:function(){console.log("User requested to log out"),firebase.auth().signOut().then(function(){console.log("User logged out")}).catch(function(e){console.log("Error occured")})}},{key:"generateQuestion",value:function(){var e=this.brainGetRandomLetters(),t=this.uiDisplayLetters(e),n=this.brainPrepareLetterAudio(e),o=this.brainDetermineCorrectLetter(e),a=new Audio("./audio/Where_is_the_letter_"+o+".mp3");a.play(),a="",this.uiCreateEventListeners(t,n,e)}},{key:"brainGetRandomLetters",value:function(){for(var e=this.getOneRandomLetter(),t=this.getOneRandomLetter(),n=this.getOneRandomLetter(),o=Math.floor(3*Math.random()+1);t===e;)t=this.getOneRandomLetter();for(;n===e||n===t;)n=this.getOneRandomLetter();var a=e.toUpperCase(),i=t.toUpperCase(),r=n.toUpperCase();switch(o){case 1:o="top";break;case 2:o="middle";break;case 3:o="bottom"}return{top:a,middle:i,bottom:r,selection:o}}},{key:"brainDetermineCorrectLetter",value:function(e){var t="";switch(e.selection){case"top":t=e.top;break;case"middle":t=e.middle;break;case"bottom":t=e.bottom}return t}},{key:"brainPrepareLetterAudio",value:function(e){return{topAudio:new Audio("./audio/"+e.top+".mp3"),middleAudio:new Audio("./audio/"+e.middle+".mp3"),bottomAudio:new Audio("./audio/"+e.bottom+".mp3")}}},{key:"brainGetRandomMessage",value:function(){var e="";switch(Math.floor(4*Math.random()+1)){case 1:e="Excellent";break;case 2:e="Correct";break;case 3:e="Good_job";break;case 4:e="Nice_work"}return e}},{key:"getOneRandomLetter",value:function(){return String.fromCharCode(Math.floor(25*Math.random())+97)}},{key:"evaluateClick",value:function(e,t,n,o){if(t===e.selection){var a="";switch(t){case"top":a=e.top;break;case"middle":a=e.middle;break;case"bottom":a=e.bottom}var i="#00ff00",r=this.brainGetRandomMessage(),s=new Audio("./audio/"+r+".mp3");this.uiChangeSelectionColor(t,e,i,s);var l=this.brainCreateModalContent(a);this.uiDisplayModal(l),this.resetAll(n,o,e)}else{var i="#ff0000",c=new Audio("./audio/Please_try_again.mp3");this.uiChangeSelectionColor(t,e,i,c)}}},{key:"brainCreateModalContent",value:function(e){var t="",n="";switch(e){case"A":t="images/apple.png",n="Apple starts with the letter";break;case"B":t="images/bananas.png",n="Bananas begin with the letter";break;case"C":t="images/carrots.png",n="Carrots' first letter is";break;case"D":t="images/dog.png",n="Dog starts with the letter";break;case"E":t="images/elephant.png",n="Elephant begins with the letter";break;case"F":t="images/frog.png",n="Frog's first letter is";break;case"G":t="images/giraffe.png",n="Giraffe starts with the letter";break;case"H":t="images/hat.png",n="Hat begins with the letter";break;case"I":t="images/ice_cream_cone.png",n="Ice cream cone begins with the letter";break;case"J":t="images/jar.png",n="Jar starts with the letter";break;case"K":t="images/key.png",n="Key's first letter is";break;case"L":t="images/light_bulb.png",n="Light bulb begins with the letter";break;case"M":t="images/monkey.png",n="Monkey begins with the letter";break;case"N":t="images/napkins.png",n="Napkins' first letter is";break;case"O":t="images/owl.png",n="Owl begins with the letter";break;case"P":t="images/pencil.png",n="Pencil starts with the letter";break;case"Q":t="images/queen.png",n="Queen begins with the letter";break;case"R":t="images/roses.png",n="Roses' first letter is";break;case"S":t="images/salad.png",n="Salad begins with the letter";break;case"T":t="images/turtle.png",n="Turtle starts with the letter";break;case"U":t="images/umbrella.png",n="Umbrella's first letter is";break;case"V":t="images/vase.png",n="Vase starts with the letter";break;case"W":t="images/watermelon.png",n="Watermelon begins with the letter";break;case"X":t="images/xylophone.png",n="Xylophone starts with the letter";break;case"Y":t="images/yarn.png",n="Yarn begins with the letter";break;case"Z":t="images/zebra.png",n="Zebra's first letter is"}var o={imageUrl:t,sentance:n,speak:new Audio("audio/"+e.toLowerCase()+"_sentance.mp3"),letter:e};return console.log(o),o}},{key:"resetAll",value:function(e,t,n){t.topAudio="",t.middleAudio="",t.bottomAudio="",e.top.outerHTML=e.top.outerHTML,e.middle.outerHTML=e.middle.outerHTML,e.bottom.outerHTML=e.bottom.outerHTML}},{key:"uiGetPositions",value:function(){return{top:this.shadowRoot.querySelector("#topletter"),middle:this.shadowRoot.querySelector("#middleletter"),bottom:this.shadowRoot.querySelector("#bottomletter")}}},{key:"uiDisplayLetters",value:function(e){var t=this.uiGetPositions();return t.top.innerHTML=e.top,t.middle.innerHTML=e.middle,t.bottom.innerHTML=e.bottom,t}},{key:"uiChangeSelectionColor",value:function(e,t,n,o){var a=this.shadowRoot.querySelector("#topcard"),i=this.shadowRoot.querySelector("#middlecard"),r=this.shadowRoot.querySelector("#bottomcard");switch(o.play(),e){case"top":a.setAttribute("cardcolor",n);break;case"middle":i.setAttribute("cardcolor",n);break;case"bottom":r.setAttribute("cardcolor",n)}}},{key:"uiResetColors",value:function(){this.shadowRoot.querySelector("#topcard").setAttribute("cardcolor","#ffffff"),this.shadowRoot.querySelector("#middlecard").setAttribute("cardcolor","#ffffff"),this.shadowRoot.querySelector("#bottomcard").setAttribute("cardcolor","#ffffff")}},{key:"uiCreateEventListeners",value:function(e,t,n){var o=this,a=this;e.top.addEventListener("click",function(o){a.uiTopClicked(e,t,n)}),e.middle.addEventListener("click",function(o){a.uiMiddleClicked(e,t,n)}),e.bottom.addEventListener("click",function(o){a.uiBottomClicked(e,t,n)}),this.shadowRoot.querySelector("#primary").addEventListener("click",function(e){o.uiResetColors(),o.generateQuestion()},{once:!0})}},{key:"uiDisplayModal",value:function(e){var t=this.shadowRoot.querySelector("#sentance"),n=this.shadowRoot.querySelector("#daubemodal"),o=this.shadowRoot.querySelector("#picture");t.innerHTML=e.sentance+': &nbsp<span id="bigLetter">'+e.letter+"</span";var a=new Image;a.onload=function(){o.src=this.src,setTimeout(function(){e.speak.play()},1500)},a.src=e.imageUrl,console.log(o),n.setAttribute("display","")}},{key:"uiTopClicked",value:function(e,t,n){var o=this;t.topAudio.play(),setTimeout(function(){o.evaluateClick(n,"top",e,t)},1e3)}},{key:"uiMiddleClicked",value:function(e,t,n){var o=this;t.middleAudio.play(),setTimeout(function(){o.evaluateClick(n,"middle",e,t)},1e3)}},{key:"uiBottomClicked",value:function(e,t,n){var o=this;t.bottomAudio.play(),setTimeout(function(){o.evaluateClick(n,"bottom",e,t)},1e3)}}]),t}();customElements.define("alphabet-home",AlphabetHome);