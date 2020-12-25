const getButton = document.querySelector(".btn");
const getName = document.querySelector(".Name input");
const getDate = document.querySelector(".Date input");
const getAmount = document.querySelector(".Amount input");
const getTr = document.querySelector(".table-btn");
const getDelet = document.querySelector(".delet-btn");

getButton.addEventListener("click", creatItems);
getTr.addEventListener("click", removeTr);

function creatItems() {
  //creat tr
  const newTr = document.createElement("tr");
  newTr.classList.add("newTr");
  getTr.appendChild(newTr);
  //creat td 1
  const firstTd = document.createElement("td");
  firstTd.innerText = getName.value;
  firstTd.classList.add("firstTd");
  newTr.appendChild(firstTd);

  //creat td 2
  const secondTd = document.createElement("td");
  secondTd.innerText = getDate.value;
  secondTd.classList.add("secondTd");
  newTr.appendChild(secondTd);
  //creat td 3
  const thirdTd = document.createElement("td");
  thirdTd.innerText = getAmount.value;
  thirdTd.classList.add("thirdTd");
  newTr.appendChild(thirdTd);
  // creat a button
  const newButton = document.createElement("button");
  newButton.classList.add("newButton");
  newButton.innerHTML = '<i class="fas fa-trash"></i>';
  newTr.appendChild(newButton);
  //aaaaaaaaaaaaaa
  getName.value = "";
  getDate.value = "";
  getAmount.value = "";
}

function removeTr(e) {
  const item = e.target;
  if (item.classList[0] === "newButton") {
    const todo = item.parentElement;
    todo.remove();
  }
}
