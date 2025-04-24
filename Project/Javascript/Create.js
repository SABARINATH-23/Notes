let title = document.getElementById("title");
let content = document.getElementById("content");
let create = document.getElementById("btn");

let arr = [];

create.addEventListener("click", () => {
   obj = {
    title_value: title.value,
    content_value: content.value
  };
  arr.push(obj);
  console.log(arr);
});
