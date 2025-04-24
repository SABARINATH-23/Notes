let title = document.getElementById("title");
let content = document.getElementById("content");
let create = document.getElementById("btn");


let arr = [];

create.addEventListener("click", () => {
   obj = {
    title_value: title.value,
    content_value: content.value
  };
  let li = document.getElementById("list")
  let d = document.createElement("p");
  let d1 = document.createElement("p")
  li.append(d,d1)
 
  arr.push(obj);
    d.textContent = `${obj.title_value}`
    d1.textContent = `${obj.content_value}`
 li.classList.add("list")
});
