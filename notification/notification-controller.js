import { errorMessageView, succesMessageView } from "./notification-view.js";

export function showError(node, notification) {
  node.innerHTML = errorMessageView(notification);
}

export function hiddenMessage(node) {
  node.innerHTML = "";
}

export function showSuccess(node, notification) {
  node.innerHTML = succesMessageView(notification);
}
