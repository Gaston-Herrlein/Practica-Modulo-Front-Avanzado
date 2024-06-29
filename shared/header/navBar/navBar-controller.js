import { isLogin } from "../../session/session-controller.js";
import { buildnavBar } from "./navBar-view.js";

export function navBarController() {
  const navBarNode = document.querySelector("#navBar-home");
  const token = isLogin();
  navBarNode.innerHTML = buildnavBar(token);
}
