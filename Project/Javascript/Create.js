let title = document.getElementById("title");
let content = document.getElementById("content");
let create = document.getElementById("btn");
let list = document.getElementById("list");

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
});
