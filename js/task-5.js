function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


// Знаходимо елементи: кнопку, спан для кольору і body
const changeColorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
const body = document.body;

// Додаємо обробник події кліку на кнопку
changeColorButton.addEventListener("click", () => {
  // Генеруємо випадковий колір
  const randomColor = getRandomHexColor();

  // Змінюємо колір фону body
  body.style.backgroundColor = randomColor;

  // Виводимо значення кольору у спан
  colorSpan.textContent = randomColor;
});
