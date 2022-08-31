const inputChange = document.querySelector("input#font-size-control");
const textEl = document.querySelector("span#text");

inputChange.addEventListener("change", onInputChange);


function onInputChange(event) {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
}

