
// H1 effect on hover
function flowText() {
  const text = document.querySelector('.title-name');
  const stringText = text.textContent;

  const splitText = stringText.split('');
  text.textContent = "";
  
  // break the h1 into individual spans
  for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += `<span>${splitText[i]}</span>`;
  }

  // flip the color to orange
  text.onmouseover = function () {
    let char = 0;
    let timer = setInterval(onTick, 100);

    function onTick() {
      // add/remove class until the all the characters have changed
      const span = text.querySelectorAll('span')[char];
      span.classList.add('fade');
      span.classList.remove('fadeBack');
      char++;
      if (char === splitText.length) {
        complete();
        return;
      }
    }

    function complete() {
      clearInterval(timer);
      timer = null;
    }
  };

  // flip the colour to blue/black
  text.onmouseout = function () {
    let char = 0;
    let timer = setInterval(onTick, 100);

    function onTick() {
      // add/remove class until the all the characters have changed
      const span = text.querySelectorAll('span')[char];
      span.classList.add('fadeBack');
      span.classList.remove('fade');
      char++;
      if (char === splitText.length) {
        complete();
        return;
      }
    }

    function complete() {
      clearInterval(timer);
      timer = null;
    }
  };
}

// Type Effect
function typeEffect() {
  const typedTextSpan = document.querySelector('.type-text');
  
  const textArray = ['Front-End Developer', 'UI Designer', 'Donut Connoisseur'];
  const typingDelay = 200;
  const erasingDelay = 100;
  const newTextDelay = 2000;
  let textArrayIndex = 0;
  let charIndex = 0;
  
  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      // start inserting the text one character at a time with a .2ms delay
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(erase, newTextDelay)
    }
  }
  
  function erase() {
    if (charIndex > 0) {
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    }
    else {
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 1100);
    }
  }
  
  setTimeout(type, newTextDelay);
};

// Smooth Scroll to Pages Effect
function smoothScroll() {
  //create an event listener on click on anchors
  $('a').on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();
      // cache value
      const MoveTo = this.hash;
      // Using smooth page scroll 
      $('html, body').animate({
        'scrollTop': $(MoveTo).offset().top
      }, 1000, function () {
        // default click behavior
        window.location.hash = MoveTo;
      });
    }
  });
};

// Pop-up for each Project Effect
function modalPopUp() {
  let infoToggle = document.getElementsByClassName('info-toggle');
  let close = document.getElementsByClassName('close');

  // loop through the infoToggle div to get each node
  Array.from(infoToggle).forEach((item) => {
    item.addEventListener('click', function () {
      // on click set the sibling class to active so only that specific modal is open
      this.nextElementSibling.classList.add('background-active');
    });
  });

  // loop through each close class to get each node
  Array.from(close).forEach((item) => {
    item.addEventListener('click', function () {
      // remove the background-active to whatever node is open to close the modal
      document.querySelector('.background-active').classList.remove('background-active');
    });
  });
};

// Active page on anchor click
function activeLink() {
  const list = document.querySelectorAll('.navbar li');

  // loop through to access each node
  list.forEach(items => {
    items.addEventListener('click', function () {
      // remove the current light class and add it to destinate id span
      document.querySelector('.light').classList.remove('light');
      this.querySelector('span').classList.add('light');
    });
  });
};

// Active page on scroll
function activeScroll() {
  // Create an event listener to the scroll to hightlight active
  window.addEventListener('scroll', function () {
    let home = document.getElementById('home').offsetTop;
    let about = document.getElementById('about-me').offsetTop;
    let skills = document.getElementById('skills').offsetTop;
    let projects = document.getElementById('projects').offsetTop;
    let contact = document.getElementById('contact').offsetTop;

    // if statement based on id tags of each section to add and remove light class
    if (window.scrollY >= home) {
      document.querySelector('.light').classList.remove('light');
      document.querySelector('span[data-page=home]').classList.add('light');
    }
    if (window.scrollY >= about) {
      document.querySelector('.light').classList.remove('light');
      document.querySelector('span[data-page=about]').classList.add('light');
    }
    if (window.scrollY >= skills) {
      document.querySelector('.light').classList.remove('light');
      document.querySelector('span[data-page=skills]').classList.add('light');
    }
    if (window.scrollY >= projects) {
      document.querySelector('.light').classList.remove('light');
      document.querySelector('span[data-page=projects]').classList.add('light');
    }
    if (window.scrollY >= contact) {
      document.querySelector('.light').classList.remove('light');
      document.querySelector('span[data-page=contact]').classList.add('light');
    }
  });
};

flowText();
smoothScroll();
typeEffect();
modalPopUp();
activeLink();
activeScroll();
