/**
 * Carpeta raiz donde estan alojados los manejadores de eventos globales
 */

function handleRegisterButton() {
  const navBarRegister = document.getElementById("register");
  if (navBarRegister) {
    navBarRegister.addEventListener("click", () => {
      window.location.href = "register.html";
    });
  }
}

function handleLoginButton() {
  const navBarLogin = document.getElementById("login");
  if (navBarLogin) {
    navBarLogin.addEventListener("click", () => {
      window.location.href = "login.html";
    });
  }
}

function handleCloseSessionButton() {
  const navBarClose = document.getElementById("closeSession");
  if (navBarClose) {
    navBarClose.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  handleRegisterButton();
  handleLoginButton();
  handleCloseSessionButton();
});
