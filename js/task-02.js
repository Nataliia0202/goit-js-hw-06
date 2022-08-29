const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.className = "item";
  itemEl.textContent = ingredient;
  return itemEl;
});

console.log(elements);

list.append(...elements);

// const list = document.querySelector("#ingredients");
// const newArrey = [];

// ingredients.forEach(ingredient => {
//   const itemEl = document.createElement("li");
//   itemEl.className = "item";
//   itemEl.textContent = ingredient;
//   newArrey.push(itemEl);
// });
// list.append(...newArrey);

// console.log(newArrey);