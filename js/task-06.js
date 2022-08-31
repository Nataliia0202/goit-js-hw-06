
const textInput = document.querySelector("#validation-input");

const textInputLength = textInput.getAttribute("data-length");

console.log(textInputLength);

textInput.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length == textInputLength) {
        textInput.classList.add("valid");
        if (textInput.classList.contains("invalid")) {
        textInput.classList.remove("invalid");
        }
    } else {
        if (textInput.classList.contains("valid")) {
        textInput.classList.remove("valid");
        }
        textInput.classList.add("invalid");
    }
}