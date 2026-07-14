const cards = document.querySelectorAll('.species-card');
const counter = document.querySelector('.counter');
let counter = 0;
cards.forEach(card => {
    card.addEventListener("click", () => {

        if (!card.classList.contains("active")) {
            card.classList.add("active");
            count++;
            counter.textContent = count;
        }

    });
});
