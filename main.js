const card = document.querySelectorAll(".card");
card.forEach((e) => {
  e.addEventListener("click", ActiveCard);
});

function ActiveCard() {
  card.forEach((em) => {
    em.classList.remove("active");
  });
  this.classList.add("active");
}
