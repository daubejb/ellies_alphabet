const template = document.createElement('template');
template.innerHTML = `
<style>
  :host {
    display: block;
  }
  .header {
    height: 350px;
    overflow: hidden;
  }
  h1 {
    letter-spacing: 2px;
    font-weight: 500;
  }
  p {
    font-weight: 300;
    font-size: 18px;
  }
  .maintitle {
    font-size: 4.2em;
    color: #6b8e23;
  }
  .footer {
    font-size: 13px;
  }
  a:link, a:visited {
    color: #6b8e23;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  .signin-view {
    padding-top: 10%;
    max-width: 400px;
    margin: auto;
    text-align: center;
    display: block;
  }
  .btn {
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      transition: all 0.3s cubic-bezier(.25,.8,.25,1);
      border-color: #6b8e23;
      border-radius: 2px;
      height: 2.25rem;
      background-color: #6b8e23;
      color: white;
      cursor: pointer;
      margin: 0.5rem;
  }
  .btn:hover {
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  button.primary {
    position: absolute;
    margin: 1rem 0 0 0;
    padding: 0;
    bottom: 1rem;
    left: calc(50% - 5rem);
    height: 5rem;
    width: 10rem;
    font-size: 1.5rem;
  }

  #picture {
    display: block;
    max-width: 60%;
    max-height: 60%;
    width: auto;
    height: auto;
    margin: auto;
  }

  #logout {
    position: fixed;
    top: 0;
    right: 0;
    font-size: 0.9rem;
    margin: 1.25rem 1rem 0 0;
    cursor: pointer;
  }

  .letter {
    position: relative;
    margin: auto;
    height: 5rem;
    font-size: 5rem;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;
    vertical-align: middle;
    line-height: 5rem;
    z-index: 5;
    cursor: pointer;
  }

  #sentance {
    font-size: 1.20rem;
    font-color: #A9A9A9;
  }

  #sentance::first-letter {
    font-size: 175%;
    font-weight: 600;
  }

  #bigLetter {
    font-size: 175%;
    color: #6b8e23;
    font-weight: 600;
  }
  </style>

  <div class="signin-view" id="signin" style="display:none">
    <div class="header">
        <div class="maintitle">Ellie's Alphabet</div>
        <p role="main">A simple game to help my daughter learn her alphabet letters</p>
        <br/>
        <button id="googlelogin" class="btn">Sign in with Google</button>
    </div>
    <p class="footer">Created by <a href="https://twitter.com/jeffdaube">Jeffrey B. Daube</a>.
    Find this on <a href="https://github.com/daubejb/ellies_alphabet">GitHub</a>.</p>
  </div>
  <div id="home" style="display:none;">
    <daube-header-fixed headertitle="Ellie's Alphabet">
      <span id="logout">LOGOUT</span>
    </daube-header-fixed>
    <daube-modal id="daubemodal">
      <p class ="sentance" slot="message" id="sentance">Test</p>
      <img class="picture" slot="details" id="picture">
      <button class="btn primary" slot="positive" id="primary">Play again</button>
    </daube-modal>
    <daube-main-container>
      <daube-card id="topcard">
        <div id="topletter" class="letter">A</div>
      </daube-card>
      <daube-card id="middlecard">
        <div id="middleletter" class="letter">B</div>
      </daube-card>
      <daube-card id="bottomcard">
        <div id="bottomletter" class="letter">C</div>
      </daube-card>
    </daube-main-container>
  </div>
`

if (window.ShadyCSS) {
  ShadyCSS.prepareTemplate(template, 'alphabet-home');
}

class AlphabetHome extends HTMLElement {
  static get observedAttributes() {}
  constructor() {
    super();

    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    var googlebtn = this.shadowRoot.querySelector('#googlelogin');
    googlebtn.addEventListener("click",e => {
      console.log('login button clicked');
      this.googleLogin();
    });
    var logoutbtn = this.shadowRoot.querySelector('#logout');
    logoutbtn.addEventListener("click",e => {
      console.log('logout button clicked');
      this.googleLogout();
    });
  }

