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
  button.secondary {
    background-color: #585858;
    border-color: #585858;
    float: right;
  }
  button.primary {
    float: right;
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

  </style>

  <div class="signin-view" id="signin">
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
      console.log('login button clicked');
      this.googleLogout();
    });
  }

  connectedCallback() {
    if (window.ShadyCSS) {
      ShadyCSS.styleElement(this);
    }

    var signin = this.shadowRoot.querySelector("#signin");
    var home = this.shadowRoot.querySelector("#home");
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        signin.style.display = 'none';
        home.style.display = 'block';
      } else {
        console.log('user is not authenticated');
        signin.style.display = 'block';
        home.style.display = 'none';
      }
    });

    var letters = this.getRandLetters();
    console.log(letters);
    var top = this.shadowRoot.querySelector('#topletter');
    var middle = this.shadowRoot.querySelector('#middleletter');
    var bottom = this.shadowRoot.querySelector('#bottomletter');

    top.innerHTML = letters.top;
    middle.innerHTML = letters.middle;
    bottom.innerHTML = letters.bottom;

    var topAudio = new Audio('./audio/' + letters.top + '.mp3');
    var middleAudio = new Audio('./audio/' + letters.middle + '.mp3');
    var bottomAudio = new Audio('./audio/' + letters.bottom + '.mp3');
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
    var letterToFindAudio = new Audio ('./audio/Where_is_the_letter_' + correctLetter + '.mp3');
    letterToFindAudio.play();

    top.addEventListener("click",e => {
      console.log('top letter clicked');
      topAudio.play();
      setTimeout(function() {
        this.evaluateClick(letters, 'top');
      }, 2000);
    });
    middle.addEventListener("click",e => {
      console.log('middle letter clicked');
      middleAudio.play();
      setTimeout(function() {
        this.evaluateClick(letters, 'middle');
      }, 2000);
    });
    bottom.addEventListener("click",e => {
      console.log('bottom letter clicked');
      bottomAudio.play();
      setTimeout(function() {
        this.evaluateClick(letters, 'bottom');
      }, 2000);
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

  getRandLetters() {
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
    var values = new Array();
    values['top'] = t;
    values['middle'] = m;
    values['bottom'] = b;
    values['selection'] = selection;
    return values;
  }

  getOneRandomLetter() {
    return String.fromCharCode(Math.floor(Math.random() * (122 - 97)) + 97);
  }

  evaluateClick(letters, choice) {
    var correctAudio = new Audio('./audio/' + 'Good_job' + '.mp3');
    var incorrectAudio = new Audio('./audio/' + 'Please_try_again' + '.mp3');
    var correct = letters.selection;
    if (choice == correct) {
      
      correctAudio.play();
    } else {
      incorrectAudio.play();
    }


  }

} // Class CustomElement
customElements.define("alphabet-home", AlphabetHome);