/* const listItem = document.getElementById("listItem");

console.time("normalway"); //to check code runtime
const fragment = document.createDocumentFragment();

for (let i = 1; i <= 1000; i++) {
  const li = document.createElement("li");
  li.className =
    "flex items-center justify-between bg-gray-600 p-2 rounded text-white max-w-sm mx-auto mt-2 mb-7 capitalize hover:bg-gray-700";
  li.innerText = `This Is New Item No: ${i}`;
  const btn = document.createElement("button");
  btn.className =
    "bg-red-600 w-10 p-2 rounded hover:bg-red-700 deleteBtn hover:font-extrabold";
  btn.innerText = "x";
  li.append(btn);
  fragment.append(li);
}
listItem.append(fragment);
console.timeEnd("normalway"); //to check code runtime
 */
