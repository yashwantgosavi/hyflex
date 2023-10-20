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