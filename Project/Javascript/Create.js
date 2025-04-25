let title = document.getElementById("title");
let content = document.getElementById("content");
let create = document.getElementById("btn");
let list = document.getElementById("list");
let all = document.getElementById("all");
let content_1 = document.getElementById("content_1");
let create_note = document.getElementById("create_Note");

let arr = [];
create.addEventListener("click", () => {
  obj = {
    title_value: title.value,
    content_value: content.value,
  };
  let di = document.createElement("div");
  list.append(di);

  let d = document.createElement("p");
  let d1 = document.createElement("p");
  di.append(d, d1);
  di.classList.add("list_1");
  arr.push(obj);
  d.textContent = `${obj.title_value}`;
  d1.textContent = `${obj.content_value}`;
  if (Object.length >= 1) {
    content_1.remove();
  }
  title.value = "";
  content.value = "";
});

create_note.addEventListener("click", () => {
  all.appendChild(content_1);
});
list.addEventListener("click", () => {
  all.classList.add("update_1");
  console.log(content_1)
  all.append(content_1)
  content_1.classList.add("update_2");
});
