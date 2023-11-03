// text fading
// const $paragraph = $("p, a, button, h1, h2, h3, h4,h5,h6, img,span");
// $(window).scroll(function() {
//   $paragraph.each(function() {
//     const paragraphMiddle = $(this).offset().top + 0.5 * $(this).height();
//     const windowBottom = $(window).scrollTop() + $(window).height();
//     if (paragraphMiddle < windowBottom) {
//       $(this).addClass("slideIn");
//     }
//   });
// });
// $(window).scroll();



let cards = document.querySelectorAll('#accordionExample .card');

cards.forEach(card => {
    card.addEventListener('click', function () {
        console.log('hello');
        // Remove the 'blue' class from all cards
        cards.forEach(card => {
            card.classList.remove('blue');
        });

        // Add the 'blue' class to the clicked card
        this.classList.add('blue');
    });
});


// faq toggle

document.querySelectorAll('.faq-card').forEach(card => {
    const question = card.querySelector('.question');
    const answer = card.querySelector('.answer');
    const icon = card.querySelector('.icon');
    const toggle = card.querySelector('.toggle');
    const h2 = card.querySelector('h2');
    const p = card.querySelector('p');

    let defaultIconColor = icon.style.color;
    let defaultCardColor = card.style.backgroundColor;
    let defaultH2Color = h2.style.color;
    let defaultPColor = p.style.color;
    let defaultToggleColor = toggle.style.backgroundColor; // Store the default toggle color

    question.addEventListener('click', () => {
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            icon.textContent = '+';
            icon.style.color = defaultIconColor;
            card.style.backgroundColor = 'white';
            h2.style.color = defaultH2Color;
            p.style.color = defaultPColor;
            toggle.style.backgroundColor = defaultToggleColor; // Restore the default toggle color
        } else {
            answer.style.display = 'block';
            icon.textContent = '-';
            icon.style.color = '#524FD5';
            toggle.style.backgroundColor = '#fff'; // Change toggle background color to the specified color
            card.style.backgroundColor = '#524FD5';
            h2.style.color = 'white';
            p.style.color = 'white';
        }
    });
});



// smooth scroll
var navMenuAnchorTags = document.querySelectorAll(".navbar-nav a");

for (var i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener("click", function(event) {
      event.preventDefault();
      var targetSectionID = this.textContent.trim().toLowerCase();
      var targetSection = document.getElementById(targetSectionID);
      console.log(targetSection);
      var interval = setInterval(function() {
        var targetSectionCoordinates = targetSection.getBoundingClientRect();
        if (targetSectionCoordinates.top <= 0) {
          clearInterval(interval);
          return;
        }
        window.scrollBy(0, 50);
      }, 20);
    });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelector(".cards");
    const cardWidth = document.querySelector(".card").offsetWidth;
    const sliderContainer = document.querySelector(".slider-container");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");

    let currentIndex = 0;

    // Next button
    nextButton.addEventListener("click", () => {
        if (currentIndex < cards.children.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Wrap around to the first card
        }

        const offset = -currentIndex * cardWidth;
        sliderContainer.style.transform = `translateX(${offset}px)`;
    });

    // Previous button
    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = cards.children.length - 1; // Wrap around to the last card
        }

        const offset = -currentIndex * cardWidth;
        sliderContainer.style.transform = `translateX(${offset}px)`;
    });
});
