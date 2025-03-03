// Знаходимо форму за класом "login-form"
const loginForm = document.querySelector(".login-form");

// Прив'язуємо до форми подію submit
loginForm.addEventListener("submit", (event) => {

  // Блокуємо типове перезавантаження сторінки
  event.preventDefault();

  // Отримуємо дані з полів форми, обрізаючи зайві пробіли
  const email = loginForm.elements.email.value.trim();
  const password = loginForm.elements.password.value.trim();

  // Перевіряємо, чи обидва поля заповнені
  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return; // Зупиняємо виконання функції, щоб не продовжувати
  }

  // Створюємо об'єкт із даними
  const formData = {
    email: email,
    password: password,
  };

  // Виводимо об'єкт у консоль
  console.log(formData);

  // Очищаємо поля форми
  loginForm.reset();
});
