'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var template = document.createElement('template');
template.innerHTML = '\n<style>\n  :host {\n    display: block;\n  }\n  .header {\n    height: 350px;\n    overflow: hidden;\n  }\n  h1 {\n    letter-spacing: 2px;\n    font-weight: 500;\n  }\n  p {\n    font-weight: 300;\n    font-size: 18px;\n  }\n  .maintitle {\n    font-size: 4.2em;\n    color: #6b8e23;\n  }\n  .footer {\n    font-size: 13px;\n  }\n  a:link, a:visited {\n    color: #6b8e23;\n    text-decoration: none;\n  }\n  a:hover {\n    text-decoration: underline;\n  }\n  .signin-view {\n    padding-top: 10%;\n    max-width: 400px;\n    margin: auto;\n    text-align: center;\n    display: block;\n  }\n  .btn {\n      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n      transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n      border-color: #6b8e23;\n      border-radius: 2px;\n      height: 2.25rem;\n      background-color: #6b8e23;\n      color: white;\n      cursor: pointer;\n      margin: 0.5rem;\n  }\n  .btn:hover {\n      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n  }\n  button.primary {\n    position: absolute;\n    margin: 1rem 0 0 0;\n    padding: 0;\n    bottom: 1rem;\n    left: calc(50% - 5rem);\n    height: 5rem;\n    width: 10rem;\n    font-size: 1.5rem;\n  }\n\n  #picture {\n    display: block;\n    max-width: 75%;\n    max-height: 75%;\n    width: auto;\n    height: auto;\n    margin: auto;\n  }\n\n  #logout {\n    position: fixed;\n    top: 0;\n    right: 0;\n    font-size: 0.9rem;\n    margin: 1.25rem 1rem 0 0;\n    cursor: pointer;\n  }\n\n  .letter {\n    position: relative;\n    margin: auto;\n    height: 5rem;\n    font-size: 5rem;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    text-align: center;\n    vertical-align: middle;\n    line-height: 5rem;\n    z-index: 5;\n    cursor: pointer;\n  }\n\n  </style>\n\n  <div class="signin-view" id="signin" style="display:none">\n    <div class="header">\n        <div class="maintitle">Ellie\'s Alphabet</div>\n        <p role="main">A simple game to help my daughter learn her alphabet letters</p>\n        <br/>\n        <button id="googlelogin" class="btn">Sign in with Google</button>\n    </div>\n    <p class="footer">Created by <a href="https://twitter.com/jeffdaube">Jeffrey B. Daube</a>.\n    Find this on <a href="https://github.com/daubejb/ellies_alphabet">GitHub</a>.</p>\n  </div>\n  <div id="home" style="display:none;">\n    <daube-header-fixed headertitle="Ellie\'s Alphabet">\n      <span id="logout">LOGOUT</span>\n    </daube-header-fixed>\n    <daube-modal id="daubemodal">\n      <img class="picture" slot="details" id="picture">\n      <button class="btn primary" slot="positive" id="primary">Play again</button>\n    </daube-modal>\n    <daube-main-container>\n      <daube-card id="topcard">\n        <div id="topletter" class="letter">A</div>\n      </daube-card>\n      <daube-card id="middlecard">\n        <div id="middleletter" class="letter">B</div>\n      </daube-card>\n      <daube-card id="bottomcard">\n        <div id="bottomletter" class="letter">C</div>\n      </daube-card>\n    </daube-main-container>\n  </div>\n';

if (window.ShadyCSS) {
  ShadyCSS.prepareTemplate(template, 'alphabet-home');
}

