import { isLogin } from "../session/session-controller.js";
import { buildnavBar } from "./navBar-view.js";

/***
 * 1) Selecciono el nodo en el que quiero pintar mi html
 * 2) El usuario esta logueado o no? (tiene token JWT)
 * 3) Llamo a buildnavBar(bool) para construir el html que va dentro del nodo
 * 4) Inserto el html en el nono
 */
const navBar_Nodo = document.querySelector("#navBar-home");
const token = isLogin();

export function navBarController() {
  navBar_Nodo.innerHTML = buildnavBar(token);
}
