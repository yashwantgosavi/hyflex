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
