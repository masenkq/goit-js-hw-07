// 1. Знаходимо елементи в документі
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

// 2. Додаємо обробник події input
// Чому саме input, а не change?

// input — реагує миттєво на кожен символ, введений або видалений.
// change — спрацює лише після того, як користувач вийде з інпуту (клікне в інше місце).
nameInput.addEventListener("input", () => {
  // 3. Отримуємо значення інпуту і прибираємо зайві пробіли
  const trimmedValue = nameInput.value.trim();
// nameInput.value — отримує текст, який користувач ввів у поле.
        // trim() — метод, який прибирає пробіли з початку і кінця тексту:
        
  // 4. Оновлюємо текст у span, якщо є текст — підставляємо його, якщо ні — "Anonymous"
  nameOutput.textContent = trimmedValue !== "" ? trimmedValue : "Anonymous";
});
