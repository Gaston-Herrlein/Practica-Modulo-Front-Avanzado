import { createUser } from "./register-model.js";
import {
  showError,
  hiddenMessage,
  showSuccess,
} from "../notification/notification-controller.js";
import { showSpinner, hiddenSpinner } from "../spinner/spinnerrController.js";

export function registerController() {
  const register = document.getElementById("form-register");

  register.addEventListener("submit", (event) => {
    event.preventDefault();

    handleRegisterFormSubmit(register);
  });

  function handleRegisterFormSubmit(register) {
    let notification = { errors: {} };

    if (!isEmailValid(register)) {
      Object.assign(notification.errors, {
        email: "El email no tiene un formato correcto.",
      });
    }

    if (!arePasswordsEqual(register)) {
      Object.assign(notification.errors, {
        psw: "Las contraseñas no son iguales.",
      });
    }

    if (Object.keys(notification.errors).length === 0) {
      registerUser(register);
    } else {
      showFormErrors(notification.errors);
    }
  }

  function isEmailValid(signupForm) {
    const email = signupForm.querySelector("#in-email");
    const emailRegExp = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
    );

    return emailRegExp.test(email.value);
  }

  function arePasswordsEqual(signupForm) {
    const password = signupForm.querySelector("#in-psw");
    const passwordConfirmation = signupForm.querySelector("#confirm-psw");

    return password.value === passwordConfirmation.value;
  }

  function showFormErrors(errors) {
    const notificationWrapper = document.querySelector("#notification-wrapper");
    showError(notificationWrapper, errors);

    setTimeout(() => {
      hiddenMessage(notificationWrapper);
    }, 3000);
  }

  function showCreateSuccess(message) {
    const notificationWrapper = document.querySelector("#notification-wrapper");
    showSuccess(notificationWrapper, message);

    setTimeout(() => {
      hiddenMessage(notificationWrapper);
      window.location.href = "login.html";
    }, 2000);
  }

  async function registerUser(register) {
    const email = register.querySelector("#in-email").value;
    const password = register.querySelector("#in-psw").value;

    const spinnerWrapp = document.querySelector("#spinner-wrapper");
    showSpinner(spinnerWrapp);

    try {
      await createUser(email, password);
      hiddenSpinner(spinnerWrapp);
      showCreateSuccess("Usuario creado correctamente");
    } catch (error) {
      hiddenSpinner(spinnerWrapp);
      showFormErrors({ message: error.message });
    }
  }
}
