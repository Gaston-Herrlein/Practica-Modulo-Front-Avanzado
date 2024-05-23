import { createUser } from "./register-model.js";
import {
  showError,
  hiddenError,
} from "../notification/notification-controller.js";

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
      hiddenError(notificationWrapper);
    }, 3000);
  }

  async function registerUser(register) {
    const email = register.querySelector("#in-email").value;
    const password = register.querySelector("#in-psw").value;

    try {
      await createUser(email, password);
      alert("Te has registrado correctamente");
      window.location.href = "login.html";
    } catch (error) {
      console.log(error);
    }
  }
}
