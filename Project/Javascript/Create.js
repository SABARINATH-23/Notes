let title = document.getElementById("title");
let content = document.getElementById("content");
let create = document.getElementById("btn");
let list = document.getElementById("list");
let all = document.getElementById("all");
let content_1 = document.getElementById("content_1");
let create_note = document.getElementById("create_Note");
let d2 = document.createElement("div");
let insert = document.createElement("div");
let insert_in = document.createElement("div");
let t2 = document.createElement("div");

let id = 0;

let arr = [];
let a = create.addEventListener("click", () => {
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

function renderNotes() {
  list.innerHTML = "";
  arr.forEach((obj) => {
    let di = document.createElement("div");
    di.id = `ref-${obj.id}`;
    di.dataset.noteId = obj.id;
    // di.classList.add("list_1");

    // let d = document.createElement("p");
    // let d1 = document.createElement("p");
    // d.textContent = `${obj.title_value}`;
    // d1.textContent = `${obj.content_value}`;
    list.append(di);
    d2.remove();
  });
}

list.addEventListener("click", (e) => {
  let clickedDiv = e.target.closest("div.list_1");

  if (clickedDiv) {
    let noteId = clickedDiv.dataset.noteId;
    let note = arr.find((item) => item.id == noteId);

    let d2 = document.createElement("div");
    d2.innerHTML = `
      <h2>${note.title_value}</h2>
       <button id ="remove" >Delete Note</button>
      <button id="add">Add Task</button>
      <p id="note_content">${note.content_value}</p>
    `;
    all.innerHTML = "";
    d2.classList.add("update_2");
    all.appendChild(d2);

    let add = document.getElementById("add");
    add.addEventListener("click", () => {
      insert_in.innerHTML = `
      <input type="text" placeholder = "Enter Task" id="task_list"/>
      <button id="note_content_1">Add Task</button>
      `;
      d2.append(insert);
      insert.classList.add("insert");
      insert_in.classList.add("insert_1");
      insert.append(insert_in);

      let note_content_1 = document.getElementById("note_content_1");
      let t2 = document.createElement("div");
      t2.innerHTML = `
      <h3>Task List</h3>
      <ul type="circle" id="unoredList">
      </ul>
      `;
      note_content_1.addEventListener("click", () => {
        let tl = document.getElementById("task_list");
        let note_content = document.getElementById("note_content");

        note_content.append(t2);
        let unoredList = document.getElementById("unoredList");
        let li = document.createElement("li");
        li.innerText = tl.value;
        unoredList.appendChild(li);
      });
    });
    let remove = document.getElementById("remove");
    remove.addEventListener("click", () => {
      let noteId = clickedDiv.dataset.noteId;
      let noteIndex = arr.find((item) => item.id == noteId);
      let i = noteIndex.id;
      arr.splice(i, 1);
      renderNotes();
    });
  }
});