var AlphabetHome = function (_HTMLElement) {
  _inherits(AlphabetHome, _HTMLElement);

  _createClass(AlphabetHome, null, [{
    key: 'observedAttributes',
    get: function get() {}
  }]);

  function AlphabetHome() {
    _classCallCheck(this, AlphabetHome);

    var _this = _possibleConstructorReturn(this, (AlphabetHome.__proto__ || Object.getPrototypeOf(AlphabetHome)).call(this));

    _this.attachShadow({ mode: 'open' });
    _this.shadowRoot.appendChild(template.content.cloneNode(true));

    var googlebtn = _this.shadowRoot.querySelector('#googlelogin');
    googlebtn.addEventListener("click", function (e) {
      console.log('login button clicked');
      _this.googleLogin();
    });
    var logoutbtn = _this.shadowRoot.querySelector('#logout');
    logoutbtn.addEventListener("click", function (e) {
      console.log('logout button clicked');
      _this.googleLogout();
    });
    return _this;
  }

  _createClass(AlphabetHome, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      if (window.ShadyCSS) {
        ShadyCSS.styleElement(this);
      }

      var signin = this.shadowRoot.querySelector("#signin");
      var home = this.shadowRoot.querySelector("#home");
      var self = this;
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          signin.style.display = 'none';
          home.style.display = 'block';
          self.generateQuestion();
        } else {
          console.log('user is not authenticated');
          signin.style.display = 'block';
          home.style.display = 'none';
        }
      });
    }
  }, {
    key: 'googleLogin',
    value: function googleLogin() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function (result) {
        var token = result.credential.accessToken;
        var user = result.user;
      }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    }
  }, {
    key: 'googleLogout',
    value: function googleLogout() {
      console.log('User requested to log out');
      firebase.auth().signOut().then(function () {
        console.log('User logged out');
      }).catch(function (error) {
        console.log('Error occured');
      });
    }
  }, {
    key: 'generateQuestion',
    value: function generateQuestion() {
      var letters = this.brainGetRandomLetters();
      var positions = this.uiDisplayLetters(letters);
      var media = this.brainPrepareLetterAudio(letters);
      var correctLetter = this.brainDetermineCorrectLetter(letters);
      var letterToFindAudio = new Audio('./audio/Where_is_the_letter_' + correctLetter + '.mp3');
      letterToFindAudio.play();
      letterToFindAudio = '';
      this.uiCreateEventListeners(positions, media, letters);
    }
  }, {
    key: 'brainGetRandomLetters',
    value: function brainGetRandomLetters() {
      var top = this.getOneRandomLetter();
      var middle = this.getOneRandomLetter();
      var bottom = this.getOneRandomLetter();
      var selection = Math.floor(Math.random() * (3 - 1 + 1) + 1);

      while (middle === top) {
        middle = this.getOneRandomLetter();
      }
      while (bottom === top || bottom === middle) {
        bottom = this.getOneRandomLetter();
      }

      var t = top.toUpperCase();
      var m = middle.toUpperCase();
      var b = bottom.toUpperCase();

      switch (selection) {
        case 1:
          selection = 'top';
          break;
        case 2:
          selection = 'middle';
          break;
        case 3:
          selection = 'bottom';
          break;
      }
      var letters = {
        'top': t,
        'middle': m,
        'bottom': b,
        'selection': selection
      };
      return letters;
    }
  }, {
    key: 'brainDetermineCorrectLetter',
    value: function brainDetermineCorrectLetter(letters) {
      var correctLetter = '';
      switch (letters.selection) {
        case 'top':
          correctLetter = letters.top;
          break;
        case 'middle':
          correctLetter = letters.middle;
          break;
        case 'bottom':
          correctLetter = letters.bottom;
          break;
      }
      return correctLetter;
    }
  }, {
    key: 'brainPrepareLetterAudio',
    value: function brainPrepareLetterAudio(letters) {
      var topAudio = new Audio('./audio/' + letters.top + '.mp3');
      var middleAudio = new Audio('./audio/' + letters.middle + '.mp3');
      var bottomAudio = new Audio('./audio/' + letters.bottom + '.mp3');
      var media = {
        'topAudio': topAudio,
        'middleAudio': middleAudio,
        'bottomAudio': bottomAudio
      };
      return media;
    }
  }, {
    key: 'brainGetRandomMessage',
    value: function brainGetRandomMessage() {
      var num = Math.floor(Math.random() * (4 - 1 + 1) + 1);
      var message = '';
      switch (num) {
        case 1:
          message = 'Excellent';
          break;
        case 2:
          message = 'Correct';
          break;
        case 3:
          message = 'Good_job';
          break;
        case 4:
          message = 'Nice_work';
          break;
      }
      return message;
    }
  }, {
    key: 'getOneRandomLetter',
    value: function getOneRandomLetter() {
      return String.fromCharCode(Math.floor(Math.random() * (122 - 97)) + 97);
    }
  }, {
    key: 'evaluateClick',
    value: function evaluateClick(letters, choice, positions, media) {
      var correct = letters.selection;
      if (choice === correct) {
        var letterValue = '';
        switch (choice) {
          case 'top':
            letterValue = letters.top;
            break;
          case 'middle':
            letterValue = letters.middle;
            break;
          case 'bottom':
            letterValue = letters.bottom;
            break;
        }
        var color = '#00ff00';
        var message = this.brainGetRandomMessage();
        var correctAudio = new Audio('./audio/' + message + '.mp3');
        this.uiChangeSelectionColor(choice, letters, color, correctAudio);
        var modalContent = this.brainCreateModalContent(letterValue);
        this.uiDisplayModal(modalContent);
        this.resetAll(positions, media, letters);
      } else {
        var color = '#ff0000';
        var incorrectAudio = new Audio('./audio/' + 'Please_try_again' + '.mp3');
        this.uiChangeSelectionColor(choice, letters, color, incorrectAudio);
      }
    }
  }, {
    key: 'brainCreateModalContent',
    value: function brainCreateModalContent(letterValue) {
      var image = '';
      var sentance = '';
      switch (letterValue) {
        case 'A':
          image = 'images/apple.png';
          sentance = 'Apple starts with the letter';
          break;
        case 'B':
          image = 'images/bananas.png';
          sentance = 'Bananas begin with the letter';
          break;
        case 'C':
          image = 'images/carrots.png';
          sentance = "Carrots' first letter is";
          break;
        case 'D':
          image = 'images/dog.png';
          sentance = 'Dog starts with the letter';
          break;
        case 'E':
          image = 'images/elephant.png';
          sentance = 'Elephant begins with the letter';
          break;
        case 'F':
          image = 'images/frog.png';
          sentance = "Frog's first letter is";
          break;
        case 'G':
          image = 'images/giraffe.png';
          sentance = 'Giraffe starts with the letter';
          break;
        case 'H':
          image = 'images/hat.png';
          sentance = 'Hat begins with the letter';
          break;
        case 'I':
          image = 'images/ice_cream_cone.png';
          sentance = 'Ice cream cone begins with the letter';
          break;
        case 'J':
          image = 'images/jar.png';
          sentance = 'Jar starts with the letter';
          break;
        case 'K':
          image = 'images/key.png';
          sentance = "Key's first letter is";
          break;
        case 'L':
          image = 'images/light_bulb.png';
          sentance = 'Light bulb begins with the letter';
          break;
        case 'M':
          image = 'images/monkey.png';
          sentance = 'Monkey begins with the letter';
          break;
        case 'N':
          image = 'images/napkins.png';
          sentance = "Napkin's first letter is";
          break;
        case 'O':
          image = 'images/owl.png';
          sentance = 'Owl begins with the letter';
          break;
        case 'P':
          image = 'images/pencil.png';
          sentance = 'Pencil starts with the letter';
          break;
        case 'Q':
          image = 'images/queen.png';
          sentance = 'Queen begins with the letter';
          break;
        case 'R':
          image = 'images/roses.png';
          sentance = "Rose's first letter is";
          break;
        case 'S':
          image = 'images/salad.png';
          sentance = 'Salad begins with the letter';
          break;
        case 'T':
          image = 'images/turtle.png';
          sentance = 'Turtle starts with the letter';
          break;
        case 'U':
          image = 'images/umbrella.png';
          sentance = "Umbrella's first letter is";
          break;
        case 'V':
          image = 'images/vase.png';
          sentance = 'Vase starts with the letter';
          break;
        case 'W':
          image = 'images/watermelon.png';
          sentance = 'Watermelon begins with letter';
          break;
        case 'X':
          image = 'images/xylophone.png';
          sentance = 'Xylophone starts with the letter';
          break;
        case 'Y':
          image = 'images/yarn.png';
          sentance = 'Yarn begins with the letter';
          break;
        case 'Z':
          image = 'images/zebra.png';
          sentance = "Zebra's first letter is";
          break;
      }
      var modalContent = {
        "imageUrl": image,
        "sentance": sentance,
        "letter": letterValue
      };
      return modalContent;
    }
  }, {
    key: 'resetAll',
    value: function resetAll(positions, media, letters) {
      media.topAudio = '';
      media.middleAudio = '';
      media.bottomAudio = '';
      positions.top.outerHTML = positions.top.outerHTML;
      positions.middle.outerHTML = positions.middle.outerHTML;
      positions.bottom.outerHTML = positions.bottom.outerHTML;
      letters = {};
    }
  }, {
    key: 'uiGetPositions',
    value: function uiGetPositions() {
      var top = this.shadowRoot.querySelector('#topletter');
      var middle = this.shadowRoot.querySelector('#middleletter');
      var bottom = this.shadowRoot.querySelector('#bottomletter');
      var positions = {
        'top': top,
        'middle': middle,
        'bottom': bottom
      };
      return positions;
    }
  }, {
    key: 'uiDisplayLetters',
    value: function uiDisplayLetters(letters) {
      var positions = this.uiGetPositions();

      positions.top.innerHTML = letters.top;
      positions.middle.innerHTML = letters.middle;
      positions.bottom.innerHTML = letters.bottom;
      return positions;
    }
  }, {
    key: 'uiChangeSelectionColor',
    value: function uiChangeSelectionColor(choice, letters, color, correctAudio) {
      var topcard = this.shadowRoot.querySelector('#topcard');
      var middlecard = this.shadowRoot.querySelector('#middlecard');
      var bottomcard = this.shadowRoot.querySelector('#bottomcard');
      correctAudio.play();
      switch (choice) {
        case 'top':
          topcard.setAttribute('cardcolor', color);
          break;
        case 'middle':
          middlecard.setAttribute('cardcolor', color);
          break;
        case 'bottom':
          bottomcard.setAttribute('cardcolor', color);
          break;
      }
    }
  }, {
    key: 'uiResetColors',
    value: function uiResetColors() {
      this.shadowRoot.querySelector('#topcard').setAttribute('cardcolor', '#ffffff');
      this.shadowRoot.querySelector('#middlecard').setAttribute('cardcolor', '#ffffff');
      this.shadowRoot.querySelector('#bottomcard').setAttribute('cardcolor', '#ffffff');
    }
  }, {
    key: 'uiCreateEventListeners',
    value: function uiCreateEventListeners(positions, media, letters) {
      var _this2 = this;

      var self = this;
      positions.top.addEventListener('click', function (e) {
        self.uiTopClicked(positions, media, letters);
      });
      positions.middle.addEventListener('click', function (e) {
        self.uiMiddleClicked(positions, media, letters);
      });
      positions.bottom.addEventListener('click', function (e) {
        self.uiBottomClicked(positions, media, letters);
      });
      var modalPlayAgainButton = this.shadowRoot.querySelector('#primary');
      modalPlayAgainButton.addEventListener('click', function (e) {
        _this2.uiResetColors();
        _this2.generateQuestion();
      }, { once: true });
    }
  }, {
    key: 'uiDisplayModal',
    value: function uiDisplayModal(modalContent) {
      var modal = this.shadowRoot.querySelector('#daubemodal');
      var picture = this.shadowRoot.querySelector('#picture');
      var downloadingImage = new Image();
      downloadingImage.onload = function () {
        picture.src = this.src;
      };
      downloadingImage.src = modalContent.imageUrl;
      console.log(picture);
      modal.setAttribute('display', '');
    }
  }, {
    key: 'uiTopClicked',
    value: function uiTopClicked(positions, media, letters) {
      var self = this;
      media.topAudio.play();
      setTimeout(function () {
        self.evaluateClick(letters, 'top', positions, media);
      }, 1000);
    }
  }, {
    key: 'uiMiddleClicked',
    value: function uiMiddleClicked(positions, media, letters) {
      var self = this;
      media.middleAudio.play();
      setTimeout(function () {
        self.evaluateClick(letters, 'middle', positions, media);
      }, 1000);
    }
  }, {
    key: 'uiBottomClicked',
    value: function uiBottomClicked(positions, media, letters) {
      var self = this;
      media.bottomAudio.play();
      setTimeout(function () {
        self.evaluateClick(letters, 'bottom', positions, media);
      }, 1000);
    }
  }]);

  return AlphabetHome;
}(HTMLElement); // Class CustomElement


customElements.define("alphabet-home", AlphabetHome);