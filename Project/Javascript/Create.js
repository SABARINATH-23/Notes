let title = document.getElementById("title");
let content = document.getElementById("content");
let create = document.getElementById("btn");
let list = document.getElementById("list");
let all = document.getElementById("all");
let content_1 = document.getElementById("content_1");
let create_note = document.getElementById("create_Note");

let id = 0;
let arr = [];

// Create note
create.addEventListener("click", () => {
  let obj = {
    id: id,
    title_value: title.value,
    content_value: content.value,
  };

  arr.push(obj);
  renderNotes();
  title.value = "";
  content.value = "";

  if (arr.length === 1 && content_1.parentElement) {
    content_1.remove();
  }

  id++;
});

// Show note creation form
create_note.addEventListener("click", () => {
  if (!all.contains(content_1)) {
    all.appendChild(content_1);
  }
});

// Render notes list
function renderNotes() {
  list.innerHTML = "";

  arr.forEach((obj) => {
    let di = document.createElement("div");
    di.id = `ref-${obj.id}`;
    di.dataset.noteId = obj.id;
    di.classList.add("list_1");

    let d = document.createElement("p");
    let d1 = document.createElement("p");

    d.textContent = obj.title_value;
    d1.textContent = obj.content_value;

    di.append(d, d1);
    list.appendChild(di);
  });

  if (arr.length === 0) {
    open("./Home.html", "_self");
  }
}

// Handle note selection
list.addEventListener("click", (e) => {
  let clickedDiv = e.target.closest("div.list_1");

  if (clickedDiv) {
    let noteId = parseInt(clickedDiv.dataset.noteId);
    let note = arr.find((item) => item.id === noteId);

    if (!note) return;

    let d2 = document.createElement("div");
    d2.innerHTML = `
      <h2>${note.title_value}</h2>
      <button id="add">Add Task</button>
      <button id="remove">Delete Note</button>
      <p id="note_content">${note.content_value}</p>
    `;
    d2.classList.add("update_2");

    all.innerHTML = "";
    all.appendChild(d2);

    // Add task button
    let add = d2.querySelector("#add");
    add.addEventListener("click", () => {
      let insert = document.createElement("div");
      insert.classList.add("insert");

      let insert_in = document.createElement("div");
      insert_in.classList.add("insert_1");

      insert_in.innerHTML = `
        <input type="text" placeholder="Enter Task" id="task_list"/>
        <button id="note_content_1">Add Task</button>
      `;
      insert.appendChild(insert_in);
      d2.appendChild(insert);

      let note_content_1 = insert_in.querySelector("#note_content_1");

      note_content_1.addEventListener("click", () => {
        let tl = insert_in.querySelector("#task_list");
        let note_content = d2.querySelector("#note_content");

        let taskList = d2.querySelector(".task_list");
        if (!taskList) {
          taskList = document.createElement("div");
          taskList.classList.add("task_list");
          taskList.innerHTML = `
            <h3>Task List</h3>
            <ul type="circle" id="unoredList"></ul>
          `;
          note_content.appendChild(taskList);
        }

        let unoredList = taskList.querySelector("#unoredList");
        let li = document.createElement("li");
        li.innerText = tl.value;
        li.classList.add("list");
        unoredList.appendChild(li);

        insert.remove();
      });
    });

    // Delete note button
    let remove = d2.querySelector("#remove");
    remove.addEventListener("click", () => {
      let noteIndex = arr.findIndex((item) => item.id === noteId);
      if (noteIndex > -1) {
        arr.splice(noteIndex, 1);
        renderNotes();
        all.innerHTML = ""; // Clear the detailed view
      }
    });
  }
});
