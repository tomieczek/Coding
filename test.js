// Please stay like this
const form = document.getElementById("form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const isValidEmail = (email) => {
  const re = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
  return re.test(String(email).toLowerCase());
};

const isValidPassword = (password) => {
  const check =
    /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}).*$/;
  return check.test(String(password));
};

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
};
const setSuccess = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.remove("error");
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  console.log(usernameValue);
  if (usernameValue == "" || usernameValue == null) {
    setError(username, "Username is required");
  } else {
    setSuccess(username, "");
  }
  if (emailValue == "" || emailValue == null) {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Email is not valid");
  } else {
    setSuccess(email, "");
  }
  if (passwordValue == "" || passwordValue == null) {
    setError(password, "Password is required");
  } else if (!isValidPassword(passwordValue)) {
    setError(
      password,
      "Password must have at least 6 characters, 1 capital letter and 1 number"
    );
  } else {
    setSuccess(password, "");
  }
  if (password2Value == "" || password2Value == null) {
    setError(password2, "Password is required");
  } else if (passwordValue !== password2Value) {
    setError(password2, "Doesn't match with Password");
  } else {setSuccess(password2, "")}
};

function toggleLanguage(id) {
  // Changes language to the other one
  const language = document.getElementById(id);
  if (language == "cz") {
    language;
  }
}
function togglePassword(id) {
  // Changes type input from password to text
  const element = document.getElementById(id);
  if (!element) {
    return;
  }
  if (element.type == "password") {
    element.type = "text";
  } else {
    element.type = "password";
  }
}
