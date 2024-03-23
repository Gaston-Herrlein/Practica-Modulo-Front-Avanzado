import { createUser } from "./register-model.js";

export function registerController() {
  const register = document.getElementById("form-register");

  register.addEventListener("submit", (event) => {
    event.preventDefault();

    handleRegisterFormSubmit(register);
  });

  function handleRegisterFormSubmit(register) {
    let errors = [];

    if (!isEmailValid(register)) {
      errors.push("el email no tiene un formato correcto");
    }

    if (!arePasswordsEqual(register)) {
      errors.push("las contraseñas no son iguales");
    }

    showFormErrors(errors);

    if (errors.length === 0) {
      registerUser(register);
    }
  }

  function isEmailValid(signupForm) {
    const email = signupForm.querySelector("#in-email");
    const emailRegExp = new RegExp(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );

    return emailRegExp.test(email.value);
  }

  function arePasswordsEqual(signupForm) {
    const password = signupForm.querySelector("#in-psw");
    const passwordConfirmation = signupForm.querySelector("#confirm-psw");

    return password.value === passwordConfirmation.value;
  }

  function showFormErrors(errors) {
    console.log(errors);
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
