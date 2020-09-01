const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();

    const lastName = document.querySelector("#lastName");
    const lastNameError = document.querySelector("#lastNameError");
    const lastNameValue = lastName.value;

  return checkInputLength(lastNameValue) ? lastNameError.style.display = "none" : lastNameError.style.display = "block";
}

const checkInputLength = value => value.trim().length >= 5 ? true : false;
