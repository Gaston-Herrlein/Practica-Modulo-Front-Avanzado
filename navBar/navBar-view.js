export function buildnavBar(isLogin) {
  let navBar_Element = `
        <ul class="flex-row">
            <li id="register"><a href="register.html">Register</a></li>
            <li id="login"><a href="login.html">Sing In</a></li>
        </ul>
    `;
  if (isLogin) {
    navBar_Element = `
        <ul class="flex-row">
            <li id="closeSession"><a href="index.html">Close</a></li>
        </ul>
        `;
  }
  return navBar_Element;
}
