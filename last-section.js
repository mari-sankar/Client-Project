document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    let currentCardIndex = 0;
    let currentBackgroundIndex = 0;
    const backgrounds = [
        'url(/assets/PR-servives2.jpg)',
        'url(/assets/PR-servives.jpg)',
        'url(/assets/PR-servives2.jpg)'
    ];

    function updateUI() {
        cards.forEach((card, index) => {
            card.classList.remove('active');
            if (index === currentCardIndex) {
                card.classList.add('active');
            }
        });
        document.querySelector('.section').style.backgroundImage = backgrounds[currentBackgroundIndex];
        document.querySelector('.count').textContent = `${0}${currentCardIndex + 1}`;
    }

    updateUI();

    document.querySelector('.left').addEventListener('click', function() {
        if (currentCardIndex > 0) {
            currentCardIndex--;
            if (currentCardIndex < currentBackgroundIndex) {
                currentBackgroundIndex--;
            }
            updateUI();
        }
    });

    document.querySelector('.right').addEventListener('click', function() {
        if (currentCardIndex < cards.length - 1) {
            currentCardIndex++;
            if (currentCardIndex > currentBackgroundIndex) {
                currentBackgroundIndex++;
            }
            updateUI();
        }
    });
});
