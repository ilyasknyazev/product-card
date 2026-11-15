const message = document.getElementById("message");
const getAllButton = document.getElementById("getAll");
const deleteAllButton = document.getElementById("deleteAll");
const usersContainer = document.getElementById("userContainer");

function showMessage(msg) {
  message.textContent = msg;
  message.style.display = "block";
}

function hideMessage() {
  message.style.display = "none";
}

function renderUsers(users) {
  usersContainer.innerHTML = "";

  if (users.length === 0) {
    usersContainer.textContent = "Нет данных для отображения.";
    return;
  }

  hideMessage();

  users.forEach((user) => {
    const userCard = document.createElement("div");

    userCard.classList.add("user-card");
    userCard.innerHTML = `
        <p>ID: ${user.id}</p>
        <h3>${user.name} ${user.surname}</h3>
        <p>Age: ${user.age}</p>
        <p>Email: ${user.email}</p>
        <button class="delete-card" data-user-id="${user.id}">Удалить</button>
        `;
    usersContainer.appendChild(userCard);
  });
}

async function loadUsers() {
  try {
    showMessage("Данные загружаются...");

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await fetch("./users.json");
    if (!response.ok) {
      throw new Error("Ошибка при загрузке данных");
    }

    const data = await response.json();

    if (!Array.isArray(data.users)) {
      throw new Error("Некорректный формат данных");
    }

    localStorage.setItem("users", JSON.stringify(data.users));
    renderUsers(data.users);
  } catch (error) {
    console.error(error);

    showMessage("Ошибка при загрузке данных");
  }
}

function init() {
  const savedUsers = localStorage.getItem("users");

  if (savedUsers !== null) {
    try {
      const users = JSON.parse(savedUsers);

      if (!Array.isArray(users)) {
        throw new Error("Некорректный формат данных в localStorage");
      }

      renderUsers(users);
    } catch (error) {
      console.error(error);
      showMessage("Ошибка при загрузке данных");
    }
  } else {
    loadUsers();
  }
}

usersContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-card")) {
    const userId = Number(event.target.dataset.userId);
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.filter((user) => user.id !== userId);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    renderUsers(updatedUsers);
  }
});

deleteAllButton.addEventListener("click", () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.length === 0) {
    showMessage("Нет данных для удаления");
    return;
  }

  localStorage.removeItem("users");
  renderUsers([]);
  showMessage("Все данные удалены");
});

getAllButton.addEventListener("click", () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const cards = usersContainer.querySelectorAll(".user-card");
  if (cards.length === users.length && users.length > 0) {
    showMessage("Все данные уже отображены");
    return;
  }

  if (users.length === 0) {
    showMessage("Нет данных для отображения");
    return;
  }

  renderUsers(users);
});

init();
