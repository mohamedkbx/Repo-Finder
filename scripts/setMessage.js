import { messageElement } from "./elements";

export default function setMessage(message) {
  messageElement.textContent = message ? `*${message}` : "";
}
