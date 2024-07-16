import javascriptLogo from "../javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "../counter.js";

export function HomeVite() {
  const element = document.createElement("div");

  const viteLink = document.createElement("a");
  viteLink.href = "https://vitejs.dev";
  viteLink.target = "_blank";
  const viteImg = document.createElement("img");
  viteImg.src = viteLogo;
  viteImg.className = "logo";
  viteImg.alt = "Vite logo";
  viteLink.appendChild(viteImg);

  const jsLink = document.createElement("a");
  jsLink.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";
  jsLink.target = "_blank";
  const jsImg = document.createElement("img");
  jsImg.src = javascriptLogo;
  jsImg.className = "logo vanilla";
  jsImg.alt = "JavaScript logo";
  jsLink.appendChild(jsImg);

  const cardDiv = document.createElement("div");
  cardDiv.className = "card";
  const counterButton = document.createElement("button");
  counterButton.id = "counter";
  counterButton.type = "button";
  cardDiv.appendChild(counterButton);

  const docsParagraph = document.createElement("p");
  docsParagraph.className = "read-the-docs";
  docsParagraph.textContent = "Click on the Vite logo to learn more";

  element.appendChild(viteLink);
  element.appendChild(jsLink);
  element.appendChild(cardDiv);
  element.appendChild(docsParagraph);

  // Appel de setupCounter avec le bouton counterButton directement
  setupCounter(counterButton);

  return element;
}
