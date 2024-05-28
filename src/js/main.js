const formEl = document.getElementById("formEl");
//console.log(formEl);
const itemInput = document.getElementById("itemInput");
//console.log(itemInput);
const addBtn = document.getElementById("addBtn");
//console.log(addBtn);
const listItem = document.getElementById("listItem");
console.log(listItem);
const deleteBtn = document.getElementsByClassName("deleteBtn");
//console.log(deleteBtn);

function addItem(e) {
  e.preventDefault();
  const inputValue = itemInput.value;
  //console.log(inputValue);

  if (inputValue) {
    const createList = document.createElement("li");
    createList.className =
      "flex items-center justify-between bg-gray-600 p-2 rounded text-white max-w-sm mx-auto mt-2 mb-7 capitalize hover:bg-gray-700";
    createList.textContent = inputValue;

    const createBtn = document.createElement("button");
    createBtn.className =
      "bg-red-600 w-10 p-2 rounded hover:bg-red-700 deleteBtn hover:font-extrabold";
    createBtn.innerText = "x";

    createList.append(createBtn);

    listItem.append(createList);

    formEl.reset();
  }
}

formEl.addEventListener("submit", addItem);
