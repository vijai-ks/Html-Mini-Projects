// DOM Elements

const loginForm = document.querySelector(".loginForm");
const mainLoginButton = document.querySelector(".login-button");
const registerForm = document.querySelector(".register-form");
const mainRegisterButton = document.querySelector(".register-button");

mainLoginButton.addEventListener("click", () => {
  loginForm.classList.add("login-form-box");
});

mainRegisterButton.addEventListener("click", () => {
  loginForm.classList.remove("login-form-box");
  registerForm.classList.add("register-form-box");
});
