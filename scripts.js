const app = {};

// H1 effect on hover
app.flowText = function() {
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
};

// Type Effect
app.typeEffect = function() {
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

// Pop-up for each Project Effect
app.modalPopUp = function() {
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
app.activeLink = function() {
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
app.activeScroll = function() {
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

// Create a mobile nav view
app.mobileNav = function() {
  const hamburger = document.querySelector('.mobile');
  const nav = document.querySelector('nav');
  const desktopNav = document.querySelector('.desktop-nav');
  const topLine = document.querySelector('.mobile-bars span:nth-of-type(1)');
  const middleLine = document.querySelector('.mobile-bars span:nth-of-type(2)');
  const bottomLine = document.querySelector('.mobile-bars span:nth-of-type(3)');
  const list = document.querySelectorAll('.navbar li');

  // toggle the nav class and transform the hamburger
  hamburger.addEventListener('click', function () {
    nav.classList.toggle('visible');
    desktopNav.classList.toggle('open');
    topLine.classList.toggle('line1');
    middleLine.classList.toggle('line2');
    bottomLine.classList.toggle('line3');

    // remove all classes if a list item anchor is clicked
    list.forEach(items => {
      items.addEventListener('click', function () {
        nav.classList.remove('visible');
        desktopNav.classList.remove('open');
        topLine.classList.remove('line1');
        middleLine.classList.remove('line2');
        bottomLine.classList.remove('line3');
      });
    });
  });
};

app.init = function() {
  app.flowText();
  app.typeEffect();
  app.modalPopUp();
  app.activeLink();
  app.activeScroll();
  app.mobileNav();
}

document.addEventListener('DOMContentLoaded', function() {
  app.init();
})