  connectedCallback() {
    if (window.ShadyCSS) {
      ShadyCSS.styleElement(this);
    }

    var signin = this.shadowRoot.querySelector("#signin");
    var home = this.shadowRoot.querySelector("#home");
    var self = this;
    firebase.auth().onAuthStateChanged(function(user) {
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

  googleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
    }).catch(function(error) {
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

  googleLogout() {
    console.log('User requested to log out');
    firebase.auth().signOut().then(function() {
      console.log('User logged out');
    }).catch(function(error) {
      console.log('Error occured');
    });
  }

  generateQuestion() {
    var letters = this.brainGetRandomLetters();
    var positions = this.uiDisplayLetters(letters);
    var media = this.brainPrepareLetterAudio(letters);
    var correctLetter = this.brainDetermineCorrectLetter(letters);
    var letterToFindAudio = new Audio ('./audio/Where_is_the_letter_' + correctLetter + '.mp3');
    letterToFindAudio.play();
    letterToFindAudio = '';
    this.uiCreateEventListeners(positions, media, letters);
  }

  brainGetRandomLetters() {
    var top = this.getOneRandomLetter();
    var middle = this.getOneRandomLetter();
    var bottom = this.getOneRandomLetter();
    var selection = Math.floor(Math.random()*(3-1+1)+1);

    while (middle === top) {
      middle = this.getOneRandomLetter();
    }
    while (bottom === top || bottom === middle) {
      bottom = this.getOneRandomLetter();
    }

    var t = top.toUpperCase();
    var m = middle.toUpperCase();
    var b = bottom.toUpperCase();

    switch(selection) {
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
    }
    return letters;

  }

  brainDetermineCorrectLetter(letters) {
    var correctLetter = '';
    switch(letters.selection) {
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

  brainPrepareLetterAudio(letters) {
    var topAudio = new Audio('./audio/' + letters.top + '.mp3');
    var middleAudio = new Audio('./audio/' + letters.middle + '.mp3');
    var bottomAudio = new Audio('./audio/' + letters.bottom + '.mp3');
    var media = {
      'topAudio': topAudio,
      'middleAudio': middleAudio,
      'bottomAudio': bottomAudio
    }
    return media;
  }

  brainGetRandomMessage() {
    var num = Math.floor(Math.random()*(4-1+1)+1);
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

  getOneRandomLetter() {
    return String.fromCharCode(Math.floor(Math.random() * (122 - 97)) + 97);
  }

  evaluateClick(letters, choice, positions, media) {
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

  brainCreateModalContent(letterValue) {
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
        sentance = "Napkins' first letter is";
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
        sentance = "Roses' first letter is";
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
        sentance = 'Watermelon begins with the letter';
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
      "speak": new Audio('audio/' + letterValue.toLowerCase() + '_sentance.mp3'),
      "pro": new Audio('audio/' + letterValue.toLowerCase() + '_pro.mp3'),
      "letter": letterValue
    };
    return modalContent;
  }

  resetAll(positions, media, letters) {
    media.topAudio = '';
    media.middleAudio = '';
    media.bottomAudio = '';
    positions.top.outerHTML = positions.top.outerHTML;
    positions.middle.outerHTML = positions.middle.outerHTML;
    positions.bottom.outerHTML = positions.bottom.outerHTML;
    letters = {};
  }

  uiGetPositions() {
    var top = this.shadowRoot.querySelector('#topletter');
    var middle = this.shadowRoot.querySelector('#middleletter');
    var bottom = this.shadowRoot.querySelector('#bottomletter');
    var positions = {
      'top': top,
      'middle': middle,
      'bottom': bottom
    }
    return positions;
  }

  uiDisplayLetters(letters) {
    var positions = this.uiGetPositions()

    positions.top.innerHTML = letters.top;
    positions.middle.innerHTML = letters.middle;
    positions.bottom.innerHTML = letters.bottom;
    return positions;
  }

  uiChangeSelectionColor(choice, letters, color, correctAudio) {
    var topcard = this.shadowRoot.querySelector('#topcard');
    var middlecard = this.shadowRoot.querySelector('#middlecard');
    var bottomcard = this.shadowRoot.querySelector('#bottomcard');
    correctAudio.play();
    switch(choice) {
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

  uiResetColors() {
    this.shadowRoot.querySelector('#topcard').setAttribute('cardcolor', '#ffffff');
    this.shadowRoot.querySelector('#middlecard').setAttribute('cardcolor', '#ffffff');
    this.shadowRoot.querySelector('#bottomcard').setAttribute('cardcolor', '#ffffff');
  }

  uiCreateEventListeners(positions, media, letters) {
    var self = this;
    positions.top.addEventListener('click', e => { self.uiTopClicked(positions, media, letters); });
    positions.middle.addEventListener('click', e => { self.uiMiddleClicked(positions, media, letters); });
    positions.bottom.addEventListener('click', e => { self.uiBottomClicked(positions, media, letters); });
    var modalPlayAgainButton = this.shadowRoot.querySelector('#primary');
    modalPlayAgainButton.addEventListener('click', e => {
      this.uiResetColors();
      this.generateQuestion();
    }, {once: true});
  }

  uiDisplayModal(modalContent) {
    var sentance = this.shadowRoot.querySelector('#sentance');
    var modal = this.shadowRoot.querySelector('#daubemodal');
    var picture = this.shadowRoot.querySelector('#picture');
    var primary = this.shadowRoot.querySelector('#primary');
    console.log(primary);
    sentance.innerHTML = modalContent.sentance + ': &nbsp' + '<span id="bigLetter">' + modalContent.letter + '</span';
    var downloadingImage = new Image();
    downloadingImage.onload = function(){
      picture.src = this.src;
      modalContent.pro.playbackRate = 0.7;
      modalContent.pro.addEventListener("ended", function() {
        primary.style.visibility = "visible";
        primary.disabled = false;
      });
      modalContent.speak.addEventListener("ended", function() {
        setTimeout(function() { modalContent.pro.play();}, 300);
      });
      setTimeout(function() { modalContent.speak.play();}, 1000);
    };
    downloadingImage.src = modalContent.imageUrl;
    console.log(picture);
    modal.setAttribute('display','');
    primary.style.visibility = "hidden";
    primary.disabled = true;
  }

  uiTopClicked (positions, media, letters) {
    var self = this;
    media.topAudio.play();
    setTimeout(function() { self.evaluateClick(letters, 'top', positions, media); }, 1000);
  }

  uiMiddleClicked(positions, media, letters) {
    var self = this;
    media.middleAudio.play();
    setTimeout(function() { self.evaluateClick(letters, 'middle', positions, media); }, 1000);
  }

  uiBottomClicked(positions, media, letters) {
    var self = this;
    media.bottomAudio.play();
    setTimeout(function() { self.evaluateClick(letters, 'bottom', positions, media); }, 1000);
  }

} // Class CustomElement
customElements.define("alphabet-home", AlphabetHome);