function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



const inputNumber = document.querySelector("#controls>input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");



const createBoxes = (amount) => {
  const elementsArrey = [];
  for (let i = 0; i < amount; i++) {
    const divBlok = document.createElement("div");
    divBlok.style.height = `${30 + 10 * i}px`;
    divBlok.style.width = `${30 + 10 * i}px`;
    divBlok.style.background = getRandomHexColor();
    elementsArrey.push(divBlok);
  }
  return elementsArrey;
};

const destroyBoxes = () => {
  boxes.innerHTML = "";
};

btnCreate.addEventListener("click", () => {
  let boxesToAdd = createBoxes(inputNumber.value);
  boxes.append(...boxesToAdd);
});

console.log(inputNumber.value);

btnDestroy.addEventListener("click", () => {
  destroyBoxes.call();
});