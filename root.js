/**
 * Carpeta raiz donde estan alojados los manejadores de eventos globales
 */

import { logOutController } from "./logout/logout-controller.js";
import { headerController } from "./shared/header/header-controller.js";

// function handleRegisterButton() {
//   const navBarRegister = document.getElementById("register");
//   if (navBarRegister) {
//     navBarRegister.addEventListener("click", () => {
//       window.location.href = "register.html";
//     });
//   }
// }

// function handleLoginButton() {
//   const navBarLogin = document.getElementById("login");
//   if (navBarLogin) {
//     navBarLogin.addEventListener("click", () => {
//       window.location.href = "login.html";
//     });
//   }
// }

// function handleCloseSessionButton() {
//   const navBarClose = document.getElementById("closeSession");
//   if (navBarClose) {
//     navBarClose.addEventListener("click", () => {
//       logOutController();
//       alert("closed session");
//       window.location.href = "index.html";
//     });
//   }
// }

document.addEventListener("DOMContentLoaded", () => {
  headerController();
  // handleRegisterButton();
  // handleLoginButton();
  // handleCloseSessionButton();
});
