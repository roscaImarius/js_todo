const form = document.querySelector(".add");
const todos = document.querySelector(".todos");
const deleteBtn = document.querySelector(".delete");
const searchForm = document.querySelector(".search");
let header = document.querySelector("header");
const h4 = document.querySelector("h4");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let todoInput = form.add.value.trim();
  const todo = ` <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>${todoInput}</span>
            <i class="far fa-trash-alt fa-lg delete"></i>
          </li>`;
  if (todoInput.length) {
    todos.innerHTML += todo;
    form.reset();
  }
  if (Array.from(todos.children).length === 0) {
    h4.style.display = "block";
  } else {
    h4.style.display = "none";
  }
});

const remove = (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
  if (Array.from(todos.children).length === 0) {
    h4.style.display = "block";
  } else {
    h4.style.display = "none";
  }
};
todos.addEventListener("click", remove);

const filterTodos = (term) => {
  Array.from(todos.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(todos.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

searchForm.addEventListener("keyup", () => {
  const term = searchForm.search.value.trim().toLowerCase();
  filterTodos(term);
});
