// H1 effect on load
// const text = document.querySelector('.title-name');
// const stringText = text.textContent;

// const splitText = stringText.split('');
// // console.log(splitText);
// text.textContent = "";

// for (let i=0; i < splitText.length; i++) {
//   text.innerHTML += `<span>${splitText[i]}</span>`;
// }

// let char = 0;
// let timer = setInterval(onTick, 100);

// function onTick() {
//   const span = text.querySelectorAll('span')[char];
//   span.classList.add('fade');
//   char++;
//   if (char === splitText.length) {
//     complete();
//     return;
//   }
// }

// function complete() {
//   clearInterval(timer);
//   timer = null;
// }


// Mouse Over Effect on h1
// $('.title-name')
//   .mouseenter( function() {
//     const text = document.querySelector('.title-name');
//     const stringText = text.textContent;

//     const splitText = stringText.split('');
//     // console.log(splitText);
//     text.textContent = "";

//     for (let i = 0; i < splitText.length; i++) {
//       text.innerHTML += `<span>${splitText[i]}</span>`;
//     }

//     let char = 0;
//     let timer = setInterval(onTick, 100);

//     function onTick() {
//       const span = text.querySelectorAll('span')[char];
//       span.classList.add('fade');
//       span.classList.remove('fadeBack');
//       char++;
//       if (char === splitText.length) {
//         complete();
//         return;
//       }
//     }

//     function complete() {
//       clearInterval(timer);
//       timer = null;
//     }
//   })
//   .mouseleave(function () {
//     const text = document.querySelector('.title-name');

//     let char = 0;
//     let timer = setInterval(onTick, 100);

//     function onTick() {
//       const span = text.querySelectorAll('span')[char];
//       console.log(span);
//       span.classList.add('fadeBack');
//       span.classList.remove('fade');
//       char++;
//       if (char === splitText.length) {
//         complete();
//         return;
//       }
//     }

//     function complete() {
//       clearInterval(timer);
//       timer = null;
//     }
//   });


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

  Array.from(infoToggle).forEach((item) => {
    item.addEventListener('click', function () {
      this.nextElementSibling.classList.add('background-active');
    });
  });

  Array.from(close).forEach((item) => {
    item.addEventListener('click', function () {
      document.querySelector('.background-active').classList.remove('background-active');
    });
  });
};

// Active page on anchor click
function activeLink() {
  const list = document.querySelectorAll('.navbar li');

  list.forEach(items => {
    items.addEventListener('click', function () {
      document.querySelector('.light').classList.remove('light');
      this.querySelector('span').classList.add('light');
    });
  });
}

smoothScroll();
typeEffect();
modalPopUp();
activeLink();

window.addEventListener('scroll', function () {
  let nav = document.querySelectorAll('.navbar span');
  // let fromTop = window.scrollY;

  nav.forEach(items => {
    // let section = document.querySelector(items.hash);
    console.log(items);
    // if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {

    //   items.classList.add('light');

    // } else {

    //   items.classList.remove('light');

    // }
  })
});
