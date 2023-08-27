function validatePassword() {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const errorMessage = document.getElementById("error-message");
  const submitBtn = document.getElementById("submit");
  if (
    password !== "" &&
    confirmPassword !== "" &&
    password !== confirmPassword
  ) {
    errorMessage.textContent = "Passwords don't match.";
    errorMessage.style.cssText = "color: #9E1B32; font-size: 0.8rem;";
    submitBtn.disabled = true;
  } else {
    errorMessage.textContent = "";
    submitBtn.disabled = false;
  }
}
