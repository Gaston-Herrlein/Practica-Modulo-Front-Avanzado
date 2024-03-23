import { loginUser } from "./login-model.js";

export const loginController = () => {
  const login = document.getElementById("form-login");

  login.addEventListener("submit", (event) => {
    event.preventDefault();

    submitLogin(login);
  });

  const submitLogin = async (loginForm) => {
    const { email, password } = getLoginData(loginForm);
    try {
      const jwt = await loginUser(email, password);
      alert("login OK");
      localStorage.setItem("token", jwt);
      window.location = "./index.html";
    } catch (error) {
      alert(error);
    }
  };

  const getLoginData = (loginForm) => {
    const formData = new FormData(loginForm);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(loginForm);
    console.log(formData);
    console.log(email);
    console.log(password);

    return {
      email: email,
      password: password,
    };
  };
};
