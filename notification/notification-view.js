export function errorMessageView(message) {
  return `
      <div class="notification error">
        <span>${adapterMessage(message)}</span>
      </div>
    `;
}

function adapterMessage(message) {
  let element = "";
  for (let key in message) {
    element += "<span>" + message[key] + "</span>" + "<br>";
  }
  return element;
}
