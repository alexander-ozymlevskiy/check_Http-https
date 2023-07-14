// Запитуємо перше посилання
const firstLink = prompt("Введіть перше посилання:");

// Запитуємо друге посилання
const secondLink = prompt("Введіть друге посилання:");

// Створюємо кнопку і додаємо текст кнопки
const createButton = (link) => {
  const button = document.createElement("button");
  button.textContent = link;

  // Перевірка http/https
  const checkLink =
    link.startsWith("http://") || link.startsWith("https://")
      ? link
      : "http://" + link;

  // Обробник подій
  button.addEventListener("click", () => {
    window.open(checkLink, "_blank");
  });

  return button;
};

// Додаємо першу кнопку на сторінку
document.body.appendChild(createButton(firstLink));

// Додаємо другу кнопку на сторінку
document.body.appendChild(createButton(secondLink));
