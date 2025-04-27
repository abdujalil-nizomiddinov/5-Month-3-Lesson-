const addTodoBtn = document.getElementById("addTodo");
const addnameBtn = document.getElementById("addname");
const errorMessage_btn = document.getElementById("errorMessage-btn");
const todoInput = document.getElementById("todoInput");
const nameInput = document.getElementById("nameInput");
const todoList = document.getElementById("todoList");
const errorMessage = document.getElementById("errorMessage");

todoInput.addEventListener("input", function () {
  if (todoInput.value.trim().length >= 1) {
    todoInput.classList.add("lime");
  } else {
    todoInput.classList.remove("lime");
  }
});

nameInput.addEventListener("input", function () {
  if (nameInput.value.trim().length >= 1) {
    nameInput.classList.add("lime");
  } else {
    nameInput.classList.remove("lime");
  }
});

addnameBtn.addEventListener("click", function () {
  addname();
});

addTodoBtn.addEventListener("click", function () {
  addTodo();
});

nameInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addname();
  }
});

todoInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});

function addname() {
  const todoText = nameInput.value.trim();
  if (todoText === "") {
    if (errorMessage.classList.contains("flex")) {
      console.log("");
    } else {
      showErrorMessage();
    }
  } else {
    const li = document.createElement("li");
    li.classList.add(
      "flex",
      "items-center",
      "justify-between",
      "p-2",
      "bg-gray-200",
      "rounded-md"
    );
    li.innerHTML = `
      <strong>Salom ${todoText}</strong>
      <button class="text-red-500 cursor-pointer" onclick="deleteTodo(this)">O'chirish</button>
    `;
    todoList.appendChild(li);
    nameInput.value = "";
    nameInput.classList.remove("lime");
    nameInput.focus();
  }
}

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText === "") {
    if (errorMessage.classList.contains("flex")) {
      console.log("");
    } else {
      showErrorMessage();
    }
  } else {
    const li = document.createElement("li");
    li.classList.add(
      "flex",
      "items-center",
      "justify-between",
      "p-2",
      "bg-gray-200",
      "rounded-md"
    );
    li.innerHTML = `
      <span>${todoText}</span>
      <button class="text-red-500 cursor-pointer" onclick="deleteTodo(this)">O'chirish</button>
    `;
    todoList.appendChild(li);
    todoInput.value = "";
    todoInput.classList.remove("lime");
    todoInput.focus();
  }
}

function deleteTodo(button) {
  const todoItem = button.parentElement;
  todoItem.remove();
}

function showErrorMessage() {
  errorMessage.classList.remove("hidden");
  setTimeout(() => {
    errorMessage.classList.remove("opacity-0");
  }, 100);
  errorMessage.classList.add("flex");
  const end = setTimeout(() => {
    errorMessage.classList.add("opacity-0");
    setTimeout(() => {
      errorMessage.classList.remove("flex");
      errorMessage.classList.add("hidden");
    }, 200);
  }, 3000);
  errorMessage_btn.addEventListener("click", function () {
    errorMessage.classList.remove("flex");
    errorMessage.classList.add("hidden");
    clearInterval(end);
  });
}
const btn_1 = document.querySelector("#btn_1");
const btn_2 = document.querySelector("#btn_2");
const btn_3 = document.querySelector("#btn_3");

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

btn_1.addEventListener("click", () => {
  changebtn(btn_1);
});
btn_2.addEventListener("click", () => {
  changebtn(btn_2);
});
btn_3.addEventListener("click", () => {
  changebtn(btn_3);
});

function changebtn(btn) {
  btn.style.backgroundColor = getRandomColor();
}
