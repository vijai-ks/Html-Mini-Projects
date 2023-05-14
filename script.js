const loginForm = document.querySelector(".login-form");
const mainLoginButton = document.querySelector(".login-button");

mainLoginButton.addEventListener("click", () => {
  loginForm.classList.add("login-form-box");
});
