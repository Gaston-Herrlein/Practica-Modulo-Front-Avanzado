export function isLogin() {
  //¿Esta logeado?
  return window.localStorage.getItem("token") !== null;
}

export function token() {
  //devuelve el token
  return window.localStorage.getItem("token");
}
