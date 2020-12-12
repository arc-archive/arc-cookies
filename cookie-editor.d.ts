import { CookieEditorElement } from './src/CookieEditorElement';

declare global {
  interface HTMLElementTagNameMap {
    "cookie-editor": CookieEditorElement;
  }
}
