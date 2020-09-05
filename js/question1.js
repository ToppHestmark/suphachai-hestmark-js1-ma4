const form = document.querySelector("#contactForm");
form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();

    const lastNameValue = document.querySelector("#lastName").value;
    const lastNameError = document.querySelector("#lastNameError");

  return checkInputLength(lastNameValue) ? lastNameError.style.display = "none" : lastNameError.style.display = "block";
}

const checkInputLength = value => value.trim().length >= 5 ? true : false;