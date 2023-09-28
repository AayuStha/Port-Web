
// animate on scroll library function
AOS.init();


// put theme into local storage
let theme = localStorage.getItem('theme');

if (theme == null) {
  setTheme('light');
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');

for (let i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener('click', function () {
    let mode = this.dataset.mode;
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == 'light') {
    document.getElementById('theme-style').href = 'default.css';
  }

  if (mode == 'blue') {
    document.getElementById('theme-style').href = 'blue.css';
  }

  if (mode == 'green') {
    document.getElementById('theme-style').href = 'green.css';
  }

  if (mode == 'purple') {
    document.getElementById('theme-style').href = 'purple.css';
  }
  if (mode == 'code') {
    document.getElementById('theme-style').href = 'code.css';
  }

  localStorage.setItem('theme', mode);
}

/**
 * Name element (a tag with "Aayush") related code
 */
const nameElement = document.getElementById('first_name');
nameElement.addEventListener('mouseenter', () => {
  nameElement.innerHTML = 'Aayush🔊';
});
nameElement.addEventListener('mouseleave', () => {
  nameElement.innerHTML = 'आयुष';
});
nameElement.addEventListener('click', () => {
  const audioFile = new Audio('./transkate_tts.mp3');
  audioFile.play();
});


// disable developer mode
document.onkeydown = function (e) {
  if (e.keyCode == 123) {
      return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
      return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
      return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
      return false;
  }
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
      return false;
  }
}



