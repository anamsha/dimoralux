const petalsLayer =
  document.querySelector(".floating-petals");

for (let i = 0; i < 18; i++) {

  const petal =
    document.createElement("span");

  petal.classList.add("petal");

  petal.textContent =
    Math.random() > 0.5 ? "♥" : "❀";

  petal.style.left =
    `${Math.random() * 100}%`;

  petal.style.fontSize =
    `${16 + Math.random() * 18}px`;

  petal.style.animationDuration =
    `${12 + Math.random() * 12}s`;

  petal.style.animationDelay =
    `${Math.random() * 8}s`;

  petalsLayer.appendChild(petal);
}
