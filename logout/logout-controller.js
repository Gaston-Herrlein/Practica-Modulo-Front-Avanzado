export function logOutController() {
  if (window.localStorage.getItem("token")) {
    window.localStorage.removeItem("token");
  }
}
