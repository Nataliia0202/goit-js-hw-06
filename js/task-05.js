

const refs = {
    textInput: document.querySelector("#name-input"),
    output: document.querySelector("#name-output"),
}
refs.textInput.addEventListener("input", event => {
    refs.output.textContent = event.currentTarget.value;

    if (event.currentTarget.value === "") {
        refs.output.textContent = "Anonymous";
    }
});

