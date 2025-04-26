let title = document.getElementById("title");
let content = document.getElementById("content");
let create = document.getElementById("btn");
let list = document.getElementById("list");
let all = document.getElementById("all");
let content_1 = document.getElementById("content_1");
let create_note = document.getElementById("create_Note");
let d2 = document.createElement("div");
let add = document.getElementById("addtask");

let id = 0;

let arr = [];
create.addEventListener("click", () => {
  obj = {
    id: id,
    title_value: title.value,
    content_value: content.value,
  };
  let di = document.createElement("div");
  di.id = `ref-${id}`;
  di.dataset.noteId = id;
  list.append(di);
  let d = document.createElement("p");
  let d1 = document.createElement("p");
  id++;
  di.append(d, d1);
  di.classList.add("list_1");

  arr.push(obj);

  d.textContent = `${obj.title_value}`;
  d1.textContent = `${obj.content_value}`;

  if (arr.length >= 1) {
    content_1.remove();
    title.value = "";
    content.value = "";
  }
});

create_note.addEventListener("click", () => {
  all.appendChild(content_1);
});

list.addEventListener("click", (e) => {
  let clickedDiv = e.target.closest("div.list_1");
  console.log(clickedDiv);

  if (clickedDiv) {
    let noteId = clickedDiv.dataset.noteId;
    let note = arr.find((item) => item.id == noteId);

    let d2 = document.createElement("div");
    d2.innerHTML = `
      <h2>${note.title_value}</h2>
      <button>Add Task</button>
      <button>Delete Note</button>
      <p>${note.content_value}</p>
    `;

    all.innerHTML = "";
    d2.classList.add("update_2");
    all.appendChild(d2);
  }
});
add.addEventListener("click", () => {
  console.log("added");
});
