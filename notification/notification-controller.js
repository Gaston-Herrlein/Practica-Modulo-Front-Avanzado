import { errorMessageView } from "./notification-view.js";

export function showError(node, notification) {
  node.innerHTML = errorMessageView(notification);
}

export function hiddenError(node) {
  node.innerHTML = "";
}
