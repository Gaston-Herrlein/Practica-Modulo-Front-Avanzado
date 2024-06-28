import { loginUser } from "./login-model.js";
import {
  showError,
  hiddenMessage,
  showSuccess,
} from "../notification/notification-controller.js";
import { showSpinner, hiddenSpinner } from "../spinner/spinnerrController.js";

export const loginController = () => {
  const login = document.getElementById("form-login");

  login.addEventListener("submit", (event) => {
    event.preventDefault();

    const { email, password } = getLoginData(login);

    if (!isEmailValid(email)) {
      showLoginErrors({ email: "Formato de email no valido" });
    } else {
      submitLogin({ email, password });
    }
  });

  const submitLogin = async ({ email, password }) => {
    const spinnerWrapp = document.querySelector("#spinner-wrapper");
    showSpinner(spinnerWrapp);
    try {
      const jwt = await loginUser(email, password);
      hiddenSpinner(spinnerWrapp);
      showCreateSuccess("Login OK!");
      localStorage.setItem("token", jwt);
    } catch (err) {
      hiddenSpinner(spinnerWrapp);
      showLoginErrors({ error: err });
    }
  };

  const getLoginData = (loginForm) => {
    const formData = new FormData(loginForm);
    const email = formData.get("email");
    const password = formData.get("password");

    return {
      email: email,
      password: password,
    };
  };

  function isEmailValid(data) {
    const email = data;
    const emailRegExp = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
    );

    return emailRegExp.test(email);
  }

  function showLoginErrors(errors) {
    const notificationWrapper = document.querySelector("#notification-wrapper");
    showError(notificationWrapper, errors);

    setTimeout(() => {
      hiddenMessage(notificationWrapper);
    }, 1000);
  }

  function showCreateSuccess(message) {
    const notificationWrapper = document.querySelector("#notification-wrapper");
    showSuccess(notificationWrapper, message);

    setTimeout(() => {
      hiddenMessage(notificationWrapper);
      window.location.href = "./index.html";
    }, 1000);
  }
};
