let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let num1 = 10;
  let num2 = parseInt(document.getElementById("num2").value);
  let heading = document.getElementById("heading");
  heading.innerText = `two Products Quantity is ${num1 * num2}`;
});
