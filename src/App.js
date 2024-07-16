import { HomeVite } from "./components/homeVite";

export function App() {
  const element = document.createElement("div");
  element.innerHTML = `
  <h1>Hello, Vite!</h1>
  `;
  element.appendChild(HomeVite());
  return element;
}
