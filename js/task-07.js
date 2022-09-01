const inputChange = document.querySelector("input#font-size-control");
const textEl = document.querySelector("span#text");
inputChange.value = 16;
inputChange.addEventListener("input", onInputChange);


function onInputChange(event) { 
     textEl.style.fontSize = event.currentTarget.value + "px" ;
}

