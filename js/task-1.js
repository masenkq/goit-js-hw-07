// Знаходимо список категорій
const categoriesList = document.querySelector("#categories");

// Знаходимо всі елементи з класом "item"
const categoryItems = categoriesList.querySelectorAll(".item");

// Виводимо кількість категорій
console.log(`Number of categories: ${categoryItems.length}`);

// Ітеруємося по кожній категорії
categoryItems.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const itemsCount = item.querySelectorAll("ul li").length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${itemsCount}`);
});
