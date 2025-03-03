function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  const newBoxes = [];
  
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10; // Збільшуємо розмір кожного елемента
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px'; // Додаємо відступ між квадратами
    newBoxes.push(box);
  }
  
  // Додаємо всі нові елементи в контейнер за одну операцію
  boxesContainer.append(...newBoxes);
}

// Функція для очищення колекції елементів
function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; // Очищаємо вміст контейнера
}

// Обробник подій для кнопки Create
document.querySelector('[data-create]').addEventListener('click', () => {
  const input = document.querySelector('input');
  const amount = parseInt(input.value, 10);

  if (amount >= 1 && amount <= 100) {
    destroyBoxes(); // Очищаємо попередні елементи перед створенням нових
    createBoxes(amount);
    input.value = ''; // Очищаємо значення в input
  } else {
    alert('Введіть число від 1 до 100');
  }
});

// Обробник подій для кнопки Destroy
document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);
