let title = document.getElementById("title");
let content = document.getElementById("content");
let create = document.getElementById("btn");
let ll = document.getElementById("btn_1");
let nav = document.getElementById("nav");
let title_value = "",
  content_value = "";
title.addEventListener("change", () => {
  let a = title.value;
  title_value = a;
});
content.addEventListener("change", () => {
  let b = content.value;
  content_value = b;
});

create.addEventListener("click", () => {
  let div_container = document.createElement("ol");
  div_container.innerHTML = `
      <li>${title_value}</li>
      <li>${content_value}</li>
   `;
  div_container.classList.add("list_items");
  nav.after(div_container);
});
