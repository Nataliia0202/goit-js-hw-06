const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    const {
      elements: { email, password },
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }
    const user = { email: email.value, Password: password.value };

    console.log(user);
    event.currentTarget.reset();
}